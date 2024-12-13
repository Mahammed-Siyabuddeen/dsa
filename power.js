function isPowerofTwo(n) {
    // code here
    if (n <= 0)
        return false;
    for (var i = 0; i <= n / 2; i++) {
        if (Math.pow(2, i) === n)
            return true
        if (Math.pow(2, i) > n)
            return false
    }
    return false;
}

// console.log(isPowerofTwo(0));
console.log(Math.max(10,20,30));
let str=""
