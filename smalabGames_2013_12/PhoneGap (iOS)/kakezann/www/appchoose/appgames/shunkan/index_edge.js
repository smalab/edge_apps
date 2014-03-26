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
            id:'Stage_background',
            type:'image',
            rect:['0px','0px','825px','450px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"forest.jpg",'0px','0px']
         },
         {
            id:'MENU',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'home',
            type:'rect',
            rect:['531','175','auto','auto','auto','auto']
         },
         {
            id:'GAME_BACKGROUND',
            display:'none',
            type:'rect',
            rect:['15','15','auto','auto','auto','auto']
         },
         {
            id:'AnsNumber_text',
            display:'none',
            type:'text',
            rect:['425px','340px','195px','90px','auto','auto'],
            text:"?",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',67,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'Apple3_game',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'Apple4_game',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'Apple51_game',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'Apple52_game',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'Apple61_game',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'Apple62_game',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'Apple71_game',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'Apple72_game',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'Apple8_game',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'Apple9_game',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'button_cover2',
            display:'none',
            type:'rect',
            rect:['445px','100px','365px','215px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'button_cover',
            display:'none',
            type:'rect',
            rect:['445px','15px','365px','300px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'False',
            display:'none',
            type:'rect',
            rect:['20','20','auto','auto','auto','auto']
         },
         {
            id:'True',
            display:'none',
            type:'rect',
            rect:['20','20','auto','auto','auto','auto']
         },
         {
            id:'home3',
            display:'none',
            type:'rect',
            rect:['535px','142px','auto','auto','auto','auto']
         },
         {
            id:'FINISH',
            display:'none',
            type:'rect',
            rect:['21','19','auto','auto','auto','auto']
         },
         {
            id:'Exit_cover',
            display:'none',
            type:'rect',
            rect:['630px','15px','73px','68px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(255,255,255,1)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         }],
         symbolInstances: [
         {
            id:'Apple51_game',
            symbolName:'Apple51_game'
         },
         {
            id:'Apple8_game',
            symbolName:'Apple8_game'
         },
         {
            id:'Apple3_game',
            symbolName:'Apple3_game'
         },
         {
            id:'home',
            symbolName:'home'
         },
         {
            id:'home3',
            symbolName:'home'
         },
         {
            id:'Apple4_game',
            symbolName:'Apple4_game'
         },
         {
            id:'True',
            symbolName:'True'
         },
         {
            id:'FINISH',
            symbolName:'FINISH'
         },
         {
            id:'False',
            symbolName:'False'
         },
         {
            id:'Apple62_game',
            symbolName:'Apple62_game'
         },
         {
            id:'GAME_BACKGROUND',
            symbolName:'GAME_BACKGROUND'
         },
         {
            id:'MENU',
            symbolName:'MENU'
         },
         {
            id:'Apple72_game',
            symbolName:'Apple72_game'
         },
         {
            id:'Apple61_game',
            symbolName:'Apple61_game'
         },
         {
            id:'Apple71_game',
            symbolName:'Apple71_game'
         },
         {
            id:'Apple9_game',
            symbolName:'Apple9_game'
         },
         {
            id:'Apple52_game',
            symbolName:'Apple52_game'
         }
         ]
      },
   states: {
      "Base State": {
         "${_FINISH}": [
            ["style", "display", 'none']
         ],
         "${_home3}": [
            ["style", "top", '-125px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.21429'],
            ["style", "left", '597px'],
            ["style", "display", 'none']
         ],
         "${_home}": [
            ["style", "top", '203px'],
            ["transform", "scaleY", '0.21429'],
            ["transform", "scaleX", '0.21429'],
            ["style", "left", '603px'],
            ["style", "display", 'block']
         ],
         "${_True}": [
            ["style", "display", 'none']
         ],
         "${_Apple72_game}": [
            ["style", "top", '20px'],
            ["style", "left", '20px'],
            ["style", "display", 'none']
         ],
         "${_AnsNumber_text}": [
            ["style", "top", '340px'],
            ["style", "text-align", 'center'],
            ["style", "width", '146px'],
            ["style", "display", 'none'],
            ["style", "height", '90px'],
            ["style", "left", '425px'],
            ["style", "font-size", '67px']
         ],
         "${_False}": [
            ["style", "display", 'none']
         ],
         "${_Apple52_game}": [
            ["style", "top", '20px'],
            ["style", "left", '20px'],
            ["style", "display", 'none']
         ],
         "${_GAME_BACKGROUND}": [
            ["style", "display", 'none']
         ],
         "${_button_cover}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '445px'],
            ["style", "width", '365px']
         ],
         "${_Apple4_game}": [
            ["style", "top", '20px'],
            ["style", "left", '20px'],
            ["style", "display", 'none']
         ],
         "${_Exit_cover}": [
            ["style", "top", '5px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [270,[['rgba(103,23,33,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "height", '68px'],
            ["style", "opacity", '0'],
            ["style", "left", '628px'],
            ["style", "width", '73px']
         ],
         "${_Apple71_game}": [
            ["style", "top", '20px'],
            ["style", "left", '20px'],
            ["style", "display", 'none']
         ],
         "${_Apple8_game}": [
            ["style", "top", '20px'],
            ["style", "left", '20px'],
            ["style", "display", 'none']
         ],
         "${_finish_text}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '108px'],
            ["style", "opacity", '0'],
            ["style", "left", '-1px'],
            ["style", "width", '290px']
         ],
         "${_Apple51_game}": [
            ["style", "top", '20px'],
            ["style", "left", '20px'],
            ["style", "display", 'none']
         ],
         "${_button_cover2}": [
            ["style", "top", '100px'],
            ["style", "display", 'none'],
            ["style", "height", '215px'],
            ["style", "opacity", '0'],
            ["style", "left", '445px'],
            ["style", "width", '365px']
         ],
         "${_Apple62_game}": [
            ["style", "top", '20px'],
            ["style", "left", '20px'],
            ["style", "display", 'none']
         ],
         "${_num2_textCopy}": [
            ["style", "top", '241px'],
            ["style", "height", '69px'],
            ["style", "width", '101px'],
            ["style", "left", '550px'],
            ["style", "font-size", '50px']
         ],
         "${_Apple61_game}": [
            ["style", "top", '20px'],
            ["style", "left", '20px'],
            ["style", "display", 'none']
         ],
         "${_Apple9_game}": [
            ["style", "top", '20px'],
            ["style", "left", '20px'],
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '450px'],
            ["style", "width", '825px']
         ],
         "${_Apple3_game}": [
            ["style", "top", '20px'],
            ["style", "left", '20px'],
            ["style", "display", 'none']
         ],
         "${_num4_textCopy2}": [
            ["style", "height", '69px'],
            ["style", "width", '101px'],
            ["style", "top", '173px'],
            ["style", "font-size", '50px']
         ],
         "${_Stage_background}": [
            ["style", "height", '450px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '825px']
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
            { id: "eid367", tween: [ "style", "${_Exit_cover}", "left", '628px', { fromValue: '628px'}], position: 0, duration: 0 },
            { id: "eid95", tween: [ "style", "${_Apple8_game}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid107", tween: [ "style", "${_Apple52_game}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid362", tween: [ "gradient", "${_Exit_cover}", "background-image", [270,[['rgba(103,23,33,1.00)',0],['rgba(255,255,255,1.00)',100]]], { fromValue: [270,[['rgba(103,23,33,1.00)',0],['rgba(255,255,255,1.00)',100]]]}], position: 0, duration: 0 },
            { id: "eid364", tween: [ "style", "${_Exit_cover}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid317", tween: [ "style", "${_home3}", "top", '-125px', { fromValue: '-125px'}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "style", "${_GAME_BACKGROUND}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid99", tween: [ "style", "${_Apple9_game}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid316", tween: [ "style", "${_home3}", "left", '597px', { fromValue: '597px'}], position: 0, duration: 0 },
            { id: "eid91", tween: [ "style", "${_Apple61_game}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid201", tween: [ "transform", "${_home}", "scaleY", '0.21429', { fromValue: '0.21429'}], position: 0, duration: 0 },
            { id: "eid109", tween: [ "style", "${_Apple9_game}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid103", tween: [ "style", "${_Apple62_game}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid89", tween: [ "style", "${_Apple4_game}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid102", tween: [ "style", "${_Apple72_game}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid200", tween: [ "transform", "${_home}", "scaleX", '0.21429', { fromValue: '0.21429'}], position: 0, duration: 0 },
            { id: "eid374", tween: [ "style", "${_button_cover2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid312", tween: [ "transform", "${_home3}", "scaleX", '0.21429', { fromValue: '0.21429'}], position: 0, duration: 0 },
            { id: "eid318", tween: [ "style", "${_home3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid105", tween: [ "style", "${_Apple8_game}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid86", tween: [ "style", "${_Apple61_game}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid126", tween: [ "style", "${_FINISH}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid219", tween: [ "style", "${_home}", "left", '603px', { fromValue: '603px'}], position: 0, duration: 0 },
            { id: "eid94", tween: [ "style", "${_Apple3_game}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid104", tween: [ "style", "${_Apple3_game}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid100", tween: [ "style", "${_Apple71_game}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid82", tween: [ "style", "${_Apple8_game}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid88", tween: [ "style", "${_Apple51_game}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid80", tween: [ "style", "${_Apple3_game}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid106", tween: [ "style", "${_Apple51_game}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid81", tween: [ "style", "${_Apple9_game}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid84", tween: [ "style", "${_Apple71_game}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid101", tween: [ "style", "${_Apple61_game}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid295", tween: [ "style", "${_AnsNumber_text}", "width", '146px', { fromValue: '146px'}], position: 0, duration: 0 },
            { id: "eid93", tween: [ "style", "${_Apple62_game}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid373", tween: [ "style", "${_Exit_cover}", "top", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
            { id: "eid319", tween: [ "style", "${_home}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid111", tween: [ "style", "${_False}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid145", tween: [ "style", "${_button_cover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid313", tween: [ "transform", "${_home3}", "scaleY", '0.2', { fromValue: '0.2'}], position: 0, duration: 0 },
            { id: "eid110", tween: [ "style", "${_AnsNumber_text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid87", tween: [ "style", "${_Apple52_game}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid108", tween: [ "style", "${_Apple4_game}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid98", tween: [ "style", "${_Apple4_game}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "style", "${_Apple71_game}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid92", tween: [ "style", "${_Apple72_game}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid85", tween: [ "style", "${_Apple62_game}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid354", tween: [ "style", "${_Exit_cover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid127", tween: [ "style", "${_True}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid212", tween: [ "style", "${_home}", "top", '203px', { fromValue: '203px'}], position: 0, duration: 0 },
            { id: "eid96", tween: [ "style", "${_Apple51_game}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid83", tween: [ "style", "${_Apple72_game}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid97", tween: [ "style", "${_Apple52_game}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Start": {
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
      id: 'start_background',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      rect: ['0px','0px','277px','83px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',60,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'start_text',
      text: 'はじめる',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['0px','0px','267px','73px','auto','auto'],
      type: 'rect',
      id: 'start_cover',
      stroke: [5,'rgb(0, 0, 255)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   }],
   symbolInstances: [
   {
      id: 'start_background',
      symbolName: 'start_background'
   }   ]
   },
   states: {
      "Base State": {
         "${_start_cover}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_start_text}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "font-size", '60px']
         ],
         "${symbolSelector}": [
            ["style", "height", '83px'],
            ["style", "width", '277px']
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
"Title": {
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
      rect: ['0px','0px','795px','90px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'Title_background',
      stroke: [5,'rgba(0,0,255,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',75,'rgba(0,0,0,1)','normal','none',''],
      type: 'text',
      id: 'Title_text',
      text: 'しゅんかんし！',
      align: 'center',
      rect: ['0px','0px','805px','100px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Title_text}": [
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "left", '0px'],
            ["style", "font-size", '75px']
         ],
         "${_Title_background}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '795px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '90px'],
            ["color", "border-color", 'rgba(0,0,255,1.00)'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-width", '5px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '805px']
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
"Title_flash": {
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
      type: 'image',
      display: 'none',
      rect: ['0px','0px','468px','260px','auto','auto'],
      id: 'apple_5',
      fill: ['rgba(0,0,0,0)','images/apple_5.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','468px','260px','auto','auto'],
      id: 'apple_4',
      fill: ['rgba(0,0,0,0)','images/apple_4.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','468px','260px','auto','auto'],
      id: 'apple_3',
      fill: ['rgba(0,0,0,0)','images/apple_3.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','468px','260px','auto','auto'],
      id: 'apple_2',
      fill: ['rgba(0,0,0,0)','images/apple_2.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','468px','260px','auto','auto'],
      id: 'apple_1',
      fill: ['rgba(0,0,0,0)','images/apple_1.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_apple_4}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '260px'],
            ["style", "left", '0px'],
            ["style", "width", '468px']
         ],
         "${symbolSelector}": [
            ["style", "height", '260px'],
            ["style", "width", '468px']
         ],
         "${_apple_3}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '260px'],
            ["style", "left", '0px'],
            ["style", "width", '468px']
         ],
         "${_apple_2}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '260px'],
            ["style", "left", '0px'],
            ["style", "width", '468px']
         ],
         "${_apple_5}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '260px'],
            ["style", "left", '0px'],
            ["style", "width", '468px']
         ],
         "${_apple_1}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '260px'],
            ["style", "left", '0px'],
            ["style", "width", '468px']
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
            { id: "eid1", tween: [ "style", "${_apple_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "style", "${_apple_1}", "display", 'block', { fromValue: 'none'}], position: 100, duration: 0 },
            { id: "eid7", tween: [ "style", "${_apple_1}", "display", 'none', { fromValue: 'block'}], position: 400, duration: 0 },
            { id: "eid3", tween: [ "style", "${_apple_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_apple_3}", "display", 'block', { fromValue: 'none'}], position: 850, duration: 0 },
            { id: "eid12", tween: [ "style", "${_apple_3}", "display", 'none', { fromValue: 'block'}], position: 1050, duration: 0 },
            { id: "eid2", tween: [ "style", "${_apple_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_apple_2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid10", tween: [ "style", "${_apple_2}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid5", tween: [ "style", "${_apple_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "style", "${_apple_5}", "display", 'block', { fromValue: 'none'}], position: 1400, duration: 0 },
            { id: "eid16", tween: [ "style", "${_apple_5}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid4", tween: [ "style", "${_apple_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_apple_4}", "display", 'block', { fromValue: 'none'}], position: 1150, duration: 0 },
            { id: "eid14", tween: [ "style", "${_apple_4}", "display", 'none', { fromValue: 'block'}], position: 1300, duration: 0 }         ]
      }
   }
},
"flash": {
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
      rect: ['0px','0px','468px','260px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      id: 'TitleFlash_background',
      stroke: [5,'rgb(0, 0, 255)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      id: 'Title_flash',
      type: 'rect',
      rect: ['5px','5px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Title_flash',
      symbolName: 'Title_flash'
   }   ]
   },
   states: {
      "Base State": {
         "${_TitleFlash_background}": [
            ["style", "top", '0px'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '260px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Title_flash}": [
            ["style", "left", '5px'],
            ["style", "top", '5px']
         ],
         "${symbolSelector}": [
            ["style", "height", '270px'],
            ["style", "width", '478px']
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
"MENU": {
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
      id: 'Title2',
      type: 'rect',
      rect: ['10px','10px','auto','auto','auto','auto']
   },
   {
      id: 'flash',
      type: 'rect',
      rect: ['10px','145px','auto','auto','auto','auto']
   },
   {
      id: 'Start',
      type: 'rect',
      rect: ['538px','332px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Start',
      symbolName: 'Start'
   },
   {
      id: 'flash',
      symbolName: 'flash'
   },
   {
      id: 'Title2',
      symbolName: 'Title'
   }   ]
   },
   states: {
      "Base State": {
         "${_flash}": [
            ["style", "left", '10px'],
            ["style", "top", '145px']
         ],
         "${_Start}": [
            ["style", "left", '538px'],
            ["style", "top", '238px']
         ],
         "${_Title2}": [
            ["style", "left", '10px'],
            ["style", "top", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '450px'],
            ["style", "width", '825px']
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
            { id: "eid199", tween: [ "style", "${_Start}", "top", '238px', { fromValue: '238px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Ans": {
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
      id: 'Ans_background',
      stroke: [5,'rgba(0,0,255,1.00)','solid'],
      rect: ['0px','0px','785px','90px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['5px','5px','401px','90px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',44,'rgba(255,0,0,1.00)','normal','none','normal'],
      id: 'Ans_text01',
      text: '全部でリンゴの数は',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['560px','35px','180px','61px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',44,'rgba(255,0,0,1)','normal','none','normal'],
      id: 'Ans_text02',
      text: 'コです！',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ans_text01}": [
            ["style", "top", '5px'],
            ["style", "width", '401px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(255,0,0,1.00)'],
            ["style", "height", '90px'],
            ["style", "line-height", '52px'],
            ["style", "left", '5px'],
            ["style", "font-size", '44px']
         ],
         "${_Ans_text02}": [
            ["style", "top", '35px'],
            ["style", "left", '560px'],
            ["style", "width", '180px']
         ],
         "${_Ans_background}": [
            ["style", "top", '0px'],
            ["style", "border-width", '5px'],
            ["style", "height", '90px'],
            ["color", "border-color", 'rgba(0,0,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '785px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '795px']
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
"GAME_BACKGROUND": {
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
      id: 'flash_background',
      stroke: [5,'rgb(0, 0, 255)','solid'],
      rect: ['0px','0px','410px','290px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      id: 'number_background',
      type: 'rect',
      rect: ['430','85','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'dalete_button',
      stroke: [1,'rgba(0,0,0,1.00)','solid'],
      rect: ['735px','90px','53px','101px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['864px','85px','55px','100px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',36,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'delete_text',
      text: '消す',
      align: 'center',
      type: 'text'
   },
   {
      id: 'dicision_button',
      type: 'rect',
      rect: ['735','192','auto','auto','auto','auto']
   },
   {
      rect: ['736px','193px','55px','100px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',36,'rgba(255,0,0,1.00)','normal','none','normal'],
      id: 'decision_text',
      text: '決定',
      align: 'center',
      type: 'text'
   },
   {
      type: 'rect',
      id: 'num1_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      rect: ['435px','226px','99px','67px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['435px','226px','101px','69px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',50,'rgba(0,0,0,1)','normal','none',''],
      id: 'num1_text',
      text: '1',
      align: 'center',
      type: 'text'
   },
   {
      type: 'rect',
      id: 'num2_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      rect: ['535px','226px','99px','67px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['535px','226px','101px','69px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',50,'rgba(0,0,0,1)','normal','none',''],
      id: 'num2_text',
      text: '2',
      align: 'center',
      type: 'text'
   },
   {
      type: 'rect',
      id: 'num3_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      rect: ['635px','226px','99px','67px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['635px','226px','101px','69px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',50,'rgba(0,0,0,1)','normal','none',''],
      id: 'num3_text',
      text: '3',
      align: 'center',
      type: 'text'
   },
   {
      type: 'rect',
      id: 'num4_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      rect: ['435px','158px','99px','67px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['435px','158px','101px','69px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',50,'rgba(0,0,0,1)','normal','none',''],
      id: 'num4_text',
      text: '4',
      align: 'center',
      type: 'text'
   },
   {
      type: 'rect',
      id: 'num5_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      rect: ['535px','158px','99px','67px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['535px','158px','101px','69px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',50,'rgba(0,0,0,1)','normal','none',''],
      id: 'num5_text',
      text: '5',
      align: 'center',
      type: 'text'
   },
   {
      type: 'rect',
      id: 'num6_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      rect: ['635px','158px','99px','67px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['635px','158px','101px','69px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',50,'rgba(0,0,0,1)','normal','none',''],
      id: 'num6_text',
      text: '6',
      align: 'center',
      type: 'text'
   },
   {
      type: 'rect',
      id: 'num7_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      rect: ['435px','90px','99px','67px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['435px','90px','101px','69px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',50,'rgba(0,0,0,1)','normal','none',''],
      id: 'num7_text',
      text: '7',
      align: 'center',
      type: 'text'
   },
   {
      type: 'rect',
      id: 'num8_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      rect: ['535px','90px','99px','67px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['535px','90px','101px','69px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',50,'rgba(0,0,0,1)','normal','none',''],
      id: 'num8_text',
      text: '8',
      align: 'center',
      type: 'text'
   },
   {
      type: 'rect',
      id: 'num9_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      rect: ['635px','90px','99px','67px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['635px','90px','101px','69px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',50,'rgba(0,0,0,1)','normal','none',''],
      id: 'num9_text',
      text: '9',
      align: 'center',
      type: 'text'
   },
   {
      id: 'Ans',
      type: 'rect',
      rect: ['0px','320px','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'exit_background',
      stroke: [5,'rgb(0, 0, 255)','solid'],
      rect: ['628px','0px','65px','60px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['628px','5px','75px','60px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',17,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'exit_text',
      text: 'やめる',
      align: 'center',
      type: 'text'
   },
   {
      id: 'start_background2',
      type: 'rect',
      rect: ['430','0','auto','auto','auto','auto']
   },
   {
      rect: ['435px','5px','170px','60px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'start_text',
      text: 'スタート<br>',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'start_background2',
      symbolName: 'start_background2'
   },
   {
      id: 'Ans',
      symbolName: 'Ans'
   },
   {
      id: 'dicision_button',
      symbolName: 'dicision_button'
   },
   {
      id: 'number_background',
      symbolName: 'number_background'
   }   ]
   },
   states: {
      "Base State": {
         "${_num6_button}": [
            ["style", "top", '158px'],
            ["style", "height", '67px'],
            ["style", "opacity", '0'],
            ["style", "left", '635px'],
            ["style", "width", '99px']
         ],
         "${_num3_text}": [
            ["style", "top", '226px'],
            ["style", "text-align", 'center'],
            ["style", "height", '69px'],
            ["style", "font-size", '50px'],
            ["style", "left", '635px'],
            ["style", "width", '101px']
         ],
         "${_num1_text}": [
            ["style", "top", '226px'],
            ["style", "text-align", 'center'],
            ["style", "height", '69px'],
            ["style", "font-size", '50px'],
            ["style", "left", '435px'],
            ["style", "width", '101px']
         ],
         "${_num5_text}": [
            ["style", "top", '158px'],
            ["style", "text-align", 'center'],
            ["style", "height", '69px'],
            ["style", "font-size", '50px'],
            ["style", "left", '535px'],
            ["style", "width", '101px']
         ],
         "${_exit_text}": [
            ["style", "line-height", '61px'],
            ["style", "text-align", 'center'],
            ["style", "width", '75px'],
            ["style", "height", '60px'],
            ["style", "top", '5px'],
            ["style", "left", '628px'],
            ["style", "font-size", '17px']
         ],
         "${_num2_text}": [
            ["style", "top", '226px'],
            ["style", "text-align", 'center'],
            ["style", "height", '69px'],
            ["style", "width", '101px'],
            ["style", "left", '535px'],
            ["style", "font-size", '50px']
         ],
         "${symbolSelector}": [
            ["style", "height", '420px'],
            ["style", "width", '795px']
         ],
         "${_delete_text}": [
            ["style", "top", '85px'],
            ["style", "left", '864px'],
            ["style", "font-size", '36px']
         ],
         "${_num9_text}": [
            ["style", "top", '90px'],
            ["style", "text-align", 'center'],
            ["style", "height", '69px'],
            ["style", "font-size", '50px'],
            ["style", "left", '635px'],
            ["style", "width", '101px']
         ],
         "${_decision_text}": [
            ["color", "color", 'rgba(255,0,0,1.00)'],
            ["style", "top", '193px'],
            ["style", "left", '736px'],
            ["style", "font-size", '36px']
         ],
         "${_num7_button}": [
            ["style", "top", '90px'],
            ["style", "height", '67px'],
            ["style", "opacity", '0'],
            ["style", "left", '435px'],
            ["style", "width", '99px']
         ],
         "${_num7_text}": [
            ["style", "top", '90px'],
            ["style", "text-align", 'center'],
            ["style", "height", '69px'],
            ["style", "font-size", '50px'],
            ["style", "left", '435px'],
            ["style", "width", '101px']
         ],
         "${_num8_text}": [
            ["style", "top", '90px'],
            ["style", "text-align", 'center'],
            ["style", "height", '69px'],
            ["style", "width", '101px'],
            ["style", "left", '535px'],
            ["style", "font-size", '50px']
         ],
         "${_start_text}": [
            ["style", "top", '5px'],
            ["style", "height", '60px'],
            ["style", "width", '170px'],
            ["style", "left", '435px'],
            ["style", "font-size", '40px']
         ],
         "${_exit_background}": [
            ["style", "height", '60px'],
            ["style", "top", '0px'],
            ["style", "left", '628px'],
            ["style", "width", '65px']
         ],
         "${_num4_button}": [
            ["style", "top", '158px'],
            ["style", "height", '67px'],
            ["style", "opacity", '0'],
            ["style", "left", '435px'],
            ["style", "width", '99px']
         ],
         "${_num6_text}": [
            ["style", "top", '158px'],
            ["style", "text-align", 'center'],
            ["style", "height", '69px'],
            ["style", "width", '101px'],
            ["style", "left", '635px'],
            ["style", "font-size", '50px']
         ],
         "${_num2_button}": [
            ["style", "top", '226px'],
            ["style", "height", '67px'],
            ["style", "opacity", '0'],
            ["style", "left", '535px'],
            ["style", "width", '99px']
         ],
         "${_num3_button}": [
            ["style", "top", '226px'],
            ["style", "height", '67px'],
            ["style", "opacity", '0'],
            ["style", "left", '635px'],
            ["style", "width", '99px']
         ],
         "${_num5_button}": [
            ["style", "top", '158px'],
            ["style", "height", '67px'],
            ["style", "opacity", '0'],
            ["style", "left", '535px'],
            ["style", "width", '99px']
         ],
         "${_num4_text}": [
            ["style", "top", '158px'],
            ["style", "text-align", 'center'],
            ["style", "height", '69px'],
            ["style", "width", '101px'],
            ["style", "left", '435px'],
            ["style", "font-size", '50px']
         ],
         "${_flash_background}": [
            ["style", "top", '0px'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${_num9_button}": [
            ["style", "top", '90px'],
            ["style", "height", '67px'],
            ["style", "opacity", '0'],
            ["style", "left", '635px'],
            ["style", "width", '99px']
         ],
         "${_dalete_button}": [
            ["style", "top", '90px'],
            ["style", "display", 'block'],
            ["style", "border-width", '1px'],
            ["style", "height", '101px'],
            ["color", "border-color", 'rgb(0, 0, 0)'],
            ["style", "left", '735px'],
            ["style", "width", '53px']
         ],
         "${_num1_button}": [
            ["style", "top", '226px'],
            ["style", "height", '67px'],
            ["style", "opacity", '0'],
            ["style", "left", '435px'],
            ["style", "width", '99px']
         ],
         "${_Ans}": [
            ["style", "left", '0px'],
            ["style", "top", '320px']
         ],
         "${_num8_button}": [
            ["style", "top", '90px'],
            ["style", "height", '67px'],
            ["style", "opacity", '0'],
            ["style", "left", '535px'],
            ["style", "width", '99px']
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
"Apple3_flash": {
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
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_1',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/apple_1.jpg','0px','0px']
   },
   {
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/apple_2.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_apple_2}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${_apple_1}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '410px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid18", tween: [ "style", "${_apple_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_apple_1}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid23", tween: [ "style", "${_apple_1}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid20", tween: [ "style", "${_apple_2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid21", tween: [ "style", "${_apple_2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"Apple4_flash": {
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
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_1',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/apple_1.jpg','0px','0px']
   },
   {
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_3',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/apple_3.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_apple_3}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${_apple_1}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '410px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid24", tween: [ "style", "${_apple_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid26", tween: [ "style", "${_apple_3}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid27", tween: [ "style", "${_apple_3}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid25", tween: [ "style", "${_apple_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid28", tween: [ "style", "${_apple_1}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid29", tween: [ "style", "${_apple_1}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }         ]
      }
   }
},
"Apple51_flash": {
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
      type: 'image',
      display: 'none',
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_2',
      fill: ['rgba(0,0,0,0)','images/apple_2.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_32',
      fill: ['rgba(0,0,0,0)','images/apple_3.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_apple_2}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${_apple_32}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '410px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid30", tween: [ "style", "${_apple_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid34", tween: [ "style", "${_apple_2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid35", tween: [ "style", "${_apple_2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid31", tween: [ "style", "${_apple_32}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid32", tween: [ "style", "${_apple_32}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid33", tween: [ "style", "${_apple_32}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"Apple52_flash": {
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
      type: 'image',
      display: 'none',
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_1',
      fill: ['rgba(0,0,0,0)','images/apple_1.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_4',
      fill: ['rgba(0,0,0,0)','images/apple_4.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_apple_4}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '410px']
         ],
         "${_apple_1}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid37", tween: [ "style", "${_apple_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "style", "${_apple_1}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid41", tween: [ "style", "${_apple_1}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid36", tween: [ "style", "${_apple_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid38", tween: [ "style", "${_apple_4}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid39", tween: [ "style", "${_apple_4}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"Apple61_flash": {
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
      type: 'image',
      display: 'none',
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_2',
      fill: ['rgba(0,0,0,0)','images/apple_2.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_4',
      fill: ['rgba(0,0,0,0)','images/apple_4.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_apple_4}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${_apple_2}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '410px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid42", tween: [ "style", "${_apple_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid44", tween: [ "style", "${_apple_4}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid45", tween: [ "style", "${_apple_4}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid43", tween: [ "style", "${_apple_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "style", "${_apple_2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid47", tween: [ "style", "${_apple_2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }         ]
      }
   }
},
"Apple62_flash": {
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
      type: 'image',
      display: 'none',
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_1',
      fill: ['rgba(0,0,0,0)','images/apple_1.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_5',
      fill: ['rgba(0,0,0,0)','images/apple_5.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_apple_1}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${_apple_5}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '410px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid48", tween: [ "style", "${_apple_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid50", tween: [ "style", "${_apple_5}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid51", tween: [ "style", "${_apple_5}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid49", tween: [ "style", "${_apple_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_apple_1}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid53", tween: [ "style", "${_apple_1}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }         ]
      }
   }
},
"Apple71_flash": {
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
      type: 'image',
      display: 'none',
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_22',
      fill: ['rgba(0,0,0,0)','images/apple_2.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_52',
      fill: ['rgba(0,0,0,0)','images/apple_5.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_apple_22}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${_apple_52}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '410px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid54", tween: [ "style", "${_apple_52}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_apple_52}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid57", tween: [ "style", "${_apple_52}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid55", tween: [ "style", "${_apple_22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid58", tween: [ "style", "${_apple_22}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid59", tween: [ "style", "${_apple_22}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }         ]
      }
   }
},
"Apple72_flash": {
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
      type: 'image',
      display: 'none',
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_3',
      fill: ['rgba(0,0,0,0)','images/apple_3.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_42',
      fill: ['rgba(0,0,0,0)','images/apple_4.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_apple_3}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${_apple_42}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '410px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid60", tween: [ "style", "${_apple_42}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid62", tween: [ "style", "${_apple_42}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid63", tween: [ "style", "${_apple_42}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid61", tween: [ "style", "${_apple_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid64", tween: [ "style", "${_apple_3}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid65", tween: [ "style", "${_apple_3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }         ]
      }
   }
},
"Apple8_flash": {
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
      type: 'image',
      display: 'none',
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_32',
      fill: ['rgba(0,0,0,0)','images/apple_3.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_53',
      fill: ['rgba(0,0,0,0)','images/apple_5.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_apple_53}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${_apple_32}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '410px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid66", tween: [ "style", "${_apple_53}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid68", tween: [ "style", "${_apple_53}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid69", tween: [ "style", "${_apple_53}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid67", tween: [ "style", "${_apple_32}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_apple_32}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid71", tween: [ "style", "${_apple_32}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }         ]
      }
   }
},
"Apple9_flash": {
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
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_43',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/apple_4.jpg','0px','0px']
   },
   {
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'apple_54',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/apple_5.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_apple_54}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${_apple_43}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '290px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '410px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid72", tween: [ "style", "${_apple_54}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid74", tween: [ "style", "${_apple_54}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid75", tween: [ "style", "${_apple_54}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid73", tween: [ "style", "${_apple_43}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid76", tween: [ "style", "${_apple_43}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid77", tween: [ "style", "${_apple_43}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }         ]
      }
   }
},
"Apple3_game": {
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
      rect: ['432px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A3num1_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A3num2_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A3num3_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['432px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A3num4_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A3num5_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A3num6_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A3num7_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A3num8_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A3num9_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['860px','85px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A3delete_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['729px','187px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A3dicision_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','0px','168px','58px','auto','auto'],
      type: 'rect',
      id: 'A3start_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      id: 'Apple3_flash',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Apple3_flash',
      symbolName: 'Apple3_flash'
   }   ]
   },
   states: {
      "Base State": {
         "${_A3num8_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A3start_button}": [
            ["style", "top", '0px'],
            ["style", "height", '58px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "cursor", 'pointer']
         ],
         "${_A3dicision_button}": [
            ["style", "top", '187px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '729px'],
            ["style", "width", '53px']
         ],
         "${_A3num9_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_Apple3_flash}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_A3num6_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A3num2_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A3num7_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "width", '97px']
         ],
         "${_A3num1_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '784px']
         ],
         "${_A3num5_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A3num3_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A3num4_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
         ],
         "${_A3delete_button}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '860px'],
            ["style", "width", '53px']
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
            { id: "eid79", tween: [ "style", "${_Apple3_flash}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }         ]
      }
   }
},
"Apple4_game": {
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
      rect: ['432px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A4num1_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A4num2_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A4num3_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['432px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A4num4_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A4num5_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A4num6_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A4num7_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A4num8_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A4num9_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['852px','85px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A4delete_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['729px','187px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A4dicision_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','0px','168px','58px','auto','auto'],
      type: 'rect',
      id: 'A4start_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      id: 'Apple4_flash',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Apple4_flash',
      symbolName: 'Apple4_flash'
   }   ]
   },
   states: {
      "Base State": {
         "${_A4dicision_button}": [
            ["style", "top", '187px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '729px'],
            ["style", "width", '53px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '784px']
         ],
         "${_A4num4_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
         ],
         "${_A4num8_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A4start_button}": [
            ["style", "top", '0px'],
            ["style", "height", '58px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "cursor", 'pointer']
         ],
         "${_A4num1_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
         ],
         "${_A4num3_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A4num6_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A4num9_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A4num5_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_Apple4_flash}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_A4delete_button}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '852px'],
            ["style", "width", '53px']
         ],
         "${_A4num7_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "width", '97px']
         ],
         "${_A4num2_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
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
"Apple51_game": {
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
      rect: ['432px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A51num1_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A51num2_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A51num3_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['432px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A51num4_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A51num5_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A51num6_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A51num7_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A51num8_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A51num9_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['853px','85px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A51delete_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['729px','187px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A51dicision_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','0px','168px','58px','auto','auto'],
      type: 'rect',
      id: 'A51start_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      id: 'Apple51_flash',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Apple51_flash',
      symbolName: 'Apple51_flash'
   }   ]
   },
   states: {
      "Base State": {
         "${_A51num8_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A51start_button}": [
            ["style", "top", '0px'],
            ["style", "height", '58px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "cursor", 'pointer']
         ],
         "${_A51num9_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A51num1_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
         ],
         "${_A51num5_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A51num4_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
         ],
         "${_A51dicision_button}": [
            ["style", "top", '187px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '729px'],
            ["style", "width", '53px']
         ],
         "${_A51delete_button}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '853px'],
            ["style", "width", '53px']
         ],
         "${_Apple51_flash}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '784px']
         ],
         "${_A51num3_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A51num7_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "width", '97px']
         ],
         "${_A51num6_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A51num2_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
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
"Apple52_game": {
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
      rect: ['432px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A52num1_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A52num2_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A52num3_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['432px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A52num4_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A52num5_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A52num6_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A52num7_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A52num8_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A52num9_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['858px','85px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A52delete_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['729px','187px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A52dicision_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','0px','168px','58px','auto','auto'],
      type: 'rect',
      id: 'A52start_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      id: 'Apple52_flash',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Apple52_flash',
      symbolName: 'Apple52_flash'
   }   ]
   },
   states: {
      "Base State": {
         "${_A52num2_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A52num1_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
         ],
         "${_A52num8_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A52num7_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "width", '97px']
         ],
         "${_A52num5_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A52num3_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A52start_button}": [
            ["style", "top", '0px'],
            ["style", "height", '58px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "cursor", 'pointer']
         ],
         "${_A52num6_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A52num9_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '784px']
         ],
         "${_A52dicision_button}": [
            ["style", "top", '187px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '729px'],
            ["style", "width", '53px']
         ],
         "${_Apple52_flash}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_A52num4_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
         ],
         "${_A52delete_button}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '858px'],
            ["style", "width", '53px']
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
"Apple61_game": {
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
      rect: ['432px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A61num1_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A61num2_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A61num3_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['432px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A61num4_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A61num5_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A61num6_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A61num7_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A61num8_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A61num9_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['850px','85px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A61delete_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['729px','187px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A61dicision_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','0px','168px','58px','auto','auto'],
      type: 'rect',
      id: 'A61start_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      id: 'Apple61_flash',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Apple61_flash',
      symbolName: 'Apple61_flash'
   }   ]
   },
   states: {
      "Base State": {
         "${_A61dicision_button}": [
            ["style", "top", '187px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '729px'],
            ["style", "width", '53px']
         ],
         "${_A61num5_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A61num3_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A61num1_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
         ],
         "${_A61num4_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
         ],
         "${_A61num9_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_Apple61_flash}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_A61num7_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "width", '97px']
         ],
         "${_A61start_button}": [
            ["style", "top", '0px'],
            ["style", "height", '58px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '784px']
         ],
         "${_A61delete_button}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '850px'],
            ["style", "width", '53px']
         ],
         "${_A61num8_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A61num2_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A61num6_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
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
"Apple62_game": {
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
      rect: ['432px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A62num1_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A62num2_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A62num3_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['432px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A62num4_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A62num5_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A62num6_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A62num7_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A62num8_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A62num9_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['858px','85px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A62delete_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['729px','187px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A62dicision_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','0px','168px','58px','auto','auto'],
      type: 'rect',
      id: 'A62start_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      id: 'Apple62_flash',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Apple62_flash',
      symbolName: 'Apple62_flash'
   }   ]
   },
   states: {
      "Base State": {
         "${_A62num7_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "width", '97px']
         ],
         "${_A62num3_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A62dicision_button}": [
            ["style", "top", '187px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '729px'],
            ["style", "width", '53px']
         ],
         "${_A62num9_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A62start_button}": [
            ["style", "top", '0px'],
            ["style", "height", '58px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "cursor", 'pointer']
         ],
         "${_A62delete_button}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '858px'],
            ["style", "width", '53px']
         ],
         "${_A62num1_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
         ],
         "${_A62num4_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
         ],
         "${_A62num6_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '784px']
         ],
         "${_A62num2_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_Apple62_flash}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_A62num8_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A62num5_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
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
"Apple71_game": {
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
      rect: ['432px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A71num1_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A71num2_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A71num3_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['432px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A71num4_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A71num5_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A71num6_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A71num7_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A71num8_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A71num9_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['878px','69px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A71delete_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['729px','187px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A71dicision_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','0px','168px','58px','auto','auto'],
      type: 'rect',
      id: 'A71start_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      id: 'Apple71_flash',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Apple71_flash',
      symbolName: 'Apple71_flash'
   }   ]
   },
   states: {
      "Base State": {
         "${_A71delete_button}": [
            ["style", "top", '69px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '878px'],
            ["style", "width", '53px']
         ],
         "${_Apple71_flash}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_A71num4_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
         ],
         "${_A71num6_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A71num7_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "width", '97px']
         ],
         "${_A71num3_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A71start_button}": [
            ["style", "top", '0px'],
            ["style", "height", '58px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "cursor", 'pointer']
         ],
         "${_A71num8_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A71num2_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '784px']
         ],
         "${_A71num9_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A71dicision_button}": [
            ["style", "top", '187px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '729px'],
            ["style", "width", '53px']
         ],
         "${_A71num5_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A71num1_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
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
"Apple72_game": {
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
      rect: ['432px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A72num1_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A72num2_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A72num3_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['432px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A72num4_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A72num5_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A72num6_cove',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A72num7_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A72num8_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A72num9_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['867px','85px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A72delete_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['729px','187px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A72dicision_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','0px','168px','58px','auto','auto'],
      type: 'rect',
      id: 'A72start_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      id: 'Apple72_flash',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Apple72_flash',
      symbolName: 'Apple72_flash'
   }   ]
   },
   states: {
      "Base State": {
         "${_A72num3_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A72delete_button}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '867px'],
            ["style", "width", '53px']
         ],
         "${_A72start_button}": [
            ["style", "top", '0px'],
            ["style", "height", '58px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "cursor", 'pointer']
         ],
         "${_A72num5_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A72num1_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
         ],
         "${_Apple72_flash}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_A72num8_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A72num2_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A72dicision_button}": [
            ["style", "top", '187px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '729px'],
            ["style", "width", '53px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '784px']
         ],
         "${_A72num7_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "width", '97px']
         ],
         "${_A72num4_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
         ],
         "${_A72num9_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A72num6_cove}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
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
"Apple8_game": {
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
      rect: ['432px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A8num1_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A8num2_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A8num3_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['432px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A8num4_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A8num5_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A8num6_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A8num7_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A8num8_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A8num9_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['868px','85px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A8delete_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['729px','187px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A8dicision_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','0px','168px','58px','auto','auto'],
      type: 'rect',
      id: 'A8start_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      id: 'Apple8_flash',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Apple8_flash',
      symbolName: 'Apple8_flash'
   }   ]
   },
   states: {
      "Base State": {
         "${_A8delete_button}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '868px'],
            ["style", "width", '53px']
         ],
         "${_A8num2_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A8num9_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A8num7_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "width", '97px']
         ],
         "${_A8num1_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
         ],
         "${_A8num3_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A8num8_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A8num6_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A8num5_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '784px']
         ],
         "${_A8dicision_button}": [
            ["style", "top", '187px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '729px'],
            ["style", "width", '53px']
         ],
         "${_Apple8_flash}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_A8num4_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
         ],
         "${_A8start_button}": [
            ["style", "top", '0px'],
            ["style", "height", '58px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "cursor", 'pointer']
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
"Apple9_game": {
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
      rect: ['432px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A9num1_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A9num2_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','223px','97px','63px','auto','auto'],
      type: 'rect',
      id: 'A9num3_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['432px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A9num4_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A9num5_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','153px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A9num6_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A9num7_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['531px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A9num8_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['630px','85px','97px','66px','auto','auto'],
      type: 'rect',
      id: 'A9num9_cover',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['836px','84px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A9delete_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['729px','187px','53px','98px','auto','auto'],
      type: 'rect',
      id: 'A9dicision_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','0px','168px','58px','auto','auto'],
      type: 'rect',
      id: 'A9start_button',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      id: 'Apple9_flash',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Apple9_flash',
      symbolName: 'Apple9_flash'
   }   ]
   },
   states: {
      "Base State": {
         "${_A9num6_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A9num4_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
         ],
         "${_A9num2_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A9num7_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "width", '97px']
         ],
         "${_A9dicision_button}": [
            ["style", "top", '187px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '729px'],
            ["style", "width", '53px']
         ],
         "${_Apple9_flash}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_A9num3_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A9num8_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${_A9num5_cover}": [
            ["style", "top", '153px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "width", '97px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '784px']
         ],
         "${_A9start_button}": [
            ["style", "top", '0px'],
            ["style", "height", '58px'],
            ["style", "opacity", '0'],
            ["style", "left", '431px'],
            ["style", "cursor", 'pointer']
         ],
         "${_A9delete_button}": [
            ["style", "top", '84px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "left", '836px'],
            ["style", "width", '53px']
         ],
         "${_A9num9_cover}": [
            ["style", "top", '85px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '630px'],
            ["style", "width", '97px']
         ],
         "${_A9num1_cover}": [
            ["style", "top", '223px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px'],
            ["style", "width", '97px']
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
"GAME": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '784px']
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
"False": {
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
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'false_background',
      stroke: [1,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)',[270,[['rgba(5,0,88,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
   },
   {
      type: 'text',
      rect: ['0px','92px','410px','105px','auto','auto'],
      id: 'false_text',
      text: 'ざんねん…<br>もういちどがんばろう！',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',37,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_false_background}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '0px'],
            ["style", "border-width", '1px'],
            ["gradient", "background-image", [270,[['rgba(5,0,88,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "height", '290px'],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${_false_text}": [
            ["style", "height", '105px'],
            ["style", "top", '92px'],
            ["style", "left", '0px'],
            ["style", "font-size", '37px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '410px']
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
"FINISH": {
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
      rect: ['-21px','-19px','825px','450px','auto','auto'],
      id: 'finish_apple',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/finish_apple.jpg','0px','0px']
   },
   {
      rect: ['-1px','0px','290px','108px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',37,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'center',
      id: 'finish_text',
      text: 'ゲームクリア<br>おめでとう！',
      display: 'none',
      type: 'text'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['529','220','auto','auto','auto','auto'],
      id: 'home2'
   },
   {
      rect: ['20px','168px','250px','237px','auto','auto'],
      type: 'rect',
      id: 'Rectangle',
      stroke: [3,'rgba(23,0,255,1.00)','solid'],
      display: 'none',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['34','120','auto','auto','auto','auto'],
      id: 'false_result'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['24','235','auto','auto','auto','auto'],
      id: 'start_result'
   },
   {
      rect: ['27px','245px','242px','35px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'center',
      id: 'start_text',
      text: 'スタートをおしたかいすう',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['38px','120px','220px','35px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'false_text',
      text: 'まちがったかいすう',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['273px','290px','256px','115px','auto','auto'],
      type: 'rect',
      id: 'Rectangle2',
      stroke: [3,'rgba(0,0,255,1.00)','solid'],
      display: 'none',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['282px','324px','180px','73px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',13,'rgba(255,0,0,1.00)','normal','none','normal'],
      align: 'center',
      id: 'result01',
      text: 'まちがいやスタートをおす<br>かいすうをへらしてみよう！',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['200px','145px','60px','100px','auto','auto'],
      transform: [[],[],[],['0.8','0.8']],
      id: 'ribon01',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/ribon01.png','0px','0px']
   },
   {
      rect: ['282px','324px','180px','73px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(7,255,0,1.00)','normal','none','normal'],
      align: 'center',
      id: 'result02',
      text: 'よくできました<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['200px','145px','60px','100px','auto','auto'],
      transform: [[],[],[],['0.8','0.8']],
      id: 'ribon02',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/ribon02.png','0px','0px']
   },
   {
      rect: ['282px','324px','180px','73px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(63,0,255,1.00)','normal','none','normal'],
      align: 'center',
      id: 'result03',
      text: 'たいへん<br>よくできました',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['200px','145px','60px','100px','auto','auto'],
      transform: [[],[],[],['0.8','0.8']],
      id: 'ribon03',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/ribon03.png','0px','0px']
   },
   {
      rect: ['276px','293px','127px','35px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',20,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'center',
      id: 'result_text',
      text: 'せいせき',
      display: 'none',
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'home2',
      symbolName: 'home'
   },
   {
      id: 'false_result',
      symbolName: 'false_result'
   },
   {
      id: 'start_result',
      symbolName: 'start_result'
   }   ]
   },
   states: {
      "Base State": {
         "${_start_text}": [
            ["style", "top", '298px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '6px'],
            ["style", "width", '242px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "left", '273px'],
            ["style", "width", '256px'],
            ["style", "top", '290px'],
            ["style", "opacity", '0'],
            ["style", "height", '115px'],
            ["color", "border-color", 'rgba(0,0,255,1.00)'],
            ["style", "display", 'none'],
            ["style", "border-width", '3px']
         ],
         "${_ribon01}": [
            ["style", "top", '301px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '458px'],
            ["style", "display", 'none']
         ],
         "${_finish_apple}": [
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '1'],
            ["style", "left", '-21px'],
            ["style", "width", '825px'],
            ["style", "top", '-19px'],
            ["transform", "scaleY", '0'],
            ["style", "display", 'none'],
            ["style", "height", '450px']
         ],
         "${_home2}": [
            ["style", "top", '186px'],
            ["transform", "scaleY", '0.28571'],
            ["transform", "scaleX", '0.28571'],
            ["style", "opacity", '1'],
            ["style", "left", '559px'],
            ["style", "display", 'none']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "bottom", 'auto'],
            ["style", "border-style", 'solid'],
            ["style", "left", '-1px'],
            ["style", "width", '250px'],
            ["style", "top", '168px'],
            ["style", "border-width", '3px'],
            ["style", "height", '237px'],
            ["color", "border-color", 'rgba(23,0,255,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_result01}": [
            ["style", "line-height", '33px'],
            ["style", "width", '180px'],
            ["style", "top", '324px'],
            ["color", "color", 'rgba(255,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '73px'],
            ["style", "left", '279px'],
            ["style", "font-size", '13px']
         ],
         "${_false_text}": [
            ["style", "top", '173px'],
            ["style", "display", 'none'],
            ["style", "height", '35px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '220px']
         ],
         "${_finish_text}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '108px'],
            ["style", "opacity", '0'],
            ["style", "left", '-1px'],
            ["style", "width", '290px']
         ],
         "${_start_result}": [
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.93913'],
            ["style", "left", '3px'],
            ["style", "top", '294px']
         ],
         "${_ribon02}": [
            ["style", "top", '301px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '458px'],
            ["style", "display", 'none']
         ],
         "${_result02}": [
            ["style", "top", '324px'],
            ["style", "font-size", '25px'],
            ["style", "line-height", '76px'],
            ["color", "color", 'rgba(7,255,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '73px'],
            ["style", "left", '279px'],
            ["style", "width", '180px']
         ],
         "${_ribon03}": [
            ["style", "top", '301px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "left", '458px'],
            ["transform", "scaleX", '1']
         ],
         "${_result_text}": [
            ["style", "top", '293px'],
            ["style", "width", '127px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '25px'],
            ["style", "opacity", '0'],
            ["style", "left", '276px'],
            ["style", "font-size", '20px']
         ],
         "${_result03}": [
            ["style", "top", '324px'],
            ["style", "width", '180px'],
            ["color", "color", 'rgba(63,0,255,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '73px'],
            ["style", "left", '279px'],
            ["style", "font-size", '25px']
         ],
         "${symbolSelector}": [
            ["style", "height", '108px'],
            ["style", "width", '290px']
         ],
         "${_false_result}": [
            ["style", "display", 'none'],
            ["style", "left", '17px'],
            ["style", "top", '174px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4500,
         autoPlay: true,
         timeline: [
            { id: "eid333", tween: [ "style", "${_home2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid334", tween: [ "style", "${_home2}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid392", tween: [ "style", "${_false_text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid393", tween: [ "style", "${_false_text}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid125", tween: [ "style", "${_finish_text}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500 },
            { id: "eid397", tween: [ "style", "${_ribon03}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid422", tween: [ "style", "${_ribon03}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid119", tween: [ "transform", "${_finish_apple}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 1000 },
            { id: "eid399", tween: [ "style", "${_ribon01}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid424", tween: [ "style", "${_ribon01}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid410", tween: [ "style", "${_Rectangle}", "left", '-1px', { fromValue: '-1px'}], position: 3500, duration: 0 },
            { id: "eid376", tween: [ "style", "${_false_result}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid391", tween: [ "style", "${_false_result}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid454", tween: [ "style", "${_result_text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid455", tween: [ "style", "${_result_text}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid457", tween: [ "style", "${_result_text}", "display", 'block', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "eid121", tween: [ "style", "${_finish_apple}", "opacity", '1', { fromValue: '1'}], position: 250, duration: 0 },
            { id: "eid377", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid378", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid412", tween: [ "style", "${_false_result}", "left", '17px', { fromValue: '17px'}], position: 3500, duration: 0 },
            { id: "eid381", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid390", tween: [ "style", "${_start_text}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 500 },
            { id: "eid404", tween: [ "style", "${_false_text}", "left", '17px', { fromValue: '17px'}], position: 3500, duration: 0 },
            { id: "eid120", tween: [ "transform", "${_finish_apple}", "rotateZ", '1080deg', { fromValue: '0deg'}], position: 250, duration: 1000 },
            { id: "eid413", tween: [ "style", "${_false_result}", "top", '174px', { fromValue: '174px'}], position: 3500, duration: 0 },
            { id: "eid405", tween: [ "style", "${_false_text}", "top", '173px', { fromValue: '173px'}], position: 3500, duration: 0 },
            { id: "eid459", tween: [ "style", "${_result_text}", "height", '25px', { fromValue: '25px'}], position: 4500, duration: 0 },
            { id: "eid464", tween: [ "style", "${_result01}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid463", tween: [ "style", "${_result01}", "display", 'none', { fromValue: 'none'}], position: 4500, duration: 0 },
            { id: "eid114", tween: [ "style", "${_finish_apple}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid122", tween: [ "style", "${_finish_text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid123", tween: [ "style", "${_finish_text}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid477", tween: [ "style", "${_result01}", "left", '279px', { fromValue: '279px'}], position: 4500, duration: 0 },
            { id: "eid118", tween: [ "transform", "${_finish_apple}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 1000 },
            { id: "eid465", tween: [ "style", "${_result02}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid462", tween: [ "style", "${_result02}", "display", 'none', { fromValue: 'none'}], position: 4500, duration: 0 },
            { id: "eid375", tween: [ "style", "${_start_result}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid382", tween: [ "style", "${_start_result}", "display", 'none', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid396", tween: [ "style", "${_start_result}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid388", tween: [ "style", "${_start_text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid387", tween: [ "style", "${_start_text}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid403", tween: [ "style", "${_start_result}", "top", '294px', { fromValue: '294px'}], position: 3500, duration: 0 },
            { id: "eid395", tween: [ "style", "${_false_text}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 500 },
            { id: "eid476", tween: [ "style", "${_result02}", "left", '279px', { fromValue: '279px'}], position: 4500, duration: 0 },
            { id: "eid418", tween: [ "style", "${_Rectangle2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid419", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid402", tween: [ "style", "${_start_result}", "left", '3px', { fromValue: '3px'}], position: 3500, duration: 0 },
            { id: "eid475", tween: [ "style", "${_result03}", "left", '279px', { fromValue: '279px'}], position: 4500, duration: 0 },
            { id: "eid458", tween: [ "style", "${_result_text}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 500 },
            { id: "eid461", tween: [ "style", "${_result03}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid460", tween: [ "style", "${_result03}", "display", 'none', { fromValue: 'none'}], position: 4500, duration: 0 },
            { id: "eid408", tween: [ "style", "${_start_text}", "left", '6px', { fromValue: '6px'}], position: 3500, duration: 0 },
            { id: "eid421", tween: [ "style", "${_Rectangle2}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 500 },
            { id: "eid398", tween: [ "style", "${_ribon02}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid423", tween: [ "style", "${_ribon02}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid409", tween: [ "style", "${_start_text}", "top", '298px', { fromValue: '298px'}], position: 3500, duration: 0 },
            { id: "eid417", tween: [ "style", "${_Rectangle}", "top", '168px', { fromValue: '168px'}], position: 3500, duration: 0 }         ]
      }
   }
},
"True": {
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
      rect: ['0px','0px','410px','290px','auto','auto'],
      id: 'True_background',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)',[270,[['rgba(255,247,0,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
   },
   {
      rect: ['105px','180px','190px','40px','auto','auto'],
      id: 'NEXT_buckground',
      stroke: [5,'rgba(23,0,255,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['105px','180px','200px','50px','auto','auto'],
      id: 'NEXT_text',
      text: 'つぎへ',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',37,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      rect: ['105px','180px','190px','40px','auto','auto'],
      type: 'rect',
      id: 'NEXT_cover',
      stroke: [5,'rgb(23, 0, 255)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['0px','40px','410px','105px','auto','auto'],
      id: 'True_text',
      text: 'せいかい！<br>おめでとう！',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',37,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_True_text}": [
            ["style", "height", '105px'],
            ["style", "top", '40px'],
            ["style", "left", '0px'],
            ["style", "width", '410px']
         ],
         "${_NEXT_cover}": [
            ["style", "top", '180px'],
            ["style", "opacity", '0'],
            ["style", "left", '105px'],
            ["style", "cursor", 'pointer']
         ],
         "${_NEXT_buckground}": [
            ["style", "top", '180px'],
            ["color", "border-color", 'rgba(23,0,255,1.00)'],
            ["style", "left", '105px'],
            ["style", "height", '40px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '5px'],
            ["style", "width", '190px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '410px']
         ],
         "${_NEXT_text}": [
            ["style", "left", '105px'],
            ["style", "top", '180px']
         ],
         "${_True_background}": [
            ["style", "height", '290px'],
            ["gradient", "background-image", [270,[['rgba(255,247,0,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '0px']
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
"start_background": {
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
      id: 'start_background02',
      stroke: [5,'rgb(0, 0, 255)','solid'],
      rect: ['0px','0px','267px','73px','auto','auto'],
      fill: ['rgba(255,255,100,1.00)']
   },
   {
      type: 'rect',
      id: 'start_background01',
      stroke: [5,'rgb(0, 0, 255)','solid'],
      rect: ['0px','0px','267px','73px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_start_background02}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(255,255,100,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '83px'],
            ["style", "width", '277px']
         ],
         "${_start_background01}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid149", tween: [ "style", "${_start_background02}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid150", tween: [ "style", "${_start_background02}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid152", tween: [ "style", "${_start_background02}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid148", tween: [ "style", "${_start_background01}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid151", tween: [ "style", "${_start_background01}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid153", tween: [ "style", "${_start_background01}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 }         ]
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
      stroke: [13,'rgba(6,0,192,1.00)','solid'],
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
            ["color", "border-color", 'rgba(6,0,192,1.00)'],
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
},
"start_background2": {
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
      id: 'start_background01',
      stroke: [5,'rgb(0, 0, 255)','solid'],
      rect: ['0px','0px','170px','60px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'rect',
      rect: ['0px','0px','170px','60px','auto','auto'],
      id: 'start_background02',
      stroke: [5,'rgb(0, 0, 255)','solid'],
      display: 'none',
      fill: ['rgba(255,255,100,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_start_background02}": [
            ["style", "display", 'none'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(255,255,100,1.00)']
         ],
         "${_start_background01}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '60px'],
            ["style", "left", '0px'],
            ["style", "width", '170px']
         ],
         "${symbolSelector}": [
            ["style", "height", '70px'],
            ["style", "width", '180px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid335", tween: [ "style", "${_start_background02}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid338", tween: [ "style", "${_start_background02}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid340", tween: [ "style", "${_start_background02}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid336", tween: [ "style", "${_start_background01}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid339", tween: [ "style", "${_start_background01}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid337", tween: [ "style", "${_start_background01}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 }         ]
      }
   }
},
"number_background": {
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
      rect: ['0px','0px','355px','205px','auto','auto'],
      id: 'number_background01',
      stroke: [5,'rgb(0, 0, 255)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['0px','0px','355px','205px','auto','auto'],
      type: 'rect',
      id: 'number_background02',
      stroke: [5,'rgb(0, 0, 255)','solid'],
      display: 'none',
      fill: ['rgba(255,255,100,1.00)']
   },
   {
      rect: ['105px','5px','0px','203px','auto','auto'],
      id: '_01',
      stroke: [1,'rgba(0,0,0,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['205px','5px','0px','203px','auto','auto'],
      id: '_02',
      stroke: [1,'rgba(0,0,0,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['5px','74px','353px','0px','auto','auto'],
      id: '_03',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['5px','143px','353px','0px','auto','auto'],
      id: '_04',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_number_background02}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(255,255,100,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '205px']
         ],
         "${__01}": [
            ["style", "top", '5px'],
            ["style", "height", '203px'],
            ["color", "border-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '105px'],
            ["style", "border-width", '1px']
         ],
         "${__02}": [
            ["style", "top", '5px'],
            ["style", "height", '203px'],
            ["color", "border-color", 'rgb(0, 0, 0)'],
            ["style", "left", '205px'],
            ["style", "border-width", '1px']
         ],
         "${__04}": [
            ["style", "top", '143px'],
            ["style", "left", '5px'],
            ["style", "width", '353px']
         ],
         "${__03}": [
            ["style", "top", '74px'],
            ["style", "left", '5px'],
            ["style", "width", '353px']
         ],
         "${_number_background01}": [
            ["style", "display", 'block'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '205px']
         ],
         "${symbolSelector}": [
            ["style", "height", '215px'],
            ["style", "width", '365px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: true,
         timeline: [
            { id: "eid342", tween: [ "style", "${_number_background02}", "display", 'none', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid344", tween: [ "style", "${_number_background02}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid345", tween: [ "style", "${_number_background02}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid341", tween: [ "style", "${_number_background01}", "display", 'block', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid343", tween: [ "style", "${_number_background01}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid346", tween: [ "style", "${_number_background01}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 }         ]
      }
   }
},
"dicision_button": {
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
      rect: ['0px','0px','53px','101px','auto','auto'],
      id: 'decision_button01',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['0px','0px','53px','101px','auto','auto'],
      type: 'rect',
      id: 'decision_button02',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      display: 'none',
      fill: ['rgba(255,255,100,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_decision_button01}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '53px']
         ],
         "${_decision_button02}": [
            ["color", "background-color", 'rgba(255,255,100,1.00)'],
            ["style", "display", 'none'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '53px']
         ],
         "${symbolSelector}": [
            ["style", "height", '103px'],
            ["style", "width", '55px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: true,
         timeline: [
            { id: "eid348", tween: [ "style", "${_decision_button02}", "display", 'none', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid350", tween: [ "style", "${_decision_button02}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid352", tween: [ "style", "${_decision_button02}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid349", tween: [ "style", "${_decision_button01}", "display", 'block', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid351", tween: [ "style", "${_decision_button01}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid353", tween: [ "style", "${_decision_button01}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 }         ]
      }
   }
},
"false_result": {
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
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',74,'rgba(255,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'falseVar_text',
      text: '？',
      align: 'center',
      rect: ['28px','35px','80px','80px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'number001_text',
      text: 'かい',
      align: 'center',
      rect: ['111px','87px','80px','25px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_falseVar_text}": [
            ["style", "line-height", '95px'],
            ["style", "font-size", '74px'],
            ["style", "text-align", 'center'],
            ["style", "height", '80px'],
            ["color", "color", 'rgba(255,0,0,1.00)'],
            ["style", "top", '35px'],
            ["style", "left", '28px'],
            ["style", "width", '80px']
         ],
         "${_number001_text}": [
            ["style", "top", '87px'],
            ["style", "font-size", '20px'],
            ["style", "height", '25px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '111px'],
            ["style", "width", '80px']
         ],
         "${symbolSelector}": [
            ["style", "height", '115px'],
            ["style", "width", '220px']
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
"start_result": {
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
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',74,'rgba(255,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'startVar_text',
      text: '？',
      align: 'center',
      rect: ['38px','35px','80px','80px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'number002_text',
      text: 'かい',
      align: 'center',
      rect: ['121px','90px','80px','25px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_startVar_text}": [
            ["style", "top", '35px'],
            ["style", "width", '80px'],
            ["style", "text-align", 'center'],
            ["style", "line-height", '95px'],
            ["style", "height", '80px'],
            ["color", "color", 'rgba(255,0,0,1)'],
            ["style", "left", '38px'],
            ["style", "font-size", '74px']
         ],
         "${_number002_text}": [
            ["style", "top", '90px'],
            ["style", "width", '80px'],
            ["style", "height", '25px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '121px'],
            ["style", "font-size", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '115px'],
            ["style", "width", '242px']
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
})(jQuery, AdobeEdge, "EDGE-1622023748");
