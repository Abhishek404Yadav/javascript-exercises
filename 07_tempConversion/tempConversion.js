const ftoc = function(f) {
return Math.round((f-32)*(5/9)*10)/10;
// 1 deciaml tak round off karne ke liye 10 se multiply kiya ans ko to uska roud off 10 x ho gya 
//fir uske result ko 10 se divide kar diya to 1 decimal aa gya 2 deciaml ke liye 100 use kro and so on
};

const ctof = function(c) {
  return Math.round(((c*9/5)+32)*10)/10;
  
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
