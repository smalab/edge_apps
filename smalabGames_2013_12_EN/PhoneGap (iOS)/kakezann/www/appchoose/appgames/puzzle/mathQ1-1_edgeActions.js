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
  volume: 0.6,
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
         
         if(flag==0){
         button.play();
         }
         if(b1!=b2&&b1!=b3&&b2!=b3){
         ok1=1;
         }else{
         sym.$("box1Text").css("color","#ee0616")
         sym.$("box2Text").css("color","#ee0616")
         sym.$("box3Text").css("color","#ee0616")
         }
         if(b4!=b5&&b4!=b6&&b5!=b6){
         ok2=1;
         }else{
         sym.$("box4Text").css("color","#ee0616")
         sym.$("box5Text").css("color","#ee0616")
         sym.$("box6Text").css("color","#ee0616")
         }
         if(b7!=b8&&b7!=b9&&b8!=b9){
         ok3=1;
         }else{
         sym.$("box7Text").css("color","#ee0616")
         sym.$("box8Text").css("color","#ee0616")
         sym.$("box9Text").css("color","#ee0616")
         }
         if(b1!=b4&&b1!=b7&&b4!=b7){
         ok4=1;
         }else{
         sym.$("box1Text").css("color","#ee0616")
         sym.$("box4Text").css("color","#ee0616")
         sym.$("box7Text").css("color","#ee0616")
         }
         if(b2!=b5&&b2!=b8&&b5!=b8){
         ok5=1;
         }else{
         sym.$("box2").css("color","#ee0616")
         sym.$("box5").css("color","#ee0616")
         sym.$("box8").css("color","#ee0616")
         }
         if(b3!=b6&&b3!=b9&&b6!=b9){
         ok6=1;
         }else{
         sym.$("box3").css("color","#ee0616")
         sym.$("box6").css("color","#ee0616")
         sym.$("box9").css("color","#ee0616")
         }
         
         if(b1+b2==3){
         ok7=1;
         }else{
         sym.$("Text1").css("backgroundColor","#f84796")
         }
         
         
         if(b3+b6==5){
         ok8=1;
         }else{
         sym.$("Text4").css("backgroundColor","#f84796")
         }
         
         if(b8+b9==3){
         ok9=1;
         }else{
         sym.$("Text3").css("backgroundColor","#f84796")
         }
         
         if(b4+b5+b7==7){
         ok10=1;
         }else{
         sym.$("Text2").css("backgroundColor","#f84796")
         }
         
         
         
         okplus=ok1+ok2+ok3+ok4+ok5+ok6+ok7+ok8+ok9+ok10
         
         if(okplus==10){
         if(flag==0){
         bgm.stop();
         katim.play();
         localStorage.MATHQst1=1;
         }
         sym.play();
         }
         
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("yarinao").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.$("box1").css("backgroundColor","#fcccf3")
         sym.$("box2").css("backgroundColor","#fcccf3")
         sym.$("box3").css("backgroundColor","#fdf9be")
         sym.$("box4").css("backgroundColor","#d0fbd0")
         sym.$("box5").css("backgroundColor","#d0fbd0")
         sym.$("box6").css("backgroundColor","#fdf9be")
         sym.$("box7").css("backgroundColor","#d0fbd0")
         sym.$("box8").css("backgroundColor","#f9ba87")
         sym.$("box9").css("backgroundColor","#f9ba87")
         
         b1=0;
         b2=0;
         b3=0;
         b4=0;
         b5=0;
         b6=0;
         b7=0;
         b8=0;
         b9=0;
         
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
         sym.$("botan1").css({top:141,left:653})
         }
         });
         
         sym.$( "box2Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box2Text" ).html(1);
         b2=1
         sym.$("botan1").css({top:141,left:653})
         }
         });
         
         sym.$( "box3Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box3Text" ).html(1);
         b3=1
         sym.$("botan1").css({top:141,left:653})
         }
         });
         
         sym.$( "box4Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box4Text" ).html(1);
         b4=1
         sym.$("botan1").css({top:141,left:653})
         }
         });
         
         sym.$( "box5Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box5Text" ).html(1);
         b5=1
         sym.$("botan1").css({top:141,left:653})
         }
         });
         
         sym.$( "box6Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box6Text" ).html(1);
         b6=1
         sym.$("botan1").css({top:141,left:653})
         }
         });
         
         sym.$( "box7Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box7Text" ).html(1);
         b7=1
         sym.$("botan1").css({top:141,left:653})
         }
         });
         
         sym.$( "box8Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box8Text" ).html(1);
         b8=1
         sym.$("botan1").css({top:141,left:653})
         }
         });
         
         sym.$( "box9Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box9Text" ).html(1);
         b9=1
         sym.$("botan1").css({top:141,left:653})
         }
         });
         
         },stop: function() {
         if(flag==0){
         tds.play();
         }
         sym.$("botan1").css({top:141,left:653})
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
         sym.$("botan2").css({top:141,left:753})
         }
         });
         
         sym.$( "box2Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box2Text" ).html(2);
         b2=2
         sym.$("botan2").css({top:141,left:753})
         }
         });
         
         sym.$( "box3Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box3Text" ).html(2);
         b3=2
         sym.$("botan2").css({top:141,left:753})
         }
         });
         
         sym.$( "box4Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box4Text" ).html(2);
         b4=2
         sym.$("botan2").css({top:141,left:753})
         }
         });
         
         sym.$( "box5Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box5Text" ).html(2);
         b5=2
         sym.$("botan2").css({top:141,left:753})
         }
         });
         
         sym.$( "box6Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box6Text" ).html(2);
         b6=2
         sym.$("botan2").css({top:141,left:753})
         }
         });
         
         sym.$( "box7Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box7Text" ).html(2);
         b7=2
         sym.$("botan2").css({top:141,left:753})
         }
         });
         
         sym.$( "box8Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box8Text" ).html(2);
         b8=2
         sym.$("botan2").css({top:141,left:753})
         }
         });
         
         sym.$( "box9Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box9Text" ).html(2);
         b9=2
         sym.$("botan2").css({top:141,left:753})
         }
         });
         
         
         
         },stop: function() {
         if(flag==0){
         tds.play();
         }
         sym.$("botan2").css({top:141,left:753})
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
         sym.$("botan3").css({top:141,left:853})
         }
         });
         
         sym.$( "box2Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box2Text" ).html(3);
         b2=3
         sym.$("botan3").css({top:141,left:853})
         }
         });
         
         sym.$( "box3Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box3Text" ).html(3);
         b3=3
         sym.$("botan3").css({top:141,left:853})
         }
         });
         
         sym.$( "box4Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box4Text" ).html(3);
         b4=3
         sym.$("botan3").css({top:141,left:853})
         }
         });
         
         sym.$( "box5Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box5Text" ).html(3);
         b5=3
         sym.$("botan3").css({top:141,left:853})
         }
         });
         
         sym.$( "box6Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box6Text" ).html(3);
         b6=3
         sym.$("botan3").css({top:141,left:853})
         }
         });
         
         sym.$( "box7Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box7Text" ).html(3);
         b7=3
         sym.$("botan3").css({top:141,left:853})
         }
         });
         
         sym.$( "box8Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box8Text" ).html(3);
         b8=3
         sym.$("botan3").css({top:141,left:853})
         }
         });
         
         sym.$( "box9Text" ).droppable({
         drop: function( event, ui ) {
         sym.$( "box9Text" ).html(3);
         b9=3
         sym.$("botan3").css({top:141,left:853})
         }
         });
         
         
         
         
         },stop: function() {
         if(flag==0){
         tds.play();
         }
         sym.$("botan3").css({top:141,left:853})
         }});
         
         
         }
         
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
         
         if(flag==0){
         button.play();
         }
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("yarinao").hide();
         
         sym.$("box1Text").css("color","#000000")
         sym.$("box2Text").css("color","#000000")
         sym.$("box3Text").css("color","#000000")
         sym.$("box4Text").css("color","#000000")
         sym.$("box5Text").css("color","#000000")
         sym.$("box6Text").css("color","#000000")
         sym.$("box7Text").css("color","#000000")
         sym.$("box8Text").css("color","#000000")
         sym.$("box9Text").css("color","#000000")
         sym.$("Text1").css("backgroundColor","#ffffff")
         sym.$("Text2").css("backgroundColor","#ffffff")
         sym.$("Text3").css("backgroundColor","#ffffff")
         sym.$("Text4").css("backgroundColor","#ffffff")

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.$("Text").html("Done! ");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.$("Text").html("Done! You");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.$("Text").html("Done! You are");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.$("Text").html("Done! You are so");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.$("Text").html("Done! You are so great");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.$("Text").html("Done! You are so great!!");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_st}", "click", function(sym, e) {
         
         if(flag==0){
         bgm.play();
         }
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("st").hide();
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("stg").hide();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_3}", "click", function(sym, e) {
         
         // 現在のウィンドウの新しい URL に移動します
         // (「_self」を新しいウィンドウの適切なターゲット属性に置き換えます)
         window.open("index.html", "_self");
         

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
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

})(jQuery, AdobeEdge, "EDGE-2316917");