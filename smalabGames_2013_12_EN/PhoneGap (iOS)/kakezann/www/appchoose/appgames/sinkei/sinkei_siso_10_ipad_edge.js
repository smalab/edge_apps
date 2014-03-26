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
            id:'koguru',
            type:'group',
            rect:['-9px','168','210','236','auto','auto'],
            c:[
            {
               id:'sumako1',
               type:'image',
               rect:['0px','46px','110px','190px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"sumako1.png",'0px','0px']
            },
            {
               id:'hukidasi6',
               type:'image',
               rect:['94px','0px','116px','127px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"hukidasi6.png",'0px','0px']
            },
            {
               id:'kotext',
               type:'text',
               rect:['104px','32px','auto','auto','auto','auto'],
               text:"Go for it!",
               align:"center",
               font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',18,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'smagru',
            type:'group',
            rect:['541px','108px','257px','218px','auto','auto'],
            c:[
            {
               id:'hukidasi2',
               type:'image',
               rect:['30px','38px','153px','148px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"hukidasi.png",'0px','0px'],
               transform:[[],[],[],['-0.93103']]
            },
            {
               id:'pen1',
               type:'image',
               rect:['135px','124px','132px','173px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"pen1.png",'0px','0px']
            }]
         },
         {
            id:'time',
            type:'rect',
            rect:['715px','55px','auto','auto','auto','auto']
         },
         {
            id:'kake',
            type:'rect',
            rect:['6','13','auto','auto','auto','auto']
         },
         {
            id:'hiki',
            type:'rect',
            rect:['581','426','auto','auto','auto','auto']
         },
         {
            id:'tashi',
            type:'rect',
            rect:['683','529','auto','auto','auto','auto']
         },
         {
            id:'jyannru',
            type:'text',
            rect:['606px','173px','92px','auto','auto','auto'],
            text:"Select<br>calcs",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',18,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'hikist',
            type:'group',
            rect:['352px','380px','132','48','auto','auto'],
            cursor:['pointer'],
            c:[
            {
               id:'RoundRectCopy3',
               type:'rect',
               rect:['0px','-4px','132px','48px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(215,12,12,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"]
            },
            {
               id:'genreCopy3',
               type:'text',
               rect:['14px','1px','auto','auto','auto','auto'],
               text:"subtract",
               align:"right",
               font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,"rgba(0,0,0,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'kakest',
            type:'group',
            rect:['341px','364px','132','48','auto','auto'],
            cursor:['pointer'],
            c:[
            {
               id:'RoundRectCopy',
               type:'rect',
               rect:['0px','-4px','132px','48px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(215,12,12,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"]
            },
            {
               id:'genreCopy',
               type:'text',
               rect:['27px','5px','auto','auto','auto','auto'],
               text:"multiply<br>",
               align:"right",
               font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,"rgba(0,0,0,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'tashist',
            type:'group',
            rect:['341px','364px','132','48','auto','auto'],
            cursor:['pointer'],
            c:[
            {
               id:'RoundRect',
               type:'rect',
               rect:['0px','-4px','132px','48px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(215,12,12,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"]
            },
            {
               id:'genre',
               type:'text',
               rect:['27px','5px','auto','auto','auto','auto'],
               text:"adds<br>",
               align:"right",
               font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,"rgba(0,0,0,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'sumako3',
            display:'none',
            type:'image',
            rect:['85px','93px','177px','385px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sumako3.png",'0px','0px'],
            transform:[[],[],[],['-1']]
         },
         {
            id:'home',
            type:'rect',
            rect:['569','294','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'tashi',
            symbolName:'tashi'
         },
         {
            id:'time',
            symbolName:'time'
         },
         {
            id:'kake',
            symbolName:'kake'
         },
         {
            id:'home',
            symbolName:'home'
         },
         {
            id:'hiki',
            symbolName:'hiki'
         }
         ]
      },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(215,12,12,1)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "top", '-4px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_RoundRectCopy3}": [
            ["style", "top", '-4px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["color", "background-color", 'rgba(215,12,12,1)']
         ],
         "${_time}": [
            ["style", "left", '668px'],
            ["style", "top", '30px']
         ],
         "${_home}": [
            ["transform", "scaleX", '0.13429'],
            ["style", "left", '590px'],
            ["transform", "scaleY", '0.12286'],
            ["style", "top", '297px']
         ],
         "${_sumako1}": [
            ["style", "height", '190px'],
            ["style", "top", '46px'],
            ["style", "left", '0px'],
            ["style", "width", '110px']
         ],
         "${_kake}": [
            ["style", "left", '2px'],
            ["style", "top", '11px']
         ],
         "${_pen1}": [
            ["style", "top", '124px'],
            ["style", "height", '173px'],
            ["style", "left", '135px'],
            ["style", "width", '132px']
         ],
         "${_genre}": [
            ["style", "top", '5px'],
            ["style", "left", '27px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_koguru}": [
            ["style", "left", '-9px']
         ],
         "${_hikist}": [
            ["style", "top", '380px'],
            ["style", "left", '352px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'block']
         ],
         "${_hiki}": [
            ["style", "left", '3px'],
            ["style", "top", '11px']
         ],
         "${_sumako3}": [
            ["style", "top", '93px'],
            ["style", "display", 'none'],
            ["style", "height", '385px'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '40px'],
            ["style", "width", '177px']
         ],
         "${_smagru}": [
            ["style", "top", '108px'],
            ["style", "height", '218px'],
            ["style", "left", '541px'],
            ["style", "width", '257px']
         ],
         "${_hukidasi6}": [
            ["style", "height", '127px'],
            ["style", "top", '0px'],
            ["style", "left", '94px'],
            ["style", "width", '116px']
         ],
         "${_tashist}": [
            ["style", "top", '380px'],
            ["style", "left", '139px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'block']
         ],
         "${_hukidasi2}": [
            ["style", "top", '38px'],
            ["style", "height", '148px'],
            ["transform", "scaleX", '-0.93103'],
            ["style", "left", '30px'],
            ["style", "width", '153px']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", '-4px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["color", "background-color", 'rgba(215,12,12,1)']
         ],
         "${_genreCopy}": [
            ["style", "top", '5px'],
            ["style", "left", '27px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_kotext}": [
            ["style", "top", '32px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["style", "left", '104px'],
            ["style", "font-size", '18px']
         ],
         "${_kakest}": [
            ["style", "top", '380px'],
            ["style", "left", '553px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'block']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(66,150,87,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '500px'],
            ["style", "width", '800px']
         ],
         "${_tashi}": [
            ["style", "left", '3px'],
            ["style", "top", '11px']
         ],
         "${_jyannru}": [
            ["style", "top", '173px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '18px'],
            ["style", "left", '606px'],
            ["style", "width", '92px']
         ],
         "${_genreCopy3}": [
            ["style", "top", '1px'],
            ["style", "left", '14px'],
            ["color", "color", 'rgba(0,0,0,1)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 20000,
         autoPlay: true,
         timeline: [
            { id: "eid687", tween: [ "style", "${_tashi}", "top", '11px', { fromValue: '11px'}], position: 0, duration: 0 },
            { id: "eid437", tween: [ "style", "${_tashist}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid465", tween: [ "style", "${_tashist}", "top", '380px', { fromValue: '380px'}], position: 0, duration: 0 },
            { id: "eid688", tween: [ "style", "${_hiki}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
            { id: "eid732", tween: [ "style", "${_home}", "top", '297px', { fromValue: '297px'}], position: 0, duration: 0 },
            { id: "eid699", tween: [ "style", "${_kotext}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid440", tween: [ "style", "${_kakest}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid730", tween: [ "transform", "${_home}", "scaleY", '0.12286', { fromValue: '0.12286'}], position: 0, duration: 0 },
            { id: "eid692", tween: [ "style", "${_kake}", "top", '11px', { fromValue: '11px'}], position: 0, duration: 0 },
            { id: "eid655", tween: [ "style", "${_time}", "left", '668px', { fromValue: '668px'}], position: 0, duration: 0 },
            { id: "eid695", tween: [ "color", "${_Stage}", "background-color", 'rgba(66,150,87,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(66,150,87,1.00)'}], position: 0, duration: 0 },
            { id: "eid238", tween: [ "style", "${_Stage}", "height", '500px', { fromValue: '500px'}], position: 0, duration: 0 },
            { id: "eid729", tween: [ "transform", "${_home}", "scaleX", '0.13429', { fromValue: '0.13429'}], position: 0, duration: 0 },
            { id: "eid720", tween: [ "style", "${_kotext}", "left", '104px', { fromValue: '104px'}], position: 0, duration: 0 },
            { id: "eid651", tween: [ "style", "${_Stage}", "width", '800px', { fromValue: '800px'}], position: 0, duration: 0 },
            { id: "eid721", tween: [ "style", "${_sumako3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid653", tween: [ "style", "${_time}", "top", '30px', { fromValue: '30px'}], position: 0, duration: 0 },
            { id: "eid686", tween: [ "style", "${_tashi}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
            { id: "eid693", tween: [ "style", "${_kake}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
            { id: "eid722", tween: [ "style", "${_sumako3}", "left", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid468", tween: [ "style", "${_kakest}", "top", '380px', { fromValue: '380px'}], position: 0, duration: 0 },
            { id: "eid689", tween: [ "style", "${_hiki}", "top", '11px', { fromValue: '11px'}], position: 0, duration: 0 },
            { id: "eid464", tween: [ "style", "${_tashist}", "left", '139px', { fromValue: '139px'}], position: 0, duration: 0 },
            { id: "eid731", tween: [ "style", "${_home}", "left", '590px', { fromValue: '590px'}], position: 0, duration: 0 },
            { id: "eid466", tween: [ "style", "${_kakest}", "left", '553px', { fromValue: '553px'}], position: 0, duration: 0 }         ]
      }
   }
},
"time": {
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
      type: 'text',
      align: 'right',
      rect: ['10px','28px','auto','auto','auto','auto'],
      id: 'time_txt',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',40,'rgba(247,247,247,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: ['-20px','-20px','auto','auto','auto','auto'],
      id: 'Text2',
      text: 'TIME',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(249,249,249,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_time_txt}": [
            ["style", "top", '28px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(247,247,247,1.00)'],
            ["style", "left", '10px'],
            ["style", "font-size", '40px']
         ],
         "${_Text2}": [
            ["style", "top", '-20px'],
            ["color", "color", 'rgba(249,249,249,1.00)'],
            ["style", "left", '-20px'],
            ["style", "font-size", '40px']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         labels: {
            "start": 0
         },
         timeline: [
         ]
      }
   }
},
"button": {
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
      rect: ['0px','0px','132px','48px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(215,12,12,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '48px'],
            ["style", "width", '132px']
         ],
         "${_RoundRect}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(215,12,12,1.00)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: false,
         labels: {
            "normal": 0,
            "over": 1000,
            "down": 2000
         },
         timeline: [
            { id: "eid2", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(215,12,12,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(215,12,12,1.00)'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(19,63,220,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(215,12,12,1.00)'}], position: 1000, duration: 0 },
            { id: "eid4", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(210,230,60,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(247,228,50,1.00)'}], position: 2000, duration: 0 }         ]
      }
   }
},
"kake": {
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
      rect: ['453px','178px','75px','119','auto','auto'],
      id: 'card1',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote1',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x4',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','2px','14px','23px','auto','auto']
      },
      {
         id: 'ura1',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      rect: ['435px','178px','75px','119','auto','auto'],
      id: 'card2',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x2',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','-2px','14px','23px','auto','auto']
      },
      {
         id: 'ura2',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      rect: ['417px','178px','75px','119','auto','auto'],
      id: 'card3',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote3',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         rect: ['21px','54px','21px','29px','auto','auto'],
         id: 'z3',
         text: '４',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         id: 'ura3',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      rect: ['398px','178px','75px','119','auto','auto'],
      id: 'card4',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote4',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         rect: ['21px','55px','21px','29px','auto','auto'],
         id: 'z4',
         text: '５',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         id: 'ura4',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      rect: ['379px','178px','75px','119','auto','auto'],
      id: 'card5',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote5',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','-2px','14px','23px','auto','auto']
      },
      {
         id: 'ura5',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      rect: ['360px','178px','75px','119','auto','auto'],
      id: 'card6',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote6',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         rect: ['21px','56px','21px','29px','auto','auto'],
         id: 'z2',
         text: '３',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         id: 'ura6',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      rect: ['341px','178px','75px','119','auto','auto'],
      id: 'card7',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote7',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x1',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','-1px','14px','23px','auto','auto']
      },
      {
         id: 'ura7',
         type: 'image',
         rect: ['0px','0px','75px','119px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      rect: ['322px','178px','75px','119','auto','auto'],
      id: 'card8',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote8',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         align: 'left',
         rect: ['21px','52px','21px','29px','auto','auto'],
         id: 'z1',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         id: 'ura8',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      rect: ['304px','178px','75px','119','auto','auto'],
      id: 'card9',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote9',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         align: 'left',
         rect: ['21px','65px','21px','auto','auto','auto'],
         id: 'z',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         id: 'ura9',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      rect: ['285px','178px','75px','119','auto','auto'],
      id: 'card10',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote10',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x3',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','0px','14px','23px','auto','auto']
      },
      {
         id: 'ura10',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      rect: ['86px','58px','672px','305px','auto','auto'],
      transform: [[0,0],[],[],['0.855','0.922']],
      id: 'kabe',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'Point',
      type: 'group',
      rect: ['29px','-11px','110px','92px','auto','auto'],
      c: [
      {
         type: 'text',
         rect: ['72px','48px','28px','36px','auto','auto'],
         id: 'mai',
         text: 'pts',
         align: 'right',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(247,247,247,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['25px','47px','auto','auto','auto','auto'],
         id: 'pt',
         text: '0',
         align: 'right',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(247,247,247,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['39px','-5px','34px','auto','auto','auto'],
         id: 'tokuten',
         text: '1P',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',40,'rgba(0,0,0,1)','normal','none',''],
         transform: [[0,0],['-359'],[],['0.99964','0.98494']]
      }]
   },
   {
      type: 'text',
      rect: ['759px','167px','120px','34px','auto','auto'],
      align: 'left',
      id: 'ans',
      text: 'Correct！',
      display: 'none',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      rect: ['318px','170px','319px','261px','auto','auto'],
      id: 'smak',
      display: 'none',
      type: 'group',
      c: [
      {
         type: 'image',
         id: 'hukidasitk',
         rect: ['-126px','-100px','403px','293px','auto','auto'],
         transform: [[0,0],[],[],['-0.93103']],
         fill: ['rgba(0,0,0,0)','images/hukidasi.png','0px','0px']
      },
      {
         id: 'pen4',
         type: 'image',
         rect: ['232px','68px','250px','250px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pen4.png','0px','0px']
      }]
   },
   {
      type: 'text',
      rect: ['253px','6px','auto','auto','auto','auto'],
      id: 'title',
      text: 'Math memory',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',28,'rgba(253,253,253,1)','normal','none','normal']
   },
   {
      type: 'group',
      display: 'none',
      id: 'close',
      cursor: ['pointer'],
      rect: ['0px','426px','176','48','auto','auto'],
      c: [
      {
         rect: ['0px','0px','176px','48px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'button2',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(255,241,34,1.00)']
      },
      {
         type: 'text',
         rect: ['16px','9px','144px','29px','auto','auto'],
         id: 'toziru',
         text: 'turn cards',
         align: 'right',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(0,0,0,1)','normal','none','normal']
      }]
   },
   {
      rect: ['26px','0px','751px','483px','auto','auto'],
      type: 'rect',
      id: 'kabe2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'group',
      display: 'none',
      id: 'result',
      cursor: ['pointer'],
      rect: ['337px','209px','96px','36px','auto','auto'],
      c: [
      {
         rect: ['-52px','-10px','200px','50px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRect2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(231,255,0,1.00)']
      },
      {
         type: 'text',
         rect: ['0px','0px','auto','auto','auto','auto'],
         id: 'Text',
         text: 'retry',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      }]
   },
   {
      type: 'text',
      rect: ['203px','118px','auto','auto','auto','auto'],
      id: 'zannen',
      text: '　oh.. no...　',
      display: 'none',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',40,'rgba(255,255,255,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: ['192px','58px','auto','auto','auto','auto'],
      align: 'left',
      id: 'combo',
      text: 'combo!!',
      display: 'none',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      rect: ['285px','95px','96','76','auto','auto'],
      id: 'tasitoku',
      display: 'none',
      type: 'group',
      c: [
      {
         type: 'text',
         rect: ['0px','0px','auto','auto','auto','auto'],
         id: 'tokumo',
         text: 'score',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['24px','40px','auto','auto','auto','auto'],
         id: 'tasiten',
         text: '20pts',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      }]
   },
   {
      rect: ['319','95','138','46','auto','auto'],
      id: 'tensu',
      display: 'none',
      type: 'group',
      c: [
      {
         type: 'text',
         rect: ['51px','46px','auto','auto','auto','auto'],
         id: 'ten',
         text: ' ',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(7,7,7,1.00)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['0px','0px','auto','auto','auto','auto'],
         id: 'tb',
         text: 'Time Bonus',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   },
   {
      rect: ['323','181','145','68','auto','auto'],
      id: 'kei',
      display: 'none',
      type: 'group',
      c: [
      {
         type: 'text',
         align: 'center',
         rect: ['-238px','-207px','290px','36px','auto','auto'],
         id: 'complete',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(253,253,253,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['13px','0px','auto','auto','auto','auto'],
         id: 'yt',
         text: 'sums',
         align: 'center',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(253,253,253,1)','normal','none','normal']
      }]
   },
   {
      rect: ['776','149','96','86','auto','auto'],
      id: 'hukidasi',
      display: 'none',
      type: 'group',
      c: [
      {
         type: 'text',
         rect: ['-10px','49px','auto','auto','auto','auto'],
         id: 'fc',
         text: 'combo!!',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',18,'rgba(0,0,0,1.00)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['0px','0px','96px','29px','auto','auto'],
         id: 'iei',
         text: 'Yey♪',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',18,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_card2}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '294px'],
            ["style", "width", '64px']
         ],
         "${_tokumo}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_ura9}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_z1}": [
            ["style", "height", '29px'],
            ["style", "top", '52px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_x}": [
            ["style", "top", '-2px'],
            ["style", "height", '23px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${_card10}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '478px'],
            ["style", "width", '64px']
         ],
         "${_card8}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '431px'],
            ["style", "width", '64px']
         ],
         "${_iei}": [
            ["style", "top", '0px'],
            ["style", "font-size", '18px'],
            ["style", "height", '29px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '96px']
         ],
         "${_fc}": [
            ["style", "top", '49px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '-10px'],
            ["style", "font-size", '18px']
         ],
         "${_title}": [
            ["style", "top", '6px'],
            ["style", "left", '253px'],
            ["style", "font-size", '28px']
         ],
         "${_omote8}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura8}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_tb}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_tasiten}": [
            ["style", "left", '24px'],
            ["style", "top", '40px']
         ],
         "${_kabe2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '26px'],
            ["style", "top", '0px']
         ],
         "${_complete}": [
            ["style", "top", '33px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '35px'],
            ["style", "left", '0px'],
            ["style", "width", '145px']
         ],
         "${_x3}": [
            ["style", "height", '23px'],
            ["style", "top", '0px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${_mai}": [
            ["style", "top", '48px'],
            ["style", "height", '36px'],
            ["style", "font-size", '40px'],
            ["style", "left", '72px'],
            ["style", "width", '28px']
         ],
         "${_z3}": [
            ["style", "top", '54px'],
            ["style", "height", '29px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_combo}": [
            ["style", "top", '58px'],
            ["style", "left", '192px'],
            ["style", "display", 'none']
         ],
         "${_ura10}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ans}": [
            ["style", "top", '169px'],
            ["style", "font-size", '20px'],
            ["style", "height", '34px'],
            ["style", "display", 'none'],
            ["style", "left", '593px'],
            ["style", "width", '100px']
         ],
         "${_card7}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '408px'],
            ["style", "width", '64px']
         ],
         "${_close}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '426px']
         ],
         "${_hukidasi}": [
            ["style", "display", 'none'],
            ["style", "left", '103px'],
            ["style", "top", '166px']
         ],
         "${_omote4}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_z2}": [
            ["style", "top", '56px'],
            ["style", "height", '29px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_Text}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_zannen}": [
            ["style", "top", '118px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '203px'],
            ["style", "font-size", '40px']
         ],
         "${_ura2}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_hukidasitk}": [
            ["style", "top", '-100px'],
            ["style", "height", '293px'],
            ["transform", "scaleX", '-0.93103'],
            ["style", "left", '-126px'],
            ["style", "width", '403px']
         ],
         "${_omote7}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_z4}": [
            ["style", "top", '55px'],
            ["style", "height", '29px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_button2}": [
            ["color", "background-color", 'rgba(255,241,34,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "left", '0px'],
            ["style", "width", '176px'],
            ["style", "top", '0px'],
            ["style", "height", '48px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_result}": [
            ["style", "top", '311px'],
            ["style", "display", 'none'],
            ["style", "height", '36px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '350px'],
            ["style", "width", '96px']
         ],
         "${_card4}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '338px'],
            ["style", "width", '64px']
         ],
         "${_ura4}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(231,255,0,1.00)'],
            ["style", "height", '50px'],
            ["style", "top", '-10px'],
            ["style", "left", '-52px'],
            ["style", "width", '200px']
         ],
         "${_card5}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '362px'],
            ["style", "width", '64px']
         ],
         "${_omote10}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_Point}": [
            ["style", "top", '-11px'],
            ["style", "height", '92px'],
            ["style", "left", '29px'],
            ["style", "width", '110px']
         ],
         "${_tasitoku}": [
            ["style", "top", '95px'],
            ["style", "left", '269px'],
            ["style", "display", 'none']
         ],
         "${_ura3}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_smak}": [
            ["style", "top", '170px'],
            ["style", "height", '261px'],
            ["style", "display", 'none'],
            ["style", "left", '318px'],
            ["style", "width", '319px']
         ],
         "${_kabe}": [
            ["style", "top", '58px'],
            ["style", "display", 'block'],
            ["transform", "scaleY", '0.92222'],
            ["style", "height", '305px'],
            ["transform", "scaleX", '0.85507'],
            ["style", "opacity", '0'],
            ["style", "left", '86px'],
            ["style", "width", '672px']
         ],
         "${_omote1}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card9}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '455px'],
            ["style", "width", '64px']
         ],
         "${_omote6}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_kei}": [
            ["style", "display", 'none']
         ],
         "${_ura6}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote5}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${symbolSelector}": [
            ["style", "height", '483px'],
            ["style", "width", '792px']
         ],
         "${_omote3}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_x4}": [
            ["style", "height", '23px'],
            ["style", "top", '2px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${_card3}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '317px'],
            ["style", "width", '64px']
         ],
         "${_pen4}": [
            ["style", "top", '68px'],
            ["style", "height", '250px'],
            ["style", "left", '232px'],
            ["style", "width", '250px']
         ],
         "${_ten}": [
            ["style", "top", '46px'],
            ["style", "left", '51px'],
            ["color", "color", 'rgba(7,7,7,1.00)']
         ],
         "${_card1}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '270px'],
            ["style", "width", '64px']
         ],
         "${_x2}": [
            ["style", "height", '23px'],
            ["style", "top", '-2px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${_yt}": [
            ["style", "display", 'block'],
            ["style", "top", '1px'],
            ["style", "left", '27px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_pt}": [
            ["style", "top", '47px'],
            ["style", "left", '25px'],
            ["style", "font-size", '40px']
         ],
         "${_tokuten}": [
            ["transform", "rotateZ", '-359deg'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '39px'],
            ["style", "width", '34px'],
            ["style", "top", '0px'],
            ["transform", "scaleY", '0.98494'],
            ["style", "height", '39px'],
            ["transform", "scaleX", '0.99964'],
            ["style", "font-size", '40px']
         ],
         "${_ura7}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote9}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_x1}": [
            ["style", "height", '23px'],
            ["style", "top", '-1px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${_ura1}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card6}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '385px'],
            ["style", "width", '64px']
         ],
         "${_tensu}": [
            ["style", "display", 'none'],
            ["style", "height", '79px'],
            ["style", "left", '400px'],
            ["style", "width", '215px']
         ],
         "${_omote2}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_z}": [
            ["style", "top", '65px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_toziru}": [
            ["style", "top", '9px'],
            ["style", "height", '29px'],
            ["style", "width", '144px'],
            ["style", "left", '16px'],
            ["style", "font-size", '20px']
         ],
         "${_ura5}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 20000,
         autoPlay: true,
         labels: {
            "com": 20000
         },
         timeline: [
            { id: "eid680", tween: [ "style", "${_ans}", "font-size", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid488", tween: [ "style", "${_combo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid719", tween: [ "style", "${_hukidasi}", "top", '166px', { fromValue: '166px'}], position: 0, duration: 0 },
            { id: "eid512", tween: [ "style", "${_yt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid237", tween: [ "style", "${_zannen}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid174", tween: [ "style", "${_card4}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid718", tween: [ "style", "${_hukidasi}", "left", '103px', { fromValue: '103px'}], position: 0, duration: 0 },
            { id: "eid682", tween: [ "style", "${_ans}", "left", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid273", tween: [ "style", "${_ura7}", "height", '95px', { fromValue: '95px'}], position: 0, duration: 0 },
            { id: "eid559", tween: [ "style", "${_result}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid167", tween: [ "style", "${_close}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid179", tween: [ "style", "${_close}", "display", 'none', { fromValue: 'none'}], position: 20000, duration: 0 },
            { id: "eid582", tween: [ "style", "${_kei}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid683", tween: [ "style", "${_ans}", "top", '169px', { fromValue: '169px'}], position: 0, duration: 0 },
            { id: "eid169", tween: [ "style", "${_card5}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid548", tween: [ "color", "${_yt}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid183", tween: [ "style", "${_kabe2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid483", tween: [ "style", "${_tensu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid178", tween: [ "style", "${_card9}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid175", tween: [ "style", "${_card6}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid613", tween: [ "style", "${_yt}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid610", tween: [ "style", "${_tensu}", "left", '400px', { fromValue: '400px'}], position: 0, duration: 0 },
            { id: "eid542", tween: [ "style", "${_hukidasi}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid176", tween: [ "style", "${_card3}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid505", tween: [ "style", "${_complete}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid172", tween: [ "style", "${_card10}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid168", tween: [ "style", "${_ura7}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid578", tween: [ "style", "${_tasitoku}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid173", tween: [ "style", "${_card1}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid589", tween: [ "style", "${_complete}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid681", tween: [ "style", "${_ans}", "width", '100px', { fromValue: '100px'}], position: 0, duration: 0 },
            { id: "eid549", tween: [ "color", "${_complete}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid274", tween: [ "style", "${_ura7}", "width", '64px', { fromValue: '64px'}], position: 0, duration: 0 },
            { id: "eid612", tween: [ "style", "${_yt}", "left", '27px', { fromValue: '27px'}], position: 0, duration: 0 },
            { id: "eid611", tween: [ "style", "${_tasitoku}", "left", '269px', { fromValue: '269px'}], position: 0, duration: 0 },
            { id: "eid171", tween: [ "style", "${_card2}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid514", tween: [ "style", "${_complete}", "height", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
            { id: "eid590", tween: [ "style", "${_complete}", "top", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid177", tween: [ "style", "${_card8}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid170", tween: [ "style", "${_card7}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid491", tween: [ "style", "${_tensu}", "width", '215px', { fromValue: '215px'}], position: 0, duration: 0 },
            { id: "eid492", tween: [ "style", "${_tensu}", "height", '79px', { fromValue: '79px'}], position: 0, duration: 0 },
            { id: "eid545", tween: [ "style", "${_smak}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid562", tween: [ "style", "${_ans}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid619", tween: [ "style", "${_kabe}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid409", tween: [ "style", "${_kabe}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 }         ]
      }
   }
},
"tashi": {
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
      id: 'Point',
      type: 'group',
      rect: ['29px','-11px','110px','92px','auto','auto'],
      c: [
      {
         type: 'text',
         rect: ['72px','48px','28px','36px','auto','auto'],
         id: 'mai',
         text: 'pts',
         align: 'right',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(247,247,247,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['25px','47px','auto','auto','auto','auto'],
         id: 'pt',
         text: '0',
         align: 'right',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(247,247,247,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['39px','-5px','34px','auto','auto','auto'],
         id: 'tokuten',
         text: '1P',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',40,'rgba(0,0,0,1)','normal','none',''],
         transform: [[0,0],['-359'],[],['0.99964','0.98494']]
      }]
   },
   {
      rect: ['453px','178px','75px','119','auto','auto'],
      id: 'card1',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote1',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x4',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','2px','14px','23px','auto','auto']
      },
      {
         id: 'ura1',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      rect: ['435px','178px','75px','119','auto','auto'],
      id: 'card2',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x2',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','-2px','14px','23px','auto','auto']
      },
      {
         id: 'ura2',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      rect: ['417px','178px','75px','119','auto','auto'],
      id: 'card3',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote3',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         rect: ['21px','54px','21px','29px','auto','auto'],
         id: 'z3',
         text: '４',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         id: 'ura3',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      rect: ['398px','178px','75px','119','auto','auto'],
      id: 'card4',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote4',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         rect: ['21px','55px','21px','29px','auto','auto'],
         id: 'z4',
         text: '５',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         id: 'ura4',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      rect: ['379px','178px','75px','119','auto','auto'],
      id: 'card5',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote5',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['10px','-2px','14px','23px','auto','auto']
      },
      {
         id: 'ura5',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      rect: ['360px','178px','75px','119','auto','auto'],
      id: 'card6',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote6',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         rect: ['21px','56px','21px','29px','auto','auto'],
         id: 'z2',
         text: '３',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         id: 'ura6',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      rect: ['341px','178px','75px','119','auto','auto'],
      id: 'card7',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote7',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x1',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','-1px','14px','23px','auto','auto']
      },
      {
         id: 'ura7',
         type: 'image',
         rect: ['0px','0px','75px','119px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      rect: ['322px','178px','75px','119','auto','auto'],
      id: 'card8',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote8',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         align: 'left',
         rect: ['21px','52px','21px','29px','auto','auto'],
         id: 'z1',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         id: 'ura8',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      rect: ['304px','178px','75px','119','auto','auto'],
      id: 'card9',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote9',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         align: 'left',
         rect: ['21px','65px','21px','auto','auto','auto'],
         id: 'z',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         id: 'ura9',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      rect: ['285px','178px','75px','119','auto','auto'],
      id: 'card10',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote10',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x3',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','0px','14px','23px','auto','auto']
      },
      {
         id: 'ura10',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      rect: ['86px','58px','672px','305px','auto','auto'],
      transform: [[0,0],[],[],['0.855','0.922']],
      id: 'kabe',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['318px','170px','319px','261px','auto','auto'],
      id: 'smat',
      display: 'none',
      type: 'group',
      c: [
      {
         type: 'image',
         id: 'hukidasit',
         rect: ['-126px','-100px','403px','293px','auto','auto'],
         transform: [[0,0],[],[],['-0.93103']],
         fill: ['rgba(0,0,0,0)','images/hukidasi.png','0px','0px']
      },
      {
         id: 'pen3',
         type: 'image',
         rect: ['194px','85px','250px','250px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pen3.png','0px','0px']
      }]
   },
   {
      type: 'text',
      rect: ['253px','6px','auto','auto','auto','auto'],
      id: 'title',
      text: 'Math memory',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',28,'rgba(253,253,253,1)','normal','none','normal']
   },
   {
      type: 'group',
      display: 'none',
      id: 'close',
      cursor: ['pointer'],
      rect: ['0px','426px','176','48','auto','auto'],
      c: [
      {
         rect: ['0px','0px','176px','48px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'button2',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(255,241,34,1.00)']
      },
      {
         type: 'text',
         rect: ['16px','9px','144px','29px','auto','auto'],
         id: 'toziru',
         text: 'Turn cards',
         align: 'right',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(0,0,0,1)','normal','none','normal']
      }]
   },
   {
      rect: ['26px','0px','751px','483px','auto','auto'],
      type: 'rect',
      id: 'kabe2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'group',
      display: 'none',
      id: 'result',
      cursor: ['pointer'],
      rect: ['337px','209px','96px','36px','auto','auto'],
      c: [
      {
         rect: ['-52px','-10px','200px','50px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRect2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(231,255,0,1.00)']
      },
      {
         type: 'text',
         rect: ['0px','0px','auto','auto','auto','auto'],
         id: 'Text',
         text: 'retry',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      }]
   },
   {
      type: 'text',
      rect: ['203px','118px','auto','auto','auto','auto'],
      id: 'zannen',
      text: '　oh.. no...　',
      display: 'none',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',40,'rgba(255,255,255,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: ['192px','59px','auto','auto','auto','auto'],
      align: 'left',
      id: 'combo',
      text: 'combo!!',
      display: 'none',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      rect: ['319','95','138','46','auto','auto'],
      id: 'tensu',
      display: 'none',
      type: 'group',
      c: [
      {
         type: 'text',
         rect: ['0px','0px','159px','auto','auto','auto'],
         id: 'tb',
         text: 'Time Bonus',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1.00)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['47px','46px','auto','auto','auto','auto'],
         id: 'ten',
         text: ' ',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   },
   {
      rect: ['284','95','96','76','auto','auto'],
      id: 'tasitoku',
      display: 'none',
      type: 'group',
      c: [
      {
         type: 'text',
         rect: ['0px','0px','auto','auto','auto','auto'],
         id: 'tokumo',
         text: 'score',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['24px','40px','auto','auto','auto','auto'],
         id: 'tasiten',
         text: '20pts',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      }]
   },
   {
      rect: ['323','181','145','68','auto','auto'],
      id: 'kei',
      display: 'none',
      type: 'group',
      c: [
      {
         type: 'text',
         align: 'center',
         rect: ['0px','33px','145px','69px','auto','auto'],
         id: 'complete',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(253,253,253,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['13px','-23px','auto','auto','auto','auto'],
         id: 'yt',
         text: 'sum',
         align: 'center',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(253,253,253,1)','normal','none','normal']
      }]
   },
   {
      rect: ['776','149','96','86','auto','auto'],
      id: 'hukidasi',
      display: 'none',
      type: 'group',
      c: [
      {
         type: 'text',
         rect: ['-10px','50px','auto','auto','auto','auto'],
         id: 'fc',
         text: 'combo!!',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',18,'rgba(0,0,0,1.00)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['0px','0px','96px','29px','auto','auto'],
         id: 'Text9',
         text: 'Yey♪',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',18,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   },
   {
      type: 'text',
      rect: ['759px','167px','120px','34px','auto','auto'],
      align: 'left',
      id: 'ans',
      text: 'Correct！',
      display: 'none',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_card2}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '294px'],
            ["style", "width", '64px']
         ],
         "${_tokumo}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_ura9}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_z1}": [
            ["style", "top", '52px'],
            ["style", "height", '29px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_x}": [
            ["style", "height", '23px'],
            ["style", "top", '-2px'],
            ["style", "left", '10px'],
            ["style", "width", '14px']
         ],
         "${_card10}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '478px'],
            ["style", "width", '64px']
         ],
         "${_card8}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '431px'],
            ["style", "width", '64px']
         ],
         "${_card6}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '385px'],
            ["style", "width", '64px']
         ],
         "${_title}": [
            ["style", "top", '6px'],
            ["style", "left", '253px'],
            ["style", "font-size", '28px']
         ],
         "${_omote8}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura8}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_tb}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '159px']
         ],
         "${_tasiten}": [
            ["style", "left", '24px'],
            ["style", "top", '40px']
         ],
         "${_kabe2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '26px'],
            ["style", "top", '0px']
         ],
         "${_x2}": [
            ["style", "top", '-2px'],
            ["style", "height", '23px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${_x3}": [
            ["style", "top", '0px'],
            ["style", "height", '23px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${_mai}": [
            ["style", "top", '48px'],
            ["style", "height", '36px'],
            ["style", "width", '28px'],
            ["style", "left", '72px'],
            ["style", "font-size", '40px']
         ],
         "${_z3}": [
            ["style", "height", '29px'],
            ["style", "top", '54px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_combo}": [
            ["style", "top", '59px'],
            ["style", "left", '192px'],
            ["style", "display", 'none']
         ],
         "${_ura10}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card1}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '270px'],
            ["style", "width", '64px']
         ],
         "${_card7}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '408px'],
            ["style", "width", '64px']
         ],
         "${_close}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '426px']
         ],
         "${_hukidasi}": [
            ["style", "top", '166px'],
            ["style", "height", '74px'],
            ["style", "display", 'none'],
            ["style", "left", '102px'],
            ["style", "width", '72px']
         ],
         "${_omote4}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_z2}": [
            ["style", "height", '29px'],
            ["style", "top", '56px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_ura5}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_zannen}": [
            ["style", "top", '118px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "display", 'none'],
            ["style", "left", '203px'],
            ["style", "font-size", '40px']
         ],
         "${_ura2}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura1}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote7}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_z4}": [
            ["style", "height", '29px'],
            ["style", "top", '55px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_button2}": [
            ["color", "background-color", 'rgba(255,241,34,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "left", '0px'],
            ["style", "width", '176px'],
            ["style", "top", '0px'],
            ["style", "height", '48px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_result}": [
            ["style", "top", '311px'],
            ["style", "height", '36px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '350px'],
            ["style", "width", '96px']
         ],
         "${_card4}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '338px'],
            ["style", "width", '64px']
         ],
         "${_ura4}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(231,255,0,1.00)'],
            ["style", "height", '50px'],
            ["style", "top", '-10px'],
            ["style", "left", '-52px'],
            ["style", "width", '200px']
         ],
         "${_card5}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '362px'],
            ["style", "width", '64px']
         ],
         "${_omote10}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_Point}": [
            ["style", "height", '92px'],
            ["style", "top", '-11px'],
            ["style", "left", '29px'],
            ["style", "width", '110px']
         ],
         "${_tasitoku}": [
            ["style", "display", 'none'],
            ["style", "left", '269px']
         ],
         "${_Text9}": [
            ["style", "top", '0px'],
            ["style", "font-size", '18px'],
            ["style", "height", '29px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '96px']
         ],
         "${_kabe}": [
            ["style", "top", '58px'],
            ["style", "display", 'block'],
            ["transform", "scaleY", '0.92222'],
            ["transform", "scaleX", '0.85507'],
            ["style", "height", '305px'],
            ["style", "opacity", '0'],
            ["style", "left", '86px'],
            ["style", "width", '672px']
         ],
         "${_omote1}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_toziru}": [
            ["style", "top", '9px'],
            ["style", "height", '29px'],
            ["style", "font-size", '20px'],
            ["style", "left", '16px'],
            ["style", "width", '144px']
         ],
         "${_omote6}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_kei}": [
            ["style", "display", 'none']
         ],
         "${_ura6}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card9}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '455px'],
            ["style", "width", '64px']
         ],
         "${_Text}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_x4}": [
            ["style", "top", '2px'],
            ["style", "height", '23px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${symbolSelector}": [
            ["style", "height", '483px'],
            ["style", "width", '792px']
         ],
         "${_hukidasit}": [
            ["style", "top", '-100px'],
            ["transform", "scaleX", '-0.93103'],
            ["style", "height", '293px'],
            ["style", "left", '-126px'],
            ["style", "width", '403px']
         ],
         "${_complete}": [
            ["style", "top", '33px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'block'],
            ["style", "height", '35px'],
            ["style", "left", '0px'],
            ["style", "width", '145px']
         ],
         "${_card3}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '317px'],
            ["style", "width", '64px']
         ],
         "${_smat}": [
            ["style", "top", '170px'],
            ["style", "height", '261px'],
            ["style", "display", 'none'],
            ["style", "left", '318px'],
            ["style", "width", '319px']
         ],
         "${_ten}": [
            ["style", "top", '46px'],
            ["style", "left", '47px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_tensu}": [
            ["style", "display", 'none'],
            ["style", "height", '79px'],
            ["style", "left", '400px'],
            ["style", "width", '140px']
         ],
         "${_omote3}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_yt}": [
            ["style", "display", 'block'],
            ["style", "top", '1px'],
            ["style", "left", '27px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_pt}": [
            ["style", "top", '47px'],
            ["style", "left", '25px'],
            ["style", "font-size", '40px']
         ],
         "${_fc}": [
            ["style", "top", '50px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'block'],
            ["style", "left", '-10px'],
            ["style", "font-size", '18px']
         ],
         "${_ura7}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote9}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_x1}": [
            ["style", "top", '-1px'],
            ["style", "height", '23px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${_ura3}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_pen3}": [
            ["style", "top", '85px'],
            ["style", "height", '250px'],
            ["style", "left", '194px'],
            ["style", "width", '250px']
         ],
         "${_ans}": [
            ["style", "top", '167px'],
            ["style", "font-size", '20px'],
            ["style", "height", '34px'],
            ["style", "display", 'none'],
            ["style", "left", '592px'],
            ["style", "width", '110px']
         ],
         "${_omote2}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_z}": [
            ["style", "top", '65px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_tokuten}": [
            ["transform", "rotateZ", '-359deg'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '39px'],
            ["style", "width", '34px'],
            ["style", "top", '0px'],
            ["transform", "scaleY", '0.98494'],
            ["style", "height", '39px'],
            ["style", "font-size", '40px'],
            ["transform", "scaleX", '0.99964']
         ],
         "${_omote5}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 20000,
         autoPlay: true,
         labels: {
            "com": 20000
         },
         timeline: [
            { id: "eid665", tween: [ "style", "${_ans}", "font-size", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid486", tween: [ "style", "${_combo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid702", tween: [ "style", "${_hukidasi}", "top", '166px', { fromValue: '166px'}], position: 0, duration: 0 },
            { id: "eid508", tween: [ "style", "${_yt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid568", tween: [ "style", "${_complete}", "top", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid174", tween: [ "style", "${_card4}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid713", tween: [ "style", "${_hukidasi}", "left", '102px', { fromValue: '102px'}], position: 0, duration: 0 },
            { id: "eid668", tween: [ "style", "${_ans}", "left", '592px', { fromValue: '592px'}], position: 0, duration: 0 },
            { id: "eid554", tween: [ "style", "${_result}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid167", tween: [ "style", "${_close}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid179", tween: [ "style", "${_close}", "display", 'none', { fromValue: 'none'}], position: 20000, duration: 0 },
            { id: "eid570", tween: [ "style", "${_kei}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid591", tween: [ "style", "${_tasitoku}", "left", '269px', { fromValue: '269px'}], position: 0, duration: 0 },
            { id: "eid169", tween: [ "style", "${_card5}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid543", tween: [ "color", "${_yt}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid556", tween: [ "style", "${_result}", "left", '350px', { fromValue: '350px'}], position: 0, duration: 0 },
            { id: "eid183", tween: [ "style", "${_kabe2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid481", tween: [ "style", "${_tensu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid178", tween: [ "style", "${_card9}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid175", tween: [ "style", "${_card6}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid605", tween: [ "style", "${_yt}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid595", tween: [ "style", "${_tensu}", "left", '400px', { fromValue: '400px'}], position: 0, duration: 0 },
            { id: "eid540", tween: [ "style", "${_hukidasi}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid176", tween: [ "style", "${_card3}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid658", tween: [ "style", "${_hukidasi}", "width", '72px', { fromValue: '72px'}], position: 0, duration: 0 },
            { id: "eid172", tween: [ "style", "${_card10}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid168", tween: [ "style", "${_ura7}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid571", tween: [ "style", "${_tasitoku}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid173", tween: [ "style", "${_card1}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid698", tween: [ "style", "${_ans}", "width", '110px', { fromValue: '110px'}], position: 0, duration: 0 },
            { id: "eid544", tween: [ "color", "${_complete}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid495", tween: [ "style", "${_complete}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid669", tween: [ "style", "${_ans}", "top", '167px', { fromValue: '167px'}], position: 0, duration: 0 },
            { id: "eid657", tween: [ "style", "${_hukidasi}", "height", '74px', { fromValue: '74px'}], position: 0, duration: 0 },
            { id: "eid603", tween: [ "style", "${_yt}", "left", '27px', { fromValue: '27px'}], position: 0, duration: 0 },
            { id: "eid560", tween: [ "style", "${_ans}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid547", tween: [ "style", "${_smat}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid485", tween: [ "style", "${_tensu}", "height", '79px', { fromValue: '79px'}], position: 0, duration: 0 },
            { id: "eid177", tween: [ "style", "${_card8}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid563", tween: [ "style", "${_tensu}", "width", '140px', { fromValue: '140px'}], position: 0, duration: 0 },
            { id: "eid170", tween: [ "style", "${_card7}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid506", tween: [ "style", "${_complete}", "height", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
            { id: "eid409", tween: [ "style", "${_kabe}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid237", tween: [ "style", "${_zannen}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid171", tween: [ "style", "${_card2}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 }         ]
      }
   }
},
"hiki": {
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
      rect: ['453px','178px','75px','119','auto','auto'],
      id: 'card1',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote1',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x4',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['4px','2px','57px','23px','auto','auto']
      },
      {
         id: 'ura1',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      rect: ['435px','178px','75px','119','auto','auto'],
      id: 'card2',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x2',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['4px','-2px','57px','23px','auto','auto']
      },
      {
         id: 'ura2',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      rect: ['417px','178px','75px','119','auto','auto'],
      id: 'card3',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote3',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         rect: ['21px','54px','21px','29px','auto','auto'],
         id: 'z3',
         text: '４',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         id: 'ura3',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      rect: ['398px','178px','75px','119','auto','auto'],
      id: 'card4',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote4',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         rect: ['21px','55px','21px','29px','auto','auto'],
         id: 'z4',
         text: '５',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         id: 'ura4',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      rect: ['379px','178px','75px','119','auto','auto'],
      id: 'card5',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote5',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['4px','-2px','57px','23px','auto','auto']
      },
      {
         id: 'ura5',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      rect: ['360px','178px','75px','119','auto','auto'],
      id: 'card6',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote6',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         rect: ['21px','56px','21px','29px','auto','auto'],
         id: 'z2',
         text: '３',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         id: 'ura6',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      rect: ['341px','178px','75px','119','auto','auto'],
      id: 'card7',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote7',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x1',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','-1px','57px','23px','auto','auto']
      },
      {
         id: 'ura7',
         type: 'image',
         rect: ['0px','0px','75px','119px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      rect: ['322px','178px','75px','119','auto','auto'],
      id: 'card8',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote8',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         align: 'left',
         rect: ['21px','52px','21px','29px','auto','auto'],
         id: 'z1',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         id: 'ura8',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      rect: ['304px','178px','75px','119','auto','auto'],
      id: 'card9',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote9',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         align: 'left',
         rect: ['21px','65px','21px','auto','auto','auto'],
         id: 'z',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         id: 'ura9',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      rect: ['285px','178px','75px','119','auto','auto'],
      id: 'card10',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote10',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x3',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['4px','0px','57px','23px','auto','auto']
      },
      {
         id: 'ura10',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      rect: ['86px','58px','672px','305px','auto','auto'],
      transform: [[0,0],[],[],['0.855','0.922']],
      id: 'kabe',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'Point',
      type: 'group',
      rect: ['29px','-11px','110px','92px','auto','auto'],
      c: [
      {
         type: 'text',
         rect: ['72px','48px','28px','36px','auto','auto'],
         id: 'mai',
         text: 'pts',
         align: 'right',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(247,247,247,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['25px','47px','auto','auto','auto','auto'],
         id: 'pt',
         text: '0',
         align: 'right',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(247,247,247,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['39px','-5px','34px','auto','auto','auto'],
         id: 'tokuten',
         text: '1P',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',40,'rgba(0,0,0,1)','normal','none',''],
         transform: [[0,0],['-359'],[],['0.99964','0.98494']]
      }]
   },
   {
      type: 'text',
      rect: ['759px','167px','120px','34px','auto','auto'],
      align: 'left',
      id: 'ans',
      text: 'correct！',
      display: 'none',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      rect: ['318px','170px','319px','261px','auto','auto'],
      id: 'smah',
      display: 'none',
      type: 'group',
      c: [
      {
         type: 'image',
         id: 'hukidasit',
         rect: ['-126px','-100px','403px','293px','auto','auto'],
         transform: [[0,0],[],[],['-0.93103']],
         fill: ['rgba(0,0,0,0)','images/hukidasi.png','0px','0px']
      },
      {
         id: 'pen2',
         type: 'image',
         rect: ['201px','68px','250px','250px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pen2.png','0px','0px']
      }]
   },
   {
      type: 'text',
      rect: ['253px','6px','auto','auto','auto','auto'],
      id: 'title',
      text: 'Math memory',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',28,'rgba(253,253,253,1)','normal','none','normal']
   },
   {
      type: 'group',
      display: 'none',
      id: 'close',
      cursor: ['pointer'],
      rect: ['0px','426px','176','48','auto','auto'],
      c: [
      {
         rect: ['0px','0px','176px','48px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'button2',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(255,241,34,1.00)']
      },
      {
         type: 'text',
         rect: ['16px','9px','144px','29px','auto','auto'],
         id: 'toziru',
         text: 'turn cards',
         align: 'right',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(0,0,0,1)','normal','none','normal']
      }]
   },
   {
      rect: ['26px','0px','751px','483px','auto','auto'],
      type: 'rect',
      id: 'kabe2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'group',
      display: 'none',
      id: 'result',
      cursor: ['pointer'],
      rect: ['337px','209px','96px','36px','auto','auto'],
      c: [
      {
         rect: ['-52px','-10px','200px','50px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRect2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(231,255,0,1.00)']
      },
      {
         type: 'text',
         rect: ['0px','0px','auto','auto','auto','auto'],
         id: 'Text',
         text: 'retry',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      }]
   },
   {
      type: 'text',
      rect: ['203px','118px','auto','auto','auto','auto'],
      id: 'zannen',
      text: '　oh.. no...　',
      display: 'none',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',40,'rgba(255,255,255,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: ['192px','59px','auto','auto','auto','auto'],
      align: 'left',
      id: 'combo',
      text: 'combo!!',
      display: 'none',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      rect: ['319','95','138','46','auto','auto'],
      id: 'tensu',
      display: 'none',
      type: 'group',
      c: [
      {
         type: 'text',
         rect: ['0px','0px','auto','auto','auto','auto'],
         id: 'tb',
         text: 'Time Bonus',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1.00)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['51px','46px','auto','auto','auto','auto'],
         id: 'ten',
         text: ' ',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   },
   {
      rect: ['85px','-26px','371px','243px','auto','auto'],
      id: 'kei',
      display: 'none',
      type: 'group',
      c: [
      {
         type: 'text',
         align: 'center',
         rect: ['249px','267px','290px','36px','auto','auto'],
         id: 'complete',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(253,253,253,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['251px','207px','auto','auto','auto','auto'],
         id: 'yt',
         text: 'sum',
         align: 'center',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(253,253,253,1)','normal','none','normal']
      }]
   },
   {
      rect: ['776','149','96','86','auto','auto'],
      id: 'hukidasi',
      display: 'none',
      type: 'group',
      c: [
      {
         type: 'text',
         rect: ['-10px','49px','auto','auto','auto','auto'],
         id: 'fc',
         text: 'combo!!',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',18,'rgba(0,0,0,1.00)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['0px','0px','96px','29px','auto','auto'],
         id: 'Text9',
         text: 'Yey♪',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',18,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   },
   {
      rect: ['284px','95px','96','76','auto','auto'],
      id: 'tasitoku',
      display: 'none',
      type: 'group',
      c: [
      {
         type: 'text',
         rect: ['0px','0px','auto','auto','auto','auto'],
         id: 'tokumo',
         text: 'score',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['24px','40px','auto','auto','auto','auto'],
         id: 'tasiten',
         text: '20pts',
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_card2}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '294px'],
            ["style", "width", '64px']
         ],
         "${_tokumo}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_ura9}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_z1}": [
            ["style", "top", '52px'],
            ["style", "height", '29px'],
            ["style", "font-size", '24px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_x}": [
            ["style", "top", '-2px'],
            ["style", "height", '23px'],
            ["style", "font-size", '24px'],
            ["style", "left", '4px'],
            ["style", "width", '57px']
         ],
         "${_card10}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '478px'],
            ["style", "width", '64px']
         ],
         "${_card8}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '431px'],
            ["style", "width", '64px']
         ],
         "${_card6}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '385px'],
            ["style", "width", '64px']
         ],
         "${_title}": [
            ["style", "top", '6px'],
            ["style", "left", '253px'],
            ["style", "font-size", '28px']
         ],
         "${_omote8}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura8}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_pen2}": [
            ["style", "top", '68px'],
            ["style", "height", '250px'],
            ["style", "left", '201px'],
            ["style", "width", '250px']
         ],
         "${_tb}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_tasiten}": [
            ["style", "left", '24px'],
            ["style", "top", '40px']
         ],
         "${_kabe2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '26px'],
            ["style", "top", '0px']
         ],
         "${_x2}": [
            ["style", "top", '-2px'],
            ["style", "height", '23px'],
            ["style", "font-size", '24px'],
            ["style", "left", '4px'],
            ["style", "width", '57px']
         ],
         "${_x3}": [
            ["style", "top", '0px'],
            ["style", "height", '23px'],
            ["style", "left", '4px'],
            ["style", "width", '57px']
         ],
         "${_mai}": [
            ["style", "top", '48px'],
            ["style", "height", '36px'],
            ["style", "font-size", '40px'],
            ["style", "left", '72px'],
            ["style", "width", '28px']
         ],
         "${_z3}": [
            ["style", "height", '29px'],
            ["style", "top", '54px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_combo}": [
            ["style", "top", '59px'],
            ["style", "left", '192px'],
            ["style", "display", 'none']
         ],
         "${_ura10}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ans}": [
            ["style", "top", '169px'],
            ["style", "font-size", '20px'],
            ["style", "height", '34px'],
            ["style", "display", 'none'],
            ["style", "left", '595px'],
            ["style", "width", '102px']
         ],
         "${_card7}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '408px'],
            ["style", "width", '64px']
         ],
         "${_x4}": [
            ["style", "top", '2px'],
            ["style", "height", '23px'],
            ["style", "font-size", '24px'],
            ["style", "left", '4px'],
            ["style", "width", '57px']
         ],
         "${_hukidasi}": [
            ["style", "display", 'none'],
            ["style", "left", '102px'],
            ["style", "top", '166px']
         ],
         "${_omote4}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_z2}": [
            ["style", "top", '56px'],
            ["style", "height", '29px'],
            ["style", "font-size", '24px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_Text}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_zannen}": [
            ["style", "top", '118px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "display", 'none'],
            ["style", "left", '203px'],
            ["style", "font-size", '40px']
         ],
         "${_ura7}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura1}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote7}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_z4}": [
            ["style", "top", '55px'],
            ["style", "height", '29px'],
            ["style", "font-size", '24px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_omote5}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_result}": [
            ["style", "top", '311px'],
            ["style", "height", '36px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '350px'],
            ["style", "width", '96px']
         ],
         "${_card4}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '338px'],
            ["style", "width", '64px']
         ],
         "${_ura4}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(231,255,0,1.00)'],
            ["style", "height", '50px'],
            ["style", "top", '-10px'],
            ["style", "left", '-52px'],
            ["style", "width", '200px']
         ],
         "${_card5}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '362px'],
            ["style", "width", '64px']
         ],
         "${_omote10}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_tokuten}": [
            ["transform", "rotateZ", '-359deg'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '39px'],
            ["style", "width", '34px'],
            ["style", "top", '0px'],
            ["transform", "scaleY", '0.98494'],
            ["style", "height", '39px'],
            ["transform", "scaleX", '0.99964'],
            ["style", "font-size", '40px']
         ],
         "${_tasitoku}": [
            ["style", "top", '95px'],
            ["style", "left", '269px'],
            ["style", "display", 'none']
         ],
         "${_Text9}": [
            ["style", "top", '0px'],
            ["style", "font-size", '18px'],
            ["style", "height", '29px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '96px']
         ],
         "${_kabe}": [
            ["style", "top", '58px'],
            ["style", "display", 'block'],
            ["transform", "scaleY", '0.92222'],
            ["transform", "scaleX", '0.85507'],
            ["style", "height", '305px'],
            ["style", "opacity", '0'],
            ["style", "left", '86px'],
            ["style", "width", '672px']
         ],
         "${_omote1}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_toziru}": [
            ["style", "top", '9px'],
            ["style", "height", '29px'],
            ["style", "font-size", '20px'],
            ["style", "left", '16px'],
            ["style", "width", '144px']
         ],
         "${_omote6}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_kei}": [
            ["style", "display", 'none']
         ],
         "${_ura6}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura5}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_button2}": [
            ["color", "background-color", 'rgba(255,241,34,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "left", '0px'],
            ["style", "width", '176px'],
            ["style", "top", '0px'],
            ["style", "height", '48px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${symbolSelector}": [
            ["style", "height", '483px'],
            ["style", "width", '792px']
         ],
         "${_card1}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '270px'],
            ["style", "width", '64px']
         ],
         "${_hukidasit}": [
            ["style", "top", '-100px'],
            ["style", "height", '293px'],
            ["transform", "scaleX", '-0.93103'],
            ["style", "left", '-126px'],
            ["style", "width", '403px']
         ],
         "${_card3}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '317px'],
            ["style", "width", '64px']
         ],
         "${_card9}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '455px'],
            ["style", "width", '64px']
         ],
         "${_ten}": [
            ["style", "top", '46px'],
            ["style", "left", '51px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_smah}": [
            ["style", "top", '170px'],
            ["style", "height", '261px'],
            ["style", "display", 'none'],
            ["style", "left", '318px'],
            ["style", "width", '319px']
         ],
         "${_tensu}": [
            ["style", "display", 'none'],
            ["style", "height", '79px'],
            ["style", "left", '400px'],
            ["style", "width", '215px']
         ],
         "${_yt}": [
            ["style", "display", 'block'],
            ["style", "top", '208px'],
            ["style", "left", '265px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_pt}": [
            ["style", "top", '47px'],
            ["style", "left", '25px'],
            ["style", "font-size", '40px']
         ],
         "${_ura3}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura2}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote9}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_x1}": [
            ["style", "top", '-1px'],
            ["style", "height", '23px'],
            ["style", "font-size", '24px'],
            ["style", "left", '8px'],
            ["style", "width", '57px']
         ],
         "${_Point}": [
            ["style", "top", '-11px'],
            ["style", "height", '92px'],
            ["style", "left", '29px'],
            ["style", "width", '110px']
         ],
         "${_fc}": [
            ["style", "top", '49px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '-10px'],
            ["style", "font-size", '18px']
         ],
         "${_complete}": [
            ["style", "top", '240px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'block'],
            ["style", "height", '35px'],
            ["style", "left", '238px'],
            ["style", "width", '145px']
         ],
         "${_omote2}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_z}": [
            ["style", "top", '65px'],
            ["style", "font-size", '24px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_close}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '426px']
         ],
         "${_omote3}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 20000,
         autoPlay: true,
         labels: {
            "com": 20000
         },
         timeline: [
            { id: "eid670", tween: [ "style", "${_ans}", "font-size", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid487", tween: [ "style", "${_combo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid715", tween: [ "style", "${_hukidasi}", "top", '166px', { fromValue: '166px'}], position: 0, duration: 0 },
            { id: "eid509", tween: [ "style", "${_yt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid171", tween: [ "style", "${_card2}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid174", tween: [ "style", "${_card4}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid714", tween: [ "style", "${_hukidasi}", "left", '102px', { fromValue: '102px'}], position: 0, duration: 0 },
            { id: "eid671", tween: [ "style", "${_ans}", "left", '595px', { fromValue: '595px'}], position: 0, duration: 0 },
            { id: "eid557", tween: [ "style", "${_result}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid167", tween: [ "style", "${_close}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid179", tween: [ "style", "${_close}", "display", 'none', { fromValue: 'none'}], position: 20000, duration: 0 },
            { id: "eid575", tween: [ "style", "${_kei}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid672", tween: [ "style", "${_ans}", "top", '169px', { fromValue: '169px'}], position: 0, duration: 0 },
            { id: "eid169", tween: [ "style", "${_card5}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid550", tween: [ "color", "${_yt}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid183", tween: [ "style", "${_kabe2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid482", tween: [ "style", "${_tensu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid178", tween: [ "style", "${_card9}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid175", tween: [ "style", "${_card6}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid609", tween: [ "style", "${_yt}", "top", '208px', { fromValue: '208px'}], position: 0, duration: 0 },
            { id: "eid607", tween: [ "style", "${_tensu}", "left", '400px', { fromValue: '400px'}], position: 0, duration: 0 },
            { id: "eid541", tween: [ "style", "${_hukidasi}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid176", tween: [ "style", "${_card3}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid500", tween: [ "style", "${_complete}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid172", tween: [ "style", "${_card10}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid168", tween: [ "style", "${_ura7}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid577", tween: [ "style", "${_tasitoku}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid173", tween: [ "style", "${_card1}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid586", tween: [ "style", "${_complete}", "left", '238px', { fromValue: '238px'}], position: 0, duration: 0 },
            { id: "eid673", tween: [ "style", "${_ans}", "width", '102px', { fromValue: '102px'}], position: 0, duration: 0 },
            { id: "eid551", tween: [ "color", "${_complete}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid546", tween: [ "style", "${_smah}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid606", tween: [ "style", "${_tasitoku}", "left", '269px', { fromValue: '269px'}], position: 0, duration: 0 },
            { id: "eid608", tween: [ "style", "${_yt}", "left", '265px', { fromValue: '265px'}], position: 0, duration: 0 },
            { id: "eid561", tween: [ "style", "${_ans}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid511", tween: [ "style", "${_complete}", "height", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
            { id: "eid177", tween: [ "style", "${_card8}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid588", tween: [ "style", "${_complete}", "top", '240px', { fromValue: '240px'}], position: 0, duration: 0 },
            { id: "eid170", tween: [ "style", "${_card7}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid489", tween: [ "style", "${_tensu}", "width", '215px', { fromValue: '215px'}], position: 0, duration: 0 },
            { id: "eid490", tween: [ "style", "${_tensu}", "height", '79px', { fromValue: '79px'}], position: 0, duration: 0 },
            { id: "eid409", tween: [ "style", "${_kabe}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid237", tween: [ "style", "${_zannen}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"home": {
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
      rect: ['0px','0px','324px','324px','auto','auto'],
      borderRadius: ['30px 30px','30px 30px','30px 30px','30px 30px'],
      id: 'shikaku',
      stroke: [13,'rgb(0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      transform: [[0,0],['45']],
      borderRadius: ['5.5160780864357px 5.5160780864357px','5.5160780864357px 5.5160780864357px','5.5160780864357px 5.5160780864357px','5.5160780864357px 5.5160780864357px'],
      rect: ['78px','74px','200px','200px','auto','auto'],
      id: 'house3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   },
   {
      type: 'rect',
      id: 'house2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['228px','41px','50px','106px','auto','auto'],
      fill: ['rgba(0,0,0,1)']
   },
   {
      type: 'rect',
      id: 'white',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['31px','174px','288px','143px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [],
      rect: ['78px','142px','200px','160px','auto','auto'],
      id: 'house1',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   },
   {
      transform: [[0,0],['45'],[],['0.8','0.8']],
      rect: ['77px','73px','200px','200px','auto','auto'],
      borderRadius: ['5.5160780864357px 5.5160780864357px','5.5160780864357px 5.5160780864357px','5.5160780864357px 5.5160780864357px','5.5160780864357px 5.5160780864357px'],
      display: 'none',
      id: 'house3Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   },
   {
      transform: [[0,0],[],[],['0.8','0.8']],
      type: 'rect',
      display: 'none',
      id: 'house2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['227px','68px','50px','106px','auto','auto'],
      fill: ['rgba(0,0,0,1)']
   },
   {
      transform: [[0,0],[],[],['0.8','0.8']],
      type: 'rect',
      display: 'none',
      id: 'whiteCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['30px','159px','288px','143px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [[0,0],[],[],['0.8','0.8']],
      type: 'rect',
      display: 'none',
      id: 'house1Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['77px','141px','200px','160px','auto','auto'],
      fill: ['rgba(0,0,0,1)']
   },
   {
      type: 'rect',
      rect: ['-1px','-2px','352px','352px','auto','auto'],
      id: 'housecover',
      stroke: [0,'rgba(0,0,0,1)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_house1}": [
            ["style", "top", '142px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '160px'],
            ["style", "display", 'block'],
            ["style", "left", '78px'],
            ["style", "width", '200px']
         ],
         "${_house2Copy}": [
            ["style", "top", '57px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "left", '213px'],
            ["style", "display", 'none']
         ],
         "${_shikaku}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '13px'],
            ["style", "width", '324px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '324px'],
            ["color", "border-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "border-top-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_white}": [
            ["style", "top", '174px'],
            ["style", "height", '143px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '31px'],
            ["style", "display", 'block']
         ],
         "${_house1Copy}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "top", '141px'],
            ["transform", "scaleY", '0.8'],
            ["style", "height", '160px'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.8'],
            ["style", "left", '77px'],
            ["style", "width", '200px']
         ],
         "${_house2}": [
            ["style", "top", '41px'],
            ["style", "display", 'block'],
            ["style", "left", '228px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '350px'],
            ["style", "width", '350px']
         ],
         "${_housecover}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "top", '-2px'],
            ["style", "height", '352px'],
            ["style", "left", '-1px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '352px']
         ],
         "${_house3}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-top-left-radius", [5.5160780864357,5.5160780864357], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '45deg'],
            ["style", "left", '78px'],
            ["style", "width", '200px'],
            ["style", "top", '74px'],
            ["style", "border-bottom-left-radius", [5.5160780864357,5.5160780864357], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["style", "border-bottom-right-radius", [5.5160780864357,5.5160780864357], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [5.5160780864357,5.5160780864357], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'block']
         ],
         "${_whiteCopy}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["transform", "scaleY", '0.8'],
            ["style", "top", '159px'],
            ["style", "display", 'none'],
            ["style", "height", '143px'],
            ["style", "left", '30px'],
            ["transform", "scaleX", '0.8']
         ],
         "${_house3Copy}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "border-top-left-radius", [5.5160780864357,5.5160780864357], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '45deg'],
            ["transform", "scaleX", '0.8'],
            ["style", "left", '77px'],
            ["style", "width", '200px'],
            ["style", "top", '73px'],
            ["style", "border-bottom-left-radius", [5.5160780864357,5.5160780864357], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.8'],
            ["style", "height", '200px'],
            ["style", "border-top-right-radius", [5.5160780864357,5.5160780864357], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5.5160780864357,5.5160780864357], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none']
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
            { id: "eid117", tween: [ "style", "${_house2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid116", tween: [ "style", "${_white}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid112", tween: [ "style", "${_whiteCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid121", tween: [ "style", "${_house2Copy}", "left", '213px', { fromValue: '213px'}], position: 0, duration: 0 },
            { id: "eid127", tween: [ "style", "${_house2Copy}", "top", '57px', { fromValue: '57px'}], position: 0, duration: 0 },
            { id: "eid118", tween: [ "style", "${_house3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid114", tween: [ "style", "${_house3Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid111", tween: [ "style", "${_house2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid115", tween: [ "style", "${_house1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid113", tween: [ "style", "${_house1Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-10032191");
