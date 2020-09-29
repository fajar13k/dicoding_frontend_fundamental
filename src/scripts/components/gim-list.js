import './gim-item.js';

class GimList extends HTMLElement {
  set gims(gims) {
    this._gims = gims;
    // console.log('render')
    this.render();
  }

  render() {
    this.innerHTML = "";
    this._gims.forEach(gim => {
      const gimItemElement = document.createElement("gim-item");
      gimItemElement.classList.add("my-4", "px-1", "w-full", "md:w-1/2", "lg:my-4", "lg:px-4", "lg:w-1/4")
      gimItemElement.gim = gim;
      this.appendChild(gimItemElement);
    })
  }
}

customElements.define("gim-list", GimList);