//i added on the assignment a doc with the classes of the api


import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// // setupCounter(document.querySelector('#counter'))
// async function Lasthope() {
// //  console.log("https://docs.magicthegathering.io//v1/cards")
//   try {
//     const response = await fetch("https://api.magicthegathering.io/v1/cards");
//   if (response.status != 200) {
//     throw new Error(response);
//   }else{
//     const data = await response.json();
//     console.log(data);
    
//   }
//   } catch (error) {
//     console.log(error)
//   }
// }
// Lasthope();
const array = await fetch("https://api.magicthegathering.io/v1/cards");
const api = await array.json();
const api2 = api.cards;
console.log(api2);

function filter(/*item , input */) {
  api./* object. */cards.forEach((item) => {// should it be api.cards or api.object.cards?
    inject(item);
  });
/*   if (item.name === input) {
    inject(item);
  } else {
    filter(item);
  
  
  }; */}// we no not need to filter. Just iinject all as buttons, if item is pressed, url/name or whatever 's data is shown

/* data-rarity="${cry.genre}"  data-cardPrice="${cry.cardPrice}"data-cardHeader="${cry.cardHeader}" */
function inject(cry) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class ="card" >
        <img class="cardImg" src=${cry.imageUrl} alt="mimimimimi"/>
        <button class = "btn">SGN</button>
        <h2 >${cry.name}</h2> 
        <h2 class = "cardPrice" >${cry.manaCost}</h2>
        </div>`,
  );console.log(cry.imageUrl);
} inject(api2); filter();
