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
            id:'button',
            type:'rect',
            rect:['75','100','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'button',
            symbolName:'button'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Text2Copy2}": [
            ["style", "top", '46px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '61px'],
            ["style", "font-size", '69px']
         ],
         "${_Text2Copy5}": [
            ["style", "top", '46px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '61px'],
            ["style", "font-size", '69px']
         ],
         "${_Text2Copy4}": [
            ["style", "top", '46px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '61px'],
            ["style", "font-size", '69px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
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
      rect: ['0px','0px','400px','200px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      type: 'rect',
      id: 'cover1',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,255,0.00)'],
      c: [
      {
         rect: ['0px','0px','400px','200px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'sumabutton',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(0,0,255,1.00)']
      },
      {
         rect: ['61px','46px','277px','107px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',69,'rgba(255,255,255,1.00)','normal','none','normal'],
         id: 'Text1',
         text: 'スマラボ',
         align: 'center',
         type: 'text'
      }]
   },
   {
      type: 'rect',
      borderRadius: ['10px','10px','10px','10px'],
      id: 'cover2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      rect: ['0px','0px','400px','200px','auto','auto'],
      display: 'none',
      fill: ['rgba(0,0,255,0.00)'],
      c: [
      {
         rect: ['0px','0px','400px','200px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'modoru1',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(12,12,73,1.00)']
      },
      {
         rect: ['61px','46px','277px','107px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',69,'rgba(255,255,255,1.00)','normal','none','normal'],
         id: 'Text2',
         text: 'もどる',
         align: 'center',
         type: 'text'
      }]
   },
   {
      type: 'rect',
      borderRadius: ['10px','10px','10px','10px'],
      id: 'modoru2',
      stroke: [5,'rgba(97,97,107,1.00)','solid'],
      cursor: ['pointer'],
      rect: ['0px','3px','390px','190px','auto','auto'],
      display: 'none',
      fill: ['rgba(44,44,49,1.00)'],
      c: [
      {
         rect: ['61px','46px','277px','107px','auto','auto'],
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',69,'rgba(155,155,155,1.00)','normal','none','normal'],
         id: 'Text3',
         text: 'もどる',
         align: 'center',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text1}": [
            ["style", "top", '46px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '61px'],
            ["style", "font-size", '69px']
         ],
         "${_Text3}": [
            ["style", "top", '46px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(155,155,155,1.00)'],
            ["style", "left", '61px'],
            ["style", "font-size", '69px']
         ],
         "${_Text2}": [
            ["style", "top", '46px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '61px'],
            ["style", "font-size", '69px']
         ],
         "${_sumabutton}": [
            ["style", "top", '0px'],
            ["style", "height", '200px'],
            ["color", "background-color", 'rgba(0,0,255,1)'],
            ["style", "left", '0px'],
            ["style", "width", '400px']
         ],
         "${symbolSelector}": [
            ["style", "height", '204px'],
            ["style", "width", '404px']
         ],
         "${_modoru1}": [
            ["color", "background-color", 'rgba(12,12,73,1.00)'],
            ["style", "top", '0px'],
            ["style", "height", '200px'],
            ["style", "left", '0px'],
            ["style", "width", '400px']
         ],
         "${_cover2}": [
            ["color", "background-color", 'rgba(0,0,255,0)'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_cover1}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["color", "background-color", 'rgba(0,0,255,0.00)'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_modoru2}": [
            ["color", "background-color", 'rgba(44,44,49,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "border-style", 'solid'],
            ["style", "left", '4px'],
            ["style", "width", '390px'],
            ["style", "top", '4px'],
            ["style", "border-width", '5px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(97,97,107,1.00)'],
            ["style", "height", '190px']
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
            { id: "eid8", tween: [ "style", "${_modoru2}", "top", '4px', { fromValue: '4px'}], position: 0, duration: 0 },
            { id: "eid58", tween: [ "style", "${_modoru1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid63", tween: [ "style", "${_cover1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid62", tween: [ "style", "${_modoru2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_cover2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "style", "${_modoru1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_modoru2}", "left", '4px', { fromValue: '4px'}], position: 0, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-280890736");
