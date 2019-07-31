// Compiled by ClojureScript 1.10.439 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__25694__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25695__i = 0, G__25695__a = new Array(arguments.length -  0);
while (G__25695__i < G__25695__a.length) {G__25695__a[G__25695__i] = arguments[G__25695__i + 0]; ++G__25695__i;}
  args = new cljs.core.IndexedSeq(G__25695__a,0,null);
} 
return G__25694__delegate.call(this,args);};
G__25694.cljs$lang$maxFixedArity = 0;
G__25694.cljs$lang$applyTo = (function (arglist__25696){
var args = cljs.core.seq(arglist__25696);
return G__25694__delegate(args);
});
G__25694.cljs$core$IFn$_invoke$arity$variadic = G__25694__delegate;
return G__25694;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__25697__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25698__i = 0, G__25698__a = new Array(arguments.length -  0);
while (G__25698__i < G__25698__a.length) {G__25698__a[G__25698__i] = arguments[G__25698__i + 0]; ++G__25698__i;}
  args = new cljs.core.IndexedSeq(G__25698__a,0,null);
} 
return G__25697__delegate.call(this,args);};
G__25697.cljs$lang$maxFixedArity = 0;
G__25697.cljs$lang$applyTo = (function (arglist__25699){
var args = cljs.core.seq(arglist__25699);
return G__25697__delegate(args);
});
G__25697.cljs$core$IFn$_invoke$arity$variadic = G__25697__delegate;
return G__25697;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1564575448073
