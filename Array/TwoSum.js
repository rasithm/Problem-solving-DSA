const arr = [2,6,5,8,11]
const target = 14;

for(let i =0 ; i < arr.length ; i++){
    for(let j = i + 1 ; j < arr.length ; j++){
        let values = arr[i] + arr[j]
        if(values === target){
            console.log("yes")
            console.log([i,j])
        }
        // else{
        //     console.log("no");
        //     console.log([i,j])
        // }
    }
}

//better solution using hashmap

// const arr = [2,6,5,8,11]
// const target = 14;
const map = new Map();
for(let i = 0 ; i < arr.length ; i++){
    const needed = target - arr[i]
    if(map.has(needed)){
        console.log("yes")
        console.log([map.get(needed) , i])
        break;
    }

    map.set(arr[i] , i)
}

//optimal approach using two pointer technique
// const arr = [2,6,5,8,11]
// const target = 14;
const sortedArr = arr.sort((a,b) => a - b);
let left = 0;
let right = arr.length - 1;

while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === target){
        console.log("yes")
        console.log([left, right])
        break;
    }
    else if(sum < target){
        left++;
    }
    else{
        right--;
    }
}