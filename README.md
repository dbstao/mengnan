<!--
 * @Author: 大辉 dbstt@qq.com
 * @Date: 2023-06-14 13:42:38
 * @LastEditors: 大辉 dbstt@qq.com
 * @LastEditTime: 2023-06-14 13:57:12
 * @FilePath: /mengnan/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# mengnan

## webpack 相关工具 

#### debuggerRemovalPlugin
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

`
