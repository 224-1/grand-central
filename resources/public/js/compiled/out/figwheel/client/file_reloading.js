// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31906_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31906_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31907 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31908 = null;
var count__31909 = (0);
var i__31910 = (0);
while(true){
if((i__31910 < count__31909)){
var n = cljs.core._nth.call(null,chunk__31908,i__31910);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31911 = seq__31907;
var G__31912 = chunk__31908;
var G__31913 = count__31909;
var G__31914 = (i__31910 + (1));
seq__31907 = G__31911;
chunk__31908 = G__31912;
count__31909 = G__31913;
i__31910 = G__31914;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31907);
if(temp__5720__auto__){
var seq__31907__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31907__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__31907__$1);
var G__31915 = cljs.core.chunk_rest.call(null,seq__31907__$1);
var G__31916 = c__4461__auto__;
var G__31917 = cljs.core.count.call(null,c__4461__auto__);
var G__31918 = (0);
seq__31907 = G__31915;
chunk__31908 = G__31916;
count__31909 = G__31917;
i__31910 = G__31918;
continue;
} else {
var n = cljs.core.first.call(null,seq__31907__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31919 = cljs.core.next.call(null,seq__31907__$1);
var G__31920 = null;
var G__31921 = (0);
var G__31922 = (0);
seq__31907 = G__31919;
chunk__31908 = G__31920;
count__31909 = G__31921;
i__31910 = G__31922;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__31923){
var vec__31924 = p__31923;
var _ = cljs.core.nth.call(null,vec__31924,(0),null);
var v = cljs.core.nth.call(null,vec__31924,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__31927){
var vec__31928 = p__31927;
var k = cljs.core.nth.call(null,vec__31928,(0),null);
var v = cljs.core.nth.call(null,vec__31928,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31940_31948 = cljs.core.seq.call(null,deps);
var chunk__31941_31949 = null;
var count__31942_31950 = (0);
var i__31943_31951 = (0);
while(true){
if((i__31943_31951 < count__31942_31950)){
var dep_31952 = cljs.core._nth.call(null,chunk__31941_31949,i__31943_31951);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_31952;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31952));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31952,(depth + (1)),state);
} else {
}


var G__31953 = seq__31940_31948;
var G__31954 = chunk__31941_31949;
var G__31955 = count__31942_31950;
var G__31956 = (i__31943_31951 + (1));
seq__31940_31948 = G__31953;
chunk__31941_31949 = G__31954;
count__31942_31950 = G__31955;
i__31943_31951 = G__31956;
continue;
} else {
var temp__5720__auto___31957 = cljs.core.seq.call(null,seq__31940_31948);
if(temp__5720__auto___31957){
var seq__31940_31958__$1 = temp__5720__auto___31957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31940_31958__$1)){
var c__4461__auto___31959 = cljs.core.chunk_first.call(null,seq__31940_31958__$1);
var G__31960 = cljs.core.chunk_rest.call(null,seq__31940_31958__$1);
var G__31961 = c__4461__auto___31959;
var G__31962 = cljs.core.count.call(null,c__4461__auto___31959);
var G__31963 = (0);
seq__31940_31948 = G__31960;
chunk__31941_31949 = G__31961;
count__31942_31950 = G__31962;
i__31943_31951 = G__31963;
continue;
} else {
var dep_31964 = cljs.core.first.call(null,seq__31940_31958__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_31964;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31964));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31964,(depth + (1)),state);
} else {
}


var G__31965 = cljs.core.next.call(null,seq__31940_31958__$1);
var G__31966 = null;
var G__31967 = (0);
var G__31968 = (0);
seq__31940_31948 = G__31965;
chunk__31941_31949 = G__31966;
count__31942_31950 = G__31967;
i__31943_31951 = G__31968;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31944){
var vec__31945 = p__31944;
var seq__31946 = cljs.core.seq.call(null,vec__31945);
var first__31947 = cljs.core.first.call(null,seq__31946);
var seq__31946__$1 = cljs.core.next.call(null,seq__31946);
var x = first__31947;
var xs = seq__31946__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31945,seq__31946,first__31947,seq__31946__$1,x,xs,get_deps__$1){
return (function (p1__31931_SHARP_){
return clojure.set.difference.call(null,p1__31931_SHARP_,x);
});})(vec__31945,seq__31946,first__31947,seq__31946__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31969 = cljs.core.seq.call(null,provides);
var chunk__31970 = null;
var count__31971 = (0);
var i__31972 = (0);
while(true){
if((i__31972 < count__31971)){
var prov = cljs.core._nth.call(null,chunk__31970,i__31972);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31973_31981 = cljs.core.seq.call(null,requires);
var chunk__31974_31982 = null;
var count__31975_31983 = (0);
var i__31976_31984 = (0);
while(true){
if((i__31976_31984 < count__31975_31983)){
var req_31985 = cljs.core._nth.call(null,chunk__31974_31982,i__31976_31984);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31985,prov);


var G__31986 = seq__31973_31981;
var G__31987 = chunk__31974_31982;
var G__31988 = count__31975_31983;
var G__31989 = (i__31976_31984 + (1));
seq__31973_31981 = G__31986;
chunk__31974_31982 = G__31987;
count__31975_31983 = G__31988;
i__31976_31984 = G__31989;
continue;
} else {
var temp__5720__auto___31990 = cljs.core.seq.call(null,seq__31973_31981);
if(temp__5720__auto___31990){
var seq__31973_31991__$1 = temp__5720__auto___31990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31973_31991__$1)){
var c__4461__auto___31992 = cljs.core.chunk_first.call(null,seq__31973_31991__$1);
var G__31993 = cljs.core.chunk_rest.call(null,seq__31973_31991__$1);
var G__31994 = c__4461__auto___31992;
var G__31995 = cljs.core.count.call(null,c__4461__auto___31992);
var G__31996 = (0);
seq__31973_31981 = G__31993;
chunk__31974_31982 = G__31994;
count__31975_31983 = G__31995;
i__31976_31984 = G__31996;
continue;
} else {
var req_31997 = cljs.core.first.call(null,seq__31973_31991__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31997,prov);


var G__31998 = cljs.core.next.call(null,seq__31973_31991__$1);
var G__31999 = null;
var G__32000 = (0);
var G__32001 = (0);
seq__31973_31981 = G__31998;
chunk__31974_31982 = G__31999;
count__31975_31983 = G__32000;
i__31976_31984 = G__32001;
continue;
}
} else {
}
}
break;
}


var G__32002 = seq__31969;
var G__32003 = chunk__31970;
var G__32004 = count__31971;
var G__32005 = (i__31972 + (1));
seq__31969 = G__32002;
chunk__31970 = G__32003;
count__31971 = G__32004;
i__31972 = G__32005;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31969);
if(temp__5720__auto__){
var seq__31969__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31969__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__31969__$1);
var G__32006 = cljs.core.chunk_rest.call(null,seq__31969__$1);
var G__32007 = c__4461__auto__;
var G__32008 = cljs.core.count.call(null,c__4461__auto__);
var G__32009 = (0);
seq__31969 = G__32006;
chunk__31970 = G__32007;
count__31971 = G__32008;
i__31972 = G__32009;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31969__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31977_32010 = cljs.core.seq.call(null,requires);
var chunk__31978_32011 = null;
var count__31979_32012 = (0);
var i__31980_32013 = (0);
while(true){
if((i__31980_32013 < count__31979_32012)){
var req_32014 = cljs.core._nth.call(null,chunk__31978_32011,i__31980_32013);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32014,prov);


var G__32015 = seq__31977_32010;
var G__32016 = chunk__31978_32011;
var G__32017 = count__31979_32012;
var G__32018 = (i__31980_32013 + (1));
seq__31977_32010 = G__32015;
chunk__31978_32011 = G__32016;
count__31979_32012 = G__32017;
i__31980_32013 = G__32018;
continue;
} else {
var temp__5720__auto___32019__$1 = cljs.core.seq.call(null,seq__31977_32010);
if(temp__5720__auto___32019__$1){
var seq__31977_32020__$1 = temp__5720__auto___32019__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31977_32020__$1)){
var c__4461__auto___32021 = cljs.core.chunk_first.call(null,seq__31977_32020__$1);
var G__32022 = cljs.core.chunk_rest.call(null,seq__31977_32020__$1);
var G__32023 = c__4461__auto___32021;
var G__32024 = cljs.core.count.call(null,c__4461__auto___32021);
var G__32025 = (0);
seq__31977_32010 = G__32022;
chunk__31978_32011 = G__32023;
count__31979_32012 = G__32024;
i__31980_32013 = G__32025;
continue;
} else {
var req_32026 = cljs.core.first.call(null,seq__31977_32020__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32026,prov);


var G__32027 = cljs.core.next.call(null,seq__31977_32020__$1);
var G__32028 = null;
var G__32029 = (0);
var G__32030 = (0);
seq__31977_32010 = G__32027;
chunk__31978_32011 = G__32028;
count__31979_32012 = G__32029;
i__31980_32013 = G__32030;
continue;
}
} else {
}
}
break;
}


var G__32031 = cljs.core.next.call(null,seq__31969__$1);
var G__32032 = null;
var G__32033 = (0);
var G__32034 = (0);
seq__31969 = G__32031;
chunk__31970 = G__32032;
count__31971 = G__32033;
i__31972 = G__32034;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32035_32039 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32036_32040 = null;
var count__32037_32041 = (0);
var i__32038_32042 = (0);
while(true){
if((i__32038_32042 < count__32037_32041)){
var ns_32043 = cljs.core._nth.call(null,chunk__32036_32040,i__32038_32042);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32043);


var G__32044 = seq__32035_32039;
var G__32045 = chunk__32036_32040;
var G__32046 = count__32037_32041;
var G__32047 = (i__32038_32042 + (1));
seq__32035_32039 = G__32044;
chunk__32036_32040 = G__32045;
count__32037_32041 = G__32046;
i__32038_32042 = G__32047;
continue;
} else {
var temp__5720__auto___32048 = cljs.core.seq.call(null,seq__32035_32039);
if(temp__5720__auto___32048){
var seq__32035_32049__$1 = temp__5720__auto___32048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32035_32049__$1)){
var c__4461__auto___32050 = cljs.core.chunk_first.call(null,seq__32035_32049__$1);
var G__32051 = cljs.core.chunk_rest.call(null,seq__32035_32049__$1);
var G__32052 = c__4461__auto___32050;
var G__32053 = cljs.core.count.call(null,c__4461__auto___32050);
var G__32054 = (0);
seq__32035_32039 = G__32051;
chunk__32036_32040 = G__32052;
count__32037_32041 = G__32053;
i__32038_32042 = G__32054;
continue;
} else {
var ns_32055 = cljs.core.first.call(null,seq__32035_32049__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32055);


var G__32056 = cljs.core.next.call(null,seq__32035_32049__$1);
var G__32057 = null;
var G__32058 = (0);
var G__32059 = (0);
seq__32035_32039 = G__32056;
chunk__32036_32040 = G__32057;
count__32037_32041 = G__32058;
i__32038_32042 = G__32059;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__32060__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32061__i = 0, G__32061__a = new Array(arguments.length -  0);
while (G__32061__i < G__32061__a.length) {G__32061__a[G__32061__i] = arguments[G__32061__i + 0]; ++G__32061__i;}
  args = new cljs.core.IndexedSeq(G__32061__a,0,null);
} 
return G__32060__delegate.call(this,args);};
G__32060.cljs$lang$maxFixedArity = 0;
G__32060.cljs$lang$applyTo = (function (arglist__32062){
var args = cljs.core.seq(arglist__32062);
return G__32060__delegate(args);
});
G__32060.cljs$core$IFn$_invoke$arity$variadic = G__32060__delegate;
return G__32060;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__32063_SHARP_,p2__32064_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32063_SHARP_)),p2__32064_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__32065_SHARP_,p2__32066_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32065_SHARP_),p2__32066_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32067 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32067.addCallback(((function (G__32067){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__32067))
);

G__32067.addErrback(((function (G__32067){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__32067))
);

return G__32067;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32068){if((e32068 instanceof Error)){
var e = e32068;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32068;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32069){if((e32069 instanceof Error)){
var e = e32069;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32069;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32070 = cljs.core._EQ_;
var expr__32071 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32070.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32071))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32070.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32071))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32070.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32071))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__32070,expr__32071){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32070,expr__32071))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32073,callback){
var map__32074 = p__32073;
var map__32074__$1 = (((((!((map__32074 == null))))?(((((map__32074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32074):map__32074);
var file_msg = map__32074__$1;
var request_url = cljs.core.get.call(null,map__32074__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__32074,map__32074__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32074,map__32074__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto__){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto__){
return (function (state_32112){
var state_val_32113 = (state_32112[(1)]);
if((state_val_32113 === (7))){
var inst_32108 = (state_32112[(2)]);
var state_32112__$1 = state_32112;
var statearr_32114_32140 = state_32112__$1;
(statearr_32114_32140[(2)] = inst_32108);

(statearr_32114_32140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (1))){
var state_32112__$1 = state_32112;
var statearr_32115_32141 = state_32112__$1;
(statearr_32115_32141[(2)] = null);

(statearr_32115_32141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (4))){
var inst_32078 = (state_32112[(7)]);
var inst_32078__$1 = (state_32112[(2)]);
var state_32112__$1 = (function (){var statearr_32116 = state_32112;
(statearr_32116[(7)] = inst_32078__$1);

return statearr_32116;
})();
if(cljs.core.truth_(inst_32078__$1)){
var statearr_32117_32142 = state_32112__$1;
(statearr_32117_32142[(1)] = (5));

} else {
var statearr_32118_32143 = state_32112__$1;
(statearr_32118_32143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (15))){
var inst_32091 = (state_32112[(8)]);
var inst_32093 = (state_32112[(9)]);
var inst_32095 = inst_32093.call(null,inst_32091);
var state_32112__$1 = state_32112;
var statearr_32119_32144 = state_32112__$1;
(statearr_32119_32144[(2)] = inst_32095);

(statearr_32119_32144[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (13))){
var inst_32102 = (state_32112[(2)]);
var state_32112__$1 = state_32112;
var statearr_32120_32145 = state_32112__$1;
(statearr_32120_32145[(2)] = inst_32102);

(statearr_32120_32145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (6))){
var state_32112__$1 = state_32112;
var statearr_32121_32146 = state_32112__$1;
(statearr_32121_32146[(2)] = null);

(statearr_32121_32146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (17))){
var inst_32099 = (state_32112[(2)]);
var state_32112__$1 = state_32112;
var statearr_32122_32147 = state_32112__$1;
(statearr_32122_32147[(2)] = inst_32099);

(statearr_32122_32147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (3))){
var inst_32110 = (state_32112[(2)]);
var state_32112__$1 = state_32112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32112__$1,inst_32110);
} else {
if((state_val_32113 === (12))){
var state_32112__$1 = state_32112;
var statearr_32123_32148 = state_32112__$1;
(statearr_32123_32148[(2)] = null);

(statearr_32123_32148[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (2))){
var state_32112__$1 = state_32112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32112__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32113 === (11))){
var inst_32083 = (state_32112[(10)]);
var inst_32089 = figwheel.client.file_reloading.blocking_load.call(null,inst_32083);
var state_32112__$1 = state_32112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32112__$1,(14),inst_32089);
} else {
if((state_val_32113 === (9))){
var inst_32083 = (state_32112[(10)]);
var state_32112__$1 = state_32112;
if(cljs.core.truth_(inst_32083)){
var statearr_32124_32149 = state_32112__$1;
(statearr_32124_32149[(1)] = (11));

} else {
var statearr_32125_32150 = state_32112__$1;
(statearr_32125_32150[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (5))){
var inst_32084 = (state_32112[(11)]);
var inst_32078 = (state_32112[(7)]);
var inst_32083 = cljs.core.nth.call(null,inst_32078,(0),null);
var inst_32084__$1 = cljs.core.nth.call(null,inst_32078,(1),null);
var state_32112__$1 = (function (){var statearr_32126 = state_32112;
(statearr_32126[(11)] = inst_32084__$1);

(statearr_32126[(10)] = inst_32083);

return statearr_32126;
})();
if(cljs.core.truth_(inst_32084__$1)){
var statearr_32127_32151 = state_32112__$1;
(statearr_32127_32151[(1)] = (8));

} else {
var statearr_32128_32152 = state_32112__$1;
(statearr_32128_32152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (14))){
var inst_32093 = (state_32112[(9)]);
var inst_32083 = (state_32112[(10)]);
var inst_32091 = (state_32112[(2)]);
var inst_32092 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32093__$1 = cljs.core.get.call(null,inst_32092,inst_32083);
var state_32112__$1 = (function (){var statearr_32129 = state_32112;
(statearr_32129[(8)] = inst_32091);

(statearr_32129[(9)] = inst_32093__$1);

return statearr_32129;
})();
if(cljs.core.truth_(inst_32093__$1)){
var statearr_32130_32153 = state_32112__$1;
(statearr_32130_32153[(1)] = (15));

} else {
var statearr_32131_32154 = state_32112__$1;
(statearr_32131_32154[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (16))){
var inst_32091 = (state_32112[(8)]);
var inst_32097 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32091);
var state_32112__$1 = state_32112;
var statearr_32132_32155 = state_32112__$1;
(statearr_32132_32155[(2)] = inst_32097);

(statearr_32132_32155[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (10))){
var inst_32104 = (state_32112[(2)]);
var state_32112__$1 = (function (){var statearr_32133 = state_32112;
(statearr_32133[(12)] = inst_32104);

return statearr_32133;
})();
var statearr_32134_32156 = state_32112__$1;
(statearr_32134_32156[(2)] = null);

(statearr_32134_32156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (8))){
var inst_32084 = (state_32112[(11)]);
var inst_32086 = eval(inst_32084);
var state_32112__$1 = state_32112;
var statearr_32135_32157 = state_32112__$1;
(statearr_32135_32157[(2)] = inst_32086);

(statearr_32135_32157[(1)] = (10));


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
});})(c__27978__auto__))
;
return ((function (switch__27883__auto__,c__27978__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27884__auto__ = null;
var figwheel$client$file_reloading$state_machine__27884__auto____0 = (function (){
var statearr_32136 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32136[(0)] = figwheel$client$file_reloading$state_machine__27884__auto__);

(statearr_32136[(1)] = (1));

return statearr_32136;
});
var figwheel$client$file_reloading$state_machine__27884__auto____1 = (function (state_32112){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_32112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e32137){if((e32137 instanceof Object)){
var ex__27887__auto__ = e32137;
var statearr_32138_32158 = state_32112;
(statearr_32138_32158[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32159 = state_32112;
state_32112 = G__32159;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27884__auto__ = function(state_32112){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27884__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27884__auto____1.call(this,state_32112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27884__auto____0;
figwheel$client$file_reloading$state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27884__auto____1;
return figwheel$client$file_reloading$state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto__))
})();
var state__27980__auto__ = (function (){var statearr_32139 = f__27979__auto__.call(null);
(statearr_32139[(6)] = c__27978__auto__);

return statearr_32139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto__))
);

return c__27978__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32161 = arguments.length;
switch (G__32161) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32163,callback){
var map__32164 = p__32163;
var map__32164__$1 = (((((!((map__32164 == null))))?(((((map__32164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32164):map__32164);
var file_msg = map__32164__$1;
var namespace = cljs.core.get.call(null,map__32164__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32164,map__32164__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32164,map__32164__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32166){
var map__32167 = p__32166;
var map__32167__$1 = (((((!((map__32167 == null))))?(((((map__32167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32167):map__32167);
var file_msg = map__32167__$1;
var namespace = cljs.core.get.call(null,map__32167__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32169){
var map__32170 = p__32169;
var map__32170__$1 = (((((!((map__32170 == null))))?(((((map__32170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32170):map__32170);
var file_msg = map__32170__$1;
var namespace = cljs.core.get.call(null,map__32170__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32172,callback){
var map__32173 = p__32172;
var map__32173__$1 = (((((!((map__32173 == null))))?(((((map__32173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32173):map__32173);
var file_msg = map__32173__$1;
var request_url = cljs.core.get.call(null,map__32173__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32173__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27978__auto___32223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto___32223,out){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto___32223,out){
return (function (state_32208){
var state_val_32209 = (state_32208[(1)]);
if((state_val_32209 === (1))){
var inst_32182 = cljs.core.seq.call(null,files);
var inst_32183 = cljs.core.first.call(null,inst_32182);
var inst_32184 = cljs.core.next.call(null,inst_32182);
var inst_32185 = files;
var state_32208__$1 = (function (){var statearr_32210 = state_32208;
(statearr_32210[(7)] = inst_32184);

(statearr_32210[(8)] = inst_32185);

(statearr_32210[(9)] = inst_32183);

return statearr_32210;
})();
var statearr_32211_32224 = state_32208__$1;
(statearr_32211_32224[(2)] = null);

(statearr_32211_32224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (2))){
var inst_32191 = (state_32208[(10)]);
var inst_32185 = (state_32208[(8)]);
var inst_32190 = cljs.core.seq.call(null,inst_32185);
var inst_32191__$1 = cljs.core.first.call(null,inst_32190);
var inst_32192 = cljs.core.next.call(null,inst_32190);
var inst_32193 = (inst_32191__$1 == null);
var inst_32194 = cljs.core.not.call(null,inst_32193);
var state_32208__$1 = (function (){var statearr_32212 = state_32208;
(statearr_32212[(10)] = inst_32191__$1);

(statearr_32212[(11)] = inst_32192);

return statearr_32212;
})();
if(inst_32194){
var statearr_32213_32225 = state_32208__$1;
(statearr_32213_32225[(1)] = (4));

} else {
var statearr_32214_32226 = state_32208__$1;
(statearr_32214_32226[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (3))){
var inst_32206 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32208__$1,inst_32206);
} else {
if((state_val_32209 === (4))){
var inst_32191 = (state_32208[(10)]);
var inst_32196 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32191);
var state_32208__$1 = state_32208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32208__$1,(7),inst_32196);
} else {
if((state_val_32209 === (5))){
var inst_32202 = cljs.core.async.close_BANG_.call(null,out);
var state_32208__$1 = state_32208;
var statearr_32215_32227 = state_32208__$1;
(statearr_32215_32227[(2)] = inst_32202);

(statearr_32215_32227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (6))){
var inst_32204 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
var statearr_32216_32228 = state_32208__$1;
(statearr_32216_32228[(2)] = inst_32204);

(statearr_32216_32228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (7))){
var inst_32192 = (state_32208[(11)]);
var inst_32198 = (state_32208[(2)]);
var inst_32199 = cljs.core.async.put_BANG_.call(null,out,inst_32198);
var inst_32185 = inst_32192;
var state_32208__$1 = (function (){var statearr_32217 = state_32208;
(statearr_32217[(12)] = inst_32199);

(statearr_32217[(8)] = inst_32185);

return statearr_32217;
})();
var statearr_32218_32229 = state_32208__$1;
(statearr_32218_32229[(2)] = null);

(statearr_32218_32229[(1)] = (2));


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
});})(c__27978__auto___32223,out))
;
return ((function (switch__27883__auto__,c__27978__auto___32223,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27884__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27884__auto____0 = (function (){
var statearr_32219 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32219[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27884__auto__);

(statearr_32219[(1)] = (1));

return statearr_32219;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27884__auto____1 = (function (state_32208){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_32208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e32220){if((e32220 instanceof Object)){
var ex__27887__auto__ = e32220;
var statearr_32221_32230 = state_32208;
(statearr_32221_32230[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32231 = state_32208;
state_32208 = G__32231;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27884__auto__ = function(state_32208){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27884__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27884__auto____1.call(this,state_32208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27884__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27884__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto___32223,out))
})();
var state__27980__auto__ = (function (){var statearr_32222 = f__27979__auto__.call(null);
(statearr_32222[(6)] = c__27978__auto___32223);

return statearr_32222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto___32223,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32232,opts){
var map__32233 = p__32232;
var map__32233__$1 = (((((!((map__32233 == null))))?(((((map__32233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32233):map__32233);
var eval_body = cljs.core.get.call(null,map__32233__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32233__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32235){var e = e32235;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32236_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32236_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32237){
var vec__32238 = p__32237;
var k = cljs.core.nth.call(null,vec__32238,(0),null);
var v = cljs.core.nth.call(null,vec__32238,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32241){
var vec__32242 = p__32241;
var k = cljs.core.nth.call(null,vec__32242,(0),null);
var v = cljs.core.nth.call(null,vec__32242,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32248,p__32249){
var map__32250 = p__32248;
var map__32250__$1 = (((((!((map__32250 == null))))?(((((map__32250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32250):map__32250);
var opts = map__32250__$1;
var before_jsload = cljs.core.get.call(null,map__32250__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32250__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32250__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32251 = p__32249;
var map__32251__$1 = (((((!((map__32251 == null))))?(((((map__32251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32251):map__32251);
var msg = map__32251__$1;
var files = cljs.core.get.call(null,map__32251__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32251__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32251__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27979__auto__ = (function (){var switch__27883__auto__ = ((function (c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32405){
var state_val_32406 = (state_32405[(1)]);
if((state_val_32406 === (7))){
var inst_32266 = (state_32405[(7)]);
var inst_32265 = (state_32405[(8)]);
var inst_32267 = (state_32405[(9)]);
var inst_32268 = (state_32405[(10)]);
var inst_32273 = cljs.core._nth.call(null,inst_32266,inst_32268);
var inst_32274 = figwheel.client.file_reloading.eval_body.call(null,inst_32273,opts);
var inst_32275 = (inst_32268 + (1));
var tmp32407 = inst_32266;
var tmp32408 = inst_32265;
var tmp32409 = inst_32267;
var inst_32265__$1 = tmp32408;
var inst_32266__$1 = tmp32407;
var inst_32267__$1 = tmp32409;
var inst_32268__$1 = inst_32275;
var state_32405__$1 = (function (){var statearr_32410 = state_32405;
(statearr_32410[(11)] = inst_32274);

(statearr_32410[(7)] = inst_32266__$1);

(statearr_32410[(8)] = inst_32265__$1);

(statearr_32410[(9)] = inst_32267__$1);

(statearr_32410[(10)] = inst_32268__$1);

return statearr_32410;
})();
var statearr_32411_32494 = state_32405__$1;
(statearr_32411_32494[(2)] = null);

(statearr_32411_32494[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (20))){
var inst_32308 = (state_32405[(12)]);
var inst_32316 = figwheel.client.file_reloading.sort_files.call(null,inst_32308);
var state_32405__$1 = state_32405;
var statearr_32412_32495 = state_32405__$1;
(statearr_32412_32495[(2)] = inst_32316);

(statearr_32412_32495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (27))){
var state_32405__$1 = state_32405;
var statearr_32413_32496 = state_32405__$1;
(statearr_32413_32496[(2)] = null);

(statearr_32413_32496[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (1))){
var inst_32257 = (state_32405[(13)]);
var inst_32254 = before_jsload.call(null,files);
var inst_32255 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32256 = (function (){return ((function (inst_32257,inst_32254,inst_32255,state_val_32406,c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32245_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32245_SHARP_);
});
;})(inst_32257,inst_32254,inst_32255,state_val_32406,c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32257__$1 = cljs.core.filter.call(null,inst_32256,files);
var inst_32258 = cljs.core.not_empty.call(null,inst_32257__$1);
var state_32405__$1 = (function (){var statearr_32414 = state_32405;
(statearr_32414[(14)] = inst_32255);

(statearr_32414[(15)] = inst_32254);

(statearr_32414[(13)] = inst_32257__$1);

return statearr_32414;
})();
if(cljs.core.truth_(inst_32258)){
var statearr_32415_32497 = state_32405__$1;
(statearr_32415_32497[(1)] = (2));

} else {
var statearr_32416_32498 = state_32405__$1;
(statearr_32416_32498[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (24))){
var state_32405__$1 = state_32405;
var statearr_32417_32499 = state_32405__$1;
(statearr_32417_32499[(2)] = null);

(statearr_32417_32499[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (39))){
var inst_32358 = (state_32405[(16)]);
var state_32405__$1 = state_32405;
var statearr_32418_32500 = state_32405__$1;
(statearr_32418_32500[(2)] = inst_32358);

(statearr_32418_32500[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (46))){
var inst_32400 = (state_32405[(2)]);
var state_32405__$1 = state_32405;
var statearr_32419_32501 = state_32405__$1;
(statearr_32419_32501[(2)] = inst_32400);

(statearr_32419_32501[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (4))){
var inst_32302 = (state_32405[(2)]);
var inst_32303 = cljs.core.List.EMPTY;
var inst_32304 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32303);
var inst_32305 = (function (){return ((function (inst_32302,inst_32303,inst_32304,state_val_32406,c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32246_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32246_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32246_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32246_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_32302,inst_32303,inst_32304,state_val_32406,c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32306 = cljs.core.filter.call(null,inst_32305,files);
var inst_32307 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32308 = cljs.core.concat.call(null,inst_32306,inst_32307);
var state_32405__$1 = (function (){var statearr_32420 = state_32405;
(statearr_32420[(12)] = inst_32308);

(statearr_32420[(17)] = inst_32302);

(statearr_32420[(18)] = inst_32304);

return statearr_32420;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32421_32502 = state_32405__$1;
(statearr_32421_32502[(1)] = (16));

} else {
var statearr_32422_32503 = state_32405__$1;
(statearr_32422_32503[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (15))){
var inst_32292 = (state_32405[(2)]);
var state_32405__$1 = state_32405;
var statearr_32423_32504 = state_32405__$1;
(statearr_32423_32504[(2)] = inst_32292);

(statearr_32423_32504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (21))){
var inst_32318 = (state_32405[(19)]);
var inst_32318__$1 = (state_32405[(2)]);
var inst_32319 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32318__$1);
var state_32405__$1 = (function (){var statearr_32424 = state_32405;
(statearr_32424[(19)] = inst_32318__$1);

return statearr_32424;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32405__$1,(22),inst_32319);
} else {
if((state_val_32406 === (31))){
var inst_32403 = (state_32405[(2)]);
var state_32405__$1 = state_32405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32405__$1,inst_32403);
} else {
if((state_val_32406 === (32))){
var inst_32358 = (state_32405[(16)]);
var inst_32363 = inst_32358.cljs$lang$protocol_mask$partition0$;
var inst_32364 = (inst_32363 & (64));
var inst_32365 = inst_32358.cljs$core$ISeq$;
var inst_32366 = (cljs.core.PROTOCOL_SENTINEL === inst_32365);
var inst_32367 = ((inst_32364) || (inst_32366));
var state_32405__$1 = state_32405;
if(cljs.core.truth_(inst_32367)){
var statearr_32425_32505 = state_32405__$1;
(statearr_32425_32505[(1)] = (35));

} else {
var statearr_32426_32506 = state_32405__$1;
(statearr_32426_32506[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (40))){
var inst_32380 = (state_32405[(20)]);
var inst_32379 = (state_32405[(2)]);
var inst_32380__$1 = cljs.core.get.call(null,inst_32379,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32381 = cljs.core.get.call(null,inst_32379,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32382 = cljs.core.not_empty.call(null,inst_32380__$1);
var state_32405__$1 = (function (){var statearr_32427 = state_32405;
(statearr_32427[(20)] = inst_32380__$1);

(statearr_32427[(21)] = inst_32381);

return statearr_32427;
})();
if(cljs.core.truth_(inst_32382)){
var statearr_32428_32507 = state_32405__$1;
(statearr_32428_32507[(1)] = (41));

} else {
var statearr_32429_32508 = state_32405__$1;
(statearr_32429_32508[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (33))){
var state_32405__$1 = state_32405;
var statearr_32430_32509 = state_32405__$1;
(statearr_32430_32509[(2)] = false);

(statearr_32430_32509[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (13))){
var inst_32278 = (state_32405[(22)]);
var inst_32282 = cljs.core.chunk_first.call(null,inst_32278);
var inst_32283 = cljs.core.chunk_rest.call(null,inst_32278);
var inst_32284 = cljs.core.count.call(null,inst_32282);
var inst_32265 = inst_32283;
var inst_32266 = inst_32282;
var inst_32267 = inst_32284;
var inst_32268 = (0);
var state_32405__$1 = (function (){var statearr_32431 = state_32405;
(statearr_32431[(7)] = inst_32266);

(statearr_32431[(8)] = inst_32265);

(statearr_32431[(9)] = inst_32267);

(statearr_32431[(10)] = inst_32268);

return statearr_32431;
})();
var statearr_32432_32510 = state_32405__$1;
(statearr_32432_32510[(2)] = null);

(statearr_32432_32510[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (22))){
var inst_32326 = (state_32405[(23)]);
var inst_32318 = (state_32405[(19)]);
var inst_32321 = (state_32405[(24)]);
var inst_32322 = (state_32405[(25)]);
var inst_32321__$1 = (state_32405[(2)]);
var inst_32322__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32321__$1);
var inst_32323 = (function (){var all_files = inst_32318;
var res_SINGLEQUOTE_ = inst_32321__$1;
var res = inst_32322__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32326,inst_32318,inst_32321,inst_32322,inst_32321__$1,inst_32322__$1,state_val_32406,c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32247_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32247_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32326,inst_32318,inst_32321,inst_32322,inst_32321__$1,inst_32322__$1,state_val_32406,c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32324 = cljs.core.filter.call(null,inst_32323,inst_32321__$1);
var inst_32325 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32326__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32325);
var inst_32327 = cljs.core.not_empty.call(null,inst_32326__$1);
var state_32405__$1 = (function (){var statearr_32433 = state_32405;
(statearr_32433[(23)] = inst_32326__$1);

(statearr_32433[(26)] = inst_32324);

(statearr_32433[(24)] = inst_32321__$1);

(statearr_32433[(25)] = inst_32322__$1);

return statearr_32433;
})();
if(cljs.core.truth_(inst_32327)){
var statearr_32434_32511 = state_32405__$1;
(statearr_32434_32511[(1)] = (23));

} else {
var statearr_32435_32512 = state_32405__$1;
(statearr_32435_32512[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (36))){
var state_32405__$1 = state_32405;
var statearr_32436_32513 = state_32405__$1;
(statearr_32436_32513[(2)] = false);

(statearr_32436_32513[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (41))){
var inst_32380 = (state_32405[(20)]);
var inst_32384 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32385 = cljs.core.map.call(null,inst_32384,inst_32380);
var inst_32386 = cljs.core.pr_str.call(null,inst_32385);
var inst_32387 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32386)].join('');
var inst_32388 = figwheel.client.utils.log.call(null,inst_32387);
var state_32405__$1 = state_32405;
var statearr_32437_32514 = state_32405__$1;
(statearr_32437_32514[(2)] = inst_32388);

(statearr_32437_32514[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (43))){
var inst_32381 = (state_32405[(21)]);
var inst_32391 = (state_32405[(2)]);
var inst_32392 = cljs.core.not_empty.call(null,inst_32381);
var state_32405__$1 = (function (){var statearr_32438 = state_32405;
(statearr_32438[(27)] = inst_32391);

return statearr_32438;
})();
if(cljs.core.truth_(inst_32392)){
var statearr_32439_32515 = state_32405__$1;
(statearr_32439_32515[(1)] = (44));

} else {
var statearr_32440_32516 = state_32405__$1;
(statearr_32440_32516[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (29))){
var inst_32358 = (state_32405[(16)]);
var inst_32326 = (state_32405[(23)]);
var inst_32318 = (state_32405[(19)]);
var inst_32324 = (state_32405[(26)]);
var inst_32321 = (state_32405[(24)]);
var inst_32322 = (state_32405[(25)]);
var inst_32354 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32357 = (function (){var all_files = inst_32318;
var res_SINGLEQUOTE_ = inst_32321;
var res = inst_32322;
var files_not_loaded = inst_32324;
var dependencies_that_loaded = inst_32326;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32358,inst_32326,inst_32318,inst_32324,inst_32321,inst_32322,inst_32354,state_val_32406,c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32356){
var map__32441 = p__32356;
var map__32441__$1 = (((((!((map__32441 == null))))?(((((map__32441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32441):map__32441);
var namespace = cljs.core.get.call(null,map__32441__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32358,inst_32326,inst_32318,inst_32324,inst_32321,inst_32322,inst_32354,state_val_32406,c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32358__$1 = cljs.core.group_by.call(null,inst_32357,inst_32324);
var inst_32360 = (inst_32358__$1 == null);
var inst_32361 = cljs.core.not.call(null,inst_32360);
var state_32405__$1 = (function (){var statearr_32443 = state_32405;
(statearr_32443[(16)] = inst_32358__$1);

(statearr_32443[(28)] = inst_32354);

return statearr_32443;
})();
if(inst_32361){
var statearr_32444_32517 = state_32405__$1;
(statearr_32444_32517[(1)] = (32));

} else {
var statearr_32445_32518 = state_32405__$1;
(statearr_32445_32518[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (44))){
var inst_32381 = (state_32405[(21)]);
var inst_32394 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32381);
var inst_32395 = cljs.core.pr_str.call(null,inst_32394);
var inst_32396 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32395)].join('');
var inst_32397 = figwheel.client.utils.log.call(null,inst_32396);
var state_32405__$1 = state_32405;
var statearr_32446_32519 = state_32405__$1;
(statearr_32446_32519[(2)] = inst_32397);

(statearr_32446_32519[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (6))){
var inst_32299 = (state_32405[(2)]);
var state_32405__$1 = state_32405;
var statearr_32447_32520 = state_32405__$1;
(statearr_32447_32520[(2)] = inst_32299);

(statearr_32447_32520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (28))){
var inst_32324 = (state_32405[(26)]);
var inst_32351 = (state_32405[(2)]);
var inst_32352 = cljs.core.not_empty.call(null,inst_32324);
var state_32405__$1 = (function (){var statearr_32448 = state_32405;
(statearr_32448[(29)] = inst_32351);

return statearr_32448;
})();
if(cljs.core.truth_(inst_32352)){
var statearr_32449_32521 = state_32405__$1;
(statearr_32449_32521[(1)] = (29));

} else {
var statearr_32450_32522 = state_32405__$1;
(statearr_32450_32522[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (25))){
var inst_32322 = (state_32405[(25)]);
var inst_32338 = (state_32405[(2)]);
var inst_32339 = cljs.core.not_empty.call(null,inst_32322);
var state_32405__$1 = (function (){var statearr_32451 = state_32405;
(statearr_32451[(30)] = inst_32338);

return statearr_32451;
})();
if(cljs.core.truth_(inst_32339)){
var statearr_32452_32523 = state_32405__$1;
(statearr_32452_32523[(1)] = (26));

} else {
var statearr_32453_32524 = state_32405__$1;
(statearr_32453_32524[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (34))){
var inst_32374 = (state_32405[(2)]);
var state_32405__$1 = state_32405;
if(cljs.core.truth_(inst_32374)){
var statearr_32454_32525 = state_32405__$1;
(statearr_32454_32525[(1)] = (38));

} else {
var statearr_32455_32526 = state_32405__$1;
(statearr_32455_32526[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (17))){
var state_32405__$1 = state_32405;
var statearr_32456_32527 = state_32405__$1;
(statearr_32456_32527[(2)] = recompile_dependents);

(statearr_32456_32527[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (3))){
var state_32405__$1 = state_32405;
var statearr_32457_32528 = state_32405__$1;
(statearr_32457_32528[(2)] = null);

(statearr_32457_32528[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (12))){
var inst_32295 = (state_32405[(2)]);
var state_32405__$1 = state_32405;
var statearr_32458_32529 = state_32405__$1;
(statearr_32458_32529[(2)] = inst_32295);

(statearr_32458_32529[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (2))){
var inst_32257 = (state_32405[(13)]);
var inst_32264 = cljs.core.seq.call(null,inst_32257);
var inst_32265 = inst_32264;
var inst_32266 = null;
var inst_32267 = (0);
var inst_32268 = (0);
var state_32405__$1 = (function (){var statearr_32459 = state_32405;
(statearr_32459[(7)] = inst_32266);

(statearr_32459[(8)] = inst_32265);

(statearr_32459[(9)] = inst_32267);

(statearr_32459[(10)] = inst_32268);

return statearr_32459;
})();
var statearr_32460_32530 = state_32405__$1;
(statearr_32460_32530[(2)] = null);

(statearr_32460_32530[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (23))){
var inst_32326 = (state_32405[(23)]);
var inst_32318 = (state_32405[(19)]);
var inst_32324 = (state_32405[(26)]);
var inst_32321 = (state_32405[(24)]);
var inst_32322 = (state_32405[(25)]);
var inst_32329 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32331 = (function (){var all_files = inst_32318;
var res_SINGLEQUOTE_ = inst_32321;
var res = inst_32322;
var files_not_loaded = inst_32324;
var dependencies_that_loaded = inst_32326;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32326,inst_32318,inst_32324,inst_32321,inst_32322,inst_32329,state_val_32406,c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32330){
var map__32461 = p__32330;
var map__32461__$1 = (((((!((map__32461 == null))))?(((((map__32461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32461):map__32461);
var request_url = cljs.core.get.call(null,map__32461__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32326,inst_32318,inst_32324,inst_32321,inst_32322,inst_32329,state_val_32406,c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32332 = cljs.core.reverse.call(null,inst_32326);
var inst_32333 = cljs.core.map.call(null,inst_32331,inst_32332);
var inst_32334 = cljs.core.pr_str.call(null,inst_32333);
var inst_32335 = figwheel.client.utils.log.call(null,inst_32334);
var state_32405__$1 = (function (){var statearr_32463 = state_32405;
(statearr_32463[(31)] = inst_32329);

return statearr_32463;
})();
var statearr_32464_32531 = state_32405__$1;
(statearr_32464_32531[(2)] = inst_32335);

(statearr_32464_32531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (35))){
var state_32405__$1 = state_32405;
var statearr_32465_32532 = state_32405__$1;
(statearr_32465_32532[(2)] = true);

(statearr_32465_32532[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (19))){
var inst_32308 = (state_32405[(12)]);
var inst_32314 = figwheel.client.file_reloading.expand_files.call(null,inst_32308);
var state_32405__$1 = state_32405;
var statearr_32466_32533 = state_32405__$1;
(statearr_32466_32533[(2)] = inst_32314);

(statearr_32466_32533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (11))){
var state_32405__$1 = state_32405;
var statearr_32467_32534 = state_32405__$1;
(statearr_32467_32534[(2)] = null);

(statearr_32467_32534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (9))){
var inst_32297 = (state_32405[(2)]);
var state_32405__$1 = state_32405;
var statearr_32468_32535 = state_32405__$1;
(statearr_32468_32535[(2)] = inst_32297);

(statearr_32468_32535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (5))){
var inst_32267 = (state_32405[(9)]);
var inst_32268 = (state_32405[(10)]);
var inst_32270 = (inst_32268 < inst_32267);
var inst_32271 = inst_32270;
var state_32405__$1 = state_32405;
if(cljs.core.truth_(inst_32271)){
var statearr_32469_32536 = state_32405__$1;
(statearr_32469_32536[(1)] = (7));

} else {
var statearr_32470_32537 = state_32405__$1;
(statearr_32470_32537[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (14))){
var inst_32278 = (state_32405[(22)]);
var inst_32287 = cljs.core.first.call(null,inst_32278);
var inst_32288 = figwheel.client.file_reloading.eval_body.call(null,inst_32287,opts);
var inst_32289 = cljs.core.next.call(null,inst_32278);
var inst_32265 = inst_32289;
var inst_32266 = null;
var inst_32267 = (0);
var inst_32268 = (0);
var state_32405__$1 = (function (){var statearr_32471 = state_32405;
(statearr_32471[(7)] = inst_32266);

(statearr_32471[(8)] = inst_32265);

(statearr_32471[(9)] = inst_32267);

(statearr_32471[(10)] = inst_32268);

(statearr_32471[(32)] = inst_32288);

return statearr_32471;
})();
var statearr_32472_32538 = state_32405__$1;
(statearr_32472_32538[(2)] = null);

(statearr_32472_32538[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (45))){
var state_32405__$1 = state_32405;
var statearr_32473_32539 = state_32405__$1;
(statearr_32473_32539[(2)] = null);

(statearr_32473_32539[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (26))){
var inst_32326 = (state_32405[(23)]);
var inst_32318 = (state_32405[(19)]);
var inst_32324 = (state_32405[(26)]);
var inst_32321 = (state_32405[(24)]);
var inst_32322 = (state_32405[(25)]);
var inst_32341 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32343 = (function (){var all_files = inst_32318;
var res_SINGLEQUOTE_ = inst_32321;
var res = inst_32322;
var files_not_loaded = inst_32324;
var dependencies_that_loaded = inst_32326;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32326,inst_32318,inst_32324,inst_32321,inst_32322,inst_32341,state_val_32406,c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32342){
var map__32474 = p__32342;
var map__32474__$1 = (((((!((map__32474 == null))))?(((((map__32474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32474):map__32474);
var namespace = cljs.core.get.call(null,map__32474__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32474__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32326,inst_32318,inst_32324,inst_32321,inst_32322,inst_32341,state_val_32406,c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32344 = cljs.core.map.call(null,inst_32343,inst_32322);
var inst_32345 = cljs.core.pr_str.call(null,inst_32344);
var inst_32346 = figwheel.client.utils.log.call(null,inst_32345);
var inst_32347 = (function (){var all_files = inst_32318;
var res_SINGLEQUOTE_ = inst_32321;
var res = inst_32322;
var files_not_loaded = inst_32324;
var dependencies_that_loaded = inst_32326;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32326,inst_32318,inst_32324,inst_32321,inst_32322,inst_32341,inst_32343,inst_32344,inst_32345,inst_32346,state_val_32406,c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32326,inst_32318,inst_32324,inst_32321,inst_32322,inst_32341,inst_32343,inst_32344,inst_32345,inst_32346,state_val_32406,c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32348 = setTimeout(inst_32347,(10));
var state_32405__$1 = (function (){var statearr_32476 = state_32405;
(statearr_32476[(33)] = inst_32341);

(statearr_32476[(34)] = inst_32346);

return statearr_32476;
})();
var statearr_32477_32540 = state_32405__$1;
(statearr_32477_32540[(2)] = inst_32348);

(statearr_32477_32540[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (16))){
var state_32405__$1 = state_32405;
var statearr_32478_32541 = state_32405__$1;
(statearr_32478_32541[(2)] = reload_dependents);

(statearr_32478_32541[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (38))){
var inst_32358 = (state_32405[(16)]);
var inst_32376 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32358);
var state_32405__$1 = state_32405;
var statearr_32479_32542 = state_32405__$1;
(statearr_32479_32542[(2)] = inst_32376);

(statearr_32479_32542[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (30))){
var state_32405__$1 = state_32405;
var statearr_32480_32543 = state_32405__$1;
(statearr_32480_32543[(2)] = null);

(statearr_32480_32543[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (10))){
var inst_32278 = (state_32405[(22)]);
var inst_32280 = cljs.core.chunked_seq_QMARK_.call(null,inst_32278);
var state_32405__$1 = state_32405;
if(inst_32280){
var statearr_32481_32544 = state_32405__$1;
(statearr_32481_32544[(1)] = (13));

} else {
var statearr_32482_32545 = state_32405__$1;
(statearr_32482_32545[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (18))){
var inst_32312 = (state_32405[(2)]);
var state_32405__$1 = state_32405;
if(cljs.core.truth_(inst_32312)){
var statearr_32483_32546 = state_32405__$1;
(statearr_32483_32546[(1)] = (19));

} else {
var statearr_32484_32547 = state_32405__$1;
(statearr_32484_32547[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (42))){
var state_32405__$1 = state_32405;
var statearr_32485_32548 = state_32405__$1;
(statearr_32485_32548[(2)] = null);

(statearr_32485_32548[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (37))){
var inst_32371 = (state_32405[(2)]);
var state_32405__$1 = state_32405;
var statearr_32486_32549 = state_32405__$1;
(statearr_32486_32549[(2)] = inst_32371);

(statearr_32486_32549[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (8))){
var inst_32265 = (state_32405[(8)]);
var inst_32278 = (state_32405[(22)]);
var inst_32278__$1 = cljs.core.seq.call(null,inst_32265);
var state_32405__$1 = (function (){var statearr_32487 = state_32405;
(statearr_32487[(22)] = inst_32278__$1);

return statearr_32487;
})();
if(inst_32278__$1){
var statearr_32488_32550 = state_32405__$1;
(statearr_32488_32550[(1)] = (10));

} else {
var statearr_32489_32551 = state_32405__$1;
(statearr_32489_32551[(1)] = (11));

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
}
});})(c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27883__auto__,c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27884__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27884__auto____0 = (function (){
var statearr_32490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32490[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27884__auto__);

(statearr_32490[(1)] = (1));

return statearr_32490;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27884__auto____1 = (function (state_32405){
while(true){
var ret_value__27885__auto__ = (function (){try{while(true){
var result__27886__auto__ = switch__27883__auto__.call(null,state_32405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27886__auto__;
}
break;
}
}catch (e32491){if((e32491 instanceof Object)){
var ex__27887__auto__ = e32491;
var statearr_32492_32552 = state_32405;
(statearr_32492_32552[(5)] = ex__27887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32553 = state_32405;
state_32405 = G__32553;
continue;
} else {
return ret_value__27885__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27884__auto__ = function(state_32405){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27884__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27884__auto____1.call(this,state_32405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27884__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27884__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27884__auto__;
})()
;})(switch__27883__auto__,c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27980__auto__ = (function (){var statearr_32493 = f__27979__auto__.call(null);
(statearr_32493[(6)] = c__27978__auto__);

return statearr_32493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27980__auto__);
});})(c__27978__auto__,map__32250,map__32250__$1,opts,before_jsload,on_jsload,reload_dependents,map__32251,map__32251__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27978__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32556,link){
var map__32557 = p__32556;
var map__32557__$1 = (((((!((map__32557 == null))))?(((((map__32557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32557):map__32557);
var file = cljs.core.get.call(null,map__32557__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__32557,map__32557__$1,file){
return (function (p1__32554_SHARP_,p2__32555_SHARP_){
if(cljs.core._EQ_.call(null,p1__32554_SHARP_,p2__32555_SHARP_)){
return p1__32554_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__32557,map__32557__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32560){
var map__32561 = p__32560;
var map__32561__$1 = (((((!((map__32561 == null))))?(((((map__32561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32561):map__32561);
var match_length = cljs.core.get.call(null,map__32561__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32561__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32559_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32559_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32563_SHARP_,p2__32564_SHARP_){
return cljs.core.assoc.call(null,p1__32563_SHARP_,cljs.core.get.call(null,p2__32564_SHARP_,key),p2__32564_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_32565 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32565);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32565);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32566,p__32567){
var map__32568 = p__32566;
var map__32568__$1 = (((((!((map__32568 == null))))?(((((map__32568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32568):map__32568);
var on_cssload = cljs.core.get.call(null,map__32568__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32569 = p__32567;
var map__32569__$1 = (((((!((map__32569 == null))))?(((((map__32569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32569):map__32569);
var files_msg = map__32569__$1;
var files = cljs.core.get.call(null,map__32569__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1564575464698
