// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e33657){if((e33657 instanceof Error)){
var e = e33657;
return "Error: Unable to stringify";
} else {
throw e33657;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__33660 = arguments.length;
switch (G__33660) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__33658_SHARP_){
if(typeof p1__33658_SHARP_ === 'string'){
return p1__33658_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__33658_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33663 = arguments.length;
var i__4642__auto___33664 = (0);
while(true){
if((i__4642__auto___33664 < len__4641__auto___33663)){
args__4647__auto__.push((arguments[i__4642__auto___33664]));

var G__33665 = (i__4642__auto___33664 + (1));
i__4642__auto___33664 = G__33665;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq33662){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33662));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33667 = arguments.length;
var i__4642__auto___33668 = (0);
while(true){
if((i__4642__auto___33668 < len__4641__auto___33667)){
args__4647__auto__.push((arguments[i__4642__auto___33668]));

var G__33669 = (i__4642__auto___33668 + (1));
i__4642__auto___33668 = G__33669;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq33666){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33666));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33670){
var map__33671 = p__33670;
var map__33671__$1 = (((((!((map__33671 == null))))?(((((map__33671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33671):map__33671);
var message = cljs.core.get.call(null,map__33671__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33671__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27978__auto___33750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto___33750,ch){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto___33750,ch){
return (function (state_33722){
var state_val_33723 = (state_33722[(1)]);
if((state_val_33723 === (7))){
var inst_33718 = (state_33722[(2)]);
var state_33722__$1 = state_33722;
var statearr_33724_33751 = state_33722__$1;
(statearr_33724_33751[(2)] = inst_33718);

(statearr_33724_33751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (1))){
var state_33722__$1 = state_33722;
var statearr_33725_33752 = state_33722__$1;
(statearr_33725_33752[(2)] = null);

(statearr_33725_33752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (4))){
var inst_33675 = (state_33722[(7)]);
var inst_33675__$1 = (state_33722[(2)]);
var state_33722__$1 = (function (){var statearr_33726 = state_33722;
(statearr_33726[(7)] = inst_33675__$1);

return statearr_33726;
})();
if(cljs.core.truth_(inst_33675__$1)){
var statearr_33727_33753 = state_33722__$1;
(statearr_33727_33753[(1)] = (5));

} else {
var statearr_33728_33754 = state_33722__$1;
(statearr_33728_33754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (15))){
var inst_33682 = (state_33722[(8)]);
var inst_33697 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33682);
var inst_33698 = cljs.core.first.call(null,inst_33697);
var inst_33699 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33698);
var inst_33700 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33699)].join('');
var inst_33701 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33700);
var state_33722__$1 = state_33722;
var statearr_33729_33755 = state_33722__$1;
(statearr_33729_33755[(2)] = inst_33701);

(statearr_33729_33755[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (13))){
var inst_33706 = (state_33722[(2)]);
var state_33722__$1 = state_33722;
var statearr_33730_33756 = state_33722__$1;
(statearr_33730_33756[(2)] = inst_33706);

(statearr_33730_33756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (6))){
var state_33722__$1 = state_33722;
var statearr_33731_33757 = state_33722__$1;
(statearr_33731_33757[(2)] = null);

(statearr_33731_33757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (17))){
var inst_33704 = (state_33722[(2)]);
var state_33722__$1 = state_33722;
var statearr_33732_33758 = state_33722__$1;
(statearr_33732_33758[(2)] = inst_33704);

(statearr_33732_33758[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (3))){
var inst_33720 = (state_33722[(2)]);
var state_33722__$1 = state_33722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33722__$1,inst_33720);
} else {
if((state_val_33723 === (12))){
var inst_33681 = (state_33722[(9)]);
var inst_33695 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33681,opts);
var state_33722__$1 = state_33722;
if(inst_33695){
var statearr_33733_33759 = state_33722__$1;
(statearr_33733_33759[(1)] = (15));

} else {
var statearr_33734_33760 = state_33722__$1;
(statearr_33734_33760[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (2))){
var state_33722__$1 = state_33722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33722__$1,(4),ch);
} else {
if((state_val_33723 === (11))){
var inst_33682 = (state_33722[(8)]);
var inst_33687 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33688 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33682);
var inst_33689 = cljs.core.async.timeout.call(null,(1000));
var inst_33690 = [inst_33688,inst_33689];
var inst_33691 = (new cljs.core.PersistentVector(null,2,(5),inst_33687,inst_33690,null));
var state_33722__$1 = state_33722;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33722__$1,(14),inst_33691);
} else {
if((state_val_33723 === (9))){
var inst_33682 = (state_33722[(8)]);
var inst_33708 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33709 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33682);
var inst_33710 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33709);
var inst_33711 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33710)].join('');
var inst_33712 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33711);
var state_33722__$1 = (function (){var statearr_33735 = state_33722;
(statearr_33735[(10)] = inst_33708);

return statearr_33735;
})();
var statearr_33736_33761 = state_33722__$1;
(statearr_33736_33761[(2)] = inst_33712);

(statearr_33736_33761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (5))){
var inst_33675 = (state_33722[(7)]);
var inst_33677 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33678 = (new cljs.core.PersistentArrayMap(null,2,inst_33677,null));
var inst_33679 = (new cljs.core.PersistentHashSet(null,inst_33678,null));
var inst_33680 = figwheel.client.focus_msgs.call(null,inst_33679,inst_33675);
var inst_33681 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33680);
var inst_33682 = cljs.core.first.call(null,inst_33680);
var inst_33683 = figwheel.client.autoload_QMARK_.call(null);
var state_33722__$1 = (function (){var statearr_33737 = state_33722;
(statearr_33737[(9)] = inst_33681);

(statearr_33737[(8)] = inst_33682);

return statearr_33737;
})();
if(cljs.core.truth_(inst_33683)){
var statearr_33738_33762 = state_33722__$1;
(statearr_33738_33762[(1)] = (8));

} else {
var statearr_33739_33763 = state_33722__$1;
(statearr_33739_33763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (14))){
var inst_33693 = (state_33722[(2)]);
var state_33722__$1 = state_33722;
var statearr_33740_33764 = state_33722__$1;
(statearr_33740_33764[(2)] = inst_33693);

(statearr_33740_33764[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (16))){
var state_33722__$1 = state_33722;
var statearr_33741_33765 = state_33722__$1;
(statearr_33741_33765[(2)] = null);

(statearr_33741_33765[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (10))){
var inst_33714 = (state_33722[(2)]);
var state_33722__$1 = (function (){var statearr_33742 = state_33722;
(statearr_33742[(11)] = inst_33714);

return statearr_33742;
})();
var statearr_33743_33766 = state_33722__$1;
(statearr_33743_33766[(2)] = null);

(statearr_33743_33766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (8))){
var inst_33681 = (state_33722[(9)]);
var inst_33685 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33681,opts);
var state_33722__$1 = state_33722;
if(cljs.core.truth_(inst_33685)){
var statearr_33744_33767 = state_33722__$1;
(statearr_33744_33767[(1)] = (11));

} else {
var statearr_33745_33768 = state_33722__$1;
(statearr_33745_33768[(1)] = (12));

}

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
});})(c__27978__auto___33750,ch))
;
return ((function (switch__27883__auto__,c__27978__auto___33750,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27884__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27884__auto____0 = (function (){
var statearr_33746 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33746[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27884__auto__);

(statearr_33746[(1)] = (1));

return statearr_33746;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27884__auto____1 = (function (state_33722){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_33722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e33747){if((e33747 instanceof Object)){
var ex__27887__auto__ = e33747;
var statearr_33748_33769 = state_33722;
(statearr_33748_33769[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33770 = state_33722;
state_33722 = G__33770;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27884__auto__ = function(state_33722){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27884__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27884__auto____1.call(this,state_33722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27884__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27884__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto___33750,ch))
})();
var state__27980__auto__ = (function (){var statearr_33749 = f__27979__auto__.call(null);
(statearr_33749[(6)] = c__27978__auto___33750);

return statearr_33749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto___33750,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33771_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33771_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33777 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33777){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33773 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33774 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33775 = true;
var _STAR_print_fn_STAR__temp_val__33776 = ((function (_STAR_print_newline_STAR__orig_val__33773,_STAR_print_fn_STAR__orig_val__33774,_STAR_print_newline_STAR__temp_val__33775,sb,base_path_33777){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__33773,_STAR_print_fn_STAR__orig_val__33774,_STAR_print_newline_STAR__temp_val__33775,sb,base_path_33777))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33775;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33776;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33774;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33773;
}}catch (e33772){if((e33772 instanceof Error)){
var e = e33772;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33777], null));
} else {
var e = e33772;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33777))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33778){
var map__33779 = p__33778;
var map__33779__$1 = (((((!((map__33779 == null))))?(((((map__33779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33779):map__33779);
var opts = map__33779__$1;
var build_id = cljs.core.get.call(null,map__33779__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33779,map__33779__$1,opts,build_id){
return (function (p__33781){
var vec__33782 = p__33781;
var seq__33783 = cljs.core.seq.call(null,vec__33782);
var first__33784 = cljs.core.first.call(null,seq__33783);
var seq__33783__$1 = cljs.core.next.call(null,seq__33783);
var map__33785 = first__33784;
var map__33785__$1 = (((((!((map__33785 == null))))?(((((map__33785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33785):map__33785);
var msg = map__33785__$1;
var msg_name = cljs.core.get.call(null,map__33785__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33783__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33782,seq__33783,first__33784,seq__33783__$1,map__33785,map__33785__$1,msg,msg_name,_,map__33779,map__33779__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33782,seq__33783,first__33784,seq__33783__$1,map__33785,map__33785__$1,msg,msg_name,_,map__33779,map__33779__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33779,map__33779__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33787){
var vec__33788 = p__33787;
var seq__33789 = cljs.core.seq.call(null,vec__33788);
var first__33790 = cljs.core.first.call(null,seq__33789);
var seq__33789__$1 = cljs.core.next.call(null,seq__33789);
var map__33791 = first__33790;
var map__33791__$1 = (((((!((map__33791 == null))))?(((((map__33791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33791):map__33791);
var msg = map__33791__$1;
var msg_name = cljs.core.get.call(null,map__33791__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33789__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33793){
var map__33794 = p__33793;
var map__33794__$1 = (((((!((map__33794 == null))))?(((((map__33794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33794):map__33794);
var on_compile_warning = cljs.core.get.call(null,map__33794__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33794__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33794,map__33794__$1,on_compile_warning,on_compile_fail){
return (function (p__33796){
var vec__33797 = p__33796;
var seq__33798 = cljs.core.seq.call(null,vec__33797);
var first__33799 = cljs.core.first.call(null,seq__33798);
var seq__33798__$1 = cljs.core.next.call(null,seq__33798);
var map__33800 = first__33799;
var map__33800__$1 = (((((!((map__33800 == null))))?(((((map__33800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33800):map__33800);
var msg = map__33800__$1;
var msg_name = cljs.core.get.call(null,map__33800__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33798__$1;
var pred__33802 = cljs.core._EQ_;
var expr__33803 = msg_name;
if(cljs.core.truth_(pred__33802.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33803))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33802.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33803))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33794,map__33794__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto__,msg_hist,msg_names,msg){
return (function (state_33892){
var state_val_33893 = (state_33892[(1)]);
if((state_val_33893 === (7))){
var inst_33812 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
if(cljs.core.truth_(inst_33812)){
var statearr_33894_33941 = state_33892__$1;
(statearr_33894_33941[(1)] = (8));

} else {
var statearr_33895_33942 = state_33892__$1;
(statearr_33895_33942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (20))){
var inst_33886 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33896_33943 = state_33892__$1;
(statearr_33896_33943[(2)] = inst_33886);

(statearr_33896_33943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (27))){
var inst_33882 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33897_33944 = state_33892__$1;
(statearr_33897_33944[(2)] = inst_33882);

(statearr_33897_33944[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (1))){
var inst_33805 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33892__$1 = state_33892;
if(cljs.core.truth_(inst_33805)){
var statearr_33898_33945 = state_33892__$1;
(statearr_33898_33945[(1)] = (2));

} else {
var statearr_33899_33946 = state_33892__$1;
(statearr_33899_33946[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (24))){
var inst_33884 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33900_33947 = state_33892__$1;
(statearr_33900_33947[(2)] = inst_33884);

(statearr_33900_33947[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (4))){
var inst_33890 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33892__$1,inst_33890);
} else {
if((state_val_33893 === (15))){
var inst_33888 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33901_33948 = state_33892__$1;
(statearr_33901_33948[(2)] = inst_33888);

(statearr_33901_33948[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (21))){
var inst_33841 = (state_33892[(2)]);
var inst_33842 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33843 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33842);
var state_33892__$1 = (function (){var statearr_33902 = state_33892;
(statearr_33902[(7)] = inst_33841);

return statearr_33902;
})();
var statearr_33903_33949 = state_33892__$1;
(statearr_33903_33949[(2)] = inst_33843);

(statearr_33903_33949[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (31))){
var inst_33871 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33892__$1 = state_33892;
if(inst_33871){
var statearr_33904_33950 = state_33892__$1;
(statearr_33904_33950[(1)] = (34));

} else {
var statearr_33905_33951 = state_33892__$1;
(statearr_33905_33951[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (32))){
var inst_33880 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33906_33952 = state_33892__$1;
(statearr_33906_33952[(2)] = inst_33880);

(statearr_33906_33952[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (33))){
var inst_33867 = (state_33892[(2)]);
var inst_33868 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33869 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33868);
var state_33892__$1 = (function (){var statearr_33907 = state_33892;
(statearr_33907[(8)] = inst_33867);

return statearr_33907;
})();
var statearr_33908_33953 = state_33892__$1;
(statearr_33908_33953[(2)] = inst_33869);

(statearr_33908_33953[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (13))){
var inst_33826 = figwheel.client.heads_up.clear.call(null);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(16),inst_33826);
} else {
if((state_val_33893 === (22))){
var inst_33847 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33848 = figwheel.client.heads_up.append_warning_message.call(null,inst_33847);
var state_33892__$1 = state_33892;
var statearr_33909_33954 = state_33892__$1;
(statearr_33909_33954[(2)] = inst_33848);

(statearr_33909_33954[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (36))){
var inst_33878 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33910_33955 = state_33892__$1;
(statearr_33910_33955[(2)] = inst_33878);

(statearr_33910_33955[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (29))){
var inst_33858 = (state_33892[(2)]);
var inst_33859 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33860 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33859);
var state_33892__$1 = (function (){var statearr_33911 = state_33892;
(statearr_33911[(9)] = inst_33858);

return statearr_33911;
})();
var statearr_33912_33956 = state_33892__$1;
(statearr_33912_33956[(2)] = inst_33860);

(statearr_33912_33956[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (6))){
var inst_33807 = (state_33892[(10)]);
var state_33892__$1 = state_33892;
var statearr_33913_33957 = state_33892__$1;
(statearr_33913_33957[(2)] = inst_33807);

(statearr_33913_33957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (28))){
var inst_33854 = (state_33892[(2)]);
var inst_33855 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33856 = figwheel.client.heads_up.display_warning.call(null,inst_33855);
var state_33892__$1 = (function (){var statearr_33914 = state_33892;
(statearr_33914[(11)] = inst_33854);

return statearr_33914;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(29),inst_33856);
} else {
if((state_val_33893 === (25))){
var inst_33852 = figwheel.client.heads_up.clear.call(null);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(28),inst_33852);
} else {
if((state_val_33893 === (34))){
var inst_33873 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(37),inst_33873);
} else {
if((state_val_33893 === (17))){
var inst_33832 = (state_33892[(2)]);
var inst_33833 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33834 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33833);
var state_33892__$1 = (function (){var statearr_33915 = state_33892;
(statearr_33915[(12)] = inst_33832);

return statearr_33915;
})();
var statearr_33916_33958 = state_33892__$1;
(statearr_33916_33958[(2)] = inst_33834);

(statearr_33916_33958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (3))){
var inst_33824 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33892__$1 = state_33892;
if(inst_33824){
var statearr_33917_33959 = state_33892__$1;
(statearr_33917_33959[(1)] = (13));

} else {
var statearr_33918_33960 = state_33892__$1;
(statearr_33918_33960[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (12))){
var inst_33820 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33919_33961 = state_33892__$1;
(statearr_33919_33961[(2)] = inst_33820);

(statearr_33919_33961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (2))){
var inst_33807 = (state_33892[(10)]);
var inst_33807__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33892__$1 = (function (){var statearr_33920 = state_33892;
(statearr_33920[(10)] = inst_33807__$1);

return statearr_33920;
})();
if(cljs.core.truth_(inst_33807__$1)){
var statearr_33921_33962 = state_33892__$1;
(statearr_33921_33962[(1)] = (5));

} else {
var statearr_33922_33963 = state_33892__$1;
(statearr_33922_33963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (23))){
var inst_33850 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33892__$1 = state_33892;
if(inst_33850){
var statearr_33923_33964 = state_33892__$1;
(statearr_33923_33964[(1)] = (25));

} else {
var statearr_33924_33965 = state_33892__$1;
(statearr_33924_33965[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (35))){
var state_33892__$1 = state_33892;
var statearr_33925_33966 = state_33892__$1;
(statearr_33925_33966[(2)] = null);

(statearr_33925_33966[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (19))){
var inst_33845 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33892__$1 = state_33892;
if(inst_33845){
var statearr_33926_33967 = state_33892__$1;
(statearr_33926_33967[(1)] = (22));

} else {
var statearr_33927_33968 = state_33892__$1;
(statearr_33927_33968[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (11))){
var inst_33816 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33928_33969 = state_33892__$1;
(statearr_33928_33969[(2)] = inst_33816);

(statearr_33928_33969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (9))){
var inst_33818 = figwheel.client.heads_up.clear.call(null);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(12),inst_33818);
} else {
if((state_val_33893 === (5))){
var inst_33809 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33892__$1 = state_33892;
var statearr_33929_33970 = state_33892__$1;
(statearr_33929_33970[(2)] = inst_33809);

(statearr_33929_33970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (14))){
var inst_33836 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33892__$1 = state_33892;
if(inst_33836){
var statearr_33930_33971 = state_33892__$1;
(statearr_33930_33971[(1)] = (18));

} else {
var statearr_33931_33972 = state_33892__$1;
(statearr_33931_33972[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (26))){
var inst_33862 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33892__$1 = state_33892;
if(inst_33862){
var statearr_33932_33973 = state_33892__$1;
(statearr_33932_33973[(1)] = (30));

} else {
var statearr_33933_33974 = state_33892__$1;
(statearr_33933_33974[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (16))){
var inst_33828 = (state_33892[(2)]);
var inst_33829 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33830 = figwheel.client.heads_up.display_exception.call(null,inst_33829);
var state_33892__$1 = (function (){var statearr_33934 = state_33892;
(statearr_33934[(13)] = inst_33828);

return statearr_33934;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(17),inst_33830);
} else {
if((state_val_33893 === (30))){
var inst_33864 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33865 = figwheel.client.heads_up.display_warning.call(null,inst_33864);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(33),inst_33865);
} else {
if((state_val_33893 === (10))){
var inst_33822 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33935_33975 = state_33892__$1;
(statearr_33935_33975[(2)] = inst_33822);

(statearr_33935_33975[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (18))){
var inst_33838 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33839 = figwheel.client.heads_up.display_exception.call(null,inst_33838);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(21),inst_33839);
} else {
if((state_val_33893 === (37))){
var inst_33875 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33936_33976 = state_33892__$1;
(statearr_33936_33976[(2)] = inst_33875);

(statearr_33936_33976[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (8))){
var inst_33814 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(11),inst_33814);
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
});})(c__27978__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27883__auto__,c__27978__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27884__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27884__auto____0 = (function (){
var statearr_33937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33937[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27884__auto__);

(statearr_33937[(1)] = (1));

return statearr_33937;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27884__auto____1 = (function (state_33892){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_33892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e33938){if((e33938 instanceof Object)){
var ex__27887__auto__ = e33938;
var statearr_33939_33977 = state_33892;
(statearr_33939_33977[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33978 = state_33892;
state_33892 = G__33978;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27884__auto__ = function(state_33892){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27884__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27884__auto____1.call(this,state_33892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27884__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27884__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto__,msg_hist,msg_names,msg))
})();
var state__27980__auto__ = (function (){var statearr_33940 = f__27979__auto__.call(null);
(statearr_33940[(6)] = c__27978__auto__);

return statearr_33940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto__,msg_hist,msg_names,msg))
);

return c__27978__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27978__auto___34007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto___34007,ch){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto___34007,ch){
return (function (state_33993){
var state_val_33994 = (state_33993[(1)]);
if((state_val_33994 === (1))){
var state_33993__$1 = state_33993;
var statearr_33995_34008 = state_33993__$1;
(statearr_33995_34008[(2)] = null);

(statearr_33995_34008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (2))){
var state_33993__$1 = state_33993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33993__$1,(4),ch);
} else {
if((state_val_33994 === (3))){
var inst_33991 = (state_33993[(2)]);
var state_33993__$1 = state_33993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33993__$1,inst_33991);
} else {
if((state_val_33994 === (4))){
var inst_33981 = (state_33993[(7)]);
var inst_33981__$1 = (state_33993[(2)]);
var state_33993__$1 = (function (){var statearr_33996 = state_33993;
(statearr_33996[(7)] = inst_33981__$1);

return statearr_33996;
})();
if(cljs.core.truth_(inst_33981__$1)){
var statearr_33997_34009 = state_33993__$1;
(statearr_33997_34009[(1)] = (5));

} else {
var statearr_33998_34010 = state_33993__$1;
(statearr_33998_34010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (5))){
var inst_33981 = (state_33993[(7)]);
var inst_33983 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33981);
var state_33993__$1 = state_33993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33993__$1,(8),inst_33983);
} else {
if((state_val_33994 === (6))){
var state_33993__$1 = state_33993;
var statearr_33999_34011 = state_33993__$1;
(statearr_33999_34011[(2)] = null);

(statearr_33999_34011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (7))){
var inst_33989 = (state_33993[(2)]);
var state_33993__$1 = state_33993;
var statearr_34000_34012 = state_33993__$1;
(statearr_34000_34012[(2)] = inst_33989);

(statearr_34000_34012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (8))){
var inst_33985 = (state_33993[(2)]);
var state_33993__$1 = (function (){var statearr_34001 = state_33993;
(statearr_34001[(8)] = inst_33985);

return statearr_34001;
})();
var statearr_34002_34013 = state_33993__$1;
(statearr_34002_34013[(2)] = null);

(statearr_34002_34013[(1)] = (2));


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
});})(c__27978__auto___34007,ch))
;
return ((function (switch__27883__auto__,c__27978__auto___34007,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27884__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27884__auto____0 = (function (){
var statearr_34003 = [null,null,null,null,null,null,null,null,null];
(statearr_34003[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27884__auto__);

(statearr_34003[(1)] = (1));

return statearr_34003;
});
var figwheel$client$heads_up_plugin_$_state_machine__27884__auto____1 = (function (state_33993){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_33993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e34004){if((e34004 instanceof Object)){
var ex__27887__auto__ = e34004;
var statearr_34005_34014 = state_33993;
(statearr_34005_34014[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34015 = state_33993;
state_33993 = G__34015;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27884__auto__ = function(state_33993){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27884__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27884__auto____1.call(this,state_33993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27884__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27884__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto___34007,ch))
})();
var state__27980__auto__ = (function (){var statearr_34006 = f__27979__auto__.call(null);
(statearr_34006[(6)] = c__27978__auto___34007);

return statearr_34006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto___34007,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto__){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto__){
return (function (state_34021){
var state_val_34022 = (state_34021[(1)]);
if((state_val_34022 === (1))){
var inst_34016 = cljs.core.async.timeout.call(null,(3000));
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34021__$1,(2),inst_34016);
} else {
if((state_val_34022 === (2))){
var inst_34018 = (state_34021[(2)]);
var inst_34019 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34021__$1 = (function (){var statearr_34023 = state_34021;
(statearr_34023[(7)] = inst_34018);

return statearr_34023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34021__$1,inst_34019);
} else {
return null;
}
}
});})(c__27978__auto__))
;
return ((function (switch__27883__auto__,c__27978__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27884__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27884__auto____0 = (function (){
var statearr_34024 = [null,null,null,null,null,null,null,null];
(statearr_34024[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27884__auto__);

(statearr_34024[(1)] = (1));

return statearr_34024;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27884__auto____1 = (function (state_34021){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_34021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e34025){if((e34025 instanceof Object)){
var ex__27887__auto__ = e34025;
var statearr_34026_34028 = state_34021;
(statearr_34026_34028[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34029 = state_34021;
state_34021 = G__34029;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27884__auto__ = function(state_34021){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27884__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27884__auto____1.call(this,state_34021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27884__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27884__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto__))
})();
var state__27980__auto__ = (function (){var statearr_34027 = f__27979__auto__.call(null);
(statearr_34027[(6)] = c__27978__auto__);

return statearr_34027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto__))
);

return c__27978__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto__,figwheel_version,temp__5720__auto__){
return (function (state_34036){
var state_val_34037 = (state_34036[(1)]);
if((state_val_34037 === (1))){
var inst_34030 = cljs.core.async.timeout.call(null,(2000));
var state_34036__$1 = state_34036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34036__$1,(2),inst_34030);
} else {
if((state_val_34037 === (2))){
var inst_34032 = (state_34036[(2)]);
var inst_34033 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_34034 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_34033);
var state_34036__$1 = (function (){var statearr_34038 = state_34036;
(statearr_34038[(7)] = inst_34032);

return statearr_34038;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34036__$1,inst_34034);
} else {
return null;
}
}
});})(c__27978__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__27883__auto__,c__27978__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27884__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27884__auto____0 = (function (){
var statearr_34039 = [null,null,null,null,null,null,null,null];
(statearr_34039[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27884__auto__);

(statearr_34039[(1)] = (1));

return statearr_34039;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27884__auto____1 = (function (state_34036){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_34036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e34040){if((e34040 instanceof Object)){
var ex__27887__auto__ = e34040;
var statearr_34041_34043 = state_34036;
(statearr_34041_34043[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34044 = state_34036;
state_34036 = G__34044;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27884__auto__ = function(state_34036){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27884__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27884__auto____1.call(this,state_34036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27884__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27884__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto__,figwheel_version,temp__5720__auto__))
})();
var state__27980__auto__ = (function (){var statearr_34042 = f__27979__auto__.call(null);
(statearr_34042[(6)] = c__27978__auto__);

return statearr_34042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto__,figwheel_version,temp__5720__auto__))
);

return c__27978__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__34045){
var map__34046 = p__34045;
var map__34046__$1 = (((((!((map__34046 == null))))?(((((map__34046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34046):map__34046);
var file = cljs.core.get.call(null,map__34046__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34046__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34046__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34048 = "";
var G__34048__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34048),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__34048);
var G__34048__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34048__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__34048__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34048__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__34048__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34049){
var map__34050 = p__34049;
var map__34050__$1 = (((((!((map__34050 == null))))?(((((map__34050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34050):map__34050);
var ed = map__34050__$1;
var exception_data = cljs.core.get.call(null,map__34050__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34050__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_34053 = (function (){var G__34052 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34052)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__34052;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_34053);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34054){
var map__34055 = p__34054;
var map__34055__$1 = (((((!((map__34055 == null))))?(((((map__34055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34055):map__34055);
var w = map__34055__$1;
var message = cljs.core.get.call(null,map__34055__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34057 = cljs.core.seq.call(null,plugins);
var chunk__34058 = null;
var count__34059 = (0);
var i__34060 = (0);
while(true){
if((i__34060 < count__34059)){
var vec__34061 = cljs.core._nth.call(null,chunk__34058,i__34060);
var k = cljs.core.nth.call(null,vec__34061,(0),null);
var plugin = cljs.core.nth.call(null,vec__34061,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34067 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34057,chunk__34058,count__34059,i__34060,pl_34067,vec__34061,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34067.call(null,msg_hist);
});})(seq__34057,chunk__34058,count__34059,i__34060,pl_34067,vec__34061,k,plugin))
);
} else {
}


var G__34068 = seq__34057;
var G__34069 = chunk__34058;
var G__34070 = count__34059;
var G__34071 = (i__34060 + (1));
seq__34057 = G__34068;
chunk__34058 = G__34069;
count__34059 = G__34070;
i__34060 = G__34071;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34057);
if(temp__5720__auto__){
var seq__34057__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34057__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__34057__$1);
var G__34072 = cljs.core.chunk_rest.call(null,seq__34057__$1);
var G__34073 = c__4461__auto__;
var G__34074 = cljs.core.count.call(null,c__4461__auto__);
var G__34075 = (0);
seq__34057 = G__34072;
chunk__34058 = G__34073;
count__34059 = G__34074;
i__34060 = G__34075;
continue;
} else {
var vec__34064 = cljs.core.first.call(null,seq__34057__$1);
var k = cljs.core.nth.call(null,vec__34064,(0),null);
var plugin = cljs.core.nth.call(null,vec__34064,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34076 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34057,chunk__34058,count__34059,i__34060,pl_34076,vec__34064,k,plugin,seq__34057__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34076.call(null,msg_hist);
});})(seq__34057,chunk__34058,count__34059,i__34060,pl_34076,vec__34064,k,plugin,seq__34057__$1,temp__5720__auto__))
);
} else {
}


var G__34077 = cljs.core.next.call(null,seq__34057__$1);
var G__34078 = null;
var G__34079 = (0);
var G__34080 = (0);
seq__34057 = G__34077;
chunk__34058 = G__34078;
count__34059 = G__34079;
i__34060 = G__34080;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__34082 = arguments.length;
switch (G__34082) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__34083_34088 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__34084_34089 = null;
var count__34085_34090 = (0);
var i__34086_34091 = (0);
while(true){
if((i__34086_34091 < count__34085_34090)){
var msg_34092 = cljs.core._nth.call(null,chunk__34084_34089,i__34086_34091);
figwheel.client.socket.handle_incoming_message.call(null,msg_34092);


var G__34093 = seq__34083_34088;
var G__34094 = chunk__34084_34089;
var G__34095 = count__34085_34090;
var G__34096 = (i__34086_34091 + (1));
seq__34083_34088 = G__34093;
chunk__34084_34089 = G__34094;
count__34085_34090 = G__34095;
i__34086_34091 = G__34096;
continue;
} else {
var temp__5720__auto___34097 = cljs.core.seq.call(null,seq__34083_34088);
if(temp__5720__auto___34097){
var seq__34083_34098__$1 = temp__5720__auto___34097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34083_34098__$1)){
var c__4461__auto___34099 = cljs.core.chunk_first.call(null,seq__34083_34098__$1);
var G__34100 = cljs.core.chunk_rest.call(null,seq__34083_34098__$1);
var G__34101 = c__4461__auto___34099;
var G__34102 = cljs.core.count.call(null,c__4461__auto___34099);
var G__34103 = (0);
seq__34083_34088 = G__34100;
chunk__34084_34089 = G__34101;
count__34085_34090 = G__34102;
i__34086_34091 = G__34103;
continue;
} else {
var msg_34104 = cljs.core.first.call(null,seq__34083_34098__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_34104);


var G__34105 = cljs.core.next.call(null,seq__34083_34098__$1);
var G__34106 = null;
var G__34107 = (0);
var G__34108 = (0);
seq__34083_34088 = G__34105;
chunk__34084_34089 = G__34106;
count__34085_34090 = G__34107;
i__34086_34091 = G__34108;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___34113 = arguments.length;
var i__4642__auto___34114 = (0);
while(true){
if((i__4642__auto___34114 < len__4641__auto___34113)){
args__4647__auto__.push((arguments[i__4642__auto___34114]));

var G__34115 = (i__4642__auto___34114 + (1));
i__4642__auto___34114 = G__34115;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34110){
var map__34111 = p__34110;
var map__34111__$1 = (((((!((map__34111 == null))))?(((((map__34111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34111):map__34111);
var opts = map__34111__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34109){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34109));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e34116){if((e34116 instanceof Error)){
var e = e34116;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e34116;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__34117){
var map__34118 = p__34117;
var map__34118__$1 = (((((!((map__34118 == null))))?(((((map__34118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34118):map__34118);
var msg_name = cljs.core.get.call(null,map__34118__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1564575469116
