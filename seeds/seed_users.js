exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Admin', email: 'admin@example.com', password: 'admin123'},
        {name: 'User1', email: 'user1@example.com', password: 'user123'},
        {name: 'User2', email: 'user2@example.com', password: 'user123'}
      ]);
    });
};
