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
            id:'Text',
            type:'text',
            rect:['50px','537px','676px','216px','auto','auto'],
            text:"Originally developed by Tetsuya Miyamoto, a famous cram school teacher. You must fill the boxes with digits, but the same numbers cannot appear in the same row or column. The numbers in an area marked by bold lines should have the sum as indicated.  ",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['29px','496px','716px','0px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[1,"rgba(64,64,64,0.53)","solid"]
         },
         {
            id:'Symbol_1',
            type:'rect',
            rect:['450','330','auto','auto','auto','auto']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['47px','60px','333px','400px','auto','auto'],
            fill:["rgba(248,248,215,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            boxShadow:["inset",3,3,3,0,"rgba(0,0,0,0.65)"]
         },
         {
            id:'Symbol_3',
            type:'rect',
            rect:['50','60','auto','auto','auto','auto']
         },
         {
            id:'sszl',
            type:'image',
            rect:['162px','878px','218px','154px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sszl.png",'0px','0px']
         },
         {
            id:'smako_2',
            type:'image',
            rect:['388px','823px','300px','300px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"smako%202.png",'0px','0px']
         },
         {
            id:'cover',
            display:'none',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'video',
            display:'none',
            type:'rect',
            rect:['100px','135px','560px','315px','auto','auto'],
            fill:["rgba(0,0,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'home',
            type:'rect',
            rect:['492','818','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Symbol_3',
            symbolName:'Symbol_3'
         },
         {
            id:'home',
            symbolName:'home'
         },
         {
            id:'Symbol_1',
            symbolName:'Symbol_1'
         },
         {
            id:'cover',
            symbolName:'cover'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Symbol_3}": [
            ["style", "left", '50px']
         ],
         "${_Rectangle2}": [
            ["color", "border-color", 'rgba(64,64,64,0.53)'],
            ["style", "left", '29px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '716px']
         ],
         "${_home}": [
            ["style", "top", '818px'],
            ["transform", "scaleX", '0.17063'],
            ["transform", "scaleY", '0.14286'],
            ["style", "left", '555px']
         ],
         "${_video}": [
            ["style", "top", '114px'],
            ["style", "height", '315px'],
            ["style", "display", 'none'],
            ["style", "left", '178px'],
            ["style", "width", '420px']
         ],
         "${_Symbol_1}": [
            ["style", "top", '343px']
         ],
         "${_Text}": [
            ["style", "top", '537px']
         ],
         "${_smako_2}": [
            ["style", "top", '823px'],
            ["style", "height", '300px'],
            ["style", "left", '388px'],
            ["style", "width", '300px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '768px'],
            ["style", "height", '1024px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(248,248,215,1.00)'],
            ["subproperty", "boxShadow.inset", 'inset'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '47px'],
            ["style", "width", '333px'],
            ["style", "top", '60px'],
            ["style", "height", '400px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_cover}": [
            ["style", "display", 'none']
         ],
         "${_sszl}": [
            ["style", "top", '878px'],
            ["style", "height", '154px'],
            ["style", "left", '162px'],
            ["style", "width", '218px']
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
            { id: "eid23", tween: [ "transform", "${_home}", "scaleX", '0.17063', { fromValue: '0.17063'}], position: 0, duration: 0 },
            { id: "dg5", tween: [ "style", "${_video}", "top", '114px', { fromValue: '114px'}], position: 0, duration: 0 },
            { id: "dg7", tween: [ "style", "${_video}", "left", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "dg2", tween: [ "style", "${_cover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg1", tween: [ "style", "${_Symbol_3}", "left", '50px', { fromValue: '50px'}], position: 0, duration: 0 },
            { id: "dg6", tween: [ "style", "${_video}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg4", tween: [ "style", "${_Symbol_1}", "top", '343px', { fromValue: '343px'}], position: 0, duration: 0 },
            { id: "dg8", tween: [ "style", "${_video}", "width", '420px', { fromValue: '420px'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "style", "${_home}", "left", '555px', { fromValue: '555px'}], position: 0, duration: 0 },
            { id: "eid24", tween: [ "transform", "${_home}", "scaleY", '0.14286', { fromValue: '0.14286'}], position: 0, duration: 0 },
            { id: "eid26", tween: [ "style", "${_home}", "top", '818px', { fromValue: '818px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Symbol_1": {
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
      boxShadow: ['',3,3,0,0,'rgba(0,0,0,0.65)'],
      rect: ['0px','0px','280px','110px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      filter: [0,0,1.04,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,189,0,1.00)']
   },
   {
      rect: ['23px','42px','243px','39px','auto','auto'],
      font: ['\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace',30,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'Start the game!',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '110px'],
            ["style", "width", '280px']
         ],
         "${_Text2}": [
            ["style", "top", '42px'],
            ["style", "height", '39px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", '\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace'],
            ["style", "left", '23px'],
            ["style", "font-size", '30px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(255,189,0,1.00)'],
            ["subproperty", "boxShadow.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '280px'],
            ["style", "top", '0px'],
            ["subproperty", "filter.contrast", '1.04'],
            ["style", "height", '110px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
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
"Symbol_2": {
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
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      o: 1,
      s: [0,'rgba(0,0,0,1)','none'],
      r: ['0px','0px','280px','200px','auto','auto'],
      id: 'RoundRectCopy2',
      t: 'rect',
      br: ['10px','10px','10px','10px'],
      f: ['rgba(78,78,78,1.00)',[270,[['rgba(136,231,254,1.00)',72],['rgba(255,255,255,1.00)',100]]]]
   },
   {
      id: 'sspzst32',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/sspzst3.png','0px','0px'],
      r: ['5px','5px','270px','190px','auto','auto']
   },
   {
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      o: 1,
      s: [0,'rgba(0,0,0,1)','none'],
      r: ['0px','0px','280px','200px','auto','auto'],
      id: 'RoundRect',
      t: 'rect',
      br: ['10px','10px','10px','10px'],
      f: ['rgba(192,192,192,0.00)',[270,[['rgba(255,255,255,0.76)',1],['rgba(236,236,236,0.00)',99]]]]
   },
   {
      id: '_1707',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/1707.png','0px','0px'],
      r: ['98px','66px','75px','68px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.76)',1],['rgba(236,236,236,0.00)',99]]]],
            ["style", "left", '0px'],
            ["style", "width", '280px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "opacity", '1']
         ],
         "${_RoundRectCopy2}": [
            ["color", "background-color", 'rgba(78,78,78,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '280px'],
            ["style", "top", '0px'],
            ["gradient", "background-image", [270,[['rgba(136,231,254,1.00)',72],['rgba(255,255,255,1.00)',100]]]],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '280px']
         ],
         "${_sspzst32}": [
            ["style", "top", '5px'],
            ["style", "height", '190px'],
            ["style", "left", '5px'],
            ["style", "width", '270px']
         ],
         "${__1707}": [
            ["style", "height", '68px'],
            ["style", "top", '66px'],
            ["style", "left", '98px'],
            ["style", "width", '75px']
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
"Symbol_3": {
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
      s: [0,'rgb(0, 0, 0)','none'],
      r: ['0px','0px','330px','400px','auto','auto'],
      id: 'Rectangle',
      t: 'rect',
      f: ['rgba(212,212,212,1.00)']
   },
   {
      id: 'Symbol_4',
      t: 'rect',
      r: ['0','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Symbol_4',
      symbolName: 'Symbol_4',
      sN: 'Symbol_4'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(212,212,212,1.00)'],
            ["style", "top", '0px'],
            ["style", "height", '400px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '330px']
         ],
         "${_Symbol_4}": [
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '330px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "dg9", tween: [ "style", "${_Symbol_4}", "left", '-350px', { fromValue: '0px'}], position: 0, duration: 750, easing: "easeInOutSine" },
            { id: "dg10", tween: [ "style", "${_Symbol_4}", "left", '-700px', { fromValue: '-350px'}], position: 750, duration: 750, easing: "easeInOutSine" }         ]
      }
   }
},
"Symbol_4": {
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
      id: 'sspzst2',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/sspzst2.png','0px','0px'],
      r: ['14px','70px','300px','260px','auto','auto']
   },
   {
      id: 'sszlst1',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/sszlst1.png','0px','0px'],
      r: ['367px','70px','300px','260px','auto','auto']
   },
   {
      id: 'sspzst3',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/sspzst3.png','0px','0px'],
      r: ['715px','70px','300px','260px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_sszlst1}": [
            ["style", "top", '70px'],
            ["style", "height", '260px'],
            ["style", "left", '367px'],
            ["style", "width", '300px']
         ],
         "${_sspzst2}": [
            ["style", "top", '70px'],
            ["style", "height", '260px'],
            ["style", "left", '14px'],
            ["style", "width", '300px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '1015px']
         ],
         "${_sspzst3}": [
            ["style", "top", '70px'],
            ["style", "height", '260px'],
            ["style", "left", '715px'],
            ["style", "width", '300px']
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
"cover": {
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
      s: [0,'rgba(0,0,0,1)','none'],
      r: ['0px','0px','768px','1024px','auto','auto'],
      id: 'cover',
      t: 'rect',
      o: 0.67,
      f: ['rgba(0,0,0,1.00)']
   },
   {
      r: ['497px','442px','99px','36px','auto','auto'],
      id: 'Text3',
      t: 'text',
      text: '□とじる',
      n: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',[24,''],'rgba(255,255,255,1.00)','normal','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '442px'],
            ["style", "height", '36px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '497px'],
            ["style", "width", '99px']
         ],
         "${_cover}": [
            ["style", "top", '0px'],
            ["style", "height", '1024px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'block'],
            ["style", "opacity", '0.67'],
            ["style", "left", '0px'],
            ["style", "width", '768px']
         ],
         "${symbolSelector}": [
            ["style", "height", '1024px'],
            ["style", "width", '768px']
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
            { id: "dg11", tween: [ "style", "${_cover}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }         ]
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
            ["style", "display", 'block'],
            ["style", "height", '160px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '78px'],
            ["style", "width", '200px']
         ],
         "${_house2Copy}": [
            ["style", "top", '57px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "display", 'none'],
            ["style", "left", '213px'],
            ["color", "background-color", 'rgba(0,0,0,1)']
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
            ["style", "border-top-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px']
         ],
         "${_white}": [
            ["style", "top", '174px'],
            ["style", "display", 'block'],
            ["style", "height", '143px'],
            ["style", "left", '31px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)']
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
            ["style", "display", 'none'],
            ["style", "border-bottom-right-radius", [5.5160780864357,5.5160780864357], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [5.5160780864357,5.5160780864357], {valueTemplate:'@@0@@px @@1@@px'} ]
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
            ["style", "cursor", 'pointer'],
            ["style", "left", '-1px'],
            ["style", "width", '352px']
         ],
         "${_whiteCopy}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["transform", "scaleY", '0.8'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.8'],
            ["style", "height", '143px'],
            ["style", "left", '30px'],
            ["style", "top", '159px']
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
            ["style", "display", 'block'],
            ["style", "border-top-right-radius", [5.5160780864357,5.5160780864357], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5.5160780864357,5.5160780864357], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_house1Copy}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "top", '141px'],
            ["transform", "scaleY", '0.8'],
            ["style", "display", 'none'],
            ["style", "height", '160px'],
            ["transform", "scaleX", '0.8'],
            ["style", "left", '77px'],
            ["style", "width", '200px']
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
            { id: "eid113", tween: [ "style", "${_house1Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid111", tween: [ "style", "${_house2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid115", tween: [ "style", "${_house1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid114", tween: [ "style", "${_house3Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-116310872");
