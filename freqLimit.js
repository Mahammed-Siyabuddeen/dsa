function frequencyCount(arr) {
    // code here
    let count = {};
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        count[i+1]=0;
    }

    for (var i of arr){
        count[i]+=1
    }
    return Object.values(count)
}
console.log(frequencyCount([2, 3, 2, 3, 5]));
