const union=(v1,v2)=>{
    let l1=v1.length;
    let l2=v2.length;
    let p1=0;
    let p2=0;
    let r=[];
    while(p1<l1&&p2<l2){
         if(v1[p1]<v2[p2]){
            r.push(v1[p1]);
            p1++;
         }
         else if(v1[p1]>v2[p2]){
            r.push(v2[p2]);
            p2++;
         }
         else{
            r.push(v1[p1]);
            p1++;
            p2++;
         }
    }
    if(p1<l1){
        while(p1<l1){
            r.push(v1[p1]);
            p1++;
        }
    }
    if(p2<l2){
        while(p2<l2){
            r.push(v2[p2]);
            p2++;
        }
    }
    return r;
}
const intersection=(v1,v2)=>{
    let l1=v1.length;
    let l2=v2.length;
    let p1=0;
    let p2=0;
    let r=[];
    while(p1<l1&&p2<l2){
        if(v1[p1]<v2[p2]){
           p1++;
        }
        else if(v1[p1]>v2[p2]){
           p2++;
        }
        else{
           r.push(v1[p1]);
           p1++;
           p2++;
        }
   }
   return r;

}

const unionIntersectionOfSortedArrays=()=>{
    const arr1= [2,3,4,5,6,10];
    const arr2 = [4,5,6,7,8,9,10];
    // union(arr1,arr2);
    intersection(arr1,arr2);
}
unionIntersectionOfSortedArrays();
module.exports={union,intersection};