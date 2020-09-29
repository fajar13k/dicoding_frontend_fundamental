class DisklaimerBanner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="bg-emerald pattern py-8">
      <div class="max-w-5xl px-6 mx-auto text-center">
        <h2 class="text-2xl leading-none font-semibold text-byzantium mb-4 lg:mb-2">Disclaimer</h2>
        <p class="text-byzantium">Aset yang dipakai di hero banner diunduh dari <a href="https://www.freepik.com/" class="font-medium border-b-2 border-byzantium hover:border-byzantium_hover hover:font-semibold" target="_blank">Freepik</a>, data yang didapat menggunakan API Publik yang disediakan oleh <a href="https://api.rawg.io/docs/" class="font-medium border-b-2 border-byzantium hover:border-byzantium_hover hover:font-semibold" target="_blank">RAWG API</a></p>
      </div>
    </section>
    `;
  }
}

customElements.define("disklaimer-banner", DisklaimerBanner);