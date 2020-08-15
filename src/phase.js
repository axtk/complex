// @test
// import ComplexNumber from './ComplexNumber';
// expect(phase(new ComplexNumber(1, 0))).toEqual(0);

// @test
// import ComplexNumber from './ComplexNumber';
// expect(phase(new ComplexNumber(0, 1))).toEqual(Math.PI/2);

// @test
// import ComplexNumber from './ComplexNumber';
// expect(phase(new ComplexNumber(1, -1))).toEqual(-Math.PI/4);

export default function phase(z) {
    return Math.atan2(z.im, z.re);
}
