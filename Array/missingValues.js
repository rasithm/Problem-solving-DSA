const arr = [1,2,4,5];
let n = 5;
let valid = 0;
let missing = [];
for(let i = 1 ; i <= n; i++){
    for(let j = 0; j <= arr.length - 1; j++){
        if(arr[j]   === i){
            valid = 1
            break;
        }else{
            valid =0 ;
        }
    }
    if(valid === 0){
        missing.push(i)
    }

}
console.log(arr)
console.log(missing);

//better solution
