import { router } from 'expo-router';
import { FlatList, View } from 'react-native';

import { useSession } from '@/contexts/session';

import { LogoutButton, MovieCard } from '@/components';

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
          <MovieCard
            movie={item}
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
