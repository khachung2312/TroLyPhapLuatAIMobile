import { StyleSheet, TextStyle } from 'react-native';
import { Themes } from '../../themes/Themes';
export const createStyles = (theme: Themes) =>
  StyleSheet.create({
    container: {
      width: 'auto',
      height: 92,
      borderBottomWidth: 1,
      justifyContent: 'flex-end',
      borderColor: theme.inputSearch.borderColor,
      backgroundColor: theme.inputSearch.background
    },
    content: {
      width: 'auto',
      flexDirection: 'row',
      padding: 8,
      alignItems: 'center',
    },
    icon: {
      width: 24,
      height: 24,
      resizeMode: 'cover',
      marginHorizontal: 10,
    },
    contentSearch: {
      flexDirection: 'row',
      flex: 1,
      fontSize: 18,
      color: theme.inputSearch.textInput,
    },
    text: {
      color: 'white',
    },
    focusedInput: {
      backgroundColor: "#fff",
      height: 35,
      flexDirection: 'row',
      borderRadius: 8,
      padding: 8,
  
    },
    btnCancel: {
      display: 'none'
    },
    textCancel: {
      color: '#060047',
      padding: 6
    }
  });
