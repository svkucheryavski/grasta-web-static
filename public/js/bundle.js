var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function i(){return Object.create(null)}function s(t){t.forEach(o)}function l(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}const f="undefined"!=typeof window;let u=f?()=>window.performance.now():()=>Date.now(),d=f?t=>requestAnimationFrame(t):t;const p=new Set;function m(t){p.forEach((e=>{e.c(t)||(p.delete(e),e.f())})),0!==p.size&&d(m)}function h(t){let e;return 0===p.size&&d(m),{promise:new Promise((n=>{p.add(e={c:t,f:n})})),abort(){p.delete(e)}}}function $(t,e){t.appendChild(e)}function g(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function v(t){const e=_("style");return function(t,e){$(t.head||t,e)}(g(t),e),e}function y(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function w(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function x(){return k(" ")}function C(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function q(t,e){t.value=null==e?"":e}function H(t,e,n){t.classList[n?"add":"remove"](e)}function L(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}const N=new Set;let O,S=0;function T(t,e,n,o,i,s,l,r=0){const a=16.666/o;let c="{\n";for(let t=0;t<=1;t+=a){const o=e+(n-e)*s(t);c+=100*t+`%{${l(o,1-o)}}\n`}const f=c+`100% {${l(n,1-n)}}\n}`,u=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(f)}_${r}`,d=g(t);N.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=v(t).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[u]||(m[u]=!0,p.insertRule(`@keyframes ${u} ${f}`,p.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${u} ${o}ms linear ${i}ms 1 both`,S+=1,u}function D(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-o.length;i&&(t.style.animation=o.join(", "),S-=i,S||d((()=>{S||(N.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),N.clear())})))}function I(t){O=t}function R(){if(!O)throw new Error("Function called outside component initialization");return O}function P(){const t=R();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const i=L(e,n);o.slice().forEach((e=>{e.call(t,i)}))}}}function j(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const F=[],z=[],B=[],M=[],Q=Promise.resolve();let V=!1;function W(t){B.push(t)}let G=!1;const K=new Set;function X(){if(!G){G=!0;do{for(let t=0;t<F.length;t+=1){const e=F[t];I(e),Y(e.$$)}for(I(null),F.length=0;z.length;)z.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];K.has(e)||(K.add(e),e())}B.length=0}while(F.length);for(;M.length;)M.pop()();V=!1,G=!1,K.clear()}}function Y(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}let J;function U(){return J||(J=Promise.resolve(),J.then((()=>{J=null}))),J}function Z(t,e,n){t.dispatchEvent(L(`${e?"intro":"outro"}${n}`))}const tt=new Set;let et;function nt(){et={r:0,c:[],p:et}}function ot(){et.r||s(et.c),et=et.p}function it(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function st(t,e,n,o){if(t&&t.o){if(tt.has(t))return;tt.add(t),et.c.push((()=>{tt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const lt={duration:0};function rt(n,o,i){let s,r,a=o(n,i),c=!1,f=0;function d(){s&&D(n,s)}function p(){const{delay:o=0,duration:i=300,easing:l=e,tick:p=t,css:m}=a||lt;m&&(s=T(n,0,1,i,o,l,m,f++)),p(0,1);const $=u()+o,g=$+i;r&&r.abort(),c=!0,W((()=>Z(n,!0,"start"))),r=h((t=>{if(c){if(t>=g)return p(1,0),Z(n,!0,"end"),d(),c=!1;if(t>=$){const e=l((t-$)/i);p(e,1-e)}}return c}))}let m=!1;return{start(){m||(m=!0,D(n),l(a)?(a=a(),U().then(p)):p())},invalidate(){m=!1},end(){c&&(d(),c=!1)}}}function at(n,o,i){let r,a=o(n,i),c=!0;const f=et;function d(){const{delay:o=0,duration:i=300,easing:l=e,tick:d=t,css:p}=a||lt;p&&(r=T(n,1,0,i,o,l,p));const m=u()+o,$=m+i;W((()=>Z(n,!1,"start"))),h((t=>{if(c){if(t>=$)return d(0,1),Z(n,!1,"end"),--f.r||s(f.c),!1;if(t>=m){const e=l((t-m)/i);d(1-e,e)}}return c}))}return f.r+=1,l(a)?U().then((()=>{a=a(),d()})):d(),{end(t){t&&a.tick&&a.tick(1,0),c&&(r&&D(n,r),c=!1)}}}function ct(t,e){const n={},o={},i={$$scope:1};let s=t.length;for(;s--;){const l=t[s],r=e[s];if(r){for(const t in l)t in r||(o[t]=1);for(const t in r)i[t]||(n[t]=r[t],i[t]=1);t[s]=r}else for(const t in l)i[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function ft(t){return"object"==typeof t&&null!==t?t:{}}function ut(t){t&&t.c()}function dt(t,e,n,i){const{fragment:r,on_mount:a,on_destroy:c,after_update:f}=t.$$;r&&r.m(e,n),i||W((()=>{const e=a.map(o).filter(l);c?c.push(...e):s(e),t.$$.on_mount=[]})),f.forEach(W)}function pt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){-1===t.$$.dirty[0]&&(F.push(t),V||(V=!0,Q.then(X)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ht(e,n,o,l,r,a,c,f=[-1]){const u=O;I(e);const d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:r,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:i(),dirty:f,skip_bound:!1,root:n.target||u.$$.root};c&&c(d.root);let p=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return d.ctx&&r(d.ctx[t],d.ctx[t]=i)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](i),p&&mt(e,t)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!l&&l(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(b)}else d.fragment&&d.fragment.c();n.intro&&it(e.$$.fragment),dt(e,n.target,n.anchor,n.customElement),X()}I(u)}class $t{$destroy(){pt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function gt(t){let e,n;return{c(){e=_("a"),n=k("Video-lesson"),E(e,"title","Link to YouTube video"),E(e,"href",t[3]),E(e,"class","svelte-flsgey")},m(t,o){y(t,e,o),$(e,n)},p(t,n){8&n&&E(e,"href",t[3])},d(t){t&&b(e)}}}function vt(e){let n,o,i,s,l,r,a,c,f,u,d,p,m,h,g,v,w,q,H,L,N=e[3]&&gt(e);return{c(){n=_("div"),o=_("span"),i=k(e[0]),s=x(),l=_("div"),r=_("h3"),a=k(e[1]),c=x(),f=_("p"),u=k(e[2]),d=x(),p=_("div"),m=_("span"),m.textContent="Try",h=x(),g=_("a"),v=k("Download"),q=x(),N&&N.c(),E(o,"class","app-id svelte-flsgey"),E(r,"class","svelte-flsgey"),E(f,"class","svelte-flsgey"),E(m,"title","Run demo"),E(m,"class","svelte-flsgey"),E(g,"title","Download"),E(g,"href",w="/apps/"+e[0]+".zip"),E(g,"class","svelte-flsgey"),E(p,"class","toolbar svelte-flsgey"),E(l,"class","app-info svelte-flsgey"),E(n,"class","app-details svelte-flsgey")},m(t,b){y(t,n,b),$(n,o),$(o,i),$(n,s),$(n,l),$(l,r),$(r,a),$(l,c),$(l,f),$(f,u),$(l,d),$(l,p),$(p,m),$(p,h),$(p,g),$(g,v),$(p,q),N&&N.m(p,null),H||(L=C(m,"click",e[5]),H=!0)},p(t,[e]){1&e&&A(i,t[0]),2&e&&A(a,t[1]),4&e&&A(u,t[2]),1&e&&w!==(w="/apps/"+t[0]+".zip")&&E(g,"href",w),t[3]?N?N.p(t,e):(N=gt(t),N.c(),N.m(p,null)):N&&(N.d(1),N=null)},i:t,o:t,d(t){t&&b(n),N&&N.d(),H=!1,L()}}}function yt(t,e,n){let{id:o}=e,{title:i}=e,{info:s}=e,{video:l}=e;const r=P();return t.$$set=t=>{"id"in t&&n(0,o=t.id),"title"in t&&n(1,i=t.title),"info"in t&&n(2,s=t.info),"video"in t&&n(3,l=t.video)},[o,i,s,l,r,()=>r("showdemo",o)]}class bt extends $t{constructor(t){super(),ht(this,t,yt,vt,r,{id:0,title:1,info:2,video:3})}}function wt(t,e,n){const o=t.slice();return o[3]=e[n],o}function _t(t){let e;return{c(){e=_("p"),e.textContent="No apps available in this block.",E(e,"class","svelte-i7rmfd")},m(t,n){y(t,e,n)},d(t){t&&b(e)}}}function kt(t){let e,o,i;const s=[t[3]];let l={};for(let t=0;t<s.length;t+=1)l=n(l,s[t]);return o=new bt({props:l}),o.$on("showdemo",t[2]),{c(){e=_("li"),ut(o.$$.fragment),E(e,"class","svelte-i7rmfd")},m(t,n){y(t,e,n),dt(o,e,null),i=!0},p(t,e){const n=2&e?ct(s,[ft(t[3])]):{};o.$set(n)},i(t){i||(it(o.$$.fragment,t),i=!0)},o(t){st(o.$$.fragment,t),i=!1},d(t){t&&b(e),pt(o)}}}function xt(t){let e,n,o,i,s,l,r=t[1],a=[];for(let e=0;e<r.length;e+=1)a[e]=kt(wt(t,r,e));const c=t=>st(a[t],1,1,(()=>{a[t]=null}));let f=null;return r.length||(f=_t()),{c(){e=_("article"),n=_("h2"),o=k(t[0]),i=x(),s=_("ul");for(let t=0;t<a.length;t+=1)a[t].c();f&&f.c(),E(n,"class","svelte-i7rmfd"),E(s,"class","svelte-i7rmfd"),E(e,"class","app-block svelte-i7rmfd")},m(t,r){y(t,e,r),$(e,n),$(n,o),$(e,i),$(e,s);for(let t=0;t<a.length;t+=1)a[t].m(s,null);f&&f.m(s,null),l=!0},p(t,[e]){if((!l||1&e)&&A(o,t[0]),2&e){let n;for(r=t[1],n=0;n<r.length;n+=1){const o=wt(t,r,n);a[n]?(a[n].p(o,e),it(a[n],1)):(a[n]=kt(o),a[n].c(),it(a[n],1),a[n].m(s,null))}for(nt(),n=r.length;n<a.length;n+=1)c(n);ot(),r.length?f&&(f.d(1),f=null):f||(f=_t(),f.c(),f.m(s,null))}},i(t){if(!l){for(let t=0;t<r.length;t+=1)it(a[t]);l=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)st(a[t]);l=!1},d(t){t&&b(e),w(a,t),f&&f.d()}}}function Ct(t,e,n){let{title:o}=e,{apps:i}=e;return t.$$set=t=>{"title"in t&&n(0,o=t.title),"apps"in t&&n(1,i=t.apps)},[o,i,function(e){j.call(this,t,e)}]}class Et extends $t{constructor(t){super(),ht(this,t,Ct,xt,r,{title:0,apps:1})}}function At(t){const e=t-1;return e*e*e+1}function qt(t,{delay:n=0,duration:o=400,easing:i=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:i,css:t=>"opacity: "+t*s}}function Ht(t,{delay:e=0,duration:n=400,easing:o=At,x:i=0,y:s=0,opacity:l=0}={}){const r=getComputedStyle(t),a=+r.opacity,c="none"===r.transform?"":r.transform,f=a*(1-l);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*i}px, ${(1-t)*s}px);\n\t\t\topacity: ${a-f*e}`}}function Lt(e){let n,o,i;return{c(){n=_("iframe"),o=k("Loading"),E(n,"title",e[0]),c(n.src,i=e[1])||E(n,"src",i),E(n,"width","100%"),E(n,"height","100%"),E(n,"class","svelte-1tc7xux")},m(t,e){y(t,n,e),$(n,o)},p(t,[e]){1&e&&E(n,"title",t[0]),2&e&&!c(n.src,i=t[1])&&E(n,"src",i)},i:t,o:t,d(t){t&&b(n)}}}function Nt(t,e,n){let{id:o}=e,i="";var s;return s=()=>{const t="/apps/"+o+"/index.html",e=new XMLHttpRequest;e.open("GET",t,!0),e.onreadystatechange=function(){4===e.readyState&&(console.log(e),404===e.status?n(1,i=""):n(1,i=t))},e.send()},R().$$.on_mount.push(s),t.$$set=t=>{"id"in t&&n(0,o=t.id)},[o,i]}class Ot extends $t{constructor(t){super(),ht(this,t,Nt,Lt,r,{id:0})}}function St(t){let e,n,o,i,l,r,a,c,f,u,d,p,m,h,g;return c=new Ot({props:{id:t[0]}}),{c(){e=_("div"),n=_("article"),o=_("header"),i=_("h2"),l=x(),r=_("section"),a=_("div"),ut(c.$$.fragment),E(i,"class","svelte-qa6b0h"),E(o,"class","modal-header svelte-qa6b0h"),E(a,"class","app-container svelte-qa6b0h"),E(r,"class","modal-content svelte-qa6b0h"),E(n,"class","modal svelte-qa6b0h"),E(e,"class","backstage svelte-qa6b0h")},m(s,f){y(s,e,f),$(e,n),$(n,o),$(o,i),i.innerHTML=t[2],$(n,l),$(n,r),$(r,a),dt(c,a,null),m=!0,h||(g=[C(n,"click",null),C(e,"click",t[3])],h=!0)},p(t,[e]){const n={};1&e&&(n.id=t[0]),c.$set(n)},i(t){m||(it(c.$$.fragment,t),W((()=>{u&&u.end(1),f=rt(n,Ht,{}),f.start()})),W((()=>{p&&p.end(1),d=rt(e,qt,{}),d.start()})),m=!0)},o(t){st(c.$$.fragment,t),f&&f.invalidate(),u=at(n,Ht,{}),d&&d.invalidate(),p=at(e,qt,{}),m=!1},d(t){t&&b(e),pt(c),t&&u&&u.end(),t&&p&&p.end(),h=!1,s(g)}}}function Tt(t,e,n){const o=P();let{id:i}=e,s=i;return t.$$set=t=>{"id"in t&&n(0,i=t.id)},[i,o,s,()=>o("close")]}class Dt extends $t{constructor(t){super(),ht(this,t,Tt,St,r,{id:0})}}const It=[{title:"Descriptive statistics and plots",apps:[{id:"asta-b101",title:"Quantiles, quartiles, percentiles",info:"How to compute simple statistics for a sample."},{id:"asta-b102",title:"Samples and populations",info:"How a sample taken from a population looks like."},{id:"asta-b103",title:"PDF, CDF and ICDF",info:"Main functions for theoretical distributions."},{id:"asta-b104",title:"Quantile-quantile plot",info:"How to create and interpret a QQ-plot."}]},{title:"Confidence intervals",apps:[{id:"asta-b201",title:"Population based CI for proportion",info:"Confidence interval for proportion, based on population parameter."},{id:"asta-b202",title:"Sample based CI for proportion",info:"Confidence interval for proportion, based on sample statistic."},{id:"asta-b203",title:"Population based CI for mean",info:"Confidence interval for mean, based on population parameter."},{id:"asta-b204",title:"Sample based CI for mean",info:"Confidence interval for mean, based on sample statistics."}]},{title:"Hypothesis testing",apps:[{id:"asta-b205",title:"What p-value is?",info:"Explanation of p-value using coin experiment."},{id:"asta-b206",title:"Test for sample proportion",info:"How test for proportion works."},{id:"asta-b207",title:"One sample t-test",info:"Test for mean of one sample."},{id:"asta-b208",title:"Power of test and Type II error",info:"How often you will be able to reject wrong H0."}]},{title:"Comparing means",apps:[{id:"asta-b209",title:"Two sample t-test",info:"How to compare mean of two samples.",video:"https://www.youtube.com/watch?v=aircAruvnKk"},{id:"asta-b210",title:"Multiple comparison and Bonferroni correction",info:"What if we apply t-test to more than 2 groups."},{id:"asta-b211",title:"One-way ANOVA (simplified)",info:"How Analysis of Variance works for one factor."},{id:"asta-b212",title:"One-way ANOVA (full)",info:"A more detailed app."}]}];function Rt(t,e,n){const o=t.slice();return o[11]=e[n],o}function Pt(t){let e,n;return e=new Dt({props:{id:t[3]}}),e.$on("close",t[6]),{c(){ut(e.$$.fragment)},m(t,o){dt(e,t,o),n=!0},p(t,n){const o={};8&n&&(o.id=t[3]),e.$set(o)},i(t){n||(it(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){pt(e,t)}}}function jt(t){let e,o;const i=[t[11]];let s={};for(let t=0;t<i.length;t+=1)s=n(s,i[t]);return e=new Et({props:s}),e.$on("showdemo",t[5]),{c(){ut(e.$$.fragment)},m(t,n){dt(e,t,n),o=!0},p(t,n){const o=2&n?ct(i,[ft(t[11])]):{};e.$set(o)},i(t){o||(it(e.$$.fragment,t),o=!0)},o(t){st(e.$$.fragment,t),o=!1},d(t){pt(e,t)}}}function Ft(t){let e,n,o,i,l,r,a,c,f,u,d,p,m,h=t[2]&&t[3]&&Pt(t),g=t[1].filter(zt),v=[];for(let e=0;e<g.length;e+=1)v[e]=jt(Rt(t,g,e));const L=t=>st(v[t],1,1,(()=>{v[t]=null}));return{c(){h&&h.c(),e=x(),n=_("div"),o=_("input"),i=x(),l=_("button"),l.textContent="×",r=x(),a=_("span"),c=k(t[4]),f=x();for(let t=0;t<v.length;t+=1)v[t].c();u=k(""),E(o,"placeholder","Enter a single keyword (e.g. interval)"),E(o,"class","svelte-12lrilt"),E(l,"class","svelte-12lrilt"),H(l,"hidden",t[0].length<1),E(a,"class","svelte-12lrilt"),E(n,"class","search-block svelte-12lrilt")},m(s,g){h&&h.m(s,g),y(s,e,g),y(s,n,g),$(n,o),q(o,t[0]),$(n,i),$(n,l),$(n,r),$(n,a),$(a,c),y(s,f,g);for(let t=0;t<v.length;t+=1)v[t].m(s,g);y(s,u,g),d=!0,p||(m=[C(o,"keydown",t[7]),C(o,"input",t[9]),C(l,"click",t[10])],p=!0)},p(t,[n]){if(t[2]&&t[3]?h?(h.p(t,n),12&n&&it(h,1)):(h=Pt(t),h.c(),it(h,1),h.m(e.parentNode,e)):h&&(nt(),st(h,1,1,(()=>{h=null})),ot()),1&n&&o.value!==t[0]&&q(o,t[0]),1&n&&H(l,"hidden",t[0].length<1),(!d||16&n)&&A(c,t[4]),34&n){let e;for(g=t[1].filter(zt),e=0;e<g.length;e+=1){const o=Rt(t,g,e);v[e]?(v[e].p(o,n),it(v[e],1)):(v[e]=jt(o),v[e].c(),it(v[e],1),v[e].m(u.parentNode,u))}for(nt(),e=g.length;e<v.length;e+=1)L(e);ot()}},i(t){if(!d){it(h);for(let t=0;t<g.length;t+=1)it(v[t]);d=!0}},o(t){st(h),v=v.filter(Boolean);for(let t=0;t<v.length;t+=1)st(v[t]);d=!1},d(t){h&&h.d(t),t&&b(e),t&&b(n),t&&b(f),w(v,t),t&&b(u),p=!1,s(m)}}}const zt=t=>t.apps.length>0;function Bt(t,e,n){let o,i,s,l,r=!1,a="";function c(t){void 0!==t&&"Escape"!==t.key||n(0,a="")}return t.$$.update=()=>{1&t.$$.dirty&&n(1,o=a.length>1?It.map((t=>({title:t.title,apps:t.apps.filter((t=>t.title.toLowerCase().search(a.toLowerCase())>=0|t.info.toLowerCase().search(a.toLowerCase())>=0))}))):It),2&t.$$.dirty&&n(8,i=o.reduce(((t,e)=>parseInt(t)+e.apps.length),0)),257&t.$$.dirty&&n(4,s=a.length>0?`Found ${i} app${i>1?"s":""}`:`${i} apps in the list.`)},[a,o,r,l,s,function(t){n(3,l=t.detail),n(2,r=!0)},function(t){n(2,r=!1),n(3,l=void 0)},c,i,function(){a=this.value,n(0,a)},()=>c(void 0)]}return new class extends $t{constructor(t){super(),ht(this,t,Bt,Ft,r,{})}}({target:document.getElementById("app-list")})}();
//# sourceMappingURL=bundle.js.map
