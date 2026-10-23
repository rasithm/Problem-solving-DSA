const arr = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5];
arr.sort((a,b) => a - b);
let list = [];
const target = 8;
for(let i = 0 ; i < arr.length - 3 ; i++){
    if(i > 0 && arr[i] === arr[i - 1]) continue;
    for(let j = i + 1; j < arr.length - 2; j++ ){
        if( j > i + 1 && arr[j] === arr[j - 1]) continue
        let k = j + 1;
        let l = arr.length - 1;
        
        while(k < l){
            let value = arr[i] + arr[j] + arr[k] + arr[l];
            if(value === target){
                list.push([arr[i] ,arr[j] , arr[k] , arr[l]]);
                while(k < l && arr[k] === arr[k + 1]) k++;
                while(k < l && arr[l] === arr[l - 1]) l--;
                k++;
                l--;
            }else if(value < target){
                k++
            }else{
                l--
            }
        }
    }
}
console.log(list)