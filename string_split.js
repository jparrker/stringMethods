


function solution(str){
   const isEven = str.length % 2 === 0
   let result = str
   if(!isEven) {
     result += '_'
   }
  return result.match(/../g) || [] 
  
  //trick is /../g will match any two characters and g grabs all matches. 
  //so it will return an array of all matches of 2 chars. 
  //return an emptry array if null 
}

//loop version 

function solution(str){
   let arr = []
   for(let i = 0; i < str.length; i+=2) {
	   let second = str[i+1] || '_'
	   arr.push(str[i] + second
   }
  return arr