import ComplexNumber from './ComplexNumber';
import StringRepresentation from './StringRepresentation';
import isSerializationString from './isSerializationString';

// @test expect(parse('[0,1]')).toStrictEqual(new ComplexNumber(0, 1));
// @test expect(parse('(1.23, -4.56)')).toStrictEqual(new ComplexNumber(1.23, -4.56));
// @test expect(parse('1')).toStrictEqual(new ComplexNumber(1, 0));
// @test expect(parse('test')).toStrictEqual(new ComplexNumber(NaN, NaN));

export default function parse(x) {
    return new ComplexNumber(isSerializationString(x) ? (
        x.slice(1, -1)
            .trim()
            .split(StringRepresentation.DELIMITER)
            .map(s => Number(s.trim()))
    ) : x);
}
