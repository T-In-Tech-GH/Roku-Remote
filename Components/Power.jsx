import { Button } from "react-native";
import { rokuIp } from "./config.js";

export default function Power() { 

    function power() { 
  fetch(`http://${rokuIp}:8060/keypress/Power`, { method: "POST" });
  }

    return ( 
        <> 
        <Button title="Power" onPress={power} />
        </>
    )
}