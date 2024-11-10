/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve,reject) => {
         setTimeout(() => {
            const success = true;
            if(success){
                resolve(millis);
            }else {
                reject("Promise Rejected!")
            }
         },millis);
    })
    
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */