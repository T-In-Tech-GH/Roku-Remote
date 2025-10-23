import { View, Button } from "react-native";
import rokuIp from "./Components/config.js";
import Home from "./Components/goHome.jsx";
import Nav from "./Components/Nav.jsx";
import Media from "./Components/MediaButtons.jsx";

export default function App() {

  const power = () => { 
    fetch(`http://${rokuIp}:8060/keypress/Power`, { method: "POST" });
  }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Power" onPress={power} /> 
      <Home /> 
      <Nav /> 
      <Media />
    </View>
  );
}
