import { useSession } from '@/contexts/session';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TabOneScreen() {
  const { signOut } = useSession();
  const handleSignOut = () => {
    signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.label}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    gap: 68,
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
});
