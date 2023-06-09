import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../styles/GlobalStyles';

export const styles = StyleSheet.create({
  title: {
    fontFamily: GlobalStyles.fonts.primary.regular,
    fontSize: 25,
    marginBottom: 24,
    color: GlobalStyles.colors.light,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
