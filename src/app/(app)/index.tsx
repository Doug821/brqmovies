import { router } from 'expo-router';
import { FlatList, View } from 'react-native';

import { useSession } from '@/contexts/session';

import { MoovieCard } from '@/components';
import { LogoutButton } from '@/components/LogoutButton/index.';

import { styles } from './styles';

export default function Home() {
  const { signOut, isLogoutVisible, setIsLogoutVisible } = useSession();
  const handleSignOut = () => {
    setIsLogoutVisible(false);
    signOut();
  };

  const handleGoToDetails = () => {
    router.push('/details');
  };

  return (
    <View style={styles.container}>
      {isLogoutVisible && <LogoutButton onPress={handleSignOut} />}
      <FlatList
        data={data.results || []}
        style={styles.list}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item, index }) => (
          <MoovieCard
            moovie={item}
            index={index}
            onPress={handleGoToDetails}
            activeOpacity={0.7}
          />
        )}
        numColumns={2}
      />
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
