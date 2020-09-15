const request = require('./scraper/request');
const parse = require('./scraper/parser');
const store = require('./scraper/store');

module.exports = job => {
  console.log(`I'm going to scrape page ${job.data.page}`);
  return request(job.data.page)
    .then(parse)
    .then(store); 
};


