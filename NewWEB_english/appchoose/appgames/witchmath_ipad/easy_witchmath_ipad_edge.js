/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['acme, sans-serif']='<script src=\"http://use.edgefonts.net/acme:n4:all.js\"></script>';


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
            id:'target10',
            type:'text',
            rect:['136px','202px','auto','auto','auto','auto'],
            text:"00",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',39,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'target1',
            type:'text',
            rect:['148px','202px','auto','auto','auto','auto'],
            text:"0",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',39,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'HPgauge',
            type:'rect',
            rect:['12px','8px','297px','43px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'HPver',
            type:'rect',
            rect:['20px','13px','282px','32px','auto','auto'],
            fill:["rgba(89,236,66,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'HitPoint',
            type:'text',
            rect:['130px','11px','auto','auto','auto','auto'],
            text:"50",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'Clear',
            type:'text',
            rect:['0px','30px','320px','126px','auto','auto'],
            text:"CLEAR",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',97,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['12px','487px','297px','43px','auto','auto'],
            fill:["rgba(192,192,192,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['20px','494px','282px','32px','auto','auto'],
            fill:["rgba(14,14,14,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'HP',
            type:'text',
            rect:['267px','450px','142px','58px','auto','auto'],
            text:"300",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'matane',
            type:'text',
            rect:['79px','494px','186px','32px','auto','auto'],
            text:"またあそんでね",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,"rgba(255,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'otukare',
            type:'text',
            rect:['86px','13px','149px','32px','auto','auto'],
            text:"おつかれさま",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,"rgba(255,0,0,1)","normal","none","normal"]
         },
         {
            id:'GAME_OVER',
            type:'text',
            rect:['30px','213px','270px','110px','auto','auto'],
            text:"GAME OVER",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',50,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'witchmath',
            type:'rect',
            rect:['0px','0px','320px','550px','auto','auto'],
            fill:["rgba(30,32,107,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'start',
            type:'rect',
            rect:['178','311','auto','auto','auto','auto']
         },
         {
            id:'Text',
            type:'text',
            rect:['19px','404px','282px','126px','auto','auto'],
            text:"Stage1",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',86,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'stm2',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'return',
            display:'none',
            type:'rect',
            rect:['214','505','auto','auto','auto','auto']
         },
         {
            id:'Text3',
            type:'text',
            rect:['20px','175px','289px','43px','auto','auto'],
            text:"2つで合計値にしよう",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'giant_damage',
            type:'image',
            rect:['67px','16px','203px','215px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"otohime_damege.png",'0px','0px']
         },
         {
            id:'giant_attack',
            type:'image',
            rect:['-7px','16px','324px','271px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"otohime_atack.png",'0px','0px']
         },
         {
            id:'giant_standing',
            type:'image',
            rect:['72px','30px','176px','175px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"otohime_standing.png",'0px','0px']
         },
         {
            id:'giant_death',
            type:'image',
            rect:['51px','8px','203px','215px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"otohime_death.png",'0px','0px']
         },
         {
            id:'giant_lost',
            type:'image',
            rect:['34px','10px','203px','215px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"otohime_lost.png",'0px','0px']
         },
         {
            id:'aoki_modify1',
            type:'rect',
            rect:['-87','82','auto','auto','auto','auto']
         },
         {
            id:'Top',
            type:'group',
            rect:['1px','184px','83','58','auto','auto'],
            c:[
            {
               id:'Ellipse',
               type:'ellipse',
               rect:['0px','0px','83px','58px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(172,172,177,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Text2',
               type:'text',
               rect:['11px','11px','62px','36px','auto','auto'],
               text:"Topへ",
               align:"left",
               font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         }],
         symbolInstances: [
         {
            id:'start',
            symbolName:'start'
         },
         {
            id:'aoki_modify1',
            symbolName:'aoki_modify1'
         },
         {
            id:'return',
            symbolName:'return'
         },
         {
            id:'stm2',
            symbolName:'stm2'
         }
         ]
      },
   states: {
      "Base State": {
         "${_aoki_modify1}": [
            ["style", "left", '7px'],
            ["style", "top", '8px']
         ],
         "${_giant_standing}": [
            ["style", "top", '30px'],
            ["style", "height", '175px'],
            ["style", "left", '72px'],
            ["style", "width", '176px']
         ],
         "${_GAME_OVER}": [
            ["style", "top", '213px'],
            ["style", "left", '30px'],
            ["style", "font-size", '50px']
         ],
         "${_Text3}": [
            ["style", "top", '175px'],
            ["style", "height", '43px'],
            ["style", "font-size", '30px'],
            ["style", "left", '20px'],
            ["style", "width", '289px']
         ],
         "${_HPgauge}": [
            ["style", "top", '8px'],
            ["color", "background-color", 'rgba(192,192,192,1.00)']
         ],
         "${_Text2}": [
            ["style", "height", '36px'],
            ["style", "top", '11px'],
            ["style", "left", '11px'],
            ["style", "width", '62px']
         ],
         "${_start}": [
            ["style", "top", '276px'],
            ["style", "opacity", '1'],
            ["style", "left", '96px'],
            ["transform", "scaleY", '0.71579']
         ],
         "${_Top}": [
            ["style", "left", '1px'],
            ["style", "top", '184px']
         ],
         "${_giant_death}": [
            ["style", "top", '8px'],
            ["style", "height", '215px'],
            ["style", "left", '51px'],
            ["style", "width", '203px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(192,192,192,1.00)'],
            ["style", "top", '487px']
         ],
         "${_Clear}": [
            ["style", "top", '30px'],
            ["style", "height", '126px'],
            ["style", "width", '320px'],
            ["style", "left", '0px'],
            ["style", "font-size", '97px']
         ],
         "${_otukare}": [
            ["style", "height", '32px'],
            ["style", "top", '13px'],
            ["style", "left", '86px'],
            ["style", "width", '149px']
         ],
         "${_witchmath}": [
            ["style", "top", '0px'],
            ["style", "height", '550px'],
            ["color", "background-color", 'rgba(30,32,107,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '320px']
         ],
         "${_target10}": [
            ["style", "top", '202px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '136px'],
            ["style", "font-size", '39px']
         ],
         "${_matane}": [
            ["style", "top", '494px'],
            ["style", "font-size", '20px'],
            ["style", "height", '32px'],
            ["color", "color", 'rgba(255,0,0,1.00)'],
            ["style", "left", '89px'],
            ["style", "width", '142px']
         ],
         "${_giant_lost}": [
            ["style", "height", '215px'],
            ["style", "top", '10px'],
            ["style", "left", '34px'],
            ["style", "width", '203px']
         ],
         "${_HitPoint}": [
            ["style", "top", '11px'],
            ["style", "left", '130px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_giant_damage}": [
            ["style", "top", '16px'],
            ["style", "height", '215px'],
            ["style", "left", '67px'],
            ["style", "width", '203px']
         ],
         "${_giant_attack}": [
            ["style", "top", '16px'],
            ["style", "height", '271px'],
            ["style", "left", '-7px'],
            ["style", "width", '324px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(172,172,177,1.00)'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(1,1,1,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '550px'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(1,240,150,0.66)',100]]]],
            ["style", "width", '320px']
         ],
         "${_Text}": [
            ["style", "height", '126px'],
            ["style", "top", '404px'],
            ["style", "left", '19px'],
            ["style", "width", '282px']
         ],
         "${_return}": [
            ["style", "display", 'none']
         ],
         "${_HPver}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '32px'],
            ["style", "top", '13px'],
            ["style", "width", '282px']
         ],
         "${_target1}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '202px'],
            ["style", "left", '148px'],
            ["style", "font-size", '39px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(14,14,14,1.00)'],
            ["style", "top", '494px'],
            ["style", "width", '282px']
         ],
         "${_HP}": [
            ["style", "top", '493px'],
            ["style", "height", '58px'],
            ["style", "display", 'block'],
            ["style", "left", '134px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {
            "home": 0,
            "mydm1": 1000
         },
         timeline: [
            { id: "eid237", tween: [ "style", "${_start}", "left", '96px', { fromValue: '96px'}], position: 0, duration: 0 },
            { id: "eid220", tween: [ "style", "${_matane}", "top", '494px', { fromValue: '494px'}], position: 0, duration: 0 },
            { id: "eid221", tween: [ "style", "${_matane}", "top", '494px', { fromValue: '494px'}], position: 1000, duration: 0 },
            { id: "eid138", tween: [ "style", "${_matane}", "top", '494px', { fromValue: '494px'}], position: 1250, duration: 0 },
            { id: "eid108", tween: [ "style", "${_return}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid241", tween: [ "transform", "${_start}", "scaleY", '0.71579', { fromValue: '0.71579'}], position: 0, duration: 0 },
            { id: "eid219", tween: [ "style", "${_matane}", "left", '89px', { fromValue: '89px'}], position: 0, duration: 0 },
            { id: "eid218", tween: [ "style", "${_matane}", "width", '142px', { fromValue: '142px'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_Rectangle}", "top", '479px', { fromValue: '487px'}], position: 1000, duration: 250 },
            { id: "eid146", tween: [ "style", "${_Rectangle}", "top", '487px', { fromValue: '479px'}], position: 1250, duration: 250 },
            { id: "eid107", tween: [ "style", "${_HP}", "top", '493px', { fromValue: '493px'}], position: 0, duration: 0 },
            { id: "eid139", tween: [ "style", "${_HP}", "top", '488px', { fromValue: '493px'}], position: 1000, duration: 250 },
            { id: "eid147", tween: [ "style", "${_HP}", "top", '496px', { fromValue: '488px'}], position: 1250, duration: 250 },
            { id: "eid233", tween: [ "style", "${_aoki_modify1}", "left", '7px', { fromValue: '7px'}], position: 0, duration: 0 },
            { id: "eid149", tween: [ "style", "${_HPver}", "top", '7px', { fromValue: '13px'}], position: 0, duration: 250 },
            { id: "eid152", tween: [ "style", "${_HPver}", "top", '13px', { fromValue: '7px'}], position: 250, duration: 250 },
            { id: "eid159", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(241,3,3,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1.00)'}], position: 1000, duration: 250 },
            { id: "eid158", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(192,192,192,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(241,3,3,1)'}], position: 1250, duration: 250 },
            { id: "eid93", tween: [ "style", "${_HP}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid160", tween: [ "style", "${_HPgauge}", "top", '0px', { fromValue: '8px'}], position: 0, duration: 250 },
            { id: "eid161", tween: [ "style", "${_HPgauge}", "top", '8px', { fromValue: '0px'}], position: 250, duration: 250 },
            { id: "eid234", tween: [ "style", "${_aoki_modify1}", "top", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid243", tween: [ "style", "${_start}", "top", '276px', { fromValue: '276px'}], position: 0, duration: 0 },
            { id: "eid102", tween: [ "style", "${_HP}", "left", '134px', { fromValue: '134px'}], position: 0, duration: 0 },
            { id: "eid209", tween: [ "style", "${_matane}", "font-size", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid135", tween: [ "style", "${_Rectangle2}", "top", '486px', { fromValue: '494px'}], position: 1000, duration: 250 },
            { id: "eid148", tween: [ "style", "${_Rectangle2}", "top", '494px', { fromValue: '486px'}], position: 1250, duration: 250 },
            { id: "eid162", tween: [ "color", "${_HPgauge}", "background-color", 'rgba(241,3,3,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1.00)'}], position: 0, duration: 250 },
            { id: "eid163", tween: [ "color", "${_HPgauge}", "background-color", 'rgba(192,192,192,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(241,3,3,1)'}], position: 250, duration: 250 },
            { id: "eid150", tween: [ "style", "${_HitPoint}", "top", '5px', { fromValue: '11px'}], position: 0, duration: 250 },
            { id: "eid153", tween: [ "style", "${_HitPoint}", "top", '11px', { fromValue: '5px'}], position: 250, duration: 250 }         ]
      }
   }
},
"bullet1": {
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
      id: 'Magic_NumberCopy',
      type: 'image',
      rect: ['-38px','-38px','76px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Magic%20Number.png','0px','0px']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,0.00)','normal','none','normal'],
      type: 'text',
      id: 'Number1',
      text: '1',
      align: 'center',
      rect: ['-8px','-16px','16px','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '76px']
         ],
         "${_Magic_NumberCopy}": [
            ["style", "top", '-38px'],
            ["style", "height", '76px'],
            ["style", "left", '-38px'],
            ["style", "width", '76px']
         ],
         "${_Number1}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "top", '-16px'],
            ["style", "left", '-8px'],
            ["style", "width", '16px']
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
"circle": {
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
      id: 'Magic_Number_frip',
      type: 'image',
      rect: ['-38px','-38px','76px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Magic%20Number%20frip.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Magic_Number_frip}": [
            ["style", "height", '76px'],
            ["style", "top", '-38px'],
            ["style", "left", '-38px'],
            ["style", "width", '76px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '76px']
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
"bullet2": {
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
      id: 'Magic_Number',
      type: 'image',
      rect: ['-38px','-38px','76px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Magic%20Number.png','0px','0px']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,0.00)','normal','none','normal'],
      type: 'text',
      id: 'Number2',
      text: '2',
      align: 'center',
      rect: ['-8px','-16px','16px','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '76px']
         ],
         "${_Magic_Number}": [
            ["style", "height", '76px'],
            ["style", "top", '-38px'],
            ["style", "left", '-38px'],
            ["style", "width", '76px']
         ],
         "${_Number2}": [
            ["style", "top", '-16px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '-8px'],
            ["style", "width", '16px']
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
"bullet3": {
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
      id: 'Magic_Number',
      type: 'image',
      rect: ['-38px','-38px','76px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Magic%20Number.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['-8px','-16px','16px','auto','auto','auto'],
      id: 'Number3',
      text: '3',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Number3}": [
            ["style", "top", '-16px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '-8px'],
            ["style", "width", '16px']
         ],
         "${_Magic_Number}": [
            ["style", "height", '76px'],
            ["style", "top", '-38px'],
            ["style", "left", '-38px'],
            ["style", "width", '76px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '76px']
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
"bullet4": {
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
      id: 'Magic_Number',
      type: 'image',
      rect: ['-38px','-38px','76px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Magic%20Number.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['-8px','-16px','16px','auto','auto','auto'],
      id: 'Number4',
      text: '4',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,0.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Number4}": [
            ["style", "top", '-16px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '-8px'],
            ["style", "width", '16px']
         ],
         "${_Magic_Number}": [
            ["style", "height", '76px'],
            ["style", "top", '-38px'],
            ["style", "left", '-38px'],
            ["style", "width", '76px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '76px']
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
"bullet5": {
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
      id: 'Magic_Number',
      type: 'image',
      rect: ['-38px','-38px','76px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Magic%20Number.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['-8px','-16px','16px','auto','auto','auto'],
      id: 'Number5',
      text: '5',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Number5}": [
            ["style", "top", '-16px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '-8px'],
            ["style", "width", '16px']
         ],
         "${_Magic_Number}": [
            ["style", "height", '76px'],
            ["style", "top", '-38px'],
            ["style", "left", '-38px'],
            ["style", "width", '76px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '76px']
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
"bullet6": {
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
      id: 'Magic_Number',
      type: 'image',
      rect: ['-38px','-38px','76px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Magic%20Number.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['-8px','-16px','16px','auto','auto','auto'],
      id: 'Number6',
      text: '6',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Magic_Number}": [
            ["style", "height", '76px'],
            ["style", "top", '-38px'],
            ["style", "left", '-38px'],
            ["style", "width", '76px']
         ],
         "${_Number6}": [
            ["style", "top", '-16px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '-8px'],
            ["style", "width", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '76px']
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
"bullet7": {
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
      id: 'Magic_Number',
      type: 'image',
      rect: ['-38px','-38px','76px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Magic%20Number.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['-8px','-16px','16px','auto','auto','auto'],
      id: 'Number7',
      text: '7',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Number7}": [
            ["style", "top", '-16px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '-8px'],
            ["style", "width", '16px']
         ],
         "${_Magic_Number}": [
            ["style", "height", '76px'],
            ["style", "top", '-38px'],
            ["style", "left", '-38px'],
            ["style", "width", '76px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '76px']
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
"bullet8": {
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
      id: 'Magic_Number',
      type: 'image',
      rect: ['-38px','-38px','76px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Magic%20Number.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['-8px','-16px','16px','auto','auto','auto'],
      id: 'Number8',
      text: '8',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,0.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Number8}": [
            ["style", "top", '-16px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '-8px'],
            ["style", "width", '16px']
         ],
         "${_Magic_Number}": [
            ["style", "height", '76px'],
            ["style", "top", '-38px'],
            ["style", "left", '-38px'],
            ["style", "width", '76px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '76px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8000,
         autoPlay: true,
         timeline: [
            { id: "eid40", tween: [ "color", "${_Number8}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 8000, duration: 0 }         ]
      }
   }
},
"bullet9": {
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
      id: 'Magic_Number',
      type: 'image',
      rect: ['-38px','-38px','76px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Magic%20Number.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['-8px','-16px','16px','auto','auto','auto'],
      id: 'Number9',
      text: '9',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Number9}": [
            ["style", "top", '-16px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '-8px'],
            ["style", "width", '16px']
         ],
         "${_Magic_Number}": [
            ["style", "height", '76px'],
            ["style", "top", '-38px'],
            ["style", "left", '-38px'],
            ["style", "width", '76px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '76px']
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
"start_butten": {
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
      rect: ['0px','0px','209px','58px','auto','auto'],
      borderRadius: ['40px 40px','40px 40px','40px 40px','40px 40px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['66px','11px','auto','auto','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text',
      text: 'START',
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
            ["style", "border-bottom-left-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '58px'],
            ["style", "border-top-left-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "border-top-right-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text}": [
            ["style", "left", '66px'],
            ["style", "top", '11px']
         ],
         "${symbolSelector}": [
            ["style", "height", '58px'],
            ["style", "width", '209px']
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
"start": {
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
      rect: ['0px','0px','127px','95px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',48,'rgba(13,13,13,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'Start',
      align: 'left',
      rect: ['6px','14px','88px','58px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '14px'],
            ["color", "color", 'rgba(13,13,13,1.00)'],
            ["style", "left", '6px'],
            ["style", "font-size", '48px']
         ],
         "${_Ellipse}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '95px'],
            ["style", "width", '127px']
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
"whichmath": {
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
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','320px','480px','auto','auto'],
      fill: ['rgba(81,23,23,1.00)']
   },
   {
      type: 'text',
      id: 'Text',
      text: 'Which Math',
      rect: ['33px','14px','220px','126px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',86,'rgba(255,255,255,1.00)','normal','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(81,23,23,1.00)'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text}": [
            ["style", "top", '-225px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '36px'],
            ["style", "font-size", '86px']
         ],
         "${symbolSelector}": [
            ["style", "height", '480px'],
            ["style", "width", '320px']
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
            { id: "eid69", tween: [ "style", "${_Text}", "top", '-225px', { fromValue: '-225px'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_Text}", "left", '36px', { fromValue: '36px'}], position: 0, duration: 0 }         ]
      }
   }
},
"replay": {
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
      rect: ['3px','0px','90px','87px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      id: 'Text2',
      text: 'replay??',
      rect: ['0px','27px','90px','71px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',[24,''],'rgba(0,0,0,1)','normal','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '3px'],
            ["style", "top", '0px']
         ],
         "${_Text2}": [
            ["style", "top", '27px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '98px'],
            ["style", "width", '93px']
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
"replay1": {
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
      rect: ['0px','0px','170px','95px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['14px','24px','153px','58px','auto','auto'],
      id: 'Text3',
      text: 'replay??<br>',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',36,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '24px'],
            ["style", "left", '14px'],
            ["style", "font-size", '36px']
         ],
         "${_Ellipse2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '95px'],
            ["style", "width", '170px']
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
"stm1": {
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
      rect: ['0px','0px','127px','95px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      font: ['acme, sans-serif',31,'rgba(0,0,0,1.00)','100','none','normal'],
      type: 'text',
      id: 'Text5',
      text: 'せつめい',
      align: 'left',
      rect: ['1px','27px','127px','42px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text5}": [
            ["style", "top", '27px'],
            ["style", "font-size", '31px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'acme, sans-serif'],
            ["style", "height", '42px'],
            ["style", "font-weight", '100'],
            ["style", "left", '1px'],
            ["style", "width", '127px']
         ],
         "${symbolSelector}": [
            ["style", "height", '95px'],
            ["style", "width", '128px']
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
"return": {
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
      rect: ['0px','0px','106px','42px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(194,255,39,1.00)']
   },
   {
      font: ['acme, sans-serif',18,'rgba(0,0,0,1)','100','none','normal'],
      type: 'text',
      id: 'Text13',
      text: 'もどる',
      align: 'left',
      rect: ['23px','11px','106px','42px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["color", "background-color", 'rgba(194,255,39,1.00)'],
            ["style", "height", '42px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '106px']
         ],
         "${symbolSelector}": [
            ["style", "height", '53px'],
            ["style", "width", '129px']
         ],
         "${_Text13}": [
            ["style", "left", '23px'],
            ["style", "top", '11px']
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
"stm2": {
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
      type: 'rect',
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','320px','550px','auto','auto'],
      fill: ['rgba(127,167,212,1.00)']
   },
   {
      transform: [[0,0],['-1']],
      type: 'text',
      align: 'left',
      id: 'Text8',
      text: 'あいての体力です。',
      rect: ['8px','77px','72px','58px','auto','auto'],
      font: ['acme, sans-serif',13,'rgba(0,0,0,1.00)','100','none','normal']
   },
   {
      font: ['acme, sans-serif',31,'rgba(0,0,0,1)','100','none','normal'],
      type: 'text',
      id: 'Text6',
      text: '～ゲームせつめい～',
      align: 'left',
      rect: ['20px','5px','297px','58px','auto','auto']
   },
   {
      id: 'gmstm',
      type: 'image',
      rect: ['82px','45px','235px','295px','auto','auto'],
      fill: ['rgba(0,0,0,0)','gmstm.JPG','0px','0px']
   },
   {
      transform: [[0,0],['-13']],
      type: 'text',
      align: 'left',
      id: 'Text7',
      text: '→',
      rect: ['41px','16px','80px','36px','auto','auto'],
      font: ['acme, sans-serif',69,'rgba(255,0,0,1.00)','100','none','normal']
   },
   {
      transform: [[0,0],['-8']],
      type: 'text',
      align: 'left',
      id: 'Text9',
      text: '→',
      rect: ['63px','104px','95px','32px','auto','auto'],
      font: ['acme, sans-serif',76,'rgba(255,0,0,1)','100','none','normal']
   },
   {
      font: ['acme, sans-serif',12,'rgba(0,0,0,1.00)','100','none','normal'],
      type: 'text',
      id: 'Text10',
      text: 'のこり時間です。',
      align: 'left',
      rect: ['11px','170px','57px','58px','auto','auto']
   },
   {
      transform: [[0,0],['-34']],
      type: 'text',
      align: 'left',
      id: 'Text11',
      text: '→',
      rect: ['98px','284px','72px','58px','auto','auto'],
      font: ['acme, sans-serif',71,'rgba(255,0,0,1.00)','100','none','normal']
   },
   {
      font: ['acme, sans-serif',14,'rgba(0,0,0,1.00)','100','none','normal'],
      type: 'text',
      id: 'Text12',
      text: 'これはせんたくのすうじです。まん中にあるもんだい（せつめいでは１９のところです。）と同じになるようにすうじのせんたくしから3つえらびます。<br><br>正解ならあいてにこうげき、まちがいなら自分にこうげきが与えられます。',
      align: 'left',
      rect: ['20px','352px','297px','154px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gmstm}": [
            ["style", "top", '45px'],
            ["style", "height", '295px'],
            ["style", "left", '82px'],
            ["style", "width", '235px']
         ],
         "${_Text7}": [
            ["style", "top", '16px'],
            ["transform", "rotateZ", '-13deg'],
            ["color", "color", 'rgba(255,0,0,1.00)'],
            ["style", "left", '41px'],
            ["style", "font-size", '69px']
         ],
         "${_Text11}": [
            ["style", "top", '284px'],
            ["transform", "rotateZ", '-34deg'],
            ["color", "color", 'rgba(255,0,0,1.00)'],
            ["style", "left", '98px'],
            ["style", "font-size", '71px']
         ],
         "${_Text8}": [
            ["style", "top", '77px'],
            ["style", "font-size", '13px'],
            ["transform", "rotateZ", '-1deg'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '58px'],
            ["style", "left", '8px'],
            ["style", "width", '72px']
         ],
         "${_Text10}": [
            ["style", "top", '170px'],
            ["style", "font-size", '12px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '58px'],
            ["style", "left", '11px'],
            ["style", "width", '57px']
         ],
         "${_Text6}": [
            ["style", "top", '5px'],
            ["style", "left", '20px'],
            ["style", "width", '297px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(127,167,212,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '550px']
         ],
         "${_Text12}": [
            ["style", "top", '352px'],
            ["style", "height", '154px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '20px'],
            ["style", "font-size", '14px']
         ],
         "${_Text9}": [
            ["style", "top", '104px'],
            ["style", "font-size", '76px'],
            ["style", "left", '63px'],
            ["transform", "rotateZ", '-8deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '550px'],
            ["style", "width", '320px']
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
"top": {
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
      rect: ['31px','0px','121px','93px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'つぎの<br>ステージへ！',
      align: 'center',
      rect: ['32px','7px','122px','71px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '7px'],
            ["style", "font-size", '20px'],
            ["style", "height", '71px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '32px'],
            ["style", "width", '122px']
         ],
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["style", "height", '93px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '31px'],
            ["style", "width", '121px']
         ],
         "${symbolSelector}": [
            ["style", "height", '87px'],
            ["style", "width", '184px']
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
"gmtop": {
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
      rect: ['0px','0px','134px','78px','auto','auto'],
      id: 'Rectangle3',
      stroke: [1,'rgb(0, 0, 0)','dashed'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',19,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text4',
      text: 'ゲーム選択画面へ戻る',
      align: 'center',
      rect: ['13px','13px','108px','80px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3}": [
            ["style", "top", '0px'],
            ["style", "border-width", '1px'],
            ["style", "height", '78px'],
            ["style", "border-style", 'dashed'],
            ["style", "left", '0px'],
            ["style", "width", '134px']
         ],
         "${_Text4}": [
            ["style", "top", '13px'],
            ["style", "left", '13px'],
            ["style", "font-size", '19px']
         ],
         "${symbolSelector}": [
            ["style", "height", '93px'],
            ["style", "width", '136px']
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
"aoki_modify1": {
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
      rect: ['17px','256px','307px','43px','auto','auto'],
      transform: [],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',19,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text3',
      text: 'ココから2つえらんでこうげき！',
      align: 'left',
      type: 'text'
   },
   {
      type: 'text',
      rect: ['25px','0px','auto','auto','auto','auto'],
      id: 'Text7',
      text: 'たしてココのすうじになるよう',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',19,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      id: 'mihon',
      type: 'image',
      rect: ['5px','41px','299px','211px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mihon5.PNG','0px','0px']
   },
   {
      rect: ['124px','29px','59px','59px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [1,'rgba(255,0,0,1.00)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,0,0,0.13)']
   },
   {
      rect: ['92px','43px','8px','28px','auto','auto'],
      transform: [[0,0],['90']],
      id: 'Rectangle3Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,0,0,1.00)']
   },
   {
      rect: ['12px','211px','29px','auto','auto','auto'],
      transform: [[0,0],['48']],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(255,255,26,1.00)','normal','none','normal'],
      id: 'Text6Copy',
      text: '▲',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0px','236px','24px','9px','auto','auto'],
      transform: [[0,0],['-37']],
      id: 'Rectangle3Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,26,1.00)']
   },
   {
      rect: ['82px','24px','8px','32px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,0,0,1.00)']
   },
   {
      rect: ['82px','23px','113px','2px','auto','auto'],
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,0,0,1)']
   },
   {
      rect: ['99px','40px','29px','auto','auto','auto'],
      transform: [[0,0],['90']],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(255,0,0,1.00)','normal','none','normal'],
      id: 'Text6',
      text: '▲',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0px','278px','94px','2px','auto','auto'],
      id: 'Rectangle4Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,26,1.00)']
   },
   {
      rect: ['-103px','192px','24px','9px','auto','auto'],
      transform: [[0,0],['-3']],
      id: 'Rectangle3Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,0,0,1.00)']
   },
   {
      rect: ['15px','155px','278px','89px','auto','auto'],
      borderRadius: ['30px 30px','30px 30px','30px 30px','30px 30px'],
      id: 'Rectangle8',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,239,0,0.24)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["color", "background-color", 'rgba(255,0,0,0.13)'],
            ["style", "top", '29px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '59px'],
            ["color", "border-color", 'rgba(255,0,0,1.00)'],
            ["style", "left", '124px'],
            ["style", "width", '59px']
         ],
         "${_Text7}": [
            ["style", "left", '25px'],
            ["style", "top", '0px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '211px'],
            ["transform", "rotateZ", '48deg'],
            ["color", "color", 'rgba(255,255,26,1.00)'],
            ["style", "width", '29px'],
            ["style", "left", '12px'],
            ["style", "font-size", '26px']
         ],
         "${_Text3}": [
            ["style", "top", '256px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '43px'],
            ["style", "width", '307px'],
            ["style", "left", '17px'],
            ["style", "font-size", '19px']
         ],
         "${_Rectangle3Copy}": [
            ["color", "background-color", 'rgba(255,255,26,1.00)'],
            ["transform", "rotateZ", '-37deg'],
            ["style", "height", '9px'],
            ["style", "top", '236px'],
            ["style", "left", '0px'],
            ["style", "width", '24px']
         ],
         "${_Rectangle3Copy3}": [
            ["style", "top", '43px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '28px'],
            ["style", "left", '92px'],
            ["style", "width", '8px']
         ],
         "${_Text6}": [
            ["style", "top", '40px'],
            ["transform", "rotateZ", '90deg'],
            ["color", "color", 'rgba(255,0,0,1.00)'],
            ["style", "font-size", '25px'],
            ["style", "left", '99px'],
            ["style", "width", '29px']
         ],
         "${_Rectangle4Copy}": [
            ["style", "top", '278px'],
            ["style", "height", '2px'],
            ["color", "background-color", 'rgba(255,255,26,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '94px']
         ],
         "${_Rectangle3Copy2}": [
            ["color", "background-color", 'rgba(255,255,26,1.00)'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '9px'],
            ["style", "top", '257px'],
            ["style", "left", '-13px'],
            ["style", "width", '35px']
         ],
         "${symbolSelector}": [
            ["style", "height", '299px'],
            ["style", "width", '324px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '24px'],
            ["style", "height", '32px'],
            ["style", "left", '82px'],
            ["style", "width", '8px']
         ],
         "${_mihon}": [
            ["style", "height", '211px'],
            ["style", "top", '41px'],
            ["style", "left", '5px'],
            ["style", "width", '299px']
         ],
         "${_Rectangle4}": [
            ["style", "top", '23px'],
            ["style", "height", '2px'],
            ["style", "left", '82px'],
            ["style", "width", '113px']
         ],
         "${_Rectangle8}": [
            ["color", "background-color", 'rgba(255,239,0,0.24)'],
            ["style", "border-top-left-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '15px'],
            ["style", "width", '278px'],
            ["style", "top", '155px'],
            ["style", "border-bottom-left-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '89px'],
            ["style", "border-width", '1px'],
            ["style", "border-top-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ]
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
            { id: "eid289", tween: [ "style", "${_Rectangle3Copy2}", "width", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
            { id: "eid248", tween: [ "transform", "${_Rectangle3Copy2}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 0, duration: 0 },
            { id: "eid292", tween: [ "style", "${_Rectangle3Copy2}", "left", '-13px', { fromValue: '-13px'}], position: 0, duration: 0 },
            { id: "eid293", tween: [ "style", "${_Rectangle3Copy2}", "top", '257px', { fromValue: '257px'}], position: 0, duration: 0 },
            { id: "eid258", tween: [ "color", "${_Rectangle3Copy2}", "background-color", 'rgba(255,255,26,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,26,1.00)'}], position: 0, duration: 0 }         ]
      }
   }
},
"aoki_modify2": {
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
      type: 'text',
      rect: ['16px','256px','306px','56px','auto','auto'],
      id: 'Text2',
      text: 'ココから3つえらんでこうげき！',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',19,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      id: 'mihon2',
      type: 'image',
      rect: ['13px','33px','283px','225px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mihon24.PNG','0px','0px']
   },
   {
      type: 'text',
      rect: ['21px','0px','306px','56px','auto','auto'],
      id: 'Text2Copy',
      text: 'たしてココのすうじになるよう',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',19,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      rect: ['78px','23px','113px','2px','auto','auto'],
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,0,0,1)']
   },
   {
      rect: ['78px','25px','8px','32px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,0,0,1.00)']
   },
   {
      rect: ['92px','39px','8px','28px','auto','auto'],
      transform: [[0,0],['90']],
      id: 'Rectangle3Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,0,0,1.00)']
   },
   {
      rect: ['99px','36px','29px','auto','auto','auto'],
      transform: [[0,0],['90']],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(255,0,0,1.00)','normal','none','normal'],
      id: 'Text6',
      text: '▲',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['126px','26px','59px','59px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      transform: [[0,0],[],[],['0.98','0.98']],
      id: 'Ellipse2',
      stroke: [1,'rgba(255,0,0,1.00)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,0,0,0.13)']
   },
   {
      rect: ['16px','152px','278px','89px','auto','auto'],
      borderRadius: ['30px 30px','30px 30px','30px 30px','30px 30px'],
      id: 'Rectangle8',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,239,0,0.24)']
   },
   {
      rect: ['12px','210px','29px','auto','auto','auto'],
      transform: [[0,0],['48']],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(255,255,26,1.00)','normal','none','normal'],
      id: 'Text6Copy',
      text: '▲',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0px','235px','24px','9px','auto','auto'],
      transform: [[0,0],['-37']],
      id: 'Rectangle3Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,26,1.00)']
   },
   {
      rect: ['-13px','256px','24px','9px','auto','auto'],
      transform: [[0,0],['-3']],
      id: 'Rectangle3Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,0,0,1.00)']
   },
   {
      rect: ['0px','278px','94px','2px','auto','auto'],
      id: 'Rectangle4Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["color", "background-color", 'rgba(255,0,0,0.1289)'],
            ["transform", "scaleX", '0.98'],
            ["style", "border-style", 'solid'],
            ["style", "left", '126px'],
            ["style", "width", '59px'],
            ["style", "top", '26px'],
            ["transform", "scaleY", '0.98'],
            ["style", "height", '59px'],
            ["color", "border-color", 'rgb(255, 0, 0)']
         ],
         "${_Text2Copy}": [
            ["style", "top", '0px'],
            ["style", "height", '56px'],
            ["style", "width", '306px'],
            ["style", "left", '21px'],
            ["style", "font-size", '19px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '210px'],
            ["transform", "rotateZ", '48deg'],
            ["color", "color", 'rgba(255,255,26,1)'],
            ["style", "width", '29px'],
            ["style", "left", '12px'],
            ["style", "font-size", '26px']
         ],
         "${_Rectangle3Copy2}": [
            ["color", "background-color", 'rgba(255,255,26,1)'],
            ["transform", "rotateZ", '-37deg'],
            ["style", "height", '9px'],
            ["style", "top", '235px'],
            ["style", "left", '0px'],
            ["style", "width", '24px']
         ],
         "${_Text2}": [
            ["style", "top", '256px'],
            ["style", "height", '56px'],
            ["style", "font-size", '19px'],
            ["style", "left", '16px'],
            ["style", "width", '306px']
         ],
         "${_Rectangle3Copy}": [
            ["style", "top", '39px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '28px'],
            ["style", "left", '92px'],
            ["style", "width", '8px']
         ],
         "${_Text6}": [
            ["style", "top", '36px'],
            ["transform", "rotateZ", '90deg'],
            ["color", "color", 'rgba(255,0,0,1)'],
            ["style", "font-size", '25px'],
            ["style", "left", '99px'],
            ["style", "width", '29px']
         ],
         "${_Rectangle4Copy}": [
            ["style", "top", '278px'],
            ["style", "height", '2px'],
            ["color", "background-color", 'rgba(255,255,26,1)'],
            ["style", "left", '0px'],
            ["style", "width", '94px']
         ],
         "${_mihon2}": [
            ["style", "top", '33px'],
            ["style", "left", '13px'],
            ["style", "height", '225px']
         ],
         "${symbolSelector}": [
            ["style", "height", '312px'],
            ["style", "width", '327px']
         ],
         "${_Rectangle3Copy3}": [
            ["color", "background-color", 'rgba(255,255,26,1)'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '9px'],
            ["style", "top", '256px'],
            ["style", "left", '-13px'],
            ["style", "width", '35px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '25px'],
            ["style", "height", '32px'],
            ["style", "left", '78px'],
            ["style", "width", '8px']
         ],
         "${_Rectangle4}": [
            ["style", "top", '23px'],
            ["style", "height", '2px'],
            ["style", "left", '78px'],
            ["style", "width", '113px']
         ],
         "${_Rectangle8}": [
            ["color", "background-color", 'rgba(255,239,0,0.2383)'],
            ["style", "border-top-left-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "left", '16px'],
            ["style", "width", '278px'],
            ["style", "top", '152px'],
            ["style", "border-bottom-left-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '89px'],
            ["style", "border-width", '1px'],
            ["style", "border-top-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ]
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
"aoki_modify3": {
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
      type: 'text',
      rect: ['11px','181px','297px','42px','auto','auto'],
      id: 'Text3',
      text: 'じかんせいげん　が　あるよ！',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',19,'rgba(255,251,251,1)','normal','none','normal']
   },
   {
      id: 'mihon3',
      type: 'image',
      rect: ['0px','47px','312px','205px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mihon34.PNG','0px','0px']
   },
   {
      rect: ['39px','49px','8px','42px','auto','auto'],
      transform: [[0,0],['90']],
      id: 'Rectangle3Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,255,135,1.00)']
   },
   {
      rect: ['55px','54px','29px','36px','auto','auto'],
      transform: [[0,0],['90']],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(0,255,135,1.00)','normal','none','normal'],
      id: 'Text6',
      text: '▲',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['22px','24px','8px','46px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,255,135,1.00)']
   },
   {
      rect: ['90px','46px','127px','68px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [1,'rgba(0,255,199,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(0,255,135,0.10)']
   },
   {
      rect: ['22px','23px','133px','2px','auto','auto'],
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,255,135,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '54px'],
            ["style", "width", '29px'],
            ["transform", "rotateZ", '90deg'],
            ["color", "color", 'rgba(0,255,135,1.00)'],
            ["style", "height", '36px'],
            ["style", "left", '55px'],
            ["style", "font-size", '25px']
         ],
         "${_Rectangle3Copy}": [
            ["color", "background-color", 'rgba(0,255,135,1.00)'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '42px'],
            ["style", "top", '49px'],
            ["style", "left", '39px'],
            ["style", "width", '8px']
         ],
         "${_mihon3}": [
            ["style", "top", '47px'],
            ["style", "left", '0px'],
            ["style", "height", '205px']
         ],
         "${symbolSelector}": [
            ["style", "height", '252px'],
            ["style", "width", '312px']
         ],
         "${_Text3}": [
            ["style", "top", '0px'],
            ["style", "height", '42px'],
            ["style", "font-size", '19px'],
            ["style", "left", '22px'],
            ["style", "width", '270px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '24px'],
            ["style", "height", '46px'],
            ["color", "background-color", 'rgba(0,255,135,1.00)'],
            ["style", "left", '22px'],
            ["style", "width", '8px']
         ],
         "${_Rectangle4}": [
            ["style", "top", '23px'],
            ["style", "height", '2px'],
            ["color", "background-color", 'rgba(0,255,135,1.00)'],
            ["style", "left", '22px'],
            ["style", "width", '133px']
         ],
         "${_RoundRect}": [
            ["style", "top", '46px'],
            ["color", "background-color", 'rgba(0,255,135,0.10)'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '90px'],
            ["color", "border-color", 'rgba(0,255,199,1.00)']
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
            { id: "eid209", tween: [ "style", "${_Text3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid205", tween: [ "style", "${_Text3}", "width", '270px', { fromValue: '270px'}], position: 0, duration: 0 },
            { id: "eid210", tween: [ "style", "${_Text3}", "left", '22px', { fromValue: '22px'}], position: 0, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-9528297");
