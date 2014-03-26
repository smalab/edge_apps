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
            id:'smagru',
            type:'group',
            rect:['748px','184px','319px','261px','auto','auto'],
            c:[
            {
               id:'hukidasi2',
               type:'image',
               rect:['-23px','-38px','191px','152px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"hukidasi.png",'0px','0px'],
               transform:[[],[],[],['-0.93103']]
            },
            {
               id:'pen1',
               type:'image',
               rect:['105px','64px','158px','152px','auto','auto'],
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
            rect:['762px','169px','124px','auto','auto','auto'],
            text:"ジャンルを<br>えらんでね",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'hikist',
            type:'group',
            rect:['352px','380px','132','48','auto','auto'],
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
               rect:['27px','5px','auto','auto','auto','auto'],
               text:"ひき算",
               align:"right",
               font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,"rgba(0,0,0,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'kakest',
            type:'group',
            rect:['341px','364px','132','48','auto','auto'],
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
               text:"かけ算<br>",
               align:"right",
               font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,"rgba(0,0,0,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'tashist',
            type:'group',
            rect:['341px','364px','132','48','auto','auto'],
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
               text:"たし算<br>",
               align:"right",
               font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,"rgba(0,0,0,1.00)","normal","none","normal"]
            }]
         }],
         symbolInstances: [
         {
            id:'tashi',
            symbolName:'tashi'
         },
         {
            id:'hiki',
            symbolName:'hiki'
         },
         {
            id:'time',
            symbolName:'time'
         },
         {
            id:'kake',
            symbolName:'kake'
         }
         ]
      },
   states: {
      "Base State": {
         "${_RoundRect}": [
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
         "${_hiki}": [
            ["style", "left", '6px'],
            ["style", "top", '13px']
         ],
         "${_pen1}": [
            ["style", "height", '152px'],
            ["style", "top", '64px'],
            ["style", "left", '105px'],
            ["style", "width", '158px']
         ],
         "${_genre}": [
            ["style", "top", '5px'],
            ["style", "left", '27px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_hikist}": [
            ["style", "display", 'block'],
            ["style", "left", '352px'],
            ["style", "top", '380px']
         ],
         "${_jyannru}": [
            ["style", "top", '169px'],
            ["style", "text-align", 'center'],
            ["style", "width", '124px'],
            ["style", "left", '762px'],
            ["style", "font-size", '20px']
         ],
         "${_smagru}": [
            ["style", "height", '261px'],
            ["style", "top", '184px'],
            ["style", "left", '748px'],
            ["style", "width", '319px']
         ],
         "${_hukidasi2}": [
            ["style", "top", '-38px'],
            ["transform", "scaleX", '-0.93103'],
            ["style", "height", '152px'],
            ["style", "left", '-23px'],
            ["style", "width", '191px']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", '-4px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["color", "background-color", 'rgba(215,12,12,1)'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_time}": [
            ["style", "left", '798px'],
            ["style", "top", '23px']
         ],
         "${_RoundRectCopy3}": [
            ["style", "top", '-4px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["color", "background-color", 'rgba(215,12,12,1)'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_kakest}": [
            ["style", "display", 'block'],
            ["style", "left", '553px'],
            ["style", "top", '380px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(66,150,87,1.00)'],
            ["style", "width", '1000px'],
            ["style", "height", '500px'],
            ["style", "overflow", 'hidden']
         ],
         "${_tashi}": [
            ["style", "left", '6px'],
            ["style", "top", '13px']
         ],
         "${_tashist}": [
            ["style", "display", 'block'],
            ["style", "left", '139px'],
            ["style", "top", '380px']
         ],
         "${_genreCopy3}": [
            ["style", "top", '5px'],
            ["style", "left", '27px'],
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
            { id: "eid431", tween: [ "style", "${_tashi}", "top", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
            { id: "eid437", tween: [ "style", "${_tashist}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid465", tween: [ "style", "${_tashist}", "top", '380px', { fromValue: '380px'}], position: 0, duration: 0 },
            { id: "eid524", tween: [ "style", "${_Stage}", "width", '1000px', { fromValue: '1000px'}], position: 0, duration: 0 },
            { id: "eid466", tween: [ "style", "${_kakest}", "left", '553px', { fromValue: '553px'}], position: 0, duration: 0 },
            { id: "eid468", tween: [ "style", "${_kakest}", "top", '380px', { fromValue: '380px'}], position: 0, duration: 0 },
            { id: "eid533", tween: [ "style", "${_time}", "top", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
            { id: "eid430", tween: [ "style", "${_tashi}", "left", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
            { id: "eid440", tween: [ "style", "${_kakest}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid463", tween: [ "style", "${_hiki}", "top", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
            { id: "eid238", tween: [ "style", "${_Stage}", "height", '500px', { fromValue: '500px'}], position: 0, duration: 0 },
            { id: "eid464", tween: [ "style", "${_tashist}", "left", '139px', { fromValue: '139px'}], position: 0, duration: 0 },
            { id: "eid534", tween: [ "style", "${_time}", "left", '798px', { fromValue: '798px'}], position: 0, duration: 0 },
            { id: "eid462", tween: [ "style", "${_hiki}", "left", '6px', { fromValue: '6px'}], position: 0, duration: 0 }         ]
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
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',32,'rgba(247,247,247,1.00)','normal','none',''],
      id: 'time_txt',
      type: 'text',
      align: 'right',
      rect: ['10px','28px','auto','auto','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(249,249,249,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'TIME',
      align: 'left',
      rect: ['0px','0px','auto','auto','auto','auto']
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
            ["style", "font-size", '32px']
         ],
         "${_Text2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "color", 'rgba(249,249,249,1.00)']
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
         "${_RoundRect}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(215,12,12,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '48px'],
            ["style", "width", '132px']
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
      id: 'Point',
      type: 'group',
      rect: ['33px','9px','110px','92px','auto','auto'],
      c: [
      {
         rect: ['65px','50px','28px','36px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(247,247,247,1)','normal','none','normal'],
         id: 'mai',
         text: '点',
         align: 'right',
         type: 'text'
      },
      {
         rect: ['30px','47px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(247,247,247,1)','normal','none','normal'],
         id: 'pt',
         text: '0',
         align: 'right',
         type: 'text'
      },
      {
         rect: ['39px','-5px','34px','auto','auto','auto'],
         id: 'tokuten',
         text: '1P',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         type: 'text'
      }]
   },
   {
      id: 'card1',
      type: 'group',
      rect: ['453px','178px','75px','119','auto','auto'],
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
      id: 'card2',
      type: 'group',
      rect: ['435px','178px','75px','119','auto','auto'],
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
      id: 'card3',
      type: 'group',
      rect: ['417px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote3',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','54px','21px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z3',
         text: '４',
         align: 'left',
         type: 'text'
      },
      {
         id: 'ura3',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      id: 'card4',
      type: 'group',
      rect: ['398px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote4',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','55px','21px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z4',
         text: '５',
         align: 'left',
         type: 'text'
      },
      {
         id: 'ura4',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      id: 'card5',
      type: 'group',
      rect: ['379px','178px','75px','119','auto','auto'],
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
      id: 'card6',
      type: 'group',
      rect: ['360px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote6',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','56px','21px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z2',
         text: '３',
         align: 'left',
         type: 'text'
      },
      {
         id: 'ura6',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      id: 'card7',
      type: 'group',
      rect: ['341px','178px','75px','119','auto','auto'],
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
      id: 'card8',
      type: 'group',
      rect: ['322px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote8',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','52px','21px','29px','auto','auto'],
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z1',
         type: 'text'
      },
      {
         id: 'ura8',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      id: 'card9',
      type: 'group',
      rect: ['304px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote9',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','65px','21px','auto','auto','auto'],
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z',
         type: 'text'
      },
      {
         id: 'ura9',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      id: 'card10',
      type: 'group',
      rect: ['285px','178px','75px','119','auto','auto'],
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
      id: 'card11',
      type: 'group',
      rect: ['358px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote11',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x5',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','2px','14px','23px','auto','auto']
      },
      {
         id: 'ura11',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      id: 'card12',
      type: 'group',
      rect: ['348px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote12',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x6',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','2px','14px','23px','auto','auto']
      },
      {
         id: 'ura12',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      id: 'card13',
      type: 'group',
      rect: ['338px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote13',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','54px','21px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z5',
         text: '４',
         align: 'left',
         type: 'text'
      },
      {
         id: 'ura13',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      id: 'card14',
      type: 'group',
      rect: ['328px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote14',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','54px','21px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z6',
         text: '５',
         align: 'left',
         type: 'text'
      },
      {
         id: 'ura14',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      id: 'card15',
      type: 'group',
      rect: ['318px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote15',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x7',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','2px','14px','23px','auto','auto']
      },
      {
         id: 'ura15',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      id: 'card16',
      type: 'group',
      rect: ['308px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote16',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','54px','21px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z7',
         text: '３',
         align: 'left',
         type: 'text'
      },
      {
         id: 'ura16',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      id: 'card17',
      type: 'group',
      rect: ['298px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote17',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x8',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','2px','14px','23px','auto','auto']
      },
      {
         id: 'ura17',
         type: 'image',
         rect: ['0px','0px','75px','119px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      id: 'card18',
      type: 'group',
      rect: ['288px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote18',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','54px','21px','29px','auto','auto'],
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z8',
         type: 'text'
      },
      {
         id: 'ura18',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      id: 'card19',
      type: 'group',
      rect: ['278px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote19',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','54px','21px','auto','auto','auto'],
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z9',
         type: 'text'
      },
      {
         id: 'ura19',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      id: 'card20',
      type: 'group',
      rect: ['268px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote20',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x9',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','2px','14px','23px','auto','auto']
      },
      {
         id: 'ura20',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura.jpg','0px','0px']
      }]
   },
   {
      rect: ['86px','58px','672px','305px','auto','auto'],
      transform: [[],[],[],['0.855','0.922']],
      id: 'kabe',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['759px','167px','120px','34px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'ans',
      text: 'せいかい！',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['318px','170px','319px','261px','auto','auto'],
      id: 'smak',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['-126px','-100px','403px','293px','auto','auto'],
         id: 'hukidasitk',
         transform: [[],[],[],['-0.93103']],
         type: 'image',
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
      rect: ['253px','6px','auto','auto','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',28,'rgba(253,253,253,1)','normal','none','normal'],
      id: 'title',
      text: '算数しんけいすいじゃく',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0px','426px','176','48','auto','auto'],
      id: 'close',
      display: 'none',
      type: 'group',
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
         rect: ['16px','9px','144px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'toziru',
         text: 'カードをとじる',
         align: 'right',
         type: 'text'
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
      rect: ['337px','209px','96px','36px','auto','auto'],
      id: 'result',
      display: 'none',
      type: 'group',
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
         rect: ['0px','0px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text',
         text: 'もう一回',
         align: 'left',
         type: 'text'
      }]
   },
   {
      rect: ['203px','118px','auto','auto','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',40,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'zannen',
      text: '　ざ　ん　ね　ん　',
      display: 'none',
      type: 'text'
   },
   {
      id: 'gameselect',
      type: 'group',
      rect: ['824px','427px','165','50','auto','auto'],
      c: [
      {
         rect: ['0px','0px','163px','48px','auto','auto'],
         id: 'rectselect',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'rect',
         fill: ['rgba(246,251,75,1.00)']
      },
      {
         rect: ['9px','9px','146px','29px','auto','auto'],
         id: 'select',
         text: 'ゲーム選択へ',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         type: 'text'
      }]
   },
   {
      rect: ['192px','58px','auto','auto','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,1)','normal','none','normal'],
      align: 'left',
      id: 'combo',
      text: 'combo!!',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['285px','95px','96','76','auto','auto'],
      id: 'tasitoku',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['0px','0px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'tokumo',
         text: 'とくてん',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['24px','40px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'tasiten',
         text: '20点',
         align: 'left',
         type: 'text'
      }]
   },
   {
      rect: ['319','95','138','46','auto','auto'],
      id: 'tensu',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['51px','46px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(7,7,7,1.00)','normal','none','normal'],
         id: 'ten',
         text: ' ',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['0px','0px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1.00)','normal','none','normal'],
         id: 'tb',
         text: 'Time Bonus',
         align: 'left',
         type: 'text'
      }]
   },
   {
      rect: ['323','181','145','68','auto','auto'],
      id: 'kei',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['-238px','-207px','290px','36px','auto','auto'],
         align: 'center',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(253,253,253,1)','normal','none','normal'],
         id: 'complete',
         type: 'text'
      },
      {
         rect: ['13px','0px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(253,253,253,1)','normal','none','normal'],
         id: 'yt',
         text: 'ごうけい',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['776','149','96','86','auto','auto'],
      id: 'hukidasi',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['0px','50px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1.00)','normal','none','normal'],
         id: 'fc',
         text: 'combo!!',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['0px','0px','96px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1.00)','normal','none','normal'],
         id: 'iei',
         text: 'イェイ♪',
         align: 'left',
         type: 'text'
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
            ["style", "left", '448px'],
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
         "${_z9}": [
            ["style", "top", '54px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_card10}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '368px'],
            ["style", "width", '64px']
         ],
         "${_card8}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '388px'],
            ["style", "width", '64px']
         ],
         "${_iei}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '29px'],
            ["style", "left", '0px'],
            ["style", "width", '96px']
         ],
         "${_card6}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '408px'],
            ["style", "width", '64px']
         ],
         "${_tensu}": [
            ["style", "height", '79px'],
            ["style", "display", 'none'],
            ["style", "left", '400px'],
            ["style", "width", '215px']
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
            ["style", "left", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_card12}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '348px'],
            ["style", "width", '64px']
         ],
         "${_card14}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '328px'],
            ["style", "width", '64px']
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
            ["style", "top", '50px'],
            ["style", "height", '36px'],
            ["style", "width", '28px'],
            ["style", "left", '65px'],
            ["style", "font-size", '26px']
         ],
         "${_z3}": [
            ["style", "height", '29px'],
            ["style", "top", '54px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_combo}": [
            ["style", "top", '58px'],
            ["style", "left", '192px'],
            ["style", "display", 'none']
         ],
         "${_card16}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '308px'],
            ["style", "width", '64px']
         ],
         "${_ura10}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ans}": [
            ["style", "top", '167px'],
            ["style", "display", 'none'],
            ["style", "height", '34px'],
            ["style", "left", '759px'],
            ["style", "width", '120px']
         ],
         "${_card7}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '398px'],
            ["style", "width", '64px']
         ],
         "${_z6}": [
            ["style", "top", '54px'],
            ["style", "height", '29px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_close}": [
            ["style", "top", '426px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_zannen}": [
            ["style", "top", '118px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "display", 'none'],
            ["style", "left", '203px'],
            ["style", "font-size", '40px']
         ],
         "${_hukidasi}": [
            ["style", "display", 'none']
         ],
         "${_z5}": [
            ["style", "top", '54px'],
            ["style", "height", '29px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_ura14}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura5}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_tasiten}": [
            ["style", "left", '24px'],
            ["style", "top", '40px']
         ],
         "${_ura12}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_result}": [
            ["style", "top", '311px'],
            ["style", "display", 'none'],
            ["style", "height", '36px'],
            ["style", "left", '350px'],
            ["style", "width", '96px']
         ],
         "${_ura20}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card17}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '298px'],
            ["style", "width", '64px']
         ],
         "${_pen4}": [
            ["style", "height", '250px'],
            ["style", "top", '68px'],
            ["style", "left", '232px'],
            ["style", "width", '250px']
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
         "${_ura7}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_gameselect}": [
            ["style", "left", '824px'],
            ["style", "top", '427px']
         ],
         "${_omote4}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote17}": [
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
         "${_card1}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '458px'],
            ["style", "width", '64px']
         ],
         "${_ura18}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_Text}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_omote19}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card19}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '278px'],
            ["style", "width", '64px']
         ],
         "${_title}": [
            ["style", "top", '6px'],
            ["style", "left", '253px'],
            ["style", "font-size", '28px']
         ],
         "${_omote16}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_x6}": [
            ["style", "height", '23px'],
            ["style", "top", '2px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
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
         "${_fc}": [
            ["style", "display", 'block'],
            ["style", "top", '50px'],
            ["style", "left", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
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
         "${_omote5}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_z8}": [
            ["style", "height", '29px'],
            ["style", "top", '54px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_omote3}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_z7}": [
            ["style", "top", '54px'],
            ["style", "height", '29px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_ura13}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card20}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '268px'],
            ["style", "width", '64px']
         ],
         "${_card4}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '428px'],
            ["style", "width", '64px']
         ],
         "${_card15}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '318px'],
            ["style", "width", '64px']
         ],
         "${_omote15}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote12}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura4}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote11}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card18}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '288px'],
            ["style", "width", '64px']
         ],
         "${_x5}": [
            ["style", "height", '23px'],
            ["style", "top", '2px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
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
            ["style", "left", '418px'],
            ["style", "width", '64px']
         ],
         "${_rectselect}": [
            ["color", "background-color", 'rgba(246,251,75,1.00)'],
            ["style", "top", '0px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "border-width", '1px']
         ],
         "${_x9}": [
            ["style", "height", '23px'],
            ["style", "top", '2px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${_smak}": [
            ["style", "top", '170px'],
            ["style", "display", 'none'],
            ["style", "height", '261px'],
            ["style", "left", '318px'],
            ["style", "width", '319px']
         ],
         "${_omote1}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura19}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_Point}": [
            ["style", "height", '92px'],
            ["style", "top", '9px'],
            ["style", "left", '33px'],
            ["style", "width", '110px']
         ],
         "${_tasitoku}": [
            ["style", "top", '95px'],
            ["style", "left", '269px'],
            ["style", "display", 'none']
         ],
         "${_card11}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '358px'],
            ["style", "width", '64px']
         ],
         "${_ura3}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura11}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
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
         "${_card9}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '378px'],
            ["style", "width", '64px']
         ],
         "${_x7}": [
            ["style", "top", '2px'],
            ["style", "height", '23px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${_toziru}": [
            ["style", "top", '9px'],
            ["style", "height", '29px'],
            ["style", "font-size", '20px'],
            ["style", "left", '16px'],
            ["style", "width", '144px']
         ],
         "${_omote13}": [
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
         "${_omote6}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_tokuten}": [
            ["style", "top", '0px'],
            ["style", "width", '34px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '39px'],
            ["style", "left", '39px'],
            ["style", "font-size", '26px']
         ],
         "${_select}": [
            ["style", "top", '9px'],
            ["style", "height", '29px'],
            ["style", "left", '9px'],
            ["style", "width", '146px']
         ],
         "${_omote14}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote18}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${symbolSelector}": [
            ["style", "height", '483px'],
            ["style", "width", '792px']
         ],
         "${_ura17}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote10}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card3}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '438px'],
            ["style", "width", '64px']
         ],
         "${_x}": [
            ["style", "height", '23px'],
            ["style", "top", '-2px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${_ten}": [
            ["style", "top", '46px'],
            ["style", "left", '51px'],
            ["color", "color", 'rgba(7,7,7,1.00)']
         ],
         "${_hukidasitk}": [
            ["style", "top", '-100px'],
            ["transform", "scaleX", '-0.93103'],
            ["style", "height", '293px'],
            ["style", "left", '-126px'],
            ["style", "width", '403px']
         ],
         "${_x8}": [
            ["style", "height", '23px'],
            ["style", "top", '2px'],
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
            ["style", "left", '30px'],
            ["style", "font-size", '26px']
         ],
         "${_card13}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '338px'],
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
         "${_omote20}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_x4}": [
            ["style", "top", '2px'],
            ["style", "height", '23px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${_ura16}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
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
         "${_ura15}": [
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
            { id: "eid316", tween: [ "style", "${_card17}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid488", tween: [ "style", "${_combo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid310", tween: [ "style", "${_card11}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid315", tween: [ "style", "${_card16}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid237", tween: [ "style", "${_zannen}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid174", tween: [ "style", "${_card4}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid273", tween: [ "style", "${_ura7}", "height", '95px', { fromValue: '95px'}], position: 0, duration: 0 },
            { id: "eid559", tween: [ "style", "${_result}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid167", tween: [ "style", "${_close}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid179", tween: [ "style", "${_close}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid311", tween: [ "style", "${_card12}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid611", tween: [ "style", "${_tasitoku}", "left", '269px', { fromValue: '269px'}], position: 0, duration: 0 },
            { id: "eid314", tween: [ "style", "${_card15}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid548", tween: [ "color", "${_yt}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid183", tween: [ "style", "${_kabe2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid483", tween: [ "style", "${_tensu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid317", tween: [ "style", "${_card18}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid178", tween: [ "style", "${_card9}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid175", tween: [ "style", "${_card6}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid613", tween: [ "style", "${_yt}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid610", tween: [ "style", "${_tensu}", "left", '400px', { fromValue: '400px'}], position: 0, duration: 0 },
            { id: "eid542", tween: [ "style", "${_hukidasi}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid176", tween: [ "style", "${_card3}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid505", tween: [ "style", "${_complete}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid172", tween: [ "style", "${_card10}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid313", tween: [ "style", "${_card14}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid578", tween: [ "style", "${_tasitoku}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid312", tween: [ "style", "${_card13}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid173", tween: [ "style", "${_card1}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid589", tween: [ "style", "${_complete}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid319", tween: [ "style", "${_card20}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid549", tween: [ "color", "${_complete}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid612", tween: [ "style", "${_yt}", "left", '27px', { fromValue: '27px'}], position: 0, duration: 0 },
            { id: "eid274", tween: [ "style", "${_ura7}", "width", '64px', { fromValue: '64px'}], position: 0, duration: 0 },
            { id: "eid409", tween: [ "style", "${_kabe}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid562", tween: [ "style", "${_ans}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid171", tween: [ "style", "${_card2}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid168", tween: [ "style", "${_ura7}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid512", tween: [ "style", "${_yt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid170", tween: [ "style", "${_card7}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid491", tween: [ "style", "${_tensu}", "width", '215px', { fromValue: '215px'}], position: 0, duration: 0 },
            { id: "eid492", tween: [ "style", "${_tensu}", "height", '79px', { fromValue: '79px'}], position: 0, duration: 0 },
            { id: "eid177", tween: [ "style", "${_card8}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid590", tween: [ "style", "${_complete}", "top", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid514", tween: [ "style", "${_complete}", "height", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
            { id: "eid169", tween: [ "style", "${_card5}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid545", tween: [ "style", "${_smak}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid582", tween: [ "style", "${_kei}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid318", tween: [ "style", "${_card19}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 }         ]
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
      rect: ['33px','9px','110px','92px','auto','auto'],
      c: [
      {
         rect: ['65px','50px','28px','36px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(247,247,247,1)','normal','none','normal'],
         id: 'mai',
         text: '点',
         align: 'right',
         type: 'text'
      },
      {
         rect: ['30px','47px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(247,247,247,1)','normal','none','normal'],
         id: 'pt',
         text: '0',
         align: 'right',
         type: 'text'
      },
      {
         rect: ['39px','-5px','34px','auto','auto','auto'],
         transform: [[],['-359'],[],['0.99964','0.98494']],
         id: 'tokuten',
         text: '1P',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         type: 'text'
      }]
   },
   {
      id: 'card1',
      type: 'group',
      rect: ['453px','178px','75px','119','auto','auto'],
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
      id: 'card2',
      type: 'group',
      rect: ['435px','178px','75px','119','auto','auto'],
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
      id: 'card3',
      type: 'group',
      rect: ['417px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote3',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','54px','21px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z3',
         text: '４',
         align: 'left',
         type: 'text'
      },
      {
         id: 'ura3',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      id: 'card4',
      type: 'group',
      rect: ['398px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote4',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','55px','21px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z4',
         text: '５',
         align: 'left',
         type: 'text'
      },
      {
         id: 'ura4',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      id: 'card5',
      type: 'group',
      rect: ['379px','178px','75px','119','auto','auto'],
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
      id: 'card6',
      type: 'group',
      rect: ['360px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote6',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','56px','21px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z2',
         text: '３',
         align: 'left',
         type: 'text'
      },
      {
         id: 'ura6',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      id: 'card7',
      type: 'group',
      rect: ['341px','178px','75px','119','auto','auto'],
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
      id: 'card8',
      type: 'group',
      rect: ['322px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote8',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','52px','21px','29px','auto','auto'],
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z1',
         type: 'text'
      },
      {
         id: 'ura8',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      id: 'card9',
      type: 'group',
      rect: ['304px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote9',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','65px','21px','auto','auto','auto'],
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z',
         type: 'text'
      },
      {
         id: 'ura9',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      id: 'card10',
      type: 'group',
      rect: ['285px','178px','75px','119','auto','auto'],
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
      id: 'card11',
      type: 'group',
      rect: ['358px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote11',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x5',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','2px','14px','23px','auto','auto']
      },
      {
         id: 'ura11',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      id: 'card12',
      type: 'group',
      rect: ['348px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote12',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x6',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','2px','14px','23px','auto','auto']
      },
      {
         id: 'ura12',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      id: 'card13',
      type: 'group',
      rect: ['338px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote13',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','54px','21px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z5',
         text: '４',
         align: 'left',
         type: 'text'
      },
      {
         id: 'ura13',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      id: 'card14',
      type: 'group',
      rect: ['328px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote14',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','54px','21px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z6',
         text: '５',
         align: 'left',
         type: 'text'
      },
      {
         id: 'ura14',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      id: 'card15',
      type: 'group',
      rect: ['318px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote15',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x7',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['10px','2px','14px','23px','auto','auto']
      },
      {
         id: 'ura15',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      id: 'card16',
      type: 'group',
      rect: ['308px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote16',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','54px','21px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z7',
         text: '３',
         align: 'left',
         type: 'text'
      },
      {
         id: 'ura16',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      id: 'card17',
      type: 'group',
      rect: ['298px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote17',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x8',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','2px','14px','23px','auto','auto']
      },
      {
         id: 'ura17',
         type: 'image',
         rect: ['0px','0px','75px','119px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      id: 'card18',
      type: 'group',
      rect: ['288px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote18',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','54px','21px','29px','auto','auto'],
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z8',
         type: 'text'
      },
      {
         id: 'ura18',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      id: 'card19',
      type: 'group',
      rect: ['278px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote19',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','54px','21px','auto','auto','auto'],
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z9',
         type: 'text'
      },
      {
         id: 'ura19',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      id: 'card20',
      type: 'group',
      rect: ['268px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote20',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x9',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','2px','14px','23px','auto','auto']
      },
      {
         id: 'ura20',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura11.jpg','0px','0px']
      }]
   },
   {
      rect: ['86px','58px','672px','305px','auto','auto'],
      transform: [[],[],[],['0.855','0.922']],
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
         rect: ['-126px','-100px','403px','293px','auto','auto'],
         id: 'hukidasit',
         transform: [[],[],[],['-0.93103']],
         type: 'image',
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
      rect: ['253px','6px','auto','auto','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',28,'rgba(253,253,253,1)','normal','none','normal'],
      id: 'title',
      text: '算数しんけいすいじゃく',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0px','426px','176','48','auto','auto'],
      id: 'close',
      display: 'none',
      type: 'group',
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
         rect: ['16px','9px','144px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'toziru',
         text: 'カードをとじる',
         align: 'right',
         type: 'text'
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
      rect: ['337px','209px','96px','36px','auto','auto'],
      id: 'result',
      display: 'none',
      type: 'group',
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
         rect: ['0px','0px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text',
         text: 'もう一回',
         align: 'left',
         type: 'text'
      }]
   },
   {
      rect: ['203px','118px','auto','auto','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',40,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'zannen',
      text: '　ざ　ん　ね　ん　',
      display: 'none',
      type: 'text'
   },
   {
      id: 'gameselect',
      type: 'group',
      rect: ['824px','428px','165','50','auto','auto'],
      c: [
      {
         rect: ['0px','0px','163px','48px','auto','auto'],
         id: 'rectselect',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'rect',
         fill: ['rgba(246,251,75,1.00)']
      },
      {
         rect: ['9px','9px','146px','29px','auto','auto'],
         id: 'select',
         text: 'ゲーム選択へ',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         type: 'text'
      }]
   },
   {
      rect: ['192px','59px','auto','auto','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,1)','normal','none','normal'],
      align: 'left',
      id: 'combo',
      text: 'combo!!',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['319','95','138','46','auto','auto'],
      id: 'tensu',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['0px','0px','159px','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1.00)','normal','none','normal'],
         id: 'tb',
         text: 'Time Bonus',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['51px','46px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1.00)','normal','none','normal'],
         id: 'ten',
         text: ' ',
         align: 'left',
         type: 'text'
      }]
   },
   {
      rect: ['284','95','96','76','auto','auto'],
      id: 'tasitoku',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['0px','0px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'tokumo',
         text: 'とくてん',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['24px','40px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'tasiten',
         text: '20点',
         align: 'left',
         type: 'text'
      }]
   },
   {
      rect: ['323','181','145','68','auto','auto'],
      id: 'kei',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['0px','33px','145px','69px','auto','auto'],
         align: 'center',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(253,253,253,1)','normal','none','normal'],
         id: 'complete',
         type: 'text'
      },
      {
         rect: ['13px','-23px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(253,253,253,1)','normal','none','normal'],
         id: 'yt',
         text: 'ごうけい',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['776','149','96','86','auto','auto'],
      id: 'hukidasi',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['0px','50px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1.00)','normal','none','normal'],
         id: 'fc',
         text: 'combo!!',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['0px','0px','96px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1.00)','normal','none','normal'],
         id: 'Text9',
         text: 'イェイ♪',
         align: 'left',
         type: 'text'
      }]
   },
   {
      rect: ['759px','167px','120px','34px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'ans',
      text: 'せいかい！',
      display: 'none',
      type: 'text'
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
            ["style", "left", '448px'],
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
            ["style", "left", '10px'],
            ["style", "width", '14px']
         ],
         "${_ura13}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card8}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '388px'],
            ["style", "width", '64px']
         ],
         "${_card6}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '408px'],
            ["style", "width", '64px']
         ],
         "${_tensu}": [
            ["style", "height", '79px'],
            ["style", "display", 'none'],
            ["style", "left", '400px'],
            ["style", "width", '140px']
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
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '159px']
         ],
         "${_ura16}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card14}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '328px'],
            ["style", "width", '64px']
         ],
         "${_kabe2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '26px'],
            ["style", "top", '0px']
         ],
         "${_x2}": [
            ["style", "height", '23px'],
            ["style", "top", '-2px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${_x3}": [
            ["style", "height", '23px'],
            ["style", "top", '0px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${_pen3}": [
            ["style", "height", '250px'],
            ["style", "top", '85px'],
            ["style", "left", '194px'],
            ["style", "width", '250px']
         ],
         "${_z3}": [
            ["style", "top", '54px'],
            ["style", "height", '29px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_combo}": [
            ["style", "top", '59px'],
            ["style", "left", '192px'],
            ["style", "display", 'none']
         ],
         "${_card17}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '298px'],
            ["style", "width", '64px']
         ],
         "${_ura10}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ans}": [
            ["style", "top", '167px'],
            ["style", "display", 'none'],
            ["style", "height", '34px'],
            ["style", "left", '759px'],
            ["style", "width", '120px']
         ],
         "${_card7}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '398px'],
            ["style", "width", '64px']
         ],
         "${_z6}": [
            ["style", "height", '29px'],
            ["style", "top", '54px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_x4}": [
            ["style", "height", '23px'],
            ["style", "top", '2px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${_Text}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_hukidasi}": [
            ["style", "display", 'none']
         ],
         "${_z5}": [
            ["style", "height", '29px'],
            ["style", "top", '54px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_ura14}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura20}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card12}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '348px'],
            ["style", "width", '64px']
         ],
         "${_ura12}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote2}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_close}": [
            ["style", "top", '426px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_mai}": [
            ["style", "top", '50px'],
            ["style", "height", '36px'],
            ["style", "font-size", '26px'],
            ["style", "left", '65px'],
            ["style", "width", '28px']
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
         "${_tasiten}": [
            ["style", "left", '24px'],
            ["style", "top", '40px']
         ],
         "${_omote3}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_gameselect}": [
            ["style", "left", '824px'],
            ["style", "top", '428px']
         ],
         "${_omote4}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote17}": [
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
         "${_z7}": [
            ["style", "height", '29px'],
            ["style", "top", '54px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_ura18}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura5}": [
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
         "${_card19}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '278px'],
            ["style", "width", '64px']
         ],
         "${_fc}": [
            ["style", "display", 'block'],
            ["style", "top", '50px'],
            ["style", "left", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_omote16}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_x6}": [
            ["style", "top", '2px'],
            ["style", "height", '23px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${_ura2}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura1}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card4}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '428px'],
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
         "${_z8}": [
            ["style", "top", '54px'],
            ["style", "height", '29px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_card10}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '368px'],
            ["style", "width", '64px']
         ],
         "${_result}": [
            ["style", "top", '311px'],
            ["style", "height", '36px'],
            ["style", "display", 'none'],
            ["style", "left", '350px'],
            ["style", "width", '96px']
         ],
         "${_z9}": [
            ["style", "top", '54px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_omote15}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura19}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card5}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '418px'],
            ["style", "width", '64px']
         ],
         "${_ura17}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote12}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura4}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_tokuten}": [
            ["transform", "rotateZ", '-359deg'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '39px'],
            ["style", "width", '34px'],
            ["style", "top", '0px'],
            ["transform", "scaleY", '0.98494'],
            ["style", "height", '39px'],
            ["transform", "scaleX", '0.99964'],
            ["style", "font-size", '26px']
         ],
         "${_card18}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '288px'],
            ["style", "width", '64px']
         ],
         "${_ura3}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card20}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '268px'],
            ["style", "width", '64px']
         ],
         "${_omote19}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura11}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote10}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_x7}": [
            ["style", "height", '23px'],
            ["style", "top", '2px'],
            ["style", "left", '10px'],
            ["style", "width", '14px']
         ],
         "${_card9}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '378px'],
            ["style", "width", '64px']
         ],
         "${_x5}": [
            ["style", "top", '2px'],
            ["style", "height", '23px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${_Point}": [
            ["style", "top", '9px'],
            ["style", "height", '92px'],
            ["style", "left", '33px'],
            ["style", "width", '110px']
         ],
         "${_tasitoku}": [
            ["style", "display", 'none'],
            ["style", "left", '269px']
         ],
         "${_card11}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '358px'],
            ["style", "width", '64px']
         ],
         "${_Text9}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '29px'],
            ["style", "left", '0px'],
            ["style", "width", '96px']
         ],
         "${_rectselect}": [
            ["color", "background-color", 'rgba(246,251,75,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
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
         "${_omote13}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
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
            ["style", "width", '144px'],
            ["style", "left", '16px'],
            ["style", "font-size", '20px']
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
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(231,255,0,1.00)'],
            ["style", "height", '50px'],
            ["style", "top", '-10px'],
            ["style", "left", '-52px'],
            ["style", "width", '200px']
         ],
         "${_zannen}": [
            ["style", "top", '118px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '203px'],
            ["style", "font-size", '40px']
         ],
         "${_select}": [
            ["style", "height", '29px'],
            ["style", "top", '9px'],
            ["style", "left", '9px'],
            ["style", "width", '146px']
         ],
         "${_omote14}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote18}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${symbolSelector}": [
            ["style", "height", '483px'],
            ["style", "width", '792px']
         ],
         "${_card15}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '318px'],
            ["style", "width", '64px']
         ],
         "${_x9}": [
            ["style", "top", '2px'],
            ["style", "height", '23px'],
            ["style", "left", '8px'],
            ["style", "width", '14px']
         ],
         "${_card3}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '438px'],
            ["style", "width", '64px']
         ],
         "${_smat}": [
            ["style", "top", '170px'],
            ["style", "display", 'none'],
            ["style", "height", '261px'],
            ["style", "left", '318px'],
            ["style", "width", '319px']
         ],
         "${_ten}": [
            ["style", "top", '46px'],
            ["style", "left", '51px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_ura7}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_x8}": [
            ["style", "top", '2px'],
            ["style", "height", '23px'],
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
            ["style", "left", '30px'],
            ["style", "font-size", '26px']
         ],
         "${_omote11}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_title}": [
            ["style", "top", '6px'],
            ["style", "left", '253px'],
            ["style", "font-size", '28px']
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
         "${_card16}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '308px'],
            ["style", "width", '64px']
         ],
         "${_card1}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '458px'],
            ["style", "width", '64px']
         ],
         "${_omote20}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_hukidasit}": [
            ["style", "top", '-100px'],
            ["style", "height", '293px'],
            ["transform", "scaleX", '-0.93103'],
            ["style", "left", '-126px'],
            ["style", "width", '403px']
         ],
         "${_z}": [
            ["style", "top", '65px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_ura15}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card13}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '338px'],
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
            { id: "eid316", tween: [ "style", "${_card17}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid486", tween: [ "style", "${_combo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid310", tween: [ "style", "${_card11}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid315", tween: [ "style", "${_card16}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid568", tween: [ "style", "${_complete}", "top", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid174", tween: [ "style", "${_card4}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid273", tween: [ "style", "${_ura7}", "height", '95px', { fromValue: '95px'}], position: 0, duration: 0 },
            { id: "eid554", tween: [ "style", "${_result}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid167", tween: [ "style", "${_close}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid179", tween: [ "style", "${_close}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid311", tween: [ "style", "${_card12}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid591", tween: [ "style", "${_tasitoku}", "left", '269px', { fromValue: '269px'}], position: 0, duration: 0 },
            { id: "eid169", tween: [ "style", "${_card5}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid543", tween: [ "color", "${_yt}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid556", tween: [ "style", "${_result}", "left", '350px', { fromValue: '350px'}], position: 0, duration: 0 },
            { id: "eid183", tween: [ "style", "${_kabe2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid481", tween: [ "style", "${_tensu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid317", tween: [ "style", "${_card18}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid178", tween: [ "style", "${_card9}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid175", tween: [ "style", "${_card6}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid605", tween: [ "style", "${_yt}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid595", tween: [ "style", "${_tensu}", "left", '400px', { fromValue: '400px'}], position: 0, duration: 0 },
            { id: "eid540", tween: [ "style", "${_hukidasi}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid176", tween: [ "style", "${_card3}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid495", tween: [ "style", "${_complete}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid172", tween: [ "style", "${_card10}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid168", tween: [ "style", "${_ura7}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid571", tween: [ "style", "${_tasitoku}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid312", tween: [ "style", "${_card13}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid173", tween: [ "style", "${_card1}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid319", tween: [ "style", "${_card20}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid544", tween: [ "color", "${_complete}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid313", tween: [ "style", "${_card14}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid274", tween: [ "style", "${_ura7}", "width", '64px', { fromValue: '64px'}], position: 0, duration: 0 },
            { id: "eid171", tween: [ "style", "${_card2}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid237", tween: [ "style", "${_zannen}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid409", tween: [ "style", "${_kabe}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid506", tween: [ "style", "${_complete}", "height", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
            { id: "eid170", tween: [ "style", "${_card7}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid563", tween: [ "style", "${_tensu}", "width", '140px', { fromValue: '140px'}], position: 0, duration: 0 },
            { id: "eid485", tween: [ "style", "${_tensu}", "height", '79px', { fromValue: '79px'}], position: 0, duration: 0 },
            { id: "eid314", tween: [ "style", "${_card15}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid177", tween: [ "style", "${_card8}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid508", tween: [ "style", "${_yt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid547", tween: [ "style", "${_smat}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid560", tween: [ "style", "${_ans}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid603", tween: [ "style", "${_yt}", "left", '27px', { fromValue: '27px'}], position: 0, duration: 0 },
            { id: "eid570", tween: [ "style", "${_kei}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid318", tween: [ "style", "${_card19}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 }         ]
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
      id: 'Point',
      type: 'group',
      rect: ['33px','9px','110px','92px','auto','auto'],
      c: [
      {
         rect: ['65px','50px','28px','36px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(247,247,247,1)','normal','none','normal'],
         id: 'mai',
         text: '点',
         align: 'right',
         type: 'text'
      },
      {
         rect: ['30px','47px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(247,247,247,1)','normal','none','normal'],
         id: 'pt',
         text: '0',
         align: 'right',
         type: 'text'
      },
      {
         rect: ['39px','-5px','34px','auto','auto','auto'],
         id: 'tokuten',
         text: '1P',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         type: 'text'
      }]
   },
   {
      id: 'card1',
      type: 'group',
      rect: ['453px','178px','75px','119','auto','auto'],
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
      id: 'card2',
      type: 'group',
      rect: ['435px','178px','75px','119','auto','auto'],
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
      id: 'card3',
      type: 'group',
      rect: ['417px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote3',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','54px','21px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z3',
         text: '４',
         align: 'left',
         type: 'text'
      },
      {
         id: 'ura3',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      id: 'card4',
      type: 'group',
      rect: ['398px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote4',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','55px','21px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z4',
         text: '５',
         align: 'left',
         type: 'text'
      },
      {
         id: 'ura4',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      id: 'card5',
      type: 'group',
      rect: ['379px','178px','75px','119','auto','auto'],
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
      id: 'card6',
      type: 'group',
      rect: ['360px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote6',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','56px','21px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z2',
         text: '３',
         align: 'left',
         type: 'text'
      },
      {
         id: 'ura6',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      id: 'card7',
      type: 'group',
      rect: ['341px','178px','75px','119','auto','auto'],
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
      id: 'card8',
      type: 'group',
      rect: ['322px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote8',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','52px','21px','29px','auto','auto'],
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z1',
         type: 'text'
      },
      {
         id: 'ura8',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      id: 'card9',
      type: 'group',
      rect: ['304px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote9',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','65px','21px','auto','auto','auto'],
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z',
         type: 'text'
      },
      {
         id: 'ura9',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      id: 'card10',
      type: 'group',
      rect: ['285px','178px','75px','119','auto','auto'],
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
      id: 'card11',
      type: 'group',
      rect: ['358px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote11',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x5',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','2px','57px','23px','auto','auto']
      },
      {
         id: 'ura11',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      id: 'card12',
      type: 'group',
      rect: ['348px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote12',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x6',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',20,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','2px','57px','23px','auto','auto']
      },
      {
         id: 'ura12',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      id: 'card13',
      type: 'group',
      rect: ['338px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote13',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','54px','21px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z5',
         text: '４',
         align: 'left',
         type: 'text'
      },
      {
         id: 'ura13',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      id: 'card14',
      type: 'group',
      rect: ['328px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote14',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','54px','21px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z6',
         text: '５',
         align: 'left',
         type: 'text'
      },
      {
         id: 'ura14',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      id: 'card15',
      type: 'group',
      rect: ['318px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote15',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x7',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['4px','2px','57px','23px','auto','auto']
      },
      {
         id: 'ura15',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      id: 'card16',
      type: 'group',
      rect: ['308px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote16',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','54px','21px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z7',
         text: '３',
         align: 'left',
         type: 'text'
      },
      {
         id: 'ura16',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      id: 'card17',
      type: 'group',
      rect: ['298px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote17',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x8',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['8px','2px','57px','23px','auto','auto']
      },
      {
         id: 'ura17',
         type: 'image',
         rect: ['0px','0px','75px','119px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      id: 'card18',
      type: 'group',
      rect: ['288px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote18',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','54px','21px','29px','auto','auto'],
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z8',
         type: 'text'
      },
      {
         id: 'ura18',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      id: 'card19',
      type: 'group',
      rect: ['278px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote19',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['21px','54px','21px','auto','auto','auto'],
         align: 'left',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'z9',
         type: 'text'
      },
      {
         id: 'ura19',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      id: 'card20',
      type: 'group',
      rect: ['268px','178px','75px','119','auto','auto'],
      c: [
      {
         rect: ['0px','0px','64px','95px','auto','auto'],
         id: 'omote20',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'x9',
         type: 'text',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         rect: ['4px','2px','57px','23px','auto','auto']
      },
      {
         id: 'ura20',
         type: 'image',
         rect: ['0px','0px','64px','95px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/tranpu_ura13.jpg','0px','0px']
      }]
   },
   {
      rect: ['86px','58px','672px','305px','auto','auto'],
      transform: [[],[],[],['0.855','0.922']],
      id: 'kabe',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['759px','167px','120px','34px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'ans',
      text: 'せいかい！',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['318px','170px','319px','261px','auto','auto'],
      id: 'smah',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['-126px','-100px','403px','293px','auto','auto'],
         id: 'hukidasit',
         transform: [[],[],[],['-0.93103']],
         type: 'image',
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
      rect: ['253px','6px','auto','auto','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',28,'rgba(253,253,253,1)','normal','none','normal'],
      id: 'title',
      text: '算数しんけいすいじゃく',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0px','426px','176','48','auto','auto'],
      id: 'close',
      display: 'none',
      type: 'group',
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
         rect: ['16px','9px','144px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'toziru',
         text: 'カードをとじる',
         align: 'right',
         type: 'text'
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
      rect: ['337px','209px','96px','36px','auto','auto'],
      id: 'result',
      display: 'none',
      type: 'group',
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
         rect: ['0px','0px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'Text',
         text: 'もう一回',
         align: 'left',
         type: 'text'
      }]
   },
   {
      rect: ['203px','118px','auto','auto','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',40,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'zannen',
      text: '　ざ　ん　ね　ん　',
      display: 'none',
      type: 'text'
   },
   {
      id: 'gameselect',
      type: 'group',
      rect: ['824px','427px','165','50','auto','auto'],
      c: [
      {
         rect: ['0px','0px','163px','48px','auto','auto'],
         id: 'rectselect',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'rect',
         fill: ['rgba(246,251,75,1.00)']
      },
      {
         rect: ['9px','9px','146px','29px','auto','auto'],
         id: 'select',
         text: 'ゲーム選択へ',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         type: 'text'
      }]
   },
   {
      rect: ['192px','59px','auto','auto','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,1)','normal','none','normal'],
      align: 'left',
      id: 'combo',
      text: 'combo!!',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['319','95','138','46','auto','auto'],
      id: 'tensu',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['0px','0px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1.00)','normal','none','normal'],
         id: 'tb',
         text: 'Time Bonus',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['51px','46px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1.00)','normal','none','normal'],
         id: 'ten',
         text: ' ',
         align: 'left',
         type: 'text'
      }]
   },
   {
      rect: ['85px','-26px','371px','243px','auto','auto'],
      id: 'kei',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['249px','267px','290px','36px','auto','auto'],
         align: 'center',
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(253,253,253,1)','normal','none','normal'],
         id: 'complete',
         type: 'text'
      },
      {
         rect: ['251px','207px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(253,253,253,1)','normal','none','normal'],
         id: 'yt',
         text: 'ごうけい',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['776','149','96','86','auto','auto'],
      id: 'hukidasi',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['0px','50px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1.00)','normal','none','normal'],
         id: 'fc',
         text: 'combo!!',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['0px','0px','96px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1.00)','normal','none','normal'],
         id: 'Text9',
         text: 'イェイ♪',
         align: 'left',
         type: 'text'
      }]
   },
   {
      rect: ['284px','95px','96','76','auto','auto'],
      id: 'tasitoku',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['0px','0px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'tokumo',
         text: 'とくてん',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['24px','40px','auto','auto','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         id: 'tasiten',
         text: '20点',
         align: 'left',
         type: 'text'
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
            ["style", "left", '448px'],
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
            ["style", "top", '52px'],
            ["style", "height", '29px'],
            ["style", "width", '21px'],
            ["style", "left", '21px'],
            ["style", "font-size", '24px']
         ],
         "${_z9}": [
            ["style", "top", '54px'],
            ["style", "width", '21px'],
            ["style", "left", '21px'],
            ["style", "font-size", '24px']
         ],
         "${_card10}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '368px'],
            ["style", "width", '64px']
         ],
         "${_card8}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '388px'],
            ["style", "width", '64px']
         ],
         "${_card6}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '408px'],
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
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_pen2}": [
            ["style", "height", '250px'],
            ["style", "top", '68px'],
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
         "${_card14}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '328px'],
            ["style", "width", '64px']
         ],
         "${_kabe2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '26px'],
            ["style", "top", '0px']
         ],
         "${_complete}": [
            ["style", "top", '240px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '35px'],
            ["style", "left", '238px'],
            ["style", "width", '145px']
         ],
         "${_x3}": [
            ["style", "height", '23px'],
            ["style", "top", '0px'],
            ["style", "left", '4px'],
            ["style", "width", '57px']
         ],
         "${_mai}": [
            ["style", "top", '50px'],
            ["style", "height", '36px'],
            ["style", "font-size", '26px'],
            ["style", "left", '65px'],
            ["style", "width", '28px']
         ],
         "${_z3}": [
            ["style", "top", '54px'],
            ["style", "height", '29px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_combo}": [
            ["style", "top", '59px'],
            ["style", "left", '192px'],
            ["style", "display", 'none']
         ],
         "${_card17}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '298px'],
            ["style", "width", '64px']
         ],
         "${_ura10}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card1}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '458px'],
            ["style", "width", '64px']
         ],
         "${_card7}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '398px'],
            ["style", "width", '64px']
         ],
         "${_omote20}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_x4}": [
            ["style", "top", '2px'],
            ["style", "height", '23px'],
            ["style", "width", '57px'],
            ["style", "left", '4px'],
            ["style", "font-size", '24px']
         ],
         "${_hukidasi}": [
            ["style", "display", 'none']
         ],
         "${_z5}": [
            ["style", "height", '29px'],
            ["style", "top", '54px'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_ura14}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card13}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '338px'],
            ["style", "width", '64px']
         ],
         "${_ura20}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura12}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote16}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote2}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_close}": [
            ["style", "top", '426px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_z6}": [
            ["style", "top", '54px'],
            ["style", "height", '29px'],
            ["style", "width", '21px'],
            ["style", "left", '21px'],
            ["style", "font-size", '24px']
         ],
         "${_card12}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '348px'],
            ["style", "width", '64px']
         ],
         "${_x2}": [
            ["style", "top", '-2px'],
            ["style", "height", '23px'],
            ["style", "width", '57px'],
            ["style", "left", '4px'],
            ["style", "font-size", '24px']
         ],
         "${_gameselect}": [
            ["style", "left", '824px'],
            ["style", "top", '427px']
         ],
         "${_omote4}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote17}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_z2}": [
            ["style", "top", '56px'],
            ["style", "height", '29px'],
            ["style", "width", '21px'],
            ["style", "left", '21px'],
            ["style", "font-size", '24px']
         ],
         "${_ura16}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura18}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_Text}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_omote15}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card19}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '278px'],
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
         "${_zannen}": [
            ["style", "top", '118px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '203px'],
            ["style", "font-size", '40px']
         ],
         "${_x6}": [
            ["style", "top", '2px'],
            ["style", "height", '23px'],
            ["style", "width", '57px'],
            ["style", "left", '8px'],
            ["style", "font-size", '20px']
         ],
         "${_ura7}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura1}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote3}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
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
            ["style", "width", '21px'],
            ["style", "left", '21px'],
            ["style", "font-size", '24px']
         ],
         "${_omote5}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_z8}": [
            ["style", "top", '54px'],
            ["style", "height", '29px'],
            ["style", "width", '21px'],
            ["style", "left", '21px'],
            ["style", "font-size", '24px']
         ],
         "${_omote19}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_result}": [
            ["style", "top", '311px'],
            ["style", "height", '36px'],
            ["style", "display", 'none'],
            ["style", "left", '350px'],
            ["style", "width", '96px']
         ],
         "${_ura13}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_x}": [
            ["style", "top", '-2px'],
            ["style", "height", '23px'],
            ["style", "width", '57px'],
            ["style", "left", '4px'],
            ["style", "font-size", '24px']
         ],
         "${_ura17}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_x9}": [
            ["style", "top", '2px'],
            ["style", "height", '23px'],
            ["style", "width", '57px'],
            ["style", "left", '4px'],
            ["style", "font-size", '24px']
         ],
         "${_card4}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '428px'],
            ["style", "width", '64px']
         ],
         "${_omote12}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura4}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card5}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '418px'],
            ["style", "width", '64px']
         ],
         "${_card18}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '288px'],
            ["style", "width", '64px']
         ],
         "${_card15}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '318px'],
            ["style", "width", '64px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(231,255,0,1.00)'],
            ["style", "height", '50px'],
            ["style", "top", '-10px'],
            ["style", "left", '-52px'],
            ["style", "width", '200px']
         ],
         "${_omote11}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_tokuten}": [
            ["style", "top", '0px'],
            ["style", "font-size", '26px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '39px'],
            ["style", "left", '39px'],
            ["style", "width", '34px']
         ],
         "${_omote10}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_rectselect}": [
            ["color", "background-color", 'rgba(246,251,75,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_omote1}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura19}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_Point}": [
            ["style", "top", '9px'],
            ["style", "height", '92px'],
            ["style", "left", '33px'],
            ["style", "width", '110px']
         ],
         "${_tasitoku}": [
            ["style", "top", '95px'],
            ["style", "left", '269px'],
            ["style", "display", 'none']
         ],
         "${_card11}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '358px'],
            ["style", "width", '64px']
         ],
         "${_ura3}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_ura11}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
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
         "${_select}": [
            ["style", "height", '29px'],
            ["style", "top", '9px'],
            ["style", "left", '9px'],
            ["style", "width", '146px']
         ],
         "${_x7}": [
            ["style", "top", '2px'],
            ["style", "height", '23px'],
            ["style", "width", '57px'],
            ["style", "left", '4px'],
            ["style", "font-size", '24px']
         ],
         "${_toziru}": [
            ["style", "top", '9px'],
            ["style", "height", '29px'],
            ["style", "width", '144px'],
            ["style", "left", '16px'],
            ["style", "font-size", '20px']
         ],
         "${_omote13}": [
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
         "${_omote6}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_card20}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '268px'],
            ["style", "width", '64px']
         ],
         "${_card9}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '378px'],
            ["style", "width", '64px']
         ],
         "${_omote14}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_omote18}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${symbolSelector}": [
            ["style", "height", '483px'],
            ["style", "width", '792px']
         ],
         "${_Text9}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '29px'],
            ["style", "left", '0px'],
            ["style", "width", '96px']
         ],
         "${_x5}": [
            ["style", "top", '2px'],
            ["style", "height", '23px'],
            ["style", "width", '57px'],
            ["style", "left", '8px'],
            ["style", "font-size", '24px']
         ],
         "${_card3}": [
            ["style", "top", '201px'],
            ["style", "display", 'block'],
            ["style", "height", '95px'],
            ["style", "left", '438px'],
            ["style", "width", '64px']
         ],
         "${_z7}": [
            ["style", "top", '54px'],
            ["style", "height", '29px'],
            ["style", "width", '21px'],
            ["style", "left", '21px'],
            ["style", "font-size", '24px']
         ],
         "${_ten}": [
            ["style", "top", '46px'],
            ["style", "left", '51px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_smah}": [
            ["style", "top", '170px'],
            ["style", "display", 'none'],
            ["style", "height", '261px'],
            ["style", "left", '318px'],
            ["style", "width", '319px']
         ],
         "${_x8}": [
            ["style", "top", '2px'],
            ["style", "height", '23px'],
            ["style", "width", '57px'],
            ["style", "left", '8px'],
            ["style", "font-size", '24px']
         ],
         "${_yt}": [
            ["style", "display", 'block'],
            ["style", "top", '208px'],
            ["style", "left", '265px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_pt}": [
            ["style", "top", '47px'],
            ["style", "left", '30px'],
            ["style", "font-size", '26px']
         ],
         "${_fc}": [
            ["style", "display", 'block'],
            ["style", "top", '50px'],
            ["style", "left", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_tensu}": [
            ["style", "height", '79px'],
            ["style", "display", 'none'],
            ["style", "left", '400px'],
            ["style", "width", '215px']
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
            ["style", "width", '57px'],
            ["style", "left", '8px'],
            ["style", "font-size", '24px']
         ],
         "${_card16}": [
            ["style", "top", '201px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '308px'],
            ["style", "width", '64px']
         ],
         "${_ans}": [
            ["style", "top", '167px'],
            ["style", "display", 'none'],
            ["style", "height", '34px'],
            ["style", "left", '759px'],
            ["style", "width", '120px']
         ],
         "${_ura2}": [
            ["style", "height", '95px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_hukidasit}": [
            ["style", "top", '-100px'],
            ["transform", "scaleX", '-0.93103'],
            ["style", "height", '293px'],
            ["style", "left", '-126px'],
            ["style", "width", '403px']
         ],
         "${_z}": [
            ["style", "top", '65px'],
            ["style", "width", '21px'],
            ["style", "left", '21px'],
            ["style", "font-size", '24px']
         ],
         "${_ura15}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
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
            { id: "eid316", tween: [ "style", "${_card17}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid487", tween: [ "style", "${_combo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid310", tween: [ "style", "${_card11}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid315", tween: [ "style", "${_card16}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid171", tween: [ "style", "${_card2}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid174", tween: [ "style", "${_card4}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid273", tween: [ "style", "${_ura7}", "height", '95px', { fromValue: '95px'}], position: 0, duration: 0 },
            { id: "eid557", tween: [ "style", "${_result}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid167", tween: [ "style", "${_close}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid179", tween: [ "style", "${_close}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid311", tween: [ "style", "${_card12}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid606", tween: [ "style", "${_tasitoku}", "left", '269px', { fromValue: '269px'}], position: 0, duration: 0 },
            { id: "eid169", tween: [ "style", "${_card5}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid550", tween: [ "color", "${_yt}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid183", tween: [ "style", "${_kabe2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid482", tween: [ "style", "${_tensu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid317", tween: [ "style", "${_card18}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
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
            { id: "eid312", tween: [ "style", "${_card13}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid173", tween: [ "style", "${_card1}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid586", tween: [ "style", "${_complete}", "left", '238px', { fromValue: '238px'}], position: 0, duration: 0 },
            { id: "eid319", tween: [ "style", "${_card20}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid551", tween: [ "color", "${_complete}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid608", tween: [ "style", "${_yt}", "left", '265px', { fromValue: '265px'}], position: 0, duration: 0 },
            { id: "eid274", tween: [ "style", "${_ura7}", "width", '64px', { fromValue: '64px'}], position: 0, duration: 0 },
            { id: "eid237", tween: [ "style", "${_zannen}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid409", tween: [ "style", "${_kabe}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid546", tween: [ "style", "${_smah}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid313", tween: [ "style", "${_card14}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid490", tween: [ "style", "${_tensu}", "height", '79px', { fromValue: '79px'}], position: 0, duration: 0 },
            { id: "eid314", tween: [ "style", "${_card15}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid170", tween: [ "style", "${_card7}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid489", tween: [ "style", "${_tensu}", "width", '215px', { fromValue: '215px'}], position: 0, duration: 0 },
            { id: "eid177", tween: [ "style", "${_card8}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid509", tween: [ "style", "${_yt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid588", tween: [ "style", "${_complete}", "top", '240px', { fromValue: '240px'}], position: 0, duration: 0 },
            { id: "eid511", tween: [ "style", "${_complete}", "height", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
            { id: "eid561", tween: [ "style", "${_ans}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid575", tween: [ "style", "${_kei}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid318", tween: [ "style", "${_card19}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 }         ]
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
