import { StyleSheet } from 'react-native';
import { backgroundPink } from '../../styles/colors';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth:1,
        margin: 10

    },
    toolbarActionText: {
        fontWeight: 'bold',
        textAlign: 'center',
        flexWrap: 'wrap',
        color: 'black',
        fontSize: 16
    },
    checkmark: {
        position: 'absolute',
        top: 15,
        right: 15,
        fontSize: 16,
        color: 'black'
    }
});
