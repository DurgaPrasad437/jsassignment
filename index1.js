function removeItemFromArray(array, n) {
    const newArray = [];
   console.log(typeof(array))
    for ( let i = 0; i < array.length; i++) {
        if(array[i] !== n) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const array = prompt('Enter array: ');
const arrayToRemove = prompt('Enter array to remove: ');

//passing parameters and calling the function
const result = removeItemFromArray(array, arrayToRemove);

// displaying the result
document.write(result);



