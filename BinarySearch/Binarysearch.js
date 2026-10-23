const arr = [1,3,5,6,7,8,10,12,16,18,22];
const target = 6;
const binearySearch = (arr , n , target) => {
    let low = 0;
    let high = n;
    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] === target){
            return mid;
        }else if(target > arr[mid]){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return - 1
}
console.log(binearySearch(arr , arr.length - 1 , target))

//recursion

const arr = [1,3,5,6,7,8,10,12,16,18,22];
const target = 6;
const binarysearch = (arr , low , high , target) => {
    if(low > high){
        return - 1
    }
    let mid = Math.floor((low + high) / 2);
    if(arr[mid] === target){
        return mid;
    }else if(target > arr[mid]){
        return binarysearch(arr , mid + 1 , high, target)
    }else{
        return binarysearch(arr, low ,mid - 1 , target )
    }
}
console.log(binarysearch(arr , 0 , arr.length - 1 , target))