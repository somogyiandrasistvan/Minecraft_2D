import Block from "./Block.js";
import Inventory from "./Inventory.js";
import Karakter from "./Karakter.js";
class Jatekter {
  #jatek = [
    [
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
    ],
    [
      "0",
      "0",
      "0",
      "5",
      "5",
      "5",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "3",
    ],
    [
      "0",
      "0",
      "5",
      "5",
      "5",
      "5",
      "5",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
    ],
    [
      "0",
      "0",
      "5",
      "5",
      "5",
      "5",
      "5",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "3",
      "1",
    ],
    [
      "0",
      "0",
      "0",
      "0",
      "6",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "1",
    ],
    [
      "0",
      "0",
      "0",
      "0",
      "6",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "3",
      "1",
      "1",
    ],
    [
      "0",
      "0",
      "0",
      "0",
      "6",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "3",
      "3",
      "1",
      "1",
      "1",
    ],
    [
      "3",
      "3",
      "3",
      "3",
      "3",
      "3",
      "3",
      "0",
      "0",
      "0",
      "0",
      "0",
      "3",
      "3",
      "7",
      "7",
      "7",
      "1",
      "1",
      "1",
      "1",
      "1",
    ],
    [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "3",
      "3",
      "3",
      "3",
      "3",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
    ],
    [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
    ],
    [
      "2",
      "2",
      "2",
      "1",
      "1",
      "1",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "1",
      "1",
      "2",
      "2",
      "1",
      "1",
      "2",
      "2",
      "2",
      "2",
    ],
    [
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
    ],
    [
      "2",
      "2",
      "2",
      "2",
      "4",
      "4",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "4",
      "4",
      "4",
      "2",
      "2",
      "2",
      "2",
      "2",
    ],
    [
      "2",
      "2",
      "4",
      "4",
      "4",
      "4",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "4",
      "4",
      "4",
      "4",
      "4",
      "4",
      "2",
      "2",
      "2",
    ],
    [
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
    ],
    [
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
    ],
    [
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
    ],
  ];

  #inventory = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  #JatekterDb = 0;
  #foldszint = this.#jatek.length - 1;
  #tarhely = [];
  #spawnHely = 0;
  #kivalasztottBlock;
  #kivalasztottBlockTarhely = [];
  #kivalasztottBlockHely = [];
  #kepekLista = [];
  #inventoryBlock;
  constructor(kepekLista) {
    this.#kepekLista = kepekLista;
    this.#spawn();
    this.#init();

    $(window).on("balra", (event) => {
      this.#tarhely.push(event.detail);
      if (this.#tarhely.length == this.#JatekterDb) {
        for (let i = 0; i < this.#tarhely.length; i++) {
          if(this.#tarhely[i].getAllapot() == "K"){
            this.block.SetMozgas(this.#tarhely[i-1])
          }   
        }
      }
    });

    $(window).on("blockLerakas", (event) => {
      if(event.detail.getAllapot() != "K"){
        this.#tarhely.push(event.detail);
        this.#kivalasztottBlock = event.detail;
      }else{
        console.log("Ne csikizz!")
      }
    });

    $(window).on("blockok", (event) => {
      this.#kivalasztottBlockTarhely.push(event.detail);
      if (this.#kivalasztottBlockTarhely.length == this.#JatekterDb - 1) {
        this.ellenorzes();
      }
    });

    $(window).on("adat", (event) => {
      this.#inventoryBlock = event.detail.getAllapot();
    });
  }

  #init() {
    const szuloElem = $("article");
    for (let i = 0; i < this.#jatek.length; i++) {
      this.#JatekterDb += this.#jatek[i].length;
      for (let j = 0; j < this.#jatek[i].length; j++) {
        this.block = new Block(
          this.#jatek[i][j],
          szuloElem,
          i,
          j,
          this.#kepekLista
        );
      }
    }
    const asideElem = $("aside");
    for (let i = 0; i < this.#inventory.length; i++) {
      this.inventory = new Inventory(
        this.#inventory[i],
        asideElem,
        i,
        this.#kepekLista
      );
    }
  }

  #spawn() {
    let spawn = false;
    while (spawn == false) {
      let db = 0;
      for (let i = 0; i < this.#jatek[this.#foldszint].length; i++) {
        if (this.#jatek[this.#foldszint - this.#spawnHely][i] != 0) {
          db++;
        }
      }
      if (db == this.#jatek[this.#foldszint].length) {
        this.#spawnHely++;
      } else {
        spawn = true;
      }
    }
    spawn = false;
    while (spawn == false) {
      let szam = Math.floor(
        Math.random() * this.#jatek[this.#foldszint].length
      );
      if (this.#jatek[this.#foldszint - this.#spawnHely][szam] == 0) {
        this.#jatek[this.#foldszint - this.#spawnHely][szam] = "K";
        spawn = true;
      } else {
        szam = Math.floor(Math.random() * this.#jatek[this.#foldszint].length);
      }
    }
  }

  ellenorzes() {
    for (let i = 0; i < this.#kivalasztottBlockTarhely.length; i++) {
      if (this.#kivalasztottBlockTarhely[i].getAllapot() == "K") {
        this.#kivalasztottBlockHely.push(this.#kivalasztottBlockTarhely[i - 1]);
        this.#kivalasztottBlockHely.push(this.#kivalasztottBlockTarhely[i + 1]);
        this.#kivalasztottBlockHely.push(this.#kivalasztottBlockTarhely[i - 2]);
        this.#kivalasztottBlockHely.push(this.#kivalasztottBlockTarhely[i + 2]);
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i + 1 + this.#jatek[this.#foldszint].length
          ]
        );
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i - 1 + this.#jatek[this.#foldszint].length
          ]
        );
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i + 1 - this.#jatek[this.#foldszint].length
          ]
        );
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i - 1 - this.#jatek[this.#foldszint].length
          ]
        );
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i + 2 + this.#jatek[this.#foldszint].length
          ]
        );
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i - 2 + this.#jatek[this.#foldszint].length
          ]
        );
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i + 2 - this.#jatek[this.#foldszint].length
          ]
        );
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i - 2 - this.#jatek[this.#foldszint].length
          ]
        );
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i - this.#jatek[this.#foldszint].length
          ]
        );
        this.#kivalasztottBlockHely.push(
          this.#kivalasztottBlockTarhely[
            i + this.#jatek[this.#foldszint].length
          ]
        );
        for (let j = 0; j < this.#kivalasztottBlockHely.length - 1; j++) {
          if (this.#kivalasztottBlock == this.#kivalasztottBlockHely[j]) {
            this.block.setBlock(this.#kivalasztottBlock, this.#inventoryBlock);
            this.#kivalasztottBlock = $().empty();
          }
        }
        this.#kivalasztottBlockHely = $().empty();
      }
    }
    this.#kivalasztottBlockTarhely = $().empty();
  }

}

export default Jatekter;
