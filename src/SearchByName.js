import React from 'react';
import button from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Header from './Components/Header.jsx';
import './SearchByName.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Region, {countryName} from './Region';
import SearchPart, {region, text} from './Components/SearchPart.jsx';

const arrow = <FontAwesomeIcon icon={faArrowLeft} />

let countryIdentification;
function handleClick(e){
  countryIdentification = e.target.name;
}


class SearchByName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/" + text)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

    render() {
    const { error, isLoaded, items } = this.state;
    console.log("items: " + items)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const style = {
        color: 'white'
      }


      return (
        <div>
        <Header/>
        <Link to="/">
          <button> {arrow} Back</button>
        </Link>
        <div className="container">
        {items.map((item) => (
          <Link to="/about" style={style}>
            <div className="card">
                <img src={item.flag} name={item.name} onClick={handleClick}/>
                <p>{item.name}</p>
                <p><b>Population: </b>{item.population}</p>
                <p className="capital"><b>Capital: </b> {item.capital}</p>
            </div>
          </Link>
        ))}
        </div>
      </div>);
    }
  }
}

export default SearchByName;
export {countryIdentification};
