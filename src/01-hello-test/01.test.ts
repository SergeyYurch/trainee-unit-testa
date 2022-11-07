import {mult, sum} from "./01";

test('sum should be correct', () => {
    const a = 1;
    const b = 2;
    const c = 3;
    const res1 = sum(a, b);
    const res2= sum(a, c);

    expect(res1).toBe(3);
    expect(res2).toBe(4);
});

test('multiply should be correct', () => {
    const a = 1;
    const b = 2;
    const c = 3;
    const res1 = mult(a, b);
    const res2= mult(a, c);

    expect(res1).toBe(2);
    expect(res2).toBe(3);
});
