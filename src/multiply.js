import ComplexNumber from './ComplexNumber';

// @test
// import RE_1 from './RE_1';
// import IM_1 from './IM_1';
// expect(multiply(RE_1, IM_1).equals(IM_1)).toBe(true);

// @test
// import IM_1 from './IM_1';
// import ZERO from './ZERO';
// expect(multiply(IM_1, ZERO).equals(ZERO)).toBe(true);

// @test
// import RE_1 from './RE_1';
// import IM_1 from './IM_1';
// expect(multiply(RE_1, IM_1, IM_1).equals(new ComplexNumber(-1))).toBe(true);

// @test
// expect(multiply(new ComplexNumber(1.2, 3), new ComplexNumber(-2.9, 5))
//   .equals(new ComplexNumber(-18.48, -2.7))).toBe(true);

export default function multiply(z1, z2, ...zN) {
    let { re, im } = z1;
    for (let z of [z2, ...zN]) {
        let curRe = re, curIm = im;
        re = curRe*z.re - curIm*z.im;
        im = curRe*z.im + curIm*z.re;
    }
    return new ComplexNumber(re, im);
}
