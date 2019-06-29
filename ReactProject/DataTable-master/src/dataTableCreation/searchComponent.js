import React from 'react';

export const Search = props => {

    let textInput = React.createRef();

    function autoFocus() {
        textInput.current.focus();
      }

    return (
        <div className="searchContainer">
            <div className="searchDiv" onMouseOver={autoFocus} >
                <input className="searchInput" type="text" onChange={props.search} ref={textInput} value={props.value} />
                <img src="https://img.icons8.com/metro/26/ffffff/search.png" alt="" />
            </div>
        </div>
    )
}
