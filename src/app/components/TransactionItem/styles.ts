import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../styles/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  detailContainer: {
    flexDirection: 'row',
  },

  date_text: {
    marginRight: 20,
    fontFamily: GlobalStyles.fonts.secondary.regular,
    color: GlobalStyles.colors.third,
  },
  amount_text: {
    fontFamily: GlobalStyles.fonts.secondary.regular,
  },

  type_in: {
    color: GlobalStyles.colors.positive,
  },

  type_out: {
    color: GlobalStyles.colors.negative,
  },

  input_text: {
    fontFamily: GlobalStyles.fonts.secondary.regular,
    color: GlobalStyles.colors.dark,
    margin: 0,
    padding: 0,
  },

  edit_input: {
    margin: 0,
    padding: 0,
  },
  edit_background: {
    backgroundColor: 'rgba(45, 255, 255,0.2)',
  },
});
