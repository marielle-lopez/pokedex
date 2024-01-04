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

export const showDetails = (pokemon) => {
  if (document.querySelector(".modal__info")) {
    document.querySelector(".modal__info").remove();
  }

  const overlay = document.querySelector(".overlay");
  overlay.classList.remove("overlay--hidden");

  const modal = document.querySelector(".modal");
  modal.classList.remove("modal--hidden");

  const textNodeName = document.createTextNode(pokemon.name);
  const textNodeType = document.createTextNode(pokemon.type.join(", "));
  const textNodeTypeTitle = document.createTextNode("type: ");
  const textNodeAbilities = document.createTextNode(
    pokemon.abilities.join(", ")
  );
  const textNodeAbilitiesTitle = document.createTextNode("abilities: ");

  const elementNodeName = document.createElement("p");
  elementNodeName.classList.add("modal__info__name");
  const elementNodeImg = document.createElement("img");
  elementNodeImg.classList.add("modal__info__img");
  const elementNodeType = document.createElement("p");
  const elementNodeTypeTitle = document.createElement("span");
  elementNodeTypeTitle.classList.add("modal__info__title");
  elementNodeType.classList.add("modal__info__type");
  const elementNodeAbilities = document.createElement("p");
  const elementNodeAbilitiesTitle = document.createElement("span");
  elementNodeAbilitiesTitle.classList.add("modal__info__title");
  elementNodeAbilities.classList.add("modal__info__abilities");

  const elementNodeInfo = document.createElement("div");
  elementNodeInfo.classList.add("modal__info");
  modal.appendChild(elementNodeInfo);

  elementNodeName.append(textNodeName);
  elementNodeImg.src = pokemon.imgURL;
  elementNodeTypeTitle.append(textNodeTypeTitle);
  elementNodeType.append(elementNodeTypeTitle);
  elementNodeType.append(textNodeType);
  elementNodeAbilitiesTitle.append(textNodeAbilitiesTitle);
  elementNodeAbilities.append(elementNodeAbilitiesTitle);
  elementNodeAbilities.append(textNodeAbilities);

  elementNodeInfo.appendChild(elementNodeName);
  elementNodeInfo.appendChild(elementNodeImg);
  elementNodeInfo.appendChild(elementNodeType);
  elementNodeInfo.appendChild(elementNodeAbilities);

  // const textNodeName = document.createTextNode(pokemon.name);
  // const textNodeType = document.createTextNode(`${pokemon.type.join(", ")}`);
  // const textNodeAbilities = document.createTextNode(
  //   `${pokemon.abilities.join(", ")}`
  // );

  // const elementNodeName = document.querySelector(`.modal__info__name`);
  // const elementNodeImg = document.querySelector(".modal__info__img");
  // const elementNodeType = document.querySelector(`.modal__info__type`);

  // const elementNodeAbilities = document.querySelector(
  //   `.modal__info__abilities`
  // );

  // elementNodeName.append(textNodeName);
  // elementNodeImg.src = pokemon.imgURL;
  // elementNodeType.append(textNodeType);
  // elementNodeAbilities.append(textNodeAbilities);

  // modal.appendChild(elementNodeName);
  // modal.appendChild(elementNodeAbilities);
};
