
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId, symbolName, "${_Symbol_2}", "click", function(sym,e){sym.$('<iframe width="420" height="315" src="//www.youtube.com/embed/rWB67Z4bJMg" frameborder="0" allowfullscreen></iframe>').appendTo(sym.$("video"));sym.$("video").show();sym.$("cover").show();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_cover}", "click", function(sym,e){sym.$("video").children().remove();sym.$("video").hide();sym.$("cover").hide();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_Symbol_1}", "click", function(sym,e){window.open("appgames/moneygame/moneygame_ver2_0.html","_self");});
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
(function(symbolName){Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym,e){S4TL=750;sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym,e){S4TL=0;sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym,e){S4TL=1500;sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_Symbol_4}", "swipeleft", function(sym,e){if(S4TL!=1500){sym.play();}});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_Symbol_4}", "swiperight", function(sym,e){if(S4TL!=0){sym.playReverse();};});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 101, function(sym,e){S4TL=100;});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1407, function(sym,e){S4TL=1400;});
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

})(jQuery, AdobeEdge, "EDGE-116310872");