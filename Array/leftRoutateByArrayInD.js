// Left rotate an array by d positions
//better approach
const d = (value) => {
    const arr = [1,2,3,4,5];
    let times = value % arr.length
    console.log(times)
    console.log("//")
    let temp = [];
    for(let j = 0; j < arr.length - times -1 ; j++ ){
        temp[j] = arr[j]
    }    
    for(let i = 0 ; i <= arr.length -1 ; i++){
        
        arr[i] = arr[i + times]
        
        console.log(arr[i])
    }
    console.log("//")
    console.log(arr.length - times)
    for(let k = 0 ; k <= temp.length - 1 ; k++){
        console.log(temp[k])
        arr[arr.length - times + k] = temp[k]
    }    
    console.log(arr)
}
d(2)

//optimal approach


const reverse = (arr , start , end) => {
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

const dp = (values) => {
    const arr = [1,2,3,4,5,6];
    let times = values % arr.length;
   reverse(arr , 0 , times - 1);
   reverse(arr , times , arr.length - 1)
   reverse(arr , 0 , arr.length - 1) 
   console.log(arr)
}


dp(2)