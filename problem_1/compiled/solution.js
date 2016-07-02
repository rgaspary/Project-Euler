/**
 * Created by renzoggaspary on 7/1/16.
 */
"use strict";

(function () {
    var num1 = 3,
        num2 = 5,
        maxNum = 1000;
    var output = document.querySelector('#answer');
    var returnTotal = Multiples(num1, num2, maxNum);
    output.innerHTML = "The sum of all the multiples of " + num1 + " or " + num2 + " below " + maxNum + " is " + returnTotal;
})();

function Multiples(num1, num2, maxNum) {
    var total = 0;
    for (var i = 0; i < maxNum; i++) {
        if (i % num1 === 0 || i % num2 === 0) {
            total = i + total;
        }
    }
    return total;
}
//# sourceMappingURL=solution.js.map