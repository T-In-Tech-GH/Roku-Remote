import { Button } from "react-native";

export default function Media() { 
 const rokuIp = "192.168.0.186";

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