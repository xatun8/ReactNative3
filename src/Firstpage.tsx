import React from "react";
import { Image, StyleSheet, SafeAreaView,Text, TouchableOpacity} from "react-native";
const Firstpage = () => {
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
<Image source={require('./qiz.png')}
  style={styles.qiz} />
<Text style={styles.text}>Hey Leslee,                 there's a new course about Figma</Text>
<Text style={styles.text1}>                   Find our how new our matching tool can help you learn another way </Text>

   <TouchableOpacity style = {styles.button}>
<Text style={styles.text3}>Discover the course</Text>
   </TouchableOpacity>
   <TouchableOpacity >
<Text style={styles.text4}>Not now</Text>
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
qiz:{
    height: 376,
    width: 278,
    marginLeft: 70,
    marginTop: 20,
},
text:{
    color: '#07122A',
    height: 100,
    width: 310,
    marginLeft: 55,
    fontSize: 25,
    fontWeight: 'bold', 
    bottom: 15,
    textAlign: 'center',
},
text1:{
    color: '#4F4F4F',
    height: 50,
    weigh: 200,
    right: 30,
    fontSize: 18,
    fontWeight: '300', 
    textAlign: 'center',
    bottom: 16,
},
button:{
   backgroundColor: '#07122A',
   borderRadius: 7,
   alignItems: 'center',
   marginHorizontal: 60,
   height: 55,
   marginTop: 40,
},
text3:{
   color: '#FFFFFF',
   padding: 15,
}, 
text4:{
    color: '#BDBDBD',
    marginTop: 20,
    marginLeft: 180,
    alignItems: 'center',
},
})
export default Firstpage;