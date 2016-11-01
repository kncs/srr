import { connect } from 'react-redux'
import { increment, decrement} from '../actions/counter.actions'
import Counter from '../components/counter.react'

const mapStateToProps = (state) => {
  return {
    value: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementClick: (event) => {
      dispatch(increment())
    },
    decrementClick: (event) => {
      dispatch(decrement())
    }
  }
}

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterContainer
