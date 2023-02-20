const reverseTheArray=require('../index');
describe("Array Specs",function (){
    it("reverse the array",()=>{
        expect(reverseTheArray([1,2,3,4,5,6,7,8,9,10])).toEqual([10,9,8,7,6,5,4,3,2,1]);
    })
})