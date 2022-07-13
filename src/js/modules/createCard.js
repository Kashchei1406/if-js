export default function createCard(element) {
  const {
    id, name, city, country, imageUrl,
  } = element;

  return `<div data-id="${id}" class="column-item col-3 col-md-6">
        <div class="item-image">
            <img alt="${name}" src="${imageUrl}" />
        </div>
        <div class="img-text">
            <a href="#">${name}</a>
        </div>
        <div class="destination">
            <a href="#">${country}, ${city}</a>
        </div>
    </div>`;
}