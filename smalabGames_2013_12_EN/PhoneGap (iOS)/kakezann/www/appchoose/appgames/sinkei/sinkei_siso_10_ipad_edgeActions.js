/***********************
* Adobe Edge Animate コンポジションアクション
*
* このファイルを編集する際には注意が必要です。必ず関数シグニチャと
* 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
* 操作可能な状態にしておいてください。 
*
***********************/

	var flug=0;
	var flug2=0;
	var num=0;
	var num2=0;
	var an1=0, an2=0;
	var x=0,y=0,z=0,x1=0,y1=0,z1=0,x2=0,y2=0,z2=0,x3=0,y3=0,z3=0,x4=0,y4=0,z4=0;
	var p1=0;
	var ts=1500;
	var pflug=1;
	var ct1=0;
	var card = new Array(10);
	var cx = new Array (10);
	var cy = new Array (10);
	var rand1 = 0;
	var rand2 = 0;
	var tmp =0;
	var i=0;
   var cflug=0;
   var cmb=1;
	var timerCount=0; 
	var rtime=0;
	var toku=0;
	var ss=3000;
	
		var music = new Howl({
	  urls: ['audio/bgm_kake.mp3'],
	  autoplay: false,
	  loop: true,
	  volume: 0.5,
	});


(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス
//fadeOutの秒数
   //Edge symbol: 'stage'
 

   (function(symbolName) {
 

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         //	music.onload(); 10/12　矢野 エラーが出ている。

      });
      //Edge binding end
 

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_tashist}", "touchstart", function(sym, e) {
         sym.getComposition().getStage().getSymbol("time").play();
         sym.setVariable("myVariableName", "variableValue");
          music.play();
         var button = new Howl({
           urls: ['audio/button_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.getSymbol("time").$("time_txt").html(timerCount);
         	var tCounter=setInterval(timer, 1000); //1000 will run the timer every 1 second
         	function timer()
            {
            timerCount=timerCount+1;
            sym.getSymbol("time").$("time_txt").html(timerCount); // Display the timer value 
         
            }
         card[0]=sym.getSymbol("tashi").$("card1");
         card[1]=sym.getSymbol("tashi").$("card2");
         card[2]=sym.getSymbol("tashi").$("card3");
         card[3]=sym.getSymbol("tashi").$("card4");
         card[4]=sym.getSymbol("tashi").$("card5");
         card[5]=sym.getSymbol("tashi").$("card6");
         card[6]=sym.getSymbol("tashi").$("card7");
         card[7]=sym.getSymbol("tashi").$("card8");
         card[8]=sym.getSymbol("tashi").$("card9");
         card[9]=sym.getSymbol("tashi").$("card10");
         
         
         cx[0]="331px";
         cx[1]="220px";
         cx[2]="428px";
         cx[3]="517px";
         cx[4]="517px";
         cx[5]="274px";
         cx[6]="252px";
         cx[7]="346px";
         cx[8]="428px";
         cx[9]="409px";
         
         
         cy[0]="107px";
         cy[1]="197px";
         cy[2]="86px";
         cy[3]="92px";
         cy[4]="237px";
         cy[5]="300px";
         cy[6]="91px";
         cy[7]="216px";
         cy[8]="216px";
         cy[9]="323px";
         
         
         for(i=0;i<=40;i++){
         rand1 = Math.round(Math.random()*9);
         rand2 = Math.round(Math.random()*9);
         tmp = card[rand1];
         card[rand1] = card[rand2];
         card[rand2] = tmp;      
         }
         
            sym.$("tashist").hide();
            sym.$("kakest").hide();
            sym.$("hikist").hide();
            sym.getSymbol("tashi").$("gameselect").hide();	
         	sym.getSymbol("tashi").$("close").show();	
         	sym.getSymbol("tashi").$("yazi1").show();	
         	sym.getComposition().getStage().getSymbol("kake").deleteSymbol();
         	sym.getComposition().getStage().getSymbol("hiki").deleteSymbol();
         
            x=Math.round(Math.random()*9+0.5);
            y=Math.round(Math.random()*9+0.5);
            z=x+y;
         
            x1=Math.round(Math.random()*9+0.5);
            y1=Math.round(Math.random()*9+0.5);
            z1=x1+y1;
         
            x2=Math.round(Math.random()*9+0.5);
            y2=Math.round(Math.random()*9+0.5);
            z2=x2+y2;
         
            x3=Math.round(Math.random()*9+0.5);
            y3=Math.round(Math.random()*9+0.5);
            z3=x3+y3;
         
            x4=Math.round(Math.random()*9+0.5);
            y4=Math.round(Math.random()*9+0.5);
            z4=x4+y4;
         
            x5=Math.round(Math.random()*9+0.5);
            y5=Math.round(Math.random()*9+0.5);
            z5=x5+y5;
         
            x6=Math.round(Math.random()*9+0.5);
            y6=Math.round(Math.random()*9+0.5);
            z6=x6+y6;
         
            x7=Math.round(Math.random()*9+0.5);
            y7=Math.round(Math.random()*9+0.5);
            z7=x7+y7;
         
            x8=Math.round(Math.random()*9+0.5);
            y8=Math.round(Math.random()*9+0.5);
            z8=x8+y8;
         
            x9=Math.round(Math.random()*9+0.5);
            y9=Math.round(Math.random()*9+0.5);
            z9=x9+y9;
         
         sym.getSymbol("tashi").$("x").html(x+"+"+y);
         sym.getSymbol("tashi").$("z").html(z);
         sym.getSymbol("tashi").$("x1").html(x1+"+"+y1);
         sym.getSymbol("tashi").$("z1").html(z1);
         sym.getSymbol("tashi").$("x2").html(x2+"+"+y2);
         sym.getSymbol("tashi").$("z2").html(z2);
         sym.getSymbol("tashi").$("x3").html(x3+"+"+y3);
         sym.getSymbol("tashi").$("z3").html(z3);
         sym.getSymbol("tashi").$("x4").html(x4+"+"+y4);
         sym.getSymbol("tashi").$("z4").html(z4);
         
         
         for(i=0;i<=9;i++){
         sym.getSymbol("tashi").$(card[i]).animate({"left":cx[i],"top":cy[i]},1000);
         }
         sym.$("jyannru").hide();
         sym.getSymbol("tashi").$("kabe").hide();
         sym.$("kotext").hide();
         
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kakest}", "touchstart", function(sym, e) {
         sym.getComposition().getStage().getSymbol("time").play();
         sym.setVariable("myVariableName", "variableValue");
          music.play();
         var button = new Howl({
           urls: ['audio/button_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.getSymbol("time").$("time_txt").html(timerCount);
         	var tCounter=setInterval(timer, 1000); //1000 will run the timer every 1 second
         	function timer()
            {
            timerCount=timerCount+1;
            sym.getSymbol("time").$("time_txt").html(timerCount); // Display the timer value 
         
            }
         card[0]=sym.getSymbol("kake").$("card1");
         card[1]=sym.getSymbol("kake").$("card2");
         card[2]=sym.getSymbol("kake").$("card3");
         card[3]=sym.getSymbol("kake").$("card4");
         card[4]=sym.getSymbol("kake").$("card5");
         card[5]=sym.getSymbol("kake").$("card6");
         card[6]=sym.getSymbol("kake").$("card7");
         card[7]=sym.getSymbol("kake").$("card8");
         card[8]=sym.getSymbol("kake").$("card9");
         card[9]=sym.getSymbol("kake").$("card10");
         
         
         cx[0]="331px";
         cx[1]="220px";
         cx[2]="428px";
         cx[3]="517px";
         cx[4]="517px";
         cx[5]="274px";
         cx[6]="252px";
         cx[7]="346px";
         cx[8]="428px";
         cx[9]="409px";
         
         
         cy[0]="107px";
         cy[1]="197px";
         cy[2]="86px";
         cy[3]="92px";
         cy[4]="237px";
         cy[5]="300px";
         cy[6]="91px";
         cy[7]="216px";
         cy[8]="216px";
         cy[9]="323px";
         
         
         for(i=0;i<=40;i++){
         rand1 = Math.round(Math.random()*9);
         rand2 = Math.round(Math.random()*9);
         tmp = card[rand1];
         card[rand1] = card[rand2];
         card[rand2] = tmp;      
         }
         
         
         
         
            sym.$("kakest").hide();
            sym.$("tashist").hide();
            sym.$("hikist").hide();
            sym.getSymbol("kake").$("gameselect").hide();	
         	sym.getSymbol("kake").$("close").show();	
         	sym.getSymbol("kake").$("yazi1").show();	
         	sym.getComposition().getStage().getSymbol("tashi").deleteSymbol();
         	sym.getComposition().getStage().getSymbol("hiki").deleteSymbol();
         
         
            x=Math.round(Math.random()*9+0.5);
            y=Math.round(Math.random()*9+0.5);
            z=x*y;
         
            x1=Math.round(Math.random()*9+0.5);
            y1=Math.round(Math.random()*9+0.5);
            z1=x1*y1;
         
            x2=Math.round(Math.random()*9+0.5);
            y2=Math.round(Math.random()*9+0.5);
            z2=x2*y2;
         
            x3=Math.round(Math.random()*9+0.5);
            y3=Math.round(Math.random()*9+0.5);
            z3=x3*y3;
         
            x4=Math.round(Math.random()*9+0.5);
            y4=Math.round(Math.random()*9+0.5);
            z4=x4*y4;
         
            x5=Math.round(Math.random()*9+0.5);
            y5=Math.round(Math.random()*9+0.5);
            z5=x5*y5;
         
            x6=Math.round(Math.random()*9+0.5);
            y6=Math.round(Math.random()*9+0.5);
            z6=x6*y6;
         
            x7=Math.round(Math.random()*9+0.5);
            y7=Math.round(Math.random()*9+0.5);
            z7=x7*y7;
         
            x8=Math.round(Math.random()*9+0.5);
            y8=Math.round(Math.random()*9+0.5);
            z8=x8*y8;
         
            x9=Math.round(Math.random()*9+0.5);
            y9=Math.round(Math.random()*9+0.5);
            z9=x9*y9;
         
         sym.getSymbol("kake").$("x").html(x+"×"+y);
         sym.getSymbol("kake").$("z").html(z);
         sym.getSymbol("kake").$("x1").html(x1+"×"+y1);
         sym.getSymbol("kake").$("z1").html(z1);
         sym.getSymbol("kake").$("x2").html(x2+"×"+y2);
         sym.getSymbol("kake").$("z2").html(z2);
         sym.getSymbol("kake").$("x3").html(x3+"×"+y3);
         sym.getSymbol("kake").$("z3").html(z3);
         sym.getSymbol("kake").$("x4").html(x4+"×"+y4);
         sym.getSymbol("kake").$("z4").html(z4);
         
         
         for(i=0;i<=9;i++){
         sym.getSymbol("kake").$(card[i]).animate({"left":cx[i],"top":cy[i]},1000);
         }
         
         sym.$("jyannru").hide();
         sym.getSymbol("kake").$("kabe").hide();
         sym.$("kotext").hide();
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hikist}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します
          sym.getComposition().getStage().getSymbol("time").play();
         sym.setVariable("myVariableName", "variableValue");
          music.play();
         var button = new Howl({
           urls: ['audio/button_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         
         
         
           	sym.getSymbol("time").$("time_txt").html(timerCount);
                    var tCounter=setInterval(timer, 1000); //1000 will run the timer every 1 second
         
                    function timer()
                    {
                      timerCount=timerCount+1;
                    sym.getSymbol("time").$("time_txt").html(timerCount); // Display the timer value 
         
                      }
         
         card[0]=sym.getSymbol("hiki").$("card1");
         card[1]=sym.getSymbol("hiki").$("card2");
         card[2]=sym.getSymbol("hiki").$("card3");
         card[3]=sym.getSymbol("hiki").$("card4");
         card[4]=sym.getSymbol("hiki").$("card5");
         card[5]=sym.getSymbol("hiki").$("card6");
         card[6]=sym.getSymbol("hiki").$("card7");
         card[7]=sym.getSymbol("hiki").$("card8");
         card[8]=sym.getSymbol("hiki").$("card9");
         card[9]=sym.getSymbol("hiki").$("card10");
         
         
         cx[0]="331px";
         cx[1]="220px";
         cx[2]="428px";
         cx[3]="517px";
         cx[4]="517px";
         cx[5]="274px";
         cx[6]="252px";
         cx[7]="346px";
         cx[8]="428px";
         cx[9]="409px";
         
         
         cy[0]="107px";
         cy[1]="197px";
         cy[2]="86px";
         cy[3]="92px";
         cy[4]="237px";
         cy[5]="300px";
         cy[6]="91px";
         cy[7]="216px";
         cy[8]="216px";
         cy[9]="323px";
         
         
         for(i=0;i<=40;i++){
         rand1 = Math.round(Math.random()*9);
         rand2 = Math.round(Math.random()*9);
         tmp = card[rand1];
         card[rand1] = card[rand2];
         card[rand2] = tmp;      
         }
         
            sym.$("tashist").hide();
            sym.$("kakest").hide();
            sym.$("hikist").hide();
            sym.getSymbol("hiki").$("gameselect").hide();	
         	sym.getSymbol("hiki").$("close").show();		
         	sym.getComposition().getStage().getSymbol("kake").deleteSymbol();
         	sym.getComposition().getStage().getSymbol("tashi").deleteSymbol();
         
            x=Math.round(Math.random()*9+0.5);
            y=Math.round(Math.random()*9+0.5);
            if(x<y){
            tmp = x;
            x = y;
            y = tmp;
            }
            z=x-y;
         
            x1=Math.round(Math.random()*9+0.5);
            y1=Math.round(Math.random()*9+0.5);
            if(x1<y1){
            tmp = x1;
            x1 = y1;
            y1 = tmp;
            }
            z1=x1-y1;
         
            x2=Math.round(Math.random()*9+0.5);
            y2=Math.round(Math.random()*9+0.5);
            if(x2<y2){
            tmp = x2;
            x2 = y2;
            y2 = tmp;
            }
            z2=x2-y2;
         
            x3=Math.round(Math.random()*9+0.5);
            y3=Math.round(Math.random()*9+0.5);
            if(x3<y3){
            tmp = x3;
            x3 = y3;
            y3 = tmp;
            }
            z3=x3-y3;
         
            x4=Math.round(Math.random()*9+0.5);
            y4=Math.round(Math.random()*9+0.5);
            if(x4<y4){
            tmp = x4;
            x4 = y4;
            y4 = tmp;
            }
            z4=x4-y4;
         
         
         sym.getSymbol("hiki").$("x").html(x+"-"+y);
         sym.getSymbol("hiki").$("z").html(z);
         sym.getSymbol("hiki").$("x1").html(x1+"-"+y1);
         sym.getSymbol("hiki").$("z1").html(z1);
         sym.getSymbol("hiki").$("x2").html(x2+"-"+y2);
         sym.getSymbol("hiki").$("z2").html(z2);
         sym.getSymbol("hiki").$("x3").html(x3+"-"+y3);
         sym.getSymbol("hiki").$("z3").html(z3);
         sym.getSymbol("hiki").$("x4").html(x4+"-"+y4);
         sym.getSymbol("hiki").$("z4").html(z4);
         
         
         for(i=0;i<=9;i++){
         sym.getSymbol("hiki").$(card[i]).animate({"left":cx[i],"top":cy[i]},1000);
         }
         
         sym.$("jyannru").hide();
         sym.getSymbol("hiki").$("kabe").hide();
         sym.$("kotext").hide();
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'time'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // コードをここに挿入
      });
      //Edge binding end

   })("time");
   //Edge symbol end:'time'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'button'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "mouseover", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("over");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "mouseout", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("normal");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "touchstart", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("down");

      });
      //Edge binding end

   })("button");
   //Edge symbol end:'button'

   //=========================================================
   
   //Edge symbol: 'kake'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         // コードをここに挿入

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.stop();
          sym.getComposition().getStage().getSymbol("time").deleteSymbol();
         sym.$("gameselect").show();
         sym.$("tensu").show();
         rtime=timerCount;
         var fan = new Howl({
           urls: ['audio/fan.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.7,
         });
         
         sym.$("result").show();
         
         if(rtime<100){
         toku=100-rtime;
         }
         sym.$("tasiten").html(p1+"pts");
         sym.$("tasitoku").show();
         p1+=toku;
         sym.$("ten").html(toku+"pts").show();
         sym.$("complete").html(p1+"pts");
         sym.$("kei").show();
         sym.$("smak").show();
         sym.getComposition().getStage().$("smagru").hide();
         sym.getComposition().getStage().$("koguru").hide();
         sym.getComposition().getStage().$("sumako3").show();
         localStorage.SINKEI10kscore = p1;

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_ura1}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura1").hide();
         flug=1;
         num=1;
         an1=z4;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura1").hide();
         flug=2;
         num2=1;
         an2=z4;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
         		cmb=1;
         			sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("wrong!");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura2}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura2").hide();
         flug=1;
         num=2;
         an1=z2;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura2").hide();
         flug=2;
         num2=2;
         an2=z2;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura3}", "touchstart", function(sym, e) {
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura3").hide();
         flug=1;
         num=3;
         an1=z3;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura3").hide();
         flug=2;
         num2=3;
         an2=z3;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura4}", "touchstart", function(sym, e) {
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura4").hide();
         flug=1;
         num=4;
         an1=z4;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura4").hide();
         flug=2;
         num2=4;
         an2=z4;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
  		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura5}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug==0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura5").hide();
         flug=1;
         num=5;
         an1=z;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura5").hide();
         flug=2;
         num2=5;
         an2=z;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
            flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura6}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug==0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura6").hide();
         flug=1;
         num=6;
         an1=z2;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura6").hide();
         flug=2;
         num2=6;
         an2=z2;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
      		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura7}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug==0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura7").hide();
         flug=1;
         num=7;
         an1=z1;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura7").hide();
         flug=2;
         num2=7;
         an2=z1
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
       		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         	}
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura8}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug==0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura8").hide();
         flug=1;
         num=8;
         an1=z1;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura8").hide();
         flug=2;
         num2=8;
         an2=z1;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
         	flug=0;
            ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
  		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura9}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug==0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura9").hide();
         flug=1;
         num=9;
         an1=z;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura9").hide();
         flug=2;
         num2=9;
         an2=z;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
            flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura10}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug==0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura10").hide();
         flug=1;
         num=10;
         an1=z3;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura10").hide();
         flug=2;
         num2=10;
         an2=z3;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
            sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
      		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         }
         
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_close}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug==2){
         var button = new Howl({
           urls: ['audio/button_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         	if(num==1 || num2==1){
         	sym.$("ura1").show();
         	}
         	if(num==2 || num2==2){
         	sym.$("ura2").show();
         	}
         	if(num==3 || num2==3){
         	sym.$("ura3").show();
         	}
         	if(num==4 || num2==4){
         	sym.$("ura4").show();
         	}
         	if(num==5 || num2==5){
         	sym.$("ura5").show();
         	}
         	if(num==6 || num2==6){
         	sym.$("ura6").show();
         	}
         	if(num==7 || num2==7){
         	sym.$("ura7").show();
         	}
         	if(num==8 || num2==8){
         	sym.$("ura8").show();
         	}
         	if(num==9 || num2==9){
         	sym.$("ura9").show();
         	}
         	if(num==10 || num2==10){
         	sym.$("ura10").show();
         	}
         	
         	flug=0;
         	cflug=0;
         	sym.$("combo").hide();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_result}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         var button = new Howl({
           urls: ['audio/button_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         document.location.reload(true);
         

      });
      //Edge binding end

      

   })("kake");
   //Edge symbol end:'kake'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'kake'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         // コードをここに挿入

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.stop();
          sym.getComposition().getStage().getSymbol("time").deleteSymbol();
         
         sym.$("gameselect").show();
         sym.$("tensu").show();
         rtime=timerCount;
         var fan = new Howl({
           urls: ['audio/fan.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.7,
         });
         
         sym.$("result").show();
         
         if(rtime<100){
         toku=100-rtime;
         }
         sym.$("tasiten").html(p1+"pts");
         sym.$("tasitoku").show();
         p1+=toku;
         sym.$("ten").html(toku+"pts").show();
         sym.$("complete").html(p1+"pts");
         sym.$("kei").show();
         sym.$("smat").show();
         
         
         sym.getComposition().getStage().$("smagru").hide();
         sym.getComposition().getStage().$("koguru").hide();
         sym.getComposition().getStage().$("sumako3").show();
         localStorage.SINKEI10tscore = p1;

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_result}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         var button = new Howl({
           urls: ['audio/button_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         document.location.reload(true);
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_close}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug==2){
         var button = new Howl({
           urls: ['audio/button_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         	if(num==1 || num2==1){
         	sym.$("ura1").show();
         	}
         	if(num==2 || num2==2){
         	sym.$("ura2").show();
         	}
         	if(num==3 || num2==3){
         	sym.$("ura3").show();
         	}
         	if(num==4 || num2==4){
         	sym.$("ura4").show();
         	}
         	if(num==5 || num2==5){
         	sym.$("ura5").show();
         	}
         	if(num==6 || num2==6){
         	sym.$("ura6").show();
         	}
         	if(num==7 || num2==7){
         	sym.$("ura7").show();
         	}
         	if(num==8 || num2==8){
         	sym.$("ura8").show();
         	}
         	if(num==9 || num2==9){
         	sym.$("ura9").show();
         	}
         	if(num==10 || num2==10){
         	sym.$("ura10").show();
         	}
         
         	flug=0;
         	cflug=0;
         	sym.$("combo").hide();
         }
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura10}", "touchstart", function(sym, e) {
                  // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
                  
                  if(flug==0){
                  var hiku = new Howl({
                    urls: ['audio/hiku.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                  });
                  sym.$("ura10").hide();
                  flug=1;
                  num=10;
                  an1=z3;
                  }else if(flug==1){
                  var hiku = new Howl({
                    urls: ['audio/hiku.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                  });
                  sym.$("ura10").hide();
                  flug=2;
                  num2=10;
                  an2=z3;
                  if(an1==an2){
                  if(num==1 || num2==1){
                  	sym.$("card1").fadeOut(ts);
                  	}
                  	if(num==2 || num2==2){
                  	sym.$("card2").fadeOut(ts);
                  	}
                  	if(num==3 || num2==3){
                  	sym.$("card3").fadeOut(ts);
                  	}
                  	if(num==4 || num2==4){
                     sym.$("card4").fadeOut(ts);
                  	}
                  	if(num==5 || num2==5){
                  	sym.$("card5").fadeOut(ts);
                  	}
                  	if(num==6 || num2==6){
                  	sym.$("card6").fadeOut(ts);
                  	}
                  	if(num==7 || num2==7){
                  	sym.$("card7").fadeOut(ts);
                  	}
                  	if(num==8 || num2==8){
                  	sym.$("card8").fadeOut(ts);
                  	}
                  	if(num==9 || num2==9){
                  	sym.$("card9").fadeOut(ts);
                  	}
                  	if(num==10 || num2==10){
                  	sym.$("card10").fadeOut(ts);
                  	}
                  
                  	flug=0;
                  	ct1+=2;
                  	if(cflug==1){
                  		cmb++;
                  		sym.$("combo").html(cmb+"combo!!");
                  		sym.$("combo").show();
                  		sym.$("fc").html(cmb+"combo!!");
         					sym.$("hukidasi").show();
         					sym.$("hukidasi").fadeOut(ss);
                  	}else if(cflug==0){
         		sym.$("ans").html("correct！");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         		cmb=1;
         	}
         	p1=p1+(2*cmb);
         	sym.$("pt").html(p1);
         
         	cflug=1;
         
         		var tr = new Howl({
           urls: ['audio/true_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         	if(ct1==10){
         sym.play("com");
         }
         }else{
         		sym.$("ans").html("No! Sorry～");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         }
                  }
         
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura9}", "touchstart", function(sym, e) {
                  // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
                  
                  if(flug==0){
                  var hiku = new Howl({
                    urls: ['audio/hiku.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                  });
                  sym.$("ura9").hide();
                  flug=1;
                  num=9;
                  an1=z;
                  }else if(flug==1){
                  var hiku = new Howl({
                    urls: ['audio/hiku.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                  });
                  sym.$("ura9").hide();
                  flug=2;
                  num2=9;
                  an2=z;
                  if(an1==an2){
                  if(num==1 || num2==1){
                  	sym.$("card1").fadeOut(ts);
                  	}
                  	if(num==2 || num2==2){
                  	sym.$("card2").fadeOut(ts);
                  	}
                  	if(num==3 || num2==3){
                  	sym.$("card3").fadeOut(ts);
                  	}
                  	if(num==4 || num2==4){
                  	sym.$("card4").fadeOut(ts);
                  	}
                  	if(num==5 || num2==5){
                  	sym.$("card5").fadeOut(ts);
                  	}
                  	if(num==6 || num2==6){
                  	sym.$("card6").fadeOut(ts);
                  	}
                  	if(num==7 || num2==7){
                  	sym.$("card7").fadeOut(ts);
                  	}
                  	if(num==8 || num2==8){
                  	sym.$("card8").fadeOut(ts);
                  	}
                  	if(num==9 || num2==9){
                  	sym.$("card9").fadeOut(ts);
                  	}
                  	if(num==10 || num2==10){
                  	sym.$("card10").fadeOut(ts);
                  	}
                  
                     flug=0;
                  	ct1+=2;
                  	if(cflug==1){
                  		cmb++;
                  		sym.$("combo").html(cmb+"combo!!");
                  		sym.$("combo").show();
                  		sym.$("fc").html(cmb+"combo!!");
         					sym.$("hukidasi").show();
         					sym.$("hukidasi").fadeOut(ss);
                  	}else if(cflug==0){
         		sym.$("ans").html("correct！");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         		cmb=1;
         	}
         	p1=p1+(2*cmb);
         	sym.$("pt").html(p1);
         
         	cflug=1;
         
         		var tr = new Howl({
           urls: ['audio/true_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         	if(ct1==10){
         sym.play("com");
         }
         }else{
         		sym.$("ans").html("No! Sorry～");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         }
                  }
         
         
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura8}", "touchstart", function(sym, e) {
                  // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
                  
                  if(flug==0){
                  var hiku = new Howl({
                    urls: ['audio/hiku.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                  });
                  sym.$("ura8").hide();
                  flug=1;
                  num=8;
                  an1=z1;
                  }else if(flug==1){
                  var hiku = new Howl({
                    urls: ['audio/hiku.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                  });
                  sym.$("ura8").hide();
                  flug=2;
                  num2=8;
                  an2=z1;
                  if(an1==an2){
                  if(num==1 || num2==1){
                  	sym.$("card1").fadeOut(ts);
                  	}
                  	if(num==2 || num2==2){
                  	sym.$("card2").fadeOut(ts);
                  	}
                  	if(num==3 || num2==3){
                  	sym.$("card3").fadeOut(ts);
                  	}
                  	if(num==4 || num2==4){
                  	sym.$("card4").fadeOut(ts);
                  	}
                  	if(num==5 || num2==5){
                  	sym.$("card5").fadeOut(ts);
                  	}
                  	if(num==6 || num2==6){
                  	sym.$("card6").fadeOut(ts);
                  	}
                  	if(num==7 || num2==7){
                  	sym.$("card7").fadeOut(ts);
                  	}
                  	if(num==8 || num2==8){
                  	sym.$("card8").fadeOut(ts);
                  	}
                  	if(num==9 || num2==9){
                  	sym.$("card9").fadeOut(ts);
                  	}
                  	if(num==10 || num2==10){
                  	sym.$("card10").fadeOut(ts);
                  	}
                  
                  	flug=0;
                     ct1+=2;
                  	if(cflug==1){
                  		cmb++;
                  		sym.$("combo").html(cmb+"combo!!");
                  		sym.$("combo").show();
                  		sym.$("fc").html(cmb+"combo!!");
         					sym.$("hukidasi").show();
         					sym.$("hukidasi").fadeOut(ss);
                  	}else if(cflug==0){
         		sym.$("ans").html("correct！");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         		cmb=1;
         	}
         	p1=p1+(2*cmb);
         	sym.$("pt").html(p1);
         
         	cflug=1;
         
         		var tr = new Howl({
           urls: ['audio/true_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         	if(ct1==10){
         sym.play("com");
         }
         }else{
         		sym.$("ans").html("No! Sorry～");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         }
                  }
         
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura7}", "touchstart", function(sym, e) {
                  // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
                  
                  if(flug==0){
                  var hiku = new Howl({
                    urls: ['audio/hiku.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                  });
                  sym.$("ura7").hide();
                  flug=1;
                  num=7;
                  an1=z1;
                  }else if(flug==1){
                  var hiku = new Howl({
                    urls: ['audio/hiku.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                  });
                  sym.$("ura7").hide();
                  flug=2;
                  num2=7;
                  an2=z1
                  if(an1==an2){
                  if(num==1 || num2==1){
                  	sym.$("card1").fadeOut(ts);
                  	}
                  	if(num==2 || num2==2){
                  	sym.$("card2").fadeOut(ts);
                  	}
                  	if(num==3 || num2==3){
                  	sym.$("card3").fadeOut(ts);
                  	}
                  	if(num==4 || num2==4){
                  	sym.$("card4").fadeOut(ts);
                  	}
                  	if(num==5 || num2==5){
                  	sym.$("card5").fadeOut(ts);
                  	}
                  	if(num==6 || num2==6){
                  	sym.$("card6").fadeOut(ts);
                  	}
                  	if(num==7 || num2==7){
                  	sym.$("card7").fadeOut(ts);
                  	}
                  	if(num==8 || num2==8){
                  	sym.$("card8").fadeOut(ts);
                  	}
                  	if(num==9 || num2==9){
                  	sym.$("card9").fadeOut(ts);
                  	}
                  	if(num==10 || num2==10){
                  	sym.$("card10").fadeOut(ts);
                  	}
                  
                  	flug=0;
                  	ct1+=2;
                  	if(cflug==1){
                  		cmb++;
                  		sym.$("combo").html(cmb+"combo!!");
                  		sym.$("combo").show();
                  		sym.$("fc").html(cmb+"combo!!");
         					sym.$("hukidasi").show();
         					sym.$("hukidasi").fadeOut(ss);
                  	}else if(cflug==0){
         		sym.$("ans").html("correct！");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         		cmb=1;
         	}
         	p1=p1+(2*cmb);
         	sym.$("pt").html(p1);
         
         	cflug=1;
         
         		var tr = new Howl({
           urls: ['audio/true_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         	if(ct1==10){
         sym.play("com");
         }
         }else{
         		sym.$("ans").html("No! Sorry～");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         }
                  	}
         
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura6}", "touchstart", function(sym, e) {
                  // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
                  
                  if(flug==0){
                  var hiku = new Howl({
                    urls: ['audio/hiku.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                  });
                  sym.$("ura6").hide();
                  flug=1;
                  num=6;
                  an1=z2;
                  }else if(flug==1){
                  var hiku = new Howl({
                    urls: ['audio/hiku.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                  });
                  sym.$("ura6").hide();
                  flug=2;
                  num2=6;
                  an2=z2;
                  if(an1==an2){
                  if(num==1 || num2==1){
                  	sym.$("card1").fadeOut(ts);
                  	}
                  	if(num==2 || num2==2){
                  	sym.$("card2").fadeOut(ts);
                  	}
                  	if(num==3 || num2==3){
                  	sym.$("card3").fadeOut(ts);
                  	}
                  	if(num==4 || num2==4){
                  	sym.$("card4").fadeOut(ts);
                  	}
                  	if(num==5 || num2==5){
                  	sym.$("card5").fadeOut(ts);
                  	}
                  	if(num==6 || num2==6){
                  	sym.$("card6").fadeOut(ts);
                  	}
                  	if(num==7 || num2==7){
                  	sym.$("card7").fadeOut(ts);
                  	}
                  	if(num==8 || num2==8){
                  	sym.$("card8").fadeOut(ts);
                  	}
                  	if(num==9 || num2==9){
                  	sym.$("card9").fadeOut(ts);
                  	}
                  	if(num==10 || num2==10){
                  	sym.$("card10").fadeOut(ts);
                  	}
                  
                  	flug=0;
                  	ct1+=2;
                  	if(cflug==1){
                  		cmb++;
                  		sym.$("combo").html(cmb+"combo!!");
                  		sym.$("combo").show();
                  		sym.$("fc").html(cmb+"combo!!");
         					sym.$("hukidasi").show();
         					sym.$("hukidasi").fadeOut(ss);
                  	}else if(cflug==0){
         		sym.$("ans").html("correct！");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         		cmb=1;
         	}
         	p1=p1+(2*cmb);
         	sym.$("pt").html(p1);
         
         	cflug=1;
         
         		var tr = new Howl({
           urls: ['audio/true_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         	if(ct1==10){
         sym.play("com");
         }
         }else{
         		sym.$("ans").html("No! Sorry～");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         }
                  }
         
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura5}", "touchstart", function(sym, e) {
                  // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
                  
                  if(flug==0){
                  var hiku = new Howl({
                    urls: ['audio/hiku.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                  });
                  sym.$("ura5").hide();
                  flug=1;
                  num=5;
                  an1=z;
                  }else if(flug==1){
                  var hiku = new Howl({
                    urls: ['audio/hiku.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                  });
                  sym.$("ura5").hide();
                  flug=2;
                  num2=5;
                  an2=z;
                  if(an1==an2){
                  if(num==1 || num2==1){
                  	sym.$("card1").fadeOut(ts);
                  	}
                  	if(num==2 || num2==2){
                  	sym.$("card2").fadeOut(ts);
                  	}
                  	if(num==3 || num2==3){
                  	sym.$("card3").fadeOut(ts);
                  	}
                  	if(num==4 || num2==4){
                  	sym.$("card4").fadeOut(ts);
                  	}
                  	if(num==5 || num2==5){
                  	sym.$("card5").fadeOut(ts);
                  	}
                  	if(num==6 || num2==6){
                  	sym.$("card6").fadeOut(ts);
                  	}
                  	if(num==7 || num2==7){
                  	sym.$("card7").fadeOut(ts);
                  	}
                  	if(num==8 || num2==8){
                  	sym.$("card8").fadeOut(ts);
                  	}
                  	if(num==9 || num2==9){
                  	sym.$("card9").fadeOut(ts);
                  	}
                  	if(num==10 || num2==10){
                  	sym.$("card10").fadeOut(ts);
                  	}
                  
                     flug=0;
                  	ct1+=2;
                  	if(cflug==1){
                  		cmb++;
                  		sym.$("combo").html(cmb+"combo!!");
                  		sym.$("combo").show();
                  		sym.$("fc").html(cmb+"combo!!");
         					sym.$("hukidasi").show();
         					sym.$("hukidasi").fadeOut(ss);
                  	}else if(cflug==0){
                		sym.$("ans").html("correct！");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         		cmb=1;
         	}
         	p1=p1+(2*cmb);
         	sym.$("pt").html(p1);
         
         	cflug=1;
         
         		var tr = new Howl({
           urls: ['audio/true_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         	if(ct1==10){
         sym.play("com");
         }
         }else{
         		sym.$("ans").html("No! Sorry～");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         }
                  }
         
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura4}", "touchstart", function(sym, e) {
                  
                  if(flug == 0){
                  var hiku = new Howl({
                    urls: ['audio/hiku.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                  });
                  sym.$("ura4").hide();
                  flug=1;
                  num=4;
                  an1=z4;
                  }else if(flug==1){
                  var hiku = new Howl({
                    urls: ['audio/hiku.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                  });
                  sym.$("ura4").hide();
                  flug=2;
                  num2=4;
                  an2=z4;
                  if(an1==an2){
                  if(num==1 || num2==1){
                  	sym.$("card1").fadeOut(ts);
                  	}
                  	if(num==2 || num2==2){
                  	sym.$("card2").fadeOut(ts);
                  	}
                  	if(num==3 || num2==3){
                  	sym.$("card3").fadeOut(ts);
                  	}
                  	if(num==4 || num2==4){
                  	sym.$("card4").fadeOut(ts);
                  	}
                  	if(num==5 || num2==5){
                  	sym.$("card5").fadeOut(ts);
                  	}
                  	if(num==6 || num2==6){
                  	sym.$("card6").fadeOut(ts);
                  	}
                  	if(num==7 || num2==7){
                  	sym.$("card7").fadeOut(ts);
                  	}
                  	if(num==8 || num2==8){
                  	sym.$("card8").fadeOut(ts);
                  	}
                  	if(num==9 || num2==9){
                  	sym.$("card9").fadeOut(ts);
                  	}
                  	if(num==10 || num2==10){
                  	sym.$("card10").fadeOut(ts);
                  	}
                  
                  	flug=0;
                  	ct1+=2;
                  	if(cflug==1){
                  		cmb++;
                  		sym.$("combo").html(cmb+"combo!!");
                  		sym.$("combo").show();
                  		sym.$("fc").html(cmb+"combo!!");
         					sym.$("hukidasi").show();
         					sym.$("hukidasi").fadeOut(ss);
                  	}else if(cflug==0){
         		sym.$("ans").html("correct！");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         		cmb=1;
         	}
         	p1=p1+(2*cmb);
         	sym.$("pt").html(p1);
         
         	cflug=1;
         
         		var tr = new Howl({
           urls: ['audio/true_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         	if(ct1==10){
         sym.play("com");
         }
         }else{
         		sym.$("ans").html("No! Sorry～");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         }
                  }
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura3}", "touchstart", function(sym, e) {
                  
                  if(flug == 0){
                  var hiku = new Howl({
                    urls: ['audio/hiku.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                  });
                  sym.$("ura3").hide();
                  flug=1;
                  num=3;
                  an1=z3;
                  }else if(flug==1){
                  var hiku = new Howl({
                    urls: ['audio/hiku.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                  });
                  sym.$("ura3").hide();
                  flug=2;
                  num2=3;
                  an2=z3;
                  if(an1==an2){
                  if(num==1 || num2==1){
                  	sym.$("card1").fadeOut(ts);
                  	}
                  	if(num==2 || num2==2){
                  	sym.$("card2").fadeOut(ts);
                  	}
                  	if(num==3 || num2==3){
                  	sym.$("card3").fadeOut(ts);
                  	}
                  	if(num==4 || num2==4){
                  	sym.$("card4").fadeOut(ts);
                  	}
                  	if(num==5 || num2==5){
                  	sym.$("card5").fadeOut(ts);
                  	}
                  	if(num==6 || num2==6){
                  	sym.$("card6").fadeOut(ts);
                  	}
                  	if(num==7 || num2==7){
                  	sym.$("card7").fadeOut(ts);
                  	}
                  	if(num==8 || num2==8){
                  	sym.$("card8").fadeOut(ts);
                  	}
                  	if(num==9 || num2==9){
                  	sym.$("card9").fadeOut(ts);
                  	}
                  	if(num==10 || num2==10){
                  	sym.$("card10").fadeOut(ts);
                  	}
                  
                  	flug=0;
                  	ct1+=2;
                  	if(cflug==1){
                  		cmb++;
                  		sym.$("combo").html(cmb+"combo!!");
                  		sym.$("combo").show();
                  		sym.$("fc").html(cmb+"combo!!");
         					sym.$("hukidasi").show();
         					sym.$("hukidasi").fadeOut(ss);
                  	}else if(cflug==0){
          		sym.$("ans").html("correct！");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         		cmb=1;
         	}
         	p1=p1+(2*cmb);
         	sym.$("pt").html(p1);
         
         	cflug=1;
         
         		var tr = new Howl({
           urls: ['audio/true_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         	if(ct1==10){
         sym.play("com");
         }
         }else{
         		sym.$("ans").html("No! Sorry～");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         }
                  }
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura2}", "touchstart", function(sym, e) {
                  // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
                  
                  if(flug == 0){
                  var hiku = new Howl({
                    urls: ['audio/hiku.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                  });
                  sym.$("ura2").hide();
                  flug=1;
                  num=2;
                  an1=z2;
                  }else if(flug==1){
                  var hiku = new Howl({
                    urls: ['audio/hiku.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,
                  });
                  sym.$("ura2").hide();
                  flug=2;
                  num2=2;
                  an2=z2;
                  if(an1==an2){
                  if(num==1 || num2==1){
                  	sym.$("card1").fadeOut(ts);
                  	}
                  	if(num==2 || num2==2){
                  	sym.$("card2").fadeOut(ts);
                  	}
                  	if(num==3 || num2==3){
                  	sym.$("card3").fadeOut(ts);
                  	}
                  	if(num==4 || num2==4){
                  	sym.$("card4").fadeOut(ts);
                  	}
                  	if(num==5 || num2==5){
                  	sym.$("card5").fadeOut(ts);
                  	}
                  	if(num==6 || num2==6){
                  	sym.$("card6").fadeOut(ts);
                  	}
                  	if(num==7 || num2==7){
                  	sym.$("card7").fadeOut(ts);
                  	}
                  	if(num==8 || num2==8){
                  	sym.$("card8").fadeOut(ts);
                  	}
                  	if(num==9 || num2==9){
                  	sym.$("card9").fadeOut(ts);
                  	}
                  	if(num==10 || num2==10){
                  	sym.$("card10").fadeOut(ts);
                  	}
                  
                  	flug=0;
                  	ct1+=2;
                  	if(cflug==1){
                  		cmb++;
                  		sym.$("combo").html(cmb+"combo!!");
                  		sym.$("combo").show();
                  		sym.$("fc").html(cmb+"combo!!");
         					sym.$("hukidasi").show();
         					sym.$("hukidasi").fadeOut(ss);
                  	}else if(cflug==0){
         		sym.$("ans").html("correct！");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         		cmb=1;
         	}
         	p1=p1+(2*cmb);
         	sym.$("pt").html(p1);
         
         	cflug=1;
         
         		var tr = new Howl({
           urls: ['audio/true_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         	if(ct1==10){
         sym.play("com");
         }
         }else{
         		sym.$("ans").html("No! Sorry～");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         }
                  }
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura1}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura1").hide();
         flug=1;
         num=1;
         an1=z4;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura1").hide();
         flug=2;
         num2=1;
         an2=z4;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
         		sym.$("hukidasi").show();
         		sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
         		cmb=1;
         		sym.$("ans").html("correct！");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         		cmb=1;
         	}
         	p1=p1+(2*cmb);
         	sym.$("pt").html(p1);
         
         	cflug=1;
         
         		var tr = new Howl({
           urls: ['audio/true_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         	if(ct1==10){
         sym.play("com");
         }
         }else{
         		sym.$("ans").html("No! Sorry～");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ss);
         }
         }
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

   })("tashi");
   //Edge symbol end:'tashi'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'kake'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         // コードをここに挿入

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.stop();
          sym.getComposition().getStage().getSymbol("time").deleteSymbol();
         sym.$("gameselect").show();
         sym.$("tensu").show();
         rtime=timerCount;
         var fan = new Howl({
           urls: ['audio/fan.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.7,
         });
         
         sym.$("result").show();
         
         if(rtime<100){
         toku=100-rtime;
         }
         sym.$("tasiten").html(p1+"pts");
         sym.$("tasitoku").show();
         p1+=toku;
         sym.$("ten").html(toku+"pts").show();
         sym.$("complete").html(p1+"pts");
         sym.$("kei").show();
         sym.$("smah").show();
         sym.getComposition().getStage().$("smagru").hide();
         sym.getComposition().getStage().$("koguru").hide();
         sym.getComposition().getStage().$("sumako3").show();
         localStorage.SINKEI10hscore = p1;

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_ura1}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura1").hide();
         flug=1;
         num=1;
         an1=z4;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura1").hide();
         flug=2;
         num2=1;
         an2=z4;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
    		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura2}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura2").hide();
         flug=1;
         num=2;
         an1=z2;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura2").hide();
         flug=2;
         num2=2;
         an2=z2;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura3}", "touchstart", function(sym, e) {
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura3").hide();
         flug=1;
         num=3;
         an1=z3;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura3").hide();
         flug=2;
         num2=3;
         an2=z3;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
         	flug=0;
         	ct1+=2;
         if(cflug==1){
         cmb++;
         sym.$("combo").html(cmb+"combo!!");
         sym.$("combo").show();
         sym.$("fc").html(cmb+"combo!!");
			sym.$("hukidasi").show();
			sym.$("hukidasi").fadeOut(ss);
         }else if(cflug==0){
		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura4}", "touchstart", function(sym, e) {
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura4").hide();
         flug=1;
         num=4;
         an1=z4;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura4").hide();
         flug=2;
         num2=4;
         an2=z4;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura5}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug==0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura5").hide();
         flug=1;
         num=5;
         an1=z;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura5").hide();
         flug=2;
         num2=5;
         an2=z;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
            flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura6}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug==0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura6").hide();
         flug=1;
         num=6;
         an1=z2;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura6").hide();
         flug=2;
         num2=6;
         an2=z2;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura7}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug==0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura7").hide();
         flug=1;
         num=7;
         an1=z1;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura7").hide();
         flug=2;
         num2=7;
         an2=z1
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         	}
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura8}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug==0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura8").hide();
         flug=1;
         num=8;
         an1=z1;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura8").hide();
         flug=2;
         num2=8;
         an2=z1;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
         	flug=0;
            ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura9}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug==0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura9").hide();
         flug=1;
         num=9;
         an1=z;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura9").hide();
         flug=2;
         num2=9;
         an2=z;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
         	sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
            flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
 		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura10}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug==0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura10").hide();
         flug=1;
         num=10;
         an1=z3;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura10").hide();
         flug=2;
         num2=10;
         an2=z3;
         if(an1==an2){
         if(num==1 || num2==1){
         	sym.$("card1").fadeOut(ts);
         	}
         	if(num==2 || num2==2){
         	sym.$("card2").fadeOut(ts);
         	}
         	if(num==3 || num2==3){
         	sym.$("card3").fadeOut(ts);
         	}
         	if(num==4 || num2==4){
            sym.$("card4").fadeOut(ts);
         	}
         	if(num==5 || num2==5){
         	sym.$("card5").fadeOut(ts);
         	}
         	if(num==6 || num2==6){
         	sym.$("card6").fadeOut(ts);
         	}
         	if(num==7 || num2==7){
         	sym.$("card7").fadeOut(ts);
         	}
         	if(num==8 || num2==8){
         	sym.$("card8").fadeOut(ts);
         	}
         	if(num==9 || num2==9){
         	sym.$("card9").fadeOut(ts);
         	}
         	if(num==10 || num2==10){
         	sym.$("card10").fadeOut(ts);
         	}
         	
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ss);
         	}else if(cflug==0){
		sym.$("ans").html("correct！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
		cmb=1;
	}
	p1=p1+(2*cmb);
	sym.$("pt").html(p1);

	cflug=1;

		var tr = new Howl({
  urls: ['audio/true_kake.mp3'],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
	if(ct1==10){
sym.play("com");
}
}else{
		sym.$("ans").html("No! Sorry～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ss);
}
         }
         
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_close}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug==2){
         var button = new Howl({
           urls: ['audio/button_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         	if(num==1 || num2==1){
         	sym.$("ura1").show();
         	}
         	if(num==2 || num2==2){
         	sym.$("ura2").show();
         	}
         	if(num==3 || num2==3){
         	sym.$("ura3").show();
         	}
         	if(num==4 || num2==4){
         	sym.$("ura4").show();
         	}
         	if(num==5 || num2==5){
         	sym.$("ura5").show();
         	}
         	if(num==6 || num2==6){
         	sym.$("ura6").show();
         	}
         	if(num==7 || num2==7){
         	sym.$("ura7").show();
         	}
         	if(num==8 || num2==8){
         	sym.$("ura8").show();
         	}
         	if(num==9 || num2==9){
         	sym.$("ura9").show();
         	}
         	if(num==10 || num2==10){
         	sym.$("ura10").show();
         	}
         	
         	flug=0;
         	cflug=0;
         	sym.$("combo").hide();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_result}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         var button = new Howl({
           urls: ['audio/button_kake.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         document.location.reload(true);
         

      });
      //Edge binding end

      

   })("hiki");
   //Edge symbol end:'hiki'

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

})(jQuery, AdobeEdge, "EDGE-10032191");