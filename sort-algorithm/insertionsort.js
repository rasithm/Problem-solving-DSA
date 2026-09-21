const arr = [14, 9, 15, 12, 6, 8, 13];

for(let j = 1 ; j < arr.length ; j++){
    let key = arr[j]
    let i = j - 1;
    while(i >= 0 && key < arr[i]){
        arr[i + 1] = arr[i]
        i--
    }
    
    arr[i + 1] = key

}
console.log(arr)