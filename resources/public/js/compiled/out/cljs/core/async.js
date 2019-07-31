// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28038 = arguments.length;
switch (G__28038) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28039 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28039 = (function (f,blockable,meta28040){
this.f = f;
this.blockable = blockable;
this.meta28040 = meta28040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28041,meta28040__$1){
var self__ = this;
var _28041__$1 = this;
return (new cljs.core.async.t_cljs$core$async28039(self__.f,self__.blockable,meta28040__$1));
});

cljs.core.async.t_cljs$core$async28039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28041){
var self__ = this;
var _28041__$1 = this;
return self__.meta28040;
});

cljs.core.async.t_cljs$core$async28039.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28039.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28040","meta28040",-1702016895,null)], null);
});

cljs.core.async.t_cljs$core$async28039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28039";

cljs.core.async.t_cljs$core$async28039.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28039");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28039.
 */
cljs.core.async.__GT_t_cljs$core$async28039 = (function cljs$core$async$__GT_t_cljs$core$async28039(f__$1,blockable__$1,meta28040){
return (new cljs.core.async.t_cljs$core$async28039(f__$1,blockable__$1,meta28040));
});

}

return (new cljs.core.async.t_cljs$core$async28039(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28045 = arguments.length;
switch (G__28045) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28048 = arguments.length;
switch (G__28048) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28051 = arguments.length;
switch (G__28051) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28053 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28053);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28053,ret){
return (function (){
return fn1.call(null,val_28053);
});})(val_28053,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28055 = arguments.length;
switch (G__28055) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___28057 = n;
var x_28058 = (0);
while(true){
if((x_28058 < n__4518__auto___28057)){
(a[x_28058] = (0));

var G__28059 = (x_28058 + (1));
x_28058 = G__28059;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28060 = (i + (1));
i = G__28060;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28061 = (function (flag,meta28062){
this.flag = flag;
this.meta28062 = meta28062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28063,meta28062__$1){
var self__ = this;
var _28063__$1 = this;
return (new cljs.core.async.t_cljs$core$async28061(self__.flag,meta28062__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28063){
var self__ = this;
var _28063__$1 = this;
return self__.meta28062;
});})(flag))
;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28061.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28062","meta28062",2037030123,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28061";

cljs.core.async.t_cljs$core$async28061.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28061");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28061.
 */
cljs.core.async.__GT_t_cljs$core$async28061 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28061(flag__$1,meta28062){
return (new cljs.core.async.t_cljs$core$async28061(flag__$1,meta28062));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28061(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28064 = (function (flag,cb,meta28065){
this.flag = flag;
this.cb = cb;
this.meta28065 = meta28065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28066,meta28065__$1){
var self__ = this;
var _28066__$1 = this;
return (new cljs.core.async.t_cljs$core$async28064(self__.flag,self__.cb,meta28065__$1));
});

cljs.core.async.t_cljs$core$async28064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28066){
var self__ = this;
var _28066__$1 = this;
return self__.meta28065;
});

cljs.core.async.t_cljs$core$async28064.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28064.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28065","meta28065",-1903069486,null)], null);
});

cljs.core.async.t_cljs$core$async28064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28064";

cljs.core.async.t_cljs$core$async28064.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28064");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28064.
 */
cljs.core.async.__GT_t_cljs$core$async28064 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28064(flag__$1,cb__$1,meta28065){
return (new cljs.core.async.t_cljs$core$async28064(flag__$1,cb__$1,meta28065));
});

}

return (new cljs.core.async.t_cljs$core$async28064(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28067_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28067_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28068_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28068_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28069 = (i + (1));
i = G__28069;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28075 = arguments.length;
var i__4642__auto___28076 = (0);
while(true){
if((i__4642__auto___28076 < len__4641__auto___28075)){
args__4647__auto__.push((arguments[i__4642__auto___28076]));

var G__28077 = (i__4642__auto___28076 + (1));
i__4642__auto___28076 = G__28077;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28072){
var map__28073 = p__28072;
var map__28073__$1 = (((((!((map__28073 == null))))?(((((map__28073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28073):map__28073);
var opts = map__28073__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28070){
var G__28071 = cljs.core.first.call(null,seq28070);
var seq28070__$1 = cljs.core.next.call(null,seq28070);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28071,seq28070__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28079 = arguments.length;
switch (G__28079) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27978__auto___28125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto___28125){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto___28125){
return (function (state_28103){
var state_val_28104 = (state_28103[(1)]);
if((state_val_28104 === (7))){
var inst_28099 = (state_28103[(2)]);
var state_28103__$1 = state_28103;
var statearr_28105_28126 = state_28103__$1;
(statearr_28105_28126[(2)] = inst_28099);

(statearr_28105_28126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (1))){
var state_28103__$1 = state_28103;
var statearr_28106_28127 = state_28103__$1;
(statearr_28106_28127[(2)] = null);

(statearr_28106_28127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (4))){
var inst_28082 = (state_28103[(7)]);
var inst_28082__$1 = (state_28103[(2)]);
var inst_28083 = (inst_28082__$1 == null);
var state_28103__$1 = (function (){var statearr_28107 = state_28103;
(statearr_28107[(7)] = inst_28082__$1);

return statearr_28107;
})();
if(cljs.core.truth_(inst_28083)){
var statearr_28108_28128 = state_28103__$1;
(statearr_28108_28128[(1)] = (5));

} else {
var statearr_28109_28129 = state_28103__$1;
(statearr_28109_28129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (13))){
var state_28103__$1 = state_28103;
var statearr_28110_28130 = state_28103__$1;
(statearr_28110_28130[(2)] = null);

(statearr_28110_28130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (6))){
var inst_28082 = (state_28103[(7)]);
var state_28103__$1 = state_28103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28103__$1,(11),to,inst_28082);
} else {
if((state_val_28104 === (3))){
var inst_28101 = (state_28103[(2)]);
var state_28103__$1 = state_28103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28103__$1,inst_28101);
} else {
if((state_val_28104 === (12))){
var state_28103__$1 = state_28103;
var statearr_28111_28131 = state_28103__$1;
(statearr_28111_28131[(2)] = null);

(statearr_28111_28131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (2))){
var state_28103__$1 = state_28103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28103__$1,(4),from);
} else {
if((state_val_28104 === (11))){
var inst_28092 = (state_28103[(2)]);
var state_28103__$1 = state_28103;
if(cljs.core.truth_(inst_28092)){
var statearr_28112_28132 = state_28103__$1;
(statearr_28112_28132[(1)] = (12));

} else {
var statearr_28113_28133 = state_28103__$1;
(statearr_28113_28133[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (9))){
var state_28103__$1 = state_28103;
var statearr_28114_28134 = state_28103__$1;
(statearr_28114_28134[(2)] = null);

(statearr_28114_28134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (5))){
var state_28103__$1 = state_28103;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28115_28135 = state_28103__$1;
(statearr_28115_28135[(1)] = (8));

} else {
var statearr_28116_28136 = state_28103__$1;
(statearr_28116_28136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (14))){
var inst_28097 = (state_28103[(2)]);
var state_28103__$1 = state_28103;
var statearr_28117_28137 = state_28103__$1;
(statearr_28117_28137[(2)] = inst_28097);

(statearr_28117_28137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (10))){
var inst_28089 = (state_28103[(2)]);
var state_28103__$1 = state_28103;
var statearr_28118_28138 = state_28103__$1;
(statearr_28118_28138[(2)] = inst_28089);

(statearr_28118_28138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28104 === (8))){
var inst_28086 = cljs.core.async.close_BANG_.call(null,to);
var state_28103__$1 = state_28103;
var statearr_28119_28139 = state_28103__$1;
(statearr_28119_28139[(2)] = inst_28086);

(statearr_28119_28139[(1)] = (10));


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
});})(c__27978__auto___28125))
;
return ((function (switch__27883__auto__,c__27978__auto___28125){
return (function() {
var cljs$core$async$state_machine__27884__auto__ = null;
var cljs$core$async$state_machine__27884__auto____0 = (function (){
var statearr_28120 = [null,null,null,null,null,null,null,null];
(statearr_28120[(0)] = cljs$core$async$state_machine__27884__auto__);

(statearr_28120[(1)] = (1));

return statearr_28120;
});
var cljs$core$async$state_machine__27884__auto____1 = (function (state_28103){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_28103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e28121){if((e28121 instanceof Object)){
var ex__27887__auto__ = e28121;
var statearr_28122_28140 = state_28103;
(statearr_28122_28140[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28141 = state_28103;
state_28103 = G__28141;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$state_machine__27884__auto__ = function(state_28103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27884__auto____1.call(this,state_28103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27884__auto____0;
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27884__auto____1;
return cljs$core$async$state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto___28125))
})();
var state__27980__auto__ = (function (){var statearr_28123 = f__27979__auto__.call(null);
(statearr_28123[(6)] = c__27978__auto___28125);

return statearr_28123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto___28125))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28142){
var vec__28143 = p__28142;
var v = cljs.core.nth.call(null,vec__28143,(0),null);
var p = cljs.core.nth.call(null,vec__28143,(1),null);
var job = vec__28143;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27978__auto___28314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto___28314,res,vec__28143,v,p,job,jobs,results){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto___28314,res,vec__28143,v,p,job,jobs,results){
return (function (state_28150){
var state_val_28151 = (state_28150[(1)]);
if((state_val_28151 === (1))){
var state_28150__$1 = state_28150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28150__$1,(2),res,v);
} else {
if((state_val_28151 === (2))){
var inst_28147 = (state_28150[(2)]);
var inst_28148 = cljs.core.async.close_BANG_.call(null,res);
var state_28150__$1 = (function (){var statearr_28152 = state_28150;
(statearr_28152[(7)] = inst_28147);

return statearr_28152;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28150__$1,inst_28148);
} else {
return null;
}
}
});})(c__27978__auto___28314,res,vec__28143,v,p,job,jobs,results))
;
return ((function (switch__27883__auto__,c__27978__auto___28314,res,vec__28143,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____0 = (function (){
var statearr_28153 = [null,null,null,null,null,null,null,null];
(statearr_28153[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__);

(statearr_28153[(1)] = (1));

return statearr_28153;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____1 = (function (state_28150){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_28150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e28154){if((e28154 instanceof Object)){
var ex__27887__auto__ = e28154;
var statearr_28155_28315 = state_28150;
(statearr_28155_28315[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28316 = state_28150;
state_28150 = G__28316;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__ = function(state_28150){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____1.call(this,state_28150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto___28314,res,vec__28143,v,p,job,jobs,results))
})();
var state__27980__auto__ = (function (){var statearr_28156 = f__27979__auto__.call(null);
(statearr_28156[(6)] = c__27978__auto___28314);

return statearr_28156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto___28314,res,vec__28143,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28157){
var vec__28158 = p__28157;
var v = cljs.core.nth.call(null,vec__28158,(0),null);
var p = cljs.core.nth.call(null,vec__28158,(1),null);
var job = vec__28158;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___28317 = n;
var __28318 = (0);
while(true){
if((__28318 < n__4518__auto___28317)){
var G__28161_28319 = type;
var G__28161_28320__$1 = (((G__28161_28319 instanceof cljs.core.Keyword))?G__28161_28319.fqn:null);
switch (G__28161_28320__$1) {
case "compute":
var c__27978__auto___28322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28318,c__27978__auto___28322,G__28161_28319,G__28161_28320__$1,n__4518__auto___28317,jobs,results,process,async){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (__28318,c__27978__auto___28322,G__28161_28319,G__28161_28320__$1,n__4518__auto___28317,jobs,results,process,async){
return (function (state_28174){
var state_val_28175 = (state_28174[(1)]);
if((state_val_28175 === (1))){
var state_28174__$1 = state_28174;
var statearr_28176_28323 = state_28174__$1;
(statearr_28176_28323[(2)] = null);

(statearr_28176_28323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (2))){
var state_28174__$1 = state_28174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28174__$1,(4),jobs);
} else {
if((state_val_28175 === (3))){
var inst_28172 = (state_28174[(2)]);
var state_28174__$1 = state_28174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28174__$1,inst_28172);
} else {
if((state_val_28175 === (4))){
var inst_28164 = (state_28174[(2)]);
var inst_28165 = process.call(null,inst_28164);
var state_28174__$1 = state_28174;
if(cljs.core.truth_(inst_28165)){
var statearr_28177_28324 = state_28174__$1;
(statearr_28177_28324[(1)] = (5));

} else {
var statearr_28178_28325 = state_28174__$1;
(statearr_28178_28325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (5))){
var state_28174__$1 = state_28174;
var statearr_28179_28326 = state_28174__$1;
(statearr_28179_28326[(2)] = null);

(statearr_28179_28326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (6))){
var state_28174__$1 = state_28174;
var statearr_28180_28327 = state_28174__$1;
(statearr_28180_28327[(2)] = null);

(statearr_28180_28327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (7))){
var inst_28170 = (state_28174[(2)]);
var state_28174__$1 = state_28174;
var statearr_28181_28328 = state_28174__$1;
(statearr_28181_28328[(2)] = inst_28170);

(statearr_28181_28328[(1)] = (3));


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
});})(__28318,c__27978__auto___28322,G__28161_28319,G__28161_28320__$1,n__4518__auto___28317,jobs,results,process,async))
;
return ((function (__28318,switch__27883__auto__,c__27978__auto___28322,G__28161_28319,G__28161_28320__$1,n__4518__auto___28317,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____0 = (function (){
var statearr_28182 = [null,null,null,null,null,null,null];
(statearr_28182[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__);

(statearr_28182[(1)] = (1));

return statearr_28182;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____1 = (function (state_28174){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_28174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e28183){if((e28183 instanceof Object)){
var ex__27887__auto__ = e28183;
var statearr_28184_28329 = state_28174;
(statearr_28184_28329[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28330 = state_28174;
state_28174 = G__28330;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__ = function(state_28174){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____1.call(this,state_28174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__;
})()
;})(__28318,switch__27883__auto__,c__27978__auto___28322,G__28161_28319,G__28161_28320__$1,n__4518__auto___28317,jobs,results,process,async))
})();
var state__27980__auto__ = (function (){var statearr_28185 = f__27979__auto__.call(null);
(statearr_28185[(6)] = c__27978__auto___28322);

return statearr_28185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(__28318,c__27978__auto___28322,G__28161_28319,G__28161_28320__$1,n__4518__auto___28317,jobs,results,process,async))
);


break;
case "async":
var c__27978__auto___28331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28318,c__27978__auto___28331,G__28161_28319,G__28161_28320__$1,n__4518__auto___28317,jobs,results,process,async){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (__28318,c__27978__auto___28331,G__28161_28319,G__28161_28320__$1,n__4518__auto___28317,jobs,results,process,async){
return (function (state_28198){
var state_val_28199 = (state_28198[(1)]);
if((state_val_28199 === (1))){
var state_28198__$1 = state_28198;
var statearr_28200_28332 = state_28198__$1;
(statearr_28200_28332[(2)] = null);

(statearr_28200_28332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (2))){
var state_28198__$1 = state_28198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28198__$1,(4),jobs);
} else {
if((state_val_28199 === (3))){
var inst_28196 = (state_28198[(2)]);
var state_28198__$1 = state_28198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28198__$1,inst_28196);
} else {
if((state_val_28199 === (4))){
var inst_28188 = (state_28198[(2)]);
var inst_28189 = async.call(null,inst_28188);
var state_28198__$1 = state_28198;
if(cljs.core.truth_(inst_28189)){
var statearr_28201_28333 = state_28198__$1;
(statearr_28201_28333[(1)] = (5));

} else {
var statearr_28202_28334 = state_28198__$1;
(statearr_28202_28334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (5))){
var state_28198__$1 = state_28198;
var statearr_28203_28335 = state_28198__$1;
(statearr_28203_28335[(2)] = null);

(statearr_28203_28335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (6))){
var state_28198__$1 = state_28198;
var statearr_28204_28336 = state_28198__$1;
(statearr_28204_28336[(2)] = null);

(statearr_28204_28336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (7))){
var inst_28194 = (state_28198[(2)]);
var state_28198__$1 = state_28198;
var statearr_28205_28337 = state_28198__$1;
(statearr_28205_28337[(2)] = inst_28194);

(statearr_28205_28337[(1)] = (3));


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
});})(__28318,c__27978__auto___28331,G__28161_28319,G__28161_28320__$1,n__4518__auto___28317,jobs,results,process,async))
;
return ((function (__28318,switch__27883__auto__,c__27978__auto___28331,G__28161_28319,G__28161_28320__$1,n__4518__auto___28317,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____0 = (function (){
var statearr_28206 = [null,null,null,null,null,null,null];
(statearr_28206[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__);

(statearr_28206[(1)] = (1));

return statearr_28206;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____1 = (function (state_28198){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_28198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e28207){if((e28207 instanceof Object)){
var ex__27887__auto__ = e28207;
var statearr_28208_28338 = state_28198;
(statearr_28208_28338[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28339 = state_28198;
state_28198 = G__28339;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__ = function(state_28198){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____1.call(this,state_28198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__;
})()
;})(__28318,switch__27883__auto__,c__27978__auto___28331,G__28161_28319,G__28161_28320__$1,n__4518__auto___28317,jobs,results,process,async))
})();
var state__27980__auto__ = (function (){var statearr_28209 = f__27979__auto__.call(null);
(statearr_28209[(6)] = c__27978__auto___28331);

return statearr_28209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(__28318,c__27978__auto___28331,G__28161_28319,G__28161_28320__$1,n__4518__auto___28317,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28161_28320__$1)].join('')));

}

var G__28340 = (__28318 + (1));
__28318 = G__28340;
continue;
} else {
}
break;
}

var c__27978__auto___28341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto___28341,jobs,results,process,async){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto___28341,jobs,results,process,async){
return (function (state_28231){
var state_val_28232 = (state_28231[(1)]);
if((state_val_28232 === (7))){
var inst_28227 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28233_28342 = state_28231__$1;
(statearr_28233_28342[(2)] = inst_28227);

(statearr_28233_28342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (1))){
var state_28231__$1 = state_28231;
var statearr_28234_28343 = state_28231__$1;
(statearr_28234_28343[(2)] = null);

(statearr_28234_28343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (4))){
var inst_28212 = (state_28231[(7)]);
var inst_28212__$1 = (state_28231[(2)]);
var inst_28213 = (inst_28212__$1 == null);
var state_28231__$1 = (function (){var statearr_28235 = state_28231;
(statearr_28235[(7)] = inst_28212__$1);

return statearr_28235;
})();
if(cljs.core.truth_(inst_28213)){
var statearr_28236_28344 = state_28231__$1;
(statearr_28236_28344[(1)] = (5));

} else {
var statearr_28237_28345 = state_28231__$1;
(statearr_28237_28345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (6))){
var inst_28212 = (state_28231[(7)]);
var inst_28217 = (state_28231[(8)]);
var inst_28217__$1 = cljs.core.async.chan.call(null,(1));
var inst_28218 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28219 = [inst_28212,inst_28217__$1];
var inst_28220 = (new cljs.core.PersistentVector(null,2,(5),inst_28218,inst_28219,null));
var state_28231__$1 = (function (){var statearr_28238 = state_28231;
(statearr_28238[(8)] = inst_28217__$1);

return statearr_28238;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28231__$1,(8),jobs,inst_28220);
} else {
if((state_val_28232 === (3))){
var inst_28229 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28231__$1,inst_28229);
} else {
if((state_val_28232 === (2))){
var state_28231__$1 = state_28231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28231__$1,(4),from);
} else {
if((state_val_28232 === (9))){
var inst_28224 = (state_28231[(2)]);
var state_28231__$1 = (function (){var statearr_28239 = state_28231;
(statearr_28239[(9)] = inst_28224);

return statearr_28239;
})();
var statearr_28240_28346 = state_28231__$1;
(statearr_28240_28346[(2)] = null);

(statearr_28240_28346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (5))){
var inst_28215 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28231__$1 = state_28231;
var statearr_28241_28347 = state_28231__$1;
(statearr_28241_28347[(2)] = inst_28215);

(statearr_28241_28347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (8))){
var inst_28217 = (state_28231[(8)]);
var inst_28222 = (state_28231[(2)]);
var state_28231__$1 = (function (){var statearr_28242 = state_28231;
(statearr_28242[(10)] = inst_28222);

return statearr_28242;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28231__$1,(9),results,inst_28217);
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
});})(c__27978__auto___28341,jobs,results,process,async))
;
return ((function (switch__27883__auto__,c__27978__auto___28341,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____0 = (function (){
var statearr_28243 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28243[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__);

(statearr_28243[(1)] = (1));

return statearr_28243;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____1 = (function (state_28231){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_28231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e28244){if((e28244 instanceof Object)){
var ex__27887__auto__ = e28244;
var statearr_28245_28348 = state_28231;
(statearr_28245_28348[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28349 = state_28231;
state_28231 = G__28349;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__ = function(state_28231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____1.call(this,state_28231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto___28341,jobs,results,process,async))
})();
var state__27980__auto__ = (function (){var statearr_28246 = f__27979__auto__.call(null);
(statearr_28246[(6)] = c__27978__auto___28341);

return statearr_28246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto___28341,jobs,results,process,async))
);


var c__27978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto__,jobs,results,process,async){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto__,jobs,results,process,async){
return (function (state_28284){
var state_val_28285 = (state_28284[(1)]);
if((state_val_28285 === (7))){
var inst_28280 = (state_28284[(2)]);
var state_28284__$1 = state_28284;
var statearr_28286_28350 = state_28284__$1;
(statearr_28286_28350[(2)] = inst_28280);

(statearr_28286_28350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28285 === (20))){
var state_28284__$1 = state_28284;
var statearr_28287_28351 = state_28284__$1;
(statearr_28287_28351[(2)] = null);

(statearr_28287_28351[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28285 === (1))){
var state_28284__$1 = state_28284;
var statearr_28288_28352 = state_28284__$1;
(statearr_28288_28352[(2)] = null);

(statearr_28288_28352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28285 === (4))){
var inst_28249 = (state_28284[(7)]);
var inst_28249__$1 = (state_28284[(2)]);
var inst_28250 = (inst_28249__$1 == null);
var state_28284__$1 = (function (){var statearr_28289 = state_28284;
(statearr_28289[(7)] = inst_28249__$1);

return statearr_28289;
})();
if(cljs.core.truth_(inst_28250)){
var statearr_28290_28353 = state_28284__$1;
(statearr_28290_28353[(1)] = (5));

} else {
var statearr_28291_28354 = state_28284__$1;
(statearr_28291_28354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28285 === (15))){
var inst_28262 = (state_28284[(8)]);
var state_28284__$1 = state_28284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28284__$1,(18),to,inst_28262);
} else {
if((state_val_28285 === (21))){
var inst_28275 = (state_28284[(2)]);
var state_28284__$1 = state_28284;
var statearr_28292_28355 = state_28284__$1;
(statearr_28292_28355[(2)] = inst_28275);

(statearr_28292_28355[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28285 === (13))){
var inst_28277 = (state_28284[(2)]);
var state_28284__$1 = (function (){var statearr_28293 = state_28284;
(statearr_28293[(9)] = inst_28277);

return statearr_28293;
})();
var statearr_28294_28356 = state_28284__$1;
(statearr_28294_28356[(2)] = null);

(statearr_28294_28356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28285 === (6))){
var inst_28249 = (state_28284[(7)]);
var state_28284__$1 = state_28284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28284__$1,(11),inst_28249);
} else {
if((state_val_28285 === (17))){
var inst_28270 = (state_28284[(2)]);
var state_28284__$1 = state_28284;
if(cljs.core.truth_(inst_28270)){
var statearr_28295_28357 = state_28284__$1;
(statearr_28295_28357[(1)] = (19));

} else {
var statearr_28296_28358 = state_28284__$1;
(statearr_28296_28358[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28285 === (3))){
var inst_28282 = (state_28284[(2)]);
var state_28284__$1 = state_28284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28284__$1,inst_28282);
} else {
if((state_val_28285 === (12))){
var inst_28259 = (state_28284[(10)]);
var state_28284__$1 = state_28284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28284__$1,(14),inst_28259);
} else {
if((state_val_28285 === (2))){
var state_28284__$1 = state_28284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28284__$1,(4),results);
} else {
if((state_val_28285 === (19))){
var state_28284__$1 = state_28284;
var statearr_28297_28359 = state_28284__$1;
(statearr_28297_28359[(2)] = null);

(statearr_28297_28359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28285 === (11))){
var inst_28259 = (state_28284[(2)]);
var state_28284__$1 = (function (){var statearr_28298 = state_28284;
(statearr_28298[(10)] = inst_28259);

return statearr_28298;
})();
var statearr_28299_28360 = state_28284__$1;
(statearr_28299_28360[(2)] = null);

(statearr_28299_28360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28285 === (9))){
var state_28284__$1 = state_28284;
var statearr_28300_28361 = state_28284__$1;
(statearr_28300_28361[(2)] = null);

(statearr_28300_28361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28285 === (5))){
var state_28284__$1 = state_28284;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28301_28362 = state_28284__$1;
(statearr_28301_28362[(1)] = (8));

} else {
var statearr_28302_28363 = state_28284__$1;
(statearr_28302_28363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28285 === (14))){
var inst_28262 = (state_28284[(8)]);
var inst_28264 = (state_28284[(11)]);
var inst_28262__$1 = (state_28284[(2)]);
var inst_28263 = (inst_28262__$1 == null);
var inst_28264__$1 = cljs.core.not.call(null,inst_28263);
var state_28284__$1 = (function (){var statearr_28303 = state_28284;
(statearr_28303[(8)] = inst_28262__$1);

(statearr_28303[(11)] = inst_28264__$1);

return statearr_28303;
})();
if(inst_28264__$1){
var statearr_28304_28364 = state_28284__$1;
(statearr_28304_28364[(1)] = (15));

} else {
var statearr_28305_28365 = state_28284__$1;
(statearr_28305_28365[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28285 === (16))){
var inst_28264 = (state_28284[(11)]);
var state_28284__$1 = state_28284;
var statearr_28306_28366 = state_28284__$1;
(statearr_28306_28366[(2)] = inst_28264);

(statearr_28306_28366[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28285 === (10))){
var inst_28256 = (state_28284[(2)]);
var state_28284__$1 = state_28284;
var statearr_28307_28367 = state_28284__$1;
(statearr_28307_28367[(2)] = inst_28256);

(statearr_28307_28367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28285 === (18))){
var inst_28267 = (state_28284[(2)]);
var state_28284__$1 = state_28284;
var statearr_28308_28368 = state_28284__$1;
(statearr_28308_28368[(2)] = inst_28267);

(statearr_28308_28368[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28285 === (8))){
var inst_28253 = cljs.core.async.close_BANG_.call(null,to);
var state_28284__$1 = state_28284;
var statearr_28309_28369 = state_28284__$1;
(statearr_28309_28369[(2)] = inst_28253);

(statearr_28309_28369[(1)] = (10));


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
});})(c__27978__auto__,jobs,results,process,async))
;
return ((function (switch__27883__auto__,c__27978__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____0 = (function (){
var statearr_28310 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__);

(statearr_28310[(1)] = (1));

return statearr_28310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____1 = (function (state_28284){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_28284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e28311){if((e28311 instanceof Object)){
var ex__27887__auto__ = e28311;
var statearr_28312_28370 = state_28284;
(statearr_28312_28370[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28371 = state_28284;
state_28284 = G__28371;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__ = function(state_28284){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____1.call(this,state_28284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto__,jobs,results,process,async))
})();
var state__27980__auto__ = (function (){var statearr_28313 = f__27979__auto__.call(null);
(statearr_28313[(6)] = c__27978__auto__);

return statearr_28313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto__,jobs,results,process,async))
);

return c__27978__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28373 = arguments.length;
switch (G__28373) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28376 = arguments.length;
switch (G__28376) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28379 = arguments.length;
switch (G__28379) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27978__auto___28428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto___28428,tc,fc){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto___28428,tc,fc){
return (function (state_28405){
var state_val_28406 = (state_28405[(1)]);
if((state_val_28406 === (7))){
var inst_28401 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
var statearr_28407_28429 = state_28405__$1;
(statearr_28407_28429[(2)] = inst_28401);

(statearr_28407_28429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (1))){
var state_28405__$1 = state_28405;
var statearr_28408_28430 = state_28405__$1;
(statearr_28408_28430[(2)] = null);

(statearr_28408_28430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (4))){
var inst_28382 = (state_28405[(7)]);
var inst_28382__$1 = (state_28405[(2)]);
var inst_28383 = (inst_28382__$1 == null);
var state_28405__$1 = (function (){var statearr_28409 = state_28405;
(statearr_28409[(7)] = inst_28382__$1);

return statearr_28409;
})();
if(cljs.core.truth_(inst_28383)){
var statearr_28410_28431 = state_28405__$1;
(statearr_28410_28431[(1)] = (5));

} else {
var statearr_28411_28432 = state_28405__$1;
(statearr_28411_28432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (13))){
var state_28405__$1 = state_28405;
var statearr_28412_28433 = state_28405__$1;
(statearr_28412_28433[(2)] = null);

(statearr_28412_28433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (6))){
var inst_28382 = (state_28405[(7)]);
var inst_28388 = p.call(null,inst_28382);
var state_28405__$1 = state_28405;
if(cljs.core.truth_(inst_28388)){
var statearr_28413_28434 = state_28405__$1;
(statearr_28413_28434[(1)] = (9));

} else {
var statearr_28414_28435 = state_28405__$1;
(statearr_28414_28435[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (3))){
var inst_28403 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28405__$1,inst_28403);
} else {
if((state_val_28406 === (12))){
var state_28405__$1 = state_28405;
var statearr_28415_28436 = state_28405__$1;
(statearr_28415_28436[(2)] = null);

(statearr_28415_28436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (2))){
var state_28405__$1 = state_28405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28405__$1,(4),ch);
} else {
if((state_val_28406 === (11))){
var inst_28382 = (state_28405[(7)]);
var inst_28392 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28405__$1,(8),inst_28392,inst_28382);
} else {
if((state_val_28406 === (9))){
var state_28405__$1 = state_28405;
var statearr_28416_28437 = state_28405__$1;
(statearr_28416_28437[(2)] = tc);

(statearr_28416_28437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (5))){
var inst_28385 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28386 = cljs.core.async.close_BANG_.call(null,fc);
var state_28405__$1 = (function (){var statearr_28417 = state_28405;
(statearr_28417[(8)] = inst_28385);

return statearr_28417;
})();
var statearr_28418_28438 = state_28405__$1;
(statearr_28418_28438[(2)] = inst_28386);

(statearr_28418_28438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (14))){
var inst_28399 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
var statearr_28419_28439 = state_28405__$1;
(statearr_28419_28439[(2)] = inst_28399);

(statearr_28419_28439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (10))){
var state_28405__$1 = state_28405;
var statearr_28420_28440 = state_28405__$1;
(statearr_28420_28440[(2)] = fc);

(statearr_28420_28440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (8))){
var inst_28394 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
if(cljs.core.truth_(inst_28394)){
var statearr_28421_28441 = state_28405__$1;
(statearr_28421_28441[(1)] = (12));

} else {
var statearr_28422_28442 = state_28405__$1;
(statearr_28422_28442[(1)] = (13));

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
});})(c__27978__auto___28428,tc,fc))
;
return ((function (switch__27883__auto__,c__27978__auto___28428,tc,fc){
return (function() {
var cljs$core$async$state_machine__27884__auto__ = null;
var cljs$core$async$state_machine__27884__auto____0 = (function (){
var statearr_28423 = [null,null,null,null,null,null,null,null,null];
(statearr_28423[(0)] = cljs$core$async$state_machine__27884__auto__);

(statearr_28423[(1)] = (1));

return statearr_28423;
});
var cljs$core$async$state_machine__27884__auto____1 = (function (state_28405){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_28405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e28424){if((e28424 instanceof Object)){
var ex__27887__auto__ = e28424;
var statearr_28425_28443 = state_28405;
(statearr_28425_28443[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28444 = state_28405;
state_28405 = G__28444;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$state_machine__27884__auto__ = function(state_28405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27884__auto____1.call(this,state_28405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27884__auto____0;
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27884__auto____1;
return cljs$core$async$state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto___28428,tc,fc))
})();
var state__27980__auto__ = (function (){var statearr_28426 = f__27979__auto__.call(null);
(statearr_28426[(6)] = c__27978__auto___28428);

return statearr_28426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto___28428,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto__){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto__){
return (function (state_28465){
var state_val_28466 = (state_28465[(1)]);
if((state_val_28466 === (7))){
var inst_28461 = (state_28465[(2)]);
var state_28465__$1 = state_28465;
var statearr_28467_28485 = state_28465__$1;
(statearr_28467_28485[(2)] = inst_28461);

(statearr_28467_28485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (1))){
var inst_28445 = init;
var state_28465__$1 = (function (){var statearr_28468 = state_28465;
(statearr_28468[(7)] = inst_28445);

return statearr_28468;
})();
var statearr_28469_28486 = state_28465__$1;
(statearr_28469_28486[(2)] = null);

(statearr_28469_28486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (4))){
var inst_28448 = (state_28465[(8)]);
var inst_28448__$1 = (state_28465[(2)]);
var inst_28449 = (inst_28448__$1 == null);
var state_28465__$1 = (function (){var statearr_28470 = state_28465;
(statearr_28470[(8)] = inst_28448__$1);

return statearr_28470;
})();
if(cljs.core.truth_(inst_28449)){
var statearr_28471_28487 = state_28465__$1;
(statearr_28471_28487[(1)] = (5));

} else {
var statearr_28472_28488 = state_28465__$1;
(statearr_28472_28488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (6))){
var inst_28452 = (state_28465[(9)]);
var inst_28448 = (state_28465[(8)]);
var inst_28445 = (state_28465[(7)]);
var inst_28452__$1 = f.call(null,inst_28445,inst_28448);
var inst_28453 = cljs.core.reduced_QMARK_.call(null,inst_28452__$1);
var state_28465__$1 = (function (){var statearr_28473 = state_28465;
(statearr_28473[(9)] = inst_28452__$1);

return statearr_28473;
})();
if(inst_28453){
var statearr_28474_28489 = state_28465__$1;
(statearr_28474_28489[(1)] = (8));

} else {
var statearr_28475_28490 = state_28465__$1;
(statearr_28475_28490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (3))){
var inst_28463 = (state_28465[(2)]);
var state_28465__$1 = state_28465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28465__$1,inst_28463);
} else {
if((state_val_28466 === (2))){
var state_28465__$1 = state_28465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28465__$1,(4),ch);
} else {
if((state_val_28466 === (9))){
var inst_28452 = (state_28465[(9)]);
var inst_28445 = inst_28452;
var state_28465__$1 = (function (){var statearr_28476 = state_28465;
(statearr_28476[(7)] = inst_28445);

return statearr_28476;
})();
var statearr_28477_28491 = state_28465__$1;
(statearr_28477_28491[(2)] = null);

(statearr_28477_28491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (5))){
var inst_28445 = (state_28465[(7)]);
var state_28465__$1 = state_28465;
var statearr_28478_28492 = state_28465__$1;
(statearr_28478_28492[(2)] = inst_28445);

(statearr_28478_28492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (10))){
var inst_28459 = (state_28465[(2)]);
var state_28465__$1 = state_28465;
var statearr_28479_28493 = state_28465__$1;
(statearr_28479_28493[(2)] = inst_28459);

(statearr_28479_28493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (8))){
var inst_28452 = (state_28465[(9)]);
var inst_28455 = cljs.core.deref.call(null,inst_28452);
var state_28465__$1 = state_28465;
var statearr_28480_28494 = state_28465__$1;
(statearr_28480_28494[(2)] = inst_28455);

(statearr_28480_28494[(1)] = (10));


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
});})(c__27978__auto__))
;
return ((function (switch__27883__auto__,c__27978__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27884__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27884__auto____0 = (function (){
var statearr_28481 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28481[(0)] = cljs$core$async$reduce_$_state_machine__27884__auto__);

(statearr_28481[(1)] = (1));

return statearr_28481;
});
var cljs$core$async$reduce_$_state_machine__27884__auto____1 = (function (state_28465){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_28465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e28482){if((e28482 instanceof Object)){
var ex__27887__auto__ = e28482;
var statearr_28483_28495 = state_28465;
(statearr_28483_28495[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28496 = state_28465;
state_28465 = G__28496;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27884__auto__ = function(state_28465){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27884__auto____1.call(this,state_28465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27884__auto____0;
cljs$core$async$reduce_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27884__auto____1;
return cljs$core$async$reduce_$_state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto__))
})();
var state__27980__auto__ = (function (){var statearr_28484 = f__27979__auto__.call(null);
(statearr_28484[(6)] = c__27978__auto__);

return statearr_28484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto__))
);

return c__27978__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto__,f__$1){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto__,f__$1){
return (function (state_28502){
var state_val_28503 = (state_28502[(1)]);
if((state_val_28503 === (1))){
var inst_28497 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28502__$1 = state_28502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28502__$1,(2),inst_28497);
} else {
if((state_val_28503 === (2))){
var inst_28499 = (state_28502[(2)]);
var inst_28500 = f__$1.call(null,inst_28499);
var state_28502__$1 = state_28502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28502__$1,inst_28500);
} else {
return null;
}
}
});})(c__27978__auto__,f__$1))
;
return ((function (switch__27883__auto__,c__27978__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27884__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27884__auto____0 = (function (){
var statearr_28504 = [null,null,null,null,null,null,null];
(statearr_28504[(0)] = cljs$core$async$transduce_$_state_machine__27884__auto__);

(statearr_28504[(1)] = (1));

return statearr_28504;
});
var cljs$core$async$transduce_$_state_machine__27884__auto____1 = (function (state_28502){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_28502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e28505){if((e28505 instanceof Object)){
var ex__27887__auto__ = e28505;
var statearr_28506_28508 = state_28502;
(statearr_28506_28508[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28509 = state_28502;
state_28502 = G__28509;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27884__auto__ = function(state_28502){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27884__auto____1.call(this,state_28502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27884__auto____0;
cljs$core$async$transduce_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27884__auto____1;
return cljs$core$async$transduce_$_state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto__,f__$1))
})();
var state__27980__auto__ = (function (){var statearr_28507 = f__27979__auto__.call(null);
(statearr_28507[(6)] = c__27978__auto__);

return statearr_28507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto__,f__$1))
);

return c__27978__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28511 = arguments.length;
switch (G__28511) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto__){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto__){
return (function (state_28536){
var state_val_28537 = (state_28536[(1)]);
if((state_val_28537 === (7))){
var inst_28518 = (state_28536[(2)]);
var state_28536__$1 = state_28536;
var statearr_28538_28559 = state_28536__$1;
(statearr_28538_28559[(2)] = inst_28518);

(statearr_28538_28559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (1))){
var inst_28512 = cljs.core.seq.call(null,coll);
var inst_28513 = inst_28512;
var state_28536__$1 = (function (){var statearr_28539 = state_28536;
(statearr_28539[(7)] = inst_28513);

return statearr_28539;
})();
var statearr_28540_28560 = state_28536__$1;
(statearr_28540_28560[(2)] = null);

(statearr_28540_28560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (4))){
var inst_28513 = (state_28536[(7)]);
var inst_28516 = cljs.core.first.call(null,inst_28513);
var state_28536__$1 = state_28536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28536__$1,(7),ch,inst_28516);
} else {
if((state_val_28537 === (13))){
var inst_28530 = (state_28536[(2)]);
var state_28536__$1 = state_28536;
var statearr_28541_28561 = state_28536__$1;
(statearr_28541_28561[(2)] = inst_28530);

(statearr_28541_28561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (6))){
var inst_28521 = (state_28536[(2)]);
var state_28536__$1 = state_28536;
if(cljs.core.truth_(inst_28521)){
var statearr_28542_28562 = state_28536__$1;
(statearr_28542_28562[(1)] = (8));

} else {
var statearr_28543_28563 = state_28536__$1;
(statearr_28543_28563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (3))){
var inst_28534 = (state_28536[(2)]);
var state_28536__$1 = state_28536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28536__$1,inst_28534);
} else {
if((state_val_28537 === (12))){
var state_28536__$1 = state_28536;
var statearr_28544_28564 = state_28536__$1;
(statearr_28544_28564[(2)] = null);

(statearr_28544_28564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (2))){
var inst_28513 = (state_28536[(7)]);
var state_28536__$1 = state_28536;
if(cljs.core.truth_(inst_28513)){
var statearr_28545_28565 = state_28536__$1;
(statearr_28545_28565[(1)] = (4));

} else {
var statearr_28546_28566 = state_28536__$1;
(statearr_28546_28566[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (11))){
var inst_28527 = cljs.core.async.close_BANG_.call(null,ch);
var state_28536__$1 = state_28536;
var statearr_28547_28567 = state_28536__$1;
(statearr_28547_28567[(2)] = inst_28527);

(statearr_28547_28567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (9))){
var state_28536__$1 = state_28536;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28548_28568 = state_28536__$1;
(statearr_28548_28568[(1)] = (11));

} else {
var statearr_28549_28569 = state_28536__$1;
(statearr_28549_28569[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (5))){
var inst_28513 = (state_28536[(7)]);
var state_28536__$1 = state_28536;
var statearr_28550_28570 = state_28536__$1;
(statearr_28550_28570[(2)] = inst_28513);

(statearr_28550_28570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (10))){
var inst_28532 = (state_28536[(2)]);
var state_28536__$1 = state_28536;
var statearr_28551_28571 = state_28536__$1;
(statearr_28551_28571[(2)] = inst_28532);

(statearr_28551_28571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (8))){
var inst_28513 = (state_28536[(7)]);
var inst_28523 = cljs.core.next.call(null,inst_28513);
var inst_28513__$1 = inst_28523;
var state_28536__$1 = (function (){var statearr_28552 = state_28536;
(statearr_28552[(7)] = inst_28513__$1);

return statearr_28552;
})();
var statearr_28553_28572 = state_28536__$1;
(statearr_28553_28572[(2)] = null);

(statearr_28553_28572[(1)] = (2));


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
});})(c__27978__auto__))
;
return ((function (switch__27883__auto__,c__27978__auto__){
return (function() {
var cljs$core$async$state_machine__27884__auto__ = null;
var cljs$core$async$state_machine__27884__auto____0 = (function (){
var statearr_28554 = [null,null,null,null,null,null,null,null];
(statearr_28554[(0)] = cljs$core$async$state_machine__27884__auto__);

(statearr_28554[(1)] = (1));

return statearr_28554;
});
var cljs$core$async$state_machine__27884__auto____1 = (function (state_28536){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_28536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e28555){if((e28555 instanceof Object)){
var ex__27887__auto__ = e28555;
var statearr_28556_28573 = state_28536;
(statearr_28556_28573[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28574 = state_28536;
state_28536 = G__28574;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$state_machine__27884__auto__ = function(state_28536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27884__auto____1.call(this,state_28536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27884__auto____0;
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27884__auto____1;
return cljs$core$async$state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto__))
})();
var state__27980__auto__ = (function (){var statearr_28557 = f__27979__auto__.call(null);
(statearr_28557[(6)] = c__27978__auto__);

return statearr_28557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto__))
);

return c__27978__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28575 = (function (ch,cs,meta28576){
this.ch = ch;
this.cs = cs;
this.meta28576 = meta28576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28577,meta28576__$1){
var self__ = this;
var _28577__$1 = this;
return (new cljs.core.async.t_cljs$core$async28575(self__.ch,self__.cs,meta28576__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28577){
var self__ = this;
var _28577__$1 = this;
return self__.meta28576;
});})(cs))
;

cljs.core.async.t_cljs$core$async28575.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28575.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28575.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28575.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28575.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28575.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28575.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28576","meta28576",-1276639473,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28575";

cljs.core.async.t_cljs$core$async28575.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28575");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28575.
 */
cljs.core.async.__GT_t_cljs$core$async28575 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28575(ch__$1,cs__$1,meta28576){
return (new cljs.core.async.t_cljs$core$async28575(ch__$1,cs__$1,meta28576));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28575(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27978__auto___28797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto___28797,cs,m,dchan,dctr,done){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto___28797,cs,m,dchan,dctr,done){
return (function (state_28712){
var state_val_28713 = (state_28712[(1)]);
if((state_val_28713 === (7))){
var inst_28708 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28714_28798 = state_28712__$1;
(statearr_28714_28798[(2)] = inst_28708);

(statearr_28714_28798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (20))){
var inst_28611 = (state_28712[(7)]);
var inst_28623 = cljs.core.first.call(null,inst_28611);
var inst_28624 = cljs.core.nth.call(null,inst_28623,(0),null);
var inst_28625 = cljs.core.nth.call(null,inst_28623,(1),null);
var state_28712__$1 = (function (){var statearr_28715 = state_28712;
(statearr_28715[(8)] = inst_28624);

return statearr_28715;
})();
if(cljs.core.truth_(inst_28625)){
var statearr_28716_28799 = state_28712__$1;
(statearr_28716_28799[(1)] = (22));

} else {
var statearr_28717_28800 = state_28712__$1;
(statearr_28717_28800[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (27))){
var inst_28653 = (state_28712[(9)]);
var inst_28655 = (state_28712[(10)]);
var inst_28580 = (state_28712[(11)]);
var inst_28660 = (state_28712[(12)]);
var inst_28660__$1 = cljs.core._nth.call(null,inst_28653,inst_28655);
var inst_28661 = cljs.core.async.put_BANG_.call(null,inst_28660__$1,inst_28580,done);
var state_28712__$1 = (function (){var statearr_28718 = state_28712;
(statearr_28718[(12)] = inst_28660__$1);

return statearr_28718;
})();
if(cljs.core.truth_(inst_28661)){
var statearr_28719_28801 = state_28712__$1;
(statearr_28719_28801[(1)] = (30));

} else {
var statearr_28720_28802 = state_28712__$1;
(statearr_28720_28802[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (1))){
var state_28712__$1 = state_28712;
var statearr_28721_28803 = state_28712__$1;
(statearr_28721_28803[(2)] = null);

(statearr_28721_28803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (24))){
var inst_28611 = (state_28712[(7)]);
var inst_28630 = (state_28712[(2)]);
var inst_28631 = cljs.core.next.call(null,inst_28611);
var inst_28589 = inst_28631;
var inst_28590 = null;
var inst_28591 = (0);
var inst_28592 = (0);
var state_28712__$1 = (function (){var statearr_28722 = state_28712;
(statearr_28722[(13)] = inst_28592);

(statearr_28722[(14)] = inst_28591);

(statearr_28722[(15)] = inst_28590);

(statearr_28722[(16)] = inst_28589);

(statearr_28722[(17)] = inst_28630);

return statearr_28722;
})();
var statearr_28723_28804 = state_28712__$1;
(statearr_28723_28804[(2)] = null);

(statearr_28723_28804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (39))){
var state_28712__$1 = state_28712;
var statearr_28727_28805 = state_28712__$1;
(statearr_28727_28805[(2)] = null);

(statearr_28727_28805[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (4))){
var inst_28580 = (state_28712[(11)]);
var inst_28580__$1 = (state_28712[(2)]);
var inst_28581 = (inst_28580__$1 == null);
var state_28712__$1 = (function (){var statearr_28728 = state_28712;
(statearr_28728[(11)] = inst_28580__$1);

return statearr_28728;
})();
if(cljs.core.truth_(inst_28581)){
var statearr_28729_28806 = state_28712__$1;
(statearr_28729_28806[(1)] = (5));

} else {
var statearr_28730_28807 = state_28712__$1;
(statearr_28730_28807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (15))){
var inst_28592 = (state_28712[(13)]);
var inst_28591 = (state_28712[(14)]);
var inst_28590 = (state_28712[(15)]);
var inst_28589 = (state_28712[(16)]);
var inst_28607 = (state_28712[(2)]);
var inst_28608 = (inst_28592 + (1));
var tmp28724 = inst_28591;
var tmp28725 = inst_28590;
var tmp28726 = inst_28589;
var inst_28589__$1 = tmp28726;
var inst_28590__$1 = tmp28725;
var inst_28591__$1 = tmp28724;
var inst_28592__$1 = inst_28608;
var state_28712__$1 = (function (){var statearr_28731 = state_28712;
(statearr_28731[(18)] = inst_28607);

(statearr_28731[(13)] = inst_28592__$1);

(statearr_28731[(14)] = inst_28591__$1);

(statearr_28731[(15)] = inst_28590__$1);

(statearr_28731[(16)] = inst_28589__$1);

return statearr_28731;
})();
var statearr_28732_28808 = state_28712__$1;
(statearr_28732_28808[(2)] = null);

(statearr_28732_28808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (21))){
var inst_28634 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28736_28809 = state_28712__$1;
(statearr_28736_28809[(2)] = inst_28634);

(statearr_28736_28809[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (31))){
var inst_28660 = (state_28712[(12)]);
var inst_28664 = done.call(null,null);
var inst_28665 = cljs.core.async.untap_STAR_.call(null,m,inst_28660);
var state_28712__$1 = (function (){var statearr_28737 = state_28712;
(statearr_28737[(19)] = inst_28664);

return statearr_28737;
})();
var statearr_28738_28810 = state_28712__$1;
(statearr_28738_28810[(2)] = inst_28665);

(statearr_28738_28810[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (32))){
var inst_28653 = (state_28712[(9)]);
var inst_28654 = (state_28712[(20)]);
var inst_28652 = (state_28712[(21)]);
var inst_28655 = (state_28712[(10)]);
var inst_28667 = (state_28712[(2)]);
var inst_28668 = (inst_28655 + (1));
var tmp28733 = inst_28653;
var tmp28734 = inst_28654;
var tmp28735 = inst_28652;
var inst_28652__$1 = tmp28735;
var inst_28653__$1 = tmp28733;
var inst_28654__$1 = tmp28734;
var inst_28655__$1 = inst_28668;
var state_28712__$1 = (function (){var statearr_28739 = state_28712;
(statearr_28739[(9)] = inst_28653__$1);

(statearr_28739[(20)] = inst_28654__$1);

(statearr_28739[(22)] = inst_28667);

(statearr_28739[(21)] = inst_28652__$1);

(statearr_28739[(10)] = inst_28655__$1);

return statearr_28739;
})();
var statearr_28740_28811 = state_28712__$1;
(statearr_28740_28811[(2)] = null);

(statearr_28740_28811[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (40))){
var inst_28680 = (state_28712[(23)]);
var inst_28684 = done.call(null,null);
var inst_28685 = cljs.core.async.untap_STAR_.call(null,m,inst_28680);
var state_28712__$1 = (function (){var statearr_28741 = state_28712;
(statearr_28741[(24)] = inst_28684);

return statearr_28741;
})();
var statearr_28742_28812 = state_28712__$1;
(statearr_28742_28812[(2)] = inst_28685);

(statearr_28742_28812[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (33))){
var inst_28671 = (state_28712[(25)]);
var inst_28673 = cljs.core.chunked_seq_QMARK_.call(null,inst_28671);
var state_28712__$1 = state_28712;
if(inst_28673){
var statearr_28743_28813 = state_28712__$1;
(statearr_28743_28813[(1)] = (36));

} else {
var statearr_28744_28814 = state_28712__$1;
(statearr_28744_28814[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (13))){
var inst_28601 = (state_28712[(26)]);
var inst_28604 = cljs.core.async.close_BANG_.call(null,inst_28601);
var state_28712__$1 = state_28712;
var statearr_28745_28815 = state_28712__$1;
(statearr_28745_28815[(2)] = inst_28604);

(statearr_28745_28815[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (22))){
var inst_28624 = (state_28712[(8)]);
var inst_28627 = cljs.core.async.close_BANG_.call(null,inst_28624);
var state_28712__$1 = state_28712;
var statearr_28746_28816 = state_28712__$1;
(statearr_28746_28816[(2)] = inst_28627);

(statearr_28746_28816[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (36))){
var inst_28671 = (state_28712[(25)]);
var inst_28675 = cljs.core.chunk_first.call(null,inst_28671);
var inst_28676 = cljs.core.chunk_rest.call(null,inst_28671);
var inst_28677 = cljs.core.count.call(null,inst_28675);
var inst_28652 = inst_28676;
var inst_28653 = inst_28675;
var inst_28654 = inst_28677;
var inst_28655 = (0);
var state_28712__$1 = (function (){var statearr_28747 = state_28712;
(statearr_28747[(9)] = inst_28653);

(statearr_28747[(20)] = inst_28654);

(statearr_28747[(21)] = inst_28652);

(statearr_28747[(10)] = inst_28655);

return statearr_28747;
})();
var statearr_28748_28817 = state_28712__$1;
(statearr_28748_28817[(2)] = null);

(statearr_28748_28817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (41))){
var inst_28671 = (state_28712[(25)]);
var inst_28687 = (state_28712[(2)]);
var inst_28688 = cljs.core.next.call(null,inst_28671);
var inst_28652 = inst_28688;
var inst_28653 = null;
var inst_28654 = (0);
var inst_28655 = (0);
var state_28712__$1 = (function (){var statearr_28749 = state_28712;
(statearr_28749[(9)] = inst_28653);

(statearr_28749[(20)] = inst_28654);

(statearr_28749[(21)] = inst_28652);

(statearr_28749[(27)] = inst_28687);

(statearr_28749[(10)] = inst_28655);

return statearr_28749;
})();
var statearr_28750_28818 = state_28712__$1;
(statearr_28750_28818[(2)] = null);

(statearr_28750_28818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (43))){
var state_28712__$1 = state_28712;
var statearr_28751_28819 = state_28712__$1;
(statearr_28751_28819[(2)] = null);

(statearr_28751_28819[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (29))){
var inst_28696 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28752_28820 = state_28712__$1;
(statearr_28752_28820[(2)] = inst_28696);

(statearr_28752_28820[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (44))){
var inst_28705 = (state_28712[(2)]);
var state_28712__$1 = (function (){var statearr_28753 = state_28712;
(statearr_28753[(28)] = inst_28705);

return statearr_28753;
})();
var statearr_28754_28821 = state_28712__$1;
(statearr_28754_28821[(2)] = null);

(statearr_28754_28821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (6))){
var inst_28644 = (state_28712[(29)]);
var inst_28643 = cljs.core.deref.call(null,cs);
var inst_28644__$1 = cljs.core.keys.call(null,inst_28643);
var inst_28645 = cljs.core.count.call(null,inst_28644__$1);
var inst_28646 = cljs.core.reset_BANG_.call(null,dctr,inst_28645);
var inst_28651 = cljs.core.seq.call(null,inst_28644__$1);
var inst_28652 = inst_28651;
var inst_28653 = null;
var inst_28654 = (0);
var inst_28655 = (0);
var state_28712__$1 = (function (){var statearr_28755 = state_28712;
(statearr_28755[(9)] = inst_28653);

(statearr_28755[(30)] = inst_28646);

(statearr_28755[(20)] = inst_28654);

(statearr_28755[(21)] = inst_28652);

(statearr_28755[(10)] = inst_28655);

(statearr_28755[(29)] = inst_28644__$1);

return statearr_28755;
})();
var statearr_28756_28822 = state_28712__$1;
(statearr_28756_28822[(2)] = null);

(statearr_28756_28822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (28))){
var inst_28671 = (state_28712[(25)]);
var inst_28652 = (state_28712[(21)]);
var inst_28671__$1 = cljs.core.seq.call(null,inst_28652);
var state_28712__$1 = (function (){var statearr_28757 = state_28712;
(statearr_28757[(25)] = inst_28671__$1);

return statearr_28757;
})();
if(inst_28671__$1){
var statearr_28758_28823 = state_28712__$1;
(statearr_28758_28823[(1)] = (33));

} else {
var statearr_28759_28824 = state_28712__$1;
(statearr_28759_28824[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (25))){
var inst_28654 = (state_28712[(20)]);
var inst_28655 = (state_28712[(10)]);
var inst_28657 = (inst_28655 < inst_28654);
var inst_28658 = inst_28657;
var state_28712__$1 = state_28712;
if(cljs.core.truth_(inst_28658)){
var statearr_28760_28825 = state_28712__$1;
(statearr_28760_28825[(1)] = (27));

} else {
var statearr_28761_28826 = state_28712__$1;
(statearr_28761_28826[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (34))){
var state_28712__$1 = state_28712;
var statearr_28762_28827 = state_28712__$1;
(statearr_28762_28827[(2)] = null);

(statearr_28762_28827[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (17))){
var state_28712__$1 = state_28712;
var statearr_28763_28828 = state_28712__$1;
(statearr_28763_28828[(2)] = null);

(statearr_28763_28828[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (3))){
var inst_28710 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28712__$1,inst_28710);
} else {
if((state_val_28713 === (12))){
var inst_28639 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28764_28829 = state_28712__$1;
(statearr_28764_28829[(2)] = inst_28639);

(statearr_28764_28829[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (2))){
var state_28712__$1 = state_28712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28712__$1,(4),ch);
} else {
if((state_val_28713 === (23))){
var state_28712__$1 = state_28712;
var statearr_28765_28830 = state_28712__$1;
(statearr_28765_28830[(2)] = null);

(statearr_28765_28830[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (35))){
var inst_28694 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28766_28831 = state_28712__$1;
(statearr_28766_28831[(2)] = inst_28694);

(statearr_28766_28831[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (19))){
var inst_28611 = (state_28712[(7)]);
var inst_28615 = cljs.core.chunk_first.call(null,inst_28611);
var inst_28616 = cljs.core.chunk_rest.call(null,inst_28611);
var inst_28617 = cljs.core.count.call(null,inst_28615);
var inst_28589 = inst_28616;
var inst_28590 = inst_28615;
var inst_28591 = inst_28617;
var inst_28592 = (0);
var state_28712__$1 = (function (){var statearr_28767 = state_28712;
(statearr_28767[(13)] = inst_28592);

(statearr_28767[(14)] = inst_28591);

(statearr_28767[(15)] = inst_28590);

(statearr_28767[(16)] = inst_28589);

return statearr_28767;
})();
var statearr_28768_28832 = state_28712__$1;
(statearr_28768_28832[(2)] = null);

(statearr_28768_28832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (11))){
var inst_28611 = (state_28712[(7)]);
var inst_28589 = (state_28712[(16)]);
var inst_28611__$1 = cljs.core.seq.call(null,inst_28589);
var state_28712__$1 = (function (){var statearr_28769 = state_28712;
(statearr_28769[(7)] = inst_28611__$1);

return statearr_28769;
})();
if(inst_28611__$1){
var statearr_28770_28833 = state_28712__$1;
(statearr_28770_28833[(1)] = (16));

} else {
var statearr_28771_28834 = state_28712__$1;
(statearr_28771_28834[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (9))){
var inst_28641 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28772_28835 = state_28712__$1;
(statearr_28772_28835[(2)] = inst_28641);

(statearr_28772_28835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (5))){
var inst_28587 = cljs.core.deref.call(null,cs);
var inst_28588 = cljs.core.seq.call(null,inst_28587);
var inst_28589 = inst_28588;
var inst_28590 = null;
var inst_28591 = (0);
var inst_28592 = (0);
var state_28712__$1 = (function (){var statearr_28773 = state_28712;
(statearr_28773[(13)] = inst_28592);

(statearr_28773[(14)] = inst_28591);

(statearr_28773[(15)] = inst_28590);

(statearr_28773[(16)] = inst_28589);

return statearr_28773;
})();
var statearr_28774_28836 = state_28712__$1;
(statearr_28774_28836[(2)] = null);

(statearr_28774_28836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (14))){
var state_28712__$1 = state_28712;
var statearr_28775_28837 = state_28712__$1;
(statearr_28775_28837[(2)] = null);

(statearr_28775_28837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (45))){
var inst_28702 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28776_28838 = state_28712__$1;
(statearr_28776_28838[(2)] = inst_28702);

(statearr_28776_28838[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (26))){
var inst_28644 = (state_28712[(29)]);
var inst_28698 = (state_28712[(2)]);
var inst_28699 = cljs.core.seq.call(null,inst_28644);
var state_28712__$1 = (function (){var statearr_28777 = state_28712;
(statearr_28777[(31)] = inst_28698);

return statearr_28777;
})();
if(inst_28699){
var statearr_28778_28839 = state_28712__$1;
(statearr_28778_28839[(1)] = (42));

} else {
var statearr_28779_28840 = state_28712__$1;
(statearr_28779_28840[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (16))){
var inst_28611 = (state_28712[(7)]);
var inst_28613 = cljs.core.chunked_seq_QMARK_.call(null,inst_28611);
var state_28712__$1 = state_28712;
if(inst_28613){
var statearr_28780_28841 = state_28712__$1;
(statearr_28780_28841[(1)] = (19));

} else {
var statearr_28781_28842 = state_28712__$1;
(statearr_28781_28842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (38))){
var inst_28691 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28782_28843 = state_28712__$1;
(statearr_28782_28843[(2)] = inst_28691);

(statearr_28782_28843[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (30))){
var state_28712__$1 = state_28712;
var statearr_28783_28844 = state_28712__$1;
(statearr_28783_28844[(2)] = null);

(statearr_28783_28844[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (10))){
var inst_28592 = (state_28712[(13)]);
var inst_28590 = (state_28712[(15)]);
var inst_28600 = cljs.core._nth.call(null,inst_28590,inst_28592);
var inst_28601 = cljs.core.nth.call(null,inst_28600,(0),null);
var inst_28602 = cljs.core.nth.call(null,inst_28600,(1),null);
var state_28712__$1 = (function (){var statearr_28784 = state_28712;
(statearr_28784[(26)] = inst_28601);

return statearr_28784;
})();
if(cljs.core.truth_(inst_28602)){
var statearr_28785_28845 = state_28712__$1;
(statearr_28785_28845[(1)] = (13));

} else {
var statearr_28786_28846 = state_28712__$1;
(statearr_28786_28846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (18))){
var inst_28637 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28787_28847 = state_28712__$1;
(statearr_28787_28847[(2)] = inst_28637);

(statearr_28787_28847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (42))){
var state_28712__$1 = state_28712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28712__$1,(45),dchan);
} else {
if((state_val_28713 === (37))){
var inst_28680 = (state_28712[(23)]);
var inst_28671 = (state_28712[(25)]);
var inst_28580 = (state_28712[(11)]);
var inst_28680__$1 = cljs.core.first.call(null,inst_28671);
var inst_28681 = cljs.core.async.put_BANG_.call(null,inst_28680__$1,inst_28580,done);
var state_28712__$1 = (function (){var statearr_28788 = state_28712;
(statearr_28788[(23)] = inst_28680__$1);

return statearr_28788;
})();
if(cljs.core.truth_(inst_28681)){
var statearr_28789_28848 = state_28712__$1;
(statearr_28789_28848[(1)] = (39));

} else {
var statearr_28790_28849 = state_28712__$1;
(statearr_28790_28849[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (8))){
var inst_28592 = (state_28712[(13)]);
var inst_28591 = (state_28712[(14)]);
var inst_28594 = (inst_28592 < inst_28591);
var inst_28595 = inst_28594;
var state_28712__$1 = state_28712;
if(cljs.core.truth_(inst_28595)){
var statearr_28791_28850 = state_28712__$1;
(statearr_28791_28850[(1)] = (10));

} else {
var statearr_28792_28851 = state_28712__$1;
(statearr_28792_28851[(1)] = (11));

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
});})(c__27978__auto___28797,cs,m,dchan,dctr,done))
;
return ((function (switch__27883__auto__,c__27978__auto___28797,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27884__auto__ = null;
var cljs$core$async$mult_$_state_machine__27884__auto____0 = (function (){
var statearr_28793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28793[(0)] = cljs$core$async$mult_$_state_machine__27884__auto__);

(statearr_28793[(1)] = (1));

return statearr_28793;
});
var cljs$core$async$mult_$_state_machine__27884__auto____1 = (function (state_28712){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_28712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e28794){if((e28794 instanceof Object)){
var ex__27887__auto__ = e28794;
var statearr_28795_28852 = state_28712;
(statearr_28795_28852[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28853 = state_28712;
state_28712 = G__28853;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27884__auto__ = function(state_28712){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27884__auto____1.call(this,state_28712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27884__auto____0;
cljs$core$async$mult_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27884__auto____1;
return cljs$core$async$mult_$_state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto___28797,cs,m,dchan,dctr,done))
})();
var state__27980__auto__ = (function (){var statearr_28796 = f__27979__auto__.call(null);
(statearr_28796[(6)] = c__27978__auto___28797);

return statearr_28796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto___28797,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28855 = arguments.length;
switch (G__28855) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28867 = arguments.length;
var i__4642__auto___28868 = (0);
while(true){
if((i__4642__auto___28868 < len__4641__auto___28867)){
args__4647__auto__.push((arguments[i__4642__auto___28868]));

var G__28869 = (i__4642__auto___28868 + (1));
i__4642__auto___28868 = G__28869;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28861){
var map__28862 = p__28861;
var map__28862__$1 = (((((!((map__28862 == null))))?(((((map__28862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28862):map__28862);
var opts = map__28862__$1;
var statearr_28864_28870 = state;
(statearr_28864_28870[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__28862,map__28862__$1,opts){
return (function (val){
var statearr_28865_28871 = state;
(statearr_28865_28871[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28862,map__28862__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_28866_28872 = state;
(statearr_28866_28872[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28857){
var G__28858 = cljs.core.first.call(null,seq28857);
var seq28857__$1 = cljs.core.next.call(null,seq28857);
var G__28859 = cljs.core.first.call(null,seq28857__$1);
var seq28857__$2 = cljs.core.next.call(null,seq28857__$1);
var G__28860 = cljs.core.first.call(null,seq28857__$2);
var seq28857__$3 = cljs.core.next.call(null,seq28857__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28858,G__28859,G__28860,seq28857__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28873 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28873 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28874){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28874 = meta28874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28875,meta28874__$1){
var self__ = this;
var _28875__$1 = this;
return (new cljs.core.async.t_cljs$core$async28873(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28874__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28875){
var self__ = this;
var _28875__$1 = this;
return self__.meta28874;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28873.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28873.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28873.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28873.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28873.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28873.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28873.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28873.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28873.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28874","meta28874",-1763566884,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28873.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28873";

cljs.core.async.t_cljs$core$async28873.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async28873");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28873.
 */
cljs.core.async.__GT_t_cljs$core$async28873 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28873(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28874){
return (new cljs.core.async.t_cljs$core$async28873(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28874));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28873(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27978__auto___29037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto___29037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto___29037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28977){
var state_val_28978 = (state_28977[(1)]);
if((state_val_28978 === (7))){
var inst_28892 = (state_28977[(2)]);
var state_28977__$1 = state_28977;
var statearr_28979_29038 = state_28977__$1;
(statearr_28979_29038[(2)] = inst_28892);

(statearr_28979_29038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (20))){
var inst_28904 = (state_28977[(7)]);
var state_28977__$1 = state_28977;
var statearr_28980_29039 = state_28977__$1;
(statearr_28980_29039[(2)] = inst_28904);

(statearr_28980_29039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (27))){
var state_28977__$1 = state_28977;
var statearr_28981_29040 = state_28977__$1;
(statearr_28981_29040[(2)] = null);

(statearr_28981_29040[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (1))){
var inst_28879 = (state_28977[(8)]);
var inst_28879__$1 = calc_state.call(null);
var inst_28881 = (inst_28879__$1 == null);
var inst_28882 = cljs.core.not.call(null,inst_28881);
var state_28977__$1 = (function (){var statearr_28982 = state_28977;
(statearr_28982[(8)] = inst_28879__$1);

return statearr_28982;
})();
if(inst_28882){
var statearr_28983_29041 = state_28977__$1;
(statearr_28983_29041[(1)] = (2));

} else {
var statearr_28984_29042 = state_28977__$1;
(statearr_28984_29042[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (24))){
var inst_28951 = (state_28977[(9)]);
var inst_28928 = (state_28977[(10)]);
var inst_28937 = (state_28977[(11)]);
var inst_28951__$1 = inst_28928.call(null,inst_28937);
var state_28977__$1 = (function (){var statearr_28985 = state_28977;
(statearr_28985[(9)] = inst_28951__$1);

return statearr_28985;
})();
if(cljs.core.truth_(inst_28951__$1)){
var statearr_28986_29043 = state_28977__$1;
(statearr_28986_29043[(1)] = (29));

} else {
var statearr_28987_29044 = state_28977__$1;
(statearr_28987_29044[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (4))){
var inst_28895 = (state_28977[(2)]);
var state_28977__$1 = state_28977;
if(cljs.core.truth_(inst_28895)){
var statearr_28988_29045 = state_28977__$1;
(statearr_28988_29045[(1)] = (8));

} else {
var statearr_28989_29046 = state_28977__$1;
(statearr_28989_29046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (15))){
var inst_28922 = (state_28977[(2)]);
var state_28977__$1 = state_28977;
if(cljs.core.truth_(inst_28922)){
var statearr_28990_29047 = state_28977__$1;
(statearr_28990_29047[(1)] = (19));

} else {
var statearr_28991_29048 = state_28977__$1;
(statearr_28991_29048[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (21))){
var inst_28927 = (state_28977[(12)]);
var inst_28927__$1 = (state_28977[(2)]);
var inst_28928 = cljs.core.get.call(null,inst_28927__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28929 = cljs.core.get.call(null,inst_28927__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28930 = cljs.core.get.call(null,inst_28927__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28977__$1 = (function (){var statearr_28992 = state_28977;
(statearr_28992[(13)] = inst_28929);

(statearr_28992[(10)] = inst_28928);

(statearr_28992[(12)] = inst_28927__$1);

return statearr_28992;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28977__$1,(22),inst_28930);
} else {
if((state_val_28978 === (31))){
var inst_28959 = (state_28977[(2)]);
var state_28977__$1 = state_28977;
if(cljs.core.truth_(inst_28959)){
var statearr_28993_29049 = state_28977__$1;
(statearr_28993_29049[(1)] = (32));

} else {
var statearr_28994_29050 = state_28977__$1;
(statearr_28994_29050[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (32))){
var inst_28936 = (state_28977[(14)]);
var state_28977__$1 = state_28977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28977__$1,(35),out,inst_28936);
} else {
if((state_val_28978 === (33))){
var inst_28927 = (state_28977[(12)]);
var inst_28904 = inst_28927;
var state_28977__$1 = (function (){var statearr_28995 = state_28977;
(statearr_28995[(7)] = inst_28904);

return statearr_28995;
})();
var statearr_28996_29051 = state_28977__$1;
(statearr_28996_29051[(2)] = null);

(statearr_28996_29051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (13))){
var inst_28904 = (state_28977[(7)]);
var inst_28911 = inst_28904.cljs$lang$protocol_mask$partition0$;
var inst_28912 = (inst_28911 & (64));
var inst_28913 = inst_28904.cljs$core$ISeq$;
var inst_28914 = (cljs.core.PROTOCOL_SENTINEL === inst_28913);
var inst_28915 = ((inst_28912) || (inst_28914));
var state_28977__$1 = state_28977;
if(cljs.core.truth_(inst_28915)){
var statearr_28997_29052 = state_28977__$1;
(statearr_28997_29052[(1)] = (16));

} else {
var statearr_28998_29053 = state_28977__$1;
(statearr_28998_29053[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (22))){
var inst_28936 = (state_28977[(14)]);
var inst_28937 = (state_28977[(11)]);
var inst_28935 = (state_28977[(2)]);
var inst_28936__$1 = cljs.core.nth.call(null,inst_28935,(0),null);
var inst_28937__$1 = cljs.core.nth.call(null,inst_28935,(1),null);
var inst_28938 = (inst_28936__$1 == null);
var inst_28939 = cljs.core._EQ_.call(null,inst_28937__$1,change);
var inst_28940 = ((inst_28938) || (inst_28939));
var state_28977__$1 = (function (){var statearr_28999 = state_28977;
(statearr_28999[(14)] = inst_28936__$1);

(statearr_28999[(11)] = inst_28937__$1);

return statearr_28999;
})();
if(cljs.core.truth_(inst_28940)){
var statearr_29000_29054 = state_28977__$1;
(statearr_29000_29054[(1)] = (23));

} else {
var statearr_29001_29055 = state_28977__$1;
(statearr_29001_29055[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (36))){
var inst_28927 = (state_28977[(12)]);
var inst_28904 = inst_28927;
var state_28977__$1 = (function (){var statearr_29002 = state_28977;
(statearr_29002[(7)] = inst_28904);

return statearr_29002;
})();
var statearr_29003_29056 = state_28977__$1;
(statearr_29003_29056[(2)] = null);

(statearr_29003_29056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (29))){
var inst_28951 = (state_28977[(9)]);
var state_28977__$1 = state_28977;
var statearr_29004_29057 = state_28977__$1;
(statearr_29004_29057[(2)] = inst_28951);

(statearr_29004_29057[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (6))){
var state_28977__$1 = state_28977;
var statearr_29005_29058 = state_28977__$1;
(statearr_29005_29058[(2)] = false);

(statearr_29005_29058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (28))){
var inst_28947 = (state_28977[(2)]);
var inst_28948 = calc_state.call(null);
var inst_28904 = inst_28948;
var state_28977__$1 = (function (){var statearr_29006 = state_28977;
(statearr_29006[(7)] = inst_28904);

(statearr_29006[(15)] = inst_28947);

return statearr_29006;
})();
var statearr_29007_29059 = state_28977__$1;
(statearr_29007_29059[(2)] = null);

(statearr_29007_29059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (25))){
var inst_28973 = (state_28977[(2)]);
var state_28977__$1 = state_28977;
var statearr_29008_29060 = state_28977__$1;
(statearr_29008_29060[(2)] = inst_28973);

(statearr_29008_29060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (34))){
var inst_28971 = (state_28977[(2)]);
var state_28977__$1 = state_28977;
var statearr_29009_29061 = state_28977__$1;
(statearr_29009_29061[(2)] = inst_28971);

(statearr_29009_29061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (17))){
var state_28977__$1 = state_28977;
var statearr_29010_29062 = state_28977__$1;
(statearr_29010_29062[(2)] = false);

(statearr_29010_29062[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (3))){
var state_28977__$1 = state_28977;
var statearr_29011_29063 = state_28977__$1;
(statearr_29011_29063[(2)] = false);

(statearr_29011_29063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (12))){
var inst_28975 = (state_28977[(2)]);
var state_28977__$1 = state_28977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28977__$1,inst_28975);
} else {
if((state_val_28978 === (2))){
var inst_28879 = (state_28977[(8)]);
var inst_28884 = inst_28879.cljs$lang$protocol_mask$partition0$;
var inst_28885 = (inst_28884 & (64));
var inst_28886 = inst_28879.cljs$core$ISeq$;
var inst_28887 = (cljs.core.PROTOCOL_SENTINEL === inst_28886);
var inst_28888 = ((inst_28885) || (inst_28887));
var state_28977__$1 = state_28977;
if(cljs.core.truth_(inst_28888)){
var statearr_29012_29064 = state_28977__$1;
(statearr_29012_29064[(1)] = (5));

} else {
var statearr_29013_29065 = state_28977__$1;
(statearr_29013_29065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (23))){
var inst_28936 = (state_28977[(14)]);
var inst_28942 = (inst_28936 == null);
var state_28977__$1 = state_28977;
if(cljs.core.truth_(inst_28942)){
var statearr_29014_29066 = state_28977__$1;
(statearr_29014_29066[(1)] = (26));

} else {
var statearr_29015_29067 = state_28977__$1;
(statearr_29015_29067[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (35))){
var inst_28962 = (state_28977[(2)]);
var state_28977__$1 = state_28977;
if(cljs.core.truth_(inst_28962)){
var statearr_29016_29068 = state_28977__$1;
(statearr_29016_29068[(1)] = (36));

} else {
var statearr_29017_29069 = state_28977__$1;
(statearr_29017_29069[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (19))){
var inst_28904 = (state_28977[(7)]);
var inst_28924 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28904);
var state_28977__$1 = state_28977;
var statearr_29018_29070 = state_28977__$1;
(statearr_29018_29070[(2)] = inst_28924);

(statearr_29018_29070[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (11))){
var inst_28904 = (state_28977[(7)]);
var inst_28908 = (inst_28904 == null);
var inst_28909 = cljs.core.not.call(null,inst_28908);
var state_28977__$1 = state_28977;
if(inst_28909){
var statearr_29019_29071 = state_28977__$1;
(statearr_29019_29071[(1)] = (13));

} else {
var statearr_29020_29072 = state_28977__$1;
(statearr_29020_29072[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (9))){
var inst_28879 = (state_28977[(8)]);
var state_28977__$1 = state_28977;
var statearr_29021_29073 = state_28977__$1;
(statearr_29021_29073[(2)] = inst_28879);

(statearr_29021_29073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (5))){
var state_28977__$1 = state_28977;
var statearr_29022_29074 = state_28977__$1;
(statearr_29022_29074[(2)] = true);

(statearr_29022_29074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (14))){
var state_28977__$1 = state_28977;
var statearr_29023_29075 = state_28977__$1;
(statearr_29023_29075[(2)] = false);

(statearr_29023_29075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (26))){
var inst_28937 = (state_28977[(11)]);
var inst_28944 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28937);
var state_28977__$1 = state_28977;
var statearr_29024_29076 = state_28977__$1;
(statearr_29024_29076[(2)] = inst_28944);

(statearr_29024_29076[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (16))){
var state_28977__$1 = state_28977;
var statearr_29025_29077 = state_28977__$1;
(statearr_29025_29077[(2)] = true);

(statearr_29025_29077[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (38))){
var inst_28967 = (state_28977[(2)]);
var state_28977__$1 = state_28977;
var statearr_29026_29078 = state_28977__$1;
(statearr_29026_29078[(2)] = inst_28967);

(statearr_29026_29078[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (30))){
var inst_28929 = (state_28977[(13)]);
var inst_28928 = (state_28977[(10)]);
var inst_28937 = (state_28977[(11)]);
var inst_28954 = cljs.core.empty_QMARK_.call(null,inst_28928);
var inst_28955 = inst_28929.call(null,inst_28937);
var inst_28956 = cljs.core.not.call(null,inst_28955);
var inst_28957 = ((inst_28954) && (inst_28956));
var state_28977__$1 = state_28977;
var statearr_29027_29079 = state_28977__$1;
(statearr_29027_29079[(2)] = inst_28957);

(statearr_29027_29079[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (10))){
var inst_28879 = (state_28977[(8)]);
var inst_28900 = (state_28977[(2)]);
var inst_28901 = cljs.core.get.call(null,inst_28900,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28902 = cljs.core.get.call(null,inst_28900,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28903 = cljs.core.get.call(null,inst_28900,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28904 = inst_28879;
var state_28977__$1 = (function (){var statearr_29028 = state_28977;
(statearr_29028[(16)] = inst_28903);

(statearr_29028[(7)] = inst_28904);

(statearr_29028[(17)] = inst_28902);

(statearr_29028[(18)] = inst_28901);

return statearr_29028;
})();
var statearr_29029_29080 = state_28977__$1;
(statearr_29029_29080[(2)] = null);

(statearr_29029_29080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (18))){
var inst_28919 = (state_28977[(2)]);
var state_28977__$1 = state_28977;
var statearr_29030_29081 = state_28977__$1;
(statearr_29030_29081[(2)] = inst_28919);

(statearr_29030_29081[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (37))){
var state_28977__$1 = state_28977;
var statearr_29031_29082 = state_28977__$1;
(statearr_29031_29082[(2)] = null);

(statearr_29031_29082[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28978 === (8))){
var inst_28879 = (state_28977[(8)]);
var inst_28897 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28879);
var state_28977__$1 = state_28977;
var statearr_29032_29083 = state_28977__$1;
(statearr_29032_29083[(2)] = inst_28897);

(statearr_29032_29083[(1)] = (10));


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
});})(c__27978__auto___29037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27883__auto__,c__27978__auto___29037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27884__auto__ = null;
var cljs$core$async$mix_$_state_machine__27884__auto____0 = (function (){
var statearr_29033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29033[(0)] = cljs$core$async$mix_$_state_machine__27884__auto__);

(statearr_29033[(1)] = (1));

return statearr_29033;
});
var cljs$core$async$mix_$_state_machine__27884__auto____1 = (function (state_28977){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_28977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e29034){if((e29034 instanceof Object)){
var ex__27887__auto__ = e29034;
var statearr_29035_29084 = state_28977;
(statearr_29035_29084[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29085 = state_28977;
state_28977 = G__29085;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27884__auto__ = function(state_28977){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27884__auto____1.call(this,state_28977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27884__auto____0;
cljs$core$async$mix_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27884__auto____1;
return cljs$core$async$mix_$_state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto___29037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27980__auto__ = (function (){var statearr_29036 = f__27979__auto__.call(null);
(statearr_29036[(6)] = c__27978__auto___29037);

return statearr_29036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto___29037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29087 = arguments.length;
switch (G__29087) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29091 = arguments.length;
switch (G__29091) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__29089_SHARP_){
if(cljs.core.truth_(p1__29089_SHARP_.call(null,topic))){
return p1__29089_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29089_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29092 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29092 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29093){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29093 = meta29093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29094,meta29093__$1){
var self__ = this;
var _29094__$1 = this;
return (new cljs.core.async.t_cljs$core$async29092(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29093__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29092.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29094){
var self__ = this;
var _29094__$1 = this;
return self__.meta29093;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29092.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29092.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29092.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29092.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29092.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29092.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29092.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29092.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29093","meta29093",316440336,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29092";

cljs.core.async.t_cljs$core$async29092.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29092");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29092.
 */
cljs.core.async.__GT_t_cljs$core$async29092 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29092(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29093){
return (new cljs.core.async.t_cljs$core$async29092(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29093));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29092(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27978__auto___29212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto___29212,mults,ensure_mult,p){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto___29212,mults,ensure_mult,p){
return (function (state_29166){
var state_val_29167 = (state_29166[(1)]);
if((state_val_29167 === (7))){
var inst_29162 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29168_29213 = state_29166__$1;
(statearr_29168_29213[(2)] = inst_29162);

(statearr_29168_29213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (20))){
var state_29166__$1 = state_29166;
var statearr_29169_29214 = state_29166__$1;
(statearr_29169_29214[(2)] = null);

(statearr_29169_29214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (1))){
var state_29166__$1 = state_29166;
var statearr_29170_29215 = state_29166__$1;
(statearr_29170_29215[(2)] = null);

(statearr_29170_29215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (24))){
var inst_29145 = (state_29166[(7)]);
var inst_29154 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29145);
var state_29166__$1 = state_29166;
var statearr_29171_29216 = state_29166__$1;
(statearr_29171_29216[(2)] = inst_29154);

(statearr_29171_29216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (4))){
var inst_29097 = (state_29166[(8)]);
var inst_29097__$1 = (state_29166[(2)]);
var inst_29098 = (inst_29097__$1 == null);
var state_29166__$1 = (function (){var statearr_29172 = state_29166;
(statearr_29172[(8)] = inst_29097__$1);

return statearr_29172;
})();
if(cljs.core.truth_(inst_29098)){
var statearr_29173_29217 = state_29166__$1;
(statearr_29173_29217[(1)] = (5));

} else {
var statearr_29174_29218 = state_29166__$1;
(statearr_29174_29218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (15))){
var inst_29139 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29175_29219 = state_29166__$1;
(statearr_29175_29219[(2)] = inst_29139);

(statearr_29175_29219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (21))){
var inst_29159 = (state_29166[(2)]);
var state_29166__$1 = (function (){var statearr_29176 = state_29166;
(statearr_29176[(9)] = inst_29159);

return statearr_29176;
})();
var statearr_29177_29220 = state_29166__$1;
(statearr_29177_29220[(2)] = null);

(statearr_29177_29220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (13))){
var inst_29121 = (state_29166[(10)]);
var inst_29123 = cljs.core.chunked_seq_QMARK_.call(null,inst_29121);
var state_29166__$1 = state_29166;
if(inst_29123){
var statearr_29178_29221 = state_29166__$1;
(statearr_29178_29221[(1)] = (16));

} else {
var statearr_29179_29222 = state_29166__$1;
(statearr_29179_29222[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (22))){
var inst_29151 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
if(cljs.core.truth_(inst_29151)){
var statearr_29180_29223 = state_29166__$1;
(statearr_29180_29223[(1)] = (23));

} else {
var statearr_29181_29224 = state_29166__$1;
(statearr_29181_29224[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (6))){
var inst_29147 = (state_29166[(11)]);
var inst_29145 = (state_29166[(7)]);
var inst_29097 = (state_29166[(8)]);
var inst_29145__$1 = topic_fn.call(null,inst_29097);
var inst_29146 = cljs.core.deref.call(null,mults);
var inst_29147__$1 = cljs.core.get.call(null,inst_29146,inst_29145__$1);
var state_29166__$1 = (function (){var statearr_29182 = state_29166;
(statearr_29182[(11)] = inst_29147__$1);

(statearr_29182[(7)] = inst_29145__$1);

return statearr_29182;
})();
if(cljs.core.truth_(inst_29147__$1)){
var statearr_29183_29225 = state_29166__$1;
(statearr_29183_29225[(1)] = (19));

} else {
var statearr_29184_29226 = state_29166__$1;
(statearr_29184_29226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (25))){
var inst_29156 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29185_29227 = state_29166__$1;
(statearr_29185_29227[(2)] = inst_29156);

(statearr_29185_29227[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (17))){
var inst_29121 = (state_29166[(10)]);
var inst_29130 = cljs.core.first.call(null,inst_29121);
var inst_29131 = cljs.core.async.muxch_STAR_.call(null,inst_29130);
var inst_29132 = cljs.core.async.close_BANG_.call(null,inst_29131);
var inst_29133 = cljs.core.next.call(null,inst_29121);
var inst_29107 = inst_29133;
var inst_29108 = null;
var inst_29109 = (0);
var inst_29110 = (0);
var state_29166__$1 = (function (){var statearr_29186 = state_29166;
(statearr_29186[(12)] = inst_29109);

(statearr_29186[(13)] = inst_29107);

(statearr_29186[(14)] = inst_29132);

(statearr_29186[(15)] = inst_29108);

(statearr_29186[(16)] = inst_29110);

return statearr_29186;
})();
var statearr_29187_29228 = state_29166__$1;
(statearr_29187_29228[(2)] = null);

(statearr_29187_29228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (3))){
var inst_29164 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29166__$1,inst_29164);
} else {
if((state_val_29167 === (12))){
var inst_29141 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29188_29229 = state_29166__$1;
(statearr_29188_29229[(2)] = inst_29141);

(statearr_29188_29229[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (2))){
var state_29166__$1 = state_29166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29166__$1,(4),ch);
} else {
if((state_val_29167 === (23))){
var state_29166__$1 = state_29166;
var statearr_29189_29230 = state_29166__$1;
(statearr_29189_29230[(2)] = null);

(statearr_29189_29230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (19))){
var inst_29147 = (state_29166[(11)]);
var inst_29097 = (state_29166[(8)]);
var inst_29149 = cljs.core.async.muxch_STAR_.call(null,inst_29147);
var state_29166__$1 = state_29166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29166__$1,(22),inst_29149,inst_29097);
} else {
if((state_val_29167 === (11))){
var inst_29107 = (state_29166[(13)]);
var inst_29121 = (state_29166[(10)]);
var inst_29121__$1 = cljs.core.seq.call(null,inst_29107);
var state_29166__$1 = (function (){var statearr_29190 = state_29166;
(statearr_29190[(10)] = inst_29121__$1);

return statearr_29190;
})();
if(inst_29121__$1){
var statearr_29191_29231 = state_29166__$1;
(statearr_29191_29231[(1)] = (13));

} else {
var statearr_29192_29232 = state_29166__$1;
(statearr_29192_29232[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (9))){
var inst_29143 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29193_29233 = state_29166__$1;
(statearr_29193_29233[(2)] = inst_29143);

(statearr_29193_29233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (5))){
var inst_29104 = cljs.core.deref.call(null,mults);
var inst_29105 = cljs.core.vals.call(null,inst_29104);
var inst_29106 = cljs.core.seq.call(null,inst_29105);
var inst_29107 = inst_29106;
var inst_29108 = null;
var inst_29109 = (0);
var inst_29110 = (0);
var state_29166__$1 = (function (){var statearr_29194 = state_29166;
(statearr_29194[(12)] = inst_29109);

(statearr_29194[(13)] = inst_29107);

(statearr_29194[(15)] = inst_29108);

(statearr_29194[(16)] = inst_29110);

return statearr_29194;
})();
var statearr_29195_29234 = state_29166__$1;
(statearr_29195_29234[(2)] = null);

(statearr_29195_29234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (14))){
var state_29166__$1 = state_29166;
var statearr_29199_29235 = state_29166__$1;
(statearr_29199_29235[(2)] = null);

(statearr_29199_29235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (16))){
var inst_29121 = (state_29166[(10)]);
var inst_29125 = cljs.core.chunk_first.call(null,inst_29121);
var inst_29126 = cljs.core.chunk_rest.call(null,inst_29121);
var inst_29127 = cljs.core.count.call(null,inst_29125);
var inst_29107 = inst_29126;
var inst_29108 = inst_29125;
var inst_29109 = inst_29127;
var inst_29110 = (0);
var state_29166__$1 = (function (){var statearr_29200 = state_29166;
(statearr_29200[(12)] = inst_29109);

(statearr_29200[(13)] = inst_29107);

(statearr_29200[(15)] = inst_29108);

(statearr_29200[(16)] = inst_29110);

return statearr_29200;
})();
var statearr_29201_29236 = state_29166__$1;
(statearr_29201_29236[(2)] = null);

(statearr_29201_29236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (10))){
var inst_29109 = (state_29166[(12)]);
var inst_29107 = (state_29166[(13)]);
var inst_29108 = (state_29166[(15)]);
var inst_29110 = (state_29166[(16)]);
var inst_29115 = cljs.core._nth.call(null,inst_29108,inst_29110);
var inst_29116 = cljs.core.async.muxch_STAR_.call(null,inst_29115);
var inst_29117 = cljs.core.async.close_BANG_.call(null,inst_29116);
var inst_29118 = (inst_29110 + (1));
var tmp29196 = inst_29109;
var tmp29197 = inst_29107;
var tmp29198 = inst_29108;
var inst_29107__$1 = tmp29197;
var inst_29108__$1 = tmp29198;
var inst_29109__$1 = tmp29196;
var inst_29110__$1 = inst_29118;
var state_29166__$1 = (function (){var statearr_29202 = state_29166;
(statearr_29202[(12)] = inst_29109__$1);

(statearr_29202[(13)] = inst_29107__$1);

(statearr_29202[(15)] = inst_29108__$1);

(statearr_29202[(16)] = inst_29110__$1);

(statearr_29202[(17)] = inst_29117);

return statearr_29202;
})();
var statearr_29203_29237 = state_29166__$1;
(statearr_29203_29237[(2)] = null);

(statearr_29203_29237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (18))){
var inst_29136 = (state_29166[(2)]);
var state_29166__$1 = state_29166;
var statearr_29204_29238 = state_29166__$1;
(statearr_29204_29238[(2)] = inst_29136);

(statearr_29204_29238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29167 === (8))){
var inst_29109 = (state_29166[(12)]);
var inst_29110 = (state_29166[(16)]);
var inst_29112 = (inst_29110 < inst_29109);
var inst_29113 = inst_29112;
var state_29166__$1 = state_29166;
if(cljs.core.truth_(inst_29113)){
var statearr_29205_29239 = state_29166__$1;
(statearr_29205_29239[(1)] = (10));

} else {
var statearr_29206_29240 = state_29166__$1;
(statearr_29206_29240[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__27978__auto___29212,mults,ensure_mult,p))
;
return ((function (switch__27883__auto__,c__27978__auto___29212,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27884__auto__ = null;
var cljs$core$async$state_machine__27884__auto____0 = (function (){
var statearr_29207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29207[(0)] = cljs$core$async$state_machine__27884__auto__);

(statearr_29207[(1)] = (1));

return statearr_29207;
});
var cljs$core$async$state_machine__27884__auto____1 = (function (state_29166){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_29166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e29208){if((e29208 instanceof Object)){
var ex__27887__auto__ = e29208;
var statearr_29209_29241 = state_29166;
(statearr_29209_29241[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29242 = state_29166;
state_29166 = G__29242;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$state_machine__27884__auto__ = function(state_29166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27884__auto____1.call(this,state_29166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27884__auto____0;
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27884__auto____1;
return cljs$core$async$state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto___29212,mults,ensure_mult,p))
})();
var state__27980__auto__ = (function (){var statearr_29210 = f__27979__auto__.call(null);
(statearr_29210[(6)] = c__27978__auto___29212);

return statearr_29210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto___29212,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29244 = arguments.length;
switch (G__29244) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29247 = arguments.length;
switch (G__29247) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29250 = arguments.length;
switch (G__29250) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27978__auto___29317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto___29317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto___29317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29289){
var state_val_29290 = (state_29289[(1)]);
if((state_val_29290 === (7))){
var state_29289__$1 = state_29289;
var statearr_29291_29318 = state_29289__$1;
(statearr_29291_29318[(2)] = null);

(statearr_29291_29318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (1))){
var state_29289__$1 = state_29289;
var statearr_29292_29319 = state_29289__$1;
(statearr_29292_29319[(2)] = null);

(statearr_29292_29319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (4))){
var inst_29253 = (state_29289[(7)]);
var inst_29255 = (inst_29253 < cnt);
var state_29289__$1 = state_29289;
if(cljs.core.truth_(inst_29255)){
var statearr_29293_29320 = state_29289__$1;
(statearr_29293_29320[(1)] = (6));

} else {
var statearr_29294_29321 = state_29289__$1;
(statearr_29294_29321[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (15))){
var inst_29285 = (state_29289[(2)]);
var state_29289__$1 = state_29289;
var statearr_29295_29322 = state_29289__$1;
(statearr_29295_29322[(2)] = inst_29285);

(statearr_29295_29322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (13))){
var inst_29278 = cljs.core.async.close_BANG_.call(null,out);
var state_29289__$1 = state_29289;
var statearr_29296_29323 = state_29289__$1;
(statearr_29296_29323[(2)] = inst_29278);

(statearr_29296_29323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (6))){
var state_29289__$1 = state_29289;
var statearr_29297_29324 = state_29289__$1;
(statearr_29297_29324[(2)] = null);

(statearr_29297_29324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (3))){
var inst_29287 = (state_29289[(2)]);
var state_29289__$1 = state_29289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29289__$1,inst_29287);
} else {
if((state_val_29290 === (12))){
var inst_29275 = (state_29289[(8)]);
var inst_29275__$1 = (state_29289[(2)]);
var inst_29276 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29275__$1);
var state_29289__$1 = (function (){var statearr_29298 = state_29289;
(statearr_29298[(8)] = inst_29275__$1);

return statearr_29298;
})();
if(cljs.core.truth_(inst_29276)){
var statearr_29299_29325 = state_29289__$1;
(statearr_29299_29325[(1)] = (13));

} else {
var statearr_29300_29326 = state_29289__$1;
(statearr_29300_29326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (2))){
var inst_29252 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29253 = (0);
var state_29289__$1 = (function (){var statearr_29301 = state_29289;
(statearr_29301[(9)] = inst_29252);

(statearr_29301[(7)] = inst_29253);

return statearr_29301;
})();
var statearr_29302_29327 = state_29289__$1;
(statearr_29302_29327[(2)] = null);

(statearr_29302_29327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (11))){
var inst_29253 = (state_29289[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29289,(10),Object,null,(9));
var inst_29262 = chs__$1.call(null,inst_29253);
var inst_29263 = done.call(null,inst_29253);
var inst_29264 = cljs.core.async.take_BANG_.call(null,inst_29262,inst_29263);
var state_29289__$1 = state_29289;
var statearr_29303_29328 = state_29289__$1;
(statearr_29303_29328[(2)] = inst_29264);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29289__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (9))){
var inst_29253 = (state_29289[(7)]);
var inst_29266 = (state_29289[(2)]);
var inst_29267 = (inst_29253 + (1));
var inst_29253__$1 = inst_29267;
var state_29289__$1 = (function (){var statearr_29304 = state_29289;
(statearr_29304[(10)] = inst_29266);

(statearr_29304[(7)] = inst_29253__$1);

return statearr_29304;
})();
var statearr_29305_29329 = state_29289__$1;
(statearr_29305_29329[(2)] = null);

(statearr_29305_29329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (5))){
var inst_29273 = (state_29289[(2)]);
var state_29289__$1 = (function (){var statearr_29306 = state_29289;
(statearr_29306[(11)] = inst_29273);

return statearr_29306;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29289__$1,(12),dchan);
} else {
if((state_val_29290 === (14))){
var inst_29275 = (state_29289[(8)]);
var inst_29280 = cljs.core.apply.call(null,f,inst_29275);
var state_29289__$1 = state_29289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29289__$1,(16),out,inst_29280);
} else {
if((state_val_29290 === (16))){
var inst_29282 = (state_29289[(2)]);
var state_29289__$1 = (function (){var statearr_29307 = state_29289;
(statearr_29307[(12)] = inst_29282);

return statearr_29307;
})();
var statearr_29308_29330 = state_29289__$1;
(statearr_29308_29330[(2)] = null);

(statearr_29308_29330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (10))){
var inst_29257 = (state_29289[(2)]);
var inst_29258 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29289__$1 = (function (){var statearr_29309 = state_29289;
(statearr_29309[(13)] = inst_29257);

return statearr_29309;
})();
var statearr_29310_29331 = state_29289__$1;
(statearr_29310_29331[(2)] = inst_29258);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29289__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (8))){
var inst_29271 = (state_29289[(2)]);
var state_29289__$1 = state_29289;
var statearr_29311_29332 = state_29289__$1;
(statearr_29311_29332[(2)] = inst_29271);

(statearr_29311_29332[(1)] = (5));


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
});})(c__27978__auto___29317,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27883__auto__,c__27978__auto___29317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27884__auto__ = null;
var cljs$core$async$state_machine__27884__auto____0 = (function (){
var statearr_29312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29312[(0)] = cljs$core$async$state_machine__27884__auto__);

(statearr_29312[(1)] = (1));

return statearr_29312;
});
var cljs$core$async$state_machine__27884__auto____1 = (function (state_29289){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_29289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e29313){if((e29313 instanceof Object)){
var ex__27887__auto__ = e29313;
var statearr_29314_29333 = state_29289;
(statearr_29314_29333[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29334 = state_29289;
state_29289 = G__29334;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$state_machine__27884__auto__ = function(state_29289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27884__auto____1.call(this,state_29289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27884__auto____0;
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27884__auto____1;
return cljs$core$async$state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto___29317,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27980__auto__ = (function (){var statearr_29315 = f__27979__auto__.call(null);
(statearr_29315[(6)] = c__27978__auto___29317);

return statearr_29315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto___29317,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29337 = arguments.length;
switch (G__29337) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27978__auto___29391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto___29391,out){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto___29391,out){
return (function (state_29369){
var state_val_29370 = (state_29369[(1)]);
if((state_val_29370 === (7))){
var inst_29348 = (state_29369[(7)]);
var inst_29349 = (state_29369[(8)]);
var inst_29348__$1 = (state_29369[(2)]);
var inst_29349__$1 = cljs.core.nth.call(null,inst_29348__$1,(0),null);
var inst_29350 = cljs.core.nth.call(null,inst_29348__$1,(1),null);
var inst_29351 = (inst_29349__$1 == null);
var state_29369__$1 = (function (){var statearr_29371 = state_29369;
(statearr_29371[(7)] = inst_29348__$1);

(statearr_29371[(9)] = inst_29350);

(statearr_29371[(8)] = inst_29349__$1);

return statearr_29371;
})();
if(cljs.core.truth_(inst_29351)){
var statearr_29372_29392 = state_29369__$1;
(statearr_29372_29392[(1)] = (8));

} else {
var statearr_29373_29393 = state_29369__$1;
(statearr_29373_29393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (1))){
var inst_29338 = cljs.core.vec.call(null,chs);
var inst_29339 = inst_29338;
var state_29369__$1 = (function (){var statearr_29374 = state_29369;
(statearr_29374[(10)] = inst_29339);

return statearr_29374;
})();
var statearr_29375_29394 = state_29369__$1;
(statearr_29375_29394[(2)] = null);

(statearr_29375_29394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (4))){
var inst_29339 = (state_29369[(10)]);
var state_29369__$1 = state_29369;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29369__$1,(7),inst_29339);
} else {
if((state_val_29370 === (6))){
var inst_29365 = (state_29369[(2)]);
var state_29369__$1 = state_29369;
var statearr_29376_29395 = state_29369__$1;
(statearr_29376_29395[(2)] = inst_29365);

(statearr_29376_29395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (3))){
var inst_29367 = (state_29369[(2)]);
var state_29369__$1 = state_29369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29369__$1,inst_29367);
} else {
if((state_val_29370 === (2))){
var inst_29339 = (state_29369[(10)]);
var inst_29341 = cljs.core.count.call(null,inst_29339);
var inst_29342 = (inst_29341 > (0));
var state_29369__$1 = state_29369;
if(cljs.core.truth_(inst_29342)){
var statearr_29378_29396 = state_29369__$1;
(statearr_29378_29396[(1)] = (4));

} else {
var statearr_29379_29397 = state_29369__$1;
(statearr_29379_29397[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (11))){
var inst_29339 = (state_29369[(10)]);
var inst_29358 = (state_29369[(2)]);
var tmp29377 = inst_29339;
var inst_29339__$1 = tmp29377;
var state_29369__$1 = (function (){var statearr_29380 = state_29369;
(statearr_29380[(10)] = inst_29339__$1);

(statearr_29380[(11)] = inst_29358);

return statearr_29380;
})();
var statearr_29381_29398 = state_29369__$1;
(statearr_29381_29398[(2)] = null);

(statearr_29381_29398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (9))){
var inst_29349 = (state_29369[(8)]);
var state_29369__$1 = state_29369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29369__$1,(11),out,inst_29349);
} else {
if((state_val_29370 === (5))){
var inst_29363 = cljs.core.async.close_BANG_.call(null,out);
var state_29369__$1 = state_29369;
var statearr_29382_29399 = state_29369__$1;
(statearr_29382_29399[(2)] = inst_29363);

(statearr_29382_29399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (10))){
var inst_29361 = (state_29369[(2)]);
var state_29369__$1 = state_29369;
var statearr_29383_29400 = state_29369__$1;
(statearr_29383_29400[(2)] = inst_29361);

(statearr_29383_29400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (8))){
var inst_29348 = (state_29369[(7)]);
var inst_29350 = (state_29369[(9)]);
var inst_29339 = (state_29369[(10)]);
var inst_29349 = (state_29369[(8)]);
var inst_29353 = (function (){var cs = inst_29339;
var vec__29344 = inst_29348;
var v = inst_29349;
var c = inst_29350;
return ((function (cs,vec__29344,v,c,inst_29348,inst_29350,inst_29339,inst_29349,state_val_29370,c__27978__auto___29391,out){
return (function (p1__29335_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29335_SHARP_);
});
;})(cs,vec__29344,v,c,inst_29348,inst_29350,inst_29339,inst_29349,state_val_29370,c__27978__auto___29391,out))
})();
var inst_29354 = cljs.core.filterv.call(null,inst_29353,inst_29339);
var inst_29339__$1 = inst_29354;
var state_29369__$1 = (function (){var statearr_29384 = state_29369;
(statearr_29384[(10)] = inst_29339__$1);

return statearr_29384;
})();
var statearr_29385_29401 = state_29369__$1;
(statearr_29385_29401[(2)] = null);

(statearr_29385_29401[(1)] = (2));


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
});})(c__27978__auto___29391,out))
;
return ((function (switch__27883__auto__,c__27978__auto___29391,out){
return (function() {
var cljs$core$async$state_machine__27884__auto__ = null;
var cljs$core$async$state_machine__27884__auto____0 = (function (){
var statearr_29386 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29386[(0)] = cljs$core$async$state_machine__27884__auto__);

(statearr_29386[(1)] = (1));

return statearr_29386;
});
var cljs$core$async$state_machine__27884__auto____1 = (function (state_29369){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_29369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e29387){if((e29387 instanceof Object)){
var ex__27887__auto__ = e29387;
var statearr_29388_29402 = state_29369;
(statearr_29388_29402[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29403 = state_29369;
state_29369 = G__29403;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$state_machine__27884__auto__ = function(state_29369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27884__auto____1.call(this,state_29369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27884__auto____0;
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27884__auto____1;
return cljs$core$async$state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto___29391,out))
})();
var state__27980__auto__ = (function (){var statearr_29389 = f__27979__auto__.call(null);
(statearr_29389[(6)] = c__27978__auto___29391);

return statearr_29389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto___29391,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29405 = arguments.length;
switch (G__29405) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27978__auto___29450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto___29450,out){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto___29450,out){
return (function (state_29429){
var state_val_29430 = (state_29429[(1)]);
if((state_val_29430 === (7))){
var inst_29411 = (state_29429[(7)]);
var inst_29411__$1 = (state_29429[(2)]);
var inst_29412 = (inst_29411__$1 == null);
var inst_29413 = cljs.core.not.call(null,inst_29412);
var state_29429__$1 = (function (){var statearr_29431 = state_29429;
(statearr_29431[(7)] = inst_29411__$1);

return statearr_29431;
})();
if(inst_29413){
var statearr_29432_29451 = state_29429__$1;
(statearr_29432_29451[(1)] = (8));

} else {
var statearr_29433_29452 = state_29429__$1;
(statearr_29433_29452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (1))){
var inst_29406 = (0);
var state_29429__$1 = (function (){var statearr_29434 = state_29429;
(statearr_29434[(8)] = inst_29406);

return statearr_29434;
})();
var statearr_29435_29453 = state_29429__$1;
(statearr_29435_29453[(2)] = null);

(statearr_29435_29453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (4))){
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29429__$1,(7),ch);
} else {
if((state_val_29430 === (6))){
var inst_29424 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
var statearr_29436_29454 = state_29429__$1;
(statearr_29436_29454[(2)] = inst_29424);

(statearr_29436_29454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (3))){
var inst_29426 = (state_29429[(2)]);
var inst_29427 = cljs.core.async.close_BANG_.call(null,out);
var state_29429__$1 = (function (){var statearr_29437 = state_29429;
(statearr_29437[(9)] = inst_29426);

return statearr_29437;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29429__$1,inst_29427);
} else {
if((state_val_29430 === (2))){
var inst_29406 = (state_29429[(8)]);
var inst_29408 = (inst_29406 < n);
var state_29429__$1 = state_29429;
if(cljs.core.truth_(inst_29408)){
var statearr_29438_29455 = state_29429__$1;
(statearr_29438_29455[(1)] = (4));

} else {
var statearr_29439_29456 = state_29429__$1;
(statearr_29439_29456[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (11))){
var inst_29406 = (state_29429[(8)]);
var inst_29416 = (state_29429[(2)]);
var inst_29417 = (inst_29406 + (1));
var inst_29406__$1 = inst_29417;
var state_29429__$1 = (function (){var statearr_29440 = state_29429;
(statearr_29440[(10)] = inst_29416);

(statearr_29440[(8)] = inst_29406__$1);

return statearr_29440;
})();
var statearr_29441_29457 = state_29429__$1;
(statearr_29441_29457[(2)] = null);

(statearr_29441_29457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (9))){
var state_29429__$1 = state_29429;
var statearr_29442_29458 = state_29429__$1;
(statearr_29442_29458[(2)] = null);

(statearr_29442_29458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (5))){
var state_29429__$1 = state_29429;
var statearr_29443_29459 = state_29429__$1;
(statearr_29443_29459[(2)] = null);

(statearr_29443_29459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (10))){
var inst_29421 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
var statearr_29444_29460 = state_29429__$1;
(statearr_29444_29460[(2)] = inst_29421);

(statearr_29444_29460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (8))){
var inst_29411 = (state_29429[(7)]);
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29429__$1,(11),out,inst_29411);
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
});})(c__27978__auto___29450,out))
;
return ((function (switch__27883__auto__,c__27978__auto___29450,out){
return (function() {
var cljs$core$async$state_machine__27884__auto__ = null;
var cljs$core$async$state_machine__27884__auto____0 = (function (){
var statearr_29445 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29445[(0)] = cljs$core$async$state_machine__27884__auto__);

(statearr_29445[(1)] = (1));

return statearr_29445;
});
var cljs$core$async$state_machine__27884__auto____1 = (function (state_29429){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_29429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e29446){if((e29446 instanceof Object)){
var ex__27887__auto__ = e29446;
var statearr_29447_29461 = state_29429;
(statearr_29447_29461[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29462 = state_29429;
state_29429 = G__29462;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$state_machine__27884__auto__ = function(state_29429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27884__auto____1.call(this,state_29429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27884__auto____0;
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27884__auto____1;
return cljs$core$async$state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto___29450,out))
})();
var state__27980__auto__ = (function (){var statearr_29448 = f__27979__auto__.call(null);
(statearr_29448[(6)] = c__27978__auto___29450);

return statearr_29448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto___29450,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29464 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29464 = (function (f,ch,meta29465){
this.f = f;
this.ch = ch;
this.meta29465 = meta29465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29466,meta29465__$1){
var self__ = this;
var _29466__$1 = this;
return (new cljs.core.async.t_cljs$core$async29464(self__.f,self__.ch,meta29465__$1));
});

cljs.core.async.t_cljs$core$async29464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29466){
var self__ = this;
var _29466__$1 = this;
return self__.meta29465;
});

cljs.core.async.t_cljs$core$async29464.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29464.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29464.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29464.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29464.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29467 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29467 = (function (f,ch,meta29465,_,fn1,meta29468){
this.f = f;
this.ch = ch;
this.meta29465 = meta29465;
this._ = _;
this.fn1 = fn1;
this.meta29468 = meta29468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29469,meta29468__$1){
var self__ = this;
var _29469__$1 = this;
return (new cljs.core.async.t_cljs$core$async29467(self__.f,self__.ch,self__.meta29465,self__._,self__.fn1,meta29468__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29467.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29469){
var self__ = this;
var _29469__$1 = this;
return self__.meta29468;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29467.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29467.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29467.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29467.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29463_SHARP_){
return f1.call(null,(((p1__29463_SHARP_ == null))?null:self__.f.call(null,p1__29463_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29467.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29465","meta29465",-587797878,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29464","cljs.core.async/t_cljs$core$async29464",-2068640881,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29468","meta29468",459444889,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29467";

cljs.core.async.t_cljs$core$async29467.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29467");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29467.
 */
cljs.core.async.__GT_t_cljs$core$async29467 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29467(f__$1,ch__$1,meta29465__$1,___$2,fn1__$1,meta29468){
return (new cljs.core.async.t_cljs$core$async29467(f__$1,ch__$1,meta29465__$1,___$2,fn1__$1,meta29468));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29467(self__.f,self__.ch,self__.meta29465,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29464.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29464.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29465","meta29465",-587797878,null)], null);
});

cljs.core.async.t_cljs$core$async29464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29464";

cljs.core.async.t_cljs$core$async29464.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29464");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29464.
 */
cljs.core.async.__GT_t_cljs$core$async29464 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29464(f__$1,ch__$1,meta29465){
return (new cljs.core.async.t_cljs$core$async29464(f__$1,ch__$1,meta29465));
});

}

return (new cljs.core.async.t_cljs$core$async29464(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29470 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29470 = (function (f,ch,meta29471){
this.f = f;
this.ch = ch;
this.meta29471 = meta29471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29472,meta29471__$1){
var self__ = this;
var _29472__$1 = this;
return (new cljs.core.async.t_cljs$core$async29470(self__.f,self__.ch,meta29471__$1));
});

cljs.core.async.t_cljs$core$async29470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29472){
var self__ = this;
var _29472__$1 = this;
return self__.meta29471;
});

cljs.core.async.t_cljs$core$async29470.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29470.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29470.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29470.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29470.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29470.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29471","meta29471",-440277358,null)], null);
});

cljs.core.async.t_cljs$core$async29470.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29470";

cljs.core.async.t_cljs$core$async29470.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29470");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29470.
 */
cljs.core.async.__GT_t_cljs$core$async29470 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29470(f__$1,ch__$1,meta29471){
return (new cljs.core.async.t_cljs$core$async29470(f__$1,ch__$1,meta29471));
});

}

return (new cljs.core.async.t_cljs$core$async29470(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29473 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29473 = (function (p,ch,meta29474){
this.p = p;
this.ch = ch;
this.meta29474 = meta29474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29475,meta29474__$1){
var self__ = this;
var _29475__$1 = this;
return (new cljs.core.async.t_cljs$core$async29473(self__.p,self__.ch,meta29474__$1));
});

cljs.core.async.t_cljs$core$async29473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29475){
var self__ = this;
var _29475__$1 = this;
return self__.meta29474;
});

cljs.core.async.t_cljs$core$async29473.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29473.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29473.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29473.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29473.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29473.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29473.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29474","meta29474",1276490054,null)], null);
});

cljs.core.async.t_cljs$core$async29473.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29473";

cljs.core.async.t_cljs$core$async29473.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29473");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29473.
 */
cljs.core.async.__GT_t_cljs$core$async29473 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29473(p__$1,ch__$1,meta29474){
return (new cljs.core.async.t_cljs$core$async29473(p__$1,ch__$1,meta29474));
});

}

return (new cljs.core.async.t_cljs$core$async29473(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29477 = arguments.length;
switch (G__29477) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27978__auto___29517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto___29517,out){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto___29517,out){
return (function (state_29498){
var state_val_29499 = (state_29498[(1)]);
if((state_val_29499 === (7))){
var inst_29494 = (state_29498[(2)]);
var state_29498__$1 = state_29498;
var statearr_29500_29518 = state_29498__$1;
(statearr_29500_29518[(2)] = inst_29494);

(statearr_29500_29518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29499 === (1))){
var state_29498__$1 = state_29498;
var statearr_29501_29519 = state_29498__$1;
(statearr_29501_29519[(2)] = null);

(statearr_29501_29519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29499 === (4))){
var inst_29480 = (state_29498[(7)]);
var inst_29480__$1 = (state_29498[(2)]);
var inst_29481 = (inst_29480__$1 == null);
var state_29498__$1 = (function (){var statearr_29502 = state_29498;
(statearr_29502[(7)] = inst_29480__$1);

return statearr_29502;
})();
if(cljs.core.truth_(inst_29481)){
var statearr_29503_29520 = state_29498__$1;
(statearr_29503_29520[(1)] = (5));

} else {
var statearr_29504_29521 = state_29498__$1;
(statearr_29504_29521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29499 === (6))){
var inst_29480 = (state_29498[(7)]);
var inst_29485 = p.call(null,inst_29480);
var state_29498__$1 = state_29498;
if(cljs.core.truth_(inst_29485)){
var statearr_29505_29522 = state_29498__$1;
(statearr_29505_29522[(1)] = (8));

} else {
var statearr_29506_29523 = state_29498__$1;
(statearr_29506_29523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29499 === (3))){
var inst_29496 = (state_29498[(2)]);
var state_29498__$1 = state_29498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29498__$1,inst_29496);
} else {
if((state_val_29499 === (2))){
var state_29498__$1 = state_29498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29498__$1,(4),ch);
} else {
if((state_val_29499 === (11))){
var inst_29488 = (state_29498[(2)]);
var state_29498__$1 = state_29498;
var statearr_29507_29524 = state_29498__$1;
(statearr_29507_29524[(2)] = inst_29488);

(statearr_29507_29524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29499 === (9))){
var state_29498__$1 = state_29498;
var statearr_29508_29525 = state_29498__$1;
(statearr_29508_29525[(2)] = null);

(statearr_29508_29525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29499 === (5))){
var inst_29483 = cljs.core.async.close_BANG_.call(null,out);
var state_29498__$1 = state_29498;
var statearr_29509_29526 = state_29498__$1;
(statearr_29509_29526[(2)] = inst_29483);

(statearr_29509_29526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29499 === (10))){
var inst_29491 = (state_29498[(2)]);
var state_29498__$1 = (function (){var statearr_29510 = state_29498;
(statearr_29510[(8)] = inst_29491);

return statearr_29510;
})();
var statearr_29511_29527 = state_29498__$1;
(statearr_29511_29527[(2)] = null);

(statearr_29511_29527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29499 === (8))){
var inst_29480 = (state_29498[(7)]);
var state_29498__$1 = state_29498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29498__$1,(11),out,inst_29480);
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
});})(c__27978__auto___29517,out))
;
return ((function (switch__27883__auto__,c__27978__auto___29517,out){
return (function() {
var cljs$core$async$state_machine__27884__auto__ = null;
var cljs$core$async$state_machine__27884__auto____0 = (function (){
var statearr_29512 = [null,null,null,null,null,null,null,null,null];
(statearr_29512[(0)] = cljs$core$async$state_machine__27884__auto__);

(statearr_29512[(1)] = (1));

return statearr_29512;
});
var cljs$core$async$state_machine__27884__auto____1 = (function (state_29498){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_29498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e29513){if((e29513 instanceof Object)){
var ex__27887__auto__ = e29513;
var statearr_29514_29528 = state_29498;
(statearr_29514_29528[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29529 = state_29498;
state_29498 = G__29529;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$state_machine__27884__auto__ = function(state_29498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27884__auto____1.call(this,state_29498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27884__auto____0;
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27884__auto____1;
return cljs$core$async$state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto___29517,out))
})();
var state__27980__auto__ = (function (){var statearr_29515 = f__27979__auto__.call(null);
(statearr_29515[(6)] = c__27978__auto___29517);

return statearr_29515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto___29517,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29531 = arguments.length;
switch (G__29531) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto__){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto__){
return (function (state_29594){
var state_val_29595 = (state_29594[(1)]);
if((state_val_29595 === (7))){
var inst_29590 = (state_29594[(2)]);
var state_29594__$1 = state_29594;
var statearr_29596_29634 = state_29594__$1;
(statearr_29596_29634[(2)] = inst_29590);

(statearr_29596_29634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (20))){
var inst_29560 = (state_29594[(7)]);
var inst_29571 = (state_29594[(2)]);
var inst_29572 = cljs.core.next.call(null,inst_29560);
var inst_29546 = inst_29572;
var inst_29547 = null;
var inst_29548 = (0);
var inst_29549 = (0);
var state_29594__$1 = (function (){var statearr_29597 = state_29594;
(statearr_29597[(8)] = inst_29549);

(statearr_29597[(9)] = inst_29547);

(statearr_29597[(10)] = inst_29546);

(statearr_29597[(11)] = inst_29548);

(statearr_29597[(12)] = inst_29571);

return statearr_29597;
})();
var statearr_29598_29635 = state_29594__$1;
(statearr_29598_29635[(2)] = null);

(statearr_29598_29635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (1))){
var state_29594__$1 = state_29594;
var statearr_29599_29636 = state_29594__$1;
(statearr_29599_29636[(2)] = null);

(statearr_29599_29636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (4))){
var inst_29535 = (state_29594[(13)]);
var inst_29535__$1 = (state_29594[(2)]);
var inst_29536 = (inst_29535__$1 == null);
var state_29594__$1 = (function (){var statearr_29600 = state_29594;
(statearr_29600[(13)] = inst_29535__$1);

return statearr_29600;
})();
if(cljs.core.truth_(inst_29536)){
var statearr_29601_29637 = state_29594__$1;
(statearr_29601_29637[(1)] = (5));

} else {
var statearr_29602_29638 = state_29594__$1;
(statearr_29602_29638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (15))){
var state_29594__$1 = state_29594;
var statearr_29606_29639 = state_29594__$1;
(statearr_29606_29639[(2)] = null);

(statearr_29606_29639[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (21))){
var state_29594__$1 = state_29594;
var statearr_29607_29640 = state_29594__$1;
(statearr_29607_29640[(2)] = null);

(statearr_29607_29640[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (13))){
var inst_29549 = (state_29594[(8)]);
var inst_29547 = (state_29594[(9)]);
var inst_29546 = (state_29594[(10)]);
var inst_29548 = (state_29594[(11)]);
var inst_29556 = (state_29594[(2)]);
var inst_29557 = (inst_29549 + (1));
var tmp29603 = inst_29547;
var tmp29604 = inst_29546;
var tmp29605 = inst_29548;
var inst_29546__$1 = tmp29604;
var inst_29547__$1 = tmp29603;
var inst_29548__$1 = tmp29605;
var inst_29549__$1 = inst_29557;
var state_29594__$1 = (function (){var statearr_29608 = state_29594;
(statearr_29608[(8)] = inst_29549__$1);

(statearr_29608[(9)] = inst_29547__$1);

(statearr_29608[(10)] = inst_29546__$1);

(statearr_29608[(11)] = inst_29548__$1);

(statearr_29608[(14)] = inst_29556);

return statearr_29608;
})();
var statearr_29609_29641 = state_29594__$1;
(statearr_29609_29641[(2)] = null);

(statearr_29609_29641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (22))){
var state_29594__$1 = state_29594;
var statearr_29610_29642 = state_29594__$1;
(statearr_29610_29642[(2)] = null);

(statearr_29610_29642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (6))){
var inst_29535 = (state_29594[(13)]);
var inst_29544 = f.call(null,inst_29535);
var inst_29545 = cljs.core.seq.call(null,inst_29544);
var inst_29546 = inst_29545;
var inst_29547 = null;
var inst_29548 = (0);
var inst_29549 = (0);
var state_29594__$1 = (function (){var statearr_29611 = state_29594;
(statearr_29611[(8)] = inst_29549);

(statearr_29611[(9)] = inst_29547);

(statearr_29611[(10)] = inst_29546);

(statearr_29611[(11)] = inst_29548);

return statearr_29611;
})();
var statearr_29612_29643 = state_29594__$1;
(statearr_29612_29643[(2)] = null);

(statearr_29612_29643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (17))){
var inst_29560 = (state_29594[(7)]);
var inst_29564 = cljs.core.chunk_first.call(null,inst_29560);
var inst_29565 = cljs.core.chunk_rest.call(null,inst_29560);
var inst_29566 = cljs.core.count.call(null,inst_29564);
var inst_29546 = inst_29565;
var inst_29547 = inst_29564;
var inst_29548 = inst_29566;
var inst_29549 = (0);
var state_29594__$1 = (function (){var statearr_29613 = state_29594;
(statearr_29613[(8)] = inst_29549);

(statearr_29613[(9)] = inst_29547);

(statearr_29613[(10)] = inst_29546);

(statearr_29613[(11)] = inst_29548);

return statearr_29613;
})();
var statearr_29614_29644 = state_29594__$1;
(statearr_29614_29644[(2)] = null);

(statearr_29614_29644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (3))){
var inst_29592 = (state_29594[(2)]);
var state_29594__$1 = state_29594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29594__$1,inst_29592);
} else {
if((state_val_29595 === (12))){
var inst_29580 = (state_29594[(2)]);
var state_29594__$1 = state_29594;
var statearr_29615_29645 = state_29594__$1;
(statearr_29615_29645[(2)] = inst_29580);

(statearr_29615_29645[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (2))){
var state_29594__$1 = state_29594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29594__$1,(4),in$);
} else {
if((state_val_29595 === (23))){
var inst_29588 = (state_29594[(2)]);
var state_29594__$1 = state_29594;
var statearr_29616_29646 = state_29594__$1;
(statearr_29616_29646[(2)] = inst_29588);

(statearr_29616_29646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (19))){
var inst_29575 = (state_29594[(2)]);
var state_29594__$1 = state_29594;
var statearr_29617_29647 = state_29594__$1;
(statearr_29617_29647[(2)] = inst_29575);

(statearr_29617_29647[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (11))){
var inst_29560 = (state_29594[(7)]);
var inst_29546 = (state_29594[(10)]);
var inst_29560__$1 = cljs.core.seq.call(null,inst_29546);
var state_29594__$1 = (function (){var statearr_29618 = state_29594;
(statearr_29618[(7)] = inst_29560__$1);

return statearr_29618;
})();
if(inst_29560__$1){
var statearr_29619_29648 = state_29594__$1;
(statearr_29619_29648[(1)] = (14));

} else {
var statearr_29620_29649 = state_29594__$1;
(statearr_29620_29649[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (9))){
var inst_29582 = (state_29594[(2)]);
var inst_29583 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29594__$1 = (function (){var statearr_29621 = state_29594;
(statearr_29621[(15)] = inst_29582);

return statearr_29621;
})();
if(cljs.core.truth_(inst_29583)){
var statearr_29622_29650 = state_29594__$1;
(statearr_29622_29650[(1)] = (21));

} else {
var statearr_29623_29651 = state_29594__$1;
(statearr_29623_29651[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (5))){
var inst_29538 = cljs.core.async.close_BANG_.call(null,out);
var state_29594__$1 = state_29594;
var statearr_29624_29652 = state_29594__$1;
(statearr_29624_29652[(2)] = inst_29538);

(statearr_29624_29652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (14))){
var inst_29560 = (state_29594[(7)]);
var inst_29562 = cljs.core.chunked_seq_QMARK_.call(null,inst_29560);
var state_29594__$1 = state_29594;
if(inst_29562){
var statearr_29625_29653 = state_29594__$1;
(statearr_29625_29653[(1)] = (17));

} else {
var statearr_29626_29654 = state_29594__$1;
(statearr_29626_29654[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (16))){
var inst_29578 = (state_29594[(2)]);
var state_29594__$1 = state_29594;
var statearr_29627_29655 = state_29594__$1;
(statearr_29627_29655[(2)] = inst_29578);

(statearr_29627_29655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (10))){
var inst_29549 = (state_29594[(8)]);
var inst_29547 = (state_29594[(9)]);
var inst_29554 = cljs.core._nth.call(null,inst_29547,inst_29549);
var state_29594__$1 = state_29594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29594__$1,(13),out,inst_29554);
} else {
if((state_val_29595 === (18))){
var inst_29560 = (state_29594[(7)]);
var inst_29569 = cljs.core.first.call(null,inst_29560);
var state_29594__$1 = state_29594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29594__$1,(20),out,inst_29569);
} else {
if((state_val_29595 === (8))){
var inst_29549 = (state_29594[(8)]);
var inst_29548 = (state_29594[(11)]);
var inst_29551 = (inst_29549 < inst_29548);
var inst_29552 = inst_29551;
var state_29594__$1 = state_29594;
if(cljs.core.truth_(inst_29552)){
var statearr_29628_29656 = state_29594__$1;
(statearr_29628_29656[(1)] = (10));

} else {
var statearr_29629_29657 = state_29594__$1;
(statearr_29629_29657[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__27884__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27884__auto____0 = (function (){
var statearr_29630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29630[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27884__auto__);

(statearr_29630[(1)] = (1));

return statearr_29630;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27884__auto____1 = (function (state_29594){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_29594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e29631){if((e29631 instanceof Object)){
var ex__27887__auto__ = e29631;
var statearr_29632_29658 = state_29594;
(statearr_29632_29658[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29659 = state_29594;
state_29594 = G__29659;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27884__auto__ = function(state_29594){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27884__auto____1.call(this,state_29594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27884__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27884__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto__))
})();
var state__27980__auto__ = (function (){var statearr_29633 = f__27979__auto__.call(null);
(statearr_29633[(6)] = c__27978__auto__);

return statearr_29633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto__))
);

return c__27978__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29661 = arguments.length;
switch (G__29661) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29664 = arguments.length;
switch (G__29664) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29667 = arguments.length;
switch (G__29667) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27978__auto___29714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto___29714,out){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto___29714,out){
return (function (state_29691){
var state_val_29692 = (state_29691[(1)]);
if((state_val_29692 === (7))){
var inst_29686 = (state_29691[(2)]);
var state_29691__$1 = state_29691;
var statearr_29693_29715 = state_29691__$1;
(statearr_29693_29715[(2)] = inst_29686);

(statearr_29693_29715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29692 === (1))){
var inst_29668 = null;
var state_29691__$1 = (function (){var statearr_29694 = state_29691;
(statearr_29694[(7)] = inst_29668);

return statearr_29694;
})();
var statearr_29695_29716 = state_29691__$1;
(statearr_29695_29716[(2)] = null);

(statearr_29695_29716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29692 === (4))){
var inst_29671 = (state_29691[(8)]);
var inst_29671__$1 = (state_29691[(2)]);
var inst_29672 = (inst_29671__$1 == null);
var inst_29673 = cljs.core.not.call(null,inst_29672);
var state_29691__$1 = (function (){var statearr_29696 = state_29691;
(statearr_29696[(8)] = inst_29671__$1);

return statearr_29696;
})();
if(inst_29673){
var statearr_29697_29717 = state_29691__$1;
(statearr_29697_29717[(1)] = (5));

} else {
var statearr_29698_29718 = state_29691__$1;
(statearr_29698_29718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29692 === (6))){
var state_29691__$1 = state_29691;
var statearr_29699_29719 = state_29691__$1;
(statearr_29699_29719[(2)] = null);

(statearr_29699_29719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29692 === (3))){
var inst_29688 = (state_29691[(2)]);
var inst_29689 = cljs.core.async.close_BANG_.call(null,out);
var state_29691__$1 = (function (){var statearr_29700 = state_29691;
(statearr_29700[(9)] = inst_29688);

return statearr_29700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29691__$1,inst_29689);
} else {
if((state_val_29692 === (2))){
var state_29691__$1 = state_29691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29691__$1,(4),ch);
} else {
if((state_val_29692 === (11))){
var inst_29671 = (state_29691[(8)]);
var inst_29680 = (state_29691[(2)]);
var inst_29668 = inst_29671;
var state_29691__$1 = (function (){var statearr_29701 = state_29691;
(statearr_29701[(10)] = inst_29680);

(statearr_29701[(7)] = inst_29668);

return statearr_29701;
})();
var statearr_29702_29720 = state_29691__$1;
(statearr_29702_29720[(2)] = null);

(statearr_29702_29720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29692 === (9))){
var inst_29671 = (state_29691[(8)]);
var state_29691__$1 = state_29691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29691__$1,(11),out,inst_29671);
} else {
if((state_val_29692 === (5))){
var inst_29668 = (state_29691[(7)]);
var inst_29671 = (state_29691[(8)]);
var inst_29675 = cljs.core._EQ_.call(null,inst_29671,inst_29668);
var state_29691__$1 = state_29691;
if(inst_29675){
var statearr_29704_29721 = state_29691__$1;
(statearr_29704_29721[(1)] = (8));

} else {
var statearr_29705_29722 = state_29691__$1;
(statearr_29705_29722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29692 === (10))){
var inst_29683 = (state_29691[(2)]);
var state_29691__$1 = state_29691;
var statearr_29706_29723 = state_29691__$1;
(statearr_29706_29723[(2)] = inst_29683);

(statearr_29706_29723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29692 === (8))){
var inst_29668 = (state_29691[(7)]);
var tmp29703 = inst_29668;
var inst_29668__$1 = tmp29703;
var state_29691__$1 = (function (){var statearr_29707 = state_29691;
(statearr_29707[(7)] = inst_29668__$1);

return statearr_29707;
})();
var statearr_29708_29724 = state_29691__$1;
(statearr_29708_29724[(2)] = null);

(statearr_29708_29724[(1)] = (2));


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
});})(c__27978__auto___29714,out))
;
return ((function (switch__27883__auto__,c__27978__auto___29714,out){
return (function() {
var cljs$core$async$state_machine__27884__auto__ = null;
var cljs$core$async$state_machine__27884__auto____0 = (function (){
var statearr_29709 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29709[(0)] = cljs$core$async$state_machine__27884__auto__);

(statearr_29709[(1)] = (1));

return statearr_29709;
});
var cljs$core$async$state_machine__27884__auto____1 = (function (state_29691){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_29691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e29710){if((e29710 instanceof Object)){
var ex__27887__auto__ = e29710;
var statearr_29711_29725 = state_29691;
(statearr_29711_29725[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29726 = state_29691;
state_29691 = G__29726;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$state_machine__27884__auto__ = function(state_29691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27884__auto____1.call(this,state_29691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27884__auto____0;
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27884__auto____1;
return cljs$core$async$state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto___29714,out))
})();
var state__27980__auto__ = (function (){var statearr_29712 = f__27979__auto__.call(null);
(statearr_29712[(6)] = c__27978__auto___29714);

return statearr_29712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto___29714,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29728 = arguments.length;
switch (G__29728) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27978__auto___29794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto___29794,out){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto___29794,out){
return (function (state_29766){
var state_val_29767 = (state_29766[(1)]);
if((state_val_29767 === (7))){
var inst_29762 = (state_29766[(2)]);
var state_29766__$1 = state_29766;
var statearr_29768_29795 = state_29766__$1;
(statearr_29768_29795[(2)] = inst_29762);

(statearr_29768_29795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (1))){
var inst_29729 = (new Array(n));
var inst_29730 = inst_29729;
var inst_29731 = (0);
var state_29766__$1 = (function (){var statearr_29769 = state_29766;
(statearr_29769[(7)] = inst_29731);

(statearr_29769[(8)] = inst_29730);

return statearr_29769;
})();
var statearr_29770_29796 = state_29766__$1;
(statearr_29770_29796[(2)] = null);

(statearr_29770_29796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (4))){
var inst_29734 = (state_29766[(9)]);
var inst_29734__$1 = (state_29766[(2)]);
var inst_29735 = (inst_29734__$1 == null);
var inst_29736 = cljs.core.not.call(null,inst_29735);
var state_29766__$1 = (function (){var statearr_29771 = state_29766;
(statearr_29771[(9)] = inst_29734__$1);

return statearr_29771;
})();
if(inst_29736){
var statearr_29772_29797 = state_29766__$1;
(statearr_29772_29797[(1)] = (5));

} else {
var statearr_29773_29798 = state_29766__$1;
(statearr_29773_29798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (15))){
var inst_29756 = (state_29766[(2)]);
var state_29766__$1 = state_29766;
var statearr_29774_29799 = state_29766__$1;
(statearr_29774_29799[(2)] = inst_29756);

(statearr_29774_29799[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (13))){
var state_29766__$1 = state_29766;
var statearr_29775_29800 = state_29766__$1;
(statearr_29775_29800[(2)] = null);

(statearr_29775_29800[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (6))){
var inst_29731 = (state_29766[(7)]);
var inst_29752 = (inst_29731 > (0));
var state_29766__$1 = state_29766;
if(cljs.core.truth_(inst_29752)){
var statearr_29776_29801 = state_29766__$1;
(statearr_29776_29801[(1)] = (12));

} else {
var statearr_29777_29802 = state_29766__$1;
(statearr_29777_29802[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (3))){
var inst_29764 = (state_29766[(2)]);
var state_29766__$1 = state_29766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29766__$1,inst_29764);
} else {
if((state_val_29767 === (12))){
var inst_29730 = (state_29766[(8)]);
var inst_29754 = cljs.core.vec.call(null,inst_29730);
var state_29766__$1 = state_29766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29766__$1,(15),out,inst_29754);
} else {
if((state_val_29767 === (2))){
var state_29766__$1 = state_29766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29766__$1,(4),ch);
} else {
if((state_val_29767 === (11))){
var inst_29746 = (state_29766[(2)]);
var inst_29747 = (new Array(n));
var inst_29730 = inst_29747;
var inst_29731 = (0);
var state_29766__$1 = (function (){var statearr_29778 = state_29766;
(statearr_29778[(10)] = inst_29746);

(statearr_29778[(7)] = inst_29731);

(statearr_29778[(8)] = inst_29730);

return statearr_29778;
})();
var statearr_29779_29803 = state_29766__$1;
(statearr_29779_29803[(2)] = null);

(statearr_29779_29803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (9))){
var inst_29730 = (state_29766[(8)]);
var inst_29744 = cljs.core.vec.call(null,inst_29730);
var state_29766__$1 = state_29766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29766__$1,(11),out,inst_29744);
} else {
if((state_val_29767 === (5))){
var inst_29739 = (state_29766[(11)]);
var inst_29731 = (state_29766[(7)]);
var inst_29734 = (state_29766[(9)]);
var inst_29730 = (state_29766[(8)]);
var inst_29738 = (inst_29730[inst_29731] = inst_29734);
var inst_29739__$1 = (inst_29731 + (1));
var inst_29740 = (inst_29739__$1 < n);
var state_29766__$1 = (function (){var statearr_29780 = state_29766;
(statearr_29780[(11)] = inst_29739__$1);

(statearr_29780[(12)] = inst_29738);

return statearr_29780;
})();
if(cljs.core.truth_(inst_29740)){
var statearr_29781_29804 = state_29766__$1;
(statearr_29781_29804[(1)] = (8));

} else {
var statearr_29782_29805 = state_29766__$1;
(statearr_29782_29805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (14))){
var inst_29759 = (state_29766[(2)]);
var inst_29760 = cljs.core.async.close_BANG_.call(null,out);
var state_29766__$1 = (function (){var statearr_29784 = state_29766;
(statearr_29784[(13)] = inst_29759);

return statearr_29784;
})();
var statearr_29785_29806 = state_29766__$1;
(statearr_29785_29806[(2)] = inst_29760);

(statearr_29785_29806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (10))){
var inst_29750 = (state_29766[(2)]);
var state_29766__$1 = state_29766;
var statearr_29786_29807 = state_29766__$1;
(statearr_29786_29807[(2)] = inst_29750);

(statearr_29786_29807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (8))){
var inst_29739 = (state_29766[(11)]);
var inst_29730 = (state_29766[(8)]);
var tmp29783 = inst_29730;
var inst_29730__$1 = tmp29783;
var inst_29731 = inst_29739;
var state_29766__$1 = (function (){var statearr_29787 = state_29766;
(statearr_29787[(7)] = inst_29731);

(statearr_29787[(8)] = inst_29730__$1);

return statearr_29787;
})();
var statearr_29788_29808 = state_29766__$1;
(statearr_29788_29808[(2)] = null);

(statearr_29788_29808[(1)] = (2));


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
});})(c__27978__auto___29794,out))
;
return ((function (switch__27883__auto__,c__27978__auto___29794,out){
return (function() {
var cljs$core$async$state_machine__27884__auto__ = null;
var cljs$core$async$state_machine__27884__auto____0 = (function (){
var statearr_29789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29789[(0)] = cljs$core$async$state_machine__27884__auto__);

(statearr_29789[(1)] = (1));

return statearr_29789;
});
var cljs$core$async$state_machine__27884__auto____1 = (function (state_29766){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_29766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e29790){if((e29790 instanceof Object)){
var ex__27887__auto__ = e29790;
var statearr_29791_29809 = state_29766;
(statearr_29791_29809[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29810 = state_29766;
state_29766 = G__29810;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$state_machine__27884__auto__ = function(state_29766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27884__auto____1.call(this,state_29766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27884__auto____0;
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27884__auto____1;
return cljs$core$async$state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto___29794,out))
})();
var state__27980__auto__ = (function (){var statearr_29792 = f__27979__auto__.call(null);
(statearr_29792[(6)] = c__27978__auto___29794);

return statearr_29792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto___29794,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29812 = arguments.length;
switch (G__29812) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27978__auto___29882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto___29882,out){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto___29882,out){
return (function (state_29854){
var state_val_29855 = (state_29854[(1)]);
if((state_val_29855 === (7))){
var inst_29850 = (state_29854[(2)]);
var state_29854__$1 = state_29854;
var statearr_29856_29883 = state_29854__$1;
(statearr_29856_29883[(2)] = inst_29850);

(statearr_29856_29883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29855 === (1))){
var inst_29813 = [];
var inst_29814 = inst_29813;
var inst_29815 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29854__$1 = (function (){var statearr_29857 = state_29854;
(statearr_29857[(7)] = inst_29815);

(statearr_29857[(8)] = inst_29814);

return statearr_29857;
})();
var statearr_29858_29884 = state_29854__$1;
(statearr_29858_29884[(2)] = null);

(statearr_29858_29884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29855 === (4))){
var inst_29818 = (state_29854[(9)]);
var inst_29818__$1 = (state_29854[(2)]);
var inst_29819 = (inst_29818__$1 == null);
var inst_29820 = cljs.core.not.call(null,inst_29819);
var state_29854__$1 = (function (){var statearr_29859 = state_29854;
(statearr_29859[(9)] = inst_29818__$1);

return statearr_29859;
})();
if(inst_29820){
var statearr_29860_29885 = state_29854__$1;
(statearr_29860_29885[(1)] = (5));

} else {
var statearr_29861_29886 = state_29854__$1;
(statearr_29861_29886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29855 === (15))){
var inst_29844 = (state_29854[(2)]);
var state_29854__$1 = state_29854;
var statearr_29862_29887 = state_29854__$1;
(statearr_29862_29887[(2)] = inst_29844);

(statearr_29862_29887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29855 === (13))){
var state_29854__$1 = state_29854;
var statearr_29863_29888 = state_29854__$1;
(statearr_29863_29888[(2)] = null);

(statearr_29863_29888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29855 === (6))){
var inst_29814 = (state_29854[(8)]);
var inst_29839 = inst_29814.length;
var inst_29840 = (inst_29839 > (0));
var state_29854__$1 = state_29854;
if(cljs.core.truth_(inst_29840)){
var statearr_29864_29889 = state_29854__$1;
(statearr_29864_29889[(1)] = (12));

} else {
var statearr_29865_29890 = state_29854__$1;
(statearr_29865_29890[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29855 === (3))){
var inst_29852 = (state_29854[(2)]);
var state_29854__$1 = state_29854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29854__$1,inst_29852);
} else {
if((state_val_29855 === (12))){
var inst_29814 = (state_29854[(8)]);
var inst_29842 = cljs.core.vec.call(null,inst_29814);
var state_29854__$1 = state_29854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29854__$1,(15),out,inst_29842);
} else {
if((state_val_29855 === (2))){
var state_29854__$1 = state_29854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29854__$1,(4),ch);
} else {
if((state_val_29855 === (11))){
var inst_29822 = (state_29854[(10)]);
var inst_29818 = (state_29854[(9)]);
var inst_29832 = (state_29854[(2)]);
var inst_29833 = [];
var inst_29834 = inst_29833.push(inst_29818);
var inst_29814 = inst_29833;
var inst_29815 = inst_29822;
var state_29854__$1 = (function (){var statearr_29866 = state_29854;
(statearr_29866[(11)] = inst_29832);

(statearr_29866[(7)] = inst_29815);

(statearr_29866[(8)] = inst_29814);

(statearr_29866[(12)] = inst_29834);

return statearr_29866;
})();
var statearr_29867_29891 = state_29854__$1;
(statearr_29867_29891[(2)] = null);

(statearr_29867_29891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29855 === (9))){
var inst_29814 = (state_29854[(8)]);
var inst_29830 = cljs.core.vec.call(null,inst_29814);
var state_29854__$1 = state_29854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29854__$1,(11),out,inst_29830);
} else {
if((state_val_29855 === (5))){
var inst_29822 = (state_29854[(10)]);
var inst_29815 = (state_29854[(7)]);
var inst_29818 = (state_29854[(9)]);
var inst_29822__$1 = f.call(null,inst_29818);
var inst_29823 = cljs.core._EQ_.call(null,inst_29822__$1,inst_29815);
var inst_29824 = cljs.core.keyword_identical_QMARK_.call(null,inst_29815,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29825 = ((inst_29823) || (inst_29824));
var state_29854__$1 = (function (){var statearr_29868 = state_29854;
(statearr_29868[(10)] = inst_29822__$1);

return statearr_29868;
})();
if(cljs.core.truth_(inst_29825)){
var statearr_29869_29892 = state_29854__$1;
(statearr_29869_29892[(1)] = (8));

} else {
var statearr_29870_29893 = state_29854__$1;
(statearr_29870_29893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29855 === (14))){
var inst_29847 = (state_29854[(2)]);
var inst_29848 = cljs.core.async.close_BANG_.call(null,out);
var state_29854__$1 = (function (){var statearr_29872 = state_29854;
(statearr_29872[(13)] = inst_29847);

return statearr_29872;
})();
var statearr_29873_29894 = state_29854__$1;
(statearr_29873_29894[(2)] = inst_29848);

(statearr_29873_29894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29855 === (10))){
var inst_29837 = (state_29854[(2)]);
var state_29854__$1 = state_29854;
var statearr_29874_29895 = state_29854__$1;
(statearr_29874_29895[(2)] = inst_29837);

(statearr_29874_29895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29855 === (8))){
var inst_29822 = (state_29854[(10)]);
var inst_29818 = (state_29854[(9)]);
var inst_29814 = (state_29854[(8)]);
var inst_29827 = inst_29814.push(inst_29818);
var tmp29871 = inst_29814;
var inst_29814__$1 = tmp29871;
var inst_29815 = inst_29822;
var state_29854__$1 = (function (){var statearr_29875 = state_29854;
(statearr_29875[(14)] = inst_29827);

(statearr_29875[(7)] = inst_29815);

(statearr_29875[(8)] = inst_29814__$1);

return statearr_29875;
})();
var statearr_29876_29896 = state_29854__$1;
(statearr_29876_29896[(2)] = null);

(statearr_29876_29896[(1)] = (2));


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
});})(c__27978__auto___29882,out))
;
return ((function (switch__27883__auto__,c__27978__auto___29882,out){
return (function() {
var cljs$core$async$state_machine__27884__auto__ = null;
var cljs$core$async$state_machine__27884__auto____0 = (function (){
var statearr_29877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29877[(0)] = cljs$core$async$state_machine__27884__auto__);

(statearr_29877[(1)] = (1));

return statearr_29877;
});
var cljs$core$async$state_machine__27884__auto____1 = (function (state_29854){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_29854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e29878){if((e29878 instanceof Object)){
var ex__27887__auto__ = e29878;
var statearr_29879_29897 = state_29854;
(statearr_29879_29897[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29898 = state_29854;
state_29854 = G__29898;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
cljs$core$async$state_machine__27884__auto__ = function(state_29854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27884__auto____1.call(this,state_29854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27884__auto____0;
cljs$core$async$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27884__auto____1;
return cljs$core$async$state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto___29882,out))
})();
var state__27980__auto__ = (function (){var statearr_29880 = f__27979__auto__.call(null);
(statearr_29880[(6)] = c__27978__auto___29882);

return statearr_29880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto___29882,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1564575457919
