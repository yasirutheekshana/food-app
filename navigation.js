import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React, { useEffect, useState } from 'react'
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import OrderPrepairing from './screens/OrderPrepairing';
import DeliveryScreen from './screens/DeliveryScreen';
import { firebase } from './firebase';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import Header from './components/Header/Header';

export default function Navigation() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='LoginScreen'
            component={LoginScreen}
            options={{
              headerTitle: () => <Header name='Food App' />,
              headerStyle: {
                height: 150,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                backgroundColor: 'orange',
                shadowColor: 'blue',
                elevation: 25
              }
            }}
          />
          <Stack.Screen
            name='RegistrationScreen'
            component={RegistrationScreen}
            options={{
              headerTitle: () => <Header name='Food App' />,
              headerStyle: {
                height: 150,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                backgroundColor: 'orange',
                shadowColor: 'blue',
                elevation: 25
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" options={{ presentation: "modal" }} component={CartScreen} />
        <Stack.Screen name="OrderPrepairing" options={{ presentation: "fullScreenModal" }} component={OrderPrepairing} />
        <Stack.Screen name="Delivery" options={{ presentation: "fullScreenModal" }} component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
