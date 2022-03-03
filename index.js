//************************************************************************************************
// 1- 1 tane card in css ve ekranın css 2- api ile veri cekme 3- UI/Dom search
// kısmın vs vs
const homeBtn = document.getElementById("homeBtn");
const searchBtn = document.getElementById("button-addon2");

// searchBtn.addEventListener("click", () => {
//   getSearchMeal();
// });
// async function getSearchMeal() {
//   const mealInput = document.querySelector(".form-control").value;
//   const responseOfMeal = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/search.php?f=a${mealInput}`
//   );
//   const dataOfMeals = await responseOfMeal.json();
//   console.log(dataOfMeals);
//   // dataOfMeals.meals.forEach((meal) =>
//   //   console.log(meal.strMeal, meal.strMealThumb)
//   // );
// }

homeBtn.addEventListener("click", starter);
function starter() {
  getDataOfAPI("https://www.themealdb.com/api/json/v1/1/categories.php");
}

getDataOfAPI("https://www.themealdb.com/api/json/v1/1/categories.php");
async function getDataOfAPI(url) {
  const response = await fetch(url);
  const data = await response.json();
  displayCategory(data);
}
function displayCategory(data) {
  let cardsOfCategory = document.querySelector(".container");
  cardsOfCategory.innerHTML = "";
  data.categories.forEach((category) => {
    cardsOfCategory.innerHTML += `
    <div class="row row-cols-2" style="width: 25rem">
          <div class="col">
            <img
              src=${category.strCategoryThumb}
              alt="here is a Photo"
            />
          </div>
          <div class="col">
            <div>
              <h5 class="card-title">${category.strCategory}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">
      Go to Category
    </a>
              
              
            </div>
          </div>
        </div>`;

    // <p class="card-text">${category.strCategoryDescription}</p>;
  });
  getCategory();
}
function getCategory() {
  const btns = document.querySelectorAll("a");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      getCategoryFetch(e);
    });
  });
}
async function getCategoryFetch(e) {
  let category =
    e.target.parentElement.querySelector(".card-title").textContent;
  const responseCategory = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`
  );
  const dataOfCategory = await responseCategory.json();
  cardsOfCategory = document.querySelector(".container");
  if (dataOfCategory.meals == null) {
    dataOfCategory.meals = [];
  } else {
    cardsOfCategory.innerHTML = "";
  }
  dataOfCategory.meals.forEach((meal) => {
    cardsOfCategory.innerHTML += `<div class="card" style="width: 18rem">
          <img
            src=${meal.strMealThumb}
            class="card-img-top"
            alt="Here is a photo of a meal"
          />
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
          </div>
          <div class="card-body">
            <a
              href=${meal.strYoutube}
              class="card-link"
              target="_blank"
              >youtube link</a
            >
          </div>
        </div>`;
  });
}
