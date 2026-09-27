// const arr = [2, 2, 3, 3, 1, 2, 2];
const arr = [7,7,5,7,5,1,5,7,5,5,7,7,5,5,5,5];
const map = new Map();
const n = arr.length;

// Step 1: Count element frequencies
for (let i = 0; i < arr.length; i++) {
  const num = arr[i];
  map.set(num, (map.get(num) || 0) + 1);
}

// Step 2: Find the majority element (> n / 2)
let majorityElement = null;

for (let [num, count] of map) {
  if (count > n / 2) {
    majorityElement = num;
    break;
  }
}

console.log("Frequency Map:", map);
console.log("Majority Element:", majorityElement); // Output: 2


//mores voting algorithm

console.log(arr.length)
// const arr = [3,2,2,2,1,2,1]
let element = null;
let count = 0;
for(let i = 0; i < arr.length ; i++){
    if(count === 0){
        element = arr[i]
        count = 1
    }else if(element === arr[i]){
        count++
    }else{
        count--;
    }
}
let freq = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === element) freq++;
}
console.log(freq)

if (freq > Math.floor(arr.length / 2)) {
  console.log("Majority Element:", element);
} else {
  console.log("No Majority Element found");
}
