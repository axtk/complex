// > abs(new ComplexNumber(1, 0))
// 1
// > abs(new ComplexNumber(0, 1))
// 1
// > abs(new ComplexNumber(1, -1))
// Math.sqrt(2)
export default function abs(z) {
    return Math.sqrt(z.re*z.re + z.im*z.im);
}
