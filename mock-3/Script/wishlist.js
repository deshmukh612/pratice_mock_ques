let container = document.querySelector('.container');

let wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
console.log(wishlistData);

const showData = (data) => {
  container.innerHTML = '';
  data.map((e,index) => {
    let cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'cardDiv');

    let image = document.createElement('img');
    image.setAttribute('src', e.image);

    let titleDiv = document.createElement('div');
    titleDiv.setAttribute('class', 'titleDiv');
    let title = document.createElement('h3');
    title.innerText = e.title;
    titleDiv.append(title);

    let price = document.createElement('h3');
    price.innerText = e.price;

    let bottomDiv = document.createElement('div');
    bottomDiv.setAttribute('class', 'bottomDiv');
    let brand = document.createElement('span');
    brand.innerText = e.brand;
    let category = document.createElement('span');
    category.innerText = e.category;
    bottomDiv.append(brand, category);

    let btn = document.createElement('button');
    btn.setAttribute('id', 'remove');
    btn.innerHTML ="Remove"

    btn.addEventListener('click' , () => {
      // console.log(index, wishlistData)
      wishlistData.splice(index, 1)      
      localStorage.setItem('wishlist',JSON.stringify(wishlistData))
      showData(wishlistData)
    })

    cardDiv.append(image, titleDiv, price, bottomDiv, btn);
    container.append(cardDiv);
  });
};
showData(wishlistData);
