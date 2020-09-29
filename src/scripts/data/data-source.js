class DataSource {
  static async searchGim() {
    try {
      const result = await fetch(`https://api.rawg.io/api/games?dates=2020-01-01,2020-12-31&page_size=4&ordering=-added`)
      return result.json();
    } catch (err) {
      console.log(err);
    }
  }
}

export default DataSource;