import React, { Component } from 'react';
import Header from './Header/Header';
import SearchBarComponent from "./SearchBar";

class List extends Component {
  render() {
    return (<React.Fragment>
        <Header />
        <SearchBarComponent/>
     </React.Fragment>);
  }
}

export default List;
