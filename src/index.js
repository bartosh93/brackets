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

////////test
  let bracketsConfig = [['(', '}'], ['|', '|']];
  console.log(bracketsConfig.length)
  let second = (a) => {
    console.log(a.length)
    let boolStr, boollBracketsConfig;
      for (let i = 0; i < a.length; i++) {
        if ((a[i][0] === "{") && (a[i][1] === "}")) {
          boollBracketsConfig = true
        } else if ((a[i][0] === '(') && (a[i][1] === ')')) {
          boollBracketsConfig = true
        } else if ((a[i][0] === "|") && (a[i][1] === "|")) {
          boollBracketsConfig =  true
        } else {
          boollBracketsConfig =  false
        }
        if (boollBracketsConfig === false) return boollBracketsConfig = false
        console.log(boollBracketsConfig)
      }
      return boollBracketsConfig 
    }
    
  console.log(second(bracketsConfig))











  if (boolStr&&bollBracketsConfig) {
    return true
  } else {
    return false
  }
}
