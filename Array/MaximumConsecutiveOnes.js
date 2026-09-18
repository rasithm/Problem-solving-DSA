const arr = [1,1,0,1,1,1,0,1,1];
let count = 0;
let max = 0;
for(let i = 0; i <= arr.length-1; i++){
    if(arr[i] === 1){
        count = count + arr[i];
        if(count > max){
            max = count
        }
    }
    else if(arr[i] === 0){
        count = 0
    }
}
console.log(max)