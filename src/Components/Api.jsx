import React, {useState} from 'react';
import { Redirect } from 'react-router-dom'
import './Api.css';
import {Link} from 'react-router-dom';

const URL = 'https://restcountries.eu/rest/v2/all'


let country;
function handleClick(e){
    country = e.target.name;
}

class apiCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
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
      return <div className="loading"><h1>Loading...</h1></div>;
    } else {
      const style = {
        color: 'white'
      }

      return (<div className="container">
        {items.map((item) => (
          <Link to="/about" style={style}>
            <div className="card">
                <img src={item.flag} name={item.name} onClick={handleClick}/>
                <p><b>{item.name}</b></p>
                <p><b>Population: </b>{item.population}</p>
                <p className="capital"><b>Capital: </b> {item.capital}</p>
            </div>
          </Link>
        ))}
        </div>);
    }
  }
}

export default apiCall;
export {country}
