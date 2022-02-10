import React from 'react';
import button from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Header from './Components/Header.jsx';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Region, {countryName} from './Region';

const arrow = <FontAwesomeIcon icon={faArrowLeft} />


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/" + countryName)
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
      console.log(items);

      return (
        <div>
          <Header/>
              <Link to="/">
                <button> {arrow} Back</button>
              </Link>
              <div className="container">
                <div className="image">
                    <img src={items[0].flag}/>
                </div>
                <div className="content">
                   <h5><b>{items[0].name}</b></h5>
                   <p><b>Native Name:</b> {items[0].nativeName}</p>
                   <p><b>Population: </b>{items[0].population}</p>
                   <p><b>Region: </b>{items[0].region}</p>
                   <p><b>Sub Region: </b>{items[0].subregion}</p>
                   <p><b>Capital: </b>{items[0].capital}</p>
                   <p><b>Border Countries: </b>{items[0].borders[0]} {items[0].borders[1]}</p>
               </div>
               <div className="content third-container">
                   <p className="top-text"><b>Top Level Domain: </b>{items[0].topLevelDomain}</p>
                   <p><b>Currencies: </b>{items[0].currencies[0].code}</p>
                   <p><b>Languages: </b>{items[0].languages[0].name}</p>
               </div>
            </div>
        </div>
      );
    }
  }
}

export default About;
