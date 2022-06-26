// class Info {
//   constructor() {
//     this.retrievedObject = JSON.parse(localStorage.getItem("obj")) || {};
//     this.clickT = this.retrievedObject.clickT || 0;
//     this.clickF = this.retrievedObject.clickF || 0;
//   }

//   clickIcrT() {
//     this.clickT++;
//     localStorage.setItem("obj", JSON.stringify(this));
//     console.log(this.retrievedObject);
//   }
//   clickIcrF() {
//     this.clickF++;
//     localStorage.setItem("obj", JSON.stringify(this));
//     console.log(this.retrievedObject);
//   }

//   resetStats() {
//     this.clickT = 0;
//     this.clickF = 0;
//     localStorage.setItem("obj", JSON.stringify(this));
//   }
// }

// const me = new Info();
// const btnWright = document.getElementById("btn-wright-id");
// const btnWrong = document.getElementById("btn-wrong-id");
// const btnStat = document.getElementById("btn-stat-id");
// const btnClear = document.getElementById("btn-clear-id");

// console.log(JSON.parse(localStorage.getItem("obj")));

// btnWright.onclick = () => {
//   me.clickIcrT();
// };

// btnWrong.onclick = () => {
//   me.clickIcrF();
// };

// let allStats = JSON.parse(localStorage.getItem("obj")) || me;
// let el = document.createElement("p");
// let el2 = document.createElement("p");

// btnStat.onclick = () => {
//   el.innerHTML = `Wright answers: ${allStats.clickT}`;
//   el2.innerHTML = `Wrong answers: ${allStats.clickF}`;
//   document.body.append(el);
//   document.body.append(el2);
// };

// btnClear.onclick = () => {
//   me.resetStats();
//   el.innerHTML = `Wright answers: ${allStats.clickT}`;
//   el2.innerHTML = `Wrong answers: ${allStats.clickF}`;
// };

{
  /* <p><button id="btn-wright-id" type="button">Wrigth!</button></p>
<p><button id="btn-wrong-id" type="button">Wrong!</button></p>
<p><button id="btn-stat-id" type="button">Show Stat</button></p>
<p><button id="btn-clear-id" type="button">Clear local storage</button></p> */
}

// buttonPlay.onclick = () => {
//     //   cardTest.playSound();
//     //   buttonPlay.disabled = "true";
//     let audio = new Audio("../assets/audio/dance.mp3");
//     audio.play();
//   };

// // this is working with  audio out
// const buttonPlay = document.getElementById("play-btn-id");
// const audio = new Audio("../assets/audio/dance.mp3");

// buttonPlay.addEventListener("click", function () {
//   audio.play();
// });
