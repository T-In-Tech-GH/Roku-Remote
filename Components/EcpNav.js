import { rokuIp } from "./config.js";


 const fetchCommand = (command) => { 
    return fetch(`http://${rokuIp}:8060/keypress/${command}`, { method: "POST" });
}

const appCommand = (num) => { 
  return fetch(`http://${rokuIp}:8060/launch/${num}`, { method: "POST" });
}

export const onBtn = { 
    power:  () => fetchCommand("Power"),
}

export const volume = { 
   volumeUp: () => fetchCommand("VolumeUp"),
   volumeDown: () => fetchCommand("VolumeDown"),
   volumeMute: () => fetchCommand("VolumeMute"),
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

export const appBtns = {
   netflix: () => appCommand("12"),
   disneyplus: () => appCommand("291097"),
   HBO: () => appCommand("61322"),
   hulu: () => appCommand("2285"),
}


const Ecp = {  dpad, playbackBtns, onBtn };
const Apps = { appBtns };

export default Ecp;
