import { createNativeStackNavigator } from '@react-navigation/native-stack'; // ele q deixa as telas funcionando e organizadas
import { NavigationContainer } from '@react-navigation/native';// ele q controla qual tela vai aparecer a cada momento
import Splash from './splash';// ele vai importa a tela "splash" da onde ela estiver no caso esse é o caminho para acessar ela 
import Inicio from './inicio';//ele vai importa a tela "inicio" da onde ela estiver no caso esse é o caminho para acessar ela 
import Buscar from './buscar';//ele vai importa a tela "buscar" da onde ela estiver no caso esse é o caminho para acessar ela 
import Detalhes from './detalhes';//ele vai importa a tela "detalhes" da onde ela estiver no caso esse é o caminho para acessar ela 

const Stack = createNativeStackNavigator();//essa constante ela deixa uma tela emcima da outra quando clico em voltar ela so sai

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }}/>
        <Stack.Screen name="Buscar" component={Buscar} options={{ headerShown: false }}/>
        <Stack.Screen name="Detalhes" component={Detalhes} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );// ele vai retornar as navegacoes. começa pela tela de splash. 
  //esse codigo e para carregar as telas dai o nome dai o componente e depois o "headerShown: false" é para tirar o cabeçalho da view 
}
