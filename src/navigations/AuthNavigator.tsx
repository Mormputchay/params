import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, ForgotPassword, Register} from '../screens';
import {COLORS, ROUTES} from '../constants'
import routes from "../constants/routes";
import DrawerNavigator from './DrawerNavigator';
const Stack = createStackNavigator();
// Navigator, Screen, Group
import BottomTabNavigator from "./BottomTabNavigator";
const AuthNavigator = () => {
	console.log(Stack);
	return (
    <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.LOGIN}>
    <Stack.Screen
      name={ROUTES.FORGOT_PASSWORD}
      component={ForgotPassword}
      options={({route}) => ({
        headerTintColor: COLORS.white,
        // headerBackTitle: 'Back',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        title: route.params.userId,
      })}
    />
    <Stack.Screen
      name={ROUTES.LOGIN}
      component={Login}
      options={{headerShown: false}}
    />
    <Stack.Screen name={ROUTES.REGISTER} component={Register} />
    <Stack.Screen
      name={ROUTES.HOME}
      component={BottomTabNavigator}
      options={{headerShown: false}}
    />
    </Stack.Navigator>
  )
}
export default AuthNavigator