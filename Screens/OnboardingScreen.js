import React from 'react'
import {View, Text, Button, StyleSheet, Image} from 'react-native'

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation})=>{
    return(
        <>
        <Onboarding
        onSkip={()=>navigation.replace('LoginScreen')}
        onDone={()=>navigation.navigate('LoginScreen')}
    pages={[
        {
        backgroundColor: '#F5F5F5',
        image: <Image style={{width: 200, height: 200}} source={require('../Assets/onboarding-img1.png')} />,
        title: 'Welcome',
        subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
        backgroundColor: '#F5F5F5',
        image: <Image style={{width: 200, height: 200}} source={require('../Assets/onboarding-img2.png')} />,
        title: 'Onboarding2',
        subtitle: 'Done with React Native Onboarding Swiper',
        }, 
        {
        backgroundColor: '#F5F5F5',
        image: <Image  style={{width: 200, height: 200}} source={require('../Assets/onboarding-img3.png')} />,
        title: 'Onboarding3',
        subtitle: 'Done with React Native Onboarding Swiper',
        }
    ]}
/>
        </>
    )
}

export default OnboardingScreen;