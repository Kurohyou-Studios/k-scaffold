(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function da(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function ur(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=fe(r)?rl(r):ur(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(fe(e))return e;if(ae(e))return e}}const el=/;(?![^(]*\))/g,tl=/:([^]+)/,nl=/\/\*.*?\*\//gs;function rl(e){const t={};return e.replace(nl,"").split(el).forEach(n=>{if(n){const r=n.split(tl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ma(e){let t="";if(fe(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=ma(e[n]);r&&(t+=r+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const al="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",il=da(al);function vo(e){return!!e||e===""}const ol=e=>fe(e)?e:e==null?"":z(e)||ae(e)&&(e.toString===wo||!U(e.toString))?JSON.stringify(e,bo,2):String(e),bo=(e,t)=>t&&t.__v_isRef?bo(e,t.value):Ut(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:yo(t)?{[`Set(${t.size})`]:[...t.values()]}:ae(t)&&!z(t)&&!xo(t)?String(t):t,re={},Ht=[],Fe=()=>{},sl=()=>!1,ll=/^on[^a-z]/,dr=e=>ll.test(e),ha=e=>e.startsWith("onUpdate:"),_e=Object.assign,pa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},cl=Object.prototype.hasOwnProperty,W=(e,t)=>cl.call(e,t),z=Array.isArray,Ut=e=>mr(e)==="[object Map]",yo=e=>mr(e)==="[object Set]",U=e=>typeof e=="function",fe=e=>typeof e=="string",ga=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",_o=e=>ae(e)&&U(e.then)&&U(e.catch),wo=Object.prototype.toString,mr=e=>wo.call(e),fl=e=>mr(e).slice(8,-1),xo=e=>mr(e)==="[object Object]",va=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Gn=da(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ul=/-(\w)/g,Ve=hr(e=>e.replace(ul,(t,n)=>n?n.toUpperCase():"")),dl=/\B([A-Z])/g,Jt=hr(e=>e.replace(dl,"-$1").toLowerCase()),pr=hr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Sr=hr(e=>e?`on${pr(e)}`:""),vn=(e,t)=>!Object.is(e,t),Or=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},nr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ko=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ei;const ml=()=>ei||(ei=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ke;class Eo{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ke,!t&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ke;try{return Ke=this,t()}finally{Ke=n}}}on(){Ke=this}off(){Ke=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function hl(e){return new Eo(e)}function pl(e,t=Ke){t&&t.active&&t.effects.push(e)}const ba=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ao=e=>(e.w&mt)>0,Po=e=>(e.n&mt)>0,gl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=mt},vl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ao(a)&&!Po(a)?a.delete(e):t[n++]=a,a.w&=~mt,a.n&=~mt}t.length=n}},Hr=new WeakMap;let ln=0,mt=1;const Ur=30;let Ne;const St=Symbol(""),Kr=Symbol("");class ya{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,pl(this,r)}run(){if(!this.active)return this.fn();let t=Ne,n=ut;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ne,Ne=this,ut=!0,mt=1<<++ln,ln<=Ur?gl(this):ti(this),this.fn()}finally{ln<=Ur&&vl(this),mt=1<<--ln,Ne=this.parent,ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ne===this?this.deferStop=!0:this.active&&(ti(this),this.onStop&&this.onStop(),this.active=!1)}}function ti(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ut=!0;const Co=[];function Zt(){Co.push(ut),ut=!1}function en(){const e=Co.pop();ut=e===void 0?!0:e}function Pe(e,t,n){if(ut&&Ne){let r=Hr.get(e);r||Hr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ba()),So(a)}}function So(e,t){let n=!1;ln<=Ur?Po(e)||(e.n|=mt,n=!Ao(e)):n=!e.has(Ne),n&&(e.add(Ne),Ne.deps.push(e))}function Je(e,t,n,r,a,i){const o=Hr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&z(e)){const l=ko(r);o.forEach((f,c)=>{(c==="length"||c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":z(e)?va(n)&&s.push(o.get("length")):(s.push(o.get(St)),Ut(e)&&s.push(o.get(Kr)));break;case"delete":z(e)||(s.push(o.get(St)),Ut(e)&&s.push(o.get(Kr)));break;case"set":Ut(e)&&s.push(o.get(St));break}if(s.length===1)s[0]&&Br(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Br(ba(l))}}function Br(e,t){const n=z(e)?e:[...e];for(const r of n)r.computed&&ni(r);for(const r of n)r.computed||ni(r)}function ni(e,t){(e!==Ne||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const bl=da("__proto__,__v_isRef,__isVue"),Oo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ga)),yl=_a(),_l=_a(!1,!0),wl=_a(!0),ri=xl();function xl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)Pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Zt();const r=V(this)[t].apply(this,n);return en(),r}}),e}function _a(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Dl:Mo:t?No:Io).get(r))return r;const o=z(r);if(!e&&o&&W(ri,a))return Reflect.get(ri,a,i);const s=Reflect.get(r,a,i);return(ga(a)?Oo.has(a):bl(a))||(e||Pe(r,"get",a),t)?s:pe(s)?o&&va(a)?s:s.value:ae(s)?e?Lo(s):On(s):s}}const kl=Ro(),El=Ro(!0);function Ro(e=!1){return function(n,r,a,i){let o=n[r];if(Wt(o)&&pe(o)&&!pe(a))return!1;if(!e&&(!rr(a)&&!Wt(a)&&(o=V(o),a=V(a)),!z(n)&&pe(o)&&!pe(a)))return o.value=a,!0;const s=z(n)&&va(r)?Number(r)<n.length:W(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?vn(a,o)&&Je(n,"set",r,a):Je(n,"add",r,a)),l}}function Al(e,t){const n=W(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Je(e,"delete",t,void 0),r}function Pl(e,t){const n=Reflect.has(e,t);return(!ga(t)||!Oo.has(t))&&Pe(e,"has",t),n}function Cl(e){return Pe(e,"iterate",z(e)?"length":St),Reflect.ownKeys(e)}const To={get:yl,set:kl,deleteProperty:Al,has:Pl,ownKeys:Cl},Sl={get:wl,set(e,t){return!0},deleteProperty(e,t){return!0}},Ol=_e({},To,{get:_l,set:El}),wa=e=>e,gr=e=>Reflect.getPrototypeOf(e);function Mn(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);n||(t!==i&&Pe(a,"get",t),Pe(a,"get",i));const{has:o}=gr(a),s=r?wa:n?Aa:bn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Ln(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return t||(e!==a&&Pe(r,"has",e),Pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Fn(e,t=!1){return e=e.__v_raw,!t&&Pe(V(e),"iterate",St),Reflect.get(e,"size",e)}function ai(e){e=V(e);const t=V(this);return gr(t).has.call(t,e)||(t.add(e),Je(t,"add",e,e)),this}function ii(e,t){t=V(t);const n=V(this),{has:r,get:a}=gr(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?vn(t,o)&&Je(n,"set",e,t):Je(n,"add",e,t),this}function oi(e){const t=V(this),{has:n,get:r}=gr(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Je(t,"delete",e,void 0),i}function si(){const e=V(this),t=e.size!==0,n=e.clear();return t&&Je(e,"clear",void 0,void 0),n}function jn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?wa:e?Aa:bn;return!e&&Pe(s,"iterate",St),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Dn(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=Ut(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?wa:t?Aa:bn;return!t&&Pe(i,"iterate",l?Kr:St),{next(){const{value:d,done:h}=f.next();return h?{value:d,done:h}:{value:s?[c(d[0]),c(d[1])]:c(d),done:h}},[Symbol.iterator](){return this}}}}function it(e){return function(...t){return e==="delete"?!1:this}}function Rl(){const e={get(i){return Mn(this,i)},get size(){return Fn(this)},has:Ln,add:ai,set:ii,delete:oi,clear:si,forEach:jn(!1,!1)},t={get(i){return Mn(this,i,!1,!0)},get size(){return Fn(this)},has:Ln,add:ai,set:ii,delete:oi,clear:si,forEach:jn(!1,!0)},n={get(i){return Mn(this,i,!0)},get size(){return Fn(this,!0)},has(i){return Ln.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:jn(!0,!1)},r={get(i){return Mn(this,i,!0,!0)},get size(){return Fn(this,!0)},has(i){return Ln.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:jn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Dn(i,!1,!1),n[i]=Dn(i,!0,!1),t[i]=Dn(i,!1,!0),r[i]=Dn(i,!0,!0)}),[e,n,t,r]}const[Tl,Il,Nl,Ml]=Rl();function xa(e,t){const n=t?e?Ml:Nl:e?Il:Tl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(W(n,a)&&a in r?n:r,a,i)}const Ll={get:xa(!1,!1)},Fl={get:xa(!1,!0)},jl={get:xa(!0,!1)},Io=new WeakMap,No=new WeakMap,Mo=new WeakMap,Dl=new WeakMap;function $l(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zl(e){return e.__v_skip||!Object.isExtensible(e)?0:$l(fl(e))}function On(e){return Wt(e)?e:ka(e,!1,To,Ll,Io)}function Hl(e){return ka(e,!1,Ol,Fl,No)}function Lo(e){return ka(e,!0,Sl,jl,Mo)}function ka(e,t,n,r,a){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=zl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Kt(e){return Wt(e)?Kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Wt(e){return!!(e&&e.__v_isReadonly)}function rr(e){return!!(e&&e.__v_isShallow)}function Fo(e){return Kt(e)||Wt(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function Ea(e){return nr(e,"__v_skip",!0),e}const bn=e=>ae(e)?On(e):e,Aa=e=>ae(e)?Lo(e):e;function jo(e){ut&&Ne&&(e=V(e),So(e.dep||(e.dep=ba())))}function Do(e,t){e=V(e),e.dep&&Br(e.dep)}function pe(e){return!!(e&&e.__v_isRef===!0)}function vr(e){return $o(e,!1)}function Ul(e){return $o(e,!0)}function $o(e,t){return pe(e)?e:new Kl(e,t)}class Kl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:bn(t)}get value(){return jo(this),this._value}set value(t){const n=this.__v_isShallow||rr(t)||Wt(t);t=n?t:V(t),vn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:bn(t),Do(this))}}function je(e){return pe(e)?e.value:e}const Bl={get:(e,t,n)=>je(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return pe(a)&&!pe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function zo(e){return Kt(e)?e:new Proxy(e,Bl)}var Ho;class Yl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ho]=!1,this._dirty=!0,this.effect=new ya(t,()=>{this._dirty||(this._dirty=!0,Do(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return jo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Ho="__v_isReadonly";function Wl(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=Fe):(r=e.get,a=e.set),new Yl(r,a,i||!a,n)}function dt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){br(i,t,n)}return a}function De(e,t,n,r){if(U(e)){const i=dt(e,t,n,r);return i&&_o(i)&&i.catch(o=>{br(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(De(e[i],t,n,r));return a}function br(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){dt(l,null,10,[e,o,s]);return}}ql(e,n,a,r)}function ql(e,t,n,r=!0){console.error(e)}let yn=!1,Yr=!1;const he=[];let Ye=0;const Bt=[];let Xe=null,Et=0;const Uo=Promise.resolve();let Pa=null;function Ko(e){const t=Pa||Uo;return e?t.then(this?e.bind(this):e):t}function Vl(e){let t=Ye+1,n=he.length;for(;t<n;){const r=t+n>>>1;_n(he[r])<e?t=r+1:n=r}return t}function Ca(e){(!he.length||!he.includes(e,yn&&e.allowRecurse?Ye+1:Ye))&&(e.id==null?he.push(e):he.splice(Vl(e.id),0,e),Bo())}function Bo(){!yn&&!Yr&&(Yr=!0,Pa=Uo.then(Wo))}function Gl(e){const t=he.indexOf(e);t>Ye&&he.splice(t,1)}function Xl(e){z(e)?Bt.push(...e):(!Xe||!Xe.includes(e,e.allowRecurse?Et+1:Et))&&Bt.push(e),Bo()}function li(e,t=yn?Ye+1:0){for(;t<he.length;t++){const n=he[t];n&&n.pre&&(he.splice(t,1),t--,n())}}function Yo(e){if(Bt.length){const t=[...new Set(Bt)];if(Bt.length=0,Xe){Xe.push(...t);return}for(Xe=t,Xe.sort((n,r)=>_n(n)-_n(r)),Et=0;Et<Xe.length;Et++)Xe[Et]();Xe=null,Et=0}}const _n=e=>e.id==null?1/0:e.id,Ql=(e,t)=>{const n=_n(e)-_n(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Wo(e){Yr=!1,yn=!0,he.sort(Ql);const t=Fe;try{for(Ye=0;Ye<he.length;Ye++){const n=he[Ye];n&&n.active!==!1&&dt(n,null,14)}}finally{Ye=0,he.length=0,Yo(),yn=!1,Pa=null,(he.length||Bt.length)&&Wo()}}function Jl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||re;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[c]||re;h&&(a=n.map(g=>fe(g)?g.trim():g)),d&&(a=n.map(ko))}let s,l=r[s=Sr(t)]||r[s=Sr(Ve(t))];!l&&i&&(l=r[s=Sr(Jt(t))]),l&&De(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,De(f,e,6,a)}}function qo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=f=>{const c=qo(f,t,!0);c&&(s=!0,_e(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ae(e)&&r.set(e,null),null):(z(i)?i.forEach(l=>o[l]=null):_e(o,i),ae(e)&&r.set(e,o),o)}function yr(e,t){return!e||!dr(t)?!1:(t=t.slice(2).replace(/Once$/,""),W(e,t[0].toLowerCase()+t.slice(1))||W(e,Jt(t))||W(e,t))}let ye=null,Vo=null;function ar(e){const t=ye;return ye=e,Vo=e&&e.type.__scopeId||null,t}function lt(e,t=ye,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&vi(-1);const i=ar(t);let o;try{o=e(...a)}finally{ar(i),r._d&&vi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Rr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:h,setupState:g,ctx:k,inheritAttrs:S}=e;let D,C;const M=ar(e);try{if(n.shapeFlag&4){const H=a||r;D=Be(c.call(H,H,d,i,g,h,k)),C=l}else{const H=t;D=Be(H.length>1?H(i,{attrs:l,slots:s,emit:f}):H(i,null)),C=t.props?l:Zl(l)}}catch(H){dn.length=0,br(H,e,1),D=ee(ht)}let T=D;if(C&&S!==!1){const H=Object.keys(C),{shapeFlag:q}=T;H.length&&q&7&&(o&&H.some(ha)&&(C=ec(C,o)),T=qt(T,C))}return n.dirs&&(T=qt(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),D=T,ar(M),D}const Zl=e=>{let t;for(const n in e)(n==="class"||n==="style"||dr(n))&&((t||(t={}))[n]=e[n]);return t},ec=(e,t)=>{const n={};for(const r in e)(!ha(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function tc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ci(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const h=c[d];if(o[h]!==r[h]&&!yr(f,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ci(r,o,f):!0:!!o;return!1}function ci(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!yr(n,i))return!0}return!1}function nc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const rc=e=>e.__isSuspense;function ac(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):Xl(e)}function Xn(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function Qe(e,t,n=!1){const r=me||ye;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r.proxy):t}}const $n={};function Qn(e,t,n){return Go(e,t,n)}function Go(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=re){const s=me;let l,f=!1,c=!1;if(pe(e)?(l=()=>e.value,f=rr(e)):Kt(e)?(l=()=>e,r=!0):z(e)?(c=!0,f=e.some(T=>Kt(T)||rr(T)),l=()=>e.map(T=>{if(pe(T))return T.value;if(Kt(T))return Dt(T);if(U(T))return dt(T,s,2)})):U(e)?t?l=()=>dt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),De(e,s,3,[h])}:l=Fe,t&&r){const T=l;l=()=>Dt(T())}let d,h=T=>{d=C.onStop=()=>{dt(T,s,4)}},g;if(xn)if(h=Fe,t?n&&De(t,s,3,[l(),c?[]:void 0,h]):l(),a==="sync"){const T=tf();g=T.__watcherHandles||(T.__watcherHandles=[])}else return Fe;let k=c?new Array(e.length).fill($n):$n;const S=()=>{if(C.active)if(t){const T=C.run();(r||f||(c?T.some((H,q)=>vn(H,k[q])):vn(T,k)))&&(d&&d(),De(t,s,3,[T,k===$n?void 0:c&&k[0]===$n?[]:k,h]),k=T)}else C.run()};S.allowRecurse=!!t;let D;a==="sync"?D=S:a==="post"?D=()=>xe(S,s&&s.suspense):(S.pre=!0,s&&(S.id=s.uid),D=()=>Ca(S));const C=new ya(l,D);t?n?S():k=C.run():a==="post"?xe(C.run.bind(C),s&&s.suspense):C.run();const M=()=>{C.stop(),s&&s.scope&&pa(s.scope.effects,C)};return g&&g.push(M),M}function ic(e,t,n){const r=this.proxy,a=fe(e)?e.includes(".")?Xo(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=me;Vt(this);const s=Go(a,i.bind(r),n);return o?Vt(o):Rt(),s}function Xo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Dt(e,t){if(!ae(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),pe(e))Dt(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)Dt(e[n],t);else if(yo(e)||Ut(e))e.forEach(n=>{Dt(n,t)});else if(xo(e))for(const n in e)Dt(e[n],t);return e}function Sa(e){return U(e)?{setup:e,name:e.name}:e}const fn=e=>!!e.type.__asyncLoader,Qo=e=>e.type.__isKeepAlive;function oc(e,t){Jo(e,"a",t)}function sc(e,t){Jo(e,"da",t)}function Jo(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(_r(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Qo(a.parent.vnode)&&lc(r,t,n,a),a=a.parent}}function lc(e,t,n,r){const a=_r(t,e,r,!0);Zo(()=>{pa(r[t],a)},n)}function _r(e,t,n=me,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Zt(),Vt(n);const s=De(t,n,e,o);return Rt(),en(),s});return r?a.unshift(i):a.push(i),i}}const nt=e=>(t,n=me)=>(!xn||e==="sp")&&_r(e,(...r)=>t(...r),n),cc=nt("bm"),fc=nt("m"),uc=nt("bu"),dc=nt("u"),mc=nt("bum"),Zo=nt("um"),hc=nt("sp"),pc=nt("rtg"),gc=nt("rtc");function vc(e,t=me){_r("ec",e,t)}function _t(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Zt(),De(l,n,8,[e.el,s,e,t]),en())}}const es="components";function bc(e,t){return _c(es,e,!0,t)||e}const yc=Symbol();function _c(e,t,n=!0,r=!1){const a=ye||me;if(a){const i=a.type;if(e===es){const s=Jc(i,!1);if(s&&(s===t||s===Ve(t)||s===pr(Ve(t))))return i}const o=fi(a[e]||i[e],t)||fi(a.appContext[e],t);return!o&&r?i:o}}function fi(e,t){return e&&(e[t]||e[Ve(t)]||e[pr(Ve(t))])}function wc(e,t,n,r){let a;const i=n&&n[r];if(z(e)||fe(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ae(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}function xc(e,t,n={},r,a){if(ye.isCE||ye.parent&&fn(ye.parent)&&ye.parent.isCE)return t!=="default"&&(n.name=t),ee("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),qe();const o=i&&ts(i(n)),s=Ta(Ae,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!a&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function ts(e){return e.some(t=>or(t)?!(t.type===ht||t.type===Ae&&!ts(t.children)):!0)?e:null}const Wr=e=>e?ds(e)?Na(e)||e.proxy:Wr(e.parent):null,un=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wr(e.parent),$root:e=>Wr(e.root),$emit:e=>e.emit,$options:e=>Oa(e),$forceUpdate:e=>e.f||(e.f=()=>Ca(e.update)),$nextTick:e=>e.n||(e.n=Ko.bind(e.proxy)),$watch:e=>ic.bind(e)}),Tr=(e,t)=>e!==re&&!e.__isScriptSetup&&W(e,t),kc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Tr(r,t))return o[t]=1,r[t];if(a!==re&&W(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&W(f,t))return o[t]=3,i[t];if(n!==re&&W(n,t))return o[t]=4,n[t];qr&&(o[t]=0)}}const c=un[t];let d,h;if(c)return t==="$attrs"&&Pe(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==re&&W(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,W(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Tr(a,t)?(a[t]=n,!0):r!==re&&W(r,t)?(r[t]=n,!0):W(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==re&&W(e,o)||Tr(t,o)||(s=i[0])&&W(s,o)||W(r,o)||W(un,o)||W(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:W(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let qr=!0;function Ec(e){const t=Oa(e),n=e.proxy,r=e.ctx;qr=!1,t.beforeCreate&&ui(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:h,beforeUpdate:g,updated:k,activated:S,deactivated:D,beforeDestroy:C,beforeUnmount:M,destroyed:T,unmounted:H,render:q,renderTracked:se,renderTriggered:de,errorCaptured:ke,serverPrefetch:ge,expose:Se,inheritAttrs:at,components:ze,directives:Nt,filters:bt}=t;if(f&&Ac(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const X=o[J];U(X)&&(r[J]=X.bind(n))}if(a){const J=a.call(n,n);ae(J)&&(e.data=On(J))}if(qr=!0,i)for(const J in i){const X=i[J],Re=U(X)?X.bind(n,n):U(X.get)?X.get.bind(n,n):Fe,yt=!U(X)&&U(X.set)?X.set.bind(n):Fe,Te=Oe({get:Re,set:yt});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Te.value,set:we=>Te.value=we})}if(s)for(const J in s)ns(s[J],r,n,J);if(l){const J=U(l)?l.call(n):l;Reflect.ownKeys(J).forEach(X=>{Xn(X,J[X])})}c&&ui(c,e,"c");function le(J,X){z(X)?X.forEach(Re=>J(Re.bind(n))):X&&J(X.bind(n))}if(le(cc,d),le(fc,h),le(uc,g),le(dc,k),le(oc,S),le(sc,D),le(vc,ke),le(gc,se),le(pc,de),le(mc,M),le(Zo,H),le(hc,ge),z(Se))if(Se.length){const J=e.exposed||(e.exposed={});Se.forEach(X=>{Object.defineProperty(J,X,{get:()=>n[X],set:Re=>n[X]=Re})})}else e.exposed||(e.exposed={});q&&e.render===Fe&&(e.render=q),at!=null&&(e.inheritAttrs=at),ze&&(e.components=ze),Nt&&(e.directives=Nt)}function Ac(e,t,n=Fe,r=!1){z(e)&&(e=Vr(e));for(const a in e){const i=e[a];let o;ae(i)?"default"in i?o=Qe(i.from||a,i.default,!0):o=Qe(i.from||a):o=Qe(i),pe(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function ui(e,t,n){De(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ns(e,t,n,r){const a=r.includes(".")?Xo(n,r):()=>n[r];if(fe(e)){const i=t[e];U(i)&&Qn(a,i)}else if(U(e))Qn(a,e.bind(n));else if(ae(e))if(z(e))e.forEach(i=>ns(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&Qn(a,i,e)}}function Oa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>ir(l,f,o,!0)),ir(l,t,o)),ae(t)&&i.set(t,l),l}function ir(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&ir(e,i,n,!0),a&&a.forEach(o=>ir(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Pc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Pc={data:di,props:xt,emits:xt,methods:xt,computed:xt,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:xt,directives:xt,watch:Sc,provide:di,inject:Cc};function di(e,t){return t?e?function(){return _e(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function Cc(e,t){return xt(Vr(e),Vr(t))}function Vr(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function xt(e,t){return e?_e(_e(Object.create(null),e),t):t}function Sc(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const r in t)n[r]=ve(e[r],t[r]);return n}function Oc(e,t,n,r=!1){const a={},i={};nr(i,xr,1),e.propsDefaults=Object.create(null),rs(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Hl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Rc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let h=c[d];if(yr(e.emitsOptions,h))continue;const g=t[h];if(l)if(W(i,h))g!==i[h]&&(i[h]=g,f=!0);else{const k=Ve(h);a[k]=Gr(l,s,k,g,e,!1)}else g!==i[h]&&(i[h]=g,f=!0)}}}else{rs(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!W(t,d)&&((c=Jt(d))===d||!W(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=Gr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!W(t,d))&&(delete i[d],f=!0)}f&&Je(e,"set","$attrs")}function rs(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Gn(l))continue;const f=t[l];let c;a&&W(a,c=Ve(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:yr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=V(n),f=s||re;for(let c=0;c<i.length;c++){const d=i[c];n[d]=Gr(a,l,d,f[d],e,!W(f,d))}}return o}function Gr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=W(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&U(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Vt(a),r=f[n]=l.call(null,t),Rt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Jt(n))&&(r=!0))}return r}function as(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const c=d=>{l=!0;const[h,g]=as(d,t,!0);_e(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return ae(e)&&r.set(e,Ht),Ht;if(z(i))for(let c=0;c<i.length;c++){const d=Ve(i[c]);mi(d)&&(o[d]=re)}else if(i)for(const c in i){const d=Ve(c);if(mi(d)){const h=i[c],g=o[d]=z(h)||U(h)?{type:h}:Object.assign({},h);if(g){const k=gi(Boolean,g.type),S=gi(String,g.type);g[0]=k>-1,g[1]=S<0||k<S,(k>-1||W(g,"default"))&&s.push(d)}}}const f=[o,s];return ae(e)&&r.set(e,f),f}function mi(e){return e[0]!=="$"}function hi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function pi(e,t){return hi(e)===hi(t)}function gi(e,t){return z(t)?t.findIndex(n=>pi(n,e)):U(t)&&pi(t,e)?0:-1}const is=e=>e[0]==="_"||e==="$stable",Ra=e=>z(e)?e.map(Be):[Be(e)],Tc=(e,t,n)=>{if(t._n)return t;const r=lt((...a)=>Ra(t(...a)),n);return r._c=!1,r},os=(e,t,n)=>{const r=e._ctx;for(const a in e){if(is(a))continue;const i=e[a];if(U(i))t[a]=Tc(a,i,r);else if(i!=null){const o=Ra(i);t[a]=()=>o}}},ss=(e,t)=>{const n=Ra(t);e.slots.default=()=>n},Ic=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),nr(t,"_",n)):os(t,e.slots={})}else e.slots={},t&&ss(e,t);nr(e.slots,xr,1)},Nc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=re;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(_e(a,t),!n&&s===1&&delete a._):(i=!t.$stable,os(t,a)),o=t}else t&&(ss(e,t),o={default:1});if(i)for(const s in a)!is(s)&&!(s in o)&&delete a[s]};function ls(){return{app:null,config:{isNativeTag:sl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mc=0;function Lc(e,t){return function(r,a=null){U(r)||(r=Object.assign({},r)),a!=null&&!ae(a)&&(a=null);const i=ls(),o=new Set;let s=!1;const l=i.app={_uid:Mc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:nf,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&U(f.install)?(o.add(f),f.install(l,...c)):U(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const h=ee(r,a);return h.appContext=i,c&&t?t(h,f):e(h,f,d),s=!0,l._container=f,f.__vue_app__=l,Na(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l}};return l}}function Xr(e,t,n,r,a=!1){if(z(e)){e.forEach((h,g)=>Xr(h,t&&(z(t)?t[g]:t),n,r,a));return}if(fn(r)&&!a)return;const i=r.shapeFlag&4?Na(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===re?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(fe(f)?(c[f]=null,W(d,f)&&(d[f]=null)):pe(f)&&(f.value=null)),U(l))dt(l,s,12,[o,c]);else{const h=fe(l),g=pe(l);if(h||g){const k=()=>{if(e.f){const S=h?W(d,l)?d[l]:c[l]:l.value;a?z(S)&&pa(S,i):z(S)?S.includes(i)||S.push(i):h?(c[l]=[i],W(d,l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else h?(c[l]=o,W(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(k.id=-1,xe(k,n)):k()}}}const xe=ac;function Fc(e){return jc(e)}function jc(e,t){const n=ml();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:h,setScopeId:g=Fe,insertStaticContent:k}=e,S=(u,m,p,v=null,y=null,x=null,P=!1,w=null,E=!!m.dynamicChildren)=>{if(u===m)return;u&&!an(u,m)&&(v=A(u),we(u,y,x,!0),u=null),m.patchFlag===-2&&(E=!1,m.dynamicChildren=null);const{type:_,ref:F,shapeFlag:I}=m;switch(_){case wr:D(u,m,p,v);break;case ht:C(u,m,p,v);break;case Jn:u==null&&M(m,p,v,P);break;case Ae:ze(u,m,p,v,y,x,P,w,E);break;default:I&1?q(u,m,p,v,y,x,P,w,E):I&6?Nt(u,m,p,v,y,x,P,w,E):(I&64||I&128)&&_.process(u,m,p,v,y,x,P,w,E,Y)}F!=null&&y&&Xr(F,u&&u.ref,x,m||u,!m)},D=(u,m,p,v)=>{if(u==null)r(m.el=s(m.children),p,v);else{const y=m.el=u.el;m.children!==u.children&&f(y,m.children)}},C=(u,m,p,v)=>{u==null?r(m.el=l(m.children||""),p,v):m.el=u.el},M=(u,m,p,v)=>{[u.el,u.anchor]=k(u.children,m,p,v,u.el,u.anchor)},T=({el:u,anchor:m},p,v)=>{let y;for(;u&&u!==m;)y=h(u),r(u,p,v),u=y;r(m,p,v)},H=({el:u,anchor:m})=>{let p;for(;u&&u!==m;)p=h(u),a(u),u=p;a(m)},q=(u,m,p,v,y,x,P,w,E)=>{P=P||m.type==="svg",u==null?se(m,p,v,y,x,P,w,E):ge(u,m,y,x,P,w,E)},se=(u,m,p,v,y,x,P,w)=>{let E,_;const{type:F,props:I,shapeFlag:j,transition:$,dirs:B}=u;if(E=u.el=o(u.type,x,I&&I.is,I),j&8?c(E,u.children):j&16&&ke(u.children,E,null,v,y,x&&F!=="foreignObject",P,w),B&&_t(u,null,v,"created"),I){for(const Q in I)Q!=="value"&&!Gn(Q)&&i(E,Q,null,I[Q],x,u.children,v,y,O);"value"in I&&i(E,"value",null,I.value),(_=I.onVnodeBeforeMount)&&Ue(_,v,u)}de(E,u,u.scopeId,P,v),B&&_t(u,null,v,"beforeMount");const Z=(!y||y&&!y.pendingBranch)&&$&&!$.persisted;Z&&$.beforeEnter(E),r(E,m,p),((_=I&&I.onVnodeMounted)||Z||B)&&xe(()=>{_&&Ue(_,v,u),Z&&$.enter(E),B&&_t(u,null,v,"mounted")},y)},de=(u,m,p,v,y)=>{if(p&&g(u,p),v)for(let x=0;x<v.length;x++)g(u,v[x]);if(y){let x=y.subTree;if(m===x){const P=y.vnode;de(u,P,P.scopeId,P.slotScopeIds,y.parent)}}},ke=(u,m,p,v,y,x,P,w,E=0)=>{for(let _=E;_<u.length;_++){const F=u[_]=w?ct(u[_]):Be(u[_]);S(null,F,m,p,v,y,x,P,w)}},ge=(u,m,p,v,y,x,P)=>{const w=m.el=u.el;let{patchFlag:E,dynamicChildren:_,dirs:F}=m;E|=u.patchFlag&16;const I=u.props||re,j=m.props||re;let $;p&&wt(p,!1),($=j.onVnodeBeforeUpdate)&&Ue($,p,m,u),F&&_t(m,u,p,"beforeUpdate"),p&&wt(p,!0);const B=y&&m.type!=="foreignObject";if(_?Se(u.dynamicChildren,_,w,p,v,B,x):P||X(u,m,w,null,p,v,B,x,!1),E>0){if(E&16)at(w,m,I,j,p,v,y);else if(E&2&&I.class!==j.class&&i(w,"class",null,j.class,y),E&4&&i(w,"style",I.style,j.style,y),E&8){const Z=m.dynamicProps;for(let Q=0;Q<Z.length;Q++){const ce=Z[Q],Ie=I[ce],Lt=j[ce];(Lt!==Ie||ce==="value")&&i(w,ce,Ie,Lt,y,u.children,p,v,O)}}E&1&&u.children!==m.children&&c(w,m.children)}else!P&&_==null&&at(w,m,I,j,p,v,y);(($=j.onVnodeUpdated)||F)&&xe(()=>{$&&Ue($,p,m,u),F&&_t(m,u,p,"updated")},v)},Se=(u,m,p,v,y,x,P)=>{for(let w=0;w<m.length;w++){const E=u[w],_=m[w],F=E.el&&(E.type===Ae||!an(E,_)||E.shapeFlag&70)?d(E.el):p;S(E,_,F,null,v,y,x,P,!0)}},at=(u,m,p,v,y,x,P)=>{if(p!==v){if(p!==re)for(const w in p)!Gn(w)&&!(w in v)&&i(u,w,p[w],null,P,m.children,y,x,O);for(const w in v){if(Gn(w))continue;const E=v[w],_=p[w];E!==_&&w!=="value"&&i(u,w,_,E,P,m.children,y,x,O)}"value"in v&&i(u,"value",p.value,v.value)}},ze=(u,m,p,v,y,x,P,w,E)=>{const _=m.el=u?u.el:s(""),F=m.anchor=u?u.anchor:s("");let{patchFlag:I,dynamicChildren:j,slotScopeIds:$}=m;$&&(w=w?w.concat($):$),u==null?(r(_,p,v),r(F,p,v),ke(m.children,p,F,y,x,P,w,E)):I>0&&I&64&&j&&u.dynamicChildren?(Se(u.dynamicChildren,j,p,y,x,P,w),(m.key!=null||y&&m===y.subTree)&&cs(u,m,!0)):X(u,m,p,F,y,x,P,w,E)},Nt=(u,m,p,v,y,x,P,w,E)=>{m.slotScopeIds=w,u==null?m.shapeFlag&512?y.ctx.activate(m,p,v,P,E):bt(m,p,v,y,x,P,E):nn(u,m,E)},bt=(u,m,p,v,y,x,P)=>{const w=u.component=qc(u,v,y);if(Qo(u)&&(w.ctx.renderer=Y),Vc(w),w.asyncDep){if(y&&y.registerDep(w,le),!u.el){const E=w.subTree=ee(ht);C(null,E,m,p)}return}le(w,u,m,p,y,x,P)},nn=(u,m,p)=>{const v=m.component=u.component;if(tc(u,m,p))if(v.asyncDep&&!v.asyncResolved){J(v,m,p);return}else v.next=m,Gl(v.update),v.update();else m.el=u.el,v.vnode=m},le=(u,m,p,v,y,x,P)=>{const w=()=>{if(u.isMounted){let{next:F,bu:I,u:j,parent:$,vnode:B}=u,Z=F,Q;wt(u,!1),F?(F.el=B.el,J(u,F,P)):F=B,I&&Or(I),(Q=F.props&&F.props.onVnodeBeforeUpdate)&&Ue(Q,$,F,B),wt(u,!0);const ce=Rr(u),Ie=u.subTree;u.subTree=ce,S(Ie,ce,d(Ie.el),A(Ie),u,y,x),F.el=ce.el,Z===null&&nc(u,ce.el),j&&xe(j,y),(Q=F.props&&F.props.onVnodeUpdated)&&xe(()=>Ue(Q,$,F,B),y)}else{let F;const{el:I,props:j}=m,{bm:$,m:B,parent:Z}=u,Q=fn(m);if(wt(u,!1),$&&Or($),!Q&&(F=j&&j.onVnodeBeforeMount)&&Ue(F,Z,m),wt(u,!0),I&&K){const ce=()=>{u.subTree=Rr(u),K(I,u.subTree,u,y,null)};Q?m.type.__asyncLoader().then(()=>!u.isUnmounted&&ce()):ce()}else{const ce=u.subTree=Rr(u);S(null,ce,p,v,u,y,x),m.el=ce.el}if(B&&xe(B,y),!Q&&(F=j&&j.onVnodeMounted)){const ce=m;xe(()=>Ue(F,Z,ce),y)}(m.shapeFlag&256||Z&&fn(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&xe(u.a,y),u.isMounted=!0,m=p=v=null}},E=u.effect=new ya(w,()=>Ca(_),u.scope),_=u.update=()=>E.run();_.id=u.uid,wt(u,!0),_()},J=(u,m,p)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,Rc(u,m.props,v,p),Nc(u,m.children,p),Zt(),li(),en()},X=(u,m,p,v,y,x,P,w,E=!1)=>{const _=u&&u.children,F=u?u.shapeFlag:0,I=m.children,{patchFlag:j,shapeFlag:$}=m;if(j>0){if(j&128){yt(_,I,p,v,y,x,P,w,E);return}else if(j&256){Re(_,I,p,v,y,x,P,w,E);return}}$&8?(F&16&&O(_,y,x),I!==_&&c(p,I)):F&16?$&16?yt(_,I,p,v,y,x,P,w,E):O(_,y,x,!0):(F&8&&c(p,""),$&16&&ke(I,p,v,y,x,P,w,E))},Re=(u,m,p,v,y,x,P,w,E)=>{u=u||Ht,m=m||Ht;const _=u.length,F=m.length,I=Math.min(_,F);let j;for(j=0;j<I;j++){const $=m[j]=E?ct(m[j]):Be(m[j]);S(u[j],$,p,null,y,x,P,w,E)}_>F?O(u,y,x,!0,!1,I):ke(m,p,v,y,x,P,w,E,I)},yt=(u,m,p,v,y,x,P,w,E)=>{let _=0;const F=m.length;let I=u.length-1,j=F-1;for(;_<=I&&_<=j;){const $=u[_],B=m[_]=E?ct(m[_]):Be(m[_]);if(an($,B))S($,B,p,null,y,x,P,w,E);else break;_++}for(;_<=I&&_<=j;){const $=u[I],B=m[j]=E?ct(m[j]):Be(m[j]);if(an($,B))S($,B,p,null,y,x,P,w,E);else break;I--,j--}if(_>I){if(_<=j){const $=j+1,B=$<F?m[$].el:v;for(;_<=j;)S(null,m[_]=E?ct(m[_]):Be(m[_]),p,B,y,x,P,w,E),_++}}else if(_>j)for(;_<=I;)we(u[_],y,x,!0),_++;else{const $=_,B=_,Z=new Map;for(_=B;_<=j;_++){const Ee=m[_]=E?ct(m[_]):Be(m[_]);Ee.key!=null&&Z.set(Ee.key,_)}let Q,ce=0;const Ie=j-B+1;let Lt=!1,Qa=0;const rn=new Array(Ie);for(_=0;_<Ie;_++)rn[_]=0;for(_=$;_<=I;_++){const Ee=u[_];if(ce>=Ie){we(Ee,y,x,!0);continue}let He;if(Ee.key!=null)He=Z.get(Ee.key);else for(Q=B;Q<=j;Q++)if(rn[Q-B]===0&&an(Ee,m[Q])){He=Q;break}He===void 0?we(Ee,y,x,!0):(rn[He-B]=_+1,He>=Qa?Qa=He:Lt=!0,S(Ee,m[He],p,null,y,x,P,w,E),ce++)}const Ja=Lt?Dc(rn):Ht;for(Q=Ja.length-1,_=Ie-1;_>=0;_--){const Ee=B+_,He=m[Ee],Za=Ee+1<F?m[Ee+1].el:v;rn[_]===0?S(null,He,p,Za,y,x,P,w,E):Lt&&(Q<0||_!==Ja[Q]?Te(He,p,Za,2):Q--)}}},Te=(u,m,p,v,y=null)=>{const{el:x,type:P,transition:w,children:E,shapeFlag:_}=u;if(_&6){Te(u.component.subTree,m,p,v);return}if(_&128){u.suspense.move(m,p,v);return}if(_&64){P.move(u,m,p,Y);return}if(P===Ae){r(x,m,p);for(let I=0;I<E.length;I++)Te(E[I],m,p,v);r(u.anchor,m,p);return}if(P===Jn){T(u,m,p);return}if(v!==2&&_&1&&w)if(v===0)w.beforeEnter(x),r(x,m,p),xe(()=>w.enter(x),y);else{const{leave:I,delayLeave:j,afterLeave:$}=w,B=()=>r(x,m,p),Z=()=>{I(x,()=>{B(),$&&$()})};j?j(x,B,Z):Z()}else r(x,m,p)},we=(u,m,p,v=!1,y=!1)=>{const{type:x,props:P,ref:w,children:E,dynamicChildren:_,shapeFlag:F,patchFlag:I,dirs:j}=u;if(w!=null&&Xr(w,null,p,u,!0),F&256){m.ctx.deactivate(u);return}const $=F&1&&j,B=!fn(u);let Z;if(B&&(Z=P&&P.onVnodeBeforeUnmount)&&Ue(Z,m,u),F&6)b(u.component,p,v);else{if(F&128){u.suspense.unmount(p,v);return}$&&_t(u,null,m,"beforeUnmount"),F&64?u.type.remove(u,m,p,y,Y,v):_&&(x!==Ae||I>0&&I&64)?O(_,m,p,!1,!0):(x===Ae&&I&384||!y&&F&16)&&O(E,m,p),v&&Mt(u)}(B&&(Z=P&&P.onVnodeUnmounted)||$)&&xe(()=>{Z&&Ue(Z,m,u),$&&_t(u,null,m,"unmounted")},p)},Mt=u=>{const{type:m,el:p,anchor:v,transition:y}=u;if(m===Ae){Nn(p,v);return}if(m===Jn){H(u);return}const x=()=>{a(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:P,delayLeave:w}=y,E=()=>P(p,x);w?w(u.el,x,E):E()}else x()},Nn=(u,m)=>{let p;for(;u!==m;)p=h(u),a(u),u=p;a(m)},b=(u,m,p)=>{const{bum:v,scope:y,update:x,subTree:P,um:w}=u;v&&Or(v),y.stop(),x&&(x.active=!1,we(P,u,m,p)),w&&xe(w,m),xe(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},O=(u,m,p,v=!1,y=!1,x=0)=>{for(let P=x;P<u.length;P++)we(u[P],m,p,v,y)},A=u=>u.shapeFlag&6?A(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),L=(u,m,p)=>{u==null?m._vnode&&we(m._vnode,null,null,!0):S(m._vnode||null,u,m,null,null,null,p),li(),Yo(),m._vnode=u},Y={p:S,um:we,m:Te,r:Mt,mt:bt,mc:ke,pc:X,pbc:Se,n:A,o:e};let ie,K;return t&&([ie,K]=t(Y)),{render:L,hydrate:ie,createApp:Lc(L,ie)}}function wt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function cs(e,t,n=!1){const r=e.children,a=t.children;if(z(r)&&z(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ct(a[i]),s.el=o.el),n||cs(o,s)),s.type===wr&&(s.el=o.el)}}function Dc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const $c=e=>e.__isTeleport,Ae=Symbol(void 0),wr=Symbol(void 0),ht=Symbol(void 0),Jn=Symbol(void 0),dn=[];let Me=null;function qe(e=!1){dn.push(Me=e?null:[])}function zc(){dn.pop(),Me=dn[dn.length-1]||null}let wn=1;function vi(e){wn+=e}function fs(e){return e.dynamicChildren=wn>0?Me||Ht:null,zc(),wn>0&&Me&&Me.push(e),e}function Ot(e,t,n,r,a,i){return fs(be(e,t,n,r,a,i,!0))}function Ta(e,t,n,r,a){return fs(ee(e,t,n,r,a,!0))}function or(e){return e?e.__v_isVNode===!0:!1}function an(e,t){return e.type===t.type&&e.key===t.key}const xr="__vInternal",us=({key:e})=>e??null,Zn=({ref:e,ref_key:t,ref_for:n})=>e!=null?fe(e)||pe(e)||U(e)?{i:ye,r:e,k:t,f:!!n}:e:null;function be(e,t=null,n=null,r=0,a=null,i=e===Ae?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&us(t),ref:t&&Zn(t),scopeId:Vo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ye};return s?(Ia(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=fe(n)?8:16),wn>0&&!o&&Me&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Me.push(l),l}const ee=Hc;function Hc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===yc)&&(e=ht),or(e)){const s=qt(e,t,!0);return n&&Ia(s,n),wn>0&&!i&&Me&&(s.shapeFlag&6?Me[Me.indexOf(e)]=s:Me.push(s)),s.patchFlag|=-2,s}if(Zc(e)&&(e=e.__vccOpts),t){t=Uc(t);let{class:s,style:l}=t;s&&!fe(s)&&(t.class=ma(s)),ae(l)&&(Fo(l)&&!z(l)&&(l=_e({},l)),t.style=ur(l))}const o=fe(e)?1:rc(e)?128:$c(e)?64:ae(e)?4:U(e)?2:0;return be(e,t,n,r,a,o,i,!0)}function Uc(e){return e?Fo(e)||xr in e?_e({},e):e:null}function qt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Bc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&us(s),ref:t&&t.ref?n&&a?z(a)?a.concat(Zn(t)):[a,Zn(t)]:Zn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ae?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qt(e.ssContent),ssFallback:e.ssFallback&&qt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function kt(e=" ",t=0){return ee(wr,null,e,t)}function Kc(e,t){const n=ee(Jn,null,e);return n.staticCount=t,n}function Lm(e="",t=!1){return t?(qe(),Ta(ht,null,e)):ee(ht,null,e)}function Be(e){return e==null||typeof e=="boolean"?ee(ht):z(e)?ee(Ae,null,e.slice()):typeof e=="object"?ct(e):ee(wr,null,String(e))}function ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qt(e)}function Ia(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ia(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(xr in t)?t._ctx=ye:a===3&&ye&&(ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:ye},n=32):(t=String(t),r&64?(n=16,t=[kt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Bc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ma([t.class,r.class]));else if(a==="style")t.style=ur([t.style,r.style]);else if(dr(a)){const i=t[a],o=r[a];o&&i!==o&&!(z(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ue(e,t,n,r=null){De(e,t,7,[n,r])}const Yc=ls();let Wc=0;function qc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Yc,i={uid:Wc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Eo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:as(r,a),emitsOptions:qo(r,a),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Jl.bind(null,i),e.ce&&e.ce(i),i}let me=null;const Vt=e=>{me=e,e.scope.on()},Rt=()=>{me&&me.scope.off(),me=null};function ds(e){return e.vnode.shapeFlag&4}let xn=!1;function Vc(e,t=!1){xn=t;const{props:n,children:r}=e.vnode,a=ds(e);Oc(e,n,a,t),Ic(e,r);const i=a?Gc(e,t):void 0;return xn=!1,i}function Gc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ea(new Proxy(e.ctx,kc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Qc(e):null;Vt(e),Zt();const i=dt(r,e,0,[e.props,a]);if(en(),Rt(),_o(i)){if(i.then(Rt,Rt),t)return i.then(o=>{bi(e,o,t)}).catch(o=>{br(o,e,0)});e.asyncDep=i}else bi(e,i,t)}else ms(e,t)}function bi(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=zo(t)),ms(e,n)}let yi;function ms(e,t,n){const r=e.type;if(!e.render){if(!t&&yi&&!r.render){const a=r.template||Oa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=_e(_e({isCustomElement:i,delimiters:s},o),l);r.render=yi(a,f)}}e.render=r.render||Fe}Vt(e),Zt(),Ec(e),en(),Rt()}function Xc(e){return new Proxy(e.attrs,{get(t,n){return Pe(e,"get","$attrs"),t[n]}})}function Qc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Xc(e))},slots:e.slots,emit:e.emit,expose:t}}function Na(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(zo(Ea(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in un)return un[n](e)},has(t,n){return n in t||n in un}}))}function Jc(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function Zc(e){return U(e)&&"__vccOpts"in e}const Oe=(e,t)=>Wl(e,t,xn);function hs(e,t,n){const r=arguments.length;return r===2?ae(t)&&!z(t)?or(t)?ee(e,null,[t]):ee(e,t):ee(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&or(n)&&(n=[n]),ee(e,t,n))}const ef=Symbol(""),tf=()=>Qe(ef),nf="3.2.45",rf="http://www.w3.org/2000/svg",At=typeof document<"u"?document:null,_i=At&&At.createElement("template"),af={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?At.createElementNS(rf,e):At.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>At.createTextNode(e),createComment:e=>At.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>At.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{_i.innerHTML=r?`<svg>${e}</svg>`:e;const s=_i.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function of(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function sf(e,t,n){const r=e.style,a=fe(n);if(n&&!a){for(const i in n)Qr(r,i,n[i]);if(t&&!fe(t))for(const i in t)n[i]==null&&Qr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const wi=/\s*!important$/;function Qr(e,t,n){if(z(n))n.forEach(r=>Qr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=lf(e,t);wi.test(n)?e.setProperty(Jt(r),n.replace(wi,""),"important"):e[r]=n}}const xi=["Webkit","Moz","ms"],Ir={};function lf(e,t){const n=Ir[t];if(n)return n;let r=Ve(t);if(r!=="filter"&&r in e)return Ir[t]=r;r=pr(r);for(let a=0;a<xi.length;a++){const i=xi[a]+r;if(i in e)return Ir[t]=i}return t}const ki="http://www.w3.org/1999/xlink";function cf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ki,t.slice(6,t.length)):e.setAttributeNS(ki,t,n);else{const i=il(t);n==null||i&&!vo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function ff(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=vo(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function uf(e,t,n,r){e.addEventListener(t,n,r)}function df(e,t,n,r){e.removeEventListener(t,n,r)}function mf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=hf(t);if(r){const f=i[t]=vf(r,a);uf(e,s,f,l)}else o&&(df(e,s,o,l),i[t]=void 0)}}const Ei=/(?:Once|Passive|Capture)$/;function hf(e){let t;if(Ei.test(e)){t={};let r;for(;r=e.match(Ei);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Jt(e.slice(2)),t]}let Nr=0;const pf=Promise.resolve(),gf=()=>Nr||(pf.then(()=>Nr=0),Nr=Date.now());function vf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;De(bf(r,n.value),t,5,[r])};return n.value=e,n.attached=gf(),n}function bf(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ai=/^on[a-z]/,yf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?of(e,r,a):t==="style"?sf(e,n,r):dr(t)?ha(t)||mf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):_f(e,t,r,a))?ff(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),cf(e,t,r,a))};function _f(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ai.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ai.test(t)&&fe(n)?!1:t in e}const wf=["ctrl","shift","alt","meta"],xf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>wf.some(n=>e[`${n}Key`]&&!t.includes(n))},kf=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=xf[t[a]];if(i&&i(n,t))return}return e(n,...r)},Ef=_e({patchProp:yf},af);let Pi;function Af(){return Pi||(Pi=Fc(Ef))}const Pf=(...e)=>{const t=Af().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Cf(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Cf(e){return fe(e)?document.querySelector(e):e}var Sf=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Of=Symbol();var Ci;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ci||(Ci={}));function Rf(){const e=hl(!0),t=e.run(()=>vr({}));let n=[],r=[];const a=Ea({install(i){a._a=i,i.provide(Of,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Sf?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}function Si(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Si(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Si(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sr(e){return sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sr(e)}function Tf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Oi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function If(e,t,n){return t&&Oi(e.prototype,t),n&&Oi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ma(e,t){return Mf(e)||Ff(e,t)||ps(e,t)||Df()}function Rn(e){return Nf(e)||Lf(e)||ps(e)||jf()}function Nf(e){if(Array.isArray(e))return Jr(e)}function Mf(e){if(Array.isArray(e))return e}function Lf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ff(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function ps(e,t){if(e){if(typeof e=="string")return Jr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jr(e,t)}}function Jr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function jf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Df(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ri=function(){},La={},gs={},vs=null,bs={mark:Ri,measure:Ri};try{typeof window<"u"&&(La=window),typeof document<"u"&&(gs=document),typeof MutationObserver<"u"&&(vs=MutationObserver),typeof performance<"u"&&(bs=performance)}catch{}var $f=La.navigator||{},Ti=$f.userAgent,Ii=Ti===void 0?"":Ti,pt=La,ne=gs,Ni=vs,zn=bs;pt.document;var rt=!!ne.documentElement&&!!ne.head&&typeof ne.addEventListener=="function"&&typeof ne.createElement=="function",ys=~Ii.indexOf("MSIE")||~Ii.indexOf("Trident/"),Hn,Un,Kn,Bn,Yn,Ze="___FONT_AWESOME___",Zr=16,_s="fa",ws="svg-inline--fa",Tt="data-fa-i2svg",ea="data-fa-pseudo-element",zf="data-fa-pseudo-element-pending",Fa="data-prefix",ja="data-icon",Mi="fontawesome-i2svg",Hf="async",Uf=["HTML","HEAD","STYLE","SCRIPT"],xs=function(){try{return!0}catch{return!1}}(),te="classic",oe="sharp",Da=[te,oe];function Tn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[te]}})}var kn=Tn((Hn={},ue(Hn,te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ue(Hn,oe,{fa:"solid",fass:"solid","fa-solid":"solid"}),Hn)),En=Tn((Un={},ue(Un,te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ue(Un,oe,{solid:"fass"}),Un)),An=Tn((Kn={},ue(Kn,te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ue(Kn,oe,{fass:"fa-solid"}),Kn)),Kf=Tn((Bn={},ue(Bn,te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ue(Bn,oe,{"fa-solid":"fass"}),Bn)),Bf=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,ks="fa-layers-text",Yf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Wf=Tn((Yn={},ue(Yn,te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ue(Yn,oe,{900:"fass"}),Yn)),Es=[1,2,3,4,5,6,7,8,9,10],qf=Es.concat([11,12,13,14,15,16,17,18,19,20]),Vf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Pt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pn=new Set;Object.keys(En[te]).map(Pn.add.bind(Pn));Object.keys(En[oe]).map(Pn.add.bind(Pn));var Gf=[].concat(Da,Rn(Pn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Pt.GROUP,Pt.SWAP_OPACITY,Pt.PRIMARY,Pt.SECONDARY]).concat(Es.map(function(e){return"".concat(e,"x")})).concat(qf.map(function(e){return"w-".concat(e)})),mn=pt.FontAwesomeConfig||{};function Xf(e){var t=ne.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Qf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ne&&typeof ne.querySelector=="function"){var Jf=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Jf.forEach(function(e){var t=Ma(e,2),n=t[0],r=t[1],a=Qf(Xf(n));a!=null&&(mn[r]=a)})}var As={styleDefault:"solid",familyDefault:"classic",cssPrefix:_s,replacementClass:ws,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};mn.familyPrefix&&(mn.cssPrefix=mn.familyPrefix);var Gt=R(R({},As),mn);Gt.autoReplaceSvg||(Gt.observeMutations=!1);var N={};Object.keys(As).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){Gt[e]=n,hn.forEach(function(r){return r(N)})},get:function(){return Gt[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){Gt.cssPrefix=t,hn.forEach(function(n){return n(N)})},get:function(){return Gt.cssPrefix}});pt.FontAwesomeConfig=N;var hn=[];function Zf(e){return hn.push(e),function(){hn.splice(hn.indexOf(e),1)}}var ot=Zr,We={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function eu(e){if(!(!e||!rt)){var t=ne.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ne.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ne.head.insertBefore(t,r),e}}var tu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Cn(){for(var e=12,t="";e-- >0;)t+=tu[Math.random()*62|0];return t}function tn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function $a(e){return e.classList?tn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ps(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function nu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ps(e[n]),'" ')},"").trim()}function kr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function za(e){return e.size!==We.size||e.x!==We.x||e.y!==We.y||e.rotate!==We.rotate||e.flipX||e.flipY}function ru(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function au(e){var t=e.transform,n=e.width,r=n===void 0?Zr:n,a=e.height,i=a===void 0?Zr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ys?l+="translate(".concat(t.x/ot-r/2,"em, ").concat(t.y/ot-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ot,"em), calc(-50% + ").concat(t.y/ot,"em)) "):l+="translate(".concat(t.x/ot,"em, ").concat(t.y/ot,"em) "),l+="scale(".concat(t.size/ot*(t.flipX?-1:1),", ").concat(t.size/ot*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var iu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Cs(){var e=_s,t=ws,n=N.cssPrefix,r=N.replacementClass,a=iu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Li=!1;function Mr(){N.autoAddCss&&!Li&&(eu(Cs()),Li=!0)}var ou={mixout:function(){return{dom:{css:Cs,insertCss:Mr}}},hooks:function(){return{beforeDOMElementCreation:function(){Mr()},beforeI2svg:function(){Mr()}}}},et=pt||{};et[Ze]||(et[Ze]={});et[Ze].styles||(et[Ze].styles={});et[Ze].hooks||(et[Ze].hooks={});et[Ze].shims||(et[Ze].shims=[]);var Le=et[Ze],Ss=[],su=function e(){ne.removeEventListener("DOMContentLoaded",e),lr=1,Ss.map(function(t){return t()})},lr=!1;rt&&(lr=(ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ne.readyState),lr||ne.addEventListener("DOMContentLoaded",su));function lu(e){rt&&(lr?setTimeout(e,0):Ss.push(e))}function In(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ps(e):"<".concat(t," ").concat(nu(r),">").concat(i.map(In).join(""),"</").concat(t,">")}function Fi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var cu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Lr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?cu(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function fu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ta(e){var t=fu(e);return t.length===1?t[0].toString(16):null}function uu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ji(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function na(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ji(t);typeof Le.hooks.addPack=="function"&&!a?Le.hooks.addPack(e,ji(t)):Le.styles[e]=R(R({},Le.styles[e]||{}),i),e==="fas"&&na("fa",t)}var Wn,qn,Vn,$t=Le.styles,du=Le.shims,mu=(Wn={},ue(Wn,te,Object.values(An[te])),ue(Wn,oe,Object.values(An[oe])),Wn),Ha=null,Os={},Rs={},Ts={},Is={},Ns={},hu=(qn={},ue(qn,te,Object.keys(kn[te])),ue(qn,oe,Object.keys(kn[oe])),qn);function pu(e){return~Gf.indexOf(e)}function gu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!pu(a)?a:null}var Ms=function(){var t=function(i){return Lr($t,function(o,s,l){return o[l]=Lr(s,i,{}),o},{})};Os=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Rs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ns=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in $t||N.autoFetchSvg,r=Lr(du,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ts=r.names,Is=r.unicodes,Ha=Er(N.styleDefault,{family:N.familyDefault})};Zf(function(e){Ha=Er(e.styleDefault,{family:N.familyDefault})});Ms();function Ua(e,t){return(Os[e]||{})[t]}function vu(e,t){return(Rs[e]||{})[t]}function Ct(e,t){return(Ns[e]||{})[t]}function Ls(e){return Ts[e]||{prefix:null,iconName:null}}function bu(e){var t=Is[e],n=Ua("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gt(){return Ha}var Ka=function(){return{prefix:null,iconName:null,rest:[]}};function Er(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?te:n,a=kn[r][e],i=En[r][e]||En[r][a],o=e in Le.styles?e:null;return i||o||null}var Di=(Vn={},ue(Vn,te,Object.keys(An[te])),ue(Vn,oe,Object.keys(An[oe])),Vn);function Ar(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ue(t,te,"".concat(N.cssPrefix,"-").concat(te)),ue(t,oe,"".concat(N.cssPrefix,"-").concat(oe)),t),o=null,s=te;(e.includes(i[te])||e.some(function(f){return Di[te].includes(f)}))&&(s=te),(e.includes(i[oe])||e.some(function(f){return Di[oe].includes(f)}))&&(s=oe);var l=e.reduce(function(f,c){var d=gu(N.cssPrefix,c);if($t[c]?(c=mu[s].includes(c)?Kf[s][c]:c,o=c,f.prefix=c):hu[s].indexOf(c)>-1?(o=c,f.prefix=Er(c,{family:s})):d?f.iconName=d:c!==N.replacementClass&&c!==i[te]&&c!==i[oe]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var h=o==="fa"?Ls(f.iconName):{},g=Ct(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||g||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!$t.far&&$t.fas&&!N.autoFetchSvg&&(f.prefix="fas")}return f},Ka());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===oe&&($t.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=gt()||"fas"),l}var yu=function(){function e(){Tf(this,e),this.definitions={}}return If(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=R(R({},n.definitions[s]||{}),o[s]),na(s,o[s]);var l=An[te][s];l&&na(l,o[s]),Ms()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),$i=[],zt={},Yt={},_u=Object.keys(Yt);function wu(e,t){var n=t.mixoutsTo;return $i=e,zt={},Object.keys(Yt).forEach(function(r){_u.indexOf(r)===-1&&delete Yt[r]}),$i.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),sr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){zt[o]||(zt[o]=[]),zt[o].push(i[o])})}r.provides&&r.provides(Yt)}),n}function ra(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=zt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function It(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=zt[e]||[];a.forEach(function(i){i.apply(null,n)})}function tt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Yt[e]?Yt[e].apply(null,t):void 0}function aa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||gt();if(t)return t=Ct(n,t)||t,Fi(Fs.definitions,n,t)||Fi(Le.styles,n,t)}var Fs=new yu,xu=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,It("noAuto")},ku={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rt?(It("beforeI2svg",t),tt("pseudoElements2svg",t),tt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,lu(function(){Au({autoReplaceSvgRoot:n}),It("watch",t)})}},Eu={icon:function(t){if(t===null)return null;if(sr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Er(t[0]);return{prefix:r,iconName:Ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(Bf))){var a=Ar(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||gt(),iconName:Ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=gt();return{prefix:i,iconName:Ct(i,t)||t}}}},Ce={noAuto:xu,config:N,dom:ku,parse:Eu,library:Fs,findIconDefinition:aa,toHtml:In},Au=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ne:n;(Object.keys(Le.styles).length>0||N.autoFetchSvg)&&rt&&N.autoReplaceSvg&&Ce.dom.i2svg({node:r})};function Pr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return In(r)})}}),Object.defineProperty(e,"node",{get:function(){if(rt){var r=ne.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Pu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(za(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=kr(R(R({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Cu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},a),{},{id:o}),children:r}]}]}function Ba(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,h=e.watchable,g=h===void 0?!1:h,k=r.found?r:n,S=k.width,D=k.height,C=a==="fak",M=[N.replacementClass,i?"".concat(N.cssPrefix,"-").concat(i):""].filter(function(ge){return d.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(d.classes).join(" "),T={children:[],attributes:R(R({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:M,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(D)})},H=C&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/D*16*.0625,"em")}:{};g&&(T.attributes[Tt]=""),l&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(c||Cn())},children:[l]}),delete T.attributes.title);var q=R(R({},T),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:R(R({},H),d.styles)}),se=r.found&&n.found?tt("generateAbstractMask",q)||{children:[],attributes:{}}:tt("generateAbstractIcon",q)||{children:[],attributes:{}},de=se.children,ke=se.attributes;return q.children=de,q.attributes=ke,s?Cu(q):Pu(q)}function zi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=R(R(R({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Tt]="");var c=R({},o.styles);za(a)&&(c.transform=au({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=kr(c);d.length>0&&(f.style=d);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Su(e){var t=e.content,n=e.title,r=e.extra,a=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=kr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Fr=Le.styles;function ia(e){var t=e[0],n=e[1],r=e.slice(4),a=Ma(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(Pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Pt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Pt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Ou={found:!1,width:512,height:512};function Ru(e,t){!xs&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function oa(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=gt()),new Promise(function(r,a){if(tt("missingIconAbstract"),n==="fa"){var i=Ls(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Fr[t]&&Fr[t][e]){var o=Fr[t][e];return r(ia(o))}Ru(e,t),r(R(R({},Ou),{},{icon:N.showMissingIcons&&e?tt("missingIconAbstract")||{}:{}}))})}var Hi=function(){},sa=N.measurePerformance&&zn&&zn.mark&&zn.measure?zn:{mark:Hi,measure:Hi},cn='FA "6.2.1"',Tu=function(t){return sa.mark("".concat(cn," ").concat(t," begins")),function(){return js(t)}},js=function(t){sa.mark("".concat(cn," ").concat(t," ends")),sa.measure("".concat(cn," ").concat(t),"".concat(cn," ").concat(t," begins"),"".concat(cn," ").concat(t," ends"))},Ya={begin:Tu,end:js},er=function(){};function Ui(e){var t=e.getAttribute?e.getAttribute(Tt):null;return typeof t=="string"}function Iu(e){var t=e.getAttribute?e.getAttribute(Fa):null,n=e.getAttribute?e.getAttribute(ja):null;return t&&n}function Nu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function Mu(){if(N.autoReplaceSvg===!0)return tr.replace;var e=tr[N.autoReplaceSvg];return e||tr.replace}function Lu(e){return ne.createElementNS("http://www.w3.org/2000/svg",e)}function Fu(e){return ne.createElement(e)}function Ds(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Lu:Fu:n;if(typeof e=="string")return ne.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ds(o,{ceFn:r}))}),a}function ju(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var tr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ds(a),n)}),n.getAttribute(Tt)===null&&N.keepOriginalSource){var r=ne.createComment(ju(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~$a(n).indexOf(N.replacementClass))return tr.replace(t);var a=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return In(s)}).join(`
`);n.setAttribute(Tt,""),n.innerHTML=o}};function Ki(e){e()}function $s(e,t){var n=typeof t=="function"?t:er;if(e.length===0)n();else{var r=Ki;N.mutateApproach===Hf&&(r=pt.requestAnimationFrame||Ki),r(function(){var a=Mu(),i=Ya.begin("mutate");e.map(a),i(),n()})}}var Wa=!1;function zs(){Wa=!0}function la(){Wa=!1}var cr=null;function Bi(e){if(Ni&&N.observeMutations){var t=e.treeCallback,n=t===void 0?er:t,r=e.nodeCallback,a=r===void 0?er:r,i=e.pseudoElementsCallback,o=i===void 0?er:i,s=e.observeMutationsRoot,l=s===void 0?ne:s;cr=new Ni(function(f){if(!Wa){var c=gt();tn(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Ui(d.addedNodes[0])&&(N.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&N.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Ui(d.target)&&~Vf.indexOf(d.attributeName))if(d.attributeName==="class"&&Iu(d.target)){var h=Ar($a(d.target)),g=h.prefix,k=h.iconName;d.target.setAttribute(Fa,g||c),k&&d.target.setAttribute(ja,k)}else Nu(d.target)&&a(d.target)})}}),rt&&cr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Du(){cr&&cr.disconnect()}function $u(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function zu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Ar($a(e));return a.prefix||(a.prefix=gt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=vu(a.prefix,e.innerText)||Ua(a.prefix,ta(e.innerText))),!a.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Hu(e){var t=tn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||Cn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Uu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:We,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=zu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Hu(e),s=ra("parseNodeAttributes",{},e),l=t.styleParser?$u(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:We,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ku=Le.styles;function Hs(e){var t=N.autoReplaceSvg==="nest"?Yi(e,{styleParser:!1}):Yi(e);return~t.extra.classes.indexOf(ks)?tt("generateLayersText",e,t):tt("generateSvgReplacementMutation",e,t)}var vt=new Set;Da.map(function(e){vt.add("fa-".concat(e))});Object.keys(kn[te]).map(vt.add.bind(vt));Object.keys(kn[oe]).map(vt.add.bind(vt));vt=Rn(vt);function Wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rt)return Promise.resolve();var n=ne.documentElement.classList,r=function(d){return n.add("".concat(Mi,"-").concat(d))},a=function(d){return n.remove("".concat(Mi,"-").concat(d))},i=N.autoFetchSvg?vt:Da.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Ku));i.includes("fa")||i.push("fa");var o=[".".concat(ks,":not([").concat(Tt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Tt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=tn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ya.begin("onTree"),f=s.reduce(function(c,d){try{var h=Hs(d);h&&c.push(h)}catch(g){xs||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(h){$s(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),d(h)})})}function Bu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Hs(e).then(function(n){n&&$s([n],t)})}function Yu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:aa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:aa(a||{})),e(r,R(R({},n),{},{mask:a}))}}var Wu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?We:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,h=d===void 0?null:d,g=n.titleId,k=g===void 0?null:g,S=n.classes,D=S===void 0?[]:S,C=n.attributes,M=C===void 0?{}:C,T=n.styles,H=T===void 0?{}:T;if(t){var q=t.prefix,se=t.iconName,de=t.icon;return Pr(R({type:"icon"},t),function(){return It("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(h?M["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(k||Cn()):(M["aria-hidden"]="true",M.focusable="false")),Ba({icons:{main:ia(de),mask:l?ia(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:q,iconName:se,transform:R(R({},We),a),symbol:o,title:h,maskId:c,titleId:k,extra:{attributes:M,styles:H,classes:D}})})}},qu={mixout:function(){return{icon:Yu(Wu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Wi,n.nodeCallback=Bu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ne:r,i=n.callback,o=i===void 0?function(){}:i;return Wi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(g,k){Promise.all([oa(a,s),c.iconName?oa(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var D=Ma(S,2),C=D[0],M=D[1];g([n,Ba({icons:{main:C,mask:M},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=kr(s);l.length>0&&(a.style=l);var f;return za(o)&&(f=tt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Vu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Pr({type:"layer"},function(){It("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(Rn(i)).join(" ")},children:o}]})}}}},Gu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Pr({type:"counter",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),Su({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(Rn(s))}})})}}}},Xu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?We:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Pr({type:"text",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),zi({content:n,transform:R(R({},We),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(N.cssPrefix,"-layers-text")].concat(Rn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ys){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return N.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,zi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Qu=new RegExp('"',"ug"),qi=[1105920,1112319];function Ju(e){var t=e.replace(Qu,""),n=uu(t,0),r=n>=qi[0]&&n<=qi[1],a=t.length===2?t[0]===t[1]:!1;return{value:ta(a?t[0]:t),isSecondary:r||a}}function Vi(e,t){var n="".concat(zf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=tn(e.children),o=i.filter(function(de){return de.getAttribute(ea)===t})[0],s=pt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Yf),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?oe:te,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?En[h][l[2].toLowerCase()]:Wf[h][f],k=Ju(d),S=k.value,D=k.isSecondary,C=l[0].startsWith("FontAwesome"),M=Ua(g,S),T=M;if(C){var H=bu(S);H.iconName&&H.prefix&&(M=H.iconName,g=H.prefix)}if(M&&!D&&(!o||o.getAttribute(Fa)!==g||o.getAttribute(ja)!==T)){e.setAttribute(n,T),o&&e.removeChild(o);var q=Uu(),se=q.extra;se.attributes[ea]=t,oa(M,g).then(function(de){var ke=Ba(R(R({},q),{},{icons:{main:de,mask:Ka()},prefix:g,iconName:T,extra:se,watchable:!0})),ge=ne.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=ke.map(function(Se){return In(Se)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Zu(e){return Promise.all([Vi(e,"::before"),Vi(e,"::after")])}function ed(e){return e.parentNode!==document.head&&!~Uf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ea)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Gi(e){if(rt)return new Promise(function(t,n){var r=tn(e.querySelectorAll("*")).filter(ed).map(Zu),a=Ya.begin("searchPseudoElements");zs(),Promise.all(r).then(function(){a(),la(),t()}).catch(function(){a(),la(),n()})})}var td={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Gi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ne:r;N.searchPseudoElements&&Gi(a)}}},Xi=!1,nd={mixout:function(){return{dom:{unwatch:function(){zs(),Xi=!0}}}},hooks:function(){return{bootstrap:function(){Bi(ra("mutationObserverCallbacks",{}))},noAuto:function(){Du()},watch:function(n){var r=n.observeMutationsRoot;Xi?la():Bi(ra("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Qi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},rd={mixout:function(){return{parse:{transform:function(n){return Qi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Qi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:h};return{tag:"g",attributes:R({},g.outer),children:[{tag:"g",attributes:R({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),g.path)}]}]}}}},jr={x:0,y:0,width:"100%",height:"100%"};function Ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ad(e){return e.tag==="g"?e.children:[e]}var id={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Ar(a.split(" ").map(function(o){return o.trim()})):Ka();return i.prefix||(i.prefix=gt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,h=o.icon,g=ru({transform:l,containerWidth:d,iconWidth:f}),k={tag:"rect",attributes:R(R({},jr),{},{fill:"white"})},S=c.children?{children:c.children.map(Ji)}:{},D={tag:"g",attributes:R({},g.inner),children:[Ji(R({tag:c.tag,attributes:R(R({},c.attributes),g.path)},S))]},C={tag:"g",attributes:R({},g.outer),children:[D]},M="mask-".concat(s||Cn()),T="clip-".concat(s||Cn()),H={tag:"mask",attributes:R(R({},jr),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,C]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:ad(h)},H]};return r.push(q,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(M,")")},jr)}),{children:r,attributes:a}}}},od={provides:function(t){var n=!1;pt.matchMedia&&(n=pt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:R(R({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:R(R({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:R(R({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},sd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},ld=[ou,qu,Vu,Gu,Xu,td,nd,rd,id,od,sd];wu(ld,{mixoutsTo:Ce});Ce.noAuto;Ce.config;var cd=Ce.library;Ce.dom;Ce.parse;Ce.findIconDefinition;Ce.toHtml;Ce.icon;Ce.layer;Ce.text;Ce.counter;var fd={prefix:"fas",iconName:"dice-d20",icon:[512,512,[],"f6cf","M64.7 125.8l53.2 31.9c7.8 4.7 17.8 2 22.2-5.9L217.6 12.1c3-5.4-.9-12.1-7.1-12.1c-1.6 0-3.2 .5-4.6 1.4L63.9 98.8c-9.6 6.6-9.2 20.9 .8 26.9zM32 171.7V295.3c0 8 10.4 11 14.7 4.4l60-92c5-7.6 2.6-17.8-5.2-22.5L56.2 158C45.6 151.6 32 159.3 32 171.7zM326.4 12.1l77.6 139.6c4.4 7.9 14.5 10.6 22.2 5.9l53.2-31.9c10-6 10.4-20.3 .8-26.9L338.1 1.4c-1.4-.9-3-1.4-4.6-1.4c-6.2 0-10.1 6.7-7.1 12.1zM512 171.7c0-12.4-13.6-20.1-24.2-13.7l-45.3 27.2c-7.8 4.7-10.1 14.9-5.2 22.5l60 92c4.3 6.7 14.7 3.6 14.7-4.4V171.7zm-49.3 246L302.1 436.6c-8.1 .9-14.1 7.8-14.1 15.9v52.8c0 3.7 3 6.8 6.8 6.8c.8 0 1.6-.1 2.4-.4l172.7-64c6.1-2.2 10.1-8 10.1-14.5c0-9.3-8.1-16.5-17.3-15.4zM249.2 512c3.7 0 6.8-3 6.8-6.8V452.6c0-8.1-6.1-14.9-14.1-15.9l-160.6-19c-9.2-1.1-17.3 6.1-17.3 15.4c0 6.5 4 12.3 10.1 14.5l172.7 64c.8 .3 1.6 .4 2.4 .4zM57.7 382.9l170.9 20.2c7.8 .9 13.4-7.5 9.5-14.3l-85.7-150c-5.9-10.4-20.7-10.8-27.3-.8L46.2 358.2c-6.5 9.9-.3 23.3 11.5 24.7zm439.6-24.8L418.9 238.1c-6.5-10-21.4-9.6-27.3 .8L306.2 388.5c-3.9 6.8 1.6 15.2 9.5 14.3l170.1-20c11.8-1.4 18-14.7 11.5-24.6zm-216.9 11l78.4-137.2c6.1-10.7-1.6-23.9-13.9-23.9H199.1c-12.3 0-20 13.3-13.9 23.9l78.4 137.2c3.7 6.4 13 6.4 16.7 0zM190.4 176H353.6c12.2 0 19.9-13.1 14-23.8l-80-144c-2.8-5.1-8.2-8.2-14-8.2h-3.2c-5.8 0-11.2 3.2-14 8.2l-80 144c-5.9 10.7 1.8 23.8 14 23.8z"]};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof window<"u";function ud(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const G=Object.assign;function Dr(e,t){const n={};for(const r in t){const a=t[r];n[r]=$e(a)?a.map(e):e(a)}return n}const pn=()=>{},$e=Array.isArray,dd=/\/$/,md=e=>e.replace(dd,"");function $r(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=vd(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function hd(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Zi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function pd(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Xt(t.matched[r],n.matched[a])&&Us(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Xt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Us(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!gd(e[n],t[n]))return!1;return!0}function gd(e,t){return $e(e)?eo(e,t):$e(t)?eo(t,e):e===t}function eo(e,t){return $e(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function vd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Sn;(function(e){e.pop="pop",e.push="push"})(Sn||(Sn={}));var gn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(gn||(gn={}));function bd(e){if(!e)if(jt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),md(e)}const yd=/^[^#]+#/;function _d(e,t){return e.replace(yd,"#")+t}function wd(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Cr=()=>({left:window.pageXOffset,top:window.pageYOffset});function xd(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=wd(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function to(e,t){return(history.state?history.state.position-t:-1)+e}const ca=new Map;function kd(e,t){ca.set(e,t)}function Ed(e){const t=ca.get(e);return ca.delete(e),t}let Ad=()=>location.protocol+"//"+location.host;function Ks(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Zi(l,"")}return Zi(n,e)+r+a}function Pd(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const g=Ks(e,location),k=n.value,S=t.value;let D=0;if(h){if(n.value=g,t.value=h,o&&o===k){o=null;return}D=S?h.position-S.position:0}else r(g);a.forEach(C=>{C(n.value,k,{delta:D,type:Sn.pop,direction:D?D>0?gn.forward:gn.back:gn.unknown})})};function l(){o=n.value}function f(h){a.push(h);const g=()=>{const k=a.indexOf(h);k>-1&&a.splice(k,1)};return i.push(g),g}function c(){const{history:h}=window;h.state&&h.replaceState(G({},h.state,{scroll:Cr()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:f,destroy:d}}function no(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Cr():null}}function Cd(e){const{history:t,location:n}=window,r={value:Ks(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Ad()+e+l;try{t[c?"replaceState":"pushState"](f,"",h),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](h)}}function o(l,f){const c=G({},t.state,no(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=G({},a.value,t.state,{forward:l,scroll:Cr()});i(c.current,c,!0);const d=G({},no(r.value,l,null),{position:c.position+1},f);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function Sd(e){e=bd(e);const t=Cd(e),n=Pd(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=G({location:"",base:e,go:r,createHref:_d.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Od(e){return typeof e=="string"||e&&typeof e=="object"}function Bs(e){return typeof e=="string"||typeof e=="symbol"}const st={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ys=Symbol("");var ro;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ro||(ro={}));function Qt(e,t){return G(new Error,{type:e,[Ys]:!0},t)}function Ge(e,t){return e instanceof Error&&Ys in e&&(t==null||!!(e.type&t))}const ao="[^/]+?",Rd={sensitive:!1,strict:!1,start:!0,end:!0},Td=/[.+*?^${}()[\]/\\]/g;function Id(e,t){const n=G({},Rd,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const h=f[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(Td,"\\$&"),g+=40;else if(h.type===1){const{value:k,repeatable:S,optional:D,regexp:C}=h;i.push({name:k,repeatable:S,optional:D});const M=C||ao;if(M!==ao){g+=10;try{new RegExp(`(${M})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${k}" (${M}): `+H.message)}}let T=S?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(T=D&&f.length<2?`(?:/${T})`:"/"+T),D&&(T+="?"),a+=T,g+=20,D&&(g+=-8),S&&(g+=-20),M===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let h=1;h<c.length;h++){const g=c[h]||"",k=i[h-1];d[k.name]=g&&k.repeatable?g.split("/"):g}return d}function l(f){let c="",d=!1;for(const h of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const g of h)if(g.type===0)c+=g.value;else if(g.type===1){const{value:k,repeatable:S,optional:D}=g,C=k in f?f[k]:"";if($e(C)&&!S)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const M=$e(C)?C.join("/"):C;if(!M)if(D)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${k}"`);c+=M}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Nd(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Md(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Nd(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(io(r))return 1;if(io(a))return-1}return a.length-r.length}function io(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ld={type:0,value:""},Fd=/[a-zA-Z0-9_]/;function jd(e){if(!e)return[[]];if(e==="/")return[[Ld]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function d(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:Fd.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function Dd(e,t,n){const r=Id(jd(e.path),n),a=G(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function $d(e,t){const n=[],r=new Map;t=lo({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,h){const g=!h,k=zd(c);k.aliasOf=h&&h.record;const S=lo(t,c),D=[k];if("alias"in c){const T=typeof c.alias=="string"?[c.alias]:c.alias;for(const H of T)D.push(G({},k,{components:h?h.record.components:k.components,path:H,aliasOf:h?h.record:k}))}let C,M;for(const T of D){const{path:H}=T;if(d&&H[0]!=="/"){const q=d.record.path,se=q[q.length-1]==="/"?"":"/";T.path=d.record.path+(H&&se+H)}if(C=Dd(T,d,S),h?h.alias.push(C):(M=M||C,M!==C&&M.alias.push(C),g&&c.name&&!so(C)&&o(c.name)),k.children){const q=k.children;for(let se=0;se<q.length;se++)i(q[se],C,h&&h.children[se])}h=h||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&l(C)}return M?()=>{o(M)}:pn}function o(c){if(Bs(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&Md(c,n[d])>=0&&(c.record.path!==n[d].record.path||!Ws(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!so(c)&&r.set(c.record.name,c)}function f(c,d){let h,g={},k,S;if("name"in c&&c.name){if(h=r.get(c.name),!h)throw Qt(1,{location:c});S=h.record.name,g=G(oo(d.params,h.keys.filter(M=>!M.optional).map(M=>M.name)),c.params&&oo(c.params,h.keys.map(M=>M.name))),k=h.stringify(g)}else if("path"in c)k=c.path,h=n.find(M=>M.re.test(k)),h&&(g=h.parse(k),S=h.record.name);else{if(h=d.name?r.get(d.name):n.find(M=>M.re.test(d.path)),!h)throw Qt(1,{location:c,currentLocation:d});S=h.record.name,g=G({},d.params,c.params),k=h.stringify(g)}const D=[];let C=h;for(;C;)D.unshift(C.record),C=C.parent;return{name:S,path:k,params:g,matched:D,meta:Ud(D)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function oo(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function zd(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Hd(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Hd(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function so(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ud(e){return e.reduce((t,n)=>G(t,n.meta),{})}function lo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ws(e,t){return t.children.some(n=>n===e||Ws(e,n))}const qs=/#/g,Kd=/&/g,Bd=/\//g,Yd=/=/g,Wd=/\?/g,Vs=/\+/g,qd=/%5B/g,Vd=/%5D/g,Gs=/%5E/g,Gd=/%60/g,Xs=/%7B/g,Xd=/%7C/g,Qs=/%7D/g,Qd=/%20/g;function qa(e){return encodeURI(""+e).replace(Xd,"|").replace(qd,"[").replace(Vd,"]")}function Jd(e){return qa(e).replace(Xs,"{").replace(Qs,"}").replace(Gs,"^")}function fa(e){return qa(e).replace(Vs,"%2B").replace(Qd,"+").replace(qs,"%23").replace(Kd,"%26").replace(Gd,"`").replace(Xs,"{").replace(Qs,"}").replace(Gs,"^")}function Zd(e){return fa(e).replace(Yd,"%3D")}function em(e){return qa(e).replace(qs,"%23").replace(Wd,"%3F")}function tm(e){return e==null?"":em(e).replace(Bd,"%2F")}function fr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function nm(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Vs," "),o=i.indexOf("="),s=fr(o<0?i:i.slice(0,o)),l=o<0?null:fr(i.slice(o+1));if(s in t){let f=t[s];$e(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function co(e){let t="";for(let n in e){const r=e[n];if(n=Zd(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}($e(r)?r.map(i=>i&&fa(i)):[r&&fa(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function rm(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=$e(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const am=Symbol(""),fo=Symbol(""),Va=Symbol(""),Js=Symbol(""),ua=Symbol("");function on(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ft(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Qt(4,{from:n,to:t})):d instanceof Error?s(d):Od(d)?s(Qt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function zr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(im(s)){const f=(s.__vccOpts||s)[t];f&&a.push(ft(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=ud(f)?f.default:f;i.components[o]=c;const h=(c.__vccOpts||c)[t];return h&&ft(h,n,r,i,o)()}))}}return a}function im(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function uo(e){const t=Qe(Va),n=Qe(Js),r=Oe(()=>t.resolve(je(e.to))),a=Oe(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const h=d.findIndex(Xt.bind(null,c));if(h>-1)return h;const g=mo(l[f-2]);return f>1&&mo(c)===g&&d[d.length-1].path!==g?d.findIndex(Xt.bind(null,l[f-2])):h}),i=Oe(()=>a.value>-1&&cm(n.params,r.value.params)),o=Oe(()=>a.value>-1&&a.value===n.matched.length-1&&Us(n.params,r.value.params));function s(l={}){return lm(l)?t[je(e.replace)?"replace":"push"](je(e.to)).catch(pn):Promise.resolve()}return{route:r,href:Oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const om=Sa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:uo,setup(e,{slots:t}){const n=On(uo(e)),{options:r}=Qe(Va),a=Oe(()=>({[ho(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ho(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:hs("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),sm=om;function lm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function cm(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!$e(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function mo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ho=(e,t,n)=>e??t??n,fm=Sa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Qe(ua),a=Oe(()=>e.route||r.value),i=Qe(fo,0),o=Oe(()=>{let f=je(i);const{matched:c}=a.value;let d;for(;(d=c[f])&&!d.components;)f++;return f}),s=Oe(()=>a.value.matched[o.value]);Xn(fo,Oe(()=>o.value+1)),Xn(am,s),Xn(ua,a);const l=vr();return Qn(()=>[l.value,s.value,e.name],([f,c,d],[h,g,k])=>{c&&(c.instances[d]=f,g&&g!==c&&f&&f===h&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Xt(c,g)||!h)&&(c.enterCallbacks[d]||[]).forEach(S=>S(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,d=s.value,h=d&&d.components[c];if(!h)return po(n.default,{Component:h,route:f});const g=d.props[c],k=g?g===!0?f.params:typeof g=="function"?g(f):g:null,D=hs(h,G({},k,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return po(n.default,{Component:D,route:f})||D}}});function po(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Zs=fm;function um(e){const t=$d(e.routes,e),n=e.parseQuery||nm,r=e.stringifyQuery||co,a=e.history,i=on(),o=on(),s=on(),l=Ul(st);let f=st;jt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Dr.bind(null,b=>""+b),d=Dr.bind(null,tm),h=Dr.bind(null,fr);function g(b,O){let A,L;return Bs(b)?(A=t.getRecordMatcher(b),L=O):L=b,t.addRoute(L,A)}function k(b){const O=t.getRecordMatcher(b);O&&t.removeRoute(O)}function S(){return t.getRoutes().map(b=>b.record)}function D(b){return!!t.getRecordMatcher(b)}function C(b,O){if(O=G({},O||l.value),typeof b=="string"){const u=$r(n,b,O.path),m=t.resolve({path:u.path},O),p=a.createHref(u.fullPath);return G(u,m,{params:h(m.params),hash:fr(u.hash),redirectedFrom:void 0,href:p})}let A;if("path"in b)A=G({},b,{path:$r(n,b.path,O.path).path});else{const u=G({},b.params);for(const m in u)u[m]==null&&delete u[m];A=G({},b,{params:d(b.params)}),O.params=d(O.params)}const L=t.resolve(A,O),Y=b.hash||"";L.params=c(h(L.params));const ie=hd(r,G({},b,{hash:Jd(Y),path:L.path})),K=a.createHref(ie);return G({fullPath:ie,hash:Y,query:r===co?rm(b.query):b.query||{}},L,{redirectedFrom:void 0,href:K})}function M(b){return typeof b=="string"?$r(n,b,l.value.path):G({},b)}function T(b,O){if(f!==b)return Qt(8,{from:O,to:b})}function H(b){return de(b)}function q(b){return H(G(M(b),{replace:!0}))}function se(b){const O=b.matched[b.matched.length-1];if(O&&O.redirect){const{redirect:A}=O;let L=typeof A=="function"?A(b):A;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=M(L):{path:L},L.params={}),G({query:b.query,hash:b.hash,params:"path"in L?{}:b.params},L)}}function de(b,O){const A=f=C(b),L=l.value,Y=b.state,ie=b.force,K=b.replace===!0,u=se(A);if(u)return de(G(M(u),{state:typeof u=="object"?G({},Y,u.state):Y,force:ie,replace:K}),O||A);const m=A;m.redirectedFrom=O;let p;return!ie&&pd(r,L,A)&&(p=Qt(16,{to:m,from:L}),yt(L,L,!0,!1)),(p?Promise.resolve(p):ge(m,L)).catch(v=>Ge(v)?Ge(v,2)?v:Re(v):J(v,m,L)).then(v=>{if(v){if(Ge(v,2))return de(G({replace:K},M(v.to),{state:typeof v.to=="object"?G({},Y,v.to.state):Y,force:ie}),O||m)}else v=at(m,L,!0,K,Y);return Se(m,L,v),v})}function ke(b,O){const A=T(b,O);return A?Promise.reject(A):Promise.resolve()}function ge(b,O){let A;const[L,Y,ie]=dm(b,O);A=zr(L.reverse(),"beforeRouteLeave",b,O);for(const u of L)u.leaveGuards.forEach(m=>{A.push(ft(m,b,O))});const K=ke.bind(null,b,O);return A.push(K),Ft(A).then(()=>{A=[];for(const u of i.list())A.push(ft(u,b,O));return A.push(K),Ft(A)}).then(()=>{A=zr(Y,"beforeRouteUpdate",b,O);for(const u of Y)u.updateGuards.forEach(m=>{A.push(ft(m,b,O))});return A.push(K),Ft(A)}).then(()=>{A=[];for(const u of b.matched)if(u.beforeEnter&&!O.matched.includes(u))if($e(u.beforeEnter))for(const m of u.beforeEnter)A.push(ft(m,b,O));else A.push(ft(u.beforeEnter,b,O));return A.push(K),Ft(A)}).then(()=>(b.matched.forEach(u=>u.enterCallbacks={}),A=zr(ie,"beforeRouteEnter",b,O),A.push(K),Ft(A))).then(()=>{A=[];for(const u of o.list())A.push(ft(u,b,O));return A.push(K),Ft(A)}).catch(u=>Ge(u,8)?u:Promise.reject(u))}function Se(b,O,A){for(const L of s.list())L(b,O,A)}function at(b,O,A,L,Y){const ie=T(b,O);if(ie)return ie;const K=O===st,u=jt?history.state:{};A&&(L||K?a.replace(b.fullPath,G({scroll:K&&u&&u.scroll},Y)):a.push(b.fullPath,Y)),l.value=b,yt(b,O,A,K),Re()}let ze;function Nt(){ze||(ze=a.listen((b,O,A)=>{if(!Nn.listening)return;const L=C(b),Y=se(L);if(Y){de(G(Y,{replace:!0}),L).catch(pn);return}f=L;const ie=l.value;jt&&kd(to(ie.fullPath,A.delta),Cr()),ge(L,ie).catch(K=>Ge(K,12)?K:Ge(K,2)?(de(K.to,L).then(u=>{Ge(u,20)&&!A.delta&&A.type===Sn.pop&&a.go(-1,!1)}).catch(pn),Promise.reject()):(A.delta&&a.go(-A.delta,!1),J(K,L,ie))).then(K=>{K=K||at(L,ie,!1),K&&(A.delta&&!Ge(K,8)?a.go(-A.delta,!1):A.type===Sn.pop&&Ge(K,20)&&a.go(-1,!1)),Se(L,ie,K)}).catch(pn)}))}let bt=on(),nn=on(),le;function J(b,O,A){Re(b);const L=nn.list();return L.length?L.forEach(Y=>Y(b,O,A)):console.error(b),Promise.reject(b)}function X(){return le&&l.value!==st?Promise.resolve():new Promise((b,O)=>{bt.add([b,O])})}function Re(b){return le||(le=!b,Nt(),bt.list().forEach(([O,A])=>b?A(b):O()),bt.reset()),b}function yt(b,O,A,L){const{scrollBehavior:Y}=e;if(!jt||!Y)return Promise.resolve();const ie=!A&&Ed(to(b.fullPath,0))||(L||!A)&&history.state&&history.state.scroll||null;return Ko().then(()=>Y(b,O,ie)).then(K=>K&&xd(K)).catch(K=>J(K,b,O))}const Te=b=>a.go(b);let we;const Mt=new Set,Nn={currentRoute:l,listening:!0,addRoute:g,removeRoute:k,hasRoute:D,getRoutes:S,resolve:C,options:e,push:H,replace:q,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:nn.add,isReady:X,install(b){const O=this;b.component("RouterLink",sm),b.component("RouterView",Zs),b.config.globalProperties.$router=O,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>je(l)}),jt&&!we&&l.value===st&&(we=!0,H(a.location).catch(Y=>{}));const A={};for(const Y in st)A[Y]=Oe(()=>l.value[Y]);b.provide(Va,O),b.provide(Js,On(A)),b.provide(ua,l);const L=b.unmount;Mt.add(b),b.unmount=function(){Mt.delete(b),Mt.size<1&&(f=st,ze&&ze(),ze=null,l.value=st,we=!1,le=!1),L()}}};return Nn}function Ft(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function dm(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Xt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Xt(f,l))||a.push(l))}return[n,r,a]}const Ga=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},mm=["onContextmenu"],hm=["name","value","checked"],pm={__name:"Toggle",props:["values","def","name"],emits:["toggleValue"],setup(e,{emit:t}){const n=e,r=vr([]),{values:a}=n,i=o=>{const s=r.value.findIndex(f=>f.checked);let l=o.type==="contextmenu"?s-1:(s+1)%a.length;l=l<0?a.length-1:l,r.value[s].checked=!1,r.value[l].checked=!0,t("toggleValue",{newValue:r.value[l].value,previousValue:r.value[s].value})};return(o,s)=>(qe(),Ot("button",{class:"toggle-container",style:ur(`--elNum:${je(a).length}`),onClick:i,onContextmenu:kf(i,["prevent"])},[(qe(!0),Ot(Ae,null,wc(je(a),l=>(qe(),Ot("input",{disabled:"",name:n.name,type:"radio",class:"toggle__radio",key:`$toggle-${l}`,ref_for:!0,ref_key:"radios",ref:r,value:l,checked:n.def===l},null,8,hm))),128))],44,mm))}},gm=Ga(pm,[["__scopeId","data-v-1ea5dc4e"]]);const vm={class:"toggle-label"},bm={__name:"ToggleLabel",props:["values","def","name"],emits:["toggleValue"],setup(e,{emit:t}){const n=e,{values:r}=n;return console.log("label props",n),(a,i)=>(qe(),Ot("div",vm,[xc(a.$slots,"default",{},void 0,!0),ee(gm,{onToggleValue:i[0]||(i[0]=o=>t("toggleValue",o)),values:je(r),def:n.def,name:n.name},null,8,["values","def","name"])]))}},ym=Ga(bm,[["__scopeId","data-v-c4ca4ad6"]]);const _m=be("div",{class:"flex align-items-end gap"},[be("h1",null,"The K-Scaffold"),be("span",{class:"subtitle"},"A Roll20 Sheet Framework")],-1),wm={class:"capitalize"},xm={id:"main-nav"},km={__name:"Header",setup(e){const t=vr("system"),n=r=>t.value=r.newValue;return(r,a)=>{const i=bc("RouterLink");return qe(),Ot("header",null,[_m,ee(ym,{onToggleValue:n,name:"color",values:["dark","system","light"],def:"system"},{default:lt(()=>[be("span",wm,ol(/system/i.test(t.value)?"System Theme":`${t.value} mode`),1)]),_:1}),be("nav",xm,[be("ul",null,[be("li",null,[ee(i,{to:"/"},{default:lt(()=>[kt("About")]),_:1})]),be("li",null,[ee(i,{to:"/start"},{default:lt(()=>[kt("Getting Started")]),_:1})]),be("li",null,[ee(i,{to:"/gen"},{default:lt(()=>[kt("Build API")]),_:1})]),be("li",null,[ee(i,{to:"/pug"},{default:lt(()=>[kt("Pug Library")]),_:1})]),be("li",null,[ee(i,{to:"/sheetworkers"},{default:lt(()=>[kt("Sheetworker Library")]),_:1})]),be("li",null,[ee(i,{to:"/scss"},{default:lt(()=>[kt("Style Library")]),_:1})])])])])}}};const Em={class:"content"},Am={__name:"App",setup(e){return(t,n)=>(qe(),Ot(Ae,null,[ee(km),be("main",Em,[ee(je(Zs))])],64))}},Pm=Ga(Am,[["__scopeId","data-v-500510f1"]]),Cm="modulepreload",Sm=function(e){return"/"+e},go={},sn=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Sm(i),i in go)return;go[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let c=a.length-1;c>=0;c--){const d=a[c];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":Cm,o||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),o)return new Promise((c,d)=>{f.addEventListener("load",c),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},Om={class:"markdown-body"},Rm=Kc(`<div id="top"></div><span align="center"><p><a href="https://github.com/Kurohyou-Studios/k-scaffold/graphs/contributors"><img src="https://img.shields.io/github/contributors/Kurohyou-Studios/k-scaffold.svg?style=flat" alt="Contributors"></a> <a href="https://github.com/Kurohyou-Studios/k-scaffold/network/members"><img src="https://img.shields.io/github/forks/Kurohyou-Studios/k-scaffold.svg?style=flat" alt="Forks"></a> <a href="https://github.com/Kurohyou-Studios/k-scaffold/stargazers"><img src="https://img.shields.io/github/stars/Kurohyou-Studios/k-scaffold.svg?style=flat" alt="Stargazers"></a> <a href="https://github.com/Kurohyou-Studios/k-scaffold/issues"><img src="https://img.shields.io/github/issues/Kurohyou-Studios/k-scaffold.svg?style=flat" alt="Issues"></a> <a href="https://github.com/Kurohyou-Studios/k-scaffold/blob/master/LICENSE.txt"><img src="https://img.shields.io/github/license/Kurohyou-Studios/k-scaffold.svg?style=flat" alt="mit License"></a></p></span><span align="center"><p><a href="https://linkedin.com/in/scott-casey-20210398"><img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=flat&amp;logo=linkedin&amp;colorB=555" alt="LinkedIn"></a> <a href="https://patreon.com/Kurohyoustudios"><img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dkurohyoustudios%26type%3Dpatrons&amp;style=flat" alt="Patreon"></a></p></span><br><div align="center"><h3 align="center">K-Scaffold</h3><p align="center"></p><p>A PUG, JS, and SCSS framework for building custom Roll20 character sheet templates.</p><p><strong>Documentation site coming soon! »</strong></p><p><a href="https://github.com/Kurohyou-Studios/k-scaffold">View Demo</a> · <a href="https://github.com/Kurohyou-Studios/k-scaffold/issues">Report Bug</a> · <a href="https://github.com/Kurohyou-Studios/k-scaffold/issues">Request Feature</a></p></div><details><summary>Table of Contents</summary><ol><li><a href="#about-the-project">About The Project</a><ul><li><a href="#built-with">Built With</a></li></ul></li><li><a href="#getting-started">Getting Started</a><ul><li><a href="#k-scaffold-pug">K-Scaffold Pug</a></li><li><a href="#k-scaffold-javascript">K-Scaffold Javascript</a></li><li><a href="#prerequisites">Prerequisites</a></li><li><a href="#installation">Installation</a></li></ul></li><li><a href="#usage">Usage</a></li><li><a href="#roadmap">Roadmap</a></li><li><a href="#contributing">Contributing</a></li><ul><li><a href="#tests">Tests</a></li></ul><li><a href="#license">License</a></li><li><a href="#contact">Contact</a></li><li><a href="#acknowledgments">Acknowledgments</a></li></ol></details><h2>About The Project</h2><p>This framework simplifies the task of writing code for Roll20 character sheets. It aims to provide an easier interface between the html and sheetworkers with some minor css templates.</p><p align="right">(<a href="#top">back to top</a>)</p><h3>Built With</h3><ul><li>PUG</li><li>JS</li><li>SCSS</li></ul><p align="right">(<a href="#top">back to top</a>)</p><h2>Getting Started</h2><h3>K-scaffold PUG</h3><p>To use the K-scaffold to write the html of your sheet, you will write normal PUG, but using a comprehensive library of components that are frequently used on character sheets. These range from simple mixin versions of standard html elements inputs, textareas, and selects to more complex constructions that generate Roll20 elements or workarounds for limitations of Roll20 character sheets. Library Documentation coming soon!</p><p align="right">(<a href="#top">back to top</a>)</p><h3>K-scaffold Javascript</h3><p>To use the K-scaffold to write your sheetworkers, you will write normal sheetworkers, but using a library of utility functions and sheetworker aliases to supercharge the standard sheetworkers. Library Documentation coming soon!</p><p align="right">(<a href="#top">back to top</a>)</p><h3>Prerequisites</h3><p>Creating and using a custom character sheet requires a Roll20 pro subscription. If you want to utilize the included testing framework, you will also need to install <a href="https://vitest.dev/">vitest</a>;</p><h3>Installation</h3><p>Install the scaffold via NPM:</p><pre><code class="">npm i @kurohyou/k-scaffold
</code></pre><p align="right">(<a href="#top">back to top</a>)</p><h2>Usage</h2><p>The scaffold simplifies many of the common tasks of creating a Roll20 character sheet and provides constructs to easily create everything from fill to left radio groups to textareas that grow based on the content of their associated Roll20 attribute. To generate a K-scaffold sheet, you will need a pug file, and an scss file.</p><h3>Pug</h3><p>Your main pug file should start with:</p><pre><code class="language-jade">include k-scaffold
//- Your code starts here
</code></pre><p>This will give your pug file(s) access to the K-scaffold mixins and local variables.</p><h3>SCSS</h3><p>Any scss file that you want to use the K-scaffold’s mixins in needs to start with:</p><pre><code class="language-scss">@use &quot;k-scaffold&quot; as k;
</code></pre><h3>Build your sheet</h3><p>To build your sheet, simply run the following command:</p><pre><code class="language-shell">&gt; k-build
</code></pre><p>Alternatively, you can build in watch mode so that the sheet is updated as you make code changes.</p><pre><code class="language-shell">&gt; k-build --watch
OR
&gt; k-build --w
</code></pre><p>This is useful when using the <a href="https://chrome.google.com/webstore/detail/roll20-api-and-sheet-auto/hboggmcfmaakkifgifjbccnpfmnegick">Roll20 Autocode chrome extension</a> to automatically update the Roll20 sandbox.</p><p align="right">(<a href="#top">back to top</a>)</p><h2>Roadmap</h2><p>See the <a href="./issues">open issues</a> for a full list of proposed features (and known issues).</p><p align="right">(<a href="#top">back to top</a>)</p><h2>Contributing</h2><p>Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are <strong>greatly appreciated</strong>. If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag “enhancement”. Don’t forget to give the project a star! Thanks again!</p><ol><li>Fork the Project</li><li>Create your Feature Branch (<code class="">git checkout -b feature/AmazingFeature</code>)</li><li>Commit your Changes (<code class="">git commit -m &#39;Add some AmazingFeature&#39;</code>)</li><li>Push to the Branch (<code class="">git push origin feature/AmazingFeature</code>)</li><li>Open a Pull Request</li></ol><p align="right">(<a href="#top">back to top</a>)</p><h3>Tests</h3><p>The K-scaffold and sheets written with it use the <a href="https://vitest.dev/">Vitest testing framework</a>.</p><p>Unit tests are currently written for the following:</p><ul><li>The html, testFramework, and translation generation code</li><li>Parts of the CSS generation generation code</li><li>The K-scaffold’s pug helper functions</li><li>All sheetworker utility functions except for the repeating section ordering functions.</li></ul><p>Tests for the uncovered sections of code will be written as work progresses. If you wish to contribute, please ensure that no changes break these tests.</p><p align="right">(<a href="#top">back to top</a>)</p><h2>License</h2><p>Distributed under the mit License. See <a href="LICENSE.txt">LICENSE.txt</a> for more information.</p><p align="right">(<a href="#top">back to top</a>)</p><h2>Contact</h2><p><a href="https://kurohyou.github.io/">Scott Casey</a> - <a href="https://twitter.com/Kurohyoustudios">@Kurohyoustudios</a></p><p>Project Link: <a href="https://github.com/Kurohyou-Studios/k-scaffold">https://github.com/Kurohyou-Studios/k-scaffold</a></p><p align="right">(<a href="#top">back to top</a>)</p><h2>Acknowledgments</h2><ul><li>Riernar has supercharged the efforts to properly organize and pacakage the K-scaffold.</li></ul><p>This readme template adapted from the <a href="https://github.com/othneildrew/Best-README-Template/blob/master/BLANK_README.md">Best-README-Template</a> by <a href="https://github.com/othneildrew">Othneil Drew</a>. Readme generated by <a href="https://github.com/Kurohyou/genme-SC">Genme! by Scott Casey</a>.</p><p align="right">(<a href="#top">back to top</a>)</p>`,65),Tm=[Rm],Im=Sa({__name:"README",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,r)=>(qe(),Ot("div",Om,Tm))}}),Nm={__name:"HomeView",setup(e){return(t,n)=>(qe(),Ta(je(Im)))}},Mm=um({history:Sd("/"),routes:[{path:"/",name:"home",component:Nm},{path:"/start",name:"start",component:()=>sn(()=>import("./GettingStarted-41936972.js"),[])},{path:"/gen",name:"gen",component:()=>sn(()=>import("./API-48bdf883.js"),[])},{path:"/pug",name:"pug",component:()=>sn(()=>import("./Pug-fcf3150b.js"),["assets/Pug-fcf3150b.js","assets/index-791fe822.js","assets/index-5a85e800.css"])},{path:"/sheetworkers",name:"sheetworkers",component:()=>sn(()=>import("./Sheetworker-bf5b52d6.js"),["assets/Sheetworker-bf5b52d6.js","assets/index-791fe822.js","assets/index-5a85e800.css"])},{path:"/scss",name:"scss",component:()=>sn(()=>import("./Style-7e644655.js"),["assets/Style-7e644655.js","assets/index-791fe822.js","assets/index-5a85e800.css"])}]});cd.add(fd);const Xa=Pf(Pm);Xa.use(Rf());Xa.use(Mm);Xa.mount("#app");export{Ae as F,Ga as _,be as a,bc as b,Ot as c,ee as d,kt as e,Kc as f,Ta as g,vr as h,Lm as i,wc as j,qe as o,xc as r,ol as t,je as u,lt as w};
