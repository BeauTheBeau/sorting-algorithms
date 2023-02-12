
function insertionSort(array) {
    
    const start = performance.now();
    
    let sortedArray = [];
    for (let i = 0; i < array.length; i++) {
        let j = sortedArray.length - 1;
        while (j >= 0 && array[i] < sortedArray[j]) {
            j--;
        }
        sortedArray.splice(j + 1, 0, array[i]);
    }

    const end = performance.now();

    return [sortedArray, (end - start) / 1000];
}

export default insertionSort;
