function bfsOfGraph(adj) {
    // code here
    let n = adj.length;
    let q = [];
    let res=[]
    let visited = Array(n).fill(false);
    console.log(visited);
    q.push(0);
    visited[0]=true;
    
    while (q.length > 0) {
        let t=q.shift();
        res.push(t);
        for ( var v of adj[t]){
            if(!visited[v]){
                visited[v]=true;
                q.push(v)
            }

        }
    }
    return res;


}

console.log(bfsOfGraph( [[1], [0, 2, 3], [1], [1, 4], [3]]));


// var n = adj.length;
// var result = [];
// var traveled = new Set();
// for (let i = 0; i < n; i++) {
//     if (!traveled.has(i))
//         result.push(i);
//     traveled.add(i);

//     // console.log(adj[i]);
//     for (let j = 0; j < adj[i].length; j++) {

//         if (!traveled.has(adj[i][j])) {
//             console.log("ff", adj[i][j]);
//             result.push(adj[i][j]);
//             traveled.add(adj[i][j])
//         }
//         // console.log(result);

//     }

//     if (n === result.length)
//         return result;
// }
// return result