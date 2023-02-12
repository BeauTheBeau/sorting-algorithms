
function selectionSort(array) {

    const start = performance.now();

    for (let i = 0; i < array.length; i++) {

        let min = i;

        for (let j = i + 1; j < array.length; j++) {

            if (array[j] < array[min]) {
                min = j;
            }
        }

        if (min !== i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }

    const end = performance.now();
    const time = (end - start) / 1000;

    return [array, time];
    
}

export default selectionSort;