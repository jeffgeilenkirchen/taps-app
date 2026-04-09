import { ScrollView, StyleSheet, Text, View } from 'react-native';

const today = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  month: 'long', 
  day: 'numeric' 
});

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.dateText}>{today}</Text>
        <Text style={styles.cityText}>Florence, Italy</Text>
        <Text style={styles.tagline}>Day 4 of 11</Text>
      </View>

      {/* Weather Widget */}
      <View style={[styles.widget, styles.weatherWidget]}>
        <Text style={styles.widgetLabel}>WEATHER</Text>
        <Text style={styles.weatherTemp}>72°F</Text>
        <Text style={styles.widgetContent}>Rain expected at 4:00 PM</Text>
      </View>

      {/* Next Activity Widget */}
      <View style={[styles.widget, styles.activityWidget]}>
        <Text style={styles.widgetLabel}>NEXT ACTIVITY</Text>
        <Text style={styles.activityTitle}>Uffizi Gallery Tour</Text>
        <Text style={styles.widgetContent}>2:00 PM · Via dei Castellani 1</Text>
        <View style={styles.reminderBadge}>
          <Text style={styles.reminderText}>Starts in 2 hours</Text>
        </View>
      </View>

      {/* Advisor Tip Widget */}
      <View style={[styles.widget, styles.advisorWidget]}>
        <Text style={styles.widgetLabel}>FROM YOUR ADVISOR</Text>
        <Text style={styles.widgetContent}>Arrive 15 minutes early for your tour — the entrance can get busy.</Text>
      </View>

      {/* Phrase of the Day Widget */}
      <View style={[styles.widget, styles.phraseWidget]}>
        <Text style={styles.widgetLabel}>PHRASE OF THE DAY</Text>
        <Text style={styles.phraseText}>"Dov'è il bagno?"</Text>
        <Text style={styles.phraseTranslation}>Where is the bathroom?</Text>
      </View>

      {/* Local Tip Widget */}
      <View style={[styles.widget, styles.tipWidget]}>
        <Text style={styles.widgetLabel}>LOCAL TIP</Text>
        <Text style={styles.widgetContent}>The best gelato near the Uffizi is at Gelateria dei Neri — skip the tourist spots on the main piazza.</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ece4',
  },
  header: {
    backgroundColor: '#1a3c5e',
    padding: 30,
    paddingTop: 70,
    paddingBottom: 30,
  },
  dateText: {
    color: '#a8c4e0',
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  cityText: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tagline: {
    color: '#a8c4e0',
    fontSize: 15,
  },
  widget: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  weatherWidget: {
    backgroundColor: '#1a3c5e',
  },
  activityWidget: {
    borderLeftWidth: 4,
    borderLeftColor: '#e8825a',
  },
  advisorWidget: {
    borderLeftWidth: 4,
    borderLeftColor: '#5a9e6f',
  },
  phraseWidget: {
    backgroundColor: '#fff8f0',
  },
  tipWidget: {
    marginBottom: 30,
  },
  widgetLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: '#999',
    marginBottom: 8,
  },
  weatherTemp: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  widgetContent: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
  activityTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  reminderBadge: {
    backgroundColor: '#fff0eb',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  reminderText: {
    color: '#e8825a',
    fontSize: 13,
    fontWeight: '600',
  },
  phraseText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  phraseTranslation: {
    fontSize: 15,
    color: '#888',
    fontStyle: 'italic',
  },
});