
function initSakanaWidget() {
  const spiderman = SakanaWidget.getCharacter("chisato");
  spiderman.image = "/img/spiderman.png";
  SakanaWidget.registerCharacter("spiderman", spiderman);
  
  new SakanaWidget({
    character: "spiderman",
    controls: false,
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
