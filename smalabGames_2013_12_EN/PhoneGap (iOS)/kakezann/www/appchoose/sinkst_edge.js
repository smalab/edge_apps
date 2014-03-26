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
            id:'_014',
            type:'image',
            rect:['425px','60px','330px','40px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"014.png",'0px','0px']
         },
         {
            id:'Text',
            type:'text',
            rect:['50px','537px','676px','216px','auto','auto'],
            text:"The cards have equation or numbers. Match an equation with its answer. ",
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
            id:'Symbol_1Copy',
            type:'rect',
            rect:['450','330','auto','auto','auto','auto']
         },
         {
            id:'Symbol_2',
            type:'rect',
            rect:['450','60','auto','auto','auto','auto']
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
            id:'Text2',
            type:'text',
            rect:['460px','67px','267px','26px','auto','auto'],
            text:"Video guide",
            align:"center",
            font:['\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace',24,"rgba(255,255,255,1.00)","normal","none",""]
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
            id:'sinkSS',
            type:'image',
            rect:['-131px','792px','800px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sinkSS.png",'0px','0px']
         },
         {
            id:'Text3',
            type:'text',
            rect:['652px','845px','66px','80px','auto','auto'],
            text:"?<br>",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',52,"rgba(255,115,6,1.00)","normal","none",""]
         },
         {
            id:'Text3Copy',
            type:'text',
            rect:['104px','900px','66px','80px','auto','auto'],
            text:"?<br>",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',52,"rgba(255,115,6,1.00)","normal","none",""]
         },
         {
            id:'Rectangle3',
            type:'rect',
            rect:['77px','834px','159px','80px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Text3Copy2',
            type:'text',
            rect:['170px','794px','66px','80px','auto','auto'],
            text:"?<br>",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',52,"rgba(255,115,6,1.00)","normal","none",""]
         },
         {
            id:'kouji2',
            type:'image',
            rect:['463px','177px','253px','80px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"kouji2.png",'0px','0px'],
            transform:[[],['15']]
         },
         {
            id:'Text4',
            type:'text',
            rect:['454px','343px','280px','53px','auto','auto'],
            text:"easy",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',30,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'Text4Copy',
            type:'text',
            rect:['447px','407px','280px','53px','auto','auto'],
            text:"normal",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',30,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'home',
            type:'rect',
            rect:['348','434','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Symbol_1',
            symbolName:'Symbol_1'
         },
         {
            id:'cover',
            symbolName:'cover'
         },
         {
            id:'Symbol_3',
            symbolName:'Symbol_3'
         },
         {
            id:'home',
            symbolName:'home'
         },
         {
            id:'Symbol_1Copy',
            symbolName:'Symbol_1'
         },
         {
            id:'Symbol_2',
            symbolName:'Symbol_2'
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
            ["style", "border-width", '1px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '29px'],
            ["style", "width", '716px']
         ],
         "${_sinkSS}": [
            ["style", "left", '-131px'],
            ["style", "top", '792px']
         ],
         "${_home}": [
            ["style", "top", '808px'],
            ["transform", "scaleX", '0.18857'],
            ["transform", "scaleY", '0.15143'],
            ["style", "left", '547px']
         ],
         "${_Text2}": [
            ["style", "top", '67px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", '\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace'],
            ["style", "left", '460px']
         ],
         "${_video}": [
            ["style", "top", '114px'],
            ["style", "height", '315px'],
            ["style", "display", 'none'],
            ["style", "left", '178px'],
            ["style", "width", '420px']
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
         "${_Text4}": [
            ["style", "text-align", 'center'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif']
         ],
         "${_Text4Copy}": [
            ["style", "top", '407px'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
            ["style", "text-align", 'center'],
            ["style", "left", '447px']
         ],
         "${_Symbol_1Copy}": [
            ["style", "top", '378px'],
            ["transform", "scaleY", '0.48232'],
            ["style", "left", '450px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '794px'],
            ["style", "font-size", '52px'],
            ["style", "height", '80px'],
            ["color", "color", 'rgba(255,115,6,1)'],
            ["style", "left", '170px'],
            ["style", "width", '66px']
         ],
         "${_Text}": [
            ["style", "top", '537px']
         ],
         "${_Symbol_1}": [
            ["style", "top", '315px'],
            ["transform", "scaleY", '0.48232']
         ],
         "${_Text3Copy}": [
            ["style", "top", '900px'],
            ["style", "font-size", '52px'],
            ["style", "height", '80px'],
            ["color", "color", 'rgba(255,115,6,1)'],
            ["style", "left", '104px'],
            ["style", "width", '66px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ],
         "${__014}": [
            ["style", "height", '40px'],
            ["style", "top", '60px'],
            ["style", "left", '425px'],
            ["style", "width", '330px']
         ],
         "${_cover}": [
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1024px'],
            ["style", "width", '768px']
         ],
         "${_Symbol_2}": [
            ["style", "top", '117px']
         ],
         "${_Text3}": [
            ["color", "color", 'rgba(255,115,6,1.00)'],
            ["style", "width", '66px'],
            ["style", "height", '80px'],
            ["style", "font-size", '52px']
         ],
         "${_kouji2}": [
            ["style", "top", '177px'],
            ["transform", "rotateZ", '15deg'],
            ["style", "height", '80px'],
            ["style", "left", '463px'],
            ["style", "width", '253px']
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
            { id: "dg3", tween: [ "style", "${_Symbol_2}", "top", '117px', { fromValue: '117px'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "style", "${_Symbol_1Copy}", "top", '378px', { fromValue: '378px'}], position: 0, duration: 0 },
            { id: "eid32", tween: [ "transform", "${_home}", "scaleX", '0.18857', { fromValue: '0.18857'}], position: 0, duration: 0 },
            { id: "dg5", tween: [ "style", "${_video}", "top", '114px', { fromValue: '114px'}], position: 0, duration: 0 },
            { id: "dg7", tween: [ "style", "${_video}", "left", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "dg6", tween: [ "style", "${_video}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg2", tween: [ "style", "${_cover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg1", tween: [ "style", "${_Symbol_3}", "left", '50px', { fromValue: '50px'}], position: 0, duration: 0 },
            { id: "eid24", tween: [ "style", "${_Symbol_1}", "top", '315px', { fromValue: '315px'}], position: 0, duration: 0 },
            { id: "eid27", tween: [ "style", "${_Symbol_1Copy}", "left", '450px', { fromValue: '450px'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "transform", "${_Symbol_1}", "scaleY", '0.48232', { fromValue: '0.48232'}], position: 0, duration: 0 },
            { id: "dg8", tween: [ "style", "${_video}", "width", '420px', { fromValue: '420px'}], position: 0, duration: 0 },
            { id: "eid34", tween: [ "style", "${_home}", "left", '547px', { fromValue: '547px'}], position: 0, duration: 0 },
            { id: "eid33", tween: [ "transform", "${_home}", "scaleY", '0.15143', { fromValue: '0.15143'}], position: 0, duration: 0 },
            { id: "eid35", tween: [ "style", "${_home}", "top", '808px', { fromValue: '808px'}], position: 0, duration: 0 }         ]
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
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
         ],
         "${symbolSelector}": [
            ["style", "height", '110px'],
            ["style", "width", '280px']
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
      f: ['rgba(78,78,78,1.00)',[270,[['rgba(21,255,0,1.00)',0],['rgba(60,141,53,1.00)',100]]]],
      o: 1,
      s: [0,'rgba(0,0,0,1)','none'],
      r: ['0px','0px','280px','200px','auto','auto'],
      id: 'RoundRectCopy2',
      t: 'rect',
      br: ['10px','10px','10px','10px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      id: 'sinkst22',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/sinkst2.png','0px','0px'],
      r: ['4px','4px','272px','192px','auto','auto']
   },
   {
      f: ['rgba(192,192,192,0.00)',[270,[['rgba(255,255,255,0.76)',1],['rgba(236,236,236,0.00)',99]]]],
      o: 1,
      s: [0,'rgba(0,0,0,1)','none'],
      r: ['0px','0px','280px','200px','auto','auto'],
      id: 'RoundRect',
      t: 'rect',
      br: ['10px','10px','10px','10px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
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
            ["style", "opacity", '1'],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_RoundRectCopy2}": [
            ["color", "background-color", 'rgba(78,78,78,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '280px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["gradient", "background-image", [270,[['rgba(21,255,0,1.00)',0],['rgba(60,141,53,1.00)',100]]]]
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '280px']
         ],
         "${_sinkst22}": [
            ["style", "height", '192px'],
            ["style", "top", '4px'],
            ["style", "left", '4px'],
            ["style", "width", '272px']
         ],
         "${__1707}": [
            ["style", "top", '66px'],
            ["style", "height", '68px'],
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
            ["style", "overflow", 'hidden'],
            ["style", "width", '330px']
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
      id: 'sinkst1',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/sinkst1.png','0px','0px'],
      r: ['15px','122px','300px','156px','auto','auto']
   },
   {
      id: 'sinkst2',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/sinkst2.png','0px','0px'],
      r: ['365px','122px','300px','156px','auto','auto']
   },
   {
      id: 'sinkst3',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/sinkst3.png','0px','0px'],
      r: ['715px','122','300px','156px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_sinkst1}": [
            ["style", "height", '156px'],
            ["style", "top", '122px'],
            ["style", "left", '15px'],
            ["style", "width", '300px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '1015px']
         ],
         "${_sinkst3}": [
            ["style", "height", '156px'],
            ["style", "left", '715px'],
            ["style", "width", '300px']
         ],
         "${_sinkst2}": [
            ["style", "height", '156px'],
            ["style", "top", '122px'],
            ["style", "left", '365px'],
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
      text: '□とじる',
      t: 'text',
      n: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',[24,''],'rgba(255,255,255,1.00)','normal','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '442px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '36px'],
            ["style", "left", '497px'],
            ["style", "width", '99px']
         ],
         "${_cover}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '1024px'],
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
