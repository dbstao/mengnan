/*
 * @Author: 大辉 dbstt@qq.com
 * @Date: 2023-06-14 14:04:58
 * @LastEditors: 大辉 dbstt@qq.com
 * @LastEditTime: 2023-06-15 17:36:20
 * @FilePath: /mengnan/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import { resolve } from 'path'
/** @type {import('vite').UserConfig} */
export default defineConfig({
  // build 独有配置
  build:{
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, 'lib/index.js'),
      name: 'index',
      // fileName: (format) => `mengnan.${format}`
    }
  },
});
