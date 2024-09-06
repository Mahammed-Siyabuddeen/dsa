
class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    add(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
        }else{
           let current=this.head
            while(current.next){
                current=current.next;
            }
            current.next=newNode
        }
    }
    removeLast(){
        let current=this.head
        let prev=null
        while(current.next){
            if(current.next)
                prev=current
            current=current.next
        }
        prev.next=null
    }
    display(){
        let current=this.head
        while(current){
             process.stdout.write(current.data+"->")
            current=current.next
        }
          process.stdout.write("null")
    }
}
const list=new LinkedList()
list.add(1)
list.add(2)
list.add(3)
list.removeLast()
list.display()
