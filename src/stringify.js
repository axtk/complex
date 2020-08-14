import toArray from './toArray';

// > stringify(new ComplexNumber(1.23, -4.56))
// '[1.23,-4.56]'
export default function stringify(z) {
    return JSON.stringify(toArray(z));
}
