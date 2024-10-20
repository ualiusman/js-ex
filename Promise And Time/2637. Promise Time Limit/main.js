/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {


    return async function (...args) {
        const promise = [
            new Promise(resolve => resolve(fn(...args))), // Promise that resolves with the result of executing fn(...args)
            new Promise((resolve, reject) => setTimeout(() => reject('Time Limit Exceeded'), t)) //Promise that rejects with 'Time Limit Exceeded' after t milliseconds
        ]
        // Return a new promise that resolves or rejects as soon as one of the promises in the array settles
        return Promise.race(promise);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */