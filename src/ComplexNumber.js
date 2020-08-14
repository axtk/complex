import EPSILON from './EPSILON';
import equal from './equal';
import stringify from './stringify';

// > new ComplexNumber(0, 1)
// IM_1
// > new ComplexNumber(2.1)
// new ComplexNumber(2.1, 0)
// > new ComplexNumber([2.3, -8.7])
// new ComplexNumber(2.3, -8.7)
// > new ComplexNumber('-2.1')
// new ComplexNumber(-2.1, 0)
// > new ComplexNumber('test')
// new ComplexNumber(NaN, NaN)

// > new ComplexNumber(0, 1).equals(IM_1)
// true
// > RE_1.equals(new ComplexNumber(1, 0))
// true
// > RE_1.equals(new ComplexNumber(1, .001))
// false

// > +new ComplexNumber(1)
// 1

export default class ComplexNumber {
    constructor(re, im) {
        let z = re;
        if (z instanceof ComplexNumber) {
            this.re = z.re;
            this.im = z.im;
        }
        else if (Array.isArray(z) && z.length === 2) {
            this.re = Number(z[0]);
            this.im = Number(z[1]);
        }
        else {
            this.re = Number(re);
            this.im = im === undefined ? (Number.isNaN(this.re) ? Number.NaN : 0) : Number(im);
        }
    }
    equals(z, precision = EPSILON) {
        return equal(this, z, precision);
    }
    toString() {
        return stringify(this);
    }
    valueOf() {
        return this.re;
    }
}
