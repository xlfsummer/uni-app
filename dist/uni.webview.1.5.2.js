!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self).uni=n()}(this,(function(){"use strict";try{var e={};Object.defineProperty(e,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,e)}catch(e){}var n=Object.prototype.hasOwnProperty;function t(e,t){return n.call(e,t)}var i=[],a=function(e,n){var t={options:{timestamp:+new Date},name:e,arg:n};if(window.__dcloud_weex_postMessage||window.__dcloud_weex_){if("postMessage"===e){var a={data:[n]};return window.__dcloud_weex_postMessage?window.__dcloud_weex_postMessage(a):window.__dcloud_weex_.postMessage(JSON.stringify(a))}var o={type:"WEB_INVOKE_APPSERVICE",args:{data:t,webviewIds:i}};window.__dcloud_weex_postMessage?window.__dcloud_weex_postMessageToService(o):window.__dcloud_weex_.postMessageToService(JSON.stringify(o))}if(!window.plus)return window.parent.postMessage({type:"WEB_INVOKE_APPSERVICE",data:t,pageId:""},"*");if(0===i.length){var r=plus.webview.currentWebview();if(!r)throw new Error("plus.webview.currentWebview() is undefined");var d=r.parent(),s="";s=d?d.id:r.id,i.push(s)}if(plus.webview.getWebviewById("__uniapp__service"))plus.webview.postMessageToUniNView({type:"WEB_INVOKE_APPSERVICE",args:{data:t,webviewIds:i}},"__uniapp__service");else{var w=JSON.stringify(t);plus.webview.getLaunchWebview().evalJS('UniPlusBridge.subscribeHandler("'.concat("WEB_INVOKE_APPSERVICE",'",').concat(w,",").concat(JSON.stringify(i),");"))}},o={navigateTo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.url;a("navigateTo",{url:encodeURI(n)})},navigateBack:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.delta;a("navigateBack",{delta:parseInt(n)||1})},switchTab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.url;a("switchTab",{url:encodeURI(n)})},reLaunch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.url;a("reLaunch",{url:encodeURI(n)})},redirectTo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.url;a("redirectTo",{url:encodeURI(n)})},getEnv:function(e){window.plus?e({plus:!0}):e({h5:!0})},postMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a("postMessage",e.data||{})}},r=/uni-app/i.test(navigator.userAgent),d=/complete|loaded|interactive/;var s=window.my&&navigator.userAgent.indexOf("AlipayClient")>-1;var w=window.swan&&window.swan.webView&&/swan/i.test(navigator.userAgent);var u=window.qq&&window.qq.miniProgram&&/QQ/i.test(navigator.userAgent)&&/miniProgram/i.test(navigator.userAgent);var c=window.tt&&window.tt.miniProgram&&/toutiaomicroapp/i.test(navigator.userAgent);var g=window.wx&&window.wx.miniProgram&&/micromessenger/i.test(navigator.userAgent)&&/miniProgram/i.test(navigator.userAgent);var v=window.qa&&/quickapp/i.test(navigator.userAgent);for(var p,l=function(){window.UniAppJSBridge=!0,document.dispatchEvent(new CustomEvent("UniAppJSBridgeReady",{bubbles:!0,cancelable:!0}))},_=[function(e){if(r)return window.__dcloud_weex_postMessage||window.__dcloud_weex_?document.addEventListener("DOMContentLoaded",e):window.plus&&d.test(document.readyState)?setTimeout(e,0):document.addEventListener("plusready",e),o},function(e){if(g)return window.WeixinJSBridge&&window.WeixinJSBridge.invoke?setTimeout(e,0):document.addEventListener("WeixinJSBridgeReady",e),window.wx.miniProgram},function(e){if(u)return window.QQJSBridge&&window.QQJSBridge.invoke?setTimeout(e,0):document.addEventListener("QQJSBridgeReady",e),window.qq.miniProgram},function(e){if(s){document.addEventListener("DOMContentLoaded",e);var n=window.my;return{navigateTo:n.navigateTo,navigateBack:n.navigateBack,switchTab:n.switchTab,reLaunch:n.reLaunch,redirectTo:n.redirectTo,postMessage:n.postMessage,getEnv:n.getEnv}}},function(e){if(w)return document.addEventListener("DOMContentLoaded",e),window.swan.webView},function(e){if(c)return document.addEventListener("DOMContentLoaded",e),window.tt.miniProgram},function(e){if(v){window.QaJSBridge&&window.QaJSBridge.invoke?setTimeout(e,0):document.addEventListener("QaJSBridgeReady",e);var n=window.qa;return{navigateTo:n.navigateTo,navigateBack:n.navigateBack,switchTab:n.switchTab,reLaunch:n.reLaunch,redirectTo:n.redirectTo,postMessage:n.postMessage,getEnv:n.getEnv}}},function(e){return document.addEventListener("DOMContentLoaded",e),o}],f=0;f<_.length&&!(p=_[f](l));f++);p||(p={});var m="undefined"!=typeof uni?uni:{};if(!m.navigateTo)for(var E in p)t(p,E)&&(m[E]=p[E]);return m.webView=p,m}));
