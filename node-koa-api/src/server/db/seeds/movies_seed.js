
// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };
exports.seed = async (knex, Promise) => {


  await knex.raw('TRUNCATE TABLE "movies" CASCADE')

  await knex('movies').insert([
    {
      name: 'The Land Before Time',
      genre: 'Fantasy',
      rating: 7,
      explicit: false
    },
    {
      name: 'Jurassic Park',
      genre: 'Science Fiction',
      rating: 9,
      explicit: true
    },
    {
      name: 'Ice Age: Dawn of the Dinosaurs',
      genre: 'Action/Romance',
      rating: 5,
      explicit: false
    }
  ])
  // return knex('movies').del()
  // .then(() => {
  //   return knex('movies').insert({
  //     name: 'The Land Before Time',
  //     genre: 'Fantasy',
  //     rating: 7,
  //     explicit: false
  //   });
  // })
  // .then(() => {
  //   return knex('movies').insert({
  //     name: 'Jurassic Park',
  //     genre: 'Science Fiction',
  //     rating: 9,
  //     explicit: true
  //   });
  // })
  // .then(() => {
  //   return knex('movies').insert({
  //     name: 'Ice Age: Dawn of the Dinosaurs',
  //     genre: 'Action/Romance',
  //     rating: 5,
  //     explicit: false
  //   });
  // });
};