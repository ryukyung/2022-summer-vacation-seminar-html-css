const imgArr = new Array();
for (let i = 0; i < 12; i++) {
  imgArr[i] = `list${i}`;
}
function showImage() {
  const imgNum = Math.round(Math.random() * 11);
  const objImg = document.getElementById("change-img");
  objImg.style.backgroundImage = `url(./images/list${imgNum}.png)`;
}
setInterval(() => showImage(), 3000);
