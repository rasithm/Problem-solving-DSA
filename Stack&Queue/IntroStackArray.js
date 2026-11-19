class Stack{
    top = -1
    constructor(){
        this.item = [];
    }

    push(value){
        this.top++;
        this.item[this.top] = value 
    }

    peek(){
        if(this.top === -1){
            return "stack is empty"
        }
        return this.item[this.top]
    }

    pop(){
        if(this.top === -1){
            return
        }
        this.top-- 
    }

    size(){
        return this.top + 1;
    }
}

const stack = new Stack();
console.log(stack);
stack.push(10)
stack.push(20);
console.log(stack.item);
stack.item.pop()
stack.pop()
console.log(stack.item)
console.log(stack.peek());
console.log(stack.size())
