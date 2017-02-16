require('./main')
const React = require('react')
const ReactDOM = require('react-dom')
const MealTable = require('./mealTable')

ReactDOM.render(<MealTable />, document.getElementById('application'))
