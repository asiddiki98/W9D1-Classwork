// Function.prototype.inherits = function(superClass){
//     function Surrogate(){};
//     Surrogate.prototype = superClass.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;
// }

Function.prototype.inherits = function(superClass){
    this.prototype = Object.create(superClass.prototype)
}

function Animal (name) {
  this.name = name;
};

Animal.prototype.eat = function () {
  console.log(this.name + ' is eating.');
};

function Cat(name) {
  // this.name = name;
  Animal.call(this, name); // ES5 equivalent of "super" in Ruby
}

Cat.inherits(Animal)

Cat.prototype.meow = function () {
  console.log('Meow!');
};

const garfield = new Cat('Garfield');
garfield.eat();
console.log(garfield);
garfield.meow();
const noCat = new Animal('noCat');
noCat.meow();