import abs from './abs';
import subtract from './subtract';
import EPSILON from './EPSILON';

// @test
// import ComplexNumber from './ComplexNumber';
// expect(compare(new ComplexNumber(-1, 2), new ComplexNumber(-1, 2))).toEqual(0);

// @test
// import ComplexNumber from './ComplexNumber';
// expect(compare(new ComplexNumber(-1, 20), new ComplexNumber(-1, 2))).toEqual(1);

// @test
// import ComplexNumber from './ComplexNumber';
// expect(compare(new ComplexNumber(-1, 2), new ComplexNumber(-1, 20))).toEqual(-1);

// @test
// import ComplexNumber from './ComplexNumber';
// expect([[1, 1], [-2, -3], [0, 0]].map(x => new ComplexNumber(x)).sort(compare))
//   .toStrictEqual([new ComplexNumber(0, 0), new ComplexNumber(1, 1), new ComplexNumber(-2, -3)]);

export default function compare(z1, z2, precision = EPSILON) {
    let d = abs(subtract(z1, z2));
    return d < precision ? 0 : (abs(z1) > abs(z2) ? 1 : -1);
}
