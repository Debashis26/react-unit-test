import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";

function App() {
  return (
    <div >
     <BrowserRouter>
     <NavBar/>
		<Routes>
			<Route path="/" element={<Comp1/>} />
			<Route path="comp2" element={<Comp2 />} />
			<Route path="comp3" element={<Comp3 />} />
		</Routes>
	</BrowserRouter>
    </div>
  );
}

export default App;
