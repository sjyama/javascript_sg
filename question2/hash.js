"use strict";

function set(sent) {
  // 入力値を配列に格納
  var sent_arr = sent.split(" ");
  // 単語と件数を連想配列に格納
  var sent_hash = {};
  for (var n of sent_arr) {
    if (n in sent_hash) {
      sent_hash[n] += 1;
    } else {
      sent_hash[n] = 1;
    }
  }

  // 出力
  var input = "";
  var output = "";
  input = '入力："' + sent + '"';
  output = "出力：";
  var a = 0;
  for (const [key, value] of Object.entries(sent_hash)) {
    if (a == 0) {
      output += "{";
    } else {
      output += ", ";
    }
    output += key + ": " + value;
    a += 1;
  }
  output += "}";
  console.log(input);
  console.log(output);
}

var sentence = prompt("文字列を入力してください");
set(sentence);
