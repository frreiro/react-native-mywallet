import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../styles/GlobalStyles';

export const styles = StyleSheet.create({
  button: {
    width: '48%',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: GlobalStyles.colors.secondary,
    borderRadius: 5,
  },

  button_text: {
    fontFamily: GlobalStyles.fonts.secondary.bold,
    color: GlobalStyles.colors.light,
  },
});
