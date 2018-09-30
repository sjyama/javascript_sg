"use strict";

var memo = "";

// 出力用function
function output(hash_cnv, n) {
  for (const [key, value] of Object.entries(hash_cnv)) {
    // 入れ子の場合は再帰
    if (typeof hash_cnv[key] === "object") {
      memo += key + " : { ";
      output(hash_cnv[key], n);
    } else {
      memo += key + " : " + hash_cnv[key] + " } ";
      if (n === 0) {
        console.log(memo);
      } else {
        console.log(memo.replace("foo", "uryyyy!!"));
      }
      memo = "";
    }
  }
}

function main() {
  var hash = {
    main: {
      first: { text: "foobar" },
      second: { text: "fizzbuzz", child: { text: "foobar" } }
    },
    sub: {
      first: { text: "fizzbuzz", child: { text: "foobar" } },
      second: {
        third: { text: "barfoo", child: { text: "foobar" } },
        forth: { child: { text: "jit_foo_foo" } }
      }
    },
    text: "foofava"
  };

  // 出力
  console.log("（変換前）");
  output(hash, 0);
  console.log("");
  console.log("（変換後）");
  output(hash, 1);
}

prompt("OKを押して「変換」");
main();
