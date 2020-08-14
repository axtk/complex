import ComplexNumber from './ComplexNumber';

// > multiply(RE_1, IM_1).equals(IM_1)
// true
// > multiply(IM_1, ZERO).equals(ZERO)
// true
// > multiply(RE_1, IM_1, IM_1).equals(new ComplexNumber(-1))
// true
// > multiply(new ComplexNumber(1.2, 3), new ComplexNumber(-2.9, 5))
// .   .equals(new ComplexNumber(-18.48, -2.7))
// true
export default function multiply(z1, z2, ...zN) {
    let { re, im } = z1;
    for (let z of [z2, ...zN]) {
        let curRe = re, curIm = im;
        re = curRe*z.re - curIm*z.im;
        im = curRe*z.im + curIm*z.re;
    }
    return new ComplexNumber(re, im);
}
