import React from "react"

function Search({ onSearch }) {
    return (
        <div>
            <input type="text" onChange={(e) => onSearch(e.target.value)} placeholder="Search..."/>
        </div>
    );
}

export default Search;