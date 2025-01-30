exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {name: 'mobile 1', description: 'Description 1', price: 99.99, stock: 100},
        {name: 'mouse 2', description: 'Description 2', price: 799.99, stock: 200},
        {name: 'bottle 3', description: 'Description 3', price: 899.99, stock: 300}
      ]);
    });
};
