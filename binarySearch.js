function binarysearch(arr, k) {
    // Code Here
    let n = arr.length
    return binarysearchUtil(arr, k, 0, n - 1);

}

function binarysearchUtil(arr, k, low, high) {

    if (low > high)
        return -1

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === k) {
        if(arr[mid-1]&& arr[mid-1]===k)
            return binarysearchUtil(arr, k, low, mid - 1);
        return mid;
    }
    if (k < arr[mid])
        return binarysearchUtil(arr, k, low, mid - 1);
    if (k > arr[mid])
        return binarysearchUtil(arr, k, mid + 1, high);
}

console.log(binarysearch([1, 2, 3, 4, 5], 4));
