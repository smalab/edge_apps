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
         SYK=localStorage.BLINKITrank;
         SYK = parseInt(SYK);
         
         switch(SYK){
         
         case 1: sym.$("ribon01").hide();
                 sym.$("ribon02").hide();
                 sym.$("syunkantxt").html("たいへんよくできました！");
                 break;
         case 2: sym.$("ribon01").hide();
                 sym.$("syunkantxt").html("よくできました！");
                 break;
         case 3: sym.$("syunkantxt").html("まちがいやスタートをおすかいすうをへらしてみよう！");
                 break;
         
         default :sym.$("ribon01").hide();
                  sym.$("ribon02").hide();
                  sym.$("ribon03").hide();
                  break;
         
         }
         
         
         kake1=localStorage.KAKEscore1
         kake2=localStorage.KAKEscore2
         kake3=localStorage.KAKEscore3
         kake4=localStorage.KAKEscore4
         kake5=localStorage.KAKEscore5
         
         sym.$("kakezann1").html(kake1);
         sym.$("kakezann2").html(kake2);
         sym.$("kakezann3").html(kake3);
         sym.$("kakezann4").html(kake4);
         sym.$("kakezann5").html(kake5);
         
         
         sink101=localStorage.SINKEI10tscore
         sink102=localStorage.SINKEI10hscore
         sink103=localStorage.SINKEI10kscore
         sink201=localStorage.SINKEItscore
         sink202=localStorage.SINKEIhscore
         sink203=localStorage.SINKEIkscore
         
         sym.$("SINK101").html(sink101);
         sym.$("SINK102").html(sink102);
         sym.$("SINK103").html(sink103);
         sym.$("SINK201").html(sink201);
         sym.$("SINK202").html(sink202);
         sym.$("SINK203").html(sink203);
         
         wm1=localStorage.WMscore
         sym.$("WM1").html(wm1);
         
         ls1=localStorage.LStime
         sym.$("LS1").html(ls1);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ALLclear}", "click", function(sym, e) {
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("result.html", "_self");
         // マウスクリックのコードをここに挿入します
         localStorage.clear();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text3}", "click", function(sym, e) {
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("index.html", "_self");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-21597545");