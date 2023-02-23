
const Array =require('..')
describe('Array Test cases',()=>{
    it('Reverse the array',()=>{
        expect(Array.reverseTheArray(Array.inputArrays.normalIP)).toEqual(Array.expectedOP.reverseOP)
    })
    it('Min and Max of the array',()=>{
        expect(Array.findMinMaxOfArray(Array.inputArrays.normalIP)).toEqual(Array.expectedOP.minMaxOP)
    })
    it('3rd Min and Max of the array',()=>{
        expect(Array.findKthMinMax(Array.inputArrays.normalIP,3)).toEqual(Array.expectedOP.kthMinMaxOP)
    })
    it('Sort color output',()=>{
        expect(Array.sortColors(Array.inputArrays.sortColorIP)).toEqual(Array.expectedOP.sortColorOP);
    })
    it('Move all Negative to end and postive to start in same order as IP',()=>{
        expect(Array.moveAllNegative(Array.inputArrays.moveNegativeIP)).toEqual(Array.expectedOP.moveNegativeOP);
    })
    
})