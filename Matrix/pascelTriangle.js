//pascel triangle problem using ncr formula
//formula : Ncr= n!
//             -----
//              r!(n-r)!

//problem 1 : find the pascel triangle of given number of rows and colounm 
let r = 5;
let c = 3; 
const Ncr = (n , r) => {
 let res = 1;
 for(let i = 0; i < r; i++){
    res = res * (n - i)
    res = res / (i + 1) 
 }
 return res   
}

console.log(Ncr(r - 1, c -1));

//problem 2 : find the pascel triangle of given number of rows and colounm to print values 

// let r = 6;
// let c = 4; 
// const Ncr = (n , r) => {
//  let res = 1;
//  for(let i = 0; i < r; i++){
//     res = res * (n - i)
//     res = res / (i + 1) 
//  }
//  return res   
// }

for(let i = 1 ; i <= r; i++){
    console.log(Ncr(r - 1, i - 1))
}


//optimized formula 
let row = 6;
let res = 1;

// Print the first element (always 1)
console.log(res); 

// Calculate and print the remaining elements in O(1) step per element
for (let i = 1; i < row; i++) {
    res = res * (row - i);
    res = res / i;
    console.log(res);
}


// problem 3 print all number
let rows = 6
const NCR = (n) => {
    let row = n;
    let res = 1;


    console.log(res); 

    // Calculate and print the remaining elements in O(1) step per element
    for (let i = 1; i < row; i++) {
        res = res * (row - i);
        res = res / i;
        console.log(res);
    }
}

for(let i = 1 ; i <= rows; i++){
    NCR(i)
    console.log("//")
}