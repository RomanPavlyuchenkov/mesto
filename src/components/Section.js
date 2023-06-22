export default class Section {
  constructor (containerSelector,renderer) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  };

  renderItems(items) { // карточки при загрузке страницы
    items.reverse().forEach((item) => {
      this._renderer(item);
    });
  };

  addItem(item) {
    this._container.prepend(item);
  };
};
