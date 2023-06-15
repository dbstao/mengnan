function r(o) {
  try {
    if (!o)
      throw new Error("origin:getDomPosition method, param is not null");
  } catch {
  }
  const t = document.body, { width: i, height: e, bottom: n, left: h } = o.getBoundingClientRect();
  return {
    windowwidth: t.clientWidth,
    windowHeight: t.clientHeight,
    width: i,
    height: e,
    topToViewTop: n - e,
    // bottomToViewTop: bottom,
    bottomToViewBottom: t.clientHeight - n,
    rightToViewRight: t.clientWidth - (h + i),
    leftToViewLeft: h
  };
}
const d = {
  getDomPosition: r
};
export {
  d as default
};
