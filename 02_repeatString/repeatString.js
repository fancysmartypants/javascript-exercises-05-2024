const repeatString = function(string, number) {
    let num = number;
    let str = string;
    let repeatedString='';
    if (num <0) {
        return repeatedString="ERROR";
    }

    for (let i=0; i< num; i++){
        repeatedString+=str;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
