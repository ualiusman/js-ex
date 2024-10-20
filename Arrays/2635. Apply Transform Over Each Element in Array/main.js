/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        arr[i] = fn(arr[i], i);
    }

    return arr;
};