function SearchBar({changeSearch}) {
    return (
        <div className="searchBar">
            <input type="text" placeholder="Search name or type..." onChange={event => changeSearch(event.target.value)}/>
        </div>
    );
}

export default SearchBar;