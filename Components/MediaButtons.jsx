import { Button } from "react-native";
import { rokuIp } from "./config.js";

export default function Media() { 


 function play() {
    fetch(`http://${rokuIp}:8060/keypress/Play`, { method: "POST" });
  }
  
  function pause() { 
    fetch(`http://${rokuIp}:8060/keypress/Pause`, { method: "POST" });
  }







  return ( 
    <> 
    <Button title="Play" onPress={play} />
    <Button title="Pause" onPress={pause} /> 
    </>
  )
}