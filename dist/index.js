"use strict";var s=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var o=s(function(k,f){
var g=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-assert-is-negative-zero/dist');function x(n,r,t){var u,i,e,a;if(n<=0)return NaN;if(n===1||t===0)return r[0];for(t<0?i=(1-n)*t:i=0,u=r[i],a=1;a<n;a++){if(i+=t,e=r[i],g(e))return e;(e<u||e===u&&l(e))&&(u=e)}return u}f.exports=x
});var c=s(function(w,q){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-assert-is-negative-zero/dist');function O(n,r,t,u){var i,e,a,v;if(n<=0)return NaN;if(n===1||t===0)return r[u];for(e=u,i=r[e],v=1;v<n;v++){if(e+=t,a=r[e],Z(a))return a;(a<i||a===i&&N(a))&&(i=a)}return i}q.exports=O
});var y=s(function(z,p){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=o(),b=c();R(m,"ndarray",b);p.exports=m
});var h=y();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
