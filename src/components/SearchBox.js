import React  from "react";
import tachyons from 'tachyons'
const SearchBox = ({ searchChanged}) =>{
    return(
        <div className="pa2">
            <input className="pa3 ba b--blue bg-lightest-blue" 
            type="search" 
            placeholder="search robots"
            onChange={searchChanged}></input>
        </div>
    )
}

export default SearchBox;