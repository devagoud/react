import React, { Component } from 'react';

class NewCatalogue extends Component{
    
constructor(props){
    super(props);
    this.state= {
        cataloguename: '',
        colour: '',
        packagecode: '',
        packagecroupode: ''
    };
    this.changeVale=this.changeVale.bind(this);
}
changeVale(event){
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
}
render(){
    return(
        <div>
            <form onSubmit={this.saveCatalogue}>
         <h1>Create New Catalogue</h1>
         <label> Catalogue Name:
         <input type="text" name="catalogueName" onChange={this.changeVale} />
         </label>
         <label> Colour:
         <input type="text" name="colour" onChange={this.changeVale} />
         </label>
         <label> Package Code:
         <input type="text" name="packageCode" onChange={this.changeVale} />
         </label>
         <label> Package Group Code:
         <input type="text" name="packageGroupCode" onChange={this.changeVale} />
         </label>
         <h1>{this.state.cataloguename}</h1>
     </form>
  </div>
    )
    // return(
    
    
}
}

export default NewCatalogue;