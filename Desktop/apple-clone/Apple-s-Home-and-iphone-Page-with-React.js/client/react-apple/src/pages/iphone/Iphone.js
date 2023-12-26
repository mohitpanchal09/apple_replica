import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productsData from '../../data.json';
function Iphone() {
  const [products, setProducts] = useState(productsData);
  // if i had mock api i would fetch data like this
  // useEffect(() => {
  //   fetch("http://localhost:8080/iphones")
  //     .then((res) => res.json())
  //     .then((products) => {
  //       setProducts(() => products);
  //     })
  //     .catch(() => console.log("unable to fetch!!"));
  // }, []);
//   console.log(products);

  let order = 1;
// console.log(productsData)
  return (
    <section className="internal-page-wrapper ">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 mt-5 pt-5">
            <div className="title-wraper bold">
              <h1>Iphones</h1>
            </div>
            <div className="brief-description mb-5">
              The best for the brightest.
            </div>
          </div>
        </div>
        {products.products.map((product) => {
          let id = product.product_url;
          let title = product.product_name;
          let img = product.product_img;
          let Brief = product.product_brief_description;
          let StartPrice = product.starting_price;
          let PriceRange = product.price_range;
          let productPage = "/iphone/" + id;

          let order1 = 1;
          let order2 = 2;
          if (order !== 1) {
            order1 = 2;
            order2 = 1;
            order--;
          } else {
            order++;
          }

          let productDiv = (
            <div
              key={id}
              className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
            >
              <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                <div className="product-title">{title}</div>
                <div className="product-brief">{Brief}</div>
                <div className="starting-price">
                  {`Starting at ${StartPrice}`}
                </div>
                <div className="monthly-price">{PriceRange}</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to={productPage}>Learn more</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`col-sm-12 col-md-6 order-${order2}`}>
                <div className="product-image">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          );
          return productDiv;
        })}
      </div>
    </section>
  );
}

export default Iphone;
