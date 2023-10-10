import ReactDOM from 'react-dom/client';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text';
import About from './About';
import Projects from './Projects';
import Home from './Home';
function aboutme()
{
  let a=<About/>
  const main=ReactDOM.createRoot(document.getElementById('main'));
  main.render(a);

}
function proj()
{
  const main=ReactDOM.createRoot(document.getElementById('main'));
  main.render(<Projects/>);


}
function hom()
{
  const main=ReactDOM.createRoot(document.getElementById('main'));
  main.render(<Home/>);

}

function App() {
  return (
    <div>
      <div id="right">
        <button className="btn"onClick={hom}>Home</button>
        <button className="btn" onClick={aboutme}>About</button>
        <button className="btn"onClick={proj}>Projects</button>


      </div>
      <div id="main">

      </div>

    </div>
  );
}

export default App;
