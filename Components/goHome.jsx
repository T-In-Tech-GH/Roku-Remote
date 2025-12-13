import { Pressable, StyleSheet, Text, View } from "react-native";
import { dpad } from "./EcpNav.js";

export default function Home() { 


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
   gap: 20,
   justifyContent: "center",
   marginTop: 10,
   marginBottom: 10,
  }, 
})

