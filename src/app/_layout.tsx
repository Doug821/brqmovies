import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import 'react-native-reanimated';

import { AppProvider } from '@/contexts';

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  return (
    <AppProvider>
        <StatusBar backgroundColor='#16171B' barStyle={'light-content'} />
        <Stack initialRouteName='(app)'>
          <Stack.Screen name='signIn' options={{ headerShown: false }} />
          <Stack.Screen name='(app)' options={{ headerShown: false }} />
        </Stack>
    </AppProvider>
  );
}
