import { View, Text, TouchableOpacity } from 'react-native';//importa a view,texte o touchableopacity 
import estilo from './estilo';//importa o estilo

export default function Detalhes({ route, navigation }) {// exporta a tela detalhes e a rota q pega em buscar
  const { referencia, texto } = route.params; // é a constante q pega a referencia e o texto = a rota e os dados q foi enviado 
  // da tela anterior 

  //referencia ele mostrar o versiculo ex:hebreus 11:1
  //texto ele vai mostrar o q esta escrito ex:Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que não se veem
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>{referencia}</Text>
      <Text style={estilo.texto}>{texto}</Text>
      
      <TouchableOpacity style={estilo.botaovoltar} onPress={() => navigation.navigate('Buscar')}>
        <Text style={estilo.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
//botao de voltar para a tela de buscar no caso a tela anterior