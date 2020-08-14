import ComplexNumber from './ComplexNumber';
import StringRepresentation from './StringRepresentation';
import isSerializationString from './isSerializationString';

// > parse('[0,1]')
// IM_1
// > parse('(1.23, -4.56)')
// new ComplexNumber(1.23, -4.56)
// > parse('1')
// RE_1
// > parse('test')
// new ComplexNumber(NaN, NaN)
export default function parse(x) {
    return new ComplexNumber(isSerializationString(x) ? (
        x.slice(1, -1)
            .trim()
            .split(StringRepresentation.DELIMITER)
            .map(s => Number(s.trim()))
    ) : x);
}
