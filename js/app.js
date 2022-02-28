const loadPhones = () => {
  const searchField = document.getElementById("search-input");
  const searchValue = searchField.value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPhones(data.data));
};
const showPhones = (phones) => {
  const phonesContainer = document.getElementById("phone-container");
  for (const phone of phones) {
    const divCol = document.createElement("div");
    divCol.classList.add("col");
    divCol.innerHTML = `
      <div class="card h-100">
        <img src="${phone.image}" class="card-img-top" alt="image" />
        <div class="card-body">
            <h5 class="card-title">Phone Name: ${phone.phone_name}</h5>
            <p class="card-text">Brand Name: ${phone.brand}</p>
        </div>
      </div>
      `;
    phonesContainer.appendChild(divCol);
    console.log(phone);
  }
};
