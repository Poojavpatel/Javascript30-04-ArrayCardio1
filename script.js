/*jshint esversion: 6 */
// Data to work with
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine','Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Filter
// in filter method you pass a function that loops through each element in the array
// you can pass 50 and get 5 in return
const foo = inventors.filter((inventor) => {
    if (inventor.year >= 1500 && inventor.year < 1600) {
        return true;
    }
});
console.table(foo);

// Map
// map method takes in an array ..does something...and returns a NEW array of SAME LENGTH
const fullname = inventors.map((inventor) => `${inventor.first} ${inventor.last}s` );
console.table(fullname);

// Sort
//In sort we pass in two items..it sorts them by some criteria ..returns 1 or -1
const ordered = inventors.sort((a,b) => (a.year > b.year)? 1: -1);
console.table(ordered);

// Reduce
//Allows you to build something on every single element of array instead of writing a for loop

// var totalyears = 0;
// for (let i = 0; i < inventors.length; i++) {
//     totalyears += inventors[i].year;    
// }
// console.log(totalyears);
// // array.reduce( counter , each object of array)

const totalyears = inventors.reduce( (total ,inventor) => {
    return (total + (inventor.passed - inventor.year));
},0);
console.log(totalyears);


//sort inventors by years lived
const yearslived = inventors.sort( (a,b) => {
    const last = a.passed-a.year;
    const next = b.passed-b.year;
    return last > next ? -1 : 1 ;
});
console.table(yearslived);

// select all bolevards that include de in their name
// from https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// // const alllinks = category.querySelectorAll('a');
// // convert to array
// const alllinks = Array.from(category.querySelectorAll('a'));
// console.log(alllinks);
// const bolevards = alllinks
//                         .map( linkel => linkel.textContent)
//                         .filter( linktext => linktext.includes("de"));
// console.log(bolevards);

//sort people alphabetically by lastname
const sorted = people.sort( (a ,b) => {
    const [afirst ,alast] = a.split(', ');
    const [bfirst ,blast] = b.split(', ');
    return (alast > blast) ? 1 : -1 ;
});
console.table(sorted);

//sum up instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const instance = data.reduce( (counter,dataword) => {
    if (!counter[dataword]) {
        counter[dataword]=0;
    }
    counter[dataword]++;
    // console.log(counter,dataword);
    return counter;
},{});
console.log(instance);
