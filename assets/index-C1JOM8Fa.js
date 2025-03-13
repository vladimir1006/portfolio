import{createApp as nt}from"https://unpkg.com/vue@3/dist/vue.esm-browser.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&e(u)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const st=[],rt=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),D=Object.assign,y=Array.isArray,ot=t=>A(t)==="[object Map]",lt=t=>A(t)==="[object Set]",S=t=>typeof t=="function",h=t=>typeof t=="string",V=t=>typeof t=="symbol",w=t=>t!==null&&typeof t=="object",P=Object.prototype.toString,A=t=>P.call(t),it=t=>A(t)==="[object Object]";let F;const $=()=>F||(F=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function L(t){if(y(t)){const n={};for(let s=0;s<t.length;s++){const e=t[s],r=h(e)?ct(e):L(e);if(r)for(const o in r)n[o]=r[o]}return n}else if(h(t)||w(t))return t}const ut=/;(?![^(]*\))/g,at=/:([^]+)/,ft=/\/\*[^]*?\*\//g;function ct(t){const n={};return t.replace(ft,"").split(ut).forEach(s=>{if(s){const e=s.split(at);e.length>1&&(n[e[0].trim()]=e[1].trim())}}),n}function O(t){let n="";if(h(t))n=t;else if(y(t))for(let s=0;s<t.length;s++){const e=O(t[s]);e&&(n+=e+" ")}else if(w(t))for(const s in t)t[s]&&(n+=s+" ");return n.trim()}const Y=t=>!!(t&&t.__v_isRef===!0),W=t=>h(t)?t:t==null?"":y(t)||w(t)&&(t.toString===P||!S(t.toString))?Y(t)?W(t.value):JSON.stringify(t,q,2):String(t),q=(t,n)=>Y(n)?q(t,n.value):ot(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[e,r],o)=>(s[x(e,o)+" =>"]=r,s),{})}:lt(n)?{[`Set(${n.size})`]:[...n.values()].map(s=>x(s))}:V(n)?x(n):w(n)&&!y(n)&&!it(n)?String(n):n,x=(t,n="")=>{var s;return V(t)?`Symbol(${(s=t.description)!=null?s:n})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(V));function G(t){return t?!!t.__v_raw:!1}function mt(t){return t?t.__v_isRef===!0:!1}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let p=null,U=null;function N(t){const n=p;return p=t,U=t&&t.type.__scopeId||null,n}function c(t,n=p,s){if(!n||t._n)return t;const e=(...r)=>{e._d&&R(-1);const o=N(n);let u;try{u=t(...r)}finally{N(o),e._d&&R(1)}return u};return e._n=!0,e._c=!0,e._d=!0,e}const pt=t=>t.__isTeleport;function K(t,n){t.shapeFlag&6&&t.component?(t.transition=n,K(t.component.subTree,n)):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}$().requestIdleCallback;$().cancelIdleCallback;const gt=t=>!!t.type.__asyncLoader,dt=Symbol.for("v-ndc");function I(t,n,s={},e,r){if(p.ce||p.parent&&gt(p.parent)&&p.parent.ce)return n!=="default"&&(s.name=n),d(),B(_,null,[m("slot",s,e)],64);let o=t[n];o&&o._c&&(o._d=!1),d();const u=o&&J(o(s)),f=s.key||u&&u.key,a=B(_,{key:(f&&!V(f)?f:`_${n}`)+""},u||[],u&&t._===1?64:-2);return o&&o._c&&(o._d=!0),a}function J(t){return t.some(n=>tt(n)?!(n.type===Q||n.type===_&&!J(n.children)):!0)?t:null}const zt={},X=t=>Object.getPrototypeOf(t)===zt,ht=t=>t.__isSuspense,_=Symbol.for("v-fgt"),yt=Symbol.for("v-txt"),Q=Symbol.for("v-cmt"),M=[];let g=null;function d(t=!1){M.push(g=t?null:[])}function bt(){M.pop(),g=M[M.length-1]||null}let C=1;function R(t,n=!1){C+=t,t<0&&g&&n&&(g.hasOnce=!0)}function Z(t){return t.dynamicChildren=C>0?g||st:null,bt(),C>0&&g&&g.push(t),t}function z(t,n,s,e,r,o){return Z(l(t,n,s,e,r,o,!0))}function B(t,n,s,e,r){return Z(m(t,n,s,e,r,!0))}function tt(t){return t?t.__v_isVNode===!0:!1}const et=({key:t})=>t??null,k=({ref:t,ref_key:n,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?h(t)||mt(t)||S(t)?{i:p,r:t,k:n,f:!!s}:t:null);function l(t,n=null,s=null,e=0,r=null,o=t===_?0:1,u=!1,f=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&et(n),ref:n&&k(n),scopeId:U,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:e,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:p};return f?(E(a,s),o&128&&t.normalize(a)):s&&(a.shapeFlag|=h(s)?8:16),C>0&&!u&&g&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&g.push(a),a}const m=_t;function _t(t,n=null,s=null,e=0,r=null,o=!1){if((!t||t===dt)&&(t=Q),tt(t)){const f=T(t,n,!0);return s&&E(f,s),C>0&&!o&&g&&(f.shapeFlag&6?g[g.indexOf(t)]=f:g.push(f)),f.patchFlag=-2,f}if(Ct(t)&&(t=t.__vccOpts),n){n=wt(n);let{class:f,style:a}=n;f&&!h(f)&&(n.class=O(f)),w(a)&&(G(a)&&!y(a)&&(a=D({},a)),n.style=L(a))}const u=h(t)?1:ht(t)?128:pt(t)?64:w(t)?4:S(t)?2:0;return l(t,n,s,e,r,u,o,!0)}function wt(t){return t?G(t)||X(t)?D({},t):t:null}function T(t,n,s=!1,e=!1){const{props:r,ref:o,patchFlag:u,children:f,transition:a}=t,j=n?vt(r||{},n):r,H={__v_isVNode:!0,__v_skip:!0,type:t.type,props:j,key:j&&et(j),ref:n&&n.ref?s&&o?y(o)?o.concat(k(n)):[o,k(n)]:k(n):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:f,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==_?u===-1?16:u|16:u,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&T(t.ssContent),ssFallback:t.ssFallback&&T(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&e&&K(H,a.clone(H)),H}function i(t=" ",n=0){return m(yt,null,t,n)}function E(t,n){let s=0;const{shapeFlag:e}=t;if(n==null)n=null;else if(y(n))s=16;else if(typeof n=="object")if(e&65){const r=n.default;r&&(r._c&&(r._d=!1),E(t,r()),r._c&&(r._d=!0));return}else{s=32;const r=n._;!r&&!X(n)?n._ctx=p:r===3&&p&&(p.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else S(n)?(n={default:n,_ctx:p},s=32):(n=String(n),e&64?(s=16,n=[i(n)]):s=8);t.children=n,t.shapeFlag|=s}function vt(...t){const n={};for(let s=0;s<t.length;s++){const e=t[s];for(const r in e)if(r==="class")n.class!==e.class&&(n.class=O([n.class,e.class]));else if(r==="style")n.style=L([n.style,e.style]);else if(rt(r)){const o=n[r],u=e[r];u&&o!==u&&!(y(o)&&o.includes(u))&&(n[r]=o?[].concat(o,u):u)}else r!==""&&(n[r]=e[r])}return n}{const t=$(),n=(s,e)=>{let r;return(r=t[s])||(r=t[s]=[]),r.push(e),o=>{r.length>1?r.forEach(u=>u(o)):r[0](o)}};n("__VUE_INSTANCE_SETTERS__",s=>s),n("__VUE_SSR_SETTERS__",s=>s)}function Ct(t){return S(t)&&"__vccOpts"in t}const St="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e",b=(t,n)=>{const s=t.__vccOpts||t;for(const[e,r]of n)s[e]=r;return s},Mt={class:"greetings"},kt={class:"green"},Vt={__name:"HelloWorld",props:{msg:{type:String,required:!0}},setup(t){return(n,s)=>(d(),z("div",Mt,[l("h1",kt,W(t.msg),1),s[0]||(s[0]=l("h3",null,[i(" You’ve successfully created a project with "),l("a",{href:"https://vite.dev/",target:"_blank",rel:"noopener"},"Vite"),i(" + "),l("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue 3"),i(". ")],-1))]))}},jt=b(Vt,[["__scopeId","data-v-fcc5fe42"]]),Ht={},xt={class:"item"},It={class:"details"};function Tt(t,n){return d(),z("div",xt,[l("i",null,[I(t.$slots,"icon",{},void 0)]),l("div",It,[l("h3",null,[I(t.$slots,"heading",{},void 0)]),I(t.$slots,"default",{},void 0)])])}const v=b(Ht,[["render",Tt],["__scopeId","data-v-fd0742eb"]]),At={},$t={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"};function Lt(t,n){return d(),z("svg",$t,n[0]||(n[0]=[l("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1)]))}const Ot=b(At,[["render",Lt]]),Et={},Ft={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"};function Nt(t,n){return d(),z("svg",Ft,n[0]||(n[0]=[l("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1)]))}const Rt=b(Et,[["render",Nt]]),Bt={},Dt={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"};function Pt(t,n){return d(),z("svg",Dt,n[0]||(n[0]=[l("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1)]))}const Yt=b(Bt,[["render",Pt]]),Wt={},qt={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"};function Gt(t,n){return d(),z("svg",qt,n[0]||(n[0]=[l("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1)]))}const Ut=b(Wt,[["render",Gt]]),Kt={},Jt={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"};function Xt(t,n){return d(),z("svg",Jt,n[0]||(n[0]=[l("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1)]))}const Qt=b(Kt,[["render",Xt]]),Zt={__name:"TheWelcome",setup(t){const n=()=>fetch("/__open-in-editor?file=README.md");return(s,e)=>(d(),z(_,null,[m(v,null,{icon:c(()=>[m(Ot)]),heading:c(()=>e[0]||(e[0]=[i("Documentation")])),default:c(()=>[e[1]||(e[1]=i(" Vue’s ")),e[2]||(e[2]=l("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1)),e[3]||(e[3]=i(" provides you with all information you need to get started. "))]),_:1}),m(v,null,{icon:c(()=>[m(Rt)]),heading:c(()=>e[4]||(e[4]=[i("Tooling")])),default:c(()=>[e[6]||(e[6]=i(" This project is served and bundled with ")),e[7]||(e[7]=l("a",{href:"https://vite.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1)),e[8]||(e[8]=i(". The recommended IDE setup is ")),e[9]||(e[9]=l("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1)),e[10]||(e[10]=i(" + ")),e[11]||(e[11]=l("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1)),e[12]||(e[12]=i(". If you need to test your components and web pages, check out ")),e[13]||(e[13]=l("a",{href:"https://vitest.dev/",target:"_blank",rel:"noopener"},"Vitest",-1)),e[14]||(e[14]=i(" and ")),e[15]||(e[15]=l("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1)),e[16]||(e[16]=i(" / ")),e[17]||(e[17]=l("a",{href:"https://playwright.dev/",target:"_blank",rel:"noopener"},"Playwright",-1)),e[18]||(e[18]=i(". ")),e[19]||(e[19]=l("br",null,null,-1)),e[20]||(e[20]=i(" More instructions are available in ")),l("a",{href:"javascript:void(0)",onClick:n},e[5]||(e[5]=[l("code",null,"README.md",-1)])),e[21]||(e[21]=i(". "))]),_:1}),m(v,null,{icon:c(()=>[m(Yt)]),heading:c(()=>e[22]||(e[22]=[i("Ecosystem")])),default:c(()=>[e[23]||(e[23]=i(" Get official tools and libraries for your project: ")),e[24]||(e[24]=l("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1)),e[25]||(e[25]=i(", ")),e[26]||(e[26]=l("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1)),e[27]||(e[27]=i(", ")),e[28]||(e[28]=l("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1)),e[29]||(e[29]=i(", and ")),e[30]||(e[30]=l("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1)),e[31]||(e[31]=i(". If you need more resources, we suggest paying ")),e[32]||(e[32]=l("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1)),e[33]||(e[33]=i(" a visit. "))]),_:1}),m(v,null,{icon:c(()=>[m(Ut)]),heading:c(()=>e[34]||(e[34]=[i("Community")])),default:c(()=>[e[35]||(e[35]=i(" Got stuck? Ask your question on ")),e[36]||(e[36]=l("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1)),e[37]||(e[37]=i(" (our official Discord server), or ")),e[38]||(e[38]=l("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1)),e[39]||(e[39]=i(". You should also follow the official ")),e[40]||(e[40]=l("a",{href:"https://bsky.app/profile/vuejs.org",target:"_blank",rel:"noopener"},"@vuejs.org",-1)),e[41]||(e[41]=i(" Bluesky account or the ")),e[42]||(e[42]=l("a",{href:"https://x.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1)),e[43]||(e[43]=i(" X account for latest news in the Vue world. "))]),_:1}),m(v,null,{icon:c(()=>[m(Qt)]),heading:c(()=>e[44]||(e[44]=[i("Support Vue")])),default:c(()=>[e[45]||(e[45]=i(" As an independent project, Vue relies on community backing for its sustainability. You can help us by ")),e[46]||(e[46]=l("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1)),e[47]||(e[47]=i(". "))]),_:1})],64))}},t1={class:"wrapper"},e1={__name:"App",setup(t){return(n,s)=>(d(),z(_,null,[l("header",null,[s[0]||(s[0]=l("img",{alt:"Vue logo",class:"logo",src:St,width:"125",height:"125"},null,-1)),l("div",t1,[m(jt,{msg:"You did it!"})])]),l("main",null,[m(Zt)])],64))}},n1=b(e1,[["__scopeId","data-v-7f576311"]]);nt(n1).mount("#app");
