import { rokuIp } from "./config.js";

 const fetchCommand = (command) => { 
    return fetch(`http://${rokuIp}:8060/keypress/${command}`, { method: "POST" });
}


export const onBtn = { 
    power:  () => fetchCommand("Power"),
}

export const dpad = { 
   home: () => fetchCommand("Home"),
   back: () => fetchCommand("Back"),
   up: () => fetchCommand("Up"),
   right: () => fetchCommand("Right"),
   down: () => fetchCommand("Down"),
   left: () => fetchCommand("Left"),
   select: () => fetchCommand("Select"),
}

export const playbackBtns = { 
   options: () => fetchCommand("Info"),
   play: () => fetchCommand("Play"),
   rewind: () => fetchCommand("Rev"),
   fastForward: () => fetchCommand("Fwd"),
   instantReplay: () => fetchCommand("InstantReplay"),
}


const Ecp = {  dpad, playbackBtns, onBtn }
export default Ecp;