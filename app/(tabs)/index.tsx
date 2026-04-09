import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>TODAY – Florence</Text>
      
      <View style={styles.widget}>
        <Text style={styles.widgetTitle}>Weather</Text>
        <Text style={styles.widgetContent}>72°F – Rain expected at 4 PM</Text>
      </View>

      <View style={styles.widget}>
        <Text style={styles.widgetTitle}>Next Activity</Text>
        <Text style={styles.widgetContent}>Uffizi Gallery – 2:00 PM</Text>
      </View>

      <View style={styles.widget}>
        <Text style={styles.widgetTitle}>Advisor Tip</Text>
        <Text style={styles.widgetContent}>Arrive 15 minutes early for your tour</Text>
      </View>

      <View style={styles.widget}>
        <Text style={styles.widgetTitle}>Phrase of the Day</Text>
        <Text style={styles.widgetContent}>"Dov'è il bagno?"</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f0eb',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 20,
    color: '#2c2c2c',
  },
  widget: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  widgetTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#888',
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  widgetContent: {
    fontSize: 18,
    color: '#2c2c2c',
  },
});