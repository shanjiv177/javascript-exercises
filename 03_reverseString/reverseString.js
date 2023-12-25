const reverseString = function(word) {
    let letters = word.split("");
    let len = letters.length;

    let rev = "";
    for (let i =0; i < len; i++){
        rev += letters[len-i-1];
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
