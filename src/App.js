
import './App.css';
import Button from 'react-bootstrap/Button';

import imageInSrc from "./imageInSrc.jpg"


function App() {
  return (

<div className="App">
<div style={{  maxWidth:"100vw" }}>

<h1 className="title red">Houssam Salah</h1>

<br/>

<img src={imageInSrc} alt ='imageInSrc' />

<br/>

<img src="/imageInPublic.jpg" alt ='imageInPublic' />

</div>

<video width="720" height="440" controls>

<source src="myVideo.mp4" type="video/mp4" />

 </video>
</div>
  );
}

export default App;
