import { StyleSheet } from 'react-native';
import { Themes } from '../../themes/Themes';
export const createStyles = (theme: Themes) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 'auto',
      backgroundColor: theme.colors.background,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      paddingRight: '12%',
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,

    },
    icon: {
      width: 40,
      height: 40,
      resizeMode: 'cover',
    },
    title: {
      fontSize: 16,
      marginLeft: 10,
      fontWeight: '300',
      color: theme.text.serviceName
    },
  });
