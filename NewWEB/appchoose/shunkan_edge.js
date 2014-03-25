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
            text:"「しゅんかんし！」は、みえるリンゴのかずをたしあわせて、かずをかぞえるゲームです。すこしのあいだしかみえないリンゴのかずをキチンとおぼえられるかな？",
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
            id:'apl2',
            type:'image',
            rect:['40px','643px','696px','377px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"apl.PNG",'0px','0px']
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
         "${_cover}": [
            ["style", "display", 'none']
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
            ["style", "display", 'none'],
            ["style", "height", '315px'],
            ["style", "left", '178px'],
            ["style", "width", '420px']
         ],
         "${_apl2}": [
            ["style", "top", '643px'],
            ["style", "height", '377px'],
            ["style", "left", '40px'],
            ["style", "width", '696px']
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
         "${_Rectangle2}": [
            ["color", "border-color", 'rgba(64,64,64,0.53)'],
            ["style", "left", '29px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '716px']
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
         "${_Symbol_2}": [
            ["style", "top", '117px']
         ],
         "${_Symbol_1}": [
            ["style", "top", '343px']
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
            { id: "eid12", tween: [ "style", "${_Symbol_3}", "left", '50px', { fromValue: '50px'}], position: 0, duration: 0, easing: "easeInOutCubic" },
            { id: "eid20", tween: [ "style", "${_Symbol_2}", "top", '117px', { fromValue: '117px'}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "style", "${_cover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "style", "${_video}", "width", '420px', { fromValue: '420px'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_video}", "top", '114px', { fromValue: '114px'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_video}", "left", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid14", tween: [ "style", "${_Symbol_1}", "top", '343px', { fromValue: '343px'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_video}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
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
      text: 'ゲームをはじめる',
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
      rect: ['0px','0px','280px','200px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      opacity: 1,
      id: 'RoundRectCopy2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(78,78,78,1.00)',[270,[['rgba(193,193,193,1.00)',0],['rgba(75,74,74,1.00)',100]]]]
   },
   {
      id: 'syunkan12',
      type: 'image',
      rect: ['5px','5px','270px','190px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/syunkan1.PNG','0px','0px']
   },
   {
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      rect: ['0px','0px','280px','200px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      opacity: 1,
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,0.00)',[270,[['rgba(255,255,255,0.76)',1],['rgba(236,236,236,0.00)',99]]]]
   },
   {
      type: 'image',
      id: 'kouji2',
      rect: ['15px','60px','250px','80px','auto','auto'],
      transform: [[0,0],['18']],
      fill: ['rgba(0,0,0,0)','images/kouji2.png','0px','0px']
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
            ["gradient", "background-image", [270,[['rgba(193,193,193,1.00)',0],['rgba(75,74,74,1.00)',100]]]],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '280px']
         ],
         "${_kouji2}": [
            ["style", "top", '60px'],
            ["transform", "rotateZ", '18deg'],
            ["style", "height", '80px'],
            ["style", "left", '15px'],
            ["style", "width", '250px']
         ],
         "${_syunkan12}": [
            ["style", "top", '5px'],
            ["style", "height", '190px'],
            ["style", "left", '5px'],
            ["style", "width", '270px']
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
      rect: ['0px','0px','330px','400px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(212,212,212,1.00)']
   },
   {
      id: 'Symbol_4',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Symbol_4',
      symbolName: 'Symbol_4'
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
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '330px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Symbol_4}": [
            ["style", "left", '0px']
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
            { id: "eid9", tween: [ "style", "${_Symbol_4}", "left", '-350px', { fromValue: '0px'}], position: 0, duration: 750, easing: "easeInOutSine" },
            { id: "eid10", tween: [ "style", "${_Symbol_4}", "left", '-700px', { fromValue: '-350px'}], position: 750, duration: 750, easing: "easeInOutSine" }         ]
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
      id: 'syunkan1',
      type: 'image',
      rect: ['15px','70px','300px','260px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/syunkan1.PNG','0px','0px']
   },
   {
      id: 'syunkan2',
      type: 'image',
      rect: ['365px','70px','300px','260px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/syunkan2.PNG','0px','0px']
   },
   {
      id: 'syunkan3',
      type: 'image',
      rect: ['715px','70px','300px','260px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/syunkan3.PNG','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_syunkan1}": [
            ["style", "top", '70px'],
            ["style", "height", '260px'],
            ["style", "left", '15px'],
            ["style", "width", '300px']
         ],
         "${_syunkan3}": [
            ["style", "height", '260px'],
            ["style", "top", '70px'],
            ["style", "left", '715px'],
            ["style", "width", '300px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '1015px']
         ],
         "${_syunkan2}": [
            ["style", "top", '70px'],
            ["style", "height", '260px'],
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
      rect: ['0px','0px','768px','1024px','auto','auto'],
      stroke: [0,'rgba(0,0,0,1)','none'],
      id: 'cover',
      opacity: 0.67254638671875,
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['497px','442px','99px','36px','auto','auto'],
      id: 'Text3',
      text: '□とじる',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
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
            ["style", "opacity", '0.67254638671875'],
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
            { id: "eid2", tween: [ "style", "${_cover}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }         ]
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
