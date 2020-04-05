if (self.CavalryLogger) { CavalryLogger.start_js(["KFPuQ"]); }

__d("XCometHomeControllerRouteBuilder",["cometRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/",Object.freeze({}),void 0);e.exports=a}),null);
__d("XCometVideoHomeLiveControllerRouteBuilder",["cometRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/watch/live/",Object.freeze({}),void 0);e.exports=a}),null);
__d("CometSearchTypeaheadBaseLoggingProvider",["requireCond","cr:1288453","gkx","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g=function(){return Math.random().toString()};a=function(){function a(a){var b=a.context;a=a.log;this.$4=null;this.$5=null;this.$6=!1;this.$3=a;this.$1=b}var c=a.prototype;c.addEvent=function(a){var c=a.action,d=a.entries,e=a.entry;a=a.queryString;var f=String(Date.now());if(!this.$6||this.$4==null){b("recoverableViolation")("Cannot log a new event into inactive session on "+this.$1+" surface.","search");return null}this.$2&&this.$2.push({action:c,entries:d?[].concat(d):null,entry:e,queryString:a,sequenceID:f});return{sequenceID:f,sessionID:this.$4}};c.isSessionActive=function(){return this.$6};c.getSessionID=function(){this.$4==null&&b("recoverableViolation")("Logging sessionID requested from "+this.$1+" surface does not exist.","search");return this.$4};c.endSession=function(){var a=this.$5,c=this.$4,d=this.$2;if(a==null||c==null||d==null)return;d=h(d);d={endTimeMs:Date.now(),events:d,sessionID:c,startTimeMs:a};this.$3(d);b("gkx")("1288454")&&(b("cr:1288453")&&b("cr:1288453")(d));this.$6=!1;this.$2=null;this.$5=null};c.startSession=function(a){this.$6=!0;this.$2=[];a=(a=a)!=null?a:g();this.$4=a;var c=Date.now();this.$5=c;if(b("gkx")("1288454")){a={events:[],sessionID:a,startTimeMs:c};b("cr:1288453")&&b("cr:1288453")(a)}};return a}();function h(a){if(a.length<2){b("recoverableViolation")("Logging session can't have less than 2 events","search");return[]}var c=a[0],d=a[1],e=a.slice(2),f=[];if(c.action==="typeahead_appeared"&&d.action==="keystroke"){c=babelHelpers["extends"]({},c,{entries:(c=c.entries)!=null?c:d.entries});(d=f).push.apply(d,[c].concat(e))}else f=[].concat(a);d=[];while(f.length>0){c=f.shift();e=f;a=e[0];d.push(babelHelpers["extends"]({},c,{entries:(e=a==null?void 0:a.entries)!=null?e:c.entries}))}return d}e.exports=a}),null);
__d("CometTypeaheadDataEntryWithMetaData",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){var b=a.key,c=a.label,d=a.metaData;a=a.rawData;this.$1=b;this.$2=c;this.$4=a;this.$3=d}var b=a.prototype;b.getKey=function(){return this.$1};b.getLabel=function(){return this.$2};b.getMetaData=function(){return this.$3};b.getRawData=function(){return this.$4};return a}();e.exports=a}),null);
__d("SearchTypeaheadLoggingSessionFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=b("FalcoLoggerInternal").create("search_typeahead_logging_session");e.exports=a}),null);
__d("cometSearchTypeaheadFalcoLoggingSessionLogBuilder",["SearchTypeaheadLoggingSessionFalcoEvent"],(function(a,b,c,d,e,f){"use strict";var g=12;function a(a,c){return function(d){var e=h(a,c,d);b("SearchTypeaheadLoggingSessionFalcoEvent").logImmediately(function(){return{session:e}})}}function h(a,b,c){var d=c.endTimeMs,e=c.events,f=c.sessionID;c=c.startTimeMs;var h=e.filter(function(a,b){return b<Math.floor(g/2)||b>=e.length-Math.ceil(g/2)});return{context:a,end_time_ms:d,events:h.map(i),scoped_entity_id:b,session_id:f,start_time_ms:c}}function i(a){var b=a.action,c=a.entries,d=a.entry,e=a.queryString;a=a.sequenceID;return{action_type:b,entries:c!=null?c.map(j):[],entry:d!=null&&c!=null?j(d,c.indexOf(d)):null,query:(b=e)!=null?b:"",sequence_id:a}}function j(a,b){var c,d=a.getMetaData();return{entity_id:d==null?void 0:(c=d.logging)==null?void 0:c.entityID,entity_type:d==null?void 0:(c=d.logging)==null?void 0:c.entityType,id:a.getKey(),index_in_group:b,label:a.getLabel(),logging_id:d==null?void 0:(c=d.logging)==null?void 0:c.loggingID,sequence_id:d==null?void 0:(b=d.logging)==null?void 0:b.sequenceID,source:k(a)}}function k(a){a=a.getMetaData();if(a==null)return"backend";a=a.markers;if(a.has("see_all"))return"escape";if(a.has("echo"))return"echo";if(a.has("recent"))return"recent_searches";return a.has("bootstrap")?"bootstrap":"backend"}e.exports=a}),null);
__d("VideoPlayerLoggingSuboriginContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(null);e.exports=c}),null);
__d("VideoHomeTypedLoggerLite",["Banzai","generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:VideoHomeLoggerConfig")}),null);
__d("mayHaveConnectedCharacters",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.match(/[\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u1700-\u171F\u1720-\u173F\u1740-\u175F\u1760-\u177F\u1780-\u17FF\u1900-\u194F\u1950-\u197F\u1980-\u19DF\u19E0-\u19FF\u1A00-\u1A1F\u1A20-\u1AAF\u1B00-\u1B7F\u1B80-\u1BBF\u1BC0-\u1BFF\u1C00-\u1C4F\u1CC0-\u1CCF\uA800-\uA82F\uA840-\uA87F\uA880-\uA8DF\uA8E0-\uA8FF\uA930-\uA95F\uA980-\uA9DF\uA9E0-\uA9FF\uAA00-\uAA5F\uAA60-\uAA7F\uAA80-\uAADF\uAAE0-\uAAFF\uABC0-\uABFF\u0600-\u06FF\u0750–\u077F\u08A0–\u08FF\uFB50–\uFDFF\uFE70–\uFEFF\u4e00-\u9faf\u0D80-\u0DFF\u0E80-\u0EFF]/)!=null}e.exports=a}),null);
__d("XVideoHomeFeedController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/watch/",{comment_id:{type:"FBID"},cursor:{type:"String"},ref:{type:"String"},t:{type:"Int"},v:{type:"String"},external_log_id:{type:"String"},q:{type:"String"},__ft__:{type:"String"},page_id:{type:"FBID"}})}),null);
__d("XVideoHomeShowController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/watch/{?section_id}/",{from:{type:"String"},section_id:{type:"String"},query:{type:"String"},video_id:{type:"String"},upstream_player_source:{type:"Enum",enumType:1},start_timestamp_s:{type:"Int"},autoplay_expanded:{type:"Bool",defaultValue:!1}})}),null);