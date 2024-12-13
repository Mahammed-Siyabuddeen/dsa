function     areAnagrams(s1, s2) {
    // code here
   let obj={};
   let obj2={}
   if(s1.length!==s2.length)
    return false;
    for (var i of s1.split("")){
        if(obj[i])
            obj[i]+=1
        else
            obj[i]=1
    }
    for (var i of s2.split("")){
        if(obj2[i])
            obj2[i]+=1
        else
            obj2[i]=1
    }   
    for (var i in  obj){
        console.log(obj);
        if(obj[i]!==obj2[i])
            return false;
    }
    return true
            
}
console.log(areAnagrams("g","gw"))
//  console.log("geeks","kseeg")

