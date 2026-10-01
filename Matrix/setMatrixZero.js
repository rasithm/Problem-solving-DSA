const arr =[[1,1,1,1],[1,0,0,1],[1,1,0,1],[1,1,1,1]]
const makeRow = (i) => {
    for(let j = 0; j < arr.length ; j++){
        if(arr[i][j] !== 0){
            arr[i][j] = -1
        }
    }
};
const makeColoum = (j) => {
    for(let i = 0; i < arr.length ; i++){
        if(arr[i][j] !== 0){
            arr[i][j] = -1
        }
    }
};
for(let i = 0; i< arr.length; i++){
    for(let j = 0 ; j < arr[i].length ; j++){
        if(arr[i][j] === 0){
            makeRow(i);
            makeColoum(j);
        }
    }
}
console.log(arr)
for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j < arr.length ; j++){
        if(arr[i][j] === -1){
            arr[i][j] = 0
        }
    }
}

console.log(arr)


const arr1 =[[1,1,1,1],
            [1,0,1,1],
            [1,1,0,1],
            [0,1,1,1]
        ]
let col0 = 1
for(let i = 0 ; i < arr1.length ; i++){
    if((arr1[i][0]) === 0){
        col0 = 0
    }
    for(let j = 1 ; j < arr1[i].length ; j++){
        if(arr1[i][j] === 0){
            arr1[0][j] = 0;
            arr1[i][0] = 0
        }
    }
}
for(let i = arr1.length - 1 ; i >= 0 ; i--){
    for(let j = arr1[i].length - 1 ; j >= 1 ; j--){
        if(arr1[0][j] === 0 || arr1[i][0] === 0){
            arr1[i][j] = 0
        }
    }
    if(col0 === 0){
        arr1[i][0] = 0
    }
}

console.log(arr1)
console.log(col0)