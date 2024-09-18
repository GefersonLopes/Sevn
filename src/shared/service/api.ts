export default class Api {
  static url = "https://sevn-pleno-esportes.deno.dev"
  static async getMatches() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }
}