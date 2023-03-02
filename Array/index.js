const inputArrays=require('./Values/inputArrays');
const expectedOP=require('./Values/expectedArray');
const reverseTheArray = require('./solutions/reverseTheArray');
const findMinMaxOfArray=require('./solutions/min-max-array');
const findKthMinMax=require('./solutions/kthMinMax');
const sortColors=require('./solutions/sortColors');
const moveAllNegative=require('./solutions/moveAllNegative');
const {union}=require('./solutions/unionIntersectionOfSortedArrays');
const {intersection}=require('./solutions/unionIntersectionOfSortedArrays');

module.exports = {
    inputArrays,
    expectedOP,
    reverseTheArray,
    findMinMaxOfArray,
    findKthMinMax,
    sortColors,
    moveAllNegative,
    union,
    intersection
}