const rotateCycleByOne=(arr)=>{
    let l=arr.length-1;
    let x=arr[l];
     while(l){
       arr[l]=arr[l-1]
       l--;
    }
    arr[0]=x;
    return arr;
}
rotateCycleByOne([1,2,3,4,5,6]);
module.exports=rotateCycleByOne;