import { useEffect } from "react";
import { getCep } from "./service/api";
import "./CharacterCard/index";
import "./style.css";

function App() {


  useEffect (() => {
    getCep(0)
  },);

  return (
    <div className="container">
     <div className="card">
            <h1 className="intro"> Se Localizer </h1>
            <input className="palce" type="text" placeholder="    Digite seu CEP: "/>
        </div>
    </div>
    
);
}

export default App;

