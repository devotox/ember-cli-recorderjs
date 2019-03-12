"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default});(0,r.default)(o,n.default.modulePrefix)
var i=o
e.default=i}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,o=t.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var n={name:"export-application-global",initialize:r}
e.default=n}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
r.map(function(){})
var n=r
e.default=n}),define("dummy/routes/application",["exports"],function(e){function t(e,t,r,n,o,i,a){try{var u=e[i](a),d=u.value}catch(l){return void r(l)}u.done?t(d):Promise.resolve(d).then(n,o)}function r(e){return function(){var r=this,n=arguments
return new Promise(function(o,i){var a=e.apply(r,n)
function u(e){t(a,o,i,u,d,"next",e)}function d(e){t(a,o,i,u,d,"throw",e)}u(void 0)})}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Route.extend({recorder:Ember.inject.service(),init:function(){this._super.apply(this,arguments),this.get("recorder").set("recordingTime",5e3)},setupController:function(e){this._super.apply(this,arguments)
var t=this.get("recorder")
e.set("recorder",t)},actions:{record:function(){var e=r(regeneratorRuntime.mark(function e(){var t,r,n,o,i
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.get("recorder"),e.next=3,t.start()
case 3:return e.next=5,t.getAudio()
case 5:r=e.sent,n=r.base64,o=r.audioURL,i=r.blob,console.log(o,i,n)
case 10:case"end":return e.stop()}},e,this)}))
return function(){return e.apply(this,arguments)}}(),play:function(){var e=r(regeneratorRuntime.mark(function e(){var t
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.get("recorder"),e.next=3,t.play()
case 3:case"end":return e.stop()}},e,this)}))
return function(){return e.apply(this,arguments)}}(),stop:function(){var e=r(regeneratorRuntime.mark(function e(){var t
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.get("recorder"),e.next=3,t.stop()
case 3:return e.next=5,t.close()
case 5:case"end":return e.stop()}},e,this)}))
return function(){return e.apply(this,arguments)}}()}})
e.default=n}),define("dummy/services/recorder",["exports","ember-cli-recorderjs/services/recorder"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"Q7KmHYNn",block:'{"symbols":[],"statements":[[7,"h2"],[11,"id","title"],[9],[0,"Welcome to Ember"],[10],[0,"\\n\\n"],[7,"div"],[9],[0,"\\n  Recording\\n"],[4,"if",[[23,["recorder","isRecording"]]],null,{"statements":[[0,"    Started!!\\n"]],"parameters":[]},{"statements":[[0,"    Stopped\\n"]],"parameters":[]}],[10],[0,"\\n"],[7,"br"],[9],[10],[0,"\\n\\n"],[7,"button"],[9],[0,"Record"],[3,"action",[[22,0,[]],"record"]],[10],[0,"\\n"],[7,"button"],[9],[0,"Play"],[3,"action",[[22,0,[]],"play"]],[10],[0,"\\n"],[7,"button"],[9],[0,"Stop"],[3,"action",[[22,0,[]],"stop"]],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})
e.default=t}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})
