// Part 1 for loops - Problem 1 Count to 10
// Write a for loop that counts from 1 to 10 and logs each number to the console.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}  

// Part 1 for loops - Problem 2 Even Numbers
// Write a for loop that counts from 1 to 20 and logs only the even numbers to the console.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Part 1 for loops - Problem 3 Looping through an Array
// Given an array of animals, write a for loop that logs each  to the animal to the console with a message.
const animals = ['dog', 'cat', 'bird', 'fish', 'lizard', 'hamster'];
for (let i = 0; i < animals.length; i++) {
    console.log(`I have a ${animals[i]}`);
}

// Part 1 for loops - Problem 4 Reversing an Array Output using colors
// Given an array of colors, write a for loop that logs the colors in reverse order to the console.
const colors = ['red', 'orange', 'yellow', 'blue', 'green', 'indigo', 'violet'];
for (let i = colors.length - 1; i >= 0; i--) {
    console.log(colors[i]);
}


// Part 2 Objects - Problem 5 Simple Object
// Create an object called person with properties name, age, and favoriteColor. Log the object to the console.
const person = {
    name: 'Travis Fimmel',
    age: 45,
    favoriteColor: 'blue'
};
console.log(person);

// Part 2 Objects - Problem 6 Modifying an Object
// add a new hobby to the person object using dot notation.
// Log the updated object to the console.
person.hobby = 'motorbiking';
console.log(person);


// Part 2 Objects - Problem 7 Array of Objects
// Create an array of objects called books, where each object has properties title, author and pages.
// Log the array to the console.
const books = [
    { title: 'Jane Eyre', author: 'Charlotte Bronte', pages: 536 },
    { title: 'Pillars of the Earth', author: 'Ken Follet', pages: 973 },
    { title: 'The Dark Tower', author: 'Stepen King', pages: 288 }
];  
console.log(books);
// Loop through the array and log each book's title and author to the console.
for (let i = 0; i < books.length; i++) {
    console.log(`Title: ${books[i].title}, Author: ${books[i].author}, Pages: ${books[i].pages}`);
}


// Part 2 Objects - Problem 8 Favorite Book Finder
// Inside your array of books, add a property isFavorite: true to one of the books.
// Write a for loop that finds the favorite book and log only its title to the console.
for (let i = 0; i < books.length; i++) {
    if (books[i].isFavorite) {
        console.log(`My favorite book is: ${books[i].title}`);
    }
    if (books[i].title === 'Pillars of the Earth') {
        books[i].isFavorite = true;
    } else {
        books[i].isFavorite = false;
    }
    
    // Log only the title of the favorite book to the console.
    if (books[i].isFavorite) {
        console.log(`My favorite book is: ${books[i].title}`);
    }
    

    
}



// Bonus Challenge -  Create a function called describePerson that takes an object as a parameter
// logs a description of the person to the console include person, age, and hobby.
// Call the function with the person object as an argument.
// Create a function called describePerson that takes an object as a parameter.
function describePerson(person) {
    console.log(`Name: ${person.name}, Age: ${person.age}, Favorite Color: ${person.favoriteColor}, Hobby: ${person.hobby}`);
}
// Call the function with the person object as an argument.
describePerson(person);
// Call the function with the books array as an argument.
function describeBooks(books) {
    for (let i = 0; i < books.length; i++) {
        console.log(`Title: ${books[i].title}, Author: ${books[i].author}, Pages: ${books[i].pages}`);
    }
}

