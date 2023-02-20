const reverseTheArray=(arr)=>{
    // let arr=[1,2,3,4,5,6];
let result=[];
for(let i=arr.length-1;i>=0;i--){
    result.push(arr[i]);
}
return result;
}
module.exports= reverseTheArray