import React, { Component } from "react";

class App extends Component {
  state = {
    todos: [
      // {id: 1, name: 'The name of the item', completed: false},
    ],
    newItemName: "",
  };

  newItemHandler = (e) => {
    this.setState({
      newItemName: e.target.value,
    });
  };

  keyDownHandler = (e) => {
    if (e.key === "Enter") {
      const newTodos = [...this.state.todos];
      newTodos.push({
        name: this.state.newItemName,
        completed: false,
      });

      this.setState({
        todos: newTodos,
        newItemName: "",
      });
    }
  };

  toggleCompletion = (index, isDelete) => {
    if (isDelete) {
      // Should remove the todo item
      const newTodos = this.state.todos.filter((todo, todoIndex) => {
        return todoIndex !== index;
      });
      this.setState({
        todos: newTodos,
      });
    } else {
      // Should toggle the todo item
      const newTodos = [...this.state.todos];
      newTodos[index].completed = !newTodos[index].completed;
      this.setState({
        todos: newTodos,
      });
    }
  };

  render() {
    return (
      <div className="min-h-screen w-full bg-slate-100 flex justify-center items-center">
        <div className="bg-white flex-1 max-w-md rounded-xl shadow-xl overflow-hidden">
          <input
            type="text"
            className="bg-slate-600 text-white p-6 w-full outline-none text-3xl"
            placeholder="Type something..."
            value={this.state.newItemName}
            onChange={this.newItemHandler}
            onKeyDown={this.keyDownHandler}
          />
          <ul>
            {this.state.todos.map((todo, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    todo.completed ? "line-through" : ""
                  } p-6 text-3xl transition border-b border-slate-100 hover:bg-blue-500 hover:text-white cursor-pointer bg-slate-200 text-slate-600`}
                  onClick={(e) => {
                    this.toggleCompletion(index, e.shiftKey);
                  }}
                >
                  {todo.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
