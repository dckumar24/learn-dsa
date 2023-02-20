const Array=require('../Array');

describe("Array Specs",function (){
    it("reverse the array",()=>{
        expect(Array.reverseTheArray(Array.arrayValue)).toEqual(Array.expectedOP.reverseOP);
    });
    it('min and max in array',()=>{
        expect(Array.findMinMaxOfArray(Array.arrayValue)).toEqual(Array.expectedOP.minMaxOP)
    })
    it('3rd min and max of arrary',()=>{
        expect(Array.findKthMinMax(Array.arrayValue,3)).toEqual(Array.expectedOP.kthMinMax)
    })
    
})