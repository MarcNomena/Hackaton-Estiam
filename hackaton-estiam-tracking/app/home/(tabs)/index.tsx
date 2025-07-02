import React,{useState} from 'react';
import { View, ScrollView, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import * as Animatable from 'react-native-animatable';
import Header from '@/components/header'

export default function HomeScreen() {



  const users = [
    {
      name: 'hackaton ',
      avatar: 'https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-hackathon-ux-and-ui-flaticons-flat-flat-icons.png',
      isNow:false,
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
      isNow: true,
      startDate: '14:00',
      endDate: '17:30',
      date:'02/06/2025',
      isPresent:false,
      Salle:'Sales V (Jules VERNE)'
      },
    
    ];

    const tomorrow = [{
      name: 'IT-STARTUP ',
      avatar: 'https://img.icons8.com/plasticine/100/rocket.png',
      isNow:false,
      startDate: '09:00',
      endDate: '13:00',
      date:'12/06/2025',
      isPresent:false,
      Salle:'Sales M (Mathilde Dupain)'
    }];


  
  return (
      <ScrollView>
      <View style={styles.container}>
      <Header/>


          <Text style={styles.todayText}>Aujourd'hui</Text>
          <View style={styles.arriveSectionSmall}>
            <Icon
              name="fingerprint"
              type="material"
              color="#1976d2"
              size={20} // smaller icon
              containerStyle={{ marginRight: 6 }}
            />
            <Text style={styles.arriveTextSmall}>Arrivé au campus à 09:15</Text>
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
        <Text style={styles.todayText}>À venir</Text>
                {tomorrow.map((u, i) => (
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
          <Text style={styles.detailText}>Heure passée en salle: - </Text>
          <Text style={[styles.detailText, { color: 'grey' }]}>
           À venir
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
headerShadow: {
  height: 4,
  backgroundColor: '#e0e7ef',
  borderRadius: 2,
  marginBottom: 12,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 3,
  elevation: 3, // for Android
},
roundedIcon: {
  width: 38,
  height: 38,
  borderRadius: 24,
  backgroundColor: '#e0e7ef',
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 3,
  elevation: 3, // Android shadow
  marginRight: 16,
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
  justifyContent: 'space-between',
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
todayText: {
  fontSize: 18,
  fontWeight: 'bold',
  color: 'black',
  marginBottom: 10,
  marginLeft: 8,
},
arriveSectionSmall: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 10,
  backgroundColor: "#f0f6ff",
  paddingVertical: 4,
  paddingHorizontal: 8,
  borderRadius: 8,
  alignSelf: "flex-start",
  justifyContent: "center",
},
arriveTextSmall: {
  fontSize: 13,
  fontWeight: "600",
  color: "#1976d2",
},
});
