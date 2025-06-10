import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';//importa as coisas do React Native, view,texto,touchableopacity 
//e o estilo
import estilo from './estilo';// importar o estilo 

export default function inicio({ navigation }) { // e a funcao de navegacao dai ele retornar a view inicio e dentro da view e dai tem o titulo
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Bíblia App</Text>

      <TouchableOpacity style={estilo.botao} onPress={() => navigation.navigate('Buscar')}>
        <Text style={estilo.textoBotao}> Buscar Versículo</Text>
      </TouchableOpacity>
    </View>
    // esse é tipo um botao que se clicar e ele vai para a proxima pagina q é buscar
  );
}
