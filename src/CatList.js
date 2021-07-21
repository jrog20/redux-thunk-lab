import React, { Component } from 'react';

class CatList extends Component {
  images = () => {
    return this.props.catPics.map(pic => <img key={pic.id} src={pic.url} alt={pic.id} />)
  }
  
  render() {
    return(
      <ul>
        {this.images()}
      </ul>
    );
  }
};

export default CatList;
