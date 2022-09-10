// solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.


function solve(s){
  return Math.max(...s.match(/\d+/g))
};