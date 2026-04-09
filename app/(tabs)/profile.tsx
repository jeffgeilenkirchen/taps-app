import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>SJ</Text>
        </View>
        <Text style={styles.travelerName}>Sarah Johnson</Text>
        <Text style={styles.travelerTrip}>Florence, Italy · Day 4 of 11</Text>
      </View>

      {/* Trip Stats */}
      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>24</Text>
          <Text style={styles.statLabel}>Places</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.stat}>
          <Text style={styles.statNumber}>312</Text>
          <Text style={styles.statLabel}>Photos</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.stat}>
          <Text style={styles.statNumber}>9</Text>
          <Text style={styles.statLabel}>Memories</Text>
        </View>
      </View>

      {/* Travel Advisor */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>YOUR TRAVEL ADVISOR</Text>
        <View style={styles.advisorCard}>
          <View style={styles.advisorAvatar}>
            <Text style={styles.advisorAvatarText}>JM</Text>
          </View>
          <View style={styles.advisorInfo}>
            <Text style={styles.advisorName}>Jennifer Martinez</Text>
            <Text style={styles.advisorAgency}>Activated Pursuits Travel</Text>
          </View>
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.messageButtonText}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Emergency Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EMERGENCY INFORMATION</Text>
        <View style={styles.emergencyCard}>
          <View style={styles.emergencyRow}>
            <Text style={styles.emergencyLabel}>Blood Type</Text>
            <Text style={styles.emergencyValue}>O-</Text>
          </View>
          <View style={styles.emergencyDivider} />
          <View style={styles.emergencyRow}>
            <Text style={styles.emergencyLabel}>Allergies</Text>
            <Text style={styles.emergencyValue}>Penicillin</Text>
          </View>
          <View style={styles.emergencyDivider} />
          <View style={styles.emergencyRow}>
            <Text style={styles.emergencyLabel}>Medication</Text>
            <Text style={styles.emergencyValue}>Albuterol inhaler</Text>
          </View>
          <View style={styles.emergencyDivider} />
          <View style={styles.emergencyRow}>
            <Text style={styles.emergencyLabel}>Emergency Contact</Text>
            <Text style={styles.emergencyValue}>Mark Johnson</Text>
          </View>
          <View style={styles.emergencyDivider} />
          <View style={styles.emergencyRow}>
            <Text style={styles.emergencyLabel}>Insurance</Text>
            <Text style={styles.emergencyValue}>Allianz Travel</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.emergencyButton}>
          <Text style={styles.emergencyButtonText}>🚨 Emergency Services</Text>
        </TouchableOpacity>
      </View>

      {/* Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SETTINGS</Text>
        <View style={styles.settingsCard}>
          {['Notifications', 'Dashboard Widgets', 'Privacy', 'Help & Support', 'Sign Out'].map((item, index, arr) => (
            <View key={index}>
              <TouchableOpacity style={styles.settingsRow}>
                <Text style={styles.settingsLabel}>{item}</Text>
                <Text style={styles.settingsArrow}>›</Text>
              </TouchableOpacity>
              {index < arr.length - 1 && <View style={styles.settingsDivider} />}
            </View>
          ))}
        </View>
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
    alignItems: 'center',
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e8825a',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  travelerName: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  travelerTrip: {
    color: '#a8c4e0',
    fontSize: 14,
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a3c5e',
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#eee',
  },
  section: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: '#999',
    marginBottom: 10,
  },
  advisorCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  advisorAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1a3c5e',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  advisorAvatarText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  advisorInfo: {
    flex: 1,
  },
  advisorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  advisorAgency: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  messageButton: {
    backgroundColor: '#1a3c5e',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  messageButtonText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
  },
  emergencyCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 12,
  },
  emergencyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  emergencyLabel: {
    fontSize: 14,
    color: '#888',
  },
  emergencyValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  emergencyDivider: {
    height: 1,
    backgroundColor: '#f0f0f0',
  },
  emergencyButton: {
    backgroundColor: '#d63031',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  emergencyButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  settingsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 16,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  settingsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  settingsLabel: {
    fontSize: 16,
    color: '#1a1a1a',
  },
  settingsArrow: {
    fontSize: 20,
    color: '#ccc',
  },
  settingsDivider: {
    height: 1,
    backgroundColor: '#f0f0f0',
  },
});