const knex = require('../connection');
const Movie = require('../models/movies')

async function getAllMovies() {
  let data = await Movie.query()
  console.log('RETREIVE')
  return data
}
async function getSingleMovie(id) {
  return await Movie.query().findById(id)
}

async function addMovie(movie) {
  return await Movie.query().insert(movie)
}

async function updateMovie(id, movie) {
  return await Movie.query()
  .findById(id)
  .patch(movie)
}

async function deleteMovie(id) {
  return await Movie.query()
  .deleteById(id);
}

// async function getSingleMovie(id) {
//   return await knex('movies')
//     .select('*')
//     .where({ id: parseInt(id) });
// }

// function addMovie(movie) {
//   return knex('movies')
//   .insert(movie)
//   .returning('*');
// }

// function updateMovie(id, movie) {
//   return knex('movies')
//   .update(movie)
//   .where({ id: parseInt(id) })
//   .returning('*');
// }

// function deleteMovie(id) {
//   return knex('movies')
//   .del()
//   .where({ id: parseInt(id) })
//   .returning('*');
// }


module.exports = {
  getAllMovies,
  getSingleMovie,
  addMovie,
  updateMovie,
  deleteMovie
};