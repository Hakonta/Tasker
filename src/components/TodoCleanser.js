import React, { Component } from "react"

class TodoCleanser extends Component {
  render() {
    return (
      <div className="manage-items">
      <button onClick={() => this.props.todoCleanserProps()}>
  Remove finished tasks
</button>
</div>
    )
  }
  }
  export default TodoCleanser