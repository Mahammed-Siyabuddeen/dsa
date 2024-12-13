function equilibriumPoint(arr) {
    // code here
    if (!arr.length) return -1;

    let sum = 0;
    for (var i of arr)
        sum += i;

    let sum2 = 0;
    for (i = 0; i < arr.length; i++) {
        sum = sum - arr[i];
        if (sum === sum2) {
            return i + 1
        }
        sum2 += arr[i]

    }
    return -1;
}

console.log(equilibriumPoint([8, 8, 3, 7, 8, 2, 7, 2]));
// console.log(5/2);
// 8, 8, 3, 7, 8, 2, 7, 2
