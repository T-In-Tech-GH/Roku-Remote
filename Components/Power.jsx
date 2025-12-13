import {StyleSheet, Text, View, Pressable} from "react-native";
import { onBtn } from "./EcpNav.js";

export default function Power() { 


    return ( 
        <> 
        <View style={styles.powerBtn}>
        <Pressable style={styles.powerBtnColor} onPress={onBtn.power}> 
          <Text style={styles.powerBtnColor}>Power</Text>
        </Pressable>
        </View>
        </>
    )
}

const styles = StyleSheet.create({ 
   powerBtn: { 
   padding: 12,
   justifyContent: "center",
   alignItems: "center",
   },
   powerBtnColor: { 
    color: "red",
   }
})