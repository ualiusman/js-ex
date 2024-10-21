/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    // Create a map for arr2 for O(1) lookups
    const map2 = new Map(arr2.map(obj => [obj.id, obj]));

    // Combine arr1 with arr2 using the map for faster access
    const resultMap = new Map();

    // Process arr1
    for (const obj of arr1) {
        const obj2 = map2.get(obj.id);
        resultMap.set(obj.id, { ...obj, ...obj2 });
    }

    // Add arr2 objects that are not in arr1
    for (const obj of arr2) {
        if (!resultMap.has(obj.id)) {
            resultMap.set(obj.id, obj);
        }
    }

    // Convert resultMap to an array and sort by id
    const result = Array.from(resultMap.values()).sort((a, b) => a.id - b.id);

    return result;
};