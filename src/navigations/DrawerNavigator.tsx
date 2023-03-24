import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ROUTES } from '../constants';
import BottomTabNavigator from './BottomTabNavigator';
import { Wallet,Notifications } from '../screens';
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
  >
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={BottomTabNavigator}
    
      />

      <Drawer.Screen
        name={ROUTES.WALLET_DRAWER}
        component={Wallet}
      />
      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notifications}
     
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;