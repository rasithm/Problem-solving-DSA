const arr = [-1,0,1,2,-1,-4];
const map = new Map();
const set = new Set()
let need;
let list = [];

for(let i = 0; i < arr.length ; i++){
    for(let j = i + 1 ; j < arr.length; j++){
        let need = - (arr[i] + arr[j])

        if(map.has(need)){
            let sort = [arr[i], arr[map.get(need)] , arr[j]].sort((a,b) => a - b );
            set.add(sort.join(','))
        }
       map.set(arr[j] , j) 
    }
    map.clear();
    
}
const result = Array.from(set).map(item => item.split(',').map(Number))
console.log(result)
console.log(map)


//optimal solution using two pointer technique

const arr = [-2,-2,-2,-1,-1,-1,0,0,0,2,2,2,2];
arr.sort((a,b) => a - b)
let list = []


for(let i = 0 ; i < arr.length - 1 ; i++){
    if(i > 0 && arr[i] === arr[i - 1]) continue;
    let j = i + 1;
    let k = arr.length - 1;
    while(j < k){
        let value = arr[i] + arr[j] + arr[k]
        if(value === 0){
            list.push([arr[i] , arr[j] , arr[k]])
            while(j < k && arr[j] === arr[j + 1]) j++;
            while(j < k && arr[k] === arr[k - 1]) k--;
            j++;
            k--;
        }else if(value < 0){
            j++;    
        }else{
            k--;
        }
    }
    

}
console.log(list)