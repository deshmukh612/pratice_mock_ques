let container = document.querySelector('.container');
let category = document.getElementById('filter');
let sort = document.getElementById('sort');
let page = document.querySelector('.page');
let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page.innerText}&limit=12`;

let pre = document.querySelector('.pre');
let next = document.querySelector('.next');

let wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
console.log(wishlistData);

pre.addEventListener('click', (e) => {
  if (page.innerText > 1) {
    page.innerText = +page.innerText - 1;
  }
  fetchData({
    url: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page.innerText}&limit=12`,
  });
});

next.addEventListener('click', (e) => {
  if (page.innerText < 4) {
    page.innerText = +page.innerText + 1;
  }
  fetchData({
    url: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page.innerText}&limit=12`,
  });
});

sort.addEventListener('change', (e) => {
  console.log(category.value);
  if (category.value) {
    fetchData({
      url: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page.innerText}&limit=12&orderBy=${e.target.value}`,
      category: category.value,
    });
  } else {
    fetchData({
      url: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page.innerText}&limit=12&orderBy=${e.target.value}`,
    });
  }
});

category.addEventListener('change', (e) => {
  if (sort.value) {
    fetchData({
      url: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page.innerText}&limit=100&orderBy=${sort.value}`,
      category: e.target.value,
    });
  }
  fetchData({
    url: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page.innerText}&limit=100`,
    category: e.target.value,
  });
});

const fetchData = async (props) => {
  // console.log(props.category);
  let data = await fetch(props.url)
    .then((res) => res.json())
    .then((res) => res.data);
    // console.log(data)
  if (props.category) {
    data = data.filter((e) => e.category === props.category);
  }
  console.log(data);
  showData(data);
};

fetchData({ url });

const showData = (data) => {
  container.innerHTML = '';
  data.map((e) => {
    let cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'cardDiv');

    let image = document.createElement('img');
    image.setAttribute('src', e.image);

    let titleDiv = document.createElement('div');
    titleDiv.setAttribute('class', 'titleDiv');
    let title = document.createElement('h3');
    title.innerText = e.title;
    
    let wishlist = document.createElement('button');
    wishlist.setAttribute('id', 'wishlist');
    wishlist.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    wishlist.addEventListener('click', (event) => {
      event.preventDefault();
      let flag = true;
      for (let i = 0; i < wishlistData.length; i++) {
        if (e.id == wishlistData[i].id) {
          flag = false;
          break;
        } 
      }
      {
        flag
          ? localStorage.setItem(
              'wishlist',
              JSON.stringify([...wishlistData, e])
            )
          : (flag = true);
      }
    });
    titleDiv.append(title, wishlist);

    let price = document.createElement('h3');
    price.innerText = 'Price ' + e.price;

    let bottomDiv = document.createElement('div');
    bottomDiv.setAttribute('class', 'bottomDiv');
    let brand = document.createElement('span');
    brand.innerText = e.brand;
    let category = document.createElement('span');
    category.innerText = e.category;
    bottomDiv.append(brand, category);

    cardDiv.append(image, titleDiv, price, bottomDiv);
    container.append(cardDiv);
  });
};
