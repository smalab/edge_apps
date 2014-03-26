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
            display:'none',
            type:'rect',
            rect:['75','100','auto','auto','auto','auto']
         },
         {
            id:'home',
            type:'rect',
            rect:['100','25','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'button',
            symbolName:'button'
         },
         {
            id:'home',
            symbolName:'home'
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
         ],
         "${_home}": [
            ["style", "cursor", 'auto']
         ],
         "${_button}": [
            ["style", "display", 'none']
         ],
         "${_Text1}": [
            ["style", "line-height", '205px']
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
            { id: "eid110", tween: [ "style", "${_button}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
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
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',69,'rgba(255,255,255,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Text1',
         text: 'スマラボ',
         align: 'center',
         rect: ['1px','-1px','400px','199px','auto','auto']
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
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',69,'rgba(255,255,255,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Text2',
         text: 'もどる',
         align: 'center',
         rect: ['61px','46px','277px','107px','auto','auto']
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
         font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',69,'rgba(155,155,155,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Text3',
         text: 'もどる',
         align: 'center',
         rect: ['61px','46px','277px','107px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text1}": [
            ["style", "line-height", '205px'],
            ["style", "width", '400px'],
            ["style", "text-align", 'center'],
            ["style", "top", '-1px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "height", '199px'],
            ["style", "left", '1px'],
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
            ["style", "height", '200px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '400px']
         ],
         "${_cover1}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["color", "background-color", 'rgba(0,0,255,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_cover2}": [
            ["color", "background-color", 'rgba(0,0,255,0)'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '0px']
         ],
         "${_modoru2}": [
            ["color", "background-color", 'rgba(44,44,49,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "left", '4px'],
            ["style", "width", '390px'],
            ["style", "top", '4px'],
            ["style", "border-width", '5px'],
            ["style", "height", '190px'],
            ["color", "border-color", 'rgba(97,97,107,1.00)'],
            ["style", "cursor", 'pointer'],
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
            { id: "eid8", tween: [ "style", "${_modoru2}", "top", '4px', { fromValue: '4px'}], position: 0, duration: 0 },
            { id: "eid58", tween: [ "style", "${_modoru1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid63", tween: [ "style", "${_cover1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid62", tween: [ "style", "${_modoru2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_cover2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "style", "${_modoru1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_modoru2}", "left", '4px', { fromValue: '4px'}], position: 0, duration: 0 }         ]
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
      rect: ['78px','74px','200px','200px','auto','auto'],
      borderRadius: ['5.5160780864357px 5.5160780864357px','5.5160780864357px 5.5160780864357px','5.5160780864357px 5.5160780864357px','5.5160780864357px 5.5160780864357px'],
      transform: [[],['45']],
      id: 'house3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   },
   {
      rect: ['228px','41px','50px','106px','auto','auto'],
      id: 'house2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   },
   {
      rect: ['31px','174px','288px','143px','auto','auto'],
      id: 'white',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['78px','142px','200px','160px','auto','auto'],
      transform: [],
      id: 'house1',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   },
   {
      transform: [[],['45'],[],['0.8','0.8']],
      rect: ['77px','73px','200px','200px','auto','auto'],
      borderRadius: ['5.5160780864357px 5.5160780864357px','5.5160780864357px 5.5160780864357px','5.5160780864357px 5.5160780864357px','5.5160780864357px 5.5160780864357px'],
      type: 'rect',
      id: 'house3Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(0,0,0,1)']
   },
   {
      rect: ['227px','68px','50px','106px','auto','auto'],
      transform: [[],[],[],['0.8','0.8']],
      type: 'rect',
      id: 'house2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(0,0,0,1)']
   },
   {
      rect: ['30px','159px','288px','143px','auto','auto'],
      transform: [[],[],[],['0.8','0.8']],
      type: 'rect',
      id: 'whiteCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['77px','141px','200px','160px','auto','auto'],
      transform: [[],[],[],['0.8','0.8']],
      type: 'rect',
      id: 'house1Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(0,0,0,1)']
   },
   {
      rect: ['-1px','-2px','352px','352px','auto','auto'],
      type: 'rect',
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
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "display", 'none'],
            ["style", "left", '213px'],
            ["style", "top", '57px']
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
            ["style", "height", '143px'],
            ["style", "display", 'block'],
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
            ["style", "top", '41px'],
            ["style", "display", 'block'],
            ["style", "left", '228px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)']
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
            ["style", "top", '159px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "height", '143px'],
            ["style", "left", '30px'],
            ["color", "background-color", 'rgba(255,255,255,1)']
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
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.8'],
            ["style", "top", '141px'],
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
            { id: "eid113", tween: [ "style", "${_house1Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid127", tween: [ "style", "${_house2Copy}", "top", '57px', { fromValue: '57px'}], position: 0, duration: 0 },
            { id: "eid118", tween: [ "style", "${_house3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid114", tween: [ "style", "${_house3Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid115", tween: [ "style", "${_house1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid111", tween: [ "style", "${_house2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
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
