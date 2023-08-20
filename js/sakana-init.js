function initSakanaWidget() {
  const spiderman = SakanaWidget.getCharacter("chisato");
  spiderman.image = "/img/spiderman.png";
  SakanaWidget.registerCharacter("spiderman", spiderman);
  
  new SakanaWidget({
    character: "spiderman",
    controls: true,
  }).mount("#sakana-widget");
}
document.addEventListener("DOMContentLoaded", () => {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/sakana-widget@2.5.0/lib/sakana.min.js";
  script.onload = () => {
    initSakanaWidget();
  };
  document.body.appendChild(script);
});
// 公告
var typed = new Typed('#type-container', {
  strings: ['我是公告，但这个博客似乎^1000没有公告:('],
  showCursor: true, // 是否显示光标
  cursorChar: '<i class="iconfont icon-sword"></i>', // 光标的样式
  typeSpeed: 90,
  startDelay: 3000,
  fadeOut: true,
  fadeOutClass: 'typed-cursor',
});
// Hello World
var typed = new Typed('#hello-world', {
  strings: ['Hello^3000 World!'],
  showCursor: true, // 是否显示光标
  cursorChar: '<i class="iconfont icon-sword"></i>', // 光标的样式
  typeSpeed: 100,
  startDelay: 3000,
  loop: true,
});
