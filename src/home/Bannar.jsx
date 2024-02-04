import React, {useState} from "react";
import productData from "../products.json";
import {Link} from "react-router-dom";
import SelectedCategory from "../components/SelectedCategory";

const title = (
  <h2>
    Search Your One From <span>Thousand</span> Of Products
  </h2>
);
const desc = "We have the largest collection of products";

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];
const Bannar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterProduct, setFilterProduct] = useState("");
  //console.log(productData)
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    const filteredProducts = productData.filter((element, i) =>
      element.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilterProduct(filteredProducts);
  };

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCategory select={'all'} />
            <input
              value={searchInput}
              onChange={handleSearch}
              type="text"
              name="search"
              id="search"
              placeholder="Search your product"
            />
            <button type="submit">
                <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filterProduct.map((product, index) => {
                return (
                  <li key={index}>
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
