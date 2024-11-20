import React from 'react';
import { SectionList, Text, View, Image, Button, TouchableOpacity, StatusBar } from 'react-native';
import { datasource } from './Data.js';

const Home = ({ navigation }) => {
    const renderItem = ({ item, section }) => (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#ffccd6',
                padding: 10,
                marginVertical: 5,
                borderRadius: 8,
            }}
            onPress={() =>
                navigation.navigate('Edit', {
                    key: item.key,
                    type: section.title,
                    index: section.data.indexOf(item),
                })
            }
        >
            <Text style={{ flex: 1, fontSize: 16, fontWeight: 'bold', color: '#333', marginLeft: 10 }}>
                {item.key}
            </Text>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 140, borderRadius: 4 }} />
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
            <StatusBar />
            <Button title="Add Pokemon" onPress={() => navigation.navigate('Add')} color="#c950d4" />
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgcolor } }) => (
                    <View style={{ padding: 10, backgroundColor: bgcolor }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>{title}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.key}
            />
        </View>
    );
};

export default Home;
