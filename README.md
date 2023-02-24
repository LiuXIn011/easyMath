<p align="center">
  <img width="500px" src="https://user-images.githubusercontent.com/48080203/221122496-e235dae4-b70c-4540-a273-b3cb46cf42e9.png">
  <p align="center">JavaScript的基础计算库</p>
</p>
<p align="center">
  <a href="https://www.npmjs.org/package/soeasymath">
    <img src="https://img.shields.io/npm/v/soeasymath.svg">
  </a>
  <a href="https://github.com/LiuXIn011/easyMath/blob/main/src/index.js">
    <img src="https://img.shields.io/github/size/LiuXIn011/easyMath/src/index.js">
  </a>
</p>


| 计算方法 | 方法名 | 别名|
|--|--|--|
| 加法 | addition | jiafa，jia |
| 减法 |subtraction  |jianfa，jian  |
| 乘法 |multiplication  | chengfa，cheng |
| 除法 |division  | chufa，chu |
| 科学计数法 | scientificNotationToString |/  |

### 基本使用

```javascript
// 全量引入
import soeasymath from "soeasymath"
// 按需引入
import { subtraction } from "soeasymath"
```
###### 加法
```javascript
import { addition } from "soeasymath"
console.log(addition(0.1,0.2,0.3....))
```
###### 减法
```javascript
import { subtraction } from "soeasymath"
console.log(subtraction(0.1,0.2,0.3....))
```
###### 乘法
```javascript
import { multiplication } from "soeasymath"
console.log(multiplication(0.1,0.2,0.3....))
```
###### 除法
```javascript
import { division } from "soeasymath"
console.log(division(0.1,0.2,0.3....))
```
###### 使用别名
```javascript
import { jiafa } from "soeasymath"
console.log(jiafa(0.1,0.2,0.3....))
```
###### 科学计数法
```javascript
import { scientificNotationToString } from "soeasymath"
console.log(scientificNotationToString(0.000000000000001))
```
