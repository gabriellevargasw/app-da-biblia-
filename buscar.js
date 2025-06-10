import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';//importa a view,textinput,touchableopacity,text e o alert 
import { useState } from 'react';
import estilo from './estilo';//importa o estilo

export default function Buscar({ navigation }) { //e a funcao de navegacao dai ele retornar a view buscar
  const [livro, setLivro] = useState(''); // a constante livro é tipo uma caixa q começa vazia, mas dai o usuario tem q escrever algo pra 
  // "caixa" nao ser mais vazia. e o setlivro é tipo a chave da "caixa" e se o usuario ja escreveu algo dentro da "caixa" vai ficar
  // ex:livro=Hebreus
  const [cap, setCap] = useState('');// o cap(capitulo) e o vers(versiculo) sao as mesmas coisas do livro so que no cap ele pega capitulo
  //q o usuario digitou ex:cap=11 e no vers ele pega o versiculo q ele digitou ex:vers=1
  const [vers, setVers] = useState('');

  const removerAcentos = (texto) => {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };//ele pega oq o usuario digitou se o usuario digitou com acento ex:gênesis e vai e faz genesis + ^ ele separa a palavra do acento pq 
  //a minha api ela nao aceita palavras com acentos 

  const buscar = async () => {
    if (!livro || !cap || !vers) {
      Alert.alert('Preencha todos os campos!');
      return;
    }// aqui ele cria uma constante de buscar dai da um if no livro e cap,vers se nao tiver algum deles ele para de "funcionar" 
    // e dai ele da um alerta que vc nao preencheu todos os campos    

    const livroFormatado = removerAcentos(livro.toLowerCase());//esse linha é para a api entender oq o usuario escreveu ex:se o usuario 
    //escreveu Gênesis ele tira e deixa genesis. o LowerCase faz o maiusculo ficar minusculo e o remover acento revome o acento

    try {
      const url = `https://bible-api.com/${livroFormatado}+${cap}:${vers}?translation=almeida`;
      const resposta = await fetch(url);// vai busca a resposta na api 
      const dados = await resposta.json();//ele pega a resposta e transforma em alguma coisa pro computador(transforma em dados)

      //o if ele manda para a tela detalhes se ele achar os 3 (livro,cap e vers)
      if (dados.text) {
        navigation.navigate('Detalhes', {
          referencia: dados.reference,
          texto: dados.text
        });// se ele nao achar o versiculo ele manda pro else e da um alerta "versiculo nao encontrado"
      } else {
        Alert.alert('Versículo não encontrado.');
      }
    } catch (error) {
      Alert.alert('Erro ao buscar versículo.');
    }
  };// se nao der nem um nem outro ele da um erro dizendo 'erro ao buscar versiculo'

  // esse ele vai retornar o formulario pedindo o livro,cap e vers
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Buscar Versículo</Text>

      <TextInput
        placeholder="Livro (ex:Joao)" value={livro} onChangeText={setLivro} style={estilo.input}
      />

      <TextInput
        placeholder="Capítulo (ex:3)" value={cap} onChangeText={setCap} style={estilo.input}
      />

      <TextInput
        placeholder="Versículo (ex:16)" value={vers} onChangeText={setVers} style={estilo.input}
      />

      <TouchableOpacity style={estilo.botao} onPress={buscar}>
        <Text style={estilo.textoBotao}>Buscar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilo.botaovoltar} onPress={() => navigation.navigate('Inicio')}>
        <Text style={estilo.textoBotao}>Voltar</Text>

      </TouchableOpacity>
    </View>
  );//TouchableOpacity é o botao de buscar e o botao de voltar para a pagina anterior
}
