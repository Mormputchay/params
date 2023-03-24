import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {COLORS, ROUTES} from '../constants';
import {Home, Wallet, Notifications, Settings} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

import Icons  from 'react-native-vector-icons/Ionicons';
import routes from '../constants/routes';
import SettingsNavigator from './SettingsNavigator';
const BottomTabNavigator=()=> {
  return (
			<Tab.Navigator   screenOptions={({route}) => ({

				tabBarShowLabel:false,
				tabBarActiveTintColor: COLORS.primary,
				
				tabBarIcon: ({color, size, focused}) => {
						let iconName;

						if (route.name === ROUTES.HOME_TAB) {
								iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
						} else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
								iconName = focused ? 'settings' : 'settings-outline';
						} else if (route.name === ROUTES.WALLET) {
								iconName = focused ? 'wallet' : 'wallet-outline';
						} else if (route.name === ROUTES.NOTIFICATIONS) {
								iconName = focused
										? 'md-notifications-sharp'
										: 'md-notifications-outline';
						}

					return <Icons name={iconName} size={22} color={color} />;
				},
		})}>
				<Tab.Screen name={ROUTES.HOME_TAB} component={Home} />
				<Tab.Screen name={ROUTES.WALLET} component={Wallet} />
				<Tab.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
				<Tab.Screen name={ROUTES.SETTINGS_NAVIGATOR} component={SettingsNavigator}
					options={{
						tabBarLabel: 'Settings',
					}}
				/>
				</Tab.Navigator>
  );
}
export default BottomTabNavigator