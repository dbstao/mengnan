/*
 * @Author: 大辉 dbstt@qq.com
 * @Date: 2023-06-14 13:46:19
 * @LastEditors: 大辉 dbstt@qq.com
 * @LastEditTime: 2023-06-14 14:00:32
 * @FilePath: /mengnan/src/webpack/plugin/debuggerRemoval.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// webpack-debugger-removal-plugin.js
class DebuggerRemovalPlugin {
    apply(compiler:any) {
        compiler.hooks.normalModuleFactory.tap("DebuggerRemovalPlugin", (factory:any) => {
            factory.hooks.parser.for("javascript/auto").tap("DebuggerRemovalPlugin", (parser:any) => {
                parser.hooks.statement.tap("DebuggerRemovalPlugin", (statement:any, source:any) => {
                    // 检查语句是否包含`debugger`
                    if (source.includes("debugger")) {
                        // 删除`debugger`语句
                        const modifiedSource = source.replace(/debugger;/g, "");
                        // 更新语句内容
                        statement.updateSource(modifiedSource);
                    }
                    return statement;
                });
            });
        });
    }
}

export default DebuggerRemovalPlugin;
