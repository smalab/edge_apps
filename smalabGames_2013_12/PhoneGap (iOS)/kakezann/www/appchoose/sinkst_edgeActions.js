
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId, symbolName, "${_Symbol_2}", "click", function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_cover}", "click", function(sym,e){sym.$("video").children().remove();sym.$("video").hide();sym.$("cover").hide();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_Symbol_1}", "touchstart", function(sym,e){window.open("appgames/sinkei touch/index.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_Symbol_1}", "click", function(sym,e){         
});
//Edge binding end
      Symbol.bindElementAction(compId, symbolName, "${_Text4}", "click", function(sym, e) {
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("appgames/sinkei/sinkei_siso_10_ipad.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text4Copy}", "click", function(sym, e) {
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("appgames/sinkei/sinkei_siso_1p.html", "_self");
         

      });
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

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'house'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_housecover}", "click", function(sym, e) {
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("../index.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_housecover}", "mousedown", function(sym, e) {
         // マウスボタンが押されたときに実行されるコードを挿入します
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("house1").hide();
         sym.$("house2").hide();
         sym.$("house3").hide();
         sym.$("white").hide();
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("house1Copy").show();
         sym.$("house2Copy").show();
         sym.$("house3Copy").show();
         sym.$("whiteCopy").show();
         

      });
      //Edge binding end

   })("home");
   //Edge symbol end:'home'

})(jQuery, AdobeEdge, "EDGE-116310872");