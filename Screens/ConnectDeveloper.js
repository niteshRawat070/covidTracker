import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ConnectDeveloper(props) {
    return (
        <>
            <View style={styles.container}>
                <Image source={require('../corona/connect.png')} style={{ height: '50%', resizeMode: 'contain', width: '100%', borderRadius: 10 }} />
                <Text style={{ marginTop: 10, fontSize: 20, color: 'gray' }}>Nitesh Rawat</Text>
            </View>
            <View style={{ position: 'absolute', top: '57%', paddingHorizontal: 10 }}>
                <Text style={{ color: 'gray' }}>Fitness Enthusiast and{'\n'}Android,iOS and web developer.</Text>
            </View>
            <View style={{ position: 'absolute', flexDirection: 'row', top: '70%', left: '30%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray', borderRadius: 10 }}>
                <Text style={{ fontSize: 25, color: 'gray' }}>Connect        </Text>
                <MaterialCommunityIcons name='instagram' size={25} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
        height: '50%',
        width: '100%'
    }
});

export default ConnectDeveloper;