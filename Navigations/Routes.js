import React, { useContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './AppStacks'
import auth from '@react-native-firebase/auth'
import { AuthContext } from './AuthProvider'
import { useEffect } from 'react'

const Routes = ()=>{

    const {user, setUser} = useContext(AuthContext);
    const [initilizing, setInitializing] = useState(true)

    const onAuthStateChanged = (user)=>{
        setUser(user)
        if (initilizing) setInitializing(false)
    }
    useEffect(()=>{
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, [])

    if (initilizing) return null;


    return (
        <NavigationContainer>
            <AppStack/>
        </NavigationContainer>
    );
};

export default Routes;