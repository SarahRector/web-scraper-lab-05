const fs = require('fs');
const pool = require('../../utils/pool');
const store = require('./store');

describe('store function', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('takes an array of books and saves them to the db', async() => {
    const books = [
      { image: 'media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg', rating: 'star-rating Three', title: 'A Light in the ...', price: '£51.77', supply: true },

      { image: 'media/cache/10/48/1048f63d3b5061cd2f424d20b3f9b666.jpg', rating: 'star-rating Four', title: 'Shakespeare\'s Sonnets', price: '£20.66', supply: true }
    ];

    await store(books);

    const { rows } = await pool.query('SELECT * FROM books');

    expect(rows).toHaveLength(2);
  });
});
