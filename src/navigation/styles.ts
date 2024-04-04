import { StyleSheet } from 'react-native';
import { Themes } from '../themes/Themes';
export const createStyles = (theme: Themes) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      height: '100%',
      alignItems: 'center',
    },
    text: {
      fontSize: 12,
      color: theme.textBottomTab.selected,
    },
    icon: {
      color: theme.textBottomTab.primary,
    },
    bottomTab: {
      color: theme.bottomTab.primary,
    },
  });
