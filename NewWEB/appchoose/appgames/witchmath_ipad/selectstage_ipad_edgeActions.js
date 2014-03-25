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

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stm1}", "click", function(sym, e) {
         sym.$("start").hide();
         sym.$("rec").hide();
         sym.$("stm1").hide();
         sym.$("stm2").show();
         sym.$("return").show();
         sym.$("select").hide();
         sym.$("easy").hide();
         sym.$("normal").hide();
         sym.$("hard").hide();
         sym.$("Text").hide();
         sym.$("gmtop").hide();
         sym.$("ghost_standing").hide();
         sym.$("ghost_attack").hide();
         sym.$("Ellipse5").hide();
         
         //mySound4.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hard}", "click", function(sym, e) {
         ga('send', 'event', 'wmsh_start_button', 'wmsh_start_click', 'wmsh');
         window.open("hard_witchmath_ipad.html", "_self");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_easy}", "click", function(sym, e) {
         ga('send', 'event', 'wmse_start_button', 'wmse_start_click', 'wmse');
         window.open("easy_witchmath_ipad.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_normal}", "click", function(sym, e) {
         
         ga('send', 'event', 'wmsn_start_button', 'wmsn_start_click', 'wmsn');
         window.open("normal_witchmath_ipad.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gmtop}", "click", function(sym, e) {
         
         ga('send', 'event', 'wmss_start_button', 'wmss_start_click', 'wmss');
         //mySound4.play();
         window.open("../../../index.html", "_self");//topのリンク先に変更する。
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_return}", "click", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("stm2").hide();
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("return").hide();
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("start").show();
         
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("stm1").show();// sym.$("name") は Edge Animate のエレメント名を、
         //jQuery で使用できる DOM エレメントに変えます。
         sym.$("select").show();
         sym.$("easy").show();
         sym.$("normal").show();
         sym.$("hard").show();
         sym.$("rec").show();
         sym.$("Text").show();
         sym.$("gmtop").show();
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("gmtop").show();
         //mySound4.play();
         sym.$("ghost_attack").show();
         sym.$("ghost_standing").show();
         sym.$("Ellipse5").show();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'stm2'
   (function(symbolName) {   
   
   })("stm2");
   //Edge symbol end:'stm2'

   //=========================================================
   
   //Edge symbol: 'return'
   (function(symbolName) {   
   
   })("return");
   //Edge symbol end:'return'

   //=========================================================
   
   //Edge symbol: 'gmtop'
   (function(symbolName) {   
   
   })("gmtop");
   //Edge symbol end:'gmtop'

})(jQuery, AdobeEdge, "EDGE-5400110");
