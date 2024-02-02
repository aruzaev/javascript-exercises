const reverseString = function(string) {
    let weirdString = string.split("").reverse();
    weirdString = weirdString.join("");
    return weirdString;
};

// Do not edit below this line
module.exports = reverseString;
