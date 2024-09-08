import React from 'react';
import _get from 'lodash/get';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';

import VehicleScreen from './src/screens/VehicleScreen';
import Home from './src/screens/Home';
import PreferenceForm from './src/screens/PreferenceForm';
import VehicleDetails from './src/screens/VehicleDetails';
import Form from './src/screens/PreferenceForm/Form';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          headerStyle: {
            backgroundColor: '#171A1E',
            borderBottomColor: '#434A53',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        })}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={() => ({headerShown: false})}
        />
        <Stack.Screen
          name="Vehicle Preference Form"
          component={PreferenceForm}
          options={() => ({headerTitle: 'Do you have any car in mind?'})}
        />
        <Stack.Screen
          name="Vehicle Screen"
          component={VehicleScreen}
          options={() => ({headerTitle: 'Vehicles'})}
        />
        <Stack.Screen
          name="Vehicle Details"
          component={VehicleDetails}
          options={({route}) => {
            const {year, make, model} = _get(route, 'params.vehicle', {
              year: '',
              make: '',
              model: '',
            });

            return {headerTitle: `${year} ${make} ${model}`};
          }}
        />
        <Stack.Screen
          name="Vehicle Details Form"
          component={Form}
          options={() => ({headerTitle: 'Enter Vehicle Details'})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
