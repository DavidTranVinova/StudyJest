import {add, substract, multiply, divide} from './main'

// test add function
test('Add 34 + 43 = 77', () => {
    expect(add(34, 43)).toBe(77);
})

// test substract function
test('Subtract 49 - 24 = 25', () => {
    expect(substract(49, 24)).toBe(25);
})

// test multiply function
test('Multiply 24 * 8 = 192', () => {
    expect(multiply(24, 8)).toBe(192);
})

// test divide function
test('Divide 121 / 11 = 11', () => {
    expect(divide(121, 11)).toBe(11);
})

