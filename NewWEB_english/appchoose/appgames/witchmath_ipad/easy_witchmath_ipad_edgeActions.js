/***********************
* Adobe Edge Animate コンポジションアクション
*
* このファイルを編集する際には注意が必要です。必ず関数シグニチャと
* 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
* 操作可能な状態にしておいてください。 
*
***********************/

//音入れ
var flagA=0;

if(navigator.userAgent.indexOf('Android')>0){
flagA=1;
}
if(flagA==0){
var mySound = new Howl({
  urls: ['audio/math.mp3'],//game_maoudamashii_6_dangeon18.mp3 mp3じゃないと開けないんじゃないのぉ
  autoplay: false,
  loop: true,
  volume: 0.5,
});

var mySound2 = new Howl({
  urls: ['audio/8Bit_san_2.mp3'],//bgm_maoudamashii_neorock38.mp3
  autoplay: false,
  loop: true,
  volume: 0.5,
});

var mySound3 = new Howl({
  urls: ['audio/gmclear.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.5,
});

var mySound4 = new Howl({
  urls: ['audio/oikon.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.5,
});


var mySound5 = new Howl({
  urls: ['audio/ken7.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.5,
});


var mySound6= new Howl({
  urls: ['audio/kikku.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.5,
});

var mySound7= new Howl({
  urls: ['audio/gmover.mp3'],
  autoplay: false,
  loop: false,
  volume: 1.0,
});

var mySound8= new Howl({
  urls: ['audio/se_maoudamashii_explosion06.mp3'],
  autoplay: false,
  loop: false,
  volume: 1.0,
});
}


(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス
var prePageX = 0;
var prePageY = 0;
var goX = 0;
var goY = 0;
var vecX;
var vecY;
var miniIdx;
var interval = 15;
var PosX;
var PosY;
var InitY;
var bulletSymArray;
var bulletElemArray;
var circleSymArray;
var circleElemArray;
var RandaomNumArray;
var select;
var signal;
var time;
var tatgetNumber;
var limitTime;
var play = 0;
var MonsterHitPoint = 50;
var DamegePoint = 0;
var preDamegePoint = 0;
var gameclear = 0;
var MyDamegePoint = 0;
var MyHitPoint=50;
var TimerId;



   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "touchend", function(sym, e) {
         // touchstartで記録したprePageX,prePageYをもとに移動量を計算
         goX = e.originalEvent.changedTouches[0].pageX/sym.getVariable("rescale") - prePageX;
         goY = e.originalEvent.changedTouches[0].pageY/sym.getVariable("rescale") - prePageY;
         
         for( i = 0; i < 3; i++){
         	if(signal[i] == -1){
         
         		if(goY < 0){
         		//数字選択音↓のコード
         		if(flagA==0){
         		mySound4.play();
         		}
         	   	signal[i] = 1;
         		} else {
         			signal[i] = 0;
         			miniIdx[i] = 10;
         		}
         	}
			}



      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "touchstart", function(sym, e) {
         // イベントのキャンセルを通知
         // こうすることでtouchendが同じ座標以外でも反応する。
         e.preventDefault();
         // タッチ位置を記憶
         prePageX = e.originalEvent.changedTouches[0].pageX;
         prePageY = e.originalEvent.changedTouches[0].pageY;
         
         prePageX =prePageX/sym.getVariable("rescale");
         prePageY =prePageY/sym.getVariable("rescale");
         
         var dist;
         var distMini = 1000;
         var DX;
         var DY;
         var CposX = new Array(78,242);
         var minii;
         
         for( i = 0; i < 9; i++){
         	DX = prePageX - PosX[i];
         	DY = prePageY - PosY[i];
         	dist = Math.sqrt(DX*DX+DY*DY);
            if(dist < distMini){
         		distMini = dist;
         		minii = i;
         	}
         }
         
         
         	if( distMini < 35 && miniIdx[0]!=minii && miniIdx[1]!=minii){
         	for( i = 0; i < 3; i++){
         		if(signal[i] == 0){
         			miniIdx[i] = minii;
         			select[i] = RandaomNumArray[miniIdx[i]];
         			signal[i] = -1;
         			vecX[i] = CposX[i] - PosX[miniIdx[i]];
         			vecY[i] = 286 - PosY[miniIdx[i]];	
         			break;
         		}
         
         	}
         
         }

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
          if(flagA==0){
         mySound2.play();
          }
         sym.setVariable("myHP", 50);
         
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("HP").hide();
         
         sym.$("stm2").hide();
         sym.$("giant_standing").hide();
         sym.$("giant_lost").hide();
         sym.$("giant_death").hide();
         sym.$("giant_damage").hide();
         sym.$("giant_attack").hide(); 
         sym.$("Top").hide();
         

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_return}", "touchstart", function(sym, e) {
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
         sym.$("stm1").show();
         
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("gmtop").show();
         mySound4.play();
			
      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_start}", "touchend", function(sym, e) {
ga('send', 'event', 'wme_start_button', 'wme_start_click', 'wme');
if(flagA==0){
                  mySound.play();
                  mySound2.stop();
                  mySound4.play();
                  }
                  sym.$("back").hide();
                  sym.$("giant_standing").show();
                  sym.$("Text").hide();
                  sym.getSymbol("aoki_modify1").deleteSymbol();
                  //シンボル変数の値を設定
                  //シンボル変数の値を取得
                  var myok = sym.getVariable("myHP");
                  sym.$("HP").html(myok)//謎
      
                  var my = sym.getVariable("HP2");
                  sym.$("HP").html(my)//謎に追加してみた
                  // エレメントを隠します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                  // 使用できる DOM エレメントに変えます)。
                  sym.$("start").hide();
                  // エレメントを隠します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                  // 使用できる DOM エレメントに変えます)。
                  sym.$("witchmath").hide();
      
                  // エレメントを隠します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                  // 使用できる DOM エレメントに変えます)。
                  sym.$("Text").hide();
                  sym.$("GAME_OVER").hide();
      
                  // エレメントを表示します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
                  //  使用できる DOM エレメントに変えます)。
                  sym.$("HP").show();
                  // エレメントを隠します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                  // 使用できる DOM エレメントに変えます)。
                  sym.$("matane").hide();
                  // エレメントを隠します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                  // 使用できる DOM エレメントに変えます)。
                  sym.$("otukare").hide();
      
                  // エレメントを隠します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                  // 使用できる DOM エレメントに変えます)。
                  sym.$("stm1").hide();
                  sym.$("Back").hide();
                  sym.$("top").hide();
                  // エレメントを隠します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                  // 使用できる DOM エレメントに変えます)。
                  sym.$("gmtop").hide();
                  sym.$("Text3").hide();
      
      
      
                  // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
                  		 sym.$("success").html( "" );
                  		 sym.$("target1").html( "" );
                  		 sym.$("target10").html( "" );
                  		 sym.$("time1").html( "" );
                  		 sym.$("time10").html( "" );
                  		 sym.$("time100").html( "" );
      
                           RandaomNumArray = new Array(0,1,2,3,4,5,6,7,8);
                           select = new Array(0,0);
                           signal = new Array(0,0);
                           time   = new Array(0,0);
                           vecX	 = new Array(0,0);
                  			vecY	 = new Array(0,0);
                  			miniIdx= new Array(9,9);
      
                           function SetRamdomArray(){
                  				for( i = 0; i < 10; i++){
                  					var tmp;
                  					var r1 = Math.floor(Math.random()*9);
                  					var r2 = Math.floor(Math.random()*9);
                  					tmp 					  = RandaomNumArray[r1];
                  					RandaomNumArray[r1] = RandaomNumArray[r2];
                  					RandaomNumArray[r2] = tmp;
                  				} 
                           }
      
                  　　　　　　　　　　　　//数字を生成。
                           function SetMagicNumber(){
                  				bulletSymArray  = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
                  				bulletSymArray[0] = sym.createChildSymbol("bullet1", "Stage");
                  				bulletSymArray[1] = sym.createChildSymbol("bullet2", "Stage");
                  				bulletSymArray[2] = sym.createChildSymbol("bullet3", "Stage");
                  				bulletSymArray[3] = sym.createChildSymbol("bullet4", "Stage");
                  				bulletSymArray[4] = sym.createChildSymbol("bullet5", "Stage");
                  				bulletSymArray[5] = sym.createChildSymbol("bullet6", "Stage");
                  				bulletSymArray[6] = sym.createChildSymbol("bullet7", "Stage");
                  				bulletSymArray[7] = sym.createChildSymbol("bullet8", "Stage");
                  				bulletSymArray[8] = sym.createChildSymbol("bullet9", "Stage");
      
                  				bulletElemArray = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
                  				for( i = 0; i < 9; i++){
                  					bulletElemArray[i] = bulletSymArray[i].getSymbolElement();
                  				}
      
                  				InitY = new Array(0, -76, -76*2, -76*3, -76*4,
                  										  -76*5, -76*6, -76*7, -76*8)
      
                  				PosX = new Array(64-32, 64*2-32, 64*3-32, 64*4-32, 64*5-32,
                  									  64, 64*2, 64*3, 64*4);
                  				PosY= new Array(388, 388, 388, 388, 388,
                  									 442, 442, 442, 442);
      
                  				for( i = 0; i < 9; i++){
                  						bulletElemArray[RandaomNumArray[i]].css("Position","relative");
                  						bulletElemArray[RandaomNumArray[i]].css("left",PosX[i]);
                  						bulletElemArray[RandaomNumArray[i]].css("top" ,InitY[RandaomNumArray[i]] + PosY[i]);
                  				}
                  			}//0~9の数字の位置を計算している。
      
                  			function SetCircle(){
                  				circleSymArray = new Array(0,0);
                  				for( i = 0; i < 2; i++){
                  			  		circleSymArray[i] = sym.createChildSymbol("circle", "Stage");
                   				}//i<2の２の数字はターゲットの箱の数　この場合2個 生成
      
                   				circleElemArray = new Array(0,0);
                  				for( i = 0; i < 2; i++){
                  					circleElemArray[i] = circleSymArray[i].getSymbolElement();
                   				}//(0,0,0)は数だったので(0,0)に減らした
      
                  				var PosX = new Array(78,241);
                  				var PosY= new Array(286-76*9,286-76*10);
      
                  				for( i = 0; i < 2; i++){
                  					circleElemArray[i].css("Position","relative");
                  					circleElemArray[i].css("top" ,PosY[i]);
                  					circleElemArray[i].css("left",PosX[i]);
                  				}
                  			}
      
                  			SetRamdomArray();
      
                           SetMagicNumber();
      
                           SetCircle();
      
                           targetNumber = Math.floor(Math.random()*14)+3;
      
                           var speed = 10;
                           var sleep = 0;
                           limitTime = 99999;
      
                           var timer = setInterval(onTimer, 1000/30);
                           var damageFlag = 0;
      
      
                           var clocktime = 0;
                          sym.$("Clear").html( "" );
      
                           function onTimer(){
      
      
                           if( gameclear == 0){
                  			if( targetNumber < 10 ){
                  				sym.$("target1").html( targetNumber );
                  				sym.$("target10").html( "" );
                  			} else {
                  				sym.$("target1").html( "" );
                  				sym.$("target10").html( targetNumber );
                  			}
      
                           if( limitTime < 10 ){
                  				sym.$("time1").html( limitTime );
                  				sym.$("time10").html( "" );
                  				sym.$("time100").html( "" );
                  			} else  if( limitTime < 100 ){
                  				sym.$("time1").html( "" );
                  				sym.$("time10").html( limitTime );
                  				sym.$("time100").html( "" );
                  			} else {
                  				sym.$("time1").html( "" );
                  				sym.$("time10").html( "" );
                  				sym.$("time100").html( limitTime );
                  			}
      
      
                  			var flag = 0;
                  			if(limitTime > 0){
                  				if(signal[0] == 0 || signal[1] == 0){
                  					limitTime--;
                  				}
                  				for( i = 0; i < 2; i++){
                  					if(signal[i] == 1){
                  						if(time[i] < interval){
                  							flag = 1;
                  						}
                  					}						
                  				}
      
                  				if(flag == 1 ){
                  				 limitTime++;
                  				}
                  				if(flag==2){
                  				limitTime=0;
                  				}
                  			}
      
                  				for( i = 0; i < 3; i++){
                  					if(signal[i] == 1){
                  						if(time[i] < interval){
                  							time[i]++;
                  						}
      
                  						bulletElemArray[select[i]].css("left",PosX[miniIdx[i]] + time[i]*vecX[i]/interval);
                  						bulletElemArray[select[i]].css("top" ,InitY[select[i]] + PosY[miniIdx[i]] + time[i]*vecY[i]/interval);
                  					}
                           	}
                           	if((signal[0] == 1 && signal[1] == 1) || limitTime == 0){
                  					if(sleep < interval*2){
                  						sleep++;
                  					} else {
                  						var sum = 0;
                  						for( i = 0; i < 2; i++){
                  							sum = sum + select[i] +1;
                  						}
                  						if(targetNumber == sum && limitTime != 0){
                  						  sym.$("giant_standing").hide();
                                      sym.$("giant_standing").fadeIn(4000);
									  			  console.log("giantstanding1");
                                      sym.$("giant_damage").show();//ダメージ与えたときの画像
                                      sym.$("giant_damage").fadeOut(1000);//ダメージ与えたときの画像



                  					//ダメージを与えた時に利根川を再生




                  					//攻撃音ken7 Play
                  					if(flagA==0){
              	                     	mySound5.play();

}                  							DamegePoint += sum;
                  							damageFlag = 1;
                  						}else if(targetNumber != sum && limitTime != 0){
if(flagA==0){
                  							mySound8.play();
                  							sym.play(1000);


}                  							MyDamegePoint += sum;
                  							damageFlag = 2;

                  							 sym.$("giant_standing").hide();
                  							 sym.$("giant_attack").show();
                                 		 sym.$("giant_standing").fadeIn(2000);
										 console.log("giantstanding2");
                                    	 sym.$("giant_attack").fadeOut(1000);

                  						}

                  						//初期化処理
                  						SetRamdomArray();
                  						for( i = 0; i < 9; i++){
                  							bulletElemArray[RandaomNumArray[i]].css("Position","relative");
                  							bulletElemArray[RandaomNumArray[i]].css("left",PosX[i]);
                  							bulletElemArray[RandaomNumArray[i]].css("top" ,InitY[RandaomNumArray[i]] + PosY[i]);
                  						}
                  						sleep = 0;
                  						limitTime = 99999;
                  						targetNumber = Math.floor(Math.random()*14)+3;
                  						for( i = 0; i < 2; i++){
                  							signal[i] = 0;
                  							time[i] = 0;
                  							miniIdx[i]=9;
                  						}
                  					}
                           	}
                  				if( damageFlag == 1 ){
                  			      var damege1=MonsterHitPoint - DamegePoint;//相手のdamege処理
                  					sym.$("HitPoint").html( damege1 );
                  				}
                  					else {
                  					if(damageFlag == 2 ){
                  					var damege2=MyHitPoint - MyDamegePoint;	         					
                  					sym.$("HP").html(damege2);

                  					//こっちのdamege処理

                  					 }

                  					}//追加した文

                  				if(MonsterHitPoint - DamegePoint <= 0){
                  					gameclear = 1;
                  					if(flagA==0){
                  					mySound3.play();
                  					mySound.stop();
                  					mySound4.stop();
}
                                 // モンスターやっつけた時
                                 sym.$("giant_damage").hide();
                                 sym.$("giant_standing").hide();
                                 sym.$("giant_death").fadeIn(2000);//やられたときの画像
											sym.$("Top").show();






                  					//ここに入れればもう一度プレーができる！！？？
                  					//エレメントの表示！↓


                  				}
                  			} else {
                  				if( MonsterHitPoint - DamegePoint > 0 ){
                  						DamegePoint ++;


                  					}else if( MyHitPoint - MyDamegePoint > 0 ){
                  								 MyDamegePoint++;
                  					}

                                 // エレメントを隠します。
                                 //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                                 // 使用できる DOM エレメントに変えます)。
                                 sym.$("HitPoint").hide();
                                 sym.$("matane").show();
                                 sym.$("otukare").show();	
                                 sym.$("giant_damage").hide();
                                 sym.$("giant_standing").hide();
                  					sym.$("Clear").html( "CLEAR" );
              							console.log("clear");

              							// エレメントを隠します。
              							//  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
              							// 使用できる DOM エレメントに変えます)。
              							sym.$("HP").hide();


                  			}
                  			if(damege2<=0){//自分のHPが0以下になったとき
                  					gameclear = 1;
                  					if(flagA==0){
                  					mySound7.play();
                  					mySound.stop();
                  					}
                  					sym.$("Clear").hide();
         								sym.$("HP").hide();

         								sym.$("matane").show();

         								sym.$("otukare").show();								
         								sym.$("GAME_OVER").show();
         								sym.$("giant_standing").hide();
                                 sym.$("giant_lost").show();//どやぁ
                                 sym.$("giant_standing").hide();
                                 sym.$("Top").show();
         								console.log("GAMEOVER");
         								//gameを止めたい
         														}


                  		 }

         // ユーザーがオブジェクトに触れるのを止めたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // コードをここに挿入
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // コードをここに挿入
         sym.stop();

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         e.preventDefault();
         
         // タッチ位置を記憶
         prePageX = e.pageX;
         prePageY = e.pageY;
         
         prePageX =prePageX/sym.getVariable("rescale");
         prePageY =prePageY/sym.getVariable("rescale");
         
         var dist;
         var distMini = 1000;
         var DX;
         var DY;
         var CposX = new Array(78,242);
         var minii;
         
         for( i = 0; i < 9; i++){
         	DX = prePageX - PosX[i];
         	DY = prePageY - PosY[i];
         	dist = Math.sqrt(DX*DX+DY*DY);
            if(dist < distMini){
         		distMini = dist;
         		minii = i;
         	}
         }
         
         
         if( distMini < 35 && miniIdx[0]!=minii && miniIdx[1]!=minii){
         	for( i = 0; i < 3; i++){
         		if(signal[i] == 0){
         			miniIdx[i] = minii;
         			select[i] = RandaomNumArray[miniIdx[i]];
         			signal[i] = -1;
         			vecX[i] = CposX[i] - PosX[miniIdx[i]];
         			vecY[i] = 286 - PosY[miniIdx[i]];	
         			break;
         		}
         
         	}
         
         }
         
         // touchendに相当する部分
         /*goY=-1;
         
         for( i = 0; i < 3; i++){
         	if(signal[i] == -1){
         
         		if(goY < 0){
         		//数字選択音↓のコード
         		mySound4.play();
         			signal[i] = 1;
         		} else {
         			signal[i] = 0;
         			miniIdx[i] = 10;
         		}
         	}
         }*/
         
         goY=-1;
         //goY = e.originalEvent.changedTouches[0].pageY - prePageY;
         
                  for( i = 0; i < 3; i++){
                  	if(signal[i] == -1){
         
                  		if(goY < 0){
                  		//数字選択音↓のコード
                  		if(flagA==0){
                  		mySound4.play();
                  		}
                  	   	signal[i] = 1;
                  		} else {
                  			signal[i] = 0;
                  			miniIdx[i] = 10;
                  		}
                  	}
         			}
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_return}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
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
         sym.$("stm1").show();
         
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("gmtop").show();
         mySound4.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_start}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         ga('send', 'event', 'wme_start_button', 'wme_start_click', 'wme');
         if(flagA==0){
                          mySound.play();
                           mySound2.stop();
                           mySound4.play();
                           }
                           sym.$("back").hide();
                           sym.getSymbol("aoki_modify1").deleteSymbol();
                           sym.$("giant_standing").show();
                           //シンボル変数の値を設定
                           //シンボル変数の値を取得
                           var myok = sym.getVariable("myHP");
                           sym.$("HP").html(myok)//謎
         
                           var my = sym.getVariable("HP2");
                           sym.$("HP").html(my)//謎に追加してみた
                           // エレメントを隠します。
                           //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                           // 使用できる DOM エレメントに変えます)。
                           sym.$("start").hide();
                           // エレメントを隠します。
                           //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                           // 使用できる DOM エレメントに変えます)。
                           sym.$("witchmath").hide();
         
                           // エレメントを隠します。
                           //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                           // 使用できる DOM エレメントに変えます)。
                           sym.$("Text").hide();
                           sym.$("GAME_OVER").hide();
         
                           // エレメントを表示します。
                           //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
                           //  使用できる DOM エレメントに変えます)。
                           sym.$("HP").show();
                           // エレメントを隠します。
                           //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                           // 使用できる DOM エレメントに変えます)。
                           sym.$("matane").hide();
                           // エレメントを隠します。
                           //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                           // 使用できる DOM エレメントに変えます)。
                           sym.$("otukare").hide();
         
                           // エレメントを隠します。
                           //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                           // 使用できる DOM エレメントに変えます)。
                           sym.$("stm1").hide();
                           sym.$("Back").hide();
                           sym.$("Top").hide();
                           // エレメントを隠します。
                           //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                           // 使用できる DOM エレメントに変えます)。
                           sym.$("gmtop").hide();
                           sym.$("Text3").hide();
         
         
         
                           // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
                           		 sym.$("success").html( "" );
                           		 sym.$("target1").html( "" );
                           		 sym.$("target10").html( "" );
                           		 sym.$("time1").html( "" );
                           		 sym.$("time10").html( "" );
                           		 sym.$("time100").html( "" );
         
                                    RandaomNumArray = new Array(0,1,2,3,4,5,6,7,8);
                                    select = new Array(0,0);
                                    signal = new Array(0,0);
                                    time   = new Array(0,0);
                                    vecX	 = new Array(0,0);
                           			vecY	 = new Array(0,0);
                           			miniIdx= new Array(9,9);
         
                                    function SetRamdomArray(){
                           				for( i = 0; i < 10; i++){
                           					var tmp;
                           					var r1 = Math.floor(Math.random()*9);
                           					var r2 = Math.floor(Math.random()*9);
                           					tmp 					  = RandaomNumArray[r1];
                           					RandaomNumArray[r1] = RandaomNumArray[r2];
                           					RandaomNumArray[r2] = tmp;
                           				} 
                                    }
         
                           　　　　　　　　　　　　//数字を生成。
                                    function SetMagicNumber(){
                           				bulletSymArray  = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
                           				bulletSymArray[0] = sym.createChildSymbol("bullet1", "Stage");
                           				bulletSymArray[1] = sym.createChildSymbol("bullet2", "Stage");
                           				bulletSymArray[2] = sym.createChildSymbol("bullet3", "Stage");
                           				bulletSymArray[3] = sym.createChildSymbol("bullet4", "Stage");
                           				bulletSymArray[4] = sym.createChildSymbol("bullet5", "Stage");
                           				bulletSymArray[5] = sym.createChildSymbol("bullet6", "Stage");
                           				bulletSymArray[6] = sym.createChildSymbol("bullet7", "Stage");
                           				bulletSymArray[7] = sym.createChildSymbol("bullet8", "Stage");
                           				bulletSymArray[8] = sym.createChildSymbol("bullet9", "Stage");
         
                           				bulletElemArray = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
                           				for( i = 0; i < 9; i++){
                           					bulletElemArray[i] = bulletSymArray[i].getSymbolElement();
                           				}
         
                           				InitY = new Array(0, -76, -76*2, -76*3, -76*4,
                           										  -76*5, -76*6, -76*7, -76*8)
         
                           				PosX = new Array(64-32, 64*2-32, 64*3-32, 64*4-32, 64*5-32,
                           									  64, 64*2, 64*3, 64*4);
                           				PosY= new Array(388, 388, 388, 388, 388,
                           									 442, 442, 442, 442);
         
                           				for( i = 0; i < 9; i++){
                           						bulletElemArray[RandaomNumArray[i]].css("Position","relative");
                           						bulletElemArray[RandaomNumArray[i]].css("left",PosX[i]);
                           						bulletElemArray[RandaomNumArray[i]].css("top" ,InitY[RandaomNumArray[i]] + PosY[i]);
                           				}
                           			}//0~9の数字の位置を計算している。
         
                           			function SetCircle(){
                           				circleSymArray = new Array(0,0);
                           				for( i = 0; i < 2; i++){
                           			  		circleSymArray[i] = sym.createChildSymbol("circle", "Stage");
                            				}//i<2の２の数字はターゲットの箱の数　この場合2個 生成
         
                            				circleElemArray = new Array(0,0);
                           				for( i = 0; i < 2; i++){
                           					circleElemArray[i] = circleSymArray[i].getSymbolElement();
                            				}//(0,0,0)は数だったので(0,0)に減らした
         
                           				var PosX = new Array(78,241);
                           				var PosY= new Array(286-76*9,286-76*10);
         
                           				for( i = 0; i < 2; i++){
                           					circleElemArray[i].css("Position","relative");
                           					circleElemArray[i].css("top" ,PosY[i]);
                           					circleElemArray[i].css("left",PosX[i]);
                           				}
                           			}
         
                           			SetRamdomArray();
         
                                    SetMagicNumber();
         
                                    SetCircle();
         
                                    targetNumber = Math.floor(Math.random()*14)+3;
         
                                    var speed = 10;
                                    var sleep = 0;
                                    limitTime = 99999;
         
                                    var timer = setInterval(onTimer, 1000/30);
                                    var damageFlag = 0;
         
         
                                    var clocktime = 0;
                                   sym.$("Clear").html( "" );
         
                                    function onTimer(){
         
         
                                    if( gameclear == 0){
                           			if( targetNumber < 10 ){
                           				sym.$("target1").html( targetNumber );
                           				sym.$("target10").html( "" );
                           			} else {
                           				sym.$("target1").html( "" );
                           				sym.$("target10").html( targetNumber );
                           			}
         
                                    if( limitTime < 10 ){
                           				sym.$("time1").html( limitTime );
                           				sym.$("time10").html( "" );
                           				sym.$("time100").html( "" );
                           			} else  if( limitTime < 100 ){
                           				sym.$("time1").html( "" );
                           				sym.$("time10").html( limitTime );
                           				sym.$("time100").html( "" );
                           			} else {
                           				sym.$("time1").html( "" );
                           				sym.$("time10").html( "" );
                           				sym.$("time100").html( limitTime );
                           			}
         
         
                           			var flag = 0;
                           			if(limitTime > 0){
                           				if(signal[0] == 0 || signal[1] == 0){
                           					limitTime--;
                           				}
                           				for( i = 0; i < 2; i++){
                           					if(signal[i] == 1){
                           						if(time[i] < interval){
                           							flag = 1;
                           						}
                           					}						
                           				}
         
                           				if(flag == 1 ){
                           				 limitTime++;
                           				}
                           				if(flag==2){
                           				limitTime=0;
                           				}
                           			}
         
                           				for( i = 0; i < 3; i++){
                           					if(signal[i] == 1){
                           						if(time[i] < interval){
                           							time[i]++;
                           						}
         
                           						bulletElemArray[select[i]].css("left",PosX[miniIdx[i]] + time[i]*vecX[i]/interval);
                           						bulletElemArray[select[i]].css("top" ,InitY[select[i]] + PosY[miniIdx[i]] + time[i]*vecY[i]/interval);
                           					}
                                    	}
                                    	if((signal[0] == 1 && signal[1] == 1) || limitTime == 0){
                           					if(sleep < interval*2){
                           						sleep++;
                           					} else {
                           						var sum = 0;
                           						for( i = 0; i < 2; i++){
                           							sum = sum + select[i] +1;
                           						}
                           						if(targetNumber == sum && limitTime != 0){
                           						  sym.$("giant_standing").hide();
                                               sym.$("giant_standing").fadeIn(4000);
         									  			  console.log("giantstanding1");
                                               sym.$("giant_damage").show();//ダメージ与えたときの画像
                                               sym.$("giant_damage").fadeOut(1000);//ダメージ与えたときの画像
         
         
         
                           					//ダメージを与えた時に利根川を再生
         
         
         
         
                           					//攻撃音ken7 Play
                           					if(flagA==0){
                       	                     	mySound5.play();
         }
                           							DamegePoint += sum;
                           							damageFlag = 1;
                           						}else if(targetNumber != sum && limitTime != 0){
         if(flagA==0){
                           							mySound8.play();
         
         }                           							sym.play(1000);
         
         
                           							MyDamegePoint += sum;
                           							damageFlag = 2;
         
                           							 sym.$("giant_standing").hide();
                           							 sym.$("giant_attack").show();
                                          		 sym.$("giant_standing").fadeIn(2000);
         										 console.log("giantstanding2");
                                             	 sym.$("giant_attack").fadeOut(1000);
                           						}
         
                           						//初期化処理
                           						SetRamdomArray();
                           						for( i = 0; i < 9; i++){
                           							bulletElemArray[RandaomNumArray[i]].css("Position","relative");
                           							bulletElemArray[RandaomNumArray[i]].css("left",PosX[i]);
                           							bulletElemArray[RandaomNumArray[i]].css("top" ,InitY[RandaomNumArray[i]] + PosY[i]);
                           						}
                           						sleep = 0;
                           						limitTime = 99999;
                           						targetNumber = Math.floor(Math.random()*14)+3;
                           						for( i = 0; i < 2; i++){
                           							signal[i] = 0;
                           							time[i] = 0;
                           							miniIdx[i]=9;
                           						}
                           					}
                                    	}
                           				if( damageFlag == 1 ){
                           			      var damege1=MonsterHitPoint - DamegePoint;//相手のdamege処理
                           					sym.$("HitPoint").html( damege1 );
                           				}
                           					else {
                           					if(damageFlag == 2 ){
                           					var damege2=MyHitPoint - MyDamegePoint;	         					
                           					sym.$("HP").html(damege2);
         
                           					//こっちのdamege処理
         
                           					 }
         
                           					}//追加した文
         
                           				if(MonsterHitPoint - DamegePoint <= 0){
                           					gameclear = 1;
                           					if(flagA==0){
                           					mySound3.play();
                           					mySound.stop();
                           					mySound4.stop();
         }
                                          // モンスターやっつけた時
                                          sym.$("giant_damage").hide();
                                          sym.$("giant_standing").hide();
                                          sym.$("giant_death").fadeIn(2000);//やられたときの画像
                                          sym.$("Text1").show();
                                          sym.$("Top").show();
         
         
         
         
         
                           					//ここに入れればもう一度プレーができる！！？？
                           					//エレメントの表示！↓
         
         
                           				}
                           			} else {
                           				if( MonsterHitPoint - DamegePoint > 0 ){
                           						DamegePoint ++;
         
         
                           					}else if( MyHitPoint - MyDamegePoint > 0 ){
                           								 MyDamegePoint++;
                           					}
         
                                          // エレメントを隠します。
                                          //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                                          // 使用できる DOM エレメントに変えます)。
                                          sym.$("HitPoint").hide();
                                          sym.$("matane").show();
                                          sym.$("otukare").show();	
                                          sym.$("giant_damage").hide();
                                          sym.$("giant_standing").hide();
                           					sym.$("Clear").html( "CLEAR" );
                       							console.log("clear");
         
                       							// エレメントを隠します。
                       							//  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                       							// 使用できる DOM エレメントに変えます)。
                       							sym.$("HP").hide();
         
         
                           			}
                           			if(damege2<=0){//自分のHPが0以下になったとき
                           					gameclear = 1;
                           					if(flagA==0){
                           					mySound7.play();
                           					mySound.stop();
         
         }                           					sym.$("Clear").hide();
                  								sym.$("HP").hide();
         
                  								sym.$("matane").show();
         
                  								sym.$("otukare").show();								
                  								sym.$("GAME_OVER").show();
                  								sym.$("giant_standing").hide();
                                          sym.$("giant_lost").show();//どやぁ
                                          sym.$("giant_standing").hide();
                                         	sym.$("Top").show();
         
                  								console.log("GAMEOVER");
                  								//gameを止めたい
                  														}
         
         
                           		 }
         
         

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_Top}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         window.open("selectstage_ipad.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Top}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         window.open("selectstage_ipad.html", "_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'bullet'
   (function(symbolName) {   
   
      

      

      

   })("bullet1");
   //Edge symbol end:'bullet1'

   //=========================================================
   
   //Edge symbol: 'circle'
   (function(symbolName) {   
   
   })("circle");
   //Edge symbol end:'circle'

   //=========================================================
   
   //Edge symbol: 'bullet_1'
   (function(symbolName) {   
   
      })("bullet2");
   //Edge symbol end:'bullet2'

   //=========================================================
   
   //Edge symbol: 'bullet_2'
   (function(symbolName) {   
   
      })("bullet3");
   //Edge symbol end:'bullet3'

   //=========================================================
   
   //Edge symbol: 'bullet_3'
   (function(symbolName) {   
   
      })("bullet4");
   //Edge symbol end:'bullet4'

   //=========================================================
   
   //Edge symbol: 'bullet_4'
   (function(symbolName) {   
   
      })("bullet5");
   //Edge symbol end:'bullet5'

   //=========================================================
   
   //Edge symbol: 'bullet_5'
   (function(symbolName) {   
   
      })("bullet6");
   //Edge symbol end:'bullet6'

   //=========================================================
   
   //Edge symbol: 'bullet_6'
   (function(symbolName) {   
   
      })("bullet7");
   //Edge symbol end:'bullet7'

   //=========================================================
   
   //Edge symbol: 'bullet_7'
   (function(symbolName) {   
   
      })("bullet8");
   //Edge symbol end:'bullet8'

   //=========================================================
   
   //Edge symbol: 'bullet_8'
   (function(symbolName) {   
   
      })("bullet9");
   //Edge symbol end:'bullet9'

   //=========================================================
   
   //Edge symbol: 'start_butten'
   (function(symbolName) {   
   
   })("start_butten");
   //Edge symbol end:'start_butten'

   //=========================================================
   
   //Edge symbol: 'start'
   (function(symbolName) {   
   
   })("start");
   //Edge symbol end:'start'

   //=========================================================
   
   //Edge symbol: 'whichmath'
   (function(symbolName) {   
   
   })("whichmath");
   //Edge symbol end:'whichmath'

   //=========================================================
   
   //Edge symbol: 'replay'
   (function(symbolName) {   
   
   })("replay");
   //Edge symbol end:'replay'

   //=========================================================
   
   //Edge symbol: 'replay1'
   (function(symbolName) {   
   
   })("replay1");
   //Edge symbol end:'replay1'

   //=========================================================
   
   //Edge symbol: 'stm1'
   (function(symbolName) {   
   
   })("stm1");
   //Edge symbol end:'stm1'

   //=========================================================
   
   //Edge symbol: 'return'
   (function(symbolName) {   
   
   })("return");
   //Edge symbol end:'return'

   //=========================================================
   
   //Edge symbol: 'stm2'
   (function(symbolName) {   
   
   })("stm2");
   //Edge symbol end:'stm2'

   //=========================================================
   
   //Edge symbol: 'top'
   (function(symbolName) {   
   
   })("top");
   //Edge symbol end:'top'

   //=========================================================
   
   //Edge symbol: 'gmtop'
   (function(symbolName) {   
   
   })("gmtop");
   //Edge symbol end:'gmtop'

   //=========================================================
   
   //Edge symbol: 'aoki_modify1'
   (function(symbolName) {   
   
   })("aoki_modify1");
   //Edge symbol end:'aoki_modify1'

   //=========================================================
   
   //Edge symbol: 'aoki_modify2'
   (function(symbolName) {   
   
   })("aoki_modify2");
   //Edge symbol end:'aoki_modify2'

   //=========================================================
   
   //Edge symbol: 'aoki_modify3'
   (function(symbolName) {   
   
   })("aoki_modify3");
   //Edge symbol end:'aoki_modify3'

})(jQuery, AdobeEdge, "EDGE-9528297");
