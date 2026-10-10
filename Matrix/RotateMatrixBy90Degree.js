const arr = [[1,2,3,4],
             [5,6,7,8],
             [9,10,11,12],
             [13,14,15,16]];

const rows = 4;
const cols = 4;
const matrix = [];

for (let i = 0; i < rows; i++) {
  matrix[i] = new Array(cols).fill(0);
}
let temp = arr.length - 1
for(let i = 0; i < arr.length ; i++){
    for(let j = 0 ; j < arr[i].length ; j++){
        matrix[j][temp] = arr[i][j];
    }
    temp--
    
}


console.log(arr)
console.log(matrix)


// const arr = [[1,2,3,4],
//              [5,6,7,8],
//              [9,10,11,12],
//              [13,14,15,16]];

const reverse = (row) => {
    let start = 0;
    let end = row.length - 1;
    while(start < end){
        let temp = row[start];
        row[start] = row[end];
        row[end] = temp
        start++;
        end--;
    }
}
for(let i = 0 ; i < arr.length ; i++){
    for(let j = i + 1 ; j < arr[i].length ; j++){
        [arr[j][i] , arr[i][j] ] = [arr[i][j] , arr[j][i]]
    }
}
console.log(arr)
for (let i = 0; i < arr.length; i++) {
  reverse(arr[i]);
}

console.log(arr)