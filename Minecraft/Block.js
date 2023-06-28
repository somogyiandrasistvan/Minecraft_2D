import { Blockok, Hatterek } from "./adat.js";
import Karakter from "./Karakter.js";

class Block {
  #allapot;
  #y;
  #x;
  #divElem;
  #imgElem;
  #kepek = [];
  #karakter;
  constructor(allapot, szuloElem, y, x) {
    this.#kepek.push(Blockok, Hatterek)
    this.#y = y;
    this.#x = x;
    this.#allapot = allapot;
    const IMG = $(`<img src="" alt="kep1">`);
    const DIV = $(`<div id=${this.#y}${this.#x}>`);
    DIV.append(IMG);
    szuloElem.append(DIV);
    this.#divElem = szuloElem.children("div:last-child");
    this.#imgElem = this.#divElem.children("img");
    this.#setBlockok(this.#allapot);
    this.#kattintas(this.#divElem, "blockLerakas");
    this.#kattintas($(window), "blockok");
    this.mozgas(65, 37, "balra");
    this.mozgas(68, 39, "jobbra");
    this.mozgas(87, 38, "fel");
  }

  #setBlockok(allapot) {
    if (allapot == 0) {
      this.#imgElem.attr("src", this.#kepek[1][0]);
    } else if (allapot == 1) {
      this.#imgElem.attr("src", this.#kepek[0][0]);
    } else if (allapot == "K") {
      this.#imgElem.attr("src", this.#kepek[1][0]);
      this.#karakter = new Karakter(
        this.#divElem
      );
    } else if (allapot == "B") {
      this.#imgElem.attr("src", this.#kepek[0][7]);
    } else if (allapot == 2) {
      this.#imgElem.attr("src", this.#kepek[0][2]);
    } else if (allapot == 3) {
      this.#imgElem.attr("src", this.#kepek[0][1]);
    } else if (allapot == 4) {
      this.#imgElem.attr("src", this.#kepek[0][3]);
    } else if (allapot == 5) {
      this.#imgElem.attr("src", this.#kepek[0][4]);
    } else if (allapot == 6) {
      this.#imgElem.attr("src", this.#kepek[0][5]);
    } else if (allapot == 7) {
      this.#imgElem.attr("src", this.#kepek[1][1]);
    }
  }

  getY() {
    return this.#y;
  }

  getAllapot() {
    return this.#allapot;
  }

  getImg(){
    return this.#imgElem.attr("src")
  }

  mozgas(gomb, gomb2, hivas) {
    $(window).on("keydown", () => {
      if (event.which === gomb || event.which === gomb2) {
          let esemeny = new CustomEvent(hivas, { detail: this });
          window.dispatchEvent(esemeny);
      }
    });
  }

  setMozgas() {
    if (this.#allapot == "K") {
      $(this.#divElem).find(".Karakter").remove();
      this.#allapot = '0'
    }
    else {
      this.#allapot = "K"
      new Karakter(
        this.#divElem
      );
    }
  }

  #kattintas(esemeny, kattintas) {
    esemeny.on("click", () => {
      let esemeny = new CustomEvent(kattintas, { detail: this });
      window.dispatchEvent(esemeny);
    });
  }

  setBlock(block, csere) {
    if (block.getAllapot() == 0) {
      if (csere == 0) {
        block.#allapot = 1;
        block.#imgElem.attr("src", this.#kepek[0][0]);
      } else if (csere == 1) {
        block.#allapot = 3;
        block.#imgElem.attr("src", this.#kepek[0][1]);
      } else if (csere == 2) {
        block.#allapot = 2;
        block.#imgElem.attr("src", this.#kepek[0][2]);
      } else if (csere == 3) {
        block.#allapot = 6;
        block.#imgElem.attr("src", this.#kepek[0][3]);
      } else if (csere == 4) {
        block.#allapot = 5;
        block.#imgElem.attr("src", this.#kepek[0][4]);
      } else if (csere == 5) {
        block.#allapot = 4;
        block.#imgElem.attr("src", this.#kepek[0][5]);
      } else if (csere == 6) {
        block.#allapot = 5;
        block.#imgElem.attr("src", this.#kepek[0][6]);
      } else if (csere == 7) {
        block.#allapot = 2;
        block.#imgElem.attr("src", this.#kepek[1][2]);
      } else if (csere == 8) {
        block.#allapot = 7;
        block.#imgElem.attr("src", this.#kepek[1][1]);
      } else {
        block.#allapot = 1;
        block.#imgElem.attr("src", this.#kepek[1][0]);
      }
    } else if (block.getAllapot() == "B") {
      console.log("ne üsd meg!");
    } else {
      block.#allapot = '0';
      block.#imgElem.attr("src", this.#kepek[1][0]);
    }
  }
}

export default Block;
