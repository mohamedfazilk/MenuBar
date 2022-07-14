import React, { useState } from "react";
import Menu from './Menu'
import Categories from "./Categories";
import items from './data'

//iterating all categories from items array
//Set function avoid duplicate categories
//It shown as an object so we need an array
//passing all the categories and  a spread operator
const allCategories =['all',  ...new Set(items.map((item) => item.category))];
console.log(allCategories)

function App() {
  const [menuitems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) =>{
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category
    ===category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className='menu section'>
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu menuitems={menuitems}/>
      </section>
   
    </main>
  );
}

export default App;
