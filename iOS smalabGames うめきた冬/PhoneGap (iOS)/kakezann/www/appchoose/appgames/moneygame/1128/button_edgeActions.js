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
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'button'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_cover2}", "mouseout", function(sym, e) {
         // マウスがオブジェクトから離れたときに実行されるコードを挿入します
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("cover2").hide();
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("cover1").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cover2}", "mousedown", function(sym, e) {
         // マウスボタンが押されたときに実行されるコードを挿入します
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("modoru2").show();
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("cover1").hide();
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("cover2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_modoru2}", "mouseup", function(sym, e) {
         // マウスボタンが離されたときに実行されるコードを挿入します
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("modoru2").hide();
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("cover1").hide();
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("cover2").show();
         
         
         //mySound4.play();
         window.open("http://smalab.sakura.ne.jp/NEW_SmalabSever/index.html", "_self");//topのリンク先に変更する。

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_modoru2}", "mouseover", function(sym, e) {
         // マウスがオブジェクトに重なったときに実行されるコードを挿入します
         sym.$("cover1").hide();
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("cover2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_modoru2}", "mousemove", function(sym, e) {
         // マウスがオブジェクトの上に移動したときに実行されるコードを挿入します
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         /*sym.$("cover1").hide();
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("cover2").hide();*/
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cover1}", "mouseover", function(sym, e) {
         // マウスがオブジェクトに重なったときに実行されるコードを挿入します
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("cover2").show();
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("cover1").hide();
         

      });
      //Edge binding end

   })("button");
   //Edge symbol end:'button'

})(jQuery, AdobeEdge, "EDGE-280890736");