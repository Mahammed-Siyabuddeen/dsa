function equilibriumPoint(arr) {
    // code here
    console.log(arr.length, Math.floor(arr.length / 2));

    if (!arr.length) return -1;

    let result = -1;
    let mid = arr.length % 2 === 0 ? Math.floor(arr.length / 2)-1 : Math.floor(arr.length / 2);
    let leftTotal = 0;
    let rightTotal = 0;

    for (var i = 0; i < arr.length; i++) {
        if (i === mid && arr.length%2!==0)
            continue;
        else if (i <= mid)
            leftTotal += arr[i];
        else
            rightTotal += arr[i]
    }

    if (leftTotal === rightTotal)
        result = mid + 1;
    return result;
}

console.log(equilibriumPoint([1,2,0,3]));
