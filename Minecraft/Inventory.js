import { Inventories } from "./adat.js";
import { Blockok } from "./adat.js";
import { Hatterek } from "./adat.js";

class Inventory {
    #allapot;
    #i;
    #divElem;
    #divElem2;
    #imgElem2
    #imgElem;
    #kepek = [];
    #blockok = [];
    #hatterek = [];
    #tarhely;
    constructor(allapot, szuloElem, i) {
      this.#kepek = Inventories
      this.#blockok = Blockok;
      this.#hatterek = Hatterek;
      this.#allapot = allapot;
      this.#i = i;
      const IMG = $(`<img src="" alt="kep">`);
      const DIV = $(`<div id=inv>`);
      const DIV2 = $(`<div id=block>`);
      const IMG2= $(`<img src="" alt="blockkep">`);
      DIV.append(IMG);
      DIV.append(DIV2)
      DIV2.append(IMG2)
      szuloElem.append(DIV);
      this.#divElem = szuloElem.children("div:last-child");
      this.#divElem2 = this.#divElem.children("div");
      this.#imgElem = this.#divElem.children("img");
      this.#imgElem2 = this.#divElem2.children("img");
      this.#setAllapot();
      this.#divElem.on("click", () => {
        this.#esemenyTrigger();
      });
    }
  
    #setAllapot() {
      if (this.#allapot == 0) {
        this.#imgElem.attr("src", this.#kepek[0]);
        this.#imgElem2.attr("src", this.#blockok[0]);
      } else if (this.#allapot == 1) {
        this.#imgElem.attr("src", this.#kepek[0]);
        this.#imgElem2.attr("src", this.#blockok[1]);
      } else if (this.#allapot == 2) {
        this.#imgElem.attr("src", this.#kepek[0]);
        this.#imgElem2.attr("src", this.#blockok[2]);
      } else if (this.#allapot == 3) {
        this.#imgElem.attr("src", this.#kepek[0]);
        this.#imgElem2.attr("src", this.#blockok[3]);
      } else if (this.#allapot == 4) {
        this.#imgElem.attr("src", this.#kepek[0]);
        this.#imgElem2.attr("src", this.#blockok[4]);
      } else if (this.#allapot == 5) {
        this.#imgElem.attr("src", this.#kepek[0]);
        this.#imgElem2.attr("src", this.#blockok[5]);
      } else if (this.#allapot == 6) {
        this.#imgElem.attr("src", this.#kepek[0]);
        this.#imgElem2.attr("src", this.#blockok[6]);
      } else if (this.#allapot == 7) {
        this.#imgElem.attr("src", this.#kepek[0]);
        this.#imgElem2.attr("src", this.#hatterek[1]);
      } else if (this.#allapot == 8) {
        this.#imgElem.attr("src", this.#kepek[0]);
        this.#imgElem2.attr("src", this.#hatterek[2]);
      }
    }
  
    getAllapot() {
      return this.#allapot;
    }

    kattintas(boolean){
      if(boolean == true){
        this.#divElem.attr("id", "inv2");
        this.#imgElem.attr("src", this.#kepek[1]);
      }
      else{
        this.#divElem.attr("id", "inv");
        this.#imgElem.attr("src", this.#kepek[0]);
      }
    }
  
    #esemenyTrigger() {
      let esemeny = new CustomEvent("adat", { detail: this });
      window.dispatchEvent(esemeny);
    }
  }
  
  export default Inventory;
  