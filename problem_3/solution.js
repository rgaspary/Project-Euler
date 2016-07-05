/**
 * Created by Renzo Gaspary on 7/5/2016.
 */

function largestPrimeFactor(number, start) {
    let i = 2;
    while (i <= number) {
        if (number % i == 0) {
            number /= i;
        } else {
            i++;
        }
    }
    return '<p>The largest prime factor of ' + start + ' is <span>' + i + '</span>.</p>';
}

const a = 600851475143 ;
document.querySelector('#output').innerHTML = largestPrimeFactor(a, a);