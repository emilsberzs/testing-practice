const reverseString = require('./reverse_string');

test('Reverses simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
});