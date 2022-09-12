const vertMirror = s => s.map(str => [...str].reverse().join(''));
const horMirror = s => s.reverse();

const oper = (fct, s) => fct(s.split("\n")).join("\n");