const arr = [10,22,12,3,0,6]
let leader = [];
let mini = -Infinity
for(let i = arr.length - 1 ; i >= 0 ; i--){
    if(arr[i] > mini){
        leader.push(arr[i])
        mini = arr[i]
    }
}
console.log(leader)