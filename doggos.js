// const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

// function addDoggo() {
//   // Show loading spinner

//   fetch(BREEDS_URL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       const img = document.createElement("img");
//       img.src = data.message;
//       img.alt = "Cute doggo";

//       document.querySelector(".doggos").appendChild(img);

//       // Stop loading spinner
//     });
// }

// document.querySelector(".add-doggo").addEventListener("click", addDoggo);

const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

fetch(BREEDS_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);

    const select = document.querySelector(".breeds");

    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement("option");
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
  });
