/***********************
* Adobe Edge Animate コンポジションアクション
*
* このファイルを編集する際には注意が必要です。必ず関数シグニチャと
* 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
* 操作可能な状態にしておいてください。 
*

if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}


***********************/
var flag=0;

if(navigator.userAgent.indexOf('Android')>0){
	flag=1;
//	alert("android");
}

if(flag==0){
	var coin = new Howl({
		urls: ['audio/sei_ge_coin_watasu02.mp3'],
		autoplay: false,
		loop: false,
		volume: 0.18,
	});

	var button = new Howl({
	  urls: ['audio/butoon.mp3'],
	  autoplay: false,
	  loop: false,
	  volume: 0.18,
	});

	var crear = new Howl({
	  urls: ['audio/gmclear.mp3'],
	  autoplay: false,
	  loop: false,
	  volume: 0.18,
	});

	var bgm = new Howl({
		urls: ['audio/tam-n11.mp3'],
		autoplay: false,
		loop: true,
		volume: 0.18,
	});
}
//音



(function($, Edge, compId){
	var rum=Math.round (Math.random () * 6 + 0.5);
	var rum2=Math.round (Math.random () * 8 + 0.5);
	var rumcnt=0;
	var cnt=1;
	var acnt=0;
	var sum=0;
	var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス
	var a1=2,a2=6,a3=10,a4=11,a5=15,a6=20;
	var b1=3,b2=7,b3=11,b4=12,b5=16,b6=20,b7=21,b8=30;
	var x;
	var tCounter;

	//Edge symbol: 'stage'
	(function(symbolName) {
   
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         sym.$("#Stage").css({ // Set the transform origin so we always scale to the top left corner of the stage
         "transform-origin":"0 0",
         "-ms-transform-origin":"0 0",
         "-webkit-transform-origin":"0 0",
         "-moz-transform-origin":"0 0",
         "-o-transform-origin":"0 0"
         });
         
         function scaleStage() {
             var stage = sym.$('Stage'); // Set a reusable variable to reference the stage
             var parent = sym.$('Stage').parent(); // Set a reusable variable to reference the parent container of the stage
         
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
                             rescale = rescaleHeight;
         
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

	})("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'start'
   (function(symbolName) {   
   
   })("start");
   //Edge symbol end:'start'

   //=========================================================
   
   //Edge symbol: 'dore'
   (function(symbolName) {   
   
   })("dore");
   //Edge symbol end:'dore'

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
   
   //Edge symbol: 'Symbol_1'
	(function(symbolName) {   

      Symbol.bindElementAction(compId, symbolName, "${_start3}", "touchstart", function(sym, e) {
         if(flag==0){
	     bgm.play();
         button.play();
		 }
		 
//		 if(flag==1){
//	     alert("android 2");
//		 }
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("returnchose").hide();
         sym.getComposition().getStage().getSymbol("time").play();
         sym.$("money").show();
         if(rum==1){
         		x=a1;
         }else if(rum==2){
         		x=a2;
         }else if(rum==3){
         		x=a3;	
         }else if(rum==4){
         		x=a4;
         }else if(rum==5){
         		x=a5;
         }else if(rum==6){
         		x=a6;
         }
         rumcnt=rum;
			sym.$("total_yen").html(x);
			sym.$("start3").hide();
			sym.$("bg").hide();			//スタート画面の消去
			sym.$("time2").show(); //timeの表示
			sym.$("nokori").hide();		
			sym.$("mondaisu").hide();//残り問題数を隠す
         
			//タイマー 25から50に変更（矢野　８・６）
			var timerCount=50; 
			sym.getComposition().getStage().getSymbol("time").$("time_txt").html(timerCount);
			tCounter=setInterval(timer, 1000); //1000 will run the timer every 1 second

			function timer(){
				timerCount=timerCount-1;
				if(timerCount<=-1){
					  return;	
				}
				if(timerCount<=0){
					sym.$("OK").hide();
					if(acnt!=5){
						sym.$("badresult").show();
						sym.$("time2").hide();
					}
					sym.$("a").html(acnt);
				}
				console.log("tCounter");	          
            sym.getComposition().getStage().getSymbol("time").$("time_txt").html(timerCount); // Display the timer value          
      	}
	
  	});
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next}", "touchstart", function(sym, e) {
         // シンボルのインスタンスであるエレメントから Edge Animate シンボルの
         // Javascript オブジェクトを検索します。シンボルのオブジェクトを使用して、再生、停止などの
         // シンボル関数を呼び出
         sym.getParentSymbol("Symbol_1")
         sym.getComposition().getStage().getSymbol("Symbol_1").deleteSymbol();
         
         var rum=Math.round (Math.random () * 6 + 0.5);
         var rum2=Math.round (Math.random () * 8 + 0.5);
         var rumcnt=0;
         var cnt=1;
         var acnt=0;
         var sum=0;
         var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス
         var a1=2,a2=6,a3=10,a4=11,a5=15,a6=20;
         var b1=3,b2=7,b3=11,b4=12,b5=16,b6=20,b7=21,b8=30;
         var x;
         //sym.getComposition().getStage().getSymbol("mondai2").play();
         // マウスクリックのコードをここに挿入します
         if(flag==0){
			 button.play();

		 }
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_retry}", "touchstart", function(sym, e) {
         if(flag==0){
		 button.play();
		 }
         document.location.reload(true);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yarinaoshi}", "touchstart", function(sym, e) {
         sym.$("yen1").attr('src','images/yen.png');
         sym.$("yen2").attr('src','images/yen.png');
         cnt=1;
         sum=0;
         
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("batu").hide();
         
		 if(flag==0){
         button.play();
		 }
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text3Copy}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         sym.$("yen1").attr('src','images/yen.png');
         sym.$("yen2").attr('src','images/yen.png');
         cnt=1;
         sum=0;
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("batu").hide();
         
		 if(flag==0){
         button.play();
		 }
		 
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("OK").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_seikai}", "touchstart", function(sym, e) {
		 if(flag==0){
         button.play();
		 }
         // マウスクリックのコードをここに挿入します
         sym.$("yen1").attr('src','images/yen.png');
         sym.$("yen2").attr('src','images/yen.png');
         cnt=1;
         sum=0;
         
         rum=Math.round (Math.random () * 6 + 0.5);
         if(rumcnt==rum){
         while(rumcnt==rum){
         rum=Math.round (Math.random () * 6 + 0.5);
         }
         }
         if(rum==1){
         		x=a1;
         		}else if(rum==2){
         		x=a2;
         		}else if(rum==3){
         		x=a3;	
         		}else if(rum==4){
         		x=a4;
         		}else if(rum==5){
         		x=a5;
         		}else if(rum==6){
         		x=a6;
         		}
         		rumcnt=rum;
                  sym.$("total_yen").html(x);
         
          // エレメントを隠します。
          //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
          // 使用できる DOM エレメントに変えます)。
          sym.$("seikai").hide();
          // エレメントを表示します。
          //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
          //  使用できる DOM エレメントに変えます)。
          sym.$("yarinaoshi").show();
         
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("OK").show();
         
         
         

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${__1yen}", "touchstart", function(sym, e) {
                 // マウスクリックのコードをここに挿入します
         			if(cnt==1){
                  	sym.$("yen1").attr('src','images/1yen.png');
                  }
                  if(cnt==2){
                  	sym.$("yen2").attr('src','images/1yen.png');
                  }
                  if(cnt<3){
                  	cnt=cnt+1;
                  	sum=sum+1;
                  }
				  
         		  if(flag==0){
                  coin.play();  
				  }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5yen}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         if(cnt==1){
         	sym.$("yen1").attr('src','images/5yen.png');
         }
         if(cnt==2){
         	sym.$("yen2").attr('src','images/5yen.png');
         }
         if(cnt<3){
         	cnt=cnt+1;
         	sum=sum+5;
         }
		 
		 if(flag==0){ 
         coin.play();
		 }
		 
         // エレメントのコンテンツを変更します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__10yen}", "touchstart", function(sym, e) {
         if(cnt==1){
         	sym.$("yen1").attr('src','images/10yen.png');
         }
         if(cnt==2){
         	sym.$("yen2").attr('src','images/10yen.png');
         }
         if(cnt<3){
         	cnt=cnt+1;
         	sum=sum+10;
         }
		 if(flag==0){
         coin.play();
		 }
      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_OK}", "touchstart", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         sym.$("norma").hide();	//問題数を隠す
         
         sym.$("nokori").show();	
         sym.$("mondaisu").show();//残り問題数の表示
         
		 if(flag==0){
         button.play();
		 }
         console.log("OK");
         console.log('cnt: %d',cnt);
         console.log('acnt: %d',acnt);
         
              	//15円のとき
                  if(cnt==3){
         				// 正
                  	if(sum==x){// 指定した位置でタイムラインを停止 (ミリ秒またはラベル)
         					acnt=acnt+1;
                  		sym.$("mondaisu").html(5-acnt); 
                  		if(acnt==5){
							if(flag==0){
                            crear.play();
							}
                  			sym.$("goodresult").show();
         						sym.$("time2").hide();
                 				 //タイマー削除
         						//sym.getParentSymbol("time");
         						sym.getComposition().getStage().getSymbol("time").deleteSymbol();
         						clearInterval(tCounter);
         						sym.$("OK").hide();
         						//以下不要	(Yano 13/10/23) sym.getSymbol("time").deleteSymbol();
         
         					}else{
         						sym.$("seikai").show();
         						sym.$("OK").hide();
                  		}
                  		//やり直し削除
         					sym.$("yarinaoshi").hide();
                  	}
         				//不正解のとき
         				if(sum!=x){
         					sym.$("batu").show();
                  	}
                  }// ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_OK}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         			// マウスクリックのコードをここに挿入します
                  sym.$("norma").hide();	//問題数を隠す
                  
                  sym.$("nokori").show();	
                  sym.$("mondaisu").show();//残り問題数の表示
                  
         		 if(flag==0){
                  button.play();
         		 }
                  console.log("OK");
                  console.log('cnt: %d',cnt);
                  console.log('acnt: %d',acnt);
         
                       	//15円のとき
                           if(cnt==3){
                  				// 正
                           	if(sum==x){// 指定した位置でタイムラインを停止 (ミリ秒またはラベル)
                  					acnt=acnt+1;
                           		sym.$("mondaisu").html(5-acnt); 
                           		if(acnt==5){
         							if(flag==0){
                                     crear.play();
         							}
                           			sym.$("goodresult").show();
                  						sym.$("time2").hide();
                          				 //タイマー削除
                  						//sym.getParentSymbol("time");
                  						sym.getComposition().getStage().getSymbol("time").deleteSymbol();
                  						clearInterval(tCounter);
                  						sym.$("OK").hide();
                  						//以下不要	(Yano 13/10/23) sym.getSymbol("time").deleteSymbol();
         
                  					}else{
                  						sym.$("seikai").show();
                  						sym.$("OK").hide();
                           		}
                           		//やり直し削除
                  					sym.$("yarinaoshi").hide();
                           	}
                  				//不正解のとき
                  				if(sum!=x){
                  					sym.$("batu").show();
                           	}
                           }// ユーザーがオブジェクトに触れたときに実行されるコードを挿入します（タッチデバイスの場合のみ）

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text3Copy}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         
         
         
         
         		// マウスクリックのコードをここに挿入します
                  sym.$("yen1").attr('src','images/yen.png');
                  sym.$("yen2").attr('src','images/yen.png');
                  cnt=1;
                  sum=0;
                  // エレメントを隠します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                  // 使用できる DOM エレメントに変えます)。
                  sym.$("batu").hide();
                  
         		 if(flag==0){
                  button.play();
         		 }
         
                  // エレメントを表示します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
                  //  使用できる DOM エレメントに変えます)。
                  sym.$("OK").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__10yen}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         			if(cnt==1){
                  	sym.$("yen1").attr('src','images/10yen.png');
                  }
                  if(cnt==2){
                  	sym.$("yen2").attr('src','images/10yen.png');
                  }
                  if(cnt<3){
                  	cnt=cnt+1;
                  	sum=sum+10;
                  }
         		 if(flag==0){
                  coin.play();
         		 }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1yen}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         						// マウスクリックのコードをここに挿入します
                  			if(cnt==1){
                           	sym.$("yen1").attr('src','images/1yen.png');
                           }
                           if(cnt==2){
                           	sym.$("yen2").attr('src','images/1yen.png');
                           }
                           if(cnt<3){
                           	cnt=cnt+1;
                           	sum=sum+1;
                           }
                  
                  		  if(flag==0){
                           coin.play();  
         				  }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5yen}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         			// マウスクリックのコードをここに挿入します
                  if(cnt==1){
                  	sym.$("yen1").attr('src','images/5yen.png');
                  }
                  if(cnt==2){
                  	sym.$("yen2").attr('src','images/5yen.png');
                  }
                  if(cnt<3){
                  	cnt=cnt+1;
                  	sum=sum+5;
                  }
                  
         		 if(flag==0){ 
                  coin.play();
         		 }
         
                  // エレメントのコンテンツを変更します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
                  //  使用できる DOM エレメントに変えます)。
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         			// シンボルのインスタンスであるエレメントから Edge Animate シンボルの
                  // Javascript オブジェクトを検索します。シンボルのオブジェクトを使用して、再生、停止などの
                  // シンボル関数を呼び出
                  sym.getParentSymbol("Symbol_1")
                  sym.getComposition().getStage().getSymbol("Symbol_1").deleteSymbol();
                  
                  var rum=Math.round (Math.random () * 6 + 0.5);
                  var rum2=Math.round (Math.random () * 8 + 0.5);
                  var rumcnt=0;
                  var cnt=1;
                  var acnt=0;
                  var sum=0;
                  var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス
                  var a1=2,a2=6,a3=10,a4=11,a5=15,a6=20;
                  var b1=3,b2=7,b3=11,b4=12,b5=16,b6=20,b7=21,b8=30;
                  var x;
                  //sym.getComposition().getStage().getSymbol("mondai2").play();
                  // マウスクリックのコードをここに挿入します
                  if(flag==0){
         			 button.play();
         
         		 }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_retry}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         		if(flag==0){
         		 button.play();
         		 }
                  document.location.reload(true);

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_seikai}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         		 if(flag==0){
                  button.play();
         		 }
                  // マウスクリックのコードをここに挿入します
                  sym.$("yen1").attr('src','images/yen.png');
                  sym.$("yen2").attr('src','images/yen.png');
                  cnt=1;
                  sum=0;
         
                  rum=Math.round (Math.random () * 6 + 0.5);
                  if(rumcnt==rum){
                  while(rumcnt==rum){
                  rum=Math.round (Math.random () * 6 + 0.5);
                  }
                  }
                  if(rum==1){
                  		x=a1;
                  		}else if(rum==2){
                  		x=a2;
                  		}else if(rum==3){
                  		x=a3;	
                  		}else if(rum==4){
                  		x=a4;
                  		}else if(rum==5){
                  		x=a5;
                  		}else if(rum==6){
                  		x=a6;
                  		}
                  		rumcnt=rum;
                           sym.$("total_yen").html(x);
         
                   // エレメントを隠します。
                   //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                   // 使用できる DOM エレメントに変えます)。
                   sym.$("seikai").hide();
                   // エレメントを表示します。
                   //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
                   //  使用できる DOM エレメントに変えます)。
                   sym.$("yarinaoshi").show();
         
                  // エレメントを表示します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
                  //  使用できる DOM エレメントに変えます)。
                  sym.$("OK").show();
         
         
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_yarinaoshi}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         			
         			sym.$("yen1").attr('src','images/yen.png');
                  sym.$("yen2").attr('src','images/yen.png');
                  cnt=1;
                  sum=0;
                  
                  // エレメントを隠します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                  // 使用できる DOM エレメントに変えます)。
                  sym.$("batu").hide();
                  
         		 if(flag==0){
                  button.play();
         		 }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         		 if(flag==0){
         	     bgm.play();
                  button.play();
         		 }
         
         //		 if(flag==1){
         //	     alert("android 2");
         //		 }
                  // エレメントを隠します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                  // 使用できる DOM エレメントに変えます)。
                  sym.$("returnchose").hide();
                  sym.getComposition().getStage().getSymbol("time").play();
                  sym.$("money").show();
                  if(rum==1){
                  		x=a1;
                  }else if(rum==2){
                  		x=a2;
                  }else if(rum==3){
                  		x=a3;	
                  }else if(rum==4){
                  		x=a4;
                  }else if(rum==5){
                  		x=a5;
                  }else if(rum==6){
                  		x=a6;
                  }
                  rumcnt=rum;
         			sym.$("total_yen").html(x);
         			sym.$("start3").hide();
         			sym.$("bg").hide();			//スタート画面の消去
         			sym.$("time2").show(); //timeの表示
         			sym.$("nokori").hide();		
         			sym.$("mondaisu").hide();//残り問題数を隠す
         
         			//タイマー 25から50に変更（矢野　８・６）
         			var timerCount=50; 
         			sym.getComposition().getStage().getSymbol("time").$("time_txt").html(timerCount);
         			tCounter=setInterval(timer, 1000); //1000 will run the timer every 1 second
         
         			function timer(){
         				timerCount=timerCount-1;
         				if(timerCount<=-1){
         					  return;	
         				}
         				if(timerCount<=0){
         					sym.$("OK").hide();
         					if(acnt!=5){
         						sym.$("badresult").show();
         						sym.$("time2").hide();
         					}
         					sym.$("a").html(acnt);
         				}
         				console.log("tCounter");	          
                     sym.getComposition().getStage().getSymbol("time").$("time_txt").html(timerCount); // Display the timer value          
               	}
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse3}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         		 if(flag==0){
         	     bgm.play();
                  button.play();
         		 }
         
         //		 if(flag==1){
         //	     alert("android 2");
         //		 }
                  // エレメントを隠します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                  // 使用できる DOM エレメントに変えます)。
                  sym.$("returnchose").hide();
                  sym.getComposition().getStage().getSymbol("time").play();
                  sym.$("money").show();
                  if(rum==1){
                  		x=a1;
                  }else if(rum==2){
                  		x=a2;
                  }else if(rum==3){
                  		x=a3;	
                  }else if(rum==4){
                  		x=a4;
                  }else if(rum==5){
                  		x=a5;
                  }else if(rum==6){
                  		x=a6;
                  }
                  rumcnt=rum;
         			sym.$("total_yen").html(x);
         			sym.$("start3").hide();
         			sym.$("bg").hide();			//スタート画面の消去
         			sym.$("time2").show(); //timeの表示
         			sym.$("nokori").hide();		
         			sym.$("mondaisu").hide();//残り問題数を隠す
         
         			//タイマー 25から50に変更（矢野　８・６）
         			var timerCount=50; 
         			sym.getComposition().getStage().getSymbol("time").$("time_txt").html(timerCount);
         			tCounter=setInterval(timer, 1000); //1000 will run the timer every 1 second
         
         			function timer(){
         				timerCount=timerCount-1;
         				if(timerCount<=-1){
         					  return;	
         				}
         				if(timerCount<=0){
         					sym.$("OK").hide();
         					if(acnt!=5){
         						sym.$("badresult").show();
         						sym.$("time2").hide();
         					}
         					sym.$("a").html(acnt);
         				}
         				console.log("tCounter");	          
                     sym.getComposition().getStage().getSymbol("time").$("time_txt").html(timerCount); // Display the timer value          
               	}
         

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'mondai1_1'
   (function(symbolName) {   
   
      

      

      

      

      


      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_start}", "touchstart", function(sym, e) {
		 if(flag==0){
         button.play();
		 }
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("hajime2").hide();
         sym.$("timebg").show();
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("start").hide();
         // マウスクリックのコードをここに挿入します
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("money").show();
         acnt=0;
         cnt=1;
         sum=0;
         	if(rum2==1){
         			x=b1;
         		}else if(rum2==2){
         			x=b2;
         		}else if(rum2==3){
         			x=b3;	
         		}else if(rum2==4){
         			x=b4;
         		}else if(rum2==5){
         			x=b5;
         		}else if(rum2==6){
         			x=b6;
         		}else if(rum2==7){
         			x=b7;
         		}else{
         		x=b8;
         	}
         
			rumcnt=rum2;
			  sym.$("total_yen").html(x);
	 
			  // エレメントを隠します。
			  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
			  // 使用できる DOM エレメントに変えます)。
			  sym.$("doerCopy").hide();
			  sym.$("dore_sikakuCopy").hide();
			  sym.$("RoundRect3").hide();
			  sym.$("norma").hide();
			  sym.$("nokori").show();
			  sym.$("mondaisu").show();
         
         var timerCount=80; //ここで時間を決めている。長すぎたら、変更してください(矢野）
         	sym.getComposition().getStage().getSymbol("time_1").$("time_txt").html(timerCount);
                  var tCounter=setInterval(timer, 1000); //1000 will run the timer every 1 second
         
                  function timer()
                  {
                    timerCount=timerCount-1;
         	if(timerCount<=-1){
         	              return;	
         	              		}
         	 if(timerCount<=0){
         sym.$("OK").hide();
         if(acnt!=6){
         sym.$("badresult").show();
         sym.$("nokori").hide();
         sym.$("mondaisu").hide();
         sym.$("timebg").hide();
         }
         sym.$("a").html(acnt);
         }	 
         
                  sym.getComposition().getStage().getSymbol("time_1").$("time_txt").html(timerCount); 
         
                    }
         // マウスクリックのコードをここに挿入します
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_retry}", "touchstart", function(sym, e) {
		 
		 if(flag==0){
         button.play();
		 }
         // マウスクリックのコードをここに挿入します
         document.location.reload(true);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_restart}", "touchstart", function(sym, e) {
		 if(flag==0){
         button.play();
		 }
         // マウスクリックのコードをここに挿入します
         document.location.reload(true);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yarinaoshi}", "touchstart", function(sym, e) {
		 if(flag==0){
         button.play();
		 }
         sym.$("yen1").attr('src','images/yen.png');
         sym.$("yen2").attr('src','images/yen.png');
         sym.$("yen").attr('src','images/yen.png');
         cnt=1;
         sum=0;
         
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("batu").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_seikai}", "touchstart", function(sym, e) {
		 if(flag==0){
         button.play();
		 }
         // マウスクリックのコードをここに挿入します
         sym.$("yen1").attr('src','images/yen.png');
         sym.$("yen2").attr('src','images/yen.png');
         sym.$("yen").attr('src','images/yen.png');
         cnt=1;
         sum=0;
         rum2=Math.round (Math.random () * 8 + 0.5);
         if(rumcnt==rum2){
         while(rumcnt==rum2){
         rum2=Math.round (Math.random () * 8 + 0.5);
         }
         }
         if(rum2==1){
         		x=b1;
         }else if(rum2==2){
         		x=b2;
         }else if(rum2==3){
         		x=b3;	
         }else if(rum2==4){
         		x=b4;
         }else if(rum2==5){
         		x=b5;
         }else if(rum2==6){
         		x=b6;
         }else if(rum2==7){
         		x=b7;
         }else{
         		x=b8;
         }
         		rumcnt=rum2;
                  sym.$("total_yen").html(x);
         
          // エレメントを隠します。
          //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
          // 使用できる DOM エレメントに変えます)。
          sym.$("seikai").hide();
          // エレメントを表示します。
          //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
          //  使用できる DOM エレメントに変えます)。
          sym.$("yarinaoshi").show();
         
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("OK").show();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1yen}", "touchstart", function(sym, e) {
         
         
         
         // マウスクリックのコードをここに挿入します
         if(cnt==1){
         sym.$("yen1").attr('src','images/1yen.png');
         }
         if(cnt==2){
         sym.$("yen2").attr('src','images/1yen.png');
         }
         if(cnt==3){
         sym.$("yen").attr('src','images/1yen.png');
         }
         if(cnt<4){
         cnt=cnt+1;
         sum=sum+1;
         }
         if(flag==0){        
         coin.play();
		 }
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5yen}", "touchstart", function(sym, e) {
         
         
         // マウスクリックのコードをここに挿入します
         if(cnt==1){
         sym.$("yen1").attr('src','images/5yen.png');
         }
         if(cnt==2){
         sym.$("yen2").attr('src','images/5yen.png');
         }
         if(cnt==3){
         sym.$("yen").attr('src','images/5yen.png');
         }
         if(cnt<4){
         cnt=cnt+1;
         sum=sum+5;
         }
         
		 if(flag==0){
         coin.play();
		 }
		 
         // エレメントのコンテンツを変更します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__10yen}", "touchstart", function(sym, e) {
         
         
         
         if(cnt==1){
         sym.$("yen1").attr('src','images/10yen.png');
         }
         if(cnt==2){
         sym.$("yen2").attr('src','images/10yen.png');
         }
         if(cnt==3){
         sym.$("yen").attr('src','images/10yen.png');
         }
         if(cnt<4){
         cnt=cnt+1;
         sum=sum+10;
         }
         if(flag==0){
         coin.play();
		 }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text3Copy}", "touchstart", function(sym, e) {
		 if(flag==0){
         button.play();
		 }
         // マウスクリックのコードをここに挿入します
         sym.$("yen1").attr('src','images/yen.png');
         sym.$("yen2").attr('src','images/yen.png');
         sym.$("yen").attr('src','images/yen.png');
         cnt=1;
         sum=0;
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("batu").hide();
         
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("OK").show();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_OK}", "click", function(sym, e) {
if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
|| navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	return;
}

		if(flag==0){
         button.play();
		 }
         console.log("OK");
         console.log('cnt=%d',cnt);
         console.log('sum=%d',sum);
         console.log('x=%d',x);

         //15円のとき
         if(cnt==4){
         // 正解の時
         if(sum==x){
         acnt=acnt+1;
         sym.$("mondaisu").html(6-acnt); 
                  if(acnt==6){
         		  if(flag==0){
                  crear.play();
				  }
                  sym.$("goodresult").show();
         			sym.$("nokori").hide();
         			sym.$("mondaisu").hide();
         			sym.$("timebg").hide();
                  //タイマー削除
         			sym.getComposition().getStage().getSymbol("time_1").deleteSymbol();
         			clearInterval(tCounter);

                  sym.$("OK").hide();

                  }else{
                  sym.$("seikai").show();
                  sym.$("OK").hide();
                  }

         //やり直し削除
         sym.$("yarinaoshi").hide();
         }
         //不正解のとき
         if(sum!=x){
         sym.$("batu").show();
         }
         }

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_OK}", "touchstart", function(sym, e) {
         		 if(flag==0){
                  button.play();
         		 }
                  console.log("OK");
                  console.log('cnt=%d',cnt);
                  console.log('sum=%d',sum);
                  console.log('x=%d',x);
         
                  //15円のとき
                  if(cnt==4){
                  // 正解の時
                  if(sum==x){
                  acnt=acnt+1;
                  sym.$("mondaisu").html(6-acnt); 
                           if(acnt==6){
                  		  if(flag==0){
                           crear.play();
         				  }
                           sym.$("goodresult").show();
                  			sym.$("nokori").hide();
                  			sym.$("mondaisu").hide();
                  			sym.$("timebg").hide();
                           //タイマー削除
                  			sym.getComposition().getStage().getSymbol("time_1").deleteSymbol();
                  			clearInterval(tCounter);
         
                           sym.$("OK").hide();
         
                           }else{
                           sym.$("seikai").show();
                           sym.$("OK").hide();
                           }
         
                  //やり直し削除
                  sym.$("yarinaoshi").hide();
                  }
                  //不正解のとき
                  if(sum!=x){
                  sym.$("batu").show();
                  }
                  }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text3Copy}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         		 if(flag==0){
                  button.play();
         		 }
                  // マウスクリックのコードをここに挿入します
                  sym.$("yen1").attr('src','images/yen.png');
                  sym.$("yen2").attr('src','images/yen.png');
                  sym.$("yen").attr('src','images/yen.png');
                  cnt=1;
                  sum=0;
                  // エレメントを隠します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                  // 使用できる DOM エレメントに変えます)。
                  sym.$("batu").hide();
         
                  // エレメントを表示します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
                  //  使用できる DOM エレメントに変えます)。
                  sym.$("OK").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__10yen}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }         
                  
                  
                  if(cnt==1){
                  sym.$("yen1").attr('src','images/10yen.png');
                  }
                  if(cnt==2){
                  sym.$("yen2").attr('src','images/10yen.png');
                  }
                  if(cnt==3){
                  sym.$("yen").attr('src','images/10yen.png');
                  }
                  if(cnt<4){
                  cnt=cnt+1;
                  sum=sum+10;
                  }
                  if(flag==0){
                  coin.play();
         		 }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5yen}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }         
                  
                  // マウスクリックのコードをここに挿入します
                  if(cnt==1){
                  sym.$("yen1").attr('src','images/5yen.png');
                  }
                  if(cnt==2){
                  sym.$("yen2").attr('src','images/5yen.png');
                  }
                  if(cnt==3){
                  sym.$("yen").attr('src','images/5yen.png');
                  }
                  if(cnt<4){
                  cnt=cnt+1;
                  sum=sum+5;
                  }
                  
         		 if(flag==0){
                  coin.play();
         		 }
         
                  // エレメントのコンテンツを変更します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
                  //  使用できる DOM エレメントに変えます)。
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1yen}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }         
                  
                  
                  // マウスクリックのコードをここに挿入します
                  if(cnt==1){
                  sym.$("yen1").attr('src','images/1yen.png');
                  }
                  if(cnt==2){
                  sym.$("yen2").attr('src','images/1yen.png');
                  }
                  if(cnt==3){
                  sym.$("yen").attr('src','images/1yen.png');
                  }
                  if(cnt<4){
                  cnt=cnt+1;
                  sum=sum+1;
                  }
                  if(flag==0){        
                  coin.play();
         		 }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_seikai}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         		 if(flag==0){
                  button.play();
         		 }
                  // マウスクリックのコードをここに挿入します
                  sym.$("yen1").attr('src','images/yen.png');
                  sym.$("yen2").attr('src','images/yen.png');
                  sym.$("yen").attr('src','images/yen.png');
                  cnt=1;
                  sum=0;
                  rum2=Math.round (Math.random () * 8 + 0.5);
                  if(rumcnt==rum2){
                  while(rumcnt==rum2){
                  rum2=Math.round (Math.random () * 8 + 0.5);
                  }
                  }
                  if(rum2==1){
                  		x=b1;
                  }else if(rum2==2){
                  		x=b2;
                  }else if(rum2==3){
                  		x=b3;	
                  }else if(rum2==4){
                  		x=b4;
                  }else if(rum2==5){
                  		x=b5;
                  }else if(rum2==6){
                  		x=b6;
                  }else if(rum2==7){
                  		x=b7;
                  }else{
                  		x=b8;
                  }
                  		rumcnt=rum2;
                           sym.$("total_yen").html(x);
         
                   // エレメントを隠します。
                   //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                   // 使用できる DOM エレメントに変えます)。
                   sym.$("seikai").hide();
                   // エレメントを表示します。
                   //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
                   //  使用できる DOM エレメントに変えます)。
                   sym.$("yarinaoshi").show();
         
                  // エレメントを表示します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
                  //  使用できる DOM エレメントに変えます)。
                  sym.$("OK").show();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_restart}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         		 if(flag==0){
                  button.play();
         		 }
                  // マウスクリックのコードをここに挿入します
                  document.location.reload(true);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_start}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         		 
         		 if(flag==0){
                  button.play();
         		 }
                  // エレメントを隠します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                  // 使用できる DOM エレメントに変えます)。
                  // エレメントを隠します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                  // 使用できる DOM エレメントに変えます)。
                  sym.$("hajime2").hide();
                  sym.$("timebg").show();
                  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                  // 使用できる DOM エレメントに変えます)。
                  sym.$("start").hide();
                  // マウスクリックのコードをここに挿入します
                  // エレメントを表示します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
                  //  使用できる DOM エレメントに変えます)。
                  sym.$("money").show();
                  acnt=0;
                  cnt=1;
                  sum=0;
                  	if(rum2==1){
                  			x=b1;
                  		}else if(rum2==2){
                  			x=b2;
                  		}else if(rum2==3){
                  			x=b3;	
                  		}else if(rum2==4){
                  			x=b4;
                  		}else if(rum2==5){
                  			x=b5;
                  		}else if(rum2==6){
                  			x=b6;
                  		}else if(rum2==7){
                  			x=b7;
                  		}else{
                  		x=b8;
                  	}
         
         			rumcnt=rum2;
         			  sym.$("total_yen").html(x);
         
         			  // エレメントを隠します。
         			  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         			  // 使用できる DOM エレメントに変えます)。
         			  sym.$("doerCopy").hide();
         			  sym.$("dore_sikakuCopy").hide();
         			  sym.$("RoundRect3").hide();
         			  sym.$("norma").hide();
         			  sym.$("nokori").show();
         			  sym.$("mondaisu").show();
         
                  var timerCount=80; //ここで時間を決めている。長すぎたら、変更してください(矢野）
                  	sym.getComposition().getStage().getSymbol("time_1").$("time_txt").html(timerCount);
                           var tCounter=setInterval(timer, 1000); //1000 will run the timer every 1 second
         
                           function timer()
                           {
                             timerCount=timerCount-1;
                  	if(timerCount<=-1){
                  	              return;	
                  	              		}
                  	 if(timerCount<=0){
                  sym.$("OK").hide();
                  if(acnt!=6){
                  sym.$("badresult").show();
                  sym.$("nokori").hide();
                  sym.$("mondaisu").hide();
                  sym.$("timebg").hide();
                  }
                  sym.$("a").html(acnt);
                  }	 
         
                           sym.getComposition().getStage().getSymbol("time_1").$("time_txt").html(timerCount); 
         
                             }
                  // マウスクリックのコードをここに挿入します
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_retry}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         		 if(flag==0){
                  button.play();
         		 }
                  // マウスクリックのコードをここに挿入します
                  document.location.reload(true);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yarinaoshi}", "click", function(sym, e) {
         if ( navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 
         || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
         	return;
         }
         
         		 if(flag==0){
                  button.play();
         		 }
                  sym.$("yen1").attr('src','images/yen.png');
                  sym.$("yen2").attr('src','images/yen.png');
                  sym.$("yen").attr('src','images/yen.png');
                  cnt=1;
                  sum=0;
         
                  // エレメントを隠します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                  // 使用できる DOM エレメントに変えます)。
                  sym.$("batu").hide();
         

      });
      //Edge binding end

   })("mondai2");
   //Edge symbol end:'mondai2'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'mondai1_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_start}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         // エレメントを表示します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         sym.$("money").show();
         
         
           if(rum2==1){
         		x=b1;
         	}else if(rum2==2){
         		x=b2;
         		}else if(rum2==3){
         		x=b3;	
         		}else if(rum2==4){
         		x=b4;
         		}else if(rum2==5){
         		x=b5;
         		}else if(rum2==6){
         		x=b6;
         		}else if(rum2==7){
         		x=b7;
         		}else{
         		x=b8;
         	}
         
         		rumcnt=rum2;
                  sym.$("total_yen").html(x);
         
                  // エレメントを隠します。
                  //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
                  // 使用できる DOM エレメントに変えます)。
                  sym.$("start").hide();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1yen}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         if(cnt==1){
         sym.$("yen1").attr('src','images/1yen.png');
         }
         if(cnt==2){
         sym.$("yen2").attr('src','images/1yen.png');
         }
         if(cnt==3){
         sym.$("yen").attr('src','images/1yen.png');
         }
         if(cnt<4){
         cnt=cnt+1;
         sum=sum+1;
         }
         if(flag==0){
         coin.play();
		 }
      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5yen}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         if(cnt==1){
         sym.$("yen1").attr('src','images/5yen.png');
         }
         if(cnt==2){
         sym.$("yen2").attr('src','images/5yen.png');
         }
         if(cnt==3){
         sym.$("yen").attr('src','images/5yen.png');
         }
         if(cnt<4){
         cnt=cnt+1;
         sum=sum+5;
         }
		 if(flag==0){
         coin.play();
		 }
         // エレメントのコンテンツを変更します。
         //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
         //  使用できる DOM エレメントに変えます)。
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__10yen}", "click", function(sym, e) {
         if(cnt==1){
         sym.$("yen1").attr('src','images/10yen.png');
         }
         if(cnt==2){
         sym.$("yen2").attr('src','images/10yen.png');
         }
         if(cnt==3){
         sym.$("yen").attr('src','images/10yen.png');
         }
         if(cnt<4){
         cnt=cnt+1;
         sum=sum+10;
         }
         if(flag==0){
         coin.play();
		 }
      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ok}", "click", function(sym, e) {
         
         //15円のとき
         if(cnt==4){
         // 正解の時
         if(sum==x){
         sym.$("seikai").show();
         //やり直し削除
         sym.$("yarinaoshi").hide();
         }
         //不正解のとき
         if(sum!=x){
         sym.$("batu").show();
         }
         }
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_seikai}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         sym.$("yen1").attr('src','images/yen.png');
         sym.$("yen2").attr('src','images/yen.png');
         sym.$("yen").attr('src','images/yen.png');
         cnt=1;
         sum=0;
         rum2=Math.round (Math.random () * 8 + 0.5);
         if(rumcnt==rum2){
         while(rumcnt==rum2){
         rum2=Math.round (Math.random () * 8 + 0.5);
         }
         }
         if(rum2==1){
         		x=b1;
         	}else if(rum2==2){
         		x=b2;
         	}else if(rum2==3){
         		x=b3;	
         	}else if(rum2==4){
         		x=b4;
         	}else if(rum2==5){
         		x=b5;
         	}else if(rum2==6){
         		x=b6;
         	}else if(rum2==7){
         		x=b7;
         	}else{
         		x=b8;
         	}
         		rumcnt=rum2;
                  sym.$("total_yen").html(x);
         
          // エレメントを隠します。
          //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
          // 使用できる DOM エレメントに変えます)。
          sym.$("seikai").hide();
          // エレメントを表示します。
          //  (sym.$("name") は Edge Animate のエレメント名を、 jQuery で
          //  使用できる DOM エレメントに変えます)。
          sym.$("yarinaoshi").show();
         
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text3Copy}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         sym.$("yen1").attr('src','images/yen.png');
         sym.$("yen2").attr('src','images/yen.png');
         sym.$("yen").attr('src','images/yen.png');
         cnt=1;
         sum=0;
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("batu").hide();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yarinaoshi}", "click", function(sym, e) {
         sym.$("yen1").attr('src','images/yen.png');
         sym.$("yen2").attr('src','images/yen.png');
         sym.$("yen").attr('src','images/yen.png');
         cnt=1;
         sum=0;
         
         // エレメントを隠します。
         //  (sym.$("name") は Edge Animate のエレメント名を、jQuery で
         // 使用できる DOM エレメントに変えます)。
         sym.$("batu").hide();

      });
         //Edge binding end

   })("mondai2_1");
   //Edge symbol end:'mondai2_1'

   //=========================================================
   
   //Edge symbol: 'time_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // コードをここに挿入
      });
         //Edge binding end

      })("time_1");
   //Edge symbol end:'time_1'

   //=========================================================
   
   //Edge symbol: 'returnchose'
   (function(symbolName) {   
   
   })("returnchose");
   //Edge symbol end:'returnchose'

   //=========================================================
   
   //Edge symbol: 'hajime2'
   (function(symbolName) {   
   
   })("hajime2");
   //Edge symbol end:'hajime2'

   //=========================================================
   
   //Edge symbol: 'OK'
   (function(symbolName) {   
   
   })("OK");
   //Edge symbol end:'OK'

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

   //=========================================================

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

})(jQuery, AdobeEdge, "EDGE-167066725");
