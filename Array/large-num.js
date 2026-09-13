const arr = [1,4,2,5,6,3,7,8,9,10];
let max = -Infinity;
for(let i=0; i<= arr.length - 1; i++){
    if(max < arr[i] ){
        max = arr[i]
    }
}

console.log(max)