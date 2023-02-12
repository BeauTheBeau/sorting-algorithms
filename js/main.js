import insertionSort from './insertion.js';
import bubbleSort from './bubble.js';
import selectionSort from './selection.js';
// import quickSort from './quick.js';

const elements = {
    "sort-pills": document.querySelectorAll('[data-algorithm]'),
    "sort-btn": document.querySelector('#sort'),
    "random-array-btn": document.querySelector('#generate'),
    "array": document.querySelector('#array'),
    "output": document.querySelector('#output'),
    "insertion": {
        "total-time": document.querySelector('#insertion__total__time'),
        "total-runs": document.querySelector('#insertion__total__runs'),
        "average-time": document.querySelector('#insertion__average__time')
    },
    "bubble": {
        "total-time": document.querySelector('#bubble__total__time'),
        "total-runs": document.querySelector('#bubble__total__runs'),
        "average-time": document.querySelector('#bubble__average__time')
    },
    "selection": {
        "total-time": document.querySelector('#selection__total__time'),
        "total-runs": document.querySelector('#selection__total__runs'),
        "average-time": document.querySelector('#selection__average__time')
    },
    "quick": {
        "total-time": document.querySelector('#quick__total__time'),
        "total-runs": document.querySelector('#quick__total__runs'),
        "average-time": document.querySelector('#quick__average__time')
    }
}

let algorithm = "insertion"
let runs = -1;

let stats = {
    // Array - total time, total runs, average time
    "insertion": [0, 0, 0],
    "bubble": [0, 0, 0],
    "selection": [0, 0, 0],
    "quick": [0, 0, 0]
}

// When a sort pill is clicked, change the active pill
elements["sort-pills"].forEach(pill => {
    pill.addEventListener('click', () => {
        elements["sort-pills"].forEach(pill => pill.classList.remove('active'));
        pill.classList.add('active');
        algorithm = pill.dataset.algorithm;
        console.log(algorithm);
    });
});

// Random array generator
function generateArray() {
    const array = [];
    for (let i = 0; i < 20000; i++) {
        array.push(Math.floor(Math.random() * 20000));
    }
    return array;
}

elements["random-array-btn"].addEventListener('click', () => {
    const array = generateArray();
    elements["array"].value = array.join(', ');
});

// Sort button

elements["sort-btn"].addEventListener('click', () => {

    const array = elements["array"].value.split(',').map(item => parseInt(item));

    console.log(array);
    console.log(algorithm);

    function displayResults(array, time, algorithm) {

        // Createa a new div with id of run-1, run-2, etc. and append it to the output div
        const div = document.createElement('div');
        div.classList.add('run');
        div.setAttribute('id', `run-${runs + 1}`);
        elements["output"].appendChild(div);

        // Createa a h2 element and append it to the run div
        const h2 = document.createElement('h2');
        h2.innerHTML = `Run ${runs + 1} - ${algorithm}`;
        div.appendChild(h2);

        const h3 = document.createElement('h3');
        h3.innerHTML = `Time taken: ${time} seconds`;
        div.appendChild(h3);

        // Create a new textarea element and append it to the run div
        const textarea = document.createElement('textarea');
        textarea.classList.add('form-control');
        textarea.setAttribute('rows', '10');
        textarea.setAttribute('readonly', 'true');
        div.appendChild(textarea);
        textarea.value = array;

        // Add the time taken to the times object
        stats[algorithm][0] += time;
        stats[algorithm][1] += 1
        stats[algorithm][2] = (stats[algorithm][0] / stats[algorithm][1]).toFixed(2);
        
        // Update the stats
        elements[algorithm]["total-time"].innerHTML = stats[algorithm][0].toFixed(2);
        elements[algorithm]["total-runs"].innerHTML = stats[algorithm][1];
        elements[algorithm]["average-time"].innerHTML = stats[algorithm][2];
    }

    runs += 1;
    let sorted = [];

    switch (algorithm) {

        case "insertion":
            sorted = insertionSort(array);
            displayResults(sorted[0], sorted[1], algorithm);
            break;

        case "bubble":
            sorted = bubbleSort(array);
            displayResults(sorted[0], sorted[1], algorithm);
            break;

        case "selection":
            sorted = selectionSort(array);
            displayResults(sorted[0], sorted[1], algorithm);
            break;
            
        case "quick":
            sorted = quickSort(array);
            displayResults(sorted[0], sorted[1], algorithm);
            break;
    }

});

