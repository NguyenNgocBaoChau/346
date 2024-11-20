import React, { useState } from 'react';
import { View, Text, TextInput, Button, StatusBar } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data.js';

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('Electric');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = () => {
        if (name.trim() === '' || imageUrl.trim() === '') {
            alert('Please enter a valid name and image URL.');
            return;
        }
        const item = { key: name, image: imageUrl };
        const section = datasource.find((section) => section.title === type);

        if (section) {
            section.data.push(item);
            navigation.navigate('Home');
        } else {
            alert('Invalid type.');
        }
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <StatusBar />
            <Text>Name:</Text>
            <TextInput
                maxLength={15}
                style={{ borderWidth: 1, marginBottom: 20, padding: 10 }}
                onChangeText={setName}
                value={name}
            />
            <Text>Image URL:</Text>
            <TextInput
                style={{ borderWidth: 1, marginBottom: 20, padding: 10 }}
                onChangeText={setImageUrl}
                value={imageUrl}
            />
            <Text>Type:</Text>
            <RNPickerSelect
                value={type}
                onValueChange={(value) => setType(value)}
                items={datasource.map((section) => ({
                    label: section.title,
                    value: section.title,
                }))}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default Add;
