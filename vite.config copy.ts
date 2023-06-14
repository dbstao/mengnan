/*
 * @Author: 大辉 dbstt@qq.com
 * @Date: 2023-06-14 14:04:58
 * @LastEditors: 大辉 dbstt@qq.com
 * @LastEditTime: 2023-06-14 14:18:17
 * @FilePath: /mengnan/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import { resolve } from 'path'
/** @type {import('vite').UserConfig} */
export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === "serve") {
    return {
      // dev 独有配置
    };
  } else {
    // command === 'build'
    return {
      // build 独有配置
      build:{
        lib: {
          entry: resolve(__dirname, 'src/main.ts'),
          name: 'mengnan',
          fileName: (format) => `mengnan.${format}`
        }
      },
      sourcemap: true, // 输出.map文件
      // 如果项目引用了第三方插件，那么需要在这里设置排除，如果不设置的话，第三方插件的源码也会被打包进来，这样打包文件就变大了。排除之后第三方的插件会单独存在
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        // external: ['vue'],
        // output: {
        //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        //   globals: {
        //     vue: 'Vue',
        //   },
        // },
      }
    };
  }
});
