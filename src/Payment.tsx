import React from "react";
import { Image, StyleSheet, SafeAreaView, Text, TouchableOpacity, View, TextInput } from "react-native";
const Payment = () => {
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <TouchableOpacity >
                    <Image source={require('./isare.png')}
                        style={styles.isare} />
                </TouchableOpacity>
                <Text style={styles.text}>Credit / Debit Card</Text>
            </View>

            <View>
                <Image source={require('./kart.png')}
                    style={styles.kart} /></View>

            <View style={styles.kamera}>
                <TouchableOpacity >
                    <Image source={require('./kamera.png')}
                        style={styles.kamera} />
                </TouchableOpacity>
            </View>

            <View style={{ gap: 5 }}>
                <Text style={styles.text1}>Name on card</Text>
                <TextInput style={{ borderWidth: 1, width: 327, height: 48, borderRadius: 8, fontSize: 17, fontWeight: '500', paddingLeft: 20, }}>Leslee Harron</TextInput>
                <Text style={styles.text3}>Card number</Text>
                <TextInput style={{ borderWidth: 1, width: 327, height: 48, borderRadius: 8, fontSize: 17, fontWeight: '500', paddingLeft: 20, }}>4242 4242 4242 4242</TextInput>
                <Text style={styles.text5}>Expiry date                            CVC</Text>


                <View style={styles.title}>
                    <Text style={styles.text6}>04/22</Text>
                    <Text style={styles.text6}>474</Text>
                </View>

                <Image source={require('./Hint.png')}
                    style={styles.Hint} />
            </View>

            <TouchableOpacity style={styles.newbutton}>
                <Text style={styles.text9}>Use this card</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
        backgroundColor: '#E5E5E5',
    },
    button: {
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    isare: {
        borderRadius: 8,
        width: 42,
        height: 42,
    },
    text: {
        color: '#07122A',
        fontSize: 22,
        fontWeight: '600',
    },
    kart: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    kamera: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        fontSize: 14,
        color: '#8698A8',
        fontWeight: '400',

    },
    text3: {
        fontSize: 14,
        color: '#8698A8',
        fontWeight: '400',
    },
    text5: {
        fontSize: 14,
        color: '#8698A8',
        fontWeight: '400',
    },
    title: {
        flexDirection: 'row',
        gap: 10,
    },
    text6: {
        color: '#000000',
        borderWidth: 1,
        width: 154,
        height: 48,
        borderRadius: 8,
        fontSize: 17,
        fontWeight: '500',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    Hint: {
        left: 280,
        marginTop: -40,
    },
    newbutton: {
        backgroundColor: '#07122A',
        width: 284,
        height: 58,
        borderRadius: 7,
        marginLeft: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    text9: {
        color: 'white',
    },
})
export default Payment;