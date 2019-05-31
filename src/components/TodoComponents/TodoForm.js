import React from 'react';


class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: ""};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.props.onAdd(this.state.value);
        this.setState({ value: "" });
        event.preventDefault();
    }

    render() {
      return (
        <div className="form">
          <form className="form-content" onSubmit={this.handleSubmit}>
            <label>
              <p>Task to complete:</p>
              <input
                type="text" 
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <br/>
            <input type="submit" value="Add To-do Task" />
          </form>
          <button onClick={this.props.handleClear}>Remove Completed Task</button>
        </div>
      )
    };
}

export default TodoForm;