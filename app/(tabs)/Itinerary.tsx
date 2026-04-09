import { ScrollView, StyleSheet, Text, View } from 'react-native';

const itineraryData = [
  {
    day: 'Day 1',
    date: 'Monday, April 7',
    activities: [
      { time: '2:00 PM', title: 'Check in to Hotel Lungarno', location: 'Borgo San Jacopo 14, Florence', note: 'Ask for a river view room' },
      { time: '7:00 PM', title: 'Welcome Dinner', location: 'Osteria Santo Spirito', note: 'Reservation under Johnson' },
    ],
  },
  {
    day: 'Day 2',
    date: 'Tuesday, April 8',
    activities: [
      { time: '9:00 AM', title: 'Accademia Gallery', location: 'Via Ricasoli 58', note: 'See Michelangelo\'s David' },
      { time: '1:00 PM', title: 'Lunch at Mercato Centrale', location: 'Piazza del Mercato Centrale', note: 'Try the lampredotto' },
      { time: '3:00 PM', title: 'Walking Tour of Oltrarno', location: 'Meet at Ponte Vecchio', note: 'Wear comfortable shoes' },
    ],
  },
  {
    day: 'Day 3',
    date: 'Wednesday, April 9',
    activities: [
      { time: '10:00 AM', title: 'Uffizi Gallery Tour', location: 'Via dei Castellani 1', note: 'Arrive 15 minutes early' },
      { time: '3:00 PM', title: 'Boboli Gardens', location: 'Piazza Pitti 1', note: 'Bring water' },
      { time: '7:30 PM', title: 'Farewell Dinner', location: 'Buca Mario', note: 'Oldest restaurant in Florence' },
    ],
  },
];

export default function ItineraryScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerLabel}>YOUR TRIP</Text>
        <Text style={styles.headerTitle}>Florence, Italy</Text>
        <Text style={styles.headerSubtitle}>April 7 – 17 · 11 Days</Text>
      </View>

      {/* Days */}
      {itineraryData.map((day, dayIndex) => (
        <View key={dayIndex} style={styles.daySection}>
          <View style={styles.dayHeader}>
            <Text style={styles.dayLabel}>{day.day}</Text>
            <Text style={styles.dayDate}>{day.date}</Text>
          </View>

          {day.activities.map((activity, actIndex) => (
            <View key={actIndex} style={styles.activityCard}>
              <View style={styles.timeColumn}>
                <Text style={styles.timeText}>{activity.time}</Text>
                {actIndex < day.activities.length - 1 && (
                  <View style={styles.timeLine} />
                )}
              </View>
              <View style={styles.activityDetails}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityLocation}>📍 {activity.location}</Text>
                {activity.note && (
                  <Text style={styles.activityNote}>💡 {activity.note}</Text>
                )}
              </View>
            </View>
          ))}
        </View>
      ))}

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
  headerLabel: {
    color: '#a8c4e0',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 6,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  headerSubtitle: {
    color: '#a8c4e0',
    fontSize: 15,
  },
  daySection: {
    marginTop: 24,
    marginHorizontal: 16,
  },
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dayLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1a3c5e',
    backgroundColor: '#d8e8f5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 10,
  },
  dayDate: {
    fontSize: 13,
    color: '#888',
  },
  activityCard: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  timeColumn: {
    width: 70,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#888',
    marginTop: 4,
  },
  timeLine: {
    width: 1,
    flex: 1,
    backgroundColor: '#ddd',
    marginTop: 6,
    marginBottom: -8,
  },
  activityDetails: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    marginLeft: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  activityLocation: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
  },
  activityNote: {
    fontSize: 13,
    color: '#888',
    fontStyle: 'italic',
  },
});