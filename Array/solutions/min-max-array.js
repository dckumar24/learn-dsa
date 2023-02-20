const findMinMaxOfArray=(arr)=>{
    let min=arr[0];
    let max=arr[0];
    arr.map(el=>{
        max=el>=max?el:max;
        min=el<=min?el:min;
    })
    return [min,max]
}
module.exports=findMinMaxOfArray