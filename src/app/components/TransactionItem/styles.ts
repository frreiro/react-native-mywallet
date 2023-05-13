import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../styles/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    padding: 10,
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
    backgroundColor: 'rgba(255, 240, 0,0.2)',
    borderRadius: 5,
  },
});
