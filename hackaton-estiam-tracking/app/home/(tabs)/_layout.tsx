import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home',headerShown:false }} />
      <Tabs.Screen name="result" options={{ title: 'Result' }} />
      <Tabs.Screen name="calendar" options={{ title: 'Calendar' }} />
    </Tabs>
  );
}