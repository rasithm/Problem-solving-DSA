



const arr = [1,2,3,3,5]

let check = false;
for(let i = 0; i <= arr.length - 1 ; i++){
    if(arr[i] > arr[(i - 1)]){
        check = true
    }else{
        check = false
    }
}
console.log(check)