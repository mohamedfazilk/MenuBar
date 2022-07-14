import React from 'react'

const  menu = ({menuitems})  => {
  return (
      <div className="section-center">
          {menuitems.map((singleitem)=>{
              const{id,title,price,img,desc,category} = singleitem
              return ( 
              <article key={id} className='menu-item'>
                  <img src={img} alt={title} className='photo' />
                  <div className="item-info">
                      <header>
                          <h4>{title}</h4>
                          <h4 className='price'>{price}</h4>
                      </header>
                      <p className='item-text'>{desc}</p>
                  </div>



              </article>
              );
          })}
      </div>
  )
}

export default menu