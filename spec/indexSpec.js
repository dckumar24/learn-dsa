const Array=require('../Array');

describe("Array Specs",function (){
    it("reverse the array",()=>{
const exp = require('constants')
        expect(Array.reverseTheArray(Array.inputArrays.normalIP)).toEqual(Array.expectedOP.reverseOP);
    });
    it('min and max in array',()=>{
        expect(Array.findMinMaxOfArray(Array.inputArrays.normalIP)).toEqual(Array.expectedOP.minMaxOP)
    })
    it('3rd min and max of arrary',()=>{
        expect(Array.findKthMinMax(Array.inputArrays.normalIP,3)).toEqual(Array.expectedOP.kthMinMaxOP)
    });
    it('Sort color output',()=>{
        expect(Array.sortColors(Array.inputArrays.sortColorIP)).toEqual(Array.expectedOP.sortColorOP);
    });
    it('Move all Negative to end and postive to start in same order as IP',()=>{
        expect(Array.moveAllNegative(Array.inputArrays.moveNegativeIP)).toEqual(Array.expectedOP.moveNegativeOP);
    });
    it('Union of two sorted Arrays',()=>{
        expect(Array.union(Array.inputArrays.sorted1IP,Array.inputArrays.sorted2IP)).toEqual(Array.expectedOP.unionOP);
    });
    it('Intersection of two sorted Arrays',()=>{
        expect(Array.intersection(Array.inputArrays.sorted1IP,Array.inputArrays.sorted2IP)).toEqual(Array.expectedOP.intersectionOP);
    });
    
})