import React from 'react';

const Search = ({handleSearchChange, search}) => {
    return (
        <div>
            <input value={search} onChange={handleSearchChange}className="search-bar form-control" type="text" placeholder="Search for a country.."/>
        </div>
    );
};

export default Search;