/***********************
* Adobe Edge Animate コンポジションアクション
*
* このファイルを編集する際には注意が必要です。必ず関数シグニチャと
* 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
* 操作可能な状態にしておいてください。 
*
***********************/
var riiden = new Howl({
  urls: ['audio/mori2_01.mp3'],
  autoplay: false,
  loop: true,
  volume: 0.3,
});

var collect = new Howl({
  urls: ['audio/COLLECT.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.3,
});

var piyo = new Howl({
  urls: ['audio/piyo.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.1,
});

var wrong_01 = new Howl({
  urls: ['audio/wrong_01.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.4,
});

var finish = new Howl({
  urls: ['audio/finish.mp3'],
  autoplay: false,
  loop: true,
  volume: 0.1,
});

var COLLECT = 0;
var FALSE = 0;
var PUSH_START = 0;

function deleteFalse(sym){
	sym.getComposition().getStage().$("False").hide();
	return;
}

(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         riiden.onload();
         piyo.onload();
         collect.onload();
         wrong_01.onload();
         finish.onload();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Exit_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         location.reload();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Exit_cover}", "touchstart", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         location.reload();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'start'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_start_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         /*		りーでん氏の素晴らしいBGMを再生させていただく		*/
         riiden.play();
         
         /*		ゲーム前の画面表示	*/
         sym.getComposition().getStage().$("Exit_cover").show();
         var GAME_BACKGROUND = sym.getComposition().getStage().$("GAME_BACKGROUND").show();
         var MENU = sym.getComposition().getStage().$("MENU").hide();
         var home = sym.getComposition().getStage().$("home").hide();
         var AnsNumver_text = sym.getComposition().getStage().$("AnsNumber_text").show();
         var home3 = sym.getComposition().getStage().$("home3").show();
         sym.getComposition().getStage().$("button_cover2").show();
         
         /*		問題の設定		*/
         var Select = Math.floor( Math.random() * 10);
         
         /*		問題の表示		*/
         if(Select == 0){
         	var Apple3_game = sym.getComposition().getStage().$("Apple3_game").show();
         }
         if(Select == 1){
         	var Apple4_game = sym.getComposition().getStage().$("Apple4_game").show();
         }
         if(Select == 2){
         	var Apple51_game = sym.getComposition().getStage().$("Apple51_game").show();
         }
         if(Select == 3){
         	var Apple52_game = sym.getComposition().getStage().$("Apple52_game").show();
         }
         if(Select == 4){
         	var Apple61_game = sym.getComposition().getStage().$("Apple61_game").show();
         }
         if(Select == 5){
         	var Apple62_game = sym.getComposition().getStage().$("Apple62_game").show();
         }
         if(Select == 6){
         	var Apple71_game = sym.getComposition().getStage().$("Apple71_game").show();
         }
         if(Select == 7){
         	var Apple72_game = sym.getComposition().getStage().$("Apple72_game").show();
         }
         if(Select == 8){
         	var Apple8_game = sym.getComposition().getStage().$("Apple8_game").show();
         }
         if(Select == 9){
         	var Apple9_game = sym.getComposition().getStage().$("Apple9_game").show();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_start_cover}", "touchstart", function(sym, e) {
         /*		りーでん氏の素晴らしいBGMを再生させていただく		*/
         riiden.play();
         
         /*		ゲーム前の画面表示	*/
         sym.getComposition().getStage().$("Exit_cover").show();
         var GAME_BACKGROUND = sym.getComposition().getStage().$("GAME_BACKGROUND").show();
         var MENU = sym.getComposition().getStage().$("MENU").hide();
         var home = sym.getComposition().getStage().$("home").hide();
         var AnsNumver_text = sym.getComposition().getStage().$("AnsNumber_text").show();
         var home3 = sym.getComposition().getStage().$("home3").show();
         sym.getComposition().getStage().$("button_cover2").show();
         
         /*		問題の設定		*/
         var Select = Math.floor( Math.random() * 10);
         
         /*		問題の表示		*/
         if(Select == 0){
         	var Apple3_game = sym.getComposition().getStage().$("Apple3_game").show();
         }
         if(Select == 1){
         	var Apple4_game = sym.getComposition().getStage().$("Apple4_game").show();
         }
         if(Select == 2){
         	var Apple51_game = sym.getComposition().getStage().$("Apple51_game").show();
         }
         if(Select == 3){
         	var Apple52_game = sym.getComposition().getStage().$("Apple52_game").show();
         }
         if(Select == 4){
         	var Apple61_game = sym.getComposition().getStage().$("Apple61_game").show();
         }
         if(Select == 5){
         	var Apple62_game = sym.getComposition().getStage().$("Apple62_game").show();
         }
         if(Select == 6){
         	var Apple71_game = sym.getComposition().getStage().$("Apple71_game").show();
         }
         if(Select == 7){
         	var Apple72_game = sym.getComposition().getStage().$("Apple72_game").show();
         }
         if(Select == 8){
         	var Apple8_game = sym.getComposition().getStage().$("Apple8_game").show();
         }
         if(Select == 9){
         	var Apple9_game = sym.getComposition().getStage().$("Apple9_game").show();
         }

      });
      //Edge binding end

   })("Start");
   //Edge symbol end:'Start'

   //=========================================================
   
   //Edge symbol: 'Title'
   (function(symbolName) {   
   
   })("Title");
   //Edge symbol end:'Title'

   //=========================================================
   
   //Edge symbol: 'Title_flash'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // 指定した位置からタイムラインを再生 (ミリ秒またはラベル)
         sym.play(0);

      });
      //Edge binding end

   })("Title_flash");
   //Edge symbol end:'Title_flash'

   //=========================================================
   
   //Edge symbol: 'flash'
   (function(symbolName) {   
   
   })("flash");
   //Edge symbol end:'flash'

   //=========================================================
   
   //Edge symbol: 'MENU'
   (function(symbolName) {   
   
   })("MENU");
   //Edge symbol end:'MENU'

   //=========================================================
   
   //Edge symbol: 'Ans'
   (function(symbolName) {   
   
   })("Ans");
   //Edge symbol end:'Ans'

   //=========================================================
   
   //Edge symbol: 'GAME_BACKGROUND'
   (function(symbolName) {   
   
   })("GAME_BACKGROUND");
   //Edge symbol end:'GAME_BACKGROUND'

   //=========================================================
   
   //Edge symbol: 'Apple3_flash'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 指定した位置でタイムラインを停止 (ミリ秒またはラベル)
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Apple3_flash");
   //Edge symbol end:'Apple3_flash'

   //=========================================================
   
   //Edge symbol: 'Apple4_flash'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 指定した位置でタイムラインを停止 (ミリ秒またはラベル)
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Apple4_flash");
   //Edge symbol end:'Apple4_flash'

   //=========================================================
   
   //Edge symbol: 'Apple51_flash'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 指定した位置でタイムラインを停止 (ミリ秒またはラベル)
         sym.stop(0);

      });
      //Edge binding end

   })("Apple51_flash");
   //Edge symbol end:'Apple51_flash'

   //=========================================================
   
   //Edge symbol: 'Apple52_flash'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 指定した位置でタイムラインを停止 (ミリ秒またはラベル)
         sym.stop(0);

      });
      //Edge binding end

   })("Apple52_flash");
   //Edge symbol end:'Apple52_flash'

   //=========================================================
   
   //Edge symbol: 'Apple61_flash'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 指定した位置でタイムラインを停止 (ミリ秒またはラベル)
         sym.stop(0);

      });
      //Edge binding end

   })("Apple61_flash");
   //Edge symbol end:'Apple61_flash'

   //=========================================================
   
   //Edge symbol: 'Apple62_flash'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("Apple62_flash");
   //Edge symbol end:'Apple62_flash'

   //=========================================================
   
   //Edge symbol: 'Apple71_flash'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 指定した位置でタイムラインを停止 (ミリ秒またはラベル)
         sym.stop(0);

      });
      //Edge binding end

   })("Apple71_flash");
   //Edge symbol end:'Apple71_flash'

   //=========================================================
   
   //Edge symbol: 'Apple72'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 指定した位置でタイムラインを停止 (ミリ秒またはラベル)
         sym.stop(0);

      });
      //Edge binding end

   })("Apple72_flash");
   //Edge symbol end:'Apple72_flash'

   //=========================================================
   
   //Edge symbol: 'Apple8_flash'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 指定した位置でタイムラインを停止 (ミリ秒またはラベル)
         sym.stop(0);

      });
      //Edge binding end

   })("Apple8_flash");
   //Edge symbol end:'Apple8_flash'

   //=========================================================
   
   //Edge symbol: 'Apple9_flash'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 指定した位置でタイムラインを停止 (ミリ秒またはラベル)
         sym.stop(0);

      });
      //Edge binding end

   })("Apple9_flash");
   //Edge symbol end:'Apple9_flash'

   //=========================================================
   
   //Edge symbol: 'Apple3_game'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${_A3start_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         sym.getSymbol("Apple3_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").play(250);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3dicision_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A3 == 3){
         	var True = sym.getComposition().getStage().$("True").show();
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	COLLECT = COLLECT + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){
         		sym.getComposition().getStage().$("FINISH").show();	
         		riiden.stop();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		finish.play();
         		sym.getComposition().getStage().getSymbol("FINISH").getSymbol("start_result").$("startVar_text").html();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3delete_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A3 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3num9_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A3 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3num8_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A3 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3num7_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A3 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3num6_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A3 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3num5_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A3 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3num4_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A3 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3num3_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A3 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3num2_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A3 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3num1_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A3 = 1;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3start_button}", "touchstart", function(sym, e) {
         sym.getSymbol("Apple3_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").play(250);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3dicision_button}", "touchstart", function(sym, e) {
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A3 == 3){
         	var True = sym.getComposition().getStage().$("True").show();
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	COLLECT = COLLECT + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){
         		sym.getComposition().getStage().$("FINISH").show();	
         		riiden.stop();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		finish.play();
         		sym.getComposition().getStage().getSymbol("FINISH").getSymbol("start_result").$("startVar_text").html();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3delete_button}", "touchstart", function(sym, e) {
         A3 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3num9_cover}", "touchstart", function(sym, e) {
         A3 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3num8_cover}", "touchstart", function(sym, e) {
         A3 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3num7_cover}", "touchstart", function(sym, e) {
         A3 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3num6_cover}", "touchstart", function(sym, e) {
         A3 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3num5_cover}", "touchstart", function(sym, e) {
         A3 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3num4_cover}", "touchstart", function(sym, e) {
         A3 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3num3_cover}", "touchstart", function(sym, e) {
         A3 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3num2_cover}", "touchstart", function(sym, e) {
         A3 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A3num1_cover}", "touchstart", function(sym, e) {
         A3 = 1;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

   })("Apple3_game");
   //Edge symbol end:'Apple3_game'

   //=========================================================
   
   //Edge symbol: 'Apple4_game'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_A4start_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         sym.getSymbol("Apple4_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").play(250);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4dicision_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A4 == 4){
         	var True = sym.getComposition().getStage().$("True").show();
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	COLLECT = COLLECT + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){
         		sym.getComposition().getStage().$("FINISH").show();	
         		riiden.stop();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		finish.play();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4delete_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A4 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4num9_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A4 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4num8_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A4 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4num7_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A4 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4num6_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A4 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_A4num4_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A4 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4num3_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A4 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4num2_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A4 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4num1_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A4 = 1;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4num5_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A4 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4start_button}", "touchstart", function(sym, e) {
         sym.getSymbol("Apple4_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").play(250);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4dicision_button}", "touchstart", function(sym, e) {
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A4 == 4){
         	var True = sym.getComposition().getStage().$("True").show();
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	COLLECT = COLLECT + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){
         		sym.getComposition().getStage().$("FINISH").show();	
         		riiden.stop();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		finish.play();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4delete_button}", "touchstart", function(sym, e) {
         A4 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4num9_cover}", "touchstart", function(sym, e) {
         A4 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4num8_cover}", "touchstart", function(sym, e) {
         A4 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4num7_cover}", "touchstart", function(sym, e) {
         A4 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4num6_cover}", "touchstart", function(sym, e) {
         A4 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4num5_cover}", "touchstart", function(sym, e) {
         A4 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4num4_cover}", "touchstart", function(sym, e) {
         A4 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4num3_cover}", "touchstart", function(sym, e) {
         A4 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4num2_cover}", "touchstart", function(sym, e) {
         A4 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A4num1_cover}", "touchstart", function(sym, e) {
         A4 = 1;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

   })("Apple4_game");
   //Edge symbol end:'Apple4_game'

   //=========================================================
   
   //Edge symbol: 'Apple51_game'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_A51start_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         sym.getSymbol("Apple51_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").play(250);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51dicision_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A51 == 5){
         	var True = sym.getComposition().getStage().$("True").show();
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	COLLECT = COLLECT + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){
         		sym.getComposition().getStage().$("FINISH").show();	
         		riiden.stop();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		finish.play();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51delete_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A51 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51num9_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A51 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51num8_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A51 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51num7_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A51 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51num6_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A51 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51num5_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A51 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51num4_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A51 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51num3_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A51 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51num2_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A51 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51num1_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A51 = 1;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51start_button}", "touchstart", function(sym, e) {
         sym.getSymbol("Apple51_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").play(250);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51dicision_button}", "touchstart", function(sym, e) {
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A51 == 5){
         	var True = sym.getComposition().getStage().$("True").show();
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	COLLECT = COLLECT + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){
         		sym.getComposition().getStage().$("FINISH").show();	
         		riiden.stop();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		finish.play();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51delete_button}", "touchstart", function(sym, e) {
         A51 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51num9_cover}", "touchstart", function(sym, e) {
         A51 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51num8_cover}", "touchstart", function(sym, e) {
         A51 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51num6_cover}", "touchstart", function(sym, e) {
         A51 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51num7_cover}", "touchstart", function(sym, e) {
         A51 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51num5_cover}", "touchstart", function(sym, e) {
         A51 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51num4_cover}", "touchstart", function(sym, e) {
         A51 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51num2_cover}", "touchstart", function(sym, e) {
         A51 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51num1_cover}", "touchstart", function(sym, e) {
         A51 = 1;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A51num3_cover}", "touchstart", function(sym, e) {
         A51 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

   })("Apple51_game");
   //Edge symbol end:'Apple51_game'

   //=========================================================
   
   //Edge symbol: 'Apple52_game'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_A52start_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         sym.getSymbol("Apple52_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").play(250);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52dicision_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A52 == 5){
         	var True = sym.getComposition().getStage().$("True").show();
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	COLLECT = COLLECT + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){
         		sym.getComposition().getStage().$("FINISH").show();	
         		riiden.stop();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		finish.play();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52delete_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A52 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52num9_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A52 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52num8_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A52 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52num7_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A52 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52num6_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A52 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52num5_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A52 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52num4_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A52 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52num3_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A52 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52num2_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A52 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52num1_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A52 = 1;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52start_button}", "touchstart", function(sym, e) {
         sym.getSymbol("Apple52_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").play(250);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52dicision_button}", "touchstart", function(sym, e) {
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A52 == 5){
         	var True = sym.getComposition().getStage().$("True").show();
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	COLLECT = COLLECT + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){
         		sym.getComposition().getStage().$("FINISH").show();	
         		riiden.stop();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		finish.play();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52delete_button}", "touchstart", function(sym, e) {
         A52 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52num9_cover}", "touchstart", function(sym, e) {
         A52 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52num8_cover}", "touchstart", function(sym, e) {
         A52 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52num7_cover}", "touchstart", function(sym, e) {
         A52 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52num6_cover}", "touchstart", function(sym, e) {
         A52 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52num5_cover}", "touchstart", function(sym, e) {
         A52 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52num4_cover}", "touchstart", function(sym, e) {
         A52 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52num3_cover}", "touchstart", function(sym, e) {
         A52 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52num2_cover}", "touchstart", function(sym, e) {
         A52 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A52num1_cover}", "touchstart", function(sym, e) {
         A52 = 1;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

   })("Apple52_game");
   //Edge symbol end:'Apple52_game'

   //=========================================================
   
   //Edge symbol: 'Apple61_game'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_A61start_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         sym.getSymbol("Apple61_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").play(250);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61dicision_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A61 == 6){
         	var True = sym.getComposition().getStage().$("True").show();
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	COLLECT = COLLECT + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){
         		sym.getComposition().getStage().$("FINISH").show();	
         		riiden.stop();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		finish.play();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61delete_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A61 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61num9_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A61 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61num8_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A61 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61num7_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A61 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61num6_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A61 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61num5_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A61 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61num4_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A61 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61num3_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A61 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61num2_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A61 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61num1_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A61 = 1;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61start_button}", "touchstart", function(sym, e) {
         sym.getSymbol("Apple61_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").play(250);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61dicision_button}", "touchstart", function(sym, e) {
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A61 == 6){
         	var True = sym.getComposition().getStage().$("True").show();
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	COLLECT = COLLECT + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){
         		sym.getComposition().getStage().$("FINISH").show();	
         		riiden.stop();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		finish.play();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61delete_button}", "touchstart", function(sym, e) {
         A61 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61num9_cover}", "touchstart", function(sym, e) {
         A61 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61num8_cover}", "touchstart", function(sym, e) {
         A61 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61num7_cover}", "touchstart", function(sym, e) {
         A61 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61num6_cover}", "touchstart", function(sym, e) {
         A61 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61num5_cover}", "touchstart", function(sym, e) {
         A61 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61num4_cover}", "touchstart", function(sym, e) {
         A61 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61num3_cover}", "touchstart", function(sym, e) {
         A61 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61num2_cover}", "touchstart", function(sym, e) {
         A61 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A61num1_cover}", "touchstart", function(sym, e) {
         A61 = 1;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

   })("Apple61_game");
   //Edge symbol end:'Apple61_game'

   //=========================================================
   
   //Edge symbol: 'Apple62_game'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_A62start_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         sym.getSymbol("Apple62_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62dicision_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A62 == 6){
         	var True = sym.getComposition().getStage().$("True").show();
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	COLLECT = COLLECT + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){
         		sym.getComposition().getStage().$("FINISH").show();	
         		riiden.stop();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		finish.play();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62delete_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A62 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62num8_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A62 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62num9_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A62 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62num7_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A62 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62num6_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A62 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62num5_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A62 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62num4_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A62 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62num3_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A62 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62num2_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A62 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62num1_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A62 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62start_button}", "touchstart", function(sym, e) {
         sym.getSymbol("Apple62_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62dicision_button}", "touchstart", function(sym, e) {
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A62 == 6){
         	var True = sym.getComposition().getStage().$("True").show();
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	COLLECT = COLLECT + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){
         		sym.getComposition().getStage().$("FINISH").show();	
         		riiden.stop();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		finish.play();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62delete_button}", "touchstart", function(sym, e) {
         A62 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62num9_cover}", "touchstart", function(sym, e) {
         A62 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62num8_cover}", "touchstart", function(sym, e) {
         A62 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62num7_cover}", "touchstart", function(sym, e) {
         A62 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62num6_cover}", "touchstart", function(sym, e) {
         A62 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62num4_cover}", "touchstart", function(sym, e) {
         A62 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62num3_cover}", "touchstart", function(sym, e) {
         A62 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62num2_cover}", "touchstart", function(sym, e) {
         A62 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62num1_cover}", "touchstart", function(sym, e) {
         A62 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A62num5_cover}", "touchstart", function(sym, e) {
         A62 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

   })("Apple62_game");
   //Edge symbol end:'Apple62_game'

   //=========================================================
   
   //Edge symbol: 'Apple71_game'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_A71start_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         sym.getSymbol("Apple71_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").play(250);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71dicision_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A71 == 7){
         	var True = sym.getComposition().getStage().$("True").show();
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	COLLECT = COLLECT + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){		
         		sym.getComposition().getStage().$("FINISH").show();	
         		riiden.stop();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		finish.play();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71delete_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A71 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71num9_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A71 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71num8_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A71 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71num7_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A71 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71num6_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A71 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71num5_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A71 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71num4_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A71 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71num3_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A71 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71num2_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A71 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71num1_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A71 = 1;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71start_button}", "touchstart", function(sym, e) {
         sym.getSymbol("Apple71_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").play(250);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71dicision_button}", "touchstart", function(sym, e) {
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A71 == 7){
         	var True = sym.getComposition().getStage().$("True").show();
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	COLLECT = COLLECT + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){		
         		sym.getComposition().getStage().$("FINISH").show();	
         		riiden.stop();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		finish.play();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71num9_cover}", "touchstart", function(sym, e) {
         A71 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71num8_cover}", "touchstart", function(sym, e) {
         A71 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71num7_cover}", "touchstart", function(sym, e) {
         A71 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71num6_cover}", "touchstart", function(sym, e) {
         A71 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71num5_cover}", "touchstart", function(sym, e) {
         A71 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71num4_cover}", "touchstart", function(sym, e) {
         A71 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71num3_cover}", "touchstart", function(sym, e) {
         A71 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71num2_cover}", "touchstart", function(sym, e) {
         A71 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71num1_cover}", "touchstart", function(sym, e) {
         A71 = 1;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A71delete_button}", "touchstart", function(sym, e) {
         A71 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);

      });
      //Edge binding end

   })("Apple71_game");
   //Edge symbol end:'Apple71_game'

   //=========================================================
   
   //Edge symbol: 'Apple72_game'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_A72start_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         sym.getSymbol("Apple72_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").play(250);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72dicision_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A72 == 7){
         	var True = sym.getComposition().getStage().$("True").show();
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	COLLECT = COLLECT + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){
         		sym.getComposition().getStage().$("FINISH").show();	
         		riiden.stop();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		finish.play();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72delete_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A72 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72num9_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A72 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72num8_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A72 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72num7_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A72 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72num6_cove}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A72 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72num5_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A72 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72num4_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A72 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72num3_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A72 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72num2_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A72 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72num1_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A72 = 1;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72start_button}", "touchstart", function(sym, e) {
         sym.getSymbol("Apple72_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").play(250);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72dicision_button}", "touchstart", function(sym, e) {
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A72 == 7){
         	var True = sym.getComposition().getStage().$("True").show();
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	COLLECT = COLLECT + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){
         		sym.getComposition().getStage().$("FINISH").show();	
         		riiden.stop();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		finish.play();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72delete_button}", "touchstart", function(sym, e) {
         A72 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72num9_cover}", "touchstart", function(sym, e) {
         A72 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72num8_cover}", "touchstart", function(sym, e) {
         A72 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72num7_cover}", "touchstart", function(sym, e) {
         A72 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72num6_cove}", "touchstart", function(sym, e) {
         A72 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72num5_cover}", "touchstart", function(sym, e) {
         A72 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72num4_cover}", "touchstart", function(sym, e) {
         A72 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72num3_cover}", "touchstart", function(sym, e) {
         A72 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72num2_cover}", "touchstart", function(sym, e) {
         A72 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A72num1_cover}", "touchstart", function(sym, e) {
         A72 = 1;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

   })("Apple72_game");
   //Edge symbol end:'Apple72_game'

   //=========================================================
   
   //Edge symbol: 'Apple8_game'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_A8start_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         sym.getSymbol("Apple8_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").play(250);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8dicision_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A8 == 8){
         	var True = sym.getComposition().getStage().$("True").show();
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	COLLECT = COLLECT + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){
         		sym.getComposition().getStage().$("FINISH").show();	
         		riiden.stop();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		finish.play();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8delete_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A8 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8num9_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A8 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8num8_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A8 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8num7_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A8 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8num6_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A8 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8num5_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A8 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8num4_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A8 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8num3_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A8 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8num2_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A8 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8num1_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A8 = 1;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8start_button}", "touchstart", function(sym, e) {
         sym.getSymbol("Apple8_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").play(250);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8dicision_button}", "touchstart", function(sym, e) {
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A8 == 8){
         	var True = sym.getComposition().getStage().$("True").show();
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	COLLECT = COLLECT + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){
         		sym.getComposition().getStage().$("FINISH").show();	
         		riiden.stop();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		finish.play();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8delete_button}", "touchstart", function(sym, e) {
         A8 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8num9_cover}", "touchstart", function(sym, e) {
         A8 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8num8_cover}", "touchstart", function(sym, e) {
         A8 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8num7_cover}", "touchstart", function(sym, e) {
         A8 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8num6_cover}", "touchstart", function(sym, e) {
         A8 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8num5_cover}", "touchstart", function(sym, e) {
         A8 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8num4_cover}", "touchstart", function(sym, e) {
         A8 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8num3_cover}", "touchstart", function(sym, e) {
         A8 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8num2_cover}", "touchstart", function(sym, e) {
         A8 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A8num1_cover}", "touchstart", function(sym, e) {
         A8 = 1;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

   })("Apple8_game");
   //Edge symbol end:'Apple8_game'

   //=========================================================
   
   //Edge symbol: 'Apple9_game'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_A9start_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         sym.getSymbol("Apple9_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").play(250);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9num9_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A9 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9num8_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A9 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9num7_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A9 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9num6_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A9 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9num5_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A9 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9num4_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A9 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9num3_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A9 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9num2_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A9 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9num1_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A9 = 1;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9delete_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         A9 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9dicision_button}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A9 == 9){
         	var True = sym.getComposition().getStage().$("True").show();
         	COLLECT = COLLECT + 1;
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){
         		sym.getComposition().getStage().$("FINISH").show();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		riiden.stop();
         		finish.play();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9start_button}", "touchstart", function(sym, e) {
         sym.getSymbol("Apple9_flash").play();
         PUSH_START = PUSH_START + 1;
         var True = sym.getComposition().getStage().$("True").hide();
         var False = sym.getComposition().getStage().$("False").hide();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").play(250);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().$("button_cover2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9dicision_button}", "touchstart", function(sym, e) {
         var txt=sym.getComposition().getStage().$("AnsNumber_text").html();
         
         deleteFalse(sym);
         
         if (txt=="?"){
         	return;	
         }
         
         if(A9 == 9){
         	var True = sym.getComposition().getStage().$("True").show();
         	COLLECT = COLLECT + 1;
         	var button_cover = sym.getComposition().getStage().$("button_cover").show();
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	collect.play();
         	if(COLLECT == 5){
         		sym.getComposition().getStage().$("FINISH").show();
         		var FINISH = sym.getComposition().getStage().getSymbol("FINISH").play(250);
         		riiden.stop();
         		finish.play();
         	}
         }else{
         	var False = sym.getComposition().getStage().$("False").show();
         	wrong_01.play();
         	FALSE = FALSE + 1;
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         	sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9delete_button}", "touchstart", function(sym, e) {
         A9 = 0;
         sym.getComposition().getStage().$("AnsNumber_text").html("?");
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         sym.getComposition().getStage().$("button_cover2").show();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9num9_cover}", "touchstart", function(sym, e) {
         A9 = 9;
         sym.getComposition().getStage().$("AnsNumber_text").html("9");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9num8_cover}", "touchstart", function(sym, e) {
         A9 = 8;
         sym.getComposition().getStage().$("AnsNumber_text").html("8");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9num7_cover}", "touchstart", function(sym, e) {
         A9 = 7;
         sym.getComposition().getStage().$("AnsNumber_text").html("7");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9num6_cover}", "touchstart", function(sym, e) {
         A9 = 6;
         sym.getComposition().getStage().$("AnsNumber_text").html("6");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9num5_cover}", "touchstart", function(sym, e) {
         A9 = 5;
         sym.getComposition().getStage().$("AnsNumber_text").html("5");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9num4_cover}", "touchstart", function(sym, e) {
         A9 = 4;
         sym.getComposition().getStage().$("AnsNumber_text").html("4");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9num3_cover}", "touchstart", function(sym, e) {
         A9 = 3;
         sym.getComposition().getStage().$("AnsNumber_text").html("3");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9num2_cover}", "touchstart", function(sym, e) {
         A9 = 2;
         sym.getComposition().getStage().$("AnsNumber_text").html("2");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_A9num1_cover}", "touchstart", function(sym, e) {
         A9 = 1;
         sym.getComposition().getStage().$("AnsNumber_text").html("1");
         piyo.play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("number_background").stop(0);
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("dicision_button").play();
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").stop(0);
         

      });
      //Edge binding end

   })("Apple9_game");
   //Edge symbol end:'Apple9_game'

   //=========================================================
   
   //Edge symbol: 'GAME'
   (function(symbolName) {   
   
   })("GAME");
   //Edge symbol end:'GAME'

   //=========================================================
   
   //Edge symbol: 'False'
   (function(symbolName) {   
   
   })("False");
   //Edge symbol end:'False'

   //=========================================================
   
   //Edge symbol: 'FINISH'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.getComposition().getStage().getSymbol("FINISH").getSymbol("false_result").$("falseVar_text").html(FALSE);
         sym.getComposition().getStage().getSymbol("FINISH").getSymbol("start_result").$("startVar_text").html(PUSH_START);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         SCORE = 10-FALSE-(PUSH_START-5);
         
         if(SCORE == 10){
         sym.getComposition().getStage().getSymbol("FINISH").$("ribon03").show();
         sym.getComposition().getStage().getSymbol("FINISH").$("result03").show();
         localStorage.BLINKITrank = 1;
         }else if(SCORE<10 && 5<=SCORE){
         sym.getComposition().getStage().getSymbol("FINISH").$("ribon02").show();
         sym.getComposition().getStage().getSymbol("FINISH").$("result02").show();
         localStorage.BLINKITrank = 2;
         }else if(SCORE<5){
         sym.getComposition().getStage().getSymbol("FINISH").$("ribon01").show();
         sym.getComposition().getStage().getSymbol("FINISH").$("result01").show();
         localStorage.BLINKITrank = 3;
         }

      });
      //Edge binding end

   })("FINISH");
   //Edge symbol end:'FINISH'

   //=========================================================
   
   //Edge symbol: 'True'
   (function(symbolName) {   
      Symbol.bindElementAction(compId, symbolName, "${_NEXT_cover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         /*		正解画面を隠し、入力された数字を消す。		*/
         var True = sym.getComposition().getStage().$("True").hide();
         var AnsNumver_text = sym.getComposition().getStage().$("AnsNumber_text").html("?");
         var button_cover = sym.getComposition().getStage().$("button_cover").hide();
         sym.getComposition().getStage().$("button_cover2").show();
         
         
         /*		問題を隠す		*/
         var Apple3_game = sym.getComposition().getStage().$("Apple3_game").hide();
         var Apple4_game = sym.getComposition().getStage().$("Apple4_game").hide();
         var Apple51_game = sym.getComposition().getStage().$("Apple51_game").hide();
         var Apple52_game = sym.getComposition().getStage().$("Apple52_game").hide();
         var Apple61_game = sym.getComposition().getStage().$("Apple61_game").hide();
         var Apple62_game = sym.getComposition().getStage().$("Apple62_game").hide();
         var Apple71_game = sym.getComposition().getStage().$("Apple71_game").hide();
         var Apple72_game = sym.getComposition().getStage().$("Apple72_game").hide();
         var Apple8_game = sym.getComposition().getStage().$("Apple8_game").hide();
         var Apple9_game = sym.getComposition().getStage().$("Apple9_game").hide();
         
         /*		問題の設定		*/
         var Select = Math.floor( Math.random() * 10);
         
         /*		問題の表示		*/
         if(Select == 0){
         	var Apple3_game = sym.getComposition().getStage().$("Apple3_game").show();
         }
         if(Select == 1){
         	var Apple4_game = sym.getComposition().getStage().$("Apple4_game").show();
         }
         if(Select == 2){
         	var Apple51_game = sym.getComposition().getStage().$("Apple51_game").show();
         }
         if(Select == 3){
         	var Apple52_game = sym.getComposition().getStage().$("Apple52_game").show();
         }
         if(Select == 4){
         	var Apple61_game = sym.getComposition().getStage().$("Apple61_game").show();
         }
         if(Select == 5){
         	var Apple62_game = sym.getComposition().getStage().$("Apple62_game").show();
         }
         if(Select == 6){
         	var Apple71_game = sym.getComposition().getStage().$("Apple71_game").show();
         }
         if(Select == 7){
         	var Apple72_game = sym.getComposition().getStage().$("Apple72_game").show();
         }
         if(Select == 8){
         	var Apple8_game = sym.getComposition().getStage().$("Apple8_game").show();
         }
         if(Select == 9){
         	var Apple9_game = sym.getComposition().getStage().$("Apple9_game").show();
         }
         
         /*		GAME_BACKGROUNDのstart_background2を点滅させる。		*/
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_NEXT_cover}", "touchstart", function(sym, e) {
         /*		正解画面を隠し、入力された数字を消す。		*/
         var True = sym.getComposition().getStage().$("True").hide();
         var AnsNumver_text = sym.getComposition().getStage().$("AnsNumber_text").html("?");
         var button_cover = sym.getComposition().getStage().$("button_cover").hide();
         sym.getComposition().getStage().$("button_cover2").show();
         
         
         /*		問題を隠す		*/
         var Apple3_game = sym.getComposition().getStage().$("Apple3_game").hide();
         var Apple4_game = sym.getComposition().getStage().$("Apple4_game").hide();
         var Apple51_game = sym.getComposition().getStage().$("Apple51_game").hide();
         var Apple52_game = sym.getComposition().getStage().$("Apple52_game").hide();
         var Apple61_game = sym.getComposition().getStage().$("Apple61_game").hide();
         var Apple62_game = sym.getComposition().getStage().$("Apple62_game").hide();
         var Apple71_game = sym.getComposition().getStage().$("Apple71_game").hide();
         var Apple72_game = sym.getComposition().getStage().$("Apple72_game").hide();
         var Apple8_game = sym.getComposition().getStage().$("Apple8_game").hide();
         var Apple9_game = sym.getComposition().getStage().$("Apple9_game").hide();
         
         /*		問題の設定		*/
         var Select = Math.floor( Math.random() * 10);
         
         /*		問題の表示		*/
         if(Select == 0){
         	var Apple3_game = sym.getComposition().getStage().$("Apple3_game").show();
         }
         if(Select == 1){
         	var Apple4_game = sym.getComposition().getStage().$("Apple4_game").show();
         }
         if(Select == 2){
         	var Apple51_game = sym.getComposition().getStage().$("Apple51_game").show();
         }
         if(Select == 3){
         	var Apple52_game = sym.getComposition().getStage().$("Apple52_game").show();
         }
         if(Select == 4){
         	var Apple61_game = sym.getComposition().getStage().$("Apple61_game").show();
         }
         if(Select == 5){
         	var Apple62_game = sym.getComposition().getStage().$("Apple62_game").show();
         }
         if(Select == 6){
         	var Apple71_game = sym.getComposition().getStage().$("Apple71_game").show();
         }
         if(Select == 7){
         	var Apple72_game = sym.getComposition().getStage().$("Apple72_game").show();
         }
         if(Select == 8){
         	var Apple8_game = sym.getComposition().getStage().$("Apple8_game").show();
         }
         if(Select == 9){
         	var Apple9_game = sym.getComposition().getStage().$("Apple9_game").show();
         }
         
         /*		GAME_BACKGROUNDのstart_background2を点滅させる。		*/
         sym.getComposition().getStage().getSymbol("GAME_BACKGROUND").getSymbol("start_background2").play();
         

      });
      //Edge binding end

   })("True");
   //Edge symbol end:'True'

   //=========================================================
   
   //Edge symbol: 'start_background'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 指定した位置からタイムラインを再生 (ミリ秒またはラベル)
         sym.play(0);
         // コードをここに挿入

      });
      //Edge binding end

   })("start_background");
   //Edge symbol end:'start_background'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'house'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_housecover}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
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

      Symbol.bindElementAction(compId, symbolName, "${_housecover}", "touchstart", function(sym, e) {
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("../../../index.html", "_self");

      });
      //Edge binding end

   })("home");
   //Edge symbol end:'home'

   //=========================================================
   
   //Edge symbol: 'start_background2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("start_background2");
   //Edge symbol end:'start_background2'

   //=========================================================
   
   //Edge symbol: 'number_background'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // 指定した位置からタイムラインを再生 (ミリ秒またはラベル)
         sym.play(250);
         // コードをここに挿入

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("number_background");
   //Edge symbol end:'number_background'

   //=========================================================
   
   //Edge symbol: 'decision_button'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // 指定した位置からタイムラインを再生 (ミリ秒またはラベル)
         sym.play(250);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("dicision_button");
   //Edge symbol end:'dicision_button'

   //=========================================================
   
   //Edge symbol: 'false_result'
   (function(symbolName) {   
   
   })("false_result");
   //Edge symbol end:'false_result'

   //=========================================================
   
   //Edge symbol: 'start_result'
   (function(symbolName) {   
   
   })("start_result");
   //Edge symbol end:'start_result'

})(jQuery, AdobeEdge, "EDGE-1622023748");