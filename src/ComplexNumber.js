import EPSILON from './EPSILON';
import equal from './equal';
import stringify from './stringify';

export default class ComplexNumber {

    // @test expect(new ComplexNumber(2.1)).toEqual({ re: 2.1, im: 0 });
    // @test expect(new ComplexNumber([2.3, -8.7])).toEqual({ re: 2.3, im: -8.7 });
    // @test expect(new ComplexNumber('-2.1')).toEqual({ re: -2.1, im: 0 });
    // @test expect(new ComplexNumber('test')).toEqual({ re: NaN, im: NaN });

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

    // @test
    // import IM_1 from './IM_1';
    // expect(new ComplexNumber(0, 1).equals(IM_1)).toBe(true);

    // @test
    // import RE_1 from './RE_1';
    // expect(RE_1.equals(new ComplexNumber(1, 0))).toBe(true);

    // @test
    // import RE_1 from './RE_1';
    // expect(RE_1.equals(new ComplexNumber(1, .001))).toBe(false);

    equals(z, precision = EPSILON) {
        return equal(this, z, precision);
    }

    toString() {
        return stringify(this);
    }

    // @test expect(+new ComplexNumber(1)).toEqual(1);

    valueOf() {
        return this.re;
    }

}
