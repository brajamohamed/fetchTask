let cardSection = document.getElementById("cardContainer");
async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/comments");
  let data = await response.json();
  data.map((item) => {
    let card = document.createElement("div");
    card.classList.add("card", "m-1", "text-center", "col-lg-3", "p-3");
    cardSection.appendChild(card);

    let cardTitle = document.createElement("div");
    let heading = document.createElement("h5");
    cardTitle.appendChild(heading);
    heading.classList.add("card-title", "text-primary");
    heading.innerText = item.name;
    card.appendChild(cardTitle);

    let email = document.createElement("div");
    email.classList.add("card-text", "text-warning");
    email.innerText = item.email;
    card.appendChild(email);

    let body = document.createElement("div");
    body.classList.add("card-text", "text-info");
    body.innerText = item.body;
    card.appendChild(body);
  });
}
getData();
