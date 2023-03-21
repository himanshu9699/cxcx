import {View, Text, StyleSheet, TouchableOpacity, Image, FlatList} from "react-native"

export default function Main(){

    const data = [
        {
            url: "",
            title: "The latest breaking news",
            image: "../assets/news_img.png"
        },
        {
            url: "",
            title: "The latest breaking news",
            image: "../assets/news_img.png"
        },
        {
            url: "",
            title: "The latest breaking news",
            image: "../assets/news_img.png"
        }
    ]

    return(
        <View style = {styles.container_Main}>
            <View style = {styles.navigation}>
                <View style={{alignItems: 'flex-start', paddingHorizontal: "25%"}}>
                <Text style={{color: "white", fontSize: 30}}>SIGNLY</Text>
                </View>

                <View style={{alignSelf: "center", paddingHorizontal: "26%"}}> 
                <Image style={{alignSelf: "center"}} source={require("../assets/user.png")} />
                </View>
            </View>

            <View style={styles.user_font}>
                <Text style={{color: "white", fontSize: 30}}>Hey, <Text style={{fontWeight: "800", fontSize: 40}}>Guest</Text></Text>
                <Text style={{color: "white", fontSize: 25}}>Sunday, March 11</Text>
            </View>
            {/* <Text style={{color: "white"}}>Hello</Text> */}

            <View style={styles.convert}>
                <Text style={{color: "#767B82"}}>EASY CONVERT</Text>

                <View style={styles.converter}>
                    <TouchableOpacity style={styles.visuals}>
                        <Text style={{color: "white", fontSize: 20, marginBottom: '10%'}}>To Visuals</Text>
                        <Image  source={require("../assets/visuals.png")} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.speech}>
                        <Text style={{color: "white", fontSize: 20, marginBottom: '10%'}}>To Speech</Text>
                        <Image  source={require("../assets/speech.png")} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.news}>
            <Text style={{color: "#767B82", marginBottom: "5%"}}>VISUAL NEWS</Text>

            <FlatList 
           
                data={data}
                renderItem={({item, key})=>{
                   return( <TouchableOpacity style={styles.news_block}>
                        {/* <Text style={{color: "white"}}>hello</Text> */}
                        <Image source={require("../assets/news_img.png")} />
                        <Text style={{color: "white"}}>{item.title}</Text>
                        <Image source={require("../assets/news.png")} />
                    </TouchableOpacity>
                   )
                }}
            >

            </FlatList>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container_Main:{
        flex: 1,
        backgroundColor: "#1E1E1E",
        alignItems: 'center',
        // justifyContent: "center",
        width: '100%'
    },
    navigation:{
        // display: 'flex',
        flexDirection: "row",
        // justifyContent: "",
        // justifyContent: "space-evenly",
        marginTop: "20%",
        // width: "100%",
        // justifyContent: "flex-end",

    },
    user_font:{
        display: "flex",
        alignSelf: "flex-start",
        marginLeft: "10%",
        marginTop: "10%"
    },
    convert:{
        flex: 1,
        marginTop: "8%",
        // marginBottom: "8%"
    },
    converter:{
        flexDirection: "row",
        marginTop: "7%"
    },
    visuals:{
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
    speech:{
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
    news:{
        flex: 1,
        // marginTop: '10%'
        // backgroundColor: "white",
        width: "80%",
        marginBottom: "20%"

    },
    news_block:{
        // backgroundColor: 'white'
        padding: 10,
        borderWidth: 1,
        borderColor: "#282A2E",
        marginBottom: "5%",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})