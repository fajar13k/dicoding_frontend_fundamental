class WebFooter extends HTMLElement {
  connectedCallback(){
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="bg-emerald">
      <div class="flex items-center pb-6 pt-6 mx-auto text-byzantium text-sm flex-col lg:flex-row max-w-6xl">
        <div class="text-base pb-4 lg:pb-0">Made with &hearts; by <a href="http://fajar13k.github.io/portfolio" class="font-medium border-b-2 border-byzantium hover:border-byzantium_hover hover:font-semibold">Fajar Nazmi Fadillah</a></div>
          <div class="flex md:flex-auto md:flex-row-reverse flex-row">
            <a href="https://twitter.com/Fj_Nazmi" class="w-6 mx-1" target="_blank">
              <svg class="fill-current cursor-pointer text-byzantium transition duration-150 ease-in-out transform hover:-translate-y-1" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 595.28"><defs><style>.a{fill:#041825;}</style></defs><title>twitter</title><path class="a" d="M595.28,297.64C595.28,462,462,595.28,297.64,595.28S0,462,0,297.64,133.27,0,297.64,0,595.28,133.27,595.28,297.64ZM434.93,218.47a105.59,105.59,0,0,1-30.09,8.26,52.69,52.69,0,0,0,23-29,105.07,105.07,0,0,1-33.26,12.72,52.45,52.45,0,0,0-89.27,47.77,148.77,148.77,0,0,1-107.94-54.72,52.38,52.38,0,0,0,16.22,69.9,51.82,51.82,0,0,1-23.71-6.55,6,6,0,0,0,0,.67,52.38,52.38,0,0,0,42,51.34,51.69,51.69,0,0,1-13.79,1.86,53.24,53.24,0,0,1-9.85-.94,52.41,52.41,0,0,0,48.91,36.36,105.14,105.14,0,0,1-65,22.42,103.81,103.81,0,0,1-12.5-.74,148.22,148.22,0,0,0,80.29,23.54c96.31,0,149-79.79,149-149,0-2.26,0-4.54-.15-6.77a106.54,106.54,0,0,0,26.14-27.11Z" transform="translate(0 0)"/></svg>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/fajar13k/" class="w-6 mx-1" target="_blank">
              <svg class="fill-current cursor-pointer text-byzantium transition duration-150 ease-in-out transform hover:-translate-y-1" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 595.28"><defs><style>.a{fill:#041825;}</style></defs><title>linkedin</title><path class="a" d="M573,181.06c-17.36-37.21-39.69-67-64.49-94.25s-57-49.61-94.25-64.49a315.55,315.55,0,0,0-233.15,0h0C143.86,39.69,114.1,62,86.81,86.81s-49.61,57-64.49,94.25A314.18,314.18,0,0,0,0,297.64C0,337.33,5,377,22.32,414.22s39.69,67,64.49,94.25,57,49.61,94.25,64.49a314.18,314.18,0,0,0,116.58,22.32c39.69,0,79.37-5,116.58-22.32s67-39.69,94.25-64.49,49.61-57,64.49-94.25,22.32-74.41,22.32-116.58S590.32,218.27,573,181.06ZM210.83,446.46H136.42V235.63h74.41Zm0-260.44a60.92,60.92,0,0,1-37.21,12.4c-14.88,0-29.76-2.48-37.21-12.4S124,166.18,124,153.78s7.44-22.32,14.88-29.76,19.84-12.4,34.72-12.4,24.8,5,34.72,12.4,14.88,17.36,14.88,29.76S220.75,178.58,210.83,186ZM483.66,446.46H411.74V334.84c0-17.36-5-29.76-9.92-37.2s-14.88-12.4-27.28-12.4-19.84,2.48-27.28,12.4-9.92,22.32-9.92,37.2V446.46H262.92V285.24l.52-49.61h73.41l.48,32.24c2.48-12.4,12.4-24.8,22.32-32.24a60.92,60.92,0,0,1,37.21-12.4c27.28,0,49.61,9.92,64.49,29.76s22.32,47.13,22.32,81.85Z" transform="translate(0 0)"/></svg>
            </a>
            <a href="https://github.com/fajar13k" class="w-6 mx-1" target="_blank">
              <svg class="fill-current cursor-pointer text-byzantium transition duration-150 ease-in-out transform hover:-translate-y-1" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 580.86"><defs><style>.a{fill:#041825;}</style></defs><title>github</title><path class="a" d="M297.64,7.21C133.26,7.21,0,140.47,0,304.85,0,436.41,85.42,548,203.59,587.61c14.88,2.38,19.64-6.85,19.64-14.88v-50.3c-82.45,17.86-100-39.88-100-39.88-13.69-34.53-33-43.75-33-43.75-27.09-18.45,2.08-17.86,2.08-17.86,29.76,2.08,45.54,30.66,45.54,30.66,25.89,45.24,69.65,31.85,86.61,24.7,2.68-19.35,10.42-32.44,18.75-39.88C177.1,429,107.75,403.37,107.75,290c0-33,11.31-59.53,30.66-80.66-3-7.44-13.39-38.4,3-78.58,0,0,25-8,81.85,30.36a286.77,286.77,0,0,1,148.82,0c56.85-38.4,81.85-30.36,81.85-30.36,16.37,40.18,6,71.14,3,78.58,19.35,21.13,30.66,47.62,30.66,80.66,0,113.7-69.65,138.7-136,146.14,10.72,9.23,20.54,27.38,20.54,55.06v81.55c0,8,4.76,17.56,19.94,14.88,118.16-39.88,203.29-151.2,203.29-282.76C595.28,140.47,462,7.21,297.64,7.21Z" transform="translate(0 -7.21)"/></svg>
            </a>
        </div>
      </div>
    </div>
    `
  }
}

customElements.define("web-footer", WebFooter);