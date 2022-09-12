const navbar = () => {
  return `<div id="navbar">
  <h3><a href="/">Home</a></h3>
  <div id="searchNavbar">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            <input type="text" id="InputNavbar" placeholder="Try Tshirt ,Kurta, shoes , Saree or By Product Code"></div>
  </div>
  <div>
  <select  id="filter"> 
        <option value="">None</option>
        <option value="FullStack">FullStack</option>
        <option value="Frontend">Frontend</option>
  </select>
  </div>


  <div id="options">
    <h3><a href="jewellery.html">Jewellery</a></h3>
    <h3><a href="electronics.html">Electronics</a></h3>
    <h3><a href="filter.html">Filter</a></h3>
    <h3><a href="#">Login</a></h3>      
  </div>

</div>`

}

export default navbar;















// const navbar = () => {

//     return `<div id="navbar">
//     <h3><a href="/">Home</a></h3>

//     <div id="options">
//       <h3><a href="jewellery.html">Jewellery</a></h3>
//       <h3><a href="electronics.html">Electronics</a></h3>
//       <h3><a href="#">Register</a></h3>

//       <h3><a href="#">Login</a></h3>
//     </div>
//   </div>`

// };


// // default use when only one function is there in component
// export default navbar