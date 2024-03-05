/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {


    const upper = 2 ** 31 - 1
    const lower = (-2) ** 31


    if (divisor === 1 && dividend > lower && dividend < upper) return console.log(dividend)
    if (divisor === -1 && (-dividend) > lower && (-dividend) < upper) return console.log(-dividend)


    let answer = Math.floor(Math.exp(Math.log(Math.abs(dividend)) - Math.log(Math.abs(divisor))))


    if (dividend > 0 && divisor < 0 || dividend < 0 && divisor > 0) answer = -answer


    if (answer > upper) return console.log(upper)
    if (answer < lower) return console.log(lower)

    return console.log(answer)
};


// Math.exp()   -->     returns e raised to a power
// Math.log()   -->     returns natural log (base e) of a number


// Expected: 3
divide(10, 3)

// Expected: -2
divide(7, -3)

// Expected: 2147483647
divide(-2147483648, -1)

// Expected; 1000000000
divide(1000000000, 1)
