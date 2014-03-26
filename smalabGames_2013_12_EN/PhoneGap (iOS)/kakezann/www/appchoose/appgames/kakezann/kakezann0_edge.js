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
            id:'hutu',
            type:'rect',
            rect:['81','177','auto','auto','auto','auto']
         },
         {
            id:'muzu',
            type:'rect',
            rect:['81','297','auto','auto','auto','auto']
         },
         {
            id:'smako_3',
            type:'image',
            rect:['398px','565px','353px','339px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"smako%203.png",'0px','0px']
         },
         {
            id:'fukidashi',
            type:'image',
            rect:['105px','585px','407px','118px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fukidashi.png",'0px','0px']
         },
         {
            id:'Text2',
            type:'text',
            rect:['159px','600px','324px','66px','auto','auto'],
            text:"select the stage",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',32,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'ponta2',
            type:'image',
            rect:['757px','160px','123px','97px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ponta2.png",'0px','0px']
         },
         {
            id:'trump021',
            type:'image',
            rect:['105','355px','91px','118px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump021.png",'0px','0px']
         },
         {
            id:'trump026',
            type:'image',
            rect:['174px','393px','91px','118px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump026.png",'0px','0px']
         },
         {
            id:'home',
            type:'rect',
            rect:['705','529','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'home',
            symbolName:'home'
         },
         {
            id:'hutu',
            symbolName:'hutu'
         },
         {
            id:'muzu',
            symbolName:'muzu'
         }
         ]
      },
   states: {
      "Base State": {
         "${_home}": [
            ["style", "top", '540px'],
            ["style", "left", '785px'],
            ["transform", "scaleY", '0.21714'],
            ["transform", "scaleX", '0.26']
         ],
         "${_fukidashi}": [
            ["style", "height", '118px'],
            ["style", "top", '585px'],
            ["style", "left", '105px'],
            ["style", "width", '407px']
         ],
         "${_hutu}": [
            ["style", "top", '219px'],
            ["style", "left", '220px']
         ],
         "${_muzu}": [
            ["style", "top", '377px'],
            ["style", "left", '501px']
         ],
         "${_Text2}": [
            ["style", "left", '159px'],
            ["style", "width", '324px']
         ],
         "${_trump026}": [
            ["style", "height", '118px'],
            ["style", "top", '393px'],
            ["style", "left", '174px'],
            ["style", "width", '91px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["gradient", "background-image", [270,[['rgba(63,202,255,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "width", '1024px']
         ],
         "${_trump021}": [
            ["style", "top", '355px'],
            ["style", "height", '118px'],
            ["style", "width", '91px']
         ],
         "${_smako_3}": [
            ["style", "height", '339px'],
            ["style", "top", '565px'],
            ["style", "left", '398px'],
            ["style", "width", '353px']
         ],
         "${_ponta2}": [
            ["style", "height", '97px'],
            ["style", "top", '160px'],
            ["style", "left", '757px'],
            ["style", "width", '123px']
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
            { id: "eid42", tween: [ "style", "${_muzu}", "left", '501px', { fromValue: '501px'}], position: 0, duration: 0 },
            { id: "eid44", tween: [ "style", "${_hutu}", "top", '219px', { fromValue: '219px'}], position: 0, duration: 0 },
            { id: "eid43", tween: [ "style", "${_hutu}", "left", '220px', { fromValue: '220px'}], position: 0, duration: 0 },
            { id: "eid41", tween: [ "style", "${_muzu}", "top", '377px', { fromValue: '377px'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "transform", "${_home}", "scaleX", '0.26', { fromValue: '0.26'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "transform", "${_home}", "scaleY", '0.21714', { fromValue: '0.21714'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_home}", "left", '785px', { fromValue: '785px'}], position: 0, duration: 0 },
            { id: "eid51", tween: [ "style", "${_home}", "top", '540px', { fromValue: '540px'}], position: 0, duration: 0 }         ]
      }
   }
},
"yasa": {
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
      rect: ['0px','0px','407px','75px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,177,50,1.00)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      type: 'text',
      id: 'Text',
      text: 'easy<br>',
      align: 'center',
      rect: ['18px','22px','372px','53px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["color", "background-color", 'rgba(255,177,50,1.00)'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_Text}": [
            ["style", "top", '22px'],
            ["style", "text-align", 'center'],
            ["style", "left", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '407px']
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
"hutu": {
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
      rect: ['0px','0px','407px','75px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      fill: ['rgba(255,177,50,1.00)'],
      id: 'RoundRectCopy2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      type: 'text',
      id: 'TextCopy',
      text: 'normal',
      align: 'center',
      rect: ['18px','23px','372px','53px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRectCopy2}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["color", "background-color", 'rgba(255,177,50,1.00)'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_TextCopy}": [
            ["style", "top", '23px'],
            ["style", "text-align", 'center'],
            ["style", "left", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '407px']
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
"muzu": {
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
      rect: ['0px','0px','407px','75px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      fill: ['rgba(192,192,192,1)',[270,[['rgba(255,177,50,1.00)',100],['rgba(255,255,255,1.00)',100]]]],
      id: 'RoundRectCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      rect: ['17px','22px','372px','53px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      id: 'TextCopy2',
      text: 'hard',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRectCopy}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["gradient", "background-image", [270,[['rgba(255,177,50,1.00)',100],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_TextCopy2}": [
            ["style", "top", '22px'],
            ["style", "left", '17px'],
            ["style", "text-align", 'center']
         ],
         "${symbolSelector}": [
            ["style", "height", '75px'],
            ["style", "width", '407px']
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
})(jQuery, AdobeEdge, "EDGE-94978823");
