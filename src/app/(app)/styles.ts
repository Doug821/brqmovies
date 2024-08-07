import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        gap: 68,
        backgroundColor: '#16171B',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    label: {
        color: '#2E2F33',
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#A9A9A9',
        width: '100%',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 28,
    },
    list: {
        width: '100%',
        paddingVertical: 32,
    },
});
