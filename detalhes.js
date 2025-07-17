import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function Detalhes({ route, navigation }) {
  const { referencia, texto } = route.params;

  return (
    <ImageBackground
      source={require('./assets/céu.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.referencia}>{referencia}</Text>
          <Text style={styles.versiculo}>{texto}</Text>
        </View>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
    width: '100%',
  },
  referencia: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6D4C41',
    marginBottom: 15,
    textAlign: 'center',
  },
  versiculo: {
    fontSize: 18,
    color: '#4E342E',
    lineHeight: 26,
    textAlign: 'justify',
  },
  botao: {
    marginTop: 30,
    backgroundColor: '#6D4C41',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
