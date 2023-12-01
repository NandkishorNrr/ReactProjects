import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div>
        <ul>
          <li
            style={{
              backgroundColor: "gray",
              borderRadius: "10px",
              border: "1px solid ",
              display: "flex",
              justifyContent: "space-between",
              margin: "2px",
              padding: "2px",
            }}
          >
            {this.props.index + 1 + ". "}
            {this.props.item}
            <button
              style={{
                color: "red",
                font: "small-caption",
                borderRadius: "10px",
                border: "1px solid black",
              }}
              onClick={(e) => {
                this.props.deleteItem(this.props.index);
              }}
            >
              X
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default List;
