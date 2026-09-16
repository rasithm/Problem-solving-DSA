const arr = [1,2,3,4,5];
const reverse = (arr , start , end) => {
    while(start < end){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++;
        end -- ;
    }
}
const d = (values) => {
    let times = values % arr.length
    console.log(arr)
    reverse(arr , arr.length - times , arr.length - 1)
    console.log(arr)
    reverse(arr , 0 , arr.length - times - 1 )
    console.log(arr)
    reverse(arr ,0 , arr.length - 1)
    console.log(arr)
}

d(2)
console.log(arr)