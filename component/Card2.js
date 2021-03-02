import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TouchableOpacity } from 'react-native';
// import posts from '../DataFetching'
import Constants from "expo-constants";


function Card2(props, onPress) {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.thor} onPress={props.onPress}>
            <View style={styles.image}>
                <Text
                    // source={props.image}
                    style={styles.thorImage}
                >{props.image}</Text>
            </View>
            <View style={styles.thorTitle}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    thor: {
        backgroundColor: 'white',
        width: '45%',
        height: 250,
        alignItems: "center",
        margin: 10,
        // paddingTop: Constants.statusBarHeight,
        // borderRadius: 10,
        shadowColor: 'gray',
        elevation: 15,
        borderRadius: 5,
        borderColor: 'white'
    },
    image: {
        alignItems: "center",
        width: '100%',
        height: '80%',
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
        borderRadius: 5,
        overflow: "hidden",
        justifyContent: "center",
        backgroundColor: '#eb1313'
    },
    thorImage: {
        // height: '90%',
        // top: '20%',
        color: 'white',
        fontSize: 30,
        letterSpacing: 1,
        // fontFamily: 'sans-serif',
        // width: '100%',
        textAlign: "center",
        justifyContent: "center",
        // resizeMode: "cover",
        // borderRadius: -5
    },
    thorTitle: {
        height: '50%',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5
    },
    title: {
        fontFamily: 'sans-serif',
        fontSize: 25,
        color: '#1e1e1e',
        fontWeight: 'bold',
        letterSpacing: 0.5
    }
});

export default Card2;