//brutal solution
const set = new Set();
const arr1 = [1,1,2,3,4,5];
const arr2 = [2,3,4,4,5,6]
let union = [];
for(let i = 0 ; i <= arr1.length - 1 ; i++){
    set.add(arr1[i])
    set.add(arr2[i])
}

union = Array.from(set)
console.log(union)


