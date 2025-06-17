import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela
    backgroundColor: '#FFF8E1', // fundo bege claro
    padding: 20, // espaço entre o conteúdo e a borda da tela
    justifyContent: 'center', // centraliza verticalmente
  },
  titulo: {
    fontSize: 32, // título grande
    color: '#5D4037', // marrom escuro
    fontWeight: 'bold', // em negrito
    marginBottom: 20, // espaço abaixo do título
    textAlign: 'center', // centralizado na horizontal
  },
  texto: {
    fontSize: 20, // tamanho confortável de leitura
    color: '#5D4037', // marrom
    textAlign: 'center', // alinhado no meio
    marginVertical: 10, // espaço acima e abaixo do texto
    lineHeight: 28, // altura das linhas, deixa mais fácil de ler
  },
  botao: {
    backgroundColor: '#5D4037', // fundo marrom
    paddingVertical: 15, // altura
    paddingHorizontal: 30, // largura
    borderRadius: 10, // cantos arredondados
    marginVertical: 12, // espaço entre os botões
    alignSelf: 'center', // centraliza na tela
    elevation: 4, // sombra no Android
    shadowColor: '#000', // cor da sombra
    shadowOffset: { width: 0, height: 2 }, // direção da sombra
    shadowOpacity: 0.3, // transparência da sombra
    shadowRadius: 3, // espalhamento da sombra
  },
  textoBotao: {
    color: 'white', // texto branco
    textAlign: 'center', // centralizado
    fontSize: 18, // tamanho do texto
    fontWeight: 'bold', // destaque no botão
  },
  input: {
    borderWidth: 2, // espessura da borda
    borderColor: '#5D4037', // cor marrom da borda
    borderRadius: 10, // cantos arredondados
    padding: 12, // espaço interno
    marginVertical: 10, // espaço externo
    backgroundColor: 'white', // fundo branco
    color: '#5D4037', // texto marrom
    fontSize: 16, // fonte padrão
    // sombra leve para destacar visualmente
    elevation: 3, // sombra no Android
    shadowOffset: { width: 0, height: 1 },// direção da sombra
    shadowOpacity: 0.2, // opacidade da sombra
    shadowRadius: 2,// suavidade da sombra
  },
  botaovoltar: {
    position: 'absolute', // fixo na tela
    bottom: 20, // distância do rodapé
    left: 15, // distância da borda esquerda
    backgroundColor: '#5D4037', // mesmo tom de marrom
    paddingVertical: 10, // altura do botão
    paddingHorizontal: 20, // largura
    borderRadius: 12, // bem arredondado
    elevation: 3, // sombra no Android
    shadowOffset: { width: 0, height: 1 }, // direção da sombra
    shadowOpacity: 0.25, // opacidade da sombra
    shadowRadius: 2,// suavidade da sombra
  },
});
