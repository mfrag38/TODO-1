import {StyleSheet, StatusBar} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  appBarContainer: {
    width: '100%',
    height: 56,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 52,
    backgroundColor: '#ba1afa',
  },
  body: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabContainer: {
    width: 56,
    height: 56,
    position: 'absolute',
    right: 16,
    bottom: 16,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#abc123',
    borderRadius: 28,
    overflow: 'hidden',
  },
  fabButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
