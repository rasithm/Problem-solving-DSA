class Node{
    constructor(data1 , next1 = null){
        this.data = data1;
        this.next = next1
    }
}

// const node2 = new Node(2);
// const node1 = new Node(1 , node2);

// console.log(node1.next.data)
const arr2ll = (arr) => {
    let head = new Node(arr[0]);
    let mover = head;
    for(let i = 1; i < arr.length ; i++){
        let temp = new Node(arr[i]);
        mover.next = temp;
        mover = temp;
    }
    return head
}
const lengthofll = (head) =>{
    let cnt = 0
   let temp = head;
    while(temp != null){
        // console.log(temp.data);
        temp = temp.next;
        cnt++
    } 
    return cnt
}

const checkIfPresent = (head , target) => {
    let cnt = 0
   let temp = head;
    while(temp != null){
        // console.log(temp.data);
        if(temp.data === target){
            return `value exsist ${temp.data} in ${cnt} length`
        }
        temp = temp.next;
        cnt++
    } 
    return 0;
}

const arr = [1,2,3,4,5];
const values = arr2ll(arr);
// let temp = values;
// while(temp != null){
//     console.log(temp.data);
//     temp = temp.next;
// }
const length = lengthofll(values);
console.log(length)
console.log(checkIfPresent(values , 3))
// console.log(values)