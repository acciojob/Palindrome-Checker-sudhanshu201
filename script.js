// complete the given function

function palindrome(str){

    // convert the string to lowercase
    str = str.toLowerCase();
    // remove non-alphanumeric characters
    str = str.replace(/[^a-z0-9]/gi, "");
    // reverse the string
    let reversedStr = str.split("").reverse().join("");
    // check if the reversed string is equal to the original string
    return str === reversedStr;
}

module.exports = palindrome
