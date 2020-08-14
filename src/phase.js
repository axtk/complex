// > phase(new ComplexNumber(1, 0))
// 0
// > phase(new ComplexNumber(0, 1))
// Math.PI/2
// > phase(new ComplexNumber(1, -1))
// -Math.PI/4
export default function phase(z) {
    return Math.atan2(z.im, z.re);
}
