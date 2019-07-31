// Compiled by ClojureScript 1.10.439 {}
goog.provide('chord.format');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cognitect.transit');

/**
 * @interface
 */
chord.format.ChordFormatter = function(){};

chord.format.freeze = (function chord$format$freeze(_,obj){
if((((!((_ == null)))) && ((!((_.chord$format$ChordFormatter$freeze$arity$2 == null)))))){
return _.chord$format$ChordFormatter$freeze$arity$2(_,obj);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (chord.format.freeze[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_,obj);
} else {
var m__4348__auto____$1 = (chord.format.freeze["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.freeze",_);
}
}
}
});

chord.format.thaw = (function chord$format$thaw(_,s){
if((((!((_ == null)))) && ((!((_.chord$format$ChordFormatter$thaw$arity$2 == null)))))){
return _.chord$format$ChordFormatter$thaw$arity$2(_,s);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (chord.format.thaw[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_,s);
} else {
var m__4348__auto____$1 = (chord.format.thaw["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.thaw",_);
}
}
}
});

if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.formatter_STAR_ !== 'undefined')){
} else {
chord.format.formatter_STAR_ = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chord.format","formatter*"),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format30216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format30216 = (function (_,meta30217){
this._ = _;
this.meta30217 = meta30217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
chord.format.t_chord$format30216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30218,meta30217__$1){
var self__ = this;
var _30218__$1 = this;
return (new chord.format.t_chord$format30216(self__._,meta30217__$1));
});

chord.format.t_chord$format30216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30218){
var self__ = this;
var _30218__$1 = this;
return self__.meta30217;
});

chord.format.t_chord$format30216.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format30216.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.call(null,obj);
});

chord.format.t_chord$format30216.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string.call(null,s);
});

chord.format.t_chord$format30216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta30217","meta30217",-1019416,null)], null);
});

chord.format.t_chord$format30216.cljs$lang$type = true;

chord.format.t_chord$format30216.cljs$lang$ctorStr = "chord.format/t_chord$format30216";

chord.format.t_chord$format30216.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"chord.format/t_chord$format30216");
});

/**
 * Positional factory function for chord.format/t_chord$format30216.
 */
chord.format.__GT_t_chord$format30216 = (function chord$format$__GT_t_chord$format30216(___$1,meta30217){
return (new chord.format.t_chord$format30216(___$1,meta30217));
});

}

return (new chord.format.t_chord$format30216(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json","json",1279968570),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format30219 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format30219 = (function (_,meta30220){
this._ = _;
this.meta30220 = meta30220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
chord.format.t_chord$format30219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30221,meta30220__$1){
var self__ = this;
var _30221__$1 = this;
return (new chord.format.t_chord$format30219(self__._,meta30220__$1));
});

chord.format.t_chord$format30219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30221){
var self__ = this;
var _30221__$1 = this;
return self__.meta30220;
});

chord.format.t_chord$format30219.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format30219.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return JSON.stringify(cljs.core.clj__GT_js.call(null,obj));
});

chord.format.t_chord$format30219.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.call(null,JSON.parse(s));
});

chord.format.t_chord$format30219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta30220","meta30220",1211794581,null)], null);
});

chord.format.t_chord$format30219.cljs$lang$type = true;

chord.format.t_chord$format30219.cljs$lang$ctorStr = "chord.format/t_chord$format30219";

chord.format.t_chord$format30219.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"chord.format/t_chord$format30219");
});

/**
 * Positional factory function for chord.format/t_chord$format30219.
 */
chord.format.__GT_t_chord$format30219 = (function chord$format$__GT_t_chord$format30219(___$1,meta30220){
return (new chord.format.t_chord$format30219(___$1,meta30220));
});

}

return (new chord.format.t_chord$format30219(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (opts){
var json_formatter = chord.format.formatter_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)));
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format30222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format30222 = (function (opts,json_formatter,meta30223){
this.opts = opts;
this.json_formatter = json_formatter;
this.meta30223 = meta30223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
chord.format.t_chord$format30222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (json_formatter){
return (function (_30224,meta30223__$1){
var self__ = this;
var _30224__$1 = this;
return (new chord.format.t_chord$format30222(self__.opts,self__.json_formatter,meta30223__$1));
});})(json_formatter))
;

chord.format.t_chord$format30222.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (json_formatter){
return (function (_30224){
var self__ = this;
var _30224__$1 = this;
return self__.meta30223;
});})(json_formatter))
;

chord.format.t_chord$format30222.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format30222.prototype.chord$format$ChordFormatter$freeze$arity$2 = ((function (json_formatter){
return (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze.call(null,self__.json_formatter,obj);
});})(json_formatter))
;

chord.format.t_chord$format30222.prototype.chord$format$ChordFormatter$thaw$arity$2 = ((function (json_formatter){
return (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys.call(null,chord.format.thaw.call(null,self__.json_formatter,s));
});})(json_formatter))
;

chord.format.t_chord$format30222.getBasis = ((function (json_formatter){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"json-formatter","json-formatter",-485654307,null),new cljs.core.Symbol(null,"meta30223","meta30223",-1399346265,null)], null);
});})(json_formatter))
;

chord.format.t_chord$format30222.cljs$lang$type = true;

chord.format.t_chord$format30222.cljs$lang$ctorStr = "chord.format/t_chord$format30222";

chord.format.t_chord$format30222.cljs$lang$ctorPrWriter = ((function (json_formatter){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"chord.format/t_chord$format30222");
});})(json_formatter))
;

/**
 * Positional factory function for chord.format/t_chord$format30222.
 */
chord.format.__GT_t_chord$format30222 = ((function (json_formatter){
return (function chord$format$__GT_t_chord$format30222(opts__$1,json_formatter__$1,meta30223){
return (new chord.format.t_chord$format30222(opts__$1,json_formatter__$1,meta30223));
});})(json_formatter))
;

}

return (new chord.format.t_chord$format30222(opts,json_formatter,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format30225 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format30225 = (function (_,meta30226){
this._ = _;
this.meta30226 = meta30226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
chord.format.t_chord$format30225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30227,meta30226__$1){
var self__ = this;
var _30227__$1 = this;
return (new chord.format.t_chord$format30225(self__._,meta30226__$1));
});

chord.format.t_chord$format30225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30227){
var self__ = this;
var _30227__$1 = this;
return self__.meta30226;
});

chord.format.t_chord$format30225.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format30225.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),obj);
});

chord.format.t_chord$format30225.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),s);
});

chord.format.t_chord$format30225.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta30226","meta30226",1122055317,null)], null);
});

chord.format.t_chord$format30225.cljs$lang$type = true;

chord.format.t_chord$format30225.cljs$lang$ctorStr = "chord.format/t_chord$format30225";

chord.format.t_chord$format30225.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"chord.format/t_chord$format30225");
});

/**
 * Positional factory function for chord.format/t_chord$format30225.
 */
chord.format.__GT_t_chord$format30225 = (function chord$format$__GT_t_chord$format30225(___$1,meta30226){
return (new chord.format.t_chord$format30225(___$1,meta30226));
});

}

return (new chord.format.t_chord$format30225(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"str","str",1089608819),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format30228 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format30228 = (function (_,meta30229){
this._ = _;
this.meta30229 = meta30229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
chord.format.t_chord$format30228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30230,meta30229__$1){
var self__ = this;
var _30230__$1 = this;
return (new chord.format.t_chord$format30228(self__._,meta30229__$1));
});

chord.format.t_chord$format30228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30230){
var self__ = this;
var _30230__$1 = this;
return self__.meta30229;
});

chord.format.t_chord$format30228.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format30228.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
});

chord.format.t_chord$format30228.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
});

chord.format.t_chord$format30228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta30229","meta30229",382845485,null)], null);
});

chord.format.t_chord$format30228.cljs$lang$type = true;

chord.format.t_chord$format30228.cljs$lang$ctorStr = "chord.format/t_chord$format30228";

chord.format.t_chord$format30228.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"chord.format/t_chord$format30228");
});

/**
 * Positional factory function for chord.format/t_chord$format30228.
 */
chord.format.__GT_t_chord$format30228 = (function chord$format$__GT_t_chord$format30228(___$1,meta30229){
return (new chord.format.t_chord$format30228(___$1,meta30229));
});

}

return (new chord.format.t_chord$format30228(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
return chord.format.formatter_STAR_.call(null,(((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),opts], null):opts));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__30232,p__30233){
var map__30234 = p__30232;
var map__30234__$1 = (((((!((map__30234 == null))))?(((((map__30234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30234):map__30234);
var read_ch = cljs.core.get.call(null,map__30234__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__30234__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var map__30235 = p__30233;
var map__30235__$1 = (((((!((map__30235 == null))))?(((((map__30235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30235):map__30235);
var opts = map__30235__$1;
var format = cljs.core.get.call(null,map__30235__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fmtr = chord.format.formatter.call(null,(cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_.call(null,((function (fmtr,map__30234,map__30234__$1,read_ch,write_ch,map__30235,map__30235__$1,opts,format){
return (function (p__30238){
var map__30239 = p__30238;
var map__30239__$1 = (((((!((map__30239 == null))))?(((((map__30239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30239):map__30239);
var message = cljs.core.get.call(null,map__30239__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{if(cljs.core.truth_(message)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),chord.format.thaw.call(null,fmtr,message)], null);
} else {
return null;
}
}catch (e30241){if((e30241 instanceof Error)){
var e = e30241;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else {
throw e30241;

}
}});})(fmtr,map__30234,map__30234__$1,read_ch,write_ch,map__30235,map__30235__$1,opts,format))
,read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_.call(null,((function (fmtr,map__30234,map__30234__$1,read_ch,write_ch,map__30235,map__30235__$1,opts,format){
return (function (p1__30231_SHARP_){
if(cljs.core.truth_(p1__30231_SHARP_)){
return chord.format.freeze.call(null,fmtr,p1__30231_SHARP_);
} else {
return null;
}
});})(fmtr,map__30234,map__30234__$1,read_ch,write_ch,map__30235,map__30235__$1,opts,format))
,write_ch)], null);
});

//# sourceMappingURL=format.js.map?rel=1564575459267
