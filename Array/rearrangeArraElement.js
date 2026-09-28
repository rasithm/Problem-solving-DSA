
//varitey 1
const arr = [3,1,-2,-5,2,-4];
let ans = [];
let posi = 0;
let negi = 1;
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] > 0){
        ans[posi] = arr[i] 
        posi = posi + 2
    }else{
        ans[negi] = arr[i]
        negi = negi + 2
    }
}
console.log(ans)

//varitey 2
// const arr = [3,1,-2,-5,2,4];
let pos = [];
let neg = [];
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] > 0){
        pos.push(arr[i])
    }else{
        neg.push(arr[i])
    }
}
let index = 0;
let i = 0;
let j = 0;
while(i < pos.length && j < neg.length){
    arr[index] = pos[i]
    i++; index++;
    arr[index] = neg[j]
    j++; index++;
}
while(i < pos.length){
    arr[index] = pos[i]
    i++; index++;
}
while(j < neg.length ){
    arr[index] = neg[j]
    j++; index++;
}
console.log(pos);
console.log(neg);
console.log(arr);
