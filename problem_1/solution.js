/**
 * Created by renzoggaspary on 7/1/16.
 */
"use strict";

(function () {
    let num1 = 3,
        num2 = 5,
        maxNum = 1000;
    const output = document.querySelector('#answer');
    let returnTotal = (Multiples(num1, num2, maxNum));
    output.innerHTML = "The sum of all the multiples of " + num1 + " or " + num2 + " below " + maxNum + " is " + returnTotal;
})();

function Multiples(num1, num2, maxNum) {
    let total = 0;
    for (let i = 0; i < maxNum; i++) {
        if (i % num1 === 0 || i % num2 === 0) {
            total = i + total;
        }
    }
    return total;
}