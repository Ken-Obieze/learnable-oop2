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

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }

  // Polymorphism: Method to make a sound
  makeSound() {
    return "An animal sound";
  }
}

// Inheritance: Arthropoda class extends Animal class
class Arthropoda extends Animal {
  
  constructor(name, backbone, bloodType, numberOfLegs) {
    super(name, backbone, bloodType); 
    this.numberOfLegs = numberOfLegs;
  }

  crawl() {
    console.log(`${this.name} is crawling with its ${this.numberOfLegs} legs.`);
  }

  // Polymorphism: Override makeSound method for Arthropoda
  makeSound() {
    return "Scuttling and clicking sounds";
  }
}

// Inheritance: Fish class extends Animal class
class Fish extends Animal {
  constructor(name, backbone, bloodType, waterType) {
    super(name, backbone, bloodType);
    this.waterType = waterType; // e.g., 'freshwater', 'saltwater'
  }

  swim() {
    console.log(`${this.name} is swimming in ${this.waterType} water.`);
  }

  // Polymorphism: Override makeSound method for Fish
  makeSound() {
    return "Bubble and gurgle sounds";
  }
}

// Inheritance: Amphibia class extends Animal class
class Amphibia extends Animal {
  constructor(name, backbone, bloodType) {
    super(name, backbone, bloodType);
  }

  // Polymorphism: Override makeSound method for Amphibia
  makeSound() {
    return "Croak and ribbit sounds";
  }
}

// Inheritance: Reptiles class extends Animal class
class Reptiles extends Animal {
  constructor(name, backbone, bloodType, hasScales) {
    super(name, backbone, bloodType);
    this.hasScales = hasScales;
  }

  sunBath() {
    console.log(`${this.name} is sunbathing.`);
  }

  // Polymorphism: Override makeSound method for Reptiles
  makeSound() {
    return "Hiss and slither sounds";
  }
}

// Inheritance: AVES class (Birds) extends Animal class
class AVES extends Animal {
  constructor(name, backbone, bloodType) {
    super(name, backbone, bloodType);
  }

  // Polymorphism: Override makeSound method for AVES
  makeSound() {
    return "Chirp and tweet sounds";
  }
}

// Inheritance: Mammals class extends Animal class
class Mammals extends Animal {
  constructor(name, backbone, bloodType) {
    super(name, backbone, bloodType);
  }

  // Polymorphism: Override makeSound method for Mammals
  makeSound() {
    return "Roar and growl sounds";
  }
}


const spider = new Arthropoda("Spider",false, "Cold-Blooded", 8);
const salmon = new Fish("Salmon", true, "Cold-Blooded", "saltwater");
const frog = new Amphibia("Frog", true, "Cold-Blooded");
const turtle = new Reptiles("Turtle", true, "Cold-Blooded", false);
const eagle = new AVES("Eagle", true, "Warm-Blooded");
const lion = new Mammals("Lion", true, "Warm-Blooded");

spider.eat(); // Output: Spider is eating.
spider.crawl(); // Output: Spider is crawling with its 8 legs.
salmon.eat(); // Output: Salmon is eating.
salmon.swim(); // Output: Salmon is swimming in saltwater water.
turtle.eat(); // Output: Turtle is eating.
turtle.sunBath(); // Output: Turtle is sunbathing.
console.log(spider.makeSound()); // Output: Scuttling and clicking sounds
console.log(eagle.getBackbone()); // Output: true
console.log(lion.getBloodType()); // Output: Warm-Blooded
