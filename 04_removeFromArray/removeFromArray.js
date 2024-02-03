const removeFromArray = function(array, value) {
    const index = array.indexOf(value);
    const x = array.splice(index, 1);
    return array
   
};

// Do not edit below this line
module.exports = removeFromArray;
