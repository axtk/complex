import StringRepresentation from './StringRepresentation';

// @test expect(isSerializationString('[1, 0]')).toBe(true);
// @test expect(isSerializationString('(-1.2, .5)')).toBe(true);
// @test expect(isSerializationString('10, 0')).toBe(false);

export default function isSerializationString(x) {
    return typeof x === 'string' && StringRepresentation.Grouping.some(([start, end]) => (
        x.slice(0, start.length) === start && x.slice(-end.length) === end
    ));
}
