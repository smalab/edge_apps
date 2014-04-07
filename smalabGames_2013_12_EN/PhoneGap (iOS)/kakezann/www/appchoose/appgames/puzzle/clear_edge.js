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
            id:'haikei',
            type:'image',
            rect:['0px','0px','1024px','768px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"haikei.png",'0px','0px']
         },
         {
            id:'smako_3',
            type:'image',
            rect:['141px','225px','979px','973px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"smako%203.png",'0px','0px'],
            transform:[[],[],[],['0.736','0.754']]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['12px','142px','1000px','153px','auto','auto'],
            borderRadius:["31px 31px","31px 31px","31px 31px","31px 31px"],
            fill:["rgba(255,253,253,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],['-5']]
         },
         {
            id:'Text2',
            type:'text',
            rect:['57px','180px','951px','246px','auto','auto'],
            text:"All Stage Clear!!!",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',72,"rgba(255,0,56,1.00)","600","none","normal"],
            transform:[[],['-4'],[],['1.066','1.235']]
         },
         {
            id:'ponta2',
            type:'image',
            rect:['172px','416px','334px','338px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ponta2.png",'0px','0px'],
            transform:[[],[],[],['0.662','0.564']]
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['895px','703px','109px','58px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)",[270,[['rgba(255,186,27,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Text',
            type:'text',
            rect:['895px','707px','109px','49px','auto','auto'],
            text:"Back",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,"rgba(0,0,0,1)","normal","none",""]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_haikei}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RoundRect}": [
            ["style", "top", '703px'],
            ["gradient", "background-image", [270,[['rgba(255,186,27,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '895px']
         ],
         "${_Text}": [
            ["style", "height", '49px'],
            ["style", "top", '707px'],
            ["style", "left", '895px'],
            ["style", "text-align", 'center']
         ],
         "${_smako_3}": [
            ["style", "top", '225px'],
            ["transform", "scaleY", '0.75416'],
            ["style", "height", '973px'],
            ["transform", "scaleX", '0.73594'],
            ["style", "left", '141px'],
            ["style", "width", '979px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_Rectangle}": [
            ["style", "top", '142px'],
            ["style", "border-bottom-left-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [31,31], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '-5deg'],
            ["style", "left", '12px'],
            ["color", "background-color", 'rgba(255,253,253,1.00)']
         ],
         "${_Text2}": [
            ["transform", "rotateZ", '-4deg'],
            ["color", "color", 'rgba(255,0,56,1.00)'],
            ["style", "font-weight", '600'],
            ["style", "left", '57px'],
            ["style", "font-size", '72px'],
            ["style", "top", '180px'],
            ["transform", "scaleY", '1.23483'],
            ["style", "width", '951px'],
            ["transform", "scaleX", '1.06603']
         ],
         "${_ponta2}": [
            ["style", "top", '416px'],
            ["transform", "scaleX", '0.66224'],
            ["transform", "scaleY", '0.56375'],
            ["style", "left", '172px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 17500,
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
})(jQuery, AdobeEdge, "EDGE-16683418");
