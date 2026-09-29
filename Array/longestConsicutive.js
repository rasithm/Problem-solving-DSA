const arr = [100,102,100,101,101,4,3,2,3,2,1,1,1,2]
arr.sort((a,b) => a - b);
console.log(arr)
let count = 0;
let long = 0;
let mini = -Infinity;
for(let i = 0 ; i< arr.length ; i++){
    if(arr[i] === mini){
        continue;
    }

    if(arr[i] === mini + 1){
        count++
    }else{
        count = 1
    }
        
    mini = arr[i]

    if(count > long){
        long = count
    }
}

console.log(count)
console.log(long)
console.log(mini)