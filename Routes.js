import { NavigationContainer } from '@react-navigation/native';//// ele q controla qual tela vai aparecer a cada momento
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';//Cria um sistema de abas na parte de baixo da tela
import { FontAwesome } from '@expo/vector-icons';//ele importa os icones 
import Inicio from './inicio';//ele importa inicio aonde o inicio esta
import Buscar from './buscar';// e o buscar faz a mesma coisa q o inicio so q em busca
import Detalhes from './detalhes';//mesma coisa so q em detalhes
import Aleatorio from './aleatorio';