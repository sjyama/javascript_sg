"use strict";

function fizz_buzz(x) {
	if (x % 15 === 0) return "FizzBuzz";
	else if (x % 3 === 0) return "Fizz";
	else if (x % 5 === 0) return "Buzz";
	else return x;
}

function countup(max) {
	var ans = [];
	for (var n = 1; n < max; n++) {
		ans.push(fizz_buzz(n));
	}
	console.log(ans.join(", "));
}

var num = prompt("数字を入力してください");
countup(num);
