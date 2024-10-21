/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n === 0)
        return arr;

    let result = [];
    for (obj of arr) {
        if (Array.isArray(obj)) {
            const st = flat(obj, n - 1);
            result.push(...st);
        }


        else {
            result.push(obj);
        }
    }


    return result;
};