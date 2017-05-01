/**
 * Created by renzoggaspary on 7/1/16.
 */
"use strict";
(() => {
    let solution = Multiply();
    console.log(solution);
})();

function Multiply(num1 = 3, num2 = 5, maxNum = 1000){
    let total = 0;
    for (let i = 0; i < maxNum; i++){
        (i % num1 === 0 || i % num2 === 0) ? total = i + total : '';
    }
    return total;
}