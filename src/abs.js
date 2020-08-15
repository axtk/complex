// @test
// import ComplexNumber from './ComplexNumber';
// expect(abs(new ComplexNumber(1, 0))).toEqual(1);

// @test
// import ComplexNumber from './ComplexNumber';
// expect(abs(new ComplexNumber(0, 1))).toEqual(1);

// @test
// import ComplexNumber from './ComplexNumber';
// expect(abs(new ComplexNumber(1, -1))).toEqual(Math.sqrt(2));

export default function abs(z) {
    return Math.sqrt(z.re*z.re + z.im*z.im);
}
