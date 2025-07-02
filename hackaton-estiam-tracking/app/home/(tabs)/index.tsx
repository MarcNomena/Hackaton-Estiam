import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import * as Animatable from 'react-native-animatable';

export default function HomeScreen() {

  const users = [
    {
      name: 'hackaton ',
      avatar: 'https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-hackathon-ux-and-ui-flaticons-flat-flat-icons.png',
      isNow:true,
      startDate: '09:00',
      endDate: '13:00',
      date:'03/06/2025',
      isPresent:true,
      Salle:'Sales V (Jules VERNE)',
      totalHour:3.5
    },
    {
      name: 'Hackaton',
      avatar:
        'https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-hackathon-ux-and-ui-flaticons-flat-flat-icons.png',
      isNow: false,
      startDate: '14:00',
      endDate: '17:30',
      date:'02/06/2025',
      isPresent:false,
      Salle:'Sales V (Jules VERNE)'
      },
    
    ];

    const tomorrow = [{
      name: 'IT-STARTUP ',
      avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
      isNow:true,
      startDate: '09:00',
      endDate: '13:00',
      date:'03/06/2025'
    }]
  
  return (

      <ScrollView>
      <View style={styles.container}>
            <View style={styles.userInfoSection}>
              <Icon
                name="person"
                type="material"
                color="#1976d2"
                size={48}
                containerStyle={{ marginRight: 16 }}
              />
              <Text style={styles.welcomeText}>Bienvenue, <Text style={styles.userName}>Jean Dupont</Text></Text>
            </View>

            <View style={styles.arriveSection}>
              <Icon
                name="fingerprint"
                type="material"
                color="#1976d2"
                size={48}
                containerStyle={{ marginRight: 12 }}
              />
              <Text style={styles.arriveText}>Arrivé au campus à 09:15</Text>
            </View>
                {users.map((u, i) => (
      <Card key={i} containerStyle={{ borderRadius: 12, marginBottom: 16, elevation: 3 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
          <Image
            style={styles.avatarLarge}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          />
          <View style={{ marginLeft: 12, flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {u.isNow && (
                <Animatable.View
                  animation="pulse"
                  iterationCount="infinite"
                  duration={1200}
                  style={{ marginRight: 6 }}
                >
                  <Icon
                    name="radio-button-checked"
                    type="material"
                    color="green"
                    size={22}
                  />
                </Animatable.View>
              )}
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{u.name}</Text>
            </View>
            <Text style={{ color: '#555', marginTop: 2 }}>{u.Salle}</Text>
          </View>
        </View>
        <Card.Divider />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
          <Text style={styles.detailText}>Date: {u.date}</Text>
          <Text style={styles.detailText}>Heure: {u.startDate} - {u.endDate}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
          <Text style={styles.detailText}>Heure passée en salle: {u.totalHour ? `${u.totalHour}h` : '-'}</Text>
          <Text style={[styles.detailText, { color: u.isPresent ? 'green' : 'red' }]}>
            {u.isPresent ? 'Présent' : 'Absent'}
          </Text>
        </View>
      </Card>
      ))}
      

      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
container: {
  flex: 1,
},
fonts: {
  marginBottom: 8,
},
user: {
  flexDirection: 'row',
  marginBottom: 6,
},
image: {
  width: 30,
  height: 30,
  marginRight: 10,
},
name: {
  fontSize: 16,
  marginTop: 5,
},
avatarLarge: {
  width: 48,
  height: 48,
  borderRadius: 24,
  borderWidth: 1,
  borderColor: '#eee',
},
detailText: {
  fontSize: 14,
  color: '#333',
},
userInfoSection: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 24,
  marginTop: 16,
  paddingHorizontal: 10,
},
welcomeText: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#222',
},
userName: {
  color: '#1976d2',
},
arriveSection: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 24,
  backgroundColor: "#f0f6ff",
  padding: 18,
  borderRadius: 12,
  alignSelf: "stretch",
  justifyContent: "center",
},
arriveText: {
  fontSize: 22,
  fontWeight: "bold",
  color: "#1976d2",
},
});
