import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import _map from 'lodash/map';
import _get from 'lodash/map';

const AppNavStack = ({screens}) => {
  const Stack = createStackNavigator();

  const stackScreens = () => {
    const generatedStackScreens = _map(screens, (screenVal, screenName) => {
      const screenComp = screenVal.screen;
      const screenNavOptions = screenVal.navigationOptions;
      const screenInitialParams = _get(screenVal, 'initialParams', {});

      return (
        <Stack.Screen
          name={screenName}
          initialParams={screenInitialParams}
          component={screenComp}
          options={props => ({
            ...screenNavOptions(props),
          })}
        />
      );
    });

    return generatedStackScreens;
  };

  const generatedStack = () => (
    <Stack.Navigator>{stackScreens}</Stack.Navigator>
  );

  return generatedStack;
};

export default AppNavStack;
