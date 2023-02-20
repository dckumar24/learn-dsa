const reverseTheArray=require('./index');
describe('Array Test cases',()=>{
    it('Reverse the array',()=>{
        expect(reverseTheArray([1,2,3,4,5,6,7])).toEqual([7,6,5,4,3,2,1])
    })
    
})