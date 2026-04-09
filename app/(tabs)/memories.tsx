import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const memoriesData = [
  {
    day: 'Day 1',
    date: 'April 7',
    memories: [
      { type: 'photo', time: '3:24 PM', caption: 'View from Hotel Lungarno', location: 'Florence' },
      { type: 'voice', time: '7:45 PM', caption: 'Best pasta I\'ve ever had', location: 'Osteria Santo Spirito' },
    ],
  },
  {
    day: 'Day 2',
    date: 'April 8',
    memories: [
      { type: 'photo', time: '9:45 AM', caption: 'Michelangelo\'s David', location: 'Accademia Gallery' },
      { type: 'photo', time: '1:30 PM', caption: 'Lunch at the market', location: 'Mercato Centrale' },
      { type: 'voice', time: '4:15 PM', caption: 'The streets here are incredible', location: 'Oltrarno' },
      { type: 'photo', time: '6:00 PM', caption: 'Sunset over Ponte Vecchio', location: 'Arno River' },
    ],
  },
];

export default function MemoriesScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerLabel}>TRIP MEMORIES</Text>
        <Text style={styles.headerTitle}>Florence, Italy</Text>
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Photos</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statNumber}>9</Text>
            <Text style={styles.statLabel}>Voice Memories</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Days</Text>
          </View>
        </View>
      </View>

      {/* Capture Button */}
      <TouchableOpacity style={styles.captureButton}>
        <Text style={styles.captureButtonText}>+ Capture a Memory</Text>
      </TouchableOpacity>

      {/* Memories by Day */}
      {memoriesData.map((day, dayIndex) => (
        <View key={dayIndex} style={styles.daySection}>
          <View style={styles.dayHeader}>
            <Text style={styles.dayLabel}>{day.day}</Text>
            <Text style={styles.dayDate}>{day.date}</Text>
          </View>

          {day.memories.map((memory, memIndex) => (
            <View key={memIndex} style={styles.memoryCard}>
              <View style={[styles.memoryIcon, memory.type === 'voice' ? styles.voiceIcon : styles.photoIcon]}>
                <Text style={styles.memoryIconText}>
                  {memory.type === 'voice' ? '🎤' : '📷'}
                </Text>
              </View>
              <View style={styles.memoryDetails}>
                <Text style={styles.memoryCaption}>{memory.caption}</Text>
                <Text style={styles.memoryMeta}>📍 {memory.location} · {memory.time}</Text>
              </View>
              <View style={[styles.typeBadge, memory.type === 'voice' ? styles.voiceBadge : styles.photoBadge]}>
                <Text style={styles.typeBadgeText}>
                  {memory.type === 'voice' ? 'Voice' : 'Photo'}
                </Text>
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
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#a8c4e0',
    fontSize: 12,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#2d5a8a',
  },
  captureButton: {
    backgroundColor: '#e8825a',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  captureButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  daySection: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
  memoryCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  memoryIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  photoIcon: {
    backgroundColor: '#fff0eb',
  },
  voiceIcon: {
    backgroundColor: '#ebf5ff',
  },
  memoryIconText: {
    fontSize: 20,
  },
  memoryDetails: {
    flex: 1,
  },
  memoryCaption: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  memoryMeta: {
    fontSize: 12,
    color: '#888',
  },
  typeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  photoBadge: {
    backgroundColor: '#fff0eb',
  },
  voiceBadge: {
    backgroundColor: '#ebf5ff',
  },
  typeBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
});