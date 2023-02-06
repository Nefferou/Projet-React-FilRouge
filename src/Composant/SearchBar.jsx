function SearchBar({changeSearch}) {
    return (
        <div>
            <input type="text" onChange={event => changeSearch(event.target.value)}/>
        </div>
    );
}

export default SearchBar;