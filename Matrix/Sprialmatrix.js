const arr = [[1,2,3,4,5,6],
            [20,21,22,23,24,7],
            [19,32,33,34,25,8],
            [18,31,36,35,26,9],
            [17,30,29,28,27,10],
            [16,15,14,13,12,11]];

let top = 0;
let right = 5;
let left = 0;
let bottom = 5;
while(left < right && top < bottom){
    for(let i = left ; i <= right ; i++){
    console.log(arr[top][i])
    
    }
    top++;
    for(let i = top ; i <= bottom; i++ ){
        console.log(arr[i][right])
    }
    right--;
    for(let i = right ; i >= left ; i--){
        console.log(arr[bottom][i])
    }
    bottom--;
    for(let i = bottom ; i >= top ; i--){
        console.log(arr[i][left])
    }
    left++;
}