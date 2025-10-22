import {  Button } from "react-native";


export default function Home() { 
const rokuIp = "192.168.0.186";

     function goHome() {
    fetch(`http://${rokuIp}:8060/keypress/Home`, { method: "POST" });
  }

  return ( 
    <>
    <Button title="Home" onPress={goHome} /> 
    </>
  )
}