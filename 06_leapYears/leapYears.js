const leapYears = function(year) {
  return  (year%4===0)&&(!(year % 100==0)||year%400===0);
  //       T and (T||T),(T||F),(F||T)
  //  (F||F)=> isme wo 100 se divide ho ja ra h to T negate F then 400 se divide nhi ho raha then F
};

// Do not edit below this line
module.exports = leapYears;