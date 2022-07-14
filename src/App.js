import React, { useState } from "react";
import Menu from './Menu'
import Categories from "./Categories";
import items from './data'

function App() {
  const [menuitems, setMenuItems] = useState(items);
  return (
    <main>
      <section className='menu section'>
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Menu menuitems={menuitems}/>
      </section>
   
    </main>
  );
}

export default App;
