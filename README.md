# Animal Kingdom Classification

## Authour
Ejiofor Obieze (B)

This JavaScript code models the Animal Kingdom based on the provided classification. The code utilizes Object-Oriented Programming (OOP) principles, including encapsulation, abstraction, polymorphism, and inheritance.

![Classification of Animal Kingdom](https://cdn1.byjus.com/wp-content/uploads/2019/04/Animal-Kingdom-Classification-of-Animal-Kingdom.png)

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

## OOP Principles in Action:

### 1. Encapsulation:

- **Animal Class:**
  - Encapsulates the common properties of all animals (`name`, `backbone`, `bloodType`).
  - Implements getter methods (`getName`, `getBackbone`, `getBloodType`) for encapsulation and abstraction.
  - `makeSound` method encapsulates the behavior of making generic animal sounds.

- **Derived Classes (Arthropoda, Fish, Amphibia, Reptiles, AVES, Mammals):**
  - Extend the `Animal` class, encapsulating specific characteristics and behavior.
  - Encapsulation of properties and methods within each class ensures clear organization and modularity.

### 2. Abstraction:

- **Animal Class:**
  - Represents the abstraction of a generic animal, focusing on essential properties and behavior.
  - `makeSound` method abstracts the idea of an animal making sounds without specifying the exact sound.

- **Derived Classes (Arthropoda, Fish, Amphibia, Reptiles, AVES, Mammals):**
  - Provide concrete implementations for specific types of animals, abstracting away unnecessary details.
  - Abstraction helps model real-world entities by focusing on essential features.

### 3. Inheritance:

- **Derived Classes (Arthropoda, Fish, Amphibia, Reptiles, AVES, Mammals):**
  - Inherit from the base `Animal` class, reusing and extending its properties and methods.
  - Demonstrates the hierarchical relationship in the Animal Kingdom.

### 4. Polymorphism:

- **Animal Class:**
  - `makeSound` method is a polymorphic behavior that can be overridden in derived classes.
  
- **Derived Classes (Arthropoda, Fish, Amphibia, Reptiles, AVES, Mammals):**
  - Override the `makeSound` method to provide specific sounds for each type of animal.
  - Demonstrates polymorphism, allowing objects of different classes to be treated as objects of the base class.


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
```
