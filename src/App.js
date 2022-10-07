import logo from './logo.svg';
import './App.css';
import { useState } from "react";



function Children() {
  return (
    <>
      <div className="App">
     <div class="mapouter">
      <div class="gmap_canvas">
      <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=douz&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      <a href="https://123movies-to.org"></a>
      <br/>
      
      <a href="https://www.embedgooglemap.net">google maps for free</a>
    </div>
      </div>
    </div>
    </>
  );
}

function Parent() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleEnter = () => {
    setIsMouseOver(true);
  };

  const handleLeave = () => {
    setIsMouseOver(false);
  };
  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="hov4">
   <h2 style={{textAlign:"center",border:"solid rgb(218,165,32) ",borderRadius:"15px",width:"500px",marginLeft:"35%"}}>HOVER TO SEE MY HOME'S LOCATION</h2>
      {isMouseOver ? (
        <>
          <Children />
        </>
      ) : null}
    </div>
  );
}

export default function App() {
  return (
   
      <Parent/>
    
  );
}