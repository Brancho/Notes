import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';


function mapStateToProps(state){
  return {
    data: state.data
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const ConnectedRouter = connect(mapStateToProps, mapDispatchToProps)(Router);

export default ConnectedRouter;





