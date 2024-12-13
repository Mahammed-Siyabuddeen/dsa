function reverseWords(st) {
    // code here
    let s = " i like this program very much "
    let stringArray = s.split(" ");
    let result = ""
    for (var i of stringArray.reverse()) {
        if (i.length) {
            if (result.length)
                result=result.concat(" "+i)
            else{
                result=result.concat(i)
            }
        }

    }
    
    return result;
}

console.log(reverseWords(" i like this program very much "));
