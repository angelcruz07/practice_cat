import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, View, Image} from 'react-native';
import {useEffect, useState} from "react";
import { Audio } from 'expo-av';
export default function App() {
  const image = 'https://www.elgatofeliz.es/wp-content/uploads/2020/12/raza-gato-azul-ruso.gif';
  const [sound, setSound] = useState();
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('./assets/sound.mp3')
    );
    setSound(sound);
    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
        ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
        : undefined;
  }, [sound]);

  return (
      <View style={styles.container}>
        <Image source={{uri: image}} style={{width: 200, height: 250}}/>
        <Button title='Escuchar' onPress={playSound}/>
        <StatusBar style="auto"  />
      </View>
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
