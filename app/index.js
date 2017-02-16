require('./main')
const React = require('react')
const ReactDOM = require('react-dom')
const LikesCounter = require('./components/LikesCounter')

ReactDOM.render(<LikesCounter initialCount={0} />,
document.getElementById('application'))
