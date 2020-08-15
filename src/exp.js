import ComplexNumber from './ComplexNumber';

// @test
// import RE_1 from './RE_1';
// expect(exp(RE_1).equals(new ComplexNumber(Math.exp(1)))).toBe(true);

// @test
// import IM_1 from './IM_1';
// expect(exp(IM_1).equals(new ComplexNumber(.5403023058681397, .8414709848078965))).toBe(true);

export default function exp(z) {
    let r = Math.exp(z.re);
    return new ComplexNumber(r*Math.cos(z.im), r*Math.sin(z.im));
}
