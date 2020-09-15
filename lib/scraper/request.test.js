const request = require('./request');

describe('request function', () => {
  it('makes a request to the Books to Scrape page and returns an HTML document', async() => {
    const document = await request();
    expect(document).not.toBeUndefined();
    expect(document).not.toBeNull();
  });
});

