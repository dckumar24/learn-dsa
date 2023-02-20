//arr=[2,0,2,1,1,0]
const sortColors=(arr)=>{
    let ar=[...arr];
    let count={'r':0,'w':0,'b':0};
    ar.map(el=>{
        if(el==0)count['r']++;
        if(el==1)count['w']++;
        if(el==2)count['b']++
    })
    let i=0;
    while(count['r']>0){
        ar[i]=0;
        i++
        count['r']--;
    }
    while(count['w']>0){
        ar[i]=1;
        i++;
       count['w']--;
    }
    while(count['b']>0){
        ar[i]=2;
        i++;
        count['b']--;
    }
    return ar;
}
module.exports=sortColors;