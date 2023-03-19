const calculator = require('./calculator.js')

test("Test if 2 + 2 returns 4", () => {
    expect(calculator.sum(2, 2)).toBe(4);
});
test("Test if 5 - 2 returns 3", () => {
    expect(calculator.sub(5, 2)).toBe(3);
});
test("Test if 3 * 4 returns 12", () => {
    expect(calculator.mul(3, 4)).toBe(12);
});
test("Test if 8 / 4 returns 2", () => {
    expect(calculator.div(8, 4)).toBe(2);
})