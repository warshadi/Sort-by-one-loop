/*
    Selection Sort
*/

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            // to rest the initial to repeat the check to end of array.
            i = - 1;
        }
    }
    console.log(arr);
}

let x = [7, 5, 2, 4, 3, 9];
let y = [9, 7, 5, 4, 3, 1];
let z = [1, 2, 3, 4, 5, 6];

selectionSort(x);
selectionSort(y);
selectionSort(z);