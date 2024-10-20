/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            resultArr.push(arr[i]);
        }
    }

    return resultArr;

};