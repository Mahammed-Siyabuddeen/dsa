function findTwoElement(arr) {
    // code here
    const set = new Set();
    let n = arr.length;
    let repeat;
    let missing;
    for (var i of arr) {
        if (set.has(i))
            repeat = i;
        else
            set.add(i);
    }
    // console.log(set);
    for (var i=1; i<=n; i++){
        if(!set.has(i))
            missing=i;
    }
    return [repeat,missing]
    


}

console.log(findTwoElement([4, 3, 6, 2, 1, 1] ));
