/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let result = [];

    result = arr1.map((obj) => {
        let obj1 = arr2.find(x => x.id == obj.id);

        return { ...obj, ...obj1 };


    });
    result.push(...arr2);

    result = result.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.id === value.id
        ))
    );
    result.sort((a, b) => a.id - b.id);
    return result;

};