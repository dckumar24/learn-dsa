// Given an unsorted array arr[] of size N having both negative and positive integers.
// The task is place all negative element at the end of array without changing the order of
// positive element and negative element

const moveAllNegative=(arr)=>{
    const res=[];
    arr.map(el=>{
        if(el>=0){
            res.push(el)
        }
    })
    arr.map(el=>{
        if(el<0){
            res.push(el)
        }
    })
    res.map((el,i)=>{
        arr[i]=res[i];
    })
    return arr;
}
module.exports=moveAllNegative