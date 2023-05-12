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

  descriptio_text: {
    fontFamily: GlobalStyles.fonts.secondary.regular,
    color: GlobalStyles.colors.dark,
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
});
