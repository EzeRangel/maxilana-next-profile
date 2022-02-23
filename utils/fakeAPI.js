import cards from "./cardlist.json";
import menulist from "./menu.json";

export function getCards() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cards);
    }, 3000);
  });
}

export function removeCard(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newCards = cards.filter(function (item) {
        const isThisCard = item.id !== id;

        return isThisCard;
      });

      resolve(newCards);
    }, 2000);
  });
}

export function getMenu() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(menulist);
    }, 3000);
  });
}

const api = {
  getCards,
  getMenu,
  removeCard,
};

export default api;
