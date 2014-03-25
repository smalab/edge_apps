/***********************
* Adobe Edge Animate コンポジションアクション
*
* このファイルを編集する際には注意が必要です。必ず関数シグニチャと
* 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
* 操作可能な状態にしておいてください。 
*
***********************/

var flag=0;

if(navigator.userAgent.indexOf('Android')>0){
	flag=1;
}

if(flag==0){

var tdh = new Howl({
  urls: ['audio/toranpuhiku.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.9,
});


var tds = new Howl({
  urls: ['audio/toranpudasu.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.9,
});




var katim = new Howl({
  urls: ['audio/kati.mp3'],
  autoplay: false,
  loop: false,
  volume:0.4,
});
  
var button = new Howl({
  urls: ['audio/butoon.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.5,
});

var bgm = new Howl({
  urls: ['audio/bgm5.mp3'],
  autoplay: false,
  loop: true,
  volume: 0.5,
});
}


(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_okbotan}", "click", function(sym, e) {
         
         sym.$("okbotan").hide();
         
         sym.$("yarinao").show();
         
         if(flag==0){
         button.play();
         }
         
         if(b1!=b2&&b1!=b3&&b1!=b4&&b2!=b3&&b2!=b4&&b3!=b4){
         ok1=1;
         }else{
         sym.$("box1Text").css("color","#ee0616")
         sym.$("box2Text").css("color","#ee0616")
         sym.$("box3Text").css("color","#ee0616")
         sym.$("box4Text").css("color","#ee0616")
         }
         if(b5!=b6&&b5!=b7&&b5!=b8&&b6!=b7&&b6!=b8&&b7!=b8){
         ok2=1;
         }else{
         sym.$("box5Text").css("color","#ee0616")
         sym.$("box6Text").css("color","#ee0616")
         sym.$("box7Text").css("color","#ee0616")
         sym.$("box8Text").css("color","#ee0616")
         }
         if(b9!=b10&&b9!=b11&&b9!=b12&&b10!=b11&&b10!=b12&&b11!=b12){
         ok3=1;
         }else{
         sym.$("box9Text").css("color","#ee0616")
         sym.$("box10Text").css("color","#ee0616")
         sym.$("box11Text").css("color","#ee0616")
         sym.$("box12Text").css("color","#ee0616")
         }
         if(b13!=b14&&b13!=b15&&b13!=b16&&b14!=b15&&b14!=b16&&b15!=b16){
         ok4=1;
         }else{
         sym.$("box13Text").css("color","#ee0616")
         sym.$("box14Text").css("color","#ee0616")
         sym.$("box15Text").css("color","#ee0616")
         sym.$("box16Text").css("color","#ee0616")
         }
         if(b1!=b5&&b1!=b9&&b1!=b13&&b5!=b9&&b5!=b13&&b9!=b13){
         ok5=1;
         }else{
         sym.$("box1Text").css("color","#ee0616")
         sym.$("box5Text").css("color","#ee0616")
         sym.$("box9Text").css("color","#ee0616")
         sym.$("box13Text").css("color","#ee0616")
         }
         if(b2!=b6&&b2!=b10&&b2!=b14&&b6!=b10&&b6!=b10&&b10!=b14){
         ok6=1;
         }else{
         sym.$("box2Text").css("color","#ee0616")
         sym.$("box6Text").css("color","#ee0616")
         sym.$("box10Text").css("color","#ee0616")
         sym.$("box14Text").css("color","#ee0616")
         }
         if(b3!=b7&&b3!=b11&&b3!=b15&&b7!=b11&&b7!=b15&&b11!=b15){
         ok7=1;
         }else{
         sym.$("box3Text").css("color","#ee0616")
         sym.$("box7Text").css("color","#ee0616")
         sym.$("box11Text").css("color","#ee0616")
         sym.$("box15Text").css("color","#ee0616")
         }
         if(b4!=b8&&b4!=b12&&b4!=b16&&b8!=b12&&b8!=b16&&b12!=b16){
         ok8=1;
         }else{
         sym.$("box4Text").css("color","#ee0616")
         sym.$("box8Text").css("color","#ee0616")
         sym.$("box12Text").css("color","#ee0616")
         sym.$("box16Text").css("color","#ee0616")
         }
         if(b1+b5==3){
         ok9=1;
         }else{
         sym.$("Text1").css("backgroundColor","#f84796")
         }
         if(b2==3){
         ok10=1;
         }else{
         sym.$("Text2").css("backgroundColor","#f84796")
         }
         if(b3+b4+b8==9){
         ok11=1;
         }else{
         sym.$("Text3").css("backgroundColor","#f84796")
         }
         if(b6+b9+b10==7){
         ok12=1;
         }else{
         sym.$("Text6").css("backgroundColor","#f84796")
         }
         if(b7+b11==7){
         ok13=1;
         }else{
         sym.$("Text7").css("backgroundColor","#f84796")
         }
         if(b13+b14==7){
         ok14=1;
         }else{
         sym.$("Text13").css("backgroundColor","#f84796")
         }
         if(b15==1){
         ok15=1;
         }else{
         sym.$("Text15").css("backgroundColor","#f84796")
         }
         if(b12+b16==3){
         ok16=1;
         }else{
         sym.$("Text12").css("backgroundColor","#f84796")
         }
         
         if(ok1+ok2+ok3+ok4+ok5+ok6+ok7+ok8+ok9+ok10+ok11+ok12+ok13+ok14+ok15+ok16==16){
         
         if(flag==0){
         katim.play();
         bgm.stop();
         localStorage.MATHQst6=1
         }
         sym.play();
         }
         
         
         
         
         
         
         
         
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         
         b1=0;
         b2=0;
         b3=0;
         b4=0;
         b5=0;
         b6=0;
         b7=0;
         b8=0;
         b9=0;
         b10=0;
         b11=0;
         b12=0;
         b13=0;
         b14=0;
         b15=0;
         b16=0;
         
         
         tch=1;
         
         ok1=0;
         ok2=0;
         ok3=0;
         ok4=0;
         ok5=0;
         ok6=0;
         ok7=0;
         ok8=0;
         ok9=0;
         ok10=0;
         
         
         
         yepnope({nope:['jquery-ui-1.10.3.custom.min.js','jquery.ui.touch-punch.min.js'],complete: init});
         
         function init(){
         
         sym.$("botan1").draggable({
         start: function() {
         
         if(flag==0){
         tdh.play();
         }
         
         
         sym.$( "box1Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box1Text" ).html(1);
         b1=1
         }
         });
         
         sym.$( "box2Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box2Text" ).html(1);
         b2=1
         }
         });
         
         sym.$( "box3Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box3Text" ).html(1);
         b3=1
         }
         });
         
         sym.$( "box4Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box4Text" ).html(1);
         b4=1
         }
         });
         
         sym.$( "box5Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box5Text" ).html(1);
         b5=1
         }
         });
         
         sym.$( "box6Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box6Text" ).html(1);
         b6=1
         }
         });
         
         sym.$( "box7Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box7Text" ).html(1);
         b7=1
         }
         });
         
         sym.$( "box8Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box8Text" ).html(1);
         b8=1
         }
         });
         
         sym.$( "box9Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box9Text" ).html(1);
         b9=1
         }
         });
         
         sym.$( "box10Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box10Text" ).html(1);
         b10=1
         }
         });
         
         sym.$( "box11Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box11Text" ).html(1);
         b11=1
         }
         });
         
         sym.$( "box12Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box12Text" ).html(1);
         b12=1
         }
         });
         
         sym.$( "box13Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box13Text" ).html(1);
         b13=1
         }
         });
         
         sym.$( "box14Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box14Text" ).html(1);
         b14=1
         }
         });
         
         sym.$( "box15Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box15Text" ).html(1);
         b15=1
         }
         });
         
         sym.$( "box16Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box16Text" ).html(1);
         b16=1
         }
         });
         
         },stop: function() {
         
         if(flag==0){
         tds.play();
         }
         
         sym.$("botan1").css({top:166,left:579})
         }
         });
         
         sym.$("botan2").draggable({
         start: function() {
         
         if(flag==0){
         tdh.play();
         }
         
         sym.$( "box1Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box1Text" ).html(2);
         b1=2
         }
         });
         
         sym.$( "box2Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box2Text" ).html(2);
         b2=2
         }
         });
         
         sym.$( "box3Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box3Text" ).html(2);
         b3=2
         }
         });
         
         sym.$( "box4Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box4Text" ).html(2);
         b4=2
         }
         });
         
         sym.$( "box5Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box5Text" ).html(2);
         b5=2
         }
         });
         
         sym.$( "box6Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box6Text" ).html(2);
         b6=2
         }
         });
         
         sym.$( "box7Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box7Text" ).html(2);
         b7=2
         }
         });
         
         sym.$( "box8Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box8Text" ).html(2);
         b8=2
         }
         });
         
         sym.$( "box9Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box9Text" ).html(2);
         b9=2
         }
         });
         
         sym.$( "box10Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box10Text" ).html(2);
         b10=2
         }
         });
         
         sym.$( "box11Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box11Text" ).html(2);
         b11=2
         }
         });
         
         sym.$( "box12Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box12Text" ).html(2);
         b12=2
         }
         });
         
         sym.$( "box13Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box13Text" ).html(2);
         b13=2
         }
         });
         
         sym.$( "box14Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box14Text" ).html(2);
         b14=2
         }
         });
         
         sym.$( "box15Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box15Text" ).html(2);
         b15=2
         }
         });
         
         sym.$( "box16Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box16Text" ).html(2);
         b16=2
         }
         });
         
         },stop: function() {
         
         if(flag==0){
         tds.play();
         }
         
         sym.$("botan2").css({top:166,left:679})
         }});
         
         sym.$("botan3").draggable({
         start: function() {
         
         if(flag==0){
         tdh.play();
         }
         
         sym.$( "box1Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box1Text" ).html(3);
         b1=3
         }
         });
         
         sym.$( "box2Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box2Text" ).html(3);
         b2=3
         }
         });
         
         sym.$( "box3Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box3Text" ).html(3);
         b3=3
         }
         });
         
         sym.$( "box4Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box4Text" ).html(3);
         b4=3
         }
         });
         
         sym.$( "box5Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box5Text" ).html(3);
         b5=3
         }
         });
         
         sym.$( "box6Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box6Text" ).html(3);
         b6=3
         }
         });
         
         sym.$( "box7Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box7Text" ).html(3);
         b7=3
         }
         });
         
         sym.$( "box8Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box8Text" ).html(3);
         b8=3
         }
         });
         
         sym.$( "box9Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box9Text" ).html(3);
         b9=3
         }
         });
         
         sym.$( "box10Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box10Text" ).html(3);
         b10=3
         }
         });
         
         sym.$( "box11Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box11Text" ).html(3);
         b11=3
         }
         });
         
         sym.$( "box12Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box12Text" ).html(3);
         b12=3
         }
         });
         
         sym.$( "box13Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box13Text" ).html(3);
         b13=3
         }
         });
         
         sym.$( "box14Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box14Text" ).html(3);
         b14=3
         }
         });
         
         sym.$( "box15Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box15Text" ).html(3);
         b15=3
         }
         });
         
         sym.$( "box16Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box16Text" ).html(3);
         b16=3
         }
         });
         
         
         },stop: function() {
         
         if(flag==0){
         tds.play();
         }
         
         sym.$("botan3").css({top:166,left:779})
         }});
         
         
         
         
         
         sym.$("botan4").draggable({
         start: function() {
         
         if(flag==0){
         tdh.play();
         }
         
         sym.$( "box1Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box1Text" ).html(4);
         b1=4
         }
         });
         
         sym.$( "box2Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box2Text" ).html(4);
         b2=4
         }
         });
         
         sym.$( "box3Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box3Text" ).html(4);
         b3=4
         }
         });
         
         sym.$( "box4Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box4Text" ).html(4);
         b4=4
         }
         });
         
         sym.$( "box5Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box5Text" ).html(4);
         b5=4
         }
         });
         
         sym.$( "box6Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box6Text" ).html(4);
         b6=4
         }
         });
         
         sym.$( "box7Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box7Text" ).html(4);
         b7=4
         }
         });
         
         sym.$( "box8Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box8Text" ).html(4);
         b8=4
         }
         });
         
         sym.$( "box9Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box9Text" ).html(4);
         b9=4
         }
         });
         
         sym.$( "box10Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box10Text" ).html(4);
         b10=4
         }
         });
         
         sym.$( "box11Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box11Text" ).html(4);
         b11=4
         }
         });
         
         sym.$( "box12Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box12Text" ).html(4);
         b12=4
         }
         });
         
         sym.$( "box13Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box13Text" ).html(4);
         b13=4
         }
         });
         
         sym.$( "box14Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box14Text" ).html(4);
         b14=4
         }
         });
         
         sym.$( "box15Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box15Text" ).html(4);
         b15=4
         }
         });
         
         sym.$( "box16Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box16Text" ).html(4);
         b16=4
         }
         });
         
         },stop: function() {
         
         if(flag==0){
         tds.play();
         }
         
         sym.$("botan4").css({top:166,left:879})
         }
         });
         
         
         };
         
         if(flag==0){
         bgm.onload();
         katim.onload();
         button.onload();
         tds.onload();
         tdh.onload();
         }
         
         
         
         
         
         
         
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_yarinao}", "click", function(sym, e) {
ok1=0;
ok2=0;
ok3=0;
ok4=0;
ok5=0;
ok6=0;
ok7=0;
ok8=0;
ok9=0;
ok10=0;

			sym.$("okbotan").show();
         
         sym.$("yarinao").hide();
         
         sym.$("Text1").css("backgroundColor","#ffffff")
         sym.$("Text2").css("backgroundColor","#ffffff")
         sym.$("Text3").css("backgroundColor","#ffffff")
         sym.$("Text6").css("backgroundColor","#ffffff")
         sym.$("Text7").css("backgroundColor","#ffffff")
         sym.$("Text12").css("backgroundColor","#ffffff")
         sym.$("Text13").css("backgroundColor","#ffffff")
         sym.$("Text15").css("backgroundColor","#ffffff")
         
         sym.$("box1Text").css("color","#000000")
         sym.$("box2Text").css("color","#000000")
         sym.$("box3Text").css("color","#000000")
         sym.$("box4Text").css("color","#000000")
         sym.$("box5Text").css("color","#000000")
         sym.$("box6Text").css("color","#000000")
         sym.$("box7Text").css("color","#000000")
         sym.$("box8Text").css("color","#000000")
         sym.$("box9Text").css("color","#000000")
         sym.$("box10Text").css("color","#000000")
         sym.$("box11Text").css("color","#000000")
         sym.$("box12Text").css("color","#000000")
         sym.$("box13Text").css("color","#000000")
         sym.$("box14Text").css("color","#000000")
         sym.$("box15Text").css("color","#000000")
         sym.$("box16Text").css("color","#000000")
         
         if(flag==0){
         button.play();
			}

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         
         sym.$("Text").html("お");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // エレメントのコンテンツを変更します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("Text").html("おめ");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         // エレメントのコンテンツを変更します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("Text").html("おめで");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // エレメントのコンテンツを変更します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("Text").html("おめでと");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // エレメントのコンテンツを変更します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("Text").html("おめでとう");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // エレメントのコンテンツを変更します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("Text").html("おめでとう!!");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_startbutton}", "click", function(sym, e) {
         // エレメントを隠します。
         sym.$("startbutton").hide();
         sym.$("startgamen").hide();
         
         
         sym.$("box1").css("backgroundColor","#aaffed")
         sym.$("box2").css("backgroundColor","#ebebeb")
         sym.$("box3").css("backgroundColor","#ffaaaa")
         sym.$("box4").css("backgroundColor","#ffaaaa")
         sym.$("box5").css("backgroundColor","#aaffed")
         sym.$("box6").css("backgroundColor","#fdf9be")
         sym.$("box7").css("backgroundColor","#d0fbd0")
         sym.$("box8").css("backgroundColor","#ffaaaa")
         sym.$("box9").css("backgroundColor","#fdf9be")
         sym.$("box10").css("backgroundColor","#fdf9be")
         sym.$("box11").css("backgroundColor","#d0fbd0")
         sym.$("box12").css("backgroundColor","#fcccf3")
         sym.$("box13").css("backgroundColor","#f9ba87")
         sym.$("box14").css("backgroundColor","#f9ba87")
         sym.$("box15").css("backgroundColor","#ebebeb")
         sym.$("box16").css("backgroundColor","#fcccf3")
         
         if(flag==0){
         button.play();
         bgm.play();
         }

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_3}", "click", function(sym, e) {
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("index.html", "_self");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_startbutton}", "touchstart", function(sym, e) {
         // エレメントを隠します。
         sym.$("startbutton").hide();
         sym.$("startgamen").hide();
         
         
         sym.$("box1").css("backgroundColor","#aaffed")
         sym.$("box2").css("backgroundColor","#ebebeb")
         sym.$("box3").css("backgroundColor","#ffaaaa")
         sym.$("box4").css("backgroundColor","#ffaaaa")
         sym.$("box5").css("backgroundColor","#aaffed")
         sym.$("box6").css("backgroundColor","#fdf9be")
         sym.$("box7").css("backgroundColor","#d0fbd0")
         sym.$("box8").css("backgroundColor","#ffaaaa")
         sym.$("box9").css("backgroundColor","#fdf9be")
         sym.$("box10").css("backgroundColor","#fdf9be")
         sym.$("box11").css("backgroundColor","#d0fbd0")
         sym.$("box12").css("backgroundColor","#fcccf3")
         sym.$("box13").css("backgroundColor","#f9ba87")
         sym.$("box14").css("backgroundColor","#f9ba87")
         sym.$("box15").css("backgroundColor","#ebebeb")
         sym.$("box16").css("backgroundColor","#fcccf3")
         
         if(flag==0){
         button.play();
         bgm.play();
         }
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'botan1'
   (function(symbolName) {   
   
   })("botan1");
   //Edge symbol end:'botan1'

   //=========================================================
   
   //Edge symbol: 'botan2'
   (function(symbolName) {   
   
   })("botan2");
   //Edge symbol end:'botan2'

   //=========================================================
   
   //Edge symbol: 'botan3'
   (function(symbolName) {   
   
   })("botan3");
   //Edge symbol end:'botan3'

   //=========================================================
   
   //Edge symbol: 'okbotan'
   (function(symbolName) {   
   
   })("okbotan");
   //Edge symbol end:'okbotan'

   //=========================================================
   
   //Edge symbol: 'yarinao'
   (function(symbolName) {   
   
   })("yarinao");
   //Edge symbol end:'yarinao'

   //=========================================================
   
   //Edge symbol: 'waku'
   (function(symbolName) {   
   
   })("waku");
   //Edge symbol end:'waku'

   //=========================================================
   
   //Edge symbol: 'startbutton'
   (function(symbolName) {   
   
   })("startbutton");
   //Edge symbol end:'startbutton'

   //=========================================================
   
   //Edge symbol: 'botan4Copy'
   (function(symbolName) {   
   
   })("botan4Copy");
   //Edge symbol end:'botan4Copy'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

})(jQuery, AdobeEdge, "EDGE-2316917");