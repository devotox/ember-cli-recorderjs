'use strict';

module.exports = {
    name: 'ember-cli-recorderjs',

    options: {
		'ember-cli-babel': {
			compileModules: true,
			includePolyfill: true,
			disableDebugTooling: true
		}
    },

    included() {
        this._super.included.apply(this, arguments);

        this.import('vendor/recorder.js');
        this.import('vendor/shims/recorder.js');
    }
};