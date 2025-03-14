import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path } from 'react-native-svg';

export default function LoginScreen() {
  const router = useRouter();  // Utilisation de useRouter pour la navigation

  const handleSignIn = () => {
    // Naviguer vers la page d'accueil (Home) après la connexion
    router.push('/home');
  };

  const handleSignUp = () => {
    // Naviguer vers la page d'inscription (Register) pour créer un nouveau compte
    router.push('/register');
  };

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

      {/* Bottom Wave */}
      <View style={[styles.waveContainer, { position: 'absolute', bottom: 0, transform: [{ rotate: '180deg' }] }]}>
        <Svg height="290" width="100%" viewBox="10 0 1440 320">
          <Path
            fill="#53B4C8"
            d="M0,96L48,112C96,128,192,160,288,144C384,128,480,64,576,64C672,64,768,128,864,144C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
          {/* Logo */}
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotPassword} onPress={() => router.push('/ForgotPasswordScreen')}>
          <Text style={styles.forgotPasswordText}>Forget Password?</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>
          Not a member yet?{'  '}
          <TouchableOpacity onPress={handleSignUp} style={{ marginTop: 7 }}>
            <Text style={styles.signUpLink}>Register</Text>
      </TouchableOpacity>

        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f1f1f1',
  },
  waveContainer: {
    position: 'absolute',
    top: 0,
    width: '550%',
  },
  formContainer: {
    width: '100%',
    maxWidth: 525,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 160,
    height: 60,
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#5CBDBF',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPassword: {
    marginBottom: 10,
    marginTop: 20,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#5CBDBF',
  },
  signUpText: {
    fontSize: 14,
    color: '#777',
  },
  signUpLink: {
    fontSize: 14,
    marginTop: 5,
    color: '#5CBDBF',
  },
});
