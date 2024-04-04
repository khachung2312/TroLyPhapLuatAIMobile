import { StyleSheet } from 'react-native';
import { Theme } from '@react-navigation/native';
export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      height: '100%',
      alignItems: 'flex-start',
    },
    text: {
      fontSize: 18,
      color: theme.colors.secondary,
      fontWeight: 'bold',
    },
  });
