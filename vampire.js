class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }


  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let currentVampire = this;
    let lineage = 0;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      lineage ++;
    }
    return lineage;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let vampire1 = this;
    let vampire2 = vampire;

    if (vampire1.numberOfVampiresFromOriginal < vampire2.numberOfVampiresFromOriginal) {
      return true;
    }
    return false;
  };

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  // closestCommonAncestor(vampire) {
  // };
}

const original = new Vampire("Original", 1800);

const ansel = new Vampire("Ansel",1850);
const bart = new Vampire("Bart", 1855);

const elgort = new Vampire("Elgort", 1900);
const sarah = new Vampire("Sarah", 1915);

const andrew = new Vampire("Andrew", 1921);

original.addOffspring(ansel);
original.addOffspring(bart);

ansel.addOffspring(elgort);
ansel.addOffspring(sarah);

elgort.addOffspring(andrew);

console.log(elgort.numberOfOffspring);

module.exports = Vampire;

