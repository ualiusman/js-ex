/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let score = 0;
    for(let i = 0; i< s.length -1; i++){
        let diff = Math.abs( s.charCodeAt(i) - s.charCodeAt(i + 1));
        score  = score + diff;
    }
    return score;
};