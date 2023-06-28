import Block from "./Block.js";
import Inventory from "./Inventory.js";
import { Hatterek } from "./adat.js";
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
  #tarhely2 = [];
  #spawnHely = 0;
  #kivalasztottBlock;
  #kivalasztottBlockTarhely = [];
  #kivalasztottBlockHely = [];
  #inventoryBlock;
  #kepek = []
  #kapcsolo = false;
  constructor() {
    this.#kepek = Hatterek

    this.#spawn();
    this.#init();

    $(window).on("balra", (event) => {
      this.#kapcsolo = true
      let boolean = false
      this.#tarhely.push(event.detail);
      if (this.#tarhely.length == this.#JatekterDb) {
        for (let i = 0; i < this.#tarhely.length; i++) {
          if (this.#tarhely[i].getAllapot() == "K" && boolean == false && this.#falVane(this.#tarhely[i - 1]) == true) {
            boolean = true
            this.#tarhely[i].setMozgas()
            this.#le(this.#tarhely, i, -1).setMozgas()

          }
        }
        this.#tarhely = $().empty()
      }
    });

    $(window).on("jobbra", (event) => {
      this.#kapcsolo = true
      let boolean = false
      this.#tarhely.push(event.detail);
      if (this.#tarhely.length == this.#JatekterDb) {
        for (let i = 0; i < this.#tarhely.length; i++) {
          if (this.#tarhely[i].getAllapot() == "K" && boolean == false && this.#falVane(this.#tarhely[i + 1]) == true) {
            boolean = true
            this.#tarhely[i].setMozgas()
            this.#le(this.#tarhely, i, +1).setMozgas()
          }
        }
        this.#tarhely = $().empty()
      }
    });

    $(window).on("fel", (event) => {
      this.#kapcsolo = false
      this.#tarhely2.push(event.detail);
      if (this.#tarhely2.length == this.#JatekterDb) {
        for (let i = 0; i < this.#tarhely2.length; i++) {
          if (this.#tarhely2[i].getAllapot() == "K") {
            if (this.#falVane(this.#tarhely2[i - this.#jatek[0].length]) == true) {
              this.#tarhely2[i].setMozgas()
              this.#tarhely2[i - 22].setMozgas();
              setTimeout(() => {
                if (this.#kapcsolo == false) {
                  this.#tarhely2[i - this.#jatek[0].length].setMozgas();
                  this.#le(this.#tarhely2, i, 0).setMozgas()
                  this.#tarhely2 = $().empty()
                }
                else {
                  this.#kapcsolo = false
                  this.#tarhely2 = $().empty()
                }
              }, 500)
            }
            else {
              this.#tarhely2 = $().empty()
            }
          }
        }
      }
    });


    $(window).on("blockLerakas", (event) => {
      if (event.detail.getAllapot() != "K") {
        this.#tarhely.push(event.detail);
        this.#kivalasztottBlock = event.detail;
      } else {
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
          j
        );
      }
    }
    const asideElem = $("aside");
    for (let i = 0; i < this.#inventory.length; i++) {
      this.inventory = new Inventory(
        this.#inventory[i],
        asideElem,
        i
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

  #falVane(adat) {
    if (adat == undefined) {
      console.log("error")
    }
    else if (adat.getImg() == this.#kepek[0] || adat.getImg() == this.#kepek[1] || adat.getImg() == this.#kepek[2]) {
      return true
    }
    else {
      return false
    }
  }

  #le(adat, i, plusz) {
    let szorzo = 1
    let szam = adat[i + this.#jatek[0].length + plusz]
    while (this.#falVane(szam) == true) {
      szorzo++
      szam = adat[i + this.#jatek[0].length * szorzo + plusz]
    }
    szorzo--
    let magassag = adat[i + this.#jatek[0].length * szorzo + plusz]
    console.log(magassag)
    return magassag
  }

}


export default Jatekter;
