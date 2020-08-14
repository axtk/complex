import ComplexNumber from './ComplexNumber';

// > divide(IM_1, RE_1).equals(IM_1)
// true
// > divide(new ComplexNumber(1, 3), new ComplexNumber(-2, 5))
// .   .equals(new ComplexNumber(.4482758620689655, -.3793103448275862))
// true
export default function divide(z1, z2, ...zN) {
    let { re, im } = z1;
    for (let z of [z2, ...zN]) {
        let curRe = re, curIm = im;
        let sqAbs = z.re*z.re + z.im*z.im;
        re = (curRe*z.re + curIm*z.im)/sqAbs;
        im = (curIm*z.re - curRe*z.im)/sqAbs;
    }
    return new ComplexNumber(re, im);
}
