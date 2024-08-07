import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#16171b',
        gap: 68,
    },
    inputWrapper: {
        width: '100%',
        gap: 48,
    },
    input: {
        backgroundColor: '#49454F',
        width: '100%',
        height: 56,
        color: '#fff',
        fontSize: 16,
        paddingHorizontal: 12,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    buttonWrapper: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
    },
});
