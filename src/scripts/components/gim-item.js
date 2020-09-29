import moment from 'moment';

class GimItem extends HTMLElement {
  set gim(gim) {
    this._gim = gim;
    this.render();
  }

  render() {
    this.innerHTML = `
    <article class="bg-white overflow-hidden rounded-lg shadow-lg">
      <a href="${this._gim.background_image}" target="_blank">
        <img alt="${this._gim.name}_background_image" class="block object-cover h-xxxl w-full" src="${this._gim.background_image}">
      </a>

      <div class="p-4">
        <div class="flex items-center justify-between leading-tight">
          <h1 class="text-2xl font-bold">${this._gim.name}</h1>
          <p class="text-base font-extrabold text-green-500 border-2 border-green-500 rounded-lg p-2 text-right">${this._gim.metacritic == null ? "TBA" : this._gim.metacritic}</p>
        </div>
        <div class="flex items-center justify-between leading-tight border-b border-gray-700 py-4">
          <h1 class="text-md">Release date:</h1>
          <p class="text-grey-darker text-sm text-right">${moment(this._gim.released).format("LL")}</p>
        </div>
        <div class="flex items-center justify-between leading-tight border-b border-gray-700 py-4">
          <h1 class="text-md">Genres:</h1>
          <p class="text-grey-darker text-sm text-right">${this._gim.genres.map(genre => genre.name).join(", ")}</p>
        </div>
        <div class="flex items-center justify-between leading-tight border-b border-gray-700 py-4">
          <h1 class="text-md">Platforms:</h1>
          <p class="text-grey-darker text-sm text-right">${this._gim.platforms.map(plat => plat.platform.name).join(", ")}</p>
        </div>
      </div>

    </article>
    `
  }
}

customElements.define("gim-item", GimItem);