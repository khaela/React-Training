//import logo from '../logo.svg';
//import React, { Component } from "react";
import PropTypes from 'prop-types';


const Header = ({name, title, description}) => {
    return (
        <header> 
        <p>{title} {name} {description}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    );
}

Header.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Header;

/*export class Header extends Component{
    render() {
        return (
            <div className="App">
            
            </div>
        );
    }
}*/

/*export function Header(props) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }*/
  