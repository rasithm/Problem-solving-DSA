const arr = [7,6,2,5,7,9,1,3];

const sort = (arr , low , high) => {
    let pivot = arr[low];
    let i = low;
    let j = high;
    while(i < j){
        while(arr[i] <= pivot && i <= high){
            i++;
        }
        while(arr[j] > pivot && j >= low ){
            j--
        }
        if(i < j){
            let temp = arr[i];
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    let temp = arr[low];
    arr[low] = arr[j]
    arr[j] = temp

    return j;
}

const quicksort = (arr , low , high) => {
    if(low < high){
        let partion = sort(arr , low , high);
        quicksort(arr , low , partion -1);
        quicksort(arr , partion + 1 , high)
    }
    
}

quicksort(arr , 0, arr.length - 1)
console.log(arr)