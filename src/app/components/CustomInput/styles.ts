import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../styles/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text_error: {
    fontSize: 10,
    color: GlobalStyles.colors.negative,
  },
  input: {
    width: '100%',
    height: 58,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 15,
    marginBottom: 13,
    fontFamily: GlobalStyles.fonts.secondary.regular,
    color: GlobalStyles.colors.dark,
  },
  input_error: {
    borderWidth: 2,
    borderColor: GlobalStyles.colors.negative,
  },
  input_placeholder: {
    color: GlobalStyles.colors.dark,
  },
});
