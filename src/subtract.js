import ComplexNumber from './ComplexNumber';

// > subtract(new ComplexNumber(1, -10), new ComplexNumber(10, -1))
// new ComplexNumber(-9, -9)
export default function subtract(z1, z2, ...zN) {
    let { re, im } = z1;
    for (let z of [z2, ...zN]) {
        re -= z.re;
        im -= z.im;
    }
    return new ComplexNumber(re, im);
}
