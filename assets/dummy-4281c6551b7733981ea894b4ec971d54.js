"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0})
var i=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default});(0,r.default)(i,n.default.modulePrefix),e.default=i}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,i=t.default.exportApplicationGlobal
n="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default={name:"export-application-global",initialize:r}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
r.map(function(){}),e.default=r}),define("dummy/routes/application",["exports"],function(e){function t(e){return function(){var t=e.apply(this,arguments)
return new Promise(function(e,r){function n(i,o){try{var a=t[i](o),u=a.value}catch(e){return void r(e)}if(!a.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})
e(u)}return n("next")})}}Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.Route,n=Ember.inject.service
e.default=r.extend({recorder:n(),init:function(){this._super.apply(this,arguments),this.get("recorder").set("recordingTime",5e3)},setupController:function(e){this._super.apply(this,arguments)
var t=this.get("recorder")
e.set("recorder",t)},actions:{record:function(){var e=t(regeneratorRuntime.mark(function e(){var t
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(t=this.get("recorder")).record()
case 2:case"end":return e.stop()}},e,this)}))
return function(){return e.apply(this,arguments)}}(),play:function(){var e=t(regeneratorRuntime.mark(function e(){var t
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(t=this.get("recorder")).play()
case 2:case"end":return e.stop()}},e,this)}))
return function(){return e.apply(this,arguments)}}(),stop:function(){var e=t(regeneratorRuntime.mark(function e(){var t
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(t=this.get("recorder")).stopRecording(),t.close()
case 3:case"end":return e.stop()}},e,this)}))
return function(){return e.apply(this,arguments)}}()}})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/crypto",["exports","ember-cli-recorderjs/services/crypto"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/recorder",["exports","ember-cli-recorderjs/services/recorder"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"AwtAQcLe",block:'{"symbols":[],"statements":[[6,"h2"],[9,"id","title"],[7],[0,"Welcome to Ember"],[8],[0,"\\n\\n"],[6,"div"],[7],[0,"\\n\\tRecording\\n"],[4,"if",[[19,0,["recorder","isRecording"]]],null,{"statements":[[0,"\\t\\tStarted!!\\n"]],"parameters":[]},{"statements":[[0,"\\t\\tStopped\\n"]],"parameters":[]}],[8],[0,"\\n"],[6,"br"],[7],[8],[0,"\\n\\n"],[6,"button"],[3,"action",[[19,0,[]],"record"]],[7],[0,"Record"],[8],[0,"\\n"],[6,"button"],[3,"action",[[19,0,[]],"play"]],[7],[0,"Play"],[8],[0,"\\n"],[6,"button"],[3,"action",[[19,0,[]],"stop"]],[7],[0,"Stop"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(unescape(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})
