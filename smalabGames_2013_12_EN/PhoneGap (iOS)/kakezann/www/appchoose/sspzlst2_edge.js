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
            id:'_014',
            type:'image',
            rect:['425px','60px','330px','40px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"014.png",'0px','0px']
         },
         {
            id:'Text',
            type:'text',
            rect:['50px','537px','676px','216px','auto','auto'],
            text:"さんすうパズルはかずをルールにしたがってハコにつめていくゲームです。おなじいろをしたハコどうしをたして、タテとヨコでかずがかさならないようにハコにどんどんつめていこう。",
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
            text:"しょうかいムービー",
            align:"center",
            font:['\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace',24,"rgba(255,255,255,1.00)","normal","none",""]
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
         }],
         symbolInstances: [
         {
            id:'Symbol_3',
            symbolName:'Symbol_3'
         },
         {
            id:'cover',
            symbolName:'cover'
         },
         {
            id:'Symbol_1',
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
         "${_smako_2}": [
            ["style", "top", '823px'],
            ["style", "height", '300px'],
            ["style", "left", '388px'],
            ["style", "width", '300px']
         ],
         "${_video}": [
            ["style", "top", '114px'],
            ["style", "height", '315px'],
            ["style", "display", 'none'],
            ["style", "left", '178px'],
            ["style", "width", '420px']
         ],
         "${_Text2}": [
            ["style", "top", '67px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", '\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace'],
            ["style", "left", '460px']
         ],
         "${_Symbol_1}": [
            ["style", "top", '343px']
         ],
         "${_Symbol_2}": [
            ["style", "top", '117px']
         ],
         "${_cover}": [
            ["style", "display", 'none']
         ],
         "${__014}": [
            ["style", "top", '60px'],
            ["style", "height", '40px'],
            ["style", "left", '425px'],
            ["style", "width", '330px']
         ],
         "${_Text}": [
            ["style", "top", '537px']
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
         "${_Rectangle2}": [
            ["color", "border-color", 'rgba(64,64,64,0.53)'],
            ["style", "left", '29px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '716px']
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
            { id: "dg1", tween: [ "style", "${_Symbol_3}", "left", '50px', { fromValue: '50px'}], position: 0, duration: 0 },
            { id: "dg3", tween: [ "style", "${_Symbol_2}", "top", '117px', { fromValue: '117px'}], position: 0, duration: 0 },
            { id: "dg8", tween: [ "style", "${_video}", "width", '420px', { fromValue: '420px'}], position: 0, duration: 0 },
            { id: "dg6", tween: [ "style", "${_video}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg5", tween: [ "style", "${_video}", "top", '114px', { fromValue: '114px'}], position: 0, duration: 0 },
            { id: "dg7", tween: [ "style", "${_video}", "left", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "dg4", tween: [ "style", "${_Symbol_1}", "top", '343px', { fromValue: '343px'}], position: 0, duration: 0 },
            { id: "dg2", tween: [ "style", "${_cover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
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
      boxShadow: ['',3,3,0,0,'rgba(0,0,0,0.65)'],
      filter: [0,0,1.04,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      s: [0,'rgb(0, 0, 0)','none'],
      r: ['0px','0px','280px','110px','auto','auto'],
      id: 'RoundRect2',
      t: 'rect',
      br: ['10px','10px','10px','10px'],
      f: ['rgba(255,189,0,1.00)']
   },
   {
      t: 'text',
      r: ['23px','42px','243px','39px','auto','auto'],
      id: 'Text2',
      text: 'ゲームをはじめる',
      align: 'left',
      n: ['\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace',30,'rgba(255,255,255,1.00)','normal','none','normal']
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
            ["subproperty", "filter.contrast", '1.04'],
            ["style", "left", '0px'],
            ["style", "width", '280px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "height", '110px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '0px']
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
            ["subproperty", "boxShadow.blur", '3px'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.76)',1],['rgba(236,236,236,0.00)',99]]]],
            ["style", "left", '0px'],
            ["style", "width", '280px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "opacity", '1']
         ],
         "${_RoundRectCopy2}": [
            ["color", "background-color", 'rgba(78,78,78,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '280px'],
            ["style", "top", '0px'],
            ["gradient", "background-image", [270,[['rgba(136,231,254,1.00)',72],['rgba(255,255,255,1.00)',100]]]],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
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
