async function getDataOfAPI(url) {
  const response = await fetch(url);
  const data = await response.json();
  displayCategory(data);
}

getDataOfAPI("https://www.themealdb.com/api/json/v1/1/categories.php");
// href();
function displayCategory(data) {
  data.categories.forEach((category) => {
    const cardsOfCategory = document.querySelector(".container");
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
    </a>;
              
              
            </div>
          </div>
        </div>`;

    // <p class="card-text">${category.strCategoryDescription}</p>;
  });
}

function getCategory() {
  const btns = document.querySelectorAll("a");
  console.log(btns);
  [...btns].forEach((btn) => {
    console.log(btn);
    console.log("first");
  });
  const cardsOfCategory = document.querySelector(".container");
}
