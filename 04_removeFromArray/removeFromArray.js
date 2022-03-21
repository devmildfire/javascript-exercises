const removeFromArray = function(initialArray, ...restArgs) {
    
    for (const itemToRemove of restArgs) {  // a for loop for all the arguments
                                             // except the initialArray

        for (i = 0; i < initialArray.length; i++) { //a loop for initialArray items
            if (initialArray[i] === itemToRemove) {
               initialArray[i]  = null; //set to null items of initialArray
            }                           // which are equal to ones
                                        // we need to remove                         
        }                                     
    }
    let outputArray = initialArray.filter(element => {  //filter nulls from
                                                        //initialArray
        return element !== null;
    });
    return outputArray;
};



// Do not edit below this line
module.exports = removeFromArray;
