//{ Driver Code Starts
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// function printList(node) {
//     let current = node;
//     let result = [];
//     while (current !== null) {
//         result.push(current.data);
//         current = current.next;
//     }
//     console.log(result.join(' '));
// }

// const readline = require('readline');
// const rl = readline.createInterface(
//     {input : process.stdin, output : process.stdout, terminal : false});

// let input = [];
// rl.on('line', (line) => { input.push(line); });

// rl.on('close', () => {
//     let t = parseInt(input[0].trim());
//     let idx = 1;
// let 
// while (t > 0) {
//     let arr = input[idx].trim().split(/\s+/).map(Number);
//     let x = parseInt(input[idx + 1].trim());
//     idx += 2;
//     let head = null;
//     if (arr.length > 0 && arr[0] !== 0) {
//         head = new Node(arr[0]);
//         let tail = head;
//         for (let i = 1; i < arr.length; i++) {
//             tail.next = new Node(arr[i]);
//             tail = tail.next;
//         }
//     }

//     let obj = new Solution();
//     let res = obj.getKthFromLast(head, x);
//     console.log(res);
//     t--;
// }
// });

// } Driver Code Ends


/* class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}*/

/**
 * @param Node head
 * @param number k
 * @returns number
 */

const head = new Node(1);
var temp = head
for (var i = 2; i < 5; i++) {
    temp.next = new Node(i)
    temp = temp.next;
}
var temp2 = head;
while (temp2) {
    console.log(temp2.data);
    temp2 = temp2.next

}


function getKthFromLast(head, k) {
    // code here
    let count = 0
    let result = -1
    function getnode(node) {
        if (!node)
            return;
        getnode(node.next);
        count += 1
        if (count === k)
            return result = node.data
        if (head === node)
            return -1

    }
    getnode(head)
    return result;
}

getKthFromLast(head, 2)