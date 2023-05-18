import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import  from './'

const Root = createStackNavigator()

export default function App() {
return (
	<NavigationContainer>
		<Root.Navigator
			initialRouteName=""
			screenOptions={{
				headerMode:'screen',
				headerStyle: { backgroundColor: 'white' },
				title: null,
				cardOverlayEnabled:true,
				cartStyle:{flex:1},
				animationEnabled:true,
				gestureEnabled:true
			}}
			>
		<Root.Screen name="" component={} />
		</Root.Navigator>
	</NavigationContainer>
)}