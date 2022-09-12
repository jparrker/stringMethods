function compare(s1, s2) {
  return getAscii(s1) === getAscii(s2)
}

const getAscii = (str) => str && (str.length === (str.match(/[a-z]/gi) || '').length) ?
  [...str.toUpperCase()].reduce((acc, cur) => acc + cur.charCodeAt(0), 0) : 0;