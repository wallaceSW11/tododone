if(!self.define){let e,o={};const n=(n,s)=>(n=new URL(n+".js",s).href,o[n]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=o,document.head.appendChild(e)}else e=n,importScripts(n),o()})).then((()=>{let e=o[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(o[t])return;let r={};const d=e=>n(e,t),l={module:{uri:t},exports:r,require:d};o[t]=Promise.all(s.map((e=>l[e]||d(e)))).then((e=>(i(...e),r)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mytasks"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/tododone/css/app.eeb3f48a.css",revision:null},{url:"/tododone/css/chunk-vendors.933aee8a.css",revision:null},{url:"/tododone/img/nothing-to-do.334bf4fe.gif",revision:null},{url:"/tododone/index.html",revision:"80e9f9219b8a13d70f4345203589da87"},{url:"/tododone/js/app.c7f0ddd9.js",revision:null},{url:"/tododone/js/chunk-vendors.8f9b7bca.js",revision:null},{url:"/tododone/manifest.json",revision:"46d388f23528ec0e59eaab3b91818f73"},{url:"/tododone/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
