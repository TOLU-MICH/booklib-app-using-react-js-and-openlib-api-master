import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context.";
import "./SearchForm.css";

const SearchFormThesis = () => {
  const { setSearchTerm, setResultTitle, searchTerm, setPage } =
    useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  const dataArray = [
    {
      id: 1,
      name: "Computational Analysis of Antibody Binding Mechanisms to the Omic Thesis",
      details: 0,
    },
    {
      name: "Computational Modeling of Superconductivity from the Set of Time Thesis",
      details: 1,
    },
    {
      name: "Data Mining Textbook",
      details: 3,
    },
    {
      name: "Development of Integrated Machine Learning and Data Science Thesis",
      details: 4,
    },
    {
      name: "Frontiers Journal",
      details: 5,
    },
    {
      name: "Kumar MDEP 1634463",
      details: 6,
    },
    {
      name: "Learning-Based Modeling of Weather and Climate Events Related Thesis",
      details: 7,
    },
    {
      name: "MDPI journal",
      details: 8,
    },
    {
      name: "MicrobiologyTextbook",
      details: 9,
    },
    {
      name: "Reports on the future of emerging markets duttagupta and pazarbasioglu",
      details: 10,
    },
    {
      name: "The Evolution of Data Science A New Mode of Knowledge",
      details: 11,
    },
    {
      name: "WHO Scientific Report",
      details: 12,
    },
    // Add more items as needed
  ];

  function search() {
    const filteredResults = dataArray.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    // Display the filtered results (e.g., create links or show details)
    // You can customize this part based on your requirements.
    setPage(filteredResults);

    console.log(filteredResults);
  }

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }
    search();
    navigate("/thesis");
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="form-control !text-black"
                placeholder="search for any thesis here."
                ref={searchText}
              />
              <button
                type="submit"
                className="flex flex-c"
                onClick={handleSubmit}
              >
                <FaSearch className="text-purple" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchFormThesis;
