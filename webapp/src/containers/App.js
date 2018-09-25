import App from "../components/App"
import { connect } from "react-redux";
// indexであれば明示しなくてよい
import { plus, minus } from "../actions"

const mapStateToProps = (state) => {
  return {
    number: state.number,
    title: state.title,
    day: state.day
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    plus: (num) => {
      dispatch(plus(num));
    },
    minus: (num) => {
      dispatch(minus(num));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
