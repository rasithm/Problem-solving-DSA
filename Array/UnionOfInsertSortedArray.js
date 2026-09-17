const arr1 = [1,2,2,3,3,4,5,6];
const arr2 = [2,3,3,5,6,6,7]
let union = [];
let i = 0;
let j = 0;
while(i < arr1.length && j < arr2.length){
    if(arr1[i] <= arr2[j]){
        if(arr1[i] === arr2[j]){
            union.push(arr1[i])
            j++
        }
        i++
    }else if(arr2[j] <= arr1[i]){
        if(arr2[j] === arr1[i]){
            union.push(arr2[j])
            i++
        }
        j++
    }
}

console.log(union)