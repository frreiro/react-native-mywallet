import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../styles/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  title: {
    fontFamily: GlobalStyles.fonts.secondary.bold,
    fontSize: 25,
    color: GlobalStyles.colors.light,
  },
});
