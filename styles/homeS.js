import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listCont: {
    paddingLeft: 20,
    paddingRight: 20
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#E4DFE7'
  },
  noteTitle: {
    fontSize: 14,
    fontFamily: 'Raleway',
    fontWeight: "600",
    marginBottom: 5
  },
  noteDesc: {
    fontFamily: 'Raleway',
    fontSize: 14,
    fontWeight: "400",
    color: '#8E8E8E'
  },
  textCont: {
    justifyContent: 'flex-start',
    width: window.width - 120
  },
  buttonCont: {
    position: 'absolute',
    flexDirection: 'row',
    right: 20,
    bottom: 20
  },
  button: {
    padding: 17,
    borderRadius: 100,
    backgroundColor: '#B74138',
    width: 60,
    height: 60,
    shadowColor: 'black',
    shadowRadius: 1,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3
  },
  icon: {
    color: 'white'
  },
  btnText: {
    color: 'white',
    fontSize: 11,
    textAlign: 'center'
  },
  btnIcon: {
    color: 'white',
    alignSelf: 'center',
    marginBottom: 5
  },
  btnCont: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

export default styles;