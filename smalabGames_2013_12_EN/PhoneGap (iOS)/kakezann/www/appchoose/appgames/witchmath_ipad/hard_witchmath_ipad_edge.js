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
            text:"Please play again!",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,"rgba(255,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'otukare',
            type:'text',
            rect:['94px','13px','208px','42px','auto','auto'],
            text:"Good work!",
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
         },
         {
            id:'score',
            type:'text',
            rect:['230px','186px','79px','58px','auto','auto'],
            text:"score<br>",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,"rgba(255,251,251,1)","normal","none","normal"]
         },
         {
            id:'score_hyouji',
            type:'text',
            rect:['261px','222px','24px','41px','auto','auto'],
            text:"0",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,"rgba(255,251,251,1)","normal","none","normal"]
         },
         {
            id:'home',
            type:'rect',
            rect:['265','494','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'top',
            symbolName:'top'
         },
         {
            id:'home',
            symbolName:'home'
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
            id:'aoki_modify3',
            symbolName:'aoki_modify3'
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
         "${_home}": [
            ["style", "top", '354px'],
            ["transform", "scaleX", '0.11429'],
            ["transform", "scaleY", '0.11429'],
            ["style", "left", '121px']
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
            ["style", "top", '260px'],
            ["style", "opacity", '1'],
            ["style", "left", '100px']
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
         "${_score_hyouji}": [
            ["style", "top", '222px'],
            ["style", "height", '41px'],
            ["style", "left", '261px'],
            ["style", "width", '24px']
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
            ["style", "left", '46px'],
            ["style", "width", '245px']
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
         "${_giant_damage}": [
            ["style", "height", '215px'],
            ["style", "top", '29px'],
            ["style", "left", '70px'],
            ["style", "width", '203px']
         ],
         "${_giant_attack}": [
            ["style", "top", '11px'],
            ["style", "height", '215px'],
            ["style", "left", '70px'],
            ["style", "width", '203px']
         ],
         "${_HPver}": [
            ["style", "height", '32px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '13px'],
            ["style", "width", '282px']
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
         "${_HitPoint}": [
            ["style", "top", '11px'],
            ["style", "left", '130px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
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
         "${_score}": [
            ["style", "top", '186px'],
            ["style", "height", '58px'],
            ["style", "width", '79px'],
            ["style", "left", '230px'],
            ["style", "font-size", '30px']
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
            { id: "eid231", tween: [ "style", "${_start}", "left", '100px', { fromValue: '100px'}], position: 0, duration: 0 },
            { id: "eid137", tween: [ "style", "${_matane}", "top", '494px', { fromValue: '494px'}], position: 1000, duration: 0 },
            { id: "eid138", tween: [ "style", "${_matane}", "top", '494px', { fromValue: '494px'}], position: 1250, duration: 0 },
            { id: "eid200", tween: [ "style", "${_aoki_modify3}", "left", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid108", tween: [ "style", "${_return}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid236", tween: [ "style", "${_matane}", "left", '46px', { fromValue: '46px'}], position: 0, duration: 0 },
            { id: "eid228", tween: [ "transform", "${_home}", "scaleY", '0.11429', { fromValue: '0.11429'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_Rectangle}", "top", '479px', { fromValue: '487px'}], position: 1000, duration: 250 },
            { id: "eid146", tween: [ "style", "${_Rectangle}", "top", '487px', { fromValue: '479px'}], position: 1250, duration: 250 },
            { id: "eid235", tween: [ "style", "${_matane}", "width", '245px', { fromValue: '245px'}], position: 0, duration: 0 },
            { id: "eid179", tween: [ "style", "${_top}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid107", tween: [ "style", "${_HP}", "top", '493px', { fromValue: '493px'}], position: 0, duration: 0 },
            { id: "eid139", tween: [ "style", "${_HP}", "top", '488px', { fromValue: '493px'}], position: 1000, duration: 250 },
            { id: "eid147", tween: [ "style", "${_HP}", "top", '496px', { fromValue: '488px'}], position: 1250, duration: 250 },
            { id: "eid224", tween: [ "transform", "${_home}", "scaleX", '0.11429', { fromValue: '0.11429'}], position: 0, duration: 0 },
            { id: "eid149", tween: [ "style", "${_HPver}", "top", '7px', { fromValue: '13px'}], position: 0, duration: 250 },
            { id: "eid152", tween: [ "style", "${_HPver}", "top", '13px', { fromValue: '7px'}], position: 250, duration: 250 },
            { id: "eid229", tween: [ "style", "${_home}", "top", '354px', { fromValue: '354px'}], position: 0, duration: 0 },
            { id: "eid159", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(241,3,3,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1.00)'}], position: 1000, duration: 250 },
            { id: "eid158", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(192,192,192,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(241,3,3,1)'}], position: 1250, duration: 250 },
            { id: "eid135", tween: [ "style", "${_Rectangle2}", "top", '486px', { fromValue: '494px'}], position: 1000, duration: 250 },
            { id: "eid148", tween: [ "style", "${_Rectangle2}", "top", '494px', { fromValue: '486px'}], position: 1250, duration: 250 },
            { id: "eid160", tween: [ "style", "${_HPgauge}", "top", '0px', { fromValue: '8px'}], position: 0, duration: 250 },
            { id: "eid161", tween: [ "style", "${_HPgauge}", "top", '8px', { fromValue: '0px'}], position: 250, duration: 250 },
            { id: "eid199", tween: [ "style", "${_aoki_modify3}", "top", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid93", tween: [ "style", "${_HP}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid233", tween: [ "style", "${_start}", "top", '260px', { fromValue: '260px'}], position: 0, duration: 0 },
            { id: "eid162", tween: [ "color", "${_HPgauge}", "background-color", 'rgba(241,3,3,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1.00)'}], position: 0, duration: 250 },
            { id: "eid163", tween: [ "color", "${_HPgauge}", "background-color", 'rgba(192,192,192,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(241,3,3,1)'}], position: 250, duration: 250 },
            { id: "eid102", tween: [ "style", "${_HP}", "left", '134px', { fromValue: '134px'}], position: 0, duration: 0 },
            { id: "eid226", tween: [ "style", "${_home}", "left", '121px', { fromValue: '121px'}], position: 0, duration: 0 },
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
            ["style", "border-top-right-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
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
      type: 'text',
      rect: ['6px','14px','88px','58px','auto','auto'],
      id: 'Text2',
      text: 'Start',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',48,'rgba(13,13,13,1.00)','normal','none','normal']
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
      font: ['acme, sans-serif',31,'rgba(0,0,0,1.00)','100','none','normal'],
      type: 'text',
      id: 'Text5',
      text: 'Inst',
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
      rect: ['3px','77px','80px','42px','auto','auto'],
      font: ['acme, sans-serif',16,'rgba(0,0,0,1.00)','100','none','normal'],
      align: 'left',
      id: 'Text8',
      text: 'Monster HP。',
      transform: [[0,0],['-1']],
      type: 'text'
   },
   {
      font: ['acme, sans-serif',31,'rgba(0,0,0,1)','100','none','normal'],
      type: 'text',
      id: 'Text6',
      text: '～The game～',
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
      rect: ['41px','16px','80px','36px','auto','auto'],
      font: ['acme, sans-serif',69,'rgba(255,0,0,1.00)','100','none','normal'],
      align: 'left',
      id: 'Text7',
      text: '→',
      transform: [[0,0],['-13']],
      type: 'text'
   },
   {
      rect: ['63px','104px','95px','32px','auto','auto'],
      font: ['acme, sans-serif',76,'rgba(255,0,0,1)','100','none','normal'],
      align: 'left',
      id: 'Text9',
      text: '→',
      transform: [[0,0],['-8']],
      type: 'text'
   },
   {
      font: ['acme, sans-serif',20,'rgba(0,0,0,1.00)','100','none','normal'],
      type: 'text',
      id: 'Text10',
      text: 'Time to go',
      align: 'left',
      rect: ['3px','170px','80px','43px','auto','auto']
   },
   {
      rect: ['98px','284px','72px','58px','auto','auto'],
      font: ['acme, sans-serif',71,'rgba(255,0,0,1.00)','100','none','normal'],
      align: 'left',
      id: 'Text11',
      text: '→',
      transform: [[0,0],['-34']],
      type: 'text'
   },
   {
      font: ['acme, sans-serif',18,'rgba(0,0,0,1.00)','100','none','normal'],
      type: 'text',
      id: 'Text12',
      text: 'Digits to throw. Select three numbers. If the sum of the three numbers matches the digit of the monster, you can attack it!',
      align: 'left',
      rect: ['11px','346px','297px','154px','auto','auto']
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
            ["style", "top", '0px'],
            ["style", "height", '550px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(127,167,212,1.00)']
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
      type: 'text',
      rect: ['0px','20px','184px','67px','auto','auto'],
      id: 'Text3',
      text: 'Top',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',35,'rgba(0,0,0,1.00)','normal','none','normal']
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
      type: 'text',
      rect: ['13px','13px','108px','80px','auto','auto'],
      id: 'Text4',
      text: 'Go Back',
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
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',19,'rgba(255,251,251,1)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'Mind the time！',
      align: 'left',
      rect: ['11px','181px','297px','42px','auto','auto']
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
      transform: [[0,0],['45']],
      borderRadius: ['5.5160780864357px 5.5160780864357px','5.5160780864357px 5.5160780864357px','5.5160780864357px 5.5160780864357px','5.5160780864357px 5.5160780864357px'],
      rect: ['78px','74px','200px','200px','auto','auto'],
      id: 'house3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   },
   {
      type: 'rect',
      id: 'house2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['228px','41px','50px','106px','auto','auto'],
      fill: ['rgba(0,0,0,1)']
   },
   {
      type: 'rect',
      id: 'white',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['31px','174px','288px','143px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [],
      rect: ['78px','142px','200px','160px','auto','auto'],
      id: 'house1',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   },
   {
      transform: [[0,0],['45'],[],['0.8','0.8']],
      rect: ['77px','73px','200px','200px','auto','auto'],
      borderRadius: ['5.5160780864357px 5.5160780864357px','5.5160780864357px 5.5160780864357px','5.5160780864357px 5.5160780864357px','5.5160780864357px 5.5160780864357px'],
      display: 'none',
      id: 'house3Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   },
   {
      transform: [[0,0],[],[],['0.8','0.8']],
      type: 'rect',
      display: 'none',
      id: 'house2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['227px','68px','50px','106px','auto','auto'],
      fill: ['rgba(0,0,0,1)']
   },
   {
      transform: [[0,0],[],[],['0.8','0.8']],
      type: 'rect',
      display: 'none',
      id: 'whiteCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['30px','159px','288px','143px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [[0,0],[],[],['0.8','0.8']],
      type: 'rect',
      display: 'none',
      id: 'house1Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['77px','141px','200px','160px','auto','auto'],
      fill: ['rgba(0,0,0,1)']
   },
   {
      type: 'rect',
      rect: ['-1px','-2px','352px','352px','auto','auto'],
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
})(jQuery, AdobeEdge, "EDGE-9528297");
