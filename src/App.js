import React,{useState} from "react";
import Header from "./componets/Header";
import { BrowserRouter } from "react-router-dom";
import Context from "./componets/Context";

const App=()=> {
  const [contextChange, setcontextChange]=useState("Hello")
  return (
    <BrowserRouter>
  <Context.Provider
        value={{
          contextChange
        }}>
    <Header/>
      <div>
        <button>Hello button render</button>
      </div>
      </Context.Provider>
      </BrowserRouter>
  );
}

export default App;
