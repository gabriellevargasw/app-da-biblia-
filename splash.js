import { View, Text, StyleSheet } from 'react-native'; //importa as coisas do React Native, a view o texto e o estilo//
import { useEffect } from 'react'; // ele importa o use effect para o react dai ele fazer alguma para carregar a tela//
export default function Splash({ navigation }) {//esse ele exporta a funcao splash que é a tela de inicializacao e dai ele "abre o app" 
// e dai coloca o navigation q é para conseguir muda de tela//
  useEffect(() => { //Ele executa o código automaticamente quando o componente aparece na tela//
  setTimeout(() => {//e o codigo de tempo 
  navigation.replace('Inicio');//vai para a de tela inicio
}, 2000);//que diz depois de 2 segundos, ele conta em milisegundos 
}, []);//significa executar uma vez só//

  return ( //retornar
  //a view de estilo=estilo container
  //e o texto estilo=estilo titulo e o q esta escrito no titulo ele vai aparecer
    <View style={styles.container}>
      <Text style={styles.titulo}> Bíblia App</Text>
    </View>
  );
}

//esse é o codigo para funcionar o estilo do splash
const styles = StyleSheet.create({
  container: 
  { flex: 1,
    justifyContent: 'center',//centro
    alignItems: 'center',//item alinhado no centro
    backgroundColor: '#FFF8E1' }, //cor de fundo bege 

    titulo: 
    { fontSize: 28, // tamanho da fonte
      fontWeight: 'bold', //negrito
      color: '#5D4037' }, // cor marrom
});
