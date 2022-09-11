function strCount(obj) {
  let result = 0 
  for(key in obj) {
    if (typeof obj[key] == 'string') count++
    if(typeof obj[key] == 'object') count += strCount(obj[key])
  }
    return result
}