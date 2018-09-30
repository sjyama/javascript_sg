"use strict";

var count = 0;
var num = 0;

function judge(inp) {
  console.log("入力値：" + inp);
  var ans = "";
  // 正解の数字をランダムに設置
  if (count === 0) {
    num = Math.floor(Math.random() * 100) + 1;
  }
  count += 1;

  // 入力値をチェックして判定を実施
  if (!isNaN(inp) && inp.length > 0) {
    inp = parseInt(inp, 10);
    if (num === inp) {
      console.log("判定結果：あたり！！・・・" + count + "回目で当てました！");
    } else if (num < inp) {
      console.log("判定結果：もっと下");
      start_highlow("入力してください。");
    } else if (num > inp) {
      console.log("判定結果：もっと上");
      start_highlow("入力してください。");
    }
  } else {
    console.log("判定結果：エラー");
    start_highlow("入力に誤りがあります。数値で入力してください。");
  }
}

function start_highlow(msg) {
  var input = "";
  input = prompt(msg);
  judge(input);
}

start_highlow("0-100で数字を当てて");
