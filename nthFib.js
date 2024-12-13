function     nthFibonacci(n) {
    // your code here
    let f1=0, f2=1,f3;
    for(let i=0; i<n; i++){
        f3=f1+f2;
        f2=f1
        f1=f3
    }
    return f1;
}

console.log(nthFibonacci(1));
