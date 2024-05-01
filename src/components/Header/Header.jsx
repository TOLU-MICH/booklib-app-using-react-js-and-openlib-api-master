import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import SearchFormThesis from "../SearchFormThesis/SearchForm";

const Header = () => {
  const [thesis, setThesis] = useState(false);
  console.log(thesis);
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your material of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            {" "}
            The E-library is a powerful online Library tool designed to make
            your materials creation process seamless and professional. Whether
            you’re an aspiring author or an experienced writer, this free tool
            offers a range of features to enhance your writing journey.
          </p>
          {!thesis ? <SearchForm /> : <SearchFormThesis />}
          <button
            type="submit"
            className="flex flex-c bg-white p-3 px-4 rounded-xl text-black mt-4 font-bold"
            onClick={() => setThesis(!thesis)}
          >
            thesis:
            {!thesis ? (
              <span>off</span>
            ) : (
              <span className="text-red-600">on</span>
            )}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
