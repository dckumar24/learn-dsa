const findKthMin=(arr,k)=>{
    const ar=[...arr]
let count=0;
let min=Number.POSITIVE_INFINITY;
let index=0;
    while(count<k){
        min=Number.POSITIVE_INFINITY;
        ar.map((el,i)=>{
            if(el<min){
                min=el;
                index=i;
            }
        })
        count=count+1;
        ar[index]=Number.POSITIVE_INFINITY;
    }
    return min;
}

const findKthMax=(arr,k)=>{
    const ar=[...arr]
    let count=0;
    let max=Number.NEGATIVE_INFINITY;
    let index=0;
        while(count<k){
            max=Number.NEGATIVE_INFINITY;
            ar.map((el,i)=>{
                if(el>max){
                    max=el;
                    index=i;
                }
            })
            count=count+1;
            ar[index]=Number.NEGATIVE_INFINITY;
        }
    return max;
}

module.exports=findKthMinMax=(arr,k)=>{
    
    return [findKthMin(arr,k),findKthMax(arr,k)];
}