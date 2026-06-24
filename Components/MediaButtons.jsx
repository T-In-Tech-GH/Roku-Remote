import { View, StyleSheet, Pressable, Text } from "react-native";
import { playbackBtns, appBtns } from "./EcpNav.js";

export default function Media() { 


  return ( 
    <> 
      <View style={styles.topBtns}>
      <Pressable onPress={playbackBtns.instantReplay}> 
      <Text>Replay</Text>
    </Pressable>
    <Pressable onPress={playbackBtns.options}> 
      <Text>*</Text>
    </Pressable>
    </View>
    <View style={styles.btmBtns}>
    <Pressable onPress={playbackBtns.rewind}> 
      <Text>Rewind</Text>
    </Pressable>
    <Pressable onPress={playbackBtns.play}>
      <Text>Play</Text>
    </Pressable>
    <Pressable onPress={playbackBtns.fastForward}>
      <Text>Fast Forward</Text>
    </Pressable>
    </View>
    <View style={styles.appBtn}>
    <Pressable onPress={appBtns.netflix}> 
      <Text style={styles.netflixBtnColor}>Netflix</Text>
    </Pressable>
    <Pressable onPress={appBtns.disneyplus}> 
      <Text style={styles.disneyBtnColor}>Disney+</Text>
    </Pressable>
    <Pressable onPress={appBtns.HBO}>
      <Text style={styles.HBOBtnColor}>HBOMax</Text>
    </Pressable>
    </View>
    </>
  )
}

const styles = StyleSheet.create({ 
  topBtns: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 40,
  },
  btmBtns: { 
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    gap: 30,
    top: 20,
  },
  appBtn: { 
    flexDirection: "column",
    marginTop: 50,
    alignItems: "center",
    gap: 30,
    
  },
  netflixBtnColor: { 
    color: "red",
  },
  disneyBtnColor: { 
    color: "blue",
  },
  HBOBtnColor: { 
  color: "green",
  },
})
