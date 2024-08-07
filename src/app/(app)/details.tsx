import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Bell } from '@/assets/icons/Bell';
import { Calendar } from '@/assets/icons/Calendar';
import { Heart } from '@/assets/icons/Heart';
import { Star } from '@/assets/icons/Star';
import { useMovies } from '@/contexts/movies';

export default function Details() {
  const { selectedMovie } = useMovies();

  if (!selectedMovie) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        testID='movie-image'
        source={{
          uri: `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`,
        }}
        style={styles.poster}
      />
      <View style={styles.wrapper}>
        <View style={styles.section}>
          <Text style={styles.title}>{selectedMovie.title}</Text>
          <Text style={styles.cardTitle}>SINOPSE</Text>
          <Text style={styles.description}>{selectedMovie.overview}</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.row}>
            <View style={styles.card}>
              <Heart color='#EC8B00' backgroundColor='#16171A' />
              <Text style={styles.cardTitle}>MÉDIA</Text>
              <Text style={styles.label}>{selectedMovie.vote_average}</Text>
            </View>
            <View style={styles.card}>
              <Star color='#EC8B00' backgroundColor='#16171A' />
              <Text style={styles.cardTitle}>POPULARIDADE</Text>
              <Text style={styles.label}>
                {selectedMovie.popularity.toFixed()}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.card}>
              <Calendar color='#EC8B00' backgroundColor='#16171A' />
              <Text style={styles.cardTitle}>LANÇAMENTO</Text>
              <Text style={styles.label}>
                {selectedMovie.release_date.split('-').reverse().join('/')}
              </Text>
            </View>
            <View style={styles.card}>
              <Bell color='#EC8B00' backgroundColor='#16171A' />
              <Text style={styles.cardTitle}>IDIOMA ORIGINAL</Text>
              <Text style={styles.label}>
                {selectedMovie.original_language.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16171B',
  },
  wrapper: { paddingVertical: 32, paddingHorizontal: 16, gap: 32 },
  section: { gap: 16 },
  title: {
    color: '#fff',
    fontSize: 28,
  },
  poster: {
    width: '100%',
    height: 526,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  card: {
    flex: 1,
    height: 80,
    padding: 8,
    gap: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#2E2F33',
  },
  cardTitle: {
    color: '#EC8B00',
    fontSize: 14,
  },
  label: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
