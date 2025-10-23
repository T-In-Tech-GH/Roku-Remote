import {  Button } from "react-native";
import rokuIp from "./config.js";

export default function Home() { 

     function goHome() {
    fetch(`http://${rokuIp}:8060/keypress/Home`, { method: "POST" });
  }

  return ( 
    <>
    <Button title="Home" onPress={goHome} /> 
    </>
  )
}