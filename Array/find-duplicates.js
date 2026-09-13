//brute force
const set = new Set();
const arrs = [1,2,3,3,5]
for(let i = 0; i <= arrs.length - 1 ; i++){
    set.add(arrs[i])
}
console.log(set)

//better 

const arr = [1,2,3,3,5,5,6,7,8,9,9]
let correctarr = [] //sc = O(n)
for(let i = 0 ; i <= arr.length -1 ; i++){
    if(arr[i] !== arr[i + 1]){
        correctarr.push(arr[i])
    }
}
console.log(correctarr)
console.log(correctarr.length)


//optimized 


let i = 0;
for(let j = 1 ; j <= arr.length -1 ; j++){
    if(arr[j] !== arr[i]){
        i++
        arr[i] = arr[j]
    }
}
let lenght = i + 1

arr.length = lenght
console.log(arr)
console.log(arr.length)