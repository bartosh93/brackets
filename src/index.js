module.exports = function check(str, bracketsConfig) {
  const newArr = bracketsConfig.map(item => item.join(''))
  for (let i = 0; i < newArr.length; i++) {
    if (str.includes(newArr[i])) {
      str = str.replace(newArr[i], '')
      i = -1
    } 
  }
  return !str
}
