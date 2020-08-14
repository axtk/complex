import ComplexNumber from './ComplexNumber';

// > isComplexNumber(IM_1)
// true
// > isComplexNumber(new ComplexNumber(10, -10))
// true
// > isComplexNumber(2)
// false
export default function isComplexNumber(z) {
    return z instanceof ComplexNumber;
}
