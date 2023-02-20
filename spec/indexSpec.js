const Array=require('../Array');

describe("Array Specs",function (){
    it("reverse the array",()=>{
        expect(Array.reverseTheArray(Array.arrayValue)).toEqual(Array.expectedOP.reverseOP);
    });
    it('min and max in array',()=>{
        expect(Array.findMinMaxOfArray(Array.arrayValue)).toEqual(Array.expectedOP.minMaxOP)
    })
})