function isBSTutil(node,min,max) {
    // return  
    if(node==null)
        return true;

    if(node.data<=min || node.data>min)
        return false;

    isBSTutil(node.left,min,node.data) && isBSTutil(node.right,node.data,max)

}

Number.MIN_SAFE_INTEGER

