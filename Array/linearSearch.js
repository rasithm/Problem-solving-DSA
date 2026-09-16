const arr= [6,7,8,4,1]
const target = 4;
for(let i = 0 ; i <= arr.length - 1 ; i++ ){
    if(arr[i] === target){
        
        console.log(i)
        return i;
    }
}
console.log(-1)
return -1;
