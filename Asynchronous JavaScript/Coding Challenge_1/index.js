// Coding Challenge #1
// In this challenge you will build a function 'whereAmI' which renders a country
// only based on GPS coordinates.For that, you will use a second API to geocode
// coordinates.So in this challenge, you’ll use an API on your own for the first time �
// Your tasks:
// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
// data below).
// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// to convert coordinates to a meaningful location, like a city and country name.
// Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
// will be done to a URL with this format:
// https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
// promises to get the data. Do not use the 'getJSON' function we created, that
// is cheating �
// 3. Once you have the data, take a look at it in the console to see all the attributes
// that you received about the provided location. Then, using this data, log a
// message like this to the console: “You are in Berlin, Germany”
// 4. Chain a .catch method to the end of the promise chain and log errors to the
// console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you
// will get this error with code 403. This is an error with the request. Remember,
// fetch() does not reject the promise in this case. So create an error to reject
// the promise yourself, with a meaningful error message
// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant
// attribute from the geocoding API result, and plug it into the countries API that
// we have been using.
// 7. Render the country and catch any errors, just like we have done in the last
// lecture (you can even copy this code, no need to type the same code)
// Test data:
// § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474
// GOOD LUCK �

// Define the whereAmI function
async function whereAmI(lat, lng) {
    try {
        const geocodeResponse = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

        if (!geocodeResponse.ok) {
            throw new Error(`Geocoding failed with status ${geocodeResponse.status}: ${geocodeResponse.statusText}`);
        }

        const geocodeData = await geocodeResponse.json();

        console.log(geocodeData);
        if (!geocodeData.city || !geocodeData.country) {
            throw new Error('Could not determine the city or country from the provided coordinates.');
        }
        console.log(`You are in ${geocodeData.city}, ${geocodeData.country}`);

        const countryResponse = await fetch(`https://restcountries.com/v3.1/name/${geocodeData.country}`);

        if (!countryResponse.ok) {
            throw new Error(`Country data failed with status ${countryResponse.status}: ${countryResponse.statusText}`);
        }

        const countryData = await countryResponse.json();

        renderCountry(countryData[0]);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

function renderCountry(data) {
    const countryContainer = document.getElementById('country-container');

    const html = `
    <div class="country">
      <h2>${data.name.common}</h2>
      <p><strong>Region:</strong> ${data.region}</p>
      <p><strong>Population:</strong> ${(data.population / 1_000_000).toFixed(2)} million</p>
      <p><strong>Languages:</strong> ${Object.values(data.languages).join(', ')}</p>
      <p><strong>Currency:</strong> ${Object.values(data.currencies)[0].name} (${Object.keys(data.currencies)[0]})</p>
      <img src="${data.flags.svg}" alt="Flag of ${data.name.common}" style="width: 100px;">
    </div>
  `;
    countryContainer.innerHTML = html;


}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474); 
