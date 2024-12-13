class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
const head = new Node(10);
var temp = head
for (var i = 2; i < 6; i++) {
    temp.next = new Node(i*10)
    temp = temp.next;
}
var temp2 = head;
while (temp2) {
    console.log(temp2.data);
    temp2 = temp2.next

}
function     getMiddle(node) {
    // your code here
    let count=0
    let d=0
    let middle=0
    function travelNode(node){
        if(!node)
            return;
        count++
        travelNode(node.next);
        d++
        let m=count%2===0?Math.floor(count/2):Math.round(count/2)
        if(m === d)
            middle=node.data

    }
     travelNode(node)
     return middle
}
console.log('-----');

console.log(getMiddle(head));

