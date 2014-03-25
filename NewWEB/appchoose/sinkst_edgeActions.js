
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Symbol_2}","click",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_cover}","click",function(sym,e){sym.$("video").children().remove();sym.$("video").hide();sym.$("cover").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Symbol_1}","touchstart",function(sym,e){window.open("appgames/sinkei touch/index.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Symbol_1}","click",function(sym,e){if(navigator.userAgent.indexOf('iPhone')>0||navigator.userAgent.indexOf('iPad')>0||navigator.userAgent.indexOf('iPod')>0||navigator.userAgent.indexOf('Android')>0){}else{window.open("appgames/sinkei/index.html","_self");}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'Symbol_2'
(function(symbolName){})("Symbol_2");
//Edge symbol end:'Symbol_2'

//=========================================================

//Edge symbol: 'Symbol_3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){S4TL=750;sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){S4TL=0;sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){S4TL=1500;sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Symbol_4}","swipeleft",function(sym,e){if(S4TL!=1500){sym.play();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Symbol_4}","swiperight",function(sym,e){if(S4TL!=0){sym.playReverse();};});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",101,function(sym,e){S4TL=100;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1407,function(sym,e){S4TL=1400;});
//Edge binding end
})("Symbol_3");
//Edge symbol end:'Symbol_3'

//=========================================================

//Edge symbol: 'Symbol_4'
(function(symbolName){})("Symbol_4");
//Edge symbol end:'Symbol_4'

//=========================================================

//Edge symbol: 'cover'
(function(symbolName){})("cover");
//Edge symbol end:'cover'
})(jQuery,AdobeEdge,"EDGE-116310872");