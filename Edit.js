import React, { useState } from 'react';
import { View, Text, TextInput, Button, StatusBar } from 'react-native';
import { datasource } from './Data.js';

const Edit = ({ navigation, route }) => {
    const [name, setName] = useState(route.params.key);
    const [imageUrl, setImageUrl] = useState(route.params.image);

    const handleSave = () => {
        const section = datasource.find((section) => section.title === route.params.type);
        if (section) {
            section.data[route.params.index].key = name;
            section.data[route.params.index].image = imageUrl;
            navigation.navigate('Home');
        } else {
            alert('Error updating data.');
        }
    };

    const handleDelete = () => {
        const section = datasource.find((section) => section.title === route.params.type);
        if (section) {
            section.data.splice(route.params.index, 1);
            navigation.navigate('Home');
        } else {
            alert('Error deleting data.');
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title="Save" onPress={handleSave} />
                <Button title="Delete" onPress={handleDelete} />
            </View>
        </View>
    );
};

export default Edit;
