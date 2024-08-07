import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { AppProvider } from '@/contexts';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  return (
    <AppProvider>
      <StatusBar style='light' />
      <SafeAreaView style={{ flex: 1 }}>
        <Stack initialRouteName='signIn'>
          <Stack.Screen name='signIn' options={{ headerShown: false }} />
          <Stack.Screen name='(app)' options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </AppProvider>
  );
}
