import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import SignUp from './pages/signUp';
import Main from './pages/Main';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>SIGNLY</Text>
      <StatusBar style="auto" />
      <View style={styles.inputs} >
      <TextInput placeholderTextColor={"#A0A0A0"} placeholder='Username' style={styles.inputText} />
      <TextInput placeholderTextColor={"#A0A0A0"} placeholder='Password' style={styles.inputText2} />
      </View>

      <View style={styles.btnView}>
        <TouchableOpacity onPress={() => <SignUp />} style={styles.btnSignIn}>
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
        <View style={{display: "flex", justifyContent: "center", paddingTop: 10}}>
          <Text style={{color: "#A0A0A0", fontSize: 17}}>Not an existing user?  <Text style={{color: "white", fontWeight: "800"}}>Sign up</Text> </Text>
        </View>
      </View>

      <View style={{flex: 1}}>
        <Text style={{color: "white", fontSize: 25}}>SIGNLY</Text>
      </View> */}
      {/* <SignUp /> */}
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: "white",
    fontSize: 50,
    marginTop: "70%"
    
  },
  inputText:{
    color: "white",
    fontSize: 23,
    marginVertical: 10,
    borderColor: "#282A2E",
    borderWidth: 1,
    borderRadius: 10,
    paddingRight: 150,
    paddingLeft: 40,
    paddingVertical: 10 ,
    backgroundColor: "#1A1C1E",
    marginTop: 50
  },
  inputText2:{
    color: "white",
    fontSize: 23,
    marginVertical: 10,
    borderColor: "#282A2E",
    borderWidth: 1,
    borderRadius: 10,
    paddingRight: 150,
    paddingLeft: 40,
    paddingVertical: 10 ,
    backgroundColor: "#1A1C1E",
    marginTop: 10
  },
  inputs:{
    flex: 1,
  },
  btnSignIn:{
    paddingVertical: 10,
    paddingHorizontal: 110,
    backgroundColor: "black",
    borderRadius: 10
  },
  btnText:{
    color: "white",
    fontSize: 20,
  },
  btnView:{
    flex: 1,
    display: "flex",
    alignItems: 'center',
    marginTop: "10%"
  }
});


