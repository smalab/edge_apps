
//
//  scoreCT
//
//  Created by 庄崎 哲生 on 2014/02/07.
//  Copyright (c) 2014年 庄崎 哲生. All rights reserved.
//


//localStorageに引数と保存データの値を比べ大きい方を保存
//IDは各ゲーム内で設定

function ScoreUpdate(score,ID){


 max = localStorage.getItem(“ID”);

 max = parseInt( max , 10 );

 if(max<score){

   localStorage.setItem(“ID”,max);

   }


}
