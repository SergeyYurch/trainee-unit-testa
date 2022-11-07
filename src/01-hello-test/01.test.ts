import {mult, splitWord, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
});

test('sum should be correct', () => {
    const res1 = sum(a, b);
    const res2 = sum(a, c);

    expect(res1).toBe(3);
    expect(res2).toBe(4);
});

test('multiply should be correct', () => {

    const res1 = mult(a, b);
    const res2 = mult(a, c);

    expect(res1).toBe(2);
    expect(res2).toBe(3);
});

test('Func should return correct array of string', () => {
    const str1 = 'Hello world';
    const str2 = 'Hi my friends!';
    const res1 = splitWord(str1);
    const res2 = splitWord(str2);

    expect(res1.length).toBe(2);
    expect(res1[0]).toBe('Hello');
    expect(res1[1]).toBe('world');

    expect(res2.length).toBe(3);
    expect(res2[0]).toBe('Hi');
    expect(res2[1]).toBe('my');
    expect(res2[2]).toBe('friends');

});

