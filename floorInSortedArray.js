function findFloor(arr, k) {
    // your code here
    let max=-1
    // for (var i = 0; i < arr.length; i++) {
    //     if (arr[i] > k)
    //         break;
    //     if(arr[i]<=k)
    //         max=i;
    // }
    // return max;
    let n = arr.length
    function BinarySearch(arr, low, high) {
        if(low>high)
            return;
        let mid = Math.floor((low + high) / 2);
        if(arr[mid]<=k){
            max=mid
            BinarySearch(arr,mid+1,high)
        }else{
            BinarySearch(arr,low,mid-1)
        }
        

    }
    
    BinarySearch(arr, 0, n);
    return max
}

console.log(findFloor( [1, 2, 8, 10, 11, 12, 19], 0));
