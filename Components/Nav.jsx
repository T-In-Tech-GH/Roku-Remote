import { Button } from "react-native";

export default function Nav() { 
const rokuIp = "192.168.0.186";

const goLeft = ()  => { 
    fetch(`http://${rokuIp}:8060/keypress/Left`, {method: "POST"});
  };

  const goRight = () => {
     fetch(`http://${rokuIp}:8060/keypress/Right`, {method: "POST"});
  }

  const goUp = () => { 
    fetch(`http://${rokuIp}:8060/keypress/Up`, {method: "POST"});
  }

  const goDown = () => { 
    fetch(`http://${rokuIp}:8060/keypress/Down`, {method: "POST"});
  }

  const select = () => { 
        fetch(`http://${rokuIp}:8060/keypress/select`, { method: "POST" });
  }

  return ( 
    <>
    <Button title="Up" onPress={goUp} />
    <Button title="Down" onPress={goDown} /> 
    <Button title="Left" onPress={goLeft} />
    <Button title="Right" onPress={goRight} />
    <Button title="Ok" onPress={select} />  
    </>
  )
}

