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
        expect(Array.findKthMinMax(Array.inputArrays.normalIP,3)).toEqual(Array.expectedOP.kthMinMax)
    })
    
})