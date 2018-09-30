"use strict";

//変数
var startnum = 0;
var kekka = 0;
var process = " （";

function countdown(n) {
  if (n != 0) {
    kekka = Number(kekka) + n;
    if (startnum === n) {
      process += n;
    } else {
      process += "+" + n;
    }
    countdown(n - 1);
  } else {
    process += "）";
  }
}

function set(num) {
  // 入力チェック
  if (!isNaN(num)) {
    startnum = Number(num);
    // 再帰処理
    countdown(startnum);
    // 出力
    console.log("入力：" + num);
    console.log("出力：" + kekka + process);
  } else {
    console.log("エラー：数値以外が入力されています。");
  }
}

var input = prompt(
  "再帰：入力された値までの数字を全部、足した結果を出力します。"
);
set(input);
