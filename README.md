# Animal Kingdom Classification

This JavaScript code models the Animal Kingdom based on the provided classification. The code utilizes Object-Oriented Programming (OOP) principles, including encapsulation, abstraction, polymorphism, and inheritance.

## Animal Class

The `Animal` class serves as the base class for all animals, with properties like `name`, `backbone`, and `bloodType`. It also includes a method `makeSound` for making generic animal sounds.

## Derived Classes

The Animal Kingdom is further divided into specific classes:

1. ### Arthropoda
   - Extends `Animal`
   - Cold-Blooded
   - Makes scuttling and clicking sounds

2. ### Fish
   - Extends `Animal`
   - Cold-Blooded
   - Makes bubble and gurgle sounds

3. ### Amphibia
   - Extends `Animal`
   - Cold-Blooded
   - Makes croak and ribbit sounds

4. ### Reptiles
   - Extends `Animal`
   - Cold-Blooded
   - Makes hiss and slither sounds

5. ### AVES (Birds)
   - Extends `Animal`
   - Warm-Blooded
   - Makes chirp and tweet sounds

6. ### Mammals
   - Extends `Animal`
   - Warm-Blooded
   - Makes roar and growl sounds

## Example Usage

```javascript
const spider = new Arthropoda("Spider");
const salmon = new Fish("Salmon");
const frog = new Amphibia("Frog");
const turtle = new Reptiles("Turtle");
const eagle = new AVES("Eagle");
const lion = new Mammals("Lion");

console.log(spider.makeSound()); // Output: Scuttling and clicking sounds
console.log(eagle.getBackbone()); // Output: true
console.log(lion.getBloodType()); // Output: Warm-Blooded
