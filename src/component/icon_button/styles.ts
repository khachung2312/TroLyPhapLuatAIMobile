import { StyleSheet } from 'react-native';
import { Themes } from '../../themes/Themes';
export const createStyles = (theme: Themes) =>
  StyleSheet.create({
    containerLight: {
      width: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: theme.colors.mainstream,
      borderRadius: 10,
      padding: 5,
    },
    containerSolid: {
      width: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: theme.colors.mainstream,
      borderRadius: 10,
      padding: 5,
      backgroundColor: theme.colors.mainstream,
      marginLeft: '5%',
    },
    iconContainer: {
      width: 18,
      height: 18,
      marginRight: 6,
    },
    text: {
      color: theme.colors.mainstream,
      fontSize: 12,
    },
    textSolid: {
      color: '#ffffff',
      fontSize: 12,
    },
  });
