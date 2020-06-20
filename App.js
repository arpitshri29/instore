import React from 'react';
import { StyleSheet, Text, Alert, Button, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Arpit!</Text>
      <Button title="click me!"
              onPress={() => Alert.alert("My title", "My message", [
                {text: "Yes", onPress: () => console.log("Pressed Yes")},
                {text: "No", onPress: () => console.log("Pressed No")},
              ])}/>
      <TouchableHighlight onPress={() => console.log("Image tapped!")}>
        <Image
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300",
            }} />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
