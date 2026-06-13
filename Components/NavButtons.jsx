import { StyleSheet, View, Pressable, Text  } from "react-native";
import { dpad } from "./EcpNav.js";

export default function Nav() { 

  return ( 
    <>
    <View>
      <View style={styles.sDpad}>
      <Pressable onPress={dpad.up}> 
        <Text>Up</Text>
        </Pressable> 
        </View>
      <View style={styles.mDpad}>
      <Pressable onPress={dpad.left}> 
        <Text>Left</Text>
      </Pressable>
      <Pressable onPress={dpad.select}> 
        <Text>Ok</Text>
      </Pressable>
      <Pressable onPress={dpad.right}> 
        <Text>Right</Text>
      </Pressable>
      </View>
       <View style={styles.sDpad}>
        <Pressable onPress={dpad.down}> 
        <Text>Down</Text>
      </Pressable>
      </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({ 
  mDpad: { 
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  }, 
  sDpad: { 
    flexDirection: "column",
    padding: 40,
    alignItems: "center", 
    justifyContent: "space-between",
    marginBottom: 10
  }
})