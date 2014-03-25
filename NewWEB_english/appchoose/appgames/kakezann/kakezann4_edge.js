/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['allan, sans-serif']='<script src=\"http://use.edgefonts.net/allan:n7:all.js\"></script>';


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
            id:'hinntobutton',
            display:'none',
            type:'rect',
            rect:['48','33','auto','auto','auto','auto']
         },
         {
            id:'blue1',
            type:'image',
            rect:['606px','563px','91px','96px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"upright2blue.png",'0px','0px'],
            transform:[[],['91']]
         },
         {
            id:'TextME1',
            type:'text',
            rect:['50px','335px','104px','42px','auto','auto'],
            text:"かてば",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(255,253,253,1.00)","normal","none","normal"]
         },
         {
            id:'TextME2',
            type:'text',
            rect:['187px','335px','133px','41px','auto','auto'],
            text:"まいゲット",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'TextCP2',
            type:'text',
            rect:['877px','263px','129px','41px','auto','auto'],
            text:"まいゲット",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'TextCP1',
            type:'text',
            rect:['727px','262px','104px','42px','auto','auto'],
            text:"かてば",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,"rgba(255,253,253,1.00)","normal","none","normal"]
         },
         {
            id:'sikispaceCopy',
            type:'rect',
            rect:['29','324','auto','auto','auto','auto']
         },
         {
            id:'sikispace',
            type:'rect',
            rect:['29','324','auto','auto','auto','auto']
         },
         {
            id:'siki3',
            type:'text',
            rect:['206px','390px','108px','107px','auto','auto'],
            text:"?",
            align:"center",
            font:['MS Serif, New York, serif',68,"rgba(87,87,87,1.00)","normal","none",""]
         },
         {
            id:'siki1',
            type:'text',
            rect:['16px','390px','108px','105px','auto','auto'],
            text:"?",
            align:"center",
            font:['MS Serif, New York, serif',68,"rgba(87,87,87,1.00)","normal","none",""]
         },
         {
            id:'siki2',
            type:'text',
            rect:['105px','390px','108px','107px','auto','auto'],
            text:"?",
            align:"center",
            font:['MS Serif, New York, serif',68,"rgba(87,87,87,1.00)","normal","none",""]
         },
         {
            id:'sikiCP2',
            type:'text',
            rect:['816px','154px','72px','78px','auto','auto'],
            text:"?",
            align:"center",
            font:['MS Serif, New York, serif',68,"rgba(87,87,87,1.00)","normal","none",""]
         },
         {
            id:'sikiCP3',
            type:'text',
            rect:['913px','154px','72px','78px','auto','auto'],
            text:"?",
            align:"center",
            font:['MS Serif, New York, serif',68,"rgba(87,87,87,1.00)","normal","none",""]
         },
         {
            id:'sikiCP1',
            type:'text',
            rect:['718px','154px','72px','75px','auto','auto'],
            text:"?",
            align:"center",
            font:['MS Serif, New York, serif',68,"rgba(87,87,87,1.00)","normal","none",""]
         },
         {
            id:'late',
            type:'text',
            rect:['131px','331px','64px','41px','auto','auto'],
            text:"?",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',30,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'CPlate',
            type:'text',
            rect:['813px','259px','73px','47px','auto','auto'],
            text:"?<br>",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',30,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'smako',
            type:'image',
            rect:['806px','541px','230px','230px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"smako.png",'0px','0px']
         },
         {
            id:'center',
            type:'text',
            rect:['388px','407px','59px','49px','auto','auto'],
            text:"数",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'center2',
            type:'text',
            rect:['494px','147px','59px','49px','auto','auto'],
            text:"数",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'smakotouch',
            type:'rect',
            rect:['901','549','auto','auto','auto','auto']
         },
         {
            id:'pointobar',
            type:'rect',
            rect:['60','299','auto','auto','auto','auto']
         },
         {
            id:'pointobarCP',
            type:'rect',
            rect:['60','299','auto','auto','auto','auto']
         },
         {
            id:'CPpointo',
            type:'text',
            rect:['924px','101px','26px','41px','auto','auto'],
            text:"0<br>",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,"rgba(0,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'pointo',
            type:'text',
            rect:['133px','499px','75px','41px','auto','auto'],
            text:"0<br>",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,"rgba(0,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'kakeru',
            type:'text',
            rect:['489px','186px','47px','44px','auto','auto'],
            text:"×<br>",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,"rgba(253,253,253,1.00)","normal","none","normal"]
         },
         {
            id:'kakeruCP',
            type:'text',
            rect:['489px','408px','47px','44px','auto','auto'],
            text:"×<br>",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,"rgba(253,253,253,1.00)","normal","none","normal"]
         },
         {
            id:'center2dodaiCopy',
            type:'rect',
            rect:['543px','108px','130px','200px','auto','auto'],
            borderRadius:["10px 10px","10px 10px","10px 10px","10px 10px"],
            fill:["rgba(255,255,255,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"]
         },
         {
            id:'kuro1',
            type:'image',
            rect:['543px','110px','130px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump050.png",'0px','0px']
         },
         {
            id:'kuro2',
            type:'image',
            rect:['542px','110px','130px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump046.png",'0px','0px']
         },
         {
            id:'kuro3',
            type:'image',
            rect:['543px','110px','130px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump043.png",'0px','0px']
         },
         {
            id:'kuro4',
            type:'image',
            rect:['543px','110px','130px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump038.png",'0px','0px']
         },
         {
            id:'kuro5',
            type:'image',
            rect:['543px','110px','130px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump035.png",'0px','0px']
         },
         {
            id:'kuro6',
            type:'image',
            rect:['543px','110px','130px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump030.png",'0px','0px']
         },
         {
            id:'kuro7',
            type:'image',
            rect:['540px','109px','130px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump027.png",'0px','0px']
         },
         {
            id:'kuro8',
            type:'image',
            rect:['542px','110px','130px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump022.png",'0px','0px']
         },
         {
            id:'centerdodaiCopy',
            type:'rect',
            rect:['352px','331px','130px','200px','auto','auto'],
            borderRadius:["10px 10px","10px 10px","10px 10px","10px 10px"],
            fill:["rgba(255,255,255,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"]
         },
         {
            id:'kuro9',
            type:'image',
            rect:['542px','110px','130px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump019.png",'0px','0px']
         },
         {
            id:'hato1',
            type:'image',
            rect:['352px','331px','130px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump049.png",'0px','0px']
         },
         {
            id:'hato2',
            type:'image',
            rect:['352px','331px','130px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump048.png",'0px','0px']
         },
         {
            id:'hato3',
            type:'image',
            rect:['352px','331px','130px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump044.png",'0px','0px']
         },
         {
            id:'hato4',
            type:'image',
            rect:['352px','331px','130px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump039.png",'0px','0px']
         },
         {
            id:'hato5',
            type:'image',
            rect:['352px','331px','130px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump034.png",'0px','0px']
         },
         {
            id:'hato6',
            type:'image',
            rect:['352','331','130px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump031.png",'0px','0px']
         },
         {
            id:'hato7',
            type:'image',
            rect:['352px','331px','130px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump026.png",'0px','0px']
         },
         {
            id:'hato8',
            type:'image',
            rect:['352px','331px','130px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump023.png",'0px','0px']
         },
         {
            id:'hato9',
            type:'image',
            rect:['352px','331px','130px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trump018.png",'0px','0px']
         },
         {
            id:'case',
            type:'rect',
            rect:['341px','97px','336px','215px','auto','auto'],
            fill:["rgba(66,249,249,0.00)"],
            stroke:[3,"rgba(255,255,255,1.00)","solid"]
         },
         {
            id:'CPcase',
            type:'rect',
            rect:['341px','321px','336px','215px','auto','auto'],
            fill:["rgba(66,249,249,0.00)"],
            stroke:[3,"rgba(255,255,255,1.00)","solid"]
         },
         {
            id:'center2dodai',
            type:'rect',
            rect:['543px','108px','130px','200px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(255,255,255,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'center2aka',
            type:'rect',
            rect:['553px','120px','110px','180px','auto','auto'],
            borderRadius:["5px 5px","5px 5px","5px 5px","5px 5px"],
            fill:["rgba(238,26,26,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'centerdodai',
            type:'rect',
            rect:['352px','331px','130px','200px','auto','auto'],
            borderRadius:["10px 10px","10px 10px","10px 10px","10px 10px"],
            fill:["rgba(255,255,255,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'centeraka',
            type:'rect',
            rect:['362px','340px','110px','180px','auto','auto'],
            borderRadius:["5px 5px","5px 5px","5px 5px","5px 5px"],
            fill:["rgba(238,26,26,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'CPcard9',
            type:'rect',
            rect:['812','14','auto','auto','auto','auto']
         },
         {
            id:'hintocard9',
            display:'none',
            type:'rect',
            rect:['858px','-117px','133px','200px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:1,
            fill:["rgba(255,0,0,0.53)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'CPcard8',
            type:'rect',
            rect:['721','14','auto','auto','auto','auto']
         },
         {
            id:'hintocard8',
            display:'none',
            type:'rect',
            rect:['791px','-117px','133px','200px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:1,
            fill:["rgba(255,0,0,0.53)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'CPcard7',
            type:'rect',
            rect:['620','14','auto','auto','auto','auto']
         },
         {
            id:'hintocard7',
            display:'none',
            type:'rect',
            rect:['725px','-117px','133px','200px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:1,
            fill:["rgba(255,0,0,0.53)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'CPcard6',
            type:'rect',
            rect:['526','14','auto','auto','auto','auto']
         },
         {
            id:'hintocard6',
            display:'none',
            type:'rect',
            rect:['662px','-117px','133px','200px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:1,
            fill:["rgba(255,0,0,0.53)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'CPcard5',
            type:'rect',
            rect:['440','14','auto','auto','auto','auto']
         },
         {
            id:'hintocard5',
            display:'none',
            type:'rect',
            rect:['595px','-117px','133px','200px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:1,
            fill:["rgba(255,0,0,0.53)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'CPcard4',
            type:'rect',
            rect:['339','14','auto','auto','auto','auto']
         },
         {
            id:'hintocard4',
            display:'none',
            type:'rect',
            rect:['539px','-117px','133px','200px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:1,
            fill:["rgba(255,0,0,0.53)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'CPcard3',
            type:'rect',
            rect:['247','14','auto','auto','auto','auto']
         },
         {
            id:'hintocard3',
            display:'none',
            type:'rect',
            rect:['482px','-117px','133px','200px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:1,
            fill:["rgba(255,0,0,0.53)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'CPcard2',
            type:'rect',
            rect:['154','14','auto','auto','auto','auto']
         },
         {
            id:'hintocard2',
            display:'none',
            type:'rect',
            rect:['420px','-117px','133px','200px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:1,
            fill:["rgba(255,0,0,0.53)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'CPcard1',
            type:'rect',
            rect:['63','14','auto','auto','auto','auto']
         },
         {
            id:'hintocard1',
            display:'none',
            type:'rect',
            rect:['354px','-117px','133px','200px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:1,
            fill:["rgba(255,0,0,0.53)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'card1',
            type:'rect',
            rect:['274','127','auto','auto','auto','auto']
         },
         {
            id:'card2',
            type:'rect',
            rect:['92','245','auto','auto','auto','auto']
         },
         {
            id:'card3',
            type:'rect',
            rect:['215','230','auto','auto','auto','auto']
         },
         {
            id:'card4',
            type:'rect',
            rect:['234','377','auto','auto','auto','auto']
         },
         {
            id:'card5',
            type:'rect',
            rect:['424','261','auto','auto','auto','auto']
         },
         {
            id:'card6',
            type:'rect',
            rect:['469','117','auto','auto','auto','auto']
         },
         {
            id:'card7',
            type:'rect',
            rect:['571','170','auto','auto','auto','auto']
         },
         {
            id:'card8',
            type:'rect',
            rect:['757','378','auto','auto','auto','auto']
         },
         {
            id:'card9',
            type:'rect',
            rect:['403','301','auto','auto','auto','auto']
         },
         {
            id:'drowbutton',
            display:'none',
            type:'rect',
            rect:['850','242','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'card1cover',
            type:'rect',
            rect:['33px','547px','130px','200px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'card2cover',
            type:'rect',
            rect:['100px','547px','130px','200px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'card3cover',
            type:'rect',
            rect:['165px','547px','130px','200px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'card4cover',
            type:'rect',
            rect:['230px','547px','130px','200px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'card5cover',
            type:'rect',
            rect:['295px','549px','130px','200px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'card6cover',
            type:'rect',
            rect:['360px','547px','130px','200px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'card7cover',
            type:'rect',
            rect:['428px','549px','130px','200px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'card8cover',
            type:'rect',
            rect:['493px','549px','130px','200px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'card9cover',
            type:'rect',
            rect:['559px','549px','130px','200px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'okbutton',
            display:'none',
            type:'rect',
            rect:['819','267','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'downbutton',
            display:'none',
            type:'rect',
            rect:['839','697','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'upbutton',
            display:'none',
            type:'rect',
            rect:['839','642','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'kakeOKbutton',
            display:'none',
            type:'rect',
            rect:['713','641','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'hukidasi',
            type:'image',
            rect:['678px','549px','219px','86px','auto','auto'],
            clip:['rect(0px 194px 72px 3px)'],
            fill:["rgba(0,0,0,0)",im+"hukidasi.png",'0px','0px'],
            transform:[[],['180'],[],['1','-1.168']]
         },
         {
            id:'Text2',
            type:'text',
            rect:['710px','562px','169px','27px','auto','auto'],
            text:"言葉入れ",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',18,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'battleCP',
            type:'rect',
            rect:['0px','-187px','1024px','570px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","solid"],
            transform:[[],[],['0','20']]
         },
         {
            id:'battle',
            type:'rect',
            rect:['0px','384px','1024px','570px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","solid"],
            transform:[[],[],['0','20']]
         },
         {
            id:'battleText',
            display:'none',
            type:'text',
            rect:['370px','208px','297px','286px','auto','auto'],
            text:"VS",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',200,"rgba(255,237,0,1.00)","700","none","italic"],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'Systemplus',
            type:'text',
            rect:['210px','300px','320px','200px','auto','auto'],
            text:"0<br>",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',140,"rgba(0,0,0,1)","600","none","normal"]
         },
         {
            id:'CPseki',
            type:'text',
            rect:['400px','1px','320px','200px','auto','auto'],
            text:"0",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',140,"rgba(0,0,0,1)","600","none","normal"]
         },
         {
            id:'penpenCP',
            type:'image',
            rect:['1702px','-44px','363px','372px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"penpen2.png",'0px','0px']
         },
         {
            id:'pontaCP',
            type:'image',
            rect:['1698px','0px','330px','310px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ponta2.png",'0px','0px'],
            transform:[[],[],[],['-1.155']]
         },
         {
            id:'kaminariCP',
            type:'image',
            rect:['1536px','-100px','678px','538px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"kumonchan2.png",'0px','0px']
         },
         {
            id:'bonnouCP',
            type:'image',
            rect:['642px','-26px','437px','315px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bonnou%20fin.png",'0px','0px']
         },
         {
            id:'bonnouY',
            type:'image',
            rect:['2px','405px','462px','342px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bonnou%20fin.png",'0px','0px']
         },
         {
            id:'kaminariY',
            type:'image',
            rect:['-117px','356px','674px','539px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"kumonchan2.png",'0px','0px']
         },
         {
            id:'penpenY',
            type:'image',
            rect:['34px','395px','372px','388px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"penpen.png",'0px','0px']
         },
         {
            id:'smaoY',
            type:'image',
            rect:['-309px','343px','858px','837px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"smao.png",'0px','0px']
         },
         {
            id:'smakoY',
            type:'image',
            rect:['-238px','416px','763px','681px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"smako.png",'0px','0px']
         },
         {
            id:'cover',
            display:'none',
            type:'rect',
            rect:['-45px','-14px','1057px','570px','auto','auto'],
            opacity:0.6953125,
            fill:["rgba(240,240,240,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'kati',
            display:'none',
            type:'text',
            rect:['154px','129px','668px','321px','auto','auto'],
            text:"コインゲット!!",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',180,"rgba(241,19,19,1.00)","normal","none","normal"]
         },
         {
            id:'make',
            display:'none',
            type:'text',
            rect:['154px','129px','668px','321px','auto','auto'],
            text:"ざんねん!!",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',180,"rgba(18,32,241,1.00)","normal","none","normal"]
         },
         {
            id:'hikiwake',
            display:'none',
            type:'text',
            rect:['154px','129px','668px','321px','auto','auto'],
            text:"ひきわけ<br>",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',161,"rgba(27,135,8,1.00)","normal","none","normal"]
         },
         {
            id:'end',
            display:'none',
            type:'rect',
            rect:['0px','0px','1024px','768px','auto','auto'],
            fill:["rgba(255,255,255,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'end_return',
            display:'none',
            type:'rect',
            rect:['708','641','auto','auto','auto','auto']
         },
         {
            id:'end_win_Text',
            display:'none',
            type:'text',
            rect:['142px','-148px','728px','148px','auto','auto'],
            text:"あなたのかちです。",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',100,"rgba(251,8,8,1.00)","normal","none",""]
         },
         {
            id:'end_lose_Text',
            type:'text',
            rect:['191px','-148px','733px','180px','auto','auto'],
            text:"あなたのまけです。",
            align:"left",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',100,"rgba(38,7,251,1.00)","normal","none","normal"]
         },
         {
            id:'kyara',
            display:'none',
            type:'rect',
            rect:['157','303','auto','auto','auto','auto']
         },
         {
            id:'kyaraCP',
            display:'none',
            type:'rect',
            rect:['648','310','auto','auto','auto','auto']
         },
         {
            id:'CPtennsuu',
            display:'none',
            type:'text',
            rect:['689px','99px','200px','100px','auto','auto'],
            text:"0<br>",
            align:"center",
            font:['Lucida Sans Unicode, Lucida Grande, sans-serif',100,"rgba(87,87,87,1)","normal","none","normal"]
         },
         {
            id:'tennsuu',
            display:'none',
            type:'text',
            rect:['266px','99px','200px','100px','auto','auto'],
            text:"0<br>",
            align:"center",
            font:['Lucida Sans Unicode, Lucida Grande, sans-serif',100,"rgba(87,87,87,1)","normal","none","normal"]
         },
         {
            id:'endtextCP',
            display:'none',
            type:'text',
            rect:['548px','122px','169px','86px','auto','auto'],
            text:"CP<br>",
            align:"center",
            font:['\'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif',63,"rgba(73,95,215,1.00)","normal","none","normal"]
         },
         {
            id:'endtext',
            display:'none',
            type:'text',
            rect:['48px','114px','247px','86px','auto','auto'],
            text:"あなた<br>",
            align:"center",
            font:['\'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif',63,"rgba(246,20,20,1.00)","normal","none","normal"]
         },
         {
            id:'kamihubukiafter',
            type:'rect',
            rect:['143','0','auto','auto','auto','auto']
         },
         {
            id:'cardscover3',
            type:'rect',
            rect:['21px','506px','692px','271px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'cardscover2',
            display:'none',
            type:'rect',
            rect:['13px','548px','690px','211px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'cardscover',
            type:'rect',
            rect:['11px','515px','690px','253px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'hinntostage',
            display:'none',
            type:'rect',
            rect:['24','23','auto','auto','auto','auto']
         },
         {
            id:'hintomax',
            display:'none',
            type:'text',
            rect:['502px','49px','47px','65px','auto','auto'],
            text:"0<br>",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',41,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'hintomin',
            display:'none',
            type:'text',
            rect:['877px','47px','47px','65px','auto','auto'],
            text:"0<br>",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',41,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'hintoseki',
            display:'none',
            type:'text',
            rect:['536px','134px','120px','52px','auto','auto'],
            text:"?×?<br>",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',41,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'hintominmax',
            display:'none',
            type:'text',
            rect:['213px','229px','105px','44px','auto','auto'],
            text:"？？？",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',32,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'startgamen',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'startbutton',
            type:'rect',
            rect:['191','118','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'setumei',
            type:'rect',
            rect:['44','42px','auto','auto','auto','auto']
         },
         {
            id:'rennsyuubutton',
            type:'rect',
            rect:['383','555px','auto','auto','auto','auto']
         },
         {
            id:'hintest',
            display:'none',
            type:'rect',
            rect:['3px','296px','1024px','230px','auto','auto'],
            fill:["rgba(192,192,192,1)",[270,[['rgba(255,159,40,1.00)',0],['rgba(255,232,165,1.00)',100]]]],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'hintext',
            display:'none',
            type:'text',
            rect:['31px','311px','967px','200px','auto','auto'],
            text:"?",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',129,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'rennsyuustage',
            display:'none',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'rennsyuuend',
            display:'none',
            type:'rect',
            rect:['18','25','auto','auto','auto','auto']
         },
         {
            id:'kyarakutachoose',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'smakoch',
            type:'rect',
            rect:['54','57','auto','auto','auto','auto']
         },
         {
            id:'smaoch',
            type:'rect',
            rect:['302','62','auto','auto','auto','auto']
         },
         {
            id:'penpench',
            type:'rect',
            rect:['548','73','auto','auto','auto','auto']
         },
         {
            id:'bonnouch',
            type:'rect',
            rect:['74','344','auto','auto','auto','auto']
         },
         {
            id:'kaminarich',
            type:'rect',
            rect:['351','350','auto','auto','auto','auto']
         },
         {
            id:'kettei',
            type:'rect',
            rect:['687','436','auto','auto','auto','auto']
         },
         {
            id:'kyarasenText',
            type:'text',
            rect:['89px','55px','846px','74px','auto','auto'],
            text:"キャラクターをえらんでね！！<br>",
            align:"center",
            font:['\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace',56,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'kaminaribox',
            display:'none',
            type:'rect',
            rect:['409px','490px','186px','186px','auto','auto'],
            borderRadius:["9px 9px","9px 9px","9px 9px","9px 9px"],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[7,"rgba(234,255,8,1.00)","solid"]
         },
         {
            id:'bonnoubox',
            display:'none',
            type:'rect',
            rect:['132px','485px','186px','186px','auto','auto'],
            borderRadius:["9px 9px","9px 9px","9px 9px","9px 9px"],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[7,"rgba(234,255,8,1.00)","solid"]
         },
         {
            id:'penpenbox',
            display:'none',
            type:'rect',
            rect:['692px','186px','186px','186px','auto','auto'],
            borderRadius:["9px 9px","9px 9px","9px 9px","9px 9px"],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[7,"rgba(234,255,8,1.00)","solid"]
         },
         {
            id:'smaobox',
            display:'none',
            type:'rect',
            rect:['409px','186px','186px','186px','auto','auto'],
            borderRadius:["9px 9px","9px 9px","9px 9px","9px 9px"],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[7,"rgba(234,255,8,1.00)","solid"]
         },
         {
            id:'smakobox',
            type:'rect',
            rect:['132px','186px','186px','186px','auto','auto'],
            borderRadius:["9px 9px","9px 9px","9px 9px","9px 9px"],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[7,"rgba(234,255,8,1.00)","solid"]
         },
         {
            id:'smakochc',
            type:'rect',
            rect:['134px','187px','200px','200px','auto','auto'],
            fill:["rgba(192,192,192,0)"],
            stroke:[0,"rgb(234, 255, 8)","solid"]
         },
         {
            id:'smaochc',
            type:'rect',
            rect:['411px','187px','200px','200px','auto','auto'],
            fill:["rgba(192,192,192,0)"],
            stroke:[0,"rgb(234, 255, 8)","solid"]
         },
         {
            id:'penpenchc',
            type:'rect',
            rect:['693px','186px','200px','200px','auto','auto'],
            fill:["rgba(192,192,192,0)"],
            stroke:[0,"rgb(234, 255, 8)","solid"]
         },
         {
            id:'bonnouchc',
            type:'rect',
            rect:['132px','487px','200px','200px','auto','auto'],
            fill:["rgba(192,192,192,0)"],
            stroke:[0,"rgb(234, 255, 8)","solid"]
         },
         {
            id:'kaminarichc',
            type:'rect',
            rect:['413px','494px','200px','200px','auto','auto'],
            fill:["rgba(192,192,192,0)"],
            stroke:[0,"rgb(234, 255, 8)","solid"]
         },
         {
            id:'gamestartgamenn',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'gamestartbutton',
            type:'rect',
            rect:['337','403','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'end_return',
            symbolName:'end_return'
         },
         {
            id:'CPcard5',
            symbolName:'CPcard5'
         },
         {
            id:'rennsyuubutton',
            symbolName:'rennsyuubutton'
         },
         {
            id:'card5',
            symbolName:'card5'
         },
         {
            id:'CPcard8',
            symbolName:'CPcard8'
         },
         {
            id:'card6',
            symbolName:'card6'
         },
         {
            id:'card4',
            symbolName:'card4'
         },
         {
            id:'CPcard9',
            symbolName:'CPcard9'
         },
         {
            id:'setumei',
            symbolName:'setumei'
         },
         {
            id:'kaminarich',
            symbolName:'kaminari'
         },
         {
            id:'startbutton',
            symbolName:'startbutton'
         },
         {
            id:'smakoch',
            symbolName:'smako'
         },
         {
            id:'kyarakutachoose',
            symbolName:'Symbol_1'
         },
         {
            id:'upbutton',
            symbolName:'upbutton'
         },
         {
            id:'sikispace',
            symbolName:'sikispace'
         },
         {
            id:'CPcard1',
            symbolName:'CPcard1'
         },
         {
            id:'kamihubukiafter',
            symbolName:'kamihubukiafter'
         },
         {
            id:'smakotouch',
            symbolName:'smakotouch'
         },
         {
            id:'pointobarCP',
            symbolName:'pointobar'
         },
         {
            id:'okbutton',
            symbolName:'okbutton'
         },
         {
            id:'card8',
            symbolName:'card8'
         },
         {
            id:'CPcard2',
            symbolName:'CPcard2'
         },
         {
            id:'kettei',
            symbolName:'kettei'
         },
         {
            id:'CPcard7',
            symbolName:'CPcard7'
         },
         {
            id:'bonnouch',
            symbolName:'bonnou'
         },
         {
            id:'rennsyuustage',
            symbolName:'rennsyuustage_1'
         },
         {
            id:'smaoch',
            symbolName:'smao'
         },
         {
            id:'startgamen',
            symbolName:'startgamen'
         },
         {
            id:'kakeOKbutton',
            symbolName:'kakeOKbutton'
         },
         {
            id:'CPcard6',
            symbolName:'CPcard6'
         },
         {
            id:'CPcard3',
            symbolName:'CPcard3'
         },
         {
            id:'rennsyuuend',
            symbolName:'rennsyuuend'
         },
         {
            id:'card3',
            symbolName:'card3'
         },
         {
            id:'penpench',
            symbolName:'penpen'
         },
         {
            id:'gamestartbutton',
            symbolName:'gamestartbutton'
         },
         {
            id:'CPcard4',
            symbolName:'CPcard4'
         },
         {
            id:'kyaraCP',
            symbolName:'kyaraCP'
         },
         {
            id:'kyara',
            symbolName:'kyara'
         },
         {
            id:'card2',
            symbolName:'card2'
         },
         {
            id:'sikispaceCopy',
            symbolName:'sikispace'
         },
         {
            id:'pointobar',
            symbolName:'pointobar'
         },
         {
            id:'downbutton',
            symbolName:'downbutton'
         },
         {
            id:'card9',
            symbolName:'card9'
         },
         {
            id:'hinntostage',
            symbolName:'hinntostage'
         },
         {
            id:'drowbutton',
            symbolName:'drowbutton'
         },
         {
            id:'hinntobutton',
            symbolName:'hinntobutton'
         },
         {
            id:'card1',
            symbolName:'card1'
         },
         {
            id:'gamestartgamenn',
            symbolName:'gamestartgamenn'
         },
         {
            id:'card7',
            symbolName:'card7'
         }
         ]
      },
   states: {
      "Base State": {
         "${_card2}": [
            ["style", "top", '548px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '101px']
         ],
         "${_pontaCP}": [
            ["style", "top", '0px'],
            ["style", "height", '310px'],
            ["transform", "scaleX", '-1.15522'],
            ["style", "left", '1698px'],
            ["style", "width", '330px']
         ],
         "${_sikiCP3}": [
            ["style", "top", '154px'],
            ["style", "font-size", '68px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(87,87,87,1)'],
            ["style", "height", '78px'],
            ["style", "font-family", '\'MS Serif\', \'New York\', serif'],
            ["style", "left", '913px'],
            ["style", "width", '72px']
         ],
         "${_end_lose_Text}": [
            ["style", "top", '-148px'],
            ["color", "color", 'rgba(38,7,251,1.00)'],
            ["style", "display", 'block'],
            ["style", "left", '93px'],
            ["style", "width", '912px']
         ],
         "${_card6}": [
            ["style", "top", '548px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '361px']
         ],
         "${_center}": [
            ["style", "top", '407px'],
            ["style", "left", '388px']
         ],
         "${_hintocard3}": [
            ["color", "background-color", 'rgba(255,0,0,0.5273)'],
            ["style", "top", '-117px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '482px'],
            ["style", "width", '133px']
         ],
         "${_hintoseki}": [
            ["style", "display", 'none'],
            ["style", "top", '134px'],
            ["style", "left", '536px'],
            ["style", "width", '120px']
         ],
         "${_pointo}": [
            ["style", "top", '499px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '75px'],
            ["style", "left", '133px'],
            ["style", "font-size", '26px']
         ],
         "${_late}": [
            ["style", "top", '331px'],
            ["style", "font-size", '30px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif'],
            ["style", "left", '131px'],
            ["style", "width", '64px']
         ],
         "${_bonnouY}": [
            ["style", "top", '405px'],
            ["style", "height", '342px'],
            ["style", "left", '-1022px'],
            ["style", "width", '462px']
         ],
         "${_CPcard8}": [
            ["style", "top", '-117px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '794px'],
            ["transform", "scaleX", '1']
         ],
         "${_rennsyuubutton}": [
            ["style", "left", '579px'],
            ["style", "top", '560px']
         ],
         "${_TextCP2}": [
            ["style", "top", '263px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '877px'],
            ["style", "width", '129px']
         ],
         "${_hikiwake}": [
            ["style", "top", '207px'],
            ["style", "width", '1018px'],
            ["color", "color", 'rgba(27,135,8,1.00)'],
            ["style", "display", 'none'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
            ["style", "left", '3px'],
            ["style", "font-size", '130px']
         ],
         "${_card1}": [
            ["style", "top", '548px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '36px']
         ],
         "${_card5cover}": [
            ["style", "top", '549px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '295px'],
            ["style", "width", '130px']
         ],
         "${_CPcard6}": [
            ["style", "top", '-117px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '664px']
         ],
         "${_kaminaribox}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "border-top-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '7px'],
            ["style", "width", '186px'],
            ["style", "top", '490px'],
            ["style", "border-bottom-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "height", '186px'],
            ["color", "border-color", 'rgb(234, 255, 8)'],
            ["style", "left", '409px'],
            ["style", "border-top-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_rennsyuustage}": [
            ["style", "display", 'none']
         ],
         "${_CPcard5}": [
            ["style", "top", '-117px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '597px']
         ],
         "${_centeraka}": [
            ["color", "background-color", 'rgba(238,26,26,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '362px'],
            ["style", "width", '110px'],
            ["style", "top", '340px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '180px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_sikiCP1}": [
            ["style", "top", '154px'],
            ["style", "width", '72px'],
            ["style", "text-align", 'center'],
            ["style", "height", '75px'],
            ["color", "color", 'rgba(87,87,87,1.00)'],
            ["style", "font-family", 'MS Serif, New York, serif'],
            ["style", "left", '718px'],
            ["style", "font-size", '68px']
         ],
         "${_centerdodai}": [
            ["style", "top", '331px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '352px'],
            ["style", "width", '130px']
         ],
         "${_smaoY}": [
            ["style", "top", '343px'],
            ["style", "height", '837px'],
            ["style", "left", '-1333px'],
            ["style", "width", '858px']
         ],
         "${_kaminarich}": [
            ["style", "left", '409px'],
            ["style", "top", '490px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(46,176,26,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_siki2}": [
            ["style", "top", '390px'],
            ["style", "width", '108px'],
            ["style", "text-align", 'center'],
            ["style", "height", '107px'],
            ["color", "color", 'rgba(87,87,87,1.00)'],
            ["style", "font-family", 'MS Serif, New York, serif'],
            ["style", "left", '105px'],
            ["style", "font-size", '68px']
         ],
         "${_card4cover}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '230px'],
            ["style", "width", '130px']
         ],
         "${_cardscover3}": [
            ["style", "height", '271px'],
            ["style", "opacity", '0'],
            ["style", "width", '692px']
         ],
         "${_CPseki}": [
            ["color", "color", 'rgba(0,32,113,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '571px'],
            ["style", "width", '320px'],
            ["style", "top", '-200px'],
            ["style", "display", 'block'],
            ["style", "font-weight", '600'],
            ["style", "font-size", '140px'],
            ["style", "height", '200px']
         ],
         "${_CPcard9}": [
            ["style", "top", '-117px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '861px']
         ],
         "${_hintocard9}": [
            ["color", "background-color", 'rgba(255,0,0,0.5273)'],
            ["style", "top", '-117px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '858px'],
            ["style", "width", '133px']
         ],
         "${_smaoch}": [
            ["style", "top", '186px'],
            ["style", "left", '409px']
         ],
         "${_card4}": [
            ["style", "top", '548px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '231px']
         ],
         "${_hato8}": [
            ["style", "height", '200px'],
            ["style", "top", '331px'],
            ["style", "left", '352px'],
            ["style", "width", '130px']
         ],
         "${_endtext}": [
            ["style", "top", '114px'],
            ["style", "width", '247px'],
            ["color", "color", 'rgba(246,20,20,1.00)'],
            ["style", "display", 'none'],
            ["style", "left", '48px'],
            ["style", "font-size", '63px']
         ],
         "${_hintominmax}": [
            ["style", "display", 'none'],
            ["style", "top", '229px'],
            ["style", "height", '44px'],
            ["style", "font-size", '32px']
         ],
         "${_kakekinntxtCopy}": [
            ["style", "top", '470px'],
            ["style", "width", '70px'],
            ["style", "left", '232px'],
            ["style", "font-size", '34px']
         ],
         "${_hinntobutton}": [
            ["style", "top", '14px'],
            ["transform", "scaleY", '1.12'],
            ["style", "display", 'none'],
            ["style", "left", '21px'],
            ["transform", "scaleX", '1.10848']
         ],
         "${_hato6}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
         ],
         "${_battleText}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,237,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '370px'],
            ["style", "font-size", '200px'],
            ["style", "top", '208px'],
            ["style", "opacity", '0'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "display", 'none'],
            ["style", "font-style", 'italic'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '339px']
         ],
         "${_CPpointoCopy}": [
            ["style", "left", '924px'],
            ["style", "top", '101px']
         ],
         "${_CPtennsuu}": [
            ["style", "top", '99px'],
            ["style", "display", 'none'],
            ["style", "height", '100px'],
            ["style", "font-family", 'Lucida Sans Unicode, Lucida Grande, sans-serif'],
            ["style", "left", '689px'],
            ["style", "width", '200px']
         ],
         "${_center2}": [
            ["style", "top", '177px'],
            ["style", "display", 'block'],
            ["style", "height", '65px'],
            ["style", "left", '560px'],
            ["style", "width", '95px']
         ],
         "${_kakeruCP}": [
            ["style", "top", '408px'],
            ["style", "left", '489px'],
            ["color", "color", 'rgba(253,253,253,1.00)']
         ],
         "${_card9cover}": [
            ["style", "top", '549px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '559px'],
            ["style", "width", '130px']
         ],
         "${_tennsuu}": [
            ["style", "top", '99px'],
            ["style", "display", 'none'],
            ["style", "height", '100px'],
            ["style", "font-family", 'Lucida Sans Unicode, Lucida Grande, sans-serif'],
            ["style", "left", '272px'],
            ["style", "width", '200px']
         ],
         "${_okbutton}": [
            ["style", "top", '646px'],
            ["transform", "scaleY", '1.59524'],
            ["style", "display", 'none'],
            ["style", "left", '740px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1.42619']
         ],
         "${_card2cover}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '100px'],
            ["style", "width", '130px']
         ],
         "${_TextME1}": [
            ["style", "top", '335px'],
            ["style", "width", '104px'],
            ["style", "height", '42px'],
            ["color", "color", 'rgba(255,253,253,1.00)'],
            ["style", "left", '50px'],
            ["style", "font-size", '25px']
         ],
         "${_hintocard6}": [
            ["color", "background-color", 'rgba(255,0,0,0.5273)'],
            ["style", "top", '-117px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '662px'],
            ["style", "width", '133px']
         ],
         "${_hato1}": [
            ["style", "height", '200px'],
            ["style", "top", '331px'],
            ["style", "left", '352px'],
            ["style", "width", '130px']
         ],
         "${_upbutton}": [
            ["style", "top", '616px'],
            ["transform", "scaleY", '1.35484'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '1.09499'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '837px']
         ],
         "${_kuro8}": [
            ["style", "height", '200px'],
            ["style", "top", '110px'],
            ["style", "left", '542px'],
            ["style", "width", '130px']
         ],
         "${_kuro3}": [
            ["style", "height", '200px'],
            ["style", "top", '110px'],
            ["style", "left", '543px'],
            ["style", "width", '130px']
         ],
         "${_CPcard2}": [
            ["style", "top", '-117px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '419px']
         ],
         "${_pointobar}": [
            ["style", "top", '493px'],
            ["style", "left", '33px']
         ],
         "${_CPlate}": [
            ["style", "top", '259px'],
            ["style", "font-size", '30px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '47px'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif'],
            ["style", "left", '813px'],
            ["style", "width", '73px']
         ],
         "${_card6cover}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '360px'],
            ["style", "width", '130px']
         ],
         "${_kyara}": [
            ["style", "display", 'none'],
            ["style", "left", '157px'],
            ["style", "top", '303px']
         ],
         "${_siki3}": [
            ["style", "top", '390px'],
            ["style", "font-size", '68px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(87,87,87,1)'],
            ["style", "height", '107px'],
            ["style", "font-family", '\'MS Serif\', \'New York\', serif'],
            ["style", "left", '206px'],
            ["style", "width", '108px']
         ],
         "${_gamestartbutton}": [
            ["style", "top", '529px'],
            ["style", "left", '332px']
         ],
         "${_startgamen}": [
            ["transform", "scaleY", '1.01167'],
            ["style", "top", '4px']
         ],
         "${_hato7}": [
            ["style", "height", '200px'],
            ["style", "top", '331px'],
            ["style", "left", '352px'],
            ["style", "width", '130px']
         ],
         "${_bonnouCP}": [
            ["style", "top", '-26px'],
            ["style", "height", '315px'],
            ["style", "left", '1665px'],
            ["style", "width", '437px']
         ],
         "${_bonnouchc}": [
            ["style", "left", '132px']
         ],
         "${_centerdodaiCopy}": [
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '352px'],
            ["style", "width", '130px'],
            ["style", "top", '331px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_card3cover}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '165px'],
            ["style", "width", '130px']
         ],
         "${_drowbutton}": [
            ["style", "top", '640px'],
            ["transform", "scaleY", '1.45977'],
            ["style", "display", 'none'],
            ["style", "left", '752px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1.84146']
         ],
         "${_TextCP1}": [
            ["style", "top", '262px'],
            ["style", "font-size", '25px'],
            ["style", "height", '42px'],
            ["color", "color", 'rgba(255,253,253,1)'],
            ["style", "left", '727px'],
            ["style", "width", '104px']
         ],
         "${_blue1}": [
            ["style", "top", '563px'],
            ["transform", "rotateZ", '91deg'],
            ["style", "height", '96px'],
            ["style", "left", '606px'],
            ["style", "width", '91px']
         ],
         "${_centerCopy}": [
            ["style", "top", '407px'],
            ["style", "left", '388px']
         ],
         "${_center2Copy}": [
            ["style", "top", '177px'],
            ["style", "height", '65px'],
            ["style", "display", 'block'],
            ["style", "left", '560px'],
            ["style", "width", '95px']
         ],
         "${_hintocard2}": [
            ["color", "background-color", 'rgba(255,0,0,0.5273)'],
            ["style", "top", '-117px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '420px'],
            ["style", "width", '133px']
         ],
         "${_bonnouch}": [
            ["style", "top", '485px'],
            ["style", "left", '132px']
         ],
         "${_CPcard4}": [
            ["style", "top", '-117px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '542px']
         ],
         "${_hukidasi}": [
            ["style", "top", '549px'],
            ["transform", "scaleY", '-1.16824'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '86px'],
            ["style", "left", '678px'],
            ["style", "clip", [0,194,72,3], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '219px']
         ],
         "${_kamihubukiafter}": [
            ["style", "display", 'block']
         ],
         "${_CPcard1}": [
            ["style", "top", '-117px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '355px']
         ],
         "${_endtextCP}": [
            ["style", "top", '122px'],
            ["color", "color", 'rgba(73,95,215,1.00)'],
            ["style", "height", '86px'],
            ["style", "left", '548px'],
            ["style", "display", 'none']
         ],
         "${_kaminariCP}": [
            ["style", "height", '538px'],
            ["style", "top", '-100px'],
            ["style", "left", '1536px'],
            ["style", "width", '678px']
         ],
         "${_kaminariY}": [
            ["style", "top", '356px'],
            ["style", "height", '539px'],
            ["style", "left", '-1141px'],
            ["style", "width", '674px']
         ],
         "${_penpenY}": [
            ["style", "top", '395px'],
            ["style", "height", '388px'],
            ["style", "left", '-990px'],
            ["style", "width", '372px']
         ],
         "${_sikispace}": [
            ["transform", "scaleX", '0.74348'],
            ["transform", "scaleY", '0.74348'],
            ["style", "left", '-17px'],
            ["style", "top", '374px']
         ],
         "${_kyaraCP}": [
            ["style", "display", 'none'],
            ["style", "left", '648px'],
            ["style", "top", '310px']
         ],
         "${_card7}": [
            ["style", "top", '548px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '428px']
         ],
         "${_card1cover}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '33px'],
            ["style", "width", '130px']
         ],
         "${_smako}": [
            ["style", "height", '230px'],
            ["style", "top", '541px'],
            ["style", "left", '806px'],
            ["style", "width", '230px']
         ],
         "${_hato5}": [
            ["style", "height", '200px'],
            ["style", "top", '331px'],
            ["style", "left", '352px'],
            ["style", "width", '130px']
         ],
         "${_hintocard5}": [
            ["color", "background-color", 'rgba(255,0,0,0.5273)'],
            ["style", "top", '-117px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '595px'],
            ["style", "width", '133px']
         ],
         "${_kuro6}": [
            ["style", "height", '200px'],
            ["style", "top", '110px'],
            ["style", "left", '543px'],
            ["style", "width", '130px']
         ],
         "${_kuro1}": [
            ["style", "height", '200px'],
            ["style", "top", '110px'],
            ["style", "left", '543px'],
            ["style", "width", '130px']
         ],
         "${_startbutton}": [
            ["style", "top", '560px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '118px'],
            ["style", "cursor", 'pointer']
         ],
         "${_smakobox}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "border-top-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '7px'],
            ["style", "width", '186px'],
            ["style", "top", '186px'],
            ["style", "border-bottom-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '186px'],
            ["color", "border-color", 'rgb(234, 255, 8)'],
            ["style", "border-top-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '132px']
         ],
         "${_center2dodaiCopy}": [
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '543px'],
            ["style", "width", '130px'],
            ["style", "top", '110px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_hato3}": [
            ["style", "height", '200px'],
            ["style", "top", '331px'],
            ["style", "left", '352px'],
            ["style", "width", '130px']
         ],
         "${_smakoch}": [
            ["style", "left", '132px'],
            ["style", "top", '186px']
         ],
         "${_bonnoubox}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "border-top-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '7px'],
            ["style", "width", '186px'],
            ["style", "top", '485px'],
            ["style", "border-bottom-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "height", '186px'],
            ["color", "border-color", 'rgb(234, 255, 8)'],
            ["style", "left", '132px'],
            ["style", "border-top-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_kuro5}": [
            ["style", "height", '200px'],
            ["style", "top", '110px'],
            ["style", "left", '543px'],
            ["style", "width", '130px']
         ],
         "${_cardscover2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_kakeru}": [
            ["style", "top", '186px'],
            ["style", "left", '489px'],
            ["color", "color", 'rgba(253,253,253,1)']
         ],
         "${_kuro7}": [
            ["style", "height", '200px'],
            ["style", "top", '110px'],
            ["style", "left", '542px'],
            ["style", "width", '130px']
         ],
         "${_kakeOKbutton}": [
            ["style", "top", '629px'],
            ["transform", "scaleY", '1.21957'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '1.10536'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '707px']
         ],
         "${_Systemplus}": [
            ["color", "color", 'rgba(169,35,0,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '113px'],
            ["style", "font-size", '140px'],
            ["style", "top", '764px'],
            ["style", "display", 'block'],
            ["style", "font-weight", '600'],
            ["style", "width", '320px'],
            ["style", "height", '200px']
         ],
         "${_pointoCopy}": [
            ["style", "top", '499px'],
            ["style", "font-size", '26px'],
            ["style", "left", '133px'],
            ["style", "width", '75px']
         ],
         "${_hinntostage}": [
            ["style", "display", 'none']
         ],
         "${_case}": [
            ["style", "top", '97px'],
            ["color", "background-color", 'rgba(66,249,249,0.00)'],
            ["style", "left", '341px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '215px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '3px'],
            ["style", "width", '336px']
         ],
         "${_hintext}": [
            ["style", "top", '311px'],
            ["style", "display", 'none'],
            ["style", "font-size", '100px']
         ],
         "${_center2dodai}": [
            ["style", "top", '110px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '543px'],
            ["style", "width", '130px']
         ],
         "${_cover}": [
            ["color", "background-color", 'rgba(240,240,240,1.00)'],
            ["style", "display", 'none'],
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["style", "opacity", '0.6953125'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${_card5}": [
            ["style", "top", '548px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '296px']
         ],
         "${_CPcard3}": [
            ["style", "top", '-117px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '481px']
         ],
         "${_sikispaceCopy}": [
            ["transform", "scaleX", '0.74348'],
            ["style", "top", '143px'],
            ["transform", "scaleY", '0.74348'],
            ["style", "left", '668px']
         ],
         "${_downbutton}": [
            ["style", "top", '695px'],
            ["transform", "scaleY", '1.28091'],
            ["transform", "scaleX", '1.04546'],
            ["style", "left", '839px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_kuro2}": [
            ["style", "height", '200px'],
            ["style", "top", '110px'],
            ["style", "left", '542px'],
            ["style", "width", '130px']
         ],
         "${_penpenCP}": [
            ["style", "height", '372px'],
            ["style", "top", '-44px'],
            ["style", "left", '1702px'],
            ["style", "width", '363px']
         ],
         "${_CPcase}": [
            ["style", "top", '321px'],
            ["color", "background-color", 'rgba(66,249,249,0)'],
            ["style", "border-width", '3px'],
            ["color", "border-color", 'rgb(255, 255, 255)'],
            ["style", "height", '215px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '341px'],
            ["style", "width", '336px']
         ],
         "${_end_return}": [
            ["style", "top", '654px'],
            ["transform", "scaleY", '0.88609'],
            ["transform", "scaleX", '0.88929'],
            ["style", "left", '752px'],
            ["style", "display", 'none']
         ],
         "${_kyarakutachoose}": [
            ["style", "left", '3px'],
            ["transform", "scaleX", '1.01088']
         ],
         "${_rennsyuuend}": [
            ["style", "display", 'none'],
            ["style", "left", '6px'],
            ["style", "top", '712px']
         ],
         "${_hintocard1}": [
            ["color", "background-color", 'rgba(255,0,0,0.53)'],
            ["style", "opacity", '1'],
            ["style", "display", 'none'],
            ["style", "width", '133px']
         ],
         "${_card7cover}": [
            ["style", "top", '549px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '428px'],
            ["style", "width", '130px']
         ],
         "${_CPcard7}": [
            ["style", "top", '-117px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '728px']
         ],
         "${_kakeruCopy}": [
            ["style", "top", '186px'],
            ["style", "left", '489px'],
            ["color", "color", 'rgba(253,253,253,1)']
         ],
         "${_sikiCP2}": [
            ["style", "top", '154px'],
            ["style", "width", '72px'],
            ["style", "text-align", 'center'],
            ["style", "height", '78px'],
            ["color", "color", 'rgba(87,87,87,1.00)'],
            ["style", "font-family", 'MS Serif, New York, serif'],
            ["style", "left", '816px'],
            ["style", "font-size", '68px']
         ],
         "${_hato2}": [
            ["style", "height", '200px'],
            ["style", "top", '331px'],
            ["style", "left", '352px'],
            ["style", "width", '130px']
         ],
         "${_hintest}": [
            ["style", "top", '296px'],
            ["gradient", "background-image", [270,[['rgba(255,159,40,1.00)',0],['rgba(255,232,165,1.00)',100]]]],
            ["style", "left", '3px'],
            ["style", "display", 'none']
         ],
         "${_smaobox}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "border-top-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '7px'],
            ["style", "width", '186px'],
            ["style", "top", '186px'],
            ["style", "border-bottom-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "height", '186px'],
            ["color", "border-color", 'rgb(234, 255, 8)'],
            ["style", "left", '409px'],
            ["style", "border-top-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_setumei}": [
            ["style", "top", '42px']
         ],
         "${_smakochc}": [
            ["style", "height", '200px'],
            ["style", "border-width", '0px'],
            ["style", "width", '200px']
         ],
         "${_card8}": [
            ["style", "top", '548px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '493px']
         ],
         "${_kyarasenText}": [
            ["style", "top", '55px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", 'Osaka－等幅, Osaka-mono, ＭＳゴシック, \'MS Gothic\', monospace'],
            ["style", "left", '89px'],
            ["style", "font-size", '56px']
         ],
         "${_battleCP}": [
            ["gradient", "background-image", [270,[['rgba(254,254,255,1.00)',0],['rgba(42,92,212,1.00)',100]]]],
            ["style", "left", '1024px'],
            ["style", "width", '1024px'],
            ["style", "top", '-187px'],
            ["transform", "skewY", '20deg'],
            ["style", "height", '570px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '5px']
         ],
         "${_smakotouch}": [
            ["style", "opacity", '0']
         ],
         "${_card9}": [
            ["style", "top", '548px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '558px']
         ],
         "${_hintomax}": [
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-size", '41px']
         ],
         "${_center2aka}": [
            ["color", "background-color", 'rgba(238,26,26,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '553px'],
            ["style", "width", '110px'],
            ["style", "top", '120px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '180px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_pointobarCP}": [
            ["style", "left", '810px'],
            ["style", "top", '98px']
         ],
         "${_penpenchc}": [
            ["style", "top", '186px']
         ],
         "${_cardscover}": [
            ["style", "opacity", '0']
         ],
         "${_make}": [
            ["style", "top", '189px'],
            ["style", "font-size", '130px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(18,32,241,1.00)'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${_Text2}": [
            ["style", "top", '562px'],
            ["style", "left", '710px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '18px']
         ],
         "${_battle}": [
            ["gradient", "background-image", [270,[['rgba(255,126,0,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '-1034px'],
            ["style", "width", '1024px'],
            ["style", "top", '384px'],
            ["transform", "skewY", '20deg'],
            ["style", "height", '570px'],
            ["color", "border-color", 'rgba(250,250,250,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '5px']
         ],
         "${_CPpointo}": [
            ["style", "top", '101px'],
            ["style", "left", '924px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_TextME2}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '335px'],
            ["style", "left", '187px'],
            ["style", "width", '133px']
         ],
         "${_kettei}": [
            ["style", "top", '599px'],
            ["style", "left", '692px']
         ],
         "${_card3}": [
            ["style", "top", '548px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '166px']
         ],
         "${_hintomin}": [
            ["style", "top", '47px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '877px'],
            ["style", "font-size", '41px']
         ],
         "${_smakoY}": [
            ["style", "top", '416px'],
            ["style", "height", '681px'],
            ["style", "left", '-1262px'],
            ["style", "width", '763px']
         ],
         "${_kuro4}": [
            ["style", "height", '200px'],
            ["style", "top", '110px'],
            ["style", "left", '543px'],
            ["style", "width", '130px']
         ],
         "${_penpenbox}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "border-top-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '7px'],
            ["style", "width", '186px'],
            ["style", "top", '186px'],
            ["style", "border-bottom-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "height", '186px'],
            ["color", "border-color", 'rgb(234, 255, 8)'],
            ["style", "left", '692px'],
            ["style", "border-top-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_penpench}": [
            ["style", "top", '186px'],
            ["style", "left", '692px']
         ],
         "${_kati}": [
            ["style", "top", '188px'],
            ["style", "font-size", '115px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(241,19,19,1.00)'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif'],
            ["style", "left", '-2px'],
            ["style", "width", '1026px']
         ],
         "${_kuro9}": [
            ["style", "height", '200px'],
            ["style", "top", '110px'],
            ["style", "left", '542px'],
            ["style", "width", '130px']
         ],
         "${_card8cover}": [
            ["style", "top", '549px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '493px'],
            ["style", "width", '130px']
         ],
         "${_hintocard4}": [
            ["color", "background-color", 'rgba(255,0,0,0.5273)'],
            ["style", "top", '-117px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '539px'],
            ["style", "width", '133px']
         ],
         "${_hato9}": [
            ["style", "height", '200px'],
            ["style", "top", '331px'],
            ["style", "left", '352px'],
            ["style", "width", '130px']
         ],
         "${_kakekinnCPtxtCopy}": [
            ["style", "top", '116px'],
            ["style", "font-size", '34px'],
            ["style", "left", '716px'],
            ["style", "width", '70px']
         ],
         "${_hintocard8}": [
            ["color", "background-color", 'rgba(255,0,0,0.5273)'],
            ["style", "top", '-117px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '791px'],
            ["style", "width", '133px']
         ],
         "${_end_win_Text}": [
            ["style", "top", '-150px'],
            ["style", "width", '912px'],
            ["color", "color", 'rgba(251,8,8,1.00)'],
            ["style", "display", 'none'],
            ["style", "left", '98px'],
            ["style", "font-size", '100px']
         ],
         "${_end}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["gradient", "background-image", [270,[['rgba(31,255,229,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "height", '778px']
         ],
         "${_hato4}": [
            ["style", "height", '200px'],
            ["style", "top", '331px'],
            ["style", "left", '352px'],
            ["style", "width", '130px']
         ],
         "${_hintocard7}": [
            ["color", "background-color", 'rgba(255,0,0,0.5273)'],
            ["style", "top", '-117px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '725px'],
            ["style", "width", '133px']
         ],
         "${_siki1}": [
            ["style", "top", '390px'],
            ["style", "font-size", '68px'],
            ["style", "text-align", 'center'],
            ["style", "height", '105px'],
            ["color", "color", 'rgba(87,87,87,1.00)'],
            ["style", "font-family", 'MS Serif, New York, serif'],
            ["style", "left", '16px'],
            ["style", "width", '108px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18880,
         autoPlay: true,
         labels: {
            "end_win": 12500,
            "end_lose": 15500
         },
         timeline: [
            { id: "eid2485", tween: [ "transform", "${_hinntobutton}", "scaleX", '1.10848', { fromValue: '1.10848'}], position: 0, duration: 0 },
            { id: "eid562", tween: [ "style", "${_drowbutton}", "left", '752px', { fromValue: '752px'}], position: 0, duration: 0 },
            { id: "eid863", tween: [ "transform", "${_CPcard3}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid1272", tween: [ "style", "${_make}", "width", '1024px', { fromValue: '1024px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid561", tween: [ "style", "${_drowbutton}", "top", '640px', { fromValue: '640px'}], position: 0, duration: 0 },
            { id: "eid854", tween: [ "style", "${_CPcard1}", "left", '355px', { fromValue: '355px'}], position: 0, duration: 0 },
            { id: "eid1817", tween: [ "style", "${_hinntobutton}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid559", tween: [ "transform", "${_drowbutton}", "scaleX", '1.84146', { fromValue: '1.84146'}], position: 0, duration: 0 },
            { id: "eid1201", tween: [ "style", "${_rennsyuuend}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1273", tween: [ "style", "${_kati}", "left", '-2px', { fromValue: '-2px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid802", tween: [ "style", "${_card3}", "left", '166px', { fromValue: '166px'}], position: 0, duration: 0 },
            { id: "eid1729", tween: [ "style", "${_end_win_Text}", "width", '912px', { fromValue: '912px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid1526", tween: [ "style", "${_sikispaceCopy}", "top", '143px', { fromValue: '143px'}], position: 0, duration: 0 },
            { id: "eid560", tween: [ "transform", "${_drowbutton}", "scaleY", '1.45977', { fromValue: '1.45977'}], position: 0, duration: 0 },
            { id: "eid1527", tween: [ "style", "${_sikispaceCopy}", "left", '668px', { fromValue: '668px'}], position: 0, duration: 0 },
            { id: "eid2416", tween: [ "style", "${_kyara}", "left", '430px', { fromValue: '157px'}], position: 12500, duration: 2000 },
            { id: "eid2425", tween: [ "style", "${_kyara}", "left", '-313px', { fromValue: '157px'}], position: 15500, duration: 2000 },
            { id: "eid2667", tween: [ "style", "${_hintest}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2483", tween: [ "style", "${_end_return}", "left", '752px', { fromValue: '752px'}], position: 0, duration: 0 },
            { id: "eid1792", tween: [ "style", "${_kaminariY}", "left", '-117px', { fromValue: '-1141px'}], position: 1500, duration: 1000 },
            { id: "eid1796", tween: [ "style", "${_kaminariY}", "left", '-1141px', { fromValue: '-117px'}], position: 5250, duration: 1000 },
            { id: "eid990", tween: [ "transform", "${_startbutton}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid822", tween: [ "transform", "${_card7}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid679", tween: [ "style", "${_pointobar}", "top", '493px', { fromValue: '493px'}], position: 0, duration: 0 },
            { id: "eid1040", tween: [ "color", "${_CPseki}", "color", 'rgba(0,32,113,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,32,113,1.00)'}], position: 2500, duration: 0, easing: "swing" },
            { id: "eid1517", tween: [ "style", "${_sikispace}", "left", '-17px', { fromValue: '-17px'}], position: 0, duration: 0 },
            { id: "eid2637", tween: [ "style", "${_hintocard2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2486", tween: [ "transform", "${_hinntobutton}", "scaleY", '1.12', { fromValue: '1.12'}], position: 0, duration: 0 },
            { id: "eid1786", tween: [ "style", "${_smakoY}", "left", '-238px', { fromValue: '-1262px'}], position: 1500, duration: 1000 },
            { id: "eid1799", tween: [ "style", "${_smakoY}", "left", '-1262px', { fromValue: '-238px'}], position: 5250, duration: 1000 },
            { id: "eid1802", tween: [ "style", "${_penpenbox}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2455", tween: [ "style", "${_kyaraCP}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2456", tween: [ "style", "${_kyaraCP}", "display", 'none', { fromValue: 'none'}], position: 9081, duration: 0, easing: "easeInBounce" },
            { id: "eid2457", tween: [ "style", "${_kyaraCP}", "display", 'block', { fromValue: 'none'}], position: 12509, duration: 0 },
            { id: "eid2458", tween: [ "style", "${_kyaraCP}", "display", 'none', { fromValue: 'block'}], position: 18500, duration: 0 },
            { id: "eid867", tween: [ "style", "${_CPcard3}", "left", '481px', { fromValue: '481px'}], position: 0, duration: 0 },
            { id: "eid253", tween: [ "style", "${_CPseki}", "top", '30px', { fromValue: '-200px'}], position: 1500, duration: 1000 },
            { id: "eid865", tween: [ "transform", "${_CPcard3}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid794", tween: [ "transform", "${_card2}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid1015", tween: [ "style", "${_battleCP}", "left", '0px', { fromValue: '1024px'}], position: 1500, duration: 1000, easing: "swing" },
            { id: "eid1021", tween: [ "style", "${_battleCP}", "left", '1024px', { fromValue: '0px'}], position: 5250, duration: 1000, easing: "swing" },
            { id: "eid1716", tween: [ "style", "${_end_win_Text}", "top", '246px', { fromValue: '-150px'}], position: 14500, duration: 500 },
            { id: "eid1487", tween: [ "transform", "${_downbutton}", "scaleY", '1.28091', { fromValue: '1.28091'}], position: 0, duration: 0 },
            { id: "eid688", tween: [ "style", "${_kakeOKbutton}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid871", tween: [ "transform", "${_CPcard4}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid200", tween: [ "style", "${_Systemplus}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
            { id: "eid1412", tween: [ "style", "${_endtext}", "left", '256px', { fromValue: '48px'}], position: 12500, duration: 2000 },
            { id: "eid1414", tween: [ "style", "${_endtext}", "left", '-386px', { fromValue: '48px'}], position: 15500, duration: 2000 },
            { id: "eid887", tween: [ "transform", "${_CPcard7}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid1472", tween: [ "transform", "${_kakeOKbutton}", "scaleX", '1.10536', { fromValue: '1.10536'}], position: 0, duration: 0 },
            { id: "eid891", tween: [ "style", "${_CPcard7}", "left", '728px', { fromValue: '728px'}], position: 0, duration: 0 },
            { id: "eid1684", tween: [ "transform", "${_kyarakutachoose}", "scaleX", '1.01088', { fromValue: '1.01088'}], position: 12500, duration: 0 },
            { id: "eid808", tween: [ "style", "${_card4}", "left", '231px', { fromValue: '231px'}], position: 0, duration: 0 },
            { id: "eid1478", tween: [ "style", "${_upbutton}", "top", '616px', { fromValue: '616px'}], position: 0, duration: 0 },
            { id: "eid1815", tween: [ "style", "${_hintomin}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2488", tween: [ "style", "${_hinntobutton}", "top", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
            { id: "eid570", tween: [ "style", "${_okbutton}", "top", '646px', { fromValue: '646px'}], position: 0, duration: 0 },
            { id: "eid205", tween: [ "style", "${_cover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2478", tween: [ "gradient", "${_end}", "background-image", [270,[['rgba(31,255,229,1.00)',0],['rgba(255,255,255,1.00)',100]]], { fromValue: [270,[['rgba(31,255,229,1.00)',0],['rgba(255,255,255,1.00)',100]]]}], position: 0, duration: 0 },
            { id: "eid1252", tween: [ "transform", "${_sikispace}", "scaleX", '0.74348', { fromValue: '0.74348'}], position: 0, duration: 0 },
            { id: "eid1200", tween: [ "style", "${_rennsyuuend}", "left", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
            { id: "eid2391", tween: [ "style", "${_startbutton}", "left", '118px', { fromValue: '118px'}], position: 0, duration: 0 },
            { id: "eid1780", tween: [ "style", "${_pontaCP}", "left", '671px', { fromValue: '1698px'}], position: 1500, duration: 1000, easing: "swing" },
            { id: "eid1783", tween: [ "style", "${_pontaCP}", "left", '1724px', { fromValue: '671px'}], position: 5250, duration: 1000, easing: "swing" },
            { id: "eid889", tween: [ "transform", "${_CPcard7}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid202", tween: [ "style", "${_hikiwake}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid898", tween: [ "style", "${_CPcard8}", "top", '-117px', { fromValue: '-117px'}], position: 0, duration: 0 },
            { id: "eid1298", tween: [ "style", "${_hikiwake}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
            { id: "eid826", tween: [ "style", "${_card7}", "left", '428px', { fromValue: '428px'}], position: 0, duration: 0 },
            { id: "eid791", tween: [ "style", "${_card1}", "top", '548px', { fromValue: '548px'}], position: 0, duration: 0 },
            { id: "eid850", tween: [ "transform", "${_CPcard1}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid204", tween: [ "style", "${_kati}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid893", tween: [ "transform", "${_CPcard8}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid1473", tween: [ "transform", "${_kakeOKbutton}", "scaleY", '1.21957', { fromValue: '1.21957'}], position: 0, duration: 0 },
            { id: "eid786", tween: [ "transform", "${_card1}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid820", tween: [ "style", "${_card6}", "left", '361px', { fromValue: '361px'}], position: 0, duration: 0 },
            { id: "eid885", tween: [ "style", "${_CPcard6}", "left", '664px', { fromValue: '664px'}], position: 0, duration: 0 },
            { id: "eid2381", tween: [ "style", "${_end}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid540", tween: [ "style", "${_center2}", "width", '95px', { fromValue: '95px'}], position: 0, duration: 0 },
            { id: "eid203", tween: [ "style", "${_make}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid833", tween: [ "style", "${_card8}", "top", '548px', { fromValue: '548px'}], position: 0, duration: 0 },
            { id: "eid815", tween: [ "style", "${_card5}", "top", '548px', { fromValue: '548px'}], position: 0, duration: 0 },
            { id: "eid818", tween: [ "transform", "${_card6}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid1813", tween: [ "style", "${_hintominmax}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2388", tween: [ "style", "${_rennsyuubutton}", "left", '579px', { fromValue: '579px'}], position: 0, duration: 0 },
            { id: "eid1471", tween: [ "style", "${_kakeOKbutton}", "left", '707px', { fromValue: '707px'}], position: 0, duration: 0 },
            { id: "eid2636", tween: [ "style", "${_hintocard1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2484", tween: [ "style", "${_end_return}", "top", '654px', { fromValue: '654px'}], position: 0, duration: 0 },
            { id: "eid834", tween: [ "transform", "${_card9}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid792", tween: [ "transform", "${_card2}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid2481", tween: [ "transform", "${_end_return}", "scaleX", '0.88929', { fromValue: '0.88929'}], position: 0, duration: 0 },
            { id: "eid1516", tween: [ "style", "${_sikispace}", "top", '374px', { fromValue: '374px'}], position: 0, duration: 0 },
            { id: "eid2635", tween: [ "style", "${_cardscover2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid569", tween: [ "transform", "${_okbutton}", "scaleY", '1.59524', { fromValue: '1.59524'}], position: 0, duration: 0 },
            { id: "eid680", tween: [ "style", "${_pointobarCP}", "left", '810px', { fromValue: '810px'}], position: 0, duration: 0 },
            { id: "eid1043", tween: [ "style", "${_bonnouCP}", "left", '642px', { fromValue: '1665px'}], position: 1500, duration: 1000, easing: "swing" },
            { id: "eid1045", tween: [ "style", "${_bonnouCP}", "left", '1665px', { fromValue: '642px'}], position: 5250, duration: 1000, easing: "swing" },
            { id: "eid565", tween: [ "transform", "${_okbutton}", "scaleX", '1.42619', { fromValue: '1.42619'}], position: 0, duration: 0 },
            { id: "eid1275", tween: [ "style", "${_kati}", "width", '1026px', { fromValue: '1026px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid892", tween: [ "style", "${_CPcard7}", "top", '-117px', { fromValue: '-117px'}], position: 0, duration: 0 },
            { id: "eid862", tween: [ "style", "${_CPcard2}", "left", '419px', { fromValue: '419px'}], position: 0, duration: 0 },
            { id: "eid880", tween: [ "style", "${_CPcard5}", "top", '-117px', { fromValue: '-117px'}], position: 0, duration: 0 },
            { id: "eid798", tween: [ "transform", "${_card3}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid142", tween: [ "style", "${_center2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid899", tween: [ "transform", "${_CPcard9}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid901", tween: [ "transform", "${_CPcard9}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid571", tween: [ "style", "${_okbutton}", "left", '740px', { fromValue: '740px'}], position: 0, duration: 0 },
            { id: "eid911", tween: [ "style", "${_center2dodai}", "border-top-right-radius", [10,10], { valueTemplate: '@@0@@px @@1@@px', fromValue: [10,10]}], position: 0, duration: 0 },
            { id: "eid855", tween: [ "style", "${_CPcard1}", "top", '-117px', { fromValue: '-117px'}], position: 0, duration: 0 },
            { id: "eid197", tween: [ "style", "${_Systemplus}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 500 },
            { id: "eid868", tween: [ "style", "${_CPcard3}", "top", '-117px', { fromValue: '-117px'}], position: 0, duration: 0 },
            { id: "eid1027", tween: [ "style", "${_battleText}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid1028", tween: [ "style", "${_battleText}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "swing" },
            { id: "eid1033", tween: [ "style", "${_battleText}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0, easing: "swing" },
            { id: "eid542", tween: [ "style", "${_center2}", "top", '177px', { fromValue: '177px'}], position: 0, duration: 0 },
            { id: "eid1253", tween: [ "transform", "${_sikispace}", "scaleY", '0.74348', { fromValue: '0.74348'}], position: 0, duration: 0 },
            { id: "eid1199", tween: [ "style", "${_rennsyuuend}", "top", '712px', { fromValue: '712px'}], position: 0, duration: 0 },
            { id: "eid832", tween: [ "style", "${_card8}", "left", '493px', { fromValue: '493px'}], position: 0, duration: 0 },
            { id: "eid1211", tween: [ "style", "${_endtextCP}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1764", tween: [ "style", "${_endtextCP}", "display", 'none', { fromValue: 'none'}], position: 9081, duration: 0, easing: "easeInBounce" },
            { id: "eid1420", tween: [ "style", "${_endtextCP}", "display", 'block', { fromValue: 'none'}], position: 12509, duration: 0 },
            { id: "eid1421", tween: [ "style", "${_endtextCP}", "display", 'none', { fromValue: 'block'}], position: 18500, duration: 0 },
            { id: "eid827", tween: [ "style", "${_card7}", "top", '548px', { fromValue: '548px'}], position: 0, duration: 0 },
            { id: "eid1726", tween: [ "style", "${_end}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid1772", tween: [ "style", "${_end}", "display", 'none', { fromValue: 'none'}], position: 9081, duration: 0, easing: "easeInBounce" },
            { id: "eid675", tween: [ "style", "${_end}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0 },
            { id: "eid1432", tween: [ "style", "${_tennsuu}", "left", '600px', { fromValue: '272px'}], position: 12500, duration: 2000 },
            { id: "eid1434", tween: [ "style", "${_tennsuu}", "left", '-194px', { fromValue: '266px'}], position: 15500, duration: 2000 },
            { id: "eid1685", tween: [ "style", "${_kyarakutachoose}", "left", '3px', { fromValue: '3px'}], position: 12500, duration: 0 },
            { id: "eid824", tween: [ "transform", "${_card7}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid1300", tween: [ "style", "${_make}", "top", '189px', { fromValue: '189px'}], position: 0, duration: 0 },
            { id: "eid681", tween: [ "style", "${_pointobarCP}", "top", '98px', { fromValue: '98px'}], position: 0, duration: 0 },
            { id: "eid1041", tween: [ "color", "${_Systemplus}", "color", 'rgba(169,35,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,35,0,1.00)'}], position: 2500, duration: 0, easing: "swing" },
            { id: "eid1213", tween: [ "style", "${_CPtennsuu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1766", tween: [ "style", "${_CPtennsuu}", "display", 'none', { fromValue: 'none'}], position: 9081, duration: 0, easing: "easeInBounce" },
            { id: "eid1438", tween: [ "style", "${_CPtennsuu}", "display", 'block', { fromValue: 'none'}], position: 12509, duration: 0 },
            { id: "eid1439", tween: [ "style", "${_CPtennsuu}", "display", 'none', { fromValue: 'block'}], position: 18500, duration: 0 },
            { id: "eid838", tween: [ "style", "${_card9}", "left", '558px', { fromValue: '558px'}], position: 0, duration: 0 },
            { id: "eid875", tween: [ "transform", "${_CPcard5}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid881", tween: [ "transform", "${_CPcard6}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid1491", tween: [ "transform", "${_downbutton}", "scaleX", '1.04546', { fromValue: '1.04546'}], position: 0, duration: 0 },
            { id: "eid2642", tween: [ "style", "${_hintocard7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid903", tween: [ "style", "${_CPcard9}", "left", '861px', { fromValue: '861px'}], position: 0, duration: 0 },
            { id: "eid1725", tween: [ "style", "${_end_win_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid1770", tween: [ "style", "${_end_win_Text}", "display", 'none', { fromValue: 'none'}], position: 9081, duration: 0, easing: "easeInBounce" },
            { id: "eid1728", tween: [ "style", "${_end_win_Text}", "display", 'block', { fromValue: 'none'}], position: 14500, duration: 0, easing: "easeInBounce" },
            { id: "eid2383", tween: [ "style", "${_end_win_Text}", "display", 'none', { fromValue: 'block'}], position: 15250, duration: 0, easing: "easeOutQuad" },
            { id: "eid2392", tween: [ "style", "${_rennsyuubutton}", "top", '560px', { fromValue: '560px'}], position: 0, duration: 0 },
            { id: "eid839", tween: [ "style", "${_card9}", "top", '548px', { fromValue: '548px'}], position: 0, duration: 0 },
            { id: "eid2395", tween: [ "style", "${_startgamen}", "top", '4px', { fromValue: '4px'}], position: 0, duration: 0 },
            { id: "eid812", tween: [ "transform", "${_card5}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid1470", tween: [ "style", "${_kakeOKbutton}", "top", '629px', { fromValue: '629px'}], position: 0, duration: 0 },
            { id: "eid655", tween: [ "style", "${_hikiwake}", "top", '207px', { fromValue: '207px'}], position: 0, duration: 0 },
            { id: "eid687", tween: [ "style", "${_downbutton}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid861", tween: [ "style", "${_CPcard2}", "top", '-117px', { fromValue: '-117px'}], position: 0, duration: 0 },
            { id: "eid1778", tween: [ "style", "${_end_return}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid1771", tween: [ "style", "${_end_return}", "display", 'none', { fromValue: 'none'}], position: 9081, duration: 0, easing: "easeInBounce" },
            { id: "eid1773", tween: [ "style", "${_end_return}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0, easing: "easeInBounce" },
            { id: "eid1775", tween: [ "style", "${_end_return}", "display", 'none', { fromValue: 'block'}], position: 15500, duration: 0, easing: "easeInBounce" },
            { id: "eid1776", tween: [ "style", "${_end_return}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0, easing: "easeInBounce" },
            { id: "eid1777", tween: [ "style", "${_end_return}", "display", 'none', { fromValue: 'block'}], position: 18491, duration: 0, easing: "easeInBounce" },
            { id: "eid1492", tween: [ "style", "${_downbutton}", "left", '839px', { fromValue: '839px'}], position: 0, duration: 0 },
            { id: "eid790", tween: [ "style", "${_card1}", "left", '36px', { fromValue: '36px'}], position: 0, duration: 0 },
            { id: "eid1013", tween: [ "style", "${_battle}", "left", '0px', { fromValue: '-1034px'}], position: 1500, duration: 1000, easing: "swing" },
            { id: "eid1022", tween: [ "style", "${_battle}", "left", '-1034px', { fromValue: '0px'}], position: 5250, duration: 1000, easing: "swing" },
            { id: "eid133", tween: [ "style", "${_okbutton}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2641", tween: [ "style", "${_hintocard6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1814", tween: [ "style", "${_hintoseki}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1800", tween: [ "style", "${_kaminaribox}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1477", tween: [ "transform", "${_upbutton}", "scaleY", '1.35484', { fromValue: '1.35484'}], position: 0, duration: 0 },
            { id: "eid800", tween: [ "transform", "${_card3}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid2643", tween: [ "style", "${_hintocard8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid897", tween: [ "style", "${_CPcard8}", "left", '794px', { fromValue: '794px'}], position: 0, duration: 0 },
            { id: "eid2394", tween: [ "transform", "${_startgamen}", "scaleY", '1.01167', { fromValue: '1.01167'}], position: 0, duration: 0 },
            { id: "eid1731", tween: [ "style", "${_end_lose_Text}", "width", '912px', { fromValue: '912px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid1476", tween: [ "transform", "${_upbutton}", "scaleX", '1.09499', { fromValue: '1.09499'}], position: 0, duration: 0 },
            { id: "eid678", tween: [ "style", "${_pointobar}", "left", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid803", tween: [ "style", "${_card3}", "top", '548px', { fromValue: '548px'}], position: 0, duration: 0 },
            { id: "eid909", tween: [ "style", "${_center2dodai}", "border-bottom-left-radius", [10,10], { valueTemplate: '@@0@@px @@1@@px', fromValue: [10,10]}], position: 0, duration: 0 },
            { id: "eid250", tween: [ "style", "${_Systemplus}", "left", '504px', { fromValue: '113px'}], position: 1500, duration: 1000 },
            { id: "eid828", tween: [ "transform", "${_card8}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid2490", tween: [ "style", "${_hinntobutton}", "left", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
            { id: "eid873", tween: [ "style", "${_CPcard4}", "left", '542px', { fromValue: '542px'}], position: 0, duration: 0 },
            { id: "eid858", tween: [ "transform", "${_CPcard2}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid1210", tween: [ "style", "${_endtext}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1763", tween: [ "style", "${_endtext}", "display", 'none', { fromValue: 'none'}], position: 9081, duration: 0, easing: "easeInBounce" },
            { id: "eid1410", tween: [ "style", "${_endtext}", "display", 'block', { fromValue: 'none'}], position: 12509, duration: 0 },
            { id: "eid1411", tween: [ "style", "${_endtext}", "display", 'none', { fromValue: 'block'}], position: 18491, duration: 0 },
            { id: "eid1416", tween: [ "style", "${_endtext}", "top", '144px', { fromValue: '114px'}], position: 12500, duration: 2000 },
            { id: "eid1418", tween: [ "style", "${_endtext}", "top", '127px', { fromValue: '114px'}], position: 15500, duration: 2000 },
            { id: "eid2380", tween: [ "style", "${_end}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid196", tween: [ "style", "${_CPseki}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 500 },
            { id: "eid809", tween: [ "style", "${_card4}", "top", '548px', { fromValue: '548px'}], position: 0, duration: 0 },
            { id: "eid2684", tween: [ "style", "${_kati}", "top", '188px', { fromValue: '188px'}], position: 0, duration: 0 },
            { id: "eid852", tween: [ "transform", "${_CPcard1}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid836", tween: [ "transform", "${_card9}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid992", tween: [ "transform", "${_startbutton}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid874", tween: [ "style", "${_CPcard4}", "top", '-117px', { fromValue: '-117px'}], position: 0, duration: 0 },
            { id: "eid1488", tween: [ "style", "${_downbutton}", "top", '695px', { fromValue: '695px'}], position: 0, duration: 0 },
            { id: "eid1212", tween: [ "style", "${_tennsuu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1765", tween: [ "style", "${_tennsuu}", "display", 'none', { fromValue: 'none'}], position: 9081, duration: 0, easing: "easeInBounce" },
            { id: "eid1430", tween: [ "style", "${_tennsuu}", "display", 'block', { fromValue: 'none'}], position: 12509, duration: 0 },
            { id: "eid1431", tween: [ "style", "${_tennsuu}", "display", 'none', { fromValue: 'block'}], position: 18500, duration: 0 },
            { id: "eid1295", tween: [ "style", "${_make}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1801", tween: [ "style", "${_bonnoubox}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2393", tween: [ "style", "${_startbutton}", "top", '560px', { fromValue: '560px'}], position: 0, duration: 0 },
            { id: "eid883", tween: [ "transform", "${_CPcard6}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid1803", tween: [ "style", "${_smaobox}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2668", tween: [ "style", "${_hintext}", "font-size", '100px', { fromValue: '100px'}], position: 0, duration: 0 },
            { id: "eid810", tween: [ "transform", "${_card5}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid2377", tween: [ "style", "${_kamihubukiafter}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid2378", tween: [ "style", "${_kamihubukiafter}", "display", 'none', { fromValue: 'none'}], position: 12250, duration: 0 },
            { id: "eid2633", tween: [ "style", "${_kamihubukiafter}", "display", 'none', { fromValue: 'none'}], position: 18880, duration: 0 },
            { id: "eid904", tween: [ "style", "${_CPcard9}", "top", '-117px', { fromValue: '-117px'}], position: 0, duration: 0 },
            { id: "eid2412", tween: [ "style", "${_kyara}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2413", tween: [ "style", "${_kyara}", "display", 'none', { fromValue: 'none'}], position: 9081, duration: 0, easing: "easeInBounce" },
            { id: "eid2414", tween: [ "style", "${_kyara}", "display", 'block', { fromValue: 'none'}], position: 12509, duration: 0 },
            { id: "eid2415", tween: [ "style", "${_kyara}", "display", 'none', { fromValue: 'block'}], position: 18500, duration: 0 },
            { id: "eid1724", tween: [ "style", "${_end_lose_Text}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid1769", tween: [ "style", "${_end_lose_Text}", "display", 'none', { fromValue: 'block'}], position: 9081, duration: 0, easing: "easeInBounce" },
            { id: "eid1727", tween: [ "style", "${_end_lose_Text}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0, easing: "easeInBounce" },
            { id: "eid1816", tween: [ "style", "${_hintomax}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid686", tween: [ "style", "${_upbutton}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid797", tween: [ "style", "${_card2}", "top", '548px', { fromValue: '548px'}], position: 0, duration: 0 },
            { id: "eid1426", tween: [ "style", "${_endtextCP}", "top", '126px', { fromValue: '122px'}], position: 12500, duration: 2000 },
            { id: "eid1428", tween: [ "style", "${_endtextCP}", "top", '145px', { fromValue: '122px'}], position: 15500, duration: 2000 },
            { id: "eid1675", tween: [ "style", "${_gamestartbutton}", "left", '332px', { fromValue: '332px'}], position: 0, duration: 0 },
            { id: "eid1808", tween: [ "style", "${_hinntostage}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1674", tween: [ "style", "${_gamestartbutton}", "top", '529px', { fromValue: '529px'}], position: 0, duration: 0 },
            { id: "eid1779", tween: [ "style", "${_kaminariCP}", "left", '509px', { fromValue: '1536px'}], position: 1500, duration: 1000, easing: "swing" },
            { id: "eid1782", tween: [ "style", "${_kaminariCP}", "left", '1536px', { fromValue: '509px'}], position: 5250, duration: 1000, easing: "swing" },
            { id: "eid251", tween: [ "style", "${_Systemplus}", "top", '494px', { fromValue: '764px'}], position: 1500, duration: 1000 },
            { id: "eid806", tween: [ "transform", "${_card4}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid96", tween: [ "style", "${_drowbutton}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1299", tween: [ "style", "${_hikiwake}", "width", '1018px', { fromValue: '1018px'}], position: 0, duration: 0 },
            { id: "eid2639", tween: [ "style", "${_hintocard4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1794", tween: [ "style", "${_bonnouY}", "left", '2px', { fromValue: '-1022px'}], position: 1500, duration: 1000 },
            { id: "eid1795", tween: [ "style", "${_bonnouY}", "left", '-1022px', { fromValue: '2px'}], position: 5250, duration: 1000 },
            { id: "eid1790", tween: [ "style", "${_penpenY}", "left", '34px', { fromValue: '-990px'}], position: 1500, duration: 1000 },
            { id: "eid1797", tween: [ "style", "${_penpenY}", "left", '-990px', { fromValue: '34px'}], position: 5250, duration: 1000 },
            { id: "eid1287", tween: [ "style", "${_make}", "font-size", '130px', { fromValue: '130px'}], position: 0, duration: 0 },
            { id: "eid830", tween: [ "transform", "${_card8}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid2579", tween: [ "style", "${_rennsyuustage}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid537", tween: [ "style", "${_center2}", "left", '560px', { fromValue: '560px'}], position: 0, duration: 0 },
            { id: "eid856", tween: [ "transform", "${_CPcard2}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid1788", tween: [ "style", "${_smaoY}", "left", '-309px', { fromValue: '-1333px'}], position: 1500, duration: 1000 },
            { id: "eid1798", tween: [ "style", "${_smaoY}", "left", '-1333px', { fromValue: '-309px'}], position: 5250, duration: 1000 },
            { id: "eid1030", tween: [ "style", "${_battleText}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "swing" },
            { id: "eid1032", tween: [ "style", "${_battleText}", "opacity", '0', { fromValue: '1'}], position: 5250, duration: 500, easing: "swing" },
            { id: "eid816", tween: [ "transform", "${_card6}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid2418", tween: [ "style", "${_kyara}", "top", '440px', { fromValue: '303px'}], position: 12500, duration: 2000 },
            { id: "eid2426", tween: [ "style", "${_kyara}", "top", '354px', { fromValue: '303px'}], position: 15500, duration: 2000 },
            { id: "eid539", tween: [ "style", "${_center2}", "height", '65px', { fromValue: '65px'}], position: 0, duration: 0 },
            { id: "eid2461", tween: [ "style", "${_kyaraCP}", "top", '316px', { fromValue: '310px'}], position: 12500, duration: 2000 },
            { id: "eid2468", tween: [ "style", "${_kyaraCP}", "top", '450px', { fromValue: '310px'}], position: 15500, duration: 2000 },
            { id: "eid2482", tween: [ "transform", "${_end_return}", "scaleY", '0.88609', { fromValue: '0.88609'}], position: 0, duration: 0 },
            { id: "eid2640", tween: [ "style", "${_hintocard5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid804", tween: [ "transform", "${_card4}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid1011", tween: [ "style", "${_smakotouch}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid910", tween: [ "style", "${_center2dodai}", "border-top-left-radius", [10,10], { valueTemplate: '@@0@@px @@1@@px', fromValue: [10,10]}], position: 0, duration: 0 },
            { id: "eid1440", tween: [ "style", "${_CPtennsuu}", "left", '1153px', { fromValue: '689px'}], position: 12500, duration: 2000 },
            { id: "eid1442", tween: [ "style", "${_CPtennsuu}", "left", '515px', { fromValue: '689px'}], position: 15500, duration: 2000 },
            { id: "eid796", tween: [ "style", "${_card2}", "left", '101px', { fromValue: '101px'}], position: 0, duration: 0 },
            { id: "eid1722", tween: [ "style", "${_end_lose_Text}", "top", '248px', { fromValue: '-148px'}], position: 17500, duration: 500, easing: "easeOutQuad" },
            { id: "eid2638", tween: [ "style", "${_hintocard3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1781", tween: [ "style", "${_penpenCP}", "left", '678px', { fromValue: '1702px'}], position: 1500, duration: 1000, easing: "swing" },
            { id: "eid1784", tween: [ "style", "${_penpenCP}", "left", '1702px', { fromValue: '678px'}], position: 5250, duration: 1000, easing: "swing" },
            { id: "eid2459", tween: [ "style", "${_kyaraCP}", "left", '1074px', { fromValue: '648px'}], position: 12500, duration: 2000 },
            { id: "eid2467", tween: [ "style", "${_kyaraCP}", "left", '387px', { fromValue: '648px'}], position: 15500, duration: 2000 },
            { id: "eid1290", tween: [ "style", "${_hikiwake}", "font-size", '130px', { fromValue: '130px'}], position: 0, duration: 0 },
            { id: "eid1301", tween: [ "style", "${_kati}", "font-size", '115px', { fromValue: '115px'}], position: 0, duration: 0 },
            { id: "eid2644", tween: [ "style", "${_hintocard9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid886", tween: [ "style", "${_CPcard6}", "top", '-117px', { fromValue: '-117px'}], position: 0, duration: 0 },
            { id: "eid1422", tween: [ "style", "${_endtextCP}", "left", '1023px', { fromValue: '548px'}], position: 12500, duration: 2000 },
            { id: "eid1424", tween: [ "style", "${_endtextCP}", "left", '259px', { fromValue: '548px'}], position: 15500, duration: 2000 },
            { id: "eid869", tween: [ "transform", "${_CPcard4}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid543", tween: [ "style", "${_center2dodai}", "top", '110px', { fromValue: '110px'}], position: 0, duration: 0 },
            { id: "eid1436", tween: [ "style", "${_tennsuu}", "top", '123px', { fromValue: '99px'}], position: 12500, duration: 2000 },
            { id: "eid912", tween: [ "style", "${_center2dodai}", "border-bottom-right-radius", [10,10], { valueTemplate: '@@0@@px @@1@@px', fromValue: [10,10]}], position: 0, duration: 0 },
            { id: "eid895", tween: [ "transform", "${_CPcard8}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid1444", tween: [ "style", "${_CPtennsuu}", "top", '107px', { fromValue: '99px'}], position: 12500, duration: 2000 },
            { id: "eid1446", tween: [ "style", "${_CPtennsuu}", "top", '114px', { fromValue: '99px'}], position: 15500, duration: 2000 },
            { id: "eid201", tween: [ "style", "${_CPseki}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
            { id: "eid1475", tween: [ "style", "${_upbutton}", "left", '837px', { fromValue: '837px'}], position: 0, duration: 0 },
            { id: "eid2663", tween: [ "style", "${_hintext}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid821", tween: [ "style", "${_card6}", "top", '548px', { fromValue: '548px'}], position: 0, duration: 0 },
            { id: "eid879", tween: [ "style", "${_CPcard5}", "left", '597px', { fromValue: '597px'}], position: 0, duration: 0 },
            { id: "eid814", tween: [ "style", "${_card5}", "left", '296px', { fromValue: '296px'}], position: 0, duration: 0 },
            { id: "eid877", tween: [ "transform", "${_CPcard5}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid252", tween: [ "style", "${_CPseki}", "left", '257px', { fromValue: '571px'}], position: 1500, duration: 1000 },
            { id: "eid784", tween: [ "transform", "${_card1}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid2376", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_kamihubukiafter}', [] ], ""], position: 0 }         ]
      }
   }
},
"card2": {
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
      id: 'GroupCopy2',
      type: 'group',
      rect: ['0px','0px','130px','200px','auto','auto'],
      c: [
      {
         rect: ['0px','0px','130px','200px','auto','auto'],
         borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'RoundRectCopy2',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      }]
   },
   {
      id: 'trump047',
      type: 'image',
      rect: ['0px','0px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump047.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
         ],
         "${_RoundRectCopy2}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_GroupCopy2}": [
            ["style", "top", '0px'],
            ["style", "height", '200px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${_trump047}": [
            ["style", "height", '200px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
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
"card3": {
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
      id: 'GroupCopy3',
      type: 'group',
      rect: ['0px','0px','130px','200px','auto','auto'],
      c: [
      {
         rect: ['0px','0px','130px','200px','auto','auto'],
         borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'RoundRectCopy3',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      }]
   },
   {
      id: 'trump041',
      type: 'image',
      rect: ['0px','0px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump041.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
         ],
         "${_RoundRectCopy3}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_trump041}": [
            ["style", "height", '200px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${_GroupCopy3}": [
            ["style", "top", '0px'],
            ["style", "height", '200px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
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
"card4": {
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
      id: 'GroupCopy4',
      type: 'group',
      rect: ['0px','0px','130px','200px','auto','auto'],
      c: [
      {
         rect: ['0px','0px','130px','200px','auto','auto'],
         borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'RoundRectCopy4',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      }]
   },
   {
      id: 'trump040',
      type: 'image',
      rect: ['0px','0px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump040.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
         ],
         "${_GroupCopy4}": [
            ["style", "top", '0px'],
            ["style", "height", '200px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${_RoundRectCopy4}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_trump040}": [
            ["style", "height", '200px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
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
"card5": {
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
      id: 'GroupCopy',
      type: 'group',
      rect: ['0px','0px','130px','200px','auto','auto'],
      c: [
      {
         rect: ['0px','0px','130px','200px','auto','auto'],
         borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'RoundRectCopy',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      }]
   },
   {
      id: 'trump033',
      type: 'image',
      rect: ['0px','0px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump033.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_trump033}": [
            ["style", "height", '200px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${_GroupCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '200px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
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
"card6": {
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
      id: 'GroupCopy5',
      type: 'group',
      rect: ['0px','0px','130px','200px','auto','auto'],
      c: [
      {
         rect: ['0px','0px','130px','200px','auto','auto'],
         borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'RoundRectCopy5',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      }]
   },
   {
      id: 'trump032',
      type: 'image',
      rect: ['0px','0px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump032.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_GroupCopy5}": [
            ["style", "top", '0px'],
            ["style", "height", '200px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
         ],
         "${_RoundRectCopy5}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_trump032}": [
            ["style", "height", '200px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
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
"card7": {
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
      id: 'GroupCopy6',
      type: 'group',
      rect: ['0px','0px','130px','200px','auto','auto'],
      c: [
      {
         rect: ['0px','0px','130px','200px','auto','auto'],
         borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'RoundRectCopy6',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      }]
   },
   {
      id: 'trump025',
      type: 'image',
      rect: ['0px','0px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump025.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
         ],
         "${_RoundRectCopy6}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_trump025}": [
            ["style", "height", '200px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${_GroupCopy6}": [
            ["style", "top", '0px'],
            ["style", "height", '200px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
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
"card1": {
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
      id: 'GroupCopy7',
      type: 'group',
      rect: ['0px','0px','130px','200px','auto','auto'],
      c: [
      {
         rect: ['0px','0px','130px','200px','auto','auto'],
         borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
         fill: ['rgba(255,255,255,1.00)'],
         id: 'RoundRectCopy7',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.648438)']
      }]
   },
   {
      id: 'trump0512',
      type: 'image',
      rect: ['0','0','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump051.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRectCopy7}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_GroupCopy7}": [
            ["style", "top", '0px'],
            ["style", "height", '200px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${_trump0512}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
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
"card9": {
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
      id: 'GroupCopy8',
      type: 'group',
      rect: ['0px','0px','130px','200px','auto','auto'],
      c: [
      {
         rect: ['0px','0px','130px','200px','auto','auto'],
         borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
         fill: ['rgba(255,255,255,1.00)'],
         id: 'RoundRectCopy8',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      }]
   },
   {
      id: 'trump0172',
      type: 'image',
      rect: ['0px','0px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump017.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_GroupCopy8}": [
            ["style", "top", '0px'],
            ["style", "height", '200px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${_RoundRectCopy8}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_trump0172}": [
            ["style", "height", '200px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
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
"card8": {
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
      id: 'Group',
      type: 'group',
      rect: ['0px','0px','130px','200px','auto','auto'],
      c: [
      {
         rect: ['0px','0px','130px','200px','auto','auto'],
         borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'RoundRect',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      }]
   },
   {
      id: 'trump0242',
      type: 'image',
      rect: ['0px','0px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump024.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Group}": [
            ["style", "top", '0px'],
            ["style", "height", '200px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_trump0242}": [
            ["style", "height", '200px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
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
"startbutton": {
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
      rect: ['0px','0px','325px','99px','auto','auto'],
      borderRadius: ['50px 50px','50px 50px','50px 50px','50px 50px'],
      fill: ['rgba(252,212,6,1.00)'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',65,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text',
      text: 'スタート<br>',
      align: 'center',
      rect: ['0px','0px','325px','99px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(252,212,6,1.00)'],
            ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '325px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "height", '99px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "height", '99px'],
            ["style", "font-size", '65px'],
            ["style", "left", '0px'],
            ["style", "width", '325px']
         ],
         "${symbolSelector}": [
            ["style", "height", '99px'],
            ["style", "width", '325px']
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
"drowbutton": {
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
      rect: ['0px','1px','81px','87px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(229,218,17,1.00)'],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      type: 'text',
      rect: ['10px','29px','62px','43px','auto','auto'],
      id: 'Text2',
      text: 'ひく',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',27,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["color", "background-color", 'rgba(229,218,17,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_Text2}": [
            ["style", "top", '29px'],
            ["style", "height", '43px'],
            ["style", "width", '62px'],
            ["style", "left", '10px'],
            ["style", "font-size", '27px']
         ],
         "${symbolSelector}": [
            ["style", "height", '87px'],
            ["style", "width", '82px']
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
"CPU1": {
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
      rect: ['0px','0px','59px','87px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'CPUcard1',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['2px','4px','54px','80px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CPUcard1}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "height", '87px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${symbolSelector}": [
            ["style", "height", '87px'],
            ["style", "width", '59px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(238,26,26,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '2px'],
            ["style", "width", '54px'],
            ["style", "top", '4px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '80px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
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
"CPU2": {
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
      rect: ['0px','0px','59px','87px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'CPUcard1Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['2px','4px','54px','80px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'RoundRect2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '87px'],
            ["style", "width", '59px']
         ],
         "${_RoundRect2Copy}": [
            ["color", "background-color", 'rgba(238,26,26,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '2px'],
            ["style", "width", '54px'],
            ["style", "top", '4px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '80px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_CPUcard1Copy}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '87px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "left", '0px']
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
"CPU3": {
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
      rect: ['0px','0px','59px','87px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'CPUcard1Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['2px','4px','54px','80px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'RoundRect2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CPUcard1Copy2}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "left", '0px'],
            ["style", "height", '87px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_RoundRect2Copy2}": [
            ["color", "background-color", 'rgba(238,26,26,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '2px'],
            ["style", "width", '54px'],
            ["style", "top", '4px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '80px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '87px'],
            ["style", "width", '59px']
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
"CPU4": {
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
      rect: ['0px','0px','59px','87px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'CPUcard1Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['2px','4px','54px','80px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'RoundRect2Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CPUcard1Copy3}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "left", '0px'],
            ["style", "height", '87px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${symbolSelector}": [
            ["style", "height", '87px'],
            ["style", "width", '59px']
         ],
         "${_RoundRect2Copy3}": [
            ["color", "background-color", 'rgba(238,26,26,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '2px'],
            ["style", "width", '54px'],
            ["style", "top", '4px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '80px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
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
"CPU5": {
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
      rect: ['0px','0px','59px','87px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'CPUcard1Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['2px','4px','54px','80px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'RoundRect2Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CPUcard1Copy4}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "left", '0px'],
            ["style", "height", '87px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_RoundRect2Copy4}": [
            ["color", "background-color", 'rgba(238,26,26,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '2px'],
            ["style", "width", '54px'],
            ["style", "top", '4px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '80px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '87px'],
            ["style", "width", '59px']
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
"CPU6": {
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
      rect: ['0px','0px','59px','87px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'CPUcard1Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['2px','4px','54px','80px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'RoundRect2Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '87px'],
            ["style", "width", '59px']
         ],
         "${_RoundRect2Copy5}": [
            ["color", "background-color", 'rgba(238,26,26,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '2px'],
            ["style", "width", '54px'],
            ["style", "top", '4px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '80px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_CPUcard1Copy5}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "left", '0px'],
            ["style", "height", '87px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
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
"CPU7": {
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
      rect: ['0px','0px','59px','87px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'CPUcard1Copy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['2px','4px','54px','80px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'RoundRect2Copy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect2Copy6}": [
            ["color", "background-color", 'rgba(238,26,26,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '2px'],
            ["style", "width", '54px'],
            ["style", "top", '4px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '80px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '87px'],
            ["style", "width", '59px']
         ],
         "${_CPUcard1Copy6}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "left", '0px'],
            ["style", "height", '87px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
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
"CPU8": {
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
      rect: ['0px','0px','59px','87px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'CPUcard1Copy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['2px','4px','54px','80px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'RoundRect2Copy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CPUcard1Copy7}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "left", '0px'],
            ["style", "height", '87px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${symbolSelector}": [
            ["style", "height", '87px'],
            ["style", "width", '59px']
         ],
         "${_RoundRect2Copy7}": [
            ["color", "background-color", 'rgba(238,26,26,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '2px'],
            ["style", "width", '54px'],
            ["style", "top", '4px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '80px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
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
"CPU9": {
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
      rect: ['0px','0px','59px','87px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'CPUcard1Copy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['2px','4px','54px','80px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'RoundRect2Copy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CPUcard1Copy8}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "left", '0px'],
            ["style", "height", '87px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${symbolSelector}": [
            ["style", "height", '87px'],
            ["style", "width", '59px']
         ],
         "${_RoundRect2Copy8}": [
            ["color", "background-color", 'rgba(238,26,26,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '2px'],
            ["style", "width", '54px'],
            ["style", "top", '4px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '80px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
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
"okbutton": {
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
      rect: ['1px','0px','104px','78px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(229,218,17,1.00)']
   },
   {
      rect: ['0px','20px','104px','49px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',30,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2',
      text: 'OK',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(229,218,17,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '1px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "top", '0px']
         ],
         "${_Text2}": [
            ["style", "top", '20px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '30px']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '105px']
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
"SystemContorol": {
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
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','470px','310px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',20,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'システム制御区域',
      align: 'center',
      rect: ['14px','22px','189px','47px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '22px'],
            ["style", "left", '14px'],
            ["style", "font-size", '20px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '310px'],
            ["style", "width", '470px']
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
"battle": {
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
      transform: [[0,0],[],['-30']],
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['145px','0px','323px','500px','auto','auto'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)',[270,[['rgba(158,51,51,1.00)',0],['rgba(255,255,0,1.00)',100]]]]
   },
   {
      type: 'text',
      rect: ['206px','180px','199px','70px','auto','auto'],
      id: 'Text2',
      text: 'VS<br>',
      align: 'center',
      font: ['MS Serif, New York, serif',100,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '0px'],
            ["transform", "skewX", '-30deg'],
            ["style", "height", '500px'],
            ["gradient", "background-image", [270,[['rgba(158,51,51,1.00)',0],['rgba(255,255,0,1.00)',100]]]],
            ["style", "left", '145px']
         ],
         "${_Text2}": [
            ["style", "top", '180px'],
            ["style", "height", '70px'],
            ["style", "font-family", 'MS Serif, New York, serif'],
            ["style", "left", '206px'],
            ["style", "font-size", '100px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "width", '612px']
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
"CPcard1": {
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
      rect: ['0px','0px','130px','200px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      fill: ['rgba(255,255,255,1)'],
      id: 'CPcard1cover',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      id: 'trump052',
      type: 'image',
      rect: ['0px','0px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump052.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CPcard1cover}": [
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_trump052}": [
            ["style", "top", '0px'],
            ["style", "height", '200px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
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
"CPcard2": {
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
      rect: ['0px','0px','130px','200px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      fill: ['rgba(255,255,255,1)'],
      id: 'CPcard2cover',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      id: 'trump045',
      type: 'image',
      rect: ['0px','0px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump045.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CPcard2cover}": [
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_trump045}": [
            ["style", "top", '0px'],
            ["style", "height", '200px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
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
"CPcard3": {
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
      rect: ['0px','0px','130px','200px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      fill: ['rgba(255,255,255,1)'],
      id: 'CPcard3cover',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      id: 'trump042',
      type: 'image',
      rect: ['0px','0px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump042.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_trump042}": [
            ["style", "top", '0px'],
            ["style", "height", '200px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${_CPcard3cover}": [
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
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
"CPcard4": {
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
      rect: ['0px','0px','130px','200px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      fill: ['rgba(255,255,255,1)'],
      id: 'CPcard4cover',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      id: 'trump037',
      type: 'image',
      rect: ['0px','0px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump037.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CPcard4cover}": [
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_trump037}": [
            ["style", "top", '0px'],
            ["style", "height", '200px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
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
"CPcard5": {
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
      rect: ['0px','0px','130px','200px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      fill: ['rgba(255,255,255,1)'],
      id: 'CPcard5cover',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      id: 'trump036',
      type: 'image',
      rect: ['0','0','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump036.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CPcard5cover}": [
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_trump036}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
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
"CPcard6": {
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
      rect: ['0px','0px','130px','200px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      fill: ['rgba(255,255,255,1)'],
      id: 'CPcard6cover',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      id: 'trump029',
      type: 'image',
      rect: ['0px','0px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump029.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CPcard6cover}": [
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_trump029}": [
            ["style", "top", '0px'],
            ["style", "height", '200px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
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
"CPcard7": {
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
      rect: ['0px','0px','130px','200px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      fill: ['rgba(255,255,255,1)'],
      id: 'CPcard7cover',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      id: 'trump028',
      type: 'image',
      rect: ['0','0','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump028.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CPcard7cover}": [
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_trump028}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
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
"CPcard8": {
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
      rect: ['0px','0px','130px','200px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      fill: ['rgba(255,255,255,1)'],
      id: 'CPcard8cover',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      id: 'trump021',
      type: 'image',
      rect: ['0px','0px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump021.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_trump021}": [
            ["style", "top", '0px'],
            ["style", "height", '200px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
         ],
         "${_CPcard8cover}": [
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
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
"CPcard9": {
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
      rect: ['0px','0px','130px','200px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      fill: ['rgba(255,255,255,1)'],
      id: 'CPcard9cover',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      id: 'trump020',
      type: 'image',
      rect: ['0px','0px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump020.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_trump020}": [
            ["style", "top", '0px'],
            ["style", "height", '200px'],
            ["style", "left", '0px'],
            ["style", "width", '130px']
         ],
         "${_CPcard9cover}": [
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
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
"pointobar": {
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
      rect: ['0px','0px','169px','44px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(14,148,14,1.00)']
   },
   {
      rect: ['0px','5px','85px','34px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text10',
      text: 'コイン<br>',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '44px'],
            ["style", "width", '169px']
         ],
         "${_Text10}": [
            ["style", "top", '5px'],
            ["style", "font-size", '26px'],
            ["style", "height", '34px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '85px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(14,148,14,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '169px']
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
"coin": {
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
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      transform: [[0,0],[],[],['0.75','0.75']],
      borderRadius: ['50%','50%','50%','50%'],
      rect: ['-13px','-12px','98px','98px','auto','auto'],
      id: 'coincover',
      stroke: [1,'rgba(0,0,0,1)','solid'],
      type: 'ellipse',
      fill: ['rgba(205,201,52,1.00)']
   },
   {
      rect: ['-3px','-2px','79px','79px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      transform: [[0,0],[],[],['0.75','0.75']],
      id: 'coinCopy',
      stroke: [1,'rgba(0,0,0,1)','solid'],
      type: 'ellipse',
      fill: ['rgba(205,201,52,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_coinCopy}": [
            ["color", "background-color", 'rgba(205,201,52,1)'],
            ["transform", "scaleX", '0.75'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '79px'],
            ["style", "top", '-2px'],
            ["transform", "scaleY", '0.75'],
            ["style", "height", '79px'],
            ["style", "left", '-3px']
         ],
         "${_coincover}": [
            ["color", "background-color", 'rgba(205,201,52,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["transform", "scaleX", '0.75'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '98px'],
            ["style", "top", '-12px'],
            ["transform", "scaleY", '0.75'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "height", '98px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "left", '-13px']
         ],
         "${symbolSelector}": [
            ["style", "height", '75px'],
            ["style", "width", '75px']
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
"coinCP": {
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
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      transform: [[0,0],[],[],['0.75','0.75']],
      borderRadius: ['50%','50%','50%','50%'],
      rect: ['-12px','-12px','98px','98px','auto','auto'],
      id: 'coinCopy3',
      stroke: [1,'rgba(0,0,0,1)','solid'],
      type: 'ellipse',
      fill: ['rgba(205,201,52,1.00)']
   },
   {
      rect: ['-2px','-2px','79px','79px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      transform: [[0,0],[],[],['0.75','0.75']],
      id: 'coinCopy2',
      stroke: [1,'rgba(0,0,0,1)','solid'],
      type: 'ellipse',
      fill: ['rgba(205,201,52,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_coinCopy2}": [
            ["color", "background-color", 'rgba(205,201,52,1)'],
            ["transform", "scaleX", '0.75'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '79px'],
            ["style", "top", '-2px'],
            ["transform", "scaleY", '0.75'],
            ["style", "height", '79px'],
            ["style", "left", '-2px']
         ],
         "${_coinCopy3}": [
            ["color", "background-color", 'rgba(205,201,52,1)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["transform", "scaleX", '0.75'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '98px'],
            ["style", "top", '-12px'],
            ["transform", "scaleY", '0.75'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "height", '98px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "left", '-12px']
         ],
         "${symbolSelector}": [
            ["style", "height", '75px'],
            ["style", "width", '75px']
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
"downbutton": {
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
      rect: ['0px','0px','44px','50px','auto','auto'],
      borderRadius: ['0px','0px','25px 25px','25px 25px'],
      fill: ['rgba(229,218,17,1.00)'],
      id: 'RectangleCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',15,'rgba(27,1,1,1)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'down',
      align: 'center',
      rect: ['2px','12px','39px','21px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '12px'],
            ["style", "left", '2px'],
            ["style", "font-size", '15px']
         ],
         "${_RectangleCopy}": [
            ["color", "background-color", 'rgba(229,218,17,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '44px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '50px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '44px']
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
"upbutton": {
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
      rect: ['0px','0px','44px','50px','auto','auto'],
      borderRadius: ['25px 25px','25px 25px','0px','0px'],
      fill: ['rgba(229,218,17,1.00)'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',15,'rgba(27,1,1,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'up',
      align: 'center',
      rect: ['2px','15px','39px','21px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(229,218,17,1.00)'],
            ["style", "border-top-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-top-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '44px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "height", '50px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "left", '0px']
         ],
         "${_Text2}": [
            ["style", "top", '15px'],
            ["style", "left", '2px'],
            ["style", "font-size", '15px']
         ],
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '44px']
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
"kakeOKbutton": {
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
      rect: ['0px','0px','109px','105px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(229,218,17,1)']
   },
   {
      rect: ['6px','26px','95px','41px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(27,1,1,1)','normal','none','normal'],
      id: 'Text4',
      text: 'OK',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text4}": [
            ["style", "top", '26px'],
            ["style", "left", '6px'],
            ["style", "font-size", '40px']
         ],
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "height", '105px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '105px'],
            ["style", "width", '109px']
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
"CPcard1aka": {
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
      rect: ['-2px','1px','130px','200px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'CPcard1aka',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['8px','11px','110px','180px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '11px'],
            ["color", "background-color", 'rgba(238,26,26,1.00)'],
            ["style", "left", '8px'],
            ["style", "width", '110px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
         ],
         "${_CPcard1aka}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '-2px'],
            ["style", "width", '130px'],
            ["style", "top", '1px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
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
"CPcard2aka": {
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
      rect: ['0px','0px','130px','200px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'CPcard2aka',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['10px','10px','110px','180px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CPcard2aka}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(238,26,26,1.00)'],
            ["style", "height", '180px'],
            ["style", "top", '10px'],
            ["style", "left", '10px'],
            ["style", "width", '110px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
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
"CPcard3aka": {
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
      rect: ['-1px','-1px','130px','200px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'CPcard3aka',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['9px','9px','110px','180px','auto','auto'],
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CPcard3aka}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '-1px'],
            ["style", "width", '130px'],
            ["style", "top", '-1px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Rectangle4}": [
            ["style", "height", '180px'],
            ["style", "top", '9px'],
            ["color", "background-color", 'rgba(238,26,26,1.00)'],
            ["style", "width", '110px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
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
"CPcard4aka": {
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
      rect: ['0px','0px','130px','200px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'CPcard4aka',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['10px','10px','110px','180px','auto','auto'],
      id: 'Rectangle5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle5}": [
            ["color", "background-color", 'rgba(238,26,26,1.00)'],
            ["style", "height", '180px'],
            ["style", "top", '10px'],
            ["style", "left", '10px'],
            ["style", "width", '110px']
         ],
         "${_CPcard4aka}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
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
"CPcard5aka": {
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
      rect: ['0px','-1px','130px','200px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'CPcard5aka',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['10px','9px','110px','180px','auto','auto'],
      id: 'Rectangle6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CPcard5aka}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '-1px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Rectangle6}": [
            ["color", "background-color", 'rgba(238,26,26,1.00)'],
            ["style", "left", '10px'],
            ["style", "width", '110px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
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
"CPcard6aka": {
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
      rect: ['0px','1px','130px','200px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'CPcard6aka',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['10px','11px','110px','180px','auto','auto'],
      id: 'Rectangle7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle7}": [
            ["style", "top", '11px'],
            ["style", "height", '180px'],
            ["color", "background-color", 'rgba(238,26,26,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
         ],
         "${_CPcard6aka}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '1px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
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
"CPcard7aka": {
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
      rect: ['0px','0px','130px','200px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'CPcard7aka',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['10px','10px','110px','180px','auto','auto'],
      id: 'Rectangle8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CPcard7aka}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Rectangle8}": [
            ["color", "background-color", 'rgba(238,26,26,1.00)'],
            ["style", "height", '180px'],
            ["style", "top", '10px'],
            ["style", "left", '10px'],
            ["style", "width", '110px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
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
"CPcard8aka": {
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
      rect: ['-2px','0px','130px','200px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'CPcard8aka',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['8px','10px','110px','180px','auto','auto'],
      id: 'Rectangle10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CPcard8aka}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '-2px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Rectangle10}": [
            ["color", "background-color", 'rgba(238,26,26,1.00)'],
            ["style", "left", '8px'],
            ["style", "height", '180px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
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
"CPcard9aka": {
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
      rect: ['0px','0px','130px','200px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'CPcard9aka',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['10px','13px','110px','180px','auto','auto'],
      id: 'Rectangle11',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle11}": [
            ["color", "background-color", 'rgba(238,26,26,1.00)'],
            ["style", "height", '180px'],
            ["style", "top", '13px'],
            ["style", "left", '10px'],
            ["style", "width", '110px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
         ],
         "${_CPcard9aka}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '130px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
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
"CPcardRecord": {
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
      rect: ['0px','0px','1024px','768px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'CPcardRecord',
      opacity: 0.62,
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      type: 'text',
      rect: ['16px','29px','422px','75px','auto','auto'],
      id: 'Text3',
      text: 'CPの出したカード',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(243,237,237,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '29px'],
            ["color", "color", 'rgba(243,237,237,1.00)'],
            ["style", "width", '422px'],
            ["style", "left", '16px'],
            ["style", "font-size", '40px']
         ],
         "${_CPcardRecord}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '768px'],
            ["style", "opacity", '0.62'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1024px']
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
"cardRecord": {
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
      rect: ['0px','0px','1024px','768px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle3',
      opacity: 0.62,
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   },
   {
      type: 'text',
      rect: ['16px','29px','491px','129px','auto','auto'],
      id: 'Text3',
      text: '自分の出したカード',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(243,237,237,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "left", '16px'],
            ["style", "top", '29px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["style", "opacity", '0.62'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1024px']
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
"startgamen": {
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
      id: 'setumei',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','1024px','768px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)',[270,[['rgba(83,253,255,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_setumei}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "cursor", 'auto'],
            ["style", "height", '768px'],
            ["gradient", "background-image", [270,[['rgba(83,253,255,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1024px']
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
"smakotouch": {
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
      rect: ['0px','0px','95px','99px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['26px','83px','42px','117px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["style", "top", '83px'],
            ["style", "left", '26px'],
            ["style", "width", '42px']
         ],
         "${_Ellipse}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '95px']
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
"rennsyuubutton": {
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
      rect: ['0px','0px','325px','99px','auto','auto'],
      borderRadius: ['50px 50px','50px 50px','50px 50px','50px 50px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(252,212,6,1)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',54,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text',
      text: 'れんしゅう',
      align: 'center',
      rect: ['26px','7px','274px','86px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '325px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "left", '0px']
         ],
         "${_Text}": [
            ["style", "top", '7px'],
            ["style", "height", '86px'],
            ["style", "font-size", '54px'],
            ["style", "left", '26px'],
            ["style", "width", '274px']
         ],
         "${symbolSelector}": [
            ["style", "height", '99px'],
            ["style", "width", '325px']
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
"kyarasennbutton": {
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
      rect: ['0px','0px','123px','110px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      fill: ['rgba(252,212,6,1)'],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      type: 'text',
      rect: ['27px','30px','70px','49px','auto','auto'],
      id: 'Text',
      text: '次へ',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',34,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "width", '123px']
         ],
         "${_Text}": [
            ["style", "top", '30px'],
            ["style", "left", '27px'],
            ["style", "font-size", '34px']
         ],
         "${symbolSelector}": [
            ["style", "height", '110px'],
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
         ]
      }
   }
},
"gamestartbutton": {
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
      rect: ['0px','0px','355px','99px','auto','auto'],
      borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
      boxShadow: ['',7,10,3,0,'rgba(0,0,0,0.65)'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(252,212,6,1.00)']
   },
   {
      font: ['\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace',34,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'ゲームをはじめる<br>',
      align: 'center',
      rect: ['28px','34px','299px','41px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '34px'],
            ["style", "font-family", '\'Osaka－等幅\', Osaka-mono, \'ＭＳゴシック\', MS Gothic, monospace'],
            ["style", "left", '28px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(252,212,6,1.00)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '355px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.offsetV", '10px'],
            ["subproperty", "boxShadow.offsetH", '7px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${symbolSelector}": [
            ["style", "height", '99px'],
            ["style", "width", '355px']
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
"rennsyuustage": {
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
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','-2px','1024px','768px','auto','auto'],
      fill: ['rgba(46,176,26,1.00)']
   },
   {
      type: 'text',
      rect: ['724px','263px','104px','42px','auto','auto'],
      id: 'TextME1Copy2',
      text: '勝てば',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(255,253,253,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['861px','263px','109px','41px','auto','auto'],
      id: 'TextME2Copy2',
      text: 'ptゲット',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(255,255,255,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['805px','259px','64px','41px','auto','auto'],
      id: 'lateCopy3',
      text: '?',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',30,'rgba(255,255,255,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['50px','335px','104px','42px','auto','auto'],
      id: 'TextME1Copy',
      text: '勝てば',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(255,253,253,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['187px','335px','109px','41px','auto','auto'],
      id: 'TextME2Copy',
      text: 'ptゲット',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',25,'rgba(255,255,255,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['131px','331px','64px','41px','auto','auto'],
      id: 'lateCopy2',
      text: '?',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',30,'rgba(255,255,255,1.00)','normal','none','normal']
   },
   {
      id: 'smakoCopy',
      type: 'image',
      rect: ['806px','541px','230px','230px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/smako.png','0px','0px']
   },
   {
      id: 'sikispaceCopy3',
      type: 'rect',
      rect: ['29','324','auto','auto','auto','auto']
   },
   {
      id: 'sikispaceCopy2',
      type: 'rect',
      rect: ['29','324','auto','auto','auto','auto']
   },
   {
      type: 'text',
      rect: ['203px','402px','108px','107px','auto','auto'],
      id: 'siki3Copy',
      text: '?',
      align: 'center',
      font: ['MS Serif, New York, serif',68,'rgba(87,87,87,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: ['17px','403px','108px','105px','auto','auto'],
      id: 'siki1Copy',
      text: '?',
      align: 'center',
      font: ['MS Serif, New York, serif',68,'rgba(87,87,87,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: ['106px','405px','108px','107px','auto','auto'],
      id: 'siki2Copy',
      text: '?',
      align: 'center',
      font: ['MS Serif, New York, serif',68,'rgba(87,87,87,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: ['817px','167px','72px','78px','auto','auto'],
      id: 'sikiCP2Copy',
      text: '?',
      align: 'center',
      font: ['MS Serif, New York, serif',68,'rgba(87,87,87,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: ['914px','167px','72px','78px','auto','auto'],
      id: 'sikiCP3Copy',
      text: '?',
      align: 'center',
      font: ['MS Serif, New York, serif',68,'rgba(87,87,87,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: ['719px','167px','72px','75px','auto','auto'],
      id: 'sikiCP1Copy',
      text: '?',
      align: 'center',
      font: ['MS Serif, New York, serif',68,'rgba(87,87,87,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: ['388px','407px','59px','49px','auto','auto'],
      id: 'centerCopy',
      text: '数',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['494px','147px','59px','49px','auto','auto'],
      id: 'center2Copy',
      text: '数',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      id: 'coinCPCopy',
      type: 'rect',
      rect: ['712','103','auto','auto','auto','auto']
   },
   {
      type: 'text',
      rect: ['734px','98px','57px','42px','auto','auto'],
      id: 'kakekinnCPtxtCopy',
      text: '×１',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',34,'rgba(27,1,1,1)','normal','none','normal']
   },
   {
      id: 'coinCopy',
      type: 'rect',
      rect: ['230','457','auto','auto','auto','auto']
   },
   {
      type: 'text',
      rect: ['229px','490px','59px','52px','auto','auto'],
      id: 'kakekinntxtCopy',
      text: '×１',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',34,'rgba(27,1,1,1)','normal','none','normal']
   },
   {
      id: 'smakotouchCopy',
      type: 'rect',
      rect: ['901','549','auto','auto','auto','auto']
   },
   {
      id: 'pointobarCopy',
      type: 'rect',
      rect: ['60','299','auto','auto','auto','auto']
   },
   {
      id: 'pointobarCPCopy',
      type: 'rect',
      rect: ['60','299','auto','auto','auto','auto']
   },
   {
      type: 'text',
      rect: ['924px','101px','26px','41px','auto','auto'],
      id: 'CPpointoCopy',
      text: '50',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(27,1,1,1)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['133px','499px','75px','41px','auto','auto'],
      id: 'pointoCopy',
      text: '50<br>',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(27,1,1,1)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['489px','186px','47px','44px','auto','auto'],
      id: 'kakeruCopy',
      text: '×<br>',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(253,253,253,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['489px','408px','47px','44px','auto','auto'],
      id: 'kakeruCPCopy',
      text: '×<br>',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(253,253,253,1.00)','normal','none','normal']
   },
   {
      rect: ['543px','108px','130px','200px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      fill: ['rgba(255,255,255,1)'],
      id: 'center2dodaiCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      id: 'kuro2Copy',
      type: 'image',
      rect: ['542px','110px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump046.png','0px','0px']
   },
   {
      id: 'kuro4Copy',
      type: 'image',
      rect: ['543px','110px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump038.png','0px','0px']
   },
   {
      rect: ['352px','331px','130px','200px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      fill: ['rgba(255,255,255,1)'],
      id: 'centerdodaiCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      id: 'hato5Copy',
      type: 'image',
      rect: ['352px','331px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump034.png','0px','0px']
   },
   {
      id: 'hato6Copy',
      type: 'image',
      rect: ['352','331','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump031.png','0px','0px']
   },
   {
      type: 'rect',
      id: 'caseCopy',
      stroke: [3,'rgba(255,255,255,1.00)','solid'],
      rect: ['341px','97px','336px','215px','auto','auto'],
      fill: ['rgba(66,249,249,0.00)']
   },
   {
      type: 'rect',
      id: 'CPcaseCopy',
      stroke: [3,'rgba(255,255,255,1.00)','solid'],
      rect: ['341px','321px','336px','215px','auto','auto'],
      fill: ['rgba(66,249,249,0.00)']
   },
   {
      rect: ['543px','108px','130px','200px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'center2dodaiCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['553px','120px','110px','180px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'center2akaCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   },
   {
      rect: ['352px','331px','130px','200px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'centerdodaiCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['362px','340px','110px','180px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'centerakaCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   },
   {
      id: 'CPcard9Copy',
      type: 'rect',
      rect: ['812','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard9akaCopy',
      type: 'rect',
      rect: ['859','-118','auto','auto','auto','auto']
   },
   {
      id: 'CPcard8Copy',
      type: 'rect',
      rect: ['721','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard8akaCopy',
      type: 'rect',
      rect: ['804','-107','auto','auto','auto','auto']
   },
   {
      id: 'CPcard7Copy',
      type: 'rect',
      rect: ['620','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard7akaCopy',
      type: 'rect',
      rect: ['739','-107','auto','auto','auto','auto']
   },
   {
      id: 'CPcard6Copy',
      type: 'rect',
      rect: ['526','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard6akaCopy',
      type: 'rect',
      rect: ['672','-107','auto','auto','auto','auto']
   },
   {
      id: 'CPcard5Copy',
      type: 'rect',
      rect: ['440','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard5akaCopy',
      type: 'rect',
      rect: ['608','-107','auto','auto','auto','auto']
   },
   {
      id: 'CPcard4Copy',
      type: 'rect',
      rect: ['339','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard4akaCopy',
      type: 'rect',
      rect: ['553','-108','auto','auto','auto','auto']
   },
   {
      id: 'CPcard3Copy',
      type: 'rect',
      rect: ['247','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard3akaCopy',
      type: 'rect',
      rect: ['488','-108','auto','auto','auto','auto']
   },
   {
      id: 'CPcard2Copy',
      type: 'rect',
      rect: ['154','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard2akaCopy',
      type: 'rect',
      rect: ['428','-107','auto','auto','auto','auto']
   },
   {
      id: 'CPcard1Copy',
      type: 'rect',
      rect: ['63','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard1akaCopy',
      type: 'rect',
      rect: ['365','-105','auto','auto','auto','auto']
   },
   {
      id: 'card9Copy',
      type: 'rect',
      rect: ['403','301','auto','auto','auto','auto']
   },
   {
      id: 'card8Copy',
      type: 'rect',
      rect: ['757','378','auto','auto','auto','auto']
   },
   {
      id: 'card7Copy',
      type: 'rect',
      rect: ['571','170','auto','auto','auto','auto']
   },
   {
      id: 'card6Copy',
      type: 'rect',
      rect: ['469','117','auto','auto','auto','auto']
   },
   {
      id: 'card5Copy',
      type: 'rect',
      rect: ['424','261','auto','auto','auto','auto']
   },
   {
      id: 'card4Copy',
      type: 'rect',
      rect: ['234','377','auto','auto','auto','auto']
   },
   {
      id: 'card3Copy',
      type: 'rect',
      rect: ['215','230','auto','auto','auto','auto']
   },
   {
      id: 'card2Copy',
      type: 'rect',
      rect: ['92','245','auto','auto','auto','auto']
   },
   {
      id: 'card1Copy',
      type: 'rect',
      rect: ['274','127','auto','auto','auto','auto']
   },
   {
      id: 'drowbuttonCopy',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['850','242','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'card9coverCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['559px','549px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['812px','344px','59px','87px','auto','auto'],
      id: 'card9cover2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card8coverCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['493px','549px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['718px','344px','59px','87px','auto','auto'],
      id: 'card8cover2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card7coverCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['428px','549px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['625px','344px','59px','87px','auto','auto'],
      id: 'card7cover2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card6coverCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['360px','547px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['531px','344px','58px','86px','auto','auto'],
      id: 'card6cover2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card5coverCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['295px','549px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['436px','344px','59px','87px','auto','auto'],
      id: 'card5cover2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card4coverCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['230px','547px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['343px','368px','58px','83px','auto','auto'],
      id: 'card4cover2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card3coverCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['165px','547px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['248px','344px','59px','86px','auto','auto'],
      id: 'card3cover2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card2coverCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['100px','547px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['154px','344px','59px','87px','auto','auto'],
      id: 'card2cover2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card1coverCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['33px','547px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['60px','344px','59px','87px','auto','auto'],
      display: 'none',
      id: 'card1cover2Copy',
      opacity: 0.33660888671875,
      stroke: [0,'rgba(0,0,0,1)','none'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'okbuttonCopy',
      rect: ['819','267','auto','auto','auto','auto'],
      cursor: ['pointer'],
      display: 'none'
   },
   {
      type: 'rect',
      id: 'downbuttonCopy',
      rect: ['839','697','auto','auto','auto','auto'],
      cursor: ['pointer'],
      display: 'none'
   },
   {
      type: 'rect',
      id: 'upbuttonCopy',
      rect: ['839','642','auto','auto','auto','auto'],
      cursor: ['pointer'],
      display: 'none'
   },
   {
      type: 'rect',
      id: 'kakeOKbuttonCopy',
      rect: ['713','641','auto','auto','auto','auto'],
      cursor: ['pointer'],
      display: 'none'
   },
   {
      transform: [[0,0],[],['0','20']],
      rect: ['0px','-187px','1024px','570px','auto','auto'],
      id: 'battleCPCopy',
      stroke: [0,'rgba(0,0,0,1)','solid'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      transform: [[0,0],[],['0','20']],
      rect: ['0px','384px','1024px','570px','auto','auto'],
      id: 'battleCopy',
      stroke: [0,'rgba(0,0,0,1)','solid'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'text',
      rect: ['370px','208px','297px','286px','auto','auto'],
      id: 'battleTextCopy',
      text: 'VS',
      textShadow: ['rgba(0,0,0,0.65)',3,3,3],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',200,'rgba(255,237,0,1.00)','700','none','italic']
   },
   {
      type: 'text',
      rect: ['370px','208px','297px','286px','auto','auto'],
      display: 'none',
      id: 'battleTextCopy2',
      text: 'VS',
      textShadow: ['rgba(0,0,0,0.65)',3,3,3],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',200,'rgba(255,237,0,1.00)','700','none','italic']
   },
   {
      type: 'text',
      rect: ['210px','300px','320px','200px','auto','auto'],
      id: 'SystemplusCopy',
      text: '42<br>',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',140,'rgba(0,0,0,1)','600','none','normal']
   },
   {
      type: 'text',
      rect: ['400px','1px','320px','200px','auto','auto'],
      id: 'CPsekiCopy',
      text: '36<br>',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',140,'rgba(0,0,0,1)','600','none','normal']
   },
   {
      type: 'rect',
      rect: ['-45px','-14px','1057px','570px','auto','auto'],
      display: 'none',
      id: 'coverCopy',
      opacity: 0.6953125,
      stroke: [0,'rgb(0, 0, 0)','none'],
      fill: ['rgba(240,240,240,1.00)']
   },
   {
      type: 'text',
      rect: ['154px','129px','668px','321px','auto','auto'],
      display: 'none',
      id: 'katiCopy',
      text: '勝ち',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',180,'rgba(241,19,19,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['154px','129px','668px','321px','auto','auto'],
      display: 'none',
      id: 'makeCopy',
      text: '負け',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',180,'rgba(18,32,241,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['154px','129px','668px','321px','auto','auto'],
      display: 'none',
      id: 'hikiwakeCopy',
      text: '引き分け',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',161,'rgba(27,135,8,1.00)','normal','none','normal']
   },
   {
      rect: ['0px','-2px','1018px','767px','auto','auto'],
      opacity: 0,
      id: 'bigcover',
      stroke: [3,'rgb(0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      id: 'hukidashi',
      type: 'image',
      rect: ['56px','421px','873px','221px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fukidashi.png','0px','0px']
   },
   {
      id: 'introduse',
      type: 'rect',
      rect: ['185','470','auto','auto','auto','auto']
   },
   {
      id: 'next',
      type: 'rect',
      rect: ['785','494','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'card1Copy',
      symbolName: 'card1'
   },
   {
      id: 'card6Copy',
      symbolName: 'card6'
   },
   {
      id: 'CPcard4Copy',
      symbolName: 'CPcard4'
   },
   {
      id: 'card4Copy',
      symbolName: 'card4'
   },
   {
      id: 'kakeOKbuttonCopy',
      symbolName: 'kakeOKbutton'
   },
   {
      id: 'CPcard3akaCopy',
      symbolName: 'CPcard3aka'
   },
   {
      id: 'CPcard4akaCopy',
      symbolName: 'CPcard4aka'
   },
   {
      id: 'smakotouchCopy',
      symbolName: 'smakotouch'
   },
   {
      id: 'CPcard2akaCopy',
      symbolName: 'CPcard2aka'
   },
   {
      id: 'next',
      symbolName: 'next'
   },
   {
      id: 'coinCPCopy',
      symbolName: 'coinCP'
   },
   {
      id: 'CPcard6Copy',
      symbolName: 'CPcard6'
   },
   {
      id: 'downbuttonCopy',
      symbolName: 'downbutton'
   },
   {
      id: 'CPcard9Copy',
      symbolName: 'CPcard9'
   },
   {
      id: 'CPcard6akaCopy',
      symbolName: 'CPcard6aka'
   },
   {
      id: 'pointobarCPCopy',
      symbolName: 'pointobar'
   },
   {
      id: 'introduse',
      symbolName: 'introduse'
   },
   {
      id: 'upbuttonCopy',
      symbolName: 'upbutton'
   },
   {
      id: 'okbuttonCopy',
      symbolName: 'okbutton'
   },
   {
      id: 'card8Copy',
      symbolName: 'card8'
   },
   {
      id: 'card7Copy',
      symbolName: 'card7'
   },
   {
      id: 'CPcard1Copy',
      symbolName: 'CPcard1'
   },
   {
      id: 'CPcard7akaCopy',
      symbolName: 'CPcard7aka'
   },
   {
      id: 'CPcard5Copy',
      symbolName: 'CPcard5'
   },
   {
      id: 'card2Copy',
      symbolName: 'card2'
   },
   {
      id: 'card3Copy',
      symbolName: 'card3'
   },
   {
      id: 'CPcard8Copy',
      symbolName: 'CPcard8'
   },
   {
      id: 'card5Copy',
      symbolName: 'card5'
   },
   {
      id: 'drowbuttonCopy',
      symbolName: 'drowbutton'
   },
   {
      id: 'coinCopy',
      symbolName: 'coin'
   },
   {
      id: 'card9Copy',
      symbolName: 'card9'
   },
   {
      id: 'CPcard9akaCopy',
      symbolName: 'CPcard9aka'
   },
   {
      id: 'pointobarCopy',
      symbolName: 'pointobar'
   },
   {
      id: 'CPcard7Copy',
      symbolName: 'CPcard7'
   },
   {
      id: 'CPcard1akaCopy',
      symbolName: 'CPcard1aka'
   },
   {
      id: 'CPcard5akaCopy',
      symbolName: 'CPcard5aka'
   },
   {
      id: 'CPcard8akaCopy',
      symbolName: 'CPcard8aka'
   },
   {
      id: 'sikispaceCopy3',
      symbolName: 'sikispace'
   },
   {
      id: 'CPcard3Copy',
      symbolName: 'CPcard3'
   },
   {
      id: 'sikispaceCopy2',
      symbolName: 'sikispace'
   },
   {
      id: 'CPcard2Copy',
      symbolName: 'CPcard2'
   }   ]
   },
   states: {
      "Base State": {
         "${_CPcard6akaCopy}": [
            ["style", "left", '663px'],
            ["style", "top", '-117px']
         ],
         "${_card5Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '296px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_okbuttonCopy}": [
            ["style", "top", '646px'],
            ["transform", "scaleY", '1.59524'],
            ["transform", "scaleX", '1.42619'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '740px']
         ],
         "${_makeCopy}": [
            ["style", "top", '186px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(18,32,241,1)'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
            ["style", "left", '184px'],
            ["style", "font-size", '180px']
         ],
         "${_siki2Copy}": [
            ["style", "top", '405px'],
            ["style", "font-size", '68px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(87,87,87,1)'],
            ["style", "height", '107px'],
            ["style", "font-family", '\'MS Serif\', \'New York\', serif'],
            ["style", "left", '106px'],
            ["style", "width", '108px']
         ],
         "${_coinCopy}": [
            ["transform", "scaleX", '0.80179'],
            ["style", "top", '477px'],
            ["style", "left", '218px'],
            ["transform", "scaleY", '0.7761']
         ],
         "${_sikiCP1Copy}": [
            ["style", "top", '167px'],
            ["style", "font-size", '68px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(87,87,87,1)'],
            ["style", "height", '75px'],
            ["style", "font-family", '\'MS Serif\', \'New York\', serif'],
            ["style", "left", '719px'],
            ["style", "width", '72px']
         ],
         "${_CPcard1Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '355px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_card6Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '361px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_sikiCP2Copy}": [
            ["style", "top", '167px'],
            ["style", "font-size", '68px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(87,87,87,1)'],
            ["style", "height", '78px'],
            ["style", "font-family", '\'MS Serif\', \'New York\', serif'],
            ["style", "left", '817px'],
            ["style", "width", '72px']
         ],
         "${_card6coverCopy}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '360px'],
            ["style", "width", '130px']
         ],
         "${_CPcard2akaCopy}": [
            ["style", "top", '-116px'],
            ["style", "left", '420px']
         ],
         "${_card4Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '231px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_siki1Copy}": [
            ["style", "top", '403px'],
            ["style", "width", '108px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(87,87,87,1)'],
            ["style", "height", '105px'],
            ["style", "font-family", '\'MS Serif\', \'New York\', serif'],
            ["style", "left", '17px'],
            ["style", "font-size", '68px']
         ],
         "${_card4coverCopy}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '230px'],
            ["style", "width", '130px']
         ],
         "${_hikiwakeCopy}": [
            ["style", "top", '207px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(27,135,8,1)'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
            ["style", "left", '198px'],
            ["style", "font-size", '161px']
         ],
         "${_smakotouchCopy}": [
            ["style", "opacity", '0']
         ],
         "${_kakeOKbuttonCopy}": [
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_battleTextCopy}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,237,0,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '370px'],
            ["style", "font-size", '200px'],
            ["style", "top", '208px'],
            ["style", "width", '339px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "font-style", 'italic'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "text-decoration", 'none'],
            ["style", "opacity", '0']
         ],
         "${_coinCPCopy}": [
            ["style", "top", '84px'],
            ["transform", "scaleX", '0.81317'],
            ["transform", "scaleY", '0.68542'],
            ["style", "left", '721px']
         ],
         "${_centerCopy}": [
            ["style", "top", '407px'],
            ["style", "left", '388px']
         ],
         "${_center2Copy}": [
            ["style", "top", '177px'],
            ["style", "height", '65px'],
            ["style", "display", 'block'],
            ["style", "left", '560px'],
            ["style", "width", '95px']
         ],
         "${_card7cover2Copy}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '428px'],
            ["style", "width", '130px']
         ],
         "${_downbuttonCopy}": [
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_hato5Copy}": [
            ["style", "top", '331px'],
            ["style", "height", '200px'],
            ["style", "left", '352px'],
            ["style", "width", '130px']
         ],
         "${_card8Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '493px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_card3cover2Copy}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '165px'],
            ["style", "width", '130px']
         ],
         "${_card1cover2Copy}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '33px'],
            ["style", "width", '130px']
         ],
         "${_drowbuttonCopy}": [
            ["style", "top", '644px'],
            ["transform", "scaleY", '1.45977'],
            ["transform", "scaleX", '1.84146'],
            ["style", "left", '750px'],
            ["style", "cursor", 'pointer']
         ],
         "${_card9Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '558px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_card5cover2Copy}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '295px'],
            ["style", "width", '130px']
         ],
         "${_CPcard8Copy}": [
            ["style", "top", '-117px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '794px']
         ],
         "${_card5coverCopy}": [
            ["style", "top", '549px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '295px'],
            ["style", "width", '130px']
         ],
         "${_center2dodaiCopy2}": [
            ["style", "top", '110px'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '543px'],
            ["style", "width", '130px']
         ],
         "${_card8coverCopy}": [
            ["style", "top", '549px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '493px'],
            ["style", "width", '130px']
         ],
         "${_card7Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '428px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_pointobarCPCopy}": [
            ["style", "left", '810px'],
            ["style", "top", '98px']
         ],
         "${_card4cover2Copy}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '230px'],
            ["style", "width", '130px']
         ],
         "${_CPcard3akaCopy}": [
            ["style", "left", '485px'],
            ["style", "top", '-118px']
         ],
         "${_hato6Copy}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
         ],
         "${_centerdodaiCopy3}": [
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '352px'],
            ["style", "width", '130px'],
            ["style", "top", '331px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_siki3Copy}": [
            ["style", "top", '402px'],
            ["style", "width", '108px'],
            ["style", "text-align", 'center'],
            ["style", "height", '107px'],
            ["color", "color", 'rgba(87,87,87,1)'],
            ["style", "font-family", '\'MS Serif\', \'New York\', serif'],
            ["style", "left", '203px'],
            ["style", "font-size", '68px']
         ],
         "${_upbuttonCopy}": [
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_card9cover2Copy}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '558px'],
            ["style", "width", '130px']
         ],
         "${_battleCopy}": [
            ["gradient", "background-image", [270,[['rgba(255,126,0,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '-1034px'],
            ["style", "width", '1024px'],
            ["style", "top", '384px'],
            ["transform", "skewY", '20deg'],
            ["style", "height", '570px'],
            ["color", "border-color", 'rgb(250, 250, 250)'],
            ["style", "border-width", '5px'],
            ["style", "border-style", 'solid']
         ],
         "${_battleTextCopy2}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,237,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '370px'],
            ["style", "font-size", '200px'],
            ["style", "top", '208px'],
            ["style", "width", '339px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "font-style", 'italic'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "text-decoration", 'none'],
            ["style", "opacity", '0']
         ],
         "${_kuro2Copy}": [
            ["style", "top", '110px'],
            ["style", "height", '200px'],
            ["style", "left", '542px'],
            ["style", "width", '130px']
         ],
         "${_CPcard4akaCopy}": [
            ["style", "left", '546px'],
            ["style", "top", '-116px']
         ],
         "${_bigcover}": [
            ["style", "height", '767px'],
            ["style", "opacity", '0']
         ],
         "${_card1coverCopy}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '33px'],
            ["style", "width", '130px']
         ],
         "${_kakeruCPCopy}": [
            ["style", "top", '408px'],
            ["style", "left", '489px'],
            ["color", "color", 'rgba(253,253,253,1)']
         ],
         "${_card1Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '36px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_CPcard7akaCopy}": [
            ["style", "top", '-116px'],
            ["style", "left", '728px']
         ],
         "${_CPcard2Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '419px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_sikispaceCopy2}": [
            ["transform", "scaleX", '0.74348'],
            ["style", "top", '377px'],
            ["transform", "scaleY", '0.74348'],
            ["style", "left", '-20px']
         ],
         "${_card2Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '101px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_next_text}": [
            ["style", "font-size", '']
         ],
         "${_CPcard1akaCopy}": [
            ["style", "top", '-116px'],
            ["style", "left", '355px']
         ],
         "${_lateCopy3}": [
            ["style", "top", '259px'],
            ["style", "width", '64px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
            ["style", "left", '805px'],
            ["style", "font-size", '30px']
         ],
         "${_card2coverCopy}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '100px'],
            ["style", "width", '130px']
         ],
         "${_kakekinntxtCopy}": [
            ["style", "top", '490px'],
            ["style", "text-align", 'center'],
            ["style", "height", '52px'],
            ["style", "width", '59px'],
            ["style", "left", '229px'],
            ["style", "font-size", '34px']
         ],
         "${_center2dodaiCopy3}": [
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '543px'],
            ["style", "width", '130px'],
            ["style", "top", '110px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_card3coverCopy}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '165px'],
            ["style", "width", '130px']
         ],
         "${_centerdodaiCopy2}": [
            ["style", "top", '331px'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["style", "left", '352px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '130px']
         ],
         "${_TextME1Copy}": [
            ["style", "top", '335px'],
            ["style", "font-size", '25px'],
            ["style", "height", '42px'],
            ["color", "color", 'rgba(255,253,253,1)'],
            ["style", "left", '50px'],
            ["style", "width", '104px']
         ],
         "${_card6cover2Copy}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '360px'],
            ["style", "width", '130px']
         ],
         "${_CPcard6Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '664px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_TextME2Copy}": [
            ["style", "top", '335px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '187px'],
            ["style", "width", '109px']
         ],
         "${_center2akaCopy}": [
            ["color", "background-color", 'rgba(238,26,26,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '553px'],
            ["style", "width", '110px'],
            ["style", "top", '120px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '180px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_CPpointoCopy}": [
            ["style", "left", '924px'],
            ["style", "top", '101px']
         ],
         "${_centerakaCopy}": [
            ["color", "background-color", 'rgba(238,26,26,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '362px'],
            ["style", "width", '110px'],
            ["style", "top", '340px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '180px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_card3Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '166px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_card9coverCopy}": [
            ["style", "top", '549px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '559px'],
            ["style", "width", '130px']
         ],
         "${_CPcard7Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '728px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_caseCopy}": [
            ["style", "top", '97px'],
            ["color", "background-color", 'rgba(66,249,249,0)'],
            ["style", "border-width", '3px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '215px'],
            ["color", "border-color", 'rgb(255, 255, 255)'],
            ["style", "left", '341px'],
            ["style", "width", '336px']
         ],
         "${_card8cover2Copy}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '493px'],
            ["style", "width", '130px']
         ],
         "${_CPcaseCopy}": [
            ["style", "top", '321px'],
            ["color", "background-color", 'rgba(66,249,249,0)'],
            ["style", "left", '341px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '215px'],
            ["color", "border-color", 'rgb(255, 255, 255)'],
            ["style", "border-width", '3px'],
            ["style", "width", '336px']
         ],
         "${_sikiCP3Copy}": [
            ["style", "top", '167px'],
            ["style", "width", '72px'],
            ["style", "text-align", 'center'],
            ["style", "height", '78px'],
            ["color", "color", 'rgba(87,87,87,1)'],
            ["style", "font-family", '\'MS Serif\', \'New York\', serif'],
            ["style", "left", '914px'],
            ["style", "font-size", '68px']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_coverCopy}": [
            ["color", "background-color", 'rgba(240,240,240,1)'],
            ["style", "height", '768px'],
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.6953125'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${_kakeruCopy}": [
            ["style", "top", '186px'],
            ["style", "left", '489px'],
            ["color", "color", 'rgba(253,253,253,1)']
         ],
         "${_katiCopy}": [
            ["style", "top", '186px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(241,19,19,1)'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
            ["style", "left", '191px'],
            ["style", "font-size", '180px']
         ],
         "${_kuro4Copy}": [
            ["style", "top", '110px'],
            ["style", "height", '200px'],
            ["style", "left", '543px'],
            ["style", "width", '130px']
         ],
         "${_battleCPCopy}": [
            ["gradient", "background-image", [270,[['rgba(254,254,255,1.00)',0],['rgba(42,92,212,1.00)',100]]]],
            ["style", "left", '1024px'],
            ["style", "width", '1024px'],
            ["style", "top", '-187px'],
            ["transform", "skewY", '20deg'],
            ["style", "height", '570px'],
            ["color", "border-color", 'rgb(255, 255, 255)'],
            ["style", "border-width", '5px'],
            ["style", "border-style", 'solid']
         ],
         "${_hukidashi}": [
            ["style", "height", '221px'],
            ["style", "top", '421px'],
            ["style", "left", '56px'],
            ["style", "width", '873px']
         ],
         "${_Rectangle}": [
            ["style", "top", '-2px'],
            ["style", "height", '768px'],
            ["color", "background-color", 'rgba(46,176,26,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${_smakoCopy}": [
            ["style", "height", '230px'],
            ["style", "top", '541px'],
            ["style", "left", '806px'],
            ["style", "width", '230px']
         ],
         "${_SystemplusCopy}": [
            ["color", "color", 'rgba(169,35,0,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '113px'],
            ["style", "font-size", '140px'],
            ["style", "top", '764px'],
            ["style", "display", 'block'],
            ["style", "height", '200px'],
            ["style", "width", '320px'],
            ["style", "font-weight", '600']
         ],
         "${_pointoCopy}": [
            ["style", "top", '499px'],
            ["style", "font-size", '26px'],
            ["style", "left", '133px'],
            ["style", "width", '75px']
         ],
         "${_CPcard8akaCopy}": [
            ["style", "left", '793px'],
            ["style", "top", '-116px']
         ],
         "${_card7coverCopy}": [
            ["style", "top", '549px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '428px'],
            ["style", "width", '130px']
         ],
         "${_CPcard3Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '481px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_CPcard9Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '861px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_CPcard5Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '597px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_sikispaceCopy3}": [
            ["style", "top", '141px'],
            ["style", "left", '669px'],
            ["transform", "scaleY", '0.74348'],
            ["transform", "scaleX", '0.74348']
         ],
         "${_CPsekiCopy}": [
            ["color", "color", 'rgba(0,32,113,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '571px'],
            ["style", "width", '320px'],
            ["style", "top", '-200px'],
            ["style", "display", 'block'],
            ["style", "height", '200px'],
            ["style", "font-size", '140px'],
            ["style", "font-weight", '600']
         ],
         "${_lateCopy2}": [
            ["style", "top", '331px'],
            ["style", "width", '64px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
            ["style", "left", '131px'],
            ["style", "font-size", '30px']
         ],
         "${_kakekinnCPtxtCopy}": [
            ["style", "top", '98px'],
            ["style", "text-align", 'center'],
            ["style", "height", '42px'],
            ["style", "font-size", '34px'],
            ["style", "left", '734px'],
            ["style", "width", '57px']
         ],
         "${_TextME2Copy2}": [
            ["style", "top", '263px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '861px'],
            ["style", "width", '109px']
         ],
         "${_pointobarCopy}": [
            ["style", "left", '33px'],
            ["style", "top", '493px']
         ],
         "${_TextME1Copy2}": [
            ["style", "top", '263px'],
            ["style", "font-size", '25px'],
            ["style", "height", '42px'],
            ["color", "color", 'rgba(255,253,253,1)'],
            ["style", "left", '724px'],
            ["style", "width", '104px']
         ],
         "${_CPcard4Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '542px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_card2cover2Copy}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '99px'],
            ["style", "width", '130px']
         ],
         "${_CPcard5akaCopy}": [
            ["style", "left", '598px'],
            ["style", "top", '-116px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid2493", tween: [ "style", "${_sikispaceCopy2}", "top", '377px', { fromValue: '377px'}], position: 0, duration: 0 },
            { id: "eid1131", tween: [ "style", "${_card8cover2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2567", tween: [ "transform", "${_coinCopy}", "scaleX", '0.80179', { fromValue: '0.80179'}], position: 0, duration: 0 },
            { id: "eid1624", tween: [ "style", "${_drowbuttonCopy}", "top", '644px', { fromValue: '644px'}], position: 4694, duration: 0 },
            { id: "eid1119", tween: [ "style", "${_okbuttonCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1126", tween: [ "style", "${_card3cover2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1161", tween: [ "style", "${_battleTextCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid1162", tween: [ "style", "${_battleTextCopy2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "swing" },
            { id: "eid1163", tween: [ "style", "${_battleTextCopy2}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0, easing: "swing" },
            { id: "eid1190", tween: [ "style", "${_SystemplusCopy}", "top", '494px', { fromValue: '764px'}], position: 1500, duration: 1000 },
            { id: "eid2578", tween: [ "style", "${_coinCPCopy}", "top", '84px', { fromValue: '84px'}], position: 0, duration: 0 },
            { id: "eid1129", tween: [ "style", "${_card6cover2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1184", tween: [ "style", "${_CPsekiCopy}", "left", '257px', { fromValue: '571px'}], position: 1500, duration: 1000 },
            { id: "eid1127", tween: [ "style", "${_card4cover2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1173", tween: [ "color", "${_CPsekiCopy}", "color", 'rgba(0,32,113,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,32,113,1.00)'}], position: 2500, duration: 0, easing: "swing" },
            { id: "eid2568", tween: [ "transform", "${_coinCopy}", "scaleY", '0.7761', { fromValue: '0.7761'}], position: 0, duration: 0 },
            { id: "eid1130", tween: [ "style", "${_card7cover2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1174", tween: [ "style", "${_CPsekiCopy}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 500 },
            { id: "eid1159", tween: [ "style", "${_battleCPCopy}", "left", '0px', { fromValue: '1024px'}], position: 1500, duration: 1000, easing: "swing" },
            { id: "eid1160", tween: [ "style", "${_battleCPCopy}", "left", '1024px', { fromValue: '0px'}], position: 4250, duration: 1000, easing: "swing" },
            { id: "eid2513", tween: [ "style", "${_sikispaceCopy3}", "top", '141px', { fromValue: '141px'}], position: 0, duration: 0 },
            { id: "eid2576", tween: [ "transform", "${_coinCPCopy}", "scaleY", '0.68542', { fromValue: '0.68542'}], position: 0, duration: 0 },
            { id: "eid1176", tween: [ "style", "${_CPsekiCopy}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "eid1132", tween: [ "style", "${_card9cover2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1116", tween: [ "style", "${_makeCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1178", tween: [ "color", "${_SystemplusCopy}", "color", 'rgba(169,35,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,35,0,1.00)'}], position: 2500, duration: 0, easing: "swing" },
            { id: "eid1115", tween: [ "style", "${_katiCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1164", tween: [ "style", "${_battleTextCopy2}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "swing" },
            { id: "eid1165", tween: [ "style", "${_battleTextCopy2}", "opacity", '0', { fromValue: '1'}], position: 4250, duration: 500, easing: "swing" },
            { id: "eid1172", tween: [ "style", "${_CPsekiCopy}", "top", '30px', { fromValue: '-200px'}], position: 1500, duration: 1000 },
            { id: "eid1234", tween: [ "style", "${_drowbuttonCopy}", "left", '750px', { fromValue: '750px'}], position: 0, duration: 0 },
            { id: "eid1117", tween: [ "style", "${_hikiwakeCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1124", tween: [ "style", "${_card1cover2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1189", tween: [ "style", "${_SystemplusCopy}", "left", '504px', { fromValue: '113px'}], position: 1500, duration: 1000 },
            { id: "eid1121", tween: [ "style", "${_upbuttonCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2571", tween: [ "style", "${_coinCopy}", "top", '477px', { fromValue: '477px'}], position: 0, duration: 0 },
            { id: "eid1128", tween: [ "style", "${_card5cover2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1120", tween: [ "style", "${_downbuttonCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2577", tween: [ "style", "${_coinCPCopy}", "left", '721px', { fromValue: '721px'}], position: 0, duration: 0 },
            { id: "eid1122", tween: [ "style", "${_kakeOKbuttonCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1179", tween: [ "style", "${_SystemplusCopy}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 500 },
            { id: "eid2575", tween: [ "transform", "${_coinCPCopy}", "scaleX", '0.81317', { fromValue: '0.81317'}], position: 0, duration: 0 },
            { id: "eid1125", tween: [ "style", "${_card2cover2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1157", tween: [ "style", "${_battleCopy}", "left", '0px', { fromValue: '-1034px'}], position: 1500, duration: 1000, easing: "swing" },
            { id: "eid1158", tween: [ "style", "${_battleCopy}", "left", '-1034px', { fromValue: '0px'}], position: 4250, duration: 1000, easing: "swing" },
            { id: "eid2494", tween: [ "style", "${_sikispaceCopy2}", "left", '-20px', { fromValue: '-20px'}], position: 0, duration: 0 },
            { id: "eid2572", tween: [ "style", "${_coinCopy}", "left", '218px', { fromValue: '218px'}], position: 0, duration: 0 },
            { id: "eid1181", tween: [ "style", "${_SystemplusCopy}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "eid1118", tween: [ "style", "${_coverCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"pointobar_1": {
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
      rect: ['0px','0px','169px','44px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(14,148,14,1.00)']
   },
   {
      type: 'text',
      rect: ['9px','5px','61px','34px','auto','auto'],
      id: 'Text10',
      text: '点数',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(27,1,1,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect2}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(14,148,14,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '169px']
         ],
         "${_Text10}": [
            ["style", "top", '5px'],
            ["style", "width", '61px'],
            ["style", "height", '34px'],
            ["color", "color", 'rgba(27,1,1,1.00)'],
            ["style", "left", '9px'],
            ["style", "font-size", '26px']
         ],
         "${symbolSelector}": [
            ["style", "height", '44px'],
            ["style", "width", '169px']
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
"rennsyuuend": {
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
      rect: ['0px','0px','303px','49px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      fill: ['rgba(223,184,41,1.00)'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      type: 'text',
      id: 'Text',
      text: 'れんしゅうをおわる',
      align: 'center',
      rect: ['20px','6px','258px','41px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(223,184,41,1.00)']
         ],
         "${_Text}": [
            ["style", "top", '6px'],
            ["style", "left", '20px'],
            ["style", "text-align", 'center']
         ],
         "${symbolSelector}": [
            ["style", "height", '49px'],
            ["style", "width", '303px']
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
"reeetobox": {
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
      rect: ['0px','0px','328px','63px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(96,207,215,1.00)',[270,[['rgba(64,236,255,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
   },
   {
      rect: ['6px','16px','75px','33px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(27,1,1,1)','normal','none','normal'],
      id: 'Text4',
      text: 'あなた',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['172px','16px','48px','33px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(27,1,1,1)','normal','none','normal'],
      id: 'Text3',
      text: 'CP',
      align: 'right',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '16px'],
            ["style", "left", '172px'],
            ["style", "width", '48px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(96,207,215,1.00)'],
            ["style", "top", '0px'],
            ["gradient", "background-image", [270,[['rgba(64,236,255,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '328px']
         ],
         "${symbolSelector}": [
            ["style", "height", '65px'],
            ["style", "width", '330px']
         ],
         "${_Text4}": [
            ["style", "height", '33px'],
            ["style", "top", '16px'],
            ["style", "left", '6px'],
            ["style", "width", '75px']
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
"gamestartgamenn": {
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
      id: 'gamestartgamenn',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','1024px','768px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      id: 'smako2',
      type: 'image',
      rect: ['303px','210px','527px','530px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/smako.png','0px','0px']
   },
   {
      id: 'ponta',
      type: 'image',
      rect: ['0px','768px','255px','276px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ponta2.png','0px','0px']
   },
   {
      type: 'image',
      id: 'smao22',
      rect: ['191px','180px','588px','560px','auto','auto'],
      transform: [[0,0],[],[],['-1.012']],
      fill: ['rgba(0,0,0,0)','images/smao.png','0px','0px']
   },
   {
      id: 'kumonchan2',
      type: 'image',
      rect: ['1024','126px','541px','421px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/kumonchan2.png','0px','0px']
   },
   {
      id: 'penpen',
      type: 'image',
      rect: ['752px','774px','272px','287px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/penpen.png','0px','0px']
   },
   {
      id: 'bonnou_fin2',
      type: 'image',
      rect: ['-326px','199px','326px','276px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bonnou%20fin.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['96px','45px','832px','179px','auto','auto'],
      align: 'center',
      id: 'Text',
      text: 'かけ算カードゲーム',
      textShadow: ['rgba(0,0,0,0.65)',3,3,3],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',92,'rgba(255,80,0,1.00)','800','none','italic']
   },
   {
      type: 'text',
      id: 'Text3',
      text: 'ver1.3',
      rect: ['878px','180px','91px','45px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_smako2}": [
            ["style", "height", '530px'],
            ["style", "top", '210px'],
            ["style", "left", '303px'],
            ["style", "width", '527px']
         ],
         "${_bonnou_fin2}": [
            ["style", "top", '205px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '255px'],
            ["style", "left", '-326px'],
            ["style", "width", '283px']
         ],
         "${_kumonchan2}": [
            ["style", "top", '151px'],
            ["style", "height", '396px'],
            ["style", "left", '1124px'],
            ["style", "width", '441px']
         ],
         "${_gamestartgamenn}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["color", "background-color", 'rgba(187,229,237,1)'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${_penpen}": [
            ["style", "height", '270px'],
            ["style", "top", '774px'],
            ["style", "left", '765px'],
            ["style", "width", '259px']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,80,0,1.00)'],
            ["style", "font-weight", '800'],
            ["style", "left", '96px'],
            ["style", "font-size", '92px'],
            ["style", "top", '45px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'italic'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "opacity", '0'],
            ["subproperty", "textShadow.offsetV", '3px']
         ],
         "${_smao22}": [
            ["style", "top", '180px'],
            ["transform", "scaleX", '-1.01233'],
            ["style", "height", '560px'],
            ["style", "left", '191px'],
            ["style", "width", '588px']
         ],
         "${_ponta}": [
            ["style", "height", '255px'],
            ["style", "top", '768px'],
            ["style", "left", '0px'],
            ["style", "width", '239px']
         ],
         "${_Text3}": [
            ["style", "top", '180px'],
            ["style", "opacity", '1'],
            ["style", "left", '878px'],
            ["style", "width", '91px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12500,
         autoPlay: true,
         timeline: [
            { id: "eid2534", tween: [ "style", "${_penpen}", "left", '752px', { fromValue: '765px'}], position: 0, duration: 2000 },
            { id: "eid1690", tween: [ "style", "${_penpen}", "left", '1086px', { fromValue: '752px'}], position: 3000, duration: 1000, easing: "easeInOutSine" },
            { id: "eid2529", tween: [ "style", "${_bonnou_fin2}", "height", '255px', { fromValue: '255px'}], position: 0, duration: 0 },
            { id: "eid2521", tween: [ "style", "${_kumonchan2}", "height", '396px', { fromValue: '396px'}], position: 0, duration: 0 },
            { id: "eid1678", tween: [ "style", "${_penpen}", "top", '481px', { fromValue: '774px'}], position: 0, duration: 2000, easing: "easeInCubic" },
            { id: "eid2520", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 1500 },
            { id: "eid1689", tween: [ "style", "${_ponta}", "left", '-313px', { fromValue: '0px'}], position: 3000, duration: 1000, easing: "easeInOutSine" },
            { id: "eid2535", tween: [ "style", "${_penpen}", "width", '259px', { fromValue: '259px'}], position: 0, duration: 0 },
            { id: "eid1711", tween: [ "color", "${_gamestartgamenn}", "background-color", 'rgba(187,229,237,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(187,229,237,1)'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid1692", tween: [ "style", "${_bonnou_fin2}", "top", '205px', { fromValue: '205px'}], position: 4000, duration: 0, easing: "easeInOutSine" },
            { id: "eid2522", tween: [ "style", "${_kumonchan2}", "top", '151px', { fromValue: '151px'}], position: 0, duration: 0 },
            { id: "eid2536", tween: [ "style", "${_kumonchan2}", "width", '441px', { fromValue: '441px'}], position: 0, duration: 0, easing: "easeInCubic" },
            { id: "eid2531", tween: [ "style", "${_ponta}", "height", '255px', { fromValue: '255px'}], position: 0, duration: 0 },
            { id: "eid2530", tween: [ "style", "${_bonnou_fin2}", "width", '283px', { fromValue: '283px'}], position: 0, duration: 0 },
            { id: "eid2632", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 1500 },
            { id: "eid1687", tween: [ "transform", "${_bonnou_fin2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 12500, duration: 0 },
            { id: "eid1677", tween: [ "style", "${_kumonchan2}", "left", '661px', { fromValue: '1124px'}], position: 0, duration: 2000, easing: "easeInCubic" },
            { id: "eid1691", tween: [ "style", "${_kumonchan2}", "left", '951px', { fromValue: '661px'}], position: 3000, duration: 1000, easing: "easeInOutSine" },
            { id: "eid1679", tween: [ "style", "${_ponta}", "top", '492px', { fromValue: '768px'}], position: 0, duration: 2000, easing: "easeInCubic" },
            { id: "eid2533", tween: [ "style", "${_penpen}", "height", '270px', { fromValue: '270px'}], position: 0, duration: 0 },
            { id: "eid2532", tween: [ "style", "${_ponta}", "width", '239px', { fromValue: '239px'}], position: 0, duration: 0 },
            { id: "eid1676", tween: [ "style", "${_bonnou_fin2}", "left", '0px', { fromValue: '-326px'}], position: 0, duration: 2000, easing: "easeInCubic" },
            { id: "eid1688", tween: [ "style", "${_bonnou_fin2}", "left", '-348px', { fromValue: '0px'}], position: 3000, duration: 1000, easing: "easeInOutSine" }         ]
      }
   }
},
"Symbol_1": {
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
      rect: ['0px','0px','1024px','768px','auto','auto'],
      id: 'kyarakutachoose',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)',[270,[['rgba(67,211,238,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_kyarakutachoose}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["gradient", "background-image", [270,[['rgba(67,211,238,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1024px']
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
"sikispace": {
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
      rect: ['0px','0px','370px','120px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(14,148,14,1.00)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(253,253,253,1.00)','normal','none','normal'],
      type: 'text',
      id: 'kakeruCPCopy',
      text: '×<br>',
      align: 'center',
      rect: ['88px','35px','47px','44px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(253,253,253,1)','normal','none','normal'],
      type: 'text',
      id: 'Text',
      text: '=',
      align: 'center',
      rect: ['217px','37px','47px','37px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_kakeruCPCopy}": [
            ["style", "top", '35px'],
            ["style", "left", '88px'],
            ["color", "color", 'rgba(253,253,253,1)']
         ],
         "${_RoundRect}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(14,148,14,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '370px']
         ],
         "${_Text}": [
            ["style", "top", '37px'],
            ["style", "left", '217px']
         ],
         "${symbolSelector}": [
            ["style", "height", '120px'],
            ["style", "width", '370px']
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
"StageT": {
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
      id: 'StageT',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','1024px','768px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'sikispaceT',
      type: 'rect',
      rect: ['29','324','auto','auto','auto','auto']
   },
   {
      id: 'sikispaceCPT',
      type: 'rect',
      rect: ['29','324','auto','auto','auto','auto']
   },
   {
      font: ['MS Serif, New York, serif',100,'rgba(87,87,87,1.00)','normal','none',''],
      type: 'text',
      id: 'siki1T',
      text: '?',
      align: 'center',
      rect: ['34px','315px','108px','105px','auto','auto']
   },
   {
      font: ['MS Serif, New York, serif',100,'rgba(87,87,87,1.00)','normal','none',''],
      type: 'text',
      id: 'siki2T',
      text: '?',
      align: 'center',
      rect: ['149px','315px','108px','107px','auto','auto']
   },
   {
      font: ['MS Serif, New York, serif',100,'rgba(87,87,87,1.00)','normal','none',''],
      type: 'text',
      id: 'sikiCP2T',
      text: '?',
      align: 'center',
      rect: ['869px','188px','108px','111px','auto','auto']
   },
   {
      font: ['MS Serif, New York, serif',100,'rgba(87,87,87,1.00)','normal','none',''],
      type: 'text',
      id: 'sikiCP1T',
      text: '?',
      align: 'center',
      rect: ['756px','188px','108px','107px','auto','auto']
   },
   {
      id: 'reeetoboxT',
      type: 'rect',
      rect: ['12','18','auto','auto','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(27,1,1,1)','normal','none','normal'],
      type: 'text',
      id: 'CPlateT',
      text: '?倍',
      align: 'right',
      rect: ['234px','34px','95px','33px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(27,1,1,1)','normal','none','normal'],
      type: 'text',
      id: 'lateT',
      text: '?倍',
      align: 'right',
      rect: ['77px','34px','95px','33px','auto','auto']
   },
   {
      id: 'smakoT',
      type: 'image',
      rect: ['806px','541px','230px','230px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/smako.png','0px','0px']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'centerT',
      text: '数',
      align: 'center',
      rect: ['388px','407px','59px','49px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'center2T',
      text: '数',
      align: 'center',
      rect: ['494px','147px','59px','49px','auto','auto']
   },
   {
      id: 'coinCPT',
      type: 'rect',
      rect: ['712','103','auto','auto','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',34,'rgba(27,1,1,1)','normal','none','normal'],
      type: 'text',
      id: 'kakekinnCPtxtT',
      text: '×１',
      align: 'center',
      rect: ['716px','116px','70px','61px','auto','auto']
   },
   {
      id: 'coinT',
      type: 'rect',
      rect: ['230','457','auto','auto','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',34,'rgba(27,1,1,1)','normal','none','normal'],
      type: 'text',
      id: 'kakekinntxtT',
      text: '×１',
      align: 'center',
      rect: ['232px','470px','70px','61px','auto','auto']
   },
   {
      id: 'smakotouchT',
      type: 'rect',
      rect: ['901','549','auto','auto','auto','auto']
   },
   {
      transform: [[0,0],['180'],[],['1','-1.168']],
      id: 'hukidasiT',
      type: 'image',
      rect: ['680px','549px','217px','86px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hukidasi.png','0px','0px']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',18,'rgba(0,0,0,1)','normal','none',''],
      type: 'text',
      id: 'Text2T',
      text: '言葉入れ',
      align: 'center',
      rect: ['710px','562px','169px','27px','auto','auto']
   },
   {
      id: 'pointobarT',
      type: 'rect',
      rect: ['60','299','auto','auto','auto','auto']
   },
   {
      id: 'pointobarCPT',
      type: 'rect',
      rect: ['60','299','auto','auto','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(27,1,1,1)','normal','none','normal'],
      type: 'text',
      id: 'CPpointoT',
      text: '50',
      align: 'center',
      rect: ['924px','101px','26px','41px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(27,1,1,1)','normal','none','normal'],
      type: 'text',
      id: 'pointoT',
      text: '50<br>',
      align: 'center',
      rect: ['133px','499px','75px','41px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(253,253,253,1.00)','normal','none','normal'],
      type: 'text',
      id: 'kakeruT',
      text: '×<br>',
      align: 'center',
      rect: ['489px','186px','47px','44px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(253,253,253,1.00)','normal','none','normal'],
      type: 'text',
      id: 'kakeruCPT',
      text: '×<br>',
      align: 'center',
      rect: ['489px','408px','47px','44px','auto','auto']
   },
   {
      rect: ['543px','108px','130px','200px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      fill: ['rgba(255,255,255,1)'],
      id: 'center2dodaiCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      id: 'kuro1T',
      type: 'image',
      rect: ['543px','110px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump050.png','0px','0px']
   },
   {
      id: 'kuro2T',
      type: 'image',
      rect: ['542px','110px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump046.png','0px','0px']
   },
   {
      id: 'kuro3T',
      type: 'image',
      rect: ['543px','110px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump043.png','0px','0px']
   },
   {
      id: 'kuro4T',
      type: 'image',
      rect: ['543px','110px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump038.png','0px','0px']
   },
   {
      id: 'kuro5T',
      type: 'image',
      rect: ['543px','110px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump035.png','0px','0px']
   },
   {
      id: 'kuro6T',
      type: 'image',
      rect: ['543px','110px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump030.png','0px','0px']
   },
   {
      id: 'kuro7T',
      type: 'image',
      rect: ['540px','109px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump027.png','0px','0px']
   },
   {
      id: 'kuro8T',
      type: 'image',
      rect: ['542px','110px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump022.png','0px','0px']
   },
   {
      rect: ['352px','331px','130px','200px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      fill: ['rgba(255,255,255,1)'],
      id: 'centerdodaiCopyT',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      id: 'kuro9T',
      type: 'image',
      rect: ['542px','110px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump019.png','0px','0px']
   },
   {
      id: 'hato1T',
      type: 'image',
      rect: ['352px','331px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump049.png','0px','0px']
   },
   {
      id: 'hato2T',
      type: 'image',
      rect: ['352px','331px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump048.png','0px','0px']
   },
   {
      id: 'hato3T',
      type: 'image',
      rect: ['352px','331px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump044.png','0px','0px']
   },
   {
      id: 'hato4T',
      type: 'image',
      rect: ['352px','331px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump039.png','0px','0px']
   },
   {
      id: 'hato5T',
      type: 'image',
      rect: ['352px','331px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump034.png','0px','0px']
   },
   {
      id: 'hato6T',
      type: 'image',
      rect: ['352','331','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump031.png','0px','0px']
   },
   {
      id: 'hato7T',
      type: 'image',
      rect: ['352px','331px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump026.png','0px','0px']
   },
   {
      id: 'hato8T',
      type: 'image',
      rect: ['352px','331px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump023.png','0px','0px']
   },
   {
      id: 'hato9T',
      type: 'image',
      rect: ['352px','331px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump018.png','0px','0px']
   },
   {
      type: 'rect',
      id: 'caseT',
      stroke: [3,'rgba(255,255,255,1.00)','solid'],
      rect: ['341px','97px','336px','215px','auto','auto'],
      fill: ['rgba(66,249,249,0.00)']
   },
   {
      type: 'rect',
      id: 'CPcaseT',
      stroke: [3,'rgba(255,255,255,1.00)','solid'],
      rect: ['341px','321px','336px','215px','auto','auto'],
      fill: ['rgba(66,249,249,0.00)']
   },
   {
      rect: ['543px','108px','130px','200px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'center2dodaiT',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['553px','120px','110px','180px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'center2akaT',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   },
   {
      rect: ['352px','331px','130px','200px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'centerdodaiT',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['362px','340px','110px','180px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'centerakaT',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   },
   {
      id: 'CPcard9T',
      type: 'rect',
      rect: ['812','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard9akaT',
      type: 'rect',
      rect: ['859','-118','auto','auto','auto','auto']
   },
   {
      id: 'CPcard8T',
      type: 'rect',
      rect: ['721','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard8akaT',
      type: 'rect',
      rect: ['804','-107','auto','auto','auto','auto']
   },
   {
      id: 'CPcard7T',
      type: 'rect',
      rect: ['620','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard7akaT',
      type: 'rect',
      rect: ['739','-107','auto','auto','auto','auto']
   },
   {
      id: 'CPcard6T',
      type: 'rect',
      rect: ['526','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard6akaT',
      type: 'rect',
      rect: ['672','-107','auto','auto','auto','auto']
   },
   {
      id: 'CPcard5T',
      type: 'rect',
      rect: ['440','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard5akaT',
      type: 'rect',
      rect: ['608','-107','auto','auto','auto','auto']
   },
   {
      id: 'CPcard4T',
      type: 'rect',
      rect: ['339','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard4akaT',
      type: 'rect',
      rect: ['553','-108','auto','auto','auto','auto']
   },
   {
      id: 'CPcard3T',
      type: 'rect',
      rect: ['247','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard3akaT',
      type: 'rect',
      rect: ['488','-108','auto','auto','auto','auto']
   },
   {
      id: 'CPcard2T',
      type: 'rect',
      rect: ['154','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard2akaT',
      type: 'rect',
      rect: ['428','-107','auto','auto','auto','auto']
   },
   {
      id: 'CPcard1T',
      type: 'rect',
      rect: ['63','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard1akaT',
      type: 'rect',
      rect: ['365','-105','auto','auto','auto','auto']
   },
   {
      id: 'card9T',
      type: 'rect',
      rect: ['403','301','auto','auto','auto','auto']
   },
   {
      id: 'card8T',
      type: 'rect',
      rect: ['757','378','auto','auto','auto','auto']
   },
   {
      id: 'card7T',
      type: 'rect',
      rect: ['571','170','auto','auto','auto','auto']
   },
   {
      id: 'card6T',
      type: 'rect',
      rect: ['469','117','auto','auto','auto','auto']
   },
   {
      id: 'card5T',
      type: 'rect',
      rect: ['424','261','auto','auto','auto','auto']
   },
   {
      id: 'card4T',
      type: 'rect',
      rect: ['234','377','auto','auto','auto','auto']
   },
   {
      id: 'card3T',
      type: 'rect',
      rect: ['215','230','auto','auto','auto','auto']
   },
   {
      id: 'card2T',
      type: 'rect',
      rect: ['92','245','auto','auto','auto','auto']
   },
   {
      id: 'card1T',
      type: 'rect',
      rect: ['274','127','auto','auto','auto','auto']
   },
   {
      id: 'drowbuttonT',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['850','242','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'card9coverT',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['559px','549px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card9cover2T',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['812px','344px','59px','87px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card8coverT',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['493px','549px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card8cover2T',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['718px','344px','59px','87px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card7coverT',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['428px','549px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card7cover2T',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['625px','344px','59px','87px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card6coverT',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['360px','547px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card6cover2T',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['531px','344px','58px','86px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card5coverT',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['295px','549px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card5cover2T',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['436px','344px','59px','87px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card4coverT',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['230px','547px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card4cover2T',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['343px','368px','58px','83px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card3coverT',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['165px','547px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card3cover2T',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['248px','344px','59px','86px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card2coverT',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['100px','547px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card2cover2T',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['154px','344px','59px','87px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card1coverT',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['33px','547px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['60px','344px','59px','87px','auto','auto'],
      opacity: 0.33660888671875,
      id: 'card1cover2T',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'okbuttonT',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['819','267','auto','auto','auto','auto']
   },
   {
      id: 'downbuttonT',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['839','697','auto','auto','auto','auto']
   },
   {
      id: 'upbuttonT',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['839','642','auto','auto','auto','auto']
   },
   {
      id: 'kakeOKbuttonT',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['713','641','auto','auto','auto','auto']
   },
   {
      transform: [[0,0],[],['0','20']],
      rect: ['0px','-187px','1024px','570px','auto','auto'],
      id: 'battleCPT',
      stroke: [0,'rgba(0,0,0,1)','solid'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      transform: [[0,0],[],['0','20']],
      rect: ['0px','384px','1024px','570px','auto','auto'],
      id: 'battleT',
      stroke: [0,'rgba(0,0,0,1)','solid'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',200,'rgba(255,237,0,1.00)','700','none','italic'],
      type: 'text',
      id: 'battleTextT',
      text: 'VS',
      textShadow: ['rgba(0,0,0,0.65)',3,3,3],
      rect: ['370px','208px','297px','286px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',140,'rgba(0,0,0,1)','600','none','normal'],
      type: 'text',
      id: 'SystemplusT',
      text: '0<br>',
      align: 'center',
      rect: ['210px','300px','320px','200px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',140,'rgba(0,0,0,1)','600','none','normal'],
      type: 'text',
      id: 'CPsekiT',
      text: '0',
      align: 'center',
      rect: ['400px','1px','320px','200px','auto','auto']
   },
   {
      id: 'bonnou_finT',
      type: 'image',
      rect: ['642px','-26px','437px','315px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bonnou%20fin.png','0px','0px']
   },
   {
      rect: ['-45px','-14px','1057px','570px','auto','auto'],
      opacity: 0.6953125,
      id: 'coverT',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(240,240,240,1.00)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',180,'rgba(241,19,19,1.00)','normal','none','normal'],
      type: 'text',
      id: 'katiT',
      text: '勝ち',
      align: 'center',
      rect: ['154px','129px','668px','321px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',180,'rgba(18,32,241,1.00)','normal','none','normal'],
      type: 'text',
      id: 'makeT',
      text: '負け',
      align: 'center',
      rect: ['154px','129px','668px','321px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',161,'rgba(27,135,8,1.00)','normal','none','normal'],
      type: 'text',
      id: 'hikiwakeT',
      text: '引き分け',
      align: 'center',
      rect: ['154px','129px','668px','321px','auto','auto']
   },
   {
      type: 'rect',
      id: 'endT',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','1024px','768px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['157px','303px','246px','230px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'kyarakariT',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(145,150,159,1.00)']
   },
   {
      rect: ['648px','310px','246px','230px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'kyarakariCPT',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(145,150,159,1.00)']
   },
   {
      font: ['Lucida Sans Unicode, Lucida Grande, sans-serif',100,'rgba(87,87,87,1)','normal','none','normal'],
      type: 'text',
      id: 'CPtennsuuT',
      text: '0<br>',
      align: 'center',
      rect: ['689px','99px','200px','100px','auto','auto']
   },
   {
      font: ['Lucida Sans Unicode, Lucida Grande, sans-serif',100,'rgba(87,87,87,1)','normal','none','normal'],
      type: 'text',
      id: 'tennsuuT',
      text: '0<br>',
      align: 'center',
      rect: ['266px','99px','200px','100px','auto','auto']
   },
   {
      font: ['\'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif',63,'rgba(73,95,215,1.00)','normal','none','normal'],
      type: 'text',
      id: 'endtextCPT',
      text: 'CP<br>',
      align: 'center',
      rect: ['548px','122px','169px','86px','auto','auto']
   },
   {
      font: ['\'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif',63,'rgba(246,20,20,1.00)','normal','none','normal'],
      type: 'text',
      id: 'endtextT',
      text: 'あなた<br>',
      align: 'center',
      rect: ['48px','114px','247px','86px','auto','auto']
   },
   {
      type: 'rect',
      id: 'cardscover2T',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['13px','548px','690px','211px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'cardscoverT',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['11px','515px','690px','253px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   {
      id: 'CPcard5T',
      symbolName: 'CPcard5'
   },
   {
      id: 'CPcard7T',
      symbolName: 'CPcard7'
   },
   {
      id: 'CPcard4T',
      symbolName: 'CPcard4'
   },
   {
      id: 'coinCPT',
      symbolName: 'coinCP'
   },
   {
      id: 'card4T',
      symbolName: 'card4'
   },
   {
      id: 'coinT',
      symbolName: 'coin'
   },
   {
      id: 'CPcard7akaT',
      symbolName: 'CPcard7aka'
   },
   {
      id: 'sikispaceT',
      symbolName: 'sikispace'
   },
   {
      id: 'upbuttonT',
      symbolName: 'upbutton'
   },
   {
      id: 'card2T',
      symbolName: 'card2'
   },
   {
      id: 'CPcard6T',
      symbolName: 'CPcard6'
   },
   {
      id: 'pointobarCPT',
      symbolName: 'pointobar'
   },
   {
      id: 'CPcard4akaT',
      symbolName: 'CPcard4aka'
   },
   {
      id: 'CPcard3akaT',
      symbolName: 'CPcard3aka'
   },
   {
      id: 'CPcard6akaT',
      symbolName: 'CPcard6aka'
   },
   {
      id: 'card7T',
      symbolName: 'card7'
   },
   {
      id: 'pointobarT',
      symbolName: 'pointobar'
   },
   {
      id: 'CPcard9akaT',
      symbolName: 'CPcard9aka'
   },
   {
      id: 'smakotouchT',
      symbolName: 'smakotouch'
   },
   {
      id: 'reeetoboxT',
      symbolName: 'reeetobox'
   },
   {
      id: 'CPcard2T',
      symbolName: 'CPcard2'
   },
   {
      id: 'CPcard3T',
      symbolName: 'CPcard3'
   },
   {
      id: 'card9T',
      symbolName: 'card9'
   },
   {
      id: 'CPcard8akaT',
      symbolName: 'CPcard8aka'
   },
   {
      id: 'kakeOKbuttonT',
      symbolName: 'kakeOKbutton'
   },
   {
      id: 'downbuttonT',
      symbolName: 'downbutton'
   },
   {
      id: 'okbuttonT',
      symbolName: 'okbutton'
   },
   {
      id: 'drowbuttonT',
      symbolName: 'drowbutton'
   },
   {
      id: 'card6T',
      symbolName: 'card6'
   },
   {
      id: 'card3T',
      symbolName: 'card3'
   },
   {
      id: 'CPcard9T',
      symbolName: 'CPcard9'
   },
   {
      id: 'CPcard8T',
      symbolName: 'CPcard8'
   },
   {
      id: 'CPcard2akaT',
      symbolName: 'CPcard2aka'
   },
   {
      id: 'card5T',
      symbolName: 'card5'
   },
   {
      id: 'CPcard5akaT',
      symbolName: 'CPcard5aka'
   },
   {
      id: 'sikispaceCPT',
      symbolName: 'sikispace'
   },
   {
      id: 'card1T',
      symbolName: 'card1'
   },
   {
      id: 'card8T',
      symbolName: 'card8'
   },
   {
      id: 'CPcard1T',
      symbolName: 'CPcard1'
   },
   {
      id: 'CPcard1akaT',
      symbolName: 'CPcard1aka'
   }   ]
   },
   states: {
      "Base State": {
         "${_makeT}": [
            ["style", "top", '186px'],
            ["color", "color", 'rgba(18,32,241,1)'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
            ["style", "left", '184px'],
            ["style", "font-size", '180px']
         ],
         "${_card6coverT}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '360px'],
            ["style", "width", '130px']
         ],
         "${_kakekinnCPtxtT}": [
            ["style", "top", '116px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '34px'],
            ["style", "left", '716px'],
            ["style", "width", '70px']
         ],
         "${_CPcard9T}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '861px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_card6T}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '361px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_StageT}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${_card3coverT}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '165px'],
            ["style", "width", '130px']
         ],
         "${_center2dodaiT}": [
            ["style", "top", '110px'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["style", "left", '543px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '130px']
         ],
         "${_kuro2T}": [
            ["style", "top", '110px'],
            ["style", "height", '200px'],
            ["style", "left", '542px'],
            ["style", "width", '130px']
         ],
         "${_Text2T}": [
            ["style", "top", '562px'],
            ["style", "text-align", 'center'],
            ["style", "left", '710px'],
            ["style", "font-size", '18px']
         ],
         "${_endT}": [
            ["style", "top", '-2px'],
            ["style", "height", '768px']
         ],
         "${_card5cover2T}": [
            ["style", "top", '507px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '295px'],
            ["style", "width", '130px']
         ],
         "${_battleTextT}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,237,0,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '370px'],
            ["style", "font-size", '200px'],
            ["style", "top", '208px'],
            ["style", "width", '339px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "font-style", 'italic'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "text-decoration", 'none'],
            ["style", "opacity", '0']
         ],
         "${_kuro1T}": [
            ["style", "top", '110px'],
            ["style", "height", '200px'],
            ["style", "left", '543px'],
            ["style", "width", '130px']
         ],
         "${_kuro9T}": [
            ["style", "top", '110px'],
            ["style", "height", '200px'],
            ["style", "left", '542px'],
            ["style", "width", '130px']
         ],
         "${_hato5T}": [
            ["style", "top", '331px'],
            ["style", "height", '200px'],
            ["style", "left", '352px'],
            ["style", "width", '130px']
         ],
         "${_card6cover2T}": [
            ["style", "top", '507px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '360px'],
            ["style", "width", '130px']
         ],
         "${_SystemplusT}": [
            ["color", "color", 'rgba(169,35,0,1)'],
            ["style", "opacity", '1'],
            ["style", "left", '113px'],
            ["style", "font-size", '140px'],
            ["style", "top", '764px'],
            ["style", "display", 'block'],
            ["style", "height", '200px'],
            ["style", "width", '320px'],
            ["style", "font-weight", '600']
         ],
         "${_kuro7T}": [
            ["style", "top", '110px'],
            ["style", "height", '200px'],
            ["style", "left", '542px'],
            ["style", "width", '130px']
         ],
         "${_CPcard2T}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '419px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_CPcard4T}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '542px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_CPcard5T}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '597px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_CPcard8T}": [
            ["style", "top", '-117px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '794px']
         ],
         "${_CPcard1T}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '355px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_kakeruT}": [
            ["style", "top", '186px'],
            ["style", "left", '489px'],
            ["color", "color", 'rgba(253,253,253,1)']
         ],
         "${_caseT}": [
            ["style", "top", '97px'],
            ["color", "background-color", 'rgba(66,249,249,0)'],
            ["style", "border-width", '3px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '215px'],
            ["color", "border-color", 'rgb(255, 255, 255)'],
            ["style", "left", '341px'],
            ["style", "width", '336px']
         ],
         "${_CPcard3akaT}": [
            ["style", "left", '485px'],
            ["style", "top", '-118px']
         ],
         "${_cardscoverT}": [
            ["style", "opacity", '0']
         ],
         "${_CPcard3T}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '481px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_card1coverT}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '33px'],
            ["style", "width", '130px']
         ],
         "${_lateT}": [
            ["style", "top", '34px'],
            ["style", "text-align", 'right'],
            ["style", "left", '77px'],
            ["style", "font-size", '24px']
         ],
         "${_card9cover2T}": [
            ["style", "top", '507px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '558px'],
            ["style", "width", '130px']
         ],
         "${_pointobarCPT}": [
            ["style", "left", '810px'],
            ["style", "top", '98px']
         ],
         "${_kakeOKbuttonT}": [
            ["style", "cursor", 'pointer']
         ],
         "${_kuro5T}": [
            ["style", "top", '110px'],
            ["style", "height", '200px'],
            ["style", "left", '543px'],
            ["style", "width", '130px']
         ],
         "${_kakeruCPT}": [
            ["style", "top", '408px'],
            ["style", "left", '489px'],
            ["color", "color", 'rgba(253,253,253,1)']
         ],
         "${_CPsekiT}": [
            ["color", "color", 'rgba(0,32,113,1)'],
            ["style", "opacity", '1'],
            ["style", "left", '571px'],
            ["style", "width", '320px'],
            ["style", "top", '-200px'],
            ["style", "display", 'block'],
            ["style", "height", '200px'],
            ["style", "font-size", '140px'],
            ["style", "font-weight", '600']
         ],
         "${_CPcard6T}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '664px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_siki2T}": [
            ["style", "top", '315px'],
            ["style", "font-size", '100px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(87,87,87,1)'],
            ["style", "height", '107px'],
            ["style", "font-family", '\'MS Serif\', \'New York\', serif'],
            ["style", "left", '149px'],
            ["style", "width", '108px']
         ],
         "${_card9coverT}": [
            ["style", "top", '549px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '559px'],
            ["style", "width", '130px']
         ],
         "${_card8coverT}": [
            ["style", "top", '549px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '493px'],
            ["style", "width", '130px']
         ],
         "${_CPcard8akaT}": [
            ["style", "left", '793px'],
            ["style", "top", '-116px']
         ],
         "${_upbuttonT}": [
            ["style", "cursor", 'pointer']
         ],
         "${_card3cover2T}": [
            ["style", "top", '507px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '165px'],
            ["style", "width", '130px']
         ],
         "${_CPcard6akaT}": [
            ["style", "left", '663px'],
            ["style", "top", '-117px']
         ],
         "${_sikiCP1T}": [
            ["style", "top", '188px'],
            ["style", "font-size", '100px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(87,87,87,1)'],
            ["style", "height", '107px'],
            ["style", "font-family", '\'MS Serif\', \'New York\', serif'],
            ["style", "left", '756px'],
            ["style", "width", '108px']
         ],
         "${_card3T}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '166px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_CPcard5akaT}": [
            ["style", "left", '598px'],
            ["style", "top", '-116px']
         ],
         "${_card4T}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '231px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_katiT}": [
            ["style", "top", '186px'],
            ["color", "color", 'rgba(241,19,19,1)'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
            ["style", "left", '191px'],
            ["style", "font-size", '180px']
         ],
         "${_kakekinntxtT}": [
            ["style", "top", '470px'],
            ["style", "text-align", 'center'],
            ["style", "width", '70px'],
            ["style", "left", '232px'],
            ["style", "font-size", '34px']
         ],
         "${_CPcard1akaT}": [
            ["style", "top", '-116px'],
            ["style", "left", '355px']
         ],
         "${_coverT}": [
            ["color", "background-color", 'rgba(240,240,240,1)'],
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["style", "opacity", '0.6953125'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${_CPcard2akaT}": [
            ["style", "top", '-116px'],
            ["style", "left", '420px']
         ],
         "${_bonnou_finT}": [
            ["style", "height", '315px'],
            ["style", "top", '-26px'],
            ["style", "left", '1665px'],
            ["style", "width", '437px']
         ],
         "${_hato9T}": [
            ["style", "top", '331px'],
            ["style", "height", '200px'],
            ["style", "left", '352px'],
            ["style", "width", '130px']
         ],
         "${_CPtennsuuT}": [
            ["style", "top", '99px'],
            ["style", "height", '100px'],
            ["style", "font-family", '\'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif'],
            ["style", "left", '689px'],
            ["style", "width", '200px']
         ],
         "${_card1cover2T}": [
            ["style", "top", '507px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '33px'],
            ["style", "width", '130px']
         ],
         "${_CPcard7akaT}": [
            ["style", "top", '-116px'],
            ["style", "left", '728px']
         ],
         "${_card1T}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '36px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_centerdodaiCopyT}": [
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '352px'],
            ["style", "width", '130px'],
            ["style", "top", '331px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_hato4T}": [
            ["style", "top", '331px'],
            ["style", "height", '200px'],
            ["style", "left", '352px'],
            ["style", "width", '130px']
         ],
         "${_center2akaT}": [
            ["color", "background-color", 'rgba(238,26,26,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '553px'],
            ["style", "width", '110px'],
            ["style", "top", '120px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '180px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_card5T}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '296px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_card8T}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '493px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_hato1T}": [
            ["style", "top", '331px'],
            ["style", "height", '200px'],
            ["style", "left", '352px'],
            ["style", "width", '130px']
         ],
         "${_cardscover2T}": [
            ["style", "opacity", '0']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_card7coverT}": [
            ["style", "top", '549px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '428px'],
            ["style", "width", '130px']
         ],
         "${_hukidasiT}": [
            ["style", "top", '549px'],
            ["transform", "scaleY", '-1.16824'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '86px'],
            ["style", "left", '680px'],
            ["style", "width", '217px']
         ],
         "${_CPcard4akaT}": [
            ["style", "left", '546px'],
            ["style", "top", '-116px']
         ],
         "${_kuro8T}": [
            ["style", "top", '110px'],
            ["style", "height", '200px'],
            ["style", "left", '542px'],
            ["style", "width", '130px']
         ],
         "${_centerT}": [
            ["style", "top", '407px'],
            ["style", "left", '388px']
         ],
         "${_kuro4T}": [
            ["style", "top", '110px'],
            ["style", "height", '200px'],
            ["style", "left", '543px'],
            ["style", "width", '130px']
         ],
         "${_card2cover2T}": [
            ["style", "top", '507px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '99px'],
            ["style", "width", '130px']
         ],
         "${_card2coverT}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '100px'],
            ["style", "width", '130px']
         ],
         "${_card8cover2T}": [
            ["style", "top", '507px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '493px'],
            ["style", "width", '130px']
         ],
         "${_card9T}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '558px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_hato3T}": [
            ["style", "top", '331px'],
            ["style", "height", '200px'],
            ["style", "left", '352px'],
            ["style", "width", '130px']
         ],
         "${_hato2T}": [
            ["style", "top", '331px'],
            ["style", "height", '200px'],
            ["style", "left", '352px'],
            ["style", "width", '130px']
         ],
         "${_siki1T}": [
            ["style", "top", '315px'],
            ["style", "width", '108px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(87,87,87,1)'],
            ["style", "height", '105px'],
            ["style", "font-family", '\'MS Serif\', \'New York\', serif'],
            ["style", "left", '34px'],
            ["style", "font-size", '100px']
         ],
         "${_center2dodaiCopy3}": [
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '543px'],
            ["style", "width", '130px'],
            ["style", "top", '110px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_card4coverT}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '230px'],
            ["style", "width", '130px']
         ],
         "${_tennsuuT}": [
            ["style", "top", '99px'],
            ["style", "height", '100px'],
            ["style", "font-family", '\'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif'],
            ["style", "left", '266px'],
            ["style", "width", '200px']
         ],
         "${_center2T}": [
            ["style", "top", '177px'],
            ["style", "height", '65px'],
            ["style", "display", 'block'],
            ["style", "left", '560px'],
            ["style", "width", '95px']
         ],
         "${_downbuttonT}": [
            ["style", "cursor", 'pointer']
         ],
         "${_hato7T}": [
            ["style", "top", '331px'],
            ["style", "height", '200px'],
            ["style", "left", '352px'],
            ["style", "width", '130px']
         ],
         "${_card7cover2T}": [
            ["style", "top", '507px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '428px'],
            ["style", "width", '130px']
         ],
         "${_card4cover2T}": [
            ["style", "top", '507px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '230px'],
            ["style", "width", '130px']
         ],
         "${_CPcaseT}": [
            ["style", "top", '321px'],
            ["color", "background-color", 'rgba(66,249,249,0)'],
            ["style", "left", '341px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '215px'],
            ["color", "border-color", 'rgb(255, 255, 255)'],
            ["style", "border-width", '3px'],
            ["style", "width", '336px']
         ],
         "${_hikiwakeT}": [
            ["style", "top", '207px'],
            ["color", "color", 'rgba(27,135,8,1)'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
            ["style", "left", '198px'],
            ["style", "font-size", '161px']
         ],
         "${_endtextCPT}": [
            ["style", "height", '86px'],
            ["style", "top", '122px'],
            ["style", "left", '548px'],
            ["color", "color", 'rgba(73,95,215,1)']
         ],
         "${_kuro3T}": [
            ["style", "top", '110px'],
            ["style", "height", '200px'],
            ["style", "left", '543px'],
            ["style", "width", '130px']
         ],
         "${_pointoT}": [
            ["style", "top", '499px'],
            ["style", "font-size", '26px'],
            ["style", "left", '133px'],
            ["style", "width", '75px']
         ],
         "${_battleCPT}": [
            ["gradient", "background-image", [270,[['rgba(254,254,255,1.00)',0],['rgba(42,92,212,1.00)',100]]]],
            ["style", "left", '1024px'],
            ["style", "width", '1024px'],
            ["style", "top", '-187px'],
            ["transform", "skewY", '20deg'],
            ["style", "height", '570px'],
            ["color", "border-color", 'rgb(255, 255, 255)'],
            ["style", "border-width", '5px'],
            ["style", "border-style", 'solid']
         ],
         "${_kuro6T}": [
            ["style", "top", '110px'],
            ["style", "height", '200px'],
            ["style", "left", '543px'],
            ["style", "width", '130px']
         ],
         "${_centerakaT}": [
            ["color", "background-color", 'rgba(238,26,26,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '362px'],
            ["style", "width", '110px'],
            ["style", "top", '340px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '180px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_pointobarT}": [
            ["style", "left", '33px'],
            ["style", "top", '493px']
         ],
         "${_sikispaceCPT}": [
            ["style", "left", '749px'],
            ["style", "top", '196px']
         ],
         "${_CPpointoT}": [
            ["style", "left", '924px'],
            ["style", "top", '101px']
         ],
         "${_okbuttonT}": [
            ["style", "top", '646px'],
            ["transform", "scaleY", '1.59524'],
            ["transform", "scaleX", '1.42619'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '740px']
         ],
         "${_CPcard7T}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '728px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_smakoT}": [
            ["style", "top", '541px'],
            ["style", "height", '230px'],
            ["style", "left", '806px'],
            ["style", "width", '230px']
         ],
         "${_card5coverT}": [
            ["style", "top", '549px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '295px'],
            ["style", "width", '130px']
         ],
         "${_hato8T}": [
            ["style", "top", '331px'],
            ["style", "height", '200px'],
            ["style", "left", '352px'],
            ["style", "width", '130px']
         ],
         "${_sikiCP2T}": [
            ["style", "top", '188px'],
            ["style", "font-size", '100px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(87,87,87,1)'],
            ["style", "height", '111px'],
            ["style", "font-family", '\'MS Serif\', \'New York\', serif'],
            ["style", "left", '869px'],
            ["style", "width", '108px']
         ],
         "${_centerdodaiT}": [
            ["style", "top", '331px'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["style", "left", '352px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '130px']
         ],
         "${_endtextT}": [
            ["style", "top", '114px'],
            ["color", "color", 'rgba(246,20,20,1)'],
            ["style", "font-size", '63px'],
            ["style", "left", '48px'],
            ["style", "width", '247px']
         ],
         "${_kyarakariT}": [
            ["color", "background-color", 'rgba(145,150,159,1)']
         ],
         "${_CPlateT}": [
            ["style", "top", '34px'],
            ["style", "text-align", 'right'],
            ["style", "left", '234px'],
            ["style", "font-size", '24px']
         ],
         "${_smakotouchT}": [
            ["style", "opacity", '0']
         ],
         "${_kyarakariCPT}": [
            ["style", "top", '310px'],
            ["style", "left", '648px'],
            ["color", "background-color", 'rgba(145,150,159,1)']
         ],
         "${_card2T}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '101px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_hato6T}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
         ],
         "${_drowbuttonT}": [
            ["style", "top", '640px'],
            ["transform", "scaleY", '1.45977'],
            ["transform", "scaleX", '1.84146'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '752px']
         ],
         "${_card7T}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '428px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_battleT}": [
            ["gradient", "background-image", [270,[['rgba(255,126,0,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '-1034px'],
            ["style", "width", '1024px'],
            ["style", "top", '384px'],
            ["transform", "skewY", '20deg'],
            ["style", "height", '570px'],
            ["color", "border-color", 'rgb(250, 250, 250)'],
            ["style", "border-width", '5px'],
            ["style", "border-style", 'solid']
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
"background_cover02": {
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
      rect: ['0px','0px','706px','764px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','solid'],
      id: 'Rectangle2',
      opacity: 0.4,
      type: 'rect',
      fill: ['rgba(249,249,249,1)']
   },
   {
      rect: ['706px','0px','330px','614px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','solid'],
      id: 'Rectangle3',
      opacity: 0.4,
      type: 'rect',
      fill: ['rgba(249,249,249,1)']
   },
   {
      rect: ['878px','614px','158px','180px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','solid'],
      id: 'Rectangle4',
      opacity: 0.4,
      type: 'rect',
      fill: ['rgba(249,249,249,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.4'],
            ["style", "left", '0px'],
            ["style", "height", '764px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '0px'],
            ["style", "width", '706px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '0px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '706px'],
            ["style", "opacity", '0.4'],
            ["style", "border-width", '0px'],
            ["style", "width", '330px']
         ],
         "${_Rectangle4}": [
            ["style", "top", '614px'],
            ["style", "opacity", '0.4'],
            ["style", "left", '878px']
         ],
         "${symbolSelector}": [
            ["style", "height", '794px'],
            ["style", "width", '1036px']
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
"sikispaceCP": {
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
      rect: ['0px','0px','230px','120px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(14,148,14,1)']
   },
   {
      font: ['\'MS Serif\', \'New York\', serif',40,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: '×<br>',
      align: 'center',
      rect: ['104px','37px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '37px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '104px'],
            ["style", "font-size", '40px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '120px'],
            ["style", "left", '0px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '230px']
         ],
         "${symbolSelector}": [
            ["style", "height", '120px'],
            ["style", "width", '230px']
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
"Next": {
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
      rect: ['0px','0px','169px','49px','auto','auto'],
      borderRadius: ['3px 3px','3px 3px','3px 3px','3px 3px'],
      id: 'next_backgroundbox',
      stroke: [3,'rgba(0,0,0,1)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['2px','1px','169px','55px','auto','auto'],
      id: 'next_text',
      text: 'つぎへ',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',40,'rgba(0,0,0,1)','normal','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_next_text}": [
            ["style", "top", '1px'],
            ["style", "text-align", 'center'],
            ["style", "line-height", '56px'],
            ["style", "left", '2px'],
            ["style", "font-size", '40px']
         ],
         "${_next_backgroundbox}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [3,3], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [3,3], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '3px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [3,3], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [3,3], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '56px'],
            ["style", "width", '175px']
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
"hinntobutton": {
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
      rect: ['0px','0px','104px','47px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,217,0,1.00)']
   },
   {
      rect: ['19px','8px','91px','42px','auto','auto'],
      id: 'Text',
      text: 'ヒント<br>',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["color", "background-color", 'rgba(255,217,0,1.00)'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_Text}": [
            ["style", "top", '8px'],
            ["style", "left", '19px']
         ],
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '105px']
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
"kettei": {
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
      rect: ['0px','0px','196px','87px','auto','auto'],
      borderRadius: ['9px 9px','9px 9px','9px 9px','9px 9px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'Rectangle2',
      stroke: [2,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(247,162,0,1.00)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',47,'rgba(0,0,0,1)','normal','none',''],
      type: 'text',
      id: 'Text',
      text: 'けってい',
      align: 'center',
      rect: ['0px','10px','200px','69px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(247,162,0,1.00)'],
            ["style", "border-top-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '196px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "height", '87px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text}": [
            ["style", "top", '10px'],
            ["style", "text-align", 'center'],
            ["style", "height", '69px'],
            ["style", "left", '0px'],
            ["style", "font-size", '47px']
         ],
         "${symbolSelector}": [
            ["style", "height", '91px'],
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
         ]
      }
   }
},
"kaminari": {
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
      rect: ['0px','0px','196px','196px','auto','auto'],
      borderRadius: ['9px 9px','9px 9px','9px 9px','9px 9px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'Rectangle',
      stroke: [2,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)',[270,[['rgba(255,65,65,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
   },
   {
      id: 'kumonchan2',
      type: 'image',
      rect: ['-50px','-34px','300px','300px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/kumonchan22.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "border-top-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["gradient", "background-image", [270,[['rgba(255,65,65,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "border-top-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "height", '196px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "left", '0px']
         ],
         "${_kumonchan2}": [
            ["style", "height", '300px'],
            ["style", "top", '-34px'],
            ["style", "left", '-50px'],
            ["style", "width", '300px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
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
         ]
      }
   }
},
"bonnou": {
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
      rect: ['0px','0px','196px','196px','auto','auto'],
      borderRadius: ['9px 9px','9px 9px','9px 9px','9px 9px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'Rectangle3',
      stroke: [2,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)',[270,[['rgba(96,255,70,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
   },
   {
      id: 'bonnou_fin',
      type: 'image',
      rect: ['15px','9px','170px','170px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bonnou fin2.png','0px','0px']
   },
   {
      id: 'bonnou_fin3',
      type: 'image',
      rect: ['25px','29px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bonnou%20fin.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_bonnou_fin3}": [
            ["style", "height", '150px'],
            ["style", "top", '29px'],
            ["style", "left", '25px'],
            ["style", "width", '150px']
         ],
         "${_Rectangle3}": [
            ["style", "border-top-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["gradient", "background-image", [270,[['rgba(96,255,70,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "border-top-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "height", '196px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_bonnou_fin}": [
            ["style", "height", '170px'],
            ["style", "top", '9px'],
            ["style", "left", '15px'],
            ["style", "width", '170px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
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
         ]
      }
   }
},
"penpen": {
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
      rect: ['0px','0px','196px','196px','auto','auto'],
      borderRadius: ['9px 9px','9px 9px','9px 9px','9px 9px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'Rectangle2',
      stroke: [2,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)',[270,[['rgba(67,255,222,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
   },
   {
      id: 'penpen2',
      type: 'image',
      rect: ['10px','10px','180px','180px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/penpen2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_penpen2}": [
            ["style", "top", '10px'],
            ["style", "height", '180px'],
            ["style", "left", '10px'],
            ["style", "width", '180px']
         ],
         "${_Rectangle2}": [
            ["style", "border-top-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["gradient", "background-image", [270,[['rgba(67,255,222,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '196px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "height", '196px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
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
         ]
      }
   }
},
"smao": {
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
      rect: ['0px','0px','196px','196px','auto','auto'],
      borderRadius: ['9px 9px','9px 9px','9px 9px','9px 9px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'Rectangle',
      stroke: [2,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)',[270,[['rgba(2,96,255,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
   },
   {
      rect: ['-115px','-12px','340px','340px','auto','auto'],
      id: 'smao22',
      type: 'image',
      clip: ['rect(0px 340px 212px 0px)'],
      fill: ['rgba(0,0,0,0)','images/smao.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "border-top-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["gradient", "background-image", [270,[['rgba(2,96,255,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '196px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '196px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_smao22}": [
            ["style", "top", '-12px'],
            ["style", "height", '340px'],
            ["style", "clip", [0,340,212,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-115px'],
            ["style", "width", '340px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
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
         ]
      }
   }
},
"smako": {
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
      rect: ['0px','0px','196px','196px','auto','auto'],
      borderRadius: ['9px 9px','9px 9px','9px 9px','9px 9px'],
      fill: ['rgba(192,192,192,1)',[270,[['rgba(255,152,0,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
      id: 'Rectangle',
      stroke: [2,'rgba(255,255,255,1.00)','solid'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      type: 'image',
      id: 'smako3',
      rect: ['-100px','6px','320px','320px','auto','auto'],
      clip: ['rect(0px 320px 193px 0px)'],
      fill: ['rgba(0,0,0,0)','images/smako.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "border-top-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["gradient", "background-image", [270,[['rgba(255,152,0,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "border-width", '2px'],
            ["style", "width", '196px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '196px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-style", 'solid']
         ],
         "${_smako3}": [
            ["style", "top", '6px'],
            ["style", "height", '320px'],
            ["style", "clip", [0,320,193,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-100px'],
            ["style", "width", '320px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
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
         ]
      }
   }
},
"end_return": {
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
      rect: ['0px','11px','275px','79px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(252,212,6,1.00)']
   },
   {
      rect: ['10px','30px','256px','41px','auto','auto'],
      font: ['\'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif',30,'rgba(16,5,4,1.00)','normal','none','normal'],
      id: 'Text4',
      text: 'もう1どあそぶ',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(252,212,6,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '275px']
         ],
         "${_Text4}": [
            ["style", "top", '30px'],
            ["style", "font-size", '30px'],
            ["color", "color", 'rgba(16,5,4,1.00)'],
            ["style", "height", '41px'],
            ["style", "left", '10px'],
            ["style", "width", '256px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"hinntostage": {
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
      rect: ['0px','0px','960px','700px','auto','auto'],
      borderRadius: ['6px 6px','6px 6px','6px 6px','6px 6px'],
      id: 'hinntostage',
      stroke: [11,'rgba(255,255,255,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',29,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'Text',
      text: '■あいての１ばん大きいカードは　　で１ばん小さいカードは　　<br><br>■あいての最大こうげきポイントは<br><br>■あいては　　　　カードの方が多い。<br><br>■強いカードがのこるように、あいてにぎりぎり勝てるようにカードをえらぼう。<br><br>■勝てそうな時はかけ金を多く、負けそうな時はかけ金を少なくしよう。<br><br>■自分のやまふだ(まん中のカード)があいてよりも小さいときに勝つと、たくさんポイントがもらえるよ。<br><br>',
      type: 'text',
      rect: ['37px','33px','907px','655px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hinntostage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '960px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-width", '11px'],
            ["style", "height", '700px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_Text}": [
            ["style", "top", '33px'],
            ["style", "width", '907px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '655px'],
            ["style", "left", '37px'],
            ["style", "font-size", '29px']
         ],
         "${symbolSelector}": [
            ["style", "height", '722px'],
            ["style", "width", '982px']
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
            { id: "eid1664", tween: [ "style", "${_hinntostage}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }         ]
      }
   }
},
"kamihubukiafter": {
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
      rect: ['0px','0px','700px','768px','auto','auto'],
      fill: ['rgba(251,109,0,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle47',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['155px','-31px','16px','16px','auto','auto'],
      fill: ['rgba(251,109,0,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle46',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['103px','750px','4px','10px','auto','auto'],
      fill: ['rgba(251,109,0,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle45',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['559px','750px','16px','10px','auto','auto'],
      fill: ['rgba(251,109,0,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle44',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['469px','694px','4px','16px','auto','auto'],
      fill: ['rgba(251,109,0,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle43',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['469px','750px','16px','10px','auto','auto'],
      fill: ['rgba(251,109,0,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle42',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['238px','758px','4px','6px','auto','auto'],
      fill: ['rgba(251,109,0,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle41',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['313px','744px','16px','10px','auto','auto'],
      fill: ['rgba(251,109,0,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle40',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['355px','689px','16px','10px','auto','auto'],
      fill: ['rgba(251,109,0,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle39',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['397px','743px','16px','10px','auto','auto'],
      fill: ['rgba(0,251,88,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle38',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['615px','748px','16px','16px','auto','auto'],
      fill: ['rgba(0,50,251,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle37',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['496px','734px','4px','10px','auto','auto'],
      fill: ['rgba(0,50,251,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle34',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['291px','703px','4px','6px','auto','auto'],
      fill: ['rgba(0,50,251,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle36',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['238px','732px','4px','10px','auto','auto'],
      fill: ['rgba(0,50,251,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle33',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['501px','703px','16px','16px','auto','auto'],
      fill: ['rgba(251,0,197,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle32',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['277px','737px','4px','10px','auto','auto'],
      fill: ['rgba(251,0,197,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle31',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['413px','712px','16px','10px','auto','auto'],
      fill: ['rgba(251,0,197,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['102px','727px','16px','10px','auto','auto'],
      fill: ['rgba(235,8,8,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['467px','724px','16px','16px','auto','auto'],
      fill: ['rgba(235,8,8,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['207px','705px','16px','16px','auto','auto'],
      fill: ['rgba(228,65,65,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['578px','727px','16px','6px','auto','auto'],
      fill: ['rgba(228,65,65,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['336px','722px','4px','10px','auto','auto'],
      fill: ['rgba(235,8,8,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['300px','717px','4px','10px','auto','auto'],
      fill: ['rgba(8,64,235,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['396px','727px','4px','10px','auto','auto'],
      fill: ['rgba(8,64,235,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['138px','717px','16px','16px','auto','auto'],
      fill: ['rgba(65,75,228,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle11',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['521px','705px','4px','10px','auto','auto'],
      fill: ['rgba(65,75,228,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle12',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['367px','706px','16px','10px','auto','auto'],
      fill: ['rgba(65,75,228,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle13',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['207px','742px','16px','16px','auto','auto'],
      fill: ['rgba(193,65,228,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle14',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['169px','726px','16px','6px','auto','auto'],
      fill: ['rgba(193,65,228,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle15',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['84px','729px','4px','16px','auto','auto'],
      fill: ['rgba(193,65,228,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle16',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['629px','729px','16px','10px','auto','auto'],
      fill: ['rgba(193,65,228,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle17',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['254px','722px','4px','10px','auto','auto'],
      fill: ['rgba(43,229,57,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle18',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['259px','694px','16px','16px','auto','auto'],
      fill: ['rgba(43,229,57,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle19',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['432px','694px','16px','16px','auto','auto'],
      fill: ['rgba(43,229,57,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle20',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['537px','731px','4px','16px','auto','auto'],
      fill: ['rgba(43,229,57,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle21',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['587px','706px','16px','6px','auto','auto'],
      fill: ['rgba(43,229,57,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle22',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['135px','752px','23px','10px','auto','auto'],
      fill: ['rgba(43,229,57,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle23',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['541px','710px','16px','16px','auto','auto'],
      fill: ['rgba(43,229,57,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle24',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['427px','747px','16px','10px','auto','auto'],
      fill: ['rgba(43,229,57,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle25',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['164px','703px','16px','16px','auto','auto'],
      fill: ['rgba(249,239,6,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle26',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['354px','741px','16px','10px','auto','auto'],
      fill: ['rgba(249,239,6,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle27',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['501px','745px','16px','10px','auto','auto'],
      fill: ['rgba(249,239,6,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle28',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['579px','752px','16px','16px','auto','auto'],
      fill: ['rgba(249,239,6,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle29',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['278px','756px','23px','10px','auto','auto'],
      fill: ['rgba(249,239,6,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle30',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['324px','703px','4px','16px','auto','auto'],
      fill: ['rgba(43,229,57,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle48',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['362px','-29px','16px','6px','auto','auto'],
      fill: ['rgba(0,26,251,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle49',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['259px','-31px','4px','10px','auto','auto'],
      fill: ['rgba(251,0,212,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle50',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['465px','-36px','4px','10px','auto','auto'],
      fill: ['rgba(0,251,203,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle51',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['539px','-31px','16px','10px','auto','auto'],
      fill: ['rgba(251,52,0,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle49}": [
            ["style", "left", '259px'],
            ["style", "top", '-31px']
         ],
         "${_Rectangle39}": [
            ["style", "top", '-46px'],
            ["style", "left", '412px']
         ],
         "${_Rectangle23}": [
            ["style", "top", '-79px'],
            ["style", "left", '556px']
         ],
         "${_Rectangle31}": [
            ["style", "top", '-77px'],
            ["style", "left", '422px']
         ],
         "${_Rectangle27}": [
            ["style", "top", '-42px'],
            ["style", "left", '503px']
         ],
         "${_Rectangle45}": [
            ["style", "top", '-39px'],
            ["style", "left", '574px']
         ],
         "${_Rectangle26}": [
            ["style", "top", '-48px'],
            ["style", "left", '323px']
         ],
         "${_Rectangle44}": [
            ["style", "left", '438px'],
            ["style", "top", '-95px']
         ],
         "${_Rectangle22}": [
            ["style", "top", '-37px'],
            ["style", "left", '104px']
         ],
         "${_Rectangle7}": [
            ["style", "top", '-77px'],
            ["style", "left", '345px']
         ],
         "${_Rectangle19}": [
            ["style", "top", '-93px'],
            ["style", "left", '434px']
         ],
         "${_Rectangle33}": [
            ["style", "top", '-85px'],
            ["style", "left", '510px']
         ],
         "${_Rectangle21}": [
            ["style", "top", '-88px'],
            ["style", "left", '632px']
         ],
         "${_Rectangle20}": [
            ["style", "top", '-58px'],
            ["style", "left", '552px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '-65px'],
            ["style", "left", '436px']
         ],
         "${_Rectangle29}": [
            ["style", "top", '-33px'],
            ["style", "left", '247px']
         ],
         "${_Rectangle14}": [
            ["style", "top", '-61px'],
            ["style", "left", '171px']
         ],
         "${_Rectangle24}": [
            ["style", "top", '-40px'],
            ["style", "left", '429px']
         ],
         "${_Rectangle34}": [
            ["style", "top", '-86px'],
            ["style", "left", '306px']
         ],
         "${_Rectangle41}": [
            ["style", "top", '-45px'],
            ["style", "left", '328px']
         ],
         "${_Rectangle4}": [
            ["style", "top", '-84px'],
            ["style", "left", '216px']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '700px'],
            ["style", "overflow", 'visible']
         ],
         "${_Rectangle51}": [
            ["style", "left", '539px'],
            ["style", "top", '-31px']
         ],
         "${_Rectangle10}": [
            ["style", "top", '-72px'],
            ["style", "left", '107px']
         ],
         "${_Rectangle15}": [
            ["style", "top", '-60px'],
            ["style", "left", '93px']
         ],
         "${_Rectangle38}": [
            ["style", "top", '-41px'],
            ["style", "left", '630px']
         ],
         "${_Rectangle11}": [
            ["style", "top", '-84px'],
            ["style", "left", '530px']
         ],
         "${_Rectangle13}": [
            ["style", "top", '-47px'],
            ["style", "left", '222px']
         ],
         "${_Rectangle18}": [
            ["style", "top", '-95px'],
            ["style", "left", '274px']
         ],
         "${_Rectangle25}": [
            ["style", "top", '-91px'],
            ["style", "left", '209px']
         ],
         "${_Rectangle16}": [
            ["style", "top", '-60px'],
            ["style", "left", '638px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(251,109,0,1.00)'],
            ["style", "height", '768px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '700px']
         ],
         "${_Rectangle43}": [
            ["style", "top", '-40px'],
            ["style", "left", '483px']
         ],
         "${_Rectangle8}": [
            ["style", "top", '-62px'],
            ["style", "left", '411px']
         ],
         "${_Rectangle28}": [
            ["style", "top", '-42px'],
            ["style", "left", '624px']
         ],
         "${_Rectangle17}": [
            ["style", "top", '-72px'],
            ["style", "left", '299px']
         ],
         "${_Rectangle36}": [
            ["style", "left", '240px'],
            ["style", "top", '-55px']
         ],
         "${_Rectangle32}": [
            ["style", "top", '-52px'],
            ["style", "left", '291px']
         ],
         "${_Rectangle12}": [
            ["style", "top", '-88px'],
            ["style", "left", '412px']
         ],
         "${_Rectangle46}": [
            ["style", "top", '-44px'],
            ["style", "left", '148px']
         ],
         "${_Rectangle48}": [
            ["style", "left", '362px'],
            ["style", "top", '-29px']
         ],
         "${_Rectangle6}": [
            ["style", "top", '-67px'],
            ["style", "height", '10px'],
            ["style", "left", '351px'],
            ["style", "width", '4px']
         ],
         "${_Rectangle50}": [
            ["style", "left", '465px'],
            ["style", "top", '-36px']
         ],
         "${_Rectangle42}": [
            ["style", "left", '240px'],
            ["style", "top", '-29px']
         ],
         "${_Rectangle30}": [
            ["style", "top", '-87px'],
            ["style", "left", '339px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '-62px'],
            ["style", "left", '117px'],
            ["style", "height", '10px']
         ],
         "${_Rectangle5}": [
            ["style", "top", '-60px'],
            ["style", "left", '580px']
         ],
         "${_Rectangle40}": [
            ["style", "top", '-105px'],
            ["style", "left", '400px']
         ],
         "${_Rectangle47}": [
            ["style", "top", '-31px'],
            ["style", "left", '155px']
         ],
         "${_Rectangle37}": [
            ["style", "left", '465px'],
            ["style", "top", '-55px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10321.116204308,
         autoPlay: true,
         timeline: [
            { id: "eid1968", tween: [ "style", "${_Rectangle26}", "left", '364px', { fromValue: '323px'}], position: 2335, duration: 1000 },
            { id: "eid1969", tween: [ "style", "${_Rectangle26}", "left", '314px', { fromValue: '364px'}], position: 3335, duration: 1000 },
            { id: "eid1970", tween: [ "style", "${_Rectangle26}", "left", '344px', { fromValue: '314px'}], position: 4335, duration: 1000 },
            { id: "eid1971", tween: [ "style", "${_Rectangle26}", "left", '304px', { fromValue: '344px'}], position: 5335, duration: 1000 },
            { id: "eid1972", tween: [ "style", "${_Rectangle26}", "left", '354px', { fromValue: '304px'}], position: 6335, duration: 1000 },
            { id: "eid2128", tween: [ "style", "${_Rectangle30}", "left", '274px', { fromValue: '339px'}], position: 2168, duration: 1000 },
            { id: "eid2129", tween: [ "style", "${_Rectangle30}", "left", '364px', { fromValue: '274px'}], position: 3168, duration: 1000 },
            { id: "eid2130", tween: [ "style", "${_Rectangle30}", "left", '284px', { fromValue: '364px'}], position: 4168, duration: 1000 },
            { id: "eid2131", tween: [ "style", "${_Rectangle30}", "left", '383px', { fromValue: '284px'}], position: 5168, duration: 1000 },
            { id: "eid2132", tween: [ "style", "${_Rectangle30}", "left", '304px', { fromValue: '383px'}], position: 6168, duration: 1000 },
            { id: "eid2133", tween: [ "style", "${_Rectangle30}", "left", '324px', { fromValue: '304px'}], position: 7168, duration: 500 },
            { id: "eid2176", tween: [ "style", "${_Rectangle32}", "left", '227px', { fromValue: '291px'}], position: 3750, duration: 1000 },
            { id: "eid2177", tween: [ "style", "${_Rectangle32}", "left", '317px', { fromValue: '227px'}], position: 4750, duration: 1000 },
            { id: "eid2178", tween: [ "style", "${_Rectangle32}", "left", '237px', { fromValue: '317px'}], position: 5750, duration: 1000 },
            { id: "eid2179", tween: [ "style", "${_Rectangle32}", "left", '336px', { fromValue: '237px'}], position: 6750, duration: 1000 },
            { id: "eid2180", tween: [ "style", "${_Rectangle32}", "left", '257px', { fromValue: '336px'}], position: 7750, duration: 1000 },
            { id: "eid2181", tween: [ "style", "${_Rectangle32}", "left", '277px', { fromValue: '257px'}], position: 8750, duration: 500 },
            { id: "eid2250", tween: [ "style", "${_Rectangle11}", "top", '87px', { fromValue: '-84px'}], position: 4000, duration: 1000 },
            { id: "eid2251", tween: [ "style", "${_Rectangle11}", "top", '227px', { fromValue: '87px'}], position: 5000, duration: 1000 },
            { id: "eid2252", tween: [ "style", "${_Rectangle11}", "top", '407px', { fromValue: '227px'}], position: 6000, duration: 1000 },
            { id: "eid2253", tween: [ "style", "${_Rectangle11}", "top", '567px', { fromValue: '407px'}], position: 7000, duration: 1000 },
            { id: "eid2254", tween: [ "style", "${_Rectangle11}", "top", '705px', { fromValue: '567px'}], position: 8000, duration: 1000 },
            { id: "eid2158", tween: [ "style", "${_Rectangle13}", "top", '104px', { fromValue: '-47px'}], position: 2105, duration: 1000 },
            { id: "eid2159", tween: [ "style", "${_Rectangle13}", "top", '224px', { fromValue: '104px'}], position: 3105, duration: 1000 },
            { id: "eid2160", tween: [ "style", "${_Rectangle13}", "top", '374px', { fromValue: '224px'}], position: 4105, duration: 1000 },
            { id: "eid2161", tween: [ "style", "${_Rectangle13}", "top", '524px', { fromValue: '374px'}], position: 5105, duration: 1000 },
            { id: "eid2162", tween: [ "style", "${_Rectangle13}", "top", '664px', { fromValue: '524px'}], position: 6105, duration: 1000 },
            { id: "eid2163", tween: [ "style", "${_Rectangle13}", "top", '742px', { fromValue: '664px'}], position: 7105, duration: 500 },
            { id: "eid2200", tween: [ "style", "${_Rectangle38}", "left", '565px', { fromValue: '630px'}], position: 4168, duration: 1000 },
            { id: "eid2201", tween: [ "style", "${_Rectangle38}", "left", '655px', { fromValue: '565px'}], position: 5168, duration: 1000 },
            { id: "eid2202", tween: [ "style", "${_Rectangle38}", "left", '575px', { fromValue: '655px'}], position: 6168, duration: 1000 },
            { id: "eid2203", tween: [ "style", "${_Rectangle38}", "left", '674px', { fromValue: '575px'}], position: 7168, duration: 1000 },
            { id: "eid2204", tween: [ "style", "${_Rectangle38}", "left", '595px', { fromValue: '674px'}], position: 8168, duration: 1000 },
            { id: "eid2205", tween: [ "style", "${_Rectangle38}", "left", '615px', { fromValue: '595px'}], position: 9168, duration: 500 },
            { id: "eid2194", tween: [ "style", "${_Rectangle38}", "top", '110px', { fromValue: '-41px'}], position: 4168, duration: 1000 },
            { id: "eid2195", tween: [ "style", "${_Rectangle38}", "top", '230px', { fromValue: '110px'}], position: 5168, duration: 1000 },
            { id: "eid2196", tween: [ "style", "${_Rectangle38}", "top", '380px', { fromValue: '230px'}], position: 6168, duration: 1000 },
            { id: "eid2197", tween: [ "style", "${_Rectangle38}", "top", '530px', { fromValue: '380px'}], position: 7168, duration: 1000 },
            { id: "eid2198", tween: [ "style", "${_Rectangle38}", "top", '670px', { fromValue: '530px'}], position: 8168, duration: 1000 },
            { id: "eid2199", tween: [ "style", "${_Rectangle38}", "top", '748px', { fromValue: '670px'}], position: 9168, duration: 500 },
            { id: "eid1898", tween: [ "style", "${_Rectangle14}", "left", '139px', { fromValue: '171px'}], position: 1000, duration: 1000 },
            { id: "eid1899", tween: [ "style", "${_Rectangle14}", "left", '209px', { fromValue: '139px'}], position: 2000, duration: 1000 },
            { id: "eid1900", tween: [ "style", "${_Rectangle14}", "left", '129px', { fromValue: '209px'}], position: 3000, duration: 1000 },
            { id: "eid1901", tween: [ "style", "${_Rectangle14}", "left", '209px', { fromValue: '129px'}], position: 4000, duration: 1000 },
            { id: "eid1902", tween: [ "style", "${_Rectangle14}", "left", '139px', { fromValue: '209px'}], position: 5000, duration: 1000 },
            { id: "eid1903", tween: [ "style", "${_Rectangle14}", "left", '169px', { fromValue: '139px'}], position: 6000, duration: 500 },
            { id: "eid2164", tween: [ "style", "${_Rectangle13}", "left", '157px', { fromValue: '222px'}], position: 2105, duration: 1000 },
            { id: "eid2165", tween: [ "style", "${_Rectangle13}", "left", '247px', { fromValue: '157px'}], position: 3105, duration: 1000 },
            { id: "eid2166", tween: [ "style", "${_Rectangle13}", "left", '167px', { fromValue: '247px'}], position: 4105, duration: 1000 },
            { id: "eid2167", tween: [ "style", "${_Rectangle13}", "left", '266px', { fromValue: '167px'}], position: 5105, duration: 1000 },
            { id: "eid2168", tween: [ "style", "${_Rectangle13}", "left", '187px', { fromValue: '266px'}], position: 6105, duration: 1000 },
            { id: "eid2169", tween: [ "style", "${_Rectangle13}", "left", '207px', { fromValue: '187px'}], position: 7105, duration: 500 },
            { id: "eid1886", tween: [ "style", "${_Rectangle24}", "left", '397px', { fromValue: '429px'}], position: 1000, duration: 1000 },
            { id: "eid1887", tween: [ "style", "${_Rectangle24}", "left", '467px', { fromValue: '397px'}], position: 2000, duration: 1000 },
            { id: "eid1888", tween: [ "style", "${_Rectangle24}", "left", '387px', { fromValue: '467px'}], position: 3000, duration: 1000 },
            { id: "eid1889", tween: [ "style", "${_Rectangle24}", "left", '467px', { fromValue: '387px'}], position: 4000, duration: 1000 },
            { id: "eid1890", tween: [ "style", "${_Rectangle24}", "left", '397px', { fromValue: '467px'}], position: 5000, duration: 1000 },
            { id: "eid1891", tween: [ "style", "${_Rectangle24}", "left", '427px', { fromValue: '397px'}], position: 6000, duration: 500 },
            { id: "eid2362", tween: [ "style", "${_Rectangle18}", "top", '56px', { fromValue: '-95px'}], position: 3830, duration: 1000 },
            { id: "eid2363", tween: [ "style", "${_Rectangle18}", "top", '176px', { fromValue: '56px'}], position: 4830, duration: 1000 },
            { id: "eid2364", tween: [ "style", "${_Rectangle18}", "top", '326px', { fromValue: '176px'}], position: 5830, duration: 1000 },
            { id: "eid2365", tween: [ "style", "${_Rectangle18}", "top", '476px', { fromValue: '326px'}], position: 6830, duration: 1000 },
            { id: "eid2366", tween: [ "style", "${_Rectangle18}", "top", '616px', { fromValue: '476px'}], position: 7830, duration: 1000 },
            { id: "eid2367", tween: [ "style", "${_Rectangle18}", "top", '694px', { fromValue: '616px'}], position: 8830, duration: 500 },
            { id: "eid2016", tween: [ "style", "${_Rectangle37}", "top", '76px', { fromValue: '-55px'}], position: 3750, duration: 1000 },
            { id: "eid2017", tween: [ "style", "${_Rectangle37}", "top", '196px', { fromValue: '76px'}], position: 4750, duration: 1000 },
            { id: "eid2018", tween: [ "style", "${_Rectangle37}", "top", '396px', { fromValue: '196px'}], position: 5750, duration: 1000 },
            { id: "eid2019", tween: [ "style", "${_Rectangle37}", "top", '576px', { fromValue: '396px'}], position: 6750, duration: 1000 },
            { id: "eid2020", tween: [ "style", "${_Rectangle37}", "top", '734px', { fromValue: '576px'}], position: 7750, duration: 1000 },
            { id: "eid1934", tween: [ "style", "${_Rectangle36}", "left", '208px', { fromValue: '240px'}], position: 1500, duration: 1000 },
            { id: "eid1935", tween: [ "style", "${_Rectangle36}", "left", '278px', { fromValue: '208px'}], position: 2500, duration: 1000 },
            { id: "eid1936", tween: [ "style", "${_Rectangle36}", "left", '198px', { fromValue: '278px'}], position: 3500, duration: 1000 },
            { id: "eid1937", tween: [ "style", "${_Rectangle36}", "left", '278px', { fromValue: '198px'}], position: 4500, duration: 1000 },
            { id: "eid1938", tween: [ "style", "${_Rectangle36}", "left", '208px', { fromValue: '278px'}], position: 5500, duration: 1000 },
            { id: "eid1939", tween: [ "style", "${_Rectangle36}", "left", '238px', { fromValue: '208px'}], position: 6500, duration: 500 },
            { id: "eid2356", tween: [ "style", "${_Rectangle8}", "left", '346px', { fromValue: '411px'}], position: 0, duration: 1000 },
            { id: "eid2357", tween: [ "style", "${_Rectangle8}", "left", '436px', { fromValue: '346px'}], position: 1000, duration: 1000 },
            { id: "eid2358", tween: [ "style", "${_Rectangle8}", "left", '356px', { fromValue: '436px'}], position: 2000, duration: 1000 },
            { id: "eid2359", tween: [ "style", "${_Rectangle8}", "left", '455px', { fromValue: '356px'}], position: 3000, duration: 1000 },
            { id: "eid2360", tween: [ "style", "${_Rectangle8}", "left", '376px', { fromValue: '455px'}], position: 4000, duration: 1000 },
            { id: "eid2361", tween: [ "style", "${_Rectangle8}", "left", '396px', { fromValue: '376px'}], position: 5000, duration: 500 },
            { id: "eid2006", tween: [ "style", "${_Rectangle3}", "top", '66px', { fromValue: '-65px'}], position: 2000, duration: 1000 },
            { id: "eid2007", tween: [ "style", "${_Rectangle3}", "top", '186px', { fromValue: '66px'}], position: 3000, duration: 1000 },
            { id: "eid2008", tween: [ "style", "${_Rectangle3}", "top", '386px', { fromValue: '186px'}], position: 4000, duration: 1000 },
            { id: "eid2009", tween: [ "style", "${_Rectangle3}", "top", '566px', { fromValue: '386px'}], position: 5000, duration: 1000 },
            { id: "eid2010", tween: [ "style", "${_Rectangle3}", "top", '724px', { fromValue: '566px'}], position: 6000, duration: 1000 },
            { id: "eid1829", tween: [ "style", "${_Rectangle51}", "top", '140px', { fromValue: '-31px'}], position: 0, duration: 1000 },
            { id: "eid1831", tween: [ "style", "${_Rectangle51}", "top", '280px', { fromValue: '140px'}], position: 1000, duration: 1000 },
            { id: "eid1843", tween: [ "style", "${_Rectangle51}", "top", '460px', { fromValue: '280px'}], position: 2000, duration: 1000 },
            { id: "eid1851", tween: [ "style", "${_Rectangle51}", "top", '620px', { fromValue: '460px'}], position: 3000, duration: 1000 },
            { id: "eid1861", tween: [ "style", "${_Rectangle51}", "top", '758px', { fromValue: '620px'}], position: 4000, duration: 1000 },
            { id: "eid2245", tween: [ "style", "${_Rectangle15}", "left", '104px', { fromValue: '93px'}], position: 2750, duration: 1000 },
            { id: "eid2246", tween: [ "style", "${_Rectangle15}", "left", '74px', { fromValue: '104px'}], position: 3750, duration: 1000 },
            { id: "eid2247", tween: [ "style", "${_Rectangle15}", "left", '114px', { fromValue: '74px'}], position: 4750, duration: 1000 },
            { id: "eid2248", tween: [ "style", "${_Rectangle15}", "left", '54px', { fromValue: '114px'}], position: 5750, duration: 1000 },
            { id: "eid2249", tween: [ "style", "${_Rectangle15}", "left", '84px', { fromValue: '54px'}], position: 6750, duration: 1000 },
            { id: "eid1821", tween: [ "style", "${_Rectangle47}", "left", '90px', { fromValue: '155px'}], position: 0, duration: 1000 },
            { id: "eid1838", tween: [ "style", "${_Rectangle47}", "left", '180px', { fromValue: '90px'}], position: 1000, duration: 1000 },
            { id: "eid1840", tween: [ "style", "${_Rectangle47}", "left", '100px', { fromValue: '180px'}], position: 2000, duration: 1000 },
            { id: "eid1858", tween: [ "style", "${_Rectangle47}", "left", '199px', { fromValue: '100px'}], position: 3000, duration: 1000 },
            { id: "eid1868", tween: [ "style", "${_Rectangle47}", "left", '120px', { fromValue: '199px'}], position: 4000, duration: 1000 },
            { id: "eid1870", tween: [ "style", "${_Rectangle47}", "left", '140px', { fromValue: '120px'}], position: 5000, duration: 500 },
            { id: "eid2265", tween: [ "style", "${_Rectangle4}", "left", '227px', { fromValue: '216px'}], position: 4906, duration: 1000 },
            { id: "eid2266", tween: [ "style", "${_Rectangle4}", "left", '197px', { fromValue: '227px'}], position: 5906, duration: 1000 },
            { id: "eid2267", tween: [ "style", "${_Rectangle4}", "left", '237px', { fromValue: '197px'}], position: 6906, duration: 1000 },
            { id: "eid2268", tween: [ "style", "${_Rectangle4}", "left", '177px', { fromValue: '237px'}], position: 7906, duration: 1000 },
            { id: "eid2269", tween: [ "style", "${_Rectangle4}", "left", '207px', { fromValue: '177px'}], position: 8906, duration: 1000 },
            { id: "eid1822", tween: [ "style", "${_Rectangle49}", "left", '300px', { fromValue: '259px'}], position: 0, duration: 1000 },
            { id: "eid1834", tween: [ "style", "${_Rectangle49}", "left", '250px', { fromValue: '300px'}], position: 1000, duration: 1000 },
            { id: "eid1846", tween: [ "style", "${_Rectangle49}", "left", '280px', { fromValue: '250px'}], position: 2000, duration: 1000 },
            { id: "eid1854", tween: [ "style", "${_Rectangle49}", "left", '240px', { fromValue: '280px'}], position: 3000, duration: 1000 },
            { id: "eid1864", tween: [ "style", "${_Rectangle49}", "left", '290px', { fromValue: '240px'}], position: 4000, duration: 1000 },
            { id: "eid2338", tween: [ "style", "${_Rectangle6}", "top", '84px', { fromValue: '-67px'}], position: 3565, duration: 1000 },
            { id: "eid2339", tween: [ "style", "${_Rectangle6}", "top", '204px', { fromValue: '84px'}], position: 4565, duration: 1000 },
            { id: "eid2340", tween: [ "style", "${_Rectangle6}", "top", '354px', { fromValue: '204px'}], position: 5565, duration: 1000 },
            { id: "eid2341", tween: [ "style", "${_Rectangle6}", "top", '504px', { fromValue: '354px'}], position: 6565, duration: 1000 },
            { id: "eid2342", tween: [ "style", "${_Rectangle6}", "top", '644px', { fromValue: '504px'}], position: 7565, duration: 1000 },
            { id: "eid2343", tween: [ "style", "${_Rectangle6}", "top", '722px', { fromValue: '644px'}], position: 8565, duration: 500 },
            { id: "eid2290", tween: [ "style", "${_Rectangle41}", "top", '106px', { fromValue: '-45px'}], position: 3168, duration: 1000 },
            { id: "eid2291", tween: [ "style", "${_Rectangle41}", "top", '226px', { fromValue: '106px'}], position: 4168, duration: 1000 },
            { id: "eid2292", tween: [ "style", "${_Rectangle41}", "top", '376px', { fromValue: '226px'}], position: 5168, duration: 1000 },
            { id: "eid2293", tween: [ "style", "${_Rectangle41}", "top", '526px', { fromValue: '376px'}], position: 6168, duration: 1000 },
            { id: "eid2294", tween: [ "style", "${_Rectangle41}", "top", '666px', { fromValue: '526px'}], position: 7168, duration: 1000 },
            { id: "eid2295", tween: [ "style", "${_Rectangle41}", "top", '744px', { fromValue: '666px'}], position: 8168, duration: 500 },
            { id: "eid2218", tween: [ "style", "${_Rectangle45}", "top", '112px', { fromValue: '-39px'}], position: 4105, duration: 1000 },
            { id: "eid2219", tween: [ "style", "${_Rectangle45}", "top", '232px', { fromValue: '112px'}], position: 5105, duration: 1000 },
            { id: "eid2220", tween: [ "style", "${_Rectangle45}", "top", '382px', { fromValue: '232px'}], position: 6105, duration: 1000 },
            { id: "eid2221", tween: [ "style", "${_Rectangle45}", "top", '532px', { fromValue: '382px'}], position: 7105, duration: 1000 },
            { id: "eid2222", tween: [ "style", "${_Rectangle45}", "top", '672px', { fromValue: '532px'}], position: 8105, duration: 1000 },
            { id: "eid2223", tween: [ "style", "${_Rectangle45}", "top", '750px', { fromValue: '672px'}], position: 9105, duration: 500 },
            { id: "eid2302", tween: [ "style", "${_Rectangle39}", "top", '105px', { fromValue: '-46px'}], position: 3105, duration: 1000 },
            { id: "eid2303", tween: [ "style", "${_Rectangle39}", "top", '225px', { fromValue: '105px'}], position: 4105, duration: 1000 },
            { id: "eid2304", tween: [ "style", "${_Rectangle39}", "top", '375px', { fromValue: '225px'}], position: 5105, duration: 1000 },
            { id: "eid2305", tween: [ "style", "${_Rectangle39}", "top", '525px', { fromValue: '375px'}], position: 6105, duration: 1000 },
            { id: "eid2306", tween: [ "style", "${_Rectangle39}", "top", '665px', { fromValue: '525px'}], position: 7105, duration: 1000 },
            { id: "eid2307", tween: [ "style", "${_Rectangle39}", "top", '743px', { fromValue: '665px'}], position: 8105, duration: 500 },
            { id: "eid1820", tween: [ "style", "${_Rectangle47}", "top", '120px', { fromValue: '-31px'}], position: 0, duration: 1000 },
            { id: "eid1839", tween: [ "style", "${_Rectangle47}", "top", '240px', { fromValue: '120px'}], position: 1000, duration: 1000 },
            { id: "eid1841", tween: [ "style", "${_Rectangle47}", "top", '390px', { fromValue: '240px'}], position: 2000, duration: 1000 },
            { id: "eid1859", tween: [ "style", "${_Rectangle47}", "top", '540px', { fromValue: '390px'}], position: 3000, duration: 1000 },
            { id: "eid1869", tween: [ "style", "${_Rectangle47}", "top", '680px', { fromValue: '540px'}], position: 4000, duration: 1000 },
            { id: "eid1871", tween: [ "style", "${_Rectangle47}", "top", '758px', { fromValue: '680px'}], position: 5000, duration: 500 },
            { id: "eid2224", tween: [ "style", "${_Rectangle45}", "left", '509px', { fromValue: '574px'}], position: 4105, duration: 1000 },
            { id: "eid2225", tween: [ "style", "${_Rectangle45}", "left", '599px', { fromValue: '509px'}], position: 5105, duration: 1000 },
            { id: "eid2226", tween: [ "style", "${_Rectangle45}", "left", '519px', { fromValue: '599px'}], position: 6105, duration: 1000 },
            { id: "eid2227", tween: [ "style", "${_Rectangle45}", "left", '618px', { fromValue: '519px'}], position: 7105, duration: 1000 },
            { id: "eid2228", tween: [ "style", "${_Rectangle45}", "left", '539px', { fromValue: '618px'}], position: 8105, duration: 1000 },
            { id: "eid2229", tween: [ "style", "${_Rectangle45}", "left", '559px', { fromValue: '539px'}], position: 9105, duration: 500 },
            { id: "eid2146", tween: [ "style", "${_Rectangle20}", "top", '93px', { fromValue: '-58px'}], position: 4500, duration: 1000 },
            { id: "eid2147", tween: [ "style", "${_Rectangle20}", "top", '213px', { fromValue: '93px'}], position: 5500, duration: 1000 },
            { id: "eid2148", tween: [ "style", "${_Rectangle20}", "top", '363px', { fromValue: '213px'}], position: 6500, duration: 1000 },
            { id: "eid2149", tween: [ "style", "${_Rectangle20}", "top", '513px', { fromValue: '363px'}], position: 7500, duration: 1000 },
            { id: "eid2150", tween: [ "style", "${_Rectangle20}", "top", '653px', { fromValue: '513px'}], position: 8500, duration: 1000 },
            { id: "eid2151", tween: [ "style", "${_Rectangle20}", "top", '731px', { fromValue: '653px'}], position: 9500, duration: 500 },
            { id: "eid2097", tween: [ "style", "${_Rectangle40}", "left", '375px', { fromValue: '400px'}], position: 4750, duration: 1000 },
            { id: "eid2098", tween: [ "style", "${_Rectangle40}", "left", '405px', { fromValue: '375px'}], position: 5750, duration: 1000 },
            { id: "eid2099", tween: [ "style", "${_Rectangle40}", "left", '365px', { fromValue: '405px'}], position: 6750, duration: 1000 },
            { id: "eid2100", tween: [ "style", "${_Rectangle40}", "left", '415px', { fromValue: '365px'}], position: 7750, duration: 1000 },
            { id: "eid2101", tween: [ "style", "${_Rectangle40}", "left", '355px', { fromValue: '415px'}], position: 8750, duration: 1000 },
            { id: "eid2152", tween: [ "style", "${_Rectangle20}", "left", '487px', { fromValue: '552px'}], position: 4500, duration: 1000 },
            { id: "eid2153", tween: [ "style", "${_Rectangle20}", "left", '577px', { fromValue: '487px'}], position: 5500, duration: 1000 },
            { id: "eid2154", tween: [ "style", "${_Rectangle20}", "left", '497px', { fromValue: '577px'}], position: 6500, duration: 1000 },
            { id: "eid2155", tween: [ "style", "${_Rectangle20}", "left", '596px', { fromValue: '497px'}], position: 7500, duration: 1000 },
            { id: "eid2156", tween: [ "style", "${_Rectangle20}", "left", '517px', { fromValue: '596px'}], position: 8500, duration: 1000 },
            { id: "eid2157", tween: [ "style", "${_Rectangle20}", "left", '537px', { fromValue: '517px'}], position: 9500, duration: 500 },
            { id: "eid1946", tween: [ "style", "${_Rectangle42}", "left", '208px', { fromValue: '240px'}], position: 2750, duration: 1000 },
            { id: "eid1947", tween: [ "style", "${_Rectangle42}", "left", '278px', { fromValue: '208px'}], position: 3750, duration: 1000 },
            { id: "eid1948", tween: [ "style", "${_Rectangle42}", "left", '198px', { fromValue: '278px'}], position: 4750, duration: 1000 },
            { id: "eid1949", tween: [ "style", "${_Rectangle42}", "left", '278px', { fromValue: '198px'}], position: 5750, duration: 1000 },
            { id: "eid1950", tween: [ "style", "${_Rectangle42}", "left", '208px', { fromValue: '278px'}], position: 6750, duration: 1000 },
            { id: "eid1951", tween: [ "style", "${_Rectangle42}", "left", '238px', { fromValue: '208px'}], position: 7750, duration: 500 },
            { id: "eid1958", tween: [ "style", "${_Rectangle29}", "left", '288px', { fromValue: '247px'}], position: 1105, duration: 1000 },
            { id: "eid1959", tween: [ "style", "${_Rectangle29}", "left", '238px', { fromValue: '288px'}], position: 2105, duration: 1000 },
            { id: "eid1960", tween: [ "style", "${_Rectangle29}", "left", '268px', { fromValue: '238px'}], position: 3105, duration: 1000 },
            { id: "eid1961", tween: [ "style", "${_Rectangle29}", "left", '228px', { fromValue: '268px'}], position: 4105, duration: 1000 },
            { id: "eid1962", tween: [ "style", "${_Rectangle29}", "left", '278px', { fromValue: '228px'}], position: 5105, duration: 1000 },
            { id: "eid1826", tween: [ "style", "${_Rectangle50}", "left", '440px', { fromValue: '465px'}], position: 0, duration: 1000 },
            { id: "eid1832", tween: [ "style", "${_Rectangle50}", "left", '470px', { fromValue: '440px'}], position: 1000, duration: 1000 },
            { id: "eid1844", tween: [ "style", "${_Rectangle50}", "left", '430px', { fromValue: '470px'}], position: 2000, duration: 1000 },
            { id: "eid1852", tween: [ "style", "${_Rectangle50}", "left", '480px', { fromValue: '430px'}], position: 3000, duration: 1000 },
            { id: "eid1862", tween: [ "style", "${_Rectangle50}", "left", '420px', { fromValue: '480px'}], position: 4000, duration: 1000 },
            { id: "eid1963", tween: [ "style", "${_Rectangle29}", "top", '98px', { fromValue: '-33px'}], position: 1105, duration: 1000 },
            { id: "eid1964", tween: [ "style", "${_Rectangle29}", "top", '218px', { fromValue: '98px'}], position: 2105, duration: 1000 },
            { id: "eid1965", tween: [ "style", "${_Rectangle29}", "top", '418px', { fromValue: '218px'}], position: 3105, duration: 1000 },
            { id: "eid1966", tween: [ "style", "${_Rectangle29}", "top", '598px', { fromValue: '418px'}], position: 4105, duration: 1000 },
            { id: "eid1967", tween: [ "style", "${_Rectangle29}", "top", '756px', { fromValue: '598px'}], position: 5105, duration: 1000 },
            { id: "eid2031", tween: [ "style", "${_Rectangle28}", "top", '94px', { fromValue: '-42px'}], position: 3565, duration: 1000 },
            { id: "eid2032", tween: [ "style", "${_Rectangle28}", "top", '244px', { fromValue: '94px'}], position: 4565, duration: 1000 },
            { id: "eid2033", tween: [ "style", "${_Rectangle28}", "top", '404px', { fromValue: '244px'}], position: 5565, duration: 1000 },
            { id: "eid2034", tween: [ "style", "${_Rectangle28}", "top", '574px', { fromValue: '404px'}], position: 6565, duration: 1000 },
            { id: "eid2035", tween: [ "style", "${_Rectangle28}", "top", '752px', { fromValue: '574px'}], position: 7565, duration: 1000 },
            { id: "eid2122", tween: [ "style", "${_Rectangle30}", "top", '65px', { fromValue: '-87px'}], position: 2168, duration: 1000 },
            { id: "eid2123", tween: [ "style", "${_Rectangle30}", "top", '185px', { fromValue: '65px'}], position: 3168, duration: 1000 },
            { id: "eid2124", tween: [ "style", "${_Rectangle30}", "top", '335px', { fromValue: '185px'}], position: 4168, duration: 1000 },
            { id: "eid2125", tween: [ "style", "${_Rectangle30}", "top", '485px', { fromValue: '335px'}], position: 5168, duration: 1000 },
            { id: "eid2126", tween: [ "style", "${_Rectangle30}", "top", '625px', { fromValue: '485px'}], position: 6168, duration: 1000 },
            { id: "eid2127", tween: [ "style", "${_Rectangle30}", "top", '703px', { fromValue: '625px'}], position: 7168, duration: 500 },
            { id: "eid1825", tween: [ "style", "${_Rectangle48}", "top", '130px', { fromValue: '-29px'}], position: 0, duration: 1000 },
            { id: "eid1837", tween: [ "style", "${_Rectangle48}", "top", '250px', { fromValue: '130px'}], position: 1000, duration: 1000 },
            { id: "eid1849", tween: [ "style", "${_Rectangle48}", "top", '390px', { fromValue: '250px'}], position: 2000, duration: 1000 },
            { id: "eid1857", tween: [ "style", "${_Rectangle48}", "top", '570px', { fromValue: '390px'}], position: 3000, duration: 1000 },
            { id: "eid1867", tween: [ "style", "${_Rectangle48}", "top", '700px', { fromValue: '570px'}], position: 4000, duration: 1000 },
            { id: "eid1873", tween: [ "style", "${_Rectangle48}", "top", '758px', { fromValue: '700px'}], position: 5000, duration: 500 },
            { id: "eid2082", tween: [ "style", "${_Rectangle7}", "top", '59px', { fromValue: '-77px'}], position: 4500, duration: 1000 },
            { id: "eid2083", tween: [ "style", "${_Rectangle7}", "top", '209px', { fromValue: '59px'}], position: 5500, duration: 1000 },
            { id: "eid2084", tween: [ "style", "${_Rectangle7}", "top", '369px', { fromValue: '209px'}], position: 6500, duration: 1000 },
            { id: "eid2085", tween: [ "style", "${_Rectangle7}", "top", '539px', { fromValue: '369px'}], position: 7500, duration: 1000 },
            { id: "eid2086", tween: [ "style", "${_Rectangle7}", "top", '717px', { fromValue: '539px'}], position: 8500, duration: 1000 },
            { id: "eid2134", tween: [ "style", "${_Rectangle23}", "top", '72px', { fromValue: '-79px'}], position: 3565, duration: 1000 },
            { id: "eid2135", tween: [ "style", "${_Rectangle23}", "top", '192px', { fromValue: '72px'}], position: 4565, duration: 1000 },
            { id: "eid2136", tween: [ "style", "${_Rectangle23}", "top", '342px', { fromValue: '192px'}], position: 5565, duration: 1000 },
            { id: "eid2137", tween: [ "style", "${_Rectangle23}", "top", '492px', { fromValue: '342px'}], position: 6565, duration: 1000 },
            { id: "eid2138", tween: [ "style", "${_Rectangle23}", "top", '632px', { fromValue: '492px'}], position: 7565, duration: 1000 },
            { id: "eid2139", tween: [ "style", "${_Rectangle23}", "top", '710px', { fromValue: '632px'}], position: 8565, duration: 500 },
            { id: "eid1910", tween: [ "style", "${_Rectangle19}", "left", '402px', { fromValue: '434px'}], position: 2335, duration: 1000 },
            { id: "eid1911", tween: [ "style", "${_Rectangle19}", "left", '472px', { fromValue: '402px'}], position: 3335, duration: 1000 },
            { id: "eid1912", tween: [ "style", "${_Rectangle19}", "left", '392px', { fromValue: '472px'}], position: 4335, duration: 1000 },
            { id: "eid1913", tween: [ "style", "${_Rectangle19}", "left", '472px', { fromValue: '392px'}], position: 5335, duration: 1000 },
            { id: "eid1914", tween: [ "style", "${_Rectangle19}", "left", '402px', { fromValue: '472px'}], position: 6335, duration: 1000 },
            { id: "eid1915", tween: [ "style", "${_Rectangle19}", "left", '432px', { fromValue: '402px'}], position: 7335, duration: 500 },
            { id: "eid1940", tween: [ "style", "${_Rectangle36}", "top", '104px', { fromValue: '-55px'}], position: 1500, duration: 1000 },
            { id: "eid1941", tween: [ "style", "${_Rectangle36}", "top", '224px', { fromValue: '104px'}], position: 2500, duration: 1000 },
            { id: "eid1942", tween: [ "style", "${_Rectangle36}", "top", '364px', { fromValue: '224px'}], position: 3500, duration: 1000 },
            { id: "eid1943", tween: [ "style", "${_Rectangle36}", "top", '544px', { fromValue: '364px'}], position: 4500, duration: 1000 },
            { id: "eid1944", tween: [ "style", "${_Rectangle36}", "top", '674px', { fromValue: '544px'}], position: 5500, duration: 1000 },
            { id: "eid1945", tween: [ "style", "${_Rectangle36}", "top", '732px', { fromValue: '674px'}], position: 6500, duration: 500 },
            { id: "eid2255", tween: [ "style", "${_Rectangle11}", "left", '541px', { fromValue: '530px'}], position: 4000, duration: 1000 },
            { id: "eid2256", tween: [ "style", "${_Rectangle11}", "left", '511px', { fromValue: '541px'}], position: 5000, duration: 1000 },
            { id: "eid2257", tween: [ "style", "${_Rectangle11}", "left", '551px', { fromValue: '511px'}], position: 6000, duration: 1000 },
            { id: "eid2258", tween: [ "style", "${_Rectangle11}", "left", '491px', { fromValue: '551px'}], position: 7000, duration: 1000 },
            { id: "eid2259", tween: [ "style", "${_Rectangle11}", "left", '521px', { fromValue: '491px'}], position: 8000, duration: 1000 },
            { id: "eid2275", tween: [ "style", "${_Rectangle33}", "left", '521px', { fromValue: '510px'}], position: 5000, duration: 1000 },
            { id: "eid2276", tween: [ "style", "${_Rectangle33}", "left", '491px', { fromValue: '521px'}], position: 6000, duration: 1000 },
            { id: "eid2277", tween: [ "style", "${_Rectangle33}", "left", '531px', { fromValue: '491px'}], position: 7000, duration: 1000 },
            { id: "eid2278", tween: [ "style", "${_Rectangle33}", "left", '471px', { fromValue: '531px'}], position: 8000, duration: 1000 },
            { id: "eid2279", tween: [ "style", "${_Rectangle33}", "left", '501px', { fromValue: '471px'}], position: 9000, duration: 1000 },
            { id: "eid1996", tween: [ "style", "${_Rectangle10}", "top", '59px', { fromValue: '-72px'}], position: 565, duration: 1000 },
            { id: "eid1997", tween: [ "style", "${_Rectangle10}", "top", '179px', { fromValue: '59px'}], position: 1565, duration: 1000 },
            { id: "eid1998", tween: [ "style", "${_Rectangle10}", "top", '379px', { fromValue: '179px'}], position: 2565, duration: 1000 },
            { id: "eid1999", tween: [ "style", "${_Rectangle10}", "top", '559px', { fromValue: '379px'}], position: 3565, duration: 1000 },
            { id: "eid2000", tween: [ "style", "${_Rectangle10}", "top", '717px', { fromValue: '559px'}], position: 4565, duration: 1000 },
            { id: "eid1874", tween: [ "style", "${_Rectangle27}", "left", '471px', { fromValue: '503px'}], position: 3250, duration: 1000 },
            { id: "eid1875", tween: [ "style", "${_Rectangle27}", "left", '541px', { fromValue: '471px'}], position: 4250, duration: 1000 },
            { id: "eid1876", tween: [ "style", "${_Rectangle27}", "left", '461px', { fromValue: '541px'}], position: 5250, duration: 1000 },
            { id: "eid1877", tween: [ "style", "${_Rectangle27}", "left", '541px', { fromValue: '461px'}], position: 6250, duration: 1000 },
            { id: "eid1878", tween: [ "style", "${_Rectangle27}", "left", '471px', { fromValue: '541px'}], position: 7250, duration: 1000 },
            { id: "eid1879", tween: [ "style", "${_Rectangle27}", "left", '501px', { fromValue: '471px'}], position: 8250, duration: 500 },
            { id: "eid2230", tween: [ "style", "${_Rectangle16}", "top", '111px', { fromValue: '-60px'}], position: 4105, duration: 1000 },
            { id: "eid2231", tween: [ "style", "${_Rectangle16}", "top", '251px', { fromValue: '111px'}], position: 5105, duration: 1000 },
            { id: "eid2232", tween: [ "style", "${_Rectangle16}", "top", '431px', { fromValue: '251px'}], position: 6105, duration: 1000 },
            { id: "eid2233", tween: [ "style", "${_Rectangle16}", "top", '591px', { fromValue: '431px'}], position: 7105, duration: 1000 },
            { id: "eid2234", tween: [ "style", "${_Rectangle16}", "top", '729px', { fromValue: '591px'}], position: 8105, duration: 1000 },
            { id: "eid2296", tween: [ "style", "${_Rectangle41}", "left", '263px', { fromValue: '328px'}], position: 3168, duration: 1000 },
            { id: "eid2297", tween: [ "style", "${_Rectangle41}", "left", '353px', { fromValue: '263px'}], position: 4168, duration: 1000 },
            { id: "eid2298", tween: [ "style", "${_Rectangle41}", "left", '273px', { fromValue: '353px'}], position: 5168, duration: 1000 },
            { id: "eid2299", tween: [ "style", "${_Rectangle41}", "left", '372px', { fromValue: '273px'}], position: 6168, duration: 1000 },
            { id: "eid2300", tween: [ "style", "${_Rectangle41}", "left", '293px', { fromValue: '372px'}], position: 7168, duration: 1000 },
            { id: "eid2301", tween: [ "style", "${_Rectangle41}", "left", '313px', { fromValue: '293px'}], position: 8168, duration: 500 },
            { id: "eid2270", tween: [ "style", "${_Rectangle33}", "top", '85px', { fromValue: '-85px'}], position: 5000, duration: 1000 },
            { id: "eid2271", tween: [ "style", "${_Rectangle33}", "top", '225px', { fromValue: '85px'}], position: 6000, duration: 1000 },
            { id: "eid2272", tween: [ "style", "${_Rectangle33}", "top", '405px', { fromValue: '225px'}], position: 7000, duration: 1000 },
            { id: "eid2273", tween: [ "style", "${_Rectangle33}", "top", '565px', { fromValue: '405px'}], position: 8000, duration: 1000 },
            { id: "eid2274", tween: [ "style", "${_Rectangle33}", "top", '703px', { fromValue: '565px'}], position: 9000, duration: 1000 },
            { id: "eid2001", tween: [ "style", "${_Rectangle3}", "left", '477px', { fromValue: '436px'}], position: 2000, duration: 1000 },
            { id: "eid2002", tween: [ "style", "${_Rectangle3}", "left", '427px', { fromValue: '477px'}], position: 3000, duration: 1000 },
            { id: "eid2003", tween: [ "style", "${_Rectangle3}", "left", '457px', { fromValue: '427px'}], position: 4000, duration: 1000 },
            { id: "eid2004", tween: [ "style", "${_Rectangle3}", "left", '417px', { fromValue: '457px'}], position: 5000, duration: 1000 },
            { id: "eid2005", tween: [ "style", "${_Rectangle3}", "left", '467px', { fromValue: '417px'}], position: 6000, duration: 1000 },
            { id: "eid2042", tween: [ "style", "${_Rectangle25}", "top", '45px', { fromValue: '-91px'}], position: 2906, duration: 1000 },
            { id: "eid2043", tween: [ "style", "${_Rectangle25}", "top", '195px', { fromValue: '45px'}], position: 3906, duration: 1000 },
            { id: "eid2044", tween: [ "style", "${_Rectangle25}", "top", '355px', { fromValue: '195px'}], position: 4906, duration: 1000 },
            { id: "eid2045", tween: [ "style", "${_Rectangle25}", "top", '525px', { fromValue: '355px'}], position: 5906, duration: 1000 },
            { id: "eid2046", tween: [ "style", "${_Rectangle25}", "top", '703px', { fromValue: '525px'}], position: 6906, duration: 1000 },
            { id: "eid2285", tween: [ "style", "${_Rectangle31}", "left", '433px', { fromValue: '422px'}], position: 4250, duration: 1000 },
            { id: "eid2286", tween: [ "style", "${_Rectangle31}", "left", '403px', { fromValue: '433px'}], position: 5250, duration: 1000 },
            { id: "eid2287", tween: [ "style", "${_Rectangle31}", "left", '443px', { fromValue: '403px'}], position: 6250, duration: 1000 },
            { id: "eid2288", tween: [ "style", "${_Rectangle31}", "left", '383px', { fromValue: '443px'}], position: 7250, duration: 1000 },
            { id: "eid2289", tween: [ "style", "${_Rectangle31}", "left", '413px', { fromValue: '383px'}], position: 8250, duration: 1000 },
            { id: "eid2326", tween: [ "style", "${_Rectangle2}", "top", '89px', { fromValue: '-62px'}], position: 4821, duration: 1000 },
            { id: "eid2327", tween: [ "style", "${_Rectangle2}", "top", '209px', { fromValue: '89px'}], position: 5821, duration: 1000 },
            { id: "eid2328", tween: [ "style", "${_Rectangle2}", "top", '359px', { fromValue: '209px'}], position: 6821, duration: 1000 },
            { id: "eid2329", tween: [ "style", "${_Rectangle2}", "top", '509px', { fromValue: '359px'}], position: 7821, duration: 1000 },
            { id: "eid2330", tween: [ "style", "${_Rectangle2}", "top", '649px', { fromValue: '509px'}], position: 8821, duration: 1000 },
            { id: "eid2331", tween: [ "style", "${_Rectangle2}", "top", '727px', { fromValue: '649px'}], position: 9821, duration: 500 },
            { id: "eid2314", tween: [ "style", "${_Rectangle34}", "top", '65px', { fromValue: '-86px'}], position: 4750, duration: 1000 },
            { id: "eid2315", tween: [ "style", "${_Rectangle34}", "top", '185px', { fromValue: '65px'}], position: 5750, duration: 1000 },
            { id: "eid2316", tween: [ "style", "${_Rectangle34}", "top", '335px', { fromValue: '185px'}], position: 6750, duration: 1000 },
            { id: "eid2317", tween: [ "style", "${_Rectangle34}", "top", '485px', { fromValue: '335px'}], position: 7750, duration: 1000 },
            { id: "eid2318", tween: [ "style", "${_Rectangle34}", "top", '625px', { fromValue: '485px'}], position: 8750, duration: 1000 },
            { id: "eid2319", tween: [ "style", "${_Rectangle34}", "top", '703px', { fromValue: '625px'}], position: 9750, duration: 500 },
            { id: "eid2332", tween: [ "style", "${_Rectangle2}", "left", '52px', { fromValue: '117px'}], position: 4821, duration: 1000 },
            { id: "eid2333", tween: [ "style", "${_Rectangle2}", "left", '142px', { fromValue: '52px'}], position: 5821, duration: 1000 },
            { id: "eid2334", tween: [ "style", "${_Rectangle2}", "left", '62px', { fromValue: '142px'}], position: 6821, duration: 1000 },
            { id: "eid2335", tween: [ "style", "${_Rectangle2}", "left", '161px', { fromValue: '62px'}], position: 7821, duration: 1000 },
            { id: "eid2336", tween: [ "style", "${_Rectangle2}", "left", '82px', { fromValue: '161px'}], position: 8821, duration: 1000 },
            { id: "eid2337", tween: [ "style", "${_Rectangle2}", "left", '102px', { fromValue: '82px'}], position: 9821, duration: 500 },
            { id: "eid2011", tween: [ "style", "${_Rectangle37}", "left", '506px', { fromValue: '465px'}], position: 3750, duration: 1000 },
            { id: "eid2012", tween: [ "style", "${_Rectangle37}", "left", '456px', { fromValue: '506px'}], position: 4750, duration: 1000 },
            { id: "eid2013", tween: [ "style", "${_Rectangle37}", "left", '486px', { fromValue: '456px'}], position: 5750, duration: 1000 },
            { id: "eid2014", tween: [ "style", "${_Rectangle37}", "left", '446px', { fromValue: '486px'}], position: 6750, duration: 1000 },
            { id: "eid2015", tween: [ "style", "${_Rectangle37}", "left", '496px', { fromValue: '446px'}], position: 7750, duration: 1000 },
            { id: "eid2077", tween: [ "style", "${_Rectangle12}", "left", '387px', { fromValue: '412px'}], position: 3500, duration: 1000 },
            { id: "eid2078", tween: [ "style", "${_Rectangle12}", "left", '417px', { fromValue: '387px'}], position: 4500, duration: 1000 },
            { id: "eid2079", tween: [ "style", "${_Rectangle12}", "left", '377px', { fromValue: '417px'}], position: 5500, duration: 1000 },
            { id: "eid2080", tween: [ "style", "${_Rectangle12}", "left", '427px', { fromValue: '377px'}], position: 6500, duration: 1000 },
            { id: "eid2081", tween: [ "style", "${_Rectangle12}", "left", '367px', { fromValue: '427px'}], position: 7500, duration: 1000 },
            { id: "eid2087", tween: [ "style", "${_Rectangle7}", "left", '320px', { fromValue: '345px'}], position: 4500, duration: 1000 },
            { id: "eid2088", tween: [ "style", "${_Rectangle7}", "left", '350px', { fromValue: '320px'}], position: 5500, duration: 1000 },
            { id: "eid2089", tween: [ "style", "${_Rectangle7}", "left", '310px', { fromValue: '350px'}], position: 6500, duration: 1000 },
            { id: "eid2090", tween: [ "style", "${_Rectangle7}", "left", '360px', { fromValue: '310px'}], position: 7500, duration: 1000 },
            { id: "eid2091", tween: [ "style", "${_Rectangle7}", "left", '300px', { fromValue: '360px'}], position: 8500, duration: 1000 },
            { id: "eid1922", tween: [ "style", "${_Rectangle5}", "left", '548px', { fromValue: '580px'}], position: 250, duration: 1000 },
            { id: "eid1923", tween: [ "style", "${_Rectangle5}", "left", '618px', { fromValue: '548px'}], position: 1250, duration: 1000 },
            { id: "eid1924", tween: [ "style", "${_Rectangle5}", "left", '538px', { fromValue: '618px'}], position: 2250, duration: 1000 },
            { id: "eid1925", tween: [ "style", "${_Rectangle5}", "left", '618px', { fromValue: '538px'}], position: 3250, duration: 1000 },
            { id: "eid1926", tween: [ "style", "${_Rectangle5}", "left", '548px', { fromValue: '618px'}], position: 4250, duration: 1000 },
            { id: "eid1927", tween: [ "style", "${_Rectangle5}", "left", '578px', { fromValue: '548px'}], position: 5250, duration: 500 },
            { id: "eid2036", tween: [ "style", "${_Rectangle28}", "left", '599px', { fromValue: '624px'}], position: 3565, duration: 1000 },
            { id: "eid2037", tween: [ "style", "${_Rectangle28}", "left", '629px', { fromValue: '599px'}], position: 4565, duration: 1000 },
            { id: "eid2038", tween: [ "style", "${_Rectangle28}", "left", '589px', { fromValue: '629px'}], position: 5565, duration: 1000 },
            { id: "eid2039", tween: [ "style", "${_Rectangle28}", "left", '639px', { fromValue: '589px'}], position: 6565, duration: 1000 },
            { id: "eid2040", tween: [ "style", "${_Rectangle28}", "left", '579px', { fromValue: '639px'}], position: 7565, duration: 1000 },
            { id: "eid2350", tween: [ "style", "${_Rectangle8}", "top", '89px', { fromValue: '-62px'}], position: 0, duration: 1000 },
            { id: "eid2351", tween: [ "style", "${_Rectangle8}", "top", '209px', { fromValue: '89px'}], position: 1000, duration: 1000 },
            { id: "eid2352", tween: [ "style", "${_Rectangle8}", "top", '359px', { fromValue: '209px'}], position: 2000, duration: 1000 },
            { id: "eid2353", tween: [ "style", "${_Rectangle8}", "top", '509px', { fromValue: '359px'}], position: 3000, duration: 1000 },
            { id: "eid2354", tween: [ "style", "${_Rectangle8}", "top", '649px', { fromValue: '509px'}], position: 4000, duration: 1000 },
            { id: "eid2355", tween: [ "style", "${_Rectangle8}", "top", '727px', { fromValue: '649px'}], position: 5000, duration: 500 },
            { id: "eid1916", tween: [ "style", "${_Rectangle19}", "top", '66px', { fromValue: '-93px'}], position: 2335, duration: 1000 },
            { id: "eid1917", tween: [ "style", "${_Rectangle19}", "top", '186px', { fromValue: '66px'}], position: 3335, duration: 1000 },
            { id: "eid1918", tween: [ "style", "${_Rectangle19}", "top", '326px', { fromValue: '186px'}], position: 4335, duration: 1000 },
            { id: "eid1919", tween: [ "style", "${_Rectangle19}", "top", '506px', { fromValue: '326px'}], position: 5335, duration: 1000 },
            { id: "eid1920", tween: [ "style", "${_Rectangle19}", "top", '636px', { fromValue: '506px'}], position: 6335, duration: 1000 },
            { id: "eid1921", tween: [ "style", "${_Rectangle19}", "top", '694px', { fromValue: '636px'}], position: 7335, duration: 500 },
            { id: "eid2240", tween: [ "style", "${_Rectangle15}", "top", '111px', { fromValue: '-60px'}], position: 2750, duration: 1000 },
            { id: "eid2241", tween: [ "style", "${_Rectangle15}", "top", '251px', { fromValue: '111px'}], position: 3750, duration: 1000 },
            { id: "eid2242", tween: [ "style", "${_Rectangle15}", "top", '431px', { fromValue: '251px'}], position: 4750, duration: 1000 },
            { id: "eid2243", tween: [ "style", "${_Rectangle15}", "top", '591px', { fromValue: '431px'}], position: 5750, duration: 1000 },
            { id: "eid2244", tween: [ "style", "${_Rectangle15}", "top", '729px', { fromValue: '591px'}], position: 6750, duration: 1000 },
            { id: "eid2047", tween: [ "style", "${_Rectangle25}", "left", '184px', { fromValue: '209px'}], position: 2906, duration: 1000 },
            { id: "eid2048", tween: [ "style", "${_Rectangle25}", "left", '214px', { fromValue: '184px'}], position: 3906, duration: 1000 },
            { id: "eid2049", tween: [ "style", "${_Rectangle25}", "left", '174px', { fromValue: '214px'}], position: 4906, duration: 1000 },
            { id: "eid2050", tween: [ "style", "${_Rectangle25}", "left", '224px', { fromValue: '174px'}], position: 5906, duration: 1000 },
            { id: "eid2051", tween: [ "style", "${_Rectangle25}", "left", '164px', { fromValue: '224px'}], position: 6906, duration: 1000 },
            { id: "eid2280", tween: [ "style", "${_Rectangle31}", "top", '94px', { fromValue: '-77px'}], position: 4250, duration: 1000 },
            { id: "eid2281", tween: [ "style", "${_Rectangle31}", "top", '234px', { fromValue: '94px'}], position: 5250, duration: 1000 },
            { id: "eid2282", tween: [ "style", "${_Rectangle31}", "top", '414px', { fromValue: '234px'}], position: 6250, duration: 1000 },
            { id: "eid2283", tween: [ "style", "${_Rectangle31}", "top", '574px', { fromValue: '414px'}], position: 7250, duration: 1000 },
            { id: "eid2284", tween: [ "style", "${_Rectangle31}", "top", '712px', { fromValue: '574px'}], position: 8250, duration: 1000 },
            { id: "eid1952", tween: [ "style", "${_Rectangle42}", "top", '130px', { fromValue: '-29px'}], position: 2750, duration: 1000 },
            { id: "eid1953", tween: [ "style", "${_Rectangle42}", "top", '250px', { fromValue: '130px'}], position: 3750, duration: 1000 },
            { id: "eid1954", tween: [ "style", "${_Rectangle42}", "top", '390px', { fromValue: '250px'}], position: 4750, duration: 1000 },
            { id: "eid1955", tween: [ "style", "${_Rectangle42}", "top", '570px', { fromValue: '390px'}], position: 5750, duration: 1000 },
            { id: "eid1956", tween: [ "style", "${_Rectangle42}", "top", '700px', { fromValue: '570px'}], position: 6750, duration: 1000 },
            { id: "eid1957", tween: [ "style", "${_Rectangle42}", "top", '758px', { fromValue: '700px'}], position: 7750, duration: 500 },
            { id: "eid1827", tween: [ "style", "${_Rectangle50}", "top", '100px', { fromValue: '-36px'}], position: 0, duration: 1000 },
            { id: "eid1833", tween: [ "style", "${_Rectangle50}", "top", '250px', { fromValue: '100px'}], position: 1000, duration: 1000 },
            { id: "eid1845", tween: [ "style", "${_Rectangle50}", "top", '410px', { fromValue: '250px'}], position: 2000, duration: 1000 },
            { id: "eid1853", tween: [ "style", "${_Rectangle50}", "top", '580px', { fromValue: '410px'}], position: 3000, duration: 1000 },
            { id: "eid1863", tween: [ "style", "${_Rectangle50}", "top", '758px', { fromValue: '580px'}], position: 4000, duration: 1000 },
            { id: "eid2117", tween: [ "style", "${_Rectangle46}", "left", '123px', { fromValue: '148px'}], position: 2500, duration: 1000 },
            { id: "eid2118", tween: [ "style", "${_Rectangle46}", "left", '153px', { fromValue: '123px'}], position: 3500, duration: 1000 },
            { id: "eid2119", tween: [ "style", "${_Rectangle46}", "left", '113px', { fromValue: '153px'}], position: 4500, duration: 1000 },
            { id: "eid2120", tween: [ "style", "${_Rectangle46}", "left", '163px', { fromValue: '113px'}], position: 5500, duration: 1000 },
            { id: "eid2121", tween: [ "style", "${_Rectangle46}", "left", '103px', { fromValue: '163px'}], position: 6500, duration: 1000 },
            { id: "eid2235", tween: [ "style", "${_Rectangle16}", "left", '649px', { fromValue: '638px'}], position: 4105, duration: 1000 },
            { id: "eid2236", tween: [ "style", "${_Rectangle16}", "left", '619px', { fromValue: '649px'}], position: 5105, duration: 1000 },
            { id: "eid2237", tween: [ "style", "${_Rectangle16}", "left", '659px', { fromValue: '619px'}], position: 6105, duration: 1000 },
            { id: "eid2238", tween: [ "style", "${_Rectangle16}", "left", '599px', { fromValue: '659px'}], position: 7105, duration: 1000 },
            { id: "eid2239", tween: [ "style", "${_Rectangle16}", "left", '629px', { fromValue: '599px'}], position: 8105, duration: 1000 },
            { id: "eid2072", tween: [ "style", "${_Rectangle12}", "top", '48px', { fromValue: '-88px'}], position: 3500, duration: 1000 },
            { id: "eid2073", tween: [ "style", "${_Rectangle12}", "top", '198px', { fromValue: '48px'}], position: 4500, duration: 1000 },
            { id: "eid2074", tween: [ "style", "${_Rectangle12}", "top", '358px', { fromValue: '198px'}], position: 5500, duration: 1000 },
            { id: "eid2075", tween: [ "style", "${_Rectangle12}", "top", '528px', { fromValue: '358px'}], position: 6500, duration: 1000 },
            { id: "eid2076", tween: [ "style", "${_Rectangle12}", "top", '706px', { fromValue: '528px'}], position: 7500, duration: 1000 },
            { id: "eid2067", tween: [ "style", "${_Rectangle17}", "left", '274px', { fromValue: '299px'}], position: 500, duration: 1000 },
            { id: "eid2068", tween: [ "style", "${_Rectangle17}", "left", '304px', { fromValue: '274px'}], position: 1500, duration: 1000 },
            { id: "eid2069", tween: [ "style", "${_Rectangle17}", "left", '264px', { fromValue: '304px'}], position: 2500, duration: 1000 },
            { id: "eid2070", tween: [ "style", "${_Rectangle17}", "left", '314px', { fromValue: '264px'}], position: 3500, duration: 1000 },
            { id: "eid2071", tween: [ "style", "${_Rectangle17}", "left", '254px', { fromValue: '314px'}], position: 4500, duration: 1000 },
            { id: "eid1978", tween: [ "style", "${_Rectangle22}", "left", '145px', { fromValue: '104px'}], position: 3168, duration: 1000 },
            { id: "eid1979", tween: [ "style", "${_Rectangle22}", "left", '95px', { fromValue: '145px'}], position: 4168, duration: 1000 },
            { id: "eid1980", tween: [ "style", "${_Rectangle22}", "left", '125px', { fromValue: '95px'}], position: 5168, duration: 1000 },
            { id: "eid1981", tween: [ "style", "${_Rectangle22}", "left", '85px', { fromValue: '125px'}], position: 6168, duration: 1000 },
            { id: "eid1982", tween: [ "style", "${_Rectangle22}", "left", '135px', { fromValue: '85px'}], position: 7168, duration: 1000 },
            { id: "eid2052", tween: [ "style", "${_Rectangle21}", "top", '48px', { fromValue: '-88px'}], position: 1335, duration: 1000 },
            { id: "eid2053", tween: [ "style", "${_Rectangle21}", "top", '198px', { fromValue: '48px'}], position: 2335, duration: 1000 },
            { id: "eid2054", tween: [ "style", "${_Rectangle21}", "top", '358px', { fromValue: '198px'}], position: 3335, duration: 1000 },
            { id: "eid2055", tween: [ "style", "${_Rectangle21}", "top", '528px', { fromValue: '358px'}], position: 4335, duration: 1000 },
            { id: "eid2056", tween: [ "style", "${_Rectangle21}", "top", '706px', { fromValue: '528px'}], position: 5335, duration: 1000 },
            { id: "eid2021", tween: [ "style", "${_Rectangle44}", "left", '479px', { fromValue: '438px'}], position: 1168, duration: 1000 },
            { id: "eid2022", tween: [ "style", "${_Rectangle44}", "left", '429px', { fromValue: '479px'}], position: 2168, duration: 1000 },
            { id: "eid2023", tween: [ "style", "${_Rectangle44}", "left", '459px', { fromValue: '429px'}], position: 3168, duration: 1000 },
            { id: "eid2024", tween: [ "style", "${_Rectangle44}", "left", '419px', { fromValue: '459px'}], position: 4168, duration: 1000 },
            { id: "eid2025", tween: [ "style", "${_Rectangle44}", "left", '469px', { fromValue: '419px'}], position: 5168, duration: 1000 },
            { id: "eid2092", tween: [ "style", "${_Rectangle40}", "top", '31px', { fromValue: '-105px'}], position: 4750, duration: 1000 },
            { id: "eid2093", tween: [ "style", "${_Rectangle40}", "top", '181px', { fromValue: '31px'}], position: 5750, duration: 1000 },
            { id: "eid2094", tween: [ "style", "${_Rectangle40}", "top", '341px', { fromValue: '181px'}], position: 6750, duration: 1000 },
            { id: "eid2095", tween: [ "style", "${_Rectangle40}", "top", '511px', { fromValue: '341px'}], position: 7750, duration: 1000 },
            { id: "eid2096", tween: [ "style", "${_Rectangle40}", "top", '689px', { fromValue: '511px'}], position: 8750, duration: 1000 },
            { id: "eid1983", tween: [ "style", "${_Rectangle22}", "top", '94px', { fromValue: '-37px'}], position: 3168, duration: 1000 },
            { id: "eid1984", tween: [ "style", "${_Rectangle22}", "top", '214px', { fromValue: '94px'}], position: 4168, duration: 1000 },
            { id: "eid1985", tween: [ "style", "${_Rectangle22}", "top", '414px', { fromValue: '214px'}], position: 5168, duration: 1000 },
            { id: "eid1986", tween: [ "style", "${_Rectangle22}", "top", '594px', { fromValue: '414px'}], position: 6168, duration: 1000 },
            { id: "eid1987", tween: [ "style", "${_Rectangle22}", "top", '752px', { fromValue: '594px'}], position: 7168, duration: 1000 },
            { id: "eid2308", tween: [ "style", "${_Rectangle39}", "left", '347px', { fromValue: '412px'}], position: 3105, duration: 1000 },
            { id: "eid2309", tween: [ "style", "${_Rectangle39}", "left", '437px', { fromValue: '347px'}], position: 4105, duration: 1000 },
            { id: "eid2310", tween: [ "style", "${_Rectangle39}", "left", '357px', { fromValue: '437px'}], position: 5105, duration: 1000 },
            { id: "eid2311", tween: [ "style", "${_Rectangle39}", "left", '456px', { fromValue: '357px'}], position: 6105, duration: 1000 },
            { id: "eid2312", tween: [ "style", "${_Rectangle39}", "left", '377px', { fromValue: '456px'}], position: 7105, duration: 1000 },
            { id: "eid2313", tween: [ "style", "${_Rectangle39}", "left", '397px', { fromValue: '377px'}], position: 8105, duration: 500 },
            { id: "eid1973", tween: [ "style", "${_Rectangle26}", "top", '83px', { fromValue: '-48px'}], position: 2335, duration: 1000 },
            { id: "eid1974", tween: [ "style", "${_Rectangle26}", "top", '203px', { fromValue: '83px'}], position: 3335, duration: 1000 },
            { id: "eid1975", tween: [ "style", "${_Rectangle26}", "top", '403px', { fromValue: '203px'}], position: 4335, duration: 1000 },
            { id: "eid1976", tween: [ "style", "${_Rectangle26}", "top", '583px', { fromValue: '403px'}], position: 5335, duration: 1000 },
            { id: "eid1977", tween: [ "style", "${_Rectangle26}", "top", '741px', { fromValue: '583px'}], position: 6335, duration: 1000 },
            { id: "eid1892", tween: [ "style", "${_Rectangle24}", "top", '119px', { fromValue: '-40px'}], position: 1000, duration: 1000 },
            { id: "eid1893", tween: [ "style", "${_Rectangle24}", "top", '239px', { fromValue: '119px'}], position: 2000, duration: 1000 },
            { id: "eid1894", tween: [ "style", "${_Rectangle24}", "top", '379px', { fromValue: '239px'}], position: 3000, duration: 1000 },
            { id: "eid1895", tween: [ "style", "${_Rectangle24}", "top", '559px', { fromValue: '379px'}], position: 4000, duration: 1000 },
            { id: "eid1896", tween: [ "style", "${_Rectangle24}", "top", '689px', { fromValue: '559px'}], position: 5000, duration: 1000 },
            { id: "eid1897", tween: [ "style", "${_Rectangle24}", "top", '747px', { fromValue: '689px'}], position: 6000, duration: 500 },
            { id: "eid1991", tween: [ "style", "${_Rectangle10}", "left", '148px', { fromValue: '107px'}], position: 565, duration: 1000 },
            { id: "eid1992", tween: [ "style", "${_Rectangle10}", "left", '98px', { fromValue: '148px'}], position: 1565, duration: 1000 },
            { id: "eid1993", tween: [ "style", "${_Rectangle10}", "left", '128px', { fromValue: '98px'}], position: 2565, duration: 1000 },
            { id: "eid1994", tween: [ "style", "${_Rectangle10}", "left", '88px', { fromValue: '128px'}], position: 3565, duration: 1000 },
            { id: "eid1995", tween: [ "style", "${_Rectangle10}", "left", '138px', { fromValue: '88px'}], position: 4565, duration: 1000 },
            { id: "eid2170", tween: [ "style", "${_Rectangle32}", "top", '99px', { fromValue: '-52px'}], position: 3750, duration: 1000 },
            { id: "eid2171", tween: [ "style", "${_Rectangle32}", "top", '219px', { fromValue: '99px'}], position: 4750, duration: 1000 },
            { id: "eid2172", tween: [ "style", "${_Rectangle32}", "top", '369px', { fromValue: '219px'}], position: 5750, duration: 1000 },
            { id: "eid2173", tween: [ "style", "${_Rectangle32}", "top", '519px', { fromValue: '369px'}], position: 6750, duration: 1000 },
            { id: "eid2174", tween: [ "style", "${_Rectangle32}", "top", '659px', { fromValue: '519px'}], position: 7750, duration: 1000 },
            { id: "eid2175", tween: [ "style", "${_Rectangle32}", "top", '737px', { fromValue: '659px'}], position: 8750, duration: 500 },
            { id: "eid2140", tween: [ "style", "${_Rectangle23}", "left", '491px', { fromValue: '556px'}], position: 3565, duration: 1000 },
            { id: "eid2141", tween: [ "style", "${_Rectangle23}", "left", '581px', { fromValue: '491px'}], position: 4565, duration: 1000 },
            { id: "eid2142", tween: [ "style", "${_Rectangle23}", "left", '501px', { fromValue: '581px'}], position: 5565, duration: 1000 },
            { id: "eid2143", tween: [ "style", "${_Rectangle23}", "left", '600px', { fromValue: '501px'}], position: 6565, duration: 1000 },
            { id: "eid2144", tween: [ "style", "${_Rectangle23}", "left", '521px', { fromValue: '600px'}], position: 7565, duration: 1000 },
            { id: "eid2145", tween: [ "style", "${_Rectangle23}", "left", '541px', { fromValue: '521px'}], position: 8565, duration: 500 },
            { id: "eid2112", tween: [ "style", "${_Rectangle46}", "top", '92px', { fromValue: '-44px'}], position: 2500, duration: 1000 },
            { id: "eid2113", tween: [ "style", "${_Rectangle46}", "top", '242px', { fromValue: '92px'}], position: 3500, duration: 1000 },
            { id: "eid2114", tween: [ "style", "${_Rectangle46}", "top", '402px', { fromValue: '242px'}], position: 4500, duration: 1000 },
            { id: "eid2115", tween: [ "style", "${_Rectangle46}", "top", '572px', { fromValue: '402px'}], position: 5500, duration: 1000 },
            { id: "eid2116", tween: [ "style", "${_Rectangle46}", "top", '750px', { fromValue: '572px'}], position: 6500, duration: 1000 },
            { id: "eid2344", tween: [ "style", "${_Rectangle6}", "left", '286px', { fromValue: '351px'}], position: 3565, duration: 1000 },
            { id: "eid2345", tween: [ "style", "${_Rectangle6}", "left", '376px', { fromValue: '286px'}], position: 4565, duration: 1000 },
            { id: "eid2346", tween: [ "style", "${_Rectangle6}", "left", '296px', { fromValue: '376px'}], position: 5565, duration: 1000 },
            { id: "eid2347", tween: [ "style", "${_Rectangle6}", "left", '395px', { fromValue: '296px'}], position: 6565, duration: 1000 },
            { id: "eid2348", tween: [ "style", "${_Rectangle6}", "left", '316px', { fromValue: '395px'}], position: 7565, duration: 1000 },
            { id: "eid2349", tween: [ "style", "${_Rectangle6}", "left", '336px', { fromValue: '316px'}], position: 8565, duration: 500 },
            { id: "eid2206", tween: [ "style", "${_Rectangle43}", "top", '112px', { fromValue: '-40px'}], position: 406, duration: 1000 },
            { id: "eid2207", tween: [ "style", "${_Rectangle43}", "top", '232px', { fromValue: '112px'}], position: 1406, duration: 1000 },
            { id: "eid2208", tween: [ "style", "${_Rectangle43}", "top", '382px', { fromValue: '232px'}], position: 2406, duration: 1000 },
            { id: "eid2209", tween: [ "style", "${_Rectangle43}", "top", '532px', { fromValue: '382px'}], position: 3406, duration: 1000 },
            { id: "eid2210", tween: [ "style", "${_Rectangle43}", "top", '672px', { fromValue: '532px'}], position: 4406, duration: 1000 },
            { id: "eid2211", tween: [ "style", "${_Rectangle43}", "top", '750px', { fromValue: '672px'}], position: 5406, duration: 500 },
            { id: "eid1824", tween: [ "style", "${_Rectangle48}", "left", '330px', { fromValue: '362px'}], position: 0, duration: 1000 },
            { id: "eid1836", tween: [ "style", "${_Rectangle48}", "left", '400px', { fromValue: '330px'}], position: 1000, duration: 1000 },
            { id: "eid1848", tween: [ "style", "${_Rectangle48}", "left", '320px', { fromValue: '400px'}], position: 2000, duration: 1000 },
            { id: "eid1856", tween: [ "style", "${_Rectangle48}", "left", '400px', { fromValue: '320px'}], position: 3000, duration: 1000 },
            { id: "eid1866", tween: [ "style", "${_Rectangle48}", "left", '330px', { fromValue: '400px'}], position: 4000, duration: 1000 },
            { id: "eid1872", tween: [ "style", "${_Rectangle48}", "left", '360px', { fromValue: '330px'}], position: 5000, duration: 500 },
            { id: "eid1904", tween: [ "style", "${_Rectangle14}", "top", '98px', { fromValue: '-61px'}], position: 1000, duration: 1000 },
            { id: "eid1905", tween: [ "style", "${_Rectangle14}", "top", '218px', { fromValue: '98px'}], position: 2000, duration: 1000 },
            { id: "eid1906", tween: [ "style", "${_Rectangle14}", "top", '358px', { fromValue: '218px'}], position: 3000, duration: 1000 },
            { id: "eid1907", tween: [ "style", "${_Rectangle14}", "top", '538px', { fromValue: '358px'}], position: 4000, duration: 1000 },
            { id: "eid1908", tween: [ "style", "${_Rectangle14}", "top", '668px', { fromValue: '538px'}], position: 5000, duration: 1000 },
            { id: "eid1909", tween: [ "style", "${_Rectangle14}", "top", '726px', { fromValue: '668px'}], position: 6000, duration: 500 },
            { id: "eid2260", tween: [ "style", "${_Rectangle4}", "top", '87px', { fromValue: '-84px'}], position: 4906, duration: 1000 },
            { id: "eid2261", tween: [ "style", "${_Rectangle4}", "top", '227px', { fromValue: '87px'}], position: 5906, duration: 1000 },
            { id: "eid2262", tween: [ "style", "${_Rectangle4}", "top", '407px', { fromValue: '227px'}], position: 6906, duration: 1000 },
            { id: "eid2263", tween: [ "style", "${_Rectangle4}", "top", '567px', { fromValue: '407px'}], position: 7906, duration: 1000 },
            { id: "eid2264", tween: [ "style", "${_Rectangle4}", "top", '705px', { fromValue: '567px'}], position: 8906, duration: 1000 },
            { id: "eid2368", tween: [ "style", "${_Rectangle18}", "left", '209px', { fromValue: '274px'}], position: 3830, duration: 1000 },
            { id: "eid2369", tween: [ "style", "${_Rectangle18}", "left", '299px', { fromValue: '209px'}], position: 4830, duration: 1000 },
            { id: "eid2370", tween: [ "style", "${_Rectangle18}", "left", '219px', { fromValue: '299px'}], position: 5830, duration: 1000 },
            { id: "eid2371", tween: [ "style", "${_Rectangle18}", "left", '318px', { fromValue: '219px'}], position: 6830, duration: 1000 },
            { id: "eid2372", tween: [ "style", "${_Rectangle18}", "left", '239px', { fromValue: '318px'}], position: 7830, duration: 1000 },
            { id: "eid2373", tween: [ "style", "${_Rectangle18}", "left", '259px', { fromValue: '239px'}], position: 8830, duration: 500 },
            { id: "eid1823", tween: [ "style", "${_Rectangle49}", "top", '100px', { fromValue: '-31px'}], position: 0, duration: 1000 },
            { id: "eid1835", tween: [ "style", "${_Rectangle49}", "top", '220px', { fromValue: '100px'}], position: 1000, duration: 1000 },
            { id: "eid1847", tween: [ "style", "${_Rectangle49}", "top", '420px', { fromValue: '220px'}], position: 2000, duration: 1000 },
            { id: "eid1855", tween: [ "style", "${_Rectangle49}", "top", '600px', { fromValue: '420px'}], position: 3000, duration: 1000 },
            { id: "eid1865", tween: [ "style", "${_Rectangle49}", "top", '758px', { fromValue: '600px'}], position: 4000, duration: 1000 },
            { id: "eid2212", tween: [ "style", "${_Rectangle43}", "left", '419px', { fromValue: '483px'}], position: 406, duration: 1000 },
            { id: "eid2213", tween: [ "style", "${_Rectangle43}", "left", '509px', { fromValue: '419px'}], position: 1406, duration: 1000 },
            { id: "eid2214", tween: [ "style", "${_Rectangle43}", "left", '429px', { fromValue: '509px'}], position: 2406, duration: 1000 },
            { id: "eid2215", tween: [ "style", "${_Rectangle43}", "left", '528px', { fromValue: '429px'}], position: 3406, duration: 1000 },
            { id: "eid2216", tween: [ "style", "${_Rectangle43}", "left", '449px', { fromValue: '528px'}], position: 4406, duration: 1000 },
            { id: "eid2217", tween: [ "style", "${_Rectangle43}", "left", '469px', { fromValue: '449px'}], position: 5406, duration: 500 },
            { id: "eid1880", tween: [ "style", "${_Rectangle27}", "top", '117px', { fromValue: '-42px'}], position: 3250, duration: 1000 },
            { id: "eid1881", tween: [ "style", "${_Rectangle27}", "top", '237px', { fromValue: '117px'}], position: 4250, duration: 1000 },
            { id: "eid1882", tween: [ "style", "${_Rectangle27}", "top", '377px', { fromValue: '237px'}], position: 5250, duration: 1000 },
            { id: "eid1883", tween: [ "style", "${_Rectangle27}", "top", '557px', { fromValue: '377px'}], position: 6250, duration: 1000 },
            { id: "eid1884", tween: [ "style", "${_Rectangle27}", "top", '687px', { fromValue: '557px'}], position: 7250, duration: 1000 },
            { id: "eid1885", tween: [ "style", "${_Rectangle27}", "top", '745px', { fromValue: '687px'}], position: 8250, duration: 500 },
            { id: "eid1928", tween: [ "style", "${_Rectangle5}", "top", '99px', { fromValue: '-60px'}], position: 250, duration: 1000 },
            { id: "eid1929", tween: [ "style", "${_Rectangle5}", "top", '219px', { fromValue: '99px'}], position: 1250, duration: 1000 },
            { id: "eid1930", tween: [ "style", "${_Rectangle5}", "top", '359px', { fromValue: '219px'}], position: 2250, duration: 1000 },
            { id: "eid1931", tween: [ "style", "${_Rectangle5}", "top", '539px', { fromValue: '359px'}], position: 3250, duration: 1000 },
            { id: "eid1932", tween: [ "style", "${_Rectangle5}", "top", '669px', { fromValue: '539px'}], position: 4250, duration: 1000 },
            { id: "eid1933", tween: [ "style", "${_Rectangle5}", "top", '727px', { fromValue: '669px'}], position: 5250, duration: 500 },
            { id: "eid2026", tween: [ "style", "${_Rectangle44}", "top", '36px', { fromValue: '-95px'}], position: 1168, duration: 1000 },
            { id: "eid2027", tween: [ "style", "${_Rectangle44}", "top", '156px', { fromValue: '36px'}], position: 2168, duration: 1000 },
            { id: "eid2028", tween: [ "style", "${_Rectangle44}", "top", '356px', { fromValue: '156px'}], position: 3168, duration: 1000 },
            { id: "eid2029", tween: [ "style", "${_Rectangle44}", "top", '536px', { fromValue: '356px'}], position: 4168, duration: 1000 },
            { id: "eid2030", tween: [ "style", "${_Rectangle44}", "top", '694px', { fromValue: '536px'}], position: 5168, duration: 1000 },
            { id: "eid2062", tween: [ "style", "${_Rectangle17}", "top", '64px', { fromValue: '-72px'}], position: 500, duration: 1000 },
            { id: "eid2063", tween: [ "style", "${_Rectangle17}", "top", '214px', { fromValue: '64px'}], position: 1500, duration: 1000 },
            { id: "eid2064", tween: [ "style", "${_Rectangle17}", "top", '374px', { fromValue: '214px'}], position: 2500, duration: 1000 },
            { id: "eid2065", tween: [ "style", "${_Rectangle17}", "top", '544px', { fromValue: '374px'}], position: 3500, duration: 1000 },
            { id: "eid2066", tween: [ "style", "${_Rectangle17}", "top", '722px', { fromValue: '544px'}], position: 4500, duration: 1000 },
            { id: "eid2057", tween: [ "style", "${_Rectangle21}", "left", '607px', { fromValue: '632px'}], position: 1335, duration: 1000 },
            { id: "eid2058", tween: [ "style", "${_Rectangle21}", "left", '637px', { fromValue: '607px'}], position: 2335, duration: 1000 },
            { id: "eid2059", tween: [ "style", "${_Rectangle21}", "left", '597px', { fromValue: '637px'}], position: 3335, duration: 1000 },
            { id: "eid2060", tween: [ "style", "${_Rectangle21}", "left", '647px', { fromValue: '597px'}], position: 4335, duration: 1000 },
            { id: "eid2061", tween: [ "style", "${_Rectangle21}", "left", '587px', { fromValue: '647px'}], position: 5335, duration: 1000 },
            { id: "eid1828", tween: [ "style", "${_Rectangle51}", "left", '550px', { fromValue: '539px'}], position: 0, duration: 1000 },
            { id: "eid1830", tween: [ "style", "${_Rectangle51}", "left", '520px', { fromValue: '550px'}], position: 1000, duration: 1000 },
            { id: "eid1842", tween: [ "style", "${_Rectangle51}", "left", '560px', { fromValue: '520px'}], position: 2000, duration: 1000 },
            { id: "eid1850", tween: [ "style", "${_Rectangle51}", "left", '500px', { fromValue: '560px'}], position: 3000, duration: 1000 },
            { id: "eid1860", tween: [ "style", "${_Rectangle51}", "left", '530px', { fromValue: '500px'}], position: 4000, duration: 1000 },
            { id: "eid2320", tween: [ "style", "${_Rectangle34}", "left", '241px', { fromValue: '306px'}], position: 4750, duration: 1000 },
            { id: "eid2321", tween: [ "style", "${_Rectangle34}", "left", '331px', { fromValue: '241px'}], position: 5750, duration: 1000 },
            { id: "eid2322", tween: [ "style", "${_Rectangle34}", "left", '251px', { fromValue: '331px'}], position: 6750, duration: 1000 },
            { id: "eid2323", tween: [ "style", "${_Rectangle34}", "left", '350px', { fromValue: '251px'}], position: 7750, duration: 1000 },
            { id: "eid2324", tween: [ "style", "${_Rectangle34}", "left", '271px', { fromValue: '350px'}], position: 8750, duration: 1000 },
            { id: "eid2325", tween: [ "style", "${_Rectangle34}", "left", '291px', { fromValue: '271px'}], position: 9750, duration: 500 }         ]
      }
   }
},
"setumei": {
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
      rect: ['35px','15px','557px','426px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'smako2',
      type: 'image',
      rect: ['498px','39px','418px','410px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/smako.png','0px','0px']
   },
   {
      id: 'capuchar',
      type: 'rect',
      rect: ['35','15','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'capuchar',
      symbolName: 'capuchar'
   }   ]
   },
   states: {
      "Base State": {
         "${_capuchar}": [
            ["style", "top", '15px'],
            ["style", "left", '6px'],
            ["transform", "scaleX", '0.96202']
         ],
         "${_Rectangle}": [
            ["style", "top", '15px'],
            ["style", "height", '426px'],
            ["style", "opacity", '0'],
            ["style", "left", '35px'],
            ["style", "width", '557px']
         ],
         "${_smako2}": [
            ["style", "height", '410px'],
            ["style", "top", '39px'],
            ["style", "left", '498px'],
            ["style", "width", '418px']
         ],
         "${symbolSelector}": [
            ["style", "height", '472px'],
            ["style", "width", '1072px'],
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
            { id: "eid2551", tween: [ "style", "${_capuchar}", "top", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid2553", tween: [ "style", "${_capuchar}", "left", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
            { id: "eid2552", tween: [ "transform", "${_capuchar}", "scaleX", '0.96202', { fromValue: '0.96202'}], position: 0, duration: 0 }         ]
      }
   }
},
"capuchar": {
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
      rect: ['27px','0px','506px','424px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      fill: ['rgba(255,255,255,1.00)'],
      id: 'Rectangle2',
      stroke: [1,'rgba(0,0,0,1)','solid'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      id: 'slide2',
      type: 'rect',
      rect: ['93','28','auto','auto','auto','auto']
   },
   {
      id: 'slide1',
      type: 'rect',
      rect: ['-97','-15','auto','auto','auto','auto']
   },
   {
      id: 'slide3',
      type: 'rect',
      rect: ['59','18','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'slide2',
      symbolName: 'slide2'
   },
   {
      id: 'slide1',
      symbolName: 'slide1'
   },
   {
      id: 'slide3',
      symbolName: 'slide3'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '506px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '27px'],
            ["style", "height", '424px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_slide3}": [
            ["style", "top", '13px'],
            ["style", "left", '592px']
         ],
         "${symbolSelector}": [
            ["style", "height", '426px'],
            ["style", "width", '557px'],
            ["style", "overflow", 'hidden']
         ],
         "${_slide1}": [
            ["style", "left", '59px'],
            ["style", "top", '13px']
         ],
         "${_slide2}": [
            ["style", "left", '592px'],
            ["style", "top", '13px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18000,
         autoPlay: true,
         timeline: [
            { id: "eid2548", tween: [ "style", "${_slide2}", "left", '592px', { fromValue: '592px'}], position: 0, duration: 0 },
            { id: "eid2565", tween: [ "style", "${_slide2}", "left", '59px', { fromValue: '592px'}], position: 13000, duration: 1000 },
            { id: "eid2555", tween: [ "style", "${_slide3}", "left", '592px', { fromValue: '592px'}], position: 0, duration: 0 },
            { id: "eid2564", tween: [ "style", "${_slide3}", "left", '59px', { fromValue: '592px'}], position: 4000, duration: 1000 },
            { id: "eid2566", tween: [ "style", "${_slide3}", "left", '-474px', { fromValue: '59px'}], position: 13000, duration: 1000 },
            { id: "eid2557", tween: [ "style", "${_slide1}", "top", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
            { id: "eid2559", tween: [ "style", "${_slide3}", "top", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
            { id: "eid2558", tween: [ "style", "${_slide2}", "top", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
            { id: "eid2547", tween: [ "style", "${_slide1}", "left", '59px', { fromValue: '59px'}], position: 0, duration: 0 },
            { id: "eid2561", tween: [ "style", "${_slide1}", "left", '-474px', { fromValue: '59px'}], position: 4000, duration: 1000 }         ]
      }
   }
},
"kyara": {
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
      rect: ['-66px','-70px','300px','300px','auto','auto'],
      id: 'smako2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/smako.png','0px','0px']
   },
   {
      rect: ['-84px','-100px','330px','330px','auto','auto'],
      id: 'smao2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/smao.png','0px','0px']
   },
   {
      rect: ['0','-63px','255px','293px','auto','auto'],
      id: 'penpen',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/penpen.png','0px','0px']
   },
   {
      rect: ['-148px','-93px','532px','415px','auto','auto'],
      id: 'kumonchan2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/kumonchan2.png','0px','0px']
   },
   {
      rect: ['-32px','-35px','328px','248px','auto','auto'],
      id: 'bonnou_fin2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/bonnou%20fin2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_penpen}": [
            ["style", "display", 'none'],
            ["style", "height", '293px'],
            ["style", "top", '-63px'],
            ["style", "width", '255px']
         ],
         "${symbolSelector}": [
            ["style", "height", '230px'],
            ["style", "width", '246px']
         ],
         "${_bonnou_fin2}": [
            ["style", "top", '-35px'],
            ["style", "display", 'none'],
            ["style", "height", '248px'],
            ["style", "left", '-32px'],
            ["style", "width", '328px']
         ],
         "${_smao2}": [
            ["style", "top", '-100px'],
            ["style", "display", 'none'],
            ["style", "height", '330px'],
            ["style", "left", '-84px'],
            ["style", "width", '330px']
         ],
         "${_kumonchan2}": [
            ["style", "top", '-93px'],
            ["style", "display", 'none'],
            ["style", "height", '415px'],
            ["style", "left", '-148px'],
            ["style", "width", '532px']
         ],
         "${_smako2}": [
            ["style", "top", '-70px'],
            ["style", "display", 'none'],
            ["style", "height", '300px'],
            ["style", "left", '-66px'],
            ["style", "width", '300px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5750,
         autoPlay: true,
         timeline: [
            { id: "eid2435", tween: [ "style", "${_kumonchan2}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid2436", tween: [ "style", "${_kumonchan2}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid2631", tween: [ "style", "${_smao2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2429", tween: [ "style", "${_smao2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid2431", tween: [ "style", "${_smao2}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid2437", tween: [ "style", "${_bonnou_fin2}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid2438", tween: [ "style", "${_bonnou_fin2}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0 },
            { id: "eid2433", tween: [ "style", "${_penpen}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid2434", tween: [ "style", "${_penpen}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid2580", tween: [ "style", "${_smako2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2432", tween: [ "style", "${_smako2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid2427", tween: [ "style", "${_smako2}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 }         ]
      }
   }
},
"kyaraCP": {
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
      rect: ['-104px','-86px','457px','438px','auto','auto'],
      id: 'kumonchan2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/kumonchan2.png','0px','0px']
   },
   {
      rect: ['-7px','-49px','263px','326px','auto','auto'],
      id: 'penpen2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/penpen2.png','0px','0px']
   },
   {
      id: 'bonnou_fin2',
      type: 'image',
      rect: ['-30px','-29px','320px','259px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bonnou%20fin2.png','0px','0px']
   },
   {
      rect: ['-7px','-22px','263px','273px','auto','auto'],
      id: 'ponta2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/ponta2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '230px'],
            ["style", "width", '246px']
         ],
         "${_bonnou_fin2}": [
            ["style", "top", '-29px'],
            ["style", "height", '259px'],
            ["style", "display", 'block'],
            ["style", "left", '-30px'],
            ["style", "width", '320px']
         ],
         "${_penpen2}": [
            ["style", "top", '-49px'],
            ["style", "height", '326px'],
            ["style", "display", 'none'],
            ["style", "left", '-7px'],
            ["style", "width", '263px']
         ],
         "${_kumonchan2}": [
            ["style", "top", '-86px'],
            ["style", "height", '438px'],
            ["style", "display", 'none'],
            ["style", "left", '-104px'],
            ["style", "width", '457px']
         ],
         "${_ponta2}": [
            ["style", "top", '-22px'],
            ["style", "display", 'none'],
            ["style", "height", '273px'],
            ["style", "left", '-7px'],
            ["style", "width", '263px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3750,
         autoPlay: true,
         timeline: [
            { id: "eid2469", tween: [ "style", "${_bonnou_fin2}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid2472", tween: [ "style", "${_kumonchan2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid2473", tween: [ "style", "${_kumonchan2}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid2474", tween: [ "style", "${_ponta2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid2475", tween: [ "style", "${_ponta2}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid2476", tween: [ "style", "${_penpen2}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid2477", tween: [ "style", "${_penpen2}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 }         ]
      }
   }
},
"slide1": {
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
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      rect: ['1px','2px','430px','400px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      id: 'shot1p',
      type: 'rect',
      rect: ['-184','-43','auto','auto','auto','auto']
   },
   {
      type: 'text',
      rect: ['41px','294px','363px','96px','auto','auto'],
      id: 'Text',
      text: 'ヒントボタンをおすとたたかい方のコツがわかるよ。',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   {
      id: 'shot1p',
      symbolName: 'shot1p'
   }   ]
   },
   states: {
      "Base State": {
         "${_shot1p}": [
            ["style", "top", '-128px'],
            ["style", "left", '-217px'],
            ["transform", "scaleY", '0.42554'],
            ["transform", "scaleX", '0.43636']
         ],
         "${_Rectangle2}": [
            ["style", "top", '2px'],
            ["style", "left", '1px'],
            ["style", "height", '400px'],
            ["style", "opacity", '0'],
            ["style", "border-width", '0px'],
            ["style", "width", '430px']
         ],
         "${_Text}": [
            ["style", "left", '41px'],
            ["style", "top", '294px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '430px']
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
            { id: "eid2613", tween: [ "transform", "${_shot1p}", "scaleX", '0.43636', { fromValue: '0.43636'}], position: 0, duration: 0 },
            { id: "eid2617", tween: [ "style", "${_shot1p}", "left", '-217px', { fromValue: '-217px'}], position: 0, duration: 0 },
            { id: "eid2614", tween: [ "transform", "${_shot1p}", "scaleY", '0.42554', { fromValue: '0.42554'}], position: 0, duration: 0 },
            { id: "eid2618", tween: [ "style", "${_shot1p}", "top", '-128px', { fromValue: '-128px'}], position: 0, duration: 0 }         ]
      }
   }
},
"slide2": {
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
      stroke: [0,'rgb(0, 0, 0)','solid'],
      rect: ['0px','0px','430px','400px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      id: 'Text',
      text: 'ゲーム中にキャラクターをタッチすると？',
      rect: ['47px','299px','373px','85px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,'rgba(0,0,0,1)','normal','none','']
   },
   {
      id: 'shot2p',
      type: 'rect',
      clip: ['rect(0px 649pxpx 414pxpx 0px)'],
      rect: ['-186','-108','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'shot2p',
      symbolName: 'shot2p'
   }   ]
   },
   states: {
      "Base State": {
         "${_shot2p}": [
            ["style", "top", '-58px'],
            ["transform", "scaleY", '0.57401'],
            ["transform", "scaleX", '0.58993'],
            ["style", "clip", [0,643,414,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-109px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '0px'],
            ["style", "height", '400px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '430px']
         ],
         "${_Text}": [
            ["style", "left", '47px'],
            ["style", "top", '299px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '430px']
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
            { id: "eid2623", tween: [ "transform", "${_shot2p}", "scaleY", '0.57401', { fromValue: '0.57401'}], position: 0, duration: 0 },
            { id: "eid2622", tween: [ "transform", "${_shot2p}", "scaleX", '0.58993', { fromValue: '0.58993'}], position: 0, duration: 0 },
            { id: "eid2629", tween: [ "style", "${_shot2p}", "left", '-109px', { fromValue: '-109px'}], position: 0, duration: 0 },
            { id: "eid2621", tween: [ "style", "${_shot2p}", "clip", [0,643,414,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,643,414,0]}], position: 0, duration: 0 },
            { id: "eid2630", tween: [ "style", "${_shot2p}", "top", '-58px', { fromValue: '-58px'}], position: 0, duration: 0 }         ]
      }
   }
},
"slide3": {
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
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','430px','400px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      id: 'shot3p',
      type: 'rect',
      rect: ['-100','-21','auto','auto','auto','auto']
   },
   {
      type: 'text',
      rect: ['27px','294px','386px','78px','auto','auto'],
      id: 'Text',
      text: 'はじめての人はれんしゅうボタンをおしてれんしゅうをしてみよう！',
      align: 'left',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   {
      id: 'shot3p',
      symbolName: 'shot3p'
   }   ]
   },
   states: {
      "Base State": {
         "${_shot3p}": [
            ["style", "top", '-15px'],
            ["style", "left", '-50px'],
            ["transform", "scaleY", '0.796'],
            ["transform", "scaleX", '0.69388']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '0px'],
            ["style", "height", '400px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '430px']
         ],
         "${_Text}": [
            ["style", "left", '27px'],
            ["style", "width", '386px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '430px']
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
            { id: "eid2597", tween: [ "style", "${_shot3p}", "left", '-50px', { fromValue: '-50px'}], position: 0, duration: 0 },
            { id: "eid2591", tween: [ "transform", "${_shot3p}", "scaleX", '0.69388', { fromValue: '0.69388'}], position: 0, duration: 0 },
            { id: "eid2592", tween: [ "transform", "${_shot3p}", "scaleY", '0.796', { fromValue: '0.796'}], position: 0, duration: 0 },
            { id: "eid2596", tween: [ "style", "${_shot3p}", "top", '-15px', { fromValue: '-15px'}], position: 0, duration: 0 }         ]
      }
   }
},
"next": {
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
      rect: ['0px','0px','72px','42px','auto','auto'],
      borderRadius: ['3px 3px','3px 3px','3px 3px','3px 3px'],
      id: 'Rectangle3',
      stroke: [3,'rgb(0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['0px','0px','78px','38px','auto','auto'],
      id: 'Text4',
      text: '次へ',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',34,'rgba(27,1,1,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [3,3], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [3,3], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [3,3], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-width", '3px'],
            ["style", "border-top-right-radius", [3,3], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '48px'],
            ["style", "width", '78px']
         ],
         "${_Text4}": [
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
"introduse": {
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
      rect: ['0px','0px','591px','75px','auto','auto'],
      id: 'introduse',
      text: 'れんしゅうをはじめるよ！',
      align: 'center',
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',34,'rgba(27,1,1,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_introduse}": [
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "height", '75px'],
            ["style", "left", '0px'],
            ["style", "width", '591px']
         ],
         "${symbolSelector}": [
            ["style", "height", '75px'],
            ["style", "width", '591px']
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
         ]
      }
   }
},
"rennsyuustage_1": {
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
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','1024px','768px','auto','auto'],
      fill: ['rgba(46,176,26,1.00)']
   },
   {
      id: 'smakoCopy',
      type: 'image',
      rect: ['806px','541px','230px','230px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/smako.png','0px','0px']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'reeetoboxCopy',
      rect: ['12','18','auto','auto','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(27,1,1,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'CPlateCopy',
      text: '?倍',
      align: 'right',
      rect: ['234px','34px','95px','33px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,'rgba(27,1,1,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'lateCopy',
      text: '?倍',
      align: 'right',
      rect: ['77px','34px','95px','33px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'centerCopy',
      text: '数',
      align: 'center',
      rect: ['388px','407px','59px','49px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'center2Copy',
      text: '数',
      align: 'center',
      rect: ['494px','147px','59px','49px','auto','auto']
   },
   {
      id: 'smakotouchCopy',
      type: 'rect',
      rect: ['901','549','auto','auto','auto','auto']
   },
   {
      id: 'pointobarCopy',
      type: 'rect',
      rect: ['60','299','auto','auto','auto','auto']
   },
   {
      id: 'pointobarCPCopy',
      type: 'rect',
      rect: ['60','299','auto','auto','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(27,1,1,1)','normal','none','normal'],
      type: 'text',
      id: 'CPpointoCopy',
      text: '50',
      align: 'center',
      rect: ['924px','101px','26px','41px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(27,1,1,1)','normal','none','normal'],
      type: 'text',
      id: 'pointoCopy',
      text: '50<br>',
      align: 'center',
      rect: ['133px','499px','75px','41px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(253,253,253,1.00)','normal','none','normal'],
      type: 'text',
      id: 'kakeruCopy',
      text: '×<br>',
      align: 'center',
      rect: ['489px','186px','47px','44px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',40,'rgba(253,253,253,1.00)','normal','none','normal'],
      type: 'text',
      id: 'kakeruCPCopy',
      text: '×<br>',
      align: 'center',
      rect: ['489px','408px','47px','44px','auto','auto']
   },
   {
      rect: ['543px','108px','130px','200px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      fill: ['rgba(255,255,255,1)'],
      id: 'center2dodaiCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      id: 'kuro4Copy',
      type: 'image',
      rect: ['543px','110px','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump0383.png','0px','0px']
   },
   {
      rect: ['352px','331px','130px','200px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      fill: ['rgba(255,255,255,1)'],
      id: 'centerdodaiCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
   },
   {
      id: 'hato6Copy',
      type: 'image',
      rect: ['352','331','130px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/trump0313.png','0px','0px']
   },
   {
      type: 'rect',
      id: 'caseCopy',
      stroke: [3,'rgba(255,255,255,1.00)','solid'],
      rect: ['341px','97px','336px','215px','auto','auto'],
      fill: ['rgba(66,249,249,0.00)']
   },
   {
      type: 'rect',
      id: 'CPcaseCopy',
      stroke: [3,'rgba(255,255,255,1.00)','solid'],
      rect: ['341px','321px','336px','215px','auto','auto'],
      fill: ['rgba(66,249,249,0.00)']
   },
   {
      rect: ['543px','108px','130px','200px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'center2dodaiCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['553px','120px','110px','180px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'center2akaCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)'],
      c: [
      {
         rect: ['-201px','211px','130px','200px','auto','auto'],
         borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
         id: 'centerdodaiCopy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1)']
      }]
   },
   {
      rect: ['362px','341px','110px','180px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'centerakaCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(238,26,26,1.00)']
   },
   {
      id: 'CPcard9Copy',
      type: 'rect',
      rect: ['812','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard8Copy',
      type: 'rect',
      rect: ['721','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard7Copy',
      type: 'rect',
      rect: ['620','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard6Copy',
      type: 'rect',
      rect: ['526','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard5Copy',
      type: 'rect',
      rect: ['440','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard4Copy',
      type: 'rect',
      rect: ['339','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard3Copy',
      type: 'rect',
      rect: ['247','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard2Copy',
      type: 'rect',
      rect: ['154','14','auto','auto','auto','auto']
   },
   {
      id: 'CPcard1Copy',
      type: 'rect',
      rect: ['63','14','auto','auto','auto','auto']
   },
   {
      id: 'card9Copy',
      type: 'rect',
      rect: ['403','301','auto','auto','auto','auto']
   },
   {
      id: 'card8Copy',
      type: 'rect',
      rect: ['757','378','auto','auto','auto','auto']
   },
   {
      id: 'card7Copy',
      type: 'rect',
      rect: ['571','170','auto','auto','auto','auto']
   },
   {
      id: 'card6Copy',
      type: 'rect',
      rect: ['469','117','auto','auto','auto','auto']
   },
   {
      id: 'card5Copy',
      type: 'rect',
      rect: ['424','261','auto','auto','auto','auto']
   },
   {
      id: 'card4Copy',
      type: 'rect',
      rect: ['234','377','auto','auto','auto','auto']
   },
   {
      id: 'card3Copy',
      type: 'rect',
      rect: ['215','230','auto','auto','auto','auto']
   },
   {
      id: 'card2Copy',
      type: 'rect',
      rect: ['92','245','auto','auto','auto','auto']
   },
   {
      id: 'card1Copy',
      type: 'rect',
      rect: ['274','127','auto','auto','auto','auto']
   },
   {
      id: 'drowbuttonCopy',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['850','242','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'card9coverCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['559px','549px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['812px','344px','59px','87px','auto','auto'],
      id: 'card9cover2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card8coverCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['493px','549px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['718px','344px','59px','87px','auto','auto'],
      id: 'card8cover2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card7coverCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['428px','549px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['625px','344px','59px','87px','auto','auto'],
      id: 'card7cover2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card6coverCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['360px','547px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['531px','344px','58px','86px','auto','auto'],
      id: 'card6cover2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card5coverCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['295px','549px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['436px','344px','59px','87px','auto','auto'],
      id: 'card5cover2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card4coverCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['230px','547px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['343px','368px','58px','83px','auto','auto'],
      id: 'card4cover2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card3coverCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['165px','547px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['248px','344px','59px','86px','auto','auto'],
      id: 'card3cover2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card2coverCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['100px','547px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['154px','344px','59px','87px','auto','auto'],
      id: 'card2cover2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'card1coverCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['33px','547px','130px','200px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['60px','344px','59px','87px','auto','auto'],
      display: 'none',
      id: 'card1cover2Copy',
      opacity: 0.33660888671875,
      stroke: [0,'rgba(0,0,0,1)','none'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'okbuttonCopy',
      rect: ['819','267','auto','auto','auto','auto'],
      cursor: ['pointer'],
      display: 'none'
   },
   {
      type: 'rect',
      id: 'downbuttonCopy',
      rect: ['839','697','auto','auto','auto','auto'],
      cursor: ['pointer'],
      display: 'none'
   },
   {
      type: 'rect',
      id: 'upbuttonCopy',
      rect: ['839','642','auto','auto','auto','auto'],
      cursor: ['pointer'],
      display: 'none'
   },
   {
      type: 'rect',
      id: 'kakeOKbuttonCopy',
      rect: ['713','641','auto','auto','auto','auto'],
      cursor: ['pointer'],
      display: 'none'
   },
   {
      transform: [[0,0],[],['0','20']],
      rect: ['0px','-187px','1024px','570px','auto','auto'],
      id: 'battleCPCopy',
      stroke: [0,'rgba(0,0,0,1)','solid'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      transform: [[0,0],[],['0','20']],
      rect: ['0px','384px','1024px','570px','auto','auto'],
      id: 'battleCopy',
      stroke: [0,'rgba(0,0,0,1)','solid'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',200,'rgba(255,237,0,1.00)','700','none','italic'],
      type: 'text',
      id: 'battleTextCopy',
      text: 'VS',
      textShadow: ['rgba(0,0,0,0.65)',3,3,3],
      rect: ['370px','208px','297px','286px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',200,'rgba(255,237,0,1.00)','700','none','italic'],
      type: 'text',
      display: 'none',
      id: 'battleTextCopy2',
      text: 'VS',
      textShadow: ['rgba(0,0,0,0.65)',3,3,3],
      rect: ['370px','208px','297px','286px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',140,'rgba(0,0,0,1)','600','none','normal'],
      type: 'text',
      id: 'SystemplusCopy',
      text: '42<br>',
      align: 'center',
      rect: ['210px','300px','320px','200px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',140,'rgba(0,0,0,1)','600','none','normal'],
      type: 'text',
      id: 'CPsekiCopy',
      text: '36<br>',
      align: 'center',
      rect: ['400px','1px','320px','200px','auto','auto']
   },
   {
      type: 'rect',
      rect: ['-45px','-14px','1057px','570px','auto','auto'],
      display: 'none',
      id: 'coverCopy',
      opacity: 0.6953125,
      stroke: [0,'rgb(0, 0, 0)','none'],
      fill: ['rgba(240,240,240,1.00)']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',180,'rgba(241,19,19,1.00)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'katiCopy',
      text: '勝ち',
      align: 'center',
      rect: ['154px','129px','668px','321px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',180,'rgba(18,32,241,1.00)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'makeCopy',
      text: '負け',
      align: 'center',
      rect: ['154px','129px','668px','321px','auto','auto']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',161,'rgba(27,135,8,1.00)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'hikiwakeCopy',
      text: '引き分け',
      align: 'center',
      rect: ['154px','129px','668px','321px','auto','auto']
   },
   {
      type: 'rect',
      id: 'cardscover2Copy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['13px','548px','690px','211px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'cardscoverCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['11px','515px','690px','253px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['0px','4px','1024px','764px','auto','auto'],
      opacity: 0.4,
      id: 'NOTtouch',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      transform: [[0,0],['180'],[],['1','-1.168']],
      id: 'hukidasiCopy',
      type: 'image',
      rect: ['680px','549px','217px','86px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hukidasi2.png','0px','0px']
   },
   {
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',30,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'text',
      text: 'つぎへのボタンをおしてね！',
      align: 'center',
      rect: ['258px','450px','440px','110px','auto','auto']
   },
   {
      transform: [[0,0],['134']],
      id: 'blue',
      type: 'image',
      rect: ['94px','531px','128px','128px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/upright2blue2.png','0px','0px']
   },
   {
      transform: [[0,0],['99'],[],['1.073','0.786']],
      id: 'blue2',
      type: 'image',
      rect: ['384px','402px','128px','128px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/upright2blue22.png','0px','0px']
   },
   {
      id: 'next',
      type: 'rect',
      rect: ['706','510','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'card1Copy',
      symbolName: 'card1'
   },
   {
      id: 'card6Copy',
      symbolName: 'card6'
   },
   {
      id: 'CPcard4Copy',
      symbolName: 'CPcard4'
   },
   {
      id: 'pointobarCPCopy',
      symbolName: 'pointobar_2'
   },
   {
      id: 'kakeOKbuttonCopy',
      symbolName: 'kakeOKbutton'
   },
   {
      id: 'upbuttonCopy',
      symbolName: 'upbutton'
   },
   {
      id: 'card8Copy',
      symbolName: 'card8'
   },
   {
      id: 'card7Copy',
      symbolName: 'card7'
   },
   {
      id: 'CPcard1Copy',
      symbolName: 'CPcard1'
   },
   {
      id: 'card9Copy',
      symbolName: 'card9'
   },
   {
      id: 'CPcard5Copy',
      symbolName: 'CPcard5'
   },
   {
      id: 'smakotouchCopy',
      symbolName: 'smakotouch'
   },
   {
      id: 'next',
      symbolName: 'next_1'
   },
   {
      id: 'CPcard8Copy',
      symbolName: 'CPcard8'
   },
   {
      id: 'downbuttonCopy',
      symbolName: 'downbutton'
   },
   {
      id: 'reeetoboxCopy',
      symbolName: 'reeetobox'
   },
   {
      id: 'okbuttonCopy',
      symbolName: 'okbutton'
   },
   {
      id: 'drowbuttonCopy',
      symbolName: 'drowbutton'
   },
   {
      id: 'card2Copy',
      symbolName: 'card2'
   },
   {
      id: 'pointobarCopy',
      symbolName: 'pointobar_2'
   },
   {
      id: 'card3Copy',
      symbolName: 'card3'
   },
   {
      id: 'card4Copy',
      symbolName: 'card4'
   },
   {
      id: 'card5Copy',
      symbolName: 'card5'
   },
   {
      id: 'CPcard6Copy',
      symbolName: 'CPcard6'
   },
   {
      id: 'CPcard7Copy',
      symbolName: 'CPcard7'
   },
   {
      id: 'CPcard3Copy',
      symbolName: 'CPcard3'
   },
   {
      id: 'CPcard9Copy',
      symbolName: 'CPcard9'
   },
   {
      id: 'CPcard2Copy',
      symbolName: 'CPcard2'
   }   ]
   },
   states: {
      "Base State": {
         "${_card5Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '296px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_okbuttonCopy}": [
            ["style", "top", '646px'],
            ["transform", "scaleY", '1.59524'],
            ["transform", "scaleX", '1.42619'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '740px']
         ],
         "${_CPsekiCopy}": [
            ["color", "color", 'rgba(0,32,113,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '571px'],
            ["style", "width", '320px'],
            ["style", "top", '-200px'],
            ["style", "display", 'block'],
            ["style", "height", '200px'],
            ["style", "font-size", '140px'],
            ["style", "font-weight", '600']
         ],
         "${_blue2}": [
            ["style", "top", '402px'],
            ["transform", "scaleY", '0.78644'],
            ["transform", "rotateZ", '99deg'],
            ["transform", "scaleX", '1.0731'],
            ["style", "left", '384px'],
            ["style", "display", 'block']
         ],
         "${_CPcard4Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '542px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_CPcard1Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '355px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_card6Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '361px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_card6coverCopy}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '360px'],
            ["style", "width", '130px']
         ],
         "${_card9cover2Copy}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '558px'],
            ["style", "width", '130px']
         ],
         "${_card4coverCopy}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '230px'],
            ["style", "width", '130px']
         ],
         "${_hikiwakeCopy}": [
            ["style", "top", '207px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(27,135,8,1)'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
            ["style", "left", '198px'],
            ["style", "font-size", '161px']
         ],
         "${_cardscover2Copy}": [
            ["style", "opacity", '0']
         ],
         "${_kakeOKbuttonCopy}": [
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_battleTextCopy}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,237,0,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '370px'],
            ["style", "font-size", '200px'],
            ["style", "top", '208px'],
            ["style", "width", '339px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "font-style", 'italic'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["style", "text-decoration", 'none'],
            ["style", "opacity", '0']
         ],
         "${_centerCopy}": [
            ["style", "top", '407px'],
            ["style", "left", '388px']
         ],
         "${_center2Copy}": [
            ["style", "top", '177px'],
            ["style", "height", '65px'],
            ["style", "display", 'block'],
            ["style", "left", '560px'],
            ["style", "width", '95px']
         ],
         "${_card7cover2Copy}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '428px'],
            ["style", "width", '130px']
         ],
         "${_downbuttonCopy}": [
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_reeetoboxCopy}": [
            ["style", "display", 'none']
         ],
         "${_card8Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '493px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_card3cover2Copy}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '165px'],
            ["style", "width", '130px']
         ],
         "${_card7Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '428px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_blue}": [
            ["style", "display", 'block'],
            ["style", "top", '531px'],
            ["style", "left", '94px'],
            ["transform", "rotateZ", '134deg']
         ],
         "${_drowbuttonCopy}": [
            ["style", "top", '640px'],
            ["transform", "scaleY", '1.45977'],
            ["transform", "scaleX", '1.84146'],
            ["style", "left", '750px'],
            ["style", "cursor", 'pointer']
         ],
         "${_card9Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '558px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_card5cover2Copy}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '295px'],
            ["style", "width", '130px']
         ],
         "${_CPcard8Copy}": [
            ["style", "top", '-117px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '794px']
         ],
         "${_center2dodaiCopy2}": [
            ["style", "top", '110px'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '543px'],
            ["style", "width", '130px']
         ],
         "${_CPlateCopy}": [
            ["style", "top", '34px'],
            ["style", "text-align", 'right'],
            ["style", "display", 'none'],
            ["style", "left", '234px'],
            ["style", "font-size", '24px']
         ],
         "${_pointobarCPCopy}": [
            ["style", "left", '810px'],
            ["style", "top", '98px']
         ],
         "${_centerdodaiCopy3}": [
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '352px'],
            ["style", "width", '130px'],
            ["style", "top", '331px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_upbuttonCopy}": [
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_battleCopy}": [
            ["gradient", "background-image", [270,[['rgba(255,126,0,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '-1034px'],
            ["style", "width", '1024px'],
            ["style", "top", '384px'],
            ["transform", "skewY", '20deg'],
            ["style", "height", '570px'],
            ["color", "border-color", 'rgb(250, 250, 250)'],
            ["style", "border-width", '5px'],
            ["style", "border-style", 'solid']
         ],
         "${_card1coverCopy}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '33px'],
            ["style", "width", '130px']
         ],
         "${_card1Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '36px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_cardscoverCopy}": [
            ["style", "opacity", '0']
         ],
         "${_card2Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '101px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_centerdodaiCopy2}": [
            ["style", "top", '211px'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["style", "left", '-201px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '130px']
         ],
         "${_card2coverCopy}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '100px'],
            ["style", "width", '130px']
         ],
         "${_battleTextCopy2}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,237,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '370px'],
            ["style", "font-size", '200px'],
            ["style", "top", '208px'],
            ["style", "width", '339px'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "font-style", 'italic'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "text-decoration", 'none'],
            ["style", "opacity", '0']
         ],
         "${_center2akaCopy}": [
            ["color", "background-color", 'rgba(238,26,26,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '553px'],
            ["style", "width", '110px'],
            ["style", "top", '120px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '180px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_card3coverCopy}": [
            ["style", "top", '547px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '165px'],
            ["style", "width", '130px']
         ],
         "${_kakeruCopy}": [
            ["style", "top", '186px'],
            ["style", "left", '489px'],
            ["color", "color", 'rgba(253,253,253,1)']
         ],
         "${_lateCopy}": [
            ["style", "top", '34px'],
            ["style", "text-align", 'right'],
            ["style", "display", 'none'],
            ["style", "left", '77px'],
            ["style", "font-size", '24px']
         ],
         "${_card6cover2Copy}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '360px'],
            ["style", "width", '130px']
         ],
         "${_card5coverCopy}": [
            ["style", "top", '549px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '295px'],
            ["style", "width", '130px']
         ],
         "${_CPcard7Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '728px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_center2dodaiCopy3}": [
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '543px'],
            ["style", "width", '130px'],
            ["style", "top", '110px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '200px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)']
         ],
         "${_CPpointoCopy}": [
            ["style", "left", '924px'],
            ["style", "top", '101px']
         ],
         "${_centerakaCopy}": [
            ["color", "background-color", 'rgba(238,26,26,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '362px'],
            ["style", "width", '110px'],
            ["style", "top", '341px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '180px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_card4cover2Copy}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '230px'],
            ["style", "width", '130px']
         ],
         "${_card3Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '166px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_smakotouchCopy}": [
            ["style", "opacity", '0']
         ],
         "${_hato6Copy}": [
            ["style", "height", '200px'],
            ["style", "width", '130px']
         ],
         "${_card8cover2Copy}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '493px'],
            ["style", "width", '130px']
         ],
         "${_card9coverCopy}": [
            ["style", "top", '549px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '559px'],
            ["style", "width", '130px']
         ],
         "${_CPcaseCopy}": [
            ["style", "top", '321px'],
            ["color", "background-color", 'rgba(66,249,249,0)'],
            ["style", "left", '341px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '215px'],
            ["color", "border-color", 'rgb(255, 255, 255)'],
            ["style", "border-width", '3px'],
            ["style", "width", '336px']
         ],
         "${_text}": [
            ["style", "top", '426px'],
            ["style", "font-size", '30px'],
            ["style", "line-height", '110px'],
            ["style", "left", '239px'],
            ["style", "width", '657px']
         ],
         "${_coverCopy}": [
            ["color", "background-color", 'rgba(240,240,240,1)'],
            ["style", "height", '768px'],
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.6953125'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${_pointoCopy}": [
            ["style", "top", '499px'],
            ["style", "font-size", '26px'],
            ["style", "left", '133px'],
            ["style", "width", '75px']
         ],
         "${_kuro4Copy}": [
            ["style", "top", '110px'],
            ["style", "height", '200px'],
            ["style", "left", '543px'],
            ["style", "width", '130px']
         ],
         "${_hukidasiCopy}": [
            ["style", "top", '445px'],
            ["transform", "scaleY", '-1.16824'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '182px'],
            ["style", "left", '137px'],
            ["style", "width", '807px']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_kakeruCPCopy}": [
            ["style", "top", '408px'],
            ["style", "left", '489px'],
            ["color", "color", 'rgba(253,253,253,1)']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["color", "background-color", 'rgba(46,176,26,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${_smakoCopy}": [
            ["style", "height", '230px'],
            ["style", "top", '541px'],
            ["style", "left", '806px'],
            ["style", "width", '230px']
         ],
         "${_caseCopy}": [
            ["style", "top", '97px'],
            ["color", "background-color", 'rgba(66,249,249,0)'],
            ["style", "border-width", '3px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '215px'],
            ["color", "border-color", 'rgb(255, 255, 255)'],
            ["style", "left", '341px'],
            ["style", "width", '336px']
         ],
         "${_card8coverCopy}": [
            ["style", "top", '549px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '493px'],
            ["style", "width", '130px']
         ],
         "${_katiCopy}": [
            ["style", "top", '186px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(241,19,19,1)'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
            ["style", "left", '191px'],
            ["style", "font-size", '180px']
         ],
         "${_CPcard2Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '419px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_CPcard3Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '481px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_CPcard9Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '861px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_CPcard5Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '597px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_makeCopy}": [
            ["style", "top", '186px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(18,32,241,1)'],
            ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
            ["style", "left", '184px'],
            ["style", "font-size", '180px']
         ],
         "${_battleCPCopy}": [
            ["gradient", "background-image", [270,[['rgba(254,254,255,1.00)',0],['rgba(42,92,212,1.00)',100]]]],
            ["style", "left", '1024px'],
            ["style", "width", '1024px'],
            ["style", "top", '-187px'],
            ["transform", "skewY", '20deg'],
            ["style", "height", '570px'],
            ["color", "border-color", 'rgb(255, 255, 255)'],
            ["style", "border-width", '5px'],
            ["style", "border-style", 'solid']
         ],
         "${_card4Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '231px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '548px']
         ],
         "${_SystemplusCopy}": [
            ["color", "color", 'rgba(169,35,0,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '113px'],
            ["style", "font-size", '140px'],
            ["style", "top", '764px'],
            ["style", "display", 'block'],
            ["style", "height", '200px'],
            ["style", "width", '320px'],
            ["style", "font-weight", '600']
         ],
         "${_card7coverCopy}": [
            ["style", "top", '549px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '428px'],
            ["style", "width", '130px']
         ],
         "${_pointobarCopy}": [
            ["style", "left", '33px'],
            ["style", "top", '493px']
         ],
         "${_card1cover2Copy}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '33px'],
            ["style", "width", '130px']
         ],
         "${_CPcard6Copy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '664px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-117px']
         ],
         "${_card2cover2Copy}": [
            ["style", "top", '507px'],
            ["style", "display", 'none'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '99px'],
            ["style", "width", '130px']
         ],
         "${_NOTtouch}": [
            ["style", "height", '764px'],
            ["style", "opacity", '0'],
            ["style", "display", 'block'],
            ["style", "width", '1024px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9000,
         autoPlay: true,
         timeline: [
            { id: "eid1232", tween: [ "style", "${_NOTtouch}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid1131", tween: [ "style", "${_card8cover2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1179", tween: [ "style", "${_SystemplusCopy}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 500 },
            { id: "eid2680", tween: [ "style", "${_text}", "top", '426px', { fromValue: '426px'}], position: 0, duration: 0 },
            { id: "eid1126", tween: [ "style", "${_card3cover2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1161", tween: [ "style", "${_battleTextCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid1162", tween: [ "style", "${_battleTextCopy2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "swing" },
            { id: "eid1163", tween: [ "style", "${_battleTextCopy2}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0, easing: "swing" },
            { id: "eid2682", tween: [ "style", "${_hukidasiCopy}", "width", '807px', { fromValue: '807px'}], position: 0, duration: 0 },
            { id: "eid1129", tween: [ "style", "${_card6cover2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1176", tween: [ "style", "${_CPsekiCopy}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "eid1127", tween: [ "style", "${_card4cover2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1173", tween: [ "color", "${_CPsekiCopy}", "color", 'rgba(0,32,113,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,32,113,1.00)'}], position: 2500, duration: 0, easing: "swing" },
            { id: "eid1134", tween: [ "style", "${_CPlateCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1117", tween: [ "style", "${_hikiwakeCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1130", tween: [ "style", "${_card7cover2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1174", tween: [ "style", "${_CPsekiCopy}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 500 },
            { id: "eid1181", tween: [ "style", "${_SystemplusCopy}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "eid1133", tween: [ "style", "${_reeetoboxCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2683", tween: [ "style", "${_text}", "width", '657px', { fromValue: '657px'}], position: 0, duration: 0 },
            { id: "eid1159", tween: [ "style", "${_battleCPCopy}", "left", '0px', { fromValue: '1024px'}], position: 1500, duration: 1000, easing: "swing" },
            { id: "eid1160", tween: [ "style", "${_battleCPCopy}", "left", '1024px', { fromValue: '0px'}], position: 4250, duration: 1000, easing: "swing" },
            { id: "eid1221", tween: [ "style", "${_hukidasiCopy}", "top", '445px', { fromValue: '445px'}], position: 0, duration: 0 },
            { id: "eid1190", tween: [ "style", "${_SystemplusCopy}", "top", '494px', { fromValue: '764px'}], position: 1500, duration: 1000 },
            { id: "eid2677", tween: [ "style", "${_hukidasiCopy}", "left", '137px', { fromValue: '137px'}], position: 0, duration: 0 },
            { id: "eid1304", tween: [ "style", "${_NOTtouch}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid1116", tween: [ "style", "${_makeCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1234", tween: [ "style", "${_drowbuttonCopy}", "left", '750px', { fromValue: '750px'}], position: 0, duration: 0 },
            { id: "eid1316", tween: [ "style", "${_blue2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid1164", tween: [ "style", "${_battleTextCopy2}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "swing" },
            { id: "eid1165", tween: [ "style", "${_battleTextCopy2}", "opacity", '0', { fromValue: '1'}], position: 4250, duration: 500, easing: "swing" },
            { id: "eid1122", tween: [ "style", "${_kakeOKbuttonCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1125", tween: [ "style", "${_card2cover2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1135", tween: [ "style", "${_lateCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1121", tween: [ "style", "${_upbuttonCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1189", tween: [ "style", "${_SystemplusCopy}", "left", '504px', { fromValue: '113px'}], position: 1500, duration: 1000 },
            { id: "eid1315", tween: [ "style", "${_blue}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid1220", tween: [ "style", "${_hukidasiCopy}", "height", '182px', { fromValue: '182px'}], position: 0, duration: 0 },
            { id: "eid1128", tween: [ "style", "${_card5cover2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1120", tween: [ "style", "${_downbuttonCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1124", tween: [ "style", "${_card1cover2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1132", tween: [ "style", "${_card9cover2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1119", tween: [ "style", "${_okbuttonCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1178", tween: [ "color", "${_SystemplusCopy}", "color", 'rgba(169,35,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(169,35,0,1.00)'}], position: 2500, duration: 0, easing: "swing" },
            { id: "eid1172", tween: [ "style", "${_CPsekiCopy}", "top", '30px', { fromValue: '-200px'}], position: 1500, duration: 1000 },
            { id: "eid1157", tween: [ "style", "${_battleCopy}", "left", '0px', { fromValue: '-1034px'}], position: 1500, duration: 1000, easing: "swing" },
            { id: "eid1158", tween: [ "style", "${_battleCopy}", "left", '-1034px', { fromValue: '0px'}], position: 4250, duration: 1000, easing: "swing" },
            { id: "eid1118", tween: [ "style", "${_coverCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2681", tween: [ "style", "${_text}", "left", '239px', { fromValue: '239px'}], position: 0, duration: 0 },
            { id: "eid1115", tween: [ "style", "${_katiCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1184", tween: [ "style", "${_CPsekiCopy}", "left", '257px', { fromValue: '571px'}], position: 1500, duration: 1000 }         ]
      }
   }
},
"pointobar_2": {
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
      rect: ['0px','0px','169px','44px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(14,148,14,1.00)']
   },
   {
      rect: ['0px','5px','85px','34px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(27,1,1,1.00)','normal','none','normal'],
      id: 'Text10',
      text: 'コイン<br>',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '44px'],
            ["style", "width", '169px']
         ],
         "${_Text10}": [
            ["style", "top", '5px'],
            ["style", "font-size", '26px'],
            ["style", "height", '34px'],
            ["color", "color", 'rgba(27,1,1,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '85px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(14,148,14,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '169px']
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
"next_1": {
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
      rect: ['0px','0px','130px','41px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      opacity: 1,
      id: 'next_background',
      stroke: [5,'rgb(0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(249,249,249,1.00)']
   },
   {
      rect: ['4px','6px','130px','44px','auto','auto'],
      font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',26,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'next',
      text: 'つぎへ',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_next_background}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(249,249,249,1.00)'],
            ["style", "left", '0px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "border-width", '5px'],
            ["style", "border-style", 'solid']
         ],
         "${_next}": [
            ["style", "line-height", '41px'],
            ["style", "display", 'block'],
            ["style", "top", '6px'],
            ["style", "left", '4px'],
            ["style", "font-size", '26px']
         ],
         "${symbolSelector}": [
            ["style", "height", '51px'],
            ["style", "width", '140px']
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
            { id: "eid1230", tween: [ "style", "${_next_background}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid1229", tween: [ "style", "${_next}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }         ]
      }
   }
},
"shot1p": {
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
      rect: ['31px','29px','805px','502px','auto','auto'],
      id: 'shot1',
      transform: [[0,0],[],[],['1.075','1.115']],
      clip: ['rect(0px 805px 502px 8px)'],
      fill: ['rgba(0,0,0,0)','images/shot1.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_shot1}": [
            ["style", "top", '29px'],
            ["transform", "scaleY", '1.11469'],
            ["style", "height", '502px'],
            ["transform", "scaleX", '1.07538'],
            ["style", "clip", [0,805,502,8], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '31px'],
            ["style", "width", '805px']
         ],
         "${symbolSelector}": [
            ["style", "height", '559px'],
            ["style", "width", '866px']
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
"shot2p": {
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
      id: 'shot2',
      rect: ['75px','50px','500px','313px','auto','auto'],
      transform: [[0,0],[],[],['1.299','1.322']],
      fill: ['rgba(0,0,0,0)','images/shot2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_shot2}": [
            ["style", "top", '50px'],
            ["transform", "scaleY", '1.32171'],
            ["style", "height", '313px'],
            ["transform", "scaleX", '1.29861'],
            ["style", "left", '75px'],
            ["style", "width", '500px']
         ],
         "${symbolSelector}": [
            ["style", "height", '414px'],
            ["style", "width", '649px']
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
"shot3p": {
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
      rect: ['20px','1px','500px','313px','auto','auto'],
      id: 'shot3',
      transform: [[0,0],[],[],['1.079','1.008']],
      clip: ['rect(7px 492px 309px 6px)'],
      fill: ['rgba(0,0,0,0)','images/shot3.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_shot3}": [
            ["style", "top", '1px'],
            ["transform", "scaleY", '1.00791'],
            ["style", "height", '313px'],
            ["transform", "scaleX", '1.07948'],
            ["style", "left", '20px'],
            ["style", "clip", [7,492,309,6], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '500px']
         ],
         "${symbolSelector}": [
            ["style", "height", '315px'],
            ["style", "width", '540px']
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
"hintest": {
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
      id: 'hinter',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','1044px','795px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['6px','298px','1px','240px','auto','auto'],
      fill: ['rgba(192,192,192,1)',[270,[['rgba(255,139,0,1.00)',0],['rgba(255,241,130,1.00)',100]]]]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '298px'],
            ["style", "opacity", '1'],
            ["style", "height", '240px'],
            ["gradient", "background-image", [270,[['rgba(255,139,0,1.00)',0],['rgba(255,241,130,1.00)',100]]]],
            ["style", "left", '6px'],
            ["style", "width", '1px']
         ],
         "${symbolSelector}": [
            ["style", "height", '795px'],
            ["style", "width", '1044px']
         ],
         "${_hinter}": [
            ["style", "top", '0px'],
            ["style", "height", '795px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '1044px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: true,
         timeline: [
            { id: "eid2661", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid2653", tween: [ "style", "${_Rectangle2}", "width", '1035px', { fromValue: '1px'}], position: 0, duration: 500 },
            { id: "eid2652", tween: [ "style", "${_Rectangle2}", "left", '7px', { fromValue: '6px'}], position: 0, duration: 500 }         ]
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
})(jQuery, AdobeEdge, "EDGE-8827326");
