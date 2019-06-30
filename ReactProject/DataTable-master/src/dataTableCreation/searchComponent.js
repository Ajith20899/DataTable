import React from 'react';

export const Search = props => {

    return (
        <div className="searchContainer">
            <div className="searchDiv">
                <input className="searchInput" type="text" onChange={props.search} value={props.value} />
                <img src="https://img.icons8.com/ios/20/5f5f5f/search.png"/>
            </div>
        </div>
    )
}
