import songs from "./songs.js";

/*
Exercises

Tips: 
1) To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2) Make some research about the usage of reduce, some and many.
3) Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)

1. Import songs array using modules.
*/
console.log("Ex 1:", songs);
console.log("////////////////////////////////////////////////////");
/*
2. Use the map function to create a new array with the title of each song in uppercase letters.
*/
const eachSong = songs.map(function (obj) {
  let songsName = [];
  songsName.push(obj.title.toUpperCase());
  return songsName;
});

console.log("Ex 2:", eachSong);
console.log("////////////////////////////////////////////////////");
/*
3. Use the filter function to create a new array with all the songs released before 1975.
*/

const olderSongs = songs.filter((song) => song.year < 1975);

console.log("Ex 3:", olderSongs);
console.log("////////////////////////////////////////////////////");
/*
4. Use destructuring to create a variable that stores the title of the first song in the array.
*/
const { title: titleOfFirstSong } = songs[0];
console.log("Ex 4:", titleOfFirstSong);
console.log("////////////////////////////////////////////////////");
/*
5. Use the find function to get the object representing the song "Hotel California".
*/
const findSong = songs.find((song) => song.title == "Hotel California");
const findIndexOfSong = songs.findIndex(
  (song) => song.title == "Hotel California"
);
console.log(
  "Ex 5: es el elemento numero ",
  findIndexOfSong,
  " del array. Datos del objeto: ",
  findSong
);
console.log("////////////////////////////////////////////////////");
/*6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce) 
-- NO TIENE RELACIÓN CON EL RESTO DE LOS PUNTOS
 */

const sum = (...nums) =>
  nums.reduce(
    (acc, curr) => acc + curr,
    0
  ); /* siempre usa los parametros acc (numero de suma final) y curr (current: el elemento que se suma). El 0 es el numero desde el que se empieza a sumar */
console.log("Ex 6: ", sum(1, 2, 3, 10, 20));
console.log("////////////////////////////////////////////////////");
/*
7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.
*/

const songsIntoString = songs.map(
  ({ title, artist, year }) => `${title} - ${artist} (${year})`
);

console.log("Ex 7: ", songsIntoString);
console.log("////////////////////////////////////////////////////");
/*
8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.

*/
const beatlesSongs = songs
  .filter(({ artist }) => artist === "The Beatles")
  .map(({ title }) => title);
console.log("Ex 8: ", beatlesSongs);
console.log("////////////////////////////////////////////////////");
/*
9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)
*/
const totalYears = songs.reduce((acc, curr) => acc + curr.year, 0);
console.log("Ex 9: sumatoria de años ", totalYears);
console.log("////////////////////////////////////////////////////");
/*
10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)
*/

import averageYears from "./utils.js";

console.log("Ex 10: promedio " + averageYears);
console.log("////////////////////////////////////////////////////");
/*
11. Use the find function to get the object representing the song with the longest title.
*/
const longTitle = songs.find(
  (song) =>
    song.title.length === Math.max(...songs.map(({ title }) => title.length))
);
console.log("Ex 11.", longTitle);
console.log("////////////////////////////////////////////////////");
/*
12. Use destructuring and template literals to log the title, artist and year of the first element of the array.
*/
const { title, artist, year } = songs[0];
console.log("Ex 12:", title, artist, year);
console.log("////////////////////////////////////////////////////");
/*
13. Use the rest operator to create a new array without the first element.

14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

16. Use the some() method to check if there are any songs from the 80s.

17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."

18. Use the map() method to create a new array with just the artist names.

19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.

20. Write your own function using at least 3 concepts.

*/
