/***********************
* Adobe Edge Animate コンポジションアクション
*
* このファイルを編集する際には注意が必要です。必ず関数シグニチャと
* 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
* 操作可能な状態にしておいてください。 
*
***********************/

var button = new Howl({
  urls: ['audio/butoon.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.3,
});





(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_muzu}", "touchstart", function(sym, e) {
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("kakezann5.html", "_self");
         button.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hutu}", "touchstart", function(sym, e) {
         window.open("kakezann4.html", "_self");
         button.play();

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
         
         
         button.onload();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("../../../index.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("../../../index.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_muzu}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("kakezann5.html", "_self");
         button.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hutu}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         window.open("kakezann4.html", "_self");
         button.play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'yasa'
   (function(symbolName) {   
   
   })("yasa");
   //Edge symbol end:'yasa'

   //=========================================================
   
   //Edge symbol: 'hutu'
   (function(symbolName) {   
   
   })("hutu");
   //Edge symbol end:'hutu'

   //=========================================================
   
   //Edge symbol: 'muzu'
   (function(symbolName) {   
   
   })("muzu");
   //Edge symbol end:'muzu'

})(jQuery, AdobeEdge, "EDGE-94978823");