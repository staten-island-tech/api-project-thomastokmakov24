// async function testApi() {
//   try {
//     const response = await fetch('https://kanye.rest/');

//     console.log('Status:', response.status); // 200 = OK

//     if (!response.ok) {
//       throw new Error('Request failed');
//     }
// /* 
//     const data = await response. */const text = await response.text();
// /* console.log(text); */
// json();
// const response = await fetch('https://kanye.rest/');

// console.log('content-type:', response.headers.get('content-type'));

// const text = await response.text();
// console.log(text);

//     console.log('API response:', data);
//   } catch (err) {
//     console.error('Error:', err);
//   }
// }

// testApi();
// const api = await fetch('https://kanye.rest/');
// const apidata = api.json();
// console.log(apidata);


async function Lasthope() {
//  console.log("https://docs.magicthegathering.io//v1/cards")
  try {
    const response = await fetch("https://docs.magicthegathering.io//v1/cards//* ${name } */");
  if (response.status != 200) {
    throw new Error(response);
  }else{
    const data = await response.json();
    console.log(data);
    
  }
  } catch (error) {
    console.log(error)
  }
}
Lasthope();