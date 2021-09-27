'use strict';

/**
 * 数値の配列を受け取って、その要素の合計を返す関数
 */
// add 関数は数値の配列を受け取り、全てを足し合わせる関数
function add(numbers) {
    let result = 0;
    for (const num of numbers) {
        result = result + num;
    }
    return result;
}

// 特定の関数をモジュールとしてファイルの外部から使えるようにするには、使えるようにしたい関数やオブジェクトを module.exports に代入する
module.exports = {
    add: add
};
