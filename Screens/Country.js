import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList, TextInput } from 'react-native';
import axios from 'axios';


function Country(props) {
    const [post, setPost] = useState([]);
    const [search, setSearch] = useState('');

    const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>

    useEffect(() => {
        axios.get('https://corona.lmao.ninja/v2/countries?sort=country')
            .then(res => {
                console.log(res.data)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <View style={{ flex: 1, padding: 30, alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
            {/* <ScrollView style={styles.container}>
                <Text >{post.map(posts => <Text key={posts.countryInfo._id}>{posts.country}-{posts.active}{'\n'}</Text>)}</Text>
                {/* <Image uri={post.map(posts => posts.countryInfo.flag)} /> */}
            {/* </ScrollView> */}
            <Text>{post.filter(posts => posts === posts.country)}</Text>
            <FlatList
                data={post}
                keyExtractor={item => item.countryInfo._id}
                //renderItem= How our data will be rendered
                renderItem={({ item }) => (
                    <View style={{ alignItems: "center", justifyContent: 'center', flex: 1, borderWidth: 1.5, borderColor: 'lightgray', borderRadius: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', letterSpacing: 1 }}>
                            {item.country}-{item.countryInfo.iso3}{'\n'}

                        </Text>
                        <Text><B>Population-</B>{item.population}</Text>
                        <Image source={{ uri: item.countryInfo.flag }} style={styles.imageView} />
                        <Text style={{ fontSize: 17, margin: 5 }}><B>Total Cases-</B> {item.cases}{'\n'}
                            <B>Active Cases-</B> {item.active}{'\n'}
                            <B>Total Deaths-</B> {item.deaths}{'\n'}
                            <B>Total Recovered-</B> {item.recovered}{'\n'}
                            <B>Today Cases-</B> {item.todayCases}{'\n'}
                            <B>Today Deaths-</B> {item.todayDeaths}{'\n'}
                            <B>Today Recovered-</B>{item.todayRecovered}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    imageView: {
        width: '100%',
        height: 160,
        resizeMode: 'stretch',
        borderRadius: 7
    }
});

export default Country;