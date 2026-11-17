import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { Home } from '../screens/Home';
import { Cadastro } from '../screens/Cadastro';
import { Produtos } from '../screens/Produtos';
import { Contato } from '../screens/Contato';

export const AppRouter = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="register" component={Cadastro} />
                <Stack.Screen name="products" component={Produtos} />
                <Stack.Screen name="contact" component={Contato} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};