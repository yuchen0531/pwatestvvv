(function(e){function t(t){for(var a,c,l=t[0],u=t[1],i=t[2],s=0,b=[];s<l.length;s++)c=l[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(b.length)b.shift()();return n.push.apply(n,i||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},o={app:0},n=[];function c(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c2002408"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=o[e]=[t,a]}));t.push(r[2]=a);var n,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var i=new Error;n=function(t){u.onerror=u.onload=null,clearTimeout(s);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,r[1](i)}o[e]=void 0}};var s=setTimeout((function(){n({type:"timeout",target:u})}),12e4);u.onerror=u.onload=n,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/pwatest/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=i;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23"),o={id:"nav"},n=Object(a["g"])("Home"),c=Object(a["g"])(" | "),l=Object(a["g"])("About");function u(e,t){var r=Object(a["w"])("router-link"),u=Object(a["w"])("router-view");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["e"])("div",o,[Object(a["h"])(r,{to:"/"},{default:Object(a["B"])((function(){return[n]})),_:1}),c,Object(a["h"])(r,{to:"/about"},{default:Object(a["B"])((function(){return[l]})),_:1})]),Object(a["h"])(u)],64)}r("d400");var i=r("6b0d"),s=r.n(i);const f={},b=s()(f,[["render",u]]);var v=b,d=r("9483");Object(d["a"])("".concat("/pwatest/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7"),r("3ca3"),r("ddb0");var p=r("6c02"),h=r("cf05"),g=r.n(h),j={class:"home"},m=Object(a["e"])("img",{alt:"Vue logo",src:g.a},null,-1);function O(e,t,r,o,n,c){var l=Object(a["w"])("HelloWorld");return Object(a["q"])(),Object(a["d"])("div",j,[m,Object(a["h"])(l,{msg:"Welcome to Your Vue.js App"})])}var w={class:"hello"},k=Object(a["f"])('<p data-v-4f12c5b6> For a guide and recipes on how to configure / customize this project,<br data-v-4f12c5b6> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-4f12c5b6>vue-cli documentation</a>. </p><h3 data-v-4f12c5b6>Installed CLI Plugins</h3><ul data-v-4f12c5b6><li data-v-4f12c5b6><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-4f12c5b6>babel</a></li><li data-v-4f12c5b6><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener" data-v-4f12c5b6>pwa</a></li><li data-v-4f12c5b6><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-4f12c5b6>router</a></li><li data-v-4f12c5b6><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-4f12c5b6>vuex</a></li><li data-v-4f12c5b6><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-4f12c5b6>eslint</a></li></ul><h3 data-v-4f12c5b6>Essential Links</h3><ul data-v-4f12c5b6><li data-v-4f12c5b6><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-4f12c5b6>Core Docs</a></li><li data-v-4f12c5b6><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-4f12c5b6>Forum</a></li><li data-v-4f12c5b6><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-4f12c5b6>Community Chat</a></li><li data-v-4f12c5b6><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-4f12c5b6>Twitter</a></li><li data-v-4f12c5b6><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-4f12c5b6>News</a></li></ul><h3 data-v-4f12c5b6>Ecosystem</h3><ul data-v-4f12c5b6><li data-v-4f12c5b6><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-4f12c5b6>vue-router</a></li><li data-v-4f12c5b6><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-4f12c5b6>vuex</a></li><li data-v-4f12c5b6><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-4f12c5b6>vue-devtools</a></li><li data-v-4f12c5b6><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-4f12c5b6>vue-loader</a></li><li data-v-4f12c5b6><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-4f12c5b6>awesome-vue</a></li></ul>',7);function y(e,t,r,o,n,c){return Object(a["q"])(),Object(a["d"])("div",w,[Object(a["e"])("h1",null,Object(a["y"])(r.msg),1),k])}var _={name:"HelloWorld",props:{msg:String}};r("b5c8");const x=s()(_,[["render",y],["__scopeId","data-v-4f12c5b6"]]);var P=x,A={name:"Home",components:{HelloWorld:P}};const C=s()(A,[["render",O]]);var S=C,E=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],H=Object(p["a"])({history:Object(p["b"])("/pwatest/"),routes:E}),q=H,T=r("5502"),F=Object(T["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(v).use(F).use(q).mount("#app")},b5c8:function(e,t,r){"use strict";r("f803")},c810:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},d400:function(e,t,r){"use strict";r("c810")},f803:function(e,t,r){}});
//# sourceMappingURL=app.e22da128.js.map