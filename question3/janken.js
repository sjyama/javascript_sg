"use strict";

function randomm() {
  return Math.floor(Math.random() * 3);
}

function janken(player) {
  var hands = ["グー", "チョキ", "パー"];
  var kekka = "";
  var computer = randomm();
  player = parseInt(player, 10); //入力値が文字列や空の場合は"NaN"を返す。"1a"の場合は"1"を返す。

  // じゃんけん判定
  if (player === computer) {
    // あいこ
    kekka = "draw";
  } else {
    if (
      (player === 0 && computer === 1) ||
      (player === 1 && computer === 2) ||
      (player === 2 && computer === 0)
    ) {
      // 勝ち
      kekka = "win";
    } else if (
      (player === 0 && computer === 2) ||
      (player === 1 && computer === 0) ||
      (player === 2 && computer === 1)
    ) {
      // 負け
      kekka = "lose";
    } else {
      // その他
      kekka = "err";
    }
  }

  // 出力
  console.log("「ぽい！」");
  console.log("　＊あなた： " + hands[player]);
  console.log("　＊コンピューター： " + hands[computer]);

  if (kekka === "draw") {
    console.log("「アイコでしょ！」");
    start_janken();
  } else if (kekka === "win") {
    console.log("「あなたの勝ち！」");
  } else if (kekka === "lose") {
    console.log("「あなたの負け！」");
  } else {
    console.log("「エラー！入力に誤りがあります！」");
    start_janken();
  }
}

function start_janken() {
  var hand = prompt("「じゃんけん・・・」", "＞ 0.グー 1.チョキ 2.パー");
  janken(hand);
}

start_janken();

