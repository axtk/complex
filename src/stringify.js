import toArray from './toArray';

// @test
// import ComplexNumber from './ComplexNumber';
// expect(stringify(new ComplexNumber(1.23, -4.56))).toEqual('[1.23,-4.56]');

export default function stringify(z) {
    return JSON.stringify(toArray(z));
}
