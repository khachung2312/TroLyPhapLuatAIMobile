import { StyleSheet } from 'react-native';
import { Themes } from '../../themes/Themes';
export const createStyles = (theme: Themes) =>
  StyleSheet.create({
    container: {
      width: '80%',
      height: 200,
      backgroundColor: theme.colors.background,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      marginVertical: 10,
      marginHorizontal: 20
    },
    image: {
      width: 70,
      height: 70,
      resizeMode: 'cover'
    },
    title: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.text.serviceName
    },
    total: {
      marginTop: 10,
      fontSize: 12,
      color: theme.text.totalName
    }
  });
