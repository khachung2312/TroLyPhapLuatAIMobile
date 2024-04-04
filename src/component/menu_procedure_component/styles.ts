import { StyleSheet, TextStyle } from 'react-native';
import { Themes } from '../../themes/Themes';
export const createStyles = (theme: Themes) =>
  StyleSheet.create({
    menuContainer: {
      marginTop: '3%',
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 3
  },
  titleMenu: {
      color: '#3f5876',
      fontSize: 18,
      fontWeight: '600',
      marginBottom: '3%'
  },
  itemTextMenu: {
      color: '#566e8b',
      fontSize: 14,
      fontWeight: '500',
      marginBottom: '2%'
  
  }
  });
