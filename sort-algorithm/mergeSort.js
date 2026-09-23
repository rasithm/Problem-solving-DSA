const arr = [3,2,4,1,3];

const merge = (arr , low , mid , high ) => {
    let temp = [];
    let left = low;
    let right = mid + 1;
    while(left <= mid && right <= high){
        if(arr[left] <= arr[right]){
            temp.push(arr[left])
            left++
        }else{
            temp.push(arr[right])
            right++
        }
    }
    while(left <= mid){
        temp.push(arr[left])
        left++
    }
    while(right <= high){
        temp.push(arr[right]);
        right++
    }

    for(let i = low; i <= high ; i++ ){
        arr[i] = temp[i - low]
    }

}

const recursion = (arr , low , high) => {
    if(low >= high) return low
    let mid = Math.floor((low + high) / 2);
    recursion(arr , low , mid);
    recursion(arr , mid + 1 , high);
    merge(arr , low , mid , high)
}

recursion(arr , 0 , arr.length - 1);
console.log(arr)