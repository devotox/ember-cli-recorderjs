import $ from 'jquery';

import Recorder from 'Recorder';

import Service from '@ember/service';

import { later, cancel } from '@ember/runloop';

const {
	URL,
	Blob,
	Promise,
	navigator,
	FileReader,
	AudioContext
} = window;


const crypto = {
	createURL(blob) {
		return URL.createObjectURL(blob);
	},
	fromBlob(blob, type = 'text') {
		let func = type === 'data' ? 'readAsDataURL' : 'readAsText';

		return new Promise((resolve, reject) => {
			let reader = new FileReader();

			reader[func](blob);
			reader.onerror = (error) => reject(error);
			reader.onload = () => resolve(reader.result);
		});
	},
	toBlob(dataURI) {
		let { buffer, mimeString } = this.toArrayBuffer(dataURI);

		// write the ArrayBuffer to a blob, and you're done
		return new Blob([buffer], { type: mimeString });
	}
};

export default Service.extend({

	recorder: null,

	isRecording: false,

	audioTimeout: null,

	audioContext: null,

	recordingTime: 5000,

	init() {
		this._super(...arguments);
		return this.setup();
	},

	async setup() {
		let recorder = this.get('recorder');
		let audioContext = this.get('audioContext');

		return audioContext && recorder
			|| await new Promise((resolve, reject) => {
			return navigator.getUserMedia ? navigator.getUserMedia(
				{ audio: true },
				(stream) => { resolve(this.createNewRecorder(stream)); },
				function(e) { reject(e); }
			) : reject(new Error('No Get User Media API available.'));
		});
	},

	async createNewRecorder(stream) {
		let audioContext = this.get('audioContext')
			|| this.set('audioContext', new AudioContext());

		let input = audioContext.createMediaStreamSource(stream);
		let recorder = new Recorder(input);
		this.set('recorder', recorder);
		return recorder;
	},

	async stopRecording() {
		let recorder = this.get('recorder');
		this.set('rejectPromise', null);
		this.set('audioTimeout', null);
		this.set('isRecording', false);
		recorder.stop();
	},

	async startRecording() {
		let recorder = this.get('recorder');
		this.set('isRecording', true);
		recorder.record();
	},

	async record() {
		this.reset();

		try {
			await this.setup();
		} catch(e) {
			throw e;
		}

		let recordingTime = this.get('recordingTime');
		this.startRecording();

		return recordingTime
			&& new Promise((resolve, reject) => {
				let finish = () => resolve(this.stopRecording());
				let audioTimeout = later((finish), recordingTime);
				this.set('audioTimeout', audioTimeout);
				this.set('rejectPromise', reject);
			});
	},

	async getAudio() {
		let recorder = this.get('recorder');
		if(!recorder) { throw new Error('Recorder not initialized'); }

		return await new Promise((resolve) => {
			recorder.exportWAV((blob) => {
				let audioURL = crypto.createURL(blob);
				crypto.fromBlob(blob, 'data')
					.then((base64) => {
						resolve({ blob, base64, audioURL });
					});
			});
		});
	},

	async play() {
		let { audioURL } = await this.getAudio();

		$('#audio-playback').remove();
		let $audio = $('<audio/>', { id: 'audio-playback', autoplay: true });
		let $source = $('<source/>', { type: 'audio/wav' });

		$source.attr('src', audioURL);
		$audio.append($source).appendTo('body');
		$audio.bind('ended', () => $audio.remove());
	},

	async reset() {
		this.clear();
		$('#audio-playback').remove();
		this.set('isRecording', false);

		let audioTimeout = this.get('audioTimeout');
		let rejectPromise = this.get('rejectPromise');

		audioTimeout && cancel(audioTimeout);
		rejectPromise && rejectPromise(new Error('Recorder Reset'));
	},

	async clear() {
		let recorder = this.get('recorder');
		recorder && recorder.clear();
		recorder && recorder.stop();
	},

	async close() {
		let audioContext = this.get('audioContext');
		audioContext && await audioContext.close();
		this.set('audioContext', null);
	}
});
