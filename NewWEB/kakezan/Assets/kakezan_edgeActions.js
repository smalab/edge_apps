
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","touchend",function(sym,e){var goX=e.originalEvent.changedTouches[0].pageX-prePageX;if(goX>0){sym.play(1000);}else if(goX<0){sym.play(0);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","touchstart",function(sym,e){e.preventDefault();prePageX=e.originalEvent.changedTouches[0].pageX;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'preview'
(function(symbolName){})("preview");
//Edge symbol end:'preview'

//=========================================================

//Edge symbol: 'move1'
(function(symbolName){})("move1");
//Edge symbol end:'move1'
})(jQuery,AdobeEdge,"EDGE-259759409");