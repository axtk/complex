import ComplexNumber from './ComplexNumber';

// @test
// import IM_1 from './IM_1';
// expect(isComplexNumber(IM_1)).toBe(true);

// @test expect(isComplexNumber(new ComplexNumber(10, -10))).toBe(true);
// @test expect(isComplexNumber(2)).toBe(false);

export default function isComplexNumber(z) {
    return z instanceof ComplexNumber;
}
