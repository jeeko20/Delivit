import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const Splashscreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Vérifier si l'utilisateur est connecté (à implémenter)
      const isAuthenticated = false; // À remplacer par la logique réelle
      
      navigation.replace(isAuthenticated ? 'Main' : 'Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Logo Delivit - à remplacer par une image ou Lottie */}
        <ActivityIndicator size="large" color="#FF6B35" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6B35',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
});

export default Splashscreen;
