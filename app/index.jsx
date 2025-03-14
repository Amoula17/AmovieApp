import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path } from 'react-native-svg';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
       {/* Top Wave */}
       <View style={styles.waveContainer}>
        <Svg height="450" width="100%" viewBox="5 1 1490 350">
          <Path
            fill="#53B4C8"
            d="M0,96L48,112C96,128,192,160,288,144C384,128,480,64,576,64C672,64,768,128,864,144C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>
      </View>

      {/* Logo */}
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />

      


      {/* Bottom Wave */}
      <View style={[styles.waveContainer, { position: 'absolute', bottom: 0, transform: [{ rotate: '180deg' }] }]}>
        <Svg height="290" width="100%" viewBox="10 0 1440 320">
          <Path
            fill="#53B4C8"
            d="M0,96L48,112C96,128,192,160,288,144C384,128,480,64,576,64C672,64,768,128,864,144C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  waveContainer: {
    position: 'absolute',
    top: 0, // Adjusted top for the wave
    width: '550%',
  },
  logo: {
    width: 350,
    height: 170,
    resizeMode: 'contain',
    marginBottom: 0,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: '#53B4C8',
    borderRadius: 8,
    marginTop: 40, // Increased the margin to move the button up
  },
  buttonText: {
    fontSize: 20,
    color: '#53B4C8',
    fontWeight: 'bold',
  },
});
