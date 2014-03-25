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
            rect:['94px','13px','208px','42px','auto','auto'],
            text:"おつかれさま",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,"rgba(255,0,0,1)","normal","none","normal"]
         },
         {
            id:'GAME_OVER',
            type:'text',
            rect:['20px','43px','270px','110px','auto','auto'],
            text:"GAME OVER",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',50,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'witchmath',
            type:'rect',
            rect:['0px','0px','320px','550px','auto','auto'],
            fill:["rgba(23,81,33,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Text',
            type:'text',
            rect:['12px','400px','299px','126px','auto','auto'],
            text:"Stage2",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',86,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'start',
            type:'rect',
            rect:['178','311','auto','auto','auto','auto']
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
            id:'ghost_damage',
            type:'image',
            rect:['85px','81px','150px','150px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ghost_damage.png",'0px','0px']
         },
         {
            id:'ghost_death',
            type:'image',
            rect:['86px','71','150px','150px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ghost_death.png",'0px','0px']
         },
         {
            id:'ghost_standing',
            type:'image',
            rect:['94px','71px','150px','150px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ghost_standing.png",'0px','0px']
         },
         {
            id:'ghost_attack',
            type:'image',
            rect:['94px','64px','150px','150px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ghost_attack.png",'0px','0px']
         },
         {
            id:'ghost_lost2',
            type:'image',
            rect:['58px','16px','203px','215px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ghost_lost2.png",'0px','0px']
         },
         {
            id:'aoki_modify2',
            type:'rect',
            rect:['-172','167','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'top',
            symbolName:'top'
         },
         {
            id:'aoki_modify2',
            symbolName:'aoki_modify2'
         },
         {
            id:'return',
            symbolName:'return'
         },
         {
            id:'start',
            symbolName:'start'
         },
         {
            id:'stm2',
            symbolName:'stm2'
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
         "${_GAME_OVER}": [
            ["style", "top", '43px'],
            ["style", "left", '20px'],
            ["style", "font-size", '50px']
         ],
         "${_ghost_lost2}": [
            ["style", "height", '215px'],
            ["style", "top", '16px'],
            ["style", "left", '58px'],
            ["style", "width", '203px']
         ],
         "${_HPgauge}": [
            ["style", "top", '8px'],
            ["color", "background-color", 'rgba(192,192,192,1.00)']
         ],
         "${_ghost_damage}": [
            ["style", "top", '81px'],
            ["style", "height", '150px'],
            ["style", "left", '85px'],
            ["style", "width", '150px']
         ],
         "${_start}": [
            ["style", "top", '265px'],
            ["style", "opacity", '1'],
            ["style", "left", '94px']
         ],
         "${_ghost_attack}": [
            ["style", "top", '64px'],
            ["style", "height", '150px'],
            ["style", "left", '94px'],
            ["style", "width", '150px']
         ],
         "${_ghost_death}": [
            ["style", "height", '150px'],
            ["style", "left", '86px'],
            ["style", "width", '150px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(192,192,192,1.00)'],
            ["style", "top", '487px']
         ],
         "${_Clear}": [
            ["style", "top", '30px'],
            ["style", "height", '126px'],
            ["style", "font-size", '97px'],
            ["style", "left", '0px'],
            ["style", "width", '320px']
         ],
         "${_HitPoint}": [
            ["style", "top", '11px'],
            ["style", "left", '130px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_aoki_modify2}": [
            ["style", "top", '-16px'],
            ["style", "left", '1px'],
            ["transform", "scaleY", '0.90064']
         ],
         "${_witchmath}": [
            ["style", "top", '0px'],
            ["style", "height", '550px'],
            ["color", "background-color", 'rgba(23,81,33,1.00)'],
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
         "${_otukare}": [
            ["style", "height", '42px'],
            ["style", "left", '94px']
         ],
         "${_ghost_standing}": [
            ["style", "height", '150px'],
            ["style", "top", '71px'],
            ["style", "left", '94px'],
            ["style", "width", '150px']
         ],
         "${_return}": [
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(1,1,1,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '550px'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(68,83,120,0.66)',32]]]],
            ["style", "width", '320px']
         ],
         "${_HPver}": [
            ["style", "height", '32px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '13px'],
            ["style", "width", '282px']
         ],
         "${_target1}": [
            ["style", "top", '202px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '148px'],
            ["style", "font-size", '39px']
         ],
         "${_Text}": [
            ["style", "top", '400px'],
            ["style", "height", '126px'],
            ["style", "left", '12px'],
            ["style", "width", '299px']
         ],
         "${_HP}": [
            ["style", "top", '493px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '134px'],
            ["style", "height", '58px']
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
            { id: "eid223", tween: [ "style", "${_start}", "left", '94px', { fromValue: '94px'}], position: 0, duration: 0 },
            { id: "eid137", tween: [ "style", "${_matane}", "top", '494px', { fromValue: '494px'}], position: 1000, duration: 0 },
            { id: "eid138", tween: [ "style", "${_matane}", "top", '494px', { fromValue: '494px'}], position: 1250, duration: 0 },
            { id: "eid228", tween: [ "transform", "${_aoki_modify2}", "scaleY", '0.90064', { fromValue: '0.90064'}], position: 0, duration: 0 },
            { id: "eid108", tween: [ "style", "${_return}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_Rectangle}", "top", '479px', { fromValue: '487px'}], position: 1000, duration: 250 },
            { id: "eid146", tween: [ "style", "${_Rectangle}", "top", '487px', { fromValue: '479px'}], position: 1250, duration: 250 },
            { id: "eid179", tween: [ "style", "${_top}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid235", tween: [ "style", "${_aoki_modify2}", "left", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid149", tween: [ "style", "${_HPver}", "top", '7px', { fromValue: '13px'}], position: 0, duration: 250 },
            { id: "eid152", tween: [ "style", "${_HPver}", "top", '13px', { fromValue: '7px'}], position: 250, duration: 250 },
            { id: "eid159", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(241,3,3,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1.00)'}], position: 1000, duration: 250 },
            { id: "eid158", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(192,192,192,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(241,3,3,1)'}], position: 1250, duration: 250 },
            { id: "eid93", tween: [ "style", "${_HP}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid160", tween: [ "style", "${_HPgauge}", "top", '0px', { fromValue: '8px'}], position: 0, duration: 250 },
            { id: "eid161", tween: [ "style", "${_HPgauge}", "top", '8px', { fromValue: '0px'}], position: 250, duration: 250 },
            { id: "eid234", tween: [ "style", "${_aoki_modify2}", "top", '-16px', { fromValue: '-16px'}], position: 0, duration: 0 },
            { id: "eid222", tween: [ "style", "${_start}", "top", '265px', { fromValue: '265px'}], position: 0, duration: 0 },
            { id: "eid107", tween: [ "style", "${_HP}", "top", '493px', { fromValue: '493px'}], position: 0, duration: 0 },
            { id: "eid139", tween: [ "style", "${_HP}", "top", '488px', { fromValue: '493px'}], position: 1000, duration: 250 },
            { id: "eid147", tween: [ "style", "${_HP}", "top", '496px', { fromValue: '488px'}], position: 1250, duration: 250 },
            { id: "eid135", tween: [ "style", "${_Rectangle2}", "top", '486px', { fromValue: '494px'}], position: 1000, duration: 250 },
            { id: "eid148", tween: [ "style", "${_Rectangle2}", "top", '494px', { fromValue: '486px'}], position: 1250, duration: 250 },
            { id: "eid102", tween: [ "style", "${_HP}", "left", '134px', { fromValue: '134px'}], position: 0, duration: 0 },
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
      type: 'text',
      rect: ['-8px','-16px','16px','auto','auto','auto'],
      id: 'Number1',
      text: '1',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,0.00)','normal','none','normal']
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
      type: 'text',
      rect: ['-8px','-16px','16px','auto','auto','auto'],
      id: 'Number2',
      text: '2',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,0.00)','normal','none','normal']
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
      rect: ['-8px','-16px','16px','auto','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Number3',
      text: '3',
      align: 'center',
      type: 'text'
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
      rect: ['-8px','-16px','16px','auto','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,0.00)','normal','none','normal'],
      id: 'Number4',
      text: '4',
      align: 'center',
      type: 'text'
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
      rect: ['-8px','-16px','16px','auto','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Number5',
      text: '5',
      align: 'center',
      type: 'text'
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
      rect: ['-8px','-16px','16px','auto','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Number6',
      text: '6',
      align: 'center',
      type: 'text'
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
      rect: ['-8px','-16px','16px','auto','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Number7',
      text: '7',
      align: 'center',
      type: 'text'
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
      rect: ['-8px','-16px','16px','auto','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,0.00)','normal','none','normal'],
      id: 'Number8',
      text: '8',
      align: 'center',
      type: 'text'
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
      rect: ['-8px','-16px','16px','auto','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Number9',
      text: '9',
      align: 'center',
      type: 'text'
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
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      id: 'Text',
      text: 'START',
      align: 'center',
      rect: ['66px','11px','auto','auto','auto','auto']
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
      rect: ['6px','14px','88px','58px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',48,'rgba(13,13,13,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'Start',
      align: 'left',
      type: 'text'
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
      rect: ['33px','14px','220px','126px','auto','auto'],
      id: 'Text',
      text: 'Which Math',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',86,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
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
      rect: ['0px','27px','90px','71px','auto','auto'],
      id: 'Text2',
      text: 'replay??',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',[24,''],'rgba(0,0,0,1)','normal','none',''],
      type: 'text'
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
      rect: ['14px','24px','153px','58px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',36,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text3',
      text: 'replay??<br>',
      align: 'left',
      type: 'text'
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
      type: 'text',
      rect: ['1px','27px','127px','42px','auto','auto'],
      id: 'Text5',
      text: 'せつめい',
      align: 'left',
      font: ['acme, sans-serif',31,'rgba(0,0,0,1.00)','100','none','normal']
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
      type: 'text',
      rect: ['23px','11px','106px','42px','auto','auto'],
      id: 'Text13',
      text: 'もどる',
      align: 'left',
      font: ['acme, sans-serif',18,'rgba(0,0,0,1)','100','none','normal']
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
      rect: ['0px','0px','320px','550px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(127,167,212,1.00)']
   },
   {
      transform: [[0,0],['-1']],
      rect: ['8px','77px','72px','58px','auto','auto'],
      type: 'text',
      id: 'Text8',
      text: 'あいての体力です。',
      align: 'left',
      font: ['acme, sans-serif',13,'rgba(0,0,0,1.00)','100','none','normal']
   },
   {
      type: 'text',
      rect: ['20px','5px','297px','58px','auto','auto'],
      id: 'Text6',
      text: '～ゲームせつめい～',
      align: 'left',
      font: ['acme, sans-serif',31,'rgba(0,0,0,1)','100','none','normal']
   },
   {
      id: 'gmstm',
      type: 'image',
      rect: ['82px','45px','235px','295px','auto','auto'],
      fill: ['rgba(0,0,0,0)','gmstm.JPG','0px','0px']
   },
   {
      transform: [[0,0],['-13']],
      rect: ['41px','16px','80px','36px','auto','auto'],
      type: 'text',
      id: 'Text7',
      text: '→',
      align: 'left',
      font: ['acme, sans-serif',69,'rgba(255,0,0,1.00)','100','none','normal']
   },
   {
      transform: [[0,0],['-8']],
      rect: ['63px','104px','95px','32px','auto','auto'],
      type: 'text',
      id: 'Text9',
      text: '→',
      align: 'left',
      font: ['acme, sans-serif',76,'rgba(255,0,0,1)','100','none','normal']
   },
   {
      type: 'text',
      rect: ['11px','170px','57px','58px','auto','auto'],
      id: 'Text10',
      text: 'のこり時間です。',
      align: 'left',
      font: ['acme, sans-serif',12,'rgba(0,0,0,1.00)','100','none','normal']
   },
   {
      transform: [[0,0],['-34']],
      rect: ['98px','284px','72px','58px','auto','auto'],
      type: 'text',
      id: 'Text11',
      text: '→',
      align: 'left',
      font: ['acme, sans-serif',71,'rgba(255,0,0,1.00)','100','none','normal']
   },
   {
      type: 'text',
      rect: ['20px','352px','297px','154px','auto','auto'],
      id: 'Text12',
      text: 'これはせんたくのすうじです。まん中にあるもんだい（せつめいでは１９のところです。）と同じになるようにすうじのせんたくしから3つえらびます。<br><br>正解ならあいてにこうげき、まちがいなら自分にこうげきが与えられます。',
      align: 'left',
      font: ['acme, sans-serif',14,'rgba(0,0,0,1.00)','100','none','normal']
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
            ["style", "width", '72px'],
            ["transform", "rotateZ", '-1deg'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '58px'],
            ["style", "left", '8px'],
            ["style", "font-size", '13px']
         ],
         "${_Text10}": [
            ["style", "top", '170px'],
            ["style", "width", '57px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '58px'],
            ["style", "left", '11px'],
            ["style", "font-size", '12px']
         ],
         "${_Text6}": [
            ["style", "top", '5px'],
            ["style", "left", '20px'],
            ["style", "width", '297px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '0px'],
            ["style", "height", '550px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(127,167,212,1.00)']
         ],
         "${_Text12}": [
            ["style", "top", '352px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '154px'],
            ["style", "left", '20px'],
            ["style", "font-size", '14px']
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
      rect: ['31px','0px','121px','93px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['32px','7px','122px','71px','auto','auto'],
      id: 'Text3',
      text: '　　　　　　トップへ',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(0,0,0,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '7px'],
            ["style", "width", '122px'],
            ["style", "height", '71px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '32px'],
            ["style", "font-size", '20px']
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
      type: 'text',
      rect: ['13px','13px','108px','80px','auto','auto'],
      id: 'Text4',
      text: 'ゲーム選択画面へ戻る',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',19,'rgba(0,0,0,1)','normal','none','normal']
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
      rect: ['16px','256px','306px','56px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',19,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text2',
      text: 'ココから3つえらんでこうげき！',
      align: 'left',
      type: 'text'
   },
   {
      id: 'mihon2',
      type: 'image',
      rect: ['13px','33px','283px','225px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mihon26.PNG','0px','0px']
   },
   {
      rect: ['21px','0px','306px','56px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',19,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text2Copy',
      text: 'たしてココのすうじになるよう',
      align: 'left',
      type: 'text'
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
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(255,0,0,1.00)','normal','none','normal'],
      type: 'text',
      transform: [[0,0],['90']],
      id: 'Text6',
      text: '▲',
      align: 'left',
      rect: ['99px','36px','29px','auto','auto','auto']
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
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(255,255,26,1.00)','normal','none','normal'],
      type: 'text',
      transform: [[0,0],['48']],
      id: 'Text6Copy',
      text: '▲',
      align: 'left',
      rect: ['12px','210px','29px','auto','auto','auto']
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
