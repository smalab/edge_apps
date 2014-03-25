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
            id:'gmtop',
            type:'rect',
            rect:['167','444','auto','auto','auto','auto']
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
               text:"ふつう<br>",
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
               text:"すきなステージを<br>えらんでスタート！",
               align:"left",
               font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(18,0,21,0.20)","bold","none","normal"],
               transform:[[],['-8']]
            },
            {
               id:'Text2',
               type:'text',
               rect:['21px','11px','225px','86px','auto','auto'],
               text:"すきなステージを<br>えらんでスタート！",
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
               rect:['17px','25px','68px','23px','auto','auto'],
               text:"かんたん",
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
               rect:['16px','24px','80px','23px','auto','auto'],
               text:"むずかしい<br>",
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
               text:"せつめい",
               font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',40,"rgba(247,247,247,1.00)","normal","none",""]
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
            id:'gmtop',
            symbolName:'gmtop'
         },
         {
            id:'return',
            symbolName:'return'
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
         "${_normal}": [
            ["style", "left", '106px'],
            ["style", "top", '374px']
         ],
         "${_Text7}": [
            ["style", "top", '11px'],
            ["color", "color", 'rgba(18,0,21,0.20)'],
            ["style", "left", '20px'],
            ["transform", "rotateZ", '-8deg']
         ],
         "${_select}": [
            ["style", "top", '102px'],
            ["style", "left", '39px']
         ],
         "${_Text3}": [
            ["style", "top", '25px'],
            ["style", "font-size", '15px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-weight", '700'],
            ["style", "height", '23px'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
            ["style", "left", '17px'],
            ["style", "width", '68px']
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
         "${_Text5}": [
            ["style", "top", '24px'],
            ["style", "font-size", '15px'],
            ["style", "height", '23px'],
            ["style", "font-weight", '700'],
            ["style", "left", '16px'],
            ["style", "width", '80px']
         ],
         "${_stm2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_gmtop}": [
            ["style", "top", '457px'],
            ["transform", "scaleX", '0.96324'],
            ["style", "left", '179px'],
            ["transform", "scaleY", '0.88172']
         ],
         "${_Ellipse4}": [
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(84,14,44,1.00)'],
            ["subproperty", "boxShadow.spread", '2px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text4}": [
            ["style", "top", '24px'],
            ["style", "text-align", 'center'],
            ["style", "height", '24px'],
            ["style", "font-weight", '700'],
            ["style", "left", '10px'],
            ["style", "font-size", '15px']
         ],
         "${_ghost_attack}": [
            ["style", "top", '443px'],
            ["style", "height", '107px'],
            ["style", "left", '39px'],
            ["style", "width", '122px']
         ],
         "${_Text2}": [
            ["transform", "rotateZ", '-8deg'],
            ["color", "color", 'rgba(73,15,83,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '21px'],
            ["style", "width", '225px'],
            ["style", "top", '11px'],
            ["style", "font-size", '25px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '86px'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
            ["style", "text-decoration", 'none'],
            ["subproperty", "filter.saturate", '0.98']
         ],
         "${_Ellipse5}": [
            ["style", "top", '348px'],
            ["color", "background-color", 'rgba(56,57,57,0.54)']
         ],
         "${_ghost_standing}": [
            ["style", "top", '257px'],
            ["style", "height", '107px'],
            ["style", "left", '193px'],
            ["style", "width", '122px']
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
         "${_Text6}": [
            ["style", "top", '16px'],
            ["color", "color", 'rgba(247,247,247,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '6px'],
            ["style", "width", '172px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(247,123,0,1.00)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(35,0,59,0.65)'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '3deg'],
            ["subproperty", "boxShadow.spread", '4px'],
            ["subproperty", "filter.invert", '0'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
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
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "height", '54px'],
            ["style", "font-family", 'acme, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "width", '253px']
         ],
         "${_rec}": [
            ["style", "top", '0px'],
            ["style", "height", '550px'],
            ["color", "background-color", 'rgba(177,40,20,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '320px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '320px'],
            ["style", "height", '550px'],
            ["style", "overflow", 'visible']
         ],
         "${_Ellipse2}": [
            ["color", "background-color", 'rgba(84,96,146,1.00)'],
            ["style", "height", '70px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '108px']
         ],
         "${_Ellipse3}": [
            ["color", "background-color", 'rgba(41,139,62,1.00)'],
            ["style", "height", '70px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_hard}": [
            ["style", "top", '375px'],
            ["style", "height", '68px'],
            ["style", "left", '209px'],
            ["style", "width", '100px']
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
            { id: "eid24", tween: [ "style", "${_Text}", "font-size", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_gmtop}", "left", '179px', { fromValue: '179px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_stm2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "subproperty", "${_Text}", "textShadow.blur", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
            { id: "eid14", tween: [ "transform", "${_gmtop}", "scaleX", '0.96324', { fromValue: '0.96324'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_return}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "transform", "${_gmtop}", "scaleY", '0.88172', { fromValue: '0.88172'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_gmtop}", "top", '457px', { fromValue: '457px'}], position: 0, duration: 0 }         ]
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
      text: 'あいての体力です。',
      align: 'left',
      transform: [[0,0],['-1']]
   },
   {
      type: 'text',
      rect: ['20px','0px','297px','58px','auto','auto'],
      id: 'Text6',
      text: '～ゲームせつめい～',
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
      text: 'のこり時間です。',
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
      text: 'これはせんたくのすうじです。まん中にあるもんだい（せつめいでは１９のところです。）と同じになるようにすうじのせんたくしから3つえらびます。<br><br>正解ならあいてにこうげき、まちがいなら自分にこうげきが与えられます。',
      align: 'left',
      font: ['acme, sans-serif',14,'rgba(0,0,0,1.00)','100','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gmstm}": [
            ["style", "height", '295px'],
            ["style", "top", '45px'],
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
            ["style", "width", '72px'],
            ["transform", "rotateZ", '-1deg'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '58px'],
            ["style", "left", '8px'],
            ["style", "font-size", '13px']
         ],
         "${_Text10}": [
            ["style", "top", '170px'],
            ["style", "width", '57px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '58px'],
            ["style", "left", '11px'],
            ["style", "font-size", '12px']
         ],
         "${_Text6}": [
            ["style", "top", '0px'],
            ["style", "left", '20px'],
            ["style", "width", '297px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(127,167,212,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '550px']
         ],
         "${_Text12}": [
            ["style", "top", '352px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '154px'],
            ["style", "left", '20px'],
            ["style", "font-size", '14px']
         ],
         "${_Text9}": [
            ["style", "top", '104px'],
            ["transform", "rotateZ", '-8deg'],
            ["style", "left", '63px'],
            ["style", "font-size", '76px']
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
      font: ['acme, sans-serif',18,'rgba(0,0,0,1)','100','none','normal'],
      type: 'text',
      id: 'Text13',
      text: 'もどる',
      align: 'left',
      rect: ['33px','11px','106px','42px','auto','auto']
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
         "${_Text13}": [
            ["style", "left", '33px'],
            ["style", "top", '11px']
         ],
         "${symbolSelector}": [
            ["style", "height", '53px'],
            ["style", "width", '129px']
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
      rect: ['0px','0px','134px','78px','auto','auto'],
      id: 'Rectangle3',
      stroke: [1,'rgb(0, 0, 0)','dashed'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['13px','13px','108px','80px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',19,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text4',
      text: 'ゲーム選択画面へ戻る',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '78px'],
            ["style", "border-style", 'dashed'],
            ["style", "border-width", '1px'],
            ["style", "width", '134px']
         ],
         "${symbolSelector}": [
            ["style", "height", '93px'],
            ["style", "width", '136px']
         ],
         "${_Text4}": [
            ["style", "top", '13px'],
            ["style", "height", '80px'],
            ["style", "width", '108px'],
            ["style", "left", '13px'],
            ["style", "font-size", '19px']
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
})(jQuery, AdobeEdge, "EDGE-5400110");
