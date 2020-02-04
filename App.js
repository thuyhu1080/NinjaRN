import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'tu', key: '1' },
    { name: 'lam', key: '2' },
    { name: 'ha', key: '3' },
    { name: 'quan', key: '4' },
    { name: 'huong', key: '5' },
    { name: 'linh', key: '6' },
    { name: 'tung', key: '8' },
    { name: 'an', key: '9' },
    { name: 'minh', key: '10' },
    { name: 'phong', key: '11' },

  ]);

  
  return (
    <View style={styles.container}>
      <ScrollView>
    { people.map(item => {
      return (
        <View key={item.key}>
          <Text style={styles.item}>{item.name}</Text>
        </View>
      )
    })}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
