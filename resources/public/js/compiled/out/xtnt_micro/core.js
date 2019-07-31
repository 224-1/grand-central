// Compiled by ClojureScript 1.10.439 {}
goog.provide('xtnt_micro.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('chord.client');
goog.require('cljs.core.async');

/** @define {string} */
goog.define("xtnt_micro.core.ws_url","ws://localhost:3450/ws");
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,xtnt_micro.core.ws_url);
if((typeof xtnt_micro !== 'undefined') && (typeof xtnt_micro.core !== 'undefined') && (typeof xtnt_micro.core.app_state !== 'undefined')){
} else {
xtnt_micro.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!",new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"user","user",1532431356),"test"], null));
}
if((typeof xtnt_micro !== 'undefined') && (typeof xtnt_micro.core !== 'undefined') && (typeof xtnt_micro.core.msg_list !== 'undefined')){
} else {
xtnt_micro.core.msg_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof xtnt_micro !== 'undefined') && (typeof xtnt_micro.core !== 'undefined') && (typeof xtnt_micro.core.users !== 'undefined')){
} else {
xtnt_micro.core.users = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof xtnt_micro !== 'undefined') && (typeof xtnt_micro.core !== 'undefined') && (typeof xtnt_micro.core.send_chan !== 'undefined')){
} else {
xtnt_micro.core.send_chan = cljs.core.async.chan.call(null);
}
xtnt_micro.core.send_msg = (function xtnt_micro$core$send_msg(msg){
return cljs.core.async.put_BANG_.call(null,xtnt_micro.core.send_chan,msg);
});
xtnt_micro.core.send_msgs = (function xtnt_micro$core$send_msgs(svr_chan){
var c__32636__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32636__auto__){
return (function (){
var f__32637__auto__ = (function (){var switch__32613__auto__ = ((function (c__32636__auto__){
return (function (state_32977){
var state_val_32978 = (state_32977[(1)]);
if((state_val_32978 === (1))){
var state_32977__$1 = state_32977;
var statearr_32979_32991 = state_32977__$1;
(statearr_32979_32991[(2)] = null);

(statearr_32979_32991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (2))){
var state_32977__$1 = state_32977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32977__$1,(4),xtnt_micro.core.send_chan);
} else {
if((state_val_32978 === (3))){
var inst_32975 = (state_32977[(2)]);
var state_32977__$1 = state_32977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32977__$1,inst_32975);
} else {
if((state_val_32978 === (4))){
var inst_32966 = (state_32977[(7)]);
var inst_32966__$1 = (state_32977[(2)]);
var state_32977__$1 = (function (){var statearr_32980 = state_32977;
(statearr_32980[(7)] = inst_32966__$1);

return statearr_32980;
})();
if(cljs.core.truth_(inst_32966__$1)){
var statearr_32981_32992 = state_32977__$1;
(statearr_32981_32992[(1)] = (5));

} else {
var statearr_32982_32993 = state_32977__$1;
(statearr_32982_32993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (5))){
var inst_32966 = (state_32977[(7)]);
var state_32977__$1 = state_32977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32977__$1,(8),svr_chan,inst_32966);
} else {
if((state_val_32978 === (6))){
var state_32977__$1 = state_32977;
var statearr_32983_32994 = state_32977__$1;
(statearr_32983_32994[(2)] = null);

(statearr_32983_32994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (7))){
var inst_32973 = (state_32977[(2)]);
var state_32977__$1 = state_32977;
var statearr_32984_32995 = state_32977__$1;
(statearr_32984_32995[(2)] = inst_32973);

(statearr_32984_32995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (8))){
var inst_32969 = (state_32977[(2)]);
var state_32977__$1 = (function (){var statearr_32985 = state_32977;
(statearr_32985[(8)] = inst_32969);

return statearr_32985;
})();
var statearr_32986_32996 = state_32977__$1;
(statearr_32986_32996[(2)] = null);

(statearr_32986_32996[(1)] = (2));


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
});})(c__32636__auto__))
;
return ((function (switch__32613__auto__,c__32636__auto__){
return (function() {
var xtnt_micro$core$send_msgs_$_state_machine__32614__auto__ = null;
var xtnt_micro$core$send_msgs_$_state_machine__32614__auto____0 = (function (){
var statearr_32987 = [null,null,null,null,null,null,null,null,null];
(statearr_32987[(0)] = xtnt_micro$core$send_msgs_$_state_machine__32614__auto__);

(statearr_32987[(1)] = (1));

return statearr_32987;
});
var xtnt_micro$core$send_msgs_$_state_machine__32614__auto____1 = (function (state_32977){
while(true){
var ret_value__32615__auto__ = (function (){try{while(true){
var result__32616__auto__ = switch__32613__auto__.call(null,state_32977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32616__auto__;
}
break;
}
}catch (e32988){if((e32988 instanceof Object)){
var ex__32617__auto__ = e32988;
var statearr_32989_32997 = state_32977;
(statearr_32989_32997[(5)] = ex__32617__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32998 = state_32977;
state_32977 = G__32998;
continue;
} else {
return ret_value__32615__auto__;
}
break;
}
});
xtnt_micro$core$send_msgs_$_state_machine__32614__auto__ = function(state_32977){
switch(arguments.length){
case 0:
return xtnt_micro$core$send_msgs_$_state_machine__32614__auto____0.call(this);
case 1:
return xtnt_micro$core$send_msgs_$_state_machine__32614__auto____1.call(this,state_32977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
xtnt_micro$core$send_msgs_$_state_machine__32614__auto__.cljs$core$IFn$_invoke$arity$0 = xtnt_micro$core$send_msgs_$_state_machine__32614__auto____0;
xtnt_micro$core$send_msgs_$_state_machine__32614__auto__.cljs$core$IFn$_invoke$arity$1 = xtnt_micro$core$send_msgs_$_state_machine__32614__auto____1;
return xtnt_micro$core$send_msgs_$_state_machine__32614__auto__;
})()
;})(switch__32613__auto__,c__32636__auto__))
})();
var state__32638__auto__ = (function (){var statearr_32990 = f__32637__auto__.call(null);
(statearr_32990[(6)] = c__32636__auto__);

return statearr_32990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
});})(c__32636__auto__))
);

return c__32636__auto__;
});
xtnt_micro.core.receive_msgs = (function xtnt_micro$core$receive_msgs(svr_chan){
var c__32636__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32636__auto__){
return (function (){
var f__32637__auto__ = (function (){var switch__32613__auto__ = ((function (c__32636__auto__){
return (function (state_33027){
var state_val_33028 = (state_33027[(1)]);
if((state_val_33028 === (7))){
var inst_33023 = (state_33027[(2)]);
var state_33027__$1 = state_33027;
var statearr_33029_33050 = state_33027__$1;
(statearr_33029_33050[(2)] = inst_33023);

(statearr_33029_33050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (1))){
var state_33027__$1 = state_33027;
var statearr_33030_33051 = state_33027__$1;
(statearr_33030_33051[(2)] = null);

(statearr_33030_33051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (4))){
var inst_33002 = (state_33027[(7)]);
var inst_33001 = (state_33027[(2)]);
var inst_33002__$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_33001);
var state_33027__$1 = (function (){var statearr_33031 = state_33027;
(statearr_33031[(7)] = inst_33002__$1);

return statearr_33031;
})();
if(cljs.core.truth_(inst_33002__$1)){
var statearr_33032_33052 = state_33027__$1;
(statearr_33032_33052[(1)] = (5));

} else {
var statearr_33033_33053 = state_33027__$1;
(statearr_33033_33053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (6))){
var inst_33021 = cljs.core.println.call(null,"Websocket closed");
var state_33027__$1 = state_33027;
var statearr_33034_33054 = state_33027__$1;
(statearr_33034_33054[(2)] = inst_33021);

(statearr_33034_33054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (3))){
var inst_33025 = (state_33027[(2)]);
var state_33027__$1 = state_33027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33027__$1,inst_33025);
} else {
if((state_val_33028 === (12))){
var inst_33002 = (state_33027[(7)]);
var inst_33013 = new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(inst_33002);
var inst_33014 = cljs.core.swap_BANG_.call(null,xtnt_micro.core.users,cljs.core.dissoc,inst_33013);
var state_33027__$1 = state_33027;
var statearr_33035_33055 = state_33027__$1;
(statearr_33035_33055[(2)] = inst_33014);

(statearr_33035_33055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (2))){
var state_33027__$1 = state_33027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33027__$1,(4),svr_chan);
} else {
if((state_val_33028 === (11))){
var inst_33002 = (state_33027[(7)]);
var inst_33010 = new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(inst_33002);
var inst_33011 = cljs.core.swap_BANG_.call(null,xtnt_micro.core.users,cljs.core.merge,inst_33010);
var state_33027__$1 = state_33027;
var statearr_33036_33056 = state_33027__$1;
(statearr_33036_33056[(2)] = inst_33011);

(statearr_33036_33056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (9))){
var inst_33002 = (state_33027[(7)]);
var inst_33004 = new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(inst_33002);
var inst_33005 = cljs.core.reset_BANG_.call(null,xtnt_micro.core.users,inst_33004);
var state_33027__$1 = state_33027;
var statearr_33037_33057 = state_33027__$1;
(statearr_33037_33057[(2)] = inst_33005);

(statearr_33037_33057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (5))){
var inst_33002 = (state_33027[(7)]);
var inst_33016 = new cljs.core.Keyword(null,"m-type","m-type",-1743768522).cljs$core$IFn$_invoke$arity$1(inst_33002);
var state_33027__$1 = state_33027;
var G__33038_33058 = inst_33016;
var G__33038_33059__$1 = (((G__33038_33058 instanceof cljs.core.Keyword))?G__33038_33058.fqn:null);
switch (G__33038_33059__$1) {
case "init-users":
var statearr_33039_33061 = state_33027__$1;
(statearr_33039_33061[(1)] = (9));


break;
case "chat":
var statearr_33040_33062 = state_33027__$1;
(statearr_33040_33062[(1)] = (10));


break;
case "new-user":
var statearr_33041_33063 = state_33027__$1;
(statearr_33041_33063[(1)] = (11));


break;
case "user-left":
var statearr_33042_33064 = state_33027__$1;
(statearr_33042_33064[(1)] = (12));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33038_33059__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (10))){
var inst_33002 = (state_33027[(7)]);
var inst_33007 = cljs.core.dissoc.call(null,inst_33002,new cljs.core.Keyword(null,"m-type","m-type",-1743768522));
var inst_33008 = cljs.core.swap_BANG_.call(null,xtnt_micro.core.msg_list,cljs.core.conj,inst_33007);
var state_33027__$1 = state_33027;
var statearr_33043_33065 = state_33027__$1;
(statearr_33043_33065[(2)] = inst_33008);

(statearr_33043_33065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (8))){
var inst_33018 = (state_33027[(2)]);
var state_33027__$1 = (function (){var statearr_33044 = state_33027;
(statearr_33044[(8)] = inst_33018);

return statearr_33044;
})();
var statearr_33045_33066 = state_33027__$1;
(statearr_33045_33066[(2)] = null);

(statearr_33045_33066[(1)] = (2));


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
});})(c__32636__auto__))
;
return ((function (switch__32613__auto__,c__32636__auto__){
return (function() {
var xtnt_micro$core$receive_msgs_$_state_machine__32614__auto__ = null;
var xtnt_micro$core$receive_msgs_$_state_machine__32614__auto____0 = (function (){
var statearr_33046 = [null,null,null,null,null,null,null,null,null];
(statearr_33046[(0)] = xtnt_micro$core$receive_msgs_$_state_machine__32614__auto__);

(statearr_33046[(1)] = (1));

return statearr_33046;
});
var xtnt_micro$core$receive_msgs_$_state_machine__32614__auto____1 = (function (state_33027){
while(true){
var ret_value__32615__auto__ = (function (){try{while(true){
var result__32616__auto__ = switch__32613__auto__.call(null,state_33027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32616__auto__;
}
break;
}
}catch (e33047){if((e33047 instanceof Object)){
var ex__32617__auto__ = e33047;
var statearr_33048_33067 = state_33027;
(statearr_33048_33067[(5)] = ex__32617__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33068 = state_33027;
state_33027 = G__33068;
continue;
} else {
return ret_value__32615__auto__;
}
break;
}
});
xtnt_micro$core$receive_msgs_$_state_machine__32614__auto__ = function(state_33027){
switch(arguments.length){
case 0:
return xtnt_micro$core$receive_msgs_$_state_machine__32614__auto____0.call(this);
case 1:
return xtnt_micro$core$receive_msgs_$_state_machine__32614__auto____1.call(this,state_33027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
xtnt_micro$core$receive_msgs_$_state_machine__32614__auto__.cljs$core$IFn$_invoke$arity$0 = xtnt_micro$core$receive_msgs_$_state_machine__32614__auto____0;
xtnt_micro$core$receive_msgs_$_state_machine__32614__auto__.cljs$core$IFn$_invoke$arity$1 = xtnt_micro$core$receive_msgs_$_state_machine__32614__auto____1;
return xtnt_micro$core$receive_msgs_$_state_machine__32614__auto__;
})()
;})(switch__32613__auto__,c__32636__auto__))
})();
var state__32638__auto__ = (function (){var statearr_33049 = f__32637__auto__.call(null);
(statearr_33049[(6)] = c__32636__auto__);

return statearr_33049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
});})(c__32636__auto__))
);

return c__32636__auto__;
});
xtnt_micro.core.setup_websockets_BANG_ = (function xtnt_micro$core$setup_websockets_BANG_(){
var c__32636__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32636__auto__){
return (function (){
var f__32637__auto__ = (function (){var switch__32613__auto__ = ((function (c__32636__auto__){
return (function (state_33110){
var state_val_33111 = (state_33110[(1)]);
if((state_val_33111 === (7))){
var state_33110__$1 = state_33110;
var statearr_33112_33135 = state_33110__$1;
(statearr_33112_33135[(2)] = false);

(statearr_33112_33135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (1))){
var inst_33070 = chord.client.ws_ch.call(null,xtnt_micro.core.ws_url);
var state_33110__$1 = state_33110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33110__$1,(2),inst_33070);
} else {
if((state_val_33111 === (4))){
var state_33110__$1 = state_33110;
var statearr_33113_33136 = state_33110__$1;
(statearr_33113_33136[(2)] = false);

(statearr_33113_33136[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (13))){
var inst_33094 = (state_33110[(7)]);
var inst_33099 = [new cljs.core.Keyword(null,"m-type","m-type",-1743768522),new cljs.core.Keyword(null,"msg","msg",-1386103444)];
var inst_33100 = cljs.core.deref.call(null,xtnt_micro.core.app_state);
var inst_33101 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_33100);
var inst_33102 = [new cljs.core.Keyword(null,"new-user","new-user",1575436062),inst_33101];
var inst_33103 = cljs.core.PersistentHashMap.fromArrays(inst_33099,inst_33102);
var inst_33104 = xtnt_micro.core.send_msg.call(null,inst_33103);
var inst_33105 = xtnt_micro.core.send_msgs.call(null,inst_33094);
var inst_33106 = xtnt_micro.core.receive_msgs.call(null,inst_33094);
var state_33110__$1 = (function (){var statearr_33114 = state_33110;
(statearr_33114[(8)] = inst_33104);

(statearr_33114[(9)] = inst_33105);

return statearr_33114;
})();
var statearr_33115_33137 = state_33110__$1;
(statearr_33115_33137[(2)] = inst_33106);

(statearr_33115_33137[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (6))){
var state_33110__$1 = state_33110;
var statearr_33116_33138 = state_33110__$1;
(statearr_33116_33138[(2)] = true);

(statearr_33116_33138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (3))){
var inst_33072 = (state_33110[(10)]);
var inst_33077 = inst_33072.cljs$lang$protocol_mask$partition0$;
var inst_33078 = (inst_33077 & (64));
var inst_33079 = inst_33072.cljs$core$ISeq$;
var inst_33080 = (cljs.core.PROTOCOL_SENTINEL === inst_33079);
var inst_33081 = ((inst_33078) || (inst_33080));
var state_33110__$1 = state_33110;
if(cljs.core.truth_(inst_33081)){
var statearr_33117_33139 = state_33110__$1;
(statearr_33117_33139[(1)] = (6));

} else {
var statearr_33118_33140 = state_33110__$1;
(statearr_33118_33140[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (12))){
var inst_33097 = cljs.core.println.call(null,"Something went wrong with the websocket");
var state_33110__$1 = state_33110;
var statearr_33119_33141 = state_33110__$1;
(statearr_33119_33141[(2)] = inst_33097);

(statearr_33119_33141[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (2))){
var inst_33072 = (state_33110[(10)]);
var inst_33072__$1 = (state_33110[(2)]);
var inst_33074 = (inst_33072__$1 == null);
var inst_33075 = cljs.core.not.call(null,inst_33074);
var state_33110__$1 = (function (){var statearr_33120 = state_33110;
(statearr_33120[(10)] = inst_33072__$1);

return statearr_33120;
})();
if(inst_33075){
var statearr_33121_33142 = state_33110__$1;
(statearr_33121_33142[(1)] = (3));

} else {
var statearr_33122_33143 = state_33110__$1;
(statearr_33122_33143[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (11))){
var inst_33093 = (state_33110[(2)]);
var inst_33094 = cljs.core.get.call(null,inst_33093,new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174));
var inst_33095 = cljs.core.get.call(null,inst_33093,new cljs.core.Keyword(null,"error","error",-978969032));
var state_33110__$1 = (function (){var statearr_33123 = state_33110;
(statearr_33123[(7)] = inst_33094);

return statearr_33123;
})();
if(cljs.core.truth_(inst_33095)){
var statearr_33124_33144 = state_33110__$1;
(statearr_33124_33144[(1)] = (12));

} else {
var statearr_33125_33145 = state_33110__$1;
(statearr_33125_33145[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (9))){
var inst_33072 = (state_33110[(10)]);
var inst_33090 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33072);
var state_33110__$1 = state_33110;
var statearr_33126_33146 = state_33110__$1;
(statearr_33126_33146[(2)] = inst_33090);

(statearr_33126_33146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (5))){
var inst_33088 = (state_33110[(2)]);
var state_33110__$1 = state_33110;
if(cljs.core.truth_(inst_33088)){
var statearr_33127_33147 = state_33110__$1;
(statearr_33127_33147[(1)] = (9));

} else {
var statearr_33128_33148 = state_33110__$1;
(statearr_33128_33148[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (14))){
var inst_33108 = (state_33110[(2)]);
var state_33110__$1 = state_33110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33110__$1,inst_33108);
} else {
if((state_val_33111 === (10))){
var inst_33072 = (state_33110[(10)]);
var state_33110__$1 = state_33110;
var statearr_33129_33149 = state_33110__$1;
(statearr_33129_33149[(2)] = inst_33072);

(statearr_33129_33149[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (8))){
var inst_33085 = (state_33110[(2)]);
var state_33110__$1 = state_33110;
var statearr_33130_33150 = state_33110__$1;
(statearr_33130_33150[(2)] = inst_33085);

(statearr_33130_33150[(1)] = (5));


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
});})(c__32636__auto__))
;
return ((function (switch__32613__auto__,c__32636__auto__){
return (function() {
var xtnt_micro$core$setup_websockets_BANG__$_state_machine__32614__auto__ = null;
var xtnt_micro$core$setup_websockets_BANG__$_state_machine__32614__auto____0 = (function (){
var statearr_33131 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33131[(0)] = xtnt_micro$core$setup_websockets_BANG__$_state_machine__32614__auto__);

(statearr_33131[(1)] = (1));

return statearr_33131;
});
var xtnt_micro$core$setup_websockets_BANG__$_state_machine__32614__auto____1 = (function (state_33110){
while(true){
var ret_value__32615__auto__ = (function (){try{while(true){
var result__32616__auto__ = switch__32613__auto__.call(null,state_33110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32616__auto__;
}
break;
}
}catch (e33132){if((e33132 instanceof Object)){
var ex__32617__auto__ = e33132;
var statearr_33133_33151 = state_33110;
(statearr_33133_33151[(5)] = ex__32617__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33152 = state_33110;
state_33110 = G__33152;
continue;
} else {
return ret_value__32615__auto__;
}
break;
}
});
xtnt_micro$core$setup_websockets_BANG__$_state_machine__32614__auto__ = function(state_33110){
switch(arguments.length){
case 0:
return xtnt_micro$core$setup_websockets_BANG__$_state_machine__32614__auto____0.call(this);
case 1:
return xtnt_micro$core$setup_websockets_BANG__$_state_machine__32614__auto____1.call(this,state_33110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
xtnt_micro$core$setup_websockets_BANG__$_state_machine__32614__auto__.cljs$core$IFn$_invoke$arity$0 = xtnt_micro$core$setup_websockets_BANG__$_state_machine__32614__auto____0;
xtnt_micro$core$setup_websockets_BANG__$_state_machine__32614__auto__.cljs$core$IFn$_invoke$arity$1 = xtnt_micro$core$setup_websockets_BANG__$_state_machine__32614__auto____1;
return xtnt_micro$core$setup_websockets_BANG__$_state_machine__32614__auto__;
})()
;})(switch__32613__auto__,c__32636__auto__))
})();
var state__32638__auto__ = (function (){var statearr_33134 = f__32637__auto__.call(null);
(statearr_33134[(6)] = c__32636__auto__);

return statearr_33134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
});})(c__32636__auto__))
);

return c__32636__auto__;
});
xtnt_micro.core.chat_input = (function xtnt_micro$core$chat_input(){
var v = reagent.core.atom.call(null,null);
return ((function (v){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-input"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (v){
return (function (x){
x.preventDefault();

var temp__5720__auto___33154 = cljs.core.deref.call(null,v);
if(cljs.core.truth_(temp__5720__auto___33154)){
var msg_33155 = temp__5720__auto___33154;
xtnt_micro.core.send_msg.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg_33155,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xtnt_micro.core.app_state)),new cljs.core.Keyword(null,"m-type","m-type",-1743768522),new cljs.core.Keyword(null,"chat","chat",-518268339)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,v,null);
});})(v))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,v),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type a message to send to the chatroom",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (v){
return (function (p1__33153_SHARP_){
return cljs.core.reset_BANG_.call(null,v,p1__33153_SHARP_.target.value);
});})(v))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"button-primary"], null),"Send"], null)], null)], null)], null);
});
;})(v))
});
xtnt_micro.core.chat_history = (function xtnt_micro$core$chat_history(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"history"], null),(function (){var iter__4434__auto__ = (function xtnt_micro$core$chat_history_$_iter__33156(s__33157){
return (new cljs.core.LazySeq(null,(function (){
var s__33157__$1 = s__33157;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__33157__$1);
if(temp__5720__auto__){
var s__33157__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33157__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__33157__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__33159 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__33158 = (0);
while(true){
if((i__33158 < size__4433__auto__)){
var m = cljs.core._nth.call(null,c__4432__auto__,i__33158);
cljs.core.chunk_append.call(null,b__33159,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(m)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(m))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m)], null)));

var G__33160 = (i__33158 + (1));
i__33158 = G__33160;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33159),xtnt_micro$core$chat_history_$_iter__33156.call(null,cljs.core.chunk_rest.call(null,s__33157__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33159),null);
}
} else {
var m = cljs.core.first.call(null,s__33157__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(m)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(m))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m)], null)),xtnt_micro$core$chat_history_$_iter__33156.call(null,cljs.core.rest.call(null,s__33157__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,cljs.core.deref.call(null,xtnt_micro.core.msg_list));
})()], null);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var node = reagent.core.dom_node.call(null,this$);
return node.scrollTop = node.scrollHeight;
})], null));
});
xtnt_micro.core.login_view = (function xtnt_micro$core$login_view(){
var v = reagent.core.atom.call(null,null);
return ((function (v){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"login-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"login"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (v){
return (function (x){
x.preventDefault();

cljs.core.swap_BANG_.call(null,xtnt_micro.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.deref.call(null,v));

cljs.core.swap_BANG_.call(null,xtnt_micro.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Keyword(null,"chat","chat",-518268339));

return xtnt_micro.core.setup_websockets_BANG_.call(null);
});})(v))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,v),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Pick a username",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (v){
return (function (p1__33161_SHARP_){
return cljs.core.reset_BANG_.call(null,v,p1__33161_SHARP_.target.value);
});})(v))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"button-primary"], null),"Start chatting"], null)], null)], null)], null);
});
;})(v))
});
xtnt_micro.core.sidebar = (function xtnt_micro$core$sidebar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sidebar"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Active Users:"], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),(function (){var iter__4434__auto__ = (function xtnt_micro$core$sidebar_$_iter__33162(s__33163){
return (new cljs.core.LazySeq(null,(function (){
var s__33163__$1 = s__33163;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__33163__$1);
if(temp__5720__auto__){
var s__33163__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33163__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__33163__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__33165 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__33164 = (0);
while(true){
if((i__33164 < size__4433__auto__)){
var vec__33166 = cljs.core._nth.call(null,c__4432__auto__,i__33164);
var k = cljs.core.nth.call(null,vec__33166,(0),null);
var v = cljs.core.nth.call(null,vec__33166,(1),null);
cljs.core.chunk_append.call(null,b__33165,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__33172 = (i__33164 + (1));
i__33164 = G__33172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33165),xtnt_micro$core$sidebar_$_iter__33162.call(null,cljs.core.chunk_rest.call(null,s__33163__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33165),null);
}
} else {
var vec__33169 = cljs.core.first.call(null,s__33163__$2);
var k = cljs.core.nth.call(null,vec__33169,(0),null);
var v = cljs.core.nth.call(null,vec__33169,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),xtnt_micro$core$sidebar_$_iter__33162.call(null,cljs.core.rest.call(null,s__33163__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,cljs.core.deref.call(null,xtnt_micro.core.users));
})())], null);
});
xtnt_micro.core.chat_view = (function xtnt_micro$core$chat_view(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"chat-container"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xtnt_micro.core.chat_history], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xtnt_micro.core.chat_input], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"WebSocket"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xtnt_micro.core.sidebar], null)], null);
});
xtnt_micro.core.app_container = (function xtnt_micro$core$app_container(){
var G__33173 = new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xtnt_micro.core.app_state));
var G__33173__$1 = (((G__33173 instanceof cljs.core.Keyword))?G__33173.fqn:null);
switch (G__33173__$1) {
case "login":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xtnt_micro.core.login_view], null);

break;
case "chat":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xtnt_micro.core.chat_view], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33173__$1)].join('')));

}
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xtnt_micro.core.app_container], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1564578333950
