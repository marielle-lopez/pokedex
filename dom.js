export const addCard = async (pokemon, cardsContainer) => {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");
  cardContainer.id = pokemon.name;

  const textNodeName = document.createTextNode(pokemon.name);
  const textNodeType = document.createTextNode(pokemon.type.join(", "));

  const elementNodeName = document.createElement("p");
  const elementNodeType = document.createElement("p");
  const elementNodeImg = document.createElement("img");

  elementNodeName.classList.add("card__name");
  elementNodeType.classList.add("card__type");
  elementNodeImg.classList.add("card__img");

  elementNodeName.append(textNodeName);
  elementNodeType.append(textNodeType);
  elementNodeImg.src = pokemon.imgURL;

  cardContainer.appendChild(elementNodeName);
  cardContainer.appendChild(elementNodeImg);
  cardContainer.appendChild(elementNodeType);
  cardsContainer.appendChild(cardContainer);
};

export const displayAllPokemon = () => {
  const cards = document.querySelectorAll(".card");

  for (const card of cards) {
    card.classList.remove("card--hide");
  }
};

export const filterPokemon = () => {
  displayAllPokemon();
  const query = document.querySelector(".search__textbox").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  for (const card of cards) {
    if (!card.id.includes(query)) {
      card.classList.add("card--hide");
    }
  }
};
