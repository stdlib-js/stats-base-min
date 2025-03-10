"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=c(function(C,f){
var x=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-assert-is-negative-zero/dist');function d(e,r,u,s){var n,t,v,a,i,o;if(n=r.data,t=r.accessors[0],e===1||u===0)return t(n,s);for(a=s,v=t(n,a),o=1;o<e;o++){if(a+=u,i=t(n,a),x(i))return i;(i<v||i===v&&b(i))&&(v=i)}return v}f.exports=d
});var q=c(function(D,y){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),j=require('@stdlib/math-base-assert-is-negative-zero/dist'),k=require('@stdlib/array-base-arraylike2object/dist'),O=m();function P(e,r,u,s){var n,t,v,a,i;if(e<=0)return NaN;if(v=k(r),v.accessorProtocol)return O(e,v,u,s);if(e===1||u===0)return r[s];for(t=s,n=r[t],i=1;i<e;i++){if(t+=u,a=r[t],Z(a))return a;(a<n||a===n&&j(a))&&(n=a)}return n}y.exports=P
});var g=c(function(E,p){
var R=require('@stdlib/strided-base-stride2offset/dist'),h=q();function w(e,r,u){return h(e,r,u,R(e,u))}p.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=g(),A=q();z(l,"ndarray",A);module.exports=l;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
