const arr = [13,46,24,52,20,9]
for(let i = 0 ; i < arr.length -1; i++){
    let min = i
    for(let j = i ; j <= arr.length -1  ; j++){
        if(arr[min] > arr[j]){
            min = j
        }
    }
    if(min !== i){
        let temp = arr[min]
        arr[min] = arr[i]
        arr[i] = temp
    }
}
console.log(arr)