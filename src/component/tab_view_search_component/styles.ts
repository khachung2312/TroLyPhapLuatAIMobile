import { StyleSheet } from 'react-native';
import { Themes } from '../../themes/Themes';
export const createStyles = (theme: Themes) =>
  StyleSheet.create({
    container: {
      flex: 1, 
    },
    procedureContainer: {
      flex: 1,
      backgroundColor: '#fff'
    },
    documentContainer: {
      flex: 1,
      backgroundColor: '#fff'
    },
    tabView: {
      flex: 1,

    },
    tabBar: {
      backgroundColor: '#fff',
    },
  
    tabBarText: {
      color: 'gray'
    },
    tabBarIndicator: {
      backgroundColor: theme.colors.mainstream 
    },
    
  });
