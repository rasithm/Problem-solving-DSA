const arr = [1, 1, 2, 3, 3, 4, 4];
let max = arr[0];
for(let i = 0; i < arr.length; i++){
    max = Math.max(max, arr[i])
}
console.log(max)
let hash = new Array(max + 1).fill(0);
for(let i = 0; i < arr.length; i++){
    hash[arr[i]]++
}
console.log(hash)
for(let i = 0; i < hash.length; i++){
    if(hash[i] === 1){
        console.log(i)
        break;
    }
}


//optimized approach to find the number which appears once in an array where all other numbers appear twice

let xor = 0;
for(let i = 0 ; i < arr.length ; i++){
    xor = xor ^ arr[i]
}
console.log(xor)