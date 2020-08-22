import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    // if (this.props.todo.completed) {
    //   return {
    //     textDecoration: "line-through",
    //   };
    // } else {
    //   return {
    //     textDecoration: "none",
    //   };
    // }

    //ternary
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
  // state isn't here so we need to go to one lvl up => Todos.

  //   markedComplete(e) {
  //     console.log(this.props);

  //  'this' will be undefined because this is a custom method that we have created ( not a Component initial method)

  //  We would have to bind 'this' to make it work:
  //  <input type="checkbox" onChange={this.markedComplete.bind(this)} />

  // or we can use an arrow funtion like below.
  //   }

  //   markedComplete = (e) => {
  //     console.log(this.props);
  //   };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markedComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

//Proptype
//Here we have a single object (todo => TodoItem)

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};
export default TodoItem;
