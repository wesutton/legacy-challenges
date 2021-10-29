import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      searchTerm: '',
    };
  }


  searchFunction(event) {
      this.setState({ searchTerm: event.target.value })
  }

  render() {
    return (
      <div>
        <Input placeholder='Search Here' onChange={this.searchFunction.bind(this)} />
        <h3>Results: </h3>
        <div>
          {this.state.things.filter((items) => {
            if (this.state.searchTerm === ''){
              return items
            }else if (items.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())){
              return items
            }
          }).map((items, key) => <li key = {key}>{items}</li>)}
        </div>
        
      </div>)

  }

}
export default SearchIndex;
