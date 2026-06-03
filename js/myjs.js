
function initSakanaWidget() {
  // 蜘蛛侠小部件
  const spiderman = SakanaWidget.getCharacter("chisato");
  spiderman.image = "https://s2.loli.net/2025/05/01/EeqiDFJR8doY641.webp";
  SakanaWidget.registerCharacter("spiderman", spiderman);
  
  new SakanaWidget({
    character: "spiderman",
    controls: false,
	draggable: true,
  }).mount("#sakana-widget-light");

  // 蜘蛛侠黑色小部件
  const spidermanDark = SakanaWidget.getCharacter("chisato");
  spidermanDark.image = "https://s2.loli.net/2025/05/01/Qlzd95q6nb3rhtC.webp";
  SakanaWidget.registerCharacter("spiderman-dark", spidermanDark);
  
  new SakanaWidget({
    character: "spiderman-dark",
    controls: false,
	draggable: true,
  }).mount("#sakana-widget-dark");
}
document.addEventListener("DOMContentLoaded", () => {
  const script = document.createElement("script");
  script.src = "/js/sakana.min.js";
  script.onload = () => {
    initSakanaWidget();
 };
  document.body.appendChild(script);
});

// 公告
var typed = new Typed('#type-container', {
  strings: ['高考结束！','是哪个倒霉蛋不小心被强基录取了?!','在網站右下角可以簡繁轉換！','评论弄好了，虽然啥也没有'],
  showCursor: true, // 是否显示光标
  cursorChar: '<i class="iconfont icon-sword"></i>', // 光标的样式
  typeSpeed: 150,
  fadeOut: false,
  smartBackspace: true,
  backSpeed: 50,
  loop: true,
});
// Hello World
var typed = new Typed('#hello-world', {
  strings: ['Hello^3000 World!'],
  showCursor: true, // 是否显示光标
  cursorChar: '<i class="iconfont icon-sword"></i>', // 光标的样式
  typeSpeed: 50,
  startDelay: 1000,
  loop: true,
});
