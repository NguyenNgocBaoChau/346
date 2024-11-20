import { datasource } from './Data.js';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StatusBar } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

const Add = () => {
    const navigation = useNavigation();

    // States for the letter and type
    const [letter, setLetter] = useState('');
    const [type, setType] = useState('Vowels');

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <StatusBar />
            <Text>Letter:</Text>
            <TextInput
                maxLength={1}
                style={{ borderWidth: 1}}
                onChangeText={setLetter}
                value={letter}
            />
            <Text>Type:</Text>
            <RNPickerSelect
                value={type}
                onValueChange={(value) => setType(value)}
                items={[
                    { label: 'Vowels', value: 'Vowels' },
                    { label: 'Consonants', value: 'Consonants' },
                ]}
            />
            <Button
                title="Submit"
                onPress={() => {
                    let item = {key: letter};
                    let indexnum = 1
                    if (type=="Vowels") {
                        indexnum = 0;
                }
                datasource[indexnum].data.push(item);
                    navigation.navigate("Home")
                }}
            />
        </View>
    );
};

export default Add;
