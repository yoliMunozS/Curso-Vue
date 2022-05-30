// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  
  const result = array.map((item) => item.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  
  const result = array.filter((item) => item.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  
  const buscarDirector = array.filter((item) => item.director === director);
  const buscarScore= buscarDirector.map((item) => item.score);
  const result = buscarScore.reduce((acumulador, valorActual) => acumulador + valorActual);
  const resultFinal = (result / buscarScore.length);
  console.log("EXERCICE 3 ->", resultFinal);
  return resultFinal;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
  const buscarTitle = array.map((item) => item.title);
  const tituloOrdenado = buscarTitle.sort();
  const result = tituloOrdenado.slice(0,20);
  console.log("EXERCICE -> 4", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear() {
  
  const movies = [];
  const arrayMovies = movies.map(({title, year}) => ({title, year}));
 
  const ordenarYear = arrayMovies.sort((a, b) => {
      if (a.year > b.year) {
        return -1;
      }
      if (a.year < b.year) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
        }
    return 0;
  });
  console.log("EXERCICE -> 5", ordenarYear);
  return ordenarYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {
  
  const movies = [];
  const generoMovies = movies.map(() => {});
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
