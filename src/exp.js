import ComplexNumber from './ComplexNumber';

// > exp(RE_1).equals(new ComplexNumber(Math.exp(1)))
// true
// > exp(IM_1).equals(new ComplexNumber(.5403023058681397, .8414709848078965))
// true
export default function exp(z) {
    let r = Math.exp(z.re);
    return new ComplexNumber(r*Math.cos(z.im), r*Math.sin(z.im));
}
