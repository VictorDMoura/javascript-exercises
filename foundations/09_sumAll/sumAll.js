const sumAll = function(initial, final) {

    if (
        typeof initial !== 'number' ||
        typeof final !== 'number' ||
        !Number.isInteger(initial) ||
        !Number.isInteger(final) ||
        initial < 0 ||
        final < 0
    ) {
        return 'ERROR';
    }

    if (initial > final) {
        [initial, final] = [final, initial];
    }

    let sum = 0;

    for (let i = initial; i <= final; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
