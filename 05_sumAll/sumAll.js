const sumAll = function(min ,max) {
    let sum=0;
    if( !('number'===typeof min) ||!("number"===typeof max)) return "ERROR";
    if(min<0||max<0) return "ERROR";
        //Swapaing
        if(min>max) { // min=5,max=2
           max=min+max; // max=5+2(max=7)
           min=max-min;// min=7-5(min=2)
           max=max-min// max=7-2(max=5)
        }
        sum = (max*(max+1)/2)-(min*(min-1)/2);
        return sum;


};
// Do not edit below this line
module.exports = sumAll;
