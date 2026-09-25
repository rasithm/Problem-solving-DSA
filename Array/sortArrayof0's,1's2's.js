//better solution 

const arr = [0,1,2,0,1,2,1,2,0,0,0,1]
let cut0 = 0;
let cut1 = 0;
let cut2 = 0;

for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] === 0){
        cut0++
    }else if(arr[i] === 1){
        cut1++
    }else{
        cut2++
    }
}

for(let i = 0 ; i <= cut0 ; i++){
    arr[i] = 0
}
for(let i = cut0 ; i <= cut0 + cut1 ; i++){
    arr[i] = 1
}
for(let i = cut1 + cut2 ; i < arr.length ; i++){
    arr[i] = 2
}
console.log(arr)

//optimal solution
// const arr = [0,1,1,0,1,2,1,2,0,0,0];

let low = 0;
let mid = 0;
let high = arr.length - 1;
while(mid <= high){
    if(arr[mid] === 0){
        [arr[low] , arr[mid]] = [arr[mid] , arr[low]];
        low++ ; 
        mid++;
    }else if(arr[mid] === 2){
        [arr[mid] , arr[high]] = [arr[high] , arr[mid]]
        high--;
    }else{
        mid++;
    }
}
console.log(arr)