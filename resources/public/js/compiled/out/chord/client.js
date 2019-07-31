// Compiled by ClojureScript 1.10.439 {}
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chord.channels');
goog.require('chord.format');
chord.client.close_event__GT_maybe_error = (function chord$client$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),ev.reason,new cljs.core.Keyword(null,"code","code",1586293142),ev.code], null);
}
});
chord.client.create_ws = (function chord$client$create_ws(url,opts){
if(cljs.core.truth_((function (){var and__4036__auto__ = (typeof require !== 'undefined');
if(and__4036__auto__){
try{return require("ws");
}catch (e30245){var e = e30245;
return false;
}} else {
return and__4036__auto__;
}
})())){
var ws = require("ws");
if(cljs.core.truth_(opts)){
return (new ws(url,cljs.core.clj__GT_js.call(null,opts)));
} else {
return (new ws(url));
}
} else {
return (new WebSocket(url));

}
});
/**
 * Creates websockets connection and returns a 2-sided channel when the websocket is opened.
 * Arguments:
 *  ws-url           - (required) link to websocket service
 *  opts             - (optional) map to configure reading/writing channels
 *    :read-ch       - (optional) (possibly buffered) channel to use for reading the websocket
 *    :write-ch      - (optional) (possibly buffered) channel to use for writing to the websocket
 *    :format        - (optional) data format to use on the channel, (at the moment)
 *                                either :edn (default), :json, :json-kw or :str.
 *    :ws-opts       - (optional) Other options to be passed to the websocket constructor (NodeJS only)
 *                                see https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketaddress-protocols-options
 * 
 * Usage:
 *  (:require [cljs.core.async :as a])
 * 
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437"))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
 *                                        :write-ch (a/chan (a/dropping-buffer 10))}))
 */
chord.client.ws_ch = (function chord$client$ws_ch(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30357 = arguments.length;
var i__4642__auto___30358 = (0);
while(true){
if((i__4642__auto___30358 < len__4641__auto___30357)){
args__4647__auto__.push((arguments[i__4642__auto___30358]));

var G__30359 = (i__4642__auto___30358 + (1));
i__4642__auto___30358 = G__30359;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic = (function (ws_url,p__30250){
var vec__30251 = p__30250;
var map__30254 = cljs.core.nth.call(null,vec__30251,(0),null);
var map__30254__$1 = (((((!((map__30254 == null))))?(((((map__30254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30254):map__30254);
var opts = map__30254__$1;
var read_ch = cljs.core.get.call(null,map__30254__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__30254__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var format = cljs.core.get.call(null,map__30254__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var ws_opts = cljs.core.get.call(null,map__30254__$1,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643));
var web_socket = chord.client.create_ws.call(null,ws_url,ws_opts);
var map__30256 = chord.format.wrap_format.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__4047__auto__ = read_ch;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})(),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),(function (){var or__4047__auto__ = write_ch;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})()], null),opts);
var map__30256__$1 = (((((!((map__30256 == null))))?(((((map__30256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30256):map__30256);
var read_ch__$1 = cljs.core.get.call(null,map__30256__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch__$1 = cljs.core.get.call(null,map__30256__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var open_ch = cljs.core.async.chan.call(null);
var close_ch = cljs.core.async.chan.call(null);
web_socket.binaryType = "arraybuffer";

chord.channels.read_from_ws_BANG_.call(null,web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_.call(null,web_socket,write_ch__$1);

web_socket.onopen = ((function (web_socket,map__30256,map__30256__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__30251,map__30254,map__30254__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (p1__30246_SHARP_){
return cljs.core.async.put_BANG_.call(null,open_ch,p1__30246_SHARP_);
});})(web_socket,map__30256,map__30256__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__30251,map__30254,map__30254__$1,opts,read_ch,write_ch,format,ws_opts))
;

web_socket.onclose = ((function (web_socket,map__30256,map__30256__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__30251,map__30254,map__30254__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (p1__30247_SHARP_){
return cljs.core.async.put_BANG_.call(null,close_ch,p1__30247_SHARP_);
});})(web_socket,map__30256,map__30256__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__30251,map__30254,map__30254__$1,opts,read_ch,write_ch,format,ws_opts))
;

var ws_chan = chord.channels.bidi_ch.call(null,read_ch__$1,write_ch__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (web_socket,map__30256,map__30256__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__30251,map__30254,map__30254__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (){
return web_socket.close();
});})(web_socket,map__30256,map__30256__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__30251,map__30254,map__30254__$1,opts,read_ch,write_ch,format,ws_opts))
], null));
var initial_ch = cljs.core.async.chan.call(null);
var c__27978__auto___30360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto___30360,ws_chan,initial_ch,web_socket,map__30256,map__30256__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__30251,map__30254,map__30254__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto___30360,ws_chan,initial_ch,web_socket,map__30256,map__30256__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__30251,map__30254,map__30254__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (state_30323){
var state_val_30324 = (state_30323[(1)]);
if((state_val_30324 === (7))){
var inst_30319 = (state_30323[(2)]);
var state_30323__$1 = state_30323;
var statearr_30325_30361 = state_30323__$1;
(statearr_30325_30361[(2)] = inst_30319);

(statearr_30325_30361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (20))){
var state_30323__$1 = state_30323;
var statearr_30326_30362 = state_30323__$1;
(statearr_30326_30362[(2)] = null);

(statearr_30326_30362[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (1))){
var inst_30258 = false;
var state_30323__$1 = (function (){var statearr_30327 = state_30323;
(statearr_30327[(7)] = inst_30258);

return statearr_30327;
})();
var statearr_30328_30363 = state_30323__$1;
(statearr_30328_30363[(2)] = null);

(statearr_30328_30363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (4))){
var inst_30271 = (state_30323[(8)]);
var inst_30273 = (state_30323[(9)]);
var inst_30271__$1 = (state_30323[(2)]);
var inst_30272 = cljs.core.nth.call(null,inst_30271__$1,(0),null);
var inst_30273__$1 = cljs.core.nth.call(null,inst_30271__$1,(1),null);
var inst_30274 = cljs.core._EQ_.call(null,inst_30273__$1,open_ch);
var state_30323__$1 = (function (){var statearr_30329 = state_30323;
(statearr_30329[(10)] = inst_30272);

(statearr_30329[(8)] = inst_30271__$1);

(statearr_30329[(9)] = inst_30273__$1);

return statearr_30329;
})();
if(inst_30274){
var statearr_30330_30364 = state_30323__$1;
(statearr_30330_30364[(1)] = (5));

} else {
var statearr_30331_30365 = state_30323__$1;
(statearr_30331_30365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (15))){
var inst_30304 = (state_30323[(2)]);
var state_30323__$1 = state_30323;
var statearr_30332_30366 = state_30323__$1;
(statearr_30332_30366[(2)] = inst_30304);

(statearr_30332_30366[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (21))){
var inst_30315 = (state_30323[(2)]);
var state_30323__$1 = state_30323;
var statearr_30333_30367 = state_30323__$1;
(statearr_30333_30367[(2)] = inst_30315);

(statearr_30333_30367[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (13))){
var state_30323__$1 = state_30323;
var statearr_30334_30368 = state_30323__$1;
(statearr_30334_30368[(2)] = null);

(statearr_30334_30368[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (6))){
var inst_30273 = (state_30323[(9)]);
var inst_30288 = cljs.core._EQ_.call(null,inst_30273,close_ch);
var state_30323__$1 = state_30323;
if(inst_30288){
var statearr_30335_30369 = state_30323__$1;
(statearr_30335_30369[(1)] = (9));

} else {
var statearr_30336_30370 = state_30323__$1;
(statearr_30336_30370[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (17))){
var state_30323__$1 = state_30323;
var statearr_30337_30371 = state_30323__$1;
(statearr_30337_30371[(2)] = initial_ch);

(statearr_30337_30371[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (3))){
var inst_30321 = (state_30323[(2)]);
var state_30323__$1 = state_30323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30323__$1,inst_30321);
} else {
if((state_val_30324 === (12))){
var inst_30258 = (state_30323[(7)]);
var state_30323__$1 = state_30323;
if(cljs.core.truth_(inst_30258)){
var statearr_30338_30372 = state_30323__$1;
(statearr_30338_30372[(1)] = (16));

} else {
var statearr_30339_30373 = state_30323__$1;
(statearr_30339_30373[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (2))){
var inst_30267 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30268 = [open_ch,close_ch];
var inst_30269 = (new cljs.core.PersistentVector(null,2,(5),inst_30267,inst_30268,null));
var state_30323__$1 = state_30323;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30323__$1,(4),inst_30269);
} else {
if((state_val_30324 === (19))){
var inst_30272 = (state_30323[(10)]);
var state_30323__$1 = state_30323;
var statearr_30340_30374 = state_30323__$1;
(statearr_30340_30374[(2)] = inst_30272);

(statearr_30340_30374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (11))){
var inst_30317 = (state_30323[(2)]);
var state_30323__$1 = state_30323;
var statearr_30341_30375 = state_30323__$1;
(statearr_30341_30375[(2)] = inst_30317);

(statearr_30341_30375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (9))){
var inst_30271 = (state_30323[(8)]);
var inst_30294 = (state_30323[(11)]);
var inst_30293 = cljs.core.nth.call(null,inst_30271,(0),null);
var inst_30294__$1 = chord.client.close_event__GT_maybe_error.call(null,inst_30293);
var state_30323__$1 = (function (){var statearr_30342 = state_30323;
(statearr_30342[(11)] = inst_30294__$1);

return statearr_30342;
})();
if(cljs.core.truth_(inst_30294__$1)){
var statearr_30343_30376 = state_30323__$1;
(statearr_30343_30376[(1)] = (12));

} else {
var statearr_30344_30377 = state_30323__$1;
(statearr_30344_30377[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (5))){
var inst_30271 = (state_30323[(8)]);
var inst_30279 = cljs.core.nth.call(null,inst_30271,(0),null);
var inst_30280 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];
var inst_30281 = [ws_chan];
var inst_30282 = cljs.core.PersistentHashMap.fromArrays(inst_30280,inst_30281);
var state_30323__$1 = (function (){var statearr_30345 = state_30323;
(statearr_30345[(12)] = inst_30279);

return statearr_30345;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30323__$1,(8),initial_ch,inst_30282);
} else {
if((state_val_30324 === (14))){
var inst_30307 = (state_30323[(2)]);
var inst_30308 = cljs.core.async.close_BANG_.call(null,ws_chan);
var inst_30309 = cljs.core.async.close_BANG_.call(null,initial_ch);
var state_30323__$1 = (function (){var statearr_30346 = state_30323;
(statearr_30346[(13)] = inst_30307);

(statearr_30346[(14)] = inst_30308);

return statearr_30346;
})();
var statearr_30347_30378 = state_30323__$1;
(statearr_30347_30378[(2)] = inst_30309);

(statearr_30347_30378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (16))){
var state_30323__$1 = state_30323;
var statearr_30348_30379 = state_30323__$1;
(statearr_30348_30379[(2)] = read_ch__$1);

(statearr_30348_30379[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (10))){
var inst_30273 = (state_30323[(9)]);
var inst_30311 = cljs.core._EQ_.call(null,inst_30273,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_30323__$1 = state_30323;
if(inst_30311){
var statearr_30349_30380 = state_30323__$1;
(statearr_30349_30380[(1)] = (19));

} else {
var statearr_30350_30381 = state_30323__$1;
(statearr_30350_30381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30324 === (18))){
var inst_30294 = (state_30323[(11)]);
var inst_30299 = (state_30323[(2)]);
var inst_30300 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_30301 = [inst_30294];
var inst_30302 = cljs.core.PersistentHashMap.fromArrays(inst_30300,inst_30301);
var state_30323__$1 = state_30323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30323__$1,(15),inst_30299,inst_30302);
} else {
if((state_val_30324 === (8))){
var inst_30284 = (state_30323[(2)]);
var inst_30285 = cljs.core.async.close_BANG_.call(null,initial_ch);
var inst_30258 = true;
var state_30323__$1 = (function (){var statearr_30351 = state_30323;
(statearr_30351[(15)] = inst_30285);

(statearr_30351[(7)] = inst_30258);

(statearr_30351[(16)] = inst_30284);

return statearr_30351;
})();
var statearr_30352_30382 = state_30323__$1;
(statearr_30352_30382[(2)] = null);

(statearr_30352_30382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27978__auto___30360,ws_chan,initial_ch,web_socket,map__30256,map__30256__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__30251,map__30254,map__30254__$1,opts,read_ch,write_ch,format,ws_opts))
;
return ((function (switch__27883__auto__,c__27978__auto___30360,ws_chan,initial_ch,web_socket,map__30256,map__30256__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__30251,map__30254,map__30254__$1,opts,read_ch,write_ch,format,ws_opts){
return (function() {
var chord$client$state_machine__27884__auto__ = null;
var chord$client$state_machine__27884__auto____0 = (function (){
var statearr_30353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30353[(0)] = chord$client$state_machine__27884__auto__);

(statearr_30353[(1)] = (1));

return statearr_30353;
});
var chord$client$state_machine__27884__auto____1 = (function (state_30323){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_30323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e30354){if((e30354 instanceof Object)){
var ex__27887__auto__ = e30354;
var statearr_30355_30383 = state_30323;
(statearr_30355_30383[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30384 = state_30323;
state_30323 = G__30384;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
chord$client$state_machine__27884__auto__ = function(state_30323){
switch(arguments.length){
case 0:
return chord$client$state_machine__27884__auto____0.call(this);
case 1:
return chord$client$state_machine__27884__auto____1.call(this,state_30323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__27884__auto____0;
chord$client$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__27884__auto____1;
return chord$client$state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto___30360,ws_chan,initial_ch,web_socket,map__30256,map__30256__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__30251,map__30254,map__30254__$1,opts,read_ch,write_ch,format,ws_opts))
})();
var state__27980__auto__ = (function (){var statearr_30356 = f__27979__auto__.call(null);
(statearr_30356[(6)] = c__27978__auto___30360);

return statearr_30356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto___30360,ws_chan,initial_ch,web_socket,map__30256,map__30256__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__30251,map__30254,map__30254__$1,opts,read_ch,write_ch,format,ws_opts))
);


return initial_ch;
});

chord.client.ws_ch.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
chord.client.ws_ch.cljs$lang$applyTo = (function (seq30248){
var G__30249 = cljs.core.first.call(null,seq30248);
var seq30248__$1 = cljs.core.next.call(null,seq30248);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30249,seq30248__$1);
});


//# sourceMappingURL=client.js.map?rel=1564575459429
