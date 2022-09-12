const getData = async (url) => {
  console.log(url);

  try {
    let res = await fetch(url);
    console.log(res);
    let data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log("error:", error);
  }
};

const append = (data, parent) => {
  parent.innerHTML = null;

  data.forEach(({ title, image, price }) => {
    let div = document.createElement("div");

    let t = document.createElement("p");
    t.innerText = title;

    let img = document.createElement("img");
    img.src = image;

    let p = document.createElement("p");
    p.innerText = price;

    let btn = document.createElement("button");
    btn.innerText = "Add to cart";
    btn.addEventListener("click", () => {
      addtocart(title, image);
    });

    div.append(img, t, p, btn);
    parent.append(div);
  });
};

const appendList = (data, parent) => {
  parent.innerHTML = null;

  data.forEach(
    ({
      company,
      postedAt,
      city,
      location,
      countryCode,
      role,
      level,
      contract,
      position,
      language,
    }) => {
      let div = document.createElement("div");
      
      let s1div = document.createElement("div");
      let s2div = document.createElement("div");
     

      let im = document.createElement("img");
      im.src = 'https://2ballz.in/assets/images/meesho.png';

      let com = document.createElement("h4");
      com.innerText = company;

      
      let post = document.createElement("h6");
      post.innerText = position;

      let date = document.createElement("p");
      date.innerText = postedAt;

      let con = document.createElement("p");
      con.innerText = contract;

      s1div.append()

      let loc = document.createElement("p");
      loc.innerText = location;


      let rol = document.createElement("p");
      rol.innerText = role;

      let le = document.createElement("p");
      le.innerText = level;

      let lang = document.createElement("p");
      lang.innerText = language;

      

    //   let btn = document.createElement("button");
    //   btn.innerText = "Add to cart";
    //   btn.addEventListener("click", () => {
    //     addtocart(title, image);
    //   });

      div.append(com,post,date,con,loc,rol,le,lang);
      parent.append(div);
    }
  );
};

const addtocart = (title, image) => {
  console.log(title, image);
};

export { getData, append, appendList };
