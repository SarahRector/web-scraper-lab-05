const request = require('./request');
const parse = require('./parser');

describe('parser function', () => {
  it('returns an array of all book objects, containing title, cover image, rating, price, and in stock or not', async() => {
    const document = await request();

    const books = parse(document);

    expect(books).toEqual(expect.arrayContaining([
      { image: 'media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg', rating: 'star-rating Three', title: 'A Light in the ...', price: '£51.77', supply: true },

      { image: 'media/cache/10/48/1048f63d3b5061cd2f424d20b3f9b666.jpg', rating: 'star-rating Four', title: 'Shakespeare\'s Sonnets', price: '£20.66', supply: true }
    ]));
  });
});

