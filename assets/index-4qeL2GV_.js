(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=Array.isArray,t=Array.prototype.indexOf,n=Array.prototype.includes,r=Array.from,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyDescriptors,s=Object.prototype,c=Array.prototype,l=Object.getPrototypeOf,u=Object.isExtensible,d=()=>{};function f(e){return e()}function p(e){for(var t=0;t<e.length;t++)e[t]()}function m(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}function h(e,t){if(Array.isArray(e))return e;if(t===void 0||!(Symbol.iterator in e))return Array.from(e);let n=[];for(let r of e)if(n.push(r),n.length===t)break;return n}var g=1024,_=2048,v=4096,y=8192,b=16384,x=32768,S=1<<25,C=65536,w=1<<19,T=1<<20,ee=1<<25,te=1<<21,ne=1<<22,re=1<<23,E=Symbol(`$state`),ie=Symbol(`component`),ae=Symbol(``),oe=Symbol(`attributes`),se=Symbol(`class`),ce=Symbol(`style`),le=Symbol(`text`),D=Symbol(`form reset`),ue=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"},de=!!globalThis.document?.contentType&&globalThis.document.contentType.includes(`xml`),fe={},O=Symbol(`uninitialized`),pe=`http://www.w3.org/1999/xhtml`;function me(){console.warn(`https://svelte.dev/e/derived_inert`)}function he(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function ge(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}var k=!1;function _e(e){k=e}var A;function j(e){if(e===null)throw he(),fe;return A=e}function ve(){return j(Yt(A))}function M(e){if(k){if(Yt(A)!==null)throw he(),fe;A=e}}function ye(e=1){if(k){for(var t=e,n=A;t--;)n=Yt(n);A=n}}function be(e=!0){for(var t=0,n=A;;){if(n.nodeType===8){var r=n.data;if(r===`]`){if(t===0)return n;--t}else(r===`[`||r===`[!`||r[0]===`[`&&!isNaN(Number(r.slice(1))))&&(t+=1)}var i=Yt(n);e&&n.remove(),n=i}}function xe(e){if(!e||e.nodeType!==8)throw he(),fe;return e.data}function Se(e){return e===this.v}function Ce(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function we(e){return!Ce(e,this.v)}function Te(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function Ee(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function De(e,t,n){throw Error(`https://svelte.dev/e/each_key_duplicate`)}function Oe(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function ke(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function Ae(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function je(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function Me(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function Ne(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function Pe(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function Fe(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}var Ie=!1;function Le(){Ie=!0}var N=null;function Re(e){N=e}function ze(e,t=!1,n){N={p:N,i:!1,c:null,e:null,s:e,x:null,r:Y,l:Ie&&!t?{s:null,u:null,$:[]}:null}}function Be(e){var t=N,n=t.e;if(n!==null){t.e=null;for(var r of n)ln(r)}return e!==void 0&&(t.x=e),t.i=!0,N=t.p,Ve(e)}function Ve(e={}){return i(e,ie,{value:!0}),e}function He(){return!Ie||N!==null&&N.l===null}var Ue=[];function We(){var e=Ue;Ue=[],p(e)}function Ge(e){if(Ue.length===0&&!_t){var t=Ue;queueMicrotask(()=>{t===Ue&&We()})}Ue.push(e)}function Ke(){for(;Ue.length>0;)We()}var qe=~(_|v|g);function P(e,t){e.f=e.f&qe|t}function Je(e){e.f&512||e.deps===null?P(e,g):P(e,v)}function Ye(e,t,n){e.f&2048?t.add(e):e.f&4096&&n.add(e),P(e,g)}var Xe=!1;function Ze(){Xe||(Xe=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t[D]?.()})},{capture:!0}))}function Qe(e){var t=K,n=Y;J(null),jn(null);try{return e()}finally{J(t),jn(n)}}function $e(e,t,n,r=n){e.addEventListener(t,()=>Qe(n));let i=e[D];e[D]=i?()=>{i(),r(!0)}:()=>r(!0),Ze()}function et(e,t,n,r){let i=He()?it:ct;var a=e.filter(e=>!e.settled),o=t.map(i);if(n.length===0&&a.length===0){r(o);return}var s=Y,c=tt(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null;function u(e){if(!(s.f&16384)){c();try{r([...o,...e])}catch(e){nn(e,s)}nt()}}var d=rt();if(n.length===0){l.then(()=>u([])).finally(d);return}function f(){Promise.all(n.map(e=>ot(e))).then(u).catch(e=>nn(e,s)).finally(d)}l?l.then(()=>{c(),f(),nt()}):f()}function tt(){var e=Y,t=K,n=N,r=F;return function(i=!0){jn(e),J(t),Re(n),i&&!(e.f&16384)&&(r?.activate(),r?.apply())}}function nt(e=!0){jn(null),J(null),Re(null),e&&F?.deactivate()}function rt(){var e=Y,t=e.b,n=F,r=!!t?.is_rendered();return t?.update_pending_count(1,n),n.increment(r,e),()=>{t?.update_pending_count(-1,n),n.decrement(r,e)}}function it(e){var t=2|_;return Y!==null&&(Y.f|=w),{ctx:N,deps:null,effects:null,equals:Se,f:t,fn:e,reactions:null,rv:0,v:O,wv:0,parent:Y,ac:null}}var at=Symbol(`obsolete`);function ot(e,t,n){let r=Y;r===null&&Ee();var i=void 0,a=Nt(O),o=!K,s=new Set;return pn(()=>{var t=Y,n=m();i=n.promise;try{Promise.resolve(e()).then(n.resolve,e=>{e!==ue&&n.reject(e)}).finally(nt)}catch(e){n.reject(e),nt()}var c=F;if(o){if(t.f&32768)var l=rt();if(r.b?.is_rendered())c.async_deriveds.get(t)?.reject(at);else for(let e of s.values())e.reject(at);s.add(n),c.async_deriveds.set(t,n)}let u=(e,t=void 0)=>{l?.(),s.delete(n),t!==at&&(c.activate(),t?(a.f|=re,Rt(a,t)):(a.f&8388608&&(a.f^=re),Rt(a,e)),c.deactivate())};n.promise.then(u,e=>u(null,e||`unknown`))}),sn(()=>{for(let e of s)e.reject(at)}),new Promise(e=>{function t(n){function r(){n===i?e(a):t(i)}n.then(r,r)}t(i)})}function st(e){let t=it(e);return Nn(t),t}function ct(e){let t=it(e);return t.equals=we,t}function lt(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)G(t[n])}}function ut(e){var t,n=Y,r=e.parent;if(!kn&&r!==null&&e.v!==O&&r.f&24576)return me(),e.v;jn(r);try{lt(e),t=Hn(e)}finally{jn(n)}return t}function dt(e){var t=ut(e);if(!e.equals(t)&&(e.wv=zn(),(!F?.is_fork||e.deps===null)&&(F===null?e.v=t:(F.capture(e,t,!0),ht?.capture(e,t,!0)),e.deps===null))){P(e,g);return}kn||(I===null?Je(e):(on()||F?.is_fork)&&I.set(e,t))}function ft(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac!==null&&Qe(()=>{t.ac.abort(ue),t.ac=null}),t.fn!==null&&(t.teardown=d),Gn(t,0),vn(t))}function pt(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&t.fn!==null&&Kn(t)}var mt=null,F=null,ht=null,I=null,gt=null,_t=!1,vt=!1,yt=null,bt=null,xt=0,St=1,Ct=class e{id=St++;#e=!1;linked=!0;#t=null;#n=null;async_deriveds=new Map;current=new Map;previous=new Map;#r=new Set;#i=new Set;#a=0;#o=new Map;#s=null;#c=[];#l=[];#u=new Set;#d=new Set;#f=new Map;#p=new Set;is_fork=!1;#m=!1;constructor(){mt===null?mt=this:(mt.#n=this,this.#t=mt),mt=this}#h(){if(this.is_fork)return!0;for(let n of this.#o.keys()){for(var e=n,t=!1;e.parent!==null;){if(this.#f.has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1}skip_effect(e){this.#f.has(e)||this.#f.set(e,{d:[],m:[]}),this.#p.delete(e)}unskip_effect(e,t=e=>this.schedule(e)){var n=this.#f.get(e);if(n){this.#f.delete(e);for(var r of n.d)P(r,_),t(r);for(r of n.m)P(r,v),t(r)}this.#p.add(e)}#g(){var e=[];for(let i of this.#c)if(!(i.f&16384||!(i.f&6144))){for(var t=i,n=!1;t.parent!==null;){t=t.parent;var r=t.f;if(r&96){if(!(r&1024)){n=!0;break}t.f^=g}}n||e.push(t)}return this.#c=[],e}#_(){this.#e=!0;for(let e of this.#u)this.#d.delete(e),P(e,_),this.schedule(e);for(let e of this.#d)P(e,v),this.schedule(e);this.apply();for(var t=yt=[],n=[],r=bt=[];this.#c.length>0;){xt++>1e3&&(this.#S(),Tt());for(let e of this.#g())try{this.#v(e,t,n)}catch(t){throw At(e),this.#h()||this.discard(),t}}if(F=null,r.length>0){var i=e.ensure();for(let e of r)i.schedule(e)}if(yt=null,bt=null,this.#h()){this.#x(n),this.#x(t);for(let[e,t]of this.#f)kt(e,t);r.length>0&&F.#_();return}let a=this.#y();if(a){this.#x(n),this.#x(t),a.#b(this);return}this.#u.clear(),this.#d.clear();for(let e of this.#r)e(this);this.#r.clear(),ht=this,Dt(n),Dt(t),ht=null,this.#s?.resolve();var o=F;if(this.#a===0&&(this.#c.length===0||o!==null)&&this.#S(),this.#c.length>0){if(o!==null){for(let e of this.#c)o.#c.push(e);this.#c=[]}else o=this}o!==null&&(L.clear(),o.#_())}#v(e,t,n){e.f^=g;for(var r=e.first;r!==null;){var i=r.f,a=!!(i&96);if(!(a&&i&1024||i&8192||this.#f.has(r))&&r.fn!==null){a?r.f^=g:i&4?t.push(r):Bn(r)&&(i&16&&this.#d.add(r),Kn(r));var o=r.first;if(o!==null){r=o;continue}}for(;r!==null;){var s=r.next;if(s!==null){r=s;break}r=r.parent}}}#y(){for(var e=this.#t;e!==null;){if(!e.is_fork){for(let[t,[,n]]of this.current)if(e.current.has(t)&&!n)return e}e=e.#t}return null}#b(e){for(let[t,n]of e.current)!this.previous.has(t)&&e.previous.has(t)&&this.previous.set(t,e.previous.get(t)),this.current.set(t,n);for(let[t,n]of e.async_deriveds){let e=this.async_deriveds.get(t);e&&n.promise.then(e.resolve).catch(e.reject)}e.async_deriveds.clear(),this.transfer_effects(e.#u,e.#d);let t=e=>{var n=e.reactions;if(n!==null&&!(e.f&2&&!(e.f&6144)))for(let e of n){var r=e.f;if(r&2)t(e);else{var i=e;r&4194320&&!this.async_deriveds.has(i)&&(this.#d.delete(i),P(i,_),this.schedule(i))}}};for(let e of this.current.keys())t(e);this.oncommit(()=>e.discard()),e.#S(),F=this,this.#_()}#x(e){for(var t=0;t<e.length;t+=1)Ye(e[t],this.#u,this.#d)}capture(e,t,n=!1){e.v!==O&&!this.previous.has(e)&&this.previous.set(e,e.v),e.f&8388608||(this.current.set(e,[t,n]),I?.set(e,t)),this.is_fork||(e.v=t)}activate(){F=this}deactivate(){F=null,I=null}flush(){try{vt=!0,F=this,this.#_()}finally{xt=0,gt=null,yt=null,bt=null,vt=!1,F=null,I=null,L.clear()}}discard(){for(let e of this.#i)e(this);this.#i.clear();for(let e of this.async_deriveds.values())e.reject(at);this.#S(),this.#s?.resolve()}register_created_effect(e){this.#l.push(e)}increment(e,t){if(this.#a+=1,e){let e=this.#o.get(t)??0;this.#o.set(t,e+1)}}decrement(e,t){if(--this.#a,e){let e=this.#o.get(t)??0;e===1?this.#o.delete(t):this.#o.set(t,e-1)}this.#m||(this.#m=!0,Ge(()=>{this.#m=!1,this.linked&&this.flush()}))}transfer_effects(e,t){for(let t of e)this.#u.add(t);for(let e of t)this.#d.add(e);e.clear(),t.clear()}oncommit(e){this.#r.add(e)}ondiscard(e){this.#i.add(e)}settled(){return(this.#s??=m()).promise}static ensure(){if(F===null){let t=F=new e;!vt&&!_t&&Ge(()=>{t.#e||t.flush()})}return F}apply(){I=null}schedule(e){if(gt=e,e.b?.is_pending&&e.f&16777228&&!(e.f&32768)){e.b.defer_effect(e);return}this.#c.push(e)}#S(){if(this.linked){var e=this.#t,t=this.#n;e===null||(e.#n=t),t===null?mt=e:t.#t=e,this.linked=!1}}};function wt(e){var t=_t;_t=!0;try{var n;for(e&&(F!==null&&!F.is_fork&&F.flush(),n=e());;){if(Ke(),F===null)return n;F.flush()}}finally{_t=t}}function Tt(){try{je()}catch(e){nn(e,gt)}}var Et=null;function Dt(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&Bn(r)&&(Et=new Set,Kn(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&xn(r),Et?.size>0)){L.clear();for(let e of Et){if(e.f&24576)continue;let t=[e],n=e.parent;for(;n!==null;)Et.has(n)&&(Et.delete(n),t.push(n)),n=n.parent;for(let e=t.length-1;e>=0;e--){let n=t[e];n.f&24576||Kn(n)}}Et.clear()}}Et=null}}function Ot(e){F.schedule(e)}function kt(e,t){if(!(e.f&32&&e.f&1024)){e.f&2048?t.d.push(e):e.f&4096&&t.m.push(e),P(e,g);for(var n=e.first;n!==null;)kt(n,t),n=n.next}}function At(e){P(e,g);for(var t=e.first;t!==null;)At(t),t=t.next}var jt=new Set,L=new Map,Mt=!1;function Nt(e,t){return{f:0,v:e,reactions:null,equals:Se,rv:0,wv:0}}function Pt(e,t){let n=Nt(e,t);return Nn(n),n}function R(e,t=!1,n=!0){let r=Nt(e);return t||(r.equals=we),Ie&&n&&N!==null&&N.l!==null&&(N.l.s??=[]).push(r),r}function Ft(e,t){return z(e,Xn(()=>$(e))),t}function z(e,t,n=!1){return K!==null&&(!q||K.f&131072)&&He()&&K.f&4325394&&(Mn===null||!Mn.has(e))&&Pe(),Rt(e,n?Ht(t):t,bt)}var It=null,Lt=0;function Rt(e,t,n=null){if(!e.equals(t)){kn?L.set(e,t):L.has(e)||L.set(e,e.v);var r=Ct.ensure();if(r.capture(e,t),e.f&2){let t=e;e.f&2048&&ut(t),I===null&&Je(t)}e.wv=zn(),It=null,Lt=0,Vt(e,_,n),It=null,He()&&Y!==null&&Y.f&1024&&!(Y.f&96)&&(Q===null?Pn([e]):Q.push(e)),!r.is_fork&&jt.size>0&&!Mt&&zt()}return t}function zt(){Mt=!1;for(let e of jt){e.f&1024&&P(e,v);let t;try{t=Bn(e)}catch{t=!0}t&&Kn(e)}jt.clear()}function Bt(e){z(e,e.v+1)}function Vt(e,t,n){var r=e.reactions;if(r!==null){var i=He(),a=r.length;if(Lt+=a,Lt>1e5&&It===null&&(It=new Set),It!==null){if(It.has(e))return;It.add(e)}for(var o=0;o<a;o++){var s=r[o],c=s.f;if(i||s!==Y){var l=(c&_)===0;if(l&&P(s,t),c&131072)jt.add(s);else if(c&2){var u=s;I?.delete(u),Vt(u,v,n)}else if(l){var d=s;c&16&&Et!==null&&Et.add(d),n===null?Ot(d):n.push(d)}}}}}function Ht(t){if(typeof t!=`object`||!t||E in t||ie in t)return t;let n=l(t);if(n!==s&&n!==c)return t;var r=new Map,i=e(t),o=Pt(0),u=null,d=Ln,f=e=>{if(Ln===d)return e();var t=K,n=Ln;J(null),Rn(d);var r=e();return J(t),Rn(n),r};return i&&r.set(`length`,Pt(t.length,u)),new Proxy(t,{defineProperty(e,t,n){(!(`value`in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&Me();var i=r.get(t);return i===void 0?f(()=>{var e=Pt(n.value,u);return r.set(t,e),e}):z(i,n.value,!0),!0},deleteProperty(e,t){var n=r.get(t);if(n===void 0){if(t in e){let e=f(()=>Pt(O,u));r.set(t,e),Bt(o)}}else z(n,O),Bt(o);return!0},get(e,n,i){if(n===E)return t;var o=r.get(n),s=n in e;if(o===void 0&&(!s||a(e,n)?.writable)&&(o=f(()=>Pt(Ht(s?e[n]:O),u)),r.set(n,o)),o!==void 0){var c=$(o);return c===O?void 0:c}return Reflect.get(e,n,i)},getOwnPropertyDescriptor(e,t){this.has?.(e,t);var n=Reflect.getOwnPropertyDescriptor(e,t),i=r.get(t);if(i!==void 0){var a=$(i);if(a===O)return;if(n&&`value`in n)n.value=a;else return{enumerable:!0,configurable:!0,value:a,writable:!0}}return n},has(e,t){if(t===E)return!0;var n=r.get(t),i=n!==void 0&&n.v!==O||Reflect.has(e,t);return(n!==void 0||Y!==null&&(!i||a(e,t)?.writable))&&(n===void 0&&(n=f(()=>Pt(i?Ht(e[t]):O,u)),r.set(t,n)),$(n)===O)?!1:i},set(e,t,n,s){var c=r.get(t),l=t in e;if(i&&t===`length`)for(var d=n;d<c.v;d+=1){var p=r.get(d+``);p===void 0?d in e&&(p=f(()=>Pt(O,u)),r.set(d+``,p)):z(p,O)}if(c===void 0)(!l||a(e,t)?.writable)&&(c=f(()=>Pt(void 0,u)),z(c,Ht(n)),r.set(t,c));else{l=c.v!==O;var m=f(()=>Ht(n));z(c,m)}var h=Reflect.getOwnPropertyDescriptor(e,t);if(h?.set&&h.set.call(s,n),!l){if(i&&typeof t==`string`){var g=r.get(`length`),_=Number(t);Number.isInteger(_)&&_>=g.v&&z(g,_+1)}Bt(o)}return!0},ownKeys(e){$(o);var t=Reflect.ownKeys(e).filter(e=>{var t=r.get(e);return t===void 0||t.v!==O});for(var[n,i]of r)i.v!==O&&!(n in e)&&t.push(n);return t},setPrototypeOf(){Ne()}})}var Ut,Wt,Gt,Kt;function qt(){if(Ut===void 0){Ut=window,Wt=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Gt=a(t,`firstChild`).get,Kt=a(t,`nextSibling`).get,u(e)&&(e[se]=void 0,e[oe]=null,e[ce]=void 0,e.__e=void 0),u(n)&&(n[le]=void 0)}}function B(e=``){return document.createTextNode(e)}function Jt(e){return Gt.call(e)}function Yt(e){return Kt.call(e)}function V(e,t){if(!k)return Jt(e);var n=Jt(A);if(n===null)n=A.appendChild(B());else if(t&&n.nodeType!==3){var r=B();return n?.before(r),j(r),r}return t&&en(n),j(n),n}function Xt(e,t=!1){if(!k)return Jt(e);var n=V(e,t);return M(e),n}function H(e,t=1,n=!1){let r=k?A:e;for(var i;t--;)i=r,r=Yt(r);if(!k)return r;if(n){if(r?.nodeType!==3){var a=B();return r===null?i?.after(a):r.before(a),j(a),a}en(r)}return j(r),r}function Zt(e){e.textContent=``}function Qt(){return!1}function $t(e,t,n){return t==null||t===`http://www.w3.org/1999/xhtml`?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function en(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===3;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function tn(e){var t=Y;if(t===null)return K.f|=re,e;if(!(t.f&32768)&&!(t.f&4))throw e;nn(e,t)}function nn(e,t){if(!(t!==null&&t.f&16384)){for(;t!==null;){if(t.f&128&&!(t.f&33570816)){if(!(t.f&32768))throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}}function rn(e){Y===null&&(K===null&&Ae(e),ke()),kn&&Oe(e)}function an(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function U(e,t){var n=Y;n!==null&&n.f&8192&&(e|=y);var r={ctx:N,deps:null,nodes:null,f:e|_|512,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};F?.register_created_effect(r);var i=r;if(e&4)yt===null?Ct.ensure().schedule(r):yt.push(r);else if(t!==null){try{Kn(r)}catch(e){throw G(r),e}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&524288)&&(i=i.first,e&16&&e&65536&&i!==null&&(i.f|=C))}if(i!==null&&(i.parent=n,n!==null&&an(i,n),K!==null&&K.f&2&&!(e&64))){var a=K;(a.effects??=[]).push(i)}return r}function on(){return K!==null&&!q}function sn(e){let t=U(8,null);return P(t,g),t.teardown=e,t}function cn(e){rn(`$effect`);var t=Y.f;if(!K&&t&32&&N!==null&&!N.i){var n=N;(n.e??=[]).push(e)}else return ln(e)}function ln(e){return U(4|T,e)}function un(e){return rn(`$effect.pre`),U(8|T,e)}function dn(e){Ct.ensure();let t=U(64|w,e);return(e={})=>new Promise(n=>{e.outro?Sn(t,()=>{G(t),n(void 0)}):(G(t),n(void 0))})}function fn(e){return U(4,e)}function pn(e){return U(ne|w,e)}function mn(e,t=0){return U(8|t,e)}function hn(e,t=[],n=[],r=[]){et(r,t,n,t=>{U(8,()=>{e(...t.map($))})})}function gn(e,t=0){return U(16|t,e)}function W(e){return U(32|w,e)}function _n(e){var t=e.teardown;if(t!==null){let n=kn,r=K;An(!0),J(null);try{t.call(null)}catch(t){nn(t,e.parent)}finally{An(n),J(r)}}}function vn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&Qe(()=>{e.abort(ue)});var r=n.next;n.f&64?n.parent=null:G(n,t),n=r}}function yn(e){for(var t=e.first;t!==null;){var n=t.next;t.f&32||G(t),t=n}}function G(e,t=!0){var n=!1;(t||e.f&262144)&&e.nodes!==null&&e.nodes.end!==null&&(bn(e.nodes.start,e.nodes.end),n=!0),e.f|=S,vn(e,t&&!n),Gn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)e.stop();_n(e),e.f^=S,e.f|=b;var i=e.parent;i!==null&&i.first!==null&&xn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function bn(e,t){for(;e!==null;){var n=e===t?null:Yt(e);e.remove(),e=n}}function xn(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Sn(e,t,n=!0){var r=[];e.f|=256,Cn(e,r,!0);var i=()=>{n&&G(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function Cn(e,t,n){if(!(e.f&8192)){e.f^=y;var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)(e.is_global||n)&&t.push(e);for(var i=e.first;i!==null;){var a=i.next;if(!(i.f&64)){var o=!!(i.f&65536)||!!(i.f&32)&&!!(e.f&16);Cn(i,t,o?n:!1)}i=a}}}function wn(e){e.f&=-257,Tn(e,!0)}function Tn(e,t){if(!(e.f&256)&&e.f&8192){e.f^=y,e.f&1024||(P(e,_),Ct.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=!!(n.f&65536)||!!(n.f&32);Tn(n,i?t:!1),n=r}var a=e.nodes&&e.nodes.t;if(a!==null)for(let e of a)(e.is_global||t)&&e.in()}}function En(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:Yt(n);t.append(n),n=i}}var Dn=null,On=!1,kn=!1;function An(e){kn=e}var K=null,q=!1;function J(e){K=e}var Y=null;function jn(e){Y=e}var Mn=null;function Nn(e){K!==null&&(K.f&2097152||K.f&2)&&(Mn??=new Set).add(e)}var X=null,Z=0,Q=null;function Pn(e){Q=e}var Fn=1,In=0,Ln=In;function Rn(e){Ln=e}function zn(){return++Fn}function Bn(e){var t=e.f;if(t&2048)return!0;if(t&4096){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(Bn(a)&&dt(a),a.wv>e.wv)return!0}t&512&&I===null&&P(e,g)}return!1}function Vn(e,t,n=!0){var r=e.reactions;if(r!==null&&!(Mn!==null&&Mn.has(e)))for(var i=0;i<r.length;i++){var a=r[i];a.f&2?Vn(a,t,!1):t===a&&(n?P(a,_):a.f&1024&&P(a,v),Ot(a))}}function Hn(e){var t=X,n=Z,r=Q,i=K,a=Mn,o=N,s=q,c=Ln,l=e.f;X=null,Z=0,Q=null,K=l&96?null:e,Mn=null,Re(e.ctx),q=!1,Ln=++In,e.ac!==null&&(Qe(()=>{e.ac.abort(ue)}),e.ac=null);try{e.f|=te;var u=e.fn,d=u();e.f|=x;var f=Un(e);if(He()&&Q!==null&&!q&&f!==null&&!(e.f&6146))for(var p=0;p<Q.length;p++)Vn(Q[p],e);if(i!==null&&i!==e){if(In++,i.deps!==null)for(let e=0;e<n;e+=1)i.deps[e].rv=In;if(t!==null)for(let e of t)e.rv=In;Q!==null&&(r===null?r=Q:r.push(...Q))}return e.f&8388608&&(e.f^=re),d}catch(t){return Un(e),tn(t)}finally{e.f^=te,X=t,Z=n,Q=r,K=i,Mn=a,Re(o),q=s,Ln=c}}function Un(e){var t=e.deps,n=F?.is_fork;if(X!==null){var r;if(n||Gn(e,Z),t!==null&&Z>0)for(t.length=Z+X.length,r=0;r<X.length;r++)t[Z+r]=X[r];else e.deps=t=X;if(on()&&e.f&512)for(r=Z;r<t.length;r++)(t[r].reactions??=[]).push(e)}else!n&&t!==null&&Z<t.length&&(Gn(e,Z),t.length=Z);return t}function Wn(e,r){let i=r.reactions;if(i!==null){var a=t.call(i,e);if(a!==-1){var o=i.length-1;o===0?i=r.reactions=null:(i[a]=i[o],i.pop())}}if(i===null&&r.f&2&&(X===null||!n.call(X,r))){var s=r;s.f&512&&(s.f^=512),s.v!==O&&Je(s),s.ac!==null&&Qe(()=>{s.ac.abort(ue),s.ac=null,P(s,_)}),ft(s),Gn(s,0)}}function Gn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Wn(e,n[r])}function Kn(e){var t=e.f;if(!(t&16384)){P(e,g);var n=Y,r=On;Y=e,On=!(t&96);try{t&16777232?yn(e):vn(e),_n(e);var i=Hn(e);e.teardown=typeof i==`function`?i:null,e.wv=Fn}finally{On=r,Y=n}}}async function qn(){await Promise.resolve(),wt()}function $(e){var t=!!(e.f&2);if(Dn?.add(e),K!==null&&!q&&!(Y!==null&&Y.f&16384)&&(Mn===null||!Mn.has(e))){var r=K.deps;if(K.f&2097152)e.rv<In&&(e.rv=In,X===null&&r!==null&&r[Z]===e?Z++:X===null?X=[e]:X.push(e));else{K.deps??=[],n.call(K.deps,e)||K.deps.push(e);var i=e.reactions;i===null?e.reactions=[K]:n.call(i,K)||i.push(K)}}if(kn&&L.has(e))return L.get(e);if(t){var a=e;if(kn){var o=a.v;return(!(a.f&1024)&&a.reactions!==null||Yn(a))&&(o=ut(a)),L.set(a,o),o}var s=!(a.f&512)&&!q&&K!==null&&(On||!!(K.f&512)),c=(a.f&x)===0;Bn(a)&&(s&&(a.f|=512),dt(a)),s&&!c&&(pt(a),Jn(a))}if(I?.has(e))return I.get(e);if(e.f&8388608)throw e.v;return e.v}function Jn(e){if(e.f|=512,e.deps!==null)for(let t of e.deps)(t.reactions??=[]).push(e),t.f&2&&!(t.f&512)&&(pt(t),Jn(t))}function Yn(e){if(e.v===O)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(L.has(t)||t.f&2&&Yn(t))return!0;return!1}function Xn(e){var t=q;try{return q=!0,e()}finally{q=t}}function Zn(e){if(!(typeof e!=`object`||!e||e instanceof EventTarget)){if(E in e)Qn(e);else if(!Array.isArray(e))for(let t in e){let n=e[t];typeof n==`object`&&n&&E in n&&Qn(n)}}}function Qn(e,t=new Set){if(typeof e==`object`&&e&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{Qn(e[n],t)}catch{}let n=l(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){let t=o(n);for(let n in t){let r=t[n].get;if(r)try{r.call(e)}catch{}}}}}[...`allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(`.`)];var $n=[`touchstart`,`touchmove`];function er(e){return $n.includes(e)}var tr=Symbol(`events`),nr=new Set,rr=new Set;function ir(e,t,n){(t[tr]??={})[e]=n}function ar(e){for(var t=0;t<e.length;t++)nr.add(e[t]);for(var n of rr)n(e)}var or=null,sr=!1;function cr(e){var t=this,n=t.ownerDocument,r=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;or=e,sr||(sr=!0,setTimeout(()=>{sr=!1,or=null}));var s=0,c=or===e&&e[tr];if(c){var l=a.indexOf(c);if(l!==-1&&(t===document||t===window)){e[tr]=t;return}var u=a.indexOf(t);if(u===-1)return;l<=u&&(s=l)}if(o=a[s]||e.target,o!==t){i(e,`currentTarget`,{configurable:!0,get(){return o||n}});var d=K,f=Y;J(null),jn(null);try{for(var p,m=[];o!==null&&o!==t;){try{var h=o[tr]?.[r];h!=null&&(!o.disabled||e.target===o)&&h.call(o,e)}catch(e){p?m.push(e):p=e}if(e.cancelBubble)break;s++,o=s<a.length?a[s]:null}if(p){for(let e of m)queueMicrotask(()=>{throw e});throw p}}finally{e[tr]=t,delete e.currentTarget,J(d),jn(f)}}}var lr=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function ur(e){return lr?.createHTML(e)??e}function dr(e){var t=$t(`template`);return t.innerHTML=ur(e.replaceAll(`<!>`,`<!---->`)),t.content}function fr(e,t){var n=Y;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function pr(e,t){var n=!!(t&1),r=!!(t&2),i,a=!e.startsWith(`<!>`);return()=>{if(k)return fr(A,null),A;i===void 0&&(i=dr(a?e:`<!>`+e),n||(i=Jt(i)));var t=r||Wt?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=Jt(t),s=t.lastChild;fr(o,s)}else fr(t,t);return t}}function mr(e,t){if(k){var n=Y;(!(n.f&32768)||n.nodes.end===null)&&(n.nodes.end=A),ve();return}e!==null&&e.before(t)}function hr(e){let t=0,n=Nt(0),r;return()=>{on()&&($(n),mn(()=>(t===0&&(r=Xn(()=>e(()=>Bt(n)))),t+=1,()=>{Ge(()=>{--t,t===0&&(r?.(),r=void 0,Bt(n))})})))}}var gr=C|w;function _r(e,t,n,r){new vr(e,t,n,r)}var vr=class{parent;is_pending=!1;transform_error;#e;#t=k?A:null;#n;#r;#i;#a=null;#o=null;#s=null;#c=null;#l=0;#u=0;#d=!1;#f=new Set;#p=new Set;#m=null;#h=hr(()=>(this.#m=Nt(this.#l),()=>{this.#m=null}));constructor(e,t,n,r){this.#e=e,this.#n=t,this.#r=e=>{var t=Y;t.b=this,t.f|=128,n(e)},this.parent=Y.b,this.transform_error=r??this.parent?.transform_error??(e=>e),this.#i=gn(()=>{if(k){let e=this.#t;ve();let t=e.data===`[!`;if(e.data.startsWith(`[?`)){let t=JSON.parse(e.data.slice(2));this.#_(t)}else t?this.#y():this.#g()}else this.#b()},gr),k&&(this.#e=A)}#g(){try{this.#a=W(()=>this.#r(this.#e))}catch(e){this.error(e)}}#_(e){let t=this.#n.failed,{reset:n,invoke_onerror:r}=this.#v(e);Ge(r),t&&(this.#s=W(()=>{t(this.#e,()=>e,()=>n)}))}#v(e){var t=!1,n=!1;let r=()=>{if(t){ge();return}t=!0,n&&Fe(),this.#s!==null&&Sn(this.#s,()=>{this.#s=null}),this.#S(()=>{this.#b()})};return{reset:r,invoke_onerror:()=>{try{n=!0,this.#n.onerror?.(e,r),n=!1}catch(e){nn(e,this.#i&&this.#i.parent)}}}}#y(){let e=this.#n.pending;e&&(this.is_pending=!0,this.#o=W(()=>e(this.#e)),Ge(()=>{var e=this.#c=document.createDocumentFragment(),t=B(),n=!1;if(e.append(t),this.#a=this.#S(()=>{try{return W(()=>this.#r(t))}catch(e){try{this.error(e),n=!0}catch(e){nn(e,this.#i.parent)}return null}}),this.#a===null){this.#c=null,n&&this.#x(F);return}this.#u===0&&(this.#e.before(e),this.#c=null,Sn(this.#o,()=>{this.#o=null}),this.#x(F))}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#u=0,this.#l=0,this.#a=W(()=>{this.#r(this.#e)}),this.#u>0){var e=this.#c=document.createDocumentFragment();En(this.#a,e);let t=this.#n.pending;this.#o=W(()=>t(this.#e))}else this.#x(F)}catch(e){this.error(e)}}#x(e){this.is_pending=!1,e.transfer_effects(this.#f,this.#p)}defer_effect(e){Ye(e,this.#f,this.#p)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#S(e){var t=Y,n=K,r=N;jn(this.#i),J(this.#i),Re(this.#i.ctx);try{return Ct.ensure(),e()}finally{jn(t),J(n),Re(r)}}#C(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#C(e,t);return}this.#u+=e,this.#u===0&&(this.#x(t),this.#o&&Sn(this.#o,()=>{this.#o=null}),this.#c&&=(this.#e.before(this.#c),null))}update_pending_count(e,t){this.#C(e,t),this.#l+=e,!(!this.#m||this.#d)&&(this.#d=!0,Ge(()=>{this.#d=!1,this.#m&&Rt(this.#m,this.#l)}))}get_effect_pending(){return this.#h(),$(this.#m)}error(e){if(!this.#n.onerror&&!this.#n.failed)throw e;F?.is_fork?(this.#a&&F.skip_effect(this.#a),this.#o&&F.skip_effect(this.#o),this.#s&&F.skip_effect(this.#s),F.oncommit(()=>{this.#w(e)})):this.#w(e)}#w(e){this.#a&&=(G(this.#a),null),this.#o&&=(G(this.#o),null),this.#s&&=(G(this.#s),null),k&&(j(this.#t),ye(),j(be()));let t=this.#n.failed,n=e=>{let{reset:n,invoke_onerror:r}=this.#v(e);r(),t&&(this.#s=this.#S(()=>{try{return W(()=>{var r=Y;r.b=this,r.f|=128,t(this.#e,()=>e,()=>n)})}catch(e){return nn(e,this.#i.parent),null}}))};Ge(()=>{var t;try{t=this.transform_error(e)}catch(e){nn(e,this.#i&&this.#i.parent);return}typeof t==`object`&&t&&typeof t.then==`function`?t.then(n,e=>nn(e,this.#i&&this.#i.parent)):n(t)})}};function yr(e,t){var n=t==null?``:typeof t==`object`?`${t}`:t;n!==(e[le]??=e.nodeValue)&&(e[le]=n,e.nodeValue=`${n}`)}function br(e,t){return Sr(e,t)}var xr=new Map;function Sr(e,{target:t,anchor:n,props:i={},events:a,context:o,intro:s=!0,transformError:c}){qt();var l=void 0,u=dn(()=>{var s=n??t.appendChild(B());_r(s,{pending:()=>{}},t=>{ze({});var n=N;if(o&&(n.c=o),a&&(i.$$events=a),k&&fr(t,null),l=e(t,i)||Ve(),k&&(Y.nodes.end=A,A===null||A.nodeType!==8||A.data!==`]`))throw he(),fe;Be()},c);var u=new Set,d=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!u.has(r)){u.add(r);var i=er(r);for(let e of[t,document]){var a=xr.get(e);a===void 0&&(a=new Map,xr.set(e,a));var o=a.get(r);o===void 0?(e.addEventListener(r,cr,{passive:i}),a.set(r,1)):a.set(r,o+1)}}}};return d(r(nr)),rr.add(d),()=>{for(var e of u)for(let n of[t,document]){var r=xr.get(n),i=r.get(e);--i==0?(n.removeEventListener(e,cr),r.delete(e),r.size===0&&xr.delete(n)):r.set(e,i)}rr.delete(d),s!==n&&s.parentNode?.removeChild(s)}});return Cr.set(l,u),l}var Cr=new WeakMap,wr=class{anchor;#e=new Map;#t=new Map;#n=new Map;#r=new Set;#i=!0;constructor(e,t=!0){this.anchor=e,this.#i=t}#a=e=>{if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)wn(n),this.#r.delete(t);else{var r=this.#n.get(t);r&&(wn(r.effect),this.#t.set(t,r.effect),this.#n.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(let[t,n]of this.#e){if(this.#e.delete(t),t===e)break;let r=this.#n.get(n);r&&(G(r.effect),this.#n.delete(n))}for(let[e,r]of this.#t){if(e===t||this.#r.has(e))continue;let i=()=>{if(Array.from(this.#e.values()).includes(e)){var t=document.createDocumentFragment();En(r,t),t.append(B()),this.#n.set(e,{effect:r,fragment:t})}else G(r);this.#r.delete(e),this.#t.delete(e)};this.#i||!n?(this.#r.add(e),Sn(r,i,!1)):i()}}};#o=e=>{this.#e.delete(e);let t=Array.from(this.#e.values());for(let[e,n]of this.#n)t.includes(e)||(G(n.effect),this.#n.delete(e))};ensure(e,t){var n=F,r=Qt();if(t&&!this.#t.has(e)&&!this.#n.has(e)){if(r){var i=document.createDocumentFragment(),a=B();i.append(a),this.#n.set(e,{effect:W(()=>t(a)),fragment:i})}else this.#t.set(e,W(()=>t(this.anchor)))}if(this.#e.set(n,e),r){for(let[t,r]of this.#t)t===e?n.unskip_effect(r):n.skip_effect(r);for(let[t,r]of this.#n)t===e?n.unskip_effect(r.effect):n.skip_effect(r.effect);n.oncommit(this.#a),n.ondiscard(this.#o)}else k&&(this.anchor=A),this.#a(n)}};function Tr(e,t,n=!1){var r;k&&(r=A,ve());var i=new wr(e),a=n?C:0;function o(e,t){if(k){var n=xe(r);if(e!==parseInt(n.substring(1))){var a=be();j(a),i.anchor=a,_e(!1),i.ensure(e,t),_e(!0);return}}i.ensure(e,t)}gn(()=>{var e=!1;t((t,n=0)=>{e=!0,o(n,t)}),e||o(-1,null)},a)}function Er(e,t){return t}function Dr(e,t,n){for(var i=[],a=t.length,o,s=t.length,c=0;c<a;c++){let n=t[c];Sn(n,()=>{if(o){if(o.pending.delete(n),o.done.add(n),o.pending.size===0){var t=e.outrogroups;Or(e,r(o.done)),t.delete(o),t.size===0&&(e.outrogroups=null)}}else--s},!1)}if(s===0){var l=i.length===0&&n!==null&&e.pending.size===0;if(l){var u=n,d=u.parentNode;Zt(d),d.append(u),e.items.clear()}Or(e,t,!l)}else o={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(o)}function Or(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(let t of e.pending.values())for(let n of t)r.add(e.items.get(n).e)}for(var i=0;i<t.length;i++){var a=t[i];r?.has(a)?(a.f|=ee,En(a,document.createDocumentFragment())):G(t[i],n)}}var kr;function Ar(t,n,i,a,o,s=null){var c=t,l=new Map;if(n&4){var u=t;c=k?j(Jt(u)):u.appendChild(B())}k&&ve();var d=null,f=ct(()=>{var t=i();return e(t)?t:t==null?[]:r(t)}),p,m=new Map,h=!0;function g(e){v.effect.f&16384||(v.pending.delete(e),v.fallback=d,Mr(v,p,c,n,a),d!==null&&(p.length===0?d.f&33554432?(d.f^=ee,Pr(d,null,c)):wn(d):Sn(d,()=>{d=null})))}function _(e){v.pending.delete(e)}var v={effect:gn(()=>{p=$(f);var e=p.length;let t=!1;k&&xe(c)===`[!`!=(e===0)&&(c=be(),j(c),_e(!1),t=!0);for(var r=new Set,u=F,v=Qt(),y=0;y<e;y+=1){k&&A.nodeType===8&&A.data===`]`&&(c=A,t=!0,_e(!1));var b=p[y],x=a(b,y),S=h?null:l.get(x);S?(S.v&&Rt(S.v,b),S.i&&Rt(S.i,y),v&&u.unskip_effect(S.e)):(S=Nr(l,h?c:kr??=B(),b,x,y,o,n,i),h||(S.e.f|=ee),l.set(x,S)),r.add(x)}if(e===0&&s&&!d&&(h?d=W(()=>s(c)):(d=W(()=>s(kr??=B())),d.f|=ee)),e>r.size&&De(``,``,``),k&&e>0&&j(be()),!h){if(m.set(u,r),v){for(let[e,t]of l)r.has(e)||u.skip_effect(t.e);u.oncommit(g),u.ondiscard(_)}else g(u)}t&&_e(!0),$(f)}),flags:n,items:l,pending:m,outrogroups:null,fallback:d};h=!1,k&&(c=A)}function jr(e){for(;e!==null&&!(e.f&32);)e=e.next;return e}function Mr(e,t,n,i,a){var o=!!(i&8),s=t.length,c=e.items,l=jr(e.effect.first),u,d=null,f,p=[],m=[],h,g,_,v;if(o)for(v=0;v<s;v+=1)h=t[v],g=a(h,v),_=c.get(g).e,_.f&33554432||(_.nodes?.a?.measure(),(f??=new Set).add(_));for(v=0;v<s;v+=1){if(h=t[v],g=a(h,v),_=c.get(g).e,e.outrogroups!==null)for(let t of e.outrogroups)t.pending.delete(_),t.done.delete(_);if(_.f&8192&&(wn(_),o&&(_.nodes?.a?.unfix(),(f??=new Set).delete(_))),_.f&33554432){if(_.f^=ee,_===l)Pr(_,null,n);else{var y=d?d.next:l;_===e.effect.last&&(e.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),Fr(e,d,_),Fr(e,_,y),Pr(_,y,n),d=_,p=[],m=[],l=jr(d.next);continue}}if(_!==l){if(u!==void 0&&u.has(_)){if(p.length<m.length){var b=m[0],x;d=b.prev;var S=p[0],C=p[p.length-1];for(x=0;x<p.length;x+=1)Pr(p[x],b,n);for(x=0;x<m.length;x+=1)u.delete(m[x]);Fr(e,S.prev,C.next),Fr(e,d,S),Fr(e,C,b),l=b,d=C,--v,p=[],m=[]}else u.delete(_),Pr(_,l,n),Fr(e,_.prev,_.next),Fr(e,_,d===null?e.effect.first:d.next),Fr(e,d,_),d=_;continue}for(p=[],m=[];l!==null&&l!==_;)(u??=new Set).add(l),m.push(l),l=jr(l.next);if(l===null)continue}_.f&33554432||p.push(_),d=_,l=jr(_.next)}if(e.outrogroups!==null){for(let t of e.outrogroups)t.pending.size===0&&(Or(e,r(t.done)),e.outrogroups?.delete(t));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var w=[];if(u!==void 0)for(_ of u)_.f&8192||w.push(_);for(;l!==null;)!(l.f&8192)&&l!==e.fallback&&w.push(l),l=jr(l.next);var T=w.length;if(T>0){var te=i&4&&s===0?n:null;if(o){for(v=0;v<T;v+=1)w[v].nodes?.a?.measure();for(v=0;v<T;v+=1)w[v].nodes?.a?.fix()}Dr(e,w,te)}}o&&Ge(()=>{if(f!==void 0)for(_ of f)_.nodes?.a?.apply()})}function Nr(e,t,n,r,i,a,o,s){var c=o&1?o&16?Nt(n):R(n,!1,!1):null,l=o&2?Nt(i):null;return{v:c,i:l,e:W(()=>(a(t,c??n,l??i,s),()=>{e.delete(r)}))}}function Pr(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,a=t&&!(t.f&33554432)?t.nodes.start:n;r!==null;){var o=Yt(r);if(a.before(r),r===i)return;r=o}}function Fr(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}var Ir=[...` 	
\r\f\xA0\v﻿`];function Lr(e,t,n){var r=e==null?``:``+e;if(t&&(r=r?r+` `+t:t),n){for(var i of Object.keys(n))if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;(o===0||Ir.includes(r[o-1]))&&(s===r.length||Ir.includes(r[s]))?r=(o===0?``:r.substring(0,o))+r.substring(s+1):o=s}}return r===``?null:r}function Rr(e,t,n,r,i,a){var o=e[se];if(k||o!==n||o===void 0){var s=Lr(n,r,a);(!k||s!==e.getAttribute(`class`))&&(s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s)),e[se]=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];(i==null||l!==!!i[c])&&e.classList.toggle(c,l)}return a}var zr=Symbol(`is custom element`),Br=Symbol(`is html`),Vr=de?`link`:`LINK`;function Hr(e){if(k){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute(`value`)){var n=e.value;Ur(e,`value`,null),e.value=n}if(e.hasAttribute(`checked`)){var r=e.checked;Ur(e,`checked`,null),e.checked=r}}};e[D]=n,Ge(n),Ze()}}function Ur(e,t,n,r){var i=Wr(e);k&&(i[t]=e.getAttribute(t),t===`src`||t===`srcset`||t===`href`&&e.nodeName===Vr)||i[t]!==(i[t]=n)&&(t===`loading`&&(e[ae]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&Kr(e).has(t)?e[t]=n:e.setAttribute(t,n))}function Wr(e){return e[oe]??={[zr]:e.nodeName.includes(`-`),[Br]:e.namespaceURI===pe}}var Gr=new Map;function Kr(e){var t=e.getAttribute(`is`)||e.nodeName,n=Gr.get(t);if(n)return n;Gr.set(t,n=new Set);for(var r,i=e,a=Element.prototype;a!==i;){for(var s in r=o(i),r)r[s].set&&s!==`innerHTML`&&s!==`textContent`&&s!==`innerText`&&n.add(s);i=l(i)}return n}function qr(e,t,n=t){var r=new WeakSet;$e(e,`input`,async i=>{var a=i?e.defaultValue:e.value;if(a=Jr(e)?Yr(a):a,n(a),F!==null&&r.add(F),await qn(),a!==(a=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??``,s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}}),(k&&e.defaultValue!==e.value||Xn(t)==null&&e.value)&&(n(Jr(e)?Yr(e.value):e.value),F!==null&&r.add(F)),mn(()=>{var n=t();if(e===document.activeElement){var i=F;if(r.has(i))return}Jr(e)&&n===Yr(e.value)||(e.type!==`date`||n||e.value)&&n!==e.value&&(e.value=n??``)})}function Jr(e){var t=e.type;return t===`number`||t===`range`}function Yr(e){return e===``?null:+e}function Xr(e,t){return e===t||e?.[E]===t}function Zr(e=Ve(),t,n,r){var i=N.r,a=Y;return fn(()=>{var o,s;return mn(()=>{o=s,s=r?.()||[],Xn(()=>{Xr(n(...s),e)||(t(e,...s),o&&Xr(n(...o),e)&&t(null,...o))})}),()=>{let r=a;for(;r!==i&&r.parent!==null&&r.parent.f&33554432;)r=r.parent;let o=()=>{s&&Xr(n(...s),e)&&t(null,...s)},c=r.teardown;r.teardown=()=>{o(),c?.()}}}),e}function Qr(e=!1){let t=N,n=t.l.u;if(!n)return;let r=()=>Zn(t.s);if(e){let e=0,n={},i=it(()=>{let r=!1,i=t.s;for(let e in i)i[e]!==n[e]&&(n[e]=i[e],r=!0);return r&&e++,e});r=()=>$(i)}n.b.length&&un(()=>{$r(t,r),p(n.b)}),cn(()=>{let e=Xn(()=>n.m.map(f));return()=>{for(let t of e)typeof t==`function`&&t()}}),n.a.length&&cn(()=>{$r(t,r),p(n.a)})}function $r(e,t){if(e.l.s)for(let t of e.l.s)$(t);t()}function ei(e){N===null&&Te(`onMount`),Ie&&N.l!==null?ti(N).m.push(e):cn(()=>{let t=Xn(e);if(typeof t==`function`)return t})}function ti(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(`5`),Le();var ni={FULL_WIDTH:0,FITTING:1,SMUSHING:2,CONTROLLED_SMUSHING:3},ri=class{constructor(){this.comment=``,this.numChars=0,this.options={}}},ii=`1Row.3-D.3D Diagonal.3D-ASCII.3x5.4Max.5 Line Oblique.AMC 3 Line.AMC 3 Liv1.AMC AAA01.AMC Neko.AMC Razor.AMC Razor2.AMC Slash.AMC Slider.AMC Thin.AMC Tubes.AMC Untitled.ANSI Compact.ANSI Regular.ANSI Shadow.ASCII 12.ASCII 9.ASCII New Roman.Acrobatic.Alligator.Alligator2.Alpha.Alphabet.Arrows.Avatar.B1FF.Babyface Lame.Babyface Leet.Banner.Banner3-D.Banner3.Banner4.Barbwire.Basic.Bear.Bell.Benjamin.Big ASCII 12.Big ASCII 9.Big Chief.Big Money-ne.Big Money-nw.Big Money-se.Big Money-sw.Big Mono 12.Big Mono 9.Big.Bigfig.Binary.Block.Blocks.Bloody.BlurVision ASCII.Bolger.Braced.Bright.Broadway KB.Broadway.Bubble.Bulbhead.Caligraphy.Caligraphy2.Calvin S.Cards.Catwalk.Chiseled.Chunky.Circle.Classy.Coder Mini.Coinstak.Cola.Colossal.Computer.Contessa.Contrast.Cosmike.Cosmike2.Crawford.Crawford2.Crazy.Cricket.Cursive.Cyberlarge.Cybermedium.Cybersmall.Cygnet.DANC4.DOS Rebel.DWhistled.Dancing Font.Decimal.Def Leppard.Delta Corps Priest 1.DiamFont.Diamond.Diet Cola.Digital.Doh.Doom.Dot Matrix.Double Shorts.Double.Dr Pepper.Efti Chess.Efti Font.Efti Italic.Efti Piti.Efti Robot.Efti Wall.Efti Water.Electronic.Elite.Emboss 2.Emboss.Epic.Fender.Filter.Fire Font-k.Fire Font-s.Flipped.Flower Power.Font Font.Four Tops.Fraktur.Fun Face.Fun Faces.Future Smooth.Future Thin.Future.Fuzzy.Georgi16.Georgia11.Ghost.Ghoulish.Glenyn.Goofy.Gothic.Graceful.Gradient.Graffiti.Greek.Heart Left.Heart Right.Henry 3D.Hex.Hieroglyphs.Hollywood.Horizontal Left.Horizontal Right.ICL-1900.Impossible.Invita.Isometric1.Isometric2.Isometric3.Isometric4.Italic.Ivrit.JS Block Letters.JS Bracket Letters.JS Capital Curves.JS Cursive.JS Stick Letters.Jacky.Jazmine.Jerusalem.Katakana.Kban.Keyboard.Knob.Konto Slant.Konto.LCD.Larry 3D 2.Larry 3D.Lean.Letter.Letters.Lil Devil.Line Blocks.Linux.Lockergnome.Madrid.Marquee.Maxfour.Merlin1.Merlin2.Mike.Mini.Mirror.Mnemonic.Modular.Mono 12.Mono 9.Morse.Morse2.Moscow.Mshebrew210.Muzzle.NScript.NT Greek.NV Script.Nancyj-Fancy.Nancyj-Improved.Nancyj-Underlined.Nancyj.Nipples.O8.OS2.Octal.Ogre.Old Banner.Pagga.Patorjk's Cheese.Patorjk-HeX.Pawp.Peaks Slant.Peaks.Pebbles.Pepper.Poison.Puffy.Puzzle.Pyramid.Rammstein.Rebel.Rectangles.Red Phoenix.Relief.Relief2.Reverse.Roman.Rot13.Rotated.Rounded.Rowan Cap.Rozzo.RubiFont.Runic.Runyc.S Blood.SL Script.Santa Clara.Script.Serifcap.Shaded Blocky.Shadow.Shimrod.Short.Slant Relief.Slant.Slide.Small ASCII 12.Small ASCII 9.Small Block.Small Braille.Small Caps.Small Isometric1.Small Keyboard.Small Mono 12.Small Mono 9.Small Poison.Small Script.Small Shadow.Small Slant.Small Tengwar.Small.Soft.Speed.Spliff.Stacey.Stampate.Stampatello.Standard.Star Strips.Star Wars.Stellar.Stforek.Stick Letters.Stop.Straight.Stronger Than All.Sub-Zero.Swamp Land.Swan.Sweet.THIS.Tanja.Tengwar.Term.Terrace.Test1.The Edge.Thick.Thin.Thorned.Three Point.Ticks Slant.Ticks.Tiles.Tinker-Toy.Tmplr.Tombstone.Train.Trek.Tsalagi.Tubular.Twisted.Two Point.USA Flag.Univers.Upside Down Text.Varsity.Wavescape.Wavy.Weird.Wet Letter.Whimsy.WideTerm.Wow.miniwi`.split(`.`),ai={"ANSI-Compact":`ANSI Compact`},oi=e=>ai[e]?ai[e]:e;function si(e){return/[.*+?^${}()|[\]\\]/.test(e)?`\\`+e:e}var ci=(()=>{let{FULL_WIDTH:e=0,FITTING:t,SMUSHING:n,CONTROLLED_SMUSHING:r}=ni,i={},a={font:`Standard`,fontPath:`./fonts`,fetchFontIfMissing:!0};function o(e,t,n){let r=si(e.trim().slice(-1))||`@`,i=t===n-1?RegExp(r+r+`?\\s*$`):RegExp(r+`\\s*$`);return e.replace(i,``)}function s(i=-1,a=null){let o={},s,c=[[16384,`vLayout`,n],[8192,`vLayout`,t],[4096,`vRule5`,!0],[2048,`vRule4`,!0],[1024,`vRule3`,!0],[512,`vRule2`,!0],[256,`vRule1`,!0],[128,`hLayout`,n],[64,`hLayout`,t],[32,`hRule6`,!0],[16,`hRule5`,!0],[8,`hRule4`,!0],[4,`hRule3`,!0],[2,`hRule2`,!0],[1,`hRule1`,!0]];s=a===null?i:a;for(let[e,t,n]of c)s>=e?(s-=e,o[t]===void 0&&(o[t]=n)):t!==`vLayout`&&t!==`hLayout`&&(o[t]=!1);return o.hLayout===void 0?o.hLayout=i===0?t:i===-1?e:o.hRule1||o.hRule2||o.hRule3||o.hRule4||o.hRule5||o.hRule6?r:n:o.hLayout===n&&(o.hRule1||o.hRule2||o.hRule3||o.hRule4||o.hRule5||o.hRule6)&&(o.hLayout=r),o.vLayout===void 0?o.vLayout=o.vRule1||o.vRule2||o.vRule3||o.vRule4||o.vRule5?r:e:o.vLayout===n&&(o.vRule1||o.vRule2||o.vRule3||o.vRule4||o.vRule5)&&(o.vLayout=r),o}function c(e,t,n=``){return e===t&&e!==n&&e}function l(e,t){let n=`|/\\[]{}()<>`;if(e===`_`){if(n.indexOf(t)!==-1)return t}else if(t===`_`&&n.indexOf(e)!==-1)return e;return!1}function u(e,t){let n=`| /\\ [] {} () <>`,r=n.indexOf(e),i=n.indexOf(t);if(r!==-1&&i!==-1&&r!==i&&Math.abs(r-i)!==1){let e=Math.max(r,i),t=e+1;return n.substring(e,t)}return!1}function d(e,t){let n=`[] {} ()`,r=n.indexOf(e),i=n.indexOf(t);return r!==-1&&i!==-1&&Math.abs(r-i)<=1&&`|`}function f(e,t){return{"/\\":`|`,"\\/":`Y`,"><":`X`}[e+t]||!1}function p(e,t,n=``){return e===n&&t===n&&n}function m(e,t){return e===t&&e}function h(e,t){return l(e,t)}function g(e,t){return u(e,t)}function _(e,t){return e===`-`&&t===`_`||e===`_`&&t===`-`?`=`:!1}function v(e,t){return e===`|`&&t===`|`&&`|`}function y(e,t,n){return t===` `||t===``||t===n&&e!==` `?e:t}function b(r,i,a){if(a.fittingRules&&a.fittingRules.vLayout===e)return`invalid`;let o,s=Math.min(r.length,i.length),c,l,u=!1,d;if(s===0)return`invalid`;for(o=0;o<s;o++)if(c=r.substring(o,o+1),l=i.substring(o,o+1),c!==` `&&l!==` `){if(a.fittingRules&&a.fittingRules.vLayout===t)return`invalid`;if(a.fittingRules&&a.fittingRules.vLayout===n)return`end`;if(v(c,l)){u||=!1;continue}if(d=!1,d=a.fittingRules&&a.fittingRules.vRule1?m(c,l):d,d=!d&&a.fittingRules&&a.fittingRules.vRule2?h(c,l):d,d=!d&&a.fittingRules&&a.fittingRules.vRule3?g(c,l):d,d=!d&&a.fittingRules&&a.fittingRules.vRule4?_(c,l):d,u=!0,!d)return`invalid`}return u?`end`:`valid`}function x(e,t,n){let r=e.length,i=e.length,a,o,s,c=1,l,u,d;for(;c<=r;){for(a=e.slice(Math.max(0,i-c),i),o=t.slice(0,Math.min(r,c)),s=o.length,d=``,l=0;l<s;l++)if(u=b(a[l],o[l],n),u===`end`)d=u;else if(u===`invalid`){d=u;break}else d===``&&(d=`valid`);if(d===`invalid`){c--;break}if(d===`end`)break;d===`valid`&&c++}return Math.min(r,c)}function S(e,r,i){let a,o=Math.min(e.length,r.length),s,c,l=``,u,d=i.fittingRules||{};for(a=0;a<o;a++)s=e.substring(a,a+1),c=r.substring(a,a+1),s!==` `&&c!==` `?d.vLayout===t||d.vLayout===n?l+=y(s,c):(u=!1,u=d.vRule5?v(s,c):u,u=!u&&d.vRule1?m(s,c):u,u=!u&&d.vRule2?h(s,c):u,u=!u&&d.vRule3?g(s,c):u,u=!u&&d.vRule4?_(s,c):u,l+=u):l+=y(s,c);return l}function C(e,t,n,r){let i=e.length,a=t.length,o=e.slice(0,Math.max(0,i-n)),s=e.slice(Math.max(0,i-n),i),c=t.slice(0,Math.min(n,a)),l,u,d,f=[],p;for(u=s.length,l=0;l<u;l++)d=l>=a?s[l]:S(s[l],c[l],r),f.push(d);return p=t.slice(Math.min(n,a),a),[...o,...f,...p]}function w(e,t){let n=` `.repeat(t);return e.map(e=>e+n)}function T(e,t,n){let r=e[0].length,i=t[0].length,a;return r>i?t=w(t,r-i):i>r&&(e=w(e,i-r)),a=x(e,t,n),C(e,t,a,n)}function ee(r,i,a){let o=a.fittingRules||{};if(o.hLayout===e)return 0;let s,m=r.length,h=i.length,g=m,_=1,v=!1,y,b,x,S;if(m===0)return 0;distCal:for(;_<=g;){let e=m-_;for(y=r.substring(e,e+_),b=i.substring(0,Math.min(_,h)),s=0;s<Math.min(_,h);s++)if(x=y.substring(s,s+1),S=b.substring(s,s+1),x!==` `&&S!==` `){if(o.hLayout===t){--_;break distCal}if(o.hLayout===n){(x===a.hardBlank||S===a.hardBlank)&&--_;break distCal}if(v=!0,!(o.hRule1&&c(x,S,a.hardBlank)||o.hRule2&&l(x,S)||o.hRule3&&u(x,S)||o.hRule4&&d(x,S)||o.hRule5&&f(x,S)||o.hRule6&&p(x,S,a.hardBlank))){--_;break distCal}}if(v)break;_++}return Math.min(g,_)}function te(e,r,i,a){let o,s,m=[],h,g,_,v,b,x,S,C,w=a.fittingRules||{};if(typeof a.height!=`number`)throw Error(`height is not defined.`);for(o=0;o<a.height;o++){S=e[o],C=r[o],b=S.length,x=C.length,h=b-i,g=S.slice(0,Math.max(0,h)),_=``;let T=Math.max(0,b-i),ee=S.substring(T,T+i),te=C.substring(0,Math.min(i,x));for(s=0;s<i;s++){let e=s<b?ee.substring(s,s+1):` `,r=s<x?te.substring(s,s+1):` `;if(e!==` `&&r!==` `){if(w.hLayout===t||w.hLayout===n)_+=y(e,r,a.hardBlank);else{let t=w.hRule1&&c(e,r,a.hardBlank)||w.hRule2&&l(e,r)||w.hRule3&&u(e,r)||w.hRule4&&d(e,r)||w.hRule5&&f(e,r)||w.hRule6&&p(e,r,a.hardBlank)||y(e,r,a.hardBlank);_+=t}}else _+=y(e,r,a.hardBlank)}v=i>=x?``:C.substring(i,i+Math.max(0,x-i)),m[o]=g+_+v}return m}function ne(e){return Array(e).fill(``)}let re=function(e){return Math.max(...e.map(e=>e.length))};function E(e,t,n){return e.reduce(function(e,t){return te(e,t.fig,t.overlap||0,n)},ne(t))}function ie(e,t,n){for(let r=e.length-1;r>0;r--){let i=E(e.slice(0,r),t,n);if(re(i)<=n.width)return{outputFigText:i,chars:e.slice(r)}}return e.length>0?{outputFigText:E([e[0]],t,n),chars:e.slice(1)}:{outputFigText:ne(t),chars:e}}function ae(t,n,r){let i,a,o=0,s,c,l,u=r.height,d=[],f,p={chars:[],overlap:o},m=[],h,g,_,v,y;if(typeof u!=`number`)throw Error(`height is not defined.`);c=ne(u);let b=r.fittingRules||{};for(r.printDirection===1&&(t=t.split(``).reverse().join(``)),l=t.length,i=0;i<l;i++)if(h=t.substring(i,i+1),g=h.match(/\s/),a=n[h.charCodeAt(0)],v=null,a){if(b.hLayout!==e){for(o=1e4,s=0;s<u;s++)o=Math.min(o,ee(c[s],a[s],r));o=o===1e4?0:o}if(r.width>0&&(r.whitespaceBreak?(_=E(p.chars.concat([{fig:a,overlap:o}]),u,r),v=E(m.concat([{fig:_,overlap:p.overlap}]),u,r),f=re(v)):(v=te(c,a,o,r),f=re(v)),f>=r.width&&i>0&&(r.whitespaceBreak?(c=E(m.slice(0,-1),u,r),m.length>1&&(d.push(c),c=ne(u)),m=[]):(d.push(c),c=ne(u)))),r.width>0&&r.whitespaceBreak&&((!g||i===l-1)&&p.chars.push({fig:a,overlap:o}),g||i===l-1)){for(y=null;v=E(p.chars,u,r),f=re(v),f>=r.width;)y=ie(p.chars,u,r),p={chars:y.chars},d.push(y.outputFigText);f>0&&(y?m.push({fig:v,overlap:1}):m.push({fig:v,overlap:p.overlap})),g&&(m.push({fig:a,overlap:o}),c=ne(u)),i===l-1&&(c=E(m,u,r)),p={chars:[],overlap:o};continue}c=te(c,a,o,r)}return re(c)>0&&d.push(c),r.showHardBlanks||d.forEach(function(e){for(l=e.length,s=0;s<l;s++)e[s]=e[s].replace(RegExp(`\\`+r.hardBlank,`g`),` `)}),t===``&&d.length===0&&d.push(Array(u).fill(``)),d}let oe=function(i,a){let o,s=a.fittingRules||{};if(i==="default")o={hLayout:s.hLayout,hRule1:s.hRule1,hRule2:s.hRule2,hRule3:s.hRule3,hRule4:s.hRule4,hRule5:s.hRule5,hRule6:s.hRule6};else if(i===`full`)o={hLayout:e,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(i===`fitted`)o={hLayout:t,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(i===`controlled smushing`)o={hLayout:r,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(i===`universal smushing`)o={hLayout:n,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return o},se=function(i,a){let o={},s=a.fittingRules||{};if(i==="default")o={vLayout:s.vLayout,vRule1:s.vRule1,vRule2:s.vRule2,vRule3:s.vRule3,vRule4:s.vRule4,vRule5:s.vRule5};else if(i===`full`)o={vLayout:e,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(i===`fitted`)o={vLayout:t,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(i===`controlled smushing`)o={vLayout:r,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(i===`universal smushing`)o={vLayout:n,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return o},ce=function(e,t,n){n=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let r=oi(e),a=n.split(`
`),o=[],s,c,l;for(c=a.length,s=0;s<c;s++)o=o.concat(ae(a[s],i[r],t));for(c=o.length,l=o[0],s=1;s<c;s++)l=T(l,o[s],t);return l?l.join(`
`):``};function le(e,t){let n;if(n=typeof structuredClone<`u`?structuredClone(e):JSON.parse(JSON.stringify(e)),n.showHardBlanks=t.showHardBlanks||!1,n.width=t.width||-1,n.whitespaceBreak=t.whitespaceBreak||!1,t.horizontalLayout){let r=oe(t.horizontalLayout,e);r&&Object.assign(n.fittingRules,r)}if(t.verticalLayout){let r=se(t.verticalLayout,e);r&&Object.assign(n.fittingRules,r)}return n.printDirection=t.printDirection!==null&&t.printDirection!==void 0?t.printDirection:e.printDirection,n}let D=async function(e,t,n){return D.text(e,t,n)};return D.text=async function(e,t,n){e+=``;let r,i;typeof t==`function`?(i=t,r={font:a.font}):typeof t==`string`?(r={font:t},i=n):t?(r=t,i=n):(r={font:a.font},i=n);let o=r.font||a.font;try{let t=await D.loadFont(o),n=t?ce(o,le(t,r),e):``;return i&&i(null,n),n}catch(e){let t=e instanceof Error?e:Error(String(e));if(i)return i(t),``;throw t}},D.textSync=function(e,t){e+=``,typeof t==`string`?t={font:t}:t||={};let n=t.font||a.font,r=le(D.loadFontSync(n),t);return ce(n,r,e)},D.metadata=async function(e,t){e+=``;try{let n=await D.loadFont(e);if(!n)throw Error(`Error loading font.`);let r=oi(e),a=i[r]||{},o=[n,a.comment||``];return t&&t(null,n,a.comment),o}catch(e){let n=e instanceof Error?e:Error(String(e));if(t)return t(n),null;throw n}},D.defaults=function(e){return e&&typeof e==`object`&&Object.assign(a,e),typeof structuredClone<`u`?structuredClone(a):JSON.parse(JSON.stringify(a))},D.parseFont=function(e,t,n=!0){if(i[e]&&!n)return i[e].options;t=t.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let r=new ri,a=t.split(`
`),c=a.shift();if(!c)throw Error(`Invalid font file: missing header`);let l=c.split(` `),u={hardBlank:l[0].substring(5,6),height:parseInt(l[1],10),baseline:parseInt(l[2],10),maxLength:parseInt(l[3],10),oldLayout:parseInt(l[4],10),numCommentLines:parseInt(l[5],10),printDirection:l[6]?parseInt(l[6],10):0,fullLayout:l[7]?parseInt(l[7],10):null,codeTagCount:l[8]?parseInt(l[8],10):null};if((u.hardBlank||``).length!==1||[u.height,u.baseline,u.maxLength,u.oldLayout,u.numCommentLines].some(e=>e==null||isNaN(e))||u.height==null||u.numCommentLines==null||u.height<1||u.baseline<0||u.maxLength<0||u.numCommentLines<0)throw Error(`FIGlet header contains invalid values.`);u.fittingRules=s(u.oldLayout,u.fullLayout),r.options=u;let d=[];for(let e=32;e<=126;e++)d.push(e);if(d.push(196,214,220,228,246,252,223),a.length<u.numCommentLines+u.height*d.length)throw Error(`FIGlet file is missing data. Line length: ${a.length}. Comment lines: ${u.numCommentLines}. Height: ${u.height}. Num chars: ${d.length}.`);for(r.comment=a.splice(0,u.numCommentLines).join(`
`),r.numChars=0;a.length>0&&r.numChars<d.length;){let e=d[r.numChars];r[e]=a.splice(0,u.height);for(let t=0;t<u.height;t++)r[e][t]===void 0?r[e][t]=``:r[e][t]=o(r[e][t],t,u.height);r.numChars++}for(;a.length>0;){let e=a.shift();if(!e||e.trim()===``)break;let t=e.split(` `)[0],n;if(/^-?0[xX][0-9a-fA-F]+$/.test(t))n=parseInt(t,16);else if(/^-?0[0-7]+$/.test(t))n=parseInt(t,8);else if(/^-?[0-9]+$/.test(t))n=parseInt(t,10);else throw Error(`Error parsing data. Invalid data: ${t}`);if(n===-1||n<-2147483648||n>2147483647)throw Error(`Error parsing data. ${n===-1?`The char code -1 is not permitted.`:`The char code cannot be ${n<-2147483648?`less than -2147483648`:`greater than 2147483647`}.`}`);r[n]=a.splice(0,u.height);for(let e=0;e<u.height;e++)r[n][e]===void 0?r[n][e]=``:r[n][e]=o(r[n][e],e,u.height);r.numChars++}return i[e]=r,u},D.loadedFonts=()=>Object.keys(i),D.clearLoadedFonts=()=>{Object.keys(i).forEach(e=>{delete i[e]})},D.loadFont=async function(e,t){let n=oi(e);if(i[n]){let e=i[n].options;return t&&t(null,e),Promise.resolve(e)}try{if(!a.fetchFontIfMissing)throw Error(`Font is not loaded: ${n}`);let e=await fetch(`${a.fontPath}/${n}.flf`);if(!e.ok)throw Error(`Network response was not ok: ${e.status}`);let r=await e.text(),i=D.parseFont(n,r);return t&&t(null,i),i}catch(e){let n=e instanceof Error?e:Error(String(e));if(t)return t(n),null;throw n}},D.loadFontSync=function(e){let t=oi(e);if(i[t])return i[t].options;throw Error(`Synchronous font loading is not implemented for the browser, it will only work for fonts already loaded.`)},D.preloadFonts=async function(e,t){try{for(let t of e){let e=oi(t),n=await fetch(`${a.fontPath}/${e}.flf`);if(!n.ok)throw Error(`Failed to preload fonts. Error fetching font: ${e}, status code: ${n.statusText}`);let r=await n.text();D.parseFont(e,r)}t&&t()}catch(e){let n=e instanceof Error?e:Error(String(e));if(t){t(n);return}throw e}},D.fonts=function(e){return new Promise(function(t,n){t(ii),e&&e(null,ii)})},D.fontsSync=function(){return ii},D.figFonts=i,D})(),li=`flf2a$ 6 5 16 15 10 0 18319
Slant by Glenn Chappell 3/93 -- based on Standard
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
    __@
   / /@
  / / @
 /_/  @
(_)   @
      @@
 _ _ @
( | )@
|/|/ @
 $   @
$    @
     @@
     __ __ @
  __/ // /_@
 /_  _  __/@
/_  _  __/ @
 /_//_/    @
           @@
     __@
   _/ /@
  / __/@
 (_  ) @
/  _/  @
/_/    @@
   _   __@
  (_)_/_/@
   _/_/  @
 _/_/_   @
/_/ (_)  @
         @@
   ___   @
  ( _ )  @
 / __ \\/|@
/ /_/  < @
\\____/\\/ @
         @@
  _ @
 ( )@
 |/ @
 $  @
$   @
    @@
     __@
   _/_/@
  / /  @
 / /   @
/ /    @
|_|    @@
     _ @
    | |@
    / /@
   / / @
 _/_/  @
/_/    @@
       @
  __/|_@
 |    /@
/_ __| @
 |/    @
       @@
       @
    __ @
 __/ /_@
/_  __/@
 /_/   @
       @@
   @
   @
   @
 _ @
( )@
|/ @@
       @
       @
 ______@
/_____/@
  $    @
       @@
   @
   @
   @
 _ @
(_)@
   @@
       __@
     _/_/@
   _/_/  @
 _/_/    @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
   ___@
  <  /@
  / / @
 / /  @
/_/   @
      @@
   ___ @
  |__ \\@
  __/ /@
 / __/ @
/____/ @
       @@
   _____@
  |__  /@
   /_ < @
 ___/ / @
/____/  @
        @@
   __ __@
  / // /@
 / // /_@
/__  __/@
  /_/   @
        @@
    ______@
   / ____/@
  /___ \\  @
 ____/ /  @
/_____/   @
          @@
   _____@
  / ___/@
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
 _____@
/__  /@
  / / @
 / /  @
/_/   @
      @@
   ____ @
  ( __ )@
 / __  |@
/ /_/ / @
\\____/  @
        @@
   ____ @
  / __ \\@
 / /_/ /@
 \\__, / @
/____/  @
        @@
     @
   _ @
  (_)@
 _   @
(_)  @
     @@
     @
   _ @
  (_)@
 _   @
( )  @
|/   @@
  __@
 / /@
/ / @
\\ \\ @
 \\_\\@
    @@
       @
  _____@
 /____/@
/____/ @
  $    @
       @@
__  @
\\ \\ @
 \\ \\@
 / /@
/_/ @
    @@
  ___ @
 /__ \\@
  / _/@
 /_/  @
(_)   @
      @@
   ______ @
  / ____ \\@
 / / __ \`/@
/ / /_/ / @
\\ \\__,_/  @
 \\____/   @@
    ___ @
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
    ____ @
   / __ )@
  / __  |@
 / /_/ / @
/_____/  @
         @@
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
         @@
    ____ @
   / __ \\@
  / / / /@
 / /_/ / @
/_____/  @
         @@
    ______@
   / ____/@
  / __/   @
 / /___   @
/_____/   @
          @@
    ______@
   / ____/@
  / /_    @
 / __/    @
/_/       @
          @@
   ______@
  / ____/@
 / / __  @
/ /_/ /  @
\\____/   @
         @@
    __  __@
   / / / /@
  / /_/ / @
 / __  /  @
/_/ /_/   @
          @@
    ____@
   /  _/@
   / /  @
 _/ /   @
/___/   @
        @@
       __@
      / /@
 __  / / @
/ /_/ /  @
\\____/   @
         @@
    __ __@
   / //_/@
  / ,<   @
 / /| |  @
/_/ |_|  @
         @@
    __ @
   / / @
  / /  @
 / /___@
/_____/@
       @@
    __  ___@
   /  |/  /@
  / /|_/ / @
 / /  / /  @
/_/  /_/   @
           @@
    _   __@
   / | / /@
  /  |/ / @
 / /|  /  @
/_/ |_/   @
          @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / ____/ @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\___\\_\\ @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / _, _/ @
/_/ |_|  @
         @@
   _____@
  / ___/@
  \\__ \\ @
 ___/ / @
/____/  @
        @@
  ______@
 /_  __/@
  / /   @
 / /    @
/_/     @
        @@
   __  __@
  / / / /@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
 _    __@
| |  / /@
| | / / @
| |/ /  @
|___/   @
        @@
 _       __@
| |     / /@
| | /| / / @
| |/ |/ /  @
|__/|__/   @
           @@
   _  __@
  | |/ /@
  |   / @
 /   |  @
/_/|_|  @
        @@
__  __@
\\ \\/ /@
 \\  / @
 / /  @
/_/   @
      @@
 _____@
/__  /@
  / / @
 / /__@
/____/@
      @@
     ___@
    / _/@
   / /  @
  / /   @
 / /    @
/__/    @@
__    @
\\ \\   @
 \\ \\  @
  \\ \\ @
   \\_\\@
      @@
     ___@
    /  /@
    / / @
   / /  @
 _/ /   @
/__/    @@
  //|@
 |/||@
  $  @
 $   @
$    @
     @@
       @
       @
       @
       @
 ______@
/_____/@@
  _ @
 ( )@
  V @
 $  @
$   @
    @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
    __  @
   / /_ @
  / __ \\@
 / /_/ /@
/_.___/ @
        @@
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
       @@
       __@
  ____/ /@
 / __  / @
/ /_/ /  @
\\__,_/   @
         @@
      @
  ___ @
 / _ \\@
/  __/@
\\___/ @
      @@
    ____@
   / __/@
  / /_  @
 / __/  @
/_/     @
        @@
         @
   ____ _@
  / __ \`/@
 / /_/ / @
 \\__, /  @
/____/   @@
    __  @
   / /_ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
       _ @
      (_)@
     / / @
    / /  @
 __/ /   @
/___/    @@
    __  @
   / /__@
  / //_/@
 / ,<   @
/_/|_|  @
        @@
    __@
   / /@
  / / @
 / /  @
/_/   @
      @@
            @
   ____ ___ @
  / __ \`__ \\@
 / / / / / /@
/_/ /_/ /_/ @
            @@
        @
   ____ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
       @
  ____ @
 / __ \\@
/ /_/ /@
\\____/ @
       @@
         @
    ____ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__, /  @
  /_/   @@
        @
   _____@
  / ___/@
 / /    @
/_/     @
        @@
        @
   _____@
  / ___/@
 (__  ) @
/____/  @
        @@
   __ @
  / /_@
 / __/@
/ /_  @
\\__/  @
      @@
        @
  __  __@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
       @
 _   __@
| | / /@
| |/ / @
|___/  @
       @@
          @
 _      __@
| | /| / /@
| |/ |/ / @
|__/|__/  @
          @@
        @
   _  __@
  | |/_/@
 _>  <  @
/_/|_|  @
        @@
         @
   __  __@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
     @
 ____@
/_  /@
 / /_@
/___/@
     @@
     __@
   _/_/@
 _/_/  @
< <    @
/ /    @
\\_\\    @@
     __@
    / /@
   / / @
  / /  @
 / /   @
/_/    @@
     _ @
    | |@
    / /@
   _>_>@
 _/_/  @
/_/    @@
  /\\//@
 //\\/ @
  $   @
 $    @
$     @
      @@
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
160  NO-BREAK SPACE
     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
161  INVERTED EXCLAMATION MARK
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
162  CENT SIGN
     __@
  __/ /@
 / ___/@
/ /__  @
\\  _/  @
/_/    @@
163  POUND SIGN
     ____ @
    / ,__\\@
 __/ /_   @
 _/ /___  @
(_,____/  @
          @@
164  CURRENCY SIGN
    /|___/|@
   | __  / @
  / /_/ /  @
 /___  |   @
|/   |/    @
           @@
165  YEN SIGN
    ____@
  _| / /@
 /_  __/@
/_  __/ @
 /_/    @
        @@
166  BROKEN BAR
     __@
    / /@
   /_/ @
  __   @
 / /   @
/_/    @@
167  SECTION SIGN
     __ @
   _/ _)@
  / | | @
 | || | @
 | |_/  @
(__/    @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
 $   $  @
$   $   @
        @@
169  COPYRIGHT SIGN
    ______  @
   / _____\\ @
  / / ___/ |@
 / / /__  / @
|  \\___/ /  @
 \\______/   @@
170  FEMININE ORDINAL INDICATOR
   ___ _@
  / _ \`/@
 _\\_,_/ @
/____/  @
 $      @
        @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
  ____@
 / / /@
/ / / @
\\ \\ \\ @
 \\_\\_\\@
      @@
172  NOT SIGN
       @
 ______@
/___  /@
   /_/ @
 $     @
       @@
173  SOFT HYPHEN
      @
      @
 _____@
/____/@
  $   @
      @@
174  REGISTERED SIGN
    ______  @
   / ___  \\ @
  / / _ \\  |@
 / / , _/ / @
| /_/|_| /  @
 \\______/   @@
175  MACRON
 ______@
/_____/@
  $    @
 $     @
$      @
       @@
176  DEGREE SIGN
  ___ @
 / _ \\@
/ // /@
\\___/ @
 $    @
      @@
177  PLUS-MINUS SIGN
      __ @
   __/ /_@
  /_  __/@
 __/_/_  @
/_____/  @
         @@
178  SUPERSCRIPT TWO
   ___ @
  |_  |@
 / __/ @
/____/ @
 $     @
       @@
179  SUPERSCRIPT THREE
   ____@
  |_  /@
 _/_ < @
/____/ @
 $     @
       @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
 $  @
$   @
    @@
181  MICRO SIGN
          @
    __  __@
   / / / /@
  / /_/ / @
 / ._,_/  @
/_/       @@
182  PILCROW SIGN
  _______@
 / _    /@
/ (/ / / @
\\_  / /  @
 /_/_/   @
         @@
183  MIDDLE DOT
   @
 _ @
(_)@
 $ @
$  @
   @@
184  CEDILLA
   @
   @
   @
   @
 _ @
/_)@@
185  SUPERSCRIPT ONE
  ___@
 <  /@
 / / @
/_/  @
$    @
     @@
186  MASCULINE ORDINAL INDICATOR
   ___ @
  / _ \\@
 _\\___/@
/____/ @
 $     @
       @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
____  @
\\ \\ \\ @
 \\ \\ \\@
 / / /@
/_/_/ @
      @@
188  VULGAR FRACTION ONE QUARTER
  ___   __ @
 <  / _/_/ @
 / /_/_/___@
/_//_// / /@
 /_/ /_  _/@
      /_/  @@
189  VULGAR FRACTION ONE HALF
  ___   __   @
 <  / _/_/__ @
 / /_/_/|_  |@
/_//_/ / __/ @
 /_/  /____/ @
             @@
190  VULGAR FRACTION THREE QUARTERS
   ____    __ @
  |_  /  _/_/ @
 _/_ < _/_/___@
/____//_// / /@
    /_/ /_  _/@
         /_/  @@
191  INVERTED QUESTION MARK
    _ @
   (_)@
 _/ / @
/ _/_ @
\\___/ @
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
    __ @
   _\\_\\@
  / _ |@
 / __ |@
/_/ |_|@
       @@
193  LATIN CAPITAL LETTER A WITH ACUTE
     __@
   _/_/@
  / _ |@
 / __ |@
/_/ |_|@
       @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
     //|@
   _|/||@
  / _ | @
 / __ | @
/_/ |_| @
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
     /\\//@
   _//\\/ @
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    (())@
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
198  LATIN CAPITAL LETTER AE
    __________@
   /     ____/@
  / /|  __/   @
 / __  /___   @
/_/ /_____/   @
              @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
 /_)     @@
200  LATIN CAPITAL LETTER E WITH GRAVE
    __ @
   _\\_\\@
  / __/@
 / _/  @
/___/  @
       @@
201  LATIN CAPITAL LETTER E WITH ACUTE
     __@
   _/_/@
  / __/@
 / _/  @
/___/  @
       @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
     //|@
   _|/||@
  / __/ @
 / _/   @
/___/   @
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
    _  _ @
   (_)(_)@
  / __/  @
 / _/    @
/___/    @
         @@
204  LATIN CAPITAL LETTER I WITH GRAVE
    __ @
   _\\_\\@
  /  _/@
 _/ /  @
/___/  @
       @@
205  LATIN CAPITAL LETTER I WITH ACUTE
     __@
   _/_/@
  /  _/@
 _/ /  @
/___/  @
       @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
     //|@
   _|/||@
  /  _/ @
 _/ /   @
/___/   @
        @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
    _  _ @
   (_)(_)@
  /  _/  @
 _/ /    @
/___/    @
         @@
208  LATIN CAPITAL LETTER ETH
     ____ @
    / __ \\@
 __/ /_/ /@
/_  __/ / @
 /_____/  @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / |/ / @
 /    /  @
/_/|_/   @
         @@
210  LATIN CAPITAL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
211  LATIN CAPITAL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
213  LATIN CAPITAL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
215  MULTIPLICATION SIGN
     @
     @
 /|/|@
 > < @
|/|/ @
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   _____ @
  / _// \\@
 / //// /@
/ //// / @
\\_//__/  @
         @@
217  LATIN CAPITAL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
   __ @
__/_/_@
\\ \\/ /@
 \\  / @
 /_/  @
      @@
222  LATIN CAPITAL LETTER THORN
    __  @
   / /_ @
  / __ \\@
 / ____/@
/_/     @
        @@
223  LATIN SMALL LETTER SHARP S
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
224  LATIN SMALL LETTER A WITH GRAVE
    __  @
  __\\_\\_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
225  LATIN SMALL LETTER A WITH ACUTE
     __ @
  __/_/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
    //| @
  _|/||_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
227  LATIN SMALL LETTER A WITH TILDE
    /\\//@
  _//\\/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
229  LATIN SMALL LETTER A WITH RING ABOVE
     __ @
  __(())@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
230  LATIN SMALL LETTER AE
           @
  ____ ___ @
 / __ \` _ \\@
/ /_/   __/@
\\__,_____/ @
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
/_)    @@
232  LATIN SMALL LETTER E WITH GRAVE
   __ @
  _\\_\\@
 / _ \\@
/  __/@
\\___/ @
      @@
233  LATIN SMALL LETTER E WITH ACUTE
    __@
  _/_/@
 / _ \\@
/  __/@
\\___/ @
      @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
    //|@
  _|/||@
 / _ \\ @
/  __/ @
\\___/  @
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
   _  _ @
  (_)(_)@
 / _ \\  @
/  __/  @
\\___/   @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
   __ @
   \\_\\@
  / / @
 / /  @
/_/   @
      @@
237  LATIN SMALL LETTER I WITH ACUTE
    __@
   /_/@
  / / @
 / /  @
/_/   @
      @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
    //|@
   |/||@
  / /  @
 / /   @
/_/    @
       @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / /   @
 / /    @
/_/     @
        @@
240  LATIN SMALL LETTER ETH
     || @
    =||=@
 ___ || @
/ __\` | @
\\____/  @
        @@
241  LATIN SMALL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / __ \\ @
 / / / / @
/_/ /_/  @
         @@
242  LATIN SMALL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
243  LATIN SMALL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
245  LATIN SMALL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
247  DIVISION SIGN
       @
    _  @
 __(_)_@
/_____/@
 (_)   @
       @@
248  LATIN SMALL LETTER O WITH STROKE
        @
  _____ @
 / _// \\@
/ //// /@
\\_//__/ @
        @@
249  LATIN SMALL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
250  LATIN SMALL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
253  LATIN SMALL LETTER Y WITH ACUTE
      __ @
   __/_/_@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
254  LATIN SMALL LETTER THORN
     __  @
    / /_ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
    _   _ @
   (_) (_)@
  / / / / @
 / /_/ /  @
 \\__, /   @
/____/    @@
`,ui=pr(`<div class="modal svelte-1n46o8q"><div class="editBox svelte-1n46o8q"><div class="hd3 svelte-1n46o8q">Edit Duration</div> <div style="display:flex;" class="editRow svelte-1n46o8q"><input type="number" name="minutes" id="minutes" min="0" max="999" class="svelte-1n46o8q"/> <div class="hd5 svelte-1n46o8q">minutes</div> <button aria-label="save" class="btn svelte-1n46o8q"><i class="nf nf-md-check"></i></button></div></div></div>`),di=pr(`<div class="sessionItem svelte-1n46o8q"><div class="sessionDur"> </div> <div class="sessionTime svelte-1n46o8q"> </div></div>`),fi=pr(`<div class="sessionErr svelte-1n46o8q">No Sessions :)</div>`),pi=pr(`<div></div>`),mi=pr(`<div class="trackerGrid svelte-1n46o8q"></div>`),hi=pr(`<div class="body svelte-1n46o8q"><!> <div class="area svelte-1n46o8q"><div class="sidebar svelte-1n46o8q"><div class="sessions svelte-1n46o8q"><div class="hd3 svelte-1n46o8q">Sessions</div> <div class="sessionList svelte-1n46o8q"></div></div> <div class="tracker svelte-1n46o8q"><div class="hd3 svelte-1n46o8q">Tracker</div> <!></div></div> <div class="timer svelte-1n46o8q"></div> <div class="panel svelte-1n46o8q"><div class="close svelte-1n46o8q"><i class="nf nf-md-close"></i></div> <div class="edit svelte-1n46o8q"><i class="nf nf-md-pencil"></i></div></div></div></div>`);function gi(e,t){ze(t,!1),ci.parseFont(`ANSI Regular`,li);let n=R(document.createElement(`div`)),r=R([]),i=R(),a=R(),o=R(),s=R(),c=R(),l=R(!1),u=600,d=R(),f=R();z(a,!0);function p(e){let t=Math.trunc(e%60),n=Math.trunc(e/60%60),r=Math.trunc(e/3600),i=(t<10?`0`:``)+t;return i=(n<10?`0`:``)+n+` : `+i,r>0&&(i=(r<10?`0`:``)+r+` : `+i),i}function m(e){let t=Math.trunc(e%60),n=Math.trunc(e/60%60),r=Math.trunc(e/3600),i=(t<10?`0`:``)+t+`s`;return i=(n<10?`0`:``)+n+`m `+i,r>0&&(i=(r<10?`0`:``)+r+`h `+i),i}function g(e,t){let n=localStorage.getItem(`data`),r={duration:e,elapsedTime:t,datetime:new Date,type:`focus`};if(n==null)n=JSON.stringify({sessions:[r]});else{let e=JSON.parse(n);e.sessions=e.sessions.concat(r),e.sessions.sort((e,t)=>new Date(t.datetime)-new Date(e.datetime)),n=JSON.stringify(e)}localStorage.setItem(`data`,n)}function _(e,t){let n=0,r=0,i=!0,a=0;r=e,n=performance.now();let o=0,s=0,c=null;function l(e){e.key==` `&&(i==0?(o+=s,s=0,i=!0):(n=performance.now(),i=!1))}document.addEventListener(`keydown`,l),t.innerText=ci.textSync(p(Math.ceil(r)),`ANSI Regular`);function u(){i||(s=performance.now()-n),a=o+s;let e=Math.max(0,r*1e3-a),c=p(Math.ceil(e/1e3));i||(t.innerText=ci.textSync(c,`ANSI Regular`)),e>0?requestAnimationFrame(u):(g(r,Math.min(r*1e3,a)/1e3),d(!1))}c=requestAnimationFrame(u);function d(e){e&&a!=0&&g(r,Math.min(r,a/1e3)),c!==null&&(cancelAnimationFrame(c),c=null),document.removeEventListener(`keydown`,l)}return d}function v(e){let t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function y(){Ft(r,$(r).innerHTML=``);let e=localStorage.getItem(`data`),t=[];e==null?localStorage.setItem(`data`,JSON.stringify({sessions:[]})):t=JSON.parse(e).sessions,t.sort((e,t)=>new Date(t.datetime)-new Date(e.datetime)),z(r,[]);for(let e of t){let t=new Date(e.datetime);v(t)&&z(r,$(r).concat({duration:m(e.elapsedTime),time:t.getHours()+`:`+(t.getMinutes()<10?`0`:``)+t.getMinutes()}))}}function b(){let e=localStorage.getItem(`data`);if(e==null)return{nil:!0};let t=JSON.parse(e).sessions,n=new Date,r={};for(let e=0;e<30;e++){let t=new Date(n);t.setDate(n.getDate()-e);let i=t.getFullYear()+`-`+String(t.getMonth()+1).padStart(2,`0`)+`-`+String(t.getDate()).padStart(2,`0`);r[i]=0}let i=0;for(let e of t){let t=new Date(e.datetime),n=t.getFullYear()+`-`+String(t.getMonth()+1).padStart(2,`0`)+`-`+String(t.getDate()).padStart(2,`0`);Object.hasOwn(r,n)&&(r[n]+=e.elapsedTime,i+=e.elapsedTime)}return{nil:!1,hrs_per_day:r,totalTime:i}}ei(()=>{document.addEventListener(`keydown`,e=>{e.key==`Escape`&&z(l,!1)});function e(){y(),_(u,$(n)),(e=>{z(a,e.nil),z(o,e.hrs_per_day),z(i,e.totalTime)})(b())}e(),$(s).addEventListener(`click`,t=>{destroyTimer(!0),e()}),$(c).addEventListener(`click`,e=>{z(l,!0)}),z(d,()=>{console.log(`hi`),$(l),z(f,Math.max(Math.min($(f),999),1)),u=60*$(f),e(),z(l,!1)})}),Qr();var x=hi(),S=V(x),C=e=>{var t=ui(),n=V(t),r=H(V(n),2),i=V(r);Hr(i);var a=H(i,4);M(r),M(n),M(t),qr(i,()=>$(f),e=>z(f,e)),ir(`click`,a,function(...e){$(d)?.apply(this,e)}),mr(e,t)};Tr(S,e=>{$(l)&&e(C)});var w=H(S,2),T=V(w),ee=V(T),te=H(V(ee),2);Ar(te,5,()=>$(r),Er,(e,t)=>{var n=di(),r=V(n),i=Xt(r,!0),a=Xt(H(r,2),!0);M(n),hn(()=>{yr(i,$(t).duration),yr(a,$(t).time)}),mr(e,n)},e=>{mr(e,fi())}),M(te),M(ee);var ne=H(ee,2),re=H(V(ne),2),E=e=>{var t=mi();Ar(t,5,()=>Object.entries($(o)),Er,(e,t)=>{var n=st(()=>h($(t),2));let r=()=>$(n)[0],a=()=>$(n)[1];var o=pi();let s;hn(e=>{s=Rr(o,1,`trackerUnit svelte-1n46o8q`,null,s,{level1:a()>0,level2:a()>$(i)*.05,level3:a()>$(i)*.15,level4:a()>$(i)*.3,level5:a()>$(i)*.5}),Ur(o,`title`,e)},[()=>`${r()} · ${(a()/3600).toFixed(2)} hrs`]),mr(e,o)}),M(t),mr(e,t)};Tr(re,e=>{$(a)||e(E)}),M(ne),M(T);var ie=H(T,2);Zr(ie,e=>z(n,e),()=>$(n));var ae=H(ie,2),oe=V(ae);Zr(oe,e=>z(s,e),()=>$(s)),Zr(H(oe,2),e=>z(c,e),()=>$(c)),M(ae),M(w),M(x),mr(e,x),Be()}ar([`click`]),br(gi,{target:document.getElementById(`app`)});