
const arr = [2,1,3,5,4];
let max = -Infinity;
let sl = -Infinity;

//better 
for(let i = 0 ; i <= arr.length -1 ; i++){
    if(arr[i] > max){
       
        max = arr[i];
        
    }

}
for(let j = 0; j <= arr.length -1 ; j++){
    if(arr[j] > sl && arr[j] !== max){
        sl = arr[j]
    }
}


//optimized code
for(let k = 0; k <= arr.length - 1 ; k++){
    if(arr[k] > max){
        sl = max
        max = arr[k]
    }else if(arr[k] > sl && arr[k] !== max){
        sl = arr[k]
    }
}

console.log(max)
console.log(sl)