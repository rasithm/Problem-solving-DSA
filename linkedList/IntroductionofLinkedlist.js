class Node{
    constructor(data1 , next1 = null){
        this.data = data1;
        this.next = next1;
    }
}

// const node2 = new Node(3);
// const node1 = new Node(2 , node2);

const arr2LL = (arr) => {
    let head = new Node(arr[0]);
    let mover = head;
    for(let i = 0 ; i < arr.length ; i++){
        let temp = new Node(arr[i]);
        mover.next = temp;
        mover = mover.next 
    }
    return head
}

const arr = [1,2,3,4,5];
let head = arr2LL(arr)
console.log(head)
// console.log(node1.next.data);