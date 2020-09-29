import '../components/gim-list.js';
import '../components/web-footer.js';
import DataSource from '../data/data-source.js';

const main = async () => {
  const gimListElement = document.querySelector("gim-list");
  const renderResult = results => {
    // console.log(results)
    gimListElement.gims = results.results;
  };

  try {
    const result = await DataSource.searchGim();
    renderResult(result);
  } catch (err) {
    console.log(err);
  }

}

export default main;