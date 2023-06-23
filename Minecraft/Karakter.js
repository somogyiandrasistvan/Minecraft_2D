class Karakter {
  #szuloElem;
  constructor(szuloElem) {
    console.log(szuloElem);
    this.#szuloElem = szuloElem;
    const DIV = $(`<div id=Karakter>`);
    szuloElem.append(DIV);
    const KEP = $("#Karakter img");
    KEP.css({
      transform: `translateX(${0}px) translateY(${-54}px)`,
    });
  }

  getSzuloElem() {
    return this.#szuloElem;
  }
}

export default Karakter;
