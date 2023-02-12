
function bubble(array) {
    
    const start = performance.now();
    
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    }

    const end = performance.now();
    
    array = array.join(', ');
    
    return [array, (end - start) / 1000];
}

export default bubble;