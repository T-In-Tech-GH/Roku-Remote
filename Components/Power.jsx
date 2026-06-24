import {StyleSheet, Text, View, Pressable} from "react-native";
import { onBtn, volume } from "./EcpNav.js";

export default function Power() { 


    return ( 
        <> 
        <View style={styles.volumeBtns}> 
            <Pressable onPress={volume.volumeUp}> 
                <Text>+</Text>
            </Pressable>
            <Pressable onPress={volume.volumeDown}>
                <Text>-</Text>
            </Pressable>
            <Pressable onPress={volume.volumeMute}> 
                <Text>🔇</Text>
            </Pressable>
        </View>
        <View style={styles.powerBtn}>
        <Pressable onPress={onBtn.power}> 
          <Text style={styles.powerBtnColor}>Power</Text>
        </Pressable>
        </View>
        </>
    )
}

const styles = StyleSheet.create({ 
    volumeBtns: { 
    flexDirection: "column",
    marginBottom: 30,
    alignItems: "center",
    gap: 20,
    },
   powerBtn: { 
   padding: 12,
   justifyContent: "center",
   alignItems: "center",
   },
   powerBtnColor: { 
    color: "purple",
   }
})