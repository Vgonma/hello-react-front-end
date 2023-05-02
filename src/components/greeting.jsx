import 'react'
import PropTypes from 'prop-types'

function Greeting(props) {
  return (
    <div>
      <h1>Greeter</h1>
      <h2>{props.greeting}</h2>
    </div>
  )
}

Greeting.propTypes = {
  greeting: PropTypes.string,
};

export default Greeting
