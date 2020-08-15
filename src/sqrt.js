import abs from './abs';
import phase from './phase';
import ComplexNumber from './ComplexNumber';

// @test
// import RE_1 from './RE_1';
// expect(sqrt(RE_1).equals(RE_1)).toBe(true);

// @test
// import IM_1 from './IM_1';
// expect(sqrt(IM_1).equals(new ComplexNumber(1/Math.sqrt(2), 1/Math.sqrt(2)))).toBe(true);

// @test
// expect(sqrt(new ComplexNumber(1.23, -4.56)).equals(new ComplexNumber(1.7252500915623699, -1.3215475316597451)))
//   .toBe(true);

export default function sqrt(z) {
    let r = Math.sqrt(abs(z)), phi = .5*phase(z);
    return new ComplexNumber(r*Math.cos(phi), r*Math.sin(phi));
}
