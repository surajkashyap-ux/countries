import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const moon  = <FontAwesomeIcon icon={faMoon} />


class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isDark: false,
      text: "Dark Mode"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      isDark: !this.state.isDark,
      text: "Light Mode"
    })
    document.body.classList.toggle('light-mode');
  }

  render(){
    return (
      <div className={this.state.isDark ? "white header-container" : "header-container"}>
          <h5 className="text-left"><b>Where in the world?</b></h5>
          <h6 className="text-right"><b><a onClick={this.handleClick}>{moon} {this.state.text}</a></b></h6>
      </div>
    )
  }
}


export default Header;
