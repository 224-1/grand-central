// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33369){
var map__33370 = p__33369;
var map__33370__$1 = (((((!((map__33370 == null))))?(((((map__33370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33370):map__33370);
var m = map__33370__$1;
var n = cljs.core.get.call(null,map__33370__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33370__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33372_33394 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33373_33395 = null;
var count__33374_33396 = (0);
var i__33375_33397 = (0);
while(true){
if((i__33375_33397 < count__33374_33396)){
var f_33398 = cljs.core._nth.call(null,chunk__33373_33395,i__33375_33397);
cljs.core.println.call(null,"  ",f_33398);


var G__33399 = seq__33372_33394;
var G__33400 = chunk__33373_33395;
var G__33401 = count__33374_33396;
var G__33402 = (i__33375_33397 + (1));
seq__33372_33394 = G__33399;
chunk__33373_33395 = G__33400;
count__33374_33396 = G__33401;
i__33375_33397 = G__33402;
continue;
} else {
var temp__5720__auto___33403 = cljs.core.seq.call(null,seq__33372_33394);
if(temp__5720__auto___33403){
var seq__33372_33404__$1 = temp__5720__auto___33403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33372_33404__$1)){
var c__4461__auto___33405 = cljs.core.chunk_first.call(null,seq__33372_33404__$1);
var G__33406 = cljs.core.chunk_rest.call(null,seq__33372_33404__$1);
var G__33407 = c__4461__auto___33405;
var G__33408 = cljs.core.count.call(null,c__4461__auto___33405);
var G__33409 = (0);
seq__33372_33394 = G__33406;
chunk__33373_33395 = G__33407;
count__33374_33396 = G__33408;
i__33375_33397 = G__33409;
continue;
} else {
var f_33410 = cljs.core.first.call(null,seq__33372_33404__$1);
cljs.core.println.call(null,"  ",f_33410);


var G__33411 = cljs.core.next.call(null,seq__33372_33404__$1);
var G__33412 = null;
var G__33413 = (0);
var G__33414 = (0);
seq__33372_33394 = G__33411;
chunk__33373_33395 = G__33412;
count__33374_33396 = G__33413;
i__33375_33397 = G__33414;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33415 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33415);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33415)))?cljs.core.second.call(null,arglists_33415):arglists_33415));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33376_33416 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33377_33417 = null;
var count__33378_33418 = (0);
var i__33379_33419 = (0);
while(true){
if((i__33379_33419 < count__33378_33418)){
var vec__33380_33420 = cljs.core._nth.call(null,chunk__33377_33417,i__33379_33419);
var name_33421 = cljs.core.nth.call(null,vec__33380_33420,(0),null);
var map__33383_33422 = cljs.core.nth.call(null,vec__33380_33420,(1),null);
var map__33383_33423__$1 = (((((!((map__33383_33422 == null))))?(((((map__33383_33422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33383_33422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33383_33422):map__33383_33422);
var doc_33424 = cljs.core.get.call(null,map__33383_33423__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33425 = cljs.core.get.call(null,map__33383_33423__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33421);

cljs.core.println.call(null," ",arglists_33425);

if(cljs.core.truth_(doc_33424)){
cljs.core.println.call(null," ",doc_33424);
} else {
}


var G__33426 = seq__33376_33416;
var G__33427 = chunk__33377_33417;
var G__33428 = count__33378_33418;
var G__33429 = (i__33379_33419 + (1));
seq__33376_33416 = G__33426;
chunk__33377_33417 = G__33427;
count__33378_33418 = G__33428;
i__33379_33419 = G__33429;
continue;
} else {
var temp__5720__auto___33430 = cljs.core.seq.call(null,seq__33376_33416);
if(temp__5720__auto___33430){
var seq__33376_33431__$1 = temp__5720__auto___33430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33376_33431__$1)){
var c__4461__auto___33432 = cljs.core.chunk_first.call(null,seq__33376_33431__$1);
var G__33433 = cljs.core.chunk_rest.call(null,seq__33376_33431__$1);
var G__33434 = c__4461__auto___33432;
var G__33435 = cljs.core.count.call(null,c__4461__auto___33432);
var G__33436 = (0);
seq__33376_33416 = G__33433;
chunk__33377_33417 = G__33434;
count__33378_33418 = G__33435;
i__33379_33419 = G__33436;
continue;
} else {
var vec__33385_33437 = cljs.core.first.call(null,seq__33376_33431__$1);
var name_33438 = cljs.core.nth.call(null,vec__33385_33437,(0),null);
var map__33388_33439 = cljs.core.nth.call(null,vec__33385_33437,(1),null);
var map__33388_33440__$1 = (((((!((map__33388_33439 == null))))?(((((map__33388_33439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33388_33439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33388_33439):map__33388_33439);
var doc_33441 = cljs.core.get.call(null,map__33388_33440__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33442 = cljs.core.get.call(null,map__33388_33440__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33438);

cljs.core.println.call(null," ",arglists_33442);

if(cljs.core.truth_(doc_33441)){
cljs.core.println.call(null," ",doc_33441);
} else {
}


var G__33443 = cljs.core.next.call(null,seq__33376_33431__$1);
var G__33444 = null;
var G__33445 = (0);
var G__33446 = (0);
seq__33376_33416 = G__33443;
chunk__33377_33417 = G__33444;
count__33378_33418 = G__33445;
i__33379_33419 = G__33446;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__33390 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33391 = null;
var count__33392 = (0);
var i__33393 = (0);
while(true){
if((i__33393 < count__33392)){
var role = cljs.core._nth.call(null,chunk__33391,i__33393);
var temp__5720__auto___33447__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___33447__$1)){
var spec_33448 = temp__5720__auto___33447__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33448));
} else {
}


var G__33449 = seq__33390;
var G__33450 = chunk__33391;
var G__33451 = count__33392;
var G__33452 = (i__33393 + (1));
seq__33390 = G__33449;
chunk__33391 = G__33450;
count__33392 = G__33451;
i__33393 = G__33452;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__33390);
if(temp__5720__auto____$1){
var seq__33390__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33390__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__33390__$1);
var G__33453 = cljs.core.chunk_rest.call(null,seq__33390__$1);
var G__33454 = c__4461__auto__;
var G__33455 = cljs.core.count.call(null,c__4461__auto__);
var G__33456 = (0);
seq__33390 = G__33453;
chunk__33391 = G__33454;
count__33392 = G__33455;
i__33393 = G__33456;
continue;
} else {
var role = cljs.core.first.call(null,seq__33390__$1);
var temp__5720__auto___33457__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___33457__$2)){
var spec_33458 = temp__5720__auto___33457__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33458));
} else {
}


var G__33459 = cljs.core.next.call(null,seq__33390__$1);
var G__33460 = null;
var G__33461 = (0);
var G__33462 = (0);
seq__33390 = G__33459;
chunk__33391 = G__33460;
count__33392 = G__33461;
i__33393 = G__33462;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1564575467959
