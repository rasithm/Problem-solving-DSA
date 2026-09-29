//optimal solution
//example: 123;
//ans = 132 next possible permutation

const arr = [2,1,5,4,3,0,0];
let index = -1;
for(let i = arr.length - 2 ; i >= 0 ; i--){
    if(arr[i] < arr[i + 1]){
        index = i;
        break
    }
}
console.log(index)
for(let i = arr.length - 1; i >= index ; i--){
    if(arr[i] > index){
        [arr[index] , arr[i]] = [arr[i] , arr[index]]
        break;
    }
}
console.log(arr)
function reverseSubarray(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

reverseSubarray(arr , index + 1 , arr.length - 1)
console.log(arr)