"use strict";

var count = 0;
var input_flg = true;
var input_num;
var answer = [];
var count_h = 0;
var count_b = 0;
var kekka = "";

// 入力チェック
function input_check(data) {
  console.log("入力値: " + data);
  if (!isNaN(data) && data.length === 4) {
    input_flg = true;
    data = Number(data);
    // 配列にセット
    input_num = [];
    input_num.push(Math.floor(Math.floor(data % 10000) / 1000)); // 1000の位
    input_num.push(Math.floor(Math.floor(data % 1000) / 100)); // 100の位
    input_num.push(Math.floor(Math.floor(data % 100) / 10)); // 10の位
    input_num.push(Math.floor(data % 10)); // 1の位
  } else {
    input_flg = false;
  }
}

// 重複数字が存在しない４桁の値を作成
function randomarray() {
  var n = 0;
  while (n < 4) {
    var num = Math.floor(Math.random() * 10);
    // 重複がない数値の場合のみ配列に追加
    if (answer.indexOf(num) === -1) {
      answer.push(num);
      n += 1;
    }
  }
}

function hitcount() {
  var x = 0;
  count_h = 0;
  while (x < input_num.length) {
    if (input_num[x] === answer[x]) {
      count_h += 1;
    }
    x += 1;
  }
  kekka = kekka + count_h + "Hits, ";
}

function blowcount() {
  var y = 0;
  count_b = 0;
  while (y < input_num.length) {
    if (answer.indexOf(input_num[y]) !== -1) {
      count_b += 1;
    }
    y += 1;
  }
  kekka = kekka + count_b + "Blow";
}

function main(inp) {
  input_check(inp);
  if (input_flg === true) {
    if (count === 0) {
      randomarray();
    }
    count += 1;
    // 入力値と答えの判定
    if (input_num.toString() === answer.toString()) {
      console.log(count + "回で正解！");
    } else {
      kekka = "";
      kekka = kekka + "外れ： ";
      hitcount(); // hitチェック
      blowcount(); // blowチェック
      console.log(kekka);
      start_highlow("4桁の数字は？？");
    }
  } else {
    console.log("入力に誤りがあります。数字4桁で入力してください。");
    start_highlow("4桁の数字は？？");
  }
}

function start_highlow(msg) {
  var input = "";
  input = prompt(msg);
  main(input);
}

start_highlow("4桁の数字は？");
