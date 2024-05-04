import "./Searchbar.css";

const SearchBar = ({ handleFilter }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-3 text-center mb-5 mt-5 bg-searchbar p-3">
        <input
          type="text"
          className="form-control"
          placeholder="Mots clés"
          name="searchbar"
          onChange={handleFilter}
        />
      </div>
    </div>
  );
};

export default SearchBar;
