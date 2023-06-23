import Jatekter from "./Jatekter.js";
import Karakter from "./Karakter.js";

class Block {
  #allapot;
  #y;
  #x;
  #divElem;
  #imgElem;
  #kepek = [];
  #karakter;
  #pozicio = 0;
  constructor(allapot, szuloElem, y, x, kepek) {
    this.#kepek = kepek;
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
    this.mozgas(65, 37, true, -25);
    this.mozgas(68, 39, false, +25);
  }

  #setBlockok(allapot) {
    if (allapot == 0) {
      this.#imgElem.attr("src", this.#kepek[1]);
    } else if (allapot == 1) {
      this.#imgElem.attr("src", this.#kepek[0]);
    } else if (allapot == "K") {
      this.#imgElem.attr("src", this.#kepek[1]);
      this.#karakter = new Karakter(
        this.#divElem
      );
      console.log(this.#divElem);
    } else if (allapot == "B") {
      this.#imgElem.attr("src", this.#kepek[4]);
    } else if (allapot == 2) {
      this.#imgElem.attr("src", this.#kepek[3]);
    } else if (allapot == 3) {
      this.#imgElem.attr("src", this.#kepek[2]);
    } else if (allapot == 4) {
      this.#imgElem.attr("src", this.#kepek[6]);
    } else if (allapot == 5) {
      this.#imgElem.attr("src", this.#kepek[7]);
    } else if (allapot == 6) {
      this.#imgElem.attr("src", this.#kepek[8]);
    } else if (allapot == 7) {
      this.#imgElem.attr("src", this.#kepek[19]);
    }
  }

  getY() {
    return this.#y;
  }

  getAllapot() {
    return this.#allapot;
  }

  mozgas(gomb, gomb2, allapot, merre) {
    const KEP = $("#Karakter img");
    $(window).on("keydown", () => {
      if (event.which === gomb || event.which === gomb2) {
        KEP.css({
          transform: `translateX(${
            this.#pozicio + merre
          }px) translateY(${-54}px)`,
        });
        if (allapot == true) {
          this.#pozicio = this.#pozicio - 25;
        } else if (allapot == false) {
          this.#pozicio = this.#pozicio + 25;
        }
        let esemeny = new CustomEvent("balra", { detail: this });
        window.dispatchEvent(esemeny);
      }
    });
  }

  SetMozgas(csere) {
    if (csere.#allapot == 0) {
      new Karakter(
        csere.#divElem
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
        block.#imgElem.attr("src", this.#kepek[0]);
      } else if (csere == 1) {
        block.#allapot = 3;
        block.#imgElem.attr("src", this.#kepek[2]);
      } else if (csere == 2) {
        block.#allapot = 2;
        block.#imgElem.attr("src", this.#kepek[3]);
      } else if (csere == 3) {
        block.#allapot = 6;
        block.#imgElem.attr("src", this.#kepek[8]);
      } else if (csere == 4) {
        block.#allapot = 5;
        block.#imgElem.attr("src", this.#kepek[7]);
      } else if (csere == 5) {
        block.#allapot = 4;
        block.#imgElem.attr("src", this.#kepek[6]);
      } else if (csere == 6) {
        block.#allapot = 5;
        block.#imgElem.attr("src", this.#kepek[17]);
      } else if (csere == 7) {
        block.#allapot = 2;
        block.#imgElem.attr("src", this.#kepek[18]);
      } else if (csere == 8) {
        block.#allapot = 7;
        block.#imgElem.attr("src", this.#kepek[19]);
      } else {
        block.#allapot = 1;
        block.#imgElem.attr("src", this.#kepek[0]);
      }
    } else if (block.getAllapot() == "B") {
      console.log("ne üsd meg!");
    } else {
      block.#allapot = 0;
      block.#imgElem.attr("src", this.#kepek[1]);
    }
  }
}

export default Block;
