import { View, Text, StyleSheet, TextInput,Image, TouchableOpacity } from "react-native"

export default function SignUp(){
    return(
        <View style = {styles.container_Sign}>
            <View style={styles.logo}>
                <Text style={styles.logo_txt}>SIGNLY</Text>
            </View>
            <View style={{flex: 1}}>
                 <TextInput style={styles.username} placeholderTextColor={"#A0A0A0"} placeholder="Username" />
            </View>

            <View style={styles.gender_selection}>
                <View style = {styles.gender}>
                {/* <View  style={styles.female}> */}
                <TouchableOpacity style={styles.female}>
                    <Text style={{color: "white", fontSize: 20, marginBottom: '10%'}}>Female</Text>
                    <Image  source={require("../assets/girl.png")} />
                </TouchableOpacity>
                {/* </View> */}

                {/* <View style={styles.male}> */}
                <TouchableOpacity style={styles.male}>
                    <Text style={{color: "white", fontSize: 20, marginBottom: '10%'}}>Male</Text>
                 <Image source={require("../assets/boy.png")} />
                 </TouchableOpacity>
                {/* </View> */}
                </View>
            </View>

            <View style={{flex: 2}}>
                 <TextInput style={styles.username} placeholderTextColor={"#A0A0A0"} placeholder="Password" />
                 <TouchableOpacity onPress={() => <SignUp />} style={styles.btnSignIn}>
                <Text style={styles.btnText}>Sign In</Text>
                </TouchableOpacity>

                <Text style={{color: "white", fontSize: 20, alignSelf: "center", marginTop: "5%"}}>Existing user? <Text style={{color: "white", fontSize: 20}}>Sign In</Text> </Text>

            </View>

            <View style={{flex: 1, display: "flex", justifyContent: "flex-end", marginBottom: "5%"}}>
                <Text style={{color: "white", fontSize: 22}}>SIGNLY</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container_Sign:{
        flex: 1,
        backgroundColor: "#1E1E1E",
        alignItems: 'center',
        justifyContent: "center"
    },
    logo_txt:{
        color: "white",
        fontSize: 40
    },
    logo:{
        flex: 1,
        marginTop: "30%"
    },
    username:{
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
    gender:{
        // flex: 1,
        display: "flex",
        // alignSelf: "",
        flexDirection: "row",
        // justifyContent: "space-between"
        // justifyContent: "flex-start"
    },
    female:{
        borderWidth: 1,
        borderColor: "#282A2E",
        backgroundColor: "#1A1C1E",
        borderRadius: 10,
        paddingTop: 15,
        paddingHorizontal: 10,
        marginHorizontal: "7%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    male:{
        borderWidth: 1,
        borderColor: "#282A2E",
        backgroundColor: "#1A1C1E",
        borderRadius: 10,
        paddingTop: 15,
        paddingHorizontal: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"

    },
    gender_selection:{
        flex: 1
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
      }
})