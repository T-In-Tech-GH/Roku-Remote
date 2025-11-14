import { Button } from "react-native";
import { rokuIp } from "./config.js";

export default function Home() { 

     function goHome() {
    fetch(`http://${rokuIp}:8060/keypress/Home`, { method: "POST" });
  }

  function goBack() { 
    fetch(`http://${rokuIp}:8060/keypress/Back`, {method: "POST"});
  }

  return ( 
    <>
    <Button title="Back" onPress={goBack} /> 
    <Button title="Home" onPress={goHome} /> 
    </>
  )
}