// This Page is Displayed All Product.
import React, { useContext, useState } from "react";
import "./AllProductsDisplay.css";
import AllHeader from "../../Shared/Header/AllHeader";
import AllFooter from "../../Shared/Footer/AllFooter";
import { ProductProvider } from "../../AllContextApi/ProductsContext";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [
    products,
    setProducts,
    selectedChildCategoriesData,
    setSelectedChildCategoriesData,
  ] = useContext(ProductProvider);

  // sending the specific product child Categories for color varient to the single product page by context api
  const handleSecectedProductCode = (productChildCategories) => {
    setSelectedChildCategoriesData(productChildCategories);
  };

  //only getting the appreal product
  const apparelProduct = products.filter(
    (data) => data?.categories === "APPAREL"
  );

  //setting the apparel product in a state
  const [newProductData, setNewProductData] = useState([]);

  const filterResult = (catItem) => {
    const result = apparelProduct.filter((currentData) => {
      return (
        currentData?.childCategories === catItem ||
        currentData?.subChildCategories === catItem
      );
    });
    setNewProductData(result);
  };
  return (
    <>
      <AllHeader />
      {/* Apparel Category Button Section */}
      <section className="categoryPageBody">
        <div className="row">
          <div className="col-12 categoryProductDisplaySidebar">
            <div className="p-2 border-bottom">
              <label htmlFor="priceInput">Price</label>
              <div className="form-group priceFilter">
                <input
                  type="number"
                  className="form-control"
                  id="priceInput"
                  placeholder="Min"
                />
                <i className="bi bi-dash"></i>
                <input
                  type="number"
                  className="form-control"
                  id="priceInput"
                  placeholder="Max"
                  size="10"
                />
                <button className="btn go">Go</button>
              </div>
            </div>
            <div className="flex-shrink-0 py-4 categorySidebar">
              <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
                <a
                  href="/category/apparel"
                  className="fs-5 fw-semibold m-auto text-decoration-none link-dark"
                >
                  Apparel
                </a>
              </div>
              <ul className="list-unstyled ps-0" id="subCategoryCollapse">
                <li className="mb-1">
                  <button
                    className="btn btn-toggle align-items-center rounded collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#Men"
                    aria-expanded="true"
                    aria-controls="Men"
                  >
                    Men’s Clothing
                  </button>
                  <div
                    className="collapse show"
                    id="Men"
                    data-bs-parent="#subCategoryCollapse"
                  >
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Shirts")}
                        >
                          Shirts
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("T-Shirts")}
                        >
                          T-Shirts
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Polo Shirts")}
                        >
                          Polo Shirts
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Coats AND Jackets")}
                        >
                          Coats AND Jackets
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Hoodies AND Sweaters")}
                        >
                          Hoodies AND Sweaters
                        </Link>
                      </li>
                      <li>
                        <button
                          className="btn-toggle align-items-center rounded collapsed subChildCategoryBtn"
                          data-bs-toggle="collapse"
                          data-bs-target="#PANT"
                        >
                          PANT
                        </button>
                        <div className="collapse mx-2" id="PANT">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                              <Link
                                to=""
                                className="link-dark rounded"
                                onClick={() => filterResult("Jeans")}
                              >
                                Jeans
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="link-dark rounded"
                                onClick={() => filterResult("Gabardine")}
                              >
                                Gabardine
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="link-dark rounded"
                                onClick={() => filterResult("Trousers")}
                              >
                                Trousers
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="link-dark rounded"
                                onClick={() => filterResult("Joggers & Sweats")}
                              >
                                Joggers & Sweats
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="link-dark rounded"
                                onClick={() => filterResult("Shorts")}
                              >
                                Shorts
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="link-dark rounded"
                                onClick={() => filterResult("Pajama")}
                              >
                                Pajama
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Panjabi")}
                        >
                          Panjabi
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Koti")}
                        >
                          Koti
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Shawls")}
                        >
                          Shawls
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Men’s lingerie")}
                        >
                          Men’s lingerie
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Fabrics Collection")}
                        >
                          Fabrics Collection
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mb-1">
                  <button
                    className="btn btn-toggle align-items-center rounded collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#Women"
                    aria-expanded="false"
                    aria-controls="Women"
                  >
                    Women’s Clothing
                  </button>
                  <div
                    className="collapse"
                    id="Women"
                    data-bs-parent="#subCategoryCollapse"
                  >
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Kurtis")}
                        >
                          Kurtis
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Tunic Fusion")}
                        >
                          Tunic Fusion
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Tops")}
                        >
                          Tops
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Western Attire")}
                        >
                          Western Attire
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Shirts")}
                        >
                          Shirts
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("T-Shirts")}
                        >
                          T-Shirts
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Gown")}
                        >
                          Gown
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Lehenga")}
                        >
                          Lehenga
                        </Link>
                      </li>
                      <li>
                        <button
                          className="btn-toggle align-items-center rounded collapsed subChildCategoryBtn"
                          data-bs-toggle="collapse"
                          data-bs-target="#Salwar-kameez"
                        >
                          Salwar-kameez
                        </button>
                        <div className="collapse mx-2" id="Salwar-kameez">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                              <Link
                                to=""
                                className="link-dark rounded"
                                onClick={() => filterResult("1piece")}
                              >
                                1piece
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="link-dark rounded"
                                onClick={() => filterResult("2piece")}
                              >
                                2piece
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="link-dark rounded"
                                onClick={() => filterResult("3piece")}
                              >
                                3piece
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <button
                          className="btn-toggle align-items-center rounded collapsed subChildCategoryBtn"
                          data-bs-toggle="collapse"
                          data-bs-target="#Unstitched-dress"
                        >
                          Unstitched dress
                        </button>
                        <div className="collapse mx-2" id="Unstitched-dress">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                              <Link
                                to=""
                                className="link-dark rounded"
                                onClick={() => filterResult("1piece")}
                              >
                                1piece
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="link-dark rounded"
                                onClick={() => filterResult("2piece")}
                              >
                                2piece
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="link-dark rounded"
                                onClick={() => filterResult("3piece")}
                              >
                                3piece
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="link-dark rounded"
                                onClick={() => filterResult("4piece")}
                              >
                                4piece
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <button
                          className="btn-toggle align-items-center rounded collapsed subChildCategoryBtn"
                          data-bs-toggle="collapse"
                          data-bs-target="#shari"
                        >
                          Shari
                        </button>
                        <div className="collapse mx-2" id="shari">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                              <Link
                                to=""
                                className="link-dark rounded"
                                onClick={() => filterResult("Tant")}
                              >
                                Tant
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="link-dark rounded"
                                onClick={() => filterResult("Tangails")}
                              >
                                Tangails
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Koti")}
                        >
                          Koti
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Shawls")}
                        >
                          Shawls
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mb-1">
                  <button
                    className="btn btn-toggle align-items-center rounded collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#Fabrics"
                    aria-expanded="false"
                  >
                    Fabrics
                  </button>
                  <div
                    className="collapse"
                    id="Fabrics"
                    data-bs-parent="#subCategoryCollapse"
                  >
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Shirt")}
                        >
                          Shirt
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Pant")}
                        >
                          Pant
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Coat")}
                        >
                          Coat
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-dark rounded"
                          onClick={() => filterResult("Than Kapor")}
                        >
                          Than Kapor
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12  categoryProductDisplay">
            {/* displaying product */}
            <section>
              {apparelProduct.length === 0 ? (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <aside className="row categoryProductDisplayBody">
                  {newProductData.length == ""
                    ? apparelProduct?.map((value) => (
                        <div
                          className="col-6 col-md-2 productDisplayCard"
                          key={value?._id}
                        >
                          <div className="productDisplayCardMain">
                            <Link
                              to={"/singleProduct/" + value?._id}
                              className="decorationLink"
                              onClick={() =>
                                handleSecectedProductCode(
                                  value?.childCategories
                                )
                              }
                            >
                              <img
                                src={value?.img1}
                                className="card-img-top img-fluid productPageImg"
                                alt="ProductImage"
                              />
                            </Link>
                            <div className="card-body productDisplayCardBody">
                              <p className="ProductName">{value?.name}</p>
                              <p className="ProductPrice">
                                Tk. {value?.currentPrice}
                              </p>
                              <span className="ProductOldPrice">
                                Tk. {value?.oldPrice}
                              </span>
                              <span className="discountRate">
                                {(
                                  100 -
                                  (value?.currentPrice / value?.oldPrice) * 100
                                ).toFixed(1)}
                                %
                              </span>
                              <p className="wishlist mt-2">
                                <span className="wishlistLink">
                                  <i className="bi bi-heart"></i> Wishlist
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    : newProductData?.map((value) => (
                        <div className="col-6 col-md-2" key={value?._id}>
                          <div className="card productDisplayCard mt-3">
                            <Link
                              to={"/singleProduct/" + value?._id}
                              className="decorationLink"
                              onClick={() =>
                                handleSecectedProductCode(
                                  value?.childCategories
                                )
                              }
                            >
                              <img
                                src={value?.img1}
                                className="card-img-top img-fluid productPageImg"
                                alt="ProductImage"
                              />
                            </Link>
                            <div className="card-body productDisplayCardBody">
                              <p className="ProductName">{value?.name}</p>
                              <p className="ProductPrice">
                                Tk. {value?.currentPrice}
                              </p>
                              <span className="ProductOldPrice">
                                Tk. {value?.oldPrice}
                              </span>
                              <span className="discountRate">
                                {(
                                  100 -
                                  (value?.currentPrice / value?.oldPrice) * 100
                                ).toFixed(1)}
                                %
                              </span>
                              <p className="wishlist mt-2">
                                <span className="wishlistLink">
                                  <i className="bi bi-heart"></i> Wishlist
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                </aside>
              )}
            </section>
          </div>
        </div>
      </section>
      <AllFooter />
    </>
  );
};

export default AllProducts;
