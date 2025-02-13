import { View, Text, TextInput, StyleSheet, Image, Pressable, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function SignupView() {
    // Get the device's width and height for responsive design
    const {width, height} = Dimensions.get("window")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    //function to execute after pressing submit button
    function handleRegister(){
        console.log(`Full name: ${username}, Email: ${email}, Password: ${password}, confirmPassword: ${confirmPassword}`)
        setUsername("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    //function to execute if user press arrow on top left corner
    function goBack(){
        console.log("Go back previous page")
    }

    //function to navigate to signIn page
    function redirectSignIn(){
        console.log("Redirect to signIn")
    }

  return (
    
    <View style = {styles.container}>
        {/*Main bar container*/}
        <View style ={styles.imageContainer}>

            {/*Insert clickable arrow to go back*/}
            <Pressable onPress={goBack}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
            
            {/*isert images*/}
            <Image source={require('../assets/images/circle2.jpg')} style={[styles.image, { width: width * 0.5, height: width * 0.5, top: -70, right: -50 }]} />
            <Image source={require('../assets/images/circle2.jpg')} style={[styles.image, { width: width * 0.4, height: width * 0.35, top: 120, right: 50 }]} />
            <Image source={require('../assets/images/circle2.jpg')} style={[styles.image, { width: width * 0.3, height: width * 0.3, top: 30, right: 160 }]} />
      
        </View>

        {/*Heading*/}
        <Text style = {styles.heading}>Create Account</Text>

        {/*wrap all inputText fiels inside one container*/}
        <View>
            {/*wrap icon and inputfield inside one container*/}
            <View style = {styles.inputBox}>
                {/*insert icon*/}
                <Feather style = {styles.icon} name="user" size={20} />
                <TextInput
                    style = {styles.input}
                    placeholder='FULL NAME'
                    value= {username}
                    onChangeText={(e) => setUsername(e)}
                />
            </View>
            
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
                    secureTextEntry = {true}
                />
            </View>

            <View style = {styles.inputBox}>
                <AntDesign style = {styles.icon} name="lock" size={20} />
                <TextInput
                    style = {styles.input}
                    placeholder='COMFIRM PASSWORD'
                    value={confirmPassword}
                    onChangeText={(e) => setConfirmPassword(e)}
                    secureTextEntry = {true}
                />
            </View>

            {/*Insert pressable button to submit form*/}
            <Pressable onPress={handleRegister}>
                <View style = {styles.btnContainer}>
                    <Text>SIGN UP</Text>
                    <AntDesign name="arrowright" size={24} color="black" paddingLeft= {10}/>
                </View>
            </Pressable>
                
        </View>

        {/*if user has account already here is link for signin*/}
        <View style = {styles.signInContainer}>
            <Text>Already gave an account? </Text>
            <Pressable onPress={redirectSignIn}>
                <Text style = {styles.signInText}>SIGN IN</Text>
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
        marginBottom: 25
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
        borderRadius:10,
        //for ios shadow
        shadowColor: "Darkgray", // iOS shadow
        shadowOffset: { width: 0, height: 4 },// Moves the shadow downward by 4 pixels, no horizontal shift.
        shadowOpacity: 0.3,//Controls how dark the shadow is 
        shadowRadius: 4//Blurs the shadow to make it softer
                
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
        alignSelf: "flex-end",//Positions button to the right.
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
        justifyContent:'center', //Centers the content horizontally
        alignItems:"flex-end" //Aligns content to the bottom.
    },
    signInText:{
        color:"#FFA500"
    }

})

