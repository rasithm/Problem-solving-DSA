const arr = [1,2,3,3,5,8,8,10,10,11];
const target = 6;
const bs = (arr , n, target) => {
    let ans = n;
    let low = 0;
    let high = n - 1;
    while(low <= high){
        let mid = Math.floor(low + ((high - low) / 2));
        if(arr[mid] >= target){
            ans = arr[mid];
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
   console.log(ans) 
}
bs(arr , arr.length , target)

//upper bound smallest number arr[x] > target;
const arr = [1,2,3,3,5,8,8,10,10,11];
const target = 5;
const bs = (arr , n, target) => {
    let ans = n;
    let low = 0;
    let high = n - 1;
    while(low <= high){
        let mid = Math.floor(low + ((high - low) / 2));
        if(arr[mid] > target){
            ans = arr[mid]
            high = mid -1
        }else{
            low = mid + 1
        }
    }
   console.log(ans) 
}
bs(arr , arr.length , target)

//largest no in arr <= x this floor 
const arr = [10,20,30,40,50];
const target = 25;
const bs = (arr , n, target) => {
    let ans = -1;
    let low = 0;
    let high = n - 1;
    while(low <= high){
        let mid = Math.floor(low + ((high - low) / 2));
        if(arr[mid] <= target){
            ans = arr[mid]
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
   console.log(ans) 
}
bs(arr , arr.length , target)

//smallest no in arr >= x this ceil
//lowerbound ans 
