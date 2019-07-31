// Compiled by ClojureScript 1.10.439 {}
goog.provide('chord.channels');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
chord.channels.read_from_ws_BANG_ = (function chord$channels$read_from_ws_BANG_(ws,ch){
return ws.onmessage = (function (ev){
var message = ev.data;
return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null));
});
});
chord.channels.write_to_ws_BANG_ = (function chord$channels$write_to_ws_BANG_(ws,ch){
var c__27978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto__){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto__){
return (function (state_29933){
var state_val_29934 = (state_29933[(1)]);
if((state_val_29934 === (1))){
var state_29933__$1 = state_29933;
var statearr_29935_29947 = state_29933__$1;
(statearr_29935_29947[(2)] = null);

(statearr_29935_29947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (2))){
var state_29933__$1 = state_29933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29933__$1,(4),ch);
} else {
if((state_val_29934 === (3))){
var inst_29931 = (state_29933[(2)]);
var state_29933__$1 = state_29933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29933__$1,inst_29931);
} else {
if((state_val_29934 === (4))){
var inst_29923 = (state_29933[(7)]);
var inst_29923__$1 = (state_29933[(2)]);
var state_29933__$1 = (function (){var statearr_29936 = state_29933;
(statearr_29936[(7)] = inst_29923__$1);

return statearr_29936;
})();
if(cljs.core.truth_(inst_29923__$1)){
var statearr_29937_29948 = state_29933__$1;
(statearr_29937_29948[(1)] = (5));

} else {
var statearr_29938_29949 = state_29933__$1;
(statearr_29938_29949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (5))){
var inst_29923 = (state_29933[(7)]);
var inst_29925 = ws.send(inst_29923);
var state_29933__$1 = (function (){var statearr_29939 = state_29933;
(statearr_29939[(8)] = inst_29925);

return statearr_29939;
})();
var statearr_29940_29950 = state_29933__$1;
(statearr_29940_29950[(2)] = null);

(statearr_29940_29950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (6))){
var state_29933__$1 = state_29933;
var statearr_29941_29951 = state_29933__$1;
(statearr_29941_29951[(2)] = null);

(statearr_29941_29951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (7))){
var inst_29929 = (state_29933[(2)]);
var state_29933__$1 = state_29933;
var statearr_29942_29952 = state_29933__$1;
(statearr_29942_29952[(2)] = inst_29929);

(statearr_29942_29952[(1)] = (3));


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
});})(c__27978__auto__))
;
return ((function (switch__27883__auto__,c__27978__auto__){
return (function() {
var chord$channels$write_to_ws_BANG__$_state_machine__27884__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__27884__auto____0 = (function (){
var statearr_29943 = [null,null,null,null,null,null,null,null,null];
(statearr_29943[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__27884__auto__);

(statearr_29943[(1)] = (1));

return statearr_29943;
});
var chord$channels$write_to_ws_BANG__$_state_machine__27884__auto____1 = (function (state_29933){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_29933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e29944){if((e29944 instanceof Object)){
var ex__27887__auto__ = e29944;
var statearr_29945_29953 = state_29933;
(statearr_29945_29953[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29954 = state_29933;
state_29933 = G__29954;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__27884__auto__ = function(state_29933){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__27884__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__27884__auto____1.call(this,state_29933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$channels$write_to_ws_BANG__$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__27884__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__27884__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto__))
})();
var state__27980__auto__ = (function (){var statearr_29946 = f__27979__auto__.call(null);
(statearr_29946[(6)] = c__27978__auto__);

return statearr_29946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto__))
);

return c__27978__auto__;
});
chord.channels.bidi_ch = (function chord$channels$bidi_ch(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29967 = arguments.length;
var i__4642__auto___29968 = (0);
while(true){
if((i__4642__auto___29968 < len__4641__auto___29967)){
args__4647__auto__.push((arguments[i__4642__auto___29968]));

var G__29969 = (i__4642__auto___29968 + (1));
i__4642__auto___29968 = G__29969;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__29958){
var vec__29959 = p__29958;
var map__29962 = cljs.core.nth.call(null,vec__29959,(0),null);
var map__29962__$1 = (((((!((map__29962 == null))))?(((((map__29962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29962):map__29962);
var on_close = cljs.core.get.call(null,map__29962__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if((typeof chord !== 'undefined') && (typeof chord.channels !== 'undefined') && (typeof chord.channels.t_chord$channels29964 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
chord.channels.t_chord$channels29964 = (function (read_ch,write_ch,p__29958,vec__29959,map__29962,on_close,meta29965){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__29958 = p__29958;
this.vec__29959 = vec__29959;
this.map__29962 = map__29962;
this.on_close = on_close;
this.meta29965 = meta29965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
chord.channels.t_chord$channels29964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__29959,map__29962,map__29962__$1,on_close){
return (function (_29966,meta29965__$1){
var self__ = this;
var _29966__$1 = this;
return (new chord.channels.t_chord$channels29964(self__.read_ch,self__.write_ch,self__.p__29958,self__.vec__29959,self__.map__29962,self__.on_close,meta29965__$1));
});})(vec__29959,map__29962,map__29962__$1,on_close))
;

chord.channels.t_chord$channels29964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__29959,map__29962,map__29962__$1,on_close){
return (function (_29966){
var self__ = this;
var _29966__$1 = this;
return self__.meta29965;
});})(vec__29959,map__29962,map__29962__$1,on_close))
;

chord.channels.t_chord$channels29964.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

chord.channels.t_chord$channels29964.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__29959,map__29962,map__29962__$1,on_close){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
});})(vec__29959,map__29962,map__29962__$1,on_close))
;

chord.channels.t_chord$channels29964.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

chord.channels.t_chord$channels29964.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__29959,map__29962,map__29962__$1,on_close){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
});})(vec__29959,map__29962,map__29962__$1,on_close))
;

chord.channels.t_chord$channels29964.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

chord.channels.t_chord$channels29964.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__29959,map__29962,map__29962__$1,on_close){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_.call(null,self__.write_ch);

if(cljs.core.truth_(self__.on_close)){
return self__.on_close.call(null);
} else {
return null;
}
});})(vec__29959,map__29962,map__29962__$1,on_close))
;

chord.channels.t_chord$channels29964.getBasis = ((function (vec__29959,map__29962,map__29962__$1,on_close){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__29958","p__29958",-697353020,null),new cljs.core.Symbol(null,"vec__29959","vec__29959",1712345105,null),new cljs.core.Symbol(null,"map__29962","map__29962",1606959066,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"meta29965","meta29965",-374302666,null)], null);
});})(vec__29959,map__29962,map__29962__$1,on_close))
;

chord.channels.t_chord$channels29964.cljs$lang$type = true;

chord.channels.t_chord$channels29964.cljs$lang$ctorStr = "chord.channels/t_chord$channels29964";

chord.channels.t_chord$channels29964.cljs$lang$ctorPrWriter = ((function (vec__29959,map__29962,map__29962__$1,on_close){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"chord.channels/t_chord$channels29964");
});})(vec__29959,map__29962,map__29962__$1,on_close))
;

/**
 * Positional factory function for chord.channels/t_chord$channels29964.
 */
chord.channels.__GT_t_chord$channels29964 = ((function (vec__29959,map__29962,map__29962__$1,on_close){
return (function chord$channels$__GT_t_chord$channels29964(read_ch__$1,write_ch__$1,p__29958__$1,vec__29959__$1,map__29962__$2,on_close__$1,meta29965){
return (new chord.channels.t_chord$channels29964(read_ch__$1,write_ch__$1,p__29958__$1,vec__29959__$1,map__29962__$2,on_close__$1,meta29965));
});})(vec__29959,map__29962,map__29962__$1,on_close))
;

}

return (new chord.channels.t_chord$channels29964(read_ch,write_ch,p__29958,vec__29959,map__29962__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
});

chord.channels.bidi_ch.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
chord.channels.bidi_ch.cljs$lang$applyTo = (function (seq29955){
var G__29956 = cljs.core.first.call(null,seq29955);
var seq29955__$1 = cljs.core.next.call(null,seq29955);
var G__29957 = cljs.core.first.call(null,seq29955__$1);
var seq29955__$2 = cljs.core.next.call(null,seq29955__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29956,G__29957,seq29955__$2);
});


//# sourceMappingURL=channels.js.map?rel=1564575458532
