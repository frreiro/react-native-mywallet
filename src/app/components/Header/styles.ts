import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../styles/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: GlobalStyles.fonts.secondary.bold,
    fontSize: 25,
    color: GlobalStyles.colors.light,
  },
});
