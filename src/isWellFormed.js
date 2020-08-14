import ComplexNumber from './ComplexNumber';

// > isWellFormed(new ComplexNumber(-6.54, 32.1))
// true
// > isWellFormed(new ComplexNumber('-1.23'))
// true
// > isWellFormed(new ComplexNumber([2.3, -8.7]))
// true
// > isWellFormed(new ComplexNumber('test'))
// false
export default function isWellFormed(z) {
    return (
        z instanceof ComplexNumber &&
        typeof z.re === 'number' &&
        typeof z.im === 'number' &&
        !Number.isNaN(z.re) &&
        !Number.isNaN(z.im)
    );
}
