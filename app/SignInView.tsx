import { View, Text, TextInput, StyleSheet, Image, Pressable, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function SignInView() {
    // Get the device's width and height for responsive design
    const {width, height} = Dimensions.get("window")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //function to execute after pressing submit button
    function handleLogin(){
        console.log(`Email: ${email}, Password: ${password}`)
        setEmail("")
        setPassword("")
    }


    //function to navigate to signIn page
    function redirectSignUp(){
        console.log("Redirect to signUp")
    }

    //function to recover password
    function forgotPwd(){
        console.log("User has gorgotten the password")
    }

  return (
    
    <View style = {styles.container}>
        {/*Main bar container*/}
        <View style ={styles.imageContainer}>

            {/*insert images*/}
            <Image source={require('../assets/images/circle2.jpg')} style={[styles.image, { width: width * 0.5, height: width * 0.5, top: -70, right: -50 }]} />
            <Image source={require('../assets/images/circle2.jpg')} style={[styles.image, { width: width * 0.4, height: width * 0.35, top: 120, right: 50 }]} />
            <Image source={require('../assets/images/circle2.jpg')} style={[styles.image, { width: width * 0.3, height: width * 0.3, top: 30, right: 160 }]} />
      
        </View>

        {/*Heading*/}
        <Text style = {styles.heading}>Login</Text>
        <Text style = {styles.headingDescription}>Please signin to continue</Text>

        {/*wrap all inputText fiels inside one container*/}
        <View>
            {/*wrap icon and inputfield inside one container*/}
            
            <View style = {styles.inputBox}>
                <MaterialCommunityIcons style = {styles.icon} name="email-outline" size={20} />
                <TextInput
                    style = {styles.input}
                    placeholder='EMAIL'
                    value= {email}
                    onChangeText={(e) => setEmail(e)}
                />
            </View>
            
            <View style = {styles.inputBox}>
                <AntDesign style = {styles.icon} name="lock" size={20} />
                <TextInput
                    style = {styles.input}
                    placeholder='PASSWORD'
                    value= {password}
                    onChangeText={(e) => setPassword(e)}
                    secureTextEntry 
                />
            </View>
            <Pressable onPress={forgotPwd}>
                    <Text style = {styles.pwdRecover}>Forgot Password</Text>
            </Pressable>

            {/*Insert pressable button to submit form*/}
            <Pressable onPress={handleLogin}>
                <View style = {styles.btnContainer}>
                    <Text>LOGIN</Text>
                    <AntDesign name="arrowright" size={24} color="black" paddingLeft= {10}/>
                </View>
            </Pressable>
                
        </View>

        {/*if user has not account already here is link for signup*/}
        <View style = {styles.signInContainer}>
            <Text>Don't have an account? </Text>
            <Pressable onPress={redirectSignUp}>
                <Text style = {styles.signInText}>Sign up</Text>
            </Pressable>
        </View>
        
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
        flexDirection:'column',
        backgroundColor:"white",
        justifyContent:'center'    
    },
    imageContainer:{
        flex:1,
        flexDirection:'row'
    },
    image:{
        position: "absolute"
    },
    heading:{
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 8
    },
    headingDescription:{
        color: "dimgray",
        marginBottom: 20
    },
    inputBox:{
        marginBottom: 10,
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical:10,
        width:"100%",
        backgroundColor: "white",
        elevation: 3,
        borderRadius:10
                
    },
    icon:{
        color: "darkgray"
    },
    input:{
        width:"90%"
    },
    btnContainer:{
        flexDirection:"row",
        width:150,
        alignSelf: "flex-end",
        padding:15,
        backgroundColor: "#FFA500",
        borderRadius:10,
        elevation: 3,
        alignItems: "center",
        justifyContent:"center"
    },
    signInContainer: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:"flex-end"
    },
    signInText:{
        color:"#FFA500"
    },
    pwdRecover:{
        textDecorationLine: 'underline',
        color:"dimgray"
    }

})

