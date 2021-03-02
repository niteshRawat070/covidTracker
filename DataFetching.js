import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import Card from './component/Card';
import Card2 from './component/Card2';
import Constants from "expo-constants";
import { Video } from "expo-av";
import Card3 from './component/Card3';

function DataFetching(props, onPress) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {//.get returns a promise
        axios.get('https://corona.lmao.ninja/v2/all')
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <View>
                    <Card image='Total Corona Cases' title={posts.cases} onPress={() => Alert.alert('', `${posts.cases} is the total number of cases all over the world`, [{ text: "Okay" }])} />
                </View>
                <View style={styles.detailContainer1}>
                    <Card2 image='Active Cases' title={posts.active} onPress={() => Alert.alert('', `${posts.active} is the total number of active cases all over the world`, [{ text: "Okay" }])} />
                    <Card2 image='Total Deaths' title={posts.deaths} onPress={() => Alert.alert('', `${posts.active} is the total number of Death all over the world`, [{ text: "Okay" }])} />

                </View>
                <View style={styles.detailContainer2}>
                    <Card3 image='Total Recovered Cases' title={posts.recovered} onPress={() => Alert.alert('', `${posts.recovered} is the total number of cases all over the world`, [{ text: "Okay" }])} />
                </View>
                <View style={styles.detailContainer1}>
                    <Card2 image='Today Cases' title={posts.todayCases} onPress={() => Alert.alert('', `${posts.todayCases} is the total cases of today all over the world`, [{ text: "Okay" }])} />
                    <Card2 image='Today Deaths' title={posts.todayDeaths} onPress={() => Alert.alert('', `${posts.todayDeaths} is the total number of Deaths today all over the world`, [{ text: "Okay" }])} />
                </View>
                <View style={styles.detailContainer2}>
                    <Card3 image='Recovered Today' title={posts.todayRecovered} onPress={() => Alert.alert('', `${posts.todayRecovered} is the total number of cases recovered today all over the world`, [{ text: "Okay" }])} />
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // paddingTop: Constants.statusBarHeight,
        paddingTop: 5,
        flex: 1,
        // paddingTop:30
    },
    // video: {
    //     flex: 0,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     width: '100%',
    //     height: '40%'
    // },
    detailContainer1: {
        // margin: 15,
        justifyContent: 'center',
        color: 'white',
        flexDirection: 'row',
    },
    detailContainer2: {
        // margin: 15,
        justifyContent: 'center',
        color: 'white',
        flexDirection: 'row',
    },
});

export default DataFetching;

//App.js
/*//fetching data using useEffect
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import AppNavigator from './navigator/AppNavigator';
import DataFetching from './DataFetching';
import Country from './Screens/Country';
export default function App(props) {
  if (props.isFocused) {
    return null;
  }
  return (
    <AppNavigator />
    // <Country />
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
*/