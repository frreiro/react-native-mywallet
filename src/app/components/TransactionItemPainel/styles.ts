import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../styles/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    top: -5,
    right: 0,
    marginTop: 5,
    backgroundColor: GlobalStyles.colors.third,
    borderRadius: 5,
    width: '20%',
    opacity: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
