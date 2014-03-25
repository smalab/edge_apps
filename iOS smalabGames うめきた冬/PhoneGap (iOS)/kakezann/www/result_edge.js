/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'RoundRect',
            type:'rect',
            rect:['52px','198px','661px','506px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(255,255,255,1.00)",[270,[['rgba(20,86,255,1.00)',0],['rgba(71,255,243,1.00)',100]]]],
            stroke:[2,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'RoundRectCopy3',
            type:'rect',
            rect:['56px','730px','661px','250px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(255,255,255,1.00)",[270,[['rgba(20,86,255,1.00)',0],['rgba(71,255,243,1.00)',100]]]],
            stroke:[2,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'RoundRectCopy4',
            type:'rect',
            rect:['56px','1007px','661px','628px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(255,255,255,1.00)",[270,[['rgba(20,86,255,1.00)',0],['rgba(71,255,243,1.00)',100]]]],
            stroke:[2,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'RoundRectCopy6',
            type:'rect',
            rect:['56px','1670px','661px','250px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(255,255,255,1.00)",[270,[['rgba(20,86,255,1.00)',0],['rgba(71,255,243,1.00)',100]]]],
            stroke:[2,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Rectangle4',
            type:'rect',
            rect:['85px','825px','595px','127px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[2,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['0px','-30px','768px','171px','auto','auto'],
            fill:["rgba(192,192,192,1)",[270,[['rgba(63,93,255,1.00)',0],['rgba(81,248,255,1.00)',100]]]],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Text',
            type:'text',
            rect:['42px','28px','465px','113px','auto','auto'],
            text:"さいこうスコア",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',65,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'Text4Copy',
            type:'text',
            rect:['75px','474px','313px','39px','auto','auto'],
            text:"ハードレベル",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(255,223,0,1.00)","400","none","normal"]
         },
         {
            id:'Text4Copy2',
            type:'text',
            rect:['107px','838px','313px','39px','auto','auto'],
            text:"しょうごう",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","400","none","normal"]
         },
         {
            id:'Rectangle3',
            type:'rect',
            rect:['77px','527px','609px','147px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[2,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Text6Copy2',
            type:'text',
            rect:['97px','634px','225px','31px','auto','auto'],
            text:"むずかしい",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text6Copy',
            type:'text',
            rect:['97px','587px','225px','31px','auto','auto'],
            text:"ふつう",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text6',
            type:'text',
            rect:['98px','543px','225px','31px','auto','auto'],
            text:"やさしい",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['77px','341px','609px','109px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[2,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Text5',
            type:'text',
            rect:['97px','354px','302px','31px','auto','auto'],
            text:"ふつう",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text5Copy',
            type:'text',
            rect:['97px','397px','302px','31px','auto','auto'],
            text:"むずかしい",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4',
            type:'text',
            rect:['76px','287px','313px','39px','auto','auto'],
            text:"スタンダードレベル",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(255,223,0,1.00)","400","none","normal"]
         },
         {
            id:'Text4Copy11',
            type:'text',
            rect:['97px','1109px','313px','39px','auto','auto'],
            text:"やさしい<br>",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(255,223,0,1.00)","400","none","normal"]
         },
         {
            id:'Text4Copy12',
            type:'text',
            rect:['91px','1363px','313px','39px','auto','auto'],
            text:"ふつう",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(255,223,0,1.00)","400","none","normal"]
         },
         {
            id:'Text2',
            type:'text',
            rect:['74px','210px','363px','39px','auto','auto'],
            text:"かけ算カードゲーム",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',37,"rgba(255,255,255,1.00)","500","none","normal"]
         },
         {
            id:'Text2Copy',
            type:'text',
            rect:['77px','749px','363px','39px','auto','auto'],
            text:"しゅんかんし",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',37,"rgba(255,255,255,1.00)","500","none","normal"]
         },
         {
            id:'Rectangle6',
            type:'rect',
            rect:['85px','1785px','595px','91px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[2,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'RoundRectCopy7',
            type:'rect',
            rect:['56px','1954px','661px','250px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(255,255,255,1.00)",[270,[['rgba(20,86,255,1.00)',0],['rgba(71,255,243,1.00)',100]]]],
            stroke:[2,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Rectangle6Copy',
            type:'rect',
            rect:['85px','2069px','595px','91px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[2,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Text4Copy7',
            type:'text',
            rect:['102px','2096px','313px','39px','auto','auto'],
            text:"とくてん",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","400","none","normal"]
         },
         {
            id:'Text2Copy4',
            type:'text',
            rect:['77px','1998px','514px','39px','auto','auto'],
            text:"ラボスマート<br>",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',37,"rgba(255,255,255,1.00)","500","none","normal"]
         },
         {
            id:'Text4Copy6',
            type:'text',
            rect:['102px','1812px','313px','39px','auto','auto'],
            text:"とくてん",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","400","none","normal"]
         },
         {
            id:'Text2Copy3',
            type:'text',
            rect:['77px','1714px','514px','39px','auto','auto'],
            text:"Witch Math",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',37,"rgba(255,255,255,1.00)","500","none","normal"]
         },
         {
            id:'Rectangle5',
            type:'rect',
            rect:['85px','1156px','595px','183px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[2,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Text4Copy3',
            type:'text',
            rect:['98px','1170px','313px','39px','auto','auto'],
            text:"たしざん",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","400","none","normal"]
         },
         {
            id:'Text4Copy4',
            type:'text',
            rect:['98px','1282px','313px','39px','auto','auto'],
            text:"かけざん",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","400","none","normal"]
         },
         {
            id:'Text4Copy5',
            type:'text',
            rect:['98px','1225px','313px','39px','auto','auto'],
            text:"ひきざん",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","400","none","normal"]
         },
         {
            id:'Rectangle5Copy',
            type:'rect',
            rect:['84px','1412px','595px','183px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[2,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Text4Copy10',
            type:'text',
            rect:['97px','1426px','313px','39px','auto','auto'],
            text:"たしざん",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","400","none","normal"]
         },
         {
            id:'Text4Copy9',
            type:'text',
            rect:['97px','1538px','313px','39px','auto','auto'],
            text:"かけざん",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","400","none","normal"]
         },
         {
            id:'Text4Copy8',
            type:'text',
            rect:['97px','1481px','313px','39px','auto','auto'],
            text:"ひきざん",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","400","none","normal"]
         },
         {
            id:'Text2Copy2',
            type:'text',
            rect:['85px','1037px','514px','39px','auto','auto'],
            text:"さんすうしんけいすいじゃく",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',37,"rgba(255,255,255,1.00)","500","none","normal"]
         },
         {
            id:'Rectangle7',
            type:'rect',
            rect:['486px','3311px','257px','45px','auto','auto'],
            fill:["rgba(255,159,0,1.00)"],
            stroke:[2,"rgb(0, 0, 0)","solid"],
            boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"]
         },
         {
            id:'ribon03',
            type:'image',
            rect:['577px','841px','60px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ribon03.png",'0px','0px']
         },
         {
            id:'ribon02',
            type:'image',
            rect:['577px','841px','60px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ribon02.png",'0px','0px']
         },
         {
            id:'ribon01',
            type:'image',
            rect:['577px','841px','60px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ribon01.png",'0px','0px']
         },
         {
            id:'syunkantxt',
            type:'text',
            rect:['107px','892px','424px','49px','auto','auto'],
            text:"??????",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'ALLclear',
            type:'text',
            rect:['504px','3311px','225px','49px','auto','auto'],
            text:"データの消去",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',37,"rgba(255,255,255,1)","500","none","normal"]
         },
         {
            id:'kakezann4',
            type:'text',
            rect:['537px','354px','108px','31px','auto','auto'],
            text:"0",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'kakezann1',
            type:'text',
            rect:['545px','634px','108px','31px','auto','auto'],
            text:"0",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'kakezann2',
            type:'text',
            rect:['545px','587px','108px','31px','auto','auto'],
            text:"0",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'kakezann5',
            type:'text',
            rect:['537px','397px','108px','31px','auto','auto'],
            text:"0",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'kakezann3',
            type:'text',
            rect:['545px','543px','108px','31px','auto','auto'],
            text:"0",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'SINK101',
            type:'text',
            rect:['545px','1170px','108px','31px','auto','auto'],
            text:"0",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'SINK102',
            type:'text',
            rect:['545px','1233px','108px','31px','auto','auto'],
            text:"0",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'SINK103',
            type:'text',
            rect:['545px','1282px','108px','31px','auto','auto'],
            text:"0",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'SINK201',
            type:'text',
            rect:['537px','1434px','108px','31px','auto','auto'],
            text:"0",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'SINK202',
            type:'text',
            rect:['537px','1481px','108px','31px','auto','auto'],
            text:"0",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'SINK203',
            type:'text',
            rect:['537px','1532px','108px','31px','auto','auto'],
            text:"0",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'WM1',
            type:'text',
            rect:['537px','1820px','108px','31px','auto','auto'],
            text:"0",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'LS1',
            type:'text',
            rect:['545px','2104px','108px','31px','auto','auto'],
            text:"0",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'RoundRect2',
            type:'rect',
            rect:['420px','2236px','302px','66px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(14,119,255,1.00)",[270,[['rgba(71,100,255,1.00)',0],['rgba(116,255,246,1.00)',100]]]],
            stroke:[2,"rgba(0,0,0,1)","solid"],
            boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"]
         },
         {
            id:'Text3',
            type:'text',
            rect:['430px','2242px','280px','66px','auto','auto'],
            text:"もどる",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',41,"rgba(255,255,255,1.00)","normal","none",""]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_kakezann3}": [
            ["style", "top", '543px'],
            ["style", "left", '545px'],
            ["style", "width", '108px']
         ],
         "${_RoundRectCopy3}": [
            ["style", "top", '730px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "left", '56px'],
            ["style", "height", '250px'],
            ["gradient", "background-image", [270,[['rgba(20,86,255,1.00)',0],['rgba(71,255,243,1.00)',100]]]],
            ["style", "border-width", '2px'],
            ["style", "border-style", 'solid']
         ],
         "${_Text2}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "font-size", '37px']
         ],
         "${_SINK101}": [
            ["style", "top", '1170px'],
            ["style", "left", '545px'],
            ["style", "width", '108px']
         ],
         "${_SINK203}": [
            ["style", "top", '1532px'],
            ["style", "left", '537px'],
            ["style", "width", '108px']
         ],
         "${_Rectangle5}": [
            ["style", "top", '1156px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '85px'],
            ["style", "height", '183px']
         ],
         "${_Text4Copy7}": [
            ["style", "top", '2096px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '102px'],
            ["style", "font-size", '25px']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ],
         "${_Text4Copy}": [
            ["style", "top", '474px'],
            ["color", "color", 'rgba(255,223,0,1.00)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '75px'],
            ["style", "font-size", '25px']
         ],
         "${_Text4Copy8}": [
            ["style", "top", '1481px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '97px'],
            ["style", "font-size", '25px']
         ],
         "${_RoundRectCopy6}": [
            ["style", "top", '1670px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "left", '56px'],
            ["style", "height", '250px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["gradient", "background-image", [270,[['rgba(20,86,255,1.00)',0],['rgba(71,255,243,1.00)',100]]]]
         ],
         "${_Text4Copy9}": [
            ["style", "top", '1538px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '97px'],
            ["style", "font-size", '25px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(14,119,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "top", '2236px'],
            ["gradient", "background-image", [270,[['rgba(71,100,255,1.00)',0],['rgba(116,255,246,1.00)',100]]]],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '3400px'],
            ["style", "width", '768px']
         ],
         "${_ALLclear}": [
            ["style", "top", '3311px'],
            ["style", "text-align", 'center'],
            ["style", "height", '49px'],
            ["style", "left", '504px'],
            ["style", "width", '225px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '587px'],
            ["style", "left", '97px']
         ],
         "${_Text2Copy4}": [
            ["style", "top", '1998px'],
            ["style", "font-size", '37px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", '500'],
            ["style", "left", '77px'],
            ["style", "width", '514px']
         ],
         "${_SINK102}": [
            ["style", "top", '1233px'],
            ["style", "left", '545px'],
            ["style", "width", '108px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '527px'],
            ["style", "height", '147px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '77px'],
            ["style", "width", '609px']
         ],
         "${_Rectangle7}": [
            ["color", "background-color", 'rgba(255,159,0,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "left", '486px'],
            ["style", "width", '257px'],
            ["style", "top", '3311px'],
            ["style", "height", '45px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_Text4}": [
            ["color", "color", 'rgba(255,223,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "font-size", '25px']
         ],
         "${_Text4Copy3}": [
            ["style", "top", '1170px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '98px'],
            ["style", "font-size", '25px']
         ],
         "${_Text4Copy2}": [
            ["style", "top", '838px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '107px'],
            ["style", "font-size", '25px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '1714px'],
            ["style", "width", '514px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '77px'],
            ["style", "font-size", '37px']
         ],
         "${_kakezann1}": [
            ["style", "top", '634px'],
            ["style", "left", '545px'],
            ["style", "width", '108px']
         ],
         "${_Text4Copy11}": [
            ["style", "top", '1109px'],
            ["color", "color", 'rgba(255,223,0,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '97px'],
            ["style", "font-size", '25px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["gradient", "background-image", [270,[['rgba(20,86,255,1.00)',0],['rgba(71,255,243,1.00)',100]]]],
            ["style", "height", '506px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "top", '198px']
         ],
         "${_ribon01}": [
            ["style", "left", '577px'],
            ["style", "top", '841px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '749px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '77px'],
            ["style", "font-size", '37px']
         ],
         "${_LS1}": [
            ["style", "top", '2104px'],
            ["style", "left", '545px'],
            ["style", "width", '108px']
         ],
         "${_kakezann4}": [
            ["style", "top", '354px'],
            ["style", "left", '537px'],
            ["style", "width", '108px']
         ],
         "${_Text5}": [
            ["style", "top", '354px'],
            ["style", "left", '97px']
         ],
         "${_Rectangle}": [
            ["style", "top", '-30px'],
            ["gradient", "background-image", [270,[['rgba(63,93,255,1.00)',0],['rgba(81,248,255,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '768px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '1037px'],
            ["style", "font-size", '37px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '85px'],
            ["style", "width", '514px']
         ],
         "${_Text4Copy5}": [
            ["style", "top", '1225px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '98px'],
            ["style", "font-size", '25px']
         ],
         "${_SINK103}": [
            ["style", "top", '1282px'],
            ["style", "left", '545px'],
            ["style", "width", '108px']
         ],
         "${_kakezann2}": [
            ["style", "top", '587px'],
            ["style", "left", '545px'],
            ["style", "width", '108px']
         ],
         "${_WM1}": [
            ["style", "top", '1820px'],
            ["style", "left", '537px'],
            ["style", "width", '108px']
         ],
         "${_Rectangle5Copy}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '183px'],
            ["style", "left", '84px'],
            ["style", "top", '1412px']
         ],
         "${_Text4Copy6}": [
            ["style", "top", '1812px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '102px'],
            ["style", "font-size", '25px']
         ],
         "${_Rectangle6Copy}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "top", '2069px'],
            ["style", "left", '85px'],
            ["style", "width", '595px']
         ],
         "${_Text4Copy10}": [
            ["style", "top", '1426px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '97px'],
            ["style", "font-size", '25px']
         ],
         "${_RoundRectCopy7}": [
            ["style", "top", '1954px'],
            ["gradient", "background-image", [270,[['rgba(20,86,255,1.00)',0],['rgba(71,255,243,1.00)',100]]]],
            ["style", "border-width", '2px'],
            ["style", "height", '250px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '56px'],
            ["color", "background-color", 'rgba(255,255,255,1)']
         ],
         "${_ribon03}": [
            ["style", "left", '577px'],
            ["style", "top", '841px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ],
         "${_SINK202}": [
            ["style", "top", '1481px'],
            ["style", "left", '537px'],
            ["style", "width", '108px']
         ],
         "${_Text3}": [
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-size", '41px'],
            ["style", "height", '66px'],
            ["style", "width", '280px']
         ],
         "${_kakezann5}": [
            ["style", "top", '397px'],
            ["style", "left", '537px'],
            ["style", "width", '108px']
         ],
         "${_Rectangle6}": [
            ["style", "top", '1785px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '85px'],
            ["style", "width", '595px']
         ],
         "${_Text4Copy12}": [
            ["style", "top", '1363px'],
            ["color", "color", 'rgba(255,223,0,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '91px'],
            ["style", "font-size", '25px']
         ],
         "${_ribon02}": [
            ["style", "left", '577px'],
            ["style", "top", '841px']
         ],
         "${_Text}": [
            ["style", "top", '28px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '42px'],
            ["style", "font-size", '65px']
         ],
         "${_Text4Copy4}": [
            ["style", "top", '1282px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '98px'],
            ["style", "font-size", '25px']
         ],
         "${_SINK201}": [
            ["style", "top", '1434px'],
            ["style", "left", '537px'],
            ["style", "width", '108px']
         ],
         "${_Text5Copy}": [
            ["style", "top", '397px']
         ],
         "${_RoundRectCopy4}": [
            ["style", "top", '1007px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "height", '628px'],
            ["gradient", "background-image", [270,[['rgba(20,86,255,1.00)',0],['rgba(71,255,243,1.00)',100]]]],
            ["style", "left", '56px'],
            ["color", "background-color", 'rgba(255,255,255,1)']
         ],
         "${_Text6Copy2}": [
            ["style", "top", '634px'],
            ["style", "left", '97px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-21597545");
