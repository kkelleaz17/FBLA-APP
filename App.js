import { StatusBar } from 'expo-status-bar';
import { Text, View,TouchableOpacity,Image } from 'react-native';
import React,{useState} from 'react'
import Logo_1 from './media/Logo_1.png'


import TermsScreen from './Screens/TermsScreen'
import SignUpSignIn from './Components/SignUpSignIn'
import MainMenu from './Screens/MainMenuScreen'
import styles from './Styles/AppStyles';
import Employees from './Screens/Employees';
import Post from './Screens/Post'




export default function App() {

  const [UserAuthTerms,SetTerms]=useState(false)

  const [UserName,SetUserName]=useState("");
  const [Password,SetPassword]=useState("");
 
  const [ScreenSign,SetSign] = useState(0)

  const RenderStartScreen =()=>{
    if(UserAuthTerms === false){
      return   <TermsScreen State={{UserAuthTerms,SetTerms}}/>
    }else if(UserAuthTerms === true && ScreenSign === 0){
      return (
        <View style={styles.Back}>  
         <Image source={Logo_1} style={styles.IMG}/>
         <TouchableOpacity onPress={()=>{SetSign(1)}}><Text style={styles.input_BTN} >Sign in</Text></TouchableOpacity>
         <TouchableOpacity onPress={()=>{SetSign(2)}}><Text style={styles.input_BTN} >Sign up</Text></TouchableOpacity>
        </View>
      )
    }else if(ScreenSign === 1){
      return <SignUpSignIn value = {1} State={{SetUserName,UserName,Password,SetPassword,SetSign,ScreenSign}}/>
    }else if(ScreenSign === 2){
      return <SignUpSignIn value = {2} State={{SetUserName,UserName,Password,SetPassword,SetSign,ScreenSign}}/>
    }else if(ScreenSign === 3){
      return <MainMenu State={SetSign}/>
    }else if(ScreenSign === 4){
      return <Employees State={SetSign}/>
    }else if(ScreenSign === 5){
      return <Post State={SetSign}/>
    }
  }


  return (
    <View>
    {RenderStartScreen()}
      <StatusBar style="light" />
    </View>
  );
}

