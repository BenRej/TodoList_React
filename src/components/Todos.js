import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  // state isn't here to, so we need to go one lvl up => App
  //   markedComplete = (e) => {
  //     console.log(this.props);
  //   };

  render() {
    console.log(this.props.todos);
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markedComplete={this.props.markedComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}
//Proptypes
//Good practice
//Proptype is a sort of validation for properties that component should have
//We can set the type / required or not
//Here we have an array of multiple objects (all the todos)

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};
export default Todos;
