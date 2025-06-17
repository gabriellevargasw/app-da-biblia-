import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import React, { useState } from 'react';
import estilo from './estilo';
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
    const sorteado = referencias[Math.floor(Math.random() * referencias.length)];

    try {
      const resposta = await fetch(`https://bible-api.com/${sorteado}?translation=almeida`);
      const dados = await resposta.json();

      if (dados && dados.text) {
        setVersiculo(dados);
      } else {
        Alert.alert('Erro', 'Versículo não encontrado.');
      }
    } catch (erro) {
      Alert.alert('Erro', 'Falha ao buscar versículo: ' + erro.message);
    }

    setCarregando(false);
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Versículo Aleatório</Text>

      {carregando ? (
        <ActivityIndicator size="large" color="#8B4513" />
      ) : (
        <>
          {versiculo && (
            <View style={estilos.caixa}>
              <Text style={estilos.texto}>{versiculo.text}</Text>
              <Text style={estilos.referencia}>— {versiculo.reference}</Text>
            </View>
          )}
          <TouchableOpacity style={estilo.botao} onPress={buscarVersiculo}>
            <Text style={estilo.textoBotao}>Buscar Versículo</Text>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity style={estilo.botaovoltar} onPress={() => navigation.goBack()}>
        <Text style={estilo.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4B2E2E',
  },
  caixa: {
    backgroundColor: '#FFF',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: '#8B4513',
    borderWidth: 1,
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  referencia: {
    fontStyle: 'italic',
    color: '#555',
  },
});

export default Aleatorio;
