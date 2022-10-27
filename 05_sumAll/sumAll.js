const sumAll = function(n ,m) {
    let sum=0;
    if( !('number'===typeof n )||!("number"===typeof m)) return "ERROR";
    if(n<0||m<0) return "ERROR";
        if(n>m){
            sum = (n*(n+1)/2)-(m*(m-1)/2);
        }
        else if(m>n){
            sum = (m*(m+1)/2)-(n*(n-1)/2);
        }
        return sum;


};

// Do not edit below this line
module.exports = sumAll;
