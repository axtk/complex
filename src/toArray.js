// @test
// import ComplexNumber from './ComplexNumber';
// expect(toArray(new ComplexNumber(1.23, -4.56))).toStrictEqual([1.23, -4.56]);

export default function toArray(z) {
    return [z.re, z.im];
}
