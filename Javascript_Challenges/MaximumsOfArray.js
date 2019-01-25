/*
Task
Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repeatition of numbers in the array/list could occur.

*/

function maxProduct(numbers, size) {
    // sorting array from largest to smalles so we can just multiple values based on index
    let sorted = numbers.sort(function (a, b) {
        return b - a;
    });

    let ans = 1;
    // we can now just mulitple each index because we have sorted from largest to smalles
    for (var i = 0; i < size; i++) {
        ans *= sorted[i];
    }

    return ans;
}