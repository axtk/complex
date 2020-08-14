import ComplexNumber from './ComplexNumber';

// > sum(new ComplexNumber(2, -1), new ComplexNumber(-1, 10))
// new ComplexNumber(1, 9)
export default function sum(z1, z2, ...zN) {
    let re = 0, im = 0;
    for (let z of [z1, z2, ...zN]) {
        re += z.re;
        im += z.im;
    }
    return new ComplexNumber(re, im);
}
