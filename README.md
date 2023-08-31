<!--
 * @Author: 大辉 dbstt@qq.com
 * @Date: 2023-06-14 13:42:38
 * @LastEditors: 大辉 dbstt@qq.com
 * @LastEditTime: 2023-06-15 10:44:27
 * @FilePath: /mengnan/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# mengnan

## 安装

`npm i mengnan`

## 使用 

`import {getDomPosition} from 'mengnan'`

## Emoji 

`import {Emoji} from 'mengnan'`

``` js 
for(let k of Emoji){
  console.log(k); // ["U+1F645", "🙅"]
}
```

## DOM 相关方法

|  方法名   | 作用  |返回值|
|  ----  | ----  |----|
| getDomPosition  | 获取html 元素 离可视化区域的距离数据 | |

## webpack 相关工具
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |
<!-- #### debuggerRemovalPlugin

`js
// webpack.config.js
const DebuggerRemovalPlugin = require("./webpack-debugger-removal-plugin");

module.exports = {
  // 配置项...
  plugins: [
    new DebuggerRemovalPlugin(),
    // 其他插件...
  ],
};

` -->
