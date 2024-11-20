import { datasource } from './Data.js';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Edit = ({ navigation, route }) => {
    const [letter, setLetter] = useState(route.params.key);

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <StatusBar />
            <Text>Letter:</Text>
            <TextInput
                maxLength={1}
                style={{ borderWidth: 1, marginBottom: 20, padding: 10 }}
                onChangeText={setLetter}
                value={letter}
            />
            <View style={{ margin:10,flex:1 }}>
                <Button
                    title="Save"
                    onPress={() => {
                        let indexnum = 1;
                        if (route.params.type === "Vowels") {
                            indexnum = 0;
                        }
                        datasource[indexnum].data[route.params.index].key = letter;
                        navigation.navigate("Home");
                    }}
                />
                <Button
                    title="Delete"
                    onPress={() => {
                        let indexnum = 1;
                        if (route.params.type === "Vowels") {
                            indexnum = 0;
                        }
                        Alert.alert("Are you sure?", '',
                            [{
                                text: 'Yes', onPress: () => {
                                    datasource[indexnum].data.splice(route.params.index, 1);
                                    navigation.navigate("Home");
                                }
                            },
                                {text: 'No'}])
                    }
                }
                />
            </View>
        </View>
    );
};



export default Edit;
