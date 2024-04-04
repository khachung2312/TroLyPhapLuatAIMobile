import { StyleSheet } from 'react-native';
import { Themes } from '../../themes/Themes';

export const createStyles = (theme: Themes) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.primary,
            flexDirection: 'column',
        },
        headerContainer: {
            width: '100%',
            flexDirection: 'row',
            height: '6%',
            backgroundColor: 'white',
            alignItems: 'center'
        },
        btnBack: {
            marginLeft: '3%'
        },
        iconBack: {
            width: 24,
            height: 24,
            resizeMode: 'contain',
        },
        titleContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            flex:1,
            paddingRight: '10%'
        },
        titleFirst: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#060047'
        },
        titleLast: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#E90064'
        },
        bodyContainer: {
            width: '100%',
            height: '100%',
            padding: 16,
            backgroundColor: '#e4e9f0',
            paddingBottom: '10%'
        },
        tenThuTucStyle: {
            fontSize: 24, 
            fontWeight: 'bold',
            color: '#3f5876'
        },
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
        
        },
        webViewComponent: {
            width: 200, 
            height: 180,
            paddingRight: 90,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          },
          webViewDetailDocument: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          },
          modalView: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          },
          modalContainer: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16
          },
          modalContent: {
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: 10,
            flex: 1,
            width: '100%',
            marginTop: '10%'
          },
          btnCloseContainer: {
            width: '100%',
            alignItems: 'flex-end',
          },
          btnCloseStyle: {
           color: 'blue',
           fontSize: 18
          }
    });
