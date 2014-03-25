/***********************
* Adobe Edge Animate コンポジションアクション
*
* このファイルを編集する際には注意が必要です。必ず関数シグニチャと
* 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
* 操作可能な状態にしておいてください。 
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Symbol_1}", "touchstart", function(sym, e) {
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("mathQ1-1.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_2}", "touchstart", function(sym, e) {
         window.open("mathQ1-2.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_3}", "touchstart", function(sym, e) {
         window.open("mathQ1-3.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_4}", "touchstart", function(sym, e) {
         window.open("mathQ1-4.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_5}", "touchstart", function(sym, e) {
         window.open("mathQ1-5.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_6}", "touchstart", function(sym, e) {
         window.open("mathQ2-1.html", "_self");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_7}", "touchstart", function(sym, e) {
         window.open("mathQ2-2.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_8}", "touchstart", function(sym, e) {
         window.open("mathQ2-3.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_9}", "touchstart", function(sym, e) {
         window.open("mathQ2-4.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_10}", "touchstart", function(sym, e) {
         window.open("mathQ2-5.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_2}", "click", function(sym, e) {
         window.open("mathQ1-2.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_3}", "click", function(sym, e) {
         window.open("mathQ1-3.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_4}", "click", function(sym, e) {
         window.open("mathQ1-4.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_5}", "click", function(sym, e) {
         window.open("mathQ1-5.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_6}", "click", function(sym, e) {
         window.open("mathQ2-1.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_7}", "click", function(sym, e) {
         window.open("mathQ2-2.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_8}", "click", function(sym, e) {
         window.open("mathQ2-3.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_9}", "click", function(sym, e) {
         window.open("mathQ2-4.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_10}", "click", function(sym, e) {
         window.open("mathQ2-5.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.$("#Stage").css({ // Set the transform origin so we always scale to the top left corner of the stage
         "transform-origin":"0 0",
         "-ms-transform-origin":"0 0",
         "-webkit-transform-origin":"0 0",
         "-moz-transform-origin":"0 0",
         "-o-transform-origin":"0 0"
         });
         
         function scaleStage() {
         	var stage = sym.$("Stage");
         	var parent = sym.$("Stage").parent(); // Set a reusable variable to reference the parent container of the stage
         	var parentWidth = stage.parent().width(); // Get the parent of the stage width
         	var parentHeight = $(window).height(); // Get the browser window height
         	var stageWidth = stage.width(); // Get the stage width
         	var stageHeight = stage.height(); // Get the stage height
         	var desiredWidth = Math.round(parentWidth * 1); // Set the new width of the stage as it scales
         	var desiredHeight = Math.round(parentHeight * 1); // Set the new height of the stage as it scales
         	var rescaleWidth = (desiredWidth / stageWidth); // Set a variable to calculate the new width of the stage as it scales
         	var rescaleHeight = (desiredHeight / stageHeight); // Set a variable to calculate the new height of the stage as it scales
         	var rescale = rescaleWidth;
         
         	if (stageHeight * rescale > desiredHeight) // Do not scale larger than the height of the browser window
         	{rescale = rescaleHeight;}
         	//set the value of a Symbol variable
         	sym.setVariable("rescale", rescale);
         
         // Rescale the stage!
         	 stage.css('transform', 'scale(' + rescale + ')'); 
             stage.css(  '-o-transform', 'scale(' + rescale + ')');
         	 stage.css('-ms-transform', 'scale(' + rescale + ')');
             stage.css('-webkit-transform', 'scale(' + rescale + ')');
         	 stage.css('-moz-transform', 'scale(' + rescale + ')');
             stage.css('-o-transform', 'scale(' + rescale + ')');
             parent.height(stageHeight * rescale); // Reset the height of the parent container so the objects below it will reflow as the height adjusts
         }
         
         // Make it happen when the browser resizes
         $(window).on('resize', function(){ 
         	 scaleStage(); 
         
         });
         
         // Make it happen when the page first loads
         $(document).ready(function(){
             scaleStage();
         
         });
         
         
         
         st1 = localStorage.MATHQst1;
         st1 = parseInt(st1);
         
         st2 = localStorage.MATHQst2;
         st2 = parseInt(st2);
         
         st3 = localStorage.MATHQst3;
         st3 = parseInt(st3);
         
         st4 = localStorage.MATHQst4;
         st4 = parseInt(st4);
         
         st5 = localStorage.MATHQst5;
         st5 = parseInt(st5);
         
         st6 = localStorage.MATHQst6;
         st6 = parseInt(st6);
         
         st7 = localStorage.MATHQst7;
         st7 = parseInt(st7);
         
         st8 = localStorage.MATHQst8;
         st8 = parseInt(st8);
         
         st9 = localStorage.MATHQst9;
         st9 = parseInt(st9);
         
         
         sym.$("tu1").hide();
         sym.$("tu2").hide();
         sym.$("tu3").hide();
         sym.$("tu4").hide();
         sym.$("tu5").hide();
         sym.$("tu6").hide();
         sym.$("tu7").hide();
         sym.$("tu8").hide();
         sym.$("tu9").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text}", "click", function(sym, e) {
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("../../../index.html", "_self");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_1}", "click", function(sym, e) {
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("mathQ1-1.html", "_self");
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         
         if(st1==1){
         sym.$("tu1").show();
         sym.$("stage2").hide();
         }
         if(st2==1){
         sym.$("tu2").show();
         sym.$("stage3").hide();
         }
         if(st3==1){
         sym.$("tu3").show();
         sym.$("stage4").hide();
         }
         if(st4==1){
         sym.$("tu4").show();
         sym.$("stage5").hide();
         }
         if(st5==1){
         sym.$("tu5").show();
         sym.$("stage6").hide();
         }
         if(st6==1){
         sym.$("tu6").show();
         sym.$("stage7").hide();
         }
         if(st7==1){
         sym.$("tu7").show();
         sym.$("stage8").hide();
         }
         if(st8==1){
         sym.$("tu8").show();
         sym.$("stage9").hide();
         }
         if(st9==1){
         sym.$("tu9").show();
         sym.$("stage10").hide();
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'Symbol_4'
   (function(symbolName) {   
   
   })("Symbol_4");
   //Edge symbol end:'Symbol_4'

   //=========================================================
   
   //Edge symbol: 'Symbol_5'
   (function(symbolName) {   
   
   })("Symbol_5");
   //Edge symbol end:'Symbol_5'

   //=========================================================
   
   //Edge symbol: 'Symbol_6'
   (function(symbolName) {   
   
   })("Symbol_6");
   //Edge symbol end:'Symbol_6'

   //=========================================================
   
   //Edge symbol: 'Symbol_7'
   (function(symbolName) {   
   
   })("Symbol_7");
   //Edge symbol end:'Symbol_7'

   //=========================================================
   
   //Edge symbol: 'Symbol_8'
   (function(symbolName) {   
   
   })("Symbol_8");
   //Edge symbol end:'Symbol_8'

   //=========================================================
   
   //Edge symbol: 'Symbol_9'
   (function(symbolName) {   
   
   })("Symbol_9");
   //Edge symbol end:'Symbol_9'

   //=========================================================
   
   //Edge symbol: 'Symbol_10'
   (function(symbolName) {   
   
   })("Symbol_10");
   //Edge symbol end:'Symbol_10'

})(jQuery, AdobeEdge, "EDGE-272118857");