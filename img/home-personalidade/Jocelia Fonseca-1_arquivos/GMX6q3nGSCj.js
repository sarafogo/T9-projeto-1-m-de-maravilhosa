if (self.CavalryLogger) { CavalryLogger.start_js(["xnnRt"]); }

__d("CtaImpressionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:CtaImpressionsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:CtaImpressionsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:CtaImpressionsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setCtaType=function(a){this.$1.cta_type=a;return this};c.setOriginalURI=function(a){this.$1.original_uri=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={cta_type:!0,original_uri:!0,time:!0,weight:!0};e.exports=a}),null);
__d("ExpandingCtaModern",["Animation","CtaImpressionsTypedLogger","Style","setInterval","setTimeout","clearInterval"],(function(a,b,c,d,e,f){var g=150,h=750;a={show:function(a,c,d,e,f,i,j,k){if(document.documentElement!==null){var l=function(){!p&&window.pageYOffset>h&&(m(),b("clearInterval")(q))},m=function(){if(!p){b("Style").set(c,"display","none");b("Style").set(d,"display","block");n(a,"height",o+"px");n(a,"background","rgba(0,0,0,0.5)");p=!0;var e=new(b("CtaImpressionsTypedLogger"))();e.setCtaType("www_pages_cta");e.setOriginalURI(window.location.href);e.logVital()}},n=function(a,c,d){new(b("Animation"))(a).to(c,d).duration(g).ease(b("Animation").ease.both).go()},o=document.documentElement.clientHeight,p=!1;b("Style").set(document.body,"margin-bottom",j+"px");k&&b("Style").set(c,"display","none");var q=b("setInterval")(l,1e3);f&&b("setTimeout")(m,3e3);window.onload=function(){!f&&window.pageYOffset<=h&&n(a,"height",j+"px")};e.addEventListener("click",function(){!i?(b("Style").set(d,"display","none"),b("Style").set(a,"height","70%"),k||b("Style").set(c,"display","block"),b("Style").set(a,"background","none"),n(a,"height",j+"px")):n(a,"height","0px"),b("clearInterval")(q)})}}};e.exports=a}),null);
__d("NoscriptOverride",["Cookie","goURI"],(function(a,b,c,d,e,f){a={redirectToJSPage:function(a){b("Cookie").clear("noscript"),b("goURI")(a)}};e.exports=a}),null);
__d("SketchBase",["Promise","regeneratorRuntime","Alea","Base64","md5","performanceNow","setTimeout"],(function(a,b,c,d,e,f){"use strict";var g,h=10,i=16,j=function(){return new(b("Promise"))(function(a){b("setTimeout")(a)})},k=function(){function a(a,c,d){this.seed=a,this.rounds=c,this.rng=b("Alea")(a),this.ctx=d.getContext("2d"),this.width=d.width,this.height=d.height}var c=a.prototype;c.solveAllRoundsAsync=function(a){var c,d;return b("regeneratorRuntime").async(function(e){while(1)switch(e.prev=e.next){case 0:c=Date.now()+h,d=0;case 2:if(!(d<this.rounds)){e.next=11;break}a(d);if(!(Date.now()>c)){e.next=8;break}e.next=7;return b("regeneratorRuntime").awrap(j());case 7:c=Date.now()+h;case 8:d++;e.next=2;break;case 11:case"end":return e.stop()}},null,this)};c.solveAsync=function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(this.solveAllRoundsAsync(this.pickPrimitiveAndDraw.bind(this)));case 2:case"end":return a.stop()}},null,this)};c.solveOnePrimitiveAsync=function(a){return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:c.next=2;return b("regeneratorRuntime").awrap(this.solveAllRoundsAsync(this.getDrawFunction(a)));case 2:case"end":return c.stop()}},null,this)};c.getDrawFunction=function(a){switch(a){case"text":return this.drawText.bind(this);case"bezier":return this.drawBezier.bind(this);case"circle":return this.drawCircle.bind(this);case"emoji":return this.drawEmoji.bind(this);default:return function(){return void 0}}};c.pickPrimitive=function(a){var b=["emoji","circle","bezier","text"];return b[a%b.length]};c.pickPrimitiveAndDraw=function(a){a=this.getDrawFunction(this.pickPrimitive(a));a()};c.drawText=function(){var a=Math.floor(this.rng()*50+100);this.ctx.font=a+"px Arial";var b=Math.floor(this.rng()*100).toString(),c=Math.floor(this.rng()*this.width/2);a=this.rngRange(a*2,this.height-a);this.ctx.fillStyle=this.makeRadialGradient();this.applyShadow();this.ctx.fillText(b,c,a)};c.drawEmoji=function(){var a=Math.floor(this.rng()*50+100);this.ctx.font=a+"px Arial";var b="\ud83d\ude03",c=Math.floor(this.rng()*this.width/2);a=this.rngRange(a*2,this.height-a);this.ctx.fillStyle=this.makeRadialGradient();this.applyShadow();this.ctx.fillText(b,c,a)};c.drawBezier=function(){this.ctx.beginPath();var a=this.rng()*this.width,b=this.rng()*this.height,c=this.rng()*this.width,d=this.rng()*this.height,e=this.rng()*this.width,f=this.rng()*this.height;this.ctx.moveTo(a,b);this.ctx.bezierCurveTo(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width,this.rng()*this.height,c,d);this.ctx.bezierCurveTo(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width,this.rng()*this.height,e,f);this.ctx.bezierCurveTo(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width,this.rng()*this.height,a,b);this.ctx.fillStyle=this.makeRadialGradient();this.applyShadow();this.ctx.fill()};c.drawCircle=function(){this.ctx.beginPath(),this.ctx.arc(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width/5,0,2*Math.PI),this.ctx.fillStyle=this.makeRadialGradient(),this.applyShadow(),this.ctx.fill(),this.ctx.lineWidth=2,this.ctx.strokeStyle=this.makeRadialGradient(),this.ctx.stroke()};c.makeRadialGradient=function(){var a=this.ctx.createRadialGradient(this.rng()*this.width,this.rng()*this.height,0,this.rng()*this.width,this.rng()*this.height,this.width*2);a.addColorStop(0,this.makeColor());a.addColorStop(.5,this.makeColor());a.addColorStop(1,this.makeColor());return a};c.makeColor=function(){var a=Math.floor(this.rng()*255),b=Math.floor(this.rng()*255),c=Math.floor(this.rng()*255);return"rgb("+a+","+b+","+c+")"};c.applyShadow=function(){this.ctx.shadowColor=this.makeColor(),this.ctx.shadowBlur=this.rng()*50,this.ctx.shadowOffsetX=this.rng()*15,this.ctx.shadowOffsetY=this.rng()*15};c.rngRange=function(a,b){var c=Math.min(a,b);a=Math.max(a,b);return this.rng()*(a-c)+c};return a}(),l={createCanvasAndSolveAllPrimitives:function(a,c,d){var e,f,g,h;return b("regeneratorRuntime").async(function(i){while(1)switch(i.prev=i.next){case 0:e=document.createElement("canvas");e.width=200;e.height=200;e.style.display="none";f={hash:"",hash_bezier:"",hash_circle:"",hash_emoji:"",hash_text:"",hash2:"",rounds:d,seed:a,seed2:c,time_taken:0};document.body&&document.body.appendChild(e);i.next=8;return b("regeneratorRuntime").awrap(l.solveAsync(e,a,d));case 8:g=i.sent;i.next=11;return b("regeneratorRuntime").awrap(l.solveAsync(e,c,d));case 11:h=i.sent;f.hash=g.hash;f.hash2=h.hash;f.time_taken=g.time_taken+h.time_taken;i.next=17;return b("regeneratorRuntime").awrap(l.solvePrimitive(e,a,d,"text"));case 17:f.hash_text=i.sent;i.next=20;return b("regeneratorRuntime").awrap(l.solvePrimitive(e,a,d,"bezier"));case 20:f.hash_bezier=i.sent;i.next=23;return b("regeneratorRuntime").awrap(l.solvePrimitive(e,a,d,"circle"));case 23:f.hash_circle=i.sent;i.next=26;return b("regeneratorRuntime").awrap(l.solvePrimitive(e,a,d,"emoji"));case 26:f.hash_emoji=i.sent;document.body&&document.body.removeChild(e);return i.abrupt("return",f);case 29:case"end":return i.stop()}},null,this)},encode:function(a){return b("Base64").encode(JSON.stringify(a))},getHash:function(a){return new(b("Promise"))(function(c){b("setTimeout")(function(){c(b("md5")(a.toDataURL()))},i)})},solveAsync:function(a,c,d){var e,f,h,i,j,m;return b("regeneratorRuntime").async(function(n){while(1)switch(n.prev=n.next){case 0:e=new k(c,d,a);e.ctx.clearRect(0,0,e.width,e.height);f=(g||(g=b("performanceNow")))();n.next=5;return b("regeneratorRuntime").awrap(e.solveAsync());case 5:h=(g||(g=b("performanceNow")))();i=parseInt((h-f)*1e3,10);n.next=9;return b("regeneratorRuntime").awrap(l.getHash(a));case 9:j=n.sent;m={hash:j,time_taken:i};return n.abrupt("return",m);case 12:case"end":return n.stop()}},null,this)},solvePrimitive:function(a,c,d,e){var f,g;return b("regeneratorRuntime").async(function(h){while(1)switch(h.prev=h.next){case 0:f=new k(c,d,a);f.ctx.clearRect(0,0,f.width,f.height);h.next=4;return b("regeneratorRuntime").awrap(f.solveOnePrimitiveAsync(e));case 4:h.next=6;return b("regeneratorRuntime").awrap(l.getHash(a));case 6:g=h.sent;return h.abrupt("return",g);case 8:case"end":return h.stop()}},null,this)}};e.exports=l}),null);
__d("XSISketchResultsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/sketch_results/",{})}),null);
__d("SketchBlue",["regeneratorRuntime","AsyncRequest","Form","SketchBase","XSISketchResultsController","emptyFunction","nullthrows"],(function(a,b,c,d,e,f){var g={solveIntern:function(a,c,d,e){var f;return b("regeneratorRuntime").async(function(g){while(1)switch(g.prev=g.next){case 0:g.next=2;return b("regeneratorRuntime").awrap(b("SketchBase").solveAsync(a,d,e));case 2:f=g.sent,c.textContent=f.hash;case 4:case"end":return g.stop()}},null,this)},solveAndCallAsyncController:function(a,c,d){var e,f,h;return b("regeneratorRuntime").async(function(i){while(1)switch(i.prev=i.next){case 0:i.next=2;return b("regeneratorRuntime").awrap(g.createCanvasAndSolve(a,c,d));case 2:e=i.sent,f=b("SketchBase").encode(e),h=b("XSISketchResultsController").getURIBuilder().getURI(),new(b("AsyncRequest"))().setURI(h).setMethod("POST").setData({skstamp:f}).setTimeoutHandler(1e4,b("emptyFunction")).setErrorHandler(b("emptyFunction")).send();case 6:case"end":return i.stop()}},null,this)},solveAndUpdateForm:function(a,c,d,e){var f,h;return b("regeneratorRuntime").async(function(i){while(1)switch(i.prev=i.next){case 0:i.next=2;return b("regeneratorRuntime").awrap(g.solveAndEncode(a,c,d,e=="login_form"?"login":e=="reg"?"registration":""));case 2:f=i.sent,h=document.getElementById(e),b("Form").createHiddenInputs({skstamp:f},h);case 5:case"end":return i.stop()}},null,this)},solveAndEncode:function(a,c,d,e){var f,h;return b("regeneratorRuntime").async(function(i){while(1)switch(i.prev=i.next){case 0:i.next=2;return b("regeneratorRuntime").awrap(g.createCanvasAndSolve(a,c,d));case 2:f=i.sent;h=babelHelpers["extends"]({},f,{surface:e});return i.abrupt("return",b("SketchBase").encode(h));case 5:case"end":return i.stop()}},null,this)},solveAllPrimitivesAndCallAsyncController:function(a,c,d){var e,f,g;return b("regeneratorRuntime").async(function(h){while(1)switch(h.prev=h.next){case 0:h.next=2;return b("regeneratorRuntime").awrap(b("SketchBase").createCanvasAndSolveAllPrimitives(a,c,d));case 2:e=h.sent,f=b("SketchBase").encode(e),g=b("XSISketchResultsController").getURIBuilder().getURI(),new(b("AsyncRequest"))().setURI(g).setMethod("POST").setData({skstamp:f}).setTimeoutHandler(1e4,b("emptyFunction")).setErrorHandler(b("emptyFunction")).send();case 6:case"end":return h.stop()}},null,this)},createCanvasAndSolve:function(a,c,d){var e,f,g,h;return b("regeneratorRuntime").async(function(i){while(1)switch(i.prev=i.next){case 0:e=document.createElement("canvas");e.width=200;e.height=200;e.style.display="none";b("nullthrows")(document.body).appendChild(e);i.next=7;return b("regeneratorRuntime").awrap(b("SketchBase").solveAsync(e,a,d));case 7:f=i.sent;i.next=10;return b("regeneratorRuntime").awrap(b("SketchBase").solveAsync(e,c,d));case 10:g=i.sent;h={hash:f.hash,hash2:g.hash,rounds:d,seed:a,seed2:c,time_taken:f.time_taken+g.time_taken};b("nullthrows")(document.body).removeChild(e);return i.abrupt("return",h);case 14:case"end":return i.stop()}},null,this)}};e.exports=g}),null);
__d("StickyPlaceholderInput",["CSS","DOM","Event","Input","Parent","emptyFunction","getElementText"],(function(a,b,c,d,e,f){function g(a){return b("Parent").byClass(a,"uiStickyPlaceholderInput")}function h(a){return b("DOM").scry(a,".placeholder")[0]}function i(a){a=a||window.event;var c=a.target||a.srcElement;if(b("DOM").isNodeOfType(c,["input","textarea"])){var d=g(c);d&&setTimeout(function(){b("CSS").conditionClass(d,"uiStickyPlaceholderEmptyInput",!c.value.length)},0)}}var j={init:function(){j.init=b("emptyFunction"),b("Event").listen(document.documentElement,{keydown:i,keyup:i,paste:i,focusout:i})},registerInput:function(a){j.init();var c=a.getAttribute("placeholder")||"";if(c.length)if(document.activeElement===a)var d=b("Event").listen(a,"blur",function(){j.manipulateInput(a,c),d.remove()});else j.manipulateInput(a,c)},manipulateInput:function(a,c){var d=b("DOM").create("div",{className:"placeholder","aria-hidden":"true"},c),e=b("DOM").create("div",{className:"uiStickyPlaceholderInput"},d);b("DOM").isNodeOfType(a,"textarea")&&b("CSS").addClass(e,"uiStickyPlaceholderTextarea");b("Event").listen(d,"click",function(){a.focus()});a.value===c&&(a.value="");a.setAttribute("placeholder","");b("DOM").replace(a,e);b("DOM").appendContent(e,a);b("CSS").conditionClass(e,"uiStickyPlaceholderEmptyInput",!a.value.length)},setPlaceholderText:function(a,c){var d=g(a);if(!d)b("Input").setPlaceholder(a,c);else{a=h(d);a&&b("DOM").setContent(a,c)}},getPlaceholderText:function(a){a=g(a);a=h(a);return a&&b("getElementText")(a)},update:function(a){var c=g(a);c&&b("CSS").conditionClass(c,"uiStickyPlaceholderEmptyInput",!a.value.length)},getVisibleText:function(a){var c=g(a);if(b("CSS").hasClass(c,"uiStickyPlaceholderEmptyInput")){c=h(c);return c&&b("getElementText")(c)}else return a.value}};e.exports=j}),null);
__d("SimpleFBAuthenticatedXHRRequest",["invariant","CurrentUser","DTSG","DTSGUtils","ServerJSDefine","SprinkleConfig","StaticSiteData","XHRRequest","isFacebookURI"],(function(a,b,c,d,e,f,g){var h=1;a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){var e;c=a.call(this,c)||this;e=(e={},e[b("StaticSiteData").jsmod_key]=b("ServerJSDefine").getLoadedModuleHash(),e.__req=(h++).toString(36),e.__ajax__=1,e.__a=1,e.__user=b("CurrentUser").getID(),e);a.prototype.setData.call(babelHelpers.assertThisInitialized(c),babelHelpers["extends"]({},d,e));return c}var d=c.prototype;d.send=function(){var c=this;if(!b("isFacebookURI")(this.getURI()))return a.prototype.send.call(this);if(b("DTSG").getCachedToken){var d=b("DTSG").getCachedToken();if(d)return this.sendOnDTSGToken(d);else{b("DTSG").getToken().done(function(a){return c.sendOnDTSGToken(a)});return this}}else this.sendOnDTSGToken(b("DTSG").getToken())};d.sendOnDTSGToken=function(c){if(c){a.prototype.setData.call(this,babelHelpers["extends"]({},this.getData(),{fb_dtsg:c}));if(b("SprinkleConfig").param_name){var d;a.prototype.setData.call(this,babelHelpers["extends"]({},this.getData(),(d={},d[b("SprinkleConfig").param_name]=b("DTSGUtils").getNumericValue(c),d)))}}return a.prototype.send.call(this)};d.setData=function(a){g(0,5518)};c.parseResponse=function(a){return JSON.parse(a.substr(9))};c.getPayload=function(a){a=c.parseResponse(a).payload;return a.payload?a.payload:a};return c}(b("XHRRequest"));e.exports=a}),null);
__d("XFantailLogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/fantail/",{service:{type:"String",required:!0}})}),null);
__d("FantailLogQueue",["ChannelClientID","CircularBuffer","PHPQuerySerializer","SimpleFBAuthenticatedXHRRequest","XFantailLogController","destroyOnUnload","setIntervalAcrossTransitions","sprintf"],(function(a,b,c,d,e,f){var g,h={DEBUG:"debug",INFO:"info",WARN:"warn",ERROR:"error"};a=function(){"use strict";function a(a){this.$2=a,this.$3=new(b("CircularBuffer"))(200),b("setIntervalAcrossTransitions")(this.$4.bind(this),30*1e3),b("destroyOnUnload")(this.$4.bind(this))}a.get=function(b){a.$1=a.$1||{};a.$1[b]=a.$1[b]||new a(b);return a.$1[b]};var c=a.prototype;c.debug=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[h.DEBUG,a].concat(c))};c.info=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[h.INFO,a].concat(c))};c.warn=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[h.WARN,a].concat(c))};c.error=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[h.ERROR,a].concat(c))};c.$5=function(a,c){for(var d=arguments.length,e=new Array(d>2?d-2:0),f=2;f<d;f++)e[f-2]=arguments[f];var g=b("sprintf").apply(void 0,[c].concat(e));this.$3.write({log_time:Date.now(),log:g,severity:a,device_id:b("ChannelClientID").getID()})};c.$4=function(){var a=this.$3.read();if(a.length>0){var c={log_time:[],log:[],severity:[],device_id:[]};a.forEach(function(a){c.log_time.push(a.log_time),c.log.push(a.log),c.severity.push(a.severity),c.device_id.push(a.device_id)});this.$3.clear();a=b("XFantailLogController").getURIBuilder().setString("service",this.$2).getURI();new(b("SimpleFBAuthenticatedXHRRequest"))(a,c).setMethod("POST").setDataSerializer((g||(g=b("PHPQuerySerializer"))).serialize).setRequestHeader("Content-Type","application/x-www-form-urlencoded").send()}};return a}();e.exports=a}),null);