import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from '../Screens/OnboardingScreen'
import LoginScreen from '../Screens/LoginScreens'
import SignupScreen from '../Screens/SignupScreen'
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

function AppStack() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null)

  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then(value=>{
      if (value == null ){
        AsyncStorage.setItem('alreadyLaunched', 'true')
        setIsFirstLaunch(true)
      }else{
        setIsFirstLaunch(false)
      }
    })
  },[])


  if (isFirstLaunch == null){
    return null
  }else if(isFirstLaunch == true){
    return(
    <NavigationContainer>
      <Stack.Navigator
        headerMode='none'
        initialRouteName='onboardingscreen'
      >
        <Stack.Screen name="onboardingscreen" component={OnboardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
      
    )
  }else{
    return <LoginScreen/>
  }
  
}

export default AppStack;