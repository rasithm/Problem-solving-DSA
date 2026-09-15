//brute solution
const arr = [1,0,2,3,2,0,0,4,5,1];
let temp = []
for(let i = 0 ; i <= arr.length -1 ; i++){
    if(arr[i] !== 0){
        temp.push(arr[i])        
    }
}
console.log(arr)
console.log(temp)
for(let j= 0 ; j <= temp.length - 1 ; j++){
    arr[j] = temp[j]
}
console.log(arr)
console.log(temp)
for(let k = temp.length - 1 ; k <= arr.length -1 ; k++ ){
    arr[k] = 0
}
console.log(arr)
console.log(temp)


//optimal solution
// const arr = [1,0,2,3,2,0,0,4,5,1];
let i = 0;
for(let j = 0; j<=arr.length -1 ;j++){
    if(arr[j] !== 0){
        arr[i] = arr[j]
        i++
    }
}
for(let k = i ; k <= arr.length -1 ; k++){
    arr[k] = 0
}
console.log(arr)