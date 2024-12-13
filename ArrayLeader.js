function leaders(a) {
    // code here
    // let a = []
    let max = 0;
    let result =[]
    for (var i = a.length - 1; i >= 0; i--) {
        if(a[i]>=max){
            result.unshift(a[i]);
            max=a[i];
        }
    }
    return result;      

}

console.log(leaders([61, 61, 17]));
