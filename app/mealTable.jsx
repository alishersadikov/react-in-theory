const React = require('react')
const ReactDOM = require('react-dom')
const FoodRow = require('./foodRow')

class MealTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { foods: [
      {name: "Salad", calories: 80, id: 1},
      {name: "Cheetos", calories: 90, id: 2}
    ]}
  }

  deleteRow(id) {
    let newFoods = this.state.foods.filter((food) => {
      return food.id !== id
    })

    this.setState({foods: newFoods})
  }

  render() {
    let foodRows = this.state.foods.map((food) => {
      return (<FoodRow
        key={food.id}
        name={food.name}
        calories={food.calories}
        removeSelf={this.deleteRow.bind(this, food.id)} />  )
    })
    return (
      <table>
        <thead>
          <tr><th>Name</th><th>Calories</th><th></th></tr>
        </thead>
        <tbody>
          {foodRows}
        </tbody>
      </table>
    )
  }
}

module.exports = MealTable
