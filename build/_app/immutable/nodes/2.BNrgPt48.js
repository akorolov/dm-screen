import{n as nt,C as ke,y as x,z as Ee,s as st,e as M,a as A,c as D,b as N,f as S,g as H,p as C,A as ht,O as Lt,i as W,h as P,P as Vt,Q as j,R as w,S as Xt,T as wt,k as Yt,U as Zt,o as Oe,V as Nt,W as Ut,t as dt,d as mt,j as _t,X as it,Y,r as lt,Z as Pe,_ as ct,l as qt,$ as Bt}from"../chunks/scheduler.BMdYFXtA.js";import{n as Se,l as Me,f as De,h as Le,a as R,t as F,S as pt,i as gt,g as rt,c as ot,j as Gt,k as xt,o as ft,b as $t,d as te,m as ee,e as ne}from"../chunks/index.CFoC2Otu.js";import{c as Ve,p as we,d as at,f as At,s as Ht,g as Ne}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.iyEx3IyW.js";import{w as Ue}from"../chunks/index.74h6BLny.js";function qe(n,t,e,l){if(!t)return nt;const a=n.getBoundingClientRect();if(t.left===a.left&&t.right===a.right&&t.top===a.top&&t.bottom===a.bottom)return nt;const{delay:o=0,duration:s=300,easing:r=ke,start:c=Se()+o,end:v=c+s,tick:m=nt,css:f}=e(n,{from:t,to:a},l);let d=!0,p=!1,u;function O(){f&&(u=De(n,0,1,s,o,r,f)),o||(p=!0)}function y(){f&&Le(n,u),d=!1}return Me(_=>{if(!p&&_>=c&&(p=!0),p&&_>=v&&(m(1,0),y()),!d)return!1;if(p){const g=_-c,b=0+1*r(g/s);m(b,1-b)}return!0}),O(),m(0,1),y}function Be(n){const t=getComputedStyle(n);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:e,height:l}=t,a=n.getBoundingClientRect();n.style.position="absolute",n.style.width=e,n.style.height=l,Ae(n,a)}}function Ae(n,t){const e=n.getBoundingClientRect();if(t.left!==e.left||t.top!==e.top){const l=getComputedStyle(n),a=l.transform==="none"?"":l.transform;n.style.transform=`${a} translate(${t.left-e.left}px, ${t.top-e.top}px)`}}function G(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function He(n,t){F(n,1,1,()=>{t.delete(n.key)})}function Re(n,t){n.f(),He(n,t)}function We(n,t,e,l,a,o,s,r,c,v,m,f){let d=n.length,p=o.length,u=d;const O={};for(;u--;)O[n[u].key]=u;const y=[],_=new Map,g=new Map,b=[];for(u=p;u--;){const k=f(a,o,u),E=e(k);let V=s.get(E);V?b.push(()=>V.p(k,t)):(V=v(E,k),V.c()),_.set(E,y[u]=V),E in O&&g.set(E,Math.abs(u-O[E]))}const h=new Set,T=new Set;function I(k){R(k,1),k.m(r,m),s.set(k.key,k),m=k.first,p--}for(;d&&p;){const k=y[p-1],E=n[d-1],V=k.key,U=E.key;k===E?(m=k.first,d--,p--):_.has(U)?!s.has(V)||h.has(V)?I(k):T.has(U)?d--:g.get(V)>g.get(U)?(T.add(V),I(k)):(h.add(U),d--):(c(E,s),d--)}for(;d--;){const k=n[d];_.has(k.key)||c(k,s)}for(;p;)I(y[p-1]);return x(b),y}function je(n,{from:t,to:e},l={}){const a=getComputedStyle(n),o=a.transform==="none"?"":a.transform,[s,r]=a.transformOrigin.split(" ").map(parseFloat),c=t.left+t.width*s/e.width-(e.left+s),v=t.top+t.height*r/e.height-(e.top+r),{delay:m=0,duration:f=p=>Math.sqrt(p)*120,easing:d=Ve}=l;return{delay:m,duration:Ee(f)?f(Math.sqrt(c*c+v*v)):f,easing:d,css:(p,u)=>{const O=u*c,y=u*v,_=p+u*t.width/e.width,g=p+u*t.height/e.height;return`transform: ${o} translate(${O}px, ${y}px) scale(${_}, ${g});`}}}function Rt(n,t,e){const l=n.slice();return l[66]=t[e].id,l[67]=t[e].val,l[69]=e,l}function Wt(n,t,e){const l=n.slice();return l[70]=t[e],l}function jt(n){let t,e=n[70]+"",l,a;return{c(){t=M("option"),l=dt(e),this.h()},l(o){t=D(o,"OPTION",{});var s=N(t);l=mt(s,e),s.forEach(S),this.h()},h(){t.__value=a=n[70],j(t,t.__value)},m(o,s){W(o,t,s),P(t,l)},p(o,s){s[0]&1&&e!==(e=o[70]+"")&&_t(l,e),s[0]&1&&a!==(a=o[70])&&(t.__value=a,j(t,t.__value))},d(o){o&&S(t)}}}function Ft(n){let t,e=[],l=new Map,a,o,s,r,c=G(n[16]);const v=m=>m[66];for(let m=0;m<c.length;m+=1){let f=Rt(n,c,m),d=v(f);l.set(d,e[m]=zt(d,f))}return{c(){t=M("div");for(let m=0;m<e.length;m+=1)e[m].c();this.h()},l(m){t=D(m,"DIV",{class:!0});var f=N(t);for(let d=0;d<e.length;d+=1)e[d].l(f);f.forEach(S),this.h()},h(){C(t,"class",a="input-chip-list "+n[19])},m(m,f){W(m,t,f);for(let d=0;d<e.length;d+=1)e[d]&&e[d].m(t,null);r=!0},p(m,f){if(n=m,f[0]&16892064){c=G(n[16]),rt();for(let d=0;d<e.length;d+=1)e[d].r();e=We(e,f,v,1,n,c,l,t,Re,zt,null,Rt);for(let d=0;d<e.length;d+=1)e[d].a();ot()}(!r||f[0]&524288&&a!==(a="input-chip-list "+n[19]))&&C(t,"class",a)},i(m){if(!r){for(let f=0;f<c.length;f+=1)R(e[f]);m&&ht(()=>{r&&(s&&s.end(1),o=Gt(t,at,{transition:n[8],params:n[9],enabled:n[7]}),o.start())}),r=!0}},o(m){for(let f=0;f<e.length;f+=1)F(e[f]);o&&o.invalidate(),m&&(s=xt(t,at,{transition:n[10],params:n[11],enabled:n[7]})),r=!1},d(m){m&&S(t);for(let f=0;f<e.length;f+=1)e[f].d();m&&s&&s.end()}}}function zt(n,t){let e,l,a,o=t[67]+"",s,r,c,v="✕",m,f,d,p,u,O=nt,y,_,g;function b(...h){return t[53](t[69],t[67],...h)}return{key:n,first:null,c(){e=M("div"),l=M("button"),a=M("span"),s=dt(o),r=A(),c=M("span"),c.textContent=v,p=A(),this.h()},l(h){e=D(h,"DIV",{});var T=N(e);l=D(T,"BUTTON",{type:!0,class:!0});var I=N(l);a=D(I,"SPAN",{});var k=N(a);s=mt(k,o),k.forEach(S),r=H(I),c=D(I,"SPAN",{"data-svelte-h":!0}),it(c)!=="svelte-1p578dz"&&(c.textContent=v),I.forEach(S),p=H(T),T.forEach(S),this.h()},h(){C(l,"type","button"),C(l,"class",m="chip "+t[5]),this.first=e},m(h,T){W(h,e,T),P(e,l),P(l,a),P(a,s),P(l,r),P(l,c),P(e,p),y=!0,_||(g=[w(l,"click",b),w(l,"click",t[43]),w(l,"keypress",t[44]),w(l,"keydown",t[45]),w(l,"keyup",t[46])],_=!0)},p(h,T){t=h,(!y||T[0]&65536)&&o!==(o=t[67]+"")&&_t(s,o),(!y||T[0]&32&&m!==(m="chip "+t[5]))&&C(l,"class",m)},r(){u=e.getBoundingClientRect()},f(){Be(e),O()},a(){O(),O=qe(e,u,je,{duration:t[3]})},i(h){y||(h&&ht(()=>{y&&(d&&d.end(1),f=Gt(l,at,{transition:t[12],params:t[13],enabled:t[7]}),f.start())}),y=!0)},o(h){f&&f.invalidate(),h&&(d=xt(l,at,{transition:t[14],params:t[15],enabled:t[7]})),y=!1},d(h){h&&S(e),h&&d&&d.end(),_=!1,x(g)}}}function Fe(n){let t,e,l,a,o,s,r,c,v,m,f,d,p,u,O,y,_=G(n[0]),g=[];for(let h=0;h<_.length;h+=1)g[h]=jt(Wt(n,_,h));let b=n[16].length&&Ft(n);return{c(){t=M("div"),e=M("div"),l=M("select");for(let h=0;h<g.length;h+=1)g[h].c();a=A(),o=M("div"),s=M("form"),r=M("input"),f=A(),b&&b.c(),this.h()},l(h){t=D(h,"DIV",{class:!0});var T=N(t);e=D(T,"DIV",{class:!0});var I=N(e);l=D(I,"SELECT",{name:!0,"aria-label":!0,tabindex:!0});var k=N(l);for(let U=0;U<g.length;U+=1)g[U].l(k);k.forEach(S),I.forEach(S),a=H(T),o=D(T,"DIV",{class:!0});var E=N(o);s=D(E,"FORM",{});var V=N(s);r=D(V,"INPUT",{type:!0,placeholder:!0,class:!0}),V.forEach(S),f=H(E),b&&b.l(E),E.forEach(S),T.forEach(S),this.h()},h(){C(l,"name",n[2]),l.multiple=!0,l.required=n[4],C(l,"aria-label",n[6]),C(l,"tabindex","-1"),n[0]===void 0&&ht(()=>n[51].call(l)),C(e,"class","h-0 overflow-hidden"),C(r,"type","text"),C(r,"placeholder",c=n[25].placeholder??"Enter values..."),C(r,"class",v="input-chip-field "+n[18]),r.disabled=m=n[25].disabled,C(o,"class",d="input-chip-wrapper "+n[20]),C(t,"class",p="input-chip "+n[21]),Lt(t,"opacity-50",n[25].disabled)},m(h,T){W(h,t,T),P(t,e),P(e,l);for(let I=0;I<g.length;I+=1)g[I]&&g[I].m(l,null);n[50](l),Vt(l,n[0]),P(t,a),P(t,o),P(o,s),P(s,r),j(r,n[1]),P(o,f),b&&b.m(o,null),u=!0,O||(y=[w(l,"change",n[51]),w(r,"input",n[52]),w(r,"input",n[22]),w(r,"input",n[47]),w(r,"focus",n[48]),w(r,"blur",n[49]),w(s,"submit",n[23])],O=!0)},p(h,T){if(T[0]&1){_=G(h[0]);let I;for(I=0;I<_.length;I+=1){const k=Wt(h,_,I);g[I]?g[I].p(k,T):(g[I]=jt(k),g[I].c(),g[I].m(l,null))}for(;I<g.length;I+=1)g[I].d(1);g.length=_.length}(!u||T[0]&4)&&C(l,"name",h[2]),(!u||T[0]&16)&&(l.required=h[4]),(!u||T[0]&64)&&C(l,"aria-label",h[6]),T[0]&1&&Vt(l,h[0]),(!u||T[0]&33554432&&c!==(c=h[25].placeholder??"Enter values..."))&&C(r,"placeholder",c),(!u||T[0]&262144&&v!==(v="input-chip-field "+h[18]))&&C(r,"class",v),(!u||T[0]&33554432&&m!==(m=h[25].disabled))&&(r.disabled=m),T[0]&2&&r.value!==h[1]&&j(r,h[1]),h[16].length?b?(b.p(h,T),T[0]&65536&&R(b,1)):(b=Ft(h),b.c(),R(b,1),b.m(o,null)):b&&(rt(),F(b,1,1,()=>{b=null}),ot()),(!u||T[0]&1048576&&d!==(d="input-chip-wrapper "+h[20]))&&C(o,"class",d),(!u||T[0]&2097152&&p!==(p="input-chip "+h[21]))&&C(t,"class",p),(!u||T[0]&35651584)&&Lt(t,"opacity-50",h[25].disabled)},i(h){u||(R(b),u=!0)},o(h){F(b),u=!1},d(h){h&&S(t),Xt(g,h),n[50](null),b&&b.d(),O=!1,x(y)}}}const ze="textarea cursor-pointer",Je="space-y-4",Ke="flex flex-wrap gap-2",Qe="unstyled bg-transparent border-0 !ring-0 p-0 w-full";function Xe(n,t,e){let l,a,o,s,r;const c=["input","name","value","whitelist","max","minlength","maxlength","allowUpperCase","allowDuplicates","validation","duration","required","chips","invalid","padding","rounded","regionChipWrapper","regionChipList","regionInput","label","transitions","listTransitionIn","listTransitionInParams","listTransitionOut","listTransitionOutParams","chipTransitionIn","chipTransitionInParams","chipTransitionOut","chipTransitionOutParams","addChip","removeChip"];let v=wt(t,c),m;Yt(n,we,i=>e(54,m=i));const f=Zt();let{input:d=""}=t,{name:p}=t,{value:u=[]}=t,{whitelist:O=[]}=t,{max:y=-1}=t,{minlength:_=-1}=t,{maxlength:g=-1}=t,{allowUpperCase:b=!1}=t,{allowDuplicates:h=!1}=t,{validation:T=()=>!0}=t,{duration:I=150}=t,{required:k=!1}=t,{chips:E="variant-filled"}=t,{invalid:V="input-error"}=t,{padding:U="p-2"}=t,{rounded:L="rounded-container-token"}=t,{regionChipWrapper:q=""}=t,{regionChipList:B=""}=t,{regionInput:Z=""}=t,{label:K="Chips select"}=t,{transitions:$=!m}=t,{listTransitionIn:vt=At}=t,{listTransitionInParams:bt={duration:150,opacity:0,y:-20}}=t,{listTransitionOut:yt=At}=t,{listTransitionOutParams:Ct={duration:150,opacity:0,y:-20}}=t,{chipTransitionIn:Tt=Ht}=t,{chipTransitionInParams:It={duration:150,opacity:0}}=t,{chipTransitionOut:kt=Ht}=t,{chipTransitionOutParams:Et={duration:150,opacity:0}}=t,Q=!0,J=(u==null?void 0:u.map(i=>({val:i,id:Math.random()})))||[];function Ot(){e(0,u=[])}let tt;Oe(()=>{if(!tt.form)return;const i=tt.form;return i.addEventListener("reset",Ot),()=>{i.removeEventListener("reset",Ot)}});function le(){e(41,Q=!0)}function ae(i){return T===void 0||T(i)}function se(){return y===-1||u.length<y}function re(i){return(_===-1||i.length>=_)&&(g===-1||i.length<=g)}function oe(i){return O.length===0||O.includes(i)}function ue(i){return h||!u.includes(i)}function Pt(i=""){return!i&&!d?!1:(i=i!==""?i.trim():d.trim(),ae(i)&&se()&&re(i)&&oe(i)&&ue(i))}function St(i){i=b?i:i.toLowerCase(),u.push(i),e(0,u),J.push({val:i,id:Math.random()}),e(16,J),e(0,u)}function Mt(i){let z=u.indexOf(i);u.splice(z,1),e(0,u),J.splice(z,1),e(16,J),e(0,u)}function ce(i){if(i.preventDefault(),e(41,Q=Pt()),Q===!1){f("invalid",{event:i,input:d});return}St(d),f("add",{event:i,chipIndex:u.length-1,chipValue:d}),e(1,d="")}function Dt(i,z,X){v.disabled||(Mt(X),f("remove",{event:i,chipIndex:z,chipValue:X}))}function fe(i){if(e(41,Q=Pt(i)),Q===!1){f("invalidManually",{input:i});return}St(i),f("addManually",{chipIndex:u.length-1,chipValue:i})}function he(i){v.disabled||(Mt(i),f("removeManually",{chipValue:i}))}function de(i){Y.call(this,n,i)}function me(i){Y.call(this,n,i)}function _e(i){Y.call(this,n,i)}function pe(i){Y.call(this,n,i)}function ge(i){Y.call(this,n,i)}function ve(i){Y.call(this,n,i)}function be(i){Y.call(this,n,i)}function ye(i){lt[i?"unshift":"push"](()=>{tt=i,e(17,tt)})}function Ce(){u=Pe(this),e(0,u)}function Te(){d=this.value,e(1,d)}const Ie=(i,z,X)=>Dt(X,i,z);return n.$$set=i=>{e(65,t=Nt(Nt({},t),Ut(i))),e(25,v=wt(t,c)),"input"in i&&e(1,d=i.input),"name"in i&&e(2,p=i.name),"value"in i&&e(0,u=i.value),"whitelist"in i&&e(26,O=i.whitelist),"max"in i&&e(27,y=i.max),"minlength"in i&&e(28,_=i.minlength),"maxlength"in i&&e(29,g=i.maxlength),"allowUpperCase"in i&&e(30,b=i.allowUpperCase),"allowDuplicates"in i&&e(31,h=i.allowDuplicates),"validation"in i&&e(32,T=i.validation),"duration"in i&&e(3,I=i.duration),"required"in i&&e(4,k=i.required),"chips"in i&&e(5,E=i.chips),"invalid"in i&&e(33,V=i.invalid),"padding"in i&&e(34,U=i.padding),"rounded"in i&&e(35,L=i.rounded),"regionChipWrapper"in i&&e(36,q=i.regionChipWrapper),"regionChipList"in i&&e(37,B=i.regionChipList),"regionInput"in i&&e(38,Z=i.regionInput),"label"in i&&e(6,K=i.label),"transitions"in i&&e(7,$=i.transitions),"listTransitionIn"in i&&e(8,vt=i.listTransitionIn),"listTransitionInParams"in i&&e(9,bt=i.listTransitionInParams),"listTransitionOut"in i&&e(10,yt=i.listTransitionOut),"listTransitionOutParams"in i&&e(11,Ct=i.listTransitionOutParams),"chipTransitionIn"in i&&e(12,Tt=i.chipTransitionIn),"chipTransitionInParams"in i&&e(13,It=i.chipTransitionInParams),"chipTransitionOut"in i&&e(14,kt=i.chipTransitionOut),"chipTransitionOutParams"in i&&e(15,Et=i.chipTransitionOutParams)},n.$$.update=()=>{n.$$.dirty[1]&1028&&e(42,l=Q===!1?V:""),e(21,a=`${ze} ${U} ${L} ${t.class??""} ${l}`),n.$$.dirty[1]&32&&e(20,o=`${Je} ${q}`),n.$$.dirty[1]&64&&e(19,s=`${Ke} ${B}`),n.$$.dirty[1]&128&&e(18,r=`${Qe} ${Z}`),n.$$.dirty[0]&65537&&e(16,J=(u==null?void 0:u.map((i,z)=>{var X;return((X=J[z])==null?void 0:X.val)===i?J[z]:{id:Math.random(),val:i}}))||[])},t=Ut(t),[u,d,p,I,k,E,K,$,vt,bt,yt,Ct,Tt,It,kt,Et,J,tt,r,s,o,a,le,ce,Dt,v,O,y,_,g,b,h,T,V,U,L,q,B,Z,fe,he,Q,l,de,me,_e,pe,ge,ve,be,ye,Ce,Te,Ie]}class Ye extends pt{constructor(t){super(),gt(this,t,Xe,Fe,st,{input:1,name:2,value:0,whitelist:26,max:27,minlength:28,maxlength:29,allowUpperCase:30,allowDuplicates:31,validation:32,duration:3,required:4,chips:5,invalid:33,padding:34,rounded:35,regionChipWrapper:36,regionChipList:37,regionInput:38,label:6,transitions:7,listTransitionIn:8,listTransitionInParams:9,listTransitionOut:10,listTransitionOutParams:11,chipTransitionIn:12,chipTransitionInParams:13,chipTransitionOut:14,chipTransitionOutParams:15,addChip:39,removeChip:40},null,[-1,-1,-1])}get addChip(){return this.$$.ctx[39]}get removeChip(){return this.$$.ctx[40]}}function Ze(n){let t;return{c(){t=dt(n[0])},l(e){t=mt(e,n[0])},m(e,l){W(e,t,l)},p(e,l){l&1&&_t(t,e[0])},d(e){e&&S(t)}}}function Ge(n){let t,e,l;return{c(){t=M("input"),this.h()},l(a){t=D(a,"INPUT",{class:!0,type:!0}),this.h()},h(){C(t,"class","input"),C(t,"type","text")},m(a,o){W(a,t,o),j(t,n[0]),e||(l=[w(t,"input",n[9]),w(t,"keydown",n[6])],e=!0)},p(a,o){o&1&&t.value!==a[0]&&j(t,a[0])},d(a){a&&S(t),e=!1,x(l)}}}function xe(n){let t,e,l,a,o,s,r,c,v='<span class="material-symbols-outlined">favorite</span>',m,f,d,p,u='<span class="material-symbols-outlined">skull</span>',O,y,_,g,b,h,T;function I(L,q){return L[4]?Ge:Ze}let k=I(n),E=k(n);function V(L){n[13](L)}let U={class:"border",rounded:"rounded",chips:"variant-soft-secondary",name:"chips",placeholder:"Add conditions..."};return n[3]!==void 0&&(U.value=n[3]),_=new Ye({props:U}),lt.push(()=>ft(_,"value",V)),{c(){t=M("div"),e=M("header"),l=M("input"),a=A(),o=M("a"),E.c(),s=A(),r=M("div"),c=M("div"),c.innerHTML=v,m=A(),f=M("input"),d=A(),p=M("button"),p.innerHTML=u,O=A(),y=M("section"),$t(_.$$.fragment),this.h()},l(L){t=D(L,"DIV",{class:!0});var q=N(t);e=D(q,"HEADER",{class:!0});var B=N(e);l=D(B,"INPUT",{class:!0,title:!0,type:!0,placeholder:!0}),a=H(B),o=D(B,"A",{title:!0});var Z=N(o);E.l(Z),Z.forEach(S),s=H(B),r=D(B,"DIV",{class:!0,title:!0});var K=N(r);c=D(K,"DIV",{class:!0,"data-svelte-h":!0}),it(c)!=="svelte-y9ncw"&&(c.innerHTML=v),m=H(K),f=D(K,"INPUT",{class:!0,type:!0,placeholder:!0}),K.forEach(S),d=H(B),p=D(B,"BUTTON",{class:!0,title:!0,"data-svelte-h":!0}),it(p)!=="svelte-1e6a25n"&&(p.innerHTML=u),B.forEach(S),O=H(q),y=D(q,"SECTION",{class:!0});var $=N(y);te(_.$$.fragment,$),$.forEach(S),q.forEach(S),this.h()},h(){C(l,"class","input w-12 rounded variant-form-material"),C(l,"title","Initiative"),C(l,"type","tel"),C(l,"placeholder","9"),C(o,"title","Click to rename character"),C(c,"class","input-group-shim p-0"),C(f,"class","input-group-shim"),C(f,"type","text"),C(f,"placeholder","0"),C(r,"class","input-group input-group-divider grid-cols-[auto_1fr_auto] w-40 border"),C(r,"title","Use + or - to add or subtract numbers, and then hit enter. Example: 20+5"),C(p,"class","btn-icon rounded variant-soft"),C(p,"title","Remove character"),C(e,"class","card-header h4 justify-between flex"),C(y,"class","p-4 rounded"),C(t,"class","card m-2 w-full max-w-3xl rounded")},m(L,q){W(L,t,q),P(t,e),P(e,l),j(l,n[1]),P(e,a),P(e,o),E.m(o,null),P(e,s),P(e,r),P(r,c),P(r,m),P(r,f),j(f,n[2]),P(e,d),P(e,p),P(t,O),P(t,y),ee(_,y,null),b=!0,h||(T=[w(l,"input",n[8]),w(o,"click",n[10]),w(f,"keydown",n[7]),w(f,"input",n[11]),w(p,"click",n[12])],h=!0)},p(L,[q]){q&2&&j(l,L[1]),k===(k=I(L))&&E?E.p(L,q):(E.d(1),E=k(L),E&&(E.c(),E.m(o,null))),q&4&&f.value!==L[2]&&j(f,L[2]);const B={};!g&&q&8&&(g=!0,B.value=L[3],ct(()=>g=!1)),_.$set(B)},i(L){b||(R(_.$$.fragment,L),b=!0)},o(L){F(_.$$.fragment,L),b=!1},d(L){L&&S(t),E.d(),ne(_),h=!1,x(T)}}}function $e(n,t,e){const l=Zt();let{name:a="Character Name"}=t,{initiative:o=0}=t,{health:s="0"}=t,{conditions:r=[]}=t,c=!1;function v(_){_.code=="Enter"&&e(4,c=!1)}function m(_){if(_.code=="Enter"){let g=0;if(s.includes("+"))s.split("+").forEach(b=>{g+=parseInt(b)});else if(s.includes("-"))s.split("-").forEach(b=>{g==0?g=parseInt(b):g-=parseInt(b)});else return;e(2,s=g.toString())}}function f(){o=this.value,e(1,o)}function d(){a=this.value,e(0,a)}const p=()=>e(4,c=!0);function u(){s=this.value,e(2,s)}const O=()=>l("delete");function y(_){r=_,e(3,r)}return n.$$set=_=>{"name"in _&&e(0,a=_.name),"initiative"in _&&e(1,o=_.initiative),"health"in _&&e(2,s=_.health),"conditions"in _&&e(3,r=_.conditions)},[a,o,s,r,c,l,v,m,f,d,p,u,O,y]}class tn extends pt{constructor(t){super(),gt(this,t,$e,xe,st,{name:0,initiative:1,health:2,conditions:3})}}var ut={local:{},session:{}};function en(n){return n==="local"?localStorage:sessionStorage}function ie(n,t,e){var l,a,o,s,r,c;const v=(l=void 0)!=null?l:JSON,m=(a=void 0)!=null?a:"local",f=(o=void 0)!=null?o:!0,d=(r=(s=void 0)!=null?s:void 0)!=null?r:g=>console.error(`Error when writing value from persisted store "${n}" to ${m}`,g),p=(c=void 0)!=null?c:(g,b)=>console.error(`Error when parsing ${g?'"'+g+'"':"value"} from persisted store "${n}"`,b),u=typeof window<"u"&&typeof document<"u",O=u?en(m):null;function y(g,b){try{O==null||O.setItem(g,v.stringify(b))}catch(h){d(h)}}function _(){const g=O==null?void 0:O.getItem(n);if(g)try{return v.parse(g)}catch(b){p(g,b)}return t}if(!ut[m][n]){const g=_(),b=Ue(g,I=>{if(u&&m=="local"&&f){const k=E=>{if(E.key===n){let V;try{V=E.newValue?v.parse(E.newValue):null}catch(U){p(E.newValue,U);return}I(V)}};return window.addEventListener("storage",k),()=>window.removeEventListener("storage",k)}}),{subscribe:h,set:T}=b;ut[m][n]={set(I){T(I),y(n,I)},update(I){return b.update(k=>{const E=I(k);return y(n,E),E})},subscribe:h}}return ut[m][n]}ie("name1","Blank Name");const et=ie("characters",[["Click to rename",0]]);function Jt(n,t,e){const l=n.slice();return l[10]=t[e],l[11]=t,l[12]=e,l}function Kt(n){let t,e,l,a;function o(v){n[5](v,n[10])}function s(v){n[6](v,n[10])}function r(){return n[7](n[10])}let c={};return n[10][0]!==void 0&&(c.name=n[10][0]),n[10][1]!==void 0&&(c.initiative=n[10][1]),t=new tn({props:c}),lt.push(()=>ft(t,"name",o)),lt.push(()=>ft(t,"initiative",s)),t.$on("delete",r),{c(){$t(t.$$.fragment)},l(v){te(t.$$.fragment,v)},m(v,m){ee(t,v,m),a=!0},p(v,m){n=v;const f={};!e&&m&2&&(e=!0,f.name=n[10][0],ct(()=>e=!1)),!l&&m&2&&(l=!0,f.initiative=n[10][1],ct(()=>l=!1)),t.$set(f)},i(v){a||(R(t.$$.fragment,v),a=!0)},o(v){F(t.$$.fragment,v),a=!1},d(v){ne(t,v)}}}function Qt(n){let t,e,l=G(n[1]),a=[];for(let s=0;s<l.length;s+=1)a[s]=Kt(Jt(n,l,s));const o=s=>F(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<a.length;s+=1)a[s].c();t=qt()},l(s){for(let r=0;r<a.length;r+=1)a[r].l(s);t=qt()},m(s,r){for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(s,r);W(s,t,r),e=!0},p(s,r){if(r&10){l=G(s[1]);let c;for(c=0;c<l.length;c+=1){const v=Jt(s,l,c);a[c]?(a[c].p(v,r),R(a[c],1)):(a[c]=Kt(v),a[c].c(),R(a[c],1),a[c].m(t.parentNode,t))}for(rt(),c=l.length;c<a.length;c+=1)o(c);ot()}},i(s){if(!e){for(let r=0;r<l.length;r+=1)R(a[r]);e=!0}},o(s){a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)F(a[r]);e=!1},d(s){s&&S(t),Xt(a,s)}}}function nn(n){let t,e=n[0],l,a,o,s,r='<span class="material-symbols-outlined">shuffle</span>',c,v,m="Add Character",f,d,p,u,O,y=Qt(n);return{c(){t=M("div"),y.c(),l=A(),a=M("div"),o=M("div"),s=M("button"),s.innerHTML=r,c=A(),v=M("button"),v.textContent=m,f=A(),d=M("div"),this.h()},l(_){t=D(_,"DIV",{class:!0});var g=N(t);y.l(g),g.forEach(S),l=H(_),a=D(_,"DIV",{class:!0});var b=N(a);o=D(b,"DIV",{class:!0});var h=N(o);s=D(h,"BUTTON",{class:!0,title:!0,"data-svelte-h":!0}),it(s)!=="svelte-b005uv"&&(s.innerHTML=r),c=H(h),v=D(h,"BUTTON",{class:!0,"data-svelte-h":!0}),it(v)!=="svelte-1n79vxe"&&(v.textContent=m),f=H(h),d=D(h,"DIV",{class:!0}),N(d).forEach(S),h.forEach(S),b.forEach(S),this.h()},h(){C(t,"class","flex flex-col items-center p-4"),C(s,"class","btn btn-icon variant-filled rounded"),C(s,"title","Sort by initiative"),C(v,"class","btn variant-ghost"),C(d,"class","w-4"),C(o,"class","mx-4 px-4 flex flex-row justify-between w-full max-w-3xl"),C(a,"class","flex flex-col items-center")},m(_,g){W(_,t,g),y.m(t,null),W(_,l,g),W(_,a,g),P(a,o),P(o,s),P(o,c),P(o,v),P(o,f),P(o,d),p=!0,u||(O=[w(s,"click",n[4]),w(v,"click",n[2])],u=!0)},p(_,[g]){g&1&&st(e,e=_[0])?(rt(),F(y,1,1,nt),ot(),y=Qt(_),y.c(),R(y,1),y.m(t,null)):y.p(_,g)},i(_){p||(R(y),p=!0)},o(_){F(y),p=!1},d(_){_&&(S(t),S(l),S(a)),y.d(_),u=!1,x(O)}}}function ln(n,t,e){let l;Yt(n,et,p=>e(1,l=p));const a=Ne();let o=!0;const s={type:"prompt",title:"Add Character",value:"",valueAttr:{type:"text",minlength:3,maxlength:100,required:!0},response:p=>Bt(et,l=[...l,[p,0]],l)};function r(){a.trigger(s)}function c(p){let u=[];l.forEach(O=>{O[0]!==p&&(u=[...u,O])}),Bt(et,l=u,l)}function v(){l.sort((p,u)=>u[1]-p[1]),e(0,o=!o)}function m(p,u){n.$$.not_equal(u[0],p)&&(u[0]=p,et.set(l))}function f(p,u){n.$$.not_equal(u[1],p)&&(u[1]=p,et.set(l))}return[o,l,r,c,v,m,f,p=>c(p[0])]}class un extends pt{constructor(t){super(),gt(this,t,ln,nn,st,{})}}export{un as component};
