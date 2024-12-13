
function getPairs(arr) {
    // code here
    let set=new Set();
    let result={}

    for(var num of arr){
        let complements= -num
        if(set.has(complements)){
            let key=Math.abs(num)
            if(!result[key]){
                const normalization =[num,complements].sort((a,b)=>a-b);
                result[key]=normalization
            }
        }
        set.add(num)
    }

    return Object.values(result).reverse();
}

let data = "-45 362 -561 758 -751 957 -303 -558 -501 267 383 80 -318 310 342 -229 -765 103 -197 263 -44 304 562 546 958 16 600 522 -739 -227 -671 -251 381 -850 -632 -495 -343 -19 973 394 738 944 871 818 -855 -35 721 336 -847 968 -514 -813 439 -277 -679 586 929 -527 -32 -765 327 65 31 -434 9 -611 -559 -945 915 -254 118 -111 -666 -65 539 -307 -336 -871 -702 730 329 146 328 -963 363 930 -542 460 329 118 213 868 -412 -904 219 371 422 729 -487 814 234 507 319 -282 736 484 511 -211 -493 299 605 671 214 -286 196 462 -706 -998 853 -522 -496 11 588 -894 -532 414 -457 -429 -77 -208 -520 -476 -787 -823 -175 -818 846 -247 -410 164 -643 -45 -661 -323 -705 203 619 -649 -498 -56 -582 -181 -815 790 455 718 906 -562 -470 421 -460 -161 641 -249 -559 -265 615"
console.log(getPairs( data.split(" ").map(item=>Number(item))));
// console.log(getPairs( [-1, 0, 1, 2, -1, -4]));

