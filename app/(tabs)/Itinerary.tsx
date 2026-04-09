import { StyleSheet, Text, View } from 'react-native';

export default function ItineraryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Itinerarry</Text>
      <Text style={styles.subtitle}>Your trip details will appear here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ece4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a3c5e',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  },
});