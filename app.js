import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import addEvent from './actions/actionCreators';
import eventApp from './index.ios.js';



function mapStateToProps(state){
  return {
    event: state.event
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}




const App  = connect(mapStateToProps, mapDispatchToProps)(eventApp);

export default App;

