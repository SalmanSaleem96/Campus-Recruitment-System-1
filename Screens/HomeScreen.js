import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AuthContext from '../Navigations/AuthProvider'
import FormButton from '../Components/FormButton'

const HomeScreen = () => {
    const {user, logout} = useContext(AuthContext)
    return (
        <View style={styles.HomeContainer}>
            <Text>Home Screen {user.uid} </Text>
            <FormButton 
                buttonTitle='Log Out'
                onPress={()=>logout()}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    HomeContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
