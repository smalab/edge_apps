/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['acme, sans-serif']='<script src=\"http://use.edgefonts.net/acme:n4:all.js\"></script>';


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
            id:'stm2',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'rec',
            type:'rect',
            rect:['0px','0px','320px','550px','auto','auto'],
            fill:["rgba(177,40,20,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'normal',
            type:'group',
            rect:['106px','374px','103','70','auto','auto'],
            c:[
            {
               id:'Ellipse',
               type:'ellipse',
               rect:['0px','0px','100px','70px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(15,144,211,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Text4',
               type:'text',
               rect:['10px','24px','80px','24px','auto','auto'],
               text:"normal<br>",
               align:"center",
               font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',15,"rgba(0,0,0,1)","700","none","normal"]
            }]
         },
         {
            id:'select',
            type:'group',
            rect:['39px','102px','253px','142px','auto','auto'],
            transform:[],
            c:[
            {
               id:'Rectangle2',
               type:'rect',
               rect:['0px','0px','253px','126px','auto','auto'],
               borderRadius:["20px 20px","20px 20px","20px 20px","20px 20px"],
               fill:["rgba(247,123,0,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               boxShadow:["",3,3,3,4,"rgba(35,0,59,0.65)"],
               filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0],
               transform:[[],['3']]
            },
            {
               id:'Text7',
               type:'text',
               rect:['20px','11px','auto','auto','auto','auto'],
               text:"Select stage<br>and start！",
               align:"left",
               font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(18,0,21,0.20)","bold","none","normal"],
               transform:[[],['-9']]
            },
            {
               id:'Text2',
               type:'text',
               rect:['20px','7px','225px','86px','auto','auto'],
               text:"Select stage<br>and start！",
               align:"left",
               font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(73,15,83,1.00)","700","none","normal"],
               filter:[0,0,1,0.98,0,0,0,0,"rgba(0,0,0,0)",0,0,0],
               transform:[[],['-8']]
            }]
         },
         {
            id:'easy',
            type:'group',
            rect:['4px','374px','100','70','auto','auto'],
            c:[
            {
               id:'Ellipse3',
               type:'ellipse',
               rect:['0px','0px','100px','70px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(41,139,62,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Text3',
               type:'text',
               rect:['31px','25px','68px','23px','auto','auto'],
               text:"easy",
               align:"left",
               font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',15,"rgba(0,0,0,1)","700","none","normal"]
            }]
         },
         {
            id:'hard',
            type:'group',
            rect:['209px','375px','100px','68px','auto','auto'],
            c:[
            {
               id:'Ellipse2',
               type:'ellipse',
               rect:['0px','0px','108px','70px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(84,96,146,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Text5',
               type:'text',
               rect:['34px','24px','80px','23px','auto','auto'],
               text:"hard<br>",
               align:"left",
               font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',15,"rgba(0,0,0,1)","700","none","normal"]
            }]
         },
         {
            id:'stm1',
            type:'group',
            rect:['14px','262px','172px','76px','auto','auto'],
            transform:[[],['-7'],[],['0.9','0.9']],
            c:[
            {
               id:'Ellipse4',
               type:'ellipse',
               rect:['0px','0px','178px','86px','auto','auto'],
               borderRadius:["20px 20px","20px 20px","20px 20px","20px 20px"],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               boxShadow:["",3,3,3,2,"rgba(84,14,44,1.00)"]
            },
            {
               id:'Text6',
               type:'text',
               rect:['6px','16px','172px','70px','auto','auto'],
               text:"Play guide",
               font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',31,"rgba(247,247,247,1.00)","normal","none",""]
            }]
         },
         {
            id:'Text',
            type:'text',
            rect:['33px','38px','253px','54px','auto','auto'],
            text:"Witch Math",
            align:"center",
            font:['acme, sans-serif',32,"rgba(255,255,255,1.00)","normal","none","normal"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'return',
            display:'none',
            type:'rect',
            rect:['214','505','auto','auto','auto','auto']
         },
         {
            id:'Ellipse5',
            type:'ellipse',
            rect:['206px','348px','100px','15px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(56,57,57,0.54)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'home',
            type:'rect',
            rect:['193px','472px','auto','auto','auto','auto']
         },
         {
            id:'ghost_standing',
            type:'image',
            rect:['193px','257px','122px','107px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ghost_standing.png",'0px','0px']
         },
         {
            id:'ghost_attack',
            type:'image',
            rect:['39px','443px','122px','107px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ghost_attack.png",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'return',
            symbolName:'return'
         },
         {
            id:'home',
            symbolName:'home'
         },
         {
            id:'stm2',
            symbolName:'stm2'
         }
         ]
      },
   states: {
      "Base State": {
         "${_easy}": [
            ["style", "top", '374px'],
            ["style", "left", '4px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(247,123,0,1.00)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '3deg'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "filter.invert", '0'],
            ["subproperty", "boxShadow.spread", '4px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(35,0,59,0.65)']
         ],
         "${_Text7}": [
            ["color", "color", 'rgba(18,0,21,0.20)'],
            ["style", "top", '11px'],
            ["style", "left", '20px'],
            ["transform", "rotateZ", '-9deg']
         ],
         "${_Ellipse5}": [
            ["style", "top", '348px'],
            ["color", "background-color", 'rgba(56,57,57,0.54)']
         ],
         "${_Text3}": [
            ["style", "top", '25px'],
            ["style", "width", '68px'],
            ["style", "height", '23px'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-weight", '700'],
            ["style", "left", '31px'],
            ["style", "font-size", '15px']
         ],
         "${_stm1}": [
            ["style", "top", '262px'],
            ["transform", "scaleY", '0.9'],
            ["transform", "rotateZ", '-7deg'],
            ["style", "height", '76px'],
            ["transform", "scaleX", '0.9'],
            ["style", "left", '14px'],
            ["style", "width", '172px']
         ],
         "${_Text2}": [
            ["transform", "rotateZ", '-8deg'],
            ["color", "color", 'rgba(73,15,83,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '20px'],
            ["style", "width", '225px'],
            ["style", "top", '7px'],
            ["subproperty", "filter.saturate", '0.98'],
            ["style", "height", '86px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-size", '25px']
         ],
         "${_stm2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_ghost_attack}": [
            ["style", "height", '107px'],
            ["style", "top", '443px'],
            ["style", "left", '39px'],
            ["style", "width", '122px']
         ],
         "${_Ellipse3}": [
            ["color", "background-color", 'rgba(41,139,62,1.00)'],
            ["style", "height", '70px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_Text4}": [
            ["style", "top", '24px'],
            ["style", "text-align", 'center'],
            ["style", "height", '24px'],
            ["style", "font-weight", '700'],
            ["style", "left", '10px'],
            ["style", "font-size", '15px']
         ],
         "${_hard}": [
            ["style", "height", '68px'],
            ["style", "top", '375px'],
            ["style", "left", '209px'],
            ["style", "width", '100px']
         ],
         "${_Ellipse4}": [
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(84,14,44,1.00)'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.spread", '2px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_home}": [
            ["style", "top", '349px'],
            ["transform", "scaleY", '0.10765'],
            ["style", "left", '109px'],
            ["transform", "scaleX", '0.14078']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'visible'],
            ["style", "height", '550px'],
            ["style", "width", '320px']
         ],
         "${_Ellipse2}": [
            ["color", "background-color", 'rgba(84,96,146,1.00)'],
            ["style", "height", '70px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '108px']
         ],
         "${_Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '33px'],
            ["style", "font-size", '40px'],
            ["style", "top", '38px'],
            ["style", "text-align", 'center'],
            ["style", "width", '253px'],
            ["style", "height", '54px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'acme, sans-serif']
         ],
         "${_rec}": [
            ["style", "top", '0px'],
            ["style", "height", '550px'],
            ["color", "background-color", 'rgba(177,40,20,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '320px']
         ],
         "${_Text6}": [
            ["style", "top", '16px'],
            ["color", "color", 'rgba(247,247,247,1.00)'],
            ["style", "width", '172px'],
            ["style", "left", '6px'],
            ["style", "font-size", '31px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(15,144,211,1.00)'],
            ["style", "height", '70px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_return}": [
            ["style", "display", 'none']
         ],
         "${_ghost_standing}": [
            ["style", "height", '107px'],
            ["style", "top", '257px'],
            ["style", "left", '193px'],
            ["style", "width", '122px']
         ],
         "${_normal}": [
            ["style", "left", '106px'],
            ["style", "top", '374px']
         ],
         "${_select}": [
            ["style", "top", '102px'],
            ["style", "left", '39px']
         ],
         "${_Text5}": [
            ["style", "top", '24px'],
            ["style", "width", '80px'],
            ["style", "height", '23px'],
            ["style", "font-weight", '700'],
            ["style", "left", '34px'],
            ["style", "font-size", '15px']
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
            { id: "eid8", tween: [ "subproperty", "${_Text}", "textShadow.blur", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
            { id: "eid24", tween: [ "style", "${_Text}", "font-size", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_stm2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid27", tween: [ "transform", "${_home}", "scaleX", '0.14078', { fromValue: '0.14078'}], position: 0, duration: 0 },
            { id: "eid28", tween: [ "transform", "${_home}", "scaleY", '0.10765', { fromValue: '0.10765'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "style", "${_home}", "left", '109px', { fromValue: '109px'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_return}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid32", tween: [ "style", "${_home}", "top", '349px', { fromValue: '349px'}], position: 0, duration: 0 }         ]
      }
   }
},
"stm2": {
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
      rect: ['0px','0px','320px','550px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(127,167,212,1.00)']
   },
   {
      type: 'text',
      font: ['acme, sans-serif',13,'rgba(0,0,0,1.00)','100','none','normal'],
      rect: ['8px','77px','72px','58px','auto','auto'],
      id: 'Text8',
      text: 'Monster HP',
      align: 'left',
      transform: [[0,0],['-1']]
   },
   {
      type: 'text',
      rect: ['20px','0px','297px','58px','auto','auto'],
      id: 'Text6',
      text: '～The game～',
      align: 'left',
      font: ['acme, sans-serif',31,'rgba(0,0,0,1)','100','none','normal']
   },
   {
      id: 'gmstm',
      type: 'image',
      rect: ['82px','45px','235px','295px','auto','auto'],
      fill: ['rgba(0,0,0,0)','gmstm.JPG','0px','0px']
   },
   {
      type: 'text',
      font: ['acme, sans-serif',69,'rgba(255,0,0,1.00)','100','none','normal'],
      rect: ['41px','16px','80px','36px','auto','auto'],
      id: 'Text7',
      text: '→',
      align: 'left',
      transform: [[0,0],['-13']]
   },
   {
      type: 'text',
      font: ['acme, sans-serif',76,'rgba(255,0,0,1)','100','none','normal'],
      rect: ['63px','104px','95px','32px','auto','auto'],
      id: 'Text9',
      text: '→',
      align: 'left',
      transform: [[0,0],['-8']]
   },
   {
      type: 'text',
      rect: ['11px','170px','57px','58px','auto','auto'],
      id: 'Text10',
      text: 'Time to go',
      align: 'left',
      font: ['acme, sans-serif',12,'rgba(0,0,0,1.00)','100','none','normal']
   },
   {
      type: 'text',
      font: ['acme, sans-serif',71,'rgba(255,0,0,1.00)','100','none','normal'],
      rect: ['98px','284px','72px','58px','auto','auto'],
      id: 'Text11',
      text: '→',
      align: 'left',
      transform: [[0,0],['-34']]
   },
   {
      type: 'text',
      rect: ['20px','352px','297px','154px','auto','auto'],
      id: 'Text12',
      text: 'Digits to throw. Select three numbers. If the sum of the three numbers matches the digit of the monster, you can attack it!',
      align: 'left',
      font: ['acme, sans-serif',14,'rgba(0,0,0,1.00)','100','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gmstm}": [
            ["style", "top", '45px'],
            ["style", "height", '295px'],
            ["style", "left", '82px'],
            ["style", "width", '235px']
         ],
         "${_Text7}": [
            ["style", "top", '16px'],
            ["transform", "rotateZ", '-13deg'],
            ["color", "color", 'rgba(255,0,0,1.00)'],
            ["style", "left", '41px'],
            ["style", "font-size", '69px']
         ],
         "${_Text11}": [
            ["style", "top", '284px'],
            ["transform", "rotateZ", '-34deg'],
            ["color", "color", 'rgba(255,0,0,1.00)'],
            ["style", "left", '98px'],
            ["style", "font-size", '71px']
         ],
         "${_Text8}": [
            ["style", "top", '77px'],
            ["style", "font-size", '13px'],
            ["transform", "rotateZ", '-1deg'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '58px'],
            ["style", "left", '8px'],
            ["style", "width", '72px']
         ],
         "${_Text10}": [
            ["style", "top", '170px'],
            ["style", "font-size", '12px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '58px'],
            ["style", "left", '11px'],
            ["style", "width", '57px']
         ],
         "${_Text6}": [
            ["style", "top", '0px'],
            ["style", "left", '20px'],
            ["style", "width", '297px']
         ],
         "${_Rectangle3}": [
            ["style", "height", '550px'],
            ["color", "background-color", 'rgba(127,167,212,1.00)'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text12}": [
            ["style", "top", '352px'],
            ["style", "height", '154px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '20px'],
            ["style", "font-size", '14px']
         ],
         "${_Text9}": [
            ["style", "top", '104px'],
            ["style", "font-size", '76px'],
            ["style", "left", '63px'],
            ["transform", "rotateZ", '-8deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '550px'],
            ["style", "width", '320px']
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
},
"return": {
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
      rect: ['12px','0px','106px','42px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(194,255,39,1.00)']
   },
   {
      rect: ['33px','11px','106px','42px','auto','auto'],
      font: ['acme, sans-serif',18,'rgba(0,0,0,1)','100','none','normal'],
      id: 'Text13',
      text: 'Back',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["color", "background-color", 'rgba(194,255,39,1.00)'],
            ["style", "height", '42px'],
            ["style", "top", '0px'],
            ["style", "left", '12px'],
            ["style", "width", '106px']
         ],
         "${symbolSelector}": [
            ["style", "height", '53px'],
            ["style", "width", '129px']
         ],
         "${_Text13}": [
            ["style", "left", '33px'],
            ["style", "top", '11px']
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
},
"gmtop": {
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
      type: 'rect',
      id: 'Rectangle3',
      stroke: [1,'rgb(0, 0, 0)','dashed'],
      rect: ['0px','0px','134px','78px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['13px','13px','108px','80px','auto','auto'],
      id: 'Text4',
      text: 'ゲーム選択画面へ戻る',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',19,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3}": [
            ["style", "top", '0px'],
            ["style", "border-width", '1px'],
            ["style", "height", '78px'],
            ["style", "border-style", 'dashed'],
            ["style", "left", '0px'],
            ["style", "width", '134px']
         ],
         "${_Text4}": [
            ["style", "top", '13px'],
            ["style", "height", '80px'],
            ["style", "font-size", '19px'],
            ["style", "left", '13px'],
            ["style", "width", '108px']
         ],
         "${symbolSelector}": [
            ["style", "height", '93px'],
            ["style", "width", '136px']
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
      id: 'house3Copy',
      display: 'none',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   },
   {
      transform: [[0,0],[],[],['0.8','0.8']],
      rect: ['227px','68px','50px','106px','auto','auto'],
      display: 'none',
      id: 'house2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   },
   {
      transform: [[0,0],[],[],['0.8','0.8']],
      rect: ['30px','159px','288px','143px','auto','auto'],
      display: 'none',
      id: 'whiteCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [[0,0],[],[],['0.8','0.8']],
      rect: ['77px','141px','200px','160px','auto','auto'],
      display: 'none',
      id: 'house1Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
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
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "top", '57px'],
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
            ["style", "display", 'block'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '31px'],
            ["style", "height", '143px']
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
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '41px'],
            ["style", "left", '228px'],
            ["style", "display", 'block']
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
            ["style", "top", '159px'],
            ["transform", "scaleY", '0.8'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["transform", "scaleX", '0.8'],
            ["style", "height", '143px'],
            ["style", "left", '30px'],
            ["style", "display", 'none']
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
            { id: "eid111", tween: [ "style", "${_house2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid114", tween: [ "style", "${_house3Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
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
})(jQuery, AdobeEdge, "EDGE-5400110");
