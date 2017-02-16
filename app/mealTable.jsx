const React = require('react')
const ReactDOM = require('react-dom')
const FoodRow = require('./foodRow')
const axios = require('axios')

class MealTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { foods: []}
  }

  deleteRow(id, join_id) {
    let url = "http://quantified-api.herokuapp.com/v1/meal_foods"
    axios.delete(`${url}${join_id}.json`)
      .then(
        let newFoods = this.state.foods.filter((food) => {
        return food.id !== id
      }
    ))

    this.setState({foods: newFoods})
  }

  componentDidMount(){

    axios.get("http://quantified-api.herokuapp.com/v1/meals/1.json")
      .then((response) => {
        this.setState({foods: response.data})
      })
  }

  render() {
    let foodRows = this.state.foods.map((food) => {
      return (<FoodRow
        key={food.id}
        name={food.name}
        calories={food.calories}
        removeSelf={this.deleteRow.bind(this, food.id, food.join_id)} />  )
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
