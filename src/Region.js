import React from 'react';
import './Region.css';
import SearchPart, {region} from './Components/SearchPart';
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';
import Header from './Components/Header';
import button from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const arrow = <FontAwesomeIcon icon={faArrowLeft} />

let countryName;
function handleClick(e){
  countryName = e.target.name;
}

class Region extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/region/" + region)
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
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const style = {
        color: 'white'
      }
      console.log(items)

      return (
        <div>
        <Header/>
        <Link to="/">
          <button> {arrow} Back</button>
        </Link>
        <div class="title"><h1>{items[0].region}</h1></div>
        <div className="container">
        {items.map((item) => (
          <Link to="/aboutperregion" style={style}>
            <div className="card">
                <img src={item.flag} name={item.name} onClick={handleClick}/>
                <p><b>{item.name}</b></p>
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

export default Region;
export {countryName}
