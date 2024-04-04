import { StyleSheet } from 'react-native';
import { Themes } from '../../themes/Themes';

export const createStyles = (theme: Themes) =>
    StyleSheet.create({
        container: {
            backgroundColor: theme.colors.primary,
            height: '105%',
            flexDirection: 'column',
        },
        bodyContainer: {
            display: 'flex',
            marginTop: 34,
            flex: 1,
            backgroundColor: theme.colors.background,
        },

        searchResultContainer: {
            display: 'flex',
            marginTop: 35,
            flex: 1,
            paddingBottom: 10,
        },

        searchContainer: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0
        },
        titleContainer: {
            padding: 10,
        },
        title: {
            marginTop: '5%',
            flexDirection: 'row',
            
        },
        textTitle1: {
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.text.title
        },
        textTitle2: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#E90064'
        },
        textTitle3: {
            fontSize: 16,
            color: theme.text.title
        },
        viewListService: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        columnSearvice: {
            flex: 1,
        },
        loadingContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
          },
        totalResultText: {
            color: 'gray',
            padding: 8
        },
        titleTotalResultText: {
            padding: 8,
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.colors.mainstream
        }
    });
