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
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'mondai2',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'time_1',
            type:'rect',
            rect:['106px','209px','auto','auto','auto','auto'],
            transform:[[],[],[],['1.25','1.205']]
         },
         {
            id:'Symbol_1',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'time',
            type:'rect',
            rect:['105px','209px','auto','auto','auto','auto'],
            transform:[[],[],[],['1.244','1.199']]
         }],
         symbolInstances: [
         {
            id:'time',
            symbolName:'time'
         },
         {
            id:'time_1',
            symbolName:'time_1'
         },
         {
            id:'Symbol_1',
            symbolName:'Symbol_1'
         },
         {
            id:'mondai2',
            symbolName:'mondai2'
         }
         ]
      },
   states: {
      "Base State": {
         "${_mondai2}": [
            ["style", "top", '-12px'],
            ["transform", "scaleY", '0.99394'],
            ["style", "left", '-2px'],
            ["transform", "scaleX", '0.995']
         ],
         "${_time_1}": [
            ["transform", "scaleX", '1.25'],
            ["style", "top", '209px'],
            ["style", "left", '106px'],
            ["transform", "scaleY", '1.20513']
         ],
         "${_time}": [
            ["style", "top", '209px'],
            ["transform", "scaleY", '1.19872'],
            ["transform", "scaleX", '1.24444'],
            ["style", "left", '105px'],
            ["style", "display", 'block']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '640px'],
            ["style", "height", '960px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '11px'],
            ["style", "width", '209px'],
            ["style", "cursor", 'pointer'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "height", '86px'],
            ["style", "left", '0px'],
            ["style", "font-size", '32px']
         ],
         "${_Symbol_1}": [
            ["style", "top", '1px'],
            ["style", "left", '4px'],
            ["transform", "scaleY", '1.03'],
            ["transform", "scaleX", '1.01']
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
            { id: "eid446", tween: [ "style", "${_mondai2}", "top", '-12px', { fromValue: '-12px'}], position: 0, duration: 0 },
            { id: "eid186", tween: [ "style", "${_time}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid448", tween: [ "transform", "${_mondai2}", "scaleX", '0.995', { fromValue: '0.995'}], position: 0, duration: 0 },
            { id: "eid449", tween: [ "transform", "${_mondai2}", "scaleY", '0.99394', { fromValue: '0.99394'}], position: 0, duration: 0 },
            { id: "eid564", tween: [ "transform", "${_Symbol_1}", "scaleY", '1.03', { fromValue: '1.03'}], position: 0, duration: 0 },
            { id: "eid566", tween: [ "transform", "${_Symbol_1}", "scaleX", '1.01', { fromValue: '1.01'}], position: 0, duration: 0 },
            { id: "eid567", tween: [ "style", "${_Symbol_1}", "left", '4px', { fromValue: '4px'}], position: 0, duration: 0 },
            { id: "eid565", tween: [ "style", "${_Symbol_1}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid447", tween: [ "style", "${_mondai2}", "left", '-2px', { fromValue: '-2px'}], position: 0, duration: 0 }         ]
      }
   }
},
"start": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group6',
      type: 'group',
      rect: ['0','0','290','100','auto','auto'],
      c: [
      {
         rect: ['0px','0px','254px','98px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'dore_sikakuCopy',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'rect',
         fill: ['rgba(252,0,0,1.00)']
      },
      {
         type: 'text',
         rect: ['0px','17px','290px','65px','auto','auto'],
         align: 'center',
         id: 'doerCopy',
         text: 'スタート',
         textShadow: ['rgba(0,0,0,0.65)',2,2,2],
         font: ['\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace',60,'rgba(247,255,0,1.00)','normal','none','']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_dore_sikakuCopy}": [
            ["color", "background-color", 'rgba(252,0,0,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '288px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "height", '98px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-width", '1px']
         ],
         "${_doerCopy}": [
            ["subproperty", "textShadow.blur", '2px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["color", "color", 'rgba(247,255,0,1)'],
            ["subproperty", "textShadow.offsetV", '2px'],
            ["style", "left", '0px'],
            ["style", "width", '290px'],
            ["style", "top", '17px'],
            ["style", "text-align", 'center'],
            ["style", "height", '65px'],
            ["style", "font-family", 'Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "font-size", '60px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '290px']
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
"dore": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','254px','98px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'dore_sikaku',
      stroke: [1,'rgba(0,0,0,1)','solid'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['9px','22px','290px','28px','auto','auto'],
      font: ['\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace',30,'rgba(247,255,0,1.00)','normal','none',''],
      id: 'doer',
      text: 'お金２まいで　 円にしてね',
      textShadow: ['rgba(0,0,0,0.65)',2,2,2],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_doer}": [
            ["subproperty", "textShadow.blur", '2px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["color", "color", 'rgba(247,255,0,1.00)'],
            ["subproperty", "textShadow.offsetV", '2px'],
            ["style", "left", '9px'],
            ["style", "width", '290px'],
            ["style", "top", '22px'],
            ["style", "height", '28px'],
            ["style", "font-family", '\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace'],
            ["style", "font-size", '30px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_dore_sikaku}": [
            ["color", "background-color", 'rgba(159,171,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-style", 'solid'],
            ["style", "left", '9px'],
            ["style", "width", '288px'],
            ["style", "top", '0px'],
            ["style", "border-width", '1px'],
            ["style", "height", '98px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '334px']
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
            { id: "eid2", tween: [ "color", "${_dore_sikaku}", "background-color", 'rgba(159,171,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(159,171,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid622", tween: [ "style", "${_dore_sikaku}", "left", '9px', { fromValue: '9px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_dore_sikaku}", "width", '288px', { fromValue: '288px'}], position: 0, duration: 0 }         ]
      }
   }
},
"time": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['10px','30px','auto','auto','auto','auto'],
      align: 'right',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',32,'rgba(247,247,247,1.00)','normal','none',''],
      id: 'time_txt',
      type: 'text'
   },
   {
      rect: ['0px','0px','auto','auto','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text2',
      text: 'TIME',
      display: 'none',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_time_txt}": [
            ["style", "top", '30px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(247,247,247,1.00)'],
            ["style", "left", '10px'],
            ["style", "font-size", '32px']
         ],
         "${_Text2}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
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
            { id: "eid303", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"Symbol_1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: '_bro',
      type: 'image',
      rect: ['-3px','0px','800px','600px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/conbini1-640.jpg','0px','0px']
   },
   {
      id: 'dore2',
      type: 'rect',
      transform: [[],[],[],['0.928']],
      rect: ['-6px','46px','auto','auto','auto','auto']
   },
   {
      rect: ['168px','71px','44px','55px','auto','auto'],
      align: 'right',
      font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',33,'rgba(247,255,0,1)','normal','none','normal'],
      id: 'total_yen',
      type: 'text'
   },
   {
      id: 'money',
      type: 'group',
      rect: ['189px','460px','465','129','auto','auto'],
      c: [
      {
         rect: ['-21px','-1px','525px','161px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'yen_sikaku',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         type: 'rect',
         fill: ['rgba(255,170,247,1.00)']
      },
      {
         rect: ['344px','16px','130px','130px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/10yen.png','0px','0px'],
         id: '_10yen',
         type: 'image',
         cursor: ['pointer'],
         tag: 'img'
      },
      {
         rect: ['181px','16px','130px','130px','auto','auto'],
         id: '_5yen',
         type: 'image',
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/5yen.png','0px','0px']
      },
      {
         rect: ['16px','16px','130px','130px','auto','auto'],
         id: '_1yen',
         type: 'image',
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/1yen.png','0px','0px']
      }]
   },
   {
      id: 'wallet',
      type: 'image',
      rect: ['241px','52px','362px','391px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gama.gif','0px','0px']
   },
   {
      id: 'OK',
      type: 'rect',
      rect: ['608','301','auto','auto','auto','auto']
   },
   {
      rect: ['489px','37px','345','108','auto','auto'],
      id: 'norma',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['51px','0px','242px','106px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRect2',
         stroke: [1,'rgba(29,1,181,1.00)','solid'],
         type: 'rect',
         fill: ['rgba(130,159,244,1.00)']
      },
      {
         rect: ['-479px','93px','281px','44px','auto','auto'],
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',30,'rgba(223,255,0,0.19)','normal','none','normal'],
         id: 'norma1',
         text: '正解ノルマ<br> ５問',
         align: 'center',
         type: 'text'
      }]
   },
   {
      id: 'nokori',
      type: 'group',
      rect: ['367px','44px','260','55','auto','auto'],
      c: [
      {
         rect: ['0px','0px','256px','53px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRect3',
         stroke: [1,'rgb(29, 1, 181)','solid'],
         type: 'rect',
         fill: ['rgba(130,159,244,1)']
      },
      {
         rect: ['0px','-2px','258px','50px','auto','auto'],
         font: ['\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace',40,'rgba(223,255,0,1)','400','none','normal'],
         id: 'nokori1',
         text: '残り　　問',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['650px','48px','58px','55px','auto','auto'],
      font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',46,'rgba(223,255,0,1)','normal','none','normal'],
      id: 'mondaisu',
      text: '5<br>',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['330px','270px','80px','80px','auto','auto'],
      id: 'yen1',
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['445px','270px','80px','80px','auto','auto'],
      id: 'yen2',
      fill: ['rgba(0,0,0,0)','images/yen.png','0px','0px'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['571px','104px','209','97','auto','auto'],
      id: 'seikai',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['0px','0px','207px','95px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         type: 'rect',
         id: 'RoundRect',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         cursor: ['pointer'],
         fill: ['rgba(255,31,31,1.00)']
      },
      {
         textShadow: ['rgba(0,0,0,0.65)',3,3,3],
         rect: ['0px','11px','209px','86px','auto','auto'],
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',32,'rgba(255,255,255,1.00)','normal','none','normal'],
         align: 'center',
         id: 'Text3',
         text: 'せいかい！<br>次へ',
         cursor: ['pointer'],
         type: 'text'
      }]
   },
   {
      rect: ['571px','104px','209','97','auto','auto'],
      id: 'batu',
      display: 'none',
      type: 'group',
      c: [
      {
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         rect: ['0px','0px','207px','95px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         type: 'rect',
         id: 'RoundRectCopy',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         cursor: ['pointer'],
         fill: ['rgba(21,21,254,1.00)']
      },
      {
         rect: ['0px','11px','209px','86px','auto','auto'],
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',32,'rgba(255,255,255,1.00)','normal','none','normal'],
         align: 'center',
         id: 'Text3Copy',
         text: 'ざんねん<br>もう一度',
         cursor: ['pointer'],
         type: 'text'
      }]
   },
   {
      rect: ['36px','371px','205','75','auto','auto'],
      id: 'yarinaoshi',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','203px','73px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'Ellipse2',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         type: 'ellipse',
         fill: ['rgba(7,255,0,1.00)']
      },
      {
         rect: ['8px','20px','190px','55px','auto','auto'],
         align: 'center',
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',30,'rgba(255,255,255,1.00)','normal','none','normal'],
         id: 'naoshi',
         text: 'やりなおす',
         textShadow: ['rgba(0,0,0,0.65)',3,3,3],
         type: 'text'
      }]
   },
   {
      rect: ['0','1','797','599','auto','auto'],
      id: 'badresult',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['172px','119px','497px','378px','auto','auto'],
         borderRadius: ['45px 45px','45px 45px','45px 45px','45px 45px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'result1',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'rect',
         fill: ['rgba(235,255,165,1.00)']
      },
      {
         rect: ['431px','343px','61px','48px','auto','auto'],
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',50,'rgba(0,31,255,1)','normal','none','normal'],
         id: 'Text8',
         text: '問',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['349px','343px','73px','48px','auto','auto'],
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',50,'rgba(0,31,255,1)','normal','none','normal'],
         id: 'a',
         text: '1',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['228px','137px','389','96','auto','auto'],
         id: 'retry',
         cursor: ['pointer'],
         type: 'group',
         c: [
         {
            boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
            rect: ['0px','0px','387px','94px','auto','auto'],
            borderRadius: ['45px 45px','45px 45px','45px 45px','45px 45px'],
            type: 'rect',
            id: 'RoundRect4',
            stroke: [1,'rgb(0, 0, 0)','solid'],
            cursor: ['pointer'],
            fill: ['rgba(237,0,0,1.00)']
         },
         {
            rect: ['121px','25px','143px','44px','auto','auto'],
            font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',33,'rgba(237,237,237,1.00)','normal','none','normal'],
            id: 'Text5',
            text: 'リトライ',
            align: 'center',
            type: 'text'
         }]
      },
      {
         rect: ['312px','269px','220px','45px','auto','auto'],
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',33,'rgba(0,31,255,1.00)','normal','none','normal'],
         id: 'Text6',
         text: '正解トータル<br>',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['-4','0','808','599','auto','auto'],
      id: 'goodresult',
      display: 'none',
      type: 'group',
      c: [
      {
         transform: [[],[],[],['1.01']],
         rect: ['5px','0px','632px','963px','auto','auto'],
         borderRadius: ['0px','0px','0px','0px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'result1Copy',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'rect',
         fill: ['rgba(235,255,165,1.00)']
      },
      {
         rect: ['212px','133px','404px','100px','auto','auto'],
         id: 'next',
         transform: [[],[],[],['1.01']],
         cursor: ['pointer'],
         type: 'group',
         c: [
         {
            boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
            rect: ['-68px','0px','387px','94px','auto','auto'],
            borderRadius: ['45px 45px','45px 45px','45px 45px','45px 45px'],
            type: 'rect',
            id: 'RoundRect4Copy',
            stroke: [1,'rgb(0, 0, 0)','solid'],
            cursor: ['pointer'],
            fill: ['rgba(237,0,0,1.00)']
         },
         {
            rect: ['27px','26px','220px','44px','auto','auto'],
            font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',33,'rgba(237,237,237,1.00)','normal','none','normal'],
            id: 'Text5Copy',
            text: '次の難易度へ',
            align: 'center',
            type: 'text'
         }]
      },
      {
         rect: ['84px','391px','512px','118px','auto','auto'],
         transform: [[],[],[],['1.01']],
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',33,'rgba(0,31,255,1.00)','normal','none','normal'],
         id: 'Text6Copy',
         text: 'おめでとう!<br>ミッション成功',
         align: 'center',
         type: 'text'
      }]
   },
   {
      id: 'bg',
      type: 'group',
      rect: ['0px','1px','800px','608px','auto','auto'],
      c: [
      {
         rect: ['0px','-12px','650px','990px','auto','auto'],
         id: 'background',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['146px','280px','662px','452px','auto','auto'],
         transform: [[],[],[],['1.3','1.3']],
         id: 'okane_smako_traced_0821_22',
         type: 'image',
         clip: ['rect(0px 216px 452px -50px)'],
         fill: ['rgba(0,0,0,0)','images/okane_smako_traced_0821_22.svg','0px','0px']
      },
      {
         rect: ['-87px','245px','662px','452px','auto','auto'],
         transform: [[],[],[],['1.2','1.2']],
         id: 'okane_smako_traced_0821_22Copy',
         type: 'image',
         clip: ['rect(0px 666px 452px 382px)'],
         fill: ['rgba(0,0,0,0)','images/okane_smako_traced_0821_22.svg','0px','0px']
      },
      {
         rect: ['80px','93px','484px','112px','auto','auto'],
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',69,'rgba(19,19,19,1)','normal','none','normal'],
         id: 'Text2',
         text: 'お金ゲーム',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['146px','694px','346','136','auto','auto'],
      id: 'start3',
      transform: [[],[],[],['1.2','1.2']],
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','344px','134px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse3',
         stroke: [1,'rgba(255,255,0,1.00)','solid'],
         type: 'ellipse',
         fill: ['rgba(252,252,0,1.00)']
      },
      {
         rect: ['42px','42px','254px','46px','auto','auto'],
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',56,'rgba(19,19,19,1.00)','normal','none','normal'],
         id: 'Text',
         text: 'スタート',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['99','210','82','108','auto','auto'],
      id: 'time2',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['0px','0px','80px','106px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRect5',
         stroke: [1,'rgba(130,159,244,1.00)','solid'],
         type: 'rect',
         fill: ['rgba(130,159,244,1)']
      },
      {
         rect: ['2px','0px','80px','29px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,'rgba(249,249,249,1)','normal','none','normal'],
         id: 'time3',
         text: 'TIME',
         align: 'left',
         type: 'text'
      }]
   },
   {
      id: 'returnchose',
      type: 'rect',
      rect: ['533','544','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'OK',
      symbolName: 'OK'
   },
   {
      id: 'returnchose',
      symbolName: 'returnchose'
   },
   {
      id: 'dore2',
      symbolName: 'dore'
   }   ]
   },
   states: {
      "Base State": {
         "${_total_yen}": [
            ["style", "top", '81px'],
            ["style", "text-align", 'right'],
            ["style", "width", '58px'],
            ["style", "height", '75px'],
            ["color", "color", 'rgba(255,7,7,1.00)'],
            ["style", "left", '174px'],
            ["style", "font-size", '37px']
         ],
         "${_Ellipse2}": [
            ["color", "background-color", 'rgba(7,255,0,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '0px'],
            ["style", "width", '203px'],
            ["style", "top", '0px'],
            ["style", "height", '73px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_Text3Copy}": [
            ["style", "top", '11px'],
            ["style", "font-size", '32px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "height", '86px'],
            ["style", "left", '0px'],
            ["style", "width", '209px']
         ],
         "${_result1Copy}": [
            ["color", "background-color", 'rgba(235,255,165,1)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '1.01'],
            ["style", "border-style", 'solid'],
            ["style", "left", '5px'],
            ["style", "width", '632px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-width", '1px'],
            ["style", "height", '963px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_time3}": [
            ["style", "display", 'block'],
            ["style", "top", '0px'],
            ["style", "left", '2px'],
            ["style", "font-size", '30px']
         ],
         "${_Text8}": [
            ["style", "top", '366px'],
            ["style", "height", '76px'],
            ["style", "width", '98px'],
            ["style", "left", '313px'],
            ["style", "font-size", '50px']
         ],
         "${_Ellipse3}": [
            ["color", "background-color", 'rgba(252,252,0,1.00)'],
            ["color", "border-color", 'rgba(255,255,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RoundRect2}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(130,159,244,1.00)'],
            ["style", "height", '106px'],
            ["color", "border-color", 'rgba(29,1,181,1.00)'],
            ["style", "left", '51px'],
            ["style", "width", '242px']
         ],
         "${_RoundRect3}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_seikai}": [
            ["style", "top", '147px'],
            ["style", "left", '416px'],
            ["style", "display", 'none']
         ],
         "${_Text6Copy}": [
            ["style", "top", '391px'],
            ["style", "height", '118px'],
            ["color", "color", 'rgba(0,31,255,1)'],
            ["transform", "scaleX", '1.01'],
            ["style", "left", '84px'],
            ["style", "width", '512px']
         ],
         "${_start3}": [
            ["style", "top", '694px'],
            ["transform", "scaleY", '1.2'],
            ["transform", "scaleX", '1.2'],
            ["style", "left", '146px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text5Copy}": [
            ["style", "top", '26px'],
            ["style", "text-align", 'center'],
            ["style", "height", '44px'],
            ["color", "color", 'rgba(237,237,237,1)'],
            ["style", "left", '27px'],
            ["style", "width", '220px']
         ],
         "${_background}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '990px'],
            ["style", "top", '-12px'],
            ["style", "left", '0px'],
            ["style", "width", '650px']
         ],
         "${_next}": [
            ["style", "top", '133px'],
            ["transform", "scaleX", '1.01'],
            ["style", "height", '100px'],
            ["style", "left", '212px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '404px']
         ],
         "${_nokori1}": [
            ["style", "line-height", '49px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(223,255,0,1)'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", '400'],
            ["style", "left", '2px'],
            ["style", "width", '258px'],
            ["style", "top", '0px'],
            ["style", "font-style", 'normal'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'block'],
            ["style", "height", '46px'],
            ["style", "font-family", '\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace'],
            ["style", "text-decoration", 'none'],
            ["style", "font-size", '46px']
         ],
         "${_norma1}": [
            ["style", "top", '8px'],
            ["style", "font-size", '46px'],
            ["color", "color", 'rgba(243,243,0,1.00)'],
            ["style", "height", '98px'],
            ["style", "left", '0px'],
            ["style", "width", '345px']
         ],
         "${_RoundRect4Copy}": [
            ["color", "background-color", 'rgba(237,0,0,1)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "top", '0px'],
            ["style", "left", '-68px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "cursor", 'pointer']
         ],
         "${_batu}": [
            ["style", "top", '107px'],
            ["style", "opacity", '1'],
            ["style", "left", '413px'],
            ["style", "display", 'none']
         ],
         "${_wallet}": [
            ["style", "height", '391px'],
            ["style", "top", '178px'],
            ["style", "left", '142px'],
            ["style", "width", '362px']
         ],
         "${_Text2}": [
            ["style", "height", '112px'],
            ["style", "top", '93px'],
            ["style", "left", '80px'],
            ["style", "font-size", '69px']
         ],
         "${_yarinaoshi}": [
            ["style", "top", '803px'],
            ["style", "left", '8px'],
            ["style", "cursor", 'pointer']
         ],
         "${_yen1}": [
            ["style", "top", '409px'],
            ["transform", "scaleY", '1.3'],
            ["transform", "scaleX", '1.3'],
            ["style", "height", '80px'],
            ["style", "cursor", 'auto'],
            ["style", "left", '367px'],
            ["style", "width", '80px']
         ],
         "${_money}": [
            ["style", "display", 'block'],
            ["style", "left", '80px'],
            ["style", "top", '599px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,31,31,1.00)'],
            ["style", "height", '95px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_yen_sikaku}": [
            ["color", "background-color", 'rgba(255,170,247,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '-21px'],
            ["style", "width", '525px'],
            ["style", "top", '-1px'],
            ["style", "height", '161px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${__1yen}": [
            ["style", "top", '16px'],
            ["style", "height", '130px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '16px'],
            ["style", "width", '130px']
         ],
         "${_Text3}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '0px'],
            ["style", "font-size", '32px'],
            ["style", "top", '11px'],
            ["style", "height", '86px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '209px']
         ],
         "${__10yen}": [
            ["style", "top", '16px'],
            ["style", "height", '130px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '344px'],
            ["style", "width", '130px']
         ],
         "${_Text5}": [
            ["style", "top", '25px'],
            ["style", "text-align", 'center'],
            ["style", "height", '44px'],
            ["color", "color", 'rgba(237,237,237,1.00)'],
            ["style", "left", '121px'],
            ["style", "width", '143px']
         ],
         "${_goodresult}": [
            ["style", "display", 'none'],
            ["style", "top", '0px']
         ],
         "${_badresult}": [
            ["style", "display", 'none'],
            ["style", "top", '-5px'],
            ["style", "left", '1px'],
            ["style", "width", '797px']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(21,21,254,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '0px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '95px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "display", 'block']
         ],
         "${_result1}": [
            ["color", "background-color", 'rgba(235,255,165,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '638px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-width", '1px'],
            ["style", "height", '958px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '800px']
         ],
         "${_mondaisu}": [
            ["style", "top", '44px'],
            ["style", "display", 'block'],
            ["style", "cursor", 'auto'],
            ["style", "left", '511px']
         ],
         "${_returnchose}": [
            ["style", "top", '878px'],
            ["style", "left", '333px'],
            ["transform", "scaleY", '1.27991'],
            ["transform", "scaleX", '1']
         ],
         "${_bg}": [
            ["style", "top", '1px'],
            ["style", "height", '608px'],
            ["style", "left", '0px'],
            ["style", "width", '800px']
         ],
         "${_OK}": [
            ["style", "left", '432px'],
            ["style", "top", '769px']
         ],
         "${_retry}": [
            ["style", "top", '647px'],
            ["style", "height", '95px'],
            ["style", "display", 'block'],
            ["style", "left", '129px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '392px']
         ],
         "${_nokori}": [
            ["style", "top", '44px'],
            ["style", "left", '367px']
         ],
         "${_yen2}": [
            ["style", "top", '409px'],
            ["transform", "scaleY", '1.3'],
            ["style", "height", '80px'],
            ["transform", "scaleX", '1.3'],
            ["style", "left", '197px'],
            ["style", "width", '80px']
         ],
         "${_a}": [
            ["style", "top", '366px'],
            ["style", "height", '76px'],
            ["style", "left", '223px'],
            ["style", "width", '117px']
         ],
         "${_dore2}": [
            ["transform", "scaleX", '1.03593'],
            ["transform", "scaleY", '1.36'],
            ["style", "left", '13px'],
            ["style", "top", '67px']
         ],
         "${_okane_smako_traced_0821_22Copy}": [
            ["style", "top", '245px'],
            ["transform", "scaleY", '1.2'],
            ["transform", "scaleX", '1.2'],
            ["style", "height", '452px'],
            ["style", "left", '-87px'],
            ["style", "clip", [0,666,452,382], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '662px']
         ],
         "${_okane_smako_traced_0821_22}": [
            ["style", "top", '280px'],
            ["transform", "scaleY", '1.3'],
            ["transform", "scaleX", '1.3'],
            ["style", "height", '452px'],
            ["style", "clip", [0,216,452,-50], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '146px'],
            ["style", "width", '662px']
         ],
         "${_RoundRect4}": [
            ["color", "background-color", 'rgba(237,0,0,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "left", '0px']
         ],
         "${_Text6}": [
            ["style", "top", '250px'],
            ["color", "color", 'rgba(0,31,255,1.00)'],
            ["style", "height", '71px'],
            ["style", "left", '144px'],
            ["style", "width", '354px']
         ],
         "${_norma}": [
            ["style", "display", 'none'],
            ["style", "left", '304px'],
            ["style", "top", '25px']
         ],
         "${_Text}": [
            ["style", "top", '42px'],
            ["style", "width", '254px'],
            ["style", "height", '92px'],
            ["color", "color", 'rgba(19,19,19,1.00)'],
            ["style", "left", '42px'],
            ["style", "font-size", '56px']
         ],
         "${__5yen}": [
            ["style", "top", '16px'],
            ["style", "height", '130px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '181px'],
            ["style", "width", '130px']
         ],
         "${__bro}": [
            ["style", "top", '-11px'],
            ["style", "width", '652px'],
            ["style", "height", '968px'],
            ["style", "opacity", '1'],
            ["style", "left", '-7px'],
            ["subproperty", "filter.saturate", '0.63636363636364']
         ],
         "${_RoundRect5}": [
            ["style", "top", '0px'],
            ["style", "height", '106px'],
            ["color", "background-color", 'rgba(244,130,211,1.00)'],
            ["style", "display", 'block'],
            ["color", "border-color", 'rgba(130,159,244,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '80px']
         ],
         "${_time2}": [
            ["style", "display", 'none'],
            ["style", "left", '96px'],
            ["style", "top", '185px']
         ],
         "${_naoshi}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '8px'],
            ["style", "font-size", '30px'],
            ["style", "top", '20px'],
            ["style", "height", '55px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "width", '190px']
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
            "ラベル 1": 0
         },
         timeline: [
            { id: "eid523", tween: [ "style", "${_norma}", "left", '304px', { fromValue: '304px'}], position: 0, duration: 0 },
            { id: "eid224", tween: [ "style", "${_nokori1}", "letter-spacing", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid491", tween: [ "style", "${_goodresult}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid272", tween: [ "style", "${_nokori1}", "font-size", '46px', { fromValue: '46px'}], position: 0, duration: 0 },
            { id: "eid326", tween: [ "color", "${_RoundRect5}", "background-color", 'rgba(244,130,211,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(244,130,211,1.00)'}], position: 0, duration: 0 },
            { id: "eid618", tween: [ "style", "${_retry}", "top", '647px', { fromValue: '647px'}], position: 0, duration: 0 },
            { id: "eid294", tween: [ "style", "${_norma1}", "height", '98px', { fromValue: '98px'}], position: 0, duration: 0 },
            { id: "eid576", tween: [ "style", "${_total_yen}", "width", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
            { id: "eid472", tween: [ "style", "${__bro}", "height", '968px', { fromValue: '968px'}], position: 0, duration: 0 },
            { id: "eid473", tween: [ "style", "${_batu}", "left", '413px', { fromValue: '413px'}], position: 0, duration: 0 },
            { id: "eid324", tween: [ "style", "${_RoundRect5}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid346", tween: [ "style", "${_badresult}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid422", tween: [ "style", "${_returnchose}", "top", '878px', { fromValue: '878px'}], position: 0, duration: 0 },
            { id: "eid594", tween: [ "style", "${_time2}", "top", '185px', { fromValue: '185px'}], position: 0, duration: 0 },
            { id: "eid293", tween: [ "style", "${_norma1}", "font-size", '46px', { fromValue: '46px'}], position: 0, duration: 0 },
            { id: "eid487", tween: [ "style", "${_Text8}", "top", '366px', { fromValue: '366px'}], position: 0, duration: 0 },
            { id: "eid118", tween: [ "style", "${_result1}", "border-bottom-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid512", tween: [ "style", "${_yen1}", "left", '367px', { fromValue: '367px'}], position: 0, duration: 0 },
            { id: "eid402", tween: [ "style", "${_returnchose}", "left", '333px', { fromValue: '333px'}], position: 0, duration: 0 },
            { id: "eid43", tween: [ "style", "${_goodresult}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid395", tween: [ "transform", "${_returnchose}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid325", tween: [ "style", "${_time2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid275", tween: [ "style", "${_norma1}", "width", '345px', { fromValue: '345px'}], position: 0, duration: 0 },
            { id: "eid85", tween: [ "style", "${_Text6}", "width", '354px', { fromValue: '354px'}], position: 0, duration: 0 },
            { id: "eid585", tween: [ "style", "${_total_yen}", "top", '81px', { fromValue: '81px'}], position: 0, duration: 0 },
            { id: "eid534", tween: [ "style", "${_OK}", "top", '769px', { fromValue: '769px'}], position: 0, duration: 0 },
            { id: "eid34", tween: [ "style", "${_retry}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid115", tween: [ "style", "${_result1}", "border-bottom-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid486", tween: [ "style", "${_Text8}", "left", '313px', { fromValue: '313px'}], position: 0, duration: 0 },
            { id: "eid508", tween: [ "style", "${_yen2}", "top", '409px', { fromValue: '409px'}], position: 0, duration: 0 },
            { id: "eid492", tween: [ "style", "${_norma}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid254", tween: [ "style", "${_nokori1}", "width", '258px', { fromValue: '258px'}], position: 0, duration: 0 },
            { id: "eid505", tween: [ "style", "${_money}", "left", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid323", tween: [ "style", "${_nokori1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid616", tween: [ "style", "${_batu}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid482", tween: [ "style", "${_Text6}", "left", '144px', { fromValue: '144px'}], position: 0, duration: 0 },
            { id: "eid520", tween: [ "style", "${_yarinaoshi}", "left", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid117", tween: [ "style", "${_result1}", "border-top-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_money}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid483", tween: [ "style", "${_Text6}", "top", '250px', { fromValue: '250px'}], position: 0, duration: 0 },
            { id: "eid573", tween: [ "style", "${_dore2}", "top", '67px', { fromValue: '67px'}], position: 0, duration: 0 },
            { id: "eid537", tween: [ "style", "${_seikai}", "top", '147px', { fromValue: '147px'}], position: 0, duration: 0 },
            { id: "eid479", tween: [ "style", "${_badresult}", "left", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid540", tween: [ "style", "${_time2}", "left", '96px', { fromValue: '96px'}], position: 0, duration: 0 },
            { id: "eid116", tween: [ "style", "${_result1}", "border-top-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid488", tween: [ "style", "${_mondaisu}", "left", '511px', { fromValue: '511px'}], position: 0, duration: 0 },
            { id: "eid235", tween: [ "style", "${_nokori1}", "line-height", '49px', { fromValue: '49px'}], position: 0, duration: 0 },
            { id: "eid348", tween: [ "style", "${_batu}", "top", '107px', { fromValue: '107px'}], position: 0, duration: 0 },
            { id: "eid593", tween: [ "style", "${__bro}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid535", tween: [ "style", "${_OK}", "left", '432px', { fromValue: '432px'}], position: 0, duration: 0 },
            { id: "eid481", tween: [ "style", "${_badresult}", "top", '-5px', { fromValue: '-5px'}], position: 0, duration: 0 },
            { id: "eid24", tween: [ "style", "${_RoundRectCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid310", tween: [ "style", "${_retry}", "width", '392px', { fromValue: '392px'}], position: 0, duration: 0 },
            { id: "eid617", tween: [ "style", "${_retry}", "left", '129px', { fromValue: '129px'}], position: 0, duration: 0 },
            { id: "eid503", tween: [ "style", "${_wallet}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid315", tween: [ "style", "${__bro}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid506", tween: [ "style", "${_money}", "top", '599px', { fromValue: '599px'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_batu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid511", tween: [ "style", "${_yen2}", "left", '197px', { fromValue: '197px'}], position: 0, duration: 0 },
            { id: "eid211", tween: [ "color", "${_nokori1}", "color", 'rgba(223,255,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(223,255,0,1)'}], position: 0, duration: 0 },
            { id: "eid545", tween: [ "style", "${__bro}", "width", '652px', { fromValue: '652px'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_Text6}", "height", '71px', { fromValue: '71px'}], position: 0, duration: 0 },
            { id: "eid536", tween: [ "style", "${_seikai}", "left", '416px', { fromValue: '416px'}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "style", "${_seikai}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid317", tween: [ "style", "${_time3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid318", tween: [ "color", "${_norma1}", "color", 'rgba(243,243,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(243,243,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid606", tween: [ "transform", "${_yen2}", "scaleY", '1.3', { fromValue: '1.3'}], position: 0, duration: 0 },
            { id: "eid485", tween: [ "style", "${_a}", "top", '366px', { fromValue: '366px'}], position: 0, duration: 0 },
            { id: "eid575", tween: [ "style", "${_total_yen}", "height", '75px', { fromValue: '75px'}], position: 0, duration: 0 },
            { id: "eid352", tween: [ "style", "${_mondaisu}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid101", tween: [ "style", "${_result1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid571", tween: [ "transform", "${_dore2}", "scaleY", '1.36', { fromValue: '1.36'}], position: 0, duration: 0 },
            { id: "eid319", tween: [ "style", "${_norma1}", "top", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid84", tween: [ "style", "${_a}", "width", '117px', { fromValue: '117px'}], position: 0, duration: 0 },
            { id: "eid608", tween: [ "transform", "${_yen1}", "scaleY", '1.3', { fromValue: '1.3'}], position: 0, duration: 0 },
            { id: "eid478", tween: [ "style", "${_result1}", "height", '958px', { fromValue: '958px'}], position: 0, duration: 0 },
            { id: "eid311", tween: [ "style", "${_retry}", "height", '95px', { fromValue: '95px'}], position: 0, duration: 0 },
            { id: "eid476", tween: [ "style", "${_badresult}", "width", '797px', { fromValue: '797px'}], position: 0, duration: 0 },
            { id: "eid610", tween: [ "style", "${_total_yen}", "left", '174px', { fromValue: '174px'}], position: 0, duration: 0 },
            { id: "eid87", tween: [ "style", "${_Text8}", "width", '98px', { fromValue: '98px'}], position: 0, duration: 0 },
            { id: "eid607", tween: [ "transform", "${_yen1}", "scaleX", '1.3', { fromValue: '1.3'}], position: 0, duration: 0 },
            { id: "eid620", tween: [ "transform", "${_dore2}", "scaleX", '1.03593', { fromValue: '1.03593'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_Text8}", "height", '76px', { fromValue: '76px'}], position: 0, duration: 0 },
            { id: "eid26", tween: [ "color", "${_total_yen}", "color", 'rgba(255,7,7,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,7,7,1.00)'}], position: 0, duration: 0 },
            { id: "eid605", tween: [ "transform", "${_yen2}", "scaleX", '1.3', { fromValue: '1.3'}], position: 0, duration: 0 },
            { id: "eid504", tween: [ "style", "${_wallet}", "left", '142px', { fromValue: '142px'}], position: 0, duration: 0 },
            { id: "eid524", tween: [ "style", "${_norma}", "top", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
            { id: "eid273", tween: [ "style", "${_nokori1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid577", tween: [ "style", "${_total_yen}", "font-size", '37px', { fromValue: '37px'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid300", tween: [ "style", "${_norma1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid113", tween: [ "style", "${_result1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid489", tween: [ "style", "${_mondaisu}", "top", '44px', { fromValue: '44px'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_a}", "height", '76px', { fromValue: '76px'}], position: 0, duration: 0 },
            { id: "eid396", tween: [ "transform", "${_returnchose}", "scaleY", '1.27991', { fromValue: '1.27991'}], position: 0, duration: 0 },
            { id: "eid477", tween: [ "style", "${_result1}", "width", '638px', { fromValue: '638px'}], position: 0, duration: 0 },
            { id: "eid592", tween: [ "style", "${__bro}", "left", '-7px', { fromValue: '-7px'}], position: 0, duration: 0 },
            { id: "eid519", tween: [ "style", "${_yarinaoshi}", "top", '803px', { fromValue: '803px'}], position: 0, duration: 0 },
            { id: "eid509", tween: [ "style", "${_yen1}", "top", '409px', { fromValue: '409px'}], position: 0, duration: 0 },
            { id: "eid322", tween: [ "style", "${_nokori1}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
            { id: "eid267", tween: [ "transform", "${_nokori1}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid484", tween: [ "style", "${_a}", "left", '223px', { fromValue: '223px'}], position: 0, duration: 0 },
            { id: "eid621", tween: [ "style", "${_dore2}", "left", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
            { id: "eid268", tween: [ "transform", "${_nokori1}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid320", tween: [ "style", "${_nokori1}", "height", '46px', { fromValue: '46px'}], position: 0, duration: 0 },
            { id: "eid313", tween: [ "subproperty", "${__bro}", "filter.saturate", '0.63636363636364', { fromValue: '0.63636363636364'}], position: 0, duration: 0 }         ]
      }
   }
},
"mondai2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: '_bro',
      type: 'image',
      rect: ['0px','0px','638px','982px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/conbini1-640.jpg','0px','0px']
   },
   {
      id: 'norma',
      type: 'group',
      rect: ['360px','49px','296','105','auto','auto'],
      c: [
      {
         rect: ['26px','0px','244px','103px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRect6',
         stroke: [1,'rgb(130, 159, 244)','solid'],
         type: 'rect',
         fill: ['rgba(130,159,244,1.00)']
      },
      {
         type: 'text',
         rect: ['-502px','110px','296px','38px','auto','auto'],
         id: 'norma1',
         text: '正解ノルマ ６問',
         align: 'center',
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',30,'rgba(223,255,0,0.19)','normal','none','normal']
      }]
   },
   {
      id: 'dore',
      type: 'group',
      rect: ['5px','49px','334px','38px','auto','auto'],
      c: [
      {
         rect: ['0px','-7px','254px','98px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         fill: ['rgba(192,192,192,1)'],
         id: 'dore_sikaku',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'rect',
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         type: 'text',
         rect: ['9px','15px','307px','28px','auto','auto'],
         id: 'doer',
         text: 'お金３まいで　 円にしてね',
         textShadow: ['rgba(0,0,0,0.65)',2,2,2],
         font: ['\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace',35,'rgba(247,255,0,1.00)','500','none','']
      }]
   },
   {
      type: 'text',
      rect: ['185px','64px','44px','55px','auto','auto'],
      id: 'total_yen',
      text: '1',
      align: 'right',
      font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',33,'rgba(247,255,0,1)','normal','none','normal']
   },
   {
      id: 'money',
      type: 'group',
      rect: ['189px','460px','465','129','auto','auto'],
      c: [
      {
         rect: ['-68px','0px','531px','177px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         fill: ['rgba(255,170,247,1.00)'],
         id: 'yen_sikaku',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         type: 'rect',
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         transform: [[0,0],[],[],['1.3','1.3']],
         tag: 'img',
         rect: ['325px','40px','100px','100px','auto','auto'],
         id: '_10yen',
         type: 'image',
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/10yen2.png','0px','0px']
      },
      {
         type: 'image',
         rect: ['149px','40px','100px','100px','auto','auto'],
         id: '_5yen',
         transform: [[0,0],[],[],['1.3','1.3']],
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/5yen.png','0px','0px']
      },
      {
         type: 'image',
         rect: ['-18px','40px','100px','100px','auto','auto'],
         id: '_1yen',
         transform: [[0,0],[],[],['1.3','1.3']],
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/1yen2.png','0px','0px']
      }]
   },
   {
      id: 'Image3',
      type: 'image',
      rect: ['144px','194px','362px','391px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gama2.gif','0px','0px']
   },
   {
      id: 'OK',
      type: 'group',
      rect: ['451px','790px','160','120','auto','auto'],
      c: [
      {
         type: 'ellipse',
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         opacity: 0.6640625,
         cursor: ['pointer'],
         rect: ['0px','0px','158px','118px','auto','auto'],
         fill: ['rgba(159,171,255,1)'],
         stroke: [1,'rgb(0, 0, 0)','solid'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         type: 'text',
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',80,'rgba(247,255,0,1)','normal','none','normal'],
         cursor: ['pointer'],
         id: 'ok',
         align: 'center',
         text: 'OK',
         textShadow: ['rgba(0,0,0,0.65)',3,3,3],
         rect: ['0px','20px','160px','100px','auto','auto']
      }]
   },
   {
      type: 'image',
      tag: 'img',
      id: 'yen1',
      rect: ['392px','443px','80px','80px','auto','auto'],
      transform: [[0,0],[],[],['1.3','1.3']],
      fill: ['rgba(0,0,0,0)','images/yen2.png','0px','0px']
   },
   {
      type: 'image',
      tag: 'img',
      id: 'yen2',
      rect: ['187px','443px','80px','80px','auto','auto'],
      transform: [[0,0],[],[],['1.3','1.3']],
      fill: ['rgba(0,0,0,0)','images/yen2.png','0px','0px']
   },
   {
      type: 'image',
      tag: 'img',
      id: 'yen',
      rect: ['279px','318px','80px','80px','auto','auto'],
      transform: [[0,0],[],[],['1.3','1.3']],
      fill: ['rgba(0,0,0,0)','images/yen2.png','0px','0px']
   },
   {
      type: 'group',
      display: 'none',
      id: 'seikai',
      rect: ['571px','104px','209','97','auto','auto'],
      c: [
      {
         type: 'rect',
         borderRadius: ['10px','10px','10px','10px'],
         rect: ['0px','0px','207px','95px','auto','auto'],
         id: 'RoundRect',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         cursor: ['pointer'],
         fill: ['rgba(255,31,31,1.00)']
      },
      {
         type: 'text',
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',32,'rgba(255,255,255,1.00)','normal','none','normal'],
         cursor: ['pointer'],
         id: 'Text3',
         align: 'center',
         text: 'せいかい！<br>次へ',
         textShadow: ['rgba(0,0,0,0.65)',3,3,3],
         rect: ['0px','11px','209px','86px','auto','auto']
      }]
   },
   {
      type: 'group',
      display: 'none',
      id: 'batu',
      rect: ['571px','104px','209','97','auto','auto'],
      c: [
      {
         fill: ['rgba(21,21,254,1.00)'],
         rect: ['0px','0px','207px','95px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         type: 'rect',
         id: 'RoundRectCopy',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         cursor: ['pointer'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         type: 'text',
         rect: ['0px','11px','209px','86px','auto','auto'],
         align: 'center',
         id: 'Text3Copy',
         text: 'ざんねん<br>もう一度',
         cursor: ['pointer'],
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',32,'rgba(255,255,255,1.00)','normal','none','normal']
      }]
   },
   {
      type: 'group',
      id: 'yarinaoshi',
      cursor: ['pointer'],
      rect: ['47px','812px','205','75','auto','auto'],
      c: [
      {
         rect: ['0px','0px','203px','73px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         fill: ['rgba(7,255,0,1.00)'],
         id: 'Ellipse2',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         type: 'ellipse',
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         type: 'text',
         rect: ['8px','20px','190px','55px','auto','auto'],
         align: 'center',
         id: 'naoshi',
         text: 'やりなおす',
         textShadow: ['rgba(0,0,0,0.65)',3,3,3],
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',30,'rgba(255,255,255,1.00)','normal','none','normal']
      }]
   },
   {
      type: 'group',
      display: 'none',
      id: 'goodresult',
      rect: ['0','0','638','982','auto','auto'],
      c: [
      {
         rect: ['-10px','0px','652px','980px','auto','auto'],
         borderRadius: ['0px','0px','0px','0px'],
         fill: ['rgba(235,255,165,1.00)'],
         id: 'result1',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'rect',
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         type: 'text',
         rect: ['123px','164px','408px','272px','auto','auto'],
         id: 'Text6',
         text: 'おめでとう!<br>ミッション成功<br>おしまい',
         align: 'center',
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',50,'rgba(0,31,255,1.00)','500','none','italic']
      },
      {
         type: 'group',
         id: 'restart',
         cursor: ['pointer'],
         rect: ['126px','709px','329px','157px','auto','auto'],
         c: [
         {
            rect: ['0px','0px','412px','96px','auto','auto'],
            borderRadius: ['10px','10px','10px','10px'],
            id: 'RoundRect2',
            stroke: [0,'rgba(0,0,0,1)','none'],
            type: 'rect',
            fill: ['rgba(237,15,15,1.00)']
         },
         {
            type: 'text',
            rect: ['42px','16px','334px','55px','auto','auto'],
            id: 'Text2',
            text: 'もう一度挑戦する',
            align: 'left',
            font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(255,240,240,1.00)','normal','none','normal']
         }]
      }]
   },
   {
      type: 'group',
      display: 'none',
      id: 'badresult',
      rect: ['0px','0px','638','982','auto','auto'],
      c: [
      {
         rect: ['0px','0px','636px','980px','auto','auto'],
         borderRadius: ['0px','0px','0px','0px'],
         fill: ['rgba(235,255,165,1.00)'],
         id: 'result1Copy',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'rect',
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         type: 'text',
         rect: ['316px','264px','78px','124px','auto','auto'],
         id: 'Text8',
         text: '問',
         align: 'center',
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',50,'rgba(0,31,255,1)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['238px','264px','93px','124px','auto','auto'],
         id: 'a',
         text: '1',
         align: 'center',
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',50,'rgba(0,31,255,1)','normal','none','normal']
      },
      {
         type: 'group',
         id: 'retry',
         cursor: ['pointer'],
         rect: ['130px','712px','309px','156px','auto','auto'],
         c: [
         {
            fill: ['rgba(237,0,0,1.00)'],
            rect: ['0px','0px','387px','94px','auto','auto'],
            borderRadius: ['45px 45px','45px 45px','45px 45px','45px 45px'],
            type: 'rect',
            id: 'RoundRect4Copy',
            stroke: [1,'rgb(0, 0, 0)','solid'],
            cursor: ['pointer'],
            boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
         },
         {
            type: 'text',
            rect: ['121px','25px','143px','44px','auto','auto'],
            id: 'Text5Copy',
            text: 'リトライ',
            align: 'center',
            font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',33,'rgba(237,237,237,1.00)','normal','none','normal']
         }]
      },
      {
         type: 'text',
         rect: ['178px','198px','281px','116px','auto','auto'],
         id: 'Text6Copy',
         text: '正解トータル<br>',
         align: 'center',
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',33,'rgba(0,31,255,1.00)','normal','none','normal']
      }]
   },
   {
      rect: ['84px','194px','84px','117px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'timebg',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(244,130,211,1.00)']
   },
   {
      id: 'hajime2',
      type: 'rect',
      rect: ['2','1px','auto','auto','auto','auto']
   },
   {
      type: 'group',
      id: 'start2',
      rect: ['71px','424px','288px','87px','auto','auto'],
      cursor: ['pointer'],
      transform: [[0,0],[],[],['1.5','1.5']],
      c: [
      {
         rect: ['0px','-7px','231px','98px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         fill: ['rgba(252,0,0,1.00)'],
         id: 'dore_sikakuCopy',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'rect',
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         type: 'text',
         rect: ['0px','10px','233px','65px','auto','auto'],
         align: 'center',
         id: 'doerCopy',
         text: 'スタート',
         textShadow: ['rgba(0,0,0,0.65)',2,2,2],
         font: ['\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace',40,'rgba(247,255,0,1.00)','normal','none','']
      }]
   },
   {
      transform: [[0,0],[],[],['1.5','1.5']],
      rect: ['59px','421px','239px','89px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      type: 'rect',
      id: 'start',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(172,82,82,1.00)',[270,[['rgba(49,29,81,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
   },
   {
      type: 'group',
      display: 'none',
      id: 'nokori',
      rect: ['518','31px','276','72','auto','auto'],
      c: [
      {
         rect: ['10px','0px','258px','61px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRect7',
         stroke: [1,'rgb(130, 159, 244)','solid'],
         type: 'rect',
         fill: ['rgba(130,159,244,1)']
      },
      {
         type: 'text',
         rect: ['-510px','111px','276px','65px','auto','auto'],
         id: 'nokori1',
         text: '残り　　問',
         align: 'center',
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',45,'rgba(223,255,0,1)','normal','none','normal']
      }]
   },
   {
      type: 'text',
      rect: ['155px','156px','60px','55px','auto','auto'],
      display: 'none',
      id: 'mondaisu',
      text: '6<br>',
      align: 'center',
      font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',45,'rgba(223,255,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   {
      id: 'hajime2',
      symbolName: 'hajime2'
   }   ]
   },
   states: {
      "Base State": {
         "${_total_yen}": [
            ["style", "top", '64px'],
            ["style", "text-align", 'right'],
            ["style", "width", '44px'],
            ["style", "height", '55px'],
            ["color", "color", 'rgba(255,7,7,1.00)'],
            ["style", "left", '221px'],
            ["style", "font-size", '37px']
         ],
         "${_Ellipse2}": [
            ["color", "background-color", 'rgba(7,255,0,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '0px'],
            ["style", "width", '203px'],
            ["style", "top", '0px'],
            ["style", "height", '73px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_yen2}": [
            ["style", "top", '443px'],
            ["transform", "scaleY", '1.3'],
            ["style", "height", '80px'],
            ["transform", "scaleX", '1.3'],
            ["style", "left", '187px'],
            ["style", "width", '80px']
         ],
         "${_result1Copy}": [
            ["color", "background-color", 'rgba(235,255,165,1)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '636px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-width", '1px'],
            ["style", "height", '980px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_doer}": [
            ["subproperty", "textShadow.blur", '2px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["color", "color", 'rgba(247,255,0,1.00)'],
            ["subproperty", "textShadow.offsetV", '2px'],
            ["style", "left", '9px'],
            ["style", "width", '307px'],
            ["style", "top", '15px'],
            ["style", "font-weight", '500'],
            ["style", "height", '28px'],
            ["style", "font-family", '\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace'],
            ["style", "font-size", '35px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_Text8}": [
            ["style", "top", '264px'],
            ["style", "height", '124px'],
            ["style", "font-size", '50px'],
            ["style", "left", '316px'],
            ["style", "width", '78px']
         ],
         "${_start}": [
            ["color", "background-color", 'rgba(172,82,82,1.00)'],
            ["transform", "scaleX", '1.5'],
            ["style", "opacity", '0'],
            ["style", "left", '59px'],
            ["style", "width", '239px'],
            ["style", "top", '421px'],
            ["transform", "scaleY", '1.5'],
            ["style", "height", '89px'],
            ["gradient", "background-image", [270,[['rgba(49,29,81,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "cursor", 'pointer']
         ],
         "${_timebg}": [
            ["style", "top", '197px'],
            ["style", "height", '117px'],
            ["style", "display", 'block'],
            ["style", "left", '94px'],
            ["style", "width", '84px']
         ],
         "${_dore_sikakuCopy}": [
            ["color", "background-color", 'rgba(252,0,0,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '231px'],
            ["style", "top", '-7px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '98px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-width", '1px']
         ],
         "${_RoundRect6}": [
            ["style", "left", '26px'],
            ["style", "top", '0px']
         ],
         "${_seikai}": [
            ["style", "top", '184px'],
            ["style", "left", '417px'],
            ["style", "display", 'none']
         ],
         "${_Text6Copy}": [
            ["style", "top", '198px'],
            ["style", "height", '116px'],
            ["color", "color", 'rgba(0,31,255,1)'],
            ["style", "left", '178px'],
            ["style", "width", '281px']
         ],
         "${_Text5Copy}": [
            ["style", "top", '25px'],
            ["style", "text-align", 'center'],
            ["style", "height", '44px'],
            ["color", "color", 'rgba(237,237,237,1)'],
            ["style", "left", '121px'],
            ["style", "width", '143px']
         ],
         "${_naoshi}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '8px'],
            ["style", "font-size", '30px'],
            ["style", "top", '20px'],
            ["style", "height", '55px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "width", '190px']
         ],
         "${_ok}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '0px'],
            ["style", "font-size", '80px'],
            ["style", "top", '20px'],
            ["style", "text-align", 'center'],
            ["style", "height", '100px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '160px']
         ],
         "${_norma1}": [
            ["style", "top", '4px'],
            ["style", "font-size", '45px'],
            ["color", "color", 'rgba(223,255,0,1.00)'],
            ["style", "height", '38px'],
            ["style", "left", '0px'],
            ["style", "width", '296px']
         ],
         "${_RoundRect4Copy}": [
            ["color", "background-color", 'rgba(237,0,0,1)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Ellipse}": [
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '158px'],
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "overflow", 'visible'],
            ["style", "height", '118px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_RoundRect7}": [
            ["style", "height", '61px'],
            ["style", "top", '0px'],
            ["style", "left", '10px'],
            ["style", "width", '258px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,31,31,1.00)'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '0px']
         ],
         "${_yarinaoshi}": [
            ["style", "top", '812px'],
            ["style", "left", '47px'],
            ["style", "cursor", 'pointer']
         ],
         "${_yen1}": [
            ["style", "top", '443px'],
            ["transform", "scaleY", '1.3'],
            ["transform", "scaleX", '1.3'],
            ["style", "height", '80px'],
            ["style", "cursor", 'auto'],
            ["style", "left", '392px'],
            ["style", "width", '80px']
         ],
         "${_batu}": [
            ["style", "top", '162px'],
            ["style", "left", '417px'],
            ["style", "display", 'none']
         ],
         "${_hajime2}": [
            ["style", "top", '7px'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '1.02341']
         ],
         "${__5yen}": [
            ["style", "top", '40px'],
            ["transform", "scaleY", '1.3'],
            ["transform", "scaleX", '1.3'],
            ["style", "height", '100px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '149px'],
            ["style", "width", '100px']
         ],
         "${__1yen}": [
            ["style", "top", '40px'],
            ["transform", "scaleY", '1.3'],
            ["transform", "scaleX", '1.3'],
            ["style", "height", '100px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '-18px'],
            ["style", "width", '100px']
         ],
         "${_Text3}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '0px'],
            ["style", "font-size", '32px'],
            ["style", "top", '11px'],
            ["style", "height", '86px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '209px']
         ],
         "${_Text2}": [
            ["style", "top", '16px'],
            ["color", "color", 'rgba(255,240,240,1.00)'],
            ["style", "left", '42px'],
            ["style", "font-size", '40px']
         ],
         "${__10yen}": [
            ["style", "top", '40px'],
            ["transform", "scaleY", '1.3'],
            ["transform", "scaleX", '1.3'],
            ["style", "height", '100px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '325px'],
            ["style", "width", '100px']
         ],
         "${_goodresult}": [
            ["style", "display", 'none']
         ],
         "${_badresult}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_yen}": [
            ["style", "top", '318px'],
            ["transform", "scaleY", '1.3'],
            ["style", "height", '80px'],
            ["transform", "scaleX", '1.3'],
            ["style", "left", '279px'],
            ["style", "width", '80px']
         ],
         "${_result1}": [
            ["color", "background-color", 'rgba(235,255,165,1)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "left", '-10px'],
            ["style", "width", '652px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "border-width", '1px'],
            ["style", "height", '980px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_dore_sikaku}": [
            ["color", "background-color", 'rgba(159,171,255,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '324px'],
            ["style", "top", '-7px'],
            ["style", "border-width", '1px'],
            ["style", "height", '118px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_mondaisu}": [
            ["style", "top", '50px'],
            ["style", "left", '501px'],
            ["style", "display", 'none']
         ],
         "${_doerCopy}": [
            ["subproperty", "textShadow.blur", '2px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["color", "color", 'rgba(247,255,0,1)'],
            ["subproperty", "textShadow.offsetV", '2px'],
            ["style", "left", '0px'],
            ["style", "width", '233px'],
            ["style", "top", '10px'],
            ["style", "text-align", 'center'],
            ["style", "height", '65px'],
            ["style", "font-family", 'Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "font-size", '40px']
         ],
         "${_Text6}": [
            ["color", "color", 'rgba(0,31,255,1)'],
            ["style", "font-weight", '500'],
            ["style", "left", '123px'],
            ["style", "width", '408px'],
            ["style", "top", '164px'],
            ["style", "font-style", 'italic'],
            ["style", "font-size", '50px'],
            ["style", "text-decoration", 'none'],
            ["style", "height", '272px']
         ],
         "${_restart}": [
            ["style", "top", '709px'],
            ["style", "height", '157px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '126px'],
            ["style", "width", '329px']
         ],
         "${_retry}": [
            ["style", "top", '712px'],
            ["style", "height", '156px'],
            ["style", "display", 'block'],
            ["style", "left", '130px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '309px']
         ],
         "${_norma}": [
            ["style", "left", '360px'],
            ["style", "top", '49px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '11px'],
            ["style", "font-size", '32px'],
            ["style", "cursor", 'pointer'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "height", '86px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '209px']
         ],
         "${_a}": [
            ["style", "height", '124px'],
            ["style", "top", '264px'],
            ["style", "left", '238px'],
            ["style", "width", '93px']
         ],
         "${symbolSelector}": [
            ["style", "height", '932px'],
            ["style", "width", '638px']
         ],
         "${_dore}": [
            ["style", "top", '49px'],
            ["style", "height", '38px'],
            ["style", "-webkit-transform-origin", [49,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '5px'],
            ["style", "width", '334px']
         ],
         "${_nokori}": [
            ["style", "display", 'none'],
            ["style", "left", '364px'],
            ["style", "top", '42px']
         ],
         "${_OK}": [
            ["style", "top", '790px'],
            ["style", "left", '451px']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(21,21,254,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '0px'],
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "display", 'block'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "height", '95px']
         ],
         "${_Image3}": [
            ["style", "height", '391px'],
            ["style", "top", '194px'],
            ["style", "left", '144px'],
            ["style", "width", '362px']
         ],
         "${_money}": [
            ["style", "display", 'block'],
            ["style", "left", '127px'],
            ["style", "top", '600px']
         ],
         "${_yen_sikaku}": [
            ["color", "background-color", 'rgba(255,170,247,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '-68px'],
            ["style", "width", '531px'],
            ["style", "top", '0px'],
            ["style", "height", '177px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${__bro}": [
            ["style", "height", '982px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '638px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(237,15,15,1.00)'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_nokori1}": [
            ["style", "top", '7px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_start2}": [
            ["style", "-webkit-transform-origin", [49,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '424px'],
            ["transform", "scaleY", '1.5'],
            ["style", "left", '71px'],
            ["transform", "scaleX", '1.5'],
            ["style", "height", '87px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '288px']
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
            { id: "eid555", tween: [ "style", "${_timebg}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid546", tween: [ "style", "${_nokori}", "left", '364px', { fromValue: '364px'}], position: 0, duration: 0 },
            { id: "eid619", tween: [ "style", "${_dore_sikaku}", "width", '324px', { fromValue: '324px'}], position: 0, duration: 0 },
            { id: "eid604", tween: [ "style", "${_batu}", "top", '162px', { fromValue: '162px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "color", "${_dore_sikaku}", "background-color", 'rgba(159,171,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(159,171,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid337", tween: [ "style", "${_nokori}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_batu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid603", tween: [ "style", "${_batu}", "left", '417px', { fromValue: '417px'}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "style", "${_seikai}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid612", tween: [ "style", "${_timebg}", "top", '197px', { fromValue: '197px'}], position: 0, duration: 0 },
            { id: "eid413", tween: [ "style", "${_hajime2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid24", tween: [ "style", "${_RoundRectCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid308", tween: [ "style", "${_mondaisu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid547", tween: [ "style", "${_nokori}", "top", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
            { id: "eid559", tween: [ "style", "${_seikai}", "left", '417px', { fromValue: '417px'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_dore_sikaku}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid185", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid26", tween: [ "color", "${_total_yen}", "color", 'rgba(255,7,7,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,7,7,1.00)'}], position: 0, duration: 0 },
            { id: "eid306", tween: [ "style", "${_norma1}", "font-size", '45px', { fromValue: '45px'}], position: 0, duration: 0 },
            { id: "eid614", tween: [ "style", "${_timebg}", "left", '94px', { fromValue: '94px'}], position: 0, duration: 0 },
            { id: "eid595", tween: [ "style", "${_dore_sikaku}", "height", '118px', { fromValue: '118px'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid599", tween: [ "style", "${_total_yen}", "font-size", '37px', { fromValue: '37px'}], position: 0, duration: 0 },
            { id: "eid601", tween: [ "style", "${_money}", "top", '600px', { fromValue: '600px'}], position: 0, duration: 0 },
            { id: "eid304", tween: [ "style", "${_norma1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid548", tween: [ "transform", "${_hajime2}", "scaleY", '1.02341', { fromValue: '1.02341'}], position: 0, duration: 0 },
            { id: "eid554", tween: [ "style", "${_mondaisu}", "top", '50px', { fromValue: '50px'}], position: 0, duration: 0 },
            { id: "eid600", tween: [ "style", "${_money}", "left", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
            { id: "eid602", tween: [ "style", "${_total_yen}", "left", '221px', { fromValue: '221px'}], position: 0, duration: 0 },
            { id: "eid553", tween: [ "style", "${_mondaisu}", "left", '501px', { fromValue: '501px'}], position: 0, duration: 0 },
            { id: "eid329", tween: [ "style", "${_nokori1}", "top", '7px', { fromValue: '7px'}], position: 0, duration: 0 },
            { id: "eid549", tween: [ "style", "${_hajime2}", "top", '7px', { fromValue: '7px'}], position: 0, duration: 0 },
            { id: "eid439", tween: [ "style", "${_goodresult}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid330", tween: [ "style", "${_nokori1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "color", "${_norma1}", "color", 'rgba(223,255,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(223,255,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid307", tween: [ "style", "${_nokori1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_money}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid305", tween: [ "style", "${_norma1}", "top", '4px', { fromValue: '4px'}], position: 0, duration: 0 },
            { id: "eid438", tween: [ "style", "${_badresult}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid558", tween: [ "style", "${_seikai}", "top", '184px', { fromValue: '184px'}], position: 0, duration: 0 }         ]
      }
   }
},
"mondai2_1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: '_bro',
      type: 'image',
      rect: ['0px','0px','800px','600px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/%E3%83%9E%E3%83%AA%E3%82%AAbro3.gif','0px','0px']
   },
   {
      id: 'dore',
      type: 'group',
      rect: ['5px','75px','334px','38px','auto','auto'],
      c: [
      {
         rect: ['0px','-7px','254px','98px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'dore_sikaku',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'rect',
         fill: ['rgba(192,192,192,1)']
      },
      {
         type: 'text',
         rect: ['9px','15px','290px','28px','auto','auto'],
         id: 'doer',
         text: 'お金３まいで　円にしてね',
         textShadow: ['rgba(0,0,0,0.65)',2,2,2],
         font: ['\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace',30,'rgba(247,255,0,1.00)','normal','none','']
      }]
   },
   {
      rect: ['5px','75px','334px','38px','auto','auto'],
      id: 'start',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','-7px','254px','98px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'dore_sikakuCopy',
         stroke: [1,'rgba(0,0,0,1)','solid'],
         type: 'rect',
         fill: ['rgba(252,0,0,1.00)']
      },
      {
         type: 'text',
         rect: ['0px','10px','290px','65px','auto','auto'],
         align: 'center',
         id: 'doerCopy',
         text: 'スタート',
         textShadow: ['rgba(0,0,0,0.65)',2,2,2],
         font: ['\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace',60,'rgba(247,255,0,1.00)','normal','none','']
      }]
   },
   {
      type: 'text',
      rect: ['183px','90px','44px','55px','auto','auto'],
      id: 'total_yen',
      text: '1',
      align: 'right',
      font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',33,'rgba(247,255,0,1)','normal','none','normal']
   },
   {
      rect: ['189px','460px','465','129','auto','auto'],
      id: 'money',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['16px','0px','447px','127px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'yen_sikaku',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         type: 'rect',
         fill: ['rgba(255,170,247,1.00)']
      },
      {
         rect: ['352px','15px','100px','100px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/10yen3.png','0px','0px'],
         id: '_10yen',
         type: 'image',
         cursor: ['pointer'],
         tag: 'img'
      },
      {
         rect: ['191px','15px','100px','100px','auto','auto'],
         id: '_5yen',
         type: 'image',
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/%EF%BC%95%E5%86%86%E7%8E%893.png','0px','0px']
      },
      {
         rect: ['28px','15px','100px','100px','auto','auto'],
         id: '_1yen',
         type: 'image',
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/1yen3.png','0px','0px']
      }]
   },
   {
      id: 'Image3',
      type: 'image',
      rect: ['241px','52px','362px','391px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/%E3%81%8C%E3%81%BE%E5%8F%A33.gif','0px','0px']
   },
   {
      id: 'OK',
      type: 'group',
      rect: ['603px','300px','160','120','auto','auto'],
      c: [
      {
         type: 'ellipse',
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         opacity: 0.6640625,
         cursor: ['pointer'],
         rect: ['0px','0px','158px','118px','auto','auto'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         stroke: [1,'rgb(0, 0, 0)','solid'],
         fill: ['rgba(159,171,255,1)']
      },
      {
         rect: ['0px','15px','160px','105px','auto','auto'],
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',80,'rgba(247,255,0,1)','normal','none','normal'],
         textShadow: ['rgba(0,0,0,0.65)',3,3,3],
         align: 'center',
         id: 'ok',
         text: 'OK',
         cursor: ['pointer'],
         type: 'text'
      }]
   },
   {
      rect: ['299px','270px','80px','80px','auto','auto'],
      id: 'yen1',
      fill: ['rgba(0,0,0,0)','images/yen3.png','0px','0px'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['462px','270px','80px','80px','auto','auto'],
      id: 'yen2',
      fill: ['rgba(0,0,0,0)','images/yen3.png','0px','0px'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['382px','348px','80px','80px','auto','auto'],
      id: 'yen',
      fill: ['rgba(0,0,0,0)','images/yen3.png','0px','0px'],
      type: 'image',
      tag: 'img'
   },
   {
      rect: ['571px','104px','209','97','auto','auto'],
      id: 'seikai',
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['0px','0px','207px','95px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         type: 'rect',
         id: 'RoundRect',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         cursor: ['pointer'],
         fill: ['rgba(255,31,31,1.00)']
      },
      {
         rect: ['0px','11px','209px','86px','auto','auto'],
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',32,'rgba(255,255,255,1.00)','normal','none','normal'],
         textShadow: ['rgba(0,0,0,0.65)',3,3,3],
         align: 'center',
         id: 'Text3',
         text: 'せいかい！<br>次へ',
         cursor: ['pointer'],
         type: 'text'
      }]
   },
   {
      rect: ['571px','104px','209','97','auto','auto'],
      id: 'batu',
      display: 'none',
      type: 'group',
      c: [
      {
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         rect: ['0px','0px','207px','95px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         type: 'rect',
         id: 'RoundRectCopy',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         cursor: ['pointer'],
         fill: ['rgba(21,21,254,1.00)']
      },
      {
         type: 'text',
         rect: ['0px','11px','209px','86px','auto','auto'],
         align: 'center',
         id: 'Text3Copy',
         text: 'ざんねん<br>もう一度',
         cursor: ['pointer'],
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',32,'rgba(255,255,255,1.00)','normal','none','normal']
      }]
   },
   {
      rect: ['36px','368px','205','75','auto','auto'],
      id: 'yarinaoshi',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','0px','203px','73px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'Ellipse2',
         stroke: [1,'rgb(0, 0, 0)','solid'],
         type: 'ellipse',
         fill: ['rgba(7,255,0,1.00)']
      },
      {
         type: 'text',
         rect: ['8px','20px','190px','55px','auto','auto'],
         align: 'center',
         id: 'naoshi',
         text: 'やりなおす',
         textShadow: ['rgba(0,0,0,0.65)',3,3,3],
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',30,'rgba(255,255,255,1.00)','normal','none','normal']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_total_yen}": [
            ["style", "top", '90px'],
            ["style", "text-align", 'right'],
            ["style", "width", '44px'],
            ["style", "height", '55px'],
            ["color", "color", 'rgba(255,7,7,1.00)'],
            ["style", "left", '183px'],
            ["style", "font-size", '33px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,31,31,1.00)'],
            ["style", "height", '95px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '0px']
         ],
         "${_yen2}": [
            ["style", "top", '270px'],
            ["style", "height", '80px'],
            ["style", "left", '462px'],
            ["style", "width", '80px']
         ],
         "${__1yen}": [
            ["style", "top", '15px'],
            ["style", "height", '100px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '28px'],
            ["style", "width", '100px']
         ],
         "${_Text3}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '0px'],
            ["style", "font-size", '32px'],
            ["style", "top", '11px'],
            ["style", "height", '86px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '209px']
         ],
         "${_doer}": [
            ["subproperty", "textShadow.blur", '2px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["color", "color", 'rgba(247,255,0,1.00)'],
            ["subproperty", "textShadow.offsetV", '2px'],
            ["style", "left", '9px'],
            ["style", "width", '290px'],
            ["style", "top", '15px'],
            ["style", "height", '28px'],
            ["style", "font-family", '\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace'],
            ["style", "font-size", '30px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_doerCopy}": [
            ["subproperty", "textShadow.blur", '2px'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["color", "color", 'rgba(247,255,0,1)'],
            ["subproperty", "textShadow.offsetV", '2px'],
            ["style", "left", '0px'],
            ["style", "width", '290px'],
            ["style", "top", '10px'],
            ["style", "text-align", 'center'],
            ["style", "height", '65px'],
            ["style", "font-family", 'Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "font-size", '60px']
         ],
         "${_yen}": [
            ["style", "height", '80px'],
            ["style", "top", '348px'],
            ["style", "left", '382px'],
            ["style", "width", '80px']
         ],
         "${_naoshi}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '8px'],
            ["style", "font-size", '30px'],
            ["style", "top", '20px'],
            ["style", "height", '55px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "width", '190px']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '800px']
         ],
         "${_dore_sikaku}": [
            ["color", "background-color", 'rgba(159,171,255,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '288px'],
            ["style", "top", '-7px'],
            ["style", "border-width", '1px'],
            ["style", "height", '98px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_dore_sikakuCopy}": [
            ["color", "background-color", 'rgba(252,0,0,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '288px'],
            ["style", "top", '-7px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '98px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-width", '1px']
         ],
         "${__10yen}": [
            ["style", "top", '15px'],
            ["style", "height", '100px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '352px'],
            ["style", "width", '100px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '11px'],
            ["style", "font-size", '32px'],
            ["style", "cursor", 'pointer'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "height", '86px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '209px']
         ],
         "${_yen_sikaku}": [
            ["color", "background-color", 'rgba(255,170,247,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '16px'],
            ["style", "width", '447px'],
            ["style", "top", '0px'],
            ["style", "height", '127px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_batu}": [
            ["style", "top", '104px'],
            ["style", "left", '571px'],
            ["style", "display", 'none']
         ],
         "${_seikai}": [
            ["style", "top", '104px'],
            ["style", "left", '571px'],
            ["style", "display", 'none']
         ],
         "${_start}": [
            ["style", "-webkit-transform-origin", [49,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '75px'],
            ["style", "height", '38px'],
            ["style", "left", '5px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '334px']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(21,21,254,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '0px'],
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "display", 'block'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "height", '95px']
         ],
         "${_dore}": [
            ["style", "top", '75px'],
            ["style", "height", '38px'],
            ["style", "-webkit-transform-origin", [49,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '5px'],
            ["style", "width", '334px']
         ],
         "${_Ellipse2}": [
            ["color", "background-color", 'rgba(7,255,0,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '0px'],
            ["style", "width", '203px'],
            ["style", "top", '0px'],
            ["style", "height", '73px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_OK}": [
            ["style", "top", '300px'],
            ["style", "left", '603px']
         ],
         "${_ok}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '0px'],
            ["style", "font-size", '80px'],
            ["style", "top", '15px'],
            ["style", "text-align", 'center'],
            ["style", "height", '105px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '160px']
         ],
         "${_Image3}": [
            ["style", "height", '391px'],
            ["style", "top", '52px'],
            ["style", "left", '241px'],
            ["style", "width", '362px']
         ],
         "${_Ellipse}": [
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '158px'],
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "overflow", 'visible'],
            ["style", "height", '118px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${__5yen}": [
            ["style", "top", '15px'],
            ["style", "height", '100px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '191px'],
            ["style", "width", '100px']
         ],
         "${__bro}": [
            ["style", "height", '600px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '800px']
         ],
         "${_money}": [
            ["style", "display", 'none'],
            ["style", "left", '189px'],
            ["style", "top", '460px']
         ],
         "${_yarinaoshi}": [
            ["style", "top", '368px'],
            ["style", "left", '36px'],
            ["style", "cursor", 'pointer']
         ],
         "${_yen1}": [
            ["style", "top", '270px'],
            ["style", "height", '80px'],
            ["style", "cursor", 'auto'],
            ["style", "left", '299px'],
            ["style", "width", '80px']
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
            { id: "eid12", tween: [ "style", "${_dore_sikaku}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_dore_sikaku}", "width", '288px', { fromValue: '288px'}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "style", "${_seikai}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid26", tween: [ "color", "${_total_yen}", "color", 'rgba(255,7,7,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,7,7,1.00)'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "color", "${_dore_sikaku}", "background-color", 'rgba(159,171,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(159,171,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_money}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid24", tween: [ "style", "${_RoundRectCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_batu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"time_1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',32,'rgba(247,247,247,1.00)','normal','none',''],
      align: 'right',
      type: 'text',
      id: 'time_txt',
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
"returnchose": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','254px','46px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect6',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(252,252,0,1.00)']
   },
   {
      type: 'text',
      id: 'Text4',
      text: 'ゲーム選択画面へ',
      rect: ['34px','4px','244px','39px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '46px'],
            ["style", "width", '278px']
         ],
         "${_RoundRect6}": [
            ["color", "background-color", 'rgba(252,252,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text4}": [
            ["style", "left", '34px'],
            ["style", "top", '4px']
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
"hajime2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-8px','-4px','656px','990px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [[0,0],[],[],['1.3','1.3']],
      id: 'smako',
      type: 'image',
      rect: ['196px','219px','443px','388px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/smako.png','0px','0px']
   },
   {
      font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',40,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text4',
      text: 'さあ！<br>スタートボタンを<br>押して始めよう！！',
      align: 'left',
      rect: ['21px','34px','405px','119px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '598px'],
            ["style", "width", '796px']
         ],
         "${_Rectangle}": [
            ["style", "top", '-4px'],
            ["style", "height", '990px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '-8px'],
            ["style", "width", '656px']
         ],
         "${_smako}": [
            ["style", "top", '219px'],
            ["transform", "scaleY", '1.3'],
            ["style", "height", '388px'],
            ["transform", "scaleX", '1.3'],
            ["style", "left", '196px'],
            ["style", "width", '443px']
         ],
         "${_Text4}": [
            ["style", "top", '34px'],
            ["style", "width", '405px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '119px'],
            ["style", "left", '21px'],
            ["style", "font-size", '40px']
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
"OK": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'OK',
      type: 'group',
      rect: ['-5px','-1px','160','120','auto','auto'],
      c: [
      {
         type: 'ellipse',
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         opacity: 0.6640625,
         cursor: ['pointer'],
         rect: ['0px','0px','158px','118px','auto','auto'],
         fill: ['rgba(159,171,255,1)'],
         stroke: [1,'rgb(0, 0, 0)','solid'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         type: 'text',
         font: ['Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace',80,'rgba(247,255,0,1)','normal','none','normal'],
         cursor: ['pointer'],
         id: 'ok',
         align: 'center',
         text: 'OK',
         textShadow: ['rgba(0,0,0,0.65)',3,3,3],
         rect: ['0px','15px','160px','105px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ok}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '0px'],
            ["style", "font-size", '80px'],
            ["style", "top", '15px'],
            ["style", "text-align", 'center'],
            ["style", "height", '105px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "width", '160px'],
            ["style", "cursor", 'pointer']
         ],
         "${_OK}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Ellipse}": [
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '158px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "overflow", 'visible'],
            ["style", "height", '118px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '120px'],
            ["style", "width", '160px']
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
            { id: "eid17", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid151", tween: [ "style", "${_OK}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid351", tween: [ "style", "${_OK}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-167066725");
