// 放大指定倍数取整
const toInteger = function (number, times) {
  let maxDecimalDigits = 0
  // 如果是科学计数法
  if (String(number).indexOf("e") !== -1) {
    number = scientificNotationToString(number)
  }
  // 计算小数位数
  try {
    maxDecimalDigits = Math.max(maxDecimalDigits, String(number).split(".")[1].length)
  } catch (e) {
    maxDecimalDigits = 0
  }
  // 位数不足补0
  let mantissa = ''
  for (let i = 0; i < times - maxDecimalDigits; i++) {
    mantissa += '0'
  }
  // 返回结果
  if (maxDecimalDigits < times) {
    return Number(String(number).replace(".", "") + mantissa)
  } else {
    return Number(String(number).replace(".", ""))
  }
}

// 计算最长小数位数
const getMaxDecimalDigits = function () {
  let maxDecimalDigits = 0
  const numberList = arguments[0]
  for (let i = 0; i < numberList.length; i++) {
    // 如果是科学计数法
    if (String(numberList[i]).indexOf("e") !== -1) {
      numberList[i] = scientificNotationToString(numberList[i])
    }
    try {
      maxDecimalDigits = Math.max(maxDecimalDigits, String(numberList[i]).split(".")[1].length)
    } catch (e) {
      maxDecimalDigits = Math.max(maxDecimalDigits, 0)
    }
  }
  return maxDecimalDigits
}
// 科学计数法转字符串
export const scientificNotationToString = function (number) {
  let numberString = String(number)
  try {
    // 正整数
    if (numberString.indexOf("e+") !== -1) {
      let mantissaLength = Number(String(number).split("e+")[1])
      // 组合0的个数
      let mantissa = ''
      for (let i = 0; i < mantissaLength; i++) {
        mantissa += '0'
      }
      return `${String(number).split("e+")[0]}${mantissa}`
      // 小数
    } else if (numberString.indexOf("e-") !== -1) {
      let mantissaLength = Number(String(number).split("e-")[1])
      // 组合0的个数
      let mantissa = ''
      for (let i = 0; i < mantissaLength - 1; i++) {
        mantissa += '0'
      }
      return `0.${mantissa}${String(number).split("e-")[0].replace(".", "")}`
    } else {
      // 其他
      return numberString
    }
  } catch (error) {
    return numberString
  }
}
// 除法
export const division = function () {
  // 计算结果
  let maxDecimalDigits = getMaxDecimalDigits(arguments)
  let results = toInteger(arguments[0], maxDecimalDigits)
  for (let i = 1; i < arguments.length; i++) {
    results = results / toInteger(arguments[i], maxDecimalDigits)
  }
  results = toInteger(results, arguments.length - 2)
  // 返回结果
  return results
}
// 除法别名
export const chufa = division
export const chu = division

// 乘法
export const multiplication = function () {
  // 计算倍数
  let maxDecimalDigits = getMaxDecimalDigits(arguments)
  let times = Math.pow(10, maxDecimalDigits);
  // 计算结果
  let results = toInteger(arguments[0], maxDecimalDigits)
  for (let i = 1; i < arguments.length; i++) {
    results = results * toInteger(arguments[i], maxDecimalDigits)
  }
  results = results / Math.pow(times, arguments.length);
  // 返回结果
  return results
}
// 乘法别名
export const chengfa = multiplication
export const cheng = multiplication

// 减法
export const subtraction = function () {
  // 计算倍数
  let maxDecimalDigits = getMaxDecimalDigits(arguments)
  let times = Math.pow(10, maxDecimalDigits);
  // 计算结果
  let results = toInteger(arguments[0], maxDecimalDigits)
  for (let i = 1; i < arguments.length; i++) {
    results -= toInteger(arguments[i], maxDecimalDigits)
  }
  results = results / times
  // 返回结果
  return results
}
// 减法别名
export const jianfa = subtraction
export const jian = subtraction

// 加法
export const addition = function () {
  // 计算倍数
  let maxDecimalDigits = getMaxDecimalDigits(arguments)
  let times = Math.pow(10, maxDecimalDigits);
  // 计算结果
  let results = 0
  for (let i = 0; i < arguments.length; i++) {
    results += toInteger(arguments[i], maxDecimalDigits)
  }
  results = results / times
  // 返回结果
  return results

}
// 加法别名
export const jiafa = addition
export const jia = addition