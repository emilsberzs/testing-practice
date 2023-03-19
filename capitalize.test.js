const capitalize = require('./capitalize.js');

test('Capitalizes first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello')
})