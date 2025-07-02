import React,{useState} from 'react';
import { View, ScrollView, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';


export default function Header ()
{
    const [modalVisible, setModalVisible] = useState(false);
    const notifications = [
  {
    id: 1,
    date: '02/07/2025 09:15',
    message: "Votre présence a bien été enregistrée.",
  },
  {
    id: 2,
    date: '02/06/2025 13:45',
    message: "Le cours Hackaton va commencer dans 15mn. On compte sur toi soldat!!",
  },
];
  
    return (    
        <View>
            <View style={styles.userInfoSection}>

              <View style={styles.roundedIcon}>
              <Icon
                name="person"
                type="material"
                color="#1976d2"
                size={32}
                containerStyle={{ marginRight: 0 }}
              />
              </View>

              <Text style={styles.welcomeText}>Bienvenue, <Text style={styles.userName}>Jean Dupont</Text></Text>
            <TouchableOpacity
            style={{ position: 'relative', marginLeft: 16 }}
            onPress={() => setModalVisible(true)}
            >
              <View style={{ position: 'relative', marginLeft: 16 }}>
              <Icon
                name="notifications"
                type="material"
                color="#FFD600" // yellow
                size={32}
              />
              <View
                style={{
                  position: 'absolute',
                  top: -4,
                  right: -4,
                  backgroundColor: '#FF5252',
                  borderRadius: 8,
                  minWidth: 16,
                  height: 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 2,
                }}
              >
                <Text style={{ color: 'white', fontSize: 11, fontWeight: 'bold' }}>2</Text>
              </View>
            </View>
              </TouchableOpacity>
            </View>
           <View style={styles.headerShadow} />

          <Modal
            visible={modalVisible}
            transparent
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.3)',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <View style={{
                backgroundColor: '#fff',
                borderRadius: 16,
                padding: 24,
                minWidth: 300,
                maxWidth: 340,
                alignItems: 'center'
              }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 18 }}>Notifications</Text>
                {notifications.map((notif) => (
                  <View
                    key={notif.id}
                    style={{
                      backgroundColor: '#f0f6ff',
                      borderRadius: 10,
                      padding: 14,
                      marginBottom: 12,
                      width: 260,
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.08,
                      shadowRadius: 2,
                      elevation: 2,
                    }}
                  >
                    <Text style={{ color: '#1976d2', fontWeight: 'bold', fontSize: 13, marginBottom: 4 }}>
                      {notif.date}
                    </Text>
                    <Text style={{ color: '#222', fontSize: 15 }}>{notif.message}</Text>
                  </View>
                ))}
                <Button title="Fermer" onPress={() => setModalVisible(false)} />
              </View>
            </View>
          </Modal>

        </View>
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
