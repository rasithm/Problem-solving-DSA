const arr = [2,1,3,5,4];
let min = Infinity;
let ss = Infinity;

for(let i = 0 ; i <= arr.length - 1; i++){
    if(arr[i] < min){
        sl = min
        min = arr[i]
    }else if(arr[i] < ss && arr[i] !== min){
        ss = arr[i]
    } 
}
console.log(min)
console.log(sl)



//second largest and second smallest number in an array

// const arr = [2,1,3,5,4];
// let min = Infinity;
// let ss = Infinity;
let max = -Infinity
let sl = -Infinity;
for(let i = 0 ; i <= arr.length - 1; i++){
    if(arr[i] < min){
        ss = min
        min = arr[i]
    }else if(arr[i] < ss && arr[i] !== min){
        ss =arr[i]
    }
    if(arr[i] > max){
        sl = max;
        max = arr[i]
    }else if(arr[i] > sl && arr[i] !== max){
        sl = arr[i]
    }
}

console.log(min)
console.log(ss)

console.log(max)
console.log(sl)