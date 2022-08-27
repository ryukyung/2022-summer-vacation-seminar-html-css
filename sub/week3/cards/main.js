const clickedHandler = (e) => {
  const cardTitle = [];
  const titles = e.target.parentNode.parentNode.querySelectorAll("h2");
  titles.forEach((title) => cardTitle.push(title.innerText));
  alert(cardTitle.join(" "));
};

const clickList = document.querySelectorAll(".back h3");

clickList.forEach((el) => {
  el.addEventListener("click", clickedHandler);
});
