import{createApp as Nt}from"https://unpkg.com/vue@3/dist/vue.esm-browser.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Kt(t){const e=Object.create(null);for(const s of t.split(","))e[s]=1;return s=>s in e}const vt=[],$t=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),st=Object.assign,Lt=Object.prototype.hasOwnProperty,Q=(t,e)=>Lt.call(t,e),p=Array.isArray,F=t=>D(t)==="[object Map]",Vt=t=>D(t)==="[object Set]",v=t=>typeof t=="function",w=t=>typeof t=="string",P=t=>typeof t=="symbol",S=t=>t!==null&&typeof t=="object",pt=Object.prototype.toString,D=t=>pt.call(t),zt=t=>D(t).slice(8,-1),Wt=t=>D(t)==="[object Object]",rt=t=>w(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,N=(t,e)=>!Object.is(t,e);let dt;const it=()=>dt||(dt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ot(t){if(p(t)){const e={};for(let s=0;s<t.length;s++){const i=t[s],n=w(i)?Yt(i):ot(i);if(n)for(const r in n)e[r]=n[r]}return e}else if(w(t)||S(t))return t}const Bt=/;(?![^(]*\))/g,Ht=/:([^]+)/,Dt=/\/\*[^]*?\*\//g;function Yt(t){const e={};return t.replace(Dt,"").split(Bt).forEach(s=>{if(s){const i=s.split(Ht);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ct(t){let e="";if(w(t))e=t;else if(p(t))for(let s=0;s<t.length;s++){const i=ct(t[s]);i&&(e+=i+" ")}else if(S(t))for(const s in t)t[s]&&(e+=s+" ");return e.trim()}const ht=t=>!!(t&&t.__v_isRef===!0),mt=t=>w(t)?t:t==null?"":p(t)||S(t)&&(t.toString===pt||!v(t.toString))?ht(t)?mt(t.value):JSON.stringify(t,gt,2):String(t),gt=(t,e)=>ht(e)?gt(t,e.value):F(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((s,[i,n],r)=>(s[G(i,r)+" =>"]=n,s),{})}:Vt(e)?{[`Set(${e.size})`]:[...e.values()].map(s=>G(s))}:P(e)?G(e):S(e)&&!p(e)&&!Wt(e)?String(e):e,G=(t,e="")=>{var s;return P(t)?`Symbol(${(s=t.description)!=null?s:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qt,bt=0,U;function lt(){bt++}function at(){if(--bt>0)return;let t;for(;U;){let e=U;for(U=void 0;e;){const s=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=s}}if(t)throw t}let B=!0;const St=[];function Gt(){St.push(B),B=!1}function Ut(){const t=St.pop();B=t===void 0?!0:t}class wt{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){}trigger(e){this.version++,this.notify(e)}notify(e){lt();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{at()}}}const Z=new WeakMap,C=Symbol(""),k=Symbol(""),K=Symbol("");function h(t,e,s){if(B&&qt){let i=Z.get(t);i||Z.set(t,i=new Map);let n=i.get(s);n||(i.set(s,n=new wt),n.map=i,n.key=s),n.track()}}function O(t,e,s,i,n,r){const c=Z.get(t);if(!c)return;const o=l=>{l&&l.trigger()};if(lt(),e==="clear")c.forEach(o);else{const l=p(t),a=l&&rt(s);if(l&&s==="length"){const f=Number(i);c.forEach((_,m)=>{(m==="length"||m===K||!P(m)&&m>=f)&&o(_)})}else switch((s!==void 0||c.has(void 0))&&o(c.get(s)),a&&o(c.get(K)),e){case"add":l?a&&o(c.get("length")):(o(c.get(C)),F(t)&&o(c.get(k)));break;case"delete":l||(o(c.get(C)),F(t)&&o(c.get(k)));break;case"set":F(t)&&o(c.get(C));break}}at()}function E(t){const e=u(t);return e===t?e:(h(e,"iterate",K),R(t)?e:e.map(d))}function Y(t){return h(t=u(t),"iterate",K),t}const Jt={__proto__:null,[Symbol.iterator](){return J(this,Symbol.iterator,d)},concat(...t){return E(this).concat(...t.map(e=>p(e)?E(e):e))},entries(){return J(this,"entries",t=>(t[1]=d(t[1]),t))},every(t,e){return y(this,"every",t,e,void 0,arguments)},filter(t,e){return y(this,"filter",t,e,s=>s.map(d),arguments)},find(t,e){return y(this,"find",t,e,d,arguments)},findIndex(t,e){return y(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return y(this,"findLast",t,e,d,arguments)},findLastIndex(t,e){return y(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return y(this,"forEach",t,e,void 0,arguments)},includes(...t){return X(this,"includes",t)},indexOf(...t){return X(this,"indexOf",t)},join(t){return E(this).join(t)},lastIndexOf(...t){return X(this,"lastIndexOf",t)},map(t,e){return y(this,"map",t,e,void 0,arguments)},pop(){return M(this,"pop")},push(...t){return M(this,"push",t)},reduce(t,...e){return _t(this,"reduce",t,e)},reduceRight(t,...e){return _t(this,"reduceRight",t,e)},shift(){return M(this,"shift")},some(t,e){return y(this,"some",t,e,void 0,arguments)},splice(...t){return M(this,"splice",t)},toReversed(){return E(this).toReversed()},toSorted(t){return E(this).toSorted(t)},toSpliced(...t){return E(this).toSpliced(...t)},unshift(...t){return M(this,"unshift",t)},values(){return J(this,"values",d)}};function J(t,e,s){const i=Y(t),n=i[e]();return i!==t&&!R(t)&&(n._next=n.next,n.next=()=>{const r=n._next();return r.value&&(r.value=s(r.value)),r}),n}const Xt=Array.prototype;function y(t,e,s,i,n,r){const c=Y(t),o=c!==t&&!R(t),l=c[e];if(l!==Xt[e]){const _=l.apply(t,r);return o?d(_):_}let a=s;c!==t&&(o?a=function(_,m){return s.call(this,d(_),m,t)}:s.length>2&&(a=function(_,m){return s.call(this,_,m,t)}));const f=l.call(c,a,i);return o&&n?n(f):f}function _t(t,e,s,i){const n=Y(t);let r=s;return n!==t&&(R(t)?s.length>3&&(r=function(c,o,l){return s.call(this,c,o,l,t)}):r=function(c,o,l){return s.call(this,c,d(o),l,t)}),n[e](r,...i)}function X(t,e,s){const i=u(t);h(i,"iterate",K);const n=i[e](...s);return(n===-1||n===!1)&&ut(s[0])?(s[0]=u(s[0]),i[e](...s)):n}function M(t,e,s=[]){Gt(),lt();const i=u(t)[e].apply(t,s);return at(),Ut(),i}const Qt=Kt("__proto__,__v_isRef,__isVue"),yt=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(P));function Zt(t){P(t)||(t=String(t));const e=u(this);return h(e,"has",t),e.hasOwnProperty(t)}class Rt{constructor(e=!1,s=!1){this._isReadonly=e,this._isShallow=s}get(e,s,i){if(s==="__v_skip")return e.__v_skip;const n=this._isReadonly,r=this._isShallow;if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return r;if(s==="__v_raw")return i===(n?r?le:It:r?ce:xt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const c=p(e);if(!n){let l;if(c&&(l=Jt[s]))return l;if(s==="hasOwnProperty")return Zt}const o=Reflect.get(e,s,j(e)?e:i);return(P(s)?yt.has(s):Qt(s))||(n||h(e,"get",s),r)?o:j(o)?c&&rt(s)?o:o.value:S(o)?n?Ct(o):Tt(o):o}}class kt extends Rt{constructor(e=!1){super(!1,e)}set(e,s,i,n){let r=e[s];if(!this._isShallow){const l=A(r);if(!R(i)&&!A(i)&&(r=u(r),i=u(i)),!p(e)&&j(r)&&!j(i))return l?!1:(r.value=i,!0)}const c=p(e)&&rt(s)?Number(s)<e.length:Q(e,s),o=Reflect.set(e,s,i,j(e)?e:n);return e===u(n)&&(c?N(i,r)&&O(e,"set",s,i):O(e,"add",s,i)),o}deleteProperty(e,s){const i=Q(e,s);e[s];const n=Reflect.deleteProperty(e,s);return n&&i&&O(e,"delete",s,void 0),n}has(e,s){const i=Reflect.has(e,s);return(!P(s)||!yt.has(s))&&h(e,"has",s),i}ownKeys(e){return h(e,"iterate",p(e)?"length":C),Reflect.ownKeys(e)}}class te extends Rt{constructor(e=!1){super(!0,e)}set(e,s){return!0}deleteProperty(e,s){return!0}}const ee=new kt,ne=new te,tt=t=>t,L=t=>Reflect.getPrototypeOf(t);function se(t,e,s){return function(...i){const n=this.__v_raw,r=u(n),c=F(r),o=t==="entries"||t===Symbol.iterator&&c,l=t==="keys"&&c,a=n[t](...i),f=s?tt:e?et:d;return!e&&h(r,"iterate",l?k:C),{next(){const{value:_,done:m}=a.next();return m?{value:_,done:m}:{value:o?[f(_[0]),f(_[1])]:f(_),done:m}},[Symbol.iterator](){return this}}}}function V(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function re(t,e){const s={get(n){const r=this.__v_raw,c=u(r),o=u(n);t||(N(n,o)&&h(c,"get",n),h(c,"get",o));const{has:l}=L(c),a=e?tt:t?et:d;if(l.call(c,n))return a(r.get(n));if(l.call(c,o))return a(r.get(o));r!==c&&r.get(n)},get size(){const n=this.__v_raw;return!t&&h(u(n),"iterate",C),Reflect.get(n,"size",n)},has(n){const r=this.__v_raw,c=u(r),o=u(n);return t||(N(n,o)&&h(c,"has",n),h(c,"has",o)),n===o?r.has(n):r.has(n)||r.has(o)},forEach(n,r){const c=this,o=c.__v_raw,l=u(o),a=e?tt:t?et:d;return!t&&h(l,"iterate",C),o.forEach((f,_)=>n.call(r,a(f),a(_),c))}};return st(s,t?{add:V("add"),set:V("set"),delete:V("delete"),clear:V("clear")}:{add(n){!e&&!R(n)&&!A(n)&&(n=u(n));const r=u(this);return L(r).has.call(r,n)||(r.add(n),O(r,"add",n,n)),this},set(n,r){!e&&!R(r)&&!A(r)&&(r=u(r));const c=u(this),{has:o,get:l}=L(c);let a=o.call(c,n);a||(n=u(n),a=o.call(c,n));const f=l.call(c,n);return c.set(n,r),a?N(r,f)&&O(c,"set",n,r):O(c,"add",n,r),this},delete(n){const r=u(this),{has:c,get:o}=L(r);let l=c.call(r,n);l||(n=u(n),l=c.call(r,n)),o&&o.call(r,n);const a=r.delete(n);return l&&O(r,"delete",n,void 0),a},clear(){const n=u(this),r=n.size!==0,c=n.clear();return r&&O(n,"clear",void 0,void 0),c}}),["keys","values","entries",Symbol.iterator].forEach(n=>{s[n]=se(n,t,e)}),s}function Ot(t,e){const s=re(t,e);return(i,n,r)=>n==="__v_isReactive"?!t:n==="__v_isReadonly"?t:n==="__v_raw"?i:Reflect.get(Q(s,n)&&n in i?s:i,n,r)}const ie={get:Ot(!1,!1)},oe={get:Ot(!0,!1)},xt=new WeakMap,ce=new WeakMap,It=new WeakMap,le=new WeakMap;function ae(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ue(t){return t.__v_skip||!Object.isExtensible(t)?0:ae(zt(t))}function Tt(t){return A(t)?t:jt(t,!1,ee,ie,xt)}function Ct(t){return jt(t,!0,ne,oe,It)}function jt(t,e,s,i,n){if(!S(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=n.get(t);if(r)return r;const c=ue(t);if(c===0)return t;const o=new Proxy(t,c===2?i:s);return n.set(t,o),o}function At(t){return A(t)?At(t.__v_raw):!!(t&&t.__v_isReactive)}function A(t){return!!(t&&t.__v_isReadonly)}function R(t){return!!(t&&t.__v_isShallow)}function ut(t){return t?!!t.__v_raw:!1}function u(t){const e=t&&t.__v_raw;return e?u(e):t}const d=t=>S(t)?Tt(t):t,et=t=>S(t)?Ct(t):t;function j(t){return t?t.__v_isRef===!0:!1}function fe(t){return de(t,!1)}function de(t,e){return j(t)?t:new _e(t,e)}class _e{constructor(e,s){this.dep=new wt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?e:u(e),this._value=s?e:d(e),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(e){const s=this._rawValue,i=this.__v_isShallow||R(e)||A(e);e=i?e:u(e),N(e,s)&&(this._rawValue=e,this._value=i?e:d(e),this.dep.trigger())}}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let H=null,pe=null;const he=t=>t.__isTeleport;function Pt(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Pt(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}it().requestIdleCallback;it().cancelIdleCallback;const me=Symbol.for("v-ndc");function ge(t,e,s,i){let n;const r=s,c=p(t);if(c||w(t)){const o=c&&At(t);let l=!1;o&&(l=!R(t),t=Y(t)),n=new Array(t.length);for(let a=0,f=t.length;a<f;a++)n[a]=e(l?d(t[a]):t[a],a,void 0,r)}else if(typeof t=="number"){n=new Array(t);for(let o=0;o<t;o++)n[o]=e(o+1,o,void 0,r)}else if(S(t))if(t[Symbol.iterator])n=Array.from(t,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(t);n=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const f=o[l];n[l]=e(t[f],f,l,r)}}else n=[];return n}const be={},Et=t=>Object.getPrototypeOf(t)===be,Se=t=>t.__isSuspense,q=Symbol.for("v-fgt"),we=Symbol.for("v-txt"),ye=Symbol.for("v-cmt"),Re=Symbol.for("v-stc"),z=[];let g=null;function I(t=!1){z.push(g=t?null:[])}function Oe(){z.pop(),g=z[z.length-1]||null}function xe(t){return t.dynamicChildren=g||vt,Oe(),g&&g.push(t),t}function T(t,e,s,i,n,r){return xe(b(t,e,s,i,n,r,!0))}function Ie(t){return t?t.__v_isVNode===!0:!1}const Mt=({key:t})=>t??null,W=({ref:t,ref_key:e,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?w(t)||j(t)||v(t)?{i:H,r:t,k:e,f:!!s}:t:null);function b(t,e=null,s=null,i=0,n=null,r=t===q?0:1,c=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mt(e),ref:e&&W(e),scopeId:pe,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:H};return o?(ft(l,s),r&128&&t.normalize(l)):s&&(l.shapeFlag|=w(s)?8:16),!c&&g&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&g.push(l),l}const x=Te;function Te(t,e=null,s=null,i=0,n=null,r=!1){if((!t||t===me)&&(t=ye),Ie(t)){const o=nt(t,e,!0);return s&&ft(o,s),!r&&g&&(o.shapeFlag&6?g[g.indexOf(t)]=o:g.push(o)),o.patchFlag=-2,o}if(Ee(t)&&(t=t.__vccOpts),e){e=Ce(e);let{class:o,style:l}=e;o&&!w(o)&&(e.class=ct(o)),S(l)&&(ut(l)&&!p(l)&&(l=st({},l)),e.style=ot(l))}const c=w(t)?1:Se(t)?128:he(t)?64:S(t)?4:v(t)?2:0;return b(t,e,s,i,n,c,r,!0)}function Ce(t){return t?ut(t)||Et(t)?st({},t):t:null}function nt(t,e,s=!1,i=!1){const{props:n,ref:r,patchFlag:c,children:o,transition:l}=t,a=e?Pe(n||{},e):n,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Mt(a),ref:e&&e.ref?s&&r?p(r)?r.concat(W(e)):[r,W(e)]:W(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==q?c===-1?16:c|16:c,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&nt(t.ssContent),ssFallback:t.ssFallback&&nt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Pt(f,l.clone(f)),f}function je(t=" ",e=0){return x(we,null,t,e)}function Ae(t,e){const s=x(Re,null,t);return s.staticCount=e,s}function ft(t,e){let s=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(p(e))s=16;else if(typeof e=="object")if(i&65){const n=e.default;n&&(n._c&&(n._d=!1),ft(t,n()),n._c&&(n._d=!0));return}else s=32,!e._&&!Et(e)&&(e._ctx=H);else v(e)?(e={default:e,_ctx:H},s=32):(e=String(e),i&64?(s=16,e=[je(e)]):s=8);t.children=e,t.shapeFlag|=s}function Pe(...t){const e={};for(let s=0;s<t.length;s++){const i=t[s];for(const n in i)if(n==="class")e.class!==i.class&&(e.class=ct([e.class,i.class]));else if(n==="style")e.style=ot([e.style,i.style]);else if($t(n)){const r=e[n],c=i[n];c&&r!==c&&!(p(r)&&r.includes(c))&&(e[n]=r?[].concat(r,c):c)}else n!==""&&(e[n]=i[n])}return e}{const t=it(),e=(s,i)=>{let n;return(n=t[s])||(n=t[s]=[]),n.push(i),r=>{n.length>1?n.forEach(c=>c(r)):n[0](r)}};e("__VUE_INSTANCE_SETTERS__",s=>s),e("__VUE_SSR_SETTERS__",s=>s)}function Ee(t){return v(t)&&"__vccOpts"in t}const $=(t,e)=>{const s=t.__vccOpts||t;for(const[i,n]of e)s[i]=n;return s},Me={},Fe={class:"home"};function Ne(t,e){return I(),T("div",Fe,e[0]||(e[0]=[b("h1",null,"Welcome to My Portfolio",-1)]))}const Ke=$(Me,[["render",Ne],["__scopeId","data-v-4022c720"]]),Ft="/portfolio/assets/test-CXfGBIt5.png",ve={},$e={class:"home"};function Le(t,e){return I(),T("div",$e,e[0]||(e[0]=[b("img",{src:Ft},null,-1),b("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",-1)]))}const Ve=$(ve,[["render",Le],["__scopeId","data-v-885f64b7"]]),ze="/portfolio/assets/rootme-logo-C6xI3A_y.png",We={};function Be(t,e){return e[0]||(e[0]=Ae('<div class="side-project-template" data-v-122de6f1><a href="https://www.root-me.org/vladimir-785548" target="_blank" data-v-122de6f1><img src="'+ze+'" style="width:100px;" data-v-122de6f1></a><p data-v-122de6f1>Root-me profile: </p></div><div class="side-project-template" data-v-122de6f1><img src="'+Ft+'" style="width:100px;" data-v-122de6f1><p data-v-122de6f1>parler du snake auto solver, mettre le iframe (a voir si ca marche)</p></div>',2))}const He=$(We,[["render",Be],["__scopeId","data-v-122de6f1"]]),De={__name:"SideProjects",setup(t){return(e,s)=>(I(),T(q,null,[s[0]||(s[0]=b("h1",null,"Side project",-1)),x(He)],64))}},Ye={class:"school-projects"},qe={__name:"SchoolProjects",setup(t){const e=fe(["Project 1","Project 2","Project 3"]);return(s,i)=>(I(),T("div",Ye,[i[0]||(i[0]=b("h1",null,"School Projects",-1)),b("ul",null,[(I(!0),T(q,null,ge(e.value,n=>(I(),T("li",{key:n.id},[b("h2",null,mt(n),1)]))),128))])]))}},Ge=$(qe,[["__scopeId","data-v-049992d6"]]),Ue={},Je={class:"cv-component"};function Xe(t,e){return I(),T("div",Je,e[0]||(e[0]=[b("h1",null,"Curriculum Vitae",-1),b("a",{href:"@/assets/Ablancourt-3.pdf",download:""},"Download CV",-1)]))}const Qe=$(Ue,[["render",Xe]]),Ze={__name:"App",setup(t){return(e,s)=>(I(),T("main",null,[x(Ke),x(Ve),x(De),x(Ge),x(Qe)]))}};Nt(Ze).mount("#app");
