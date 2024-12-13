function findDuplicates(arr) {
    // code here
    // let arr = [];
    let result =new Set();
    let seen = new Set();
    for( var i of arr) {
        if (seen.has(i)) {
           result.add(i)
        }
        else
            seen.add(i)
    }
    return Array.from(result).sort((a,b) => a-b)

}

console.log(findDuplicates([15, 13, 13, 3, 2, 1, 0, 16, 4, 12, 14, 5, 11, 6, 16, 7, 9, 3, 10, 2, 14, 8]));
