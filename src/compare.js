import abs from './abs';
import subtract from './subtract';
import EPSILON from './EPSILON';

// > compare(new ComplexNumber(-1, 2), new ComplexNumber(-1, 2))
// 0
// > compare(new ComplexNumber(-1, 20), new ComplexNumber(-1, 2))
// 1
// > compare(new ComplexNumber(-1, 2), new ComplexNumber(-1, 20))
// -1
// > [[1, 1], [-2, -3], [0, 0]].map(x => new ComplexNumber(x)).sort(compare)
// [new ComplexNumber(0, 0), new ComplexNumber(1, 1), new ComplexNumber(-2, -3)]
export default function compare(z1, z2, precision = EPSILON) {
    let d = abs(subtract(z1, z2));
    return d < precision ? 0 : (abs(z1) > abs(z2) ? 1 : -1);
}
