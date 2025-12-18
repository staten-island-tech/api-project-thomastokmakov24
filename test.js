async function testApi() {
  try {
    const response = await fetch('https://kanye.rest/');

    console.log('Status:', response.status); // 200 = OK

    if (!response.ok) {
      throw new Error('Request failed');
    }
// /* 
//     const data = await response. */const text = await response.text();
// /* console.log(text); */
// json();
//const response = await fetch('https://kanye.rest/');

console.log('content-type:', response.headers.get('content-type'));

const text = await response.text(); // 👈 instead of .json()
console.log(text);

    console.log('API response:', data);
  } catch (err) {
    console.error('Error:', err);
  }
}

testApi();
