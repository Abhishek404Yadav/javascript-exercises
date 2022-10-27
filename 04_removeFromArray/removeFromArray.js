const removeFromArray = function(...args) {
    let arr=args[0];
    let newarray=[];
    arr.forEach(element => {
        if(!args.includes(element)) 
        // check karta hai ki args me arr ka element hai ya nhi agar hota h to true ko negate false kar deta hai or wo nahi chalta otherwise  chalta hai or newarray me wo element push ho jata hai
        newarray.push(element);
    });
        return newarray;
};

// Do not edit below this line
module.exports = removeFromArray;
