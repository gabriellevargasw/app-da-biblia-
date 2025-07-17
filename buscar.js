import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function Buscar({ navigation }) {
  const [livro, setLivro] = useState('');
  const [cap, setCap] = useState('');
  const [vers, setVers] = useState('');

  const removerAcentos = (texto) => {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const buscar = async () => {
    if (!livro || !cap || !vers) {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    const livroFormatado = removerAcentos(livro.toLowerCase());

    try {
      const url = `https://bible-api.com/${livroFormatado}+${cap}:${vers}?translation=almeida`;
      const resposta = await fetch(url);
      const dados = await resposta.json();

      if (dados.text) {
        navigation.navigate('Detalhes', {
          referencia: dados.reference,
          texto: dados.text
        });
      } else {
        Alert.alert('Versículo não encontrado.');
      }
    } catch (error) {
      Alert.alert('Erro ao buscar versículo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📖 Buscar Versículo</Text>

      <TextInput
        style={styles.input}
        placeholder="Livro (ex: João)"
        value={livro}
        onChangeText={setLivro}
      />
      <TextInput
        style={styles.input}
        placeholder="Capítulo (ex: 3)"
        keyboardType="numeric"
        value={cap}
        onChangeText={setCap}
      />
      <TextInput
        style={styles.input}
        placeholder="Versículo (ex: 16)"
        keyboardType="numeric"
        value={vers}
        onChangeText={setVers}
      />

      <TouchableOpacity style={styles.botao} onPress={buscar}>
        <Text style={styles.textoBotao}>Buscar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaovoltar} onPress={() => navigation.navigate('Inicio')}>
        <Text style={styles.textoBotaoVoltar}>Voltar</Text>
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
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#5D4037',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    borderColor: '#A1887F',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#A1887F',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  botaovoltar: {
    marginTop: 15,
  },
  textoBotaoVoltar: {
    color: '#6D4C41',
    fontSize: 14,
    fontWeight: '500',
  },
});
