const removeFromArray = function(array,...toBeRemoved) {
    let ar = array;
    let toRemove=toBeRemoved; //toRemove should be an array if user input more than one.
    // go through toRemove one by one and go through ar one by one, remove matches found.
    let match =[];


    for (let x=0; x<toRemove.length;x++){

        for (let i=0; i<ar.length;i++){

            if (ar[i]===toRemove[x]){

                // if there is a match, record its position
                match.push(i);
            }
        }
    }

    //we want to remove in the order from the last index to the first
    // so this means we need to arrange match in order from small to big


    function compareNumber(a,b){
        return a-b;//short in ascending order
    }

    match.sort(compareNumber);

    for (let i=match.length-1;i>=0;i--){
        ar.splice(match[i],1);
    }
    return ar;
   
};

// Do not edit below this line
module.exports = removeFromArray;
