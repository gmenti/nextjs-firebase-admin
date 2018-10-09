import PropTypes from "prop-types";

export default class Counter extends React.Component {
  static propTypes = {
    count: PropTypes.number,
    onIncrement: PropTypes.func
  };
  render () {
      const { count, onIncrement } = this.props
      return (
          <div>
              <span>Counter: {count}</span>
              <button onClick={onIncrement}>Increment</button>
          </div>
      )
  }
}
