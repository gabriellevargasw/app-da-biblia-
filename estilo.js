import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1, // diz q a tela ta inteira, dividido 1 por 1//
    backgroundColor: '#FFF8E1', //cor de fundo bege//
    padding: 10,// deste caso é a distancia da borda entre o campo de escrita//
    justifyContent: 'center', //deixar no centro verticalmente
  },
  titulo: {
    fontSize: 26, // tamanho da fonte //
    color: '#5D4037', //cor do titulo de marrom//
    fontWeight: 'bold', //deixa o titulo em negrito//
    marginBottom: 10, //a distancia do texto para a caixa de texto //
    textAlign: 'center', // deixa o texto alinhado no centro// 
  },
  texto: {
    fontSize: 19, // tamanho da fonte do texto //
    color: '#5D4037', //cor do marrom//
    textAlign: 'center', // deixar o texto alinhado no centro//
  },
  botao: {
    backgroundColor: '#5D4037', //cor de fundo marrom//
    padding: 15, //aumenta a largura do botao //
    borderRadius: 8, //deixa a borda redonda, quanto + mais redondo fica//
    marginVertical: 10, //a distancia entre o botao e o texto //
  },
  textoBotao: {
    color: 'white', //cor branco //
    textAlign: 'center', //texto alinhado no centro//
    fontSize: 16, //tamanho do texto do botao//
  },
  input: {
    borderWidth: 2, //é a borda do campo 
    borderColor: '#5D4037', //cor marrom//
    borderRadius: 8, //deixa a borda redonda, quanto + mais redondo fica//
    padding: 10, //é o tamanho da caixa de texto, quanto mais, maior fica//
    marginVertical: 8, //altura a distancia dos botoes//
    backgroundColor: 'white', //cor de fundo branca//
    color: '#5D4037' //marrom cor do texto dentro do input//
  },
  botaovoltar: {
    position: 'absolute', // ele defina o tamanho do botao, pq sem ele o bottom e o left nao funciona//
    bottom:20,// define a distancia entre do "chao" ate o botao//
    left:10,// a distancia da borda pra esquerda do botao//
    backgroundColor:'#5D4037', //cor de fundo marrom//
    paddingVertical:10, // define a altura do botao na vertical//
    paddingHorizontal:16, // define a altura do botao na horizontal//
    borderRadius:12 // quanto maior o numero mais redondo fica a borda//
  },


});
