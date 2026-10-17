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



//optimal solution refer to majority element n/2
const arr = [1,1,1,1,3,2,2,2]
let n = arr.length - 1;
let el1 = null;
let el2 = null;
let cnt1 = 0;
let cnt2 = 0;
let list = []
for(let i = 0; i < arr.length ; i++){
    if(cnt1 === 0 && arr[i] !== el2){
        el1 = arr[i]
        cnt1 = 1
    }else if(cnt2 === 0 && arr[i] !== el1){
        el2 = arr[i]
        cnt2 = 1
    }
    else if(el1 === arr[i]){
        cnt1++
    }else if(el2 === arr[i]){
        cnt2++
    }
    else{
        cnt1--;
        cnt2--;
    }
}
cnt1 = 0; cnt2 = 0
for(let i = 0 ; i < arr.length; i++){
    if(arr[i] === el1) cnt1++;
    if(arr[i] === el2) cnt2++
}
let min = Math.floor(n/3);
if(cnt1 > min) {
    list.push(el1)
}
if(cnt2 > min){
    list.push(el2)
}
console.log(el1)
console.log(el2)
console.log(cnt1)
console.log(cnt2)
console.log(list)
