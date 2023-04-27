import React from "react";
import { Image, StyleSheet, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
const Popup = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./qiz.png')}
        style={styles.qiz} />
      <View style={styles.textcontainer}>
        <Text style={styles.text}>Hey Leslee,{'\n'}there's a new course about{'\n'} Figma</Text>
        <View style={styles.text1container}>
          <Text style={styles.text1}>Find our how new our matching tool{'\n'} can help you learn another way </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text3}>Discover the course</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={styles.text4}>Not now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textcontainer: {
    justifyContent: 'center',
    gap: 15,
    alignItems: 'center',
  },
  text1container: {
    justifyContent: 'center',
    gap: 50,
    alignItems: 'center',
  },
  qiz: {
    width: 250,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#07122A',
    fontWeight: "bold",
    fontSize: 25,
    textAlign: 'center'
  },
  text1: {
    color: '#4F4F4F',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#07122A',
    alignItems: 'center',
    borderRadius: 7,
    height: 58,
    width: 284,
  },
  text3: {
    color: '#FFFFFF',
    padding: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  text4: {
    color: '#BDBDBD',
    fontSize: 15,
  },
})
export default Popup;