import { Stack } from 'expo-router';
import 'react-native-reanimated';

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {

  return (
      <Stack initialRouteName='signIn'>
        <Stack.Screen name='signIn' options={{ headerShown: false }} />
        <Stack.Screen name='(app)' options={{ headerShown: false }} />
      </Stack>
  );
}
