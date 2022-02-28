const loadPhones = () => {
  const searchField = document.getElementById("search-input");
  const searchValue = searchField.value;
  //   fetching url
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPhones(data.data));
  // clearing value after searching
  searchField.value = "";
};
const showPhones = (phones) => {
  const phonesContainer = document.getElementById("phone-container");
  //removing previous nodes/elements if exist for adding new
  phonesContainer.innerText = "";

  //iteraing new data using for of loop from fetch url
  for (const phone of phones) {
    const divCol = document.createElement("div");
    divCol.classList.add("col");
    divCol.innerHTML = `
      <div class="card h-100">
        <img src="${phone.image}" class="card-img-top" alt="image" />
        <div class="card-body">
            <h5 class="card-title">Phone Name: <span class="lead">${phone.phone_name}</span></h5>
            <h5 class="card-text">Brand Name: <span class="lead">${phone.brand}</span></h5>
            <button class="btn btn-dark" onclick="loadDetails('${phone.slug}')">See Details</button>
        </div>
      </div>
      `;

    phonesContainer.appendChild(divCol);
    // console.log(phone);
  }
};

//details of particular phone data
const loadDetails = (loadPhDetails) => {
  fetch(`https://openapi.programming-hero.com/api/phone/${loadPhDetails}`)
    .then((res) => res.json())
    .then((data) => showDetails(data.data));
};

// showing details
const showDetails = (phDetails) => {
  const detailsWrapper = document.getElementById("details-wrapper");

  const divCol = document.createElement("div");
  divCol.classList.add("col");
  divCol.innerHTML = `
    <div class="card">
        <img src="${phDetails.image}" class="detailsImg" alt="image" />
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
            This is a longer card with supporting text below as a
            natural lead-in to additional content. This content is a
            little bit longer.
            </p>
        </div>
    </div>
  `;

  detailsWrapper.appendChild(divCol);
  console.log(phDetails);
};
