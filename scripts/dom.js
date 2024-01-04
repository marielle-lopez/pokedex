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

export const addElement = (
  text,
  parentNode,
  element = null,
  className = null
) => {
  let textNode;
  let elementNode;

  textNode = document.createTextNode(text);

  if (element) {
    elementNode = document.createElement(element);
  }

  if (className) {
    elementNode.classList.add(className);
  }

  elementNode.append(textNode);
  parentNode.appendChild(elementNode);
};

export const showDetails = (pokemon) => {
  if (document.querySelector(".modal__info")) {
    document.querySelector(".modal__info").remove();
  }

  const overlay = document.querySelector(".overlay");
  const modal = document.querySelector(".modal");
  overlay.classList.remove("overlay--hidden");
  modal.className = "modal"; // resets classList with just "modal"
  modal.classList.add(`modal--${pokemon.type[0]}`);

  const elementNodeImg = document.createElement("img");
  const elementNodeInfo = document.createElement("div");
  elementNodeImg.classList.add("modal__info__img");
  elementNodeInfo.classList.add("modal__info");

  modal.appendChild(elementNodeInfo);
  elementNodeImg.src = pokemon.imgURL;

  addElement(pokemon.name, elementNodeInfo, "span", "modal__info__name");
  addElement(
    pokemon.type.join(", "),
    elementNodeInfo,
    "span",
    "modal__info__type"
  );
  elementNodeInfo.appendChild(elementNodeImg);

  for (let i = 0; i < pokemon.abilities.length; i++) {
    addElement(
      pokemon.abilities[i].name.split("-").join(" "),
      elementNodeInfo,
      "span",
      "modal__info__title"
    );
    addElement(
      pokemon.abilities[i].description,
      elementNodeInfo,
      "p",
      "modal__info__abilities"
    );
  }

  // const textNodeName = document.createTextNode(pokemon.name);
  // const textNodeType = document.createTextNode(pokemon.type.join(", "));
  // const textNodeTypeTitle = document.createTextNode("type:");
  // const textNodeAbilities = document.createTextNode(
  //   pokemon.abilities
  //     .map((ability) => `${ability.name} ${ability.description}`)
  //     .join("\n")
  // );
  // const textNodeAbilities = document.createTextNode(
  //   pokemon.abilities.map((ability) => ability.name).join(", ")
  // );
  // const textNodeAbilitiesTitle = document.createTextNode("abilities: ");

  // const elementNodeName = document.createElement("p");
  // elementNodeName.classList.add("modal__info__name");
  // const elementNodeImg = document.createElement("img");
  // elementNodeImg.classList.add("modal__info__img");
  // const elementNodeType = document.createElement("p");
  // const elementNodeTypeTitle = document.createElement("p");
  // elementNodeTypeTitle.classList.add("modal__info__title");
  // elementNodeType.classList.add("modal__info__type");
  // const elementNodeAbilities = document.createElement("p");
  // const elementNodeAbilitiesTitle = document.createElement("p");
  // elementNodeAbilitiesTitle.classList.add("modal__info__title");
  // elementNodeAbilities.classList.add("modal__info__abilities");

  // const elementNodeInfo = document.createElement("div");
  // elementNodeInfo.classList.add("modal__info");
  // modal.appendChild(elementNodeInfo);

  // elementNodeName.append(textNodeName);
  // elementNodeImg.src = pokemon.imgURL;
  // elementNodeTypeTitle.append(textNodeTypeTitle);
  // elementNodeType.append(elementNodeTypeTitle);
  // elementNodeType.append(textNodeType);
  // elementNodeAbilitiesTitle.append(textNodeAbilitiesTitle);
  // elementNodeAbilities.append(elementNodeAbilitiesTitle);
  // elementNodeAbilities.append(textNodeAbilities);

  // addElement(pokemon.name, elementNodeInfo, "p", "modal__info__name");
  // elementNodeInfo.appendChild(elementNodeImg);
  // addElement(
  //   pokemon.type.join(", "),
  //   elementNodeInfo,
  //   "p",
  //   "modal__info__type"
  // );
  // addElement(
  //   pokemon.abilities.map((ability) => ability.name).join(", "),
  //   elementNodeInfo,
  //   "p",
  //   "modal__info__abilities"
  // );

  // elementNodeInfo.appendChild(elementNodeName);
  // elementNodeInfo.appendChild(elementNodeType);
  // elementNodeInfo.appendChild(elementNodeAbilities);
};
