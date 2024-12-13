// function Stack() {
//     let values = [];
//     function push(value) {
//         values.push(value);
//     }
//     function pop() {
//         return values.pop();
//     }
// }
function isParenthesisBalanced(s) {
    // code here
    let stack = [];
    let strArray = s.split("");
    let flag = true;
    for (var i of strArray) {
        switch (i) {
            case "{": stack.push("}");
                break;
            case "(": stack.push(")");
                break;
            case "[": stack.push("]");
                break;
            default:
                if (i !== stack.pop()) {
                    return flag = false;
                }
        }
    }
    if(stack.length)
        return false;
    return flag;
}

console.log(isParenthesisBalanced("([]"));
