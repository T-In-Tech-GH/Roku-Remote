import { View, StyleSheet, Pressable, Text } from "react-native";
import { rokuIp } from "./config.js";

export default function Media() { 


 function play() {
    fetch(`http://${rokuIp}:8060/keypress/Play`, { method: "POST" });
  }
  
  function rewind() { 
    fetch(`http://${rokuIp}:8060/keypress/Rewind`, { method: "POST" });
  }


  return ( 
    <> 
    <View style={styles}>
    <Pressable style={styles.color} title="Play" onPress={play} /> 
    <Pressable title="Rewind" onPress={rewind} />
    </View> 
    </>
  )
}

const styles = StyleSheet.create({ 
  container: { 
    color: "black",
    backgroundColor: "red",
  }
});