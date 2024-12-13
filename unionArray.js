function unionArray(a, b) {
    let set = new Set();

    for (var i of a) {
        if (!set.has(i))
            set.add(i);
    }
    for (var i of b) {
        if(!set.has(i))
            set.add(i)
    }
    return set.size
}

console.log(unionArray([1, 2, 1, 1, 2],  [2, 2, 1, 2, 1]  ));
