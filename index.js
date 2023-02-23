const Array=require('./Array/index')
console.log('input array',Array.inputArrays.normalIP);

console.log('reverse of array',Array.reverseTheArray(Array.inputArrays.normalIP))
console.log('Min and max of array',Array.findMinMaxOfArray(Array.inputArrays.normalIP))
console.log('3rd min and max of array',Array.findKthMinMax(Array.inputArrays.normalIP,3))
console.log('Sort color output',Array.sortColors(Array.inputArrays.sortColorIP));
console.log('Move all Negative to end and postive to start with out altering order',Array.moveAllNegative(Array.inputArrays.moveNegativeIP));