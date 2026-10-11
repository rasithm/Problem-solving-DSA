const arr = [1,2,3,-3,1,1,1,4,2,-3];
const map = new Map();
map.set(0, 1)
let presum = 0;
let count = 0;
const k = 3;
for(let i = 0; i < arr.length; i++){
    presum += arr[i];
    let remove = presum - k;
    if(map.has(remove)){
        count = count + map.get(remove)
    }
    map.set(presum , (map.get(presum) || 0) + 1)
}
console.log(count) 