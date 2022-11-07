import {sum} from "./01";

test('sum should be correct', ()=>{
    const a= 1;
    const b= 2;
    const res= sum(a, b)
    expect<number>(res).toBe(3);
})

