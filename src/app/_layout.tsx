import { Stack } from 'expo-router';
import { SafeAreaView, StatusBar } from 'react-native';
import 'react-native-reanimated';

import { AppProvider } from '@/contexts';

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  return (
    <AppProvider>
      <StatusBar backgroundColor='#16171B' />
      <SafeAreaView style={{ flex: 1 }}>
        <Stack initialRouteName='signIn'>
          <Stack.Screen name='signIn' options={{ headerShown: false }} />
          <Stack.Screen name='(app)' options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </AppProvider>
  );
}
