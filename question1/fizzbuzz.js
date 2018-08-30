'use strict';

function fizz_buzz(x){
  if(x % 15 === 0)
    return "FizzBuzz";
  else if(x % 3 === 0)
    return "Fizz";
  else if(x % 5 === 0)
    return "Buzz";
  else
    return x;
}

function countup(max){
  var n = 1;
  var ans = new Array();
  while(n < max){
    ans.push(fizz_buzz(n));
    n = n + 1;
  }
  console.log(ans.join(', '));
}

var num = prompt('数字を入力してください');
countup(num);
