const parse = document => {
  const bookElements = [...document.querySelectorAll('.product_pod')];
  
  return bookElements.map(book => {
    const image = book.querySelector('.image_container img').getAttribute('src');

    const rating = book.querySelector('.product_pod p').getAttribute('class');

    const price = book.querySelector('.product_pod div > p').textContent;

    const supply = book.querySelector('.availability').textContent ? true : false;
    

    const title = book.querySelector('.product_pod h3 > a').textContent;
    return{
      image, rating, price,supply, title
    }

  })
};

module.exports = parse;
