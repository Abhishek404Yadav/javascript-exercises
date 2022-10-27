const removeFromArray = function(...args) {
    let arr=args[0];
    for(let i=0; i<=arr.length;i++){
        for(let j=1;j<=args.length;j++){
             if(arr[i]===args[j]){
                arr.splice(i,1);
             }
        }
    }
        return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
