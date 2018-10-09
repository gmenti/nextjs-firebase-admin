import Counter from "../components/Counter";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({ type: "INCREMENT_COUNT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
