const reverseString = function(string) {
    let str=string;
    // if string is 'hello there'
    let strArray=str.split("");
    // this should output an array of e.g. [h,e,l,l,o, ,t,h,e,r,e]
    let reverseArray = [];
    for (let i=str.length-1;i>=0;i--){
        reverseArray.push(strArray[i]);
    }
    let reversedString = reverseArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
