import { StyleSheet } from 'react-native';
import { Themes } from '../../themes/Themes';

export const createStyles = (theme: Themes) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
    },
    headerContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      paddingTop: '14%',
      height: '15%',
      backgroundColor: theme.header.background,
      borderBottomWidth: 1,
      borderColor: '#e0e0e0',
    },
    titleContainer: {
      alignItems: 'center',
    },
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.text.primary,
      fontFamily: 'MadimiOne-Regular',
    },
    titleLink: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    linkText: {
      color: '#adadad',
    },
    iconStatus: {
      width: 7,
      height: 7,
      marginRight: 5,
    },
    text: {
      fontSize: 18,
      color: theme.colors.secondary,
      fontWeight: 'bold',
    },
    composerStyle: {
      color: 'red',
    },
    btnHeader: {
      width: 25,
      height: 25,
      borderRadius: 10,
    },
    viewChat: {
      backgroundColor: theme.viewChat.background,
      height: '97%',
      width: '100%',
      justifyContent: 'flex-end',
      marginTop: '12%',
    },
    inputContainer: {
      position: 'absolute',
      bottom: 0,
      color: 'red',
      borderRadius: 10,
      marginHorizontal: '3%',
      justifyContent: 'center',
      borderWidth: 0.2,
      borderColor: 'gray',
      backgroundColor: theme.inputChatAssistant.inputBackground,
    },
    iconSend: {
      width: 25,
      height: 25,
    },
    sendContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
      borderRadius: 20,
      width: 44,
      height: 44,
    },
    inputText: {
      color: theme.inputChatAssistant.textInput,
    },
    iconButtonContainer: {
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'center',
      bottom: 65,
      right: 100,
      left: 100,
    },
    backgroundContentChat: {
      backgroundColor: theme.text.backgroundTextChat,
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalContent: {
      backgroundColor: '#fff',
      position: 'absolute',
      borderRadius: 8,
      top: '10%',
      right: '3%',
    },
    btnModalStyle: {
      flexDirection: 'row',
      margin: 10,
      alignItems: 'center',
      borderBottomWidth: 0.2,
      borderColor: 'gray',
      paddingBottom: 5
    },
    iconBtnModal: {
      width: 25,
      height: 25,
      marginRight: 5,
    },
    btnTextModal: {
      fontWeight: '500'
    }
  });
