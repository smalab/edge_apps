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
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "touchend", function(sym, e) {
         // ユーザーがオブジェクトに触れるのを止めたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         // イベント状態をTextEventInfoテキストに反映
         
         // touchstartで記録したprePageXをもとに移動量を計算
         var goX = e.originalEvent.changedTouches[0].pageX - prePageX;
         // 移動量を下部テキスト(TextMoveNum)に表示
         
         // 移動量の正負に応じて再生/逆再生
         if( goX > 0 ){
             // 左から右に
             sym.play(1000);
         } else if( goX < 0 ){
             // 右から左に
             sym.play(0);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         // こうすることでtouchendが同じ座標以外でも反応する。
         e.preventDefault();
         // イベント状態をテキスト(TextEventInfo)に反映
         
         // タッチ位置(pageX)を記憶
         prePageX = e.originalEvent.changedTouches[0].pageX;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'preview'
   (function(symbolName) {   
   
   })("preview");
   //Edge symbol end:'preview'

   //=========================================================
   
   //Edge symbol: 'mmp'
   (function(symbolName) {   
   
   })("mmp");
   //Edge symbol end:'mmp'

})(jQuery, AdobeEdge, "EDGE-259759409");