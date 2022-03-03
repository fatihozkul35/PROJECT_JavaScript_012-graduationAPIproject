//************************************************************************************************
// 1- 1 tane card in css ve ekranın css 2- api ile veri cekme 3- UI/Dom search
// kısmın vs vs

async function getDataOfAPI(url) {
  const response = await fetch(url);
  const data = await response.json();
  displayCategory(data);
}

getDataOfAPI("https://www.themealdb.com/api/json/v1/1/categories.php");

function displayCategory(data) {
  console.log(data.categories);
  data.categories.forEach((category) => {
    console.log(category.strCategory);
    const cardsOfCategory = document.querySelector(".container");
    cardsOfCategory.innerHTML += `<div class="row row-cols-2" style="width: 25rem">
          <div class="col">
            <img
              src=${category.strCategoryThumb}
              alt="here is a Photo"
            />
          </div>
          <div class="col">
            <div class="ms-3">
              <h5 class="card-title">${category.strCategory}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary mb-2">Go to Category</a>
            </div>
          </div>
        </div>`;
  });
}
