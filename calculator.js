const sum = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const mul = (a, b) => {
    return a * b;
}

const div = (a, b) => {
    return a / b;
}

//Add all functions to calculator object and export as one, cool.
const calculator = {
    sum,
    sub,
    mul,
    div
};

module.exports = calculator;