import React, {useState, useEffect} from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View } from 'react-native'
import OnboardingScreen from '../Screens/OnboardingScreen'
import LoginScreen from '../Screens/LoginScreens'
// import HomeScreen from '../Screens/HomeScreen'
import SignupScreen from '../Screens/SignupScreen'
import AsyncStorage from '@react-native-community/async-storage';

import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Stack = createStackNavigator();

function AuthStack() {
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


  if (isFirstLaunch === null){
    return null
  }else if(isFirstLaunch == true){
    routeName = 'onboardingScreen';
  }else {
    routeName = 'LoginScreen';
  }
    return(
      <Stack.Navigator
        headerMode='none'
        initialRouteName={routeName}
      >
        <Stack.Screen name="onboardingscreen" component={OnboardingScreen} 
          options={{Header:  () => null}}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} 
          options={{Header:  () => null}}
        />
        <Stack.Screen name="SignupScreen" component={SignupScreen} 
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,
            },
            headerLeft: ()=>(
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button
                  name='long-arrow-left'
                  size={25}
                  backgroundColor='#f9fafd'
                  color= '#333'
                  onPress={()=> navigation.navigate('LoginScreen')}
                />
              </View>
            ),
          })}
        />
      </Stack.Navigator>
      
    )
  
}

export default AuthStack;