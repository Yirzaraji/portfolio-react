import React, { useState, useEffect } from "react";
import Cards from "components/Common/Cards/CardsBis";

const Searchbar = () => {
  //Render form
  //catch input values
  //logic to filter card based on input data
  //re render
  const [formData, setformData] = useState({
    searchbar: "",
  });

  useEffect(() => {
    //const sentence = "This is a sample sentence.";
    setformData(formData.searchbar);
  }, []);

  const handleChange = (event) => {
    setformData({ ...formData, [event.target.name]: event.target.value });

    //console.log(formData.searchbar);
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-3 text-center mb-5 mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Search here"
          name="searchbar"
          onChange={handleChange}
        />
      </div>
      <Cards value={formData.searchbar} />
    </div>
  );
};

export default Searchbar;
