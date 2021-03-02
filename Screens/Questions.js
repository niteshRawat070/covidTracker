import React, { useState } from 'react';

//import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Button, Image, ScrollView, Text, TouchableOpacity } from 'react-native';

function Questions() {
    const [shouldShow, setShouldShow] = useState(false);
    const [shouldShow1, setShouldShow1] = useState(false);
    const [shouldShow2, setShouldShow2] = useState(false);
    const [shouldShow3, setShouldShow3] = useState(false);
    const [shouldShow4, setShouldShow4] = useState(false);
    const [shouldShow5, setShouldShow5] = useState(false);
    const [shouldShow6, setShouldShow6] = useState(false);
    const [shouldShow7, setShouldShow7] = useState(false);
    const [shouldShow8, setShouldShow8] = useState(false);
    const [shouldShow9, setShouldShow9] = useState(false);
    const [shouldShow10, setShouldShow10] = useState(false);
    const [shouldShow11, setShouldShow11] = useState(false);





    const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                {/* <Button
                    title="Hide/Show Component"
                    onPress={() => setShouldShow(!shouldShow)}
                /> */}
                <TouchableOpacity activeOpacity={0.8} onPress={() => setShouldShow4(!shouldShow4)}>
                    <Text style={styles.text}>What is a coronavirus?</Text>
                </TouchableOpacity>
                {/*Here we will return the view when state is true 
            and will return false if state is false*/}
                {shouldShow4 ? (
                    <Text style={styles.definition}>Coronaviruses are a large family of viruses that are known to cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS).</Text>
                ) : null}
            </View>
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => setShouldShow(!shouldShow)}>
                    <Text style={styles.text}>How dangerous is the coronavirus disease?</Text>
                </TouchableOpacity>
                {shouldShow ? (
                    <Text style={styles.definition}>Although for most people COVID-19 causes only mild illness, it can make some people very ill. More rarely, the disease can be fatal. Older people, and those with pre- existing medical conditions (such as high blood pressure, heart problems or diabetes) appear to be more vulnerable</Text>
                ) : null}
            </View>
            <View style={styles.container}>
                {/* <Button
                    title="Hide/Show Component"
                    onPress={() => setShouldShow(!shouldShow)}
                /> */}
                <TouchableOpacity activeOpacity={0.8} onPress={() => setShouldShow1(!shouldShow1)}>
                    <Text style={styles.text}>What is Isolation?</Text>
                </TouchableOpacity>
                {/*Here we will return the view when state is true 
            and will return false if state is false*/}
                {shouldShow1 ? (
                    <Text style={styles.definition}>Separation of the affected person or sespected of being infected from other healthy people for the duration of the disease infection in appropriate places and health conditions, in order to prevent the transmission of the infection.</Text>
                ) : null}
            </View>
            <View style={styles.container}>
                {/* <Button
                    title="Hide/Show Component"
                    onPress={() => setShouldShow(!shouldShow)}
                /> */}
                <TouchableOpacity activeOpacity={0.8} onPress={() => setShouldShow2(!shouldShow2)}>
                    <Text style={styles.text}>Difference between Isolation and Quarantine</Text>
                </TouchableOpacity>
                {/*Here we will return the view when state is true 
            and will return false if state is false*/}
                {shouldShow2 ? (
                    <Text style={styles.definition}><B>Isolation:-</B>{'\n'}
                    Isolation refers to separating sick people with a contagious disease from those who are not sick. Hospitals use isolation for patients who have a known infectious disease that can be spread easily to others. A person, who finds themselves ill with COVID-19, needs to isolate themselves in a specific room away from other household members. Household members should use a separate bedroom and even a separate bathroom if possible. It is also recommended that the ill person should eat or be fed in their room away from other household members. Household items such as dishes, drinking glasses, cups, eating utensils, towels, bedding, or other items should not be shared with the person infected with COVID-19. It is important to prohibit all visitors and non-essential people from being in the home.

                    According to the Central Shenandoah Health District, if a family member has COVID-19 symptoms and has been tested, but the results are pending, that family member should isolate as best as possible until the results are known. A separate bedroom and bathroom if possible, and definitely separate dishes, drinking glasses, eating utensils, towels and bedding.{'\n'}

                        <B>Quarantine:-</B>{'\n'}
                    Quarantine aims to separate and restrict the movement of people who have been exposed to a contagious disease to watch and see if they become sick. These people may have been exposed to a disease and do not know it, or they may have the disease but do not show symptoms. Quarantine helps to limit the spread of communicable disease.

                    Because of the current COVID-19 Coronavirus pandemic, many people have been told to quarantine. Quarantining means staying home and away from other people as much as possible for a 14-day period. This includes avoiding shopping, eating out, socializing, public places, and large crowds.</Text>
                ) : null}
            </View>
            <View style={styles.container}>
                {/* <Button
                    title="Hide/Show Component"
                    onPress={() => setShouldShow(!shouldShow)}
                /> */}
                <TouchableOpacity activeOpacity={0.8} onPress={() => setShouldShow3(!shouldShow3)}>
                    <Text style={styles.text}>What are the Symptoms of Corona Virus?</Text>
                </TouchableOpacity>
                {/*Here we will return the view when state is true 
            and will return false if state is false*/}
                {shouldShow3 ? (
                    <Text style={styles.definition}>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.{'\n'}
                        <B>Most common symptoms:</B>{'\n'}
                    fever{'\n'}
                    dry cough{'\n'}
                    tiredness{'\n'}
                        <B>Less common symptoms:</B>{'\n'}
                    aches and pains{'\n'}
                    sore throat{'\n'}
                    diarrhoea{'\n'}
                    conjunctivitis{'\n'}
                    headache{'\n'}
                    loss of taste or smell{'\n'}
                    a rash on skin, or discolouration of fingers or toes{'\n'}
                        <B>Serious symptoms:</B>{'\n'}
                    difficulty breathing or shortness of breath{'\n'}
                    chest pain or pressure{'\n'}
                    loss of speech or movement{'\n'}
                    Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility.{'\n'}
                    People with mild symptoms who are otherwise healthy should manage their symptoms at home.
                    On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.</Text>
                ) : null}
            </View>
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => setShouldShow5(!shouldShow5)}>
                    <Text style={styles.text}>What is a novel coronavirus?</Text>
                </TouchableOpacity>
                {shouldShow5 ? (
                    <Text style={styles.definition}>A novel coronavirus (CoV) is a new strain of coronavirus that has not been previously identified in humans.</Text>
                ) : null}
            </View>
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => setShouldShow6(!shouldShow6)}>
                    <Text style={styles.text}>Can humans become infected with a novel coronavirus of animal source?</Text>
                </TouchableOpacity>
                {shouldShow6 ? (
                    <Text style={styles.definition}>Detailed investigations found that SARS-CoV was transmitted from civet cats to humans in China in 2002 and MERS-CoV from dromedary camels to humans in Saudi Arabia in 2012. Several known coronaviruses are circulating in animals that have not yet infected humans. As surveillance improves around the world, more coronaviruses are likely to be identified.</Text>
                ) : null}
            </View>
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => setShouldShow7(!shouldShow7)}>
                    <Text style={styles.text}>Can coronaviruses be transmitted from person to person?</Text>
                </TouchableOpacity>
                {shouldShow7 ? (
                    <Text style={styles.definition}>Yes, some coronaviruses can be transmitted from person to person, usually after close contact with an infected patient, for example, in a household workplace, or health care centre.</Text>
                ) : null}
            </View>
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => setShouldShow8(!shouldShow8)}>
                    <Text style={styles.text}>Is there a vaccine for a novel coronavirus?</Text>
                </TouchableOpacity>
                {shouldShow8 ? (
                    <Text style={styles.definition}>When a disease is new, there is no vaccine until one is developed. It can take a number of years for a new vaccine to be developed.</Text>
                ) : null}
            </View>
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => setShouldShow9(!shouldShow9)}>
                    <Text style={styles.text}>Is there a treatment for a novel coronavirus?</Text>
                </TouchableOpacity>
                {shouldShow9 ? (
                    <Text style={styles.definition}>There is no specific treatment for disease caused by a novel coronavirus. However, many of the symptoms can be treated and therefore treatment based on the patient’s clinical condition. Moreover, supportive care for infected persons can be highly effective.</Text>
                ) : null}
            </View>
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => setShouldShow10(!shouldShow10)}>
                    <Text style={styles.text}>What can I do to protect myself?</Text>
                </TouchableOpacity>
                {shouldShow10 ? (
                    <Text style={styles.definition}>Standard recommendations to reduce exposure to and transmission of a range of illnesses include maintaining basic hand and respiratory hygiene, and safe food practices  and avoiding close contact, when possible, with anyone showing symptoms of respiratory illness such as coughing and sneezing.</Text>
                ) : null}
            </View>
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => setShouldShow11(!shouldShow11)}>
                    <Text style={styles.text}>What WHO recommendations for countries?</Text>
                </TouchableOpacity>
                {shouldShow11 ? (
                    <Text style={styles.definition}>WHO encourages all countries to enhance their surveillance for severe acute respiratory infections (SARI), to carefully review any unusual patterns of SARI or pneumonia cases and to notify WHO of any suspected or confirmed case of infection with novel coronavirus.

                    Countries are encouraged to continue strengthening their preparedness for health emergencies in line with the International Health Regulations (2005).</Text>
                ) : null}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
        margin: 10,
    },
    text: {
        backgroundColor: '#8090c7',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth: 3,
        margin: 5,
        padding: 5,
        letterSpacing: 1,
        borderColor: '#8080c7'
    },
    definition: {
        backgroundColor: 'lightgray',
        fontSize: 15,
        borderRadius: 4,
        color: '#1e1e1e',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderWidth: 2,
        margin: 5,
        padding: 5,
        borderColor: '#8080c7'
    }
});

export default Questions;