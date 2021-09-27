'use strict';

/* 
パッケージとしてインストールした自作の sum モジュールを s という変数に代入
s は add というメソッドを持ったオブジェクトである。
sum モジュールの add メソッドに数値の配列を渡すことで、足し合わせた結果を計算
 */
const s = require('sum');
console.log(s.add([1, 2, 3, 4]));
