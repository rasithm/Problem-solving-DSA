class Queue{
    arr = [] ; size = 10; csize = 0; start = -1 ; end = -1;
    push(x){
        if(this.csize === this.size) return "queue is full";
        if(this.csize === 0){
            this.start = 0;
            this.end = 0;
        }else{
            this.end = (this.end + 1) % this.size
        }
        this.arr[this.end] = x ; 
        this.csize += 1;
    }

    pop(){
        if(this.csize === 0){
            return null
        }
        const el = this.arr[this.start];
        if(this.csize === 1){
            this.start = this.end = -1
        }else{
            this.start = (this.start + 1)% this.size
        }

        this.csize -= 1
        return el;
    }
    top(){
        if(this.csize === 0){
            return "empty"
        }
        return this.arr[this.start]
    }
    length(){
        return this.csize;
    }
}

const q = new Queue();
q.push(10);
q.push(20);
console.log(q.top());   // 10
console.log(q.length());  // 2
console.log(q.pop());   // 10
console.log(q.top());   // 20
console.log(q.length());