/*
 * @Author: 大辉 dbstt@qq.com
 * @Date: 2023-06-15 09:25:13
 * @LastEditors: 大辉 dbstt@qq.com
 * @LastEditTime: 2023-06-15 10:40:58
 * @FilePath: /mengnan/src/Dom/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export function getDomPosition(ele: Element) {
  try {
    if (!ele)
      throw new Error("origin:getDomPosition method, param is not null");
  } catch (err) {}

  if (window.top !== window) {
    // 页面被嵌套在iframe中
    console.log("页面被嵌套在iframe中");
  } else {
    // 页面没有被嵌套在iframe中
    console.log("页面没有被嵌套在iframe中");
  }

  const body = document.body;
  const { width, height, bottom, left } = ele.getBoundingClientRect();
  return {
    windowwidth: body.clientWidth,
    windowHeight: body.clientHeight,
    width,
    height,
    topToViewTop: bottom - height,
    // bottomToViewTop: bottom,
    bottomToViewBottom: body.clientHeight - bottom,
    rightToViewRight: body.clientWidth - (left + width),
    leftToViewLeft: left,
  };
}
