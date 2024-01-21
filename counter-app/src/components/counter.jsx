import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 4,
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTag() {
    if (this.state.tags.length === 0) return "Add some tags";
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // way 1 to bind this with current object
  /*constructor (){
    super();
    this.handleIncreament = this.handleIncreament.bind(this);
  }*/
  
  handleIncreament = product =>{
    console.log(product)
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <>
        <span className={this.newMethod()}>
            {this.formatCount()}
        </span>
        <button onClick={() =>  this.handleIncreament({id : 1})} className="btn btn-secondary btn-sm">Increament</button>
        {/* {this.renderTag()} */}
      </>
    );
  }
  newMethod() {
    let classe = "badge m-2 bg-";
    classe += this.state.count === 0 ? "warning" : "primary";
    return classe;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
