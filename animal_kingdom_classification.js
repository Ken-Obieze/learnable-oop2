// Base class for animals
class Animal {
  constructor(name, backbone, bloodType) {
    this.name = name;
    this.backbone = backbone;
    this.bloodType = bloodType;
  }

  // Encapsulation and Abstraction: Getters for private properties
  getName() {
    return this.name;
  }

  getBackbone() {
    return this.backbone;
  }

  getBloodType() {
    return this.bloodType;
  }

  // Polymorphism: Method to make a sound
  makeSound() {
    return "Some generic animal sound";
  }
}

// Inheritance: Arthropoda class extends Animal class
class Arthropoda extends Animal {
  constructor(name) {
    super(name, false, "Cold-Blooded");
  }

  // Polymorphism: Override makeSound method for Arthropoda
  makeSound() {
    return "Scuttling and clicking sounds";
  }
}

// Inheritance: Fish class extends Animal class
class Fish extends Animal {
  constructor(name) {
    super(name, true, "Cold-Blooded");
  }

  // Polymorphism: Override makeSound method for Fish
  makeSound() {
    return "Bubble and gurgle sounds";
  }
}

// Inheritance: Amphibia class extends Animal class
class Amphibia extends Animal {
  constructor(name) {
    super(name, true, "Cold-Blooded");
  }

  // Polymorphism: Override makeSound method for Amphibia
  makeSound() {
    return "Croak and ribbit sounds";
  }
}

// Inheritance: Reptiles class extends Animal class
class Reptiles extends Animal {
  constructor(name) {
    super(name, true, "Cold-Blooded");
  }

  // Polymorphism: Override makeSound method for Reptiles
  makeSound() {
    return "Hiss and slither sounds";
  }
}

// Inheritance: AVES class (Birds) extends Animal class
class AVES extends Animal {
  constructor(name) {
    super(name, true, "Warm-Blooded");
  }

  // Polymorphism: Override makeSound method for AVES
  makeSound() {
    return "Chirp and tweet sounds";
  }
}

// Inheritance: Mammals class extends Animal class
class Mammals extends Animal {
  constructor(name) {
    super(name, true, "Warm-Blooded");
  }

  // Polymorphism: Override makeSound method for Mammals
  makeSound() {
    return "Roar and growl sounds";
  }
}


const spider = new Arthropoda("Spider");
const salmon = new Fish("Salmon");
const frog = new Amphibia("Frog");
const turtle = new Reptiles("Turtle");
const eagle = new AVES("Eagle");
const lion = new Mammals("Lion");

console.log(spider.makeSound()); // Output: Scuttling and clicking sounds
console.log(eagle.getBackbone()); // Output: true
console.log(lion.getBloodType()); // Output: Warm-Blooded
