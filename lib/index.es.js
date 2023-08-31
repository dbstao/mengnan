function n(s) {
  try {
    if (!s)
      throw new Error("origin:getDomPosition method, param is not null");
  } catch {
  }
  window.top !== window ? console.log("页面被嵌套在iframe中") : console.log("页面没有被嵌套在iframe中");
  const e = document.body, { width: F, height: U, bottom: o, left: i } = s.getBoundingClientRect();
  return {
    windowwidth: e.clientWidth,
    windowHeight: e.clientHeight,
    width: F,
    height: U,
    topToViewTop: o - U,
    // bottomToViewTop: bottom,
    bottomToViewBottom: e.clientHeight - o,
    rightToViewRight: e.clientWidth - (i + F),
    leftToViewLeft: i
  };
}
const t = /* @__PURE__ */ new Map();
t.set("U+1F604", "😄");
t.set("U+1F606", "😆");
t.set("U+1F60D", "😍");
t.set("U+1F612", "😒");
t.set("U+1F614", "😔");
t.set("U+1F618", "😘");
t.set("U+1F61A", "😚");
t.set("U+1F61C", "😜");
t.set("U+1F61D", "😝");
t.set("U+1F620", "😠");
t.set("U+1F622", "😢");
t.set("U+1F624", "😤");
t.set("U+1F626", "😦");
t.set("U+1F628", "😨");
t.set("U+1F62A", "😪");
t.set("U+1F62D", "😭");
t.set("U+1F630", "😰");
t.set("U+1F631", "😱");
t.set("U+1F632", "😲");
t.set("U+1F633", "😳");
t.set("U+1F635", "😵");
t.set("U+1F638", "😸");
t.set("U+1F639", "😹");
t.set("U+1F63A", "😺");
t.set("U+1F63B", "😻");
t.set("U+1F63C", "😼");
t.set("U+1F63D", "😽");
t.set("U+1F63E", "😾");
t.set("U+1F63F", "😿");
t.set("U+1F640", "🙀");
t.set("U+1F641", "🙁");
t.set("U+1F642", "🙂");
t.set("U+1F643", "🙃");
t.set("U+1F644", "🙄");
t.set("U+1F645", "🙅");
t.set("U+1F646", "🙆");
t.set("U+1F647", "🙇");
t.set("U+1F64B", "🙋");
t.set("U+1F64D", "🙍");
t.set("U+1F64E", "🙎");
t.set("U+1F64F", "🙏");
t.set("U+1F601", "😁");
t.set("U+1F602", "😂");
t.set("U+1F603", "😃");
t.set("U+1F605", "😅");
t.set("U+1F607", "😇");
t.set("U+1F609", "😉");
t.set("U+1F60A", "😊");
t.set("U+1F60B", "😋");
t.set("U+1F60C", "😌");
t.set("U+1F60F", "😏");
t.set("U+1F611", "😑");
t.set("U+1F613", "😓");
t.set("U+1F615", "😕");
t.set("U+1F617", "😗");
t.set("U+1F61B", "😛");
t.set("U+1F61E", "😞");
t.set("U+1F61F", "😟");
t.set("U+1F621", "😡");
t.set("U+1F623", "😣");
t.set("U+1F625", "😥");
t.set("U+1F629", "😩");
t.set("U+1F62B", "😫");
t.set("U+1F62C", "😬");
t.set("U+1F62E", "😮");
t.set("U+1F630", "😰");
t.set("U+1F634", "😴");
t.set("U+1F636", "😶");
t.set("U+1F637", "😷");
t.set("U+1F648", "🙈");
t.set("U+1F649", "🙉");
t.set("U+1F64A", "🙊");
t.set("U+1F42D", "🐭");
t.set("U+1F439", "🐹");
t.set("U+1F430", "🐰");
t.set("U+1F43A", "🐺");
t.set("U+1F428", "🐨");
t.set("U+1F42F", "🐯");
t.set("U+1F431", "🐱");
t.set("U+1F43B", "🐻");
t.set("U+1F43C", "🐼");
t.set("U+1F417", "🐗");
t.set("U+1F434", "🐴");
t.set("U+1F40E", "🐎");
t.set("U+1F984", "🦄");
t.set("U+1F42E", "🐮");
t.set("U+1F402", "🐂");
t.set("U+1F403", "🐃");
t.set("U+1F404", "🐄");
t.set("U+1F437", "🐷");
t.set("U+1F416", "🐖");
t.set("U+1F43D", "🐽");
t.set("U+1F40F", "🐏");
t.set("U+1F411", "🐑");
t.set("U+1F410", "🐐");
t.set("U+1F42A", "🐪");
t.set("U+1F42B", "🐫");
t.set("U+1F41F", "🐟");
t.set("U+1F420", "🐠");
t.set("U+1F421", "🐡");
t.set("U+1F419", "🐙");
t.set("U+1F41A", "🐚");
t.set("U+1F40C", "🐌");
t.set("U+1F98B", "🦋");
t.set("U+1F41B", "🐛");
t.set("U+1F41C", "🐜");
t.set("U+1F41D", "🐝");
t.set("U+1F41E", "🐞");
t.set("U+1F997", "🦗");
t.set("U+1F577", "🕷️");
t.set("U+1F578", "🕸️");
t.set("U+1F982", "🦂");
t.set("U+1F99F", "🦟");
t.set("U+1F9A0", "🦠");
const c = {
  getDomPosition: n,
  emoji: t
};
export {
  c as default
};
