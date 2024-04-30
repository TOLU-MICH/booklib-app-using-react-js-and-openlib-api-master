import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            {" "}
            The E-library is a powerful online Library tool designed to make
            your book creation process seamless and professional. Whether you’re
            an aspiring author or an experienced writer, this free tool offers a
            range of features to enhance your writing journey.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
