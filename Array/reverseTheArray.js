module.exports= reverseTheArray=(arr)=>{
    // let arr=[1,2,3,4,5,6];
let result=[];
for(let i=arr.length-1;i>=0;i--){
    result.push(arr[i]);
}
console.log("Output",result);
return result;
}