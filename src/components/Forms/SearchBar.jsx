const SearchBar = ({ handleFilter }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-3 text-center mb-5 mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Search here"
          name="searchbar"
          onChange={handleFilter}
        />
      </div>
    </div>
  );
};

export default SearchBar;
