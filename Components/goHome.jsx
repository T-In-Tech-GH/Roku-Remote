import { Pressable, StyleSheet, Text, View } from "react-native";
import { dpad } from "./EcpNav.js";

const Home = () => { 


  return ( 
    <>
    <View style={styles.topBtn}>
    <Pressable onPress={dpad.back}>
      <Text>Back</Text>
    </Pressable>
    <Pressable onPress={dpad.home}>
      <Text>Home</Text>
    </Pressable>
    </View>
    </>
  )
}

const styles = StyleSheet.create({ 
  topBtn: {
   flexDirection: "row",
   gap: 50,
   justifyContent: "center",
   marginTop: 25,
   marginBottom: 10,
  }, 
})

export default Home;