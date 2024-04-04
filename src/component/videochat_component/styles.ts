import { StyleSheet } from 'react-native';
import { Themes } from '../../themes/Themes';
export const createStyles = (theme: Themes) =>
  StyleSheet.create({
    container: {
      width: 'auto',
      flexDirection: 'column',
      alignItems: 'flex-start',
      backgroundColor: 'yellow',
    },
    image: {
      width: 200,
      height: 100,
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      color: '#000000',
    },
    link: {
      color: 'blue',
    },
  });
