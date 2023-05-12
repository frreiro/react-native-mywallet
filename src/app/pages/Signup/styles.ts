import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../styles/GlobalStyles';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  info_text: {
    marginTop: 36,
    fontSize: 10,
    fontFamily: GlobalStyles.fonts.secondary.bold,
    color: GlobalStyles.colors.light,
  },
});
