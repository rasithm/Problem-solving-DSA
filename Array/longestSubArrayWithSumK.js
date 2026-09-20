//brute force approach
const arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
const k = 3;
let sum = 0;
let maxlength = 0;
for(let i = 0 ; i < arr.length ; i++){
    sum = 0;
    for(let j = i ; j < arr.length ; j++){
        
        sum = sum + arr[k]
        if(sum === k){
            maxlength = Math.max(maxlength , j - i + 1)
        }
    }
}
console.log(maxlength)


//better approach using hashmap
let currentsum = 0;
let maxLength = 0;
const map = new Map();
for(let i = 0 ; i < arr.length ; i++){
   
    currentsum = currentsum + arr[i]
    console.log(currentsum)

    if(currentsum === k){
        maxLength = i + 1
    }

    if(map.has(currentsum - k)){
        
        maxLength = Math.max(maxLength ,i - map.get(currentsum - k))
        
    }

    if(!map.has(currentsum)){
        
        map.set(currentsum , i)
    }

}
console.log(maxLength)


// optimal solutin 
const arr = [1,2,3,1,1,1,1,4,2,3];
const k = 6;
let currentsum = 0;
let maxLength = 0;
let i = 0;
// let j = 0;
for(let j = 0 ; j < arr.length ; j++){
    currentsum = currentsum + arr[j];

    if(currentsum === k){
        maxLength = Math.max(maxLength , j - i + 1)
    }

    if(currentsum > k){
        currentsum = currentsum - arr[i]
        i++
    }
    // j++
}
console.log(maxLength)