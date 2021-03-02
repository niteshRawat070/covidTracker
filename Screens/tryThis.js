import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import Constants from "expo-constants";


function tryThis({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Cases World Wide")} activeOpacity={0.7} style={styles.thor} >
                <View style={styles.image}>
                    <Image
                        source={require('../corona/world.jpg')}
                        style={styles.thorImage}
                    />
                </View>
                <View style={styles.thorTitle}>
                    <Text style={styles.title}>Cases World Wide</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Cure")} activeOpacity={0.7} style={styles.thor2} >
                <View style={styles.image}>
                    <Image
                        source={require('../corona/cure.jpg')}
                        style={styles.thorImage}
                    />
                </View>
                <View style={styles.thorTitle}>
                    <Text style={styles.title}>How to cure</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Questions")} activeOpacity={0.7} style={styles.thor2} >
                <View style={styles.image}>
                    <Image
                        source={require('../corona/questions.jpg')}
                        style={styles.thorImage}
                    />
                </View>
                <View style={styles.thorTitle}>
                    <Text style={styles.title}>Covid Q/A</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',
        height: '100%',
        alignItems: "center",
        margin: 10,
        marginBottom: '10%',
        borderRadius: 10,
        shadowColor: 'gray',
        elevation: 15,
    },
    thor: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        height: '30%',
        alignItems: "center",
        // borderRadius: 10,
        shadowColor: 'gray',
        elevation: 35,
        // overflow: "hidden",
    },
    thor2: {
        // paddingTop: 50,
        marginTop: 50,
        backgroundColor: 'white',
        width: '100%',
        height: '28%',
        alignItems: "center",
        // shadowColor: 'gray',
        // elevation: 15,
        // // borderRadius: 10,
        // borderRadius: 5,
    },
    image: {
        alignItems: "center",
        width: '100%',
        height: '100%',
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
        overflow: "hidden",
        justifyContent: "center",
        shadowColor: 'gray',
        elevation: 15,
        // #ff3117
    },
    thorImage: {
        height: '100%',
        // top: '20%',
        resizeMode: 'stretch',
        width: '100%',
    },
    thorTitle: {
        height: '50%',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5,
    },
    title: {
        fontSize: 25,
        color: '#5e5d5d',
        fontWeight: 'bold',
        letterSpacing: 0.5,
    }
});

export default tryThis;