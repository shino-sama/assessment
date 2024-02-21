'use strict';
const userNameInput=document.getElementById('user-name');
const assessmentButton=document.getElementById('assessment');
const resultDivision=document.getElementById('result-area')
const tweetDivision=document.getElementById('tweet-area')

assessmentButton.addEventListener(
  'click',
  ()=>{
    const userName=userNameInput.value;
    if(userName.length===0){
      //名前が空の時は処理を終了する
      return;
    }
    
    //診断結果表示エリアの作成
    resultDivision.innerText='';
    const header=document.createElement('h3');
    header.innerText='診断結果';
    resultDivision.appendChild(header);

    const paragraph=document.createElement('p');
    const result=assessment(userName);
    paragraph.innerText=result;
    resultDivision.appendChild(paragraph);

    //ツイートエリアの作成
    tweetDivision.innerText='';
    const anchor=document.createElement('a');
    const hrefValue=

    'https://twitter.com/intent/tweet?button_hashtag='+
   encodeURIComponent('お前のいいところはあるか?')+
    '&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href',hrefValue);
    anchor.setAttribute('class','twitter-hashtag-button')
    anchor.setAttribute('data-text',result);
    anchor.innerText='Tweet #お前のいいところはあるか？';

    tweetDivision.appendChild(anchor);


    const script=document.createElement('script');
    script.setAttribute('src','https://platform.twitter.com/widgets.js');
    tweetDivision.appendChild(script);
  }
);

userNameInput.addEventListener(
  'keydown',
  (event)=>{
    if(event.code==='Enter'){
      assessmentButton.dispatchEvent(new Event('click'));
    }
  }
)

const answers=[
'###userName###の良いところなどない。これから作れ。',
'###userName###のいいところは声かもしれない。もしかしたらお前の声に心動かされる人がいるかもしれない。私はそうは感じないが。',
'###userName###のいいところは顔だ。さぞモテることだろう。爆発しやがれ。',
'###userName###のいいところは熱意だ。周りのへなへなしている奴に喝を入れてやれ。',
'###userName###のいいところは厳しさだ。ただし自分には甘い。クソ野郎じゃないか。',
'###userName###のいいところは知識だ。無駄に知識ばっかりつけても、活用できなきゃ意味がないぞ。',
'###userName###のいいところはユニークさだ。ただし、そのノリでネット社会に出ても身内ノリで滑って終わりだ。デジタルタトゥーだな。あまり調子に乗るな。',
'###userName###のいいところは用心深さだ。石橋を叩いて叩いて叩き割るタイプだな。石橋がかわいそうだぞ。',
'###userName###のいいところは見た目だ。オシャレに気を使っていていいんじゃないか?ただしチー牛を見下すんじゃない。',
'###userName###のいいところは決断力だ。あまりに即決で後々後悔するタイプだな。人生歩むの下手くそだな。',
'###userName###のいいところは思いやりだ。以上。',
'###userName###のいいところは感受性だ。あまりにも感受性が高すぎて周りがドン引きしてるぞ。',
'###userName###のいいところは節度だ。30まで恋人は出来ないかもしれないな。節度を保ちすぎて親しい友人までいないんじゃ、恋人なんて100年早いぞ。',
'###userName###のいいところは好奇心だ。好奇心があるのは良いことだが、お前のそれは身を滅ぼす。将来は事業に乗り出して失敗し、借金地獄かもしれないな。頑張れよ。',
'###userName###のいいところは気配りだ。人と関わるのが上手いが、友人以上にならないところが玉に瑕だな。元気出せよ。',
'###userName###のいいところはその全てだ。お前は最強だ。',
'###userName###のいいところは自制心だ。暴飲暴食をしないから太らないな。良かったな。',
];
/**名前の文字列を渡すと診断結果を返す関数
 * @param{string}userName ユーザの名前
 * @return{string}診断結果
 */
function assessment(userName){

  //全文字のコード番号を取得してそれを足して合わせる
  let sumOfCharCode=0;
  for(let i=0;i<userName.length;i++){
    sumOfCharCode=sumOfCharCode+userName.charCodeAt(i);
  }

//文字のコード番号の合計を回数の数で割って添字の数値を求める
const index=sumOfCharCode%answers.length;
let result=answers[index];

result=result.replaceAll('###userName###',userName)
return result;
}

//テストを行う関数
function test(){
  console.log('診断結果の文章のテスト');

  //太郎
  console.log('太郎');
  console.log(assessment('太郎'));
  console.assert(
    assessment('太郎')===
    '太郎のいいところは知識だ。無駄に知識ばっかりつけても、活用できなきゃ意味がないぞ。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );

  //次郎
  console.log('次郎');
  console.log(assessment('次郎'))
  console.assert(
    assessment('次郎')===
    '次郎のいいところは気配りだ。人と関わるのが上手いが、友人以上にならないところが玉に瑕だな。元気出せよ。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );

  //花子
  console.log('花子');
  console.assert(
    assessment('花子')===
    '花子のいいところは顔だ。さぞモテることだろう。爆発しやがれ。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
    );

    console.log('診断結果の文章のテスト終了');
    console.log('同じ名前なら、同じ結果を出力することのテスト');
    //ここにテストを追加
    console.log('同じ名前なら、同じ結果を出力することのテスト終了');
}
 test();