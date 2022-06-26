import cards from "../assets/cards.js";

// alert(cards.length);

const [
  Categories,
  Actions_A,
  Actions_B,
  Animals_A,
  Animals_B,
  Clothes,
  Emotions,
  Weather,
  Transportation,
] = cards;

const categoryContainer = document.createElement("div");
categoryContainer.className = "category-container";
for (let i = 1; i < cards.length; i++) {
  const category = document.createElement("div");
  const categoryImage = document.createElement("img");
  categoryImage.className = "card-img";
  const categoryName = document.createElement("p");
  categoryName.className = "card-name";
  category.className = "card";
  category.onclick = () => {
    localStorage.setItem("Card", JSON.stringify(cards[i]));
    // console.log(cards[i]);
    window.location = "../pages/category.html";
    // for (let j = 0; j < cards[i].length; j++) {
    //   // alert(`${cards[i][j].image}`);
    // }
  };
  categoryImage.src = "../assets/" + cards[i][0].image;
  categoryName.innerHTML = `${cards[0][i - 1]}`;
  category.appendChild(categoryName);
  category.appendChild(categoryImage);
  categoryContainer.appendChild(category);
}
const main = document.getElementById("main-container");
main.appendChild(categoryContainer);
