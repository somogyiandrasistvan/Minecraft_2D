import { Character } from "./adat.js";

class Karakter {
  #szuloElem;
  #kep
  constructor(szuloElem) {
    this.#kep = Character
    this.#szuloElem = szuloElem;
    const IMG = $(`<img src="${this.#kep}" alt="kep">`);
    const DIV = $(`<div class=Karakter>`);
    DIV.append(IMG)
    szuloElem.append(DIV);
  }

  getSzuloElem() {
    return this.#szuloElem;
  }
}

export default Karakter;
