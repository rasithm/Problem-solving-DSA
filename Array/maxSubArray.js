const arr = [-2,-3,4,-1,-2,1,5,-3];
// const arr = [-4,-2,-3,-1]
let max = -Infinity;
let sum = 0;
let ansStart = -1;
let ansEnd = -1;
let longSubArr = [] //optional
let start
for(let i = 0 ; i < arr.length ; i++){
  if(sum === 0){
    start = i
  }
  sum = sum + arr[i];
  if(sum < 0 ){
    sum = 0
  }
  if(sum > max){
    max = sum
    ansStart = start;
    ansEnd = i
  }

  if(max < 0){
    max = 0
  }
}

//optional
for(let i = ansStart ; i <= ansEnd ; i++){
  longSubArr.push(arr[i])
}

console.log(sum)
console.log(max)
console.log(longSubArr)
