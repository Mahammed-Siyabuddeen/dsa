function commonElements(arr1, arr2, arr3) {
    // Code Here
    let obj = {}
    let obj2={}
    for (var i of arr1) {
        obj2[i]=1
    }
    for (var i of arr2) {
        if (obj2[i])
            obj2[i]=2
      
    }
    for (var i of arr3) {
        if (obj2[i]===2)
            obj[i]=i
    }
    let res= Object.values(obj).length? Object.values(obj).sort((a,b)=>a-b): [-1]
    return  res;
}

// console.log(commonElements([1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100], [3, 4, 15, 20, 30, 70, 80, 120]));
console.log(commonElements( [1 ,5, 10, 20 ,40, 80] , [6, 7 ,20 ,80 ,100] ,[3 ,4, 15, 20 ,30 ,70 ,80, 120]))
