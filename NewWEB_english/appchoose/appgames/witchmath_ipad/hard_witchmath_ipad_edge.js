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
            id:'top',
            type:'rect',
            rect:['156','225','auto','auto','auto','auto']
         },
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
            rect:['0px','35px','320px','126px','auto','auto'],
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
            rect:['94px','13px','208px','42px','auto','auto'],
            text:"おつかれさま",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,"rgba(255,0,0,1)","normal","none","normal"]
         },
         {
            id:'GAME_OVER',
            type:'text',
            rect:['45px','193px','250px','110px','auto','auto'],
            text:"GAME OVER",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',50,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'witchmath',
            type:'rect',
            rect:['0px','0px','320px','550px','auto','auto'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'start',
            type:'rect',
            rect:['178','311','auto','auto','auto','auto']
         },
         {
            id:'return',
            display:'none',
            type:'rect',
            rect:['214','505','auto','auto','auto','auto']
         },
         {
            id:'Text2',
            type:'text',
            rect:['22px','405px','283px','112px','auto','auto'],
            text:"Stage3",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',83,"rgba(255,251,251,1.00)","normal","none",""]
         },
         {
            id:'giant_damage',
            type:'image',
            rect:['70px','29px','203px','215px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"giant_damage.png",'0px','0px']
         },
         {
            id:'giant_death',
            type:'image',
            rect:['70px','11px','203px','215px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"giant_death.png",'0px','0px']
         },
         {
            id:'giant_lost',
            type:'image',
            rect:['46px','13px','203px','215px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"giant_lost.png",'0px','0px']
         },
         {
            id:'giant_standing',
            type:'image',
            rect:['62px','0px','203px','215px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"giant_standing.png",'0px','0px']
         },
         {
            id:'giant_attack',
            type:'image',
            rect:['70px','11px','203px','215px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"giant_attack.png",'0px','0px']
         },
         {
            id:'time100',
            type:'text',
            rect:['106px','138px','auto','auto','auto','auto'],
            text:"000<br>",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',58,"rgba(124,124,124,1.00)","normal","none","normal"]
         },
         {
            id:'time10',
            type:'text',
            rect:['124px','138px','auto','auto','auto','auto'],
            text:"00",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',58,"rgba(124,124,124,1.00)","normal","none","normal"]
         },
         {
            id:'time1',
            type:'text',
            rect:['142px','138px','auto','auto','auto','auto'],
            text:"0",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',58,"rgba(124,124,124,1.00)","normal","none","normal"]
         },
         {
            id:'aoki_modify3',
            type:'rect',
            rect:['-224','228','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'start',
            symbolName:'start'
         },
         {
            id:'aoki_modify3',
            symbolName:'aoki_modify3'
         },
         {
            id:'top',
            symbolName:'top'
         },
         {
            id:'return',
            symbolName:'return'
         }
         ]
      },
   states: {
      "Base State": {
         "${_top}": [
            ["style", "top", '159px'],
            ["transform", "scaleY", '0.83908'],
            ["transform", "scaleX", '0.69022'],
            ["style", "left", '-50px'],
            ["style", "display", 'block']
         ],
         "${_Rectangle2}": [
            ["style", "top", '494px'],
            ["color", "background-color", 'rgba(14,14,14,1.00)'],
            ["style", "width", '282px']
         ],
         "${_giant_standing}": [
            ["style", "height", '215px'],
            ["style", "top", '0px'],
            ["style", "left", '62px'],
            ["style", "width", '203px']
         ],
         "${_GAME_OVER}": [
            ["style", "top", '193px'],
            ["style", "font-size", '50px'],
            ["style", "left", '45px'],
            ["style", "width", '250px']
         ],
         "${_HPgauge}": [
            ["style", "top", '8px'],
            ["color", "background-color", 'rgba(192,192,192,1.00)']
         ],
         "${_Text2}": [
            ["style", "top", '405px'],
            ["style", "font-size", '83px'],
            ["color", "color", 'rgba(255,251,251,1.00)'],
            ["style", "height", '112px'],
            ["style", "left", '22px'],
            ["style", "width", '283px']
         ],
         "${_time10}": [
            ["style", "top", '138px'],
            ["color", "color", 'rgba(124,124,124,1.00)'],
            ["style", "left", '124px'],
            ["style", "font-size", '58px']
         ],
         "${_start}": [
            ["style", "top", '275px'],
            ["style", "opacity", '1'],
            ["style", "left", '96px']
         ],
         "${_aoki_modify3}": [
            ["style", "left", '8px'],
            ["style", "top", '8px']
         ],
         "${_giant_death}": [
            ["style", "height", '215px'],
            ["style", "top", '11px'],
            ["style", "left", '70px'],
            ["style", "width", '203px']
         ],
         "${_time100}": [
            ["color", "color", 'rgba(124,124,124,1.00)'],
            ["style", "top", '138px'],
            ["style", "left", '106px'],
            ["style", "font-size", '58px']
         ],
         "${_time1}": [
            ["color", "color", 'rgba(124,124,124,1.00)'],
            ["style", "top", '138px'],
            ["style", "left", '142px'],
            ["style", "font-size", '58px']
         ],
         "${_otukare}": [
            ["style", "height", '42px'],
            ["style", "left", '94px']
         ],
         "${_witchmath}": [
            ["style", "top", '0px'],
            ["style", "height", '550px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '320px']
         ],
         "${_target10}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '202px'],
            ["style", "left", '136px'],
            ["style", "font-size", '39px']
         ],
         "${_matane}": [
            ["style", "top", '494px'],
            ["color", "color", 'rgba(255,0,0,1.00)'],
            ["style", "height", '32px'],
            ["style", "left", '79px'],
            ["style", "width", '186px']
         ],
         "${_giant_lost}": [
            ["style", "height", '215px'],
            ["style", "top", '13px'],
            ["style", "left", '46px'],
            ["style", "width", '203px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(192,192,192,1.00)'],
            ["style", "top", '487px']
         ],
         "${_giant_attack}": [
            ["style", "top", '11px'],
            ["style", "height", '215px'],
            ["style", "left", '70px'],
            ["style", "width", '203px']
         ],
         "${_HitPoint}": [
            ["style", "top", '11px'],
            ["style", "left", '130px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_Clear}": [
            ["style", "top", '35px'],
            ["style", "height", '126px'],
            ["style", "font-size", '97px'],
            ["style", "left", '0px'],
            ["style", "width", '320px']
         ],
         "${_return}": [
            ["style", "display", 'none']
         ],
         "${_HPver}": [
            ["style", "height", '32px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '13px'],
            ["style", "width", '282px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '320px'],
            ["style", "height", '550px'],
            ["style", "overflow", 'hidden']
         ],
         "${_target1}": [
            ["style", "top", '202px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '148px'],
            ["style", "font-size", '39px']
         ],
         "${_giant_damage}": [
            ["style", "height", '215px'],
            ["style", "top", '29px'],
            ["style", "left", '70px'],
            ["style", "width", '203px']
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
            { id: "eid192", tween: [ "style", "${_start}", "left", '96px', { fromValue: '96px'}], position: 0, duration: 0 },
            { id: "eid137", tween: [ "style", "${_matane}", "top", '494px', { fromValue: '494px'}], position: 1000, duration: 0 },
            { id: "eid138", tween: [ "style", "${_matane}", "top", '494px', { fromValue: '494px'}], position: 1250, duration: 0 },
            { id: "eid200", tween: [ "style", "${_aoki_modify3}", "left", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid108", tween: [ "style", "${_return}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_Rectangle}", "top", '479px', { fromValue: '487px'}], position: 1000, duration: 250 },
            { id: "eid146", tween: [ "style", "${_Rectangle}", "top", '487px', { fromValue: '479px'}], position: 1250, duration: 250 },
            { id: "eid179", tween: [ "style", "${_top}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid107", tween: [ "style", "${_HP}", "top", '493px', { fromValue: '493px'}], position: 0, duration: 0 },
            { id: "eid139", tween: [ "style", "${_HP}", "top", '488px', { fromValue: '493px'}], position: 1000, duration: 250 },
            { id: "eid147", tween: [ "style", "${_HP}", "top", '496px', { fromValue: '488px'}], position: 1250, duration: 250 },
            { id: "eid149", tween: [ "style", "${_HPver}", "top", '7px', { fromValue: '13px'}], position: 0, duration: 250 },
            { id: "eid152", tween: [ "style", "${_HPver}", "top", '13px', { fromValue: '7px'}], position: 250, duration: 250 },
            { id: "eid159", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(241,3,3,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1.00)'}], position: 1000, duration: 250 },
            { id: "eid158", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(192,192,192,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(241,3,3,1)'}], position: 1250, duration: 250 },
            { id: "eid102", tween: [ "style", "${_HP}", "left", '134px', { fromValue: '134px'}], position: 0, duration: 0 },
            { id: "eid160", tween: [ "style", "${_HPgauge}", "top", '0px', { fromValue: '8px'}], position: 0, duration: 250 },
            { id: "eid161", tween: [ "style", "${_HPgauge}", "top", '8px', { fromValue: '0px'}], position: 250, duration: 250 },
            { id: "eid194", tween: [ "style", "${_start}", "top", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid199", tween: [ "style", "${_aoki_modify3}", "top", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid135", tween: [ "style", "${_Rectangle2}", "top", '486px', { fromValue: '494px'}], position: 1000, duration: 250 },
            { id: "eid148", tween: [ "style", "${_Rectangle2}", "top", '494px', { fromValue: '486px'}], position: 1250, duration: 250 },
            { id: "eid93", tween: [ "style", "${_HP}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
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
         "${_Number1}": [
            ["style", "top", '-16px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '-8px'],
            ["style", "width", '16px']
         ],
         "${_Magic_NumberCopy}": [
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
            ["style", "top", '-38px'],
            ["style", "height", '76px'],
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
         "${_Number2}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "top", '-16px'],
            ["style", "left", '-8px'],
            ["style", "width", '16px']
         ],
         "${_Magic_Number}": [
            ["style", "top", '-38px'],
            ["style", "height", '76px'],
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
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-16px'],
            ["style", "left", '-8px'],
            ["style", "width", '16px']
         ],
         "${_Magic_Number}": [
            ["style", "top", '-38px'],
            ["style", "height", '76px'],
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
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "top", '-16px'],
            ["style", "left", '-8px'],
            ["style", "width", '16px']
         ],
         "${_Magic_Number}": [
            ["style", "top", '-38px'],
            ["style", "height", '76px'],
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
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '76px']
         ],
         "${_Magic_Number}": [
            ["style", "top", '-38px'],
            ["style", "height", '76px'],
            ["style", "left", '-38px'],
            ["style", "width", '76px']
         ],
         "${_Number5}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
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
            ["style", "top", '-38px'],
            ["style", "height", '76px'],
            ["style", "left", '-38px'],
            ["style", "width", '76px']
         ],
         "${_Number6}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-16px'],
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
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-16px'],
            ["style", "left", '-8px'],
            ["style", "width", '16px']
         ],
         "${_Magic_Number}": [
            ["style", "top", '-38px'],
            ["style", "height", '76px'],
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
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "top", '-16px'],
            ["style", "left", '-8px'],
            ["style", "width", '16px']
         ],
         "${_Magic_Number}": [
            ["style", "top", '-38px'],
            ["style", "height", '76px'],
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
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-16px'],
            ["style", "left", '-8px'],
            ["style", "width", '16px']
         ],
         "${_Magic_Number}": [
            ["style", "top", '-38px'],
            ["style", "height", '76px'],
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
            ["style", "left", '0px'],
            ["style", "border-top-right-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ]
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
            ["color", "color", 'rgba(13,13,13,1.00)'],
            ["style", "top", '14px'],
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
      rect: ['0px','0px','320px','480px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
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
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '-225px'],
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
            { id: "eid70", tween: [ "style", "${_Text}", "left", '36px', { fromValue: '36px'}], position: 0, duration: 0 },
            { id: "eid69", tween: [ "style", "${_Text}", "top", '-225px', { fromValue: '-225px'}], position: 0, duration: 0 }         ]
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
      rect: ['1px','27px','127px','42px','auto','auto'],
      font: ['acme, sans-serif',31,'rgba(0,0,0,1.00)','100','none','normal'],
      id: 'Text5',
      text: 'せつめい',
      align: 'left',
      type: 'text'
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
            ["style", "width", '127px'],
            ["style", "height", '42px'],
            ["style", "font-weight", '100'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'acme, sans-serif'],
            ["style", "left", '1px'],
            ["style", "font-size", '31px']
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
      rect: ['23px','11px','106px','42px','auto','auto'],
      font: ['acme, sans-serif',18,'rgba(0,0,0,1)','100','none','normal'],
      id: 'Text13',
      text: 'もどる',
      align: 'left',
      type: 'text'
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
         "${_Text13}": [
            ["style", "left", '23px'],
            ["style", "top", '11px']
         ],
         "${symbolSelector}": [
            ["style", "height", '53px'],
            ["style", "width", '129px']
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
      font: ['acme, sans-serif',16,'rgba(0,0,0,1.00)','100','none','normal'],
      transform: [[0,0],['-1']],
      align: 'left',
      id: 'Text8',
      text: 'あいての体力です。',
      type: 'text',
      rect: ['3px','77px','80px','42px','auto','auto']
   },
   {
      rect: ['20px','5px','297px','58px','auto','auto'],
      font: ['acme, sans-serif',31,'rgba(0,0,0,1)','100','none','normal'],
      id: 'Text6',
      text: '～ゲームせつめい～',
      align: 'left',
      type: 'text'
   },
   {
      id: 'gmstm',
      type: 'image',
      rect: ['82px','45px','235px','295px','auto','auto'],
      fill: ['rgba(0,0,0,0)','gmstm.JPG','0px','0px']
   },
   {
      font: ['acme, sans-serif',69,'rgba(255,0,0,1.00)','100','none','normal'],
      transform: [[0,0],['-13']],
      align: 'left',
      id: 'Text7',
      text: '→',
      type: 'text',
      rect: ['41px','16px','80px','36px','auto','auto']
   },
   {
      font: ['acme, sans-serif',76,'rgba(255,0,0,1)','100','none','normal'],
      transform: [[0,0],['-8']],
      align: 'left',
      id: 'Text9',
      text: '→',
      type: 'text',
      rect: ['63px','104px','95px','32px','auto','auto']
   },
   {
      rect: ['3px','170px','80px','43px','auto','auto'],
      font: ['acme, sans-serif',20,'rgba(0,0,0,1.00)','100','none','normal'],
      id: 'Text10',
      text: 'のこり時間です。',
      align: 'left',
      type: 'text'
   },
   {
      font: ['acme, sans-serif',71,'rgba(255,0,0,1.00)','100','none','normal'],
      transform: [[0,0],['-34']],
      align: 'left',
      id: 'Text11',
      text: '→',
      type: 'text',
      rect: ['98px','284px','72px','58px','auto','auto']
   },
   {
      rect: ['11px','346px','297px','154px','auto','auto'],
      font: ['acme, sans-serif',18,'rgba(0,0,0,1.00)','100','none','normal'],
      id: 'Text12',
      text: 'これはせんたくのすうじです。まん中にあるもんだい（せつめいでは１９のところです。）と同じになるようにすうじのせんたくしから3つえらびます。<br><br>正解ならあいてにこうげき、まちがいなら自分にこうげきが与えられます。',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gmstm}": [
            ["style", "height", '295px'],
            ["style", "top", '45px'],
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
            ["transform", "rotateZ", '-1deg'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '3px'],
            ["style", "font-size", '16px']
         ],
         "${_Text10}": [
            ["style", "top", '170px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '3px'],
            ["style", "font-size", '20px']
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
            ["style", "top", '346px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '154px'],
            ["style", "left", '11px'],
            ["style", "font-size", '18px']
         ],
         "${_Text9}": [
            ["style", "top", '104px'],
            ["transform", "rotateZ", '-8deg'],
            ["style", "left", '63px'],
            ["style", "font-size", '76px']
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
      rect: ['40px','0px','108px','87px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'Topへ',
      align: 'center',
      rect: ['0px','20px','184px','67px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '20px'],
            ["style", "width", '184px'],
            ["style", "height", '67px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "font-size", '35px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '40px'],
            ["style", "top", '0px']
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
            ["style", "left", '0px'],
            ["style", "height", '78px'],
            ["style", "border-style", 'dashed'],
            ["style", "border-width", '1px'],
            ["style", "width", '134px']
         ],
         "${symbolSelector}": [
            ["style", "height", '93px'],
            ["style", "width", '136px']
         ],
         "${_Text4}": [
            ["style", "top", '13px'],
            ["style", "left", '13px'],
            ["style", "font-size", '19px']
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
      rect: ['11px','181px','297px','42px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',19,'rgba(255,251,251,1)','normal','none','normal'],
      id: 'Text3',
      text: 'じかんせいげん　が　あるよ！',
      align: 'left',
      type: 'text'
   },
   {
      id: 'mihon3',
      type: 'image',
      rect: ['0px','47px','312px','205px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mihon35.PNG','0px','0px']
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
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(0,255,135,1.00)','normal','none','normal'],
      type: 'text',
      transform: [[0,0],['90']],
      id: 'Text6',
      text: '▲',
      align: 'left',
      rect: ['55px','54px','29px','36px','auto','auto']
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
