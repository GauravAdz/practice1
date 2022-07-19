import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
  <div className="Main_Page">
  <div className="nav">
    <h1 className="logo" id="Logo" onclick="{ChangeText}">Protech</h1>
    <ul className="nav-links">
      <li><a href="#">HOME</a></li>
      <li><a href="#">VIDEOS</a></li>
      <li><a href="#">CONTACTS</a></li>
      <li><a href="#">ABOUT HER</a></li>
    </ul>
  </div>
  <div className="content">
    <h1>BECOME A PROTECH-TOR</h1>
    <p>Subscribe to Pro-tech Gaming <br/> and Witness Top-Class Content From the Legend Himself !</p>
    <div>
      <button><span></span><a href="https://www.youtube.com/watch?v=OEmZR0nxuUY
        https://www.youtube.com/watch?v=OEmZR0nxuUY"  style={{textDecoration: 'none', color: 'white',}}>TRENDING  CONTENT</a></button>
      <button className= "youtube" type="button"><span className="yt"></span><a href="https://www.youtube.com/channel/UCVo0mSD2bHvHoe73yuoWPwQ/subscribe" style={{textDecoration: 'none', color: 'white',}}>SUBSCRIBE</a></button>

    </div>
  </div>
</div>
  );
}

export default App;
