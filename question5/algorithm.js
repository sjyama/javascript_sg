"use strict";

//変数
var list = [];
var kekka_sum = 0;
var qlist_asc = [];
var qlist_desc = [];

function set(xxx) {
  console.log("入力値 " + xxx);
  list = xxx.split(",");
  check(list); // 入力チェック

  sum(list); // 合計
  average(list); // 平均
  maximum(list); // 最大
  minimum(list); // 最小
  bsort_asc(list); // バブル昇順
  bsort_desc(list); // バブル降順

  qsort_asc(list, 0, list.length - 1); // クイック昇順
  console.log("クイックソート（昇順）：" + qlist_asc);

  qsort_desc(list, 0, list.length - 1); // クイック降順
  console.log("クイックソート（降順）：" + qlist_desc);
}

// 入力チェック
function check(data) {
  for (var i = 0; i < data.length; i++) {
    console.log("data: " + data[i]);
    if (!isNaN(data[i])) {
      data[i] = Number(data[i]);
    } else {
      start_algorithm(
        "不正な値が存在します。カンマ区切りで6個の数字を入力してください。"
      );
    }
  }
}

// 合計
function sum(data) {
  for (var i = 0; i < data.length; i++) {
    kekka_sum += Number(data[i]);
  }
  console.log("合計値：" + kekka_sum);
}

// 平均
function average(data) {
  var ave = kekka_sum / data.length;
  console.log("平均値：" + ave);
}

// 最大
function maximum(data) {
  var max = data[0];
  for (var i = 0; i < data.length; i++) {
    if (max < data[i]) {
      max = data[i];
    }
  }
  console.log("最大値:" + max);
}

// 最小
function minimum(data) {
  var min = data[0];
  for (var i = 0; i < data.length; i++) {
    if (min > data[i]) {
      min = data[i];
    }
  }
  console.log("最小値:" + min);
}

// バブルソート：昇順
function bsort_asc(data) {
  for (var i = 0; i < data.length - 1; i++) {
    for (var j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        var n = data[j];
        data[j] = data[j + 1];
        data[j + 1] = n;
      }
    }
  }
  console.log("バブルソート（昇順）：" + data);
}

// バブルソート：降順
function bsort_desc(data) {
  for (var i = 0; i < data.length - 1; i++) {
    for (var j = 0; j < data.length - i - 1; j++) {
      if (data[j] < data[j + 1]) {
        var n = data[j];
        data[j] = data[j + 1];
        data[j + 1] = n;
      }
    }
  }
  console.log("バブルソート（降順）：" + data);
}

// クイックソート：昇順
function qsort_asc(data, begin, end) {
  var pivot = data[begin];
  var b = begin;
  var e = end;

  while (begin < end) {
    while (data[end] >= pivot && begin < end) {
      end--;
    }
    if (begin != end) {
      data[begin] = data[end];
      begin++;
    }
    while (data[begin] <= pivot && begin < end) {
      begin++;
    }
    if (begin != end) {
      data[end] = data[begin];
      end--;
    }
  }
  data[begin] = pivot;
  pivot = begin;
  begin = b;
  end = e;

  if (begin < pivot) {
    qsort_asc(data, begin, pivot - 1);
  }
  if (pivot < end) {
    qsort_asc(data, pivot + 1, end);
  }
  qlist_asc = data;
}

// クイックソート：降順
function qsort_desc(data, begin, end) {
  var pivot = data[begin];
  var b = begin;
  var e = end;

  while (begin < end) {
    while (data[end] <= pivot && begin < end) {
      end--;
    }
    if (begin != end) {
      data[begin] = data[end];
      begin++;
    }
    while (data[begin] >= pivot && begin < end) {
      begin++;
    }
    if (begin != end) {
      data[end] = data[begin];
      end--;
    }
  }
  data[begin] = pivot;
  pivot = begin;
  begin = b;
  end = e;

  if (begin < pivot) {
    qsort_desc(data, begin, pivot - 1);
  }
  if (pivot < end) {
    qsort_desc(data, pivot + 1, end);
  }
  qlist_desc = data;
}

function start_algorithm(msg) {
  var sentence = prompt(msg);
  set(sentence);
}

start_algorithm("カンマ区切りで6個の数字を入力してください。");
