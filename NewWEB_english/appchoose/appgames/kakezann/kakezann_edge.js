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
            id:'yasa',
            type:'rect',
            rect:['81','57','auto','auto','auto','auto']
         },
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
            id:'RoundRect',
            type:'rect',
            rect:['861px','671px','123px','47px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(255,213,88,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"]
         },
         {
            id:'Text',
            type:'text',
            rect:['861px','671px','123px','47px','auto','auto'],
            text:"戻る",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',32,"rgba(0,0,0,1)","normal","none","normal"]
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
            text:"ステージをえらんでね",
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
         }],
         symbolInstances: [
         {
            id:'yasa',
            symbolName:'yasa'
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
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,213,88,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_fukidashi}": [
            ["style", "height", '118px'],
            ["style", "top", '585px'],
            ["style", "left", '105px'],
            ["style", "width", '407px']
         ],
         "${_hutu}": [
            ["style", "top", '279px'],
            ["style", "left", '276px']
         ],
         "${_muzu}": [
            ["style", "top", '414px'],
            ["style", "left", '533px']
         ],
         "${_Text2}": [
            ["style", "left", '159px'],
            ["style", "width", '324px']
         ],
         "${_yasa}": [
            ["style", "top", '149px'],
            ["style", "left", '84px']
         ],
         "${_Text}": [
            ["style", "top", '671px'],
            ["style", "height", '47px'],
            ["style", "width", '123px'],
            ["style", "left", '861px'],
            ["style", "font-size", '32px']
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
            { id: "eid32", tween: [ "style", "${_muzu}", "left", '533px', { fromValue: '533px'}], position: 0, duration: 0 },
            { id: "eid34", tween: [ "style", "${_yasa}", "left", '84px', { fromValue: '84px'}], position: 0, duration: 0 },
            { id: "eid36", tween: [ "style", "${_hutu}", "top", '279px', { fromValue: '279px'}], position: 0, duration: 0 },
            { id: "eid38", tween: [ "style", "${_yasa}", "top", '149px', { fromValue: '149px'}], position: 0, duration: 0 },
            { id: "eid30", tween: [ "style", "${_hutu}", "left", '276px', { fromValue: '276px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_muzu}", "top", '414px', { fromValue: '414px'}], position: 0, duration: 0 }         ]
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
      rect: ['18px','22px','372px','53px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      id: 'Text',
      text: 'やさしい<br>',
      align: 'center',
      type: 'text'
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
      rect: ['18px','23px','372px','53px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      id: 'TextCopy',
      text: 'ふつう',
      align: 'center',
      type: 'text'
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
      type: 'text',
      rect: ['17px','22px','372px','53px','auto','auto'],
      id: 'TextCopy2',
      text: 'むずかしい',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none','']
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
