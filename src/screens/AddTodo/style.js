import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  cardContainer: {
    width: '90%',
    height: '30%',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 3,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  textInput: {
    width: '75%',
    height: 48,
    color: '#000000',
  },
  submitContainer: {
    width: '75%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#abc123',
  },
  submitButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
