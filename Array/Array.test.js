
const Array =require('./')
describe('Array Test cases',()=>{
    it('Reverse the array',()=>{
        expect(Array.reverseTheArray(Array.arrayValue)).toEqual(Array.expectedOP.reverseOP)
    })
    it('Min and Max of the array',()=>{
        expect(Array.findMinMaxOfArray(Array.arrayValue)).toEqual(Array.expectedOP.minMaxOP)
    })
    
})