const arr = [1,2,3,4,5]
let j = 1;
let temp = arr[0];
for(let i = 0; i < arr.length -1 ; i++){
    
    arr[i] = arr[j]
    j++
    
}
arr[arr.length - 1] = temp
console.log(arr)
