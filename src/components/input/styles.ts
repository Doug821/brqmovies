import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#49454F',
        width: '100%',
        height: 56,
        flexDirection: 'row',
        paddingHorizontal: 12,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        borderBottomWidth: 1,
        alignItems: 'center',
        gap: 8,
    },
    input: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
    },
    errorLabel: {
        color: '#FF0000',
        fontSize: 14,
        width: '100%',
        textAlign: 'center',
        paddingTop: 4,
    },
    placeholder: {
        position: 'absolute',
        color: '#fff',
    },
});
