const React = require('react')
const ReactDOM = require('react-dom')

class FoodRow extends React.Component {
  render() {
    return(
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.calories}</td>
        <td><button onClick={this.props.removeSelf}>delete</button></td>
      </tr>
    )
  }
}

module.exports = FoodRow
