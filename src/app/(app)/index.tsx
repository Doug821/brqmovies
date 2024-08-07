import { router } from 'expo-router';
import { FlatList, View } from 'react-native';

import { useMovies } from '@/contexts/movies';
import { useSession } from '@/contexts/session';

import { LogoutButton, MovieCard } from '@/components';

import { styles } from './styles';

export default function Home() {
  const { signOut, isLogoutVisible, setIsLogoutVisible } = useSession();
  const { movies, setSelectedMovie } = useMovies();

  const handleSignOut = () => {
    setIsLogoutVisible(false);
    signOut();
  };

  const handleGoToDetails = (id: number) => {
    setSelectedMovie(id);
    router.push('/details');
  };

  return (
    <View style={styles.container}>
      {isLogoutVisible && <LogoutButton onPress={handleSignOut} />}
      <FlatList
        data={movies || []}
        style={styles.list}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item, index }) => (
          <MovieCard
            movie={item}
            index={index}
            onPress={() => handleGoToDetails(item.id)}
            activeOpacity={0.7}
          />
        )}
        numColumns={2}
      />
    </View>
  );
}
