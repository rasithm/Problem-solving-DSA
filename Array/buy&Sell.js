const arr = [7,1,5,3,6,4];
let buy = arr[0]
let sell=0;
let profit;
let max = 0;
for(let i = 0 ; i < arr.length ; i++){
  if(arr[i] < buy){
    buy = arr[i]
  }else{
    profit = arr[i] - buy;
    if(profit > max){
      max = profit
    }
  }
  

} 
console.log(buy);
console.log(max);