import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Aleatorio = () => {
  const [versiculo, setVersiculo] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const navigation = useNavigation();

  const referencias = [
    'joao+3:16',
    'salmos+23:1',
    'romanos+8:28',
    'filipenses+4:13',
    'provérbios+3:5',
    'genesis+1:1',
    'mateus+6:33',
    'provérbios+22:6',
  ];

  const buscarVersiculo = async () => {
    setCarregando(true);
    setVersiculo(null);

    const sorteado =
      referencias[Math.floor(Math.random() * referencias.length)];

    try {
      const resposta = await fetch(
        `https://bible-api.com/${sorteado}?translation=almeida`
      );
      const dados = await resposta.json();

      if (dados && dados.text) {
        setVersiculo(dados);
      } else {
        alert('Erro: Versículo não encontrado.');
      }
    } catch (erro) {
      alert('Erro ao buscar versículo: ' + erro.message);
    }

    setCarregando(false);
  };

  return (
    <ImageBackground
      source={require('./assets/céu.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Versículo Aleatório</Text>

        {carregando ? (
          <ActivityIndicator size="large" color="#6A1B9A" />
        ) : versiculo ? (
          <View style={styles.card}>
            <Text style={styles.texto}>{versiculo.text}</Text>
            <Text style={styles.referencia}>— {versiculo.reference}</Text>
          </View>
        ) : null}

        <TouchableOpacity style={styles.botao} onPress={buscarVersiculo}>
          <Text style={styles.textoBotao}>Buscar Versículo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao,]} onPress={() => navigation.goBack()}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E342E',
    marginBottom: 20,
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
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    color: '#6D4C41',
    lineHeight: 26,
    textAlign: 'justify',
  },
  referencia: {
    marginTop: 10,
    fontStyle: 'italic',
    textAlign: 'right',
    color: '#795548',
  },
  botao: {
    backgroundColor: '#6D4C41',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 15,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Aleatorio;
