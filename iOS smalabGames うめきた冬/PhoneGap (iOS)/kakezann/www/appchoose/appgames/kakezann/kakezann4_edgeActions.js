/***********************
* Adobe Edge Animate コンポジションアクション
*
* このファイルを編集する際には注意が必要です。必ず関数シグニチャと
* 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
* 操作可能な状態にしておいてください。 
*
***********************/


var mySound = new Howl({
  urls: ['audio/bgm.mp3'],
  autoplay: false,
  loop: true,
  volume: 0.5,
});


var tds = new Howl({
  urls: ['audio/toranpudasu.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.5,
});


var tdh = new Howl({
  urls: ['audio/toranpuhiku.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.5,
});


var coinup = new Howl({
  urls: ['audio/coinup.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.5,
});


var coindown = new Howl({
  urls: ['audio/coindown.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.5,
});


var kakeok = new Howl({
  urls: ['audio/kakekinnok.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.5,
});

var button = new Howl({
  urls: ['audio/butoon.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.3,
});

var kyarasen = new Howl({
  urls: ['audio/bgm2.mp3'],
  autoplay: false,
  loop: true,
  volume: 0.5,
});

var rennsyuuend; 
var rennsyuustage; 


(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      
      
      
      
      
      
      //以下card９coverまで選んだカードの積の計算、選んだカードの移動
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      //以上card１coverまで選んだカードの積の計算、選んだカードの移動
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym, e) {
      
      
         sym.$("cover").show();
      
         //勝ち負けの判定および勝ち負けの表示
         if(seki>CPseki){
      
         sym.$("kati").show();
      
         }else{
      
         if(seki==CPseki){
      
         sym.$("hikiwake").show();
      
         }else{
      
         sym.$("make").show();
      
         }
         }
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         
         sym.$("cover").hide();
         
         //勝ち負けの表示を閉じ
         if(seki>CPseki){
         
         sym.$("kati").hide();
         sym.$("Text2").html("おめでとう！！");
         
         
         }else{
         
         if(seki==CPseki){
         
         sym.$("hikiwake").hide();
         sym.$("Text2").html("ひきわけ〜。");
         
         }else{
         
         sym.$("make").hide();
         sym.$("Text2").html("まだまだ〜。");
         
         }
         }
         
         
         
         
      tdh.play();
      
      	//中央の手札カードを移動
         switch(seki/r){
      
         case 1: sym.$("card1").animate({left: "+=180px"})
                                                           break;
      
         case 2: sym.$("card2").animate({left: "+=200px"})
                                                           break;
      
         case 3: sym.$("card3").animate({left: "+=220px"})
                                                           break;
      
         case 4: sym.$("card4").animate({left: "+=240px"})
                                                           break;
      
         case 5:  sym.$("card5").animate({left: "+=260px"})
                                                           break;
      
         case 6:  sym.$("card6").animate({left: "+=280px"})
                                                           break; 
      
         case 7: sym.$("card7").animate({left: "+=300px"})
                                                           break;
      
         case 8: sym.$("card8").animate({left: "+=320px"})
                                                           break;
      
         case 9: sym.$("card9").animate({left: "+=340px"})
                                                           break;
      
       }
      
         switch(CPseki/j){
      
         case 1: sym.$("CPcard1").animate({left: "-=180px"})
                                                             break;
      
         case 2: sym.$("CPcard2").animate({left: "-=200px"})
                                                             break;
      
         case 3: sym.$("CPcard3").animate({left: "-=220px"})
                                                             break;
      
         case 4: sym.$("CPcard4").animate({left: "-=240px"})
                                                             break;
      
         case 5: sym.$("CPcard5").animate({left: "-=260px"})
                                                             break;
      
         case 6: sym.$("CPcard6").animate({left: "-=280px"})
                                                             break;
      
         case 7: sym.$("CPcard7").animate({left: "-=300px"})
                                                             break;
      
         case 8: sym.$("CPcard8").animate({left: "-=320px"})
                                                             break;
      
         case 9: sym.$("CPcard9").animate({left: "-=340px"})
                                                             break;
      	}
      
      	//勝者にポイントを与える
      
      
      
      	var kake = sym.getVariable("kakekinn");
      
         tensuu=baisuu*1
         CPtensuu=CPbaisuu*1
      
         var counter = sym.getVariable("slidecount");
         var CPcounter = sym.getVariable("CPslidecount");
      
         if(seki>CPseki){
      
         counter = counter + tensuu;
      
         }else{
      
         if(seki<CPseki){
      
         CPcounter = CPcounter + CPtensuu;
      
         }
         }
      
      
      
      
      kakeok.play();
      
      
      
         sym.setVariable("slidecount", counter);
         sym.$("pointo").html(counter);
         sym.setVariable("CPslidecount", CPcounter);
         sym.$("CPpointo").html(CPcounter);
      
         var turn = sym.getVariable("turncount");
      
      sym.$("centeraka").show();
      sym.$("centerdodai").show();
      sym.$("center2aka").show();
      sym.$("center2dodai").show();
      sym.$("hato1").hide();
      sym.$("hato2").hide();
      sym.$("hato3").hide();
      sym.$("hato4").hide();
      sym.$("hato5").hide();
      sym.$("hato6").hide();
      sym.$("hato7").hide();
      sym.$("hato8").hide();
      sym.$("hato9").hide();
      sym.$("kuro1").hide();
      sym.$("kuro2").hide();
      sym.$("kuro3").hide();
      sym.$("kuro4").hide();
      sym.$("kuro5").hide();
      sym.$("kuro6").hide();
      sym.$("kuro7").hide();
      sym.$("kuro8").hide();
      sym.$("kuro9").hide();
      
      

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
         
         // コンポジションを完全にロードした後に実行されるコードを挿入します
         sym.setVariable("slidecount", 0);
         
         sym.setVariable("CPslidecount", 0);
         
         sym.setVariable("turncount", 1);
         
         sym.setVariable("kakekinn", 1);
         
         mysound.onload();
         tds.onload();
         tdh.onload();
         coinup.onload();
         coindown.onload();
         kakeok.onload();
         button.onload();
         kyarasen.onload();
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
         sym.stop();
         
         //9ターン目ならゲーム終了
         var turn = sym.getVariable("turncount");
         
         if(turn==9){
         
         sym.play();
         
         sym.$("endtext").fadeIn(2000);
         sym.$("endtextCP").fadeIn(2000);
         sym.$("kyara").fadeIn(2000);
         sym.$("kyaraCP").fadeIn(2000);
         sym.$("tennsuu").fadeIn(2000);
         sym.$("CPtennsuu").fadeIn(2000);
         
         sym.$("end").fadeIn(2000);
         
         
         switch(kyaraY){
         
         case 1:var kyY = sym.getSymbol("kyara");
                kyY.play(1000);
                break;
         
         case 2:var kyY = sym.getSymbol("kyara");
                kyY.play(2000);
                break;
         
         case 3:var kyY = sym.getSymbol("kyara");
                kyY.play(3000);
                break;
         
         case 4:var kyY = sym.getSymbol("kyara");
                break;
         
         case 5:var kyY = sym.getSymbol("kyara");
                kyY.play(5000);
                break;
         
         }
         
        switch(CPkyara){
        
         case 0:var kyC = sym.getSymbol("kyaraCP");
                kyC.play(0);
                break;
        
         case 1:var kyC = sym.getSymbol("kyaraCP");
                kyC.play(1000);
                break;
        
         case 2:var kyC = sym.getSymbol("kyaraCP");
                kyC.play(2000);
                break;
        
         case 3:var kyC = sym.getSymbol("kyaraCP");
                kyC.play(3000);
                break;
        
        
         } 
        
         }else{
         sym.play(0);
        
         sym.$("cardscover3").hide();
         //修正必要
         sym.$("drowbutton").show();
        
         sym.$("sikiCP1").html("?");
         sym.$("siki2").html("?");
         sym.$("sikiCP3").html("?");
         sym.$("siki3").html("?");
         sym.$("siki1").html("?");
         sym.$("sikiCP2").html("?");
        
        
         sym.$("sikiCP1").css("color","#808080");
         sym.$("siki2").css("color","#808080");
         sym.$("sikiCP3").css("color","#808080");
         sym.$("siki3").css("color","#808080");
         sym.$("siki1").css("color","#808080");
         sym.$("sikiCP2").css("color","#808080");
        
        
         sym.$("late").html("?");
         sym.$("CPlate").html("?");
        
        
        
      	//ターン数の計算
         var turn = sym.getVariable("turncount");
      
         turn = turn + 1;
      
         sym.setVariable("turncount", turn);
      
      
      	CPkakekinn=1
      
         sym.$("kakekinnCPtxt").html("× "+CPkakekinn);
      
      sym.$("Text2").html(turn+"ターン目");
      
      sym.$("blue1").show();
      
      }
       sym.$("cardscover").show();
      

      });
      //Edge binding end
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12250, function(sym, e) {
          
          sym.stop();
          
            var counter = sym.getVariable("slidecount");
            var CPcounter = sym.getVariable("CPslidecount");
          
         var nam = 0;   
         var nam2 = 0;  
         
         
         setInterval(function(){
         if(nam <= counter){
         	sym.$("tennsuu").html(nam);
         	nam++;
         	coinup.play();
         }
         if(nam2 <= CPcounter){
         	sym.$("CPtennsuu").html(nam2);
         	nam2++;
         	coinup.play();
         }
         
         if(nam>nam2){
         tuyoi=nam;
         }else{
         tuyoi=nam2;
         }
         
         gameend();
         
         },80);
         
         
         function gameend(){
         
         if(tuyoi==counter||tuyoi==CPcounter){
         
         		if(counter>=CPcounter){
         			if(counter==CPcounter){
         				//引き分け
         				sym.play("end_lose");
         				}else{
         				//勝ち
         				// 指定した位置からタイムラインを再生 (ミリ秒またはラベル)
         				sym.play("end_win");
         				}
         			}else{
         			//負け
         			// 指定した位置からタイムラインを再生 (ミリ秒またはラベル)
         			sym.play("end_lose");
         			}
         
         			}
         
         }
         localStorage.KAKEscore4 = counter;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gamestartbutton}", "touchstart", function(sym, e) {
         button.play();
         kyarasen.play();
         
         sym.$("gamestartbutton").hide();
         sym.$("gamestartgamenn").hide();
         
         
         
            sym.$("card1").animate({top: "+=140px"})
         
            sym.$("card2").animate({top: "+=140px"})
         
            sym.$("card3").animate({top: "+=140px"})
         
            sym.$("card4").animate({top: "+=140px"})
         
            sym.$("card5").animate({top: "+=140px"})
         
            sym.$("card6").animate({top: "+=140px"})
         
            sym.$("card7").animate({top: "+=140px"})
         
            sym.$("card8").animate({top: "+=140px"})
         
            sym.$("card9").animate({top: "+=140px"})
         
         
         sym.$("smaoY").hide();
         sym.$("penpenY").hide();
         sym.$("kaminariY").hide();
         sym.$("bonnouY").hide();
         
         kyarastock=new Array(0,0,0,0,0)	
         
         	sym.$("smakobox").show();
         
                  sym.$("smaobox").hide();
                  sym.$("penpenbox").hide();
                  sym.$("kaminaribox").hide();
                  sym.$("bonnoubox").hide();
         
                  sym.$("smakoY").show();
         
                  sym.$("smaoY").hide();
                  sym.$("penpenY").hide();
                  sym.$("kaminariY").hide();
                  sym.$("bonnouY").hide();
         
                  button.play();
         
                  kyaraY=1;

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_rennsyuubutton}", "touchstart", function(sym, e) {
         
         
         rennsyuustage=sym.createChildSymbol("rennsyuustage_1", "Stage");
         
         
         button.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_startbutton}", "touchstart", function(sym, e) {
         button.play();
         
         var turn = sym.getVariable("turncount");
         
         mySound.play();
         
         
         sym.$("Text2").html("ゲームスタート！");
         
         
         $(function(){
         setTimeout(function(){
         sym.$("Text2").fadeIn(1000);
         sym.$("hukidasi").fadeIn(1000);
         },500);
         });
         
         
         sym.$("drowbutton").show();
         sym.$("startbutton").hide();
         sym.$("startgamen").hide();
         sym.$("rennsyuubutton").hide();
         
         //CP側の使用された手札カードのデータを記録する
         num1=new Array(0,0,0,0,0,0,0,0,0)
         num2=new Array(0,0,0,0,0,0,0,0,0,0)
         
         
         sym.$("hato1").hide();
         sym.$("hato2").hide();
         sym.$("hato3").hide();
         sym.$("hato4").hide();
         sym.$("hato5").hide();
         sym.$("hato6").hide();
         sym.$("hato7").hide();
         sym.$("hato8").hide();
         sym.$("hato9").hide();
         sym.$("kuro1").hide();
         sym.$("kuro2").hide();
         sym.$("kuro3").hide();
         sym.$("kuro4").hide();
         sym.$("kuro5").hide();
         sym.$("kuro6").hide();
         sym.$("kuro7").hide();
         sym.$("kuro8").hide();
         sym.$("kuro9").hide();
         
         
         seki=0;
         
         sym.$("cardscover3").hide();
         
         sym.$("setumei").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cardscover}", "touchstart", function(sym, e) {
         sym.$("Text2").html("カードを引いてね。");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cardscover2}", "touchstart", function(sym, e) {
         sym.$("Text2").html("カードを選んでね！");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kakeOKbutton}", "touchstart", function(sym, e) {
             
             if(num2[0]==0){
            sym.$("card1").animate({top: "-=140px"})
            }
            if(num2[1]==0){
            sym.$("card2").animate({top: "-=140px"})
            }
            if(num2[2]==0){
            sym.$("card3").animate({top: "-=140px"})
            }
            if(num2[3]==0){
            sym.$("card4").animate({top: "-=140px"})
            }
            if(num2[4]==0){
            sym.$("card5").animate({top: "-=140px"})
            }
            if(num2[5]==0){
            sym.$("card6").animate({top: "-=140px"})
            }
            if(num2[6]==0){
            sym.$("card7").animate({top: "-=140px"})
            }
            if(num2[7]==0){
            sym.$("card8").animate({top: "-=140px"})
            }
            if(num2[8]==0){
            sym.$("card9").animate({top: "-=140px"})
            }
            
         sym.$("cardscover2").hide();
         sym.$("kakeOKbutton").hide();
         sym.$("upbutton").hide();
         sym.$("downbutton").hide();
         
         sym.$("blue1").hide();
         
         
         CPkake=Math.floor(Math.random()*5);
         
         CPkakekinn=CPkake+1
         
         sym.$("kakekinnCPtxt").html("× "+CPkakekinn);
         sym.$("Text2").html("カードを選んでね！");
         
         CPgetcoin=CPbaisuu*CPkakekinn;
         
         
         sym.$("CPlate").html(CPgetcoin);	
         
         
         
         
            var kake = sym.getVariable("kakekinn");
            var counter = sym.getVariable("slidecount");
            var CPcounter = sym.getVariable("CPslidecount");
         
            counter = counter - kake;
         
            CPcounter = CPcounter - CPkakekinn;
         
            sym.setVariable("slidecount", counter);
            sym.$("pointo").html(counter);
            sym.setVariable("CPslidecount", CPcounter);
            sym.$("CPpointo").html(CPcounter);
         
         
         
         kakeok.play();
         
         seki=0;
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_upbutton}", "touchstart", function(sym, e) {
         var kake = sym.getVariable("kakekinn");
         
         	kake = kake + 1;
         	if(kake>5){
         		kake=1;
         	}
         
         sym.setVariable("kakekinn", kake);
         sym.$("kakekinntxt").html("× "+ kake);
         
         
         if(kake==1){
         
         
         coindown.play();
         
         }else{
         
         
         coinup.play();
         
         
         }
         
         
           getcoin=baisuu*kake;
         
         
         
         	sym.$("late").html(getcoin);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_downbutton}", "touchstart", function(sym, e) {
         var kake = sym.getVariable("kakekinn");
         
         	kake = kake - 1;
         	if(kake<1){
         		kake=5;
         	}
         
         sym.setVariable("kakekinn", kake);
         sym.$("kakekinntxt").html("× "+ kake);
         
         if(kake==5){
         
         coinup.play();
         
         }else{
         
         coindown.play();
         }
         
         getcoin=baisuu*kake;
         
         
         sym.$("late").html(getcoin);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_okbutton}", "touchstart", function(sym, e) {
           sym.$("hintocard").show();
           
            sym.$("siki3").css("color","#ff7300");   
            //CP側の未使用の手札カードを選ぶまで処理を繰り返す
            sym.$("siki3").html(seki);
            //自分が選んだ手札のカードを中央に動かす
            switch(seki/r){
             case 1: sym.$("card1").animate({top: "-=178px"})
                     sym.$("card1").animate({left: "+=510px"}) 
                     num2[0]=1                                         
                                                               break;
           
             case 2: sym.$("card2").animate({top: "-=178px"})
                     sym.$("card2").animate({left: "+=443px"})
                     num2[1]=1                                           
                                                               break;
           
             case 3: sym.$("card3").animate({top: "-=178px"})
                     sym.$("card3").animate({left: "+=378px"})
                     num2[2]=1                                          
                                                               break;
           
             case 4: sym.$("card4").animate({top: "-=178px"})
                     sym.$("card4").animate({left: "+=313px"})
                     num2[3]=1                                          
                                                               break;
           
             case 5: sym.$("card5").animate({top: "-=178px"})
                     sym.$("card5").animate({left: "+=248px"})
                     num2[4]=1                                          
                                                               break;
           
             case 6: sym.$("card6").animate({top: "-=178px"})
                     sym.$("card6").animate({left: "+=183px"})
                     num2[5]=1                                          
                                                               break;
           
             case 7: sym.$("card7").animate({top: "-=178px"})
                     sym.$("card7").animate({left: "+=115px"})
                     num2[6]=1                                          
                                                               break;
           
             case 8: sym.$("card8").animate({top: "-=178px"})
                     sym.$("card8").animate({left: "+=50px"})
                     num2[7]=1                                          
                                                               break;
           
             case 9: sym.$("card9").animate({top: "-=178px"})
                     sym.$("card9").animate({left: "-=16px"})
                     num2[8]=1                                          
                                                               break;
         }
         
            //CP側の選ばれた手札のカードを中央に動かす
            switch(CPseki/j){
         
            case 1:  sym.$("CPcard1").animate({top: "+=227px"})
                     sym.$("CPcard1").animate({left: "-=3px"})
                                                                 break;
         
            case 2:  sym.$("CPcard2").animate({top: "+=227px"})
                     sym.$("CPcard2").animate({left: "-=68px"})
                                                                 break;
         
            case 3:  sym.$("CPcard3").animate({top: "+=227px"})
                     sym.$("CPcard3").animate({left: "-=128px"})
                                                                 break;
         
            case 4:  sym.$("CPcard4aka").hide();
                     sym.$("CPcard4").animate({top: "+=227px"})
                     sym.$("CPcard4").animate({left: "-=191px"})
                                                                 break;
         
            case 5:  sym.$("CPcard5aka").hide();
                     sym.$("CPcard5").animate({top: "+=227px"})
                     sym.$("CPcard5").animate({left: "-=246px"})
                                                                 break;
         
            case 6:  sym.$("CPcard6").animate({top: "+=227px"})
                     sym.$("CPcard6").animate({left: "-=312px"})
                                                                 break;
         
            case 7:  sym.$("CPcard7").animate({top: "+=227px"})
                     sym.$("CPcard7").animate({left: "-=377px"})
                                                                 break;
         
            case 8:  sym.$("CPcard8").animate({top: "+=227px"})
                     sym.$("CPcard8").animate({left: "-=442px"})
                                                                 break;
         
            case 9: sym.$("CPcard9").animate({top: "+=227px"})
                    sym.$("CPcard9").animate({left: "-=508px"})
                                                                 break;
            }
         
           // エレメントを表示します。
           //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
           //  使用できる DOM エレメントに変えます)。
         
         sym.$("Text2").html("いざ、勝負！！");
         
         
         
         
         tdh.play();
         
         
         
             if(num2[0]==0){
            sym.$("card1").animate({top: "+=140px"})
            }
            if(num2[1]==0){
            sym.$("card2").animate({top: "+=140px"})
            }
            if(num2[2]==0){
            sym.$("card3").animate({top: "+=140px"})
            }
            if(num2[3]==0){
            sym.$("card4").animate({top: "+=140px"})
            }
            if(num2[4]==0){
            sym.$("card5").animate({top: "+=140px"})
            }
            if(num2[5]==0){
            sym.$("card6").animate({top: "+=140px"})
            }
            if(num2[6]==0){
            sym.$("card7").animate({top: "+=140px"})
            }
            if(num2[7]==0){
            sym.$("card8").animate({top: "+=140px"})
            }
            if(num2[8]==0){
            sym.$("card9").animate({top: "+=140px"})
            }
         
         
         
         sym.$("blue3").hide();
         
         sym.$("hinntobutton").hide();
         sym.$("cardscover3").show();
         
            //アニメーションの開始
         sym.play(0);
         
           switch(CP1){
         
         case 1: sym.$("hintocard1").hide();
                                       break;
         
         case 2: sym.$("hintocard2").hide();
                                       break;
         
         case 3: sym.$("hintocard3").hide();
                                       break; 
         
         case 4: sym.$("hintocard4").hide();
                                       break;                                                           
         
         case 5: sym.$("hintocard5").hide();
                                       break;
         
         case 6: sym.$("hintocard6").hide();
                                       break;
         
         case 7: sym.$("hintocard7").hide();
                                       break;
         
         case 8: sym.$("hintocard8").hide();
                                       break; 
         
         case 9: sym.$("hintocard9").hide();
                                       break;                                                                                         
         }
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card9cover}", "touchstart", function(sym, e) {
         
         switch(seki/r){
         
         case 0: break;
         
         case 1: sym.$("card1").animate({top: "+=40px"})
                 sym.$("card1cover").show();
                 break;
         
         case 2: sym.$("card2").animate({top: "+=40px"})
                 sym.$("card2cover").show();
                 break;
         
         case 3: sym.$("card3").animate({top: "+=40px"})
                 sym.$("card3cover").show();
                 break;        
         
         case 4: sym.$("card4").animate({top: "+=40px"})
                 sym.$("card4cover").show();
                 break;        
         
         case 5: sym.$("card5").animate({top: "+=40px"})
                 sym.$("card5cover").show();
                 break;        
         
         case 6: sym.$("card6").animate({top: "+=40px"})
                 sym.$("card6cover").show();
                 break;        
         
         case 7: sym.$("card7").animate({top: "+=40px"})
                 sym.$("card7cover").show();
                 break;
         
         case 8: sym.$("card8").animate({top: "+=40px"})
                 sym.$("card8cover").show();
                 break;
         
         
         }
         
         seki=r*9
         
         sym.$("siki2").html(9);
         
         
         sym.$("Systemplus").html(seki);
         
         sym.$("card9").animate({top: "-=40px"})
         sym.$("card9cover").hide();
         
         
         sym.$("okbutton").show();
         
         
         
         tds.play();
         
         
            sym.$("siki2").css("color","#ff7300");   

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card8cover}", "touchstart", function(sym, e) {
         switch(seki/r){
         
         case 0: break;
         
         case 1: sym.$("card1").animate({top: "+=40px"})
                 sym.$("card1cover").show();
                 break;
         
         case 2: sym.$("card2").animate({top: "+=40px"})
                 sym.$("card2cover").show();
                 break;
         
         case 3: sym.$("card3").animate({top: "+=40px"})
                 sym.$("card3cover").show();
                 break;        
         
         case 4: sym.$("card4").animate({top: "+=40px"})
                 sym.$("card4cover").show();
                 break;        
         
         case 5: sym.$("card5").animate({top: "+=40px"})
                 sym.$("card5cover").show();
                 break;        
         
         case 6: sym.$("card6").animate({top: "+=40px"})
                 sym.$("card6cover").show();
                 break;        
         
         case 7: sym.$("card7").animate({top: "+=40px"})
                 sym.$("card7cover").show();
                 break;
         
         case 9: sym.$("card9").animate({top: "+=40px"})
                 sym.$("card9cover").show();
                 break;
         
         
         }
         
         seki=r*8
         
         sym.$("siki2").html(8);
         
         
         sym.$("Systemplus").html(seki);
         
         sym.$("card8").animate({top: "-=40px"})
         sym.$("card8cover").hide();
         
         
         sym.$("okbutton").show();
         
         
         
         tds.play();
         
         
            sym.$("siki2").css("color","#ff7300");   

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card7cover}", "touchstart", function(sym, e) {
         switch(seki/r){
         
         case 0: break;
         
         case 1: sym.$("card1").animate({top: "+=40px"})
                 sym.$("card1cover").show();
                 break;
         
         case 2: sym.$("card2").animate({top: "+=40px"})
                 sym.$("card2cover").show();
                 break;
         
         case 3: sym.$("card3").animate({top: "+=40px"})
                 sym.$("card3cover").show();
                 break;        
         
         case 4: sym.$("card4").animate({top: "+=40px"})
                 sym.$("card4cover").show();
                 break;        
         
         case 5: sym.$("card5").animate({top: "+=40px"})
                 sym.$("card5cover").show();
                 break;        
         
         case 6: sym.$("card6").animate({top: "+=40px"})
                 sym.$("card6cover").show();
                 break;        
         
         case 8: sym.$("card8").animate({top: "+=40px"})
                 sym.$("card8cover").show();
                 break;
         
         case 9: sym.$("card9").animate({top: "+=40px"})
                 sym.$("card9cover").show();
                 break;
         
         
         }
         
         seki=r*7
         
         sym.$("siki2").html(7);
         
         
         sym.$("Systemplus").html(seki);
         
         sym.$("card7").animate({top: "-=40px"})
         sym.$("card7cover").hide();
         
         
         sym.$("okbutton").show();
         
         
         
         tds.play();
         
         
            sym.$("siki2").css("color","#ff7300");   

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card6cover}", "touchstart", function(sym, e) {
         switch(seki/r){
         
         case 0: break;
         
         case 1: sym.$("card1").animate({top: "+=40px"})
                 sym.$("card1cover").show();
                 break;
         
         case 2: sym.$("card2").animate({top: "+=40px"})
                 sym.$("card2cover").show();
                 break;
         
         case 3: sym.$("card3").animate({top: "+=40px"})
                 sym.$("card3cover").show();
                 break;        
         
         case 4: sym.$("card4").animate({top: "+=40px"})
                 sym.$("card4cover").show();
                 break;        
         
         case 5: sym.$("card5").animate({top: "+=40px"})
                 sym.$("card5cover").show();
                 break;        
         
         case 7: sym.$("card7").animate({top: "+=40px"})
                 sym.$("card7cover").show();
                 break;        
         
         case 8: sym.$("card8").animate({top: "+=40px"})
                 sym.$("card8cover").show();
                 break;
         
         case 9: sym.$("card9").animate({top: "+=40px"})
                 sym.$("card9cover").show();
                 break;
         
         
         }
         
         seki=r*6
         
         sym.$("siki2").html(6);
         
         
         sym.$("Systemplus").html(seki);
         
         sym.$("card6").animate({top: "-=40px"})
         sym.$("card6cover").hide();
         
         
         sym.$("okbutton").show();
         
         
         
         tds.play();
         
         
            sym.$("siki2").css("color","#ff7300");   

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card5cover}", "touchstart", function(sym, e) {
         switch(seki/r){
         
         case 0: break;
         
         case 1: sym.$("card1").animate({top: "+=40px"})
                 sym.$("card1cover").show();
                 break;
         
         case 2: sym.$("card2").animate({top: "+=40px"})
                 sym.$("card2cover").show();
                 break;
         
         case 3: sym.$("card3").animate({top: "+=40px"})
                 sym.$("card3cover").show();
                 break;        
         
         case 4: sym.$("card4").animate({top: "+=40px"})
                 sym.$("card4cover").show();
                 break;        
         
         case 6: sym.$("card6").animate({top: "+=40px"})
                 sym.$("card6cover").show();
                 break;        
         
         case 7: sym.$("card7").animate({top: "+=40px"})
                 sym.$("card7cover").show();
                 break;        
         
         case 8: sym.$("card8").animate({top: "+=40px"})
                 sym.$("card8cover").show();
                 break;
         
         case 9: sym.$("card9").animate({top: "+=40px"})
                 sym.$("card9cover").show();
                 break;
         
         
         }
         
         seki=r*5
         
         sym.$("siki2").html(5);
         
         
         sym.$("Systemplus").html(seki);
         
         sym.$("card5").animate({top: "-=40px"})
         sym.$("card5cover").hide();
         
         
         sym.$("okbutton").show();
         
         
         
         tds.play();
         
         
            sym.$("siki2").css("color","#ff7300");   

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card4cover}", "touchstart", function(sym, e) {
         switch(seki/r){
         
         case 0: break;
         
         case 1: sym.$("card1").animate({top: "+=40px"})
                 sym.$("card1cover").show();
                 break;
         
         case 2: sym.$("card2").animate({top: "+=40px"})
                 sym.$("card2cover").show();
                 break;
         
         case 3: sym.$("card3").animate({top: "+=40px"})
                 sym.$("card3cover").show();
                 break;        
         
         case 5: sym.$("card5").animate({top: "+=40px"})
                 sym.$("card5cover").show();
                 break;        
         
         case 6: sym.$("card6").animate({top: "+=40px"})
                 sym.$("card6cover").show();
                 break;        
         
         case 7: sym.$("card7").animate({top: "+=40px"})
                 sym.$("card7cover").show();
                 break;        
         
         case 8: sym.$("card8").animate({top: "+=40px"})
                 sym.$("card8cover").show();
                 break;
         
         case 9: sym.$("card9").animate({top: "+=40px"})
                 sym.$("card9cover").show();
                 break;
         
         
         }
         
         seki=r*4
         
         sym.$("siki2").html(4);
         
         
         sym.$("Systemplus").html(seki);
         
         sym.$("card4").animate({top: "-=40px"})
         sym.$("card4cover").hide();
         
         
         sym.$("okbutton").show();
         
         
         
         tds.play();
         
         
            sym.$("siki2").css("color","#ff7300");   

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card3cover}", "touchstart", function(sym, e) {
         switch(seki/r){
         
         case 0: break;
         
         case 1: sym.$("card1").animate({top: "+=40px"})
                 sym.$("card1cover").show();
                 break;
         
         case 2: sym.$("card2").animate({top: "+=40px"})
                 sym.$("card2cover").show();
                 break;
         
         case 4: sym.$("card4").animate({top: "+=40px"})
                 sym.$("card4cover").show();
                 break;        
         
         case 5: sym.$("card5").animate({top: "+=40px"})
                 sym.$("card5cover").show();
                 break;        
         
         case 6: sym.$("card6").animate({top: "+=40px"})
                 sym.$("card6cover").show();
                 break;        
         
         case 7: sym.$("card7").animate({top: "+=40px"})
                 sym.$("card7cover").show();
                 break;        
         
         case 8: sym.$("card8").animate({top: "+=40px"})
                 sym.$("card8cover").show();
                 break;
         
         case 9: sym.$("card9").animate({top: "+=40px"})
                 sym.$("card9cover").show();
                 break;
         
         
         }
         
         seki=r*3
         
         sym.$("siki2").html(3);
         
         sym.$("Systemplus").html(seki);
         
         sym.$("card3").animate({top: "-=40px"})
         sym.$("card3cover").hide();
         
         
         sym.$("okbutton").show();
         
         
         
         tds.play();
         
         
            sym.$("siki2").css("color","#ff7300");   

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card2cover}", "touchstart", function(sym, e) {
         switch(seki/r){
         
         case 0: break;
         
         case 1: sym.$("card1").animate({top: "+=40px"})
                 sym.$("card1cover").show();
                 break;
         
         case 3: sym.$("card3").animate({top: "+=40px"})
                 sym.$("card3cover").show();
                 break;
         
         case 4: sym.$("card4").animate({top: "+=40px"})
                 sym.$("card4cover").show();
                 break;        
         
         case 5: sym.$("card5").animate({top: "+=40px"})
                 sym.$("card5cover").show();
                 break;        
         
         case 6: sym.$("card6").animate({top: "+=40px"})
                 sym.$("card6cover").show();
                 break;        
         
         case 7: sym.$("card7").animate({top: "+=40px"})
                 sym.$("card7cover").show();
                 break;        
         
         case 8: sym.$("card8").animate({top: "+=40px"})
                 sym.$("card8cover").show();
                 break;
         
         case 9: sym.$("card9").animate({top: "+=40px"})
                 sym.$("card9cover").show();
                 break;
         
         
         }
         
         seki=r*2
         
         sym.$("siki2").html(2);
         
         
         sym.$("Systemplus").html(seki);
         
         sym.$("card2").animate({top: "-=40px"})
         sym.$("card2cover").hide();
         
         
         sym.$("okbutton").show();
         
         
         
         tds.play();
         
         
            sym.$("siki2").css("color","#ff7300");   

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card1cover}", "touchstart", function(sym, e) {
         switch(seki/r){
         
         case 0: break;
         
         case 2: sym.$("card2").animate({top: "+=40px"})
                 sym.$("card2cover").show();
                 break;
         
         case 3: sym.$("card3").animate({top: "+=40px"})
                 sym.$("card3cover").show();
                 break;
         
         case 4: sym.$("card4").animate({top: "+=40px"})
                 sym.$("card4cover").show();
                 break;        
         
         case 5: sym.$("card5").animate({top: "+=40px"})
                 sym.$("card5cover").show();
                 break;        
         
         case 6: sym.$("card6").animate({top: "+=40px"})
                 sym.$("card6cover").show();
                 break;        
         
         case 7: sym.$("card7").animate({top: "+=40px"})
                 sym.$("card7cover").show();
                 break;        
         
         case 8: sym.$("card8").animate({top: "+=40px"})
                 sym.$("card8cover").show();
                 break;
         
         case 9: sym.$("card9").animate({top: "+=40px"})
                 sym.$("card9cover").show();
                 break;
         
         
         }
         
         seki=r*1
         
         sym.$("siki2").html(1);
         
         
         sym.$("Systemplus").html(seki);
         
         sym.$("card1").animate({top: "-=40px"})
         sym.$("card1cover").hide();
         
         
         sym.$("okbutton").show();
         
         
         
         tds.play();
         
         
            sym.$("siki2").css("color","#ff7300");   
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_drowbutton}", "touchstart", function(sym, e) {
          sym.$("sikiCP1").css("color","#ff7300");
            sym.$("siki1").css("color","#ff7300");
            sym.$("sikiCP2").css("color","#ff7300");
            sym.$("sikiCP3").css("color","#ff7300");
          
         sym.$("center").show();
         sym.$("center2").show();
         sym.$("centeraka").hide();
         sym.$("center2aka").hide();
         sym.$("centerdodai").hide();
         sym.$("center2dodai").hide();
         //自分側の山札の数字を決める
         sym.$("hinntobutton").show();
         
         do{
         
         n = Math.floor(Math.random()*9);
         h = Math.floor(Math.random()*9);
         
         r=n+1;
         j=h+1;
         
         cup=Math.abs(r-j);
         
         }while(cup>3);
         
         tdh.play();
         
         sym.$("siki1").html(r);
         sym.$("sikiCP2").html(j);
         
         sym.$("drowbutton").hide();
         
         
         
         /*
         sym.$("cardscover2").show();	
         
         sym.$("upbutton").show();
         sym.$("downbutton").show();
         sym.$("kakeOKbutton").show();	
         */
         
         switch(j){
         
         case 1: sym.$("kuro1").show();
                                       break;
         
         case 2: sym.$("kuro2").show();
                                       break;
         
         case 3: sym.$("kuro3").show();
                                       break; 
         
         case 4: sym.$("kuro4").show();
                                       break;                                                           
         
         case 5: sym.$("kuro5").show();
                                       break;
         
         case 6: sym.$("kuro6").show();
                                       break;
         
         case 7: sym.$("kuro7").show();
                                       break;
         
         case 8: sym.$("kuro8").show();
                                       break; 
         
         case 9: sym.$("kuro9").show();
                                       break;                                                                                         
         }
         
         switch(r){
         
         case 1: sym.$("hato1").show();
                                       break;
         
         case 2: sym.$("hato2").show();
                                       break;
         
         case 3: sym.$("hato3").show();
                                       break; 
         
         case 4: sym.$("hato4").show();
                                       break;                                                           
         
         case 5: sym.$("hato5").show();
                                       break;
         
         case 6: sym.$("hato6").show();
                                       break;
         
         case 7: sym.$("hato7").show();
                                       break;
         
         case 8: sym.$("hato8").show();
                                       break; 
         
         case 9: sym.$("hato9").show();
                                       break;                                                                                         
         }
         
         
         
         
         
         /*sym.$("Text2").html("かけ金を決めてね！");*/
         
         
         
         
         
         	yamaCP=j+3
         
         
         	if(yamaCP-r<3){
         	baisuu=10
         	}else{
         	if(yamaCP-r==3){
         	baisuu=15
         	}else{
         	if(yamaCP-r>3){
         	baisuu=20
            }
            }
            }
         
            yamaYou=r+3
         
         
         	if(yamaYou-j<3){
         	CPbaisuu=10
         	}else{
         	if(yamaYou-j==3){
         	CPbaisuu=15
         	}else{
         	if(yamaYou-j>3){
         	CPbaisuu=20
         	}
            }
            }
         
         
         	var kake = sym.getVariable("kakekinn");
         
            getcoin=baisuu*kake;
         
         
         
         	sym.$("late").html(getcoin);
         
         
          do{
            a=Math.floor(Math.random()*9);
            }while(num1[a]==1)
            num1[a]=1
            CP1=a+1
         
            //CP側の積を計算
            CPseki=CP1*j
         
            sym.$("sikiCP3").html(CPseki);
            sym.$("CPseki").html(CPseki);
            sym.$("sikiCP1").html(CP1);
         
         
             //add 4mode
         
             if(num2[0]==0){
            sym.$("card1").animate({top: "-=140px"})
            }
            if(num2[1]==0){
            sym.$("card2").animate({top: "-=140px"})
            }
            if(num2[2]==0){
            sym.$("card3").animate({top: "-=140px"})
            }
            if(num2[3]==0){
            sym.$("card4").animate({top: "-=140px"})
            }
            if(num2[4]==0){
            sym.$("card5").animate({top: "-=140px"})
            }
            if(num2[5]==0){
            sym.$("card6").animate({top: "-=140px"})
            }
            if(num2[6]==0){
            sym.$("card7").animate({top: "-=140px"})
            }
            if(num2[7]==0){
            sym.$("card8").animate({top: "-=140px"})
            }
            if(num2[8]==0){
            sym.$("card9").animate({top: "-=140px"})
            }
         
            sym.$("blue1").hide();
         
            seki=0;
         
         
         
            switch(CP1){
         
         case 1: sym.$("hintocard1").show();
                                       break;
         
         case 2: sym.$("hintocard2").show();
                                       break;
         
         case 3: sym.$("hintocard3").show();
                                       break; 
         
         case 4: sym.$("hintocard4").show();
                                       break;                                                           
         
         case 5: sym.$("hintocard5").show();
                                       break;
         
         case 6: sym.$("hintocard6").show();
                                       break;
         
         case 7: sym.$("hintocard7").show();
                                       break;
         
         case 8: sym.$("hintocard8").show();
                                       break; 
         
         case 9: sym.$("hintocard9").show();
                                       break;                                                                                         
         }
         
         CPgetcoin=CPbaisuu*1;
         
         
         sym.$("CPlate").html(CPgetcoin);
         
         
         $(function(){
         setTimeout(function(){
         
         sym.$("hintest").fadeIn(500);
         sym.$("hintext").fadeIn(500);
         sym.$("hintext").html("相手のカードは"+CP1);
         },0);
         });
         
         
         
         $(function(){
         setTimeout(function(){
         
         sym.$("hintext").fadeOut(500);
         sym.$("hintest").fadeOut(500);
         sym.$("cardscover").hide();
         
         },2000);
         });
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_smakotouch}", "touchstart", function(sym, e) {
         smako = new Array("くすぐったいよ〜。","頑張って！","どうしたの？")
         kotoba = Math.floor(Math.random()*3);
         sym.$("Text2").html(smako[kotoba]);
         
         
         
         $(function(){
         setTimeout(function(){
         
         sym.$("smakotouch").hide();
         
         },0);
         });
         
         $(function(){
         setTimeout(function(){
         
         sym.$("smakotouch").show();
         
         },4000);
         });
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hinntobutton}", "touchstart", function(sym, e) {
         
         sym.$("hintominmax").show();
         sym.$("hintomin").show();
         sym.$("hintomax").show();
         sym.$("hintoseki").show();
         sym.$("hinntostage").show();
         
         cpmax=num1[0]+num1[1]+num1[2]+num1[3];
         cpmin=num1[5]+num1[6]+num1[7]+num1[8];
         
         if(cpmax>cpmin){
         sym.$("hintominmax").html("大きい");
         }else{
         if(cpmax<cpmin){
         sym.$("hintominmax").html("小さい");
         }else{
         sym.$("hintominmax").html("???");
         }
         }
         
         
         if(num1[0]==0){
         sym.$("hintomax").html("1");
         sym.$("hintoseki").html("1×"+j);
         }
         if(num1[1]==0){
         sym.$("hintomax").html("2");
         sym.$("hintoseki").html("2×"+j);
         }
         if(num1[2]==0){
         sym.$("hintomax").html("3");
         sym.$("hintoseki").html("3×"+j);
         }
         if(num1[3]==0){
         sym.$("hintomax").html("4");
         sym.$("hintoseki").html("4×"+j);
         }
         if(num1[4]==0){
         sym.$("hintomax").html("5");
         sym.$("hintoseki").html("5×"+j);
         }
         if(num1[5]==0){
         sym.$("hintomax").html("6");
         sym.$("hintoseki").html("6×"+j);
         }
         if(num1[6]==0){
         sym.$("hintomax").html("7");
         sym.$("hintoseki").html("7×"+j);
         }
         if(num1[7]==0){
         sym.$("hintomax").html("8");
         sym.$("hintoseki").html("8×"+j);
         }
         if(num1[8]==0){
         sym.$("hintomax").html("9");
         sym.$("hintoseki").html("9×"+j);
         }
         
         
         
         if(num1[8]==0){
         sym.$("hintomin").html("9");
         }
         if(num1[7]==0){
         sym.$("hintomin").html("8");
         }
         if(num1[6]==0){
         sym.$("hintomin").html("7");
         }
         if(num1[5]==0){
         sym.$("hintomin").html("6");
         }
         if(num1[4]==0){
         sym.$("hintomin").html("5");
         }
         if(num1[3]==0){
         sym.$("hintomin").html("4");
         }
         if(num1[2]==0){
         sym.$("hintomin").html("3");
         }
         if(num1[1]==0){
         sym.$("hintomin").html("2");
         }
         if(num1[0]==0){
         sym.$("hintomin").html("1");
         }
         
         
         
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.stop();
         // コードをここに挿入

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.stop();
         // コードをここに挿入

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kettei}", "touchstart", function(sym, e) {
         
         sym.$("kyarakutachoose").hide();
         sym.$("smaobox").hide();
         sym.$("penpenbox").hide();
         sym.$("bonnoubox").hide();
         sym.$("kaminaribox").hide();
         sym.$("smakobox").hide();
         sym.$("kyarasenText").hide();
         sym.$("kettei").hide();
         sym.$("kaminarich").hide();
         sym.$("bonnouch").hide();
         sym.$("smakoch").hide();
         sym.$("penpench").hide();
         sym.$("smaoch").hide();
         sym.$("kaminarichc").hide();
         sym.$("bonnouchc").hide();
         sym.$("smakochc").hide();
         sym.$("penpenchc").hide();
         sym.$("smaochc").hide();
         
         kyarasen.stop();
         button.play();
         
         
         do{
            CPkyara=Math.floor(Math.random()*4);
            }while(kyarastock[CPkyara]==1)
         
         
         
         switch(CPkyara){
         
         case 0: sym.$("kaminariCP").hide();
                 sym.$("pontaCP").hide();
                 sym.$("penpenCP").hide();
                 break;
         
         case 1: sym.$("pontaCP").hide();
                 sym.$("penpenCP").hide();
                 sym.$("bonnouCP").hide();
                 break;
         
         case 2: sym.$("kaminariCP").hide();
                 sym.$("penpenCP").hide();
                 sym.$("bonnouCP").hide();
                 break;
         
         case 3: sym.$("kaminariCP").hide();
                 sym.$("pontaCP").hide();
                 sym.$("bonnouCP").hide();
                 break;
         
         
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_smakochc}", "touchstart", function(sym, e) {
         
         sym.$("smakobox").show();
         
         sym.$("smaobox").hide();
         sym.$("penpenbox").hide();
         sym.$("kaminaribox").hide();
         sym.$("bonnoubox").hide();
         
         sym.$("smakoY").show();
         
         sym.$("smaoY").hide();
         sym.$("penpenY").hide();
         sym.$("kaminariY").hide();
         sym.$("bonnouY").hide();
         
         button.play();
         
         kyaraY=1;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_smaochc}", "touchstart", function(sym, e) {
         sym.$("smaobox").show();
         
         sym.$("penpenbox").hide();
         sym.$("kaminaribox").hide();
         sym.$("bonnoubox").hide();
         sym.$("smakobox").hide();
         
         sym.$("smaoY").show();
         
         sym.$("penpenY").hide();
         sym.$("kaminariY").hide();
         sym.$("bonnouY").hide();
         sym.$("smakoY").hide();
         
         button.play();
         
         kyaraY=2;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_penpenchc}", "touchstart", function(sym, e) {
         sym.$("penpenbox").show();
         
         sym.$("smaobox").hide();
         sym.$("kaminaribox").hide();
         sym.$("bonnoubox").hide();
         sym.$("smakobox").hide();
         
         sym.$("penpenY").show();
         
         sym.$("smaoY").hide();
         sym.$("kaminariY").hide();
         sym.$("bonnouY").hide();
         sym.$("smakoY").hide();
         
         button.play();
         
         kyaraY=3;
         
         kyarastock[3]=1;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bonnouchc}", "touchstart", function(sym, e) {
         sym.$("bonnoubox").show();
         
         sym.$("smaobox").hide();
         sym.$("penpenbox").hide();
         sym.$("kaminaribox").hide();
         sym.$("smakobox").hide();
         
         sym.$("bonnouY").show();
         
         sym.$("smaoY").hide();
         sym.$("penpenY").hide();
         sym.$("kaminariY").hide();
         sym.$("smakoY").hide();
         
         button.play();
         
         kyaraY=5;
         
         kyarastock[0]=1;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaminarichc}", "touchstart", function(sym, e) {
         sym.$("kaminaribox").show();
         
         sym.$("smaobox").hide();
         sym.$("penpenbox").hide();
         sym.$("bonnoubox").hide();
         sym.$("smakobox").hide();
         
         sym.$("kaminariY").show();
         
         sym.$("smaoY").hide();
         sym.$("penpenY").hide();
         sym.$("bonnouY").hide();
         sym.$("smakoY").hide();
         
         button.play();
         
         kyaraY=4;
         
         kyarastock[1]=1;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hinntostage}", "touchstart", function(sym, e) {
         
         sym.$("hintominmax").hide();
         sym.$("hintomin").hide();
         sym.$("hintomax").hide();
         sym.$("hintoseki").hide();
         sym.$("hinntostage").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14500, function(sym, e) {
         // シンボルのインスタンスであるエレメントから Edge Animate シンボルの
         // Javascript オブジェクトを検索します。シンボルのオブジェクトを使用して、再生、停止などの
         // シンボル関数を呼び出すことができます。
         
         /*
         var kami = sym.getSymbol("kamihubukiafter");
         
         kami.play(0);
         */

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17599, function(sym, e) {
         
         /*
         var kami = sym.getSymbol("kamihubukiafter");
         
         kami.play(0);
         */

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_end_return}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("kakezann0.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gamestartbutton}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
  || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       // マウスクリックのコードをここに挿入します
         button.play();
         kyarasen.play();

         sym.$("gamestartbutton").hide();
         sym.$("gamestartgamenn").hide();



            sym.$("card1").animate({top: "+=140px"})

            sym.$("card2").animate({top: "+=140px"})

            sym.$("card3").animate({top: "+=140px"})

            sym.$("card4").animate({top: "+=140px"})

            sym.$("card5").animate({top: "+=140px"})

            sym.$("card6").animate({top: "+=140px"})

            sym.$("card7").animate({top: "+=140px"})

            sym.$("card8").animate({top: "+=140px"})

            sym.$("card9").animate({top: "+=140px"})


         sym.$("smaoY").hide();
         sym.$("penpenY").hide();
         sym.$("kaminariY").hide();
         sym.$("bonnouY").hide();

         kyarastock=new Array(0,0,0,0,0)	
         
         sym.$("smakobox").show();

         sym.$("smaobox").hide();
         sym.$("penpenbox").hide();
         sym.$("kaminaribox").hide();
         sym.$("bonnoubox").hide();

         sym.$("smakoY").show();

         sym.$("smaoY").hide();
         sym.$("penpenY").hide();
         sym.$("kaminariY").hide();
         sym.$("bonnouY").hide();

         button.play();

         kyaraY=1;


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaminarichc}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       sym.$("kaminaribox").show();
         
         sym.$("smaobox").hide();
         sym.$("penpenbox").hide();
         sym.$("bonnoubox").hide();
         sym.$("smakobox").hide();
         
         sym.$("kaminariY").show();
         
         sym.$("smaoY").hide();
         sym.$("penpenY").hide();
         sym.$("bonnouY").hide();
         sym.$("smakoY").hide();
         
         button.play();
         
         kyaraY=4;
         
         kyarastock[1]=1;
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bonnouchc}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       sym.$("bonnoubox").show();
         
         sym.$("smaobox").hide();
         sym.$("penpenbox").hide();
         sym.$("kaminaribox").hide();
         sym.$("smakobox").hide();
         
         sym.$("bonnouY").show();
         
         sym.$("smaoY").hide();
         sym.$("penpenY").hide();
         sym.$("kaminariY").hide();
         sym.$("smakoY").hide();
         
         button.play();
         
         kyaraY=5;
         
         kyarastock[0]=1;
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_penpenchc}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       sym.$("penpenbox").show();
         
         sym.$("smaobox").hide();
         sym.$("kaminaribox").hide();
         sym.$("bonnoubox").hide();
         sym.$("smakobox").hide();
         
         sym.$("penpenY").show();
         
         sym.$("smaoY").hide();
         sym.$("kaminariY").hide();
         sym.$("bonnouY").hide();
         sym.$("smakoY").hide();
         
         button.play();
         
         kyaraY=3;
         
         kyarastock[3]=1;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_smaochc}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       sym.$("smaobox").show();
         
         sym.$("penpenbox").hide();
         sym.$("kaminaribox").hide();
         sym.$("bonnoubox").hide();
         sym.$("smakobox").hide();
         
         sym.$("smaoY").show();
         
         sym.$("penpenY").hide();
         sym.$("kaminariY").hide();
         sym.$("bonnouY").hide();
         sym.$("smakoY").hide();
         
         button.play();
         
         kyaraY=2;
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_smakochc}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       
         sym.$("smakobox").show();
         
         sym.$("smaobox").hide();
         sym.$("penpenbox").hide();
         sym.$("kaminaribox").hide();
         sym.$("bonnoubox").hide();
         
         sym.$("smakoY").show();
         
         sym.$("smaoY").hide();
         sym.$("penpenY").hide();
         sym.$("kaminariY").hide();
         sym.$("bonnouY").hide();
         
         button.play();
         
         kyaraY=1;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kettei}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       
         sym.$("kyarakutachoose").hide();
         sym.$("smaobox").hide();
         sym.$("penpenbox").hide();
         sym.$("bonnoubox").hide();
         sym.$("kaminaribox").hide();
         sym.$("smakobox").hide();
         sym.$("kyarasenText").hide();
         sym.$("kettei").hide();
         sym.$("kaminarich").hide();
         sym.$("bonnouch").hide();
         sym.$("smakoch").hide();
         sym.$("penpench").hide();
         sym.$("smaoch").hide();
         sym.$("kaminarichc").hide();
         sym.$("bonnouchc").hide();
         sym.$("smakochc").hide();
         sym.$("penpenchc").hide();
         sym.$("smaochc").hide();
         
         kyarasen.stop();
         button.play();
         
         
         do{
            CPkyara=Math.floor(Math.random()*4);
            }while(kyarastock[CPkyara]==1)
         
         
         
         switch(CPkyara){
         
         case 0: sym.$("kaminariCP").hide();
                 sym.$("pontaCP").hide();
                 sym.$("penpenCP").hide();
                 break;
         
         case 1: sym.$("pontaCP").hide();
                 sym.$("penpenCP").hide();
                 sym.$("bonnouCP").hide();
                 break;
         
         case 2: sym.$("kaminariCP").hide();
                 sym.$("penpenCP").hide();
                 sym.$("bonnouCP").hide();
                 break;
         
         case 3: sym.$("kaminariCP").hide();
                 sym.$("pontaCP").hide();
                 sym.$("bonnouCP").hide();
                 break;
         
         
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rennsyuubutton}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       
         
         rennsyuustage=sym.createChildSymbol("rennsyuustage_1", "Stage");
         
         
         button.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_startbutton}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       button.play();
         
         var turn = sym.getVariable("turncount");
         
         mySound.play();
         
         
         sym.$("Text2").html("ゲームスタート！");
         
         
         $(function(){
         setTimeout(function(){
         sym.$("Text2").fadeIn(1000);
         sym.$("hukidasi").fadeIn(1000);
         },500);
         });
         
         
         sym.$("drowbutton").show();
         sym.$("startbutton").hide();
         sym.$("startgamen").hide();
         sym.$("rennsyuubutton").hide();
         
         //CP側の使用された手札カードのデータを記録する
         num1=new Array(0,0,0,0,0,0,0,0,0)
         num2=new Array(0,0,0,0,0,0,0,0,0,0)
         
         
         sym.$("hato1").hide();
         sym.$("hato2").hide();
         sym.$("hato3").hide();
         sym.$("hato4").hide();
         sym.$("hato5").hide();
         sym.$("hato6").hide();
         sym.$("hato7").hide();
         sym.$("hato8").hide();
         sym.$("hato9").hide();
         sym.$("kuro1").hide();
         sym.$("kuro2").hide();
         sym.$("kuro3").hide();
         sym.$("kuro4").hide();
         sym.$("kuro5").hide();
         sym.$("kuro6").hide();
         sym.$("kuro7").hide();
         sym.$("kuro8").hide();
         sym.$("kuro9").hide();
         
         
         seki=0;
         
         sym.$("cardscover3").hide();
         
         sym.$("setumei").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hinntostage}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       
         sym.$("hintominmax").hide();
         sym.$("hintomin").hide();
         sym.$("hintomax").hide();
         sym.$("hintoseki").hide();
         sym.$("hinntostage").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cardscover}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       sym.$("Text2").html("カードを引いてね。");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cardscover2}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       sym.$("Text2").html("カードを選んでね！");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_end_return}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("kakezann0.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kakeOKbutton}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}           
             if(num2[0]==0){
            sym.$("card1").animate({top: "-=140px"})
            }
            if(num2[1]==0){
            sym.$("card2").animate({top: "-=140px"})
            }
            if(num2[2]==0){
            sym.$("card3").animate({top: "-=140px"})
            }
            if(num2[3]==0){
            sym.$("card4").animate({top: "-=140px"})
            }
            if(num2[4]==0){
            sym.$("card5").animate({top: "-=140px"})
            }
            if(num2[5]==0){
            sym.$("card6").animate({top: "-=140px"})
            }
            if(num2[6]==0){
            sym.$("card7").animate({top: "-=140px"})
            }
            if(num2[7]==0){
            sym.$("card8").animate({top: "-=140px"})
            }
            if(num2[8]==0){
            sym.$("card9").animate({top: "-=140px"})
            }
            
         sym.$("cardscover2").hide();
         sym.$("kakeOKbutton").hide();
         sym.$("upbutton").hide();
         sym.$("downbutton").hide();
         
         sym.$("blue1").hide();
         
         
         CPkake=Math.floor(Math.random()*5);
         
         CPkakekinn=CPkake+1
         
         sym.$("kakekinnCPtxt").html("× "+CPkakekinn);
         sym.$("Text2").html("カードを選んでね！");
         
         CPgetcoin=CPbaisuu*CPkakekinn;
         
         
         sym.$("CPlate").html(CPgetcoin);	
         
         
         
         
            var kake = sym.getVariable("kakekinn");
            var counter = sym.getVariable("slidecount");
            var CPcounter = sym.getVariable("CPslidecount");
         
            counter = counter - kake;
         
            CPcounter = CPcounter - CPkakekinn;
         
            sym.setVariable("slidecount", counter);
            sym.$("pointo").html(counter);
            sym.setVariable("CPslidecount", CPcounter);
            sym.$("CPpointo").html(CPcounter);
         
         
         
         kakeok.play();
         
         seki=0;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_upbutton}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       var kake = sym.getVariable("kakekinn");
         
         	kake = kake + 1;
         	if(kake>5){
         		kake=1;
         	}
         
         sym.setVariable("kakekinn", kake);
         sym.$("kakekinntxt").html("× "+ kake);
         
         
         if(kake==1){
         
         
         coindown.play();
         
         }else{
         
         
         coinup.play();
         
         
         }
         
         
           getcoin=baisuu*kake;
         
         
         
         	sym.$("late").html(getcoin);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_downbutton}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       var kake = sym.getVariable("kakekinn");
         
         	kake = kake - 1;
         	if(kake<1){
         		kake=5;
         	}
         
         sym.setVariable("kakekinn", kake);
         sym.$("kakekinntxt").html("× "+ kake);
         
         if(kake==5){
         
         coinup.play();
         
         }else{
         
         coindown.play();
         }
         
         getcoin=baisuu*kake;
         
         
         sym.$("late").html(getcoin);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_okbutton}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}         sym.$("hintocard").show();
           
            sym.$("siki3").css("color","#ff7300");   
            //CP側の未使用の手札カードを選ぶまで処理を繰り返す
            sym.$("siki3").html(seki);
            //自分が選んだ手札のカードを中央に動かす
            switch(seki/r){
             case 1: sym.$("card1").animate({top: "-=178px"})
                     sym.$("card1").animate({left: "+=510px"}) 
                     num2[0]=1                                         
                                                               break;
           
             case 2: sym.$("card2").animate({top: "-=178px"})
                     sym.$("card2").animate({left: "+=443px"})
                     num2[1]=1                                           
                                                               break;
           
             case 3: sym.$("card3").animate({top: "-=178px"})
                     sym.$("card3").animate({left: "+=378px"})
                     num2[2]=1                                          
                                                               break;
           
             case 4: sym.$("card4").animate({top: "-=178px"})
                     sym.$("card4").animate({left: "+=313px"})
                     num2[3]=1                                          
                                                               break;
           
             case 5: sym.$("card5").animate({top: "-=178px"})
                     sym.$("card5").animate({left: "+=248px"})
                     num2[4]=1                                          
                                                               break;
           
             case 6: sym.$("card6").animate({top: "-=178px"})
                     sym.$("card6").animate({left: "+=183px"})
                     num2[5]=1                                          
                                                               break;
           
             case 7: sym.$("card7").animate({top: "-=178px"})
                     sym.$("card7").animate({left: "+=115px"})
                     num2[6]=1                                          
                                                               break;
           
             case 8: sym.$("card8").animate({top: "-=178px"})
                     sym.$("card8").animate({left: "+=50px"})
                     num2[7]=1                                          
                                                               break;
           
             case 9: sym.$("card9").animate({top: "-=178px"})
                     sym.$("card9").animate({left: "-=16px"})
                     num2[8]=1                                          
                                                               break;
         }
         
            //CP側の選ばれた手札のカードを中央に動かす
            switch(CPseki/j){
         
            case 1:  sym.$("CPcard1").animate({top: "+=227px"})
                     sym.$("CPcard1").animate({left: "-=3px"})
                                                                 break;
         
            case 2:  sym.$("CPcard2").animate({top: "+=227px"})
                     sym.$("CPcard2").animate({left: "-=68px"})
                                                                 break;
         
            case 3:  sym.$("CPcard3").animate({top: "+=227px"})
                     sym.$("CPcard3").animate({left: "-=128px"})
                                                                 break;
         
            case 4:  sym.$("CPcard4aka").hide();
                     sym.$("CPcard4").animate({top: "+=227px"})
                     sym.$("CPcard4").animate({left: "-=191px"})
                                                                 break;
         
            case 5:  sym.$("CPcard5aka").hide();
                     sym.$("CPcard5").animate({top: "+=227px"})
                     sym.$("CPcard5").animate({left: "-=246px"})
                                                                 break;
         
            case 6:  sym.$("CPcard6").animate({top: "+=227px"})
                     sym.$("CPcard6").animate({left: "-=312px"})
                                                                 break;
         
            case 7:  sym.$("CPcard7").animate({top: "+=227px"})
                     sym.$("CPcard7").animate({left: "-=377px"})
                                                                 break;
         
            case 8:  sym.$("CPcard8").animate({top: "+=227px"})
                     sym.$("CPcard8").animate({left: "-=442px"})
                                                                 break;
         
            case 9: sym.$("CPcard9").animate({top: "+=227px"})
                    sym.$("CPcard9").animate({left: "-=508px"})
                                                                 break;
            }
         
           // エレメントを表示します。
           //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
           //  使用できる DOM エレメントに変えます)。
         
         sym.$("Text2").html("いざ、勝負！！");
         
         
         
         
         tdh.play();
         
         
         
             if(num2[0]==0){
            sym.$("card1").animate({top: "+=140px"})
            }
            if(num2[1]==0){
            sym.$("card2").animate({top: "+=140px"})
            }
            if(num2[2]==0){
            sym.$("card3").animate({top: "+=140px"})
            }
            if(num2[3]==0){
            sym.$("card4").animate({top: "+=140px"})
            }
            if(num2[4]==0){
            sym.$("card5").animate({top: "+=140px"})
            }
            if(num2[5]==0){
            sym.$("card6").animate({top: "+=140px"})
            }
            if(num2[6]==0){
            sym.$("card7").animate({top: "+=140px"})
            }
            if(num2[7]==0){
            sym.$("card8").animate({top: "+=140px"})
            }
            if(num2[8]==0){
            sym.$("card9").animate({top: "+=140px"})
            }
         
         
         
         sym.$("blue3").hide();
         
         sym.$("hinntobutton").hide();
         sym.$("cardscover3").show();
         
            //アニメーションの開始
         sym.play(0);
         
           switch(CP1){
         
         case 1: sym.$("hintocard1").hide();
                                       break;
         
         case 2: sym.$("hintocard2").hide();
                                       break;
         
         case 3: sym.$("hintocard3").hide();
                                       break; 
         
         case 4: sym.$("hintocard4").hide();
                                       break;                                                           
         
         case 5: sym.$("hintocard5").hide();
                                       break;
         
         case 6: sym.$("hintocard6").hide();
                                       break;
         
         case 7: sym.$("hintocard7").hide();
                                       break;
         
         case 8: sym.$("hintocard8").hide();
                                       break; 
         
         case 9: sym.$("hintocard9").hide();
                                       break;                                                                                         
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card9cover}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       
         switch(seki/r){
         
         case 0: break;
         
         case 1: sym.$("card1").animate({top: "+=40px"})
                 sym.$("card1cover").show();
                 break;
         
         case 2: sym.$("card2").animate({top: "+=40px"})
                 sym.$("card2cover").show();
                 break;
         
         case 3: sym.$("card3").animate({top: "+=40px"})
                 sym.$("card3cover").show();
                 break;        
         
         case 4: sym.$("card4").animate({top: "+=40px"})
                 sym.$("card4cover").show();
                 break;        
         
         case 5: sym.$("card5").animate({top: "+=40px"})
                 sym.$("card5cover").show();
                 break;        
         
         case 6: sym.$("card6").animate({top: "+=40px"})
                 sym.$("card6cover").show();
                 break;        
         
         case 7: sym.$("card7").animate({top: "+=40px"})
                 sym.$("card7cover").show();
                 break;
         
         case 8: sym.$("card8").animate({top: "+=40px"})
                 sym.$("card8cover").show();
                 break;
         
         
         }
         
         seki=r*9
         
         sym.$("siki2").html(9);
         
         
         sym.$("Systemplus").html(seki);
         
         sym.$("card9").animate({top: "-=40px"})
         sym.$("card9cover").hide();
         
         
         sym.$("okbutton").show();
         
         
         
         tds.play();
         
         
            sym.$("siki2").css("color","#ff7300"); 

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card8cover}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       switch(seki/r){
         
         case 0: break;
         
         case 1: sym.$("card1").animate({top: "+=40px"})
                 sym.$("card1cover").show();
                 break;
         
         case 2: sym.$("card2").animate({top: "+=40px"})
                 sym.$("card2cover").show();
                 break;
         
         case 3: sym.$("card3").animate({top: "+=40px"})
                 sym.$("card3cover").show();
                 break;        
         
         case 4: sym.$("card4").animate({top: "+=40px"})
                 sym.$("card4cover").show();
                 break;        
         
         case 5: sym.$("card5").animate({top: "+=40px"})
                 sym.$("card5cover").show();
                 break;        
         
         case 6: sym.$("card6").animate({top: "+=40px"})
                 sym.$("card6cover").show();
                 break;        
         
         case 7: sym.$("card7").animate({top: "+=40px"})
                 sym.$("card7cover").show();
                 break;
         
         case 9: sym.$("card9").animate({top: "+=40px"})
                 sym.$("card9cover").show();
                 break;
         
         
         }
         
         seki=r*8
         
         sym.$("siki2").html(8);
         
         
         sym.$("Systemplus").html(seki);
         
         sym.$("card8").animate({top: "-=40px"})
         sym.$("card8cover").hide();
         
         
         sym.$("okbutton").show();
         
         
         
         tds.play();
         
         
            sym.$("siki2").css("color","#ff7300");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card7cover}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       switch(seki/r){
         
         case 0: break;
         
         case 1: sym.$("card1").animate({top: "+=40px"})
                 sym.$("card1cover").show();
                 break;
         
         case 2: sym.$("card2").animate({top: "+=40px"})
                 sym.$("card2cover").show();
                 break;
         
         case 3: sym.$("card3").animate({top: "+=40px"})
                 sym.$("card3cover").show();
                 break;        
         
         case 4: sym.$("card4").animate({top: "+=40px"})
                 sym.$("card4cover").show();
                 break;        
         
         case 5: sym.$("card5").animate({top: "+=40px"})
                 sym.$("card5cover").show();
                 break;        
         
         case 6: sym.$("card6").animate({top: "+=40px"})
                 sym.$("card6cover").show();
                 break;        
         
         case 8: sym.$("card8").animate({top: "+=40px"})
                 sym.$("card8cover").show();
                 break;
         
         case 9: sym.$("card9").animate({top: "+=40px"})
                 sym.$("card9cover").show();
                 break;
         
         
         }
         
         seki=r*7
         
         sym.$("siki2").html(7);
         
         
         sym.$("Systemplus").html(seki);
         
         sym.$("card7").animate({top: "-=40px"})
         sym.$("card7cover").hide();
         
         
         sym.$("okbutton").show();
         
         
         
         tds.play();
         
         
            sym.$("siki2").css("color","#ff7300");   
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card6cover}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       switch(seki/r){
         
         case 0: break;
         
         case 1: sym.$("card1").animate({top: "+=40px"})
                 sym.$("card1cover").show();
                 break;
         
         case 2: sym.$("card2").animate({top: "+=40px"})
                 sym.$("card2cover").show();
                 break;
         
         case 3: sym.$("card3").animate({top: "+=40px"})
                 sym.$("card3cover").show();
                 break;        
         
         case 4: sym.$("card4").animate({top: "+=40px"})
                 sym.$("card4cover").show();
                 break;        
         
         case 5: sym.$("card5").animate({top: "+=40px"})
                 sym.$("card5cover").show();
                 break;        
         
         case 7: sym.$("card7").animate({top: "+=40px"})
                 sym.$("card7cover").show();
                 break;        
         
         case 8: sym.$("card8").animate({top: "+=40px"})
                 sym.$("card8cover").show();
                 break;
         
         case 9: sym.$("card9").animate({top: "+=40px"})
                 sym.$("card9cover").show();
                 break;
         
         
         }
         
         seki=r*6
         
         sym.$("siki2").html(6);
         
         
         sym.$("Systemplus").html(seki);
         
         sym.$("card6").animate({top: "-=40px"})
         sym.$("card6cover").hide();
         
         
         sym.$("okbutton").show();
         
         
         
         tds.play();
         
         
            sym.$("siki2").css("color","#ff7300");   
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card5cover}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       switch(seki/r){
         
         case 0: break;
         
         case 1: sym.$("card1").animate({top: "+=40px"})
                 sym.$("card1cover").show();
                 break;
         
         case 2: sym.$("card2").animate({top: "+=40px"})
                 sym.$("card2cover").show();
                 break;
         
         case 3: sym.$("card3").animate({top: "+=40px"})
                 sym.$("card3cover").show();
                 break;        
         
         case 4: sym.$("card4").animate({top: "+=40px"})
                 sym.$("card4cover").show();
                 break;        
         
         case 6: sym.$("card6").animate({top: "+=40px"})
                 sym.$("card6cover").show();
                 break;        
         
         case 7: sym.$("card7").animate({top: "+=40px"})
                 sym.$("card7cover").show();
                 break;        
         
         case 8: sym.$("card8").animate({top: "+=40px"})
                 sym.$("card8cover").show();
                 break;
         
         case 9: sym.$("card9").animate({top: "+=40px"})
                 sym.$("card9cover").show();
                 break;
         
         
         }
         
         seki=r*5
         
         sym.$("siki2").html(5);
         
         
         sym.$("Systemplus").html(seki);
         
         sym.$("card5").animate({top: "-=40px"})
         sym.$("card5cover").hide();
         
         
         sym.$("okbutton").show();
         
         
         
         tds.play();
         
         
            sym.$("siki2").css("color","#ff7300");   
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card4cover}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       switch(seki/r){
         
         case 0: break;
         
         case 1: sym.$("card1").animate({top: "+=40px"})
                 sym.$("card1cover").show();
                 break;
         
         case 2: sym.$("card2").animate({top: "+=40px"})
                 sym.$("card2cover").show();
                 break;
         
         case 3: sym.$("card3").animate({top: "+=40px"})
                 sym.$("card3cover").show();
                 break;        
         
         case 5: sym.$("card5").animate({top: "+=40px"})
                 sym.$("card5cover").show();
                 break;        
         
         case 6: sym.$("card6").animate({top: "+=40px"})
                 sym.$("card6cover").show();
                 break;        
         
         case 7: sym.$("card7").animate({top: "+=40px"})
                 sym.$("card7cover").show();
                 break;        
         
         case 8: sym.$("card8").animate({top: "+=40px"})
                 sym.$("card8cover").show();
                 break;
         
         case 9: sym.$("card9").animate({top: "+=40px"})
                 sym.$("card9cover").show();
                 break;
         
         
         }
         
         seki=r*4
         
         sym.$("siki2").html(4);
         
         
         sym.$("Systemplus").html(seki);
         
         sym.$("card4").animate({top: "-=40px"})
         sym.$("card4cover").hide();
         
         
         sym.$("okbutton").show();
         
         
         
         tds.play();
         
         
            sym.$("siki2").css("color","#ff7300");   
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card3cover}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       switch(seki/r){
         
         case 0: break;
         
         case 1: sym.$("card1").animate({top: "+=40px"})
                 sym.$("card1cover").show();
                 break;
         
         case 2: sym.$("card2").animate({top: "+=40px"})
                 sym.$("card2cover").show();
                 break;
         
         case 4: sym.$("card4").animate({top: "+=40px"})
                 sym.$("card4cover").show();
                 break;        
         
         case 5: sym.$("card5").animate({top: "+=40px"})
                 sym.$("card5cover").show();
                 break;        
         
         case 6: sym.$("card6").animate({top: "+=40px"})
                 sym.$("card6cover").show();
                 break;        
         
         case 7: sym.$("card7").animate({top: "+=40px"})
                 sym.$("card7cover").show();
                 break;        
         
         case 8: sym.$("card8").animate({top: "+=40px"})
                 sym.$("card8cover").show();
                 break;
         
         case 9: sym.$("card9").animate({top: "+=40px"})
                 sym.$("card9cover").show();
                 break;
         
         
         }
         
         seki=r*3
         
         sym.$("siki2").html(3);
         
         sym.$("Systemplus").html(seki);
         
         sym.$("card3").animate({top: "-=40px"})
         sym.$("card3cover").hide();
         
         
         sym.$("okbutton").show();
         
         
         
         tds.play();
         
         
            sym.$("siki2").css("color","#ff7300"); 

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card2cover}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       switch(seki/r){
         
         case 0: break;
         
         case 1: sym.$("card1").animate({top: "+=40px"})
                 sym.$("card1cover").show();
                 break;
         
         case 3: sym.$("card3").animate({top: "+=40px"})
                 sym.$("card3cover").show();
                 break;
         
         case 4: sym.$("card4").animate({top: "+=40px"})
                 sym.$("card4cover").show();
                 break;        
         
         case 5: sym.$("card5").animate({top: "+=40px"})
                 sym.$("card5cover").show();
                 break;        
         
         case 6: sym.$("card6").animate({top: "+=40px"})
                 sym.$("card6cover").show();
                 break;        
         
         case 7: sym.$("card7").animate({top: "+=40px"})
                 sym.$("card7cover").show();
                 break;        
         
         case 8: sym.$("card8").animate({top: "+=40px"})
                 sym.$("card8cover").show();
                 break;
         
         case 9: sym.$("card9").animate({top: "+=40px"})
                 sym.$("card9cover").show();
                 break;
         
         
         }
         
         seki=r*2
         
         sym.$("siki2").html(2);
         
         
         sym.$("Systemplus").html(seki);
         
         sym.$("card2").animate({top: "-=40px"})
         sym.$("card2cover").hide();
         
         
         sym.$("okbutton").show();
         
         
         
         tds.play();
         
         
            sym.$("siki2").css("color","#ff7300");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card1cover}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       switch(seki/r){
         
         case 0: break;
         
         case 2: sym.$("card2").animate({top: "+=40px"})
                 sym.$("card2cover").show();
                 break;
         
         case 3: sym.$("card3").animate({top: "+=40px"})
                 sym.$("card3cover").show();
                 break;
         
         case 4: sym.$("card4").animate({top: "+=40px"})
                 sym.$("card4cover").show();
                 break;        
         
         case 5: sym.$("card5").animate({top: "+=40px"})
                 sym.$("card5cover").show();
                 break;        
         
         case 6: sym.$("card6").animate({top: "+=40px"})
                 sym.$("card6cover").show();
                 break;        
         
         case 7: sym.$("card7").animate({top: "+=40px"})
                 sym.$("card7cover").show();
                 break;        
         
         case 8: sym.$("card8").animate({top: "+=40px"})
                 sym.$("card8cover").show();
                 break;
         
         case 9: sym.$("card9").animate({top: "+=40px"})
                 sym.$("card9cover").show();
                 break;
         
         
         }
         
         seki=r*1
         
         sym.$("siki2").html(1);
         
         
         sym.$("Systemplus").html(seki);
         
         sym.$("card1").animate({top: "-=40px"})
         sym.$("card1cover").hide();
         
         
         sym.$("okbutton").show();
         
         
         
         tds.play();
         
         
            sym.$("siki2").css("color","#ff7300"); 

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_drowbutton}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}        sym.$("sikiCP1").css("color","#ff7300");
            sym.$("siki1").css("color","#ff7300");
            sym.$("sikiCP2").css("color","#ff7300");
            sym.$("sikiCP3").css("color","#ff7300");
          
         sym.$("center").show();
         sym.$("center2").show();
         sym.$("centeraka").hide();
         sym.$("center2aka").hide();
         sym.$("centerdodai").hide();
         sym.$("center2dodai").hide();
         //自分側の山札の数字を決める
         sym.$("hinntobutton").show();
         
         do{
         
         n = Math.floor(Math.random()*9);
         h = Math.floor(Math.random()*9);
         
         r=n+1;
         j=h+1;
         
         cup=Math.abs(r-j);
         
         }while(cup>3);
         
         tdh.play();
         
         sym.$("siki1").html(r);
         sym.$("sikiCP2").html(j);
         
         sym.$("drowbutton").hide();
         
         
         
         /*
         sym.$("cardscover2").show();	
         
         sym.$("upbutton").show();
         sym.$("downbutton").show();
         sym.$("kakeOKbutton").show();	
         */
         
         switch(j){
         
         case 1: sym.$("kuro1").show();
                                       break;
         
         case 2: sym.$("kuro2").show();
                                       break;
         
         case 3: sym.$("kuro3").show();
                                       break; 
         
         case 4: sym.$("kuro4").show();
                                       break;                                                           
         
         case 5: sym.$("kuro5").show();
                                       break;
         
         case 6: sym.$("kuro6").show();
                                       break;
         
         case 7: sym.$("kuro7").show();
                                       break;
         
         case 8: sym.$("kuro8").show();
                                       break; 
         
         case 9: sym.$("kuro9").show();
                                       break;                                                                                         
         }
         
         switch(r){
         
         case 1: sym.$("hato1").show();
                                       break;
         
         case 2: sym.$("hato2").show();
                                       break;
         
         case 3: sym.$("hato3").show();
                                       break; 
         
         case 4: sym.$("hato4").show();
                                       break;                                                           
         
         case 5: sym.$("hato5").show();
                                       break;
         
         case 6: sym.$("hato6").show();
                                       break;
         
         case 7: sym.$("hato7").show();
                                       break;
         
         case 8: sym.$("hato8").show();
                                       break; 
         
         case 9: sym.$("hato9").show();
                                       break;                                                                                         
         }
         
         
         
         
         
         /*sym.$("Text2").html("かけ金を決めてね！");*/
         
         
         
         
         
         	yamaCP=j+3
         
         
         	if(yamaCP-r<3){
         	baisuu=10
         	}else{
         	if(yamaCP-r==3){
         	baisuu=15
         	}else{
         	if(yamaCP-r>3){
         	baisuu=20
            }
            }
            }
         
            yamaYou=r+3
         
         
         	if(yamaYou-j<3){
         	CPbaisuu=10
         	}else{
         	if(yamaYou-j==3){
         	CPbaisuu=15
         	}else{
         	if(yamaYou-j>3){
         	CPbaisuu=20
         	}
            }
            }
         
         
         	var kake = sym.getVariable("kakekinn");
         
            getcoin=baisuu*kake;
         
         
         
         	sym.$("late").html(getcoin);
         
         
          do{
            a=Math.floor(Math.random()*9);
            }while(num1[a]==1)
            num1[a]=1
            CP1=a+1
         
            //CP側の積を計算
            CPseki=CP1*j
         
            sym.$("sikiCP3").html(CPseki);
            sym.$("CPseki").html(CPseki);
            sym.$("sikiCP1").html(CP1);
         
         
             //add 4mode
         
             if(num2[0]==0){
            sym.$("card1").animate({top: "-=140px"})
            }
            if(num2[1]==0){
            sym.$("card2").animate({top: "-=140px"})
            }
            if(num2[2]==0){
            sym.$("card3").animate({top: "-=140px"})
            }
            if(num2[3]==0){
            sym.$("card4").animate({top: "-=140px"})
            }
            if(num2[4]==0){
            sym.$("card5").animate({top: "-=140px"})
            }
            if(num2[5]==0){
            sym.$("card6").animate({top: "-=140px"})
            }
            if(num2[6]==0){
            sym.$("card7").animate({top: "-=140px"})
            }
            if(num2[7]==0){
            sym.$("card8").animate({top: "-=140px"})
            }
            if(num2[8]==0){
            sym.$("card9").animate({top: "-=140px"})
            }
         
            sym.$("blue1").hide();
         
            seki=0;
         
         
         
            switch(CP1){
         
         case 1: sym.$("hintocard1").show();
                                       break;
         
         case 2: sym.$("hintocard2").show();
                                       break;
         
         case 3: sym.$("hintocard3").show();
                                       break; 
         
         case 4: sym.$("hintocard4").show();
                                       break;                                                           
         
         case 5: sym.$("hintocard5").show();
                                       break;
         
         case 6: sym.$("hintocard6").show();
                                       break;
         
         case 7: sym.$("hintocard7").show();
                                       break;
         
         case 8: sym.$("hintocard8").show();
                                       break; 
         
         case 9: sym.$("hintocard9").show();
                                       break;                                                                                         
         }
         
         CPgetcoin=CPbaisuu*1;
         
         
         sym.$("CPlate").html(CPgetcoin);
         
         
         $(function(){
         setTimeout(function(){
         
         sym.$("hintest").fadeIn(500);
         sym.$("hintext").fadeIn(500);
         sym.$("hintext").html("相手のカードは"+CP1);
         },0);
         });
         
         
         
         $(function(){
         setTimeout(function(){
         
         sym.$("hintext").fadeOut(500);
         sym.$("hintest").fadeOut(500);
         sym.$("cardscover").hide();
         
         },2000);
         });
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_smakotouch}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       smako = new Array("くすぐったいよ〜。","頑張って！","どうしたの？")
         kotoba = Math.floor(Math.random()*3);
         sym.$("Text2").html(smako[kotoba]);
         
         
         
         $(function(){
         setTimeout(function(){
         
         sym.$("smakotouch").hide();
         
         },0);
         });
         
         $(function(){
         setTimeout(function(){
         
         sym.$("smakotouch").show();
         
         },4000);
         });
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hinntobutton}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       
         sym.$("hintominmax").show();
         sym.$("hintomin").show();
         sym.$("hintomax").show();
         sym.$("hintoseki").show();
         sym.$("hinntostage").show();
         
         cpmax=num1[0]+num1[1]+num1[2]+num1[3];
         cpmin=num1[5]+num1[6]+num1[7]+num1[8];
         
         if(cpmax>cpmin){
         sym.$("hintominmax").html("大きい");
         }else{
         if(cpmax<cpmin){
         sym.$("hintominmax").html("小さい");
         }else{
         sym.$("hintominmax").html("???");
         }
         }
         
         
         if(num1[0]==0){
         sym.$("hintomax").html("1");
         sym.$("hintoseki").html("1×"+j);
         }
         if(num1[1]==0){
         sym.$("hintomax").html("2");
         sym.$("hintoseki").html("2×"+j);
         }
         if(num1[2]==0){
         sym.$("hintomax").html("3");
         sym.$("hintoseki").html("3×"+j);
         }
         if(num1[3]==0){
         sym.$("hintomax").html("4");
         sym.$("hintoseki").html("4×"+j);
         }
         if(num1[4]==0){
         sym.$("hintomax").html("5");
         sym.$("hintoseki").html("5×"+j);
         }
         if(num1[5]==0){
         sym.$("hintomax").html("6");
         sym.$("hintoseki").html("6×"+j);
         }
         if(num1[6]==0){
         sym.$("hintomax").html("7");
         sym.$("hintoseki").html("7×"+j);
         }
         if(num1[7]==0){
         sym.$("hintomax").html("8");
         sym.$("hintoseki").html("8×"+j);
         }
         if(num1[8]==0){
         sym.$("hintomax").html("9");
         sym.$("hintoseki").html("9×"+j);
         }
         
         
         
         if(num1[8]==0){
         sym.$("hintomin").html("9");
         }
         if(num1[7]==0){
         sym.$("hintomin").html("8");
         }
         if(num1[6]==0){
         sym.$("hintomin").html("7");
         }
         if(num1[5]==0){
         sym.$("hintomin").html("6");
         }
         if(num1[4]==0){
         sym.$("hintomin").html("5");
         }
         if(num1[3]==0){
         sym.$("hintomin").html("4");
         }
         if(num1[2]==0){
         sym.$("hintomin").html("3");
         }
         if(num1[1]==0){
         sym.$("hintomin").html("2");
         }
         if(num1[0]==0){
         sym.$("hintomin").html("1");
         }
         
         
         
         
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'card2'
   (function(symbolName) {   
   
   })("card2");
   //Edge symbol end:'card2'

   //=========================================================
   
   //Edge symbol: 'card3'
   (function(symbolName) {   
   
   })("card3");
   //Edge symbol end:'card3'

   //=========================================================
   
   //Edge symbol: 'card4'
   (function(symbolName) {   
   
   })("card4");
   //Edge symbol end:'card4'

   //=========================================================
   
   //Edge symbol: 'card5'
   (function(symbolName) {   
   
   })("card5");
   //Edge symbol end:'card5'

   //=========================================================
   
   //Edge symbol: 'card6'
   (function(symbolName) {   
   
   })("card6");
   //Edge symbol end:'card6'

   //=========================================================
   
   //Edge symbol: 'card7'
   (function(symbolName) {   
   
   })("card7");
   //Edge symbol end:'card7'

   //=========================================================
   
   //Edge symbol: 'card1'
   (function(symbolName) {   
   
   })("card1");
   //Edge symbol end:'card1'

   //=========================================================
   
   //Edge symbol: 'card9'
   (function(symbolName) {   
   
   })("card9");
   //Edge symbol end:'card9'

   //=========================================================
   
   //Edge symbol: 'card8'
   (function(symbolName) {   
   
   })("card8");
   //Edge symbol end:'card8'

   //=========================================================
   
   //Edge symbol: 'startbutton'
   (function(symbolName) {   
   
   })("startbutton");
   //Edge symbol end:'startbutton'

   //=========================================================
   
   //Edge symbol: 'drowbutton'
   (function(symbolName) {   
   
   })("drowbutton");
   //Edge symbol end:'drowbutton'

   //=========================================================
   
   //Edge symbol: 'CPU1'
   (function(symbolName) {   
   
   })("CPU1");
   //Edge symbol end:'CPU1'

   //=========================================================
   
   //Edge symbol: 'CPU2'
   (function(symbolName) {   
   
   })("CPU2");
   //Edge symbol end:'CPU2'

   //=========================================================
   
   //Edge symbol: 'CPU3'
   (function(symbolName) {   
   
   })("CPU3");
   //Edge symbol end:'CPU3'

   //=========================================================
   
   //Edge symbol: 'CPU4'
   (function(symbolName) {   
   
   })("CPU4");
   //Edge symbol end:'CPU4'

   //=========================================================
   
   //Edge symbol: 'CPU5'
   (function(symbolName) {   
   
   })("CPU5");
   //Edge symbol end:'CPU5'

   //=========================================================
   
   //Edge symbol: 'CPU6'
   (function(symbolName) {   
   
   })("CPU6");
   //Edge symbol end:'CPU6'

   //=========================================================
   
   //Edge symbol: 'CPU7'
   (function(symbolName) {   
   
   })("CPU7");
   //Edge symbol end:'CPU7'

   //=========================================================
   
   //Edge symbol: 'CPU8'
   (function(symbolName) {   
   
   })("CPU8");
   //Edge symbol end:'CPU8'

   //=========================================================
   
   //Edge symbol: 'CPU9'
   (function(symbolName) {   
   
   })("CPU9");
   //Edge symbol end:'CPU9'

   //=========================================================
   
   //Edge symbol: 'okbutton'
   (function(symbolName) {   
   
   })("okbutton");
   //Edge symbol end:'okbutton'

   //=========================================================
   
   //Edge symbol: 'SystemContorol'
   (function(symbolName) {   
   
   })("SystemContorol");
   //Edge symbol end:'SystemContorol'

   //=========================================================
   
   //Edge symbol: 'battle'
   (function(symbolName) {   
   
   })("battle");
   //Edge symbol end:'battle'

   //=========================================================
   
   //Edge symbol: 'CPcard1'
   (function(symbolName) {   
   
   })("CPcard1");
   //Edge symbol end:'CPcard1'

   //=========================================================
   
   //Edge symbol: 'CPcard2'
   (function(symbolName) {   
   
   })("CPcard2");
   //Edge symbol end:'CPcard2'

   //=========================================================
   
   //Edge symbol: 'CPcard3'
   (function(symbolName) {   
   
   })("CPcard3");
   //Edge symbol end:'CPcard3'

   //=========================================================
   
   //Edge symbol: 'CPcard4'
   (function(symbolName) {   
   
   })("CPcard4");
   //Edge symbol end:'CPcard4'

   //=========================================================
   
   //Edge symbol: 'CPcard5'
   (function(symbolName) {   
   
   })("CPcard5");
   //Edge symbol end:'CPcard5'

   //=========================================================
   
   //Edge symbol: 'CPcard6'
   (function(symbolName) {   
   
   })("CPcard6");
   //Edge symbol end:'CPcard6'

   //=========================================================
   
   //Edge symbol: 'CPcard7'
   (function(symbolName) {   
   
   })("CPcard7");
   //Edge symbol end:'CPcard7'

   //=========================================================
   
   //Edge symbol: 'CPcard8'
   (function(symbolName) {   
   
   })("CPcard8");
   //Edge symbol end:'CPcard8'

   //=========================================================
   
   //Edge symbol: 'CPcard9'
   (function(symbolName) {   
   
   })("CPcard9");
   //Edge symbol end:'CPcard9'

   //=========================================================
   
   //Edge symbol: 'pointobar'
   (function(symbolName) {   
   
   })("pointobar");
   //Edge symbol end:'pointobar'

   //=========================================================
   
   //Edge symbol: 'プリローダー'
   (function(symbolName) {   
   
   })("プリローダー");
   //Edge symbol end:'プリローダー'

   //=========================================================
   
   //Edge symbol: 'coin'
   (function(symbolName) {   
   
   })("coin");
   //Edge symbol end:'coin'

   //=========================================================
   
   //Edge symbol: 'coinCP'
   (function(symbolName) {   
   
   })("coinCP");
   //Edge symbol end:'coinCP'

   //=========================================================
   
   //Edge symbol: 'downbutton'
   (function(symbolName) {   
   
   })("downbutton");
   //Edge symbol end:'downbutton'

   //=========================================================
   
   //Edge symbol: 'upbutton'
   (function(symbolName) {   
   
   })("upbutton");
   //Edge symbol end:'upbutton'

   //=========================================================
   
   //Edge symbol: 'kakeOKbutton'
   (function(symbolName) {   
   
   })("kakeOKbutton");
   //Edge symbol end:'kakeOKbutton'

   //=========================================================
   
   //Edge symbol: 'CPcard1aka'
   (function(symbolName) {   
   
   })("CPcard1aka");
   //Edge symbol end:'CPcard1aka'

   //=========================================================
   
   //Edge symbol: 'CPcard2aka'
   (function(symbolName) {   
   
   })("CPcard2aka");
   //Edge symbol end:'CPcard2aka'

   //=========================================================
   
   //Edge symbol: 'CPcard3aka'
   (function(symbolName) {   
   
   })("CPcard3aka");
   //Edge symbol end:'CPcard3aka'

   //=========================================================
   
   //Edge symbol: 'CPcard4aka'
   (function(symbolName) {   
   
   })("CPcard4aka");
   //Edge symbol end:'CPcard4aka'

   //=========================================================
   
   //Edge symbol: 'CPcard5aka'
   (function(symbolName) {   
   
   })("CPcard5aka");
   //Edge symbol end:'CPcard5aka'

   //=========================================================
   
   //Edge symbol: 'CPcard6aka'
   (function(symbolName) {   
   
   })("CPcard6aka");
   //Edge symbol end:'CPcard6aka'

   //=========================================================
   
   //Edge symbol: 'CPcard7aka'
   (function(symbolName) {   
   
   })("CPcard7aka");
   //Edge symbol end:'CPcard7aka'

   //=========================================================
   
   //Edge symbol: 'CPcard8aka'
   (function(symbolName) {   
   
   })("CPcard8aka");
   //Edge symbol end:'CPcard8aka'

   //=========================================================
   
   //Edge symbol: 'CPcard9aka'
   (function(symbolName) {   
   
   })("CPcard9aka");
   //Edge symbol end:'CPcard9aka'

   //=========================================================
   
   //Edge symbol: 'CPcardRecord'
   (function(symbolName) {   
   
   })("CPcardRecord");
   //Edge symbol end:'CPcardRecord'

   //=========================================================
   
   //Edge symbol: 'cardRecord'
   (function(symbolName) {   
   
   })("cardRecord");
   //Edge symbol end:'cardRecord'

   //=========================================================
   
   //Edge symbol: 'startgamen'
   (function(symbolName) {   
   
   })("startgamen");
   //Edge symbol end:'startgamen'

   //=========================================================
   
   //Edge symbol: 'smakotouch'
   (function(symbolName) {   
   
   })("smakotouch");
   //Edge symbol end:'smakotouch'

   //=========================================================
   
   //Edge symbol: 'rennsyuubutton'
   (function(symbolName) {   
   
   })("rennsyuubutton");
   //Edge symbol end:'rennsyuubutton'

   //=========================================================
   
   //Edge symbol: 'kyarasennbutton'
   (function(symbolName) {   
   
   })("kyarasennbutton");
   //Edge symbol end:'kyarasennbutton'

   //=========================================================
   
   //Edge symbol: 'gamestartbutton'
   (function(symbolName) {   
   
   })("gamestartbutton");
   //Edge symbol end:'gamestartbutton'

   //=========================================================
   
   //Edge symbol: 'rennsyuustage'
   (function(symbolName) {   
      Symbol.bindElementAction(compId, symbolName, "${_drowbuttonCopy}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       
         sym.$("hukidashi").show();
         sym.$("introduse").show();
         sym.$("next").show();
         sym.$("bigcover").show();
         
         
         
         
         sym.$("centerakaCopy").hide();
         sym.$("center2akaCopy").hide();
         sym.$("centerdodaiCopy2").hide();
         sym.$("center2dodaiCopy2").hide();
         
         sym.$("drowbuttonCopy").hide();
         
         sym.$("cardscoverCopy").hide();
         sym.$("cardscover2Copy").show();	
         
         sym.$("upbuttonCopy").show();
         sym.$("downbuttonCopy").show();
         sym.$("kakeOKbuttonCopy").show();	
         
         
         
         
         if(k==2){
         
         sym.$("kuro2Copy").show();
         sym.$("hato5Copy").show();
         
         
         sym.$("lateCopy").html("×"+2);
         
         sym.$("CPlateCopy").html("×"+4);
         
         
         
         }else{
         
         sym.$("kuro4Copy").show();
         sym.$("hato6Copy").show();
         
         
         sym.$("lateCopy").html("×"+2);
         
         sym.$("CPlateCopy").html("×"+4);
         
         }
         
         
         
         	
         
         
         tdh.play();
         
         
         
         
         

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_kakeOKbuttonCopy}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       
         sym.$("cardscover2Copy").hide();
         sym.$("kakeOKbuttonCopy").hide();
         sym.$("upbuttonCopy").hide();
         sym.$("downbuttonCopy").hide();
         sym.$("reeetoboxCopy").hide();
         sym.$("lateCopy").hide();
         sym.$("CPlateCopy").hide();
         
         
         
         kakeok.play();

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_okbuttonCopy}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       
         switch(me){
         
         case 7: sym.$("card7Copy").animate({top: "-=178px"})
                 sym.$("card7Copy").animate({left: "+=115px"})
         
                 sym.$("CPcard9akaCopy").hide();
                 sym.$("CPcard9Copy").animate({top: "+=227px"})
                 sym.$("CPcard9Copy").animate({left: "-=508px"})
         
                 break;
         
         case 4: sym.$("card4Copy").animate({top: "-=178px"})
                 sym.$("card4Copy").animate({left: "+=313px"})
         
                 sym.$("CPcard8akaCopy").hide();
                 sym.$("CPcard8Copy").animate({top: "+=227px"})
                 sym.$("CPcard8Copy").animate({left: "-=442px"})
                 sym.$("CPsekiCopy").html(16);
                 sym.$("SystemplusCopy").html(20);
                 break;
         
         
         
         
         }
         
         
         
         
         tdh.play();
         
         
         
         sym.$("okbuttonCopy").hide();
         
            //アニメーションの開始
            sym.play();

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_card7coverCopy}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       
         sym.$("card7Copy").animate({top: "-=40px"})
         sym.$("card7coverCopy").hide();
         
         sym.$("okbuttonCopy").show();
         
         
         me=7
         
         tds.play();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
      
      
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_upbuttonCopy}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       var kake = sym.getVariable("kakekinnCopy");
         
         	kake = kake + 1;
         	if(kake>5){
         		kake=1;
         	}
         
         sym.setVariable("kakekinnCopy", kake);
         sym.$("kakekinntxtCopy").html("× "+ kake);
         
         
         if(kake==1){
         
         coindown.play();
         
         }else{
         
         
         coinup.play();
         
         
         }

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_downbuttonCopy}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       var kake = sym.getVariable("kakekinnCopy");
         
         	kake = kake - 1;
         	if(kake<1){
         		kake=5;
         	}
         
         sym.setVariable("kakekinnCopy", kake);
         sym.$("kakekinntxtCopy").html("× "+ kake);
         
         if(kake==5){
         
         
         coinup.play();
         
         }else{
         
         
         coindown.play();
         }

      });
      //Edge binding end
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
      
      
         sym.$("coverCopy").show();
      
      
      
         sym.$("katiCopy").show();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
            sym.$("coverCopy").hide();
            
            sym.$("katiCopy").hide();
            
            switch(me){
            
            case 7: sym.$("card7Copy").animate({left: "+=300px"})
                     sym.$("CPcard9Copy").animate({left: "-=340px"}) 
                     break;
            
            case 4: sym.$("card4Copy").animate({left: "+=240px"})
                    sym.$("CPcard8Copy").animate({left: "-=320px"}) 
                    break;
            
            
            
            
            }
            

      });
      //Edge binding end
      
      
      
      
      
      
      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         k=2
         
         
         sym.$("kuro4Copy").hide();
         sym.$("hato6Copy").hide();
         
         sym.$("centerCopy").hide();
         sym.$("center2Copy").hide();
         sym.$("centerakaCopy").show();
         sym.$("center2akaCopy").show();
         sym.$("centerdodaiCopy2").show();
         sym.$("center2dodaiCopy2").show();
         
         
         
         
         
         sym.play(0);
         
         
         
         
         sym.$("drowbuttonCopy").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_smakoCopy}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       k=1;
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card4coverCopy}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       sym.$("card4Copy").animate({top: "-=40px"})
         sym.$("card4coverCopy").hide();
         
         sym.$("okbuttonCopy").show();
         
         
         me=4
         
         tds.play();

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_next}", "touchstart", function(sym, e) {
         
         sym.$("hukidashi").hide();
         sym.$("introduse").hide();
         sym.$("next").hide();
         sym.$("bigcover").hide();

      });
      //Edge binding end

   })("rennsyuustage");
   //Edge symbol end:'rennsyuustage'

   //=========================================================
   
   //Edge symbol: 'pointobar_1'
   (function(symbolName) {   
   
   })("pointobar_1");
   //Edge symbol end:'pointobar_1'

   //=========================================================
   
   //Edge symbol: 'rennsyuuend'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "touchstart", function(sym, e) {
         rennsyuuend.deleteSymbol();
         rennsyuustage.deleteSymbol();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text}", "touchstart", function(sym, e) {
         rennsyuuend.deleteSymbol();
         rennsyuustage.deleteSymbol();
         
         
         
         
         // insert code to be run when a user touches the object (for touch devices only)

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       rennsyuuend.deleteSymbol();
         rennsyuustage.deleteSymbol();
         
         
         
         
         // insert code to be run when a user touches the object (for touch devices only)

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       rennsyuuend.deleteSymbol();
         rennsyuustage.deleteSymbol();

      });
      //Edge binding end

   })("rennsyuuend");
   //Edge symbol end:'rennsyuuend'

   //=========================================================
   
   //Edge symbol: 'reeetobox'
   (function(symbolName) {   
   
   })("reeetobox");
   //Edge symbol end:'reeetobox'

   //=========================================================
   
   //Edge symbol: 'gamestartgamenn'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.playReverse();
         // 指定した位置からタイムラインを再生 (ミリ秒またはラベル)
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

   })("gamestartgamenn");
   //Edge symbol end:'gamestartgamenn'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'sikispace'
   (function(symbolName) {   
   
   })("sikispace");
   //Edge symbol end:'sikispace'

   //=========================================================
   
   //Edge symbol: 'StageT'
   (function(symbolName) {   
   
   })("StageT");
   //Edge symbol end:'StageT'

   //=========================================================
   
   //Edge symbol: 'background_cover02'
   (function(symbolName) {   
   
   })("background_cover02");
   //Edge symbol end:'background_cover02'

   //=========================================================
   
   //Edge symbol: 'sikispaceCP'
   (function(symbolName) {   
   
   })("sikispaceCP");
   //Edge symbol end:'sikispaceCP'

   //=========================================================
   
   //Edge symbol: 'Next'
   (function(symbolName) {   
   
   })("Next");
   //Edge symbol end:'Next'

   //=========================================================
   
   //Edge symbol: 'hinntobutton'
   (function(symbolName) {   
   
   })("hinntobutton");
   //Edge symbol end:'hinntobutton'

   //=========================================================
   
   //Edge symbol: 'kettei'
   (function(symbolName) {   
   
   })("kettei");
   //Edge symbol end:'kettei'

   //=========================================================
   
   //Edge symbol: 'kaminari'
   (function(symbolName) {   
   
   })("kaminari");
   //Edge symbol end:'kaminari'

   //=========================================================
   
   //Edge symbol: 'bonnou'
   (function(symbolName) {   
   
   })("bonnou");
   //Edge symbol end:'bonnou'

   //=========================================================
   
   //Edge symbol: 'penpen'
   (function(symbolName) {   
   
   })("penpen");
   //Edge symbol end:'penpen'

   //=========================================================
   
   //Edge symbol: 'smao'
   (function(symbolName) {   
   
   })("smao");
   //Edge symbol end:'smao'

   //=========================================================
   
   //Edge symbol: 'smako'
   (function(symbolName) {   
   
   })("smako");
   //Edge symbol end:'smako'

   //=========================================================
   
   //Edge symbol: 'end_return'
   (function(symbolName) {   
   
      

   })("end_return");
   //Edge symbol end:'end_return'

   //=========================================================
   
   //Edge symbol: 'hinntostage'
   (function(symbolName) {   
   
      

   })("hinntostage");
   //Edge symbol end:'hinntostage'

   //=========================================================
   
   //Edge symbol: 'kamihubukiafter'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         
         

      });
      //Edge binding end

   })("kamihubukiafter");
   //Edge symbol end:'kamihubukiafter'

   //=========================================================
   
   //Edge symbol: 'setumei'
   (function(symbolName) {   
   
   })("setumei");
   //Edge symbol end:'setumei'

   //=========================================================
   
   //Edge symbol: 'capuchar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         sym.playReverse(14000);
         

      });
      //Edge binding end

   })("capuchar");
   //Edge symbol end:'capuchar'

   //=========================================================
   
   //Edge symbol: 'kyara'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("kyara");
   //Edge symbol end:'kyara'

   //=========================================================
   
   //Edge symbol: 'kyaraCP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("kyaraCP");
   //Edge symbol end:'kyaraCP'

   //=========================================================
   
   //Edge symbol: 'slide1'
   (function(symbolName) {   
   
   })("slide1");
   //Edge symbol end:'slide1'

   //=========================================================
   
   //Edge symbol: 'slide2'
   (function(symbolName) {   
   
   })("slide2");
   //Edge symbol end:'slide2'

   //=========================================================
   
   //Edge symbol: 'slide3'
   (function(symbolName) {   
   
   })("slide3");
   //Edge symbol end:'slide3'

   //=========================================================
   
   //Edge symbol: 'next'
   (function(symbolName) {   
   
   })("next");
   //Edge symbol end:'next'

   //=========================================================
   
   //Edge symbol: 'introduse'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         
         sym.$("introduse").html("NewText");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("introduse");
   //Edge symbol end:'introduse'

   //=========================================================
   
   //Edge symbol: 'rennsyuustage_1'
   (function(symbolName) {   
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
//シンボル変数の値を設定
         
sym.setVariable("kakekinnCopy", 1);
         
sym.setVariable("nextcounter", 1);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_next}", "touchstart", function(sym, e) {
         //シンボル変数の値を取得
         var komesuu = sym.getVariable("nextcounter");
         
         switch(komesuu){
         
         case 1:　sym.$("text").html("かけ算カードゲームは");
                                                     break;
         
         case 2:　sym.$("text").html("あいてのひいた数×えらんだ数の答えと");
                                                    break;
         
         case 3:　sym.$("text").html("自分のひいた数×えらんだ数の答えを");
                                                     break;
         
         case 4: sym.$("text").html("くらべて、しょうぶするゲームです。");
                                                    break; 
         
         
         case 5:　sym.$("text").html("あいてより自分の数が大きければかちです");
                                                     break;
         
         
         case 6:　sym.$("text").html("では、ひくボタンをおして");
                                                      break;
         
         
         case 7:  sym.$("text").html("れんしゅうをはじめよう！");
                                                 break;
         
         
         case 8:  sym.$("next").hide();
                 sym.$("text").hide();
                 sym.$("hukidasiCopy").hide();
                 sym.$("NOTtouch").hide();       break;
         
         
         
         case 9:  sym.$("next").hide();
                 sym.$("text").hide();
                 sym.$("hukidasiCopy").hide();
                 sym.$("NOTtouch").hide();
                 sym.$("blue2").show();         break;
         
         case 10:sym.$("blue2").hide();
         		  sym.$("next").hide();
                 sym.$("text").hide();
                 sym.$("hukidasiCopy").hide();
                 sym.$("NOTtouch").hide();       break;
         
         case 11: sym.$("text").html("れんしゅうをおわるをおしてね！");break;
         　　　　　　　　　　　　　　　　　　　　　　　　　　　　
         
         case 12:  sym.$("next").hide();
                  sym.$("text").hide();
                  sym.$("hukidasiCopy").hide();
                  sym.$("NOTtouch").hide();       
                  rennsyuuend = sym.createChildSymbol("rennsyuuend", "Stage");
         			rennsyuuend.getSymbolElement().css({"top":"300px", "left":"50px"});
                  break;
         
         case 13: sym.$("text").html("ゲームではおわる時の");break;
         
         case 14: sym.$("text").html("コインでしょうぶがきまるよ！");break;
         
         case 15: sym.$("text").html("では、ゲームをはじめよう！");break;
         
         case 16:  sym.$("blue").show();break;
         
         
         }
         
         
         
         
         
         
         
         
         komesuu=komesuu+1;
         console.log(komesuu);
         //シンボル変数の値を設定
         sym.setVariable("nextcounter", komesuu);
         

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_kakeOKbuttonCopy}", "touchstart", function(sym, e) {
      
         sym.$("cardscover2Copy").hide();
         sym.$("kakeOKbuttonCopy").hide();
         sym.$("upbuttonCopy").hide();
         sym.$("downbuttonCopy").hide();
         sym.$("reeetoboxCopy").hide();
         sym.$("lateCopy").hide();
         sym.$("CPlateCopy").hide();
         sym.$("next").show();
         sym.$("text").show();
         sym.$("hukidasiCopy").show();
         sym.$("NOTtouch").show();
      
         sym.$("text").html("つぎは７のカードをえらんでね！");
      
         kakeok.play();
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_upbuttonCopy}", "touchstart", function(sym, e) {
         var kake = sym.getVariable("kakekinnCopy");
      
         	kake = kake + 1;
         	if(kake>5){
         		kake=1;
         	}
      
         sym.setVariable("kakekinnCopy", kake);
         sym.$("kakekinntxtCopy").html("× "+ kake);
      
      
         if(kake==1){
      
      
         coindown.play();
      
         }else{
      
      
         coinup.play();
      
      
         }
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_downbuttonCopy}", "touchstart", function(sym, e) {
         var kake = sym.getVariable("kakekinnCopy");
      
         	kake = kake - 1;
         	if(kake<1){
         		kake=5;
         	}
      
         sym.setVariable("kakekinnCopy", kake);
         sym.$("kakekinntxtCopy").html("× "+ kake);
      
         if(kake==5){
      
      
      
         coinup.play();
      
         }else{
      
      
         coindown.play();
         }
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_okbuttonCopy}", "touchstart", function(sym, e) {
         sym.$("card7Copy").animate({top: "-=178px"})
         sym.$("card7Copy").animate({left: "+=115px"})
      
         sym.$("CPcard9akaCopy").hide();
         sym.$("CPcard9Copy").animate({top: "+=227px"})
         sym.$("CPcard9Copy").animate({left: "-=508px"})
      
      
      
         tdh.play();
            //アニメーションの開始
            sym.play();
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_card7coverCopy}", "touchstart", function(sym, e) {
      
         sym.$("card7Copy").animate({top: "-=40px"})
         sym.$("card7coverCopy").hide();
         sym.$("blue2").hide();
         sym.$("okbuttonCopy").show();
         sym.$("next").show();
         sym.$("text").show();
         sym.$("hukidasiCopy").show();
         sym.$("NOTtouch").show();
      
         sym.$("text").html("ゲームでは自分でカードをえらべるよ");
      
         tds.play();
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_drowbuttonCopy}", "touchstart", function(sym, e) {
         
         sym.$("centerCopy").show();
         sym.$("center2Copy").show();
         sym.$("centerakaCopy").hide();
         sym.$("center2akaCopy").hide();
         sym.$("centerdodaiCopy2").hide();
         sym.$("center2dodaiCopy2").hide();
         
         sym.$("drowbuttonCopy").hide();
         
         sym.$("cardscoverCopy").hide();
         
         sym.$("next").show();
         sym.$("text").show();
         sym.$("hukidasiCopy").show();
         sym.$("NOTtouch").show();
         
         sym.$("text").html("カードを選んでね！");
         
         sym.$("cardscover2Copy").show();	
         
         sym.$("upbuttonCopy").show();
         sym.$("downbuttonCopy").show();
         sym.$("kakeOKbuttonCopy").show();	
         
         sym.$("centerCopy").html(6);
         sym.$("center2Copy").html(4);
         
         sym.$("kuro4Copy").show();
         sym.$("hato6Copy").show();
         
         
         sym.$("lateCopy").html("×"+2);
         
         sym.$("CPlateCopy").html("×"+5);
         
         
         sym.$("reeetoboxCopy").show();
         sym.$("lateCopy").show();
         sym.$("CPlateCopy").show();	
         
         
         
         tdh.play();
         
         sym.$("text03").show();
         sym.$("textcover03").show();
         sym.$("background_cover01").show();
         sym.$("next").show();
         sym.$("next_background").show();
         sym.$("hukidasiCopy").show();
         
         
         sym.$("cardscover2Copy").hide();
         sym.$("kakeOKbuttonCopy").hide();
         sym.$("upbuttonCopy").hide();
         sym.$("downbuttonCopy").hide();
         sym.$("reeetoboxCopy").hide();
         sym.$("lateCopy").hide();
         sym.$("CPlateCopy").hide();
         sym.$("next").show();
         sym.$("text").show();
         sym.$("hukidasiCopy").show();
         sym.$("NOTtouch").show();
         
         sym.$("text").html("つぎは７のカードをえらんでね！");
         
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
      
      
      
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
      
      
         sym.$("coverCopy").show();
      
      
      
         sym.$("katiCopy").show();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
            sym.$("coverCopy").hide();
      
      
            sym.$("katiCopy").hide();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
            sym.$("coverCopy").hide();
      
      
            sym.$("katiCopy").hide();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.$("next").show();
         sym.$("text").show();
         sym.$("hukidasiCopy").show();
         sym.$("NOTtouch").show();
      
         sym.$("text").html("あそび方がわかったかな？");
      
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       //シンボル変数の値を取得
         var komesuu = sym.getVariable("nextcounter");
         
         switch(komesuu){
         
         case 1:　sym.$("text").html("かけ算カードゲームは");
                                                     break;
         
         case 2:　sym.$("text").html("あいてのひいた数×えらんだ数の答えと");
                                                    break;
         
         case 3:　sym.$("text").html("自分のひいた数×えらんだ数の答えを");
                                                     break;
         
         case 4: sym.$("text").html("くらべて、しょうぶするゲームです。");
                                                    break; 
         
         
         case 5:　sym.$("text").html("あいてより自分の数が大きければかちです");
                                                     break;
         
         
         case 6:　sym.$("text").html("では、ひくボタンをおして");
                                                      break;
         
         
         case 7:  sym.$("text").html("れんしゅうをはじめよう！");
                                                 break;
         
         
         case 8:  sym.$("next").hide();
                 sym.$("text").hide();
                 sym.$("hukidasiCopy").hide();
                 sym.$("NOTtouch").hide();       break;
         
         
         
         case 9:  sym.$("next").hide();
                 sym.$("text").hide();
                 sym.$("hukidasiCopy").hide();
                 sym.$("NOTtouch").hide();
                 sym.$("blue2").show();         break;
         
         case 10:sym.$("blue2").hide();
         		  sym.$("next").hide();
                 sym.$("text").hide();
                 sym.$("hukidasiCopy").hide();
                 sym.$("NOTtouch").hide();       break;
         
         case 11: sym.$("text").html("れんしゅうをおわるをおしてね！");break;
         　　　　　　　　　　　　　　　　　　　　　　　　　　　　
         
         case 12:  sym.$("next").hide();
                  sym.$("text").hide();
                  sym.$("hukidasiCopy").hide();
                  sym.$("NOTtouch").hide();       
                  rennsyuuend = sym.createChildSymbol("rennsyuuend", "Stage");
         			rennsyuuend.getSymbolElement().css({"top":"300px", "left":"50px"});
                  break;
         
         case 13: sym.$("text").html("ゲームではおわる時の");break;
         
         case 14: sym.$("text").html("コインでしょうぶがきまるよ！");break;
         
         case 15: sym.$("text").html("では、ゲームをはじめよう！");break;
         
         case 16:  sym.$("blue").show();break;
         
         
         }
         
         
         
         
         
         
         
         
         komesuu=komesuu+1;
         console.log(komesuu);
         //シンボル変数の値を設定
         sym.setVariable("nextcounter", komesuu);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kakeOKbuttonCopy}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       // マウスクリックのコードをここに挿入します
         
         sym.$("cardscover2Copy").hide();
         sym.$("kakeOKbuttonCopy").hide();
         sym.$("upbuttonCopy").hide();
         sym.$("downbuttonCopy").hide();
         sym.$("reeetoboxCopy").hide();
         sym.$("lateCopy").hide();
         sym.$("CPlateCopy").hide();
         sym.$("next").show();
         sym.$("text").show();
         sym.$("hukidasiCopy").show();
         sym.$("NOTtouch").show();
         
         sym.$("text").html("つぎは７のカードをえらんでね！");
         
         kakeok.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_upbuttonCopy}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       // マウスクリックのコードをここに挿入します
         var kake = sym.getVariable("kakekinnCopy");
         
         	kake = kake + 1;
         	if(kake>5){
         		kake=1;
         	}
         
         sym.setVariable("kakekinnCopy", kake);
         sym.$("kakekinntxtCopy").html("× "+ kake);
         
         
         if(kake==1){
         
         
         coindown.play();
         
         }else{
         
         
         coinup.play();
         
         
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_downbuttonCopy}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       // マウスクリックのコードをここに挿入します
         var kake = sym.getVariable("kakekinnCopy");
         
         	kake = kake - 1;
         	if(kake<1){
         		kake=5;
         	}
         
         sym.setVariable("kakekinnCopy", kake);
         sym.$("kakekinntxtCopy").html("× "+ kake);
         
         if(kake==5){
         
         
         
         coinup.play();
         
         }else{
         
         
         coindown.play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_okbuttonCopy}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       // マウスクリックのコードをここに挿入します
         sym.$("card7Copy").animate({top: "-=178px"})
         sym.$("card7Copy").animate({left: "+=115px"})
         
         sym.$("CPcard9akaCopy").hide();
         sym.$("CPcard9Copy").animate({top: "+=227px"})
         sym.$("CPcard9Copy").animate({left: "-=508px"})
         
         
         
         tdh.play();
            //アニメーションの開始
            sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card7coverCopy}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       // マウスクリックのコードをここに挿入します
         
         sym.$("card7Copy").animate({top: "-=40px"})
         sym.$("card7coverCopy").hide();
         sym.$("blue2").hide();
         sym.$("okbuttonCopy").show();
         sym.$("next").show();
         sym.$("text").show();
         sym.$("hukidasiCopy").show();
         sym.$("NOTtouch").show();
         
         sym.$("text").html("ゲームでは自分でカードをえらべるよ");
         
         tds.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_drowbuttonCopy}", "click", function(sym, e) {
  if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}       // マウスクリックのコードをここに挿入します
         
         sym.$("centerCopy").show();
         sym.$("center2Copy").show();
         sym.$("centerakaCopy").hide();
         sym.$("center2akaCopy").hide();
         sym.$("centerdodaiCopy2").hide();
         sym.$("center2dodaiCopy2").hide();
         
         sym.$("drowbuttonCopy").hide();
         
         sym.$("cardscoverCopy").hide();
         
         sym.$("next").show();
         sym.$("text").show();
         sym.$("hukidasiCopy").show();
         sym.$("NOTtouch").show();
         
         sym.$("text").html("カードを選んでね！");
         
         sym.$("cardscover2Copy").show();	
         
         sym.$("upbuttonCopy").show();
         sym.$("downbuttonCopy").show();
         sym.$("kakeOKbuttonCopy").show();	
         
         sym.$("centerCopy").html(6);
         sym.$("center2Copy").html(4);
         
         sym.$("kuro4Copy").show();
         sym.$("hato6Copy").show();
         
         
         sym.$("lateCopy").html("×"+2);
         
         sym.$("CPlateCopy").html("×"+5);
         
         
         sym.$("reeetoboxCopy").show();
         sym.$("lateCopy").show();
         sym.$("CPlateCopy").show();	
         
         
         
         tdh.play();
         
         sym.$("text03").show();
         sym.$("textcover03").show();
         sym.$("background_cover01").show();
         sym.$("next").show();
         sym.$("next_background").show();
         sym.$("hukidasiCopy").show();
         
         
         sym.$("cardscover2Copy").hide();
         sym.$("kakeOKbuttonCopy").hide();
         sym.$("upbuttonCopy").hide();
         sym.$("downbuttonCopy").hide();
         sym.$("reeetoboxCopy").hide();
         sym.$("lateCopy").hide();
         sym.$("CPlateCopy").hide();
         sym.$("next").show();
         sym.$("text").show();
         sym.$("hukidasiCopy").show();
         sym.$("NOTtouch").show();
         
         sym.$("text").html("つぎは７のカードをえらんでね！");
         

      });
      //Edge binding end

   })("rennsyuustage_1");
   //Edge symbol end:'rennsyuustage_1'

   //=========================================================
   
   //Edge symbol: 'next_1'
   (function(symbolName) {   
   
   })("next_1");
   //Edge symbol end:'next_1'

   //=========================================================
   
   //Edge symbol: 'pointobar_2'
   (function(symbolName) {   
   
   })("pointobar_2");
   //Edge symbol end:'pointobar_2'

   //=========================================================
   
   //Edge symbol: 'shot1p'
   (function(symbolName) {   
   
   })("shot1p");
   //Edge symbol end:'shot1p'

   //=========================================================
   
   //Edge symbol: 'shot2p'
   (function(symbolName) {   
   
   })("shot2p");
   //Edge symbol end:'shot2p'

   //=========================================================
   
   //Edge symbol: 'shot3p'
   (function(symbolName) {   
   
   })("shot3p");
   //Edge symbol end:'shot3p'

   //=========================================================
   
   //Edge symbol: 'hintest'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("hintest");
   //Edge symbol end:'hintest'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'house'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_housecover}", "click", function(sym, e) {
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("../../../index.html", "_self");
         

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

})(jQuery, AdobeEdge, "EDGE-8827326");