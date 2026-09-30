const arr = [100,102,100,101,101,4,3,2,3,2,1,1,1,2]
arr.sort((a,b) => a - b);
console.log(arr)
let count = 0;
let long = 0;
let mini = -Infinity;
for(let i = 0 ; i< arr.length ; i++){
    if(arr[i] === mini){
        continue;
    }

    if(arr[i] === mini + 1){
        count++
    }else{
        count = 1
    }
        
    mini = arr[i]

    if(count > long){
        long = count
    }
}

console.log(count)
console.log(long)
console.log(mini)


const arr = [100,102,100,101,101,4,3,2,3,2,1,1,1,2]

const longestConsicutive = (arr) => {
    const set = new Set(arr);
    if(arr.length === 0) return 0;
    let longest = 0;
    for(let i = 0 ; i < arr.length ; i++){
        let currentElement = arr[i]
        if(!set.has(currentElement - 1)){
            let count = 1;

            for(let i = currentElement + 1; set.has(i) ; i++ ){
                count++
            }

            if(count > longest){
                longest = count
            }
        }
    }

    return longest
}
console.log(longestConsicutive(arr))