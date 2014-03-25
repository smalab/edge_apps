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
	var x5=0,y5=0,z5=0,x6=0,y6=0,z6=0,x7=0,y7=0,z7=0,x8=0,y8=0,z8=0,x9=0,y9=0,z9=0;
	var p1=0;
	var ts=1500;
	var pflug=1;
	var ct1=0;
	var card = new Array(20);
	var cx = new Array (20);
	var cy = new Array (20);
	var rand1 = 0;
	var rand2 = 0;
	var tmp =0;
	var i=0;
   var cflug=0;
   var cmb=1;
	var timerCount=0; 
	var rtime=0;
	var toku=0;
	
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
         card[10]=sym.getSymbol("hiki").$("card11");
         card[11]=sym.getSymbol("hiki").$("card12");
         card[12]=sym.getSymbol("hiki").$("card13");
         card[13]=sym.getSymbol("hiki").$("card14");
         card[14]=sym.getSymbol("hiki").$("card15");
         card[15]=sym.getSymbol("hiki").$("card16");
         card[16]=sym.getSymbol("hiki").$("card17");
         card[17]=sym.getSymbol("hiki").$("card18");
         card[18]=sym.getSymbol("hiki").$("card19");
         card[19]=sym.getSymbol("hiki").$("card20");
         
         cx[0]="94px";
         cx[1]="69px";
         cx[2]="699px";
         cx[3]="164px";
         cx[4]="174px";
         cx[5]="224px";
         cx[6]="250px";
         cx[7]="276px";
         cx[8]="302px";
         cx[9]="328px";
         cx[10]="360px";
         cx[11]="396px";
         cx[12]="422px";
         cx[13]="459px";
         cx[14]="496px";
         cx[15]="513px";
         cx[16]="545px";
         cx[17]="591px";
         cx[18]="636px";
         cx[19]="636px";
         
         cy[0]="174px";
         cy[1]="280px";
         cy[2]="364px";
         cy[3]="123px";
         cy[4]="262px";
         cy[5]="369px";
         cy[6]="106px";
         cy[7]="233px";
         cy[8]="372px";
         cy[9]="91px";
         cy[10]="222px";
         cy[11]="345px";
         cy[12]="102px";
         cy[13]="250px";
         cy[14]="364px";
         cy[15]="113px";
         cy[16]="223px";
         cy[17]="381px";
         cy[18]="113px";
         cy[19]="252px";
         
         for(i=0;i<=40;i++){
         rand1 = Math.round(Math.random()*19);
         rand2 = Math.round(Math.random()*19);
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
         
            x=Math.round(Math.random()*20+0.5);
            y=Math.round(Math.random()*9+0.5);
            if(x<y){
            tmp = x;
            x = y;
            y = tmp;
            }
            z=x-y;
         
            x1=Math.round(Math.random()*20+0.5);
            y1=Math.round(Math.random()*9+0.5);
            if(x1<y1){
            tmp = x1;
            x1 = y1;
            y1 = tmp;
            }
            z1=x1-y1;
         
            x2=Math.round(Math.random()*20+0.5);
            y2=Math.round(Math.random()*9+0.5);
            if(x2<y2){
            tmp = x2;
            x2 = y2;
            y2 = tmp;
            }
            z2=x2-y2;
         
            x3=Math.round(Math.random()*20+0.5);
            y3=Math.round(Math.random()*9+0.5);
            if(x3<y3){
            tmp = x3;
            x3 = y3;
            y3 = tmp;
            }
            z3=x3-y3;
         
            x4=Math.round(Math.random()*20+0.5);
            y4=Math.round(Math.random()*9+0.5);
            if(x4<y4){
            tmp = x4;
            x4 = y4;
            y4 = tmp;
            }
            z4=x4-y4;
         
            x5=Math.round(Math.random()*20+0.5);
            y5=Math.round(Math.random()*9+0.5);
            if(x5<y5){
            tmp = x5;
            x5 = y5;
            y5 = tmp;
            }
            z5=x5-y5;
         
            x6=Math.round(Math.random()*20+0.5);
            y6=Math.round(Math.random()*9+0.5);
            if(x6<y6){
            tmp = x6;
            x6 = y6;
            y6 = tmp;
            }
            z6=x6-y6;
         
            x7=Math.round(Math.random()*20+0.5);
            y7=Math.round(Math.random()*9+0.5);
            if(x7<y7){
            tmp = x7;
            x7 = y7;
            y7 = tmp;
            }
            z7=x7-y7;
         
            x8=Math.round(Math.random()*20+0.5);
            y8=Math.round(Math.random()*9+0.5);
            if(x8<y8){
            tmp = x8;
            x8 = y8;
            y8 = tmp;
            }
            z8=x8-y8;
         
            x9=Math.round(Math.random()*20+0.5);
            y9=Math.round(Math.random()*9+0.5);
            if(x9<y9){
            tmp = x9;
            x9 = y9;
            y9 = tmp;
            }
            z9=x9-y9;
         
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
         sym.getSymbol("hiki").$("x5").html(x5+"-"+y5);
         sym.getSymbol("hiki").$("z5").html(z5);
         sym.getSymbol("hiki").$("x6").html(x6+"-"+y6);
         sym.getSymbol("hiki").$("z6").html(z6);
         sym.getSymbol("hiki").$("x7").html(x7+"-"+y7);
         sym.getSymbol("hiki").$("z7").html(z7);
         sym.getSymbol("hiki").$("x8").html(x8+"-"+y8);
         sym.getSymbol("hiki").$("z8").html(z8);
         sym.getSymbol("hiki").$("x9").html(x9+"-"+y9);
         sym.getSymbol("hiki").$("z9").html(z9);
         
         for(i=0;i<=19;i++){
         sym.getSymbol("hiki").$(card[i]).animate({"left":cx[i],"top":cy[i]},1000);
         }
         
         sym.$("jyannru").hide();
         sym.getSymbol("hiki").$("kabe").hide();
         
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
         card[10]=sym.getSymbol("kake").$("card11");
         card[11]=sym.getSymbol("kake").$("card12");
         card[12]=sym.getSymbol("kake").$("card13");
         card[13]=sym.getSymbol("kake").$("card14");
         card[14]=sym.getSymbol("kake").$("card15");
         card[15]=sym.getSymbol("kake").$("card16");
         card[16]=sym.getSymbol("kake").$("card17");
         card[17]=sym.getSymbol("kake").$("card18");
         card[18]=sym.getSymbol("kake").$("card19");
         card[19]=sym.getSymbol("kake").$("card20");
         
         cx[0]="94px";
         cx[1]="69px";
         cx[2]="699px";
         cx[3]="164px";
         cx[4]="174px";
         cx[5]="224px";
         cx[6]="250px";
         cx[7]="276px";
         cx[8]="302px";
         cx[9]="328px";
         cx[10]="360px";
         cx[11]="396px";
         cx[12]="422px";
         cx[13]="459px";
         cx[14]="496px";
         cx[15]="513px";
         cx[16]="545px";
         cx[17]="591px";
         cx[18]="636px";
         cx[19]="636px";
         
         cy[0]="174px";
         cy[1]="280px";
         cy[2]="364px";
         cy[3]="123px";
         cy[4]="262px";
         cy[5]="369px";
         cy[6]="106px";
         cy[7]="233px";
         cy[8]="372px";
         cy[9]="91px";
         cy[10]="222px";
         cy[11]="345px";
         cy[12]="102px";
         cy[13]="250px";
         cy[14]="364px";
         cy[15]="113px";
         cy[16]="223px";
         cy[17]="381px";
         cy[18]="113px";
         cy[19]="252px";
         
         for(i=0;i<=40;i++){
         rand1 = Math.round(Math.random()*19);
         rand2 = Math.round(Math.random()*19);
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
         sym.getSymbol("kake").$("x5").html(x5+"×"+y5);
         sym.getSymbol("kake").$("z5").html(z5);
         sym.getSymbol("kake").$("x6").html(x6+"×"+y6);
         sym.getSymbol("kake").$("z6").html(z6);
         sym.getSymbol("kake").$("x7").html(x7+"×"+y7);
         sym.getSymbol("kake").$("z7").html(z7);
         sym.getSymbol("kake").$("x8").html(x8+"×"+y8);
         sym.getSymbol("kake").$("z8").html(z8);
         sym.getSymbol("kake").$("x9").html(x9+"×"+y9);
         sym.getSymbol("kake").$("z9").html(z9);
         
         for(i=0;i<=19;i++){
         sym.getSymbol("kake").$(card[i]).animate({"left":cx[i],"top":cy[i]},1000);
         }
         
         sym.$("jyannru").hide();
         sym.getSymbol("kake").$("kabe").hide();
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

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
         card[10]=sym.getSymbol("tashi").$("card11");
         card[11]=sym.getSymbol("tashi").$("card12");
         card[12]=sym.getSymbol("tashi").$("card13");
         card[13]=sym.getSymbol("tashi").$("card14");
         card[14]=sym.getSymbol("tashi").$("card15");
         card[15]=sym.getSymbol("tashi").$("card16");
         card[16]=sym.getSymbol("tashi").$("card17");
         card[17]=sym.getSymbol("tashi").$("card18");
         card[18]=sym.getSymbol("tashi").$("card19");
         card[19]=sym.getSymbol("tashi").$("card20");
         
         cx[0]="94px";
         cx[1]="69px";
         cx[2]="699px";
         cx[3]="164px";
         cx[4]="174px";
         cx[5]="224px";
         cx[6]="250px";
         cx[7]="276px";
         cx[8]="302px";
         cx[9]="328px";
         cx[10]="360px";
         cx[11]="396px";
         cx[12]="422px";
         cx[13]="459px";
         cx[14]="496px";
         cx[15]="513px";
         cx[16]="545px";
         cx[17]="591px";
         cx[18]="636px";
         cx[19]="636px";
         
         cy[0]="174px";
         cy[1]="280px";
         cy[2]="364px";
         cy[3]="123px";
         cy[4]="262px";
         cy[5]="369px";
         cy[6]="106px";
         cy[7]="233px";
         cy[8]="372px";
         cy[9]="91px";
         cy[10]="222px";
         cy[11]="345px";
         cy[12]="102px";
         cy[13]="250px";
         cy[14]="364px";
         cy[15]="113px";
         cy[16]="223px";
         cy[17]="381px";
         cy[18]="113px";
         cy[19]="252px";
         
         for(i=0;i<=40;i++){
         rand1 = Math.round(Math.random()*19);
         rand2 = Math.round(Math.random()*19);
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
         sym.getSymbol("tashi").$("x5").html(x5+"+"+y5);
         sym.getSymbol("tashi").$("z5").html(z5);
         sym.getSymbol("tashi").$("x6").html(x6+"+"+y6);
         sym.getSymbol("tashi").$("z6").html(z6);
         sym.getSymbol("tashi").$("x7").html(x7+"+"+y7);
         sym.getSymbol("tashi").$("z7").html(z7);
         sym.getSymbol("tashi").$("x8").html(x8+"+"+y8);
         sym.getSymbol("tashi").$("z8").html(z8);
         sym.getSymbol("tashi").$("x9").html(x9+"+"+y9);
         sym.getSymbol("tashi").$("z9").html(z9);
         
         for(i=0;i<=19;i++){
         sym.getSymbol("tashi").$(card[i]).animate({"left":cx[i],"top":cy[i]},1000);
         }
         sym.$("jyannru").hide();
         sym.getSymbol("tashi").$("kabe").hide();
         
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

      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "click", function(sym, e) {
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
         rtime=timerCount
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
         sym.$("tasiten").html(p1+"点");
         sym.$("tasitoku").show();
         p1+=toku;
         sym.$("ten").html(toku+"点").show();
         sym.$("complete").html(p1+"点");
         sym.$("kei").show();
         sym.$("smak").show();
         sym.getComposition().getStage().$("smagru").hide();

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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
         		cmb=1;
         			sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
  		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
            flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
      		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
       		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
            ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
  		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
            flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
      		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura11}", "touchstart", function(sym, e) {
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura11").hide();
         flug=1;
         num=11;
         an1=z5;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura11").hide();
         flug=2;
         num2=11;
         an2=z5;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
         		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura12}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura12").hide();
         flug=1;
         num=12;
         an1=z6;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura12").hide();
         flug=2;
         num2=12;
         an2=z6;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
   		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura13}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura13").hide();
         flug=1;
         num=13;
         an1=z5;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura13").hide();
         flug=2;
         num2=13;
         an2=z5;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
       		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura14}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura14").hide();
         flug=1;
         num=14;
         an1=z6;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura14").hide();
         flug=2;
         num2=14;
         an2=z6;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
         		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura15}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura15").hide();
         flug=1;
         num=15;
         an1=z7;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura15").hide();
         flug=2;
         num2=15;
         an2=z7;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
 		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura16}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura16").hide();
         flug=1;
         num=16;
         an1=z7;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura16").hide();
         flug=2;
         num2=16;
         an2=z7;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
     		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura17}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura17").hide();
         flug=1;
         num=17;
         an1=z8;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura17").hide();
         flug=2;
         num2=17;
         an2=z8;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
         			sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura18}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します// ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura18").hide();
         flug=1;
         num=18;
         an1=z8;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura18").hide();
         flug=2;
         num2=18;
         an2=z8;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
        		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura19}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura19").hide();
         flug=1;
         num=19;
         an1=z9;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura19").hide();
         flug=2;
         num2=19;
         an2=z9;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
         		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura20}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura20").hide();
         flug=1;
         num=20;
         an1=z9;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura20").hide();
         flug=2;
         num2=20;
         an2=z9;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
        		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("ura11").show();
         	}
         	if(num==12 || num2==12){
         	sym.$("ura12").show();
         	}
         	if(num==13 || num2==13){
         	sym.$("ura13").show();
         	}
         	if(num==14 || num2==14){
         	sym.$("ura14").show();
         	}
         	if(num==15 || num2==15){
         	sym.$("ura15").show();
         	}
         	if(num==16 || num2==16){
         	sym.$("ura16").show();
         	}
         	if(num==17 || num2==17){
         	sym.$("ura17").show();
         	}
         	if(num==18 || num2==18){
         	sym.$("ura18").show();
         	}
         	if(num==19 || num2==19){
         	sym.$("ura19").show();
         	}
         	if(num==20 || num2==20){
         	sym.$("ura20").show();
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

      Symbol.bindElementAction(compId, symbolName, "${_gameselect}", "touchstart", function(sym, e) {
         window.open("index.html", "_self");
         
         

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
         rtime=timerCount
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
         sym.$("tasiten").html(p1+"点");
         sym.$("tasitoku").show();
         p1+=toku;
         sym.$("ten").html(toku+"点").show();
         sym.$("complete").html(p1+"点");
         sym.$("kei").show();
         sym.$("smat").show();
         sym.getComposition().getStage().$("smagru").hide();

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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
         		sym.$("hukidasi").show();
         		sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
         		cmb=1;
         		sym.$("ans").html("せいかい！");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ts);
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
         	if(ct1==20){
         sym.play("com");
         }
         }else{
         		sym.$("ans").html("ちがうよ～");
         		sym.$("ans").show();
         		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
 		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
            flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
       		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
            ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
            flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura11}", "touchstart", function(sym, e) {
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura11").hide();
         flug=1;
         num=11;
         an1=z5;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura11").hide();
         flug=2;
         num2=11;
         an2=z5;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura12}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura12").hide();
         flug=1;
         num=12;
         an1=z6;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura12").hide();
         flug=2;
         num2=12;
         an2=z6;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_gameselect}", "touchstart", function(sym, e) {
         window.open("../../../index.html", "_self");
         
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

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
         	if(num==11 || num2==11){
         	sym.$("ura11").show();
         	}
         	if(num==12 || num2==12){
         	sym.$("ura12").show();
         	}
         	if(num==13 || num2==13){
         	sym.$("ura13").show();
         	}
         	if(num==14 || num2==14){
         	sym.$("ura14").show();
         	}
         	if(num==15 || num2==15){
         	sym.$("ura15").show();
         	}
         	if(num==16 || num2==16){
         	sym.$("ura16").show();
         	}
         	if(num==17 || num2==17){
         	sym.$("ura17").show();
         	}
         	if(num==18 || num2==18){
         	sym.$("ura18").show();
         	}
         	if(num==19 || num2==19){
         	sym.$("ura19").show();
         	}
         	if(num==20 || num2==20){
         	sym.$("ura20").show();
         	}
         	flug=0;
         	cflug=0;
         	sym.$("combo").hide();
         }
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura20}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura20").hide();
         flug=1;
         num=20;
         an1=z9;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura20").hide();
         flug=2;
         num2=20;
         an2=z9;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }

         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura19}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura19").hide();
         flug=1;
         num=19;
         an1=z9;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura19").hide();
         flug=2;
         num2=19;
         an2=z9;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura18}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します// ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura18").hide();
         flug=1;
         num=18;
         an1=z8;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura18").hide();
         flug=2;
         num2=18;
         an2=z8;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura17}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura17").hide();
         flug=1;
         num=17;
         an1=z8;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura17").hide();
         flug=2;
         num2=17;
         an2=z8;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura16}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura16").hide();
         flug=1;
         num=16;
         an1=z7;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura16").hide();
         flug=2;
         num2=16;
         an2=z7;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura15}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura15").hide();
         flug=1;
         num=15;
         an1=z7;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura15").hide();
         flug=2;
         num2=15;
         an2=z7;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura14}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura14").hide();
         flug=1;
         num=14;
         an1=z6;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura14").hide();
         flug=2;
         num2=14;
         an2=z6;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura13}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura13").hide();
         flug=1;
         num=13;
         an1=z5;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura13").hide();
         flug=2;
         num2=13;
         an2=z5;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         rtime=timerCount
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
         sym.$("tasiten").html(p1+"点");
         sym.$("tasitoku").show();
         p1+=toku;
         sym.$("ten").html(toku+"点").show();
         sym.$("complete").html(p1+"点");
         sym.$("kei").show();
         sym.$("smah").show();
         sym.getComposition().getStage().$("smagru").hide();

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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
    		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         if(cflug==1){
         cmb++;
         sym.$("combo").html(cmb+"combo!!");
         sym.$("combo").show();
         sym.$("fc").html(cmb+"combo!!");
			sym.$("hukidasi").show();
			sym.$("hukidasi").fadeOut(ts);
         }else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
            flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
            ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
            flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
 		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura11}", "touchstart", function(sym, e) {
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura11").hide();
         flug=1;
         num=11;
         an1=z5;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura11").hide();
         flug=2;
         num2=11;
         an2=z5;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura12}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura12").hide();
         flug=1;
         num=12;
         an1=z6;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura12").hide();
         flug=2;
         num2=12;
         an2=z6;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura13}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura13").hide();
         flug=1;
         num=13;
         an1=z5;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura13").hide();
         flug=2;
         num2=13;
         an2=z5;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura14}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura14").hide();
         flug=1;
         num=14;
         an1=z6;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura14").hide();
         flug=2;
         num2=14;
         an2=z6;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura15}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura15").hide();
         flug=1;
         num=15;
         an1=z7;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura15").hide();
         flug=2;
         num2=15;
         an2=z7;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura16}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura16").hide();
         flug=1;
         num=16;
         an1=z7;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura16").hide();
         flug=2;
         num2=16;
         an2=z7;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura17}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura17").hide();
         flug=1;
         num=17;
         an1=z8;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura17").hide();
         flug=2;
         num2=17;
         an2=z8;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura18}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します// ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura18").hide();
         flug=1;
         num=18;
         an1=z8;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura18").hide();
         flug=2;
         num2=18;
         an2=z8;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura19}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura19").hide();
         flug=1;
         num=19;
         an1=z9;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura19").hide();
         flug=2;
         num2=19;
         an2=z9;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ura20}", "touchstart", function(sym, e) {
         // ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）
         
         if(flug == 0){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura20").hide();
         flug=1;
         num=20;
         an1=z9;
         }else if(flug==1){
         var hiku = new Howl({
           urls: ['audio/hiku.mp3'],
           autoplay: true,
           loop: false,
           volume: 0.5,
         });
         sym.$("ura20").hide();
         flug=2;
         num2=20;
         an2=z9;
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
         	if(num==11 || num2==11){
         	sym.$("card11").fadeOut(ts);
         	}
         	if(num==12 || num2==12){
         	sym.$("card12").fadeOut(ts);
         	}
         	if(num==13 || num2==13){
         	sym.$("card13").fadeOut(ts);
         	}
         	if(num==14 || num2==14){
         	sym.$("card14").fadeOut(ts);
         	}
         	if(num==15 || num2==15){
         	sym.$("card15").fadeOut(ts);
         	}
         	if(num==16 || num2==16){
         	sym.$("card16").fadeOut(ts);
         	}
         	if(num==17 || num2==17){
         	sym.$("card17").fadeOut(ts);
         	}
         	if(num==18 || num2==18){
         	sym.$("card18").fadeOut(ts);
         	}
         	if(num==19 || num2==19){
         	sym.$("card19").fadeOut(ts);
         	}
         	if(num==20 || num2==20){
         	sym.$("card20").fadeOut(ts);
         	}
         	flug=0;
         	ct1+=2;
         	if(cflug==1){
         		cmb++;
         		sym.$("combo").html(cmb+"combo!!");
         		sym.$("combo").show();
         		sym.$("fc").html(cmb+"combo!!");
					sym.$("hukidasi").show();
					sym.$("hukidasi").fadeOut(ts);
         	}else if(cflug==0){
		sym.$("ans").html("せいかい！");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
	if(ct1==20){
sym.play("com");
}
}else{
		sym.$("ans").html("ちがうよ～");
		sym.$("ans").show();
		sym.$("ans").fadeOut(ts);
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
         	if(num==11 || num2==11){
         	sym.$("ura11").show();
         	}
         	if(num==12 || num2==12){
         	sym.$("ura12").show();
         	}
         	if(num==13 || num2==13){
         	sym.$("ura13").show();
         	}
         	if(num==14 || num2==14){
         	sym.$("ura14").show();
         	}
         	if(num==15 || num2==15){
         	sym.$("ura15").show();
         	}
         	if(num==16 || num2==16){
         	sym.$("ura16").show();
         	}
         	if(num==17 || num2==17){
         	sym.$("ura17").show();
         	}
         	if(num==18 || num2==18){
         	sym.$("ura18").show();
         	}
         	if(num==19 || num2==19){
         	sym.$("ura19").show();
         	}
         	if(num==20 || num2==20){
         	sym.$("ura20").show();
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

      Symbol.bindElementAction(compId, symbolName, "${_gameselect}", "touchstart", function(sym, e) {
         window.open("index.html", "_self");
         
         

      });
      //Edge binding end

   })("hiki");
   //Edge symbol end:'hiki'

})(jQuery, AdobeEdge, "EDGE-10032191");