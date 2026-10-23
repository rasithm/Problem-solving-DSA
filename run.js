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