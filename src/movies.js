const movies = require('./data.js')

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let allDirectors = []
  movies.forEach(movie => {
    allDirectors.push(movie.director)
  });

  let unique = allDirectors.filter((item, pos, ary) => {
    return !pos || item != ary[pos -1]
  })
  console.log(unique)
  return unique
}
getAllDirectors(movies)


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let steven = movies.filter((movie) => {
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  })
  return steven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let total = movies.reduce((currentTotal, movie) => {
    return movie.score + currentTotal
  }, 0)
  let totalDecimal = parseFloat((total / movies.length).toFixed(2))

  if (movies.length === 0) {
    return 0
  }

  return totalDecimal
} 
scoresAverage(movies)


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter((movie) => {
    return movie.genre.includes("Drama")
  })
  let avgScoreDrama = dramaMovies.reduce((currentTotal, movie) => {
    return movie.score + currentTotal
  }, 0)

  if (dramaMovies.length === 0) {
    return 0
  }

  totalAvgDrama = parseFloat((avgScoreDrama/dramaMovies.length).toFixed(2))

  return totalAvgDrama
}
dramaMoviesScore(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  
  let newArr = [...movies].sort((a, b) => {
    if (a.year > b.year) {
      return 1 ; 
    } else {
      return -1
    }
  }) 
  return newArr
}
orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let newArr = [...movies].sort((a, b) => {
    if (a.title > b.title) {
      return 1
    } else {
      return -1
    }
  })
  
  let newArr2 = []
  newArr.forEach((filme) => {
    newArr2.push(filme.title) 
  })

  return newArr2.slice(0,20)
}
console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {




}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
