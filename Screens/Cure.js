import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

function Cure({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.thor}>
                <View style={styles.image}>
                    <Text style={{ fontSize: 30, color: '#5e5d5d', fontWeight: 'bold', letterSpacing: 0.5 }}>Corona Virus Symptoms</Text>
                    <Image
                        source={require('../corona/symptoms.jpg')}
                        style={styles.thorImage}
                    />
                </View>
                {/* <View style={styles.thorTitle}>
                <Text style={styles.title}></Text>
            </View> */}
            </View>
            <View style={styles.thor}>
                <View style={styles.image}>
                    <Text style={{ fontSize: 30, color: '#5e5d5d', fontWeight: 'bold', letterSpacing: 0.5 }}>Precautions</Text>
                    <Image
                        source={require('../corona/precautions.jpg')}
                        // style={styles.thorImage}
                        style={{ resizeMode: 'stretch', height: '80%', width: '100%' }}
                    />
                </View>
                {/* <View style={styles.thorTitle}>
            <Text style={styles.title}></Text>
        </View> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    thor: {
        backgroundColor: 'white',
        height: '35%',
        alignItems: "center",
        margin: 20,
        marginBottom: '10%',
        borderRadius: 10,
        shadowColor: 'gray',
        elevation: 15,
    },
    image: {
        alignItems: "center",
        width: '100%',
        height: '85%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden",
    },
    thorImage: {
        height: '100%',
        // top: '20%',
        width: '100%'
    },
    thorTitle: {
        height: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5
    },
    title: {
        fontFamily: 'sans-serif',
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 0.5
    }
});

export default Cure;