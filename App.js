import { View, Button } from "react-native";
import { rokuIp } from "./Components/config.js";
import Home from "./Components/goHome.jsx";
import Nav from "./Components/NavButtons.jsx";
import Media from "./Components/MediaButtons.jsx";
import Power from "./Components/Power.jsx";

export default function App() {

  return (
    <View style={{ flex: 1,  justifyContent: "center", backgroundColor: "white", }}>
      <Power /> 
      <Home /> 
      <Nav /> 
      <Media />
    </View>
  );
}
