/*
 * @Author: 大辉 dbstt@qq.com
 * @Date: 2023-06-14 17:28:46
 * @LastEditors: 大辉 dbstt@qq.com
 * @LastEditTime: 2023-06-15 12:41:40
 * @FilePath: /mengnan/src/RegExp/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {CNMobilePhone} from './verifyEnum'
export function verifyMobilePhone(number: string | number, country = 'cn'){
    if(country === 'cn')return CNMobilePhone.test(number.toString());
}