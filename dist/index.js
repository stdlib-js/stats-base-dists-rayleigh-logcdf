"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=t(function(D,o){
var y=require('@stdlib/math-base-special-expm1/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-log1p/dist'),d=require('@stdlib/math-base-special-exp/dist'),v=require('@stdlib/math-base-special-pow/dist'),L=require('@stdlib/math-base-special-ln/dist'),w=require('@stdlib/constants-float64-ln-half/dist'),q=require('@stdlib/constants-float64-ninf/dist');function x(e,r){var a,u;return n(e)||n(r)||r<0?NaN:r===0?e<0?q:0:e<0?q:(a=v(r,2),u=-v(e,2)/(2*a),u<w?F(-d(u)):L(-y(u)))}o.exports=x
});var s=t(function(E,N){
var A=require('@stdlib/utils-constant-function/dist'),H=require('@stdlib/stats-base-dists-degenerate-logcdf/dist').factory,I=require('@stdlib/math-base-special-expm1/dist'),c=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-special-log1p/dist'),R=require('@stdlib/math-base-special-exp/dist'),p=require('@stdlib/math-base-special-pow/dist'),b=require('@stdlib/math-base-special-ln/dist'),h=require('@stdlib/constants-float64-ln-half/dist'),j=require('@stdlib/constants-float64-ninf/dist');function k(e){var r;if(c(e)||e<0)return A(NaN);if(e===0)return H(0);return r=p(e,2),a;function a(u){var i;return c(u)?NaN:u<0?j:(i=-p(u,2)/(2*r),i<h?O(-R(i)):b(-I(i)))}}N.exports=k
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=f(),B=s();z(l,"factory",B);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
