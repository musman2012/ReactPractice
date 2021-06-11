import animals, { useAnimals } from "./data";

// Destructuring Arrays
console.log(animals);
const [cat, dog] = animals;
// console.log(cat);

const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

//Destructuring Objects
const { name, sound} = cat;
const { name: catName, sound: catSound } = cat;
const { name = "Fluffy", sound = "Purr" } = cat; // this is if we have two attributes, this also handles missing values with a default value
//const {feedingRequirements: {food, water} } = cat;
const { name = "Fluffy", sound = "Purr", feedingRequirements: {food, water} } = cat; // this is if we have three attributes

// only a particular field can also be fetched
const {feedingRequirements: {food, water} } = cat;

console.log(food);
