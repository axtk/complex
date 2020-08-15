import EPSILON from './EPSILON';

// @test
// import ComplexNumber from './ComplexNumber';
// expect(equal(new ComplexNumber(-1.23, 4.56), new ComplexNumber(-1.23, 4.56))).toBe(true);

// @test
// import ComplexNumber from './ComplexNumber';
// expect(equal(new ComplexNumber(-1.23, 4.56), new ComplexNumber(-1.23, 4.5))).toBe(false);

// @test
// import ComplexNumber from './ComplexNumber';
// expect(equal(new ComplexNumber(1, 0), new ComplexNumber(0, 1))).toBe(false);

export default function equal(z1, z2, precision = EPSILON) {
    let dRe = z1.re - z2.re, dIm = z1.im - z2.im;
    let d = Math.sqrt(dRe*dRe + dIm*dIm);
    return d < precision;
}
