import React, { useState} from 'react';
import { View, Image, Button } from 'react-native';
import Sound from 'react-native-sound'

const catImage = require('../assets/gato-ruso.jpg');
const catSound = require('../assets/sound.mp3');

const App = () => {
    // Estado para controlar si se reproduce el sonido
    const [reproducirSonido, setReproducirSonido] = useState(false);

    // Función para cargar y reproducir el sonido
    // const reproducirGatoSound = () => {
    //     // Carga el sonido del archivo
    //     const sound = new Sound(catSound, Sound.MAIN_BUNDLE, (error) => {
    //         if (error) {
    //             console.log('Error al cargar el sonido', error);
    //             return;
    //         }
    //         // Reproduce el sonido
    //         sound.play(() => {
    //             sound.release(); // Limpia el recurso de sonido después de la reproducción
    //         });
    //     });
    // };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={catImage} style={{ width: 200, height: 200 }} />
            {/*<Button*/}
            {/*    title="Reproducir Sonido de Gato"*/}
            {/*    onPress={() => {*/}
            {/*        setReproducirSonido(true);*/}
            {/*        reproducirGatoSound();*/}
            {/*    }}*/}
            {/*/>*/}
        </View>
    );
};

export default App