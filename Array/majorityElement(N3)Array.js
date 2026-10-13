//brute force approach
const arr = [1,1,1,3,3,2,2,2];
let n = arr.length - 1;
let list = []
for(let i = 0 ; i < arr.length ; i++){
    if(list.length === 0 || list[0] !== arr[i]){
        let count = 0;
        for(let j = 0; j < arr.length ; j++){
            if(arr[i] === arr[j]){
                count++
            }
            
        }
        if(count > n/3){
            list.push(arr[i])
        }
        
    }
    if(list.length >= 2){
        break;
    }
}
console.log(list)

//better approach by using map
const arr = [1,1,1,3,3,2,2,2];
const map = new Map();
let list = [];
let n = arr.length
let min = Math.floor(n/3)
for(let i = 0 ; i < arr.length ; i++){
    const count = (map.get(arr[i]) || 0) + 1;
    map.set(arr[i] , count)

    if(count > min && !list.includes(arr[i]) ){
        list.push(arr[i])
    }
    
}
console.log(list)

