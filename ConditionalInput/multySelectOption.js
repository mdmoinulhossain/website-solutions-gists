import React, { useState } from "react";
import DashboardHeader from "./../../../Dashboard/DashboardShared/DashboardHeader";

const AddProductPage = () => {
  const [showInput, setShowInput] = useState("");

  const handleCategoriesInput = (e) => {
    setShowInput(e.target.value);
  };

  return (
    <>
      <DashboardHeader />
      <form className="container-fluid mt-3">
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="inputProductName" className="mt-2 mb-2">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputProductName"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputProductCode" className="mt-2 mb-2">
              Product code
            </label>
            <input
              type="text"
              className="form-control"
              id="inputProductCode"
              required
            />
          </div>
        </div>

        <div className="row mt-2">
          <div className="form-group">
            <label htmlFor="inputProductDescription" className="mt-2 mb-2">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="inputProductDescription"
              placeholder="Description of product"
              required
            />
          </div>
        </div>

        <div className="row mt-2">
          <div className="form-group col-md-4">
            <label htmlFor="inputProductCategories" className="mt-2 mb-2">
              Categories
            </label>
            <select
              onClick={handleCategoriesInput}
              id="inputProductCategories"
              className="form-control"
              defaultValue={"DEFAULT"}
              name="categories"
              required
            >
              <option value="DEFAULT" disabled>
                Choose a Categories
              </option>
              <option value="None">None</option>
              <option value="Fiesta">Fiesta</option>
              <option value="Dress">Dress</option>
              <option value="Cosmetics">Cosmetics</option>
              <option value="HomeDecor">Home Decor</option>
              <option value="Mat">Mat</option>
              <option vaule="Accessories">Accessories</option>
            </select>
          </div>

          {/* start of fiesta cetegories child input*/}
          {showInput === "Fiesta" && (
            <>
              {" "}
              <div className="form-group col-md-4">
                <label
                  htmlFor="inputProductSubCategories"
                  className="mt-2 mb-2"
                >
                  Sub-Categories
                </label>
                <select
                  id="inputProductSubCategories"
                  className="form-control"
                  defaultValue={"DEFAULT"}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Choose a Sub Categories For Fiesta
                  </option>
                  <option value="None">None</option>
                  <option value="Bag">Bag</option>
                  <option value="Belt">Belt</option>
                  <option value="Shoe">Shoe</option>
                  <option value="Wallet">Wallet</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="childCategories" className="mt-2 mb-2">
                  Child-Categories
                </label>
                <select
                  id="childCategories"
                  className="form-control"
                  defaultValue={"DEFAULT"}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Choose a Child Categories For Fiesta
                  </option>
                  <option value="">None</option>
                  <option value="">Ladies Bag</option>
                  <option value="">Office Bag</option>
                  <option value="">Laptop Bag</option>
                  <option value="">Gym Bag</option>
                  <option value="">Ladies Belt</option>
                  <option value="">Men Belt</option>
                  <option value="">Ladies Shoes</option>
                  <option value="">Men shoes</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="subChildCategories" className="mt-2 mb-2">
                  Sub-Child-Categories
                </label>
                <select
                  id="subChildCategories"
                  className="form-control"
                  defaultValue={"DEFAULT"}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Choose a Sub Child Categories For Fiesta
                  </option>
                  <option value="">None</option>
                </select>
              </div>
            </>
          )}
          {/* end of fiesta cetegories child input*/}

          {/* start of dress cetegories child input*/}
          {showInput === "Dress" && (
            <>
              {" "}
              <div className="form-group col-md-4">
                <label
                  htmlFor="inputProductSubCategories2"
                  className="mt-2 mb-2"
                >
                  Sub-Categories
                </label>
                <select
                  id="inputProductSubCategories2"
                  className="form-control"
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Choose a Sub Categories For Dress
                  </option>
                  <option value="">Gents</option>
                  <option value="">Ladies</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="childCategories2" className="mt-2 mb-2">
                  Child-Categories
                </label>
                <select
                  id="childCategories2"
                  className="form-control"
                  defaultValue={"DEFAULT"}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Choose a Child Categories For Dress
                  </option>
                  <option value="">None</option>
                  <option value="">Shart</option>
                  <option value="">Panjabi</option>
                  <option value="">Koti</option>
                  <option value="">Shari</option>
                  <option value="">One Piece</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="subChildCategories2" className="mt-2 mb-2">
                  Sub-Child-Categories
                </label>
                <select
                  id="subChildCategories2"
                  className="form-control"
                  defaultValue={"DEFAULT"}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Choose a Sub Child Categories For Dress
                  </option>
                  <option value="">None</option>
                  <option value="">Formal Shirt</option>
                  <option value="">Casual Shirt</option>
                  <option value="">Tangail Shari</option>
                  <option value="">Tati Shari</option>
                  <option value="">Handcraft Shari</option>
                  <option value="">Usstitch One Piece</option>
                  <option value="">Stitch One Piece</option>
                  <option value="">Tree Piece</option>
                  <option value="">Two piece</option>
                  <option value="">Top</option>
                  <option value="">Payjama</option>
                  <option value="">Gents Koti</option>
                  <option value="">Ladies Koti</option>
                  <option value="">Orna</option>
                  <option value="">Shawl</option>
                  <option value="">Watch</option>
                  <option value="">Hijab</option>
                  <option value="">Tupi</option>
                </select>
              </div>
            </>
          )}
          {/* end of dress cetegories child input*/}

          {/* start of Cosmetics cetegories child input*/}
          {showInput === "Cosmetics" && (
            <>
              {" "}
              <div className="form-group col-md-4">
                <label
                  htmlFor="inputProductSubCategories3"
                  className="mt-2 mb-2"
                >
                  Sub-Categories
                </label>
                <select
                  id="inputProductSubCategories3"
                  className="form-control"
                  defaultValue={"DEFAULT"}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Choose a Sub Categories For Cosmetics
                  </option>
                  <option value="">Face Makeup</option>
                  <option value="">Body Cosmetics</option>
                  <option value="">Body Spray & Perfume</option>
                  <option value="">Shampoo</option>
                  <option value="">Hair Color</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="childCategories3" className="mt-2 mb-2">
                  Child-Categories
                </label>
                <select
                  id="childCategories3"
                  className="form-control"
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Choose a Child Categories For Cosmetics
                  </option>
                  <option value="">None</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="subChildCategories3" className="mt-2 mb-2">
                  Sub-Child-Categories
                </label>
                <select
                  id="subChildCategories3"
                  className="form-control"
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Choose a Sub Child Categories For Cosmetics
                  </option>
                  <option value="">None</option>
                </select>
              </div>
            </>
          )}
          {/* end of Cosmetics cetegories child input*/}

          {/*start home decor of cetegories child input*/}
          {showInput === "HomeDecor" && (
            <>
              {" "}
              <div className="form-group col-md-4">
                <label
                  htmlFor="inputProductSubCategories4"
                  className="mt-2 mb-2"
                >
                  Sub-Categories
                </label>
                <select
                  id="inputProductSubCategories4"
                  className="form-control"
                  defaultValue={"DEFAULT"}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Choose a Sub Categories For Home Decor
                  </option>
                  <option value="None">Nakshai Khata</option>
                  <option value="Bag">Baby Cloth</option>
                  <option value="Belt">T-Table Cloth</option>
                  <option value="Shoe">Bed Sheet</option>
                  <option value="Wallet">Kushon Cover</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="childCategories4" className="mt-2 mb-2">
                  Child-Categories
                </label>
                <select
                  id="childCategories4"
                  className="form-control"
                  defaultValue={"DEFAULT"}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Choose a Child Categories For Home Decor
                  </option>
                  <option value="">None</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="subChildCategories4" className="mt-2 mb-2">
                  Sub-Child-Categories
                </label>
                <select
                  id="subChildCategories4"
                  className="form-control"
                  defaultValue={"DEFAULT"}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Choose a Sub Child Categories For Home Decor
                  </option>
                  <option value="">None</option>
                </select>
              </div>
            </>
          )}
          {/*end home decor/cloting of  cetegories child input*/}

          {/*start mat of  cetegories child input*/}
          {showInput === "Mat" && (
            <>
              {" "}
              <div className="form-group col-md-4">
                <label
                  htmlFor="inputProductSubCategories5"
                  className="mt-2 mb-2"
                >
                  Sub-Categories
                </label>
                <select
                  id="inputProductSubCategories5"
                  className="form-control"
                  defaultValue={"DEFAULT"}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Choose a Sub Categories For Mat
                  </option>
                  <option value="">Floor Mat</option>
                  <option value="">Wall Mat</option>
                  <option value="">Place Mat</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="childCategories5" className="mt-2 mb-2">
                  Child-Categories
                </label>
                <select
                  id="childCategories5"
                  className="form-control"
                  defaultValue={"DEFAULT"}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Choose a Child Categories For Mat
                  </option>
                  <option value="">None</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="subChildCategories5" className="mt-2 mb-2">
                  Sub-Child-Categories
                </label>
                <select
                  id="subChildCategories5"
                  className="form-control"
                  defaultValue={"DEFAULT"}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Choose a Sub Child Categories For Mat
                  </option>
                  <option value="">None</option>
                </select>
              </div>
            </>
          )}
          {/*end mat of cetegories child input*/}

          {/*start accessories of cetegories child input*/}
          {showInput === "Accessories" && (
            <>
              {" "}
              <div className="form-group col-md-4">
                <label
                  htmlFor="inputProductSubCategories5"
                  className="mt-2 mb-2"
                >
                  Sub-Categories
                </label>
                <select
                  id="inputProductSubCategories6"
                  className="form-control"
                  defaultValue={"DEFAULT"}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Choose a Sub Categories For Accessories
                  </option>
                  <option value="">Bike Accessories</option>
                  <option value="">Tissue Box</option>
                  <option value="">Muse Pad</option>
                  <option value="">Puff and Makeup Brash</option>
                  <option value="">Safety Products</option>
                  <option value="">Hair Band</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="childCategories6" className="mt-2 mb-2">
                  Child-Categories
                </label>
                <select
                  id="childCategories6"
                  className="form-control"
                  defaultValue={"DEFAULT"}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Choose a Child Categories For Accessories
                  </option>
                  <option value="">None</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="subChildCategories6" className="my-2">
                  Sub-Child-Categories
                </label>
                <select
                  id="subChildCategories6"
                  className="form-control"
                  defaultValue={"DEFAULT"}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Choose a Sub Child Categories For Accessories
                  </option>
                  <option value="">None</option>
                </select>
              </div>
            </>
          )}
          {/*end accessories of cetegories child input*/}

          <div className="form-group col-md-4">
            <label htmlFor="inputStatus" className="my-2">
              Status
            </label>
            <select
              id="inputStatus"
              className="form-control"
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Choose a Status ...
              </option>
              <option value="">pending</option>
              <option value="">done</option>
            </select>
          </div>
        </div>

        <div className="row mt-2">
          <div className="form-group col-md-4 mt-2">
            <label htmlFor="inputColor" className="mt-2 mb-2">
              Color
            </label>
            <select
              id="inputColor"
              className="form-control"
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Choose a Color ...
              </option>
              <option value="">Red</option>
              <option value="">Black</option>
              <option value="">Blue</option>
              <option value="">White</option>
              <option value="">Green</option>
            </select>
          </div>

          <div className="form-group col-md-4 mt-2">
            <label htmlFor="inputSize" className="mt-2 mb-2">
              Size
            </label>
            <select
              id="inputSize"
              className="form-control"
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Choose a Size...
              </option>

              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XXL</option>
              <option value="">XXXL</option>
            </select>
          </div>
        </div>

        <div className="row mt-2">
          <div className="form-group col-md-4">
            <label htmlFor="inputCurrectPrice" className="mt-2 mb-2">
              Current Price
            </label>
            <input
              type="number"
              className="form-control"
              id="inputCurrectPrice"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputDiscuntPrice" className="mt-2 mb-2">
              Discunnet Price
            </label>
            <input
              type="number"
              className="form-control"
              id="inputDiscuntPrice"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="form-group col-md-8">
            <label htmlFor="inputProductImg" className="mt-2 mb-2">
              Product Image:
            </label>
            <input
              style={{ marginLeft: "10px" }}
              type="file"
              className="form-control-file"
              id="inputProductImg"
            />
          </div>

          <div className="form-group col-md-4 mt-3 mb-5">
            <button type="submit" className="btn px-5 myBtn mt-4 mb-2">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProductPage;
