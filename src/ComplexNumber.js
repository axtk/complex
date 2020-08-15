import EPSILON from './EPSILON';
import equal from './equal';
import stringify from './stringify';

// @test expect(new ComplexNumber(2.1)).toStrictEqual(new ComplexNumber(2.1, 0));
// @test expect(new ComplexNumber([2.3, -8.7])).toStrictEqual(new ComplexNumber(2.3, -8.7));
// @test expect(new ComplexNumber('-2.1')).toStrictEqual(new ComplexNumber(-2.1, 0));
// @test expect(new ComplexNumber('test')).toStrictEqual(new ComplexNumber(NaN, NaN));

// @test
// import IM_1 from './IM_1';
// expect(new ComplexNumber(0, 1).equals(IM_1)).toBe(true);

// @test
// import RE_1 from './RE_1';
// expect(RE_1.equals(new ComplexNumber(1, 0))).toBe(true);

// @test
// import RE_1 from './RE_1';
// expect(RE_1.equals(new ComplexNumber(1, .001))).toBe(false);

// @test expect(+new ComplexNumber(1)).toEqual(1);

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
