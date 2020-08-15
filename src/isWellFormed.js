import ComplexNumber from './ComplexNumber';

// @test expect(isWellFormed(new ComplexNumber(-6.54, 32.1))).toBe(true);
// @test expect(isWellFormed(new ComplexNumber('-1.23'))).toBe(true);
// @test expect(isWellFormed(new ComplexNumber([2.3, -8.7]))).toBe(true);
// @test expect(isWellFormed(new ComplexNumber('test'))).toBe(false);

export default function isWellFormed(z) {
    return (
        z instanceof ComplexNumber &&
        typeof z.re === 'number' &&
        typeof z.im === 'number' &&
        !Number.isNaN(z.re) &&
        !Number.isNaN(z.im)
    );
}
