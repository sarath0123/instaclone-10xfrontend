import React from 'react'
import { useState,useEffect } from 'react';
import './Outer.css';
import Header from './Header';
import Slide from './Slide';




export default function Outer() {
  const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://instaclone-10xbackend.herokuapp.com/api/v1/posts")
          .then(res => res.json())
          .then((result) => {
            setItems(result.posts);
            }
          )
      }, [])
    console.log(items)
  return (<>
      <div className='headmain'>
        <Header/>
      </div>
      <section className='card-section'>
        {items.map((itemcontents)=>(
          <Slide itemcontents={itemcontents}/>
        ))}
      </section>
</>
  )
}