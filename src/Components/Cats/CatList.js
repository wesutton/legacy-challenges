import React, { Component } from 'react';
 
class CatList extends Component {
 
  render(){  
    console.log(this.props)
    return (
   <div>
     <h3> Cat Breeds </h3>
     {this.props.cats.map((breeds, key) => 
     {  return<li key={key} > {breeds}</li> })}
   </div>
 )}
}
 
export default CatList;
