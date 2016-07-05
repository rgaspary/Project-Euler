/**
 * Created by renzoggaspary on 7/3/16.
 */

"use strict";

var fib = [0, 1],
    fib_numbers = 0,
    fib_sum = 0;

var even_fib = fibonacci_numbers(fib, 4e6);
even_fib.forEach(function (n) {
    fib_numbers += ', ' + n;
    fib_sum += n;
});
document.getElementById('output').innerHTML = '<p>' + fib_numbers + '</p><p><strong>The sum of all even Fibonacci numbers under 4 million is:</strong><br><span>' + fib_sum + '</span></p>';

function fibonacci_numbers(seed, limit) {
    var number_hold = 0,
        even_fib = [];

    for (var i = 1; number_hold <= limit; i++) {
        number_hold = seed[i] + seed[i - 1];
        seed.push(number_hold);
        if (number_hold % 2 === 0) even_fib.push(number_hold);
    }
    return even_fib;
}
//# sourceMappingURL=solution.js.map