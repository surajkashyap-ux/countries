import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './SearchPart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Api from './Api.jsx';
import Header from './Header.jsx';
import {Link} from 'react-router-dom';


const search  = <FontAwesomeIcon icon={faSearch} />

let region;
let text;
function handleClick(e){
  region = e.target.name;
}

function handleChange(e){
  text = e.target.value;
  console.log("text is: " + text)
}


class SearchPart extends React.Component {

  render(){
  let continents = ["Asia","Americas", "Europe", "Africa", "Oceania"];
  return (
    <div>
    <Header/>
    <div className="search-container">
    <form onSubmit={handleClick}>
      <div className="search-div"> {search}
      <input className="search-field" type="text" placeholder="Search for a country..." onChange={handleChange}></input>
      <Link to="/searchbyname">
      <a id="button" type="submit">search</a>
      </Link>
      </div>
      </form>

      <Dropdown>
         <Dropdown.Toggle variant="dark" id="dropdown-basic">
           Filter by Region
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Link to="/region">
        {continents.map((continent) => (
            <Dropdown.Item href="#/action-1" name={continent} onClick={handleClick}>{continent}</Dropdown.Item>
        ))}
        </Link>
        </Dropdown.Menu>
      </Dropdown>
    </div>
      <Api/>
    </div>
  )}
}

export default SearchPart;
export {region, text};
