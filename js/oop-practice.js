// STEP 1
// class Cat{
//     constructor(){
// }
// }

// const Dog = class {
//     constructor(){
// }
// }
// STEP 2
// const cat1 = new Cat()
// const dog1 = new Dog()
// STEP 3
// class Animal {
//     constructor(){

//     }
//     display(){
//         console.log("The Animal has been created")
//     }
// }
// const newAnimal = new Animal()
// newAnimal.display()
// STEP 4
// class Animal{
//     constructor(message){
//         this._message = message
//     }
//     display(){
//         console.log(this._message)
//     }
// }
// const newAnimal = new Animal("The Animal has been created")
// newAnimal.display()
// STEP 5
// class Animal{
//     constructor(type, breed, color, height, length){
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }
// } 
// const newAnimal = new Animal("Dog", "Pug", "Black", "2 feet", "2 feet")
// STEP 6
// class Animal{
//     constructor(type, breed, color, height, length){
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }
// } 
// const newAnimal = new Animal("Dog", "Pug", "Black", "2 feet", "2 Feet")
// for(const property in newAnimal){
//     console.log(`${property}: ${newAnimal[property]}`)
// }
// STEP 7
// class Animal{
//     constructor(type, breed, color, height, length){
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }
//     speak(){
//         if(this.type === "Dog"){
//         console.log(`The ${this.color} dog is barking!`)
//     }else{
//         (this.type === "Cat")
//         console.log(`The ${this.color} cat is meowing!`)
//     }
// } 
// }
// const dog = new Animal("Dog", "Pug", "Black", "2 feet", "2 Feet")
// const cat = new Animal("Cat", "persian", "white", "2 feet", "3 Feet")
// dog.speak()
// cat.speak()
// STEP 8
class Animal{
    #type
    #breed
    #color
    #height
    #length
    constructor(type, breed, color, height, length){
        this.#type = type
        this.#breed = breed
        this.#color = color
        this.#height = height
        this.#length = length
    }
    #checkType(){
        if(this.#type === "Dog"){
            return "Dog"
        // console.log(`The ${this.color} dog is barking!`)
    }else if (this.#type === "Cat"){
        return "cat"
        // console.log(`The ${this.color} cat is meowing!`)
    }
}
    speak() {
        console.log(`The ${this.#checkType()} has made a noise!`)
    
} 
}

const dog = new Animal("Dog", "Pug", "Black", "2 feet", "2 Feet")
const cat = new Animal("Cat", "persian", "white", "2 feet", "3 Feet")
dog.speak()
cat.speak()
// STEP 9
String.prototype.findWords = function(words, word){
}