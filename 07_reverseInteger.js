var reverse = function (x) {
    const a = (-2) ** 31
    const b = (2 ** 31) - 1

    if (x <= b && x >= a) {
        return 0

    } else {

        return parseFloat(x
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(x)
    }

};

// 321
reverse(123)

// -321
reverse(-123)

// 21
reverse(120)

// 0
reverse(1534236469)

// 0
reverse(-2147483648)