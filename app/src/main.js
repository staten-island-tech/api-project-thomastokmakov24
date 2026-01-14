//i added on the assignment a doc with the classes of the api

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
import "./style.css";
const array = await fetch("https://api.magicthegathering.io/v1/cards");
const api = await array.json();
const api2 = api.cards;
const setsRow = document.getElementById("setsRow");
const cardsContainer = document.getElementById("cardsContainer");
const setsResponse = await fetch("https://api.magicthegathering.io/v1/sets");
const setsData = await setsResponse.json();
const sets = setsData.sets;


sets.forEach(setItem => {
  const btn = document.createElement("button");
  btn.textContent = setItem.name;
  btn.addEventListener("click", () => handleSetClick(setItem.name));
  setsRow.appendChild(btn);
});

async function handleSetClick(setName) {// this one deals with the wipoing of prev crds then injctingnew ones ._.
  const filtered = api2.filter(card => card.setName === setName);
  filtered.forEach(card => {inject(card);});
  console.log("Cards in set:", setName, filtered);// testing purposes but could del
}

function filter(/*item , input */) {
  api.cards.forEach((item) => {   
    inject(item);
  });
} // we no not need to filter. Just iinject all as buttons, if item is pressed, url/name or whatever 's data is shown

/* data-rarity="${cry.genre}"  data-cardPrice="${cry.cardPrice}"data-cardHeader="${cry.cardHeader}" */
function inject(cry) {
  const container = document.querySelector("#cardsContainer");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class ="cardDiv border rounded-lg p-4 bg-white shadow flex flex-col items-center">
      <img class="cardImg w-full h-auto mb-3" src=${cry.imageUrl ?? ""} alt="The Image URL has errors"/>
        <button class = "btn bg-blue-500 text-white px-3 py-1 rounded mb-2 hover:bg-blue-600 transition">SGN</button>
        <h2 class="text-lg font-bold mb-1" >${cry.name}</h2> 
        <h2 class = "cardPrice text-gray-700" >${cry.manaCost ?? "NoIdeaGangie"}</h2>/* tryna slide in my troubleshooting rubric points like an APEX player.  */
        </div>`
  );
}



//inject(api2);
//filter();

