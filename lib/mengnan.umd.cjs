(function(t,e){typeof exports=="object"&&typeof module<"u"?module.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self,t.mengnan=e())})(this,function(){"use strict";function t(o){try{if(!o)throw new Error("origin:getDomPosition method, param is not null")}catch{}const i=document.body,{width:n,height:d,bottom:h,left:f}=o.getBoundingClientRect();return{windowwidth:i.clientWidth,windowHeight:i.clientHeight,width:n,height:d,topToViewTop:h-d,bottomToViewBottom:i.clientHeight-h,rightToViewRight:i.clientWidth-(f+n),leftToViewLeft:f}}return{getDomPosition:t}});
