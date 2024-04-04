import { StyleSheet, TextStyle } from 'react-native';
import { Themes } from '../../themes/Themes';
export const createStyles = (theme: Themes) =>
  StyleSheet.create({
    container: {
      marginTop: '3%',
  },
  titleMenu: {
      color: '#3f5876',
      fontSize: 24,
      fontWeight: '600',
      marginBottom: '3%'
  },
  itemTextLable: {
      color: '#566e8b',
      fontSize: 18,
      fontWeight: '500',
      marginBottom: '2%'
  
  },
  lableContainer: {
    marginBottom: '4%'
  },
  textContent: {
    fontSize: 16
  },
  xemThemText: {
    color: '#fb454c'
  },
  });
