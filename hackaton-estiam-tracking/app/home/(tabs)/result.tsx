import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '@/components/header';
import { Card, Text, Icon, Button } from '@rneui/themed';
import { useState,useCallback,useEffect } from 'react';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';

export default function HomeScreen() {
  const roomList = ['Salle V (Jules VERNE)', 'Salle C (Jean-Claude)','Salle D (Van Damme)'];
   const [history, setHistory] = useState([
    
  ]);

  const [room, setRoom] = useState('Introuvable...');
  const [bluetooth, setBluetooth] = useState(false);
  const [scan, setScan] = useState(false);
  const [isInClass,setIsInClass]= useState(false);
  const [now, setNow] = useState(new Date());
  const [proccessing,setProcessing] =useState(false);
  const formattedNow = now.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
     if(proccessing==false && bluetooth==true && scan==true)
      simulation();
}, [proccessing,bluetooth,scan]);

  const handleInClass = useCallback(() => {
    setIsInClass(!isInClass);
}, [isInClass,room]); 

  const handleSimulerEntree= async (index:Int32)=>{
    setRoom(roomList[index]);
    handleInClass();

    const nowTime = new Date();
    const formatted = nowTime.toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      setHistory(prev => [
        {
          type: 'entrée',
          room: roomList[index],
          datetime: formatted,
          duration: Math.floor(Math.random() * 120) + 1, // random duration for demo
        },
        ...prev,
      ]);
  }

  // Utility sleep function
function sleep(ms:any) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

  const handleSimulerSortie= async (index:Int32) => {
        const nowTime = new Date();
        const formatted = nowTime.toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      setHistory(prev => [
        {
          type: 'sortie',
          room: roomList[index],
          datetime: formatted,
          duration: Math.floor(Math.random() * 120) + 1, // random duration for demo
        },
        ...prev,
      ]);

          setRoom('Introuvable...');
          handleInClass();
  }

  const simulation = async()=>{
    setProcessing(true);
    for (let index = 0; index < roomList.length; index++) {
     await handleSimulerEntree(index);
      const item = roomList[index];
      let rssiVariation = Math.random() * 5;

      while (rssiVariation < 7) {
        console.log('Salle detecté :' + item + ' avec une signale de rssi de :' + rssiVariation);
        rssiVariation = Math.random() * 10;
        await sleep(3000); 
      }
      console.log('Sortie de la salle :' + item + ' avec une signale de rssi de :' + rssiVariation);
       await handleSimulerSortie(index);
       await sleep(3000); 
  }
  setProcessing(false);
}

  return (
    <ScrollView>
      <Header/>
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <Text style={styles.cardTitle}>Etat de l'appareil</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="clock-outline" type="material-community" color="#1976d2" size={18} style={{ marginRight: 4 }} />
            <Text style={styles.cardDatetime}>{formattedNow}</Text>
          </View>
        </View>
          <View style={styles.row}>
            <Icon
              name="room"
              type="material"
              color="#1976d2"
              size={28}
              containerStyle={{ marginRight: 10 }}
            />
            <Text style={styles.roomName}>{room}</Text>
          </View>
          <View style={styles.row}>
            <Icon
              name="bluetooth"
              type="material"
              color={bluetooth ? "#4caf50" : "#bdbdbd"}
              size={24}
              containerStyle={{ marginRight: 8 }}
            />
            <Text style={{ color: bluetooth ? "#4caf50" : "#bdbdbd", fontWeight: 'bold' }}>
              Bluetooth {bluetooth ? "actif" : "inactif"}
            </Text>
            <Button
              title={bluetooth ? "Désactiver" : "Activer"}
              type="outline"
              buttonStyle={{ marginLeft: 12, borderColor: bluetooth ? "#4caf50" : "#bdbdbd" }}
              titleStyle={{ color: bluetooth ? "#4caf50" : "#bdbdbd", fontSize: 12 }}
              onPress={() =>{ setBluetooth(!bluetooth); setScan(false) }}
            />
          </View>
          <View style={styles.row}>
            <Icon
              name="search"
              type="material"
              color={scan ? "#1976d2" : "#bdbdbd"}
              size={24}
              containerStyle={{ marginRight: 8 }}
            />
            <Text style={{ color: scan ? "#1976d2" : "#bdbdbd", fontWeight: 'bold' }}>
              {scan ? "Recherche d'appareils activé " : "Recherche arrêtée"}
            </Text>
          {(bluetooth==true && <Button
              title={scan ? "Arrêter" : "Scanner"}
              type="outline"
              buttonStyle={{ marginLeft: 12, borderColor: scan ? "#1976d2" : "#bdbdbd" }}
              titleStyle={{ color: scan ? "#1976d2" : "#bdbdbd", fontSize: 12 }}
              onPress={() => setScan(!scan)}
            />)}
          </View>
        </Card>


  {  scan==true &&      <Card containerStyle={styles.card}>
          <Text style={styles.cardTitle}>Simulation de présence</Text>
          <View style={[styles.row, { justifyContent: 'space-around' }]}>
            
           {isInClass==false && <Button
              icon={
                <Icon
                  name="door-open"
                  type="material-community"
                  color="#fff"
                  size={22}
                  style={{ marginRight: 8 }}
                />
              }
              title="Simuler Entrée"
              buttonStyle={{ backgroundColor: "#4caf50", borderRadius: 8, paddingHorizontal: 16 }}
              titleStyle={{ fontWeight: 'bold', fontSize: 15 }}
                onPress={()=>setProcessing(true)}
            />
            
            //            <Button
            //   icon={
            //     <Icon
            //       name="logout"
            //       type="material-community"
            //       color="#fff"
            //       size={22}
            //       style={{ marginRight: 8 }}
            //     />
            //   }
            //   title="Simuler Sortie"
            //   buttonStyle={{ backgroundColor: "#f44336", borderRadius: 8, paddingHorizontal: 16 }}
            //   titleStyle={{ fontWeight: 'bold', fontSize: 15 }}
            //   // onPress={handleSimulerSortie}
            // />
            }
 
          </View>
        </Card>}

            <Card containerStyle={styles.card}>
          <Text style={styles.cardTitle}>Historique des présences</Text>
          {history.map((item, idx) => (
            <View key={idx} style={styles.historyRow}>
              <Icon
                name={item.type === 'entrée' ? 'login' : 'logout'}
                type="material-community"
                color={item.type === 'entrée' ? '#4caf50' : '#f44336'}
                size={22}
                containerStyle={{ marginRight: 10 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: 'bold', color: '#222' }}>
                  {item.type === 'entrée' ? 'Entrée' : 'Sortie'} - {item.room}
                </Text>
                <Text style={{ color: '#555', fontSize: 13 }}>
                  {item.datetime}
                  {item.type === 'entrée' && item.duration > 0
                    ? `  •  ${item.duration} min`
                    : ''}
                </Text>
              </View>
            </View>
          ))}
        </Card>

      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardDatetime: {
  fontSize: 13,
  color: '#1976d2',
  fontWeight: '600',
  marginLeft: 4,
  marginTop:2
},
  historyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f6f8fa',
    borderRadius: 8,
    padding: 8,
  },
  card: {
    borderRadius: 14,
    padding: 18,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 14,
    color: '#1976d2',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  roomName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
});