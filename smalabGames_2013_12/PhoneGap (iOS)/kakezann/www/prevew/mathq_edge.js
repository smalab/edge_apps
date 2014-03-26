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
            id:'mmp',
            type:'rect',
            rect:['10','11','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'mmp',
            symbolName:'mmp'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(212,210,210,1.00)'],
            ["style", "width", '280px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_mmp}": [
            ["style", "left", '10px']
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
            { id: "eid13", tween: [ "style", "${_mmp}", "left", '-292px', { fromValue: '10px'}], position: 0, duration: 500, easing: "easeOutBack" },
            { id: "eid14", tween: [ "style", "${_mmp}", "left", '10px', { fromValue: '-292px'}], position: 1000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"preview": {
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
      id: 'wmscr',
      type: 'image',
      rect: ['345px','0px','228px','377px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wmscr.jpg','0px','0px']
   },
   {
      id: 'wmscr1',
      type: 'image',
      rect: ['18px','0px','228px','377px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wmscr1.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_wmscr1}": [
            ["style", "height", '377px'],
            ["style", "top", '0px'],
            ["style", "left", '18px'],
            ["style", "width", '228px']
         ],
         "${symbolSelector}": [
            ["style", "height", '377px'],
            ["style", "width", '465px']
         ],
         "${_wmscr}": [
            ["style", "height", '377px'],
            ["style", "top", '0px'],
            ["style", "left", '345px'],
            ["style", "width", '228px']
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
"mmp": {
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
      rect: ['-59px','59px','378px','260px','auto','auto'],
      id: 'mathq',
      transform: [[],['-90']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/mathq.jpg','0px','0px']
   },
   {
      rect: ['243px','59px','378px','260px','auto','auto'],
      id: 'mathq2',
      transform: [[],['-90']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/mathq2.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mathq2}": [
            ["style", "top", '59px'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "height", '260px'],
            ["style", "left", '243px'],
            ["style", "width", '378px']
         ],
         "${symbolSelector}": [
            ["style", "height", '378px'],
            ["style", "width", '562px']
         ],
         "${_mathq}": [
            ["style", "top", '59px'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "height", '260px'],
            ["style", "left", '-59px'],
            ["style", "width", '378px']
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
})(jQuery, AdobeEdge, "EDGE-259759409");
