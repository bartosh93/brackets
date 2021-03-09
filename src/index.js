module.exports = function check(str, bracketsConfig) {
  let boolStr, boollBracketsConfig;

  let second = (bracketsConfig) => {
    for (let i = 0; i < length.bracketsConfig; i++) {
      if ((bracketsConfig[i][0] === "{") && (bracketsConfig[i][1] === "}")) {
        boollBracketsConfig = true
      } else if ((bracketsConfig[i][0] === "(") && (bracketsConfig[i][1] === ")")) {
        boollBracketsConfig = true
      } else if ((bracketsConfig[i][0] === "|") && (bracketsConfig[i][1] === "|")) {
        boollBracketsConfig =  true
      } else {
        boollBracketsConfig =  false
      }
      if (boollBracketsConfig === false) return boollBracketsConfig
    }
    return boollBracketsConfig = true
  }














  if (boolStr&&bollBracketsConfig) {
    return true
  } else {
    return false
  }
}
