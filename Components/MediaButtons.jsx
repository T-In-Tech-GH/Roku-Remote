import { View, StyleSheet, Pressable, Text } from "react-native";
import { playbackBtns } from "./EcpNav.js";

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
  }
})
