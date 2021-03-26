// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const directors = ["Steven Spielberg", "Cristopher Nolan", "Steven Spielberg"];

function getAllDirectors(moviesArr) {
  return moviesArr
    .map(function (movie) {
      return movie.director;
    })
    .filter(function (director, index, sourceArray) {
      return sourceArray.indexOf(director) === index;
    });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArr) {
  // return moviesArr
  //   .filter(function (movie) {
  //     return movie.director === "Steven Spielberg";
  //   })
  //   .filter(function (movie) {
  //     return movie.genre.includes("Drama");
  //   }).length;

  return moviesArr.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  }).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArr) {
  const avg = moviesArr.reduce(function (acc, movie, index, sourceArray) {
    if (!movie.rate) {
      movie.rate = 0;
    }

    // Condição pra verificar se o reduce está passando pelo último elemento da array
    if (index === sourceArray.length - 1) {
      acc += movie.rate;

      return acc / sourceArray.length;
    }

    return acc + movie.rate;
  }, 0);

  return parseFloat(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArr) {
  const dramaMovies = moviesArr.filter(function (movie) {
    return movie.genre.includes("Drama");
  });

  return ratesAverage(dramaMovies);

  // const avg = dramaMovies.reduce(function (acc, movie, index, sourceArray) {
  //   if (!movie.rate) {
  //     movie.rate = 0;
  //   }

  //   // Condição pra verificar se o reduce está passando pelo último elemento da array
  //   if (index === sourceArray.length - 1) {
  //     acc += movie.rate;

  //     return acc / sourceArray.length;
  //   }

  //   return acc + movie.rate;
  // }, 0);

  // return parseFloat(avg.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArr) {
  return moviesArr
    .map(function (movie) {
      return movie;
    })
    .sort(function (a, b) {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }

      return a.year - b.year;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArr) {
  const onlyTitles = moviesArr.map(function (movie) {
    return movie.title;
  });

  onlyTitles.sort(function (a, b) {
    return a.localeCompare(b);
  });

  const top20 = onlyTitles.splice(0, 20);

  return top20;

  // return moviesArr
  //   .map(function (movie) {
  //     return movie.title;
  //   })
  //   .sort(function (a, b) {
  //     return a.localeCompare(b);
  //   })
  //   .splice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArr) {
  return moviesArr
    .map(function (movie) {
      return movie;
    })
    .map(function (movie) {
      const durationArr = movie.duration.split(" ");

      let hours = 0;
      let minutes = 0;

      if (durationArr.length === 2) {
        hours = durationArr[0] || "0";
        minutes = durationArr[1];

        hours.replace(/[a-z]/g, "");
        minutes.replace(/[a-z]/g, "");
      } else {
        minutes = durationArr[0];
        minutes.replace(/[a-z]/g, "");
      }

      movie.duration = parseInt(hours) * 60 + parseInt(minutes);

      return movie;
    });
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
