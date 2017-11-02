import Route from '@ember/routing/route';

import { inject } from '@ember/service';

export default Route.extend({

	recorder: inject(),

	init() {
		this._super(...arguments);
		let recorder = this.get('recorder');
		recorder.set('recordingTime', 5000);
	},

	setupController(controller) {
		this._super(...arguments);
		let recorder = this.get('recorder');
		controller.set('recorder', recorder);
	},

	actions: {
		async record() {
			let recorder = this.get('recorder');
			await recorder.record();

			let { base64, audioURL, blob } = await recorder.getAudio();
			console.log(audioURL, blob);
		},

		async play() {
			let recorder = this.get('recorder');
			recorder.play();
		},

		async stop() {
			let recorder = this.get('recorder');
			recorder.stopRecording();
			recorder.close();
		}
	}
});
