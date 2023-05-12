import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../styles/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    height: '60%',
    backgroundColor: GlobalStyles.colors.light,
    borderRadius: 5,
    padding: 12,
  },
  result: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  result_text: {
    fontFamily: GlobalStyles.fonts.secondary.bold,
    color: GlobalStyles.colors.dark,
  },
  result_amount: {
    fontFamily: GlobalStyles.fonts.secondary.regular,
  },
  type_in: {
    color: GlobalStyles.colors.positive,
  },

  type_out: {
    color: GlobalStyles.colors.negative,
  },
});
