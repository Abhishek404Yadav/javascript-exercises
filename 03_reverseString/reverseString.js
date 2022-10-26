const reverseString = function(name) {
    return name.split("").reverse().join("");
    //.split("")--> split the String every charecter to Array element with custom seprator none
    //.reverse --> Reverse the Array 
    //.join("")-->Convert the array to string with custom seprator none 
};

// Do not edit below this line
module.exports = reverseString;
