import StringRepresentation from './StringRepresentation';

// > isSerializationString('[1, 0]')
// true
// > isSerializationString('(-1.2, .5)')
// true
// > isSerializationString('10, 0')
// false
export default function isSerializationString(x) {
    return typeof x === 'string' && StringRepresentation.Grouping.some(([start, end]) => (
        x.slice(0, start.length) === start && x.slice(-end.length) === end
    ));
}
