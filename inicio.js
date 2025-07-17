import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/bible.png')}
        style={styles.imagem}
      />
      <Text style={styles.titulo}>Bíblia App</Text>
      <Text style={styles.versiculo}>
        “Lâmpada para os meus pés é a tua palavra e luz para o meu caminho.” (Salmo 119:105)
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Buscar')}
      >
        <Text style={styles.textoBotao}>📖 Buscar Versículo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Aleatorio')}
      >
        <Text style={styles.textoBotao}>🎲 Versículo Aleatório</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imagem: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5D4037',
    marginBottom: 10,
  },
  versiculo: {
    fontSize: 14,
    color: '#6D4C41',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: '#A1887F',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
    elevation: 2,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
