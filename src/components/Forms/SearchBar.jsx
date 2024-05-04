import "./Searchbar.css";

const SearchBar = ({ handleFilter }) => {
  return (
    <div className="row justify-content-center mt-5 mb-2">
      <div className="col-xl-2 col-md-4 col-7 d-flex align-items-center bg-searchbar p-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recherche"
          name="searchbar"
          onChange={handleFilter}
        />
      </div>
    </div>
  );
};

export default SearchBar;
