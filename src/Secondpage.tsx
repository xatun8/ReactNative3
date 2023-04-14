import React from "react";
import { Image, StyleSheet, SafeAreaView,Text, TouchableOpacity} from "react-native";
const Secondpage = () => {
  return (
  <SafeAreaView>
<Image source={require('./saat.png')}
  style={styles.saat} />
<Image source={require('./signal.png')}
  style={styles.signal} />
<Image source={require('./Wifi.png')}
  style={styles.Wifi} />
<Image source={require('./Battery.png')}
  style={styles.Battery} />
   <TouchableOpacity style = {styles.button}>
<Image source={require('./isare.png')}
  style={styles.isare} />
   </TouchableOpacity>
<Text style={styles.text}>Credit / Debit Card</Text>
<Image source={require('./kart.png')}
  style={styles.kart} />
   <TouchableOpacity style = {styles.button}>
<Image source={require('./kamera.png')}
  style={styles.kamera} />
   </TouchableOpacity>
<Text style={styles.text1}>Name on card</Text>
<Image source={require('./bosluq.png')}
  style={styles.bosluq} />
<Text style={styles.text2}>Leslee Harron</Text>
<Text style={styles.text3}>Card number</Text>
<Image source={require('./bosluq.png')}
  style={styles.bosluq} />
<Text style={styles.text4}>4242 4242 4242 4242</Text>
<Text style={styles.text5}>Expiry date</Text>
<Image source={require('./bosluq1.png')}
  style={styles.bosluq1} />
<Text style={styles.text6}>04/22</Text>
<Text style={styles.text7}>CVC</Text>
<Image source={require('./bosluq1.png')}
  style={styles.bosluq2} />
<Text style={styles.text8}>474</Text>
<Image source={require('./Hint.png')}
  style={styles.Hint} />
   <TouchableOpacity style = {styles.newbutton}>
<Text style={styles.text9}>Use this card</Text>
   </TouchableOpacity>
  </SafeAreaView>
  );
};
const styles=StyleSheet.create({
saat:{
    marginLeft: 20,
    marginTop: 20,
},
signal:{
    marginLeft: 320,
    bottom: 12,
},
Wifi:{
    marginLeft: 345,
    bottom: 24,
},
Battery:{
    marginLeft: 370,
    bottom: 36,
},
isare:{
    width: 30,
    height: 30,
    bottom: 10,
    marginLeft: 30,
},
text:{
    color:  '#07122A',
    left: 80,
    fontSize: 20,
    fontWeight: 'bold',
    bottom: 40,
},
kart:{
    marginTop: 20,
    width: 350,
    left: 35,
    borderRadius: 15,
    bottom: 50,
},
kamera:{
    left: 190,   
    bottom: 80,
},
text1:{
    left:20,
    bottom: 70,
},
bosluq:{
    left: 20,
    bottom: 70,
},
text2:{
    color:'#0B152D',
    left: 40,
    bottom: 105,
    fontSize: 20,
    fontWeight: '600',
},
text3:{
    left: 20,
    bottom: 70,
},
text4:{
    color:'#0B152D',
    left: 40,
    bottom: 105,
    fontSize: 20,
    fontWeight: '600',
},  
text5:{
    bottom: 80,
    left: 20,
},
bosluq1:{
    bottom:  80,
    left: 20,
},
bosluq2:{
    bottom: 165,
    left: 200,
},
text6:{
    color: '#0B152D',
    fontWeight: 'bold',
    fontSize: 15,
    bottom: 110,
    left:50,
},
text7:{
    bottom: 165,
    left: 200,
},
text8:{
    color: '#0B152D',
    fontWeight: 'bold',
    bottom: 200,
    left: 220,
},
Hint:{
    bottom: 220,
    left: 310,
},
newbutton:{
    backgroundColor: '#07122A',
    bottom: 150,
    alignItems: 'center',
    marginHorizontal: 60,
    borderRadius: 7,
    height: 45,
},
text9:{   
   color: 'white',
   top: 15,
},
})
export default Secondpage;